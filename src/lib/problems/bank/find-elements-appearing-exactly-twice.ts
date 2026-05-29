import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-elements-appearing-exactly-twice',
  title: 'Find Elements Appearing Exactly Twice',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return a **sorted** array of all elements that appear **exactly twice**.`,
  constraints: [
    '1 <= nums.length <= 10^3',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,4]',
      output: '[2,3]',
      explanation: '2 and 3 each appear exactly twice; 1 and 4 appear once.',
    },
    {
      input: 'nums = [5,5,5]',
      output: '[]',
      explanation: '5 appears three times, not exactly twice.',
    },
    {
      input: 'nums = [1,1,2,3,3]',
      output: '[1,3]',
      explanation: '1 and 3 appear exactly twice; 2 appears once.',
    },
  ],
  hints: [
    'Build a frequency map (object or Map) counting each element.',
    'Collect keys where freq === 2, convert to numbers, and sort ascending.',
    'In Python, a Counter makes this two lines: [k for k,v in Counter(nums).items() if v==2], sorted.',
  ],
  functionName: 'findElementsAppearingExactlyTwice',
  params: ['nums'],
  starterCode: {
    javascript: `function findElementsAppearingExactlyTwice(nums) {

}`,
    typescript: `function findElementsAppearingExactlyTwice(nums: number[]): number[] {

}`,
    python: `def findElementsAppearingExactlyTwice(nums: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 3, 4]], expected: [2, 3] },
    { args: [[5, 5, 5]], expected: [] },
    { args: [[1, 1, 2, 3, 3]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[1, 1]], expected: [1] },
    { args: [[1, 2, 3]], expected: [] },
    { args: [[2, 2, 3, 3, 4, 4]], expected: [2, 3, 4] },
    { args: [[1, 1, 1, 2, 2]], expected: [2] },
    { args: [[7, 7, 8, 8, 9]], expected: [7, 8] },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]], expected: [1, 3, 5] },
    { args: [[10, 10, 20, 20, 30]], expected: [10, 20] },
  ],
};
