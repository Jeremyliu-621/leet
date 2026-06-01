import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-after-marking-all-elements',
  title: 'Find Score After Marking All Elements',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given an array \`nums\` consisting of positive integers.

Starting with \`score = 0\`, apply the following algorithm:

1. Pick the **smallest** unmarked element. If there is a tie, pick the one with the **smallest index**.
2. Add the value of the picked element to \`score\`.
3. Mark the picked element **and its two adjacent elements** (if they exist) as marked.
4. Repeat until all elements are marked.

Return the score you get after applying the above algorithm.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4,5,2]',
      output: '7',
      explanation: 'Pick index 1 (value 1): score=1, mark indices 0,1,2. Pick index 5 (value 2): score=3, mark indices 4,5. Pick index 3 (value 4): score=7, mark index 3. Total=7.',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Pick index 3 (value 1): score=1, mark 2,3,4. Pick index 0 (value 2): score=3, mark 0,1. Pick index 5 (value 2): score=5, mark 5. Total=5.',
    },
  ],
  hints: [
    'Sort indices by their values (breaking ties by index). Process them in order, skipping already-marked indices.',
    'When you pick an element, mark it and its immediate neighbors (index-1 and index+1) so they cannot be picked later.',
    'Use a boolean array of size n to track which indices are already marked.',
  ],
  functionName: 'findScore',
  params: ['nums'],
  starterCode: {
    javascript: `function findScore(nums) {
  const n = nums.length;
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => nums[a] !== nums[b] ? nums[a] - nums[b] : a - b);
  const marked = new Array(n).fill(false);
  let score = 0;
  for (const i of order) {
    if (marked[i]) continue;
    score += nums[i];
    marked[i] = true;
    if (i > 0) marked[i - 1] = true;
    if (i < n - 1) marked[i + 1] = true;
  }
  return score;
}`,
    typescript: `function findScore(nums: number[]): number {
  const n = nums.length;
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => nums[a]! !== nums[b]! ? nums[a]! - nums[b]! : a - b);
  const marked = new Array(n).fill(false) as boolean[];
  let score = 0;
  for (const i of order) {
    if (marked[i]!) continue;
    score += nums[i]!;
    marked[i]! = true;
    if (i > 0) marked[i - 1]! = true;
    if (i < n - 1) marked[i + 1]! = true;
  }
  return score;
}`,
    python: `def findScore(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    order = sorted(range(n), key=lambda i: (nums[i], i))
    marked = [False] * n
    score = 0
    for i in order:
        if marked[i]: continue
        score += nums[i]
        marked[i] = True
        if i > 0: marked[i - 1] = True
        if i < n - 1: marked[i + 1] = True
    return score`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4, 5, 2]], expected: 7 },
    { args: [[2, 3, 5, 1, 3, 2]], expected: 5 },
    { args: [[1]], expected: 1 },
    { args: [[1, 3, 2]], expected: 3 },
    { args: [[5, 4, 3, 2, 1]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[1, 1, 1, 1, 1]], expected: 3 },
    { args: [[10, 20, 30]], expected: 40 },
    { args: [[3, 2, 1, 2, 3]], expected: 7 },
    { args: [[1, 4, 2, 3]], expected: 3 },
  ],
};
