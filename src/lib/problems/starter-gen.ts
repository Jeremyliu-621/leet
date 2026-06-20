/**
 * Auto-generates a starter code skeleton from a problem's functionName and
 * params. Used as a fallback when a problem doesn't ship an explicit starter
 * for the selected language.
 *
 * All JS-syntax-only languages (Java, C++, etc.) execute as JavaScript in the
 * sandbox, so the generated starter is always a plain JS function declaration.
 */
import type { SupportedLanguage } from '../types';

/** Generate a starter code skeleton for a language that lacks an explicit one. */
export function generateStarter(
  _language: SupportedLanguage,
  functionName: string,
  params: readonly string[],
): string {
  return `function ${functionName}(${params.join(', ')}) {\n\n}`;
}
