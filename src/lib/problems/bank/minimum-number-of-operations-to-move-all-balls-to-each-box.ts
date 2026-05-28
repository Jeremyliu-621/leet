import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-move-all-balls-to-each-box',
  title: 'Minimum Number of Operations to Move All Balls to Each Box',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You have \`n\` boxes. You are given a binary string \`boxes\` of length \`n\`, where \`boxes[i]\` is \`'0'\` if the \`i\`th box is **empty**, and \`'1'\` if it contains **one** ball.

In one operation, you can move **one** ball from a box to an adjacent box. Box \`i\` is adjacent to box \`j\` if \`abs(i - j) == 1\`.

Note that after doing so, there may be more than one ball in some boxes.

Return an array \`answer\` of size \`n\`, where \`answer[i]\` is the **minimum** number of operations needed to move all the balls to the \`i\`th box.

Each answer[i] is calculated considering the **initial** state of the boxes.`,
  constraints: [
    'n == boxes.length',
    '1 <= n <= 2000',
    'boxes[i] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 'boxes = "110"',
      output: '[1,1,3]',
      explanation: 'The answer for each box: box 0 receives the ball from box 1 (1 op). Box 1 already has a ball; move from box 0 (1 op). Box 2 needs the ball from box 0 (2 ops) and from box 1 (1 op) = 3.',
    },
    {
      input: 'boxes = "001011"',
      output: '[11,8,5,4,3,4]',
      explanation: 'Balls are at positions 2, 4, and 5. For box 0: |0-2|+|0-4|+|0-5|=11. For box 3: |3-2|+|3-4|+|3-5|=4.',
    },
  ],
  hints: [
    'For each position i, the answer is the sum of |i - j| for every j where boxes[j] = \'1\'.',
    'A brute-force O(n²) approach works: for each i, iterate all j and sum |i - j| when boxes[j] = \'1\'.',
    'For O(n): use two passes. Left-to-right: accumulate cost and count of balls seen so far. Right-to-left: same. Combine both passes.',
  ],
  functionName: 'minOperations',
  params: ['boxes'],
  starterCode: {
    javascript: `function minOperations(boxes) {

}`,
    typescript: `function minOperations(boxes: string): number[] {

}`,
    python: `def minOperations(boxes):
    pass`,
  },
  visibleTests: [
    { args: ['110'], expected: [1, 1, 3] },
    { args: ['001011'], expected: [11, 8, 5, 4, 3, 4] },
  ],
  hiddenTests: [
    { args: ['0'], expected: [0] },
    { args: ['1'], expected: [0] },
    { args: ['11'], expected: [1, 1] },
    { args: ['10000'], expected: [0, 1, 2, 3, 4] },
    { args: ['00001'], expected: [4, 3, 2, 1, 0] },
    { args: ['101'], expected: [2, 2, 2] },
    { args: ['1111'], expected: [6, 4, 4, 6] },
    { args: ['010'], expected: [1, 0, 1] },
  ],
};
