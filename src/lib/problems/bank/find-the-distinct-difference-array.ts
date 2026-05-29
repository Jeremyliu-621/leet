import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-distinct-difference-array',
  title: 'Find the Distinct Difference Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` of length \`n\`.

The **distinct difference** array of \`nums\` is an array \`diff\` of length \`n\` where:
- \`diff[i]\` = (number of distinct values in \`nums[0..i]\`) − (number of distinct values in \`nums[i+1..n-1]\`)

Return the **distinct difference** array of \`nums\`.

**Note:** \`nums[0..i]\` denotes the prefix of length \`i + 1\`, and \`nums[i+1..n-1]\` denotes the suffix starting at index \`i + 1\` (empty suffix has 0 distinct values).`,
  constraints: [
    '1 <= n == nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '[-3,-1,1,3,5]',
      explanation: 'All elements are distinct. At i=0: prefix has 1 distinct, suffix has 4 → 1-4=-3. At i=2: 3-2=1. At i=4: 5-0=5.',
    },
    {
      input: 'nums = [3,2,3,4,2]',
      output: '[-2,-1,0,2,3]',
      explanation: 'i=0: {3}→1 minus {2,3,4,2}→3 = -2. i=2: {3,2}→2 minus {4,2}→2 = 0. i=4: {3,2,4}→3 minus {} = 3.',
    },
  ],
  hints: [
    'Build the prefix distinct counts left-to-right: maintain a running set and record its size at each step.',
    'Build the suffix distinct counts right-to-left: maintain a running set and record its size at each step.',
    'diff[i] = prefixDistinct[i] - suffixDistinct[i+1], where suffixDistinct[n] = 0.',
  ],
  functionName: 'distinctDifferenceArray',
  params: ['nums'],
  starterCode: {
    javascript: `function distinctDifferenceArray(nums) {\n\n}`,
    python: `def distinctDifferenceArray(nums: list[int]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [-3, -1, 1, 3, 5] },
    { args: [[3, 2, 3, 4, 2]], expected: [-2, -1, 0, 2, 3] },
  ],
  hiddenTests: [
    // single element
    { args: [[1]], expected: [1] },
    // all same — prefix always 1 distinct, suffix always 1 (until empty)
    { args: [[1, 1, 1, 1]], expected: [0, 0, 0, 1] },
    // two elements
    { args: [[2, 1, 2]], expected: [-1, 1, 2] },
    // all same, single value
    { args: [[5, 5, 5]], expected: [0, 0, 1] },
    // alternating pairs
    { args: [[1, 2, 1, 2]], expected: [-1, 0, 1, 2] },
    // repeating pattern
    { args: [[10, 20, 10, 20, 10]], expected: [-1, 0, 0, 1, 2] },
    // three distinct ascending
    { args: [[1, 2, 3]], expected: [-1, 1, 3] },
    // repeated then unique
    { args: [[3, 3, 3, 2, 2, 1]], expected: [-2, -2, -1, 0, 1, 3] },
    // two-element with duplicates
    { args: [[1, 1]], expected: [0, 1] },
    // prefix grows slowly — correct: diff[1] = 2 - suffixDistinct[2] = 2 - 2 = 0
    { args: [[1, 2, 1, 3, 1]], expected: [-2, 0, 0, 2, 3] },
  ],
};
