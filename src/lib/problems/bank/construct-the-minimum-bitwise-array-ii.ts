import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-the-minimum-bitwise-array-ii',
  title: 'Construct the Minimum Bitwise Array II',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an array \`nums\` of **prime** numbers.

For each \`nums[i]\`, find the **smallest** non-negative integer \`x\` such that:

\`\`\`
x | (x + 1) == nums[i]
\`\`\`

where \`|\` denotes the bitwise OR operation.

Return an array \`ans\` where \`ans[i]\` is the answer for \`nums[i]\`, or \`-1\` if no such \`x\` exists.

**Note:** This is the same problem as Construct the Minimum Bitwise Array I, but with much larger prime values (up to 10^8), so O(p) brute-force is not acceptable.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '2 <= nums[i] <= 10^8',
    'nums[i] is guaranteed to be prime.',
  ],
  examples: [
    {
      input: 'nums = [2,3,5,7]',
      output: '[-1,1,4,3]',
      explanation: 'p=2: no x (2 is even, x|x+1 is always odd). p=3: x=1→1|2=3. p=5: x=4→4|5=5. p=7: x=3→3|4=7.',
    },
    {
      input: 'nums = [11,13]',
      output: '[9,12]',
      explanation: 'p=11=1011₂ has 2 trailing ones → x = p ^ 2 = 9. p=13=1101₂ has 1 trailing one → x = p ^ 1 = 12.',
    },
  ],
  hints: [
    'Level 1: x | (x+1) = p iff p is the OR of two consecutive integers. Since x+1 = x with trailing 1s flipped to 0 and next 0 set to 1, the OR fills in that next-0 bit. p must be odd (prime ≠ 2 is always odd).',
    'Level 2: The number of trailing 1s of p is m = trailing zeros of (p+1). The formula is x = p ^ (1 << (m-1)), or equivalently x = p ^ (((p+1) & -(p+1)) >> 1). This runs in O(1) per prime.',
    'Level 3: Verification: if p = ...A 1^m (m trailing ones), then x = ...A 0 1^(m-1), x+1 = ...A 1 0^(m-1), and x|x+1 = ...A 1 1^(m-1) = p. p=2 is the only even prime, and x|x+1 is always odd, so return -1.',
  ],
  functionName: 'minBitwiseArray',
  params: ['nums'],
  starterCode: {
    javascript: `function minBitwiseArray(nums) {
  return nums.map(p => {
    if (p === 2) return -1;
    // trailing ones of p = trailing zeros of (p+1) = log2 of lowest set bit of (p+1)
    const lsb = (p + 1) & -(p + 1); // lowest set bit of (p+1) = 2^m
    return p ^ (lsb >> 1);           // clear bit at position m-1
  });
}`,
    typescript: `function minBitwiseArray(nums: number[]): number[] {
  return nums.map(p => {
    if (p === 2) return -1;
    const lsb = (p + 1) & -(p + 1);
    return p ^ (lsb >> 1);
  });
}`,
    python: `def minBitwiseArray(nums):
    result = []
    for p in nums:
        if p == 2:
            result.append(-1)
        else:
            lsb = (p + 1) & -(p + 1)  # lowest set bit of p+1 = 2^m
            result.append(p ^ (lsb >> 1))
    return result`,
  },
  visibleTests: [
    { args: [[2, 3, 5, 7]], expected: [-1, 1, 4, 3] },
    { args: [[11, 13]], expected: [9, 12] },
  ],
  hiddenTests: [
    { args: [[2]], expected: [-1] },
    { args: [[3, 5, 7]], expected: [1, 4, 3] },
    { args: [[31]], expected: [15] },
    { args: [[23, 29]], expected: [19, 28] },
    { args: [[97]], expected: [96] },
    { args: [[101]], expected: [100] },
    { args: [[127]], expected: [63] },
    { args: [[524287]], expected: [262143] },
  ],
};
