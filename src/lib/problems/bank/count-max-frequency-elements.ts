import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-max-frequency-elements',
  title: 'Count Elements With Maximum Frequency',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

Return the **total frequencies** of elements in \`nums\` such that those elements all have the **maximum** frequency.

The **frequency** of an element is the number of occurrences of that element in the array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,1,4]',
      output: '4',
      explanation: 'Elements 1 and 2 both appear 2 times (the max), so the total is 2+2=4.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '5',
      explanation: 'All elements appear exactly once (max freq = 1), so total is 5.',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each element, then find the maximum frequency.',
    'Level 2: Sum the frequencies of all elements whose frequency equals the maximum.',
    'Level 3: const freq=new Map();for(const n of nums)freq.set(n,(freq.get(n)??0)+1);const max=Math.max(...freq.values());return[...freq.values()].filter(f=>f===max).reduce((a,b)=>a+b,0);',
  ],
  functionName: 'maxFrequencyElements',
  params: ['nums'],
  starterCode: {
    javascript: `function maxFrequencyElements(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const max = Math.max(...freq.values());
  return [...freq.values()].filter(f => f === max).reduce((a, b) => a + b, 0);
}`,
    typescript: `function maxFrequencyElements(nums: number[]): number {
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const max = Math.max(...freq.values());
  return [...freq.values()].filter(f => f === max).reduce((a, b) => a + b, 0);
}`,
    python: `def maxFrequencyElements(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    freq = {}
    for n in nums:
        freq[n] = freq.get(n, 0) + 1
    mx = max(freq.values())
    return sum(f for f in freq.values() if f == mx)`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 1, 4]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 1, 2, 2, 3]], expected: 4 },
    { args: [[3, 3, 3]], expected: 3 },
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
  ],
};
