import type { Problem } from '../types';

export const problem: Problem = {
  id: 'set-mismatch',
  title: 'Set Mismatch',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You have a set of integers \`s\`, which originally contains all the numbers from \`1\` to \`n\`. Unfortunately, due to some error, one of the numbers in \`s\` got duplicated to another number in the set, which results in **repetition of one** number and **loss of one** number.

You are given an integer array \`nums\` representing the data status of this set after the error. Find the number that occurs twice and the number that is missing and return them in the form of an array \`[duplicate, missing]\`.`,
  constraints: [
    '2 <= nums.length <= 10^4',
    '1 <= nums[i] <= nums.length',
  ],
  examples: [
    { input: 'nums = [1,2,2,4]', output: '[2,3]', explanation: '2 appears twice; 3 is missing.' },
    { input: 'nums = [1,1]', output: '[1,2]' },
  ],
  hints: [
    'Level 1: Use a frequency count or a visited array. The number that appears twice is the duplicate; the number with count 0 is the missing one.',
    'Level 2: Iterate counts[1..n]. The one with count 2 is duplicate, count 0 is missing.',
    'Level 3: const cnt=new Array(nums.length+1).fill(0);for(const x of nums)cnt[x]++;let dup=-1,miss=-1;for(let i=1;i<=nums.length;i++){if(cnt[i]===2)dup=i;if(cnt[i]===0)miss=i;}return[dup,miss];',
  ],
  functionName: 'findErrorNums',
  params: ['nums'],
  starterCode: {
    javascript: 'function findErrorNums(nums) {\n  // your code here\n}\n',
    python: 'def findErrorNums(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 4]], expected: [2, 3] },
    { args: [[1, 1]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: [2, 1] },
    { args: [[3, 2, 3, 4, 5]], expected: [3, 1] },
    { args: [[1, 2, 3, 4, 4]], expected: [4, 5] },
    { args: [[2, 3, 2]], expected: [2, 1] },
  ],
};
