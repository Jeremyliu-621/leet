import type { Problem } from '../types';

export const problem: Problem = {
  id: 'average-value-of-even-numbers-divisible-by-three',
  title: 'Average Value of Even Numbers That Are Divisible by Three',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` of **positive** integers, return the **average** value of all even integers that are divisible by \`3\`.

Note that the **average** of \`n\` elements is the **sum** of the \`n\` elements divided by \`n\` and **rounded down** to the nearest integer.

If there are no such elements, return \`0\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,10,12,15]',
      output: '9',
      explanation: 'Even numbers divisible by 3: 6 and 12. Average = floor((6+12)/2) = floor(9) = 9.',
    },
    {
      input: 'nums = [1,2,4,7,10]',
      output: '0',
      explanation: 'No even numbers divisible by 3. Return 0.',
    },
  ],
  hints: [
    'Level 1: Filter nums for values that are both even (divisible by 2) and divisible by 3. An integer divisible by both 2 and 3 is divisible by 6.',
    'Level 2: Collect all values divisible by 6. If none, return 0. Otherwise return Math.floor(sum / count).',
    'Level 3: Single pass: `let sum=0,cnt=0; for(const v of nums){ if(v%6===0){sum+=v;cnt++;} } return cnt?Math.floor(sum/cnt):0;`',
  ],
  functionName: 'averageValue',
  params: ['nums'],
  starterCode: {
    javascript: `function averageValue(nums) {
  let sum = 0, cnt = 0;
  for (const v of nums) if (v % 6 === 0) { sum += v; cnt++; }
  return cnt ? Math.floor(sum / cnt) : 0;
}`,
    typescript: `function averageValue(nums: number[]): number {
  let sum = 0, cnt = 0;
  for (const v of nums) if (v % 6 === 0) { sum += v; cnt++; }
  return cnt ? Math.floor(sum / cnt) : 0;
}`,
    python: `def averageValue(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    vals = [v for v in nums if v % 6 == 0]
    return sum(vals) // len(vals) if vals else 0`,
  },
  visibleTests: [
    {
      args: [[1,3,6,10,12,15]],
      expected: 9,
    },
    {
      args: [[1,2,4,7,10]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[6]],
      expected: 6,
    },
    {
      args: [[1]],
      expected: 0,
    },
    {
      args: [[6,12,18,24]],
      expected: 15,
    },
    {
      args: [[3,6,9,12]],
      expected: 9,
    },
    {
      args: [[2,4,8,10]],
      expected: 0,
    },
  ],
};
