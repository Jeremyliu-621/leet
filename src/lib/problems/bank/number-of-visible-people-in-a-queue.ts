import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-visible-people-in-a-queue',
  title: 'Number of Visible People in a Queue',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `There are \`n\` people standing in a queue, and they numbered from \`0\` to \`n - 1\` in **left to right** order. You are given an array \`heights\` of **distinct** integers where \`heights[i]\` represents the height of the \`i\`th person.

A person can **see** another person to their right in the queue if everybody in between is **shorter** than both of them. More formally, the \`i\`th person can see the \`j\`th person if \`i < j\` and \`min(heights[i], heights[j]) > max(heights[i+1], ..., heights[j-1])\`.

Return an array \`answer\` of length \`n\` where \`answer[i]\` is the **number of people** the \`i\`th person can **see** to their right in the queue.`,
  constraints: [
    '`n == heights.length`',
    '`1 <= n <= 10^5`',
    '`1 <= heights[i] <= 10^5`',
    'All the values of `heights` are **unique**.',
  ],
  examples: [
    {
      input: 'heights = [10,6,8,5,11,9]',
      output: '[3,1,2,1,1,0]',
      explanation: 'Person 0 sees persons 1,2,4. Person 2 sees persons 3,4. Person 4 sees person 5.',
    },
    {
      input: 'heights = [5,1,2,3,10]',
      output: '[4,1,1,1,0]',
      explanation: 'Person 0 sees everyone (1,2,3,4). Each of 1,2,3 can only see their immediate neighbor.',
    },
  ],
  hints: [
    'Process right to left. Maintain a monotonic decreasing stack of heights (tallest on bottom).',
    'For person i: pop all shorter people from the stack — each popped person is visible from i (they\'re in view before a taller blocker).',
    'If the stack is not empty after popping, the first remaining person (taller than i) is also visible.',
    'Push heights[i] onto the stack.',
  ],
  functionName: 'canSeePersonsCount',
  params: ['heights'],
  starterCode: {
    javascript: `function canSeePersonsCount(heights) {

}`,
    typescript: `function canSeePersonsCount(heights: number[]): number[] {

}`,
    python: `def canSeePersonsCount(heights):
    pass`,
  },
  visibleTests: [
    { args: [[10, 6, 8, 5, 11, 9]], expected: [3, 1, 2, 1, 1, 0] },
    { args: [[5, 1, 2, 3, 10]], expected: [4, 1, 1, 1, 0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[1, 2]], expected: [1, 0] },
    { args: [[2, 1]], expected: [1, 0] },
    { args: [[1, 2, 3]], expected: [1, 1, 0] },
    { args: [[3, 2, 1]], expected: [1, 1, 0] },
    { args: [[1, 3, 2]], expected: [1, 1, 0] },
    { args: [[4, 2, 1, 3]], expected: [2, 2, 1, 0] },
  ],
};
