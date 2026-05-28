import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-arrays-similar',
  title: 'Minimum Number of Operations to Make Arrays Similar',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given two positive integer arrays \`nums\` and \`target\` of the same length \`n\`.

In one operation, you can choose any two indices \`i\` and \`j\` from \`nums\` and perform:
- \`nums[i] += 2\`
- \`nums[j] -= 2\`

You are **guaranteed** that it is possible to make \`nums\` similar to \`target\`. Two arrays are **similar** if they contain the same multiset of values.

Return the **minimum** number of operations needed.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= nums[i], target[i] <= 10^6',
    'It is guaranteed that nums can be made similar to target.',
  ],
  examples: [
    {
      input: 'nums = [8,12,6], target = [2,10,14]',
      output: '2',
      explanation:
        'Even elements sorted: nums=[6,8,12], target=[2,10,14]. Pairs: (6→2): −4, (8→10): +2, (12→14): +2. Positive increments: 2+2=4, each +2 step is 1 op → 2 ops.',
    },
    {
      input: 'nums = [1,2,5], target = [1,4,3]',
      output: '1',
      explanation: 'Even: nums=[2] → target=[4], diff +2 → 1 op. Odd: no positive diffs. Total = 1.',
    },
    {
      input: 'nums = [1,1,1,1], target = [1,1,1,1]',
      output: '0',
      explanation: 'Arrays are already identical, no operations needed.',
    },
  ],
  hints: [
    'Each operation adds 2 to one element and subtracts 2 from another. This means the parity of every element is preserved — even elements stay even, odd elements stay odd.',
    'Separate nums and target into even and odd sub-arrays, then sort each independently. Pair them by index (greedy sort-pair strategy).',
    'The answer equals the total positive difference divided by 2: sum max(0, target[i] − nums[i]) / 2 over even pairs plus the same over odd pairs.',
  ],
  functionName: 'makeSimilar',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function makeSimilar(nums, target) {

}`,
    python: `def makeSimilar(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[8, 12, 6], [2, 10, 14]], expected: 2 },
    { args: [[1, 2, 5], [1, 4, 3]], expected: 1 },
    { args: [[1, 1, 1, 1], [1, 1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2, 4], [4, 2]], expected: 0 },
    { args: [[1, 3], [3, 1]], expected: 0 },
    { args: [[2], [4]], expected: 1 },
    { args: [[2, 2, 2, 2], [4, 4, 0, 0]], expected: 2 },
  ],
};
