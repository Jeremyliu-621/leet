import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-a-special-number',
  title: 'Minimum Operations to Make a Special Number',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given a **0-indexed** string \`num\` representing a non-negative integer.

In one operation, you can pick any digit of \`num\` and **delete** it. Note that if you delete all the digits of \`num\`, \`num\` becomes \`0\`.

Return the **minimum** number of operations to make \`num\` **special**.

An integer \`x\` is **special** if it is **divisible by 25**.`,
  constraints: [
    '1 <= num.length <= 9',
    'num only consists of digits 0-9',
    'num does not have any leading zeros',
  ],
  examples: [
    {
      input: 'num = "2245047"',
      output: '2',
      explanation: 'Delete digits at index 5 and 4 to get "22450". Wait — better: delete to get "...50": digits are 2,2,4,5,0,4,7. The "50" ending: rightmost \'0\' at index 4, rightmost \'5\' before it at index 3 → delete chars at indices 5 and 6 (2 deletions) to get "22450" which ends in 50. 22450/25 = 898. ✓',
    },
    {
      input: 'num = "2908305"',
      output: '3',
      explanation: 'Target "00": rightmost \'0\' at index 5, previous \'0\' at index 2. Delete chars at indices 3, 4, 6 (3 deletions) to get "2900". 2900/25 = 116. ✓',
    },
    {
      input: 'num = "10"',
      output: '1',
      explanation: 'Delete \'1\' to get "0". 0 is divisible by 25.',
    },
  ],
  hints: [
    'A number is divisible by 25 if and only if its last two digits form one of: 00, 25, 50, 75 (or the number is 0 itself).',
    'For each valid two-digit ending (00, 25, 50, 75), try to find the rightmost occurrence of the second digit, then the rightmost occurrence of the first digit before it. Deletions = (chars after last digit) + (chars between the two digits).',
    'Also consider the case where we delete all digits except one \'0\' to get the number 0. Take the minimum across all possibilities.',
  ],
  functionName: 'minimumOperations',
  params: ['num'],
  starterCode: {
    javascript: `function minimumOperations(num) {

}`,
    typescript: `function minimumOperations(num: string): number {

}`,
    python: `def minimumOperations(num):
    pass`,
  },
  visibleTests: [
    { args: ['2245047'], expected: 2 },
    { args: ['2908305'], expected: 3 },
    { args: ['10'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['25'], expected: 0 },
    { args: ['1250'], expected: 0 },
    { args: ['109'], expected: 2 },
    { args: ['3425'], expected: 0 },
    { args: ['100'], expected: 0 },
    { args: ['50'], expected: 0 },
  ],
};
