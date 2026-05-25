import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-of-array-after-marking-elements',
  title: 'Find Score of an Array After Marking All Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'hash-map'],
  description: `You are given an array \`nums\`. Starting with score = 0, repeat until all elements are marked:
1. Find the **smallest** unmarked integer (break ties by smaller index).
2. Add its value to score.
3. Mark it and its **two adjacent** neighbors (if they exist).

Return the **score**.

**Example:**
\`\`\`
nums = [2,1,3,4,5,2]
Step 1: smallest unmarked = 1 (index 1). Score=1. Mark indices 0,1,2.
Step 2: smallest unmarked = 4 (index 3). Score=5. Mark indices 2,3,4.
Step 3: smallest unmarked = 2 (index 5). Score=7. Mark index 5.
Result: 7
\`\`\``,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4,5,2]',
      output: '7',
      explanation: 'Pick 1 (idx 1, score=1), pick 4 (idx 3, score=5), pick 2 (idx 5, score=7).',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Pick 1 (idx 3, score=1), pick 2 (idx 0, score=3), pick 2 (idx 5, score=5).',
    },
  ],
  hints: [
    'Sort by value (with index as tiebreaker), then iterate: if not marked, add value and mark neighbors.',
    'Use a boolean array to track marked indices.',
  ],
  starterCode: {
    javascript: `function findScore(nums) {
  // nums: number[]
  // Return score after marking all elements
}`,
    python: `def findScore(nums: list[int]) -> int:
    # Your code here
    pass`,
  },
  functionName: 'findScore',
  params: ['nums'],
  visibleTests: [
    { args: [[2, 1, 3, 4, 5, 2]], expected: 7 },
    { args: [[2, 3, 5, 1, 3, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[5, 4, 3, 2, 1]], expected: 9 },
    { args: [[3, 3, 3, 3, 3]], expected: 9 },
    { args: [[1, 1, 1, 1, 1]], expected: 3 },
    { args: [[10, 1, 10, 1, 10]], expected: 2 },
  ],
};
