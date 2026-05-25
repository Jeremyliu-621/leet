import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-fair-pairs',
  title: 'Count the Number of Fair Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\` and two integers \`lower\` and \`upper\`, return the number of fair pairs.

A pair \`(i, j)\` is **fair** if:
- \`0 <= i < j < n\`, and
- \`lower <= nums[i] + nums[j] <= upper\`.

**Approach:** Sort the array. Define \`countAtMost(limit)\` = number of pairs summing ≤ \`limit\` using two pointers. Answer = \`countAtMost(upper) - countAtMost(lower - 1)\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums.length == n',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= lower <= upper <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [0,1,7,4,4,5], lower = 3, upper = 6',
      output: '6',
      explanation: 'Fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), (1,5).',
    },
    {
      input: 'nums = [1,7,9,2,5], lower = 11, upper = 11',
      output: '1',
      explanation: 'Only (2,3) i.e. 9+2=11 is a fair pair.',
    },
    {
      input: 'nums = [1,2,3,4], lower = 3, upper = 5',
      output: '4',
      explanation: 'Pairs (0,1)=3, (0,2)=4, (0,3)=5, (1,2)=5. All fair.',
    },
  ],
  hints: [
    'Sort the array. Use a helper `countAtMost(limit)` that returns pairs summing ≤ limit.',
    'Two-pointer in `countAtMost`: l=0, r=n-1. If nums[l]+nums[r] ≤ limit: count += r-l (all pairs with left=l and right from l+1 to r), l++. Else r--.',
    'Answer = countAtMost(upper) - countAtMost(lower - 1).',
    '```js\nnums.sort((a, b) => a - b);\nconst countAtMost = (limit) => {\n  let l = 0, r = nums.length - 1, cnt = 0;\n  while (l < r) {\n    if (nums[l] + nums[r] <= limit) { cnt += r - l; l++; }\n    else r--;\n  }\n  return cnt;\n};\nreturn countAtMost(upper) - countAtMost(lower - 1);\n```',
  ],
  functionName: 'countFairPairs',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: `function countFairPairs(nums, lower, upper) {
  // return count of pairs (i, j) where lower <= nums[i]+nums[j] <= upper

}`,
    python: `def countFairPairs(nums: list, lower: int, upper: int) -> int:
    # return count of pairs (i, j) where lower <= nums[i]+nums[j] <= upper
    pass
`,
  },
  visibleTests: [
    { args: [[0, 1, 7, 4, 4, 5], 3, 6], expected: 6 },
    { args: [[1, 7, 9, 2, 5], 11, 11], expected: 1 },
    { args: [[1, 2, 3, 4], 3, 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1, 2], expected: 0 },
    { args: [[1, 2], 3, 3], expected: 1 },
    { args: [[0, 0, 0], 0, 0], expected: 3 },
    { args: [[0, 1, 2], 1, 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 6, 8], expected: 5 },
    { args: [[1, 1, 1, 1], 2, 2], expected: 6 },
    { args: [[5, 5, 5], 9, 11], expected: 3 },
  ],
};
