import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-integers',
  title: 'Count of Integers',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `You are given two numeric strings \`num1\` and \`num2\` and two integers \`min_sum\` and \`max_sum\`. Return the count of integers in the inclusive range \`[num1, num2]\` whose **digit sum** lies in the inclusive range \`[min_sum, max_sum]\`.

Since the answer may be large, return it modulo \`10^9 + 7\`.

**Key insight:** Use digit DP: \`countUpTo(s)\` counts integers in \`[1, s]\` whose digit sum is in \`[min_sum, max_sum]\`. The answer is \`countUpTo(num2) - countUpTo(num1) + isValid(num1)\`.`,
  constraints: [
    '1 <= num1 <= num2 <= 10^22',
    '1 <= min_sum <= max_sum <= 400',
    'num1 and num2 consist of digits only',
    'num1 and num2 have no leading zeros',
  ],
  examples: [
    {
      input: 'num1 = "1", num2 = "12", min_sum = 1, max_sum = 8',
      output: '11',
      explanation: 'All integers 1–12 have digit sum in [1,8] except 9 (digit sum 9). Count = 11.',
    },
    {
      input: 'num1 = "1", num2 = "5", min_sum = 1, max_sum = 5',
      output: '5',
      explanation: 'Integers 1,2,3,4,5 all have digit sums in [1,5].',
    },
    {
      input: 'num1 = "10", num2 = "20", min_sum = 1, max_sum = 2',
      output: '3',
      explanation: '10 (sum=1), 11 (sum=2), 20 (sum=2) → 3 integers.',
    },
  ],
  hints: [
    'Use digit DP: define dp(pos, tight, started, sum) = count of valid completions.',
    'Prune branches where current sum already exceeds max_sum.',
    'countUpTo(s) counts integers [0..s] with digit sum in [min_sum, max_sum].',
    'Answer = countUpTo(num2) - countUpTo(num1) + (1 if num1 itself is valid).',
  ],
  functionName: 'countIntegersWithDigitSum',
  params: ['num1', 'num2', 'min_sum', 'max_sum'],
  starterCode: {
    javascript: `function countIntegersWithDigitSum(num1, num2, min_sum, max_sum) {
  // Digit DP: count integers in [num1, num2] whose digit sum is in [min_sum, max_sum].
}`,
    typescript: `function countIntegersWithDigitSum(num1: string, num2: string, min_sum: number, max_sum: number): number {
  // Digit DP: count integers in [num1, num2] whose digit sum is in [min_sum, max_sum].
}`,
    python: `def countIntegersWithDigitSum(num1, num2, min_sum, max_sum):
    # Digit DP: count integers in [num1, num2] whose digit sum is in [min_sum, max_sum].
    pass
`,
  },
  visibleTests: [
    { args: ['1', '12', 1, 8], expected: 11 },
    { args: ['1', '5', 1, 5], expected: 5 },
    { args: ['10', '20', 1, 2], expected: 3 },
  ],
  hiddenTests: [
    { args: ['1', '5', 1, 3], expected: 3 },
    { args: ['1', '9', 1, 9], expected: 9 },
    { args: ['100', '999', 10, 20], expected: 651 },
    { args: ['1', '1000000000000000000000', 1, 1], expected: 22 },
    { args: ['1', '100', 1, 100], expected: 100 },
    { args: ['50', '50', 5, 5], expected: 1 },
    { args: ['50', '50', 6, 6], expected: 0 },
  ],
};
