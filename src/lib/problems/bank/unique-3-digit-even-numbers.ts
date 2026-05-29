import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-3-digit-even-numbers',
  title: 'Unique 3-Digit Even Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `You are given an integer array \`digits\`, where each element is a digit from **0** to **9**.

Your task is to find all the **unique** 3-digit even integers that can be formed using three elements from \`digits\`, using each element **at most once** (by index).

Return a sorted array of the unique 3-digit even integers.

A valid 3-digit integer must have a non-zero hundreds digit.`,
  constraints: [
    '`3 <= digits.length <= 100`',
    '`0 <= digits[i] <= 9`',
  ],
  examples: [
    {
      input: 'digits = [2,1,3,0]',
      output: '[102,120,130,132,210,230,302,310,312,320]',
      explanation: 'All 3-digit even numbers formable from one use of each index.',
    },
    {
      input: 'digits = [2,2,8,8,2]',
      output: '[222,228,282,288,822,828,882]',
      explanation: 'Using the available 2s and 8s. 888 requires three 8s but only two are available.',
    },
  ],
  hints: [
    'Iterate over all triples of distinct indices (i, j, k) and form the number `digits[i]*100 + digits[j]*10 + digits[k]`.',
    'A number is valid when hundreds digit `digits[i] != 0` and units digit `digits[k] % 2 == 0`.',
    'Collect valid numbers into a Set to deduplicate, then sort and return as an array.',
  ],
  functionName: 'findEvenNumbers',
  params: ['digits'],
  starterCode: {
    javascript: `function findEvenNumbers(digits) {

}`,
    typescript: `function findEvenNumbers(digits: number[]): number[] {

}`,
    python: `def findEvenNumbers(digits):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 0]], expected: [102, 120, 130, 132, 210, 230, 302, 310, 312, 320] },
    { args: [[2, 2, 8, 8, 2]], expected: [222, 228, 282, 288, 822, 828, 882] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [] },
    { args: [[1, 2, 3]], expected: [132, 312] },
    { args: [[0, 1, 2]], expected: [102, 120, 210] },
    { args: [[9, 9, 9]], expected: [] },
    { args: [[4, 4, 4]], expected: [444] },
    { args: [[1, 0, 2, 4]], expected: [102, 104, 120, 124, 140, 142, 204, 210, 214, 240, 402, 410, 412, 420] },
  ],
};
