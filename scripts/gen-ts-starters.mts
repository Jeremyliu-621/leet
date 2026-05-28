#!/usr/bin/env tsx
/**
 * Auto-generates TypeScript starters for problems that only have a JS starter.
 * Uses test case args/expected to infer types.
 * Run: npx tsx scripts/gen-ts-starters.mts [--dry-run]
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// Import all problems
const { problems } = await import(join(ROOT, 'src/lib/problems/bank/index.ts'));

const DRY_RUN = process.argv.includes('--dry-run');

function inferType(val: unknown, depth = 0): string {
  if (val === null) return 'null';
  if (typeof val === 'boolean') return 'boolean';
  if (typeof val === 'number') return 'number';
  if (typeof val === 'string') return 'string';
  if (Array.isArray(val)) {
    if (val.length === 0) return 'unknown[]';
    // Sample first element
    const elemType = inferType(val[0], depth + 1);
    // Check if all elements are the same type
    const allSame = val.every(v => inferType(v, depth + 1) === elemType);
    if (!allSame) {
      // Mixed array — could be null | number etc.
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

  // Extract body from JS starter (everything between the first { and last })
  const jsStar = (problem.starterCode.javascript as string).trim();
  // Get the function body lines
  const bodyMatch = jsStar.match(/\{([\s\S]*)\}\s*$/);
  const body = bodyMatch ? bodyMatch[1] : '\n  \n';

  return `function ${fn}(${typedParams}): ${returnType} {${body}}`;
}

let updated = 0;
let skipped = 0;

for (const problem of problems) {
  if (problem.starterCode.typescript) {
    skipped++;
    continue;
  }

  const tsStarter = buildTsStarter(problem);

  // Find the file
  const filePath = join(ROOT, `src/lib/problems/bank/${problem.id}.ts`);
  let src: string;
  try {
    src = readFileSync(filePath, 'utf8');
  } catch {
    console.warn(`Skipping ${problem.id}: file not found`);
    skipped++;
    continue;
  }

  // Find the starterCode object and insert typescript field
  const jsStarterStr = problem.starterCode.javascript as string;
  const pythonStarterStr = problem.starterCode.python as string;

  // We need to insert typescript field. The safest way:
  // Find "javascript: " and add typescript before python OR after javascript if no python
  const newSrc = src.replace(
    /(\s+python:\s*[`'"])/,
    `\n    typescript: ${JSON.stringify(tsStarter)},\n$1`
  );

  if (newSrc === src) {
    // No python field, try to add after javascript closing
    // This is harder — skip for now and warn
    console.warn(`${problem.id}: Could not auto-insert TS starter (no python field found). Skipping.`);
    skipped++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`[DRY] Would update ${problem.id}`);
  } else {
    writeFileSync(filePath, newSrc, 'utf8');
    console.log(`Updated ${problem.id}`);
  }
  updated++;
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
