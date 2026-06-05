import type { SupportedLanguage } from '../types';

/**
 * A sample of a problem's first test case, used to infer human-readable types
 * for the stub's docstring (LeetCode-style `:type x: int` lines).
 */
export interface StubSample {
  /** Positional arguments, one per parameter. */
  args?: readonly unknown[];
  /** The expected return value (for `:rtype:`). */
  expected?: unknown;
}

/**
 * The problem bank stores each problem's `starterCode` as a *working reference
 * solution* — the bank-validation test suite runs it against the test cases to
 * prove they're correct. That solution must NEVER be shown to the user, or the
 * answer is given away on load.
 *
 * `stubifyStarter` turns a reference solution into a stub the user starts from:
 * it keeps the function signature (so the contract is clear) and replaces the
 * body. Python stubs use a LeetCode-style type docstring inferred from the test
 * sample; brace languages get an empty body. Pure; the only thing the challenge
 * editor should display.
 */
export function stubifyStarter(
  code: string,
  language: SupportedLanguage,
  functionName: string,
  params: readonly string[],
  sample?: StubSample,
): string {
  if (language === 'python') return pythonStub(code, functionName, params, sample);
  // JavaScript, TypeScript (and the JS-syntax-only languages, whose explicit
  // starters, when present, are valid JavaScript) all use brace bodies.
  return braceStub(code, language, functionName, params);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Infer a LeetCode-style Python type label from a runtime sample value. */
export function inferPythonType(value: unknown): string {
  if (value === null || value === undefined) return 'Any';
  if (typeof value === 'boolean') return 'bool';
  if (typeof value === 'number') return Number.isInteger(value) ? 'int' : 'float';
  if (typeof value === 'string') return 'str';
  if (Array.isArray(value)) {
    return value.length === 0 ? 'List[Any]' : `List[${inferPythonType(value[0])}]`;
  }
  if (typeof value === 'object') return 'Dict';
  return 'Any';
}

/**
 * Python: keep the `def …:` signature line and give it a type docstring
 * (`:type param: …` / `:rtype: …`) like LeetCode — no `pass`, no placeholder
 * comment. Types are inferred from the first test case when available.
 */
function pythonStub(
  code: string,
  functionName: string,
  params: readonly string[],
  sample?: StubSample,
): string {
  const lines = code.split('\n');
  const defRe = new RegExp(`^(\\s*)def\\s+${escapeRegExp(functionName)}\\s*\\(.*\\)\\s*(->.*)?:\\s*$`);

  let indent = '';
  let header: string[] = [`def ${functionName}(${params.join(', ')}):`];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i]!.match(defRe);
    if (m) {
      indent = m[1] ?? '';
      header = lines.slice(0, i + 1); // keep any class wrapper + the def line
      break;
    }
  }

  const bodyIndent = `${indent}    `;
  const args = sample?.args;
  const doc: string[] = [`${bodyIndent}"""`];
  params.forEach((p, i) => {
    const t = args && i < args.length ? inferPythonType(args[i]) : 'Any';
    doc.push(`${bodyIndent}:type ${p}: ${t}`);
  });
  const rtype = sample ? inferPythonType(sample.expected) : 'Any';
  doc.push(`${bodyIndent}:rtype: ${rtype}`);
  doc.push(`${bodyIndent}"""`);

  return [...header, ...doc].join('\n');
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
