import type { Problem } from '../types';

export const problem: Problem = {
  id: 'tallest-billboard',
  title: 'Tallest Billboard',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are installing a billboard. You have some \`rods\` of various lengths. You want to use some rods to support a billboard, which requires **two steel supports of equal height**.

Each rod can be used in one of three ways: **left support**, **right support**, or **discarded**.

Return the **largest possible height** of your billboard installation. If you cannot support the billboard, return \`0\`.

**DP approach:** \`dp[diff]\` = maximum height of the **taller** pile when the difference between piles is \`diff\`. For each rod, update by adding it to the taller, shorter, or neither pile.`,
  constraints: [
    '1 <= rods.length <= 20',
    '1 <= rods[i] <= 1000',
    'sum of rods <= 5000',
  ],
  examples: [
    {
      input: 'rods = [1,2,3,6]',
      output: '6',
      explanation: 'Use rods 1,2,3 on one side (total 6) and rod 6 on the other side (total 6). Height = 6.',
    },
    {
      input: 'rods = [1,2,3,4,5,6]',
      output: '10',
      explanation: 'Use one side: [2,8]=10 wait... 2+3+5=10 and 1+4+6=11? Let\'s verify: one side can be 2+3+5=10, other side 4+6=10. Height=10.',
    },
    {
      input: 'rods = [1,2]',
      output: '0',
      explanation: 'No way to make both sides equal with positive height.',
    },
  ],
  hints: [
    'Let dp[diff] = maximum height of the taller pile when the difference between the two piles is exactly diff.',
    'Initialize dp[0] = 0, all others = -infinity. For each rod, try three options: add to taller, add to shorter, or discard.',
    'When adding rod to the taller pile: new diff = old diff + rod, new max height = old max height + rod. When adding to shorter: if rod <= diff, new diff = diff - rod (height stays). If rod > diff, new diff = rod - diff, new height += rod - diff.',
  ],
  functionName: 'tallestBillboard',
  params: ['rods'],
  starterCode: {
    javascript: 'function tallestBillboard(rods) {\n\n}\n',
    typescript: "function tallestBillboard(rods: number[]): number {\n\n}",

    python: 'def tallestBillboard(rods: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,6]], expected: 6 },
    { args: [[1,2,3,4,5,6]], expected: 10 },
    { args: [[1,2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3,3]], expected: 3 },
    { args: [[1,2,3]], expected: 3 },
    { args: [[5,10,15,20]], expected: 25 },
  ],
};
