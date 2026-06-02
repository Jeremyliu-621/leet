import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-triplets-that-can-form-two-arrays-of-equal-xor',
  title: 'Count Triplets That Can Form Two Arrays of Equal XOR',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `Given an array of integers \`nums\`, return the number of triplets \`(i, j, k)\` such that \`0 <= i < j <= k < nums.length\` and \`a == b\`, where:

- \`a = nums[i] XOR nums[i + 1] XOR ... XOR nums[j - 1]\`
- \`b = nums[j] XOR nums[j + 1] XOR ... XOR nums[k]\``,
  constraints: [
    '1 <= nums.length <= 300',
    '1 <= nums[i] < 2^8',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,6,7]',
      output: '4',
      explanation: 'The valid triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4).',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '10',
      explanation: 'Any triplet (i,j,k) is valid since all XOR subranges equal 0 or 1 consistently.',
    },
  ],
  hints: [
    'If a == b then a XOR b == 0, meaning nums[i] XOR ... XOR nums[k] == 0.',
    'Use prefix XOR: if prefix[i] == prefix[k+1], then the XOR of nums[i..k] is 0.',
    'For each valid pair (i, k) with prefix[i] == prefix[k+1], j can be any value in (i, k], giving (k - i) valid triplets.',
  ],
  functionName: 'countTriplets',
  params: ['nums'],
  starterCode: {
    javascript: `function countTriplets(nums) {
  const n = nums.length;
  let ans = 0;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] ^ nums[i];
  for (let i = 0; i < n - 1; i++) {
    for (let k = i + 1; k < n; k++) {
      if (prefix[k + 1] === prefix[i]) ans += k - i;
    }
  }
  return ans;
}`,
    typescript: `function countTriplets(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! ^ nums[i]!;
  for (let i = 0; i < n - 1; i++) {
    for (let k = i + 1; k < n; k++) {
      if (prefix[k + 1]! === prefix[i]!) ans += k - i;
    }
  }
  return ans;
}`,
    python: `def countTriplets(nums):
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] ^ nums[i]
    ans = 0
    for i in range(n - 1):
        for k in range(i + 1, n):
            if prefix[k + 1] == prefix[i]:
                ans += k - i
    return ans`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 6, 7]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 10 },
    { args: [[1, 2, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[7]], expected: 0 },
    { args: [[1, 3, 5, 7, 9]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 6 },
    { args: [[0, 0]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 5 },
    { args: [[2, 2, 2, 2]], expected: 6 },
    { args: [[15, 1, 14, 2, 13]], expected: 5 },
  ],
};
