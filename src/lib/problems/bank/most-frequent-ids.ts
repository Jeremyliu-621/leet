import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-ids',
  title: 'Most Frequent IDs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `There is a collection of elements with IDs. You are given two integer arrays, \`nums\` and \`freq\` of equal length \`n\`.

In the \`i\`-th operation:
- If \`freq[i] > 0\`, add \`freq[i]\` elements with ID \`nums[i]\` to the collection.
- If \`freq[i] < 0\`, remove \`-freq[i]\` elements with ID \`nums[i]\` from the collection.

Return an array \`ans\` of length \`n\` where \`ans[i]\` is the **count** of the element with the **highest frequency** after the \`i\`-th operation.

**Constraints:**
- \`1 ≤ n ≤ 10^5\`
- \`1 ≤ nums[i] ≤ 10^5\`
- \`-10^5 ≤ freq[i] ≤ 10^5\`, \`freq[i] ≠ 0\``,
  examples: [
    {
      input: 'nums = [2,3,2,1], freq = [3,2,-3,1]',
      output: '[3,3,2,2]',
      explanation: 'After op 0: {2:3}, max=3. After op 1: {2:3,3:2}, max=3. After op 2: {2:0,3:2}, max=2. After op 3: {1:1,2:0,3:2}, max=2.',
    },
    {
      input: 'nums = [5,5,3], freq = [2,-2,1]',
      output: '[2,0,1]',
      explanation: 'After op 0: {5:2}, max=2. After op 1: {5:0}, max=0. After op 2: {3:1}, max=1.',
    },
  ],
  constraints: [
    'Maintain a map id→count and a "count-of-counts" map.',
    "When id's count changes from old to new: decrement countOfCount[old], increment countOfCount[new].",
    'Track maxCount: if countOfCount[maxCount]==0, decrement maxCount; if new>maxCount, set maxCount=new.',
  ],
  hints: [
    'Use two maps: one for the count of each id, and one tracking how many ids have each count.',
    'On each operation, update both maps and maintain the running maximum count.',
    'The maximum only needs to decrease if no id currently has that count.',
  ],
  params: ['nums', 'freq'],
  starterCode: {
    javascript: `function mostFrequentIDs(nums, freq) {

}`,
    typescript: `function mostFrequentIDs(nums: number[], freq: number[]): number[] {

}`,
    python: `def mostFrequentIDs(nums: list[int], freq: list[int]) -> list[int]:
    pass`,
  },
  functionName: 'mostFrequentIDs',
  visibleTests: [
    { args: [[2, 3, 2, 1], [3, 2, -3, 1]], expected: [3, 3, 2, 2] },
    { args: [[5, 5, 3], [2, -2, 1]], expected: [2, 0, 1] },
    { args: [[1], [5]], expected: [5] },
  ],
  hiddenTests: [
    { args: [[1, 1], [3, -3]], expected: [3, 0] },
    { args: [[1, 2, 3], [1, 1, 1]], expected: [1, 1, 1] },
    { args: [[1, 2, 1], [2, 3, -2]], expected: [2, 3, 3] },
    { args: [[4, 4, 4], [1, 2, 3]], expected: [1, 3, 6] },
    { args: [[1, 2, 3, 1], [5, 3, 2, -5]], expected: [5, 5, 5, 3] },
    { args: [[1, 1, 2, 2], [3, -1, 2, -2]], expected: [3, 2, 2, 2] },
  ],
};
