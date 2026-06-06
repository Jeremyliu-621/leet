export { fetchHints } from './gemini';
export type { FetchHintsParams } from './gemini';
export { buildHintRequestBody, buildUserContent, numberLines, MAX_CODE_CHARS, HINT_RESPONSE_SCHEMA } from './prompt';
export { parseHintResponse, extractText } from './parse';
export { AiError } from './types';
export type { AiHint, AiHintResponse, HintMode, HintSeverity, AiErrorCode } from './types';
export {
  GEMINI_MODELS,
  DEFAULT_GEMINI_MODEL,
  isValidGeminiModel,
  normalizeModel,
} from './models';
export type { GeminiModelOption } from './models';
