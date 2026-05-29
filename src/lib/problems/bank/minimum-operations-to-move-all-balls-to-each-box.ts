import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-move-all-balls-to-each-box',
  title: 'Minimum Number of Operations to Move All Balls to Each Box',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `You have \`n\` boxes. You are given a binary string \`boxes\` of length \`n\`, where \`boxes[i]\` is \`'0'\` if the \`i\`th box is **empty**, and \`'1'\` if it contains **one** ball.

In one operation, you can move **one** ball from a box to an adjacent box. Box \`i\` and box \`j\` are adjacent if \`|i - j| == 1\`.

Return an array \`answer\` of size \`n\`, where \`answer[i]\` is the **minimum** number of operations needed to move all balls to the \`i\`th box.

Each \`answer[i]\` is calculated considering the **initial** state of the boxes.`,
  constraints: [
    'n == boxes.length',
    '1 <= n <= 2000',
    "boxes[i] is either '0' or '1'",
  ],
  examples: [
    {
      input: 'boxes = "110"',
      output: '[1,1,3]',
      explanation:
        'To move all balls to box 0: ball at 1→0 (1 op). To box 1: ball at 0→1 (1 op). To box 2: ball at 0→2 (2) + ball at 1→2 (1) = 3.',
    },
    {
      input: 'boxes = "001011"',
      output: '[11,8,5,4,3,4]',
      explanation: 'Balls are at positions 2, 4, 5. For each target box sum the distances.',
    },
  ],
  hints: [
    'For each box i, the answer is the sum of |i - j| for all j where boxes[j] == "1".',
    'A two-pass O(n) approach: left pass accumulates cost from the left (balls at indices 0..i-1 moving right), right pass accumulates cost from the right.',
    'In the left pass, maintain `balls` (count so far) and `cost`. At each i: add cost, then cost += balls (each existing ball needs one more step to reach i+1), then count the current ball.',
  ],
  functionName: 'minOperations',
  params: ['boxes'],
  starterCode: {
    javascript: `function minOperations(boxes) {\n  \n}`,
    typescript: `function minOperations(boxes: string): number[] {\n  \n}`,
    python: `def minOperations(boxes):\n    `,
  },
  visibleTests: [
    { args: ['110'], expected: [1, 1, 3] },
    { args: ['001011'], expected: [11, 8, 5, 4, 3, 4] },
    { args: ['0'], expected: [0] },
  ],
  hiddenTests: [
    { args: ['110'], expected: [1, 1, 3] },
    { args: ['001011'], expected: [11, 8, 5, 4, 3, 4] },
    { args: ['0'], expected: [0] },
    { args: ['1'], expected: [0] },
    { args: ['11'], expected: [1, 1] },
    { args: ['000'], expected: [0, 0, 0] },
    { args: ['111'], expected: [3, 2, 3] },
    { args: ['10010'], expected: [3, 3, 3, 3, 5] },
  ],
};
