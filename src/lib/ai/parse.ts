import type { AiHint, AiHintResponse, HintSeverity } from './types';

const SEVERITIES: ReadonlySet<string> = new Set<HintSeverity>(['info', 'suggestion', 'bug']);

/** Max hints we keep, to avoid an overwhelming wall of annotations. */
const MAX_HINTS = 12;

/**
 * Pull the model's text out of a Gemini generateContent response object.
 * Returns '' when the shape is unexpected (caller treats '' as empty).
 */
export function extractText(apiJson: unknown): string {
  if (typeof apiJson !== 'object' || apiJson === null) return '';
  const candidates = (apiJson as { candidates?: unknown }).candidates;
  if (!Array.isArray(candidates) || candidates.length === 0) return '';
  const parts = (candidates[0] as { content?: { parts?: unknown } })?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts
    .map((p) => (typeof (p as { text?: unknown }).text === 'string' ? (p as { text: string }).text : ''))
    .join('');
}

/**
 * Strip Markdown code fences and isolate the outermost JSON object, so we can
 * parse even when a model wraps its JSON in ```json … ``` or adds stray prose.
 */
function isolateJson(raw: string): string {
  let s = raw.trim();
  // Remove a leading ```json / ``` fence and trailing ```.
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const first = s.indexOf('{');
  const last = s.lastIndexOf('}');
  if (first !== -1 && last !== -1 && last > first) return s.slice(first, last + 1);
  return s;
}

function coerceSeverity(value: unknown): HintSeverity {
  return typeof value === 'string' && SEVERITIES.has(value) ? (value as HintSeverity) : 'info';
}

/**
 * Clamp a model-provided line number to a real 1-based line, or null.
 * `lineCount` is the number of lines in the user's code.
 */
function coerceLine(value: unknown, lineCount: number): number | null {
  if (value === null || value === undefined) return null;
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return null;
  const rounded = Math.round(n);
  if (rounded < 1) return null;
  return Math.min(rounded, Math.max(1, lineCount));
}

function coerceString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}

/**
 * Parse the model's raw text into a safe, validated AiHintResponse.
 * Never throws — returns a best-effort object, dropping malformed hints.
 *
 * @param raw       the model's text output
 * @param lineCount number of lines in the user's code (for clamping)
 */
export function parseHintResponse(raw: string, lineCount: number): AiHintResponse {
  let parsed: unknown;
  try {
    parsed = JSON.parse(isolateJson(raw));
  } catch {
    // Last resort: surface the raw text as a single summary so the user sees
    // *something* rather than a silent failure.
    return { summary: raw.trim().slice(0, 500) || 'No hint returned.', hints: [] };
  }

  const obj = (typeof parsed === 'object' && parsed !== null ? parsed : {}) as Record<string, unknown>;
  const summary = coerceString(obj.summary, '');
  const rawHints = Array.isArray(obj.hints) ? obj.hints : [];

  const hints: AiHint[] = [];
  for (const h of rawHints) {
    if (typeof h !== 'object' || h === null) continue;
    const rec = h as Record<string, unknown>;
    const title = coerceString(rec.title, '');
    const comment = coerceString(rec.comment, '');
    if (!title && !comment) continue;
    hints.push({
      line: coerceLine(rec.line, lineCount),
      severity: coerceSeverity(rec.severity),
      title: title || 'Hint',
      comment,
    });
    if (hints.length >= MAX_HINTS) break;
  }

  return { summary, hints };
}
