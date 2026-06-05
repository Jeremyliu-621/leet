import { describe, it, expect } from 'vitest';
import { stubifyStarter } from '../src/lib/problems/stubify';

describe('stubifyStarter — python', () => {
  const sol = `def twoSum(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        if target - v in seen:
            return [seen[target - v], i]
        seen[v] = i
    return []`;

  it('keeps the signature and replaces the body with a placeholder + pass', () => {
    const out = stubifyStarter(sol, 'python', 'twoSum', ['nums', 'target']);
    expect(out).toBe('def twoSum(nums, target):\n    # Write your solution here\n    pass');
  });

  it('does not leak any of the solution body', () => {
    const out = stubifyStarter(sol, 'python', 'twoSum', ['nums', 'target']);
    expect(out).not.toContain('enumerate');
    expect(out).not.toContain('seen');
  });

  it('handles a return type annotation', () => {
    const sol2 = `def f(a) -> int:\n    return a + 1`;
    expect(stubifyStarter(sol2, 'python', 'f', ['a'])).toBe('def f(a) -> int:\n    # Write your solution here\n    pass');
  });

  it('preserves indentation for an indented (class-method) def', () => {
    const sol2 = `class Solution:\n    def f(self, a):\n        return a`;
    const out = stubifyStarter(sol2, 'python', 'f', ['self', 'a']);
    expect(out).toBe('class Solution:\n    def f(self, a):\n        # Write your solution here\n        pass');
  });

  it('falls back to a synthesized signature when no def matches', () => {
    expect(stubifyStarter('garbage', 'python', 'foo', ['x', 'y'])).toBe(
      'def foo(x, y):\n    # Write your solution here\n    pass',
    );
  });
});

describe('stubifyStarter — javascript / typescript', () => {
  const js = `function twoSum(nums, target) {
  const map = new Map();
  return [];
}`;

  it('keeps the JS signature and empties the body', () => {
    const out = stubifyStarter(js, 'javascript', 'twoSum', ['nums', 'target']);
    expect(out.startsWith('function twoSum(nums, target) {')).toBe(true);
    expect(out).toContain('// Write your solution here');
    expect(out).not.toContain('new Map');
    expect(out.trimEnd().endsWith('}')).toBe(true);
  });

  it('preserves TypeScript parameter and return types', () => {
    const ts = `function twoSum(nums: number[], target: number): number[] {
  return [];
}`;
    const out = stubifyStarter(ts, 'typescript', 'twoSum', ['nums', 'target']);
    expect(out).toContain('function twoSum(nums: number[], target: number): number[] {');
    expect(out).not.toContain('return [];');
  });

  it('handles arrow-function starters', () => {
    const arrow = `const f = (a, b) => {\n  return a + b;\n}`;
    const out = stubifyStarter(arrow, 'javascript', 'f', ['a', 'b']);
    expect(out).toContain('const f = (a, b) => {');
    expect(out).not.toContain('a + b');
  });

  it('falls back to a synthesized JS signature when there is no brace', () => {
    expect(stubifyStarter('not code', 'javascript', 'foo', ['x'])).toBe(
      'function foo(x) {\n  // Write your solution here\n  \n}',
    );
  });

  it('synthesizes a typed signature for TS fallback', () => {
    expect(stubifyStarter('nope', 'typescript', 'foo', ['x'])).toBe(
      'function foo(x): unknown {\n  // Write your solution here\n  \n}',
    );
  });
});
