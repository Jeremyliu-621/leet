import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-people-that-can-be-seen-in-a-grid',
  title: 'Number of People Visible in a Queue',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `There are \`n\` people standing in a queue, and there is a building to the right. Each person has a height given by the array \`heights\` (1-indexed positions 1 to n, left to right).

A person at position \`i\` **can see** person at position \`j\` (where \`i < j\`) if every person between them has a **strictly smaller** height than both \`heights[i]\` and \`heights[j]\`.

Return an integer array \`answer\` of length \`n\` where \`answer[i]\` is the number of people person \`i\` **can see** to their right.

**Example:**
- \`heights = [10, 6, 8, 5, 11, 9]\`
- Person 0 (height 10): sees persons 1(6), 2(8), 4(11) → \`answer[0] = 3\`
- Person 1 (height 6): sees person 2(8) → \`answer[1] = 1\`
- Person 2 (height 8): sees persons 3(5), 4(11) → \`answer[2] = 2\`
- Person 3 (height 5): sees person 4(11) → \`answer[3] = 1\`
- Person 4 (height 11): sees person 5(9) → \`answer[4] = 1\`
- Person 5 (height 9): sees nobody → \`answer[5] = 0\`
- Output: \`[3, 1, 2, 1, 1, 0]\`

**Constraints:**
- \`1 ≤ n ≤ 10⁵\`
- \`1 ≤ heights[i] ≤ 10⁵\`
- All heights are **distinct**.`,
  constraints: [
    '1 ≤ n ≤ 10⁵',
    '1 ≤ heights[i] ≤ 10⁵',
    'All heights are distinct.',
  ],
  examples: [
    {
      input: 'heights = [10,6,8,5,11,9]',
      output: '[3,1,2,1,1,0]',
      explanation: 'Person 0 sees 1(6),2(8),4(11)=3. Person 2 sees 3(5),4(11)=2. Others see 1 person.',
    },
    {
      input: 'heights = [5,1,2,3,10]',
      output: '[4,1,1,1,0]',
    },
  ],
  hints: [
    'Process from right to left, maintaining a monotonic decreasing stack of heights (from bottom to top).',
    'When processing person `i`: pop elements from the stack that are smaller than `heights[i]` — each popped person is visible from `i`. After popping, if the stack is non-empty, the person on top is also visible (and blocks the view further), so add 1 more.',
    'The number of people `i` can see = number of elements popped + (1 if stack is non-empty after popping, else 0).',
  ],
  functionName: 'canSeePersonsCount',
  params: ['heights'],
  starterCode: {
    javascript: `function canSeePersonsCount(heights) {
  // Return array where answer[i] = number of people person i can see to their right
}`,
    python: `def canSeePersonsCount(heights: list[int]) -> list[int]:
    # Return array where answer[i] = number of people person i can see to their right
    pass`,
  },
  visibleTests: [
    { args: [[10, 6, 8, 5, 11, 9]], expected: [3, 1, 2, 1, 1, 0] },
    { args: [[5, 1, 2, 3, 10]], expected: [4, 1, 1, 1, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 1, 1, 1, 0] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 1, 1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[1, 2]], expected: [1, 0] },
    { args: [[2, 1]], expected: [1, 0] },
    { args: [[3, 1, 4, 2, 5]], expected: [2, 1, 2, 1, 0] },
    { args: [[1, 3, 2, 4]], expected: [1, 2, 1, 0] },
    { args: [[4, 2, 1, 3, 5]], expected: [3, 2, 1, 1, 0] },
    { args: [[10, 1, 2, 3, 4, 5]], expected: [5, 1, 1, 1, 1, 0] },
  ],
};
