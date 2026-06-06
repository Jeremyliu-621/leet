// Current Gemini models reachable via the Generative Language REST API
// (`generateContent`). This is the single source of truth shared by the
// Settings dropdown, the storage default, and the runtime fallback so they
// never drift apart.
//
// Google retires older models on a rolling basis — `gemini-1.5-flash` and
// `gemini-2.0-flash` have both been shut down, and calling a retired model
// surfaces as an HTTP 404 from the API (see `fetchHints`). When that happens,
// update this list and bump `DEFAULT_GEMINI_MODEL`; `normalizeModel` then
// transparently migrates anyone still holding a dead id in storage.

export interface GeminiModelOption {
  value: string;
  label: string;
  description: string;
}

/** Selectable models, in display order. Keep the recommended default first. */
export const GEMINI_MODELS: ReadonlyArray<GeminiModelOption> = [
  {
    value: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    description: 'Fast and cheap. Recommended default.',
  },
  {
    value: 'gemini-2.5-flash-lite',
    label: 'Gemini 2.5 Flash-Lite',
    description: 'Lightest and fastest; lowest cost.',
  },
  {
    value: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Strongest reasoning; slower and pricier.',
  },
];

/** The model used on first run and as the fallback for retired ids. */
export const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';

const VALID_MODELS: ReadonlySet<string> = new Set(GEMINI_MODELS.map((m) => m.value));

/** True if `model` is a currently-offered, non-retired model id. */
export function isValidGeminiModel(model: string | null | undefined): boolean {
  return typeof model === 'string' && VALID_MODELS.has(model);
}

/**
 * Map a stored model id to a currently-valid one. Users who previously saved a
 * now-retired model (e.g. `gemini-1.5-flash`, `gemini-2.0-flash`) would
 * otherwise hit a 404 on every request; this upgrades them to the default.
 */
export function normalizeModel(model: string | null | undefined): string {
  return isValidGeminiModel(model) ? (model as string) : DEFAULT_GEMINI_MODEL;
}
