import type { Problem } from '../types';

export const problem: Problem = {
  id: 'roman-to-integer',
  title: 'Roman to Integer',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `Given a Roman numeral string \`s\`, convert it to an integer.

Roman numerals use these symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

**Subtractive notation:** When a smaller symbol appears before a larger one, it is subtracted. For example, \`IV = 4\`, \`IX = 9\`, \`XL = 40\`, \`XC = 90\`, \`CD = 400\`, \`CM = 900\`.

**Approach:** Scan left to right. If the current symbol's value is less than the next symbol's value, subtract it; otherwise add it.`,
  constraints: [
    '1 <= s.length <= 15',
    's contains only the characters I, V, X, L, C, D, M',
    'It is guaranteed that s is a valid roman numeral in the range [1, 3999]',
  ],
  examples: [
    {
      input: 's = "III"',
      output: '3',
      explanation: 'I + I + I = 3.',
    },
    {
      input: 's = "LVIII"',
      output: '58',
      explanation: 'L = 50, V = 5, III = 3.',
    },
    {
      input: 's = "MCMXCIV"',
      output: '1994',
      explanation: 'M = 1000, CM = 900, XC = 90, IV = 4.',
    },
  ],
  hints: [
    'Create a map of each Roman symbol to its integer value. Scan the string left to right. At each position, check if the current value is less than the next value — if so, subtract the current value; otherwise add it.',
    'When nums[i] < nums[i+1], the pair is a subtractive combination (e.g. IX=9): add (nums[i+1] - nums[i]) and skip both, or equivalently subtract nums[i] when processing it and add nums[i+1] normally.',
    '`const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}; let res=0; for(let i=0;i<s.length;i++){ const cur=map[s[i]], next=map[s[i+1]]??0; res+=cur<next?-cur:cur; } return res;`',
  ],
  functionName: 'romanToInt',
  params: ['s'] as readonly string[],
  starterCode: {
    javascript: 'function romanToInt(s) {\n  // your code here\n}\n',
    typescript: "function romanToInt(s: string): number {\n  // your code here\n}",

    python: 'def romanToInt(s: str) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['III'], expected: 3 },
    { args: ['LVIII'], expected: 58 },
    { args: ['MCMXCIV'], expected: 1994 },
  ],
  hiddenTests: [
    { args: ['I'], expected: 1 },
    { args: ['IV'], expected: 4 },
    { args: ['IX'], expected: 9 },
    { args: ['XL'], expected: 40 },
    { args: ['CD'], expected: 400 },
    { args: ['CM'], expected: 900 },
    { args: ['MMMDCCXLIX'], expected: 3749 },
  ],
};
