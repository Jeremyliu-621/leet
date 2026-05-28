#!/usr/bin/env tsx
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const { problems } = await import(join(ROOT, 'src/lib/problems/bank/index.ts'));

function inferType(val: unknown, depth = 0): string {
  if (val === null) return 'null';
  if (typeof val === 'boolean') return 'boolean';
  if (typeof val === 'number') return 'number';
  if (typeof val === 'string') return 'string';
  if (Array.isArray(val)) {
    if (val.length === 0) return 'unknown[]';
    const elemType = inferType(val[0], depth + 1);
    const allSame = val.every(v => inferType(v, depth + 1) === elemType);
    if (!allSame) {
      const types = [...new Set(val.map(v => inferType(v, depth + 1)))];
      return `(${types.join(' | ')})[]`;
    }
    return `${elemType}[]`;
  }
  return 'unknown';
}

function inferParamTypes(problem: any): string[] {
  const test = problem.visibleTests?.[0] ?? problem.hiddenTests?.[0];
  if (!test || !test.args) return problem.params.map(() => 'unknown');
  return test.args.map((arg: unknown) => inferType(arg));
}

function inferReturnType(problem: any): string {
  const test = problem.visibleTests?.[0] ?? problem.hiddenTests?.[0];
  if (!test) return 'unknown';
  return inferType(test.expected);
}

function buildTsStarter(problem: any): string {
  const paramTypes = inferParamTypes(problem);
  const returnType = inferReturnType(problem);
  const params = problem.params as string[];
  const typedParams = params.map((p: string, i: number) => `${p}: ${paramTypes[i] ?? 'unknown'}`).join(', ');
  const fn = problem.functionName as string;
  const jsStar = (problem.starterCode.javascript as string).trim();
  const bodyMatch = jsStar.match(/\{([\s\S]*)\}\s*$/);
  const body = bodyMatch ? bodyMatch[1] : '\n  \n';
  return `function ${fn}(${typedParams}): ${returnType} {${body}}`;
}

// Show a sample of 20 generated starters
const IDS = ['3sum', 'merge-intervals', 'word-search', 'number-of-islands', 'lru-cache', 'min-stack', 'binary-tree-level-order-traversal', 'coin-change', 'longest-palindromic-substring', 'maximum-subarray'];

for (const problem of problems) {
  if (problem.starterCode.typescript) continue;
  if (IDS.includes(problem.id)) {
    console.log(`\n--- ${problem.id} (${problem.difficulty}) ---`);
    console.log(buildTsStarter(problem));
  }
}
