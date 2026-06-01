import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-divisibility-score',
  title: 'Find the Maximum Divisibility Score',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given two integer arrays \`nums\` and \`divisors\`.

The **divisibility score** of \`divisors[i]\` is the number of indices \`j\` such that \`nums[j]\` is divisible by \`divisors[i]\`.

Return the integer \`divisors[i]\` with the **maximum** divisibility score. If multiple divisors have the same maximum score, return the **smallest** such divisor.`,
  constraints: [
    '`1 <= nums.length, divisors.length <= 1000`',
    '`1 <= nums[i], divisors[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [4,7,9,3,9], divisors = [5,2,3]',
      output: '3',
      explanation: 'Score of 5: 0. Score of 2: 1 (4). Score of 3: 3 (9, 3, 9). Maximum score 3 achieved by divisor 3.',
    },
    {
      input: 'nums = [20,14,21,10], divisors = [5,7,5]',
      output: '5',
      explanation: 'Score of 5: 3 (20, 10, 20). Score of 7: 2. Max score 3 achieved by 5; both 5s tie, return the smaller 5.',
    },
    {
      input: 'nums = [12], divisors = [10,16]',
      output: '10',
      explanation: 'Score of 10: 0. Score of 16: 0. Tied at 0; return the smaller divisor 10.',
    },
  ],
  hints: [
    'For each divisor, count how many elements in nums are divisible by it.',
    'Track the best (score, divisor) pair. Update when a new divisor has a strictly higher score, or the same score but a smaller value.',
    '```js\nfunction maxDivScore(nums, divisors) {\n  let best = Infinity, bestScore = -1;\n  for (const d of divisors) {\n    const score = nums.filter(n => n % d === 0).length;\n    if (score > bestScore || (score === bestScore && d < best)) {\n      bestScore = score; best = d;\n    }\n  }\n  return best;\n}\n```',
  ],
  functionName: 'maxDivScore',
  params: ['nums', 'divisors'],
  starterCode: {
    javascript: `function maxDivScore(nums, divisors) {
  let bestScore = -1, bestDiv = Infinity;
  for (const d of divisors) {
    const score = nums.filter(n => n % d === 0).length;
    if (score > bestScore || (score === bestScore && d < bestDiv)) {
      bestScore = score;
      bestDiv = d;
    }
  }
  return bestDiv;
}`,
    typescript: `function maxDivScore(nums: number[], divisors: number[]): number {
  let bestScore = -1, bestDiv = Infinity;
  for (const d of divisors) {
    const score = nums.filter(n => n % d === 0).length;
    if (score > bestScore || (score === bestScore && d < bestDiv)) {
      bestScore = score;
      bestDiv = d;
    }
  }
  return bestDiv;
}`,
    python: `def maxDivScore(nums, divisors):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    divisors = list(divisors.to_py()) if hasattr(divisors, 'to_py') else list(divisors)
    best_score = -1
    best_div = float('inf')
    for d in divisors:
        score = sum(1 for n in nums if n % d == 0)
        if score > best_score or (score == best_score and d < best_div):
            best_score = score
            best_div = d
    return best_div`,
  },
  visibleTests: [
    { args: [[4, 7, 9, 3, 9], [5, 2, 3]], expected: 3 },
    { args: [[20, 14, 21, 10], [5, 7, 5]], expected: 5 },
    { args: [[12], [10, 16]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [1]], expected: 1 },
    { args: [[6, 12, 18, 24], [6, 4, 3]], expected: 3 },
    { args: [[10, 15, 20], [5, 10]], expected: 5 },
    { args: [[7], [7, 14, 21]], expected: 7 },
    { args: [[100, 200, 300], [50, 100, 10]], expected: 10 },
  ],
};
