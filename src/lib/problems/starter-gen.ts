/**
 * Auto-generates language-specific starter code skeletons from a problem's
 * functionName and params. Used as a fallback when a problem doesn't ship
 * an explicit starter for a given language.
 *
 * The generated code is a syntactically valid stub the user can fill in.
 * Since execution for these languages falls back to JavaScript in the
 * browser sandbox, the starters are primarily for practice and familiarity.
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

function javaStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const paramList = params.map((p) => `Object ${p}`).join(', ');
  return `class ${className} {
    public Object ${fn}(${paramList}) {

    }
}`;
}

function cppStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const paramList = params.map((p) => `auto ${p}`).join(', ');
  return `class ${className} {
public:
    auto ${fn}(${paramList}) {

    }
};`;
}

function csharpStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const paramList = params.map((p) => `object ${p}`).join(', ');
  return `public class ${className} {
    public object ${fn}(${paramList}) {

    }
}`;
}

function goStarter(fn: string, params: readonly string[]): string {
  const paramList = params.map((p) => `${p} interface{}`).join(', ');
  return `func ${fn}(${paramList}) interface{} {

}`;
}

function rustStarter(fn: string, params: readonly string[]): string {
  const structName = capitalise(fn);
  const snakeName = toSnakeCase(fn);
  const paramList = params.map((p) => `${toSnakeCase(p)}: Vec<i32>`).join(', ');
  return `impl ${structName} {
    pub fn ${snakeName}(${paramList}) -> Vec<i32> {

    }
}`;
}

function kotlinStarter(fn: string, params: readonly string[]): string {
  const paramList = params.map((p) => `${p}: Any`).join(', ');
  return `fun ${fn}(${paramList}): Any {

}`;
}

function swiftStarter(fn: string, params: readonly string[]): string {
  const className = capitalise(fn);
  const paramList = params.map((p) => `_ ${p}: Any`).join(', ');
  return `class ${className} {
    func ${fn}(${paramList}) -> Any {

    }
}`;
}

function sqlStarter(_fn: string, _params: readonly string[]): string {
  return `-- Write your SQL query below\nSELECT`;
}

function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toSnakeCase(s: string): string {
  return s.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
