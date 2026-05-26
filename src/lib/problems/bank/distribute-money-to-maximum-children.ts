import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-money-to-maximum-children',
  title: 'Distribute Money to Maximum Children',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an integer \`money\` denoting the total amount of money (in dollars) that you have, and another integer \`children\` denoting the number of children.

You must distribute all the money to the children, and every child must receive **at least** 1 dollar. Make sure that **no** child ends up with exactly **4** dollars.

Return the **maximum** number of children who receive **exactly 8 dollars**. If it is impossible to distribute all the money, return \`-1\`.`,
  constraints: [
    '1 <= money <= 200',
    '1 <= children <= 30',
  ],
  examples: [
    {
      input: 'money = 20, children = 3',
      output: '1',
      explanation: 'Give 8 to child 1, 10 to child 2, 2 to child 3. One child has exactly 8.',
    },
    {
      input: 'money = 16, children = 2',
      output: '2',
      explanation: 'Give 8 to each child. Both have exactly 8.',
    },
  ],
  hints: [
    'Give each child 1 dollar first. Remaining = money - children.',
    'To give a child exactly 8, you need 7 more on top of the 1 already given.',
    'Maximum = min(floor(remaining / 7), children). But if all children get 8 and there is leftover, reduce by 1.',
  ],
  functionName: 'distMoney',
  params: ['money', 'children'],
  starterCode: {
    javascript: 'function distMoney(money, children) {\n  \n}\n',
    python: 'def distMoney(money, children):\n    pass\n',
  },
  visibleTests: [
    { args: [20, 3], expected: 1 },
    { args: [16, 2], expected: 2 },
    { args: [1, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: -1 },
    { args: [8, 1], expected: 1 },
    { args: [9, 1], expected: 0 },
    { args: [2, 2], expected: 0 },
    { args: [24, 3], expected: 3 },
  ],
};
