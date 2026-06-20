import { describe, it, expect } from 'vitest';
import { generateStarter } from '../src/lib/problems/starter-gen';

describe('generateStarter', () => {
  const fn = 'twoSum';
  const params = ['nums', 'target'] as const;

  it('generates a JS function declaration for every language', () => {
    const langs = [
      'javascript',
      'typescript',
      'python',
      'java',
      'cpp',
      'csharp',
      'go',
      'rust',
      'kotlin',
      'swift',
      'sql',
    ] as const;
    for (const lang of langs) {
      const code = generateStarter(lang, fn, params);
      expect(code, `${lang} starter`).toBe('function twoSum(nums, target) {\n\n}');
    }
  });

  it('handles zero-parameter functions correctly', () => {
    const code = generateStarter('java', 'solve', []);
    expect(code).toBe('function solve() {\n\n}');
  });

  it('handles single-parameter functions correctly', () => {
    const code = generateStarter('java', 'findMax', ['arr']);
    expect(code).toBe('function findMax(arr) {\n\n}');
  });
});
