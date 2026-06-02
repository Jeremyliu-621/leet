import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-by-marking-elements',
  title: 'Find Score by Marking Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'simulation'],
  description: `You are given an array \`nums\` consisting of positive integers.

Starting with \`score = 0\`, apply the following algorithm:

1. Pick the **smallest** unmarked integer in the array. If there is a tie, pick the one with the **smallest index**.
2. Add the value of the picked integer to \`score\`.
3. Mark the picked element and its **two adjacent** elements (if they exist) as marked.
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
      explanation: 'Pick 1 (index 1, score=1), mark indices 0,1,2. Pick 4 (index 3, score=5), mark 3,4. Pick 2 (index 5, score=7). All marked.',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Pick 1 (index 3, score=1), mark indices 2,3,4. Pick 2 (index 0, score=3), mark 0,1. Pick 2 (index 5, score=5). All marked.',
    },
  ],
  hints: [
    'Level 1: Use a min-heap of (value, index) pairs. Pop the minimum, skip if already marked, otherwise add to score and mark it and its neighbors.',
    'Level 2: A boolean `marked` array tracks which indices have been used. After marking, continue popping from the heap.',
    'Level 3: Push all `(nums[i], i)` into the heap, then greedily pick the minimum unmarked element.',
  ],
  functionName: 'findScore',
  params: ['nums'],
  starterCode: {
    javascript: `function findScore(nums) {
  const n = nums.length;
  const marked = new Array(n).fill(false);
  // min-heap of [value, index]
  const heap = nums.map((v, i) => [v, i]);
  heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  // use sorted array as a priority queue
  let score = 0;
  for (const [v, i] of heap) {
    if (marked[i]) continue;
    score += v;
    marked[i] = true;
    if (i > 0) marked[i - 1] = true;
    if (i < n - 1) marked[i + 1] = true;
  }
  return score;
}`,
    typescript: `function findScore(nums: number[]): number {
  const n = nums.length;
  const marked = new Array<boolean>(n).fill(false);
  const heap = nums.map((v, i): [number, number] => [v, i]);
  heap.sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!);
  let score = 0;
  for (const entry of heap) {
    const v = entry[0]!, i = entry[1]!;
    if (marked[i]) continue;
    score += v;
    marked[i] = true;
    if (i > 0) marked[i - 1] = true;
    if (i < n - 1) marked[i + 1] = true;
  }
  return score;
}`,
    python: `def findScore(nums):
    nums = [int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums)]
    n = len(nums)
    marked = [False] * n
    heap = sorted(enumerate(nums), key=lambda x: (x[1], x[0]))
    score = 0
    for i, v in heap:
        if marked[i]: continue
        score += v
        marked[i] = True
        if i > 0: marked[i-1] = True
        if i < n-1: marked[i+1] = True
    return score`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4, 5, 2]], expected: 7 },
    { args: [[2, 3, 5, 1, 3, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[3, 2, 1]], expected: 4 },
    { args: [[5, 5, 5, 5, 5]], expected: 15 },
    { args: [[1, 1, 1, 1, 1]], expected: 3 },
    { args: [[2, 1, 2, 1, 2]], expected: 2 },
    { args: [[10, 1, 10, 1, 10]], expected: 2 },
  ],
};
