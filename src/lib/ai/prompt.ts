import type { Problem } from '../problems/types';
import type { SupportedLanguage } from '../types';
import type { HintMode } from './types';

/** Hard cap on the code we send, to keep payloads small and costs predictable. */
export const MAX_CODE_CHARS = 8000;

/** Prefix each line with its 1-based number so the model can anchor hints. */
export function numberLines(code: string): string {
  const lines = code.split('\n');
  const width = String(lines.length).length;
  return lines.map((l, i) => `${String(i + 1).padStart(width, ' ')} | ${l}`).join('\n');
}

/** Truncate code to MAX_CODE_CHARS, marking the cut so the model knows. */
function clampCode(code: string): string {
  if (code.length <= MAX_CODE_CHARS) return code;
  return code.slice(0, MAX_CODE_CHARS) + '\n… (truncated)';
}

const SHARED_RULES = [
  'You are a coding-interview coach embedded in a code editor.',
  'Respond ONLY with JSON matching the provided schema. No prose outside the JSON.',
  'Anchor each hint to the exact 1-based line number shown in the gutter when it refers to a specific spot; use null for general hints.',
  'Keep each comment to 1–3 short sentences. Be specific and kind.',
  'NEVER output the full working solution or large code blocks. At most a tiny inline fragment (a few tokens) when unavoidable.',
].join(' ');

const MODE_INSTRUCTION: Record<HintMode, string> = {
  nudge:
    'MODE: NUDGE. The user is stuck and wants to make progress WITHOUT spoilers. Give Socratic, conceptual nudges toward the right approach (data structure, invariant, pattern). Do not point out bugs line-by-line; focus on direction. The summary should name the high-level technique to consider, phrased as a question or gentle pointer.',
  review:
    'MODE: REVIEW. Analyze the user\'s CURRENT code for correctness bugs, missed edge cases, and complexity problems. Anchor every concrete finding to the precise line. Explain WHAT is wrong and WHY, and nudge toward the fix — but do not rewrite their solution for them. The summary should give a one-line verdict (e.g. "Close — one edge case to handle").',
};

/** JSON schema passed to Gemini's responseSchema for structured output. */
export const HINT_RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    hints: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          line: { type: 'integer', nullable: true },
          severity: { type: 'string', enum: ['info', 'suggestion', 'bug'] },
          title: { type: 'string' },
          comment: { type: 'string' },
        },
        required: ['severity', 'title', 'comment'],
      },
    },
  },
  required: ['summary', 'hints'],
} as const;

function formatExamples(problem: Problem): string {
  if (problem.examples.length === 0) return '';
  return problem.examples
    .slice(0, 3)
    .map((ex, i) => {
      const expl = ex.explanation ? `\n  Explanation: ${ex.explanation}` : '';
      return `Example ${i + 1}:\n  Input: ${ex.input}\n  Output: ${ex.output}${expl}`;
    })
    .join('\n');
}

/** Build the human-readable user-content block sent to the model. */
export function buildUserContent(
  problem: Problem,
  code: string,
  language: SupportedLanguage,
  mode: HintMode,
): string {
  const constraints =
    problem.constraints.length > 0 ? `\nConstraints:\n- ${problem.constraints.join('\n- ')}` : '';
  const examples = formatExamples(problem);
  return [
    MODE_INSTRUCTION[mode],
    '',
    `PROBLEM: ${problem.title} (${problem.difficulty})`,
    '',
    problem.description,
    constraints,
    examples ? `\n${examples}` : '',
    '',
    `Function to implement: ${problem.functionName}(${problem.params.join(', ')})`,
    `Language: ${language}`,
    '',
    "USER'S CURRENT CODE (line numbers in the left gutter — reference these):",
    '```',
    numberLines(clampCode(code)),
    '```',
  ].join('\n');
}

/** The full request body for Gemini's generateContent endpoint. */
export function buildHintRequestBody(
  problem: Problem,
  code: string,
  language: SupportedLanguage,
  mode: HintMode,
): unknown {
  return {
    systemInstruction: {
      parts: [{ text: `${SHARED_RULES}` }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: buildUserContent(problem, code, language, mode) }],
      },
    ],
    generationConfig: {
      temperature: mode === 'review' ? 0.3 : 0.6,
      maxOutputTokens: 1024,
      responseMimeType: 'application/json',
      responseSchema: HINT_RESPONSE_SCHEMA,
    },
  };
}
