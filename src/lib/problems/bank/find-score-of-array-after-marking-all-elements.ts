import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-of-array-after-marking-all-elements',
  title: 'Find Score of an Array After Marking All Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'simulation'],
  description: `You are given an array \`nums\`.

You can do the following operation until the array is empty:
1. Find the minimum unmarked element.
2. Add its value to the score.
3. Mark that element **and** its two adjacent elements (if they exist).

Return the score you get after doing the above operation until the array is empty.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4,5,2]',
      output: '7',
      explanation: 'Step 1: pick index 1 (value 1). Mark indices 0,1,2. Score = 1. Remaining: [_,_,_,4,5,2]. Step 2: pick index 5 (value 2). Mark 4,5. Score = 3. Remaining: [_,_,_,4,_,_]. Step 3: pick index 3 (value 4). Score = 7.',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Step 1: pick index 3 (value 1). Mark 2,3,4. Score = 1. Step 2: pick index 0 (value 2). Mark 0,1. Score = 3. Step 3: pick index 5 (value 2). Score = 5.',
    },
  ],
  hints: [
    'Level 1: Sort elements by value (then by index for ties) to always pick the minimum. Iterate through this sorted order and skip already-marked elements.',
    'Level 2: Create pairs [value, index] and sort them. For each pair, if the index is not marked, add value to score and mark index-1, index, and index+1.',
    'Level 3: Use a boolean array `marked` of size n. Sort index-value pairs. Iterate: if `marked[i]` is false, add `nums[i]` to score, then set `marked[i]`, `marked[i-1]`, `marked[i+1]` to true (with bounds checking).',
  ],
  functionName: 'findScore',
  params: ['nums'],
  starterCode: {
    javascript: `function findScore(nums) {
  const n = nums.length;
  const pairs = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const marked = new Uint8Array(n);
  let score = 0;
  for (const [v, i] of pairs) {
    if (!marked[i]) {
      score += v;
      marked[i] = 1;
      if (i > 0) marked[i - 1] = 1;
      if (i < n - 1) marked[i + 1] = 1;
    }
  }
  return score;
}`,
    typescript: `function findScore(nums: number[]): number {
  const n = nums.length;
  const pairs = nums.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const marked = new Uint8Array(n);
  let score = 0;
  for (const [v, i] of pairs) {
    if (!marked[i]) {
      score += v;
      marked[i] = 1;
      if (i > 0) marked[i - 1] = 1;
      if (i < n - 1) marked[i + 1] = 1;
    }
  }
  return score;
}`,
    python: `def findScore(nums):
    n = len(nums)
    pairs = sorted((v, i) for i, v in enumerate(nums))
    marked = [False] * n
    score = 0
    for v, i in pairs:
        if not marked[i]:
            score += v
            marked[i] = True
            if i > 0:
                marked[i - 1] = True
            if i < n - 1:
                marked[i + 1] = True
    return score`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4, 5, 2]], expected: 7 },
    { args: [[2, 3, 5, 1, 3, 2]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[3, 2, 1]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[5, 5, 5, 5, 5]], expected: 15 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1000000, 1, 1000000]], expected: 1 },
    { args: [[5, 2, 4, 1, 3, 6]], expected: 9 },
  ],
};
