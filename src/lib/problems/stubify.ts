import type { SupportedLanguage } from '../types';

/**
 * The problem bank stores each problem's `starterCode` as a *working reference
 * solution* — the bank-validation test suite runs it against the test cases to
 * prove they're correct. That solution must NEVER be shown to the user, or the
 * answer is given away on load.
 *
 * `stubifyStarter` turns a reference solution into a stub the user starts from:
 * it keeps the function signature (so the contract is clear) and replaces the
 * body with a "write your solution here" placeholder. It is pure and is the
 * only thing the challenge editor should display.
 */
export function stubifyStarter(
  code: string,
  language: SupportedLanguage,
  functionName: string,
  params: readonly string[],
): string {
  if (language === 'python') return pythonStub(code, functionName, params);
  // JavaScript, TypeScript (and the JS-syntax-only languages, whose explicit
  // starters, when present, are valid JavaScript) all use brace bodies.
  return braceStub(code, language, functionName, params);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Python: keep the `def …:` signature line, replace the body with `pass`. */
function pythonStub(code: string, functionName: string, params: readonly string[]): string {
  const lines = code.split('\n');
  // Match the signature line for this function, capturing its indentation.
  const defRe = new RegExp(`^(\\s*)def\\s+${escapeRegExp(functionName)}\\s*\\(.*\\)\\s*(->.*)?:\\s*$`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i]!.match(defRe);
    if (m) {
      const indent = m[1] ?? '';
      const bodyIndent = `${indent}    `;
      // Keep everything up to and including the signature line; stub the body.
      return [...lines.slice(0, i + 1), `${bodyIndent}# Write your solution here`, `${bodyIndent}pass`].join('\n');
    }
  }
  // Fallback: synthesize a clean signature from the metadata.
  return `def ${functionName}(${params.join(', ')}):\n    # Write your solution here\n    pass`;
}

/** JS/TS: keep the header up to the body's opening brace, then an empty body. */
function braceStub(
  code: string,
  language: SupportedLanguage,
  functionName: string,
  params: readonly string[],
): string {
  const braceIdx = code.indexOf('{');
  if (braceIdx !== -1) {
    const before = code.slice(0, braceIdx).trimEnd();
    // Only treat the brace as a function-body brace when the preceding text
    // ends like a signature ( `)`, `=>`, or a return type ending in `]`/`>` )
    // and actually names this function — guards against object-type params.
    const looksLikeHeader = /(\)|=>|\]|>)$/.test(before);
    if (looksLikeHeader && (before.includes(functionName) || before.includes('=>'))) {
      return `${before} {\n  // Write your solution here\n  \n}`;
    }
  }
  const ret = language === 'typescript' ? ': unknown' : '';
  return `function ${functionName}(${params.join(', ')})${ret} {\n  // Write your solution here\n  \n}`;
}
