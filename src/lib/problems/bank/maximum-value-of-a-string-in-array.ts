import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-a-string-in-array',
  title: 'Maximum Value of a String in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `The **value** of an alphanumeric string can be defined as:

- The **numeric** representation of the string in base 10, if it comprises of digits **only**.
- The **length** of the string, otherwise.

Given an array \`strs\` of alphanumeric strings, return the **maximum value** of any string in \`strs\`.`,
  constraints: [
    '1 <= strs.length <= 100',
    '1 <= strs[i].length <= 9',
    'strs[i] consists of only lowercase English letters and digits.',
  ],
  examples: [
    {
      input: 'strs = ["alic3","bob","3","4","00000"]',
      output: '5',
      explanation: '"alic3" contains a letter → value = length = 5. "bob" → length = 3. "3" → numeric = 3. "4" → numeric = 4. "00000" → numeric = 0. Maximum is 5.',
    },
    {
      input: 'strs = ["1","01","001","0001"]',
      output: '1',
      explanation: 'All digit-only strings. Numeric values: 1, 1, 1, 1. Maximum is 1.',
    },
  ],
  hints: [
    'For each string, determine whether it consists entirely of digit characters (0–9).',
    'If all digits: its value is its integer conversion (e.g. "007" → 7). Otherwise: its value is its length.',
    'Return the maximum value across all strings.',
  ],
  functionName: 'maximumValue',
  params: ['strs'],
  starterCode: {
    javascript: 'function maximumValue(strs) {\n  \n}\n',
    typescript: 'function maximumValue(strs: string[]): number {\n  \n}',
    python: 'def maximumValue(strs):\n    pass\n',
  },
  visibleTests: [
    { args: [['alic3', 'bob', '3', '4', '00000']], expected: 5 },
    { args: [['1', '01', '001', '0001']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['abc']], expected: 3 },
    { args: [['99']], expected: 99 },
    { args: [['z', '100']], expected: 100 },
    { args: [['a', 'b', 'c']], expected: 1 },
    { args: [['hello', '123', 'world']], expected: 123 },
    { args: [['9', '99', '999']], expected: 999 },
  ],
};
