import type { Problem } from '../types';

const JS_PREAMBLE = `
function threeSumRunner(nums) {
  const result = threeSum(nums);
  return result
    .map(t => [...t].sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}
`.trim();

const PY_PREAMBLE = `
def threeSumRunner(nums):
    result = threeSum(list(nums))
    normalized = [sorted(t) for t in result]
    normalized.sort()
    return normalized
`.trim();

export const problem: Problem = {
  id: '3sum',
  title: '3Sum',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

The solution set must **not contain duplicate triplets**.

> **Note:** The runner sorts each triplet and then sorts all triplets lexicographically before comparing, so the order your function returns them does not matter.`,
  constraints: [
    '0 <= nums.length <= 3000',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'The distinct zero-sum triplets are [-1,-1,2] and [-1,0,1].',
    },
    {
      input: 'nums = [0,1,1]',
      output: '[]',
      explanation: 'The only possible triplet does not sum to 0.',
    },
    {
      input: 'nums = [0,0,0]',
      output: '[[0,0,0]]',
    },
  ],
  hints: [
    'Sort the array first. For a fixed first element nums[i], the problem reduces to 2Sum on the remaining sorted subarray.',
    'Use two pointers (left = i+1, right = n-1). Move left right when sum < 0, move right left when sum > 0, record the triplet when sum == 0.',
    'Skip duplicate values: after fixing i, skip nums[i] == nums[i-1]. After recording a triplet, advance both pointers and skip duplicates to avoid duplicate triplets.',
  ],
  functionName: 'threeSumRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `function threeSum(nums) {

}`,
    typescript: "function threeSumRunner(nums: number[]): number[][] {\n\n}",

    python: `def threeSum(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[0]], expected: [] },
    { args: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
    { args: [[1, 2, -2, -1]], expected: [] },
    { args: [[0, 0, 0, 0]], expected: [[0, 0, 0]] },
    { args: [[-4, -2, -2, -2, 0, 1, 2, 2, 3]], expected: [[-4, 1, 3], [-4, 2, 2], [-2, 0, 2]] },
  ],
};
