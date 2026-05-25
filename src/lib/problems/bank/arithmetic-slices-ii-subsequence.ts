import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arithmetic-slices-ii-subsequence',
  title: 'Arithmetic Slices II - Subsequence',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given an integer array \`nums\`, return the number of all **arithmetic subsequences** of \`nums\`.

A sequence of numbers is called **arithmetic** if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

A **subsequence** of an array is a sequence that can be formed by removing some elements (possibly none) of the array without changing the order of the remaining elements.

**Note:** The answer may be very large, so return it modulo \`10^9 + 7\`. However, for the given constraints, the answer fits in a 32-bit signed integer without the modulo.

**Function signature:** \`numberOfArithmeticSlices(nums)\`

**Example:**
- nums=[2,4,6,8,10] → 7 (e.g. [2,4,6], [4,6,8], [6,8,10], [2,4,6,8], [4,6,8,10], [2,4,6,8,10], [2,6,10])
- nums=[7,7,7,7,7] → 16`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [2,4,6,8,10]',
      output: '7',
      explanation: 'All arithmetic subsequences of length ≥ 3: [2,4,6],[4,6,8],[6,8,10],[2,4,6,8],[4,6,8,10],[2,4,6,8,10],[2,6,10].',
    },
    {
      input: 'nums = [7,7,7,7,7]',
      output: '16',
    },
  ],
  hints: [
    'Level 1: A brute-force approach checking all subsequences is too slow. Think DP: for each pair (i, j) with i < j, track how many arithmetic subsequences of length ≥ 2 end at index j with common difference nums[j]-nums[i].',
    'Level 2: Let dp[i] be a Map from difference d → count of arithmetic subsequences of length ≥ 2 ending at index i with difference d. For each j > i, d = nums[j]-nums[i]; the number of new length≥3 subsequences contributed is dp[i].get(d) ?? 0; add that to the answer and set dp[j][d] += (dp[i].get(d) ?? 0) + 1.',
    'Level 3: const dp=Array.from({length:n},()=>new Map()); let ans=0; for(let j=1;j<n;j++){for(let i=0;i<j;i++){const d=nums[j]-nums[i];const c=dp[i].get(d)??0;ans+=c;dp[j].set(d,(dp[j].get(d)??0)+c+1);}} return ans;',
  ],
  functionName: 'numberOfArithmeticSlices',
  params: ['nums'],
  starterCode: {
    javascript: 'function numberOfArithmeticSlices(nums) {\n  \n}\n',
    python: 'def numberOfArithmeticSlices(nums):\n    ',
  },
  visibleTests: [
    { args: [[2, 4, 6, 8, 10]], expected: 7 },
    { args: [[7, 7, 7, 7, 7]], expected: 16 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[0, 2000000000, -294967296]], expected: 0 },
    { args: [[2, 4, 6, 8]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 5 },
  ],
};
