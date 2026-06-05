// Types for the AI hint assistant.

/** How serious / spoiler-y a single hint is. */
export type HintSeverity = 'info' | 'suggestion' | 'bug';

/** The two interaction modes the bot supports. */
export type HintMode = 'nudge' | 'review';

/** One line-anchored hint from the assistant. */
export interface AiHint {
  /**
   * 1-based line number in the user's code this hint points at, or `null` for a
   * general (non-line) hint. Always clamped to a real line by the parser.
   */
  line: number | null;
  severity: HintSeverity;
  /** Short label, e.g. "Off-by-one risk". */
  title: string;
  /** The explanation / nudge — plain text, no spoilers in nudge mode. */
  comment: string;
}

/** A full assistant response: an overall nudge plus line-anchored hints. */
export interface AiHintResponse {
  /** A spoiler-free overall nudge / summary. */
  summary: string;
  hints: AiHint[];
}

/** Error categories surfaced by the Gemini client, for friendly UI messages. */
export type AiErrorCode = 'no-key' | 'auth' | 'rate-limit' | 'http' | 'network' | 'empty' | 'parse';

export class AiError extends Error {
  code: AiErrorCode;
  constructor(code: AiErrorCode, message: string) {
    super(message);
    this.name = 'AiError';
    this.code = code;
  }
}
