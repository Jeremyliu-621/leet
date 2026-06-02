import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-maximum-bitwise-and',
  title: 'Count Subarrays With Maximum Bitwise AND',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an array \`nums\` of positive integers. You need to find the number of **subarrays** whose **bitwise AND** is equal to the **maximum** bitwise AND of any subarray of \`nums\`.

The **bitwise AND** of a subarray is the bitwise AND of all elements within the subarray.

Return the **number of such subarrays**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '1',
      explanation: 'The maximum bitwise AND of any subarray is max(nums) = 3. Only the single-element subarray [3] has AND = 3 (adding any other element reduces AND). Answer = 1.',
    },
    {
      input: 'nums = [1,2,3,3,2,2]',
      output: '3',
      explanation: 'max(nums) = 3. The consecutive group of 3s is at indices 2-3 (length 2). It contributes 2*(2+1)/2 = 3 subarrays: [3] at idx 2, [3] at idx 3, [3,3] at idx 2-3. Answer = 3.',
    },
  ],
  hints: [
    'The maximum bitwise AND of any subarray equals max(nums), since AND is monotonically non-increasing as you extend the subarray, and a single-element subarray [max] achieves max(nums).',
    'A subarray [l, r] has AND = max(nums) if and only if every element in it equals max(nums) (because AND of any number less than max with max will be less than max).',
    'Count consecutive groups of elements equal to max(nums). For each group of length L, it contributes L*(L+1)/2 subarrays.',
  ],
  functionName: 'countSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countSubarrays(nums) {
  const maxVal = Math.max(...nums);
  let ans = 0, run = 0;
  for (const x of nums) {
    if (x === maxVal) {
      run++;
      ans += run;
    } else {
      run = 0;
    }
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[]): number {
  const maxVal = Math.max(...nums);
  let ans = 0, run = 0;
  for (const x of nums) {
    if (x === maxVal) {
      run++;
      ans += run;
    } else {
      run = 0;
    }
  }
  return ans;
}`,
    python: `def countSubarrays(nums: list[int]) -> int:
    max_val = max(nums)
    ans = run = 0
    for x in nums:
        if x == max_val:
            run += 1
            ans += run
        else:
            run = 0
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 3, 2, 2]], expected: 3 },
    { args: [[1, 1, 1]], expected: 6 },
    { args: [[5]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 3]], expected: 3 },
    { args: [[1, 3, 1, 3]], expected: 2 },
    { args: [[2, 2, 3, 2, 2]], expected: 1 },
    { args: [[5, 5, 5, 5, 5]], expected: 15 },
    { args: [[1, 2, 4, 3, 4, 4, 1]], expected: 4 },
    { args: [[10, 5, 10, 10, 5]], expected: 4 },
    { args: [[7, 7, 7, 1, 7]], expected: 7 },
  ],
};
