import type { Problem } from '../types';

export const problem: Problem = {
  id: 'closest-dessert-cost',
  title: 'Closest Dessert Cost',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays', 'backtracking'],
  description: `You are making a dessert and are preparing to buy ingredients. You have \`n\` ice cream base flavors and \`m\` types of toppings to choose from.

- You **must** choose exactly one base flavor.
- You may add **0, 1, or 2** of each topping type.

You are given two integer arrays \`baseCosts\` and \`toppingCosts\` and an integer \`target\`. Return the **closest** possible cost of the dessert to \`target\`. If there are multiple dessert costs equally close, return the **smaller** one.`,
  constraints: [
    '1 <= baseCosts.length <= 10',
    '1 <= toppingCosts.length <= 10',
    '1 <= baseCosts[i], toppingCosts[i] <= 10^4',
    '1 <= target <= 10^4',
  ],
  examples: [
    {
      input: 'baseCosts = [1,7], toppingCosts = [3,4], target = 10',
      output: '10',
      explanation: 'Choose base 7 and add topping 3 once: 7 + 3 = 10.',
    },
    {
      input: 'baseCosts = [2,3], toppingCosts = [4,5,100], target = 18',
      output: '17',
      explanation: 'Choose base 3 and add topping 4 once and topping 5 twice: 3 + 4 + 5 + 5 = 17.',
    },
    {
      input: 'baseCosts = [3,10], toppingCosts = [2,5], target = 9',
      output: '8',
      explanation:
        'Choose base 3 and add topping 5 once: 3 + 5 = 8. |8 - 9| = 1 = |10 - 9|, but 8 < 10 so 8 wins.',
    },
  ],
  hints: [
    'For each base flavor, use DFS/backtracking over toppings: try adding 0, 1, or 2 of each.',
    'Prune when cost >= target since additional toppings can only move further away.',
    'Track the best answer: prefer closer to target, then prefer smaller if tied.',
  ],
  functionName: 'closestCost',
  params: ['baseCosts', 'toppingCosts', 'target'],
  starterCode: {
    javascript: `function closestCost(baseCosts, toppingCosts, target) {
  // your code here
}`,
    typescript: `function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
  // your code here
}`,
    python: `def closestCost(baseCosts, toppingCosts, target):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 7], [3, 4], 10], expected: 10 },
    { args: [[2, 3], [4, 5, 100], 18], expected: 17 },
    { args: [[3, 10], [2, 5], 9], expected: 8 },
  ],
  hiddenTests: [
    { args: [[10], [1], 1], expected: 10 },
    { args: [[1], [1], 5], expected: 3 },
    { args: [[5], [3, 3], 5], expected: 5 },
    { args: [[1, 2], [1, 1], 3], expected: 3 },
    { args: [[100], [50, 50], 200], expected: 200 },
    { args: [[1], [10000], 9999], expected: 10001 },
  ],
};
