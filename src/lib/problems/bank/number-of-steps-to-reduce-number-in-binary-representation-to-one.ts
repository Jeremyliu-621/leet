import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-steps-to-reduce-number-in-binary-representation-to-one',
  title: 'Number of Steps to Reduce a Number in Binary Representation to One',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given the binary representation of an integer as a string \`s\`, return the number of steps to reduce it to \`1\` under the following rules:

- If the current number is **even**, divide it by \`2\` (shift right: remove last digit).
- If the current number is **odd**, add \`1\` to it.

It is guaranteed that you can always reach one for all test cases.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of characters "0" or "1".',
    's[0] == "1".',
  ],
  examples: [
    {
      input: 's = "1101"',
      output: '6',
      explanation:
        '"1101" (13) → add 1 → "1110" (14) → div 2 → "111" (7) → add 1 → "1000" (8) → div 2 → "100" (4) → div 2 → "10" (2) → div 2 → "1" (1). Steps: 6.',
    },
    {
      input: 's = "10"',
      output: '1',
      explanation: '"10" (2) is even → divide by 2 → "1". Steps: 1.',
    },
    {
      input: 's = "1"',
      output: '0',
      explanation: 'Already 1. Steps: 0.',
    },
  ],
  hints: [
    'Simulate on the binary string. Process from the last character.',
    'A trailing 0 means even → remove it (1 step). A trailing 1 means odd → add 1 to it, which may carry (1 step).',
    'Track a carry bit as you process from right to left. Count one step per digit processed (except for the leading 1).',
  ],
  functionName: 'numSteps',
  params: ['s'],
  starterCode: {
    javascript: `function numSteps(s) {
  let steps = 0, carry = 0;
  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry;
    if (bit % 2 === 1) { steps += 2; carry = 1; }
    else { steps += 1; carry = bit >> 1; }
  }
  return steps + carry;
}`,
    typescript: `function numSteps(s: string): number {
  let steps = 0, carry = 0;
  for (let i = s.length - 1; i > 0; i--) {
    const bit = Number(s[i]) + carry;
    if (bit % 2 === 1) { steps += 2; carry = 1; }
    else { steps += 1; carry = bit >> 1; }
  }
  return steps + carry;
}`,
    python: `def numSteps(s):
    steps, carry = 0, 0
    for i in range(len(s) - 1, 0, -1):
        bit = int(s[i]) + carry
        if bit % 2 == 1:
            steps += 2
            carry = 1
        else:
            steps += 1
            carry = bit >> 1
    return steps + carry`,
  },
  visibleTests: [
    { args: ['1101'], expected: 6 },
    { args: ['10'], expected: 1 },
    { args: ['1'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['11'], expected: 3 },
    { args: ['100'], expected: 2 },
    { args: ['111'], expected: 4 },
    { args: ['1111111111111111111111111111111'], expected: 32 },
    { args: ['1000000000'], expected: 9 },
  ],
};
