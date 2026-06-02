import type { Problem } from '../types';

export const problem: Problem = {
  id: 'earliest-second-to-mark-all-indices-i',
  title: 'Earliest Second to Mark Indices I',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given two **1-indexed** integer arrays, \`nums\` and \`changeIndices\`, having lengths \`n\` and \`m\` respectively.

Initially, all indices in \`nums\` are **unmarked**. Your task is to mark **all** indices in \`nums\`.

In each second \`s\` in range \`[1, m]\` (inclusive), you can perform **one** of the following operations:

- Choose an index \`i\` in the range \`[1, n]\` and **decrement** \`nums[i]\` by 1.
- If \`nums[changeIndices[s] - 1]\` is **equal** to 0, **mark** the index \`changeIndices[s] - 1\`.

Return an integer denoting the **earliest second** in the range \`[1, m]\` when **all** indices in \`nums\` can be marked by choosing operations optimally, or **-1** if it is impossible.`,
  constraints: [
    '1 <= n == nums.length <= 5000',
    '0 <= nums[i] <= 10^9',
    '1 <= m == changeIndices.length <= 5000',
    '1 <= changeIndices[i] <= n',
  ],
  examples: [
    {
      input: 'nums = [2,2,0], changeIndices = [2,2,2,2,3,2,1]',
      output: '7',
      explanation: 'Use seconds 1–4 to decrement nums[1] twice and use 2 extra. At second 5 mark index 2 (nums[2]=0). Use seconds 3–4 to decrement nums[0]. At second 7 mark index 0. Optimal answer is 7.',
    },
    {
      input: 'nums = [0,0,0], changeIndices = [1,3,2,4,3,5,2,1]',
      output: '3',
      explanation: 'All nums are 0 so we only need to mark each index once. The first 3 seconds cover all 3 indices.',
    },
    {
      input: 'nums = [5,4,3], changeIndices = [1,2,3]',
      output: '-1',
      explanation: 'We need 5+4+3+3=15 operations but m=3. Impossible.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer T. Check: can we mark all indices using only the first T seconds?',
    'Level 2: Feasibility check: for each index i, find its last occurrence in changeIndices[0..T-1] — that\'s when we\'ll mark it. If any index has no occurrence, return false.',
    'Level 3: Sort indices by their last occurrence. Sweep left to right; track "available" free slots (not used as mark slots). For each index i in order: available += (pos_i - prev_pos), then check available >= nums[i]; consume nums[i] slots for decrements and use pos_i as the mark slot.',
  ],
  functionName: 'earliestSecondToMarkIndices',
  params: ['nums', 'changeIndices'],
  starterCode: {
    javascript: `function earliestSecondToMarkIndices(nums, changeIndices) {

}`,
    typescript: `function earliestSecondToMarkIndices(nums: number[], changeIndices: number[]): number {

}`,
    python: `def earliestSecondToMarkIndices(nums, changeIndices):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 0], [2, 2, 2, 2, 3, 2, 1]], expected: 7 },
    { args: [[0, 0, 0], [1, 3, 2, 4, 3, 5, 2, 1]], expected: 3 },
    { args: [[5, 4, 3], [1, 2, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[0], [1]], expected: 1 },
    { args: [[1], [1, 1]], expected: 2 },
    { args: [[3, 0], [1, 2, 1, 1, 1, 2]], expected: 5 },
    { args: [[1, 1], [2, 1, 2, 1]], expected: 4 },
    { args: [[1, 0, 1], [3, 1, 2, 1, 3, 1, 2]], expected: 5 },
    { args: [[0, 0], [1, 2]], expected: 2 },
    { args: [[2], [1, 1, 1]], expected: 3 },
    { args: [[0, 3, 0], [2, 1, 3, 2, 2, 1, 3]], expected: 6 },
  ],
};
