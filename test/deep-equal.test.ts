import { describe, it, expect } from 'vitest';
import { deepEqual } from '../src/lib/judge/deep-equal';

describe('deepEqual', () => {
  it('compares primitives', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('a', 'a')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('a', 'b')).toBe(false);
    expect(deepEqual(0, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(true); // Pyodide converts Python None → undefined
    expect(deepEqual(1, '1')).toBe(false);
  });

  it('treats NaN as equal to NaN', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
    expect(deepEqual(NaN, 0)).toBe(false);
  });

  it('compares flat arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([], [])).toBe(true);
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });

  it('compares nested arrays', () => {
    expect(
      deepEqual(
        [
          [0, 1],
          [2, 3],
        ],
        [
          [0, 1],
          [2, 3],
        ],
      ),
    ).toBe(true);
    expect(
      deepEqual(
        [
          [0, 1],
          [2, 3],
        ],
        [
          [0, 1],
          [2, 4],
        ],
      ),
    ).toBe(false);
  });

  it('compares plain objects regardless of key order', () => {
    expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
  });

  it('compares nested objects and arrays of objects', () => {
    expect(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })).toBe(true);
    expect(deepEqual([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBe(true);
    expect(deepEqual([{ id: 1 }], [{ id: 2 }])).toBe(false);
  });

  it('distinguishes arrays from objects', () => {
    expect(deepEqual([], {})).toBe(false);
    expect(deepEqual({ 0: 'a', length: 1 }, ['a'])).toBe(false);
  });

  it('handles null/undefined equivalence in nested structures (Pyodide compat)', () => {
    expect(deepEqual([1, null, 3], [1, undefined, 3])).toBe(true);
    expect(deepEqual({ a: null }, { a: undefined })).toBe(true);
    expect(deepEqual([null, null], [undefined, undefined])).toBe(true);
  });

  it('handles empty objects and arrays', () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual([], [])).toBe(true);
    expect(deepEqual({}, [])).toBe(false);
  });

  it('handles deeply nested structures', () => {
    const a = { x: [{ y: [{ z: 1 }] }] };
    const b = { x: [{ y: [{ z: 1 }] }] };
    const c = { x: [{ y: [{ z: 2 }] }] };
    expect(deepEqual(a, b)).toBe(true);
    expect(deepEqual(a, c)).toBe(false);
  });

  it('rejects comparisons between primitives and objects', () => {
    expect(deepEqual(1, [1])).toBe(false);
    expect(deepEqual('a', { 0: 'a' })).toBe(false);
    expect(deepEqual(null, {})).toBe(false);
    expect(deepEqual(undefined, [])).toBe(false);
    expect(deepEqual(0, null)).toBe(false);
    expect(deepEqual(false, null)).toBe(false);
  });
});
