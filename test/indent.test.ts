import { describe, it, expect } from 'vitest';
import { normalizeIndentation } from '../src/lib/editor/indent';

describe('normalizeIndentation', () => {
  it('rescales a 4-space Python stub to 2 spaces', () => {
    const src = 'def maxProfit(k, prices):\n    # comment\n    pass\n';
    expect(normalizeIndentation(src, 2)).toBe(
      'def maxProfit(k, prices):\n  # comment\n  pass\n',
    );
  });

  it('rescales nested levels proportionally (4 -> 2)', () => {
    const src = 'def f():\n    for i in x:\n        pass\n';
    expect(normalizeIndentation(src, 2)).toBe('def f():\n  for i in x:\n    pass\n');
  });

  it('expands a 2-space snippet to 4 spaces', () => {
    const src = 'function f() {\n  return 0;\n}\n';
    expect(normalizeIndentation(src, 4)).toBe('function f() {\n    return 0;\n}\n');
  });

  it('expands nested 2-space levels to 4 (2,4 -> 4,8)', () => {
    const src = 'function f() {\n  if (x) {\n    go();\n  }\n}\n';
    expect(normalizeIndentation(src, 4)).toBe(
      'function f() {\n    if (x) {\n        go();\n    }\n}\n',
    );
  });

  it('returns input unchanged when already at target size', () => {
    const src = 'def f():\n    pass\n';
    expect(normalizeIndentation(src, 4)).toBe(src);
  });

  it('returns input unchanged when there is no indentation', () => {
    const src = 'x = 1\ny = 2\n';
    expect(normalizeIndentation(src, 2)).toBe(src);
  });

  it('leaves blank and whitespace-only lines untouched', () => {
    const src = 'def f():\n\n    pass\n';
    expect(normalizeIndentation(src, 2)).toBe('def f():\n\n  pass\n');
  });

  it('does not introduce trailing whitespace on empty lines', () => {
    const src = 'def f():\n    a()\n\n    b()\n';
    const out = normalizeIndentation(src, 2);
    expect(out).toBe('def f():\n  a()\n\n  b()\n');
    expect(out).not.toMatch(/ \n/); // no space-only line was created
  });

  it('leaves tab-indented lines alone', () => {
    const src = 'def f():\n\tpass\n';
    expect(normalizeIndentation(src, 2)).toBe(src);
  });

  it('preserves manual alignment spaces beyond the unit', () => {
    // Unit detected as 2; a 3-space line keeps its odd remainder space.
    const src = 'a:\n  b\n   c\n';
    expect(normalizeIndentation(src, 4)).toBe('a:\n    b\n     c\n');
  });

  it('preserves trailing content and the final newline', () => {
    const src = 'def f():\n    return 1';
    expect(normalizeIndentation(src, 2)).toBe('def f():\n  return 1');
  });

  it('handles an empty string', () => {
    expect(normalizeIndentation('', 2)).toBe('');
  });

  it('guards against a non-positive target size', () => {
    const src = 'def f():\n    pass\n';
    expect(normalizeIndentation(src, 0)).toBe(src);
  });

  it('keeps Windows CRLF carriage returns as line content', () => {
    const src = 'def f():\r\n    pass\r\n';
    expect(normalizeIndentation(src, 2)).toBe('def f():\r\n  pass\r\n');
  });
});
