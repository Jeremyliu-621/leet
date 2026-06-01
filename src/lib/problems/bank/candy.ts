import type { Problem } from '../types';

export const problem: Problem = {
  id: 'candy',
  title: 'Candy',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `There are \`n\` children standing in a line. Each child is assigned a rating value given in the integer array \`ratings\`.

You are giving candies to these children subject to the following requirements:

- Each child must have **at least** one candy.
- Children with a **higher** rating than their neighbors must get more candies.

Return the **minimum** number of candies you need to have to distribute.`,
  constraints: [
    'n == ratings.length',
    '1 <= n <= 2 * 10^4',
    '0 <= ratings[i] <= 2 * 10^4',
  ],
  examples: [
    {
      input: 'ratings = [1,0,2]',
      output: '5',
      explanation: 'Give candies [2,1,2]. Total = 5.',
    },
    {
      input: 'ratings = [1,2,2]',
      output: '4',
      explanation: 'Give candies [1,2,1]. Total = 4. The third child gets 1 candy because their rating is not greater than the second child.',
    },
  ],
  hints: [
    'Level 1: Use a two-pass greedy approach. First pass left to right: give each child more than their left neighbor if rated higher. Second pass right to left: ensure right-direction constraints are also satisfied.',
    'Level 2: Start with all 1s. Left pass: `if ratings[i] > ratings[i-1], candies[i] = candies[i-1]+1`. Right pass: `if ratings[i] > ratings[i+1], candies[i] = max(candies[i], candies[i+1]+1)`. Sum the array.',
    'Level 3: `const n=ratings.length,c=new Array(n).fill(1);for(let i=1;i<n;i++)if(ratings[i]>ratings[i-1])c[i]=c[i-1]+1;for(let i=n-2;i>=0;i--)if(ratings[i]>ratings[i+1])c[i]=Math.max(c[i],c[i+1]+1);return c.reduce((a,b)=>a+b,0);`',
  ],
  functionName: 'candy',
  params: ['ratings'],
  starterCode: {
    javascript: `function candy(ratings) {
  const n = ratings.length;
  const c = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (ratings[i] > ratings[i-1]) c[i] = c[i-1] + 1;
  for (let i = n-2; i >= 0; i--) if (ratings[i] > ratings[i+1]) c[i] = Math.max(c[i], c[i+1] + 1);
  return c.reduce((a, b) => a + b, 0);
}`,
    typescript: `function candy(ratings: number[]): number {
  const n = ratings.length;
  const c = new Array<number>(n).fill(1);
  for (let i = 1; i < n; i++) if (ratings[i]! > ratings[i-1]!) c[i] = c[i-1]! + 1;
  for (let i = n-2; i >= 0; i--) if (ratings[i]! > ratings[i+1]!) c[i] = Math.max(c[i]!, c[i+1]! + 1);
  return c.reduce((a, b) => a + b, 0);
}`,
    python: `def candy(ratings):
    ratings = list(ratings.to_py()) if hasattr(ratings, 'to_py') else list(ratings)
    n = len(ratings)
    c = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i-1]: c[i] = c[i-1] + 1
    for i in range(n-2, -1, -1):
        if ratings[i] > ratings[i+1]: c[i] = max(c[i], c[i+1] + 1)
    return sum(c)`,
  },
  visibleTests: [
    { args: [[1, 0, 2]], expected: 5 },
    { args: [[1, 2, 2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[2, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[1, 3, 2, 2, 1]], expected: 7 },
    { args: [[0, 1, 2, 5, 3, 2, 7]], expected: 15 },
  ],
};
