import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-distinct-integers-after-reverse-operations',
  title: 'Count Distinct Integers After Reverse Operations',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

You have to take each integer in the array, **reverse its digits**, and add it to the end of the array. You should apply this operation to the **original** integers in \`nums\`.

Return the number of **distinct** integers in the final array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,13,10,12,31]',
      output: '6',
      explanation: 'Reversed: [1,31,1,21,13]. Combined: [1,13,10,12,31,1,31,1,21,13]. Distinct: {1,10,12,13,21,31} = 6.',
    },
    {
      input: 'nums = [2,2,2]',
      output: '1',
      explanation: 'Reversed: [2,2,2]. All values are 2, so 1 distinct.',
    },
  ],
  hints: [
    'Add all original numbers to a Set, then add their reverses too.',
    'To reverse a number, convert to string, reverse, convert back to integer.',
    'Return the Set size.',
  ],
  functionName: 'countDistinctIntegers',
  params: ['nums'],
  starterCode: {
    javascript: `function countDistinctIntegers(nums) {
  const seen = new Set(nums);
  for (const n of nums) {
    seen.add(parseInt(String(n).split('').reverse().join(''), 10));
  }
  return seen.size;
}`,
    typescript: `function countDistinctIntegers(nums: number[]): number {
  const seen = new Set(nums);
  for (const n of nums) {
    seen.add(parseInt(String(n).split('').reverse().join(''), 10));
  }
  return seen.size;
}`,
    python: `def countDistinctIntegers(nums):
    seen = set(nums)
    for n in nums:
        seen.add(int(str(n)[::-1]))
    return len(seen)
`,
  },
  visibleTests: [
    { args: [[1, 13, 10, 12, 31]], expected: 6 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 13, 10, 12, 31]], expected: 6 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1]], expected: 1 },
    { args: [[100]], expected: 2 },
    { args: [[123, 321]], expected: 2 },
    { args: [[10, 20, 30]], expected: 6 },
    { args: [[11, 22, 33]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
};
