import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-the-minimum-bitwise-array-i',
  title: 'Construct the Minimum Bitwise Array I',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an array \`nums\` of **prime** numbers.

For each \`nums[i]\`, find the **smallest** non-negative integer \`x\` such that:

\`\`\`
x | (x + 1) == nums[i]
\`\`\`

where \`|\` denotes the bitwise OR operation.

Return an array \`ans\` where \`ans[i]\` is the answer for \`nums[i]\`, or \`-1\` if no such \`x\` exists.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`2 <= nums[i] <= 1000`',
    '`nums[i]` is a prime number.',
  ],
  examples: [
    {
      input: 'nums = [2,3,5,7]',
      output: '[-1,1,4,3]',
      explanation: 'For 2: no x works (x|x+1 is always ≥ x with lowest bit set, never equals even 2). For 3: x=1 → 1|2=3 ✓. For 5: x=4 → 4|5=5 ✓. For 7: x=3 → 3|4=7 ✓.',
    },
    {
      input: 'nums = [11,13]',
      output: '[9,12]',
      explanation: 'For 11: x=9 → 9|10=11 ✓. For 13: x=12 → 12|13=13 ✓.',
    },
  ],
  hints: [
    'For each prime `p`, iterate `x` from `0` to `p - 1` and return the first `x` where `x | (x + 1) == p`.',
    'Note that `x | (x + 1)` always has all bits of `x` set plus the next bit, so it is always at least `x`. No value above `p - 1` can work as the OR result would exceed `p`.',
    'The prime `2` is the only even prime, and `x | (x + 1)` is always odd for any `x` (since `x` and `x+1` have complementary last bits), so `2` always returns `-1`.',
    `\`\`\`js
function minBitwiseArray(nums) {
  return nums.map(p => {
    for (let x = 0; x < p; x++) {
      if ((x | (x + 1)) === p) return x;
    }
    return -1;
  });
}\`\`\``,
  ],
  functionName: 'minBitwiseArray',
  params: ['nums'],
  starterCode: {
    javascript: `function minBitwiseArray(nums) {
  return nums.map(p => {
    for (let x = 0; x < p; x++) {
      if ((x | (x + 1)) === p) return x;
    }
    return -1;
  });
}`,
    typescript: `function minBitwiseArray(nums: number[]): number[] {
  return nums.map(p => {
    for (let x = 0; x < p; x++) {
      if ((x | (x + 1)) === p) return x;
    }
    return -1;
  });
}`,
    python: `def minBitwiseArray(nums):
    result = []
    for p in nums:
        found = -1
        for x in range(p):
            if (x | (x + 1)) == p:
                found = x
                break
        result.append(found)
    return result`,
  },
  visibleTests: [
    { args: [[2,3,5,7]], expected: [-1,1,4,3] },
    { args: [[11,13]], expected: [9,12] },
  ],
  hiddenTests: [
    { args: [[2]], expected: [-1] },
    { args: [[3,5,7]], expected: [1,4,3] },
    { args: [[31]], expected: [15] },
    { args: [[23,29]], expected: [19,28] },
    { args: [[3]], expected: [1] },
    { args: [[5]], expected: [4] },
    { args: [[7]], expected: [3] },
  ],
};
