import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-array-concatenation-value',
  title: 'Find the Array Concatenation Value',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`.

The **concatenation value** starts at \`0\`. Repeatedly:
- If \`nums\` has more than one element, take the **first** and **last** element, concatenate them as a number string, add that number to the concatenation value, and remove both elements.
- If only one element remains, add it directly to the concatenation value and remove it.

Return the concatenation value of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [7,52,2,4]',
      output: '596',
      explanation: 'Concatenate 7 and 4 → 74. Concatenate 52 and 2 → 522. Total = 74 + 522 = 596.',
    },
    {
      input: 'nums = [5,14,13,8,12]',
      output: '673',
      explanation: 'Concatenate 5 and 12 → 512. Concatenate 14 and 8 → 148. Middle element 13. Total = 512 + 148 + 13 = 673.',
    },
  ],
  hints: [
    'Level 1: Use two pointers, one at the start and one at the end.',
    'Level 2: Convert first and last to strings, concatenate, then parse back to a number.',
    'Level 3: let l=0,r=nums.length-1,val=0;while(l<r){val+=parseInt(`${nums[l]}${nums[r]}`);l++;r--;}if(l===r)val+=nums[l]??0;return val;',
  ],
  functionName: 'findTheArrayConcVal',
  params: ['nums'],
  starterCode: {
    javascript: `function findTheArrayConcVal(nums) {
  let l = 0, r = nums.length - 1, val = 0;
  while (l < r) {
    val += parseInt(\`\${nums[l]}\${nums[r]}\`);
    l++; r--;
  }
  if (l === r) val += nums[l];
  return val;
}`,
    typescript: `function findTheArrayConcVal(nums: number[]): number {
  let l = 0, r = nums.length - 1, val = 0;
  while (l < r) {
    val += parseInt(\`\${nums[l]!}\${nums[r]!}\`);
    l++; r--;
  }
  if (l === r) val += nums[l]!;
  return val;
}`,
    python: `def findTheArrayConcVal(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    l, r, val = 0, len(nums) - 1, 0
    while l < r:
        val += int(str(nums[l]) + str(nums[r]))
        l += 1; r -= 1
    if l == r:
        val += nums[l]
    return val`,
  },
  visibleTests: [
    { args: [[7, 52, 2, 4]], expected: 596 },
    { args: [[5, 14, 13, 8, 12]], expected: 673 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 12 },
    { args: [[9, 9]], expected: 99 },
    { args: [[1, 2, 3]], expected: 15 },
    { args: [[10, 20, 30]], expected: 1030 + 20 },
    { args: [[3, 1, 4, 1, 5]], expected: 35 + 11 + 4 },
  ],
};
