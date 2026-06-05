import { describe, it, expect } from 'vitest';
import { splitTopLevelArgs, parseLastExecutedInput } from '../src/pages/challenge/components/TerminalPanel';

describe('splitTopLevelArgs', () => {
  it('returns [] for empty/whitespace input', () => {
    expect(splitTopLevelArgs('')).toEqual([]);
    expect(splitTopLevelArgs('   ')).toEqual([]);
  });

  it('splits simple comma-separated scalars', () => {
    expect(splitTopLevelArgs('1, 2, 3')).toEqual(['1', '2', '3']);
  });

  it('does not split inside arrays', () => {
    expect(splitTopLevelArgs('[2,4,3], [5,6,4]')).toEqual(['[2,4,3]', '[5,6,4]']);
  });

  it('does not split inside nested arrays/objects', () => {
    expect(splitTopLevelArgs('[[1,2],[3,4]], {"a":1,"b":2}')).toEqual(['[[1,2],[3,4]]', '{"a":1,"b":2}']);
  });

  it('does not split on commas inside quoted strings', () => {
    expect(splitTopLevelArgs('"a,b,c", 9')).toEqual(['"a,b,c"', '9']);
  });

  it('handles escaped quotes inside strings', () => {
    expect(splitTopLevelArgs('"he said \\"hi, there\\"", 1')).toEqual(['"he said \\"hi, there\\""', '1']);
  });

  it('handles a single argument', () => {
    expect(splitTopLevelArgs('[1,2,3]')).toEqual(['[1,2,3]']);
  });
});

describe('parseLastExecutedInput', () => {
  it('pairs values with param names in order', () => {
    expect(parseLastExecutedInput('[2,4,3], [5,6,4]', ['l1', 'l2'])).toEqual([
      { name: 'l1', value: '[2,4,3]' },
      { name: 'l2', value: '[5,6,4]' },
    ]);
  });

  it('falls back to argN when there are more values than names', () => {
    expect(parseLastExecutedInput('1, 2, 3', ['a'])).toEqual([
      { name: 'a', value: '1' },
      { name: 'arg2', value: '2' },
      { name: 'arg3', value: '3' },
    ]);
  });

  it('returns [] for empty input', () => {
    expect(parseLastExecutedInput('', ['a', 'b'])).toEqual([]);
  });
});
