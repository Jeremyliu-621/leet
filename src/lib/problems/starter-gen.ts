/**
 * Auto-generates language-specific starter code skeletons from a problem's
 * functionName and params. Used as a fallback when a problem doesn't ship
 * an explicit starter for a given language.
 *
 * JS/TS/Python starters are passed through to their respective runtimes.
 * For JS-syntax-only languages (Java, C++, etc.), the starters are valid
 * JavaScript with a comment showing the equivalent signature in the target
 * language. This keeps them executable in the JavaScript sandbox while still
 * providing syntax-practice value.
 */
import type { SupportedLanguage } from '../types';

/** Generate a starter code skeleton for a language that lacks an explicit one. */
export function generateStarter(
  language: SupportedLanguage,
  functionName: string,
  params: readonly string[],
): string {
  switch (language) {
    case 'java':
      return javaStarter(functionName, params);
    case 'cpp':
      return cppStarter(functionName, params);
    case 'csharp':
      return csharpStarter(functionName, params);
    case 'go':
      return goStarter(functionName, params);
    case 'rust':
      return rustStarter(functionName, params);
    case 'kotlin':
      return kotlinStarter(functionName, params);
    case 'swift':
      return swiftStarter(functionName, params);
    case 'sql':
      return sqlStarter(functionName, params);
    default:
      return `function ${functionName}(${params.join(', ')}) {\n\n}`;
  }
}

// All starters below are valid JavaScript. The first line is a comment showing
// what the equivalent signature looks like in the target language.

function javaStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const javaParams = params.map((p) => `Object ${p}`).join(', ');
  const jsSig = params.join(', ');
  return `// Java: class ${className} { public Object ${fn}(${javaParams}) { ... } }
function ${fn}(${jsSig}) {

}`;
}

function cppStarter(fn: string, params: readonly string[]): string {
  const cppParams = params.map((p) => `auto ${p}`).join(', ');
  const jsSig = params.join(', ');
  return `// C++: auto ${fn}(${cppParams}) { ... }
function ${fn}(${jsSig}) {

}`;
}

function csharpStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const csParams = params.map((p) => `object ${p}`).join(', ');
  const jsSig = params.join(', ');
  return `// C#: class ${className} { public object ${fn}(${csParams}) { ... } }
function ${fn}(${jsSig}) {

}`;
}

function goStarter(fn: string, params: readonly string[]): string {
  const goParams = params.map((p) => `${p} interface{}`).join(', ');
  const jsSig = params.join(', ');
  return `// Go: func ${fn}(${goParams}) interface{} { ... }
function ${fn}(${jsSig}) {

}`;
}

function rustStarter(fn: string, params: readonly string[]): string {
  const snakeName = toSnakeCase(fn);
  const rustParams = params.map((p) => `${toSnakeCase(p)}: Vec<i32>`).join(', ');
  const jsSig = params.join(', ');
  return `// Rust: fn ${snakeName}(${rustParams}) -> Vec<i32> { ... }
function ${fn}(${jsSig}) {

}`;
}

function kotlinStarter(fn: string, params: readonly string[]): string {
  const ktParams = params.map((p) => `${p}: Any`).join(', ');
  const jsSig = params.join(', ');
  return `// Kotlin: fun ${fn}(${ktParams}): Any { ... }
function ${fn}(${jsSig}) {

}`;
}

function swiftStarter(fn: string, params: readonly string[]): string {
  const swiftParams = params.map((p) => `_ ${p}: Any`).join(', ');
  const jsSig = params.join(', ');
  return `// Swift: func ${fn}(${swiftParams}) -> Any { ... }
function ${fn}(${jsSig}) {

}`;
}

function sqlStarter(fn: string, params: readonly string[]): string {
  const jsSig = params.join(', ');
  return `// SQL practice — note the equivalent JS function runs the tests:
// SELECT ...
function ${fn}(${jsSig}) {

}`;
}

function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toSnakeCase(s: string): string {
  return s.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
