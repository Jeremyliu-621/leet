import { describe, it, expect } from 'vitest';
import { stubifyStarter, inferPythonType } from '../src/lib/problems/stubify';

describe('inferPythonType', () => {
  it('maps scalars', () => {
    expect(inferPythonType(3)).toBe('int');
    expect(inferPythonType(3.5)).toBe('float');
    expect(inferPythonType('a')).toBe('str');
    expect(inferPythonType(true)).toBe('bool');
    expect(inferPythonType(null)).toBe('Any');
  });

  it('maps lists by element type, including nesting', () => {
    expect(inferPythonType([1, 2, 3])).toBe('List[int]');
    expect(inferPythonType(['a'])).toBe('List[str]');
    expect(inferPythonType([[1], [2]])).toBe('List[List[int]]');
    expect(inferPythonType([])).toBe('List[Any]');
  });
});

describe('stubifyStarter — python', () => {
  const sol = `def twoSum(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        if target - v in seen:
            return [seen[target - v], i]
        seen[v] = i
    return []`;

  it('emits a LeetCode-style type docstring with no pass or comment', () => {
    const out = stubifyStarter(sol, 'python', 'twoSum', ['nums', 'target'], {
      args: [[2, 7, 11], 9],
      expected: [0, 1],
    });
    expect(out).toBe(
      [
        'def twoSum(nums, target):',
        '    """',
        '    :type nums: List[int]',
        '    :type target: int',
        '    :rtype: List[int]',
        '    """',
      ].join('\n'),
    );
    expect(out).not.toContain('pass');
    expect(out).not.toContain('Write your solution');
  });

  it('does not leak any of the solution body', () => {
    const out = stubifyStarter(sol, 'python', 'twoSum', ['nums', 'target'], { args: [[1], 1], expected: [] });
    expect(out).not.toContain('enumerate');
    expect(out).not.toContain('seen');
  });

  it('defaults types to Any when no sample is provided', () => {
    const out = stubifyStarter('def f(a):\n    return a', 'python', 'f', ['a']);
    expect(out).toBe('def f(a):\n    """\n    :type a: Any\n    :rtype: Any\n    """');
  });

  it('preserves a class wrapper and its indentation', () => {
    const sol2 = `class Solution:\n    def f(self, a):\n        return a`;
    const out = stubifyStarter(sol2, 'python', 'f', ['self', 'a'], { args: [null, 5], expected: 5 });
    expect(out).toBe(
      [
        'class Solution:',
        '    def f(self, a):',
        '        """',
        '        :type self: Any',
        '        :type a: int',
        '        :rtype: int',
        '        """',
      ].join('\n'),
    );
  });

  it('falls back to a synthesized signature when no def matches', () => {
    expect(stubifyStarter('garbage', 'python', 'foo', ['x', 'y'], { args: [1, 'a'], expected: true })).toBe(
      'def foo(x, y):\n    """\n    :type x: int\n    :type y: str\n    :rtype: bool\n    """',
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
