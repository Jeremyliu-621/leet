import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-the-rectangle',
  title: 'Construct the Rectangle',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `For a web developer, it is very important to know the size of a web page.

Given a specific rectangular web page's area, your job is to design a rectangular web page whose length \`L\` and width \`W\` satisfy the following requirements:

1. The area of the rectangular web page you designed must equal to the given target area.
2. The width \`W\` should not be larger than the length \`L\`, which means \`L >= W\`.
3. The difference between length \`L\` and width \`W\` should be as small as possible.

Return an array \`[L, W]\` where \`L\` and \`W\` are the length and width of the web page you designed in sequence.`,
  constraints: [
    '1 <= area <= 10^7',
  ],
  examples: [
    {
      input: 'area = 4',
      output: '[2,2]',
      explanation: 'The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. Among all of them, [2,2] minimizes L-W.',
    },
    {
      input: 'area = 37',
      output: '[37,1]',
      explanation: '37 is prime, so the only factorizations are [1,37] and [37,1]. We need L >= W so the answer is [37,1].',
    },
    {
      input: 'area = 122122',
      output: '[427,286]',
    },
  ],
  hints: [
    'You need to find two factors L and W of `area` such that L * W = area, L >= W, and L - W is minimized.',
    'Start W from floor(sqrt(area)) and count down. The first W that divides `area` evenly gives the answer with minimal L-W.',
    'Use `Math.sqrt(area)` as the starting point. Iterate W downward from that value; the first W where `area % W === 0` gives L = area / W.',
  ],
  functionName: 'constructRectangle',
  params: ['area'],
  starterCode: {
    javascript: 'function constructRectangle(area) {\n  // your code here\n}\n',
    typescript: "function constructRectangle(area: number): number[] {\n  // your code here\n}",

    python: 'def constructRectangle(area):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [4], expected: [2, 2] },
    { args: [37], expected: [37, 1] },
    { args: [122122], expected: [427, 286] },
  ],
  hiddenTests: [
    { args: [1], expected: [1, 1] },
    { args: [2], expected: [2, 1] },
    { args: [9], expected: [3, 3] },
    { args: [12], expected: [4, 3] },
    { args: [100], expected: [10, 10] },
    { args: [10000000], expected: [3200, 3125] },
  ],
};
