import type { Problem } from '../types';

export const problem: Problem = {
  id: 'integer-to-roman',
  title: 'Integer to Roman',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Roman numerals are represented by seven symbols:

| Symbol | Value |
|--------|-------|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are usually written largest to smallest left to right. However, when a smaller value precedes a larger value, it represents subtraction: **IV** = 4, **IX** = 9, **XL** = 40, **XC** = 90, **CD** = 400, **CM** = 900.

Given an integer \`num\`, convert it to a Roman numeral.`,
  constraints: [
    '1 <= num <= 3999',
  ],
  examples: [
    { input: 'num = 3749', output: '"MMMDCCXLIX"' },
    { input: 'num = 58', output: '"LVIII"', explanation: 'L = 50, V = 5, III = 3' },
    { input: 'num = 1994', output: '"MCMXCIV"', explanation: 'M = 1000, CM = 900, XC = 90, IV = 4' },
  ],
  hints: [
    'Build a table of (value, symbol) pairs in descending order, including the subtractive combinations: 1000→M, 900→CM, 500→D, 400→CD, 100→C, 90→XC, 50→L, 40→XL, 10→X, 9→IX, 5→V, 4→IV, 1→I.',
    'Greedily subtract the largest value that fits into `num`, appending the corresponding symbol each time.',
    `\`\`\`js
const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
let res = '';
for (let i = 0; i < vals.length; i++) {
  while (num >= vals[i]) { res += syms[i]; num -= vals[i]; }
}
return res;\`\`\``
  ],
  functionName: 'intToRoman',
  params: ['num'],
  starterCode: {
    javascript: 'function intToRoman(num) {\n  \n}\n',
    typescript: "function intToRoman(num: number): string {\n  \n}",

    python: 'def intToRoman(num):\n    pass\n',
  },
  visibleTests: [
    { args: [3749], expected: 'MMMDCCXLIX' },
    { args: [58], expected: 'LVIII' },
    { args: [1994], expected: 'MCMXCIV' },
  ],
  hiddenTests: [
    { args: [1], expected: 'I' },
    { args: [4], expected: 'IV' },
    { args: [9], expected: 'IX' },
    { args: [3999], expected: 'MMMCMXCIX' },
    { args: [400], expected: 'CD' },
    { args: [900], expected: 'CM' },
  ],
};
