import { describe, it, expect } from 'vitest';
import { generateStarter } from '../src/lib/problems/starter-gen';

describe('generateStarter', () => {
  const fn = 'twoSum';
  const params = ['nums', 'target'] as const;

  // All JS-syntax-only starters must be valid JavaScript (contain a function
  // declaration with the correct name) plus a comment with the target language signature.

  it('generates a valid-JS Java starter with language comment', () => {
    const code = generateStarter('java', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// Java:');
    expect(code).toContain('Object nums');
    expect(code).toContain('Object target');
  });

  it('generates a valid-JS C++ starter with language comment', () => {
    const code = generateStarter('cpp', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// C++:');
    expect(code).toContain('auto twoSum');
    expect(code).toContain('auto nums');
  });

  it('generates a valid-JS C# starter with language comment', () => {
    const code = generateStarter('csharp', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// C#:');
    expect(code).toContain('object twoSum');
  });

  it('generates a valid-JS Go starter with language comment', () => {
    const code = generateStarter('go', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// Go:');
    expect(code).toContain('func twoSum');
    expect(code).toContain('nums interface{}');
  });

  it('generates a valid-JS Rust starter with language comment', () => {
    const code = generateStarter('rust', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// Rust:');
    expect(code).toContain('two_sum');
  });

  it('generates a valid-JS Kotlin starter with language comment', () => {
    const code = generateStarter('kotlin', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// Kotlin:');
    expect(code).toContain('fun twoSum');
    expect(code).toContain('nums: Any');
  });

  it('generates a valid-JS Swift starter with language comment', () => {
    const code = generateStarter('swift', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('// Swift:');
    expect(code).toContain('func twoSum');
  });

  it('generates a valid-JS SQL starter with SELECT comment', () => {
    const code = generateStarter('sql', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
    expect(code).toContain('SELECT');
  });

  it('falls back to JS-style for javascript', () => {
    const code = generateStarter('javascript', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
  });

  it('all JS-syntax-only starters contain a top-level function declaration', () => {
    const jsCompiled = ['java', 'cpp', 'csharp', 'go', 'rust', 'kotlin', 'swift', 'sql'] as const;
    for (const lang of jsCompiled) {
      const code = generateStarter(lang, fn, params);
      expect(code, `${lang} starter should have a JS function declaration`).toContain(
        `function ${fn}(${params.join(', ')})`,
      );
    }
  });

  it('handles zero-parameter functions correctly', () => {
    const jsCompiled = ['java', 'cpp', 'csharp', 'go', 'rust', 'kotlin', 'swift', 'sql', 'javascript'] as const;
    for (const lang of jsCompiled) {
      const code = generateStarter(lang, 'solve', []);
      expect(code, `${lang} zero-param starter`).toContain('function solve()');
    }
  });

  it('handles single-parameter functions correctly', () => {
    const code = generateStarter('java', 'findMax', ['arr']);
    expect(code).toContain('function findMax(arr)');
    expect(code).toContain('Object arr');
  });

  it('converts camelCase to snake_case for Rust', () => {
    const code = generateStarter('rust', 'longestSubstring', ['inputStr']);
    expect(code).toContain('longest_substring');
    expect(code).toContain('input_str');
  });

  it('capitalises class name for Java and C#', () => {
    const javaCode = generateStarter('java', 'maxProfit', ['prices']);
    expect(javaCode).toContain('MaxProfit');
    const csCode = generateStarter('csharp', 'maxProfit', ['prices']);
    expect(csCode).toContain('MaxProfit');
  });

  it('generates valid TypeScript starter (same as JS)', () => {
    const code = generateStarter('typescript', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
  });

  it('generates valid Python starter (same as JS fallback)', () => {
    const code = generateStarter('python', fn, params);
    expect(code).toContain('function twoSum(nums, target)');
  });
});
