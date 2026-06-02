import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-th-smallest-in-lexicographic-order',
  title: 'K-th Smallest in Lexicographic Order',
  difficulty: 'hard',
  tags: ['trie', 'math'],
  description: `Given two integers \`n\` and \`k\`, return the \`k\`th lexicographically smallest integer in the range \`[1, n]\`.`,
  constraints: ['`1 <= k <= n <= 10^9`'],
  examples: [
    {
      input: 'n = 13, k = 2',
      output: '10',
      explanation: 'Lexicographic order: [1,10,11,12,13,2,...]. The 2nd is 10.',
    },
    {
      input: 'n = 1, k = 1',
      output: '1',
    },
  ],
  hints: [
    'Think of the numbers as a 10-ary trie. Traverse the trie in DFS order (lexicographic) and count how many nodes are in each subtree.',
    'Function `countSteps(n, curr, next)` counts how many numbers exist in [curr, n] with prefix curr. It steps through levels: add min(n+1, next) - curr nodes, then curr*=10, next*=10.',
    'If the subtree at `curr` has ≥ k nodes, go deeper (curr *= 10, k--). Otherwise skip the subtree (k -= steps, curr++).',
  ],
  functionName: 'findKthNumber',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function findKthNumber(n, k) {
  const countSteps = (n, curr, next) => {
    let steps = 0;
    while (curr <= n) { steps += Math.min(n + 1, next) - curr; curr *= 10; next *= 10; }
    return steps;
  };
  let curr = 1;
  k--;
  while (k > 0) {
    const steps = countSteps(n, curr, curr + 1);
    if (steps <= k) { k -= steps; curr++; } else { k--; curr *= 10; }
  }
  return curr;
}`,
    typescript: `function findKthNumber(n: number, k: number): number {
  const countSteps = (n: number, curr: number, next: number): number => {
    let steps = 0;
    while (curr <= n) { steps += Math.min(n + 1, next) - curr; curr *= 10; next *= 10; }
    return steps;
  };
  let curr = 1;
  k--;
  while (k > 0) {
    const steps = countSteps(n, curr, curr + 1);
    if (steps <= k) { k -= steps; curr++; } else { k--; curr *= 10; }
  }
  return curr;
}`,
    python: `def findKthNumber(n, k):
    def count_steps(n, curr, nxt):
        steps = 0
        while curr <= n:
            steps += min(n + 1, nxt) - curr
            curr *= 10; nxt *= 10
        return steps
    curr, k = 1, k - 1
    while k > 0:
        steps = count_steps(n, curr, curr + 1)
        if steps <= k: k -= steps; curr += 1
        else: k -= 1; curr *= 10
    return curr`,
  },
  visibleTests: [
    { args: [13, 2], expected: 10 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [13, 1], expected: 1 },
    { args: [13, 5], expected: 13 },
    { args: [13, 6], expected: 2 },
    { args: [100, 10], expected: 17 },
    { args: [1000000000, 1000000000], expected: 999999999 },
  ],
};
