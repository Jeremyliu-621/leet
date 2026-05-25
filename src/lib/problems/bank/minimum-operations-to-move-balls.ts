import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-move-balls',
  title: 'Minimum Number of Operations to Move All Balls to Each Box',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You have \`n\` boxes. You are given a binary string \`boxes\` of length \`n\`, where \`boxes[i]\` is \`'0'\` if the \`i\`-th box is **empty**, and \`'1'\` if it contains **one ball**.

In one operation, you can move **one ball** from a box to an adjacent box. Box \`i\` is adjacent to box \`j\` if \`abs(i - j) == 1\`.

Return an array \`answer\` of size \`n\`, where \`answer[i]\` is the **minimum number of operations** needed to move all the balls to the \`i\`-th box.

Each \`answer[i]\` is calculated considering the **initial** state of the boxes.`,
  constraints: [
    'n == boxes.length',
    '1 <= n <= 2000',
    "boxes[i] is either '0' or '1'.",
  ],
  examples: [
    {
      input: 'boxes = "110"',
      output: '[1,1,3]',
      explanation: 'Balls at positions 0 and 1. To box 0: 0+1=1. To box 1: 1+0=1. To box 2: 2+1=3.',
    },
    {
      input: 'boxes = "001011"',
      output: '[11,8,5,4,3,4]',
      explanation: 'Balls at positions 2, 4, 5.',
    },
  ],
  hints: [
    'Brute-force O(n²): for each target box i, sum |i - j| for every j where boxes[j] == "1".',
    'O(n): do two linear passes. Left-to-right: accumulate total moves from balls on the left using a running count. Right-to-left: accumulate moves from balls on the right.',
    'Track `balls` = balls seen so far, `ops` = cumulative ops. At each i: answer[i] += ops; then balls += boxes[i]==="1"; ops += balls.',
  ],
  functionName: 'minOperations',
  params: ['boxes'],
  starterCode: {
    javascript: `function minOperations(boxes) {

}`,
    python: `def minOperations(boxes):
    pass`,
  },
  visibleTests: [
    { args: ['110'], expected: [1,1,3] },
    { args: ['001011'], expected: [11,8,5,4,3,4] },
  ],
  hiddenTests: [
    { args: ['1'], expected: [0] },
    { args: ['0'], expected: [0] },
    { args: ['10'], expected: [0,1] },
    { args: ['01'], expected: [1,0] },
    { args: ['11'], expected: [1,1] },
    { args: ['000'], expected: [0,0,0] },
    { args: ['111'], expected: [3,2,3] },
    { args: ['10010'], expected: [3,3,3,3,5] },
  ],
};
