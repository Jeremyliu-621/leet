import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-candies',
  title: 'Distribute Candies',
  difficulty: 'easy',
  tags: ['hash-map', 'arrays'],
  description: `Alice has \`n\` candies where \`n\` is always **even**. She wants to eat **exactly half** of them (\`n / 2\` candies), maximizing the number of **different** candy types she eats.

Given an integer array \`candyType\` representing the type of each candy, return the **maximum number of different types** of candy she can eat if she eats exactly \`n / 2\` candies.`,
  constraints: [
    'n == candyType.length',
    '2 <= n <= 10^4',
    'n is even.',
    '-10^5 <= candyType[i] <= 10^5',
  ],
  examples: [
    {
      input: 'candyType = [1,1,2,2,3,3]',
      output: '3',
      explanation:
        'Alice can eat 3 candies (n/2 = 3). She picks one of each type: 1, 2, 3 → 3 distinct types.',
    },
    {
      input: 'candyType = [1,1,2,3]',
      output: '2',
      explanation:
        'Alice can eat 2 candies (n/2 = 2). There are 3 distinct types but she can only pick 2.',
    },
    {
      input: 'candyType = [6,6,6,6]',
      output: '1',
      explanation: 'All candies are type 6. No matter how many she eats, she only ever has 1 type.',
    },
  ],
  hints: [
    'Count the number of unique candy types using a Set.',
    'Alice can eat at most `n / 2` candies. She cannot eat more unique types than the number of unique types available.',
    'The answer is `min(uniqueTypes, n / 2)`.',
  ],
  functionName: 'distributeCandies',
  params: ['candyType'],
  starterCode: {
    javascript: 'function distributeCandies(candyType) {\n  // your code here\n}\n',
    typescript: "function distributeCandies(candyType: number[]): number {\n  // your code here\n}",

    python: 'def distributeCandies(candyType):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 3, 3]], expected: 3 },
    { args: [[1, 1, 2, 3]], expected: 2 },
    { args: [[6, 6, 6, 6]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 1 },
    { args: [[-1, -1, -2, -2]], expected: 2 },
    { args: [[100000, -100000]], expected: 1 },
  ],
};
