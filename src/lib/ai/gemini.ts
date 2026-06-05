import type { Problem } from '../problems/types';
import type { SupportedLanguage } from '../types';
import { buildHintRequestBody } from './prompt';
import { extractText, parseHintResponse } from './parse';
import { AiError } from './types';
import type { AiHintResponse, HintMode } from './types';

function endpoint(model: string, apiKey: string): string {
  // The key is passed as a query param per Google's REST convention. It is the
  // user's own key, entered in Settings; it is never committed to the repo.
  return `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model,
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;
}

export interface FetchHintsParams {
  apiKey: string;
  model: string;
  problem: Problem;
  code: string;
  language: SupportedLanguage;
  mode: HintMode;
  signal?: AbortSignal;
}

/**
 * Call Gemini and return validated, line-anchored hints. Throws `AiError` with
 * a friendly category on any failure so the UI can show a helpful message.
 */
export async function fetchHints({
  apiKey,
  model,
  problem,
  code,
  language,
  mode,
  signal,
}: FetchHintsParams): Promise<AiHintResponse> {
  if (!apiKey) throw new AiError('no-key', 'No Gemini API key set.');

  const body = buildHintRequestBody(problem, code, language, mode);

  let res: Response;
  try {
    res = await fetch(endpoint(model, apiKey), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') throw err;
    throw new AiError('network', 'Could not reach Gemini. Check your connection.');
  }

  if (!res.ok) {
    if (res.status === 400 || res.status === 401 || res.status === 403) {
      throw new AiError('auth', 'Gemini rejected the API key (check it in Settings).');
    }
    if (res.status === 429) {
      throw new AiError('rate-limit', 'Gemini rate limit hit. Wait a moment and retry.');
    }
    throw new AiError('http', `Gemini error (HTTP ${res.status}).`);
  }

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new AiError('parse', 'Gemini returned a malformed response.');
  }

  const text = extractText(json);
  if (!text) throw new AiError('empty', 'Gemini returned an empty response.');

  const lineCount = code.split('\n').length;
  return parseHintResponse(text, lineCount);
}
