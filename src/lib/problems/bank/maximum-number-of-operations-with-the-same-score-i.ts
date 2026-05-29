import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-operations-with-the-same-score-i',
  title: 'Maximum Number of Operations With the Same Score I',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given an integer array \`nums\` with an even length.

You can perform the following operation as many times as you wish:
- Pick the **first two** elements of \`nums\`, delete them, and record their **sum** as the **score** of this operation.

You can **only** continue performing operations as long as the score of each operation equals the score of the **first operation**.

Return the **maximum number of operations** you can perform.

**Constraints:**
- \`2 ≤ nums.length ≤ 50\`
- \`nums.length\` is even.
- \`1 ≤ nums[i] ≤ 100\``,
  examples: [
    {
      input: 'nums = [3,2,1,4,5,6]',
      output: '2',
      explanation: 'First score = 3+2=5. Next pair: 1+4=5 ✓ (2 ops). Then: 5+6=11 ✗. So 2 operations.',
    },
    {
      input: 'nums = [1,2,3,4,5,6]',
      output: '1',
      explanation: 'First score = 1+2=3. Next pair: 3+4=7 ≠ 3. So only 1 operation.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '2',
      explanation: 'Score = 1+1=2. Both pairs sum to 2.',
    },
  ],
  constraints: ['The score is fixed by the first pair. Count pairs from the start that match.'],
  hints: [
    'The score is determined by nums[0] + nums[1].',
    'Iterate in steps of 2 from index 0; stop as soon as a pair\'s sum differs from the score.',
    'Return the count of matching pairs.',
  ],
  params: ['nums'],
  starterCode: {
    javascript: `function maxOperations(nums) {

}`,
    typescript: `function maxOperations(nums: number[]): number {

}`,
    python: `def maxOperations(nums: list[int]) -> int:
    pass`,
  },
  functionName: 'maxOperations',
  visibleTests: [
    { args: [[3, 2, 1, 4, 5, 6]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 3 },
    { args: [[3, 7, 2, 8, 1, 9]], expected: 3 },
    { args: [[10, 10, 10, 10, 10, 11]], expected: 2 },
    { args: [[1, 3, 2, 2, 3, 1]], expected: 3 },
    { args: [[4, 6, 5, 5, 6, 4]], expected: 3 },
  ],
};
