import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-distinct-integers-after-reverse-operations',
  title: 'Count Number of Distinct Integers After Reverse Operations',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

You have to take each integer in the array, **reverse its digits**, and add it to the end of the array. You should apply this operation to the original integers in \`nums\`.

Return the number of **distinct** integers in the final array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,13,10,12,31]',
      output: '6',
      explanation: 'Reversed: [1,31,1,21,13]. Union of original and reversed: {1,13,10,12,31,21}. 6 distinct values.',
    },
    {
      input: 'nums = [2,2,2]',
      output: '1',
      explanation: 'All elements and their reverses are 2. Only 1 distinct value.',
    },
  ],
  hints: [
    'Add all original numbers and their reverses into a Set. Return the Set size.',
    'To reverse a number: reverse(n) = parseInt(String(n).split("").reverse().join("")).',
    'Since nums[i] <= 10^6, reversal is straightforward — just convert to string, reverse, and parse.',
  ],
  functionName: 'countDistinctIntegers',
  params: ['nums'],
  starterCode: {
    javascript: `function countDistinctIntegers(nums) {
  const rev = n => Number(String(n).split('').reverse().join(''));
  const seen = new Set(nums);
  for (const n of nums) seen.add(rev(n));
  return seen.size;
}`,
    typescript: `function countDistinctIntegers(nums: number[]): number {
  const rev = (n: number) => Number(String(n).split('').reverse().join(''));
  const seen = new Set(nums);
  for (const n of nums) seen.add(rev(n));
  return seen.size;
}`,
    python: `def countDistinctIntegers(nums):
    seen = set(nums)
    for n in nums:
        seen.add(int(str(n)[::-1]))
    return len(seen)`,
  },
  visibleTests: [
    { args: [[1, 13, 10, 12, 31]], expected: 6 },
    { args: [[2, 2, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[10]], expected: 2 },
    { args: [[123, 321]], expected: 2 },
    { args: [[100, 200, 300]], expected: 6 },
  ],
};
