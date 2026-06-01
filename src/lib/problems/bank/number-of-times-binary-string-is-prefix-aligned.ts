import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-times-binary-string-is-prefix-aligned',
  title: 'Number of Times Binary String Is Prefix-Aligned',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You have a **1-indexed** binary string of length \`n\` where all bits are \`0\` initially. We will flip all the bits of this binary string one by one. You are given a **1-indexed** integer array \`flips\` where \`flips[i]\` indicates that the bit at index \`flips[i]\` will be flipped in the \`i\`th step.

A binary string is **prefix-aligned** if, after the \`i\`th step, the bits from position \`1\` to position \`i\` are all \`1\` — i.e., the first \`i\` positions are all set.

Return the number of times the binary string is **prefix-aligned** during the flipping process.

**Key insight:** After step \`i\`, the string is prefix-aligned if and only if the maximum index flipped so far equals \`i\`. Tracking the running maximum is sufficient.`,
  constraints: [
    '`n == flips.length`',
    '`1 <= n <= 5 * 10^4`',
    '\`flips\` is a permutation of the integers in the range \`[1, n]\`.',
  ],
  examples: [
    {
      input: 'flips = [3,2,4,1,5]',
      output: '2',
      explanation:
        'Step 1: flip 3 → "001". max=3, step=1. Not aligned. Step 2: flip 2 → "011". max=3, step=2. Not aligned. Step 3: flip 4 → "0111". max=4, step=3. Not aligned. Step 4: flip 1 → "1111". max=4, step=4. Aligned! Step 5: flip 5 → "11111". max=5, step=5. Aligned! Total = 2.',
    },
    {
      input: 'flips = [4,1,2,3]',
      output: '1',
      explanation:
        'Steps 1–3 leave gaps. Step 4 flips index 3 → max=4, step=4. Aligned! Total = 1.',
    },
  ],
  hints: [
    'You do not need to simulate the entire binary string. Just track the maximum index flipped so far.',
    'After step i, the string is prefix-aligned if and only if max(flips[0..i]) == i+1 (0-indexed) — meaning every index from 1 to i+1 has been flipped.',
    'Iterate through flips while maintaining a running max. Count steps where running max equals the current step index.',
  ],
  functionName: 'numTimesAllBlue',
  params: ['flips'],
  starterCode: {
    javascript: `function numTimesAllBlue(flips) {

}`,
    typescript: `function numTimesAllBlue(flips: number[]): number {

}`,
    python: `def numTimesAllBlue(flips):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 4, 1, 5]], expected: 2 },
    { args: [[4, 1, 2, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[2, 1, 4, 3]], expected: 2 },
    { args: [[1, 3, 2]], expected: 2 },
    { args: [[3, 1, 2]], expected: 1 },
    { args: [[2, 3, 4, 1, 5]], expected: 2 },
  ],
};
