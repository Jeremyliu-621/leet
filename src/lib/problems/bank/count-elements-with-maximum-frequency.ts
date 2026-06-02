import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-with-maximum-frequency',
  title: 'Count Elements With Maximum Frequency',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

Return the **total frequencies** of elements in \`nums\` such that those elements all have the **maximum** frequency.

The *frequency* of an element is the number of occurrences of that element in the array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,1,4]',
      output: '4',
      explanation: 'Elements 1 and 2 both appear 2 times (the maximum). Total frequency = 2 + 2 = 4.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '5',
      explanation: 'All elements appear once (the maximum). Total frequency = 1×5 = 5.',
    },
  ],
  hints: [
    'Count the frequency of each element using a hash map.',
    'Find the maximum frequency.',
    'Sum the frequencies of all elements that have the maximum frequency.',
  ],
  functionName: 'maxFrequencyElements',
  params: ['nums'],
  starterCode: {
    javascript: `function maxFrequencyElements(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  const maxF = Math.max(...freq.values());
  let total = 0;
  for (const f of freq.values()) if (f === maxF) total += f;
  return total;
}`,
    typescript: `function maxFrequencyElements(nums: number[]): number {
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const maxF = Math.max(...freq.values());
  let total = 0;
  for (const f of freq.values()) if (f === maxF) total += f;
  return total;
}`,
    python: `def maxFrequencyElements(nums):
    from collections import Counter
    freq = Counter(nums)
    max_f = max(freq.values())
    return sum(f for f in freq.values() if f == max_f)`,
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
    { args: [[1, 2, 3, 1, 2, 3]], expected: 6 },
    { args: [[5, 5, 5, 1, 1]], expected: 3 },
  ],
};
