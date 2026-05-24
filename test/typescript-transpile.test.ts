import { describe, it, expect } from 'vitest';
import { transform } from 'sucrase';

// Smoke tests that verify the sucrase TypeScript transform behaves correctly
// for the patterns users will write in algorithm problems.

function transpile(code: string): string {
  return transform(code, { transforms: ['typescript'] }).code;
}

describe('TypeScript → JavaScript transpilation (sucrase)', () => {
  it('strips function return type annotations', () => {
    const ts = `function add(a: number, b: number): number { return a + b; }`;
    const js = transpile(ts);
    expect(js).toContain('function add(a, b)');
    expect(js).not.toContain(': number');
  });

  it('strips variable type annotations', () => {
    const ts = `const seen: Map<number, number> = new Map();`;
    const js = transpile(ts);
    expect(js).toContain('const seen');
    expect(js).toContain('new Map()');
    expect(js).not.toContain(': Map<');
  });

  it('strips interface declarations', () => {
    const ts = `interface ListNode { val: number; next: ListNode | null; }
function reverseList(head: ListNode | null): ListNode | null { return head; }`;
    const js = transpile(ts);
    expect(js).not.toContain('interface ListNode');
    expect(js).toContain('function reverseList(head)');
  });

  it('strips type alias declarations', () => {
    const ts = `type Matrix = number[][];
function spiral(matrix: Matrix): number[] { return []; }`;
    const js = transpile(ts);
    expect(js).not.toContain('type Matrix');
    expect(js).toContain('function spiral(matrix)');
  });

  it('strips generic type parameters from functions', () => {
    const ts = `function identity<T>(x: T): T { return x; }`;
    const js = transpile(ts);
    expect(js).toContain('function identity(x)');
    expect(js).not.toContain('<T>');
  });

  it('strips type assertions (as)', () => {
    const ts = `const n = someVal as number;`;
    const js = transpile(ts);
    expect(js).toContain('const n = someVal');
    expect(js).not.toContain(' as number');
  });

  it('handles a realistic twoSum TypeScript solution', () => {
    const ts = `
function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp: number = target - nums[i]!;
    if (seen.has(comp)) return [seen.get(comp) as number, i];
    seen.set(nums[i]!, i);
  }
  return [];
}
`;
    const js = transpile(ts);
    // Compiles without throwing
    expect(js).toContain('function twoSum(nums, target)');
    // Should be executable JS
    const fn = new Function(`"use strict"; ${js}; return twoSum;`)() as (
      nums: number[],
      target: number,
    ) => number[];
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('throws on irrecoverably invalid TypeScript', () => {
    // A syntax error that sucrase cannot recover from
    expect(() => transpile('function (')).toThrow();
  });
});
