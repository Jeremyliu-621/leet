import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-fixed-ratio',
  title: 'Count Substrings with Fixed Ratio',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'math'],
  description: `You are given a binary string \`s\` and two integers \`num1\` and \`num2\`. A binary string is a string consisting only of \`'0'\`s and \`'1'\`s.

A substring \`s[l..r]\` is said to have a **fixed ratio** if

$$\\frac{\\text{count}('0')}{\\text{count}('1')} = \\frac{\\text{num1}}{\\text{num2}}$$

In other words, \`count('0') * num2 == count('1') * num1\`.

Return the number of substrings of \`s\` that have a fixed ratio. Note that a valid substring must have at least one occurrence of each character required by the ratio (the substring cannot have zero zeros if \`num1 > 0\` or zero ones if \`num2 > 0\`).

Actually, the exact condition is: **the total number of substrings where** \`count('0') * num2 == count('1') * num1\`. A substring where both counts are \`0\` satisfies the equation trivially but contributes nothing useful — see constraints.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's[i] is either \'0\' or \'1\'.',
    '1 <= num1, num2 <= s.length',
    'num1 and num2 are coprime (gcd(num1, num2) == 1).',
  ],
  examples: [
    {
      input: 's = "0110011", num1 = 1, num2 = 2',
      output: '4',
      explanation: 'We need count(\'0\') * 2 == count(\'1\') * 1, i.e., ratio 1:2. Valid substrings: "011" (s[0..2]), "11001" is not valid (2z,3o: 2*2≠3*1). Using prefix sums there are exactly 4 valid substrings.',
    },
    {
      input: 's = "10101", num1 = 3, num2 = 1',
      output: '0',
      explanation: 'No substring has count(\'0\') * 1 == count(\'1\') * 3.',
    },
  ],
  hints: [
    'Use prefix sums. Let z[i] = number of \'0\'s in s[0..i-1] and o[i] = number of \'1\'s. The condition for s[l..r] becomes z[r+1]*num2 - o[r+1]*num1 == z[l]*num2 - o[l]*num1.',
    'Define key[i] = z[i]*num2 - o[i]*num1. For each index, count how many previous indices share the same key value.',
    'Use a hash map initialized with {0: 1} (the empty prefix), then scan left to right.',
  ],
  functionName: 'fixedRatio',
  params: ['s', 'num1', 'num2'],
  starterCode: {
    javascript: `function fixedRatio(s, num1, num2) {
  // your code here
}`,
    typescript: 'function fixedRatio(s: string, num1: number, num2: number): number {\n  // your code here\n}',
    python: `def fixedRatio(s, num1, num2):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['0110011', 1, 2], expected: 4 },
    { args: ['10101', 3, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0', 1, 1], expected: 0 },
    { args: ['01', 1, 1], expected: 1 },
    { args: ['0101', 1, 1], expected: 4 },
    { args: ['111', 1, 2], expected: 0 },
    { args: ['0011', 1, 1], expected: 2 },
    { args: ['00110', 2, 3], expected: 0 },
  ],
};
