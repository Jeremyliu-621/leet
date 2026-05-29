import type { Problem } from '../types';

export const problem: Problem = {
  id: 'confusing-number',
  title: 'Confusing Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `A **confusing number** is a number that when rotated 180° becomes a **different** number with each digit valid.

When 0, 1, 6, 8, 9 are rotated 180° they become 0, 1, 9, 8, 6 respectively. If after rotation the number becomes different, it is a confusing number. If after rotation the number does not become different (e.g., 11 rotates to 11), or contains an invalid digit (2, 3, 4, 5, 7), return false.

Given an integer \`n\`, return \`true\` if it is a confusing number, or \`false\` otherwise.`,
  constraints: [
    '0 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 6',
      output: 'true',
      explanation: 'We get 9 after rotating 6, 9 ≠ 6.',
    },
    {
      input: 'n = 89',
      output: 'true',
      explanation: 'We get 68 after rotating 89, 68 ≠ 89.',
    },
    {
      input: 'n = 11',
      output: 'false',
      explanation: 'We get 11 after rotating 11, 11 == 11.',
    },
    {
      input: 'n = 25',
      output: 'false',
      explanation: 'We get an invalid number after rotating 25.',
    },
  ],
  hints: [
    'Map each valid digit to its rotated counterpart: 0→0, 1→1, 6→9, 8→8, 9→6. If any digit is not in this map, return false.',
    'Reverse the digit sequence and apply the map to each digit to get the rotated number.',
    'Compare the rotated number to the original. Return true only if they differ.',
  ],
  functionName: 'confusingNumber',
  params: ['n'],
  starterCode: {
    javascript: `function confusingNumber(n) {
  const rotMap = {0:0, 1:1, 6:9, 8:8, 9:6};
  const digits = String(n).split('').map(Number);
  // check validity and compute rotated
}`,
    typescript: `function confusingNumber(n: number): boolean {
  const rotMap: Record<number, number> = {0:0, 1:1, 6:9, 8:8, 9:6};
  const digits = String(n).split('').map(Number);
  // check validity and compute rotated
}`,
    python: `def confusingNumber(n):
    rot_map = {0:0, 1:1, 6:9, 8:8, 9:6}
    digits = [int(d) for d in str(n)]
    # check validity and compute rotated
    pass`,
  },
  visibleTests: [
    { args: [6], expected: true },
    { args: [89], expected: true },
    { args: [11], expected: false },
    { args: [25], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [1], expected: false },
    { args: [9], expected: true },
    { args: [8], expected: false },
    { args: [16], expected: true },
    { args: [88], expected: false },
    { args: [916], expected: false },
    { args: [100], expected: true },
    { args: [1000000], expected: true },
    { args: [968], expected: true },
  ],
};
