import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-elements-distinct',
  title: 'All Elements Distinct',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return \`true\` if all elements are **distinct** (no duplicates), or \`false\` otherwise.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: 'true',
      explanation: 'All five elements are different.',
    },
    {
      input: 'nums = [1,2,2,3]',
      output: 'false',
      explanation: '2 appears twice.',
    },
    {
      input: 'nums = [7]',
      output: 'true',
      explanation: 'A single-element array always has all distinct elements.',
    },
  ],
  hints: [
    'Build a Set from nums. If Set size equals nums.length, all elements are distinct.',
    'Alternatively, iterate and use a Set; return false as soon as you see a duplicate.',
    'In Python, len(set(nums)) == len(nums) is the idiomatic one-liner.',
  ],
  functionName: 'allElementsDistinct',
  params: ['nums'],
  starterCode: {
    javascript: `function allElementsDistinct(nums) {

}`,
    typescript: `function allElementsDistinct(nums: number[]): boolean {

}`,
    python: `def allElementsDistinct(nums: list[int]) -> bool:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[1, 2, 2, 3]], expected: false },
    { args: [[7]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: false },
    { args: [[0, 1, 2]], expected: true },
    { args: [[-1, -2, -3]], expected: true },
    { args: [[1, 2, 3, 1]], expected: false },
    { args: [[0, 0, 0]], expected: false },
    { args: [[5, 4, 3, 2, 1]], expected: true },
    { args: [[10, 20, 10]], expected: false },
    { args: [[-5, 0, 5]], expected: true },
  ],
};
