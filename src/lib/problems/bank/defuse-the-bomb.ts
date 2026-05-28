import type { Problem } from '../types';

export const problem: Problem = {
  id: 'defuse-the-bomb',
  title: 'Defuse the Bomb',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You have a bomb to defuse, and your goal is to figure out the code. The code is the **sum of the next \`k\`** elements of a circular array \`code\`.

Given a circular array \`code\` of length \`n\` and an integer \`k\`, return the **decrypted code**:
- If \`k > 0\`, replace each element with the sum of the **next \`k\`** elements.
- If \`k < 0\`, replace each element with the sum of the **previous \`|k|\`** elements.
- If \`k === 0\`, replace each element with \`0\`.

The array is circular: the element after \`code[n-1]\` is \`code[0]\`.`,
  constraints: [
    'n == code.length',
    '1 <= n <= 100',
    '1 <= code[i] <= 100',
    '-(n - 1) <= k <= n - 1',
  ],
  examples: [
    {
      input: 'code = [5,7,1,4], k = 3',
      output: '[12,10,16,13]',
      explanation: 'Each element is replaced by the sum of the next 3 elements (wrapping around).',
    },
    {
      input: 'code = [1,2,3,4], k = 0',
      output: '[0,0,0,0]',
      explanation: 'k = 0 so all elements become 0.',
    },
    {
      input: 'code = [2,4,9,3], k = -2',
      output: '[12,5,6,13]',
      explanation: 'Each element is replaced by the sum of the previous 2 elements (wrapping around).',
    },
  ],
  hints: [
    'When k = 0, return an array of zeros immediately.',
    'For k > 0, result[i] = sum of code[(i+1) % n] through code[(i+k) % n].',
    'For k < 0, result[i] = sum of code[(i-1+n) % n] down to code[(i+k+n) % n].',
  ],
  starterCode: {
    javascript: `function decrypt(code, k) {
  // code: number[], k: integer
  // Return decrypted array
}`,
    typescript: "function decrypt(code: number[], k: number): number[] {\n  // code: number[], k: integer\n  // Return decrypted array\n}",

    python: `def decrypt(code: list[int], k: int) -> list[int]:
    # Your code here
    pass`,
  },
  functionName: 'decrypt',
  params: ['code', 'k'],
  visibleTests: [
    { args: [[5, 7, 1, 4], 3], expected: [12, 10, 16, 13] },
    { args: [[1, 2, 3, 4], 0], expected: [0, 0, 0, 0] },
    { args: [[2, 4, 9, 3], -2], expected: [12, 5, 6, 13] },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: [0] },
    { args: [[5], 1], expected: [5] },
    { args: [[5], -1], expected: [5] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [5, 7, 9, 6, 3] },
    { args: [[1, 2, 3, 4, 5], -2], expected: [9, 6, 3, 5, 7] },
    { args: [[10, 20, 30], 1], expected: [20, 30, 10] },
    { args: [[10, 20, 30], -1], expected: [30, 10, 20] },
  ],
};
