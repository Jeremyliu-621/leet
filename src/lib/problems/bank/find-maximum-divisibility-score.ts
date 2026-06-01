import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-divisibility-score',
  title: 'Find Maximum Divisibility Score',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given two integer arrays \`nums\` and \`divisors\`.

The **divisibility score** of \`divisors[i]\` is the number of indices \`j\` such that \`nums[j]\` is divisible by \`divisors[i]\`.

Return the integer \`divisors[i]\` with the **maximum** divisibility score. If multiple integers have the same maximum score, return the **smallest** one.`,
  constraints: [
    '1 <= nums.length, divisors.length <= 1000',
    '1 <= nums[i], divisors[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,7,9,3,9], divisors = [5,2,3]',
      output: '3',
      explanation:
        'd=5: 0 divisible. d=2: 1 (only 4). d=3: 3 (9,3,9). Max score=3 → divisor=3.',
    },
    {
      input: 'nums = [20,14,21,10], divisors = [5,7,5]',
      output: '5',
      explanation:
        'd=5: 2 (20,10). d=7: 2 (14,21). d=5: 2 (20,10). Max score=2, smallest divisor=5.',
    },
    {
      input: 'nums = [12,21,14], divisors = [2,3,7]',
      output: '2',
      explanation:
        'd=2: 2 (12,14). d=3: 2 (12,21). d=7: 2 (21,14). Max score=2, smallest=2.',
    },
  ],
  hints: [
    'Level 1: For each divisor, count how many nums elements it divides (nums[j] % d === 0).',
    'Level 2: Track the divisor with the highest count. On tie, keep the smaller divisor.',
    'Level 3: O(n*m) brute force is sufficient given n,m <= 1000.',
  ],
  functionName: 'maximumDivisibilityScore',
  params: ['nums', 'divisors'],
  starterCode: {
    javascript: `function maximumDivisibilityScore(nums, divisors) {
  let bestCount = -1, bestDiv = Infinity;
  for (const d of divisors) {
    let count = 0;
    for (const n of nums) if (n % d === 0) count++;
    if (count > bestCount || (count === bestCount && d < bestDiv)) {
      bestCount = count;
      bestDiv = d;
    }
  }
  return bestDiv;
}`,
    typescript: `function maximumDivisibilityScore(nums: number[], divisors: number[]): number {
  let bestCount = -1, bestDiv = Infinity;
  for (const d of divisors) {
    let count = 0;
    for (const n of nums) if (n % d === 0) count++;
    if (count > bestCount || (count === bestCount && d < bestDiv)) {
      bestCount = count;
      bestDiv = d;
    }
  }
  return bestDiv;
}`,
    python: `def maximumDivisibilityScore(nums, divisors):
    best_count, best_div = -1, float('inf')
    for d in divisors:
        count = sum(1 for n in nums if n % d == 0)
        if count > best_count or (count == best_count and d < best_div):
            best_count = count
            best_div = d
    return best_div`,
  },
  visibleTests: [
    { args: [[4, 7, 9, 3, 9], [5, 2, 3]], expected: 3 },
    { args: [[20, 14, 21, 10], [5, 7, 5]], expected: 5 },
    { args: [[12, 21, 14], [2, 3, 7]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: 1 },
    { args: [[6, 12, 18], [3, 6, 9]], expected: 3 },
    { args: [[7, 11, 13], [2, 3, 5]], expected: 2 },
    { args: [[100], [1, 2, 4, 5, 10, 20, 25, 50, 100]], expected: 1 },
    { args: [[6, 12, 18, 24], [6, 12, 18, 24]], expected: 6 },
    { args: [[2, 4, 6, 8], [4, 3]], expected: 4 },
    { args: [[1], [1, 1]], expected: 1 },
    { args: [[1000000000], [1000000000]], expected: 1000000000 },
  ],
};
