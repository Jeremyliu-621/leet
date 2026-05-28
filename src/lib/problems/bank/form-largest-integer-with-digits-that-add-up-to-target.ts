import type { Problem } from '../types';

export const problem: Problem = {
  id: 'form-largest-integer-with-digits-that-add-up-to-target',
  title: 'Form Largest Integer With Digits That Add up to Target',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given an array \`cost\` of length 9 where \`cost[i]\` is the cost to paint the digit \`i+1\` (digits 1–9), and an integer \`target\` (the total paint cost), return the **largest possible integer** (as a string) with total cost exactly equal to \`target\`. If it is impossible, return \`"0"\`.

Since the answer can be very large, return it as a **string** (not an integer).

**Key insight:** First maximize length with DP: \`dp[j]\` = maximum number of digits achievable with cost exactly \`j\`. Then reconstruct greedily from left to right, picking the largest digit at each position that leaves a valid remainder.`,
  constraints: [
    'cost.length == 9',
    '1 <= cost[i] <= 5000',
    '1 <= target <= 5000',
  ],
  examples: [
    {
      input: 'cost = [4, 3, 2, 5, 6, 7, 2, 5, 5], target = 9',
      output: '"7772"',
      explanation: 'Digit 7 costs 2, digit 2 costs 3. Three 7s + one 2: cost = 6 + 3 = 9, length = 4. "7772" is the largest.',
    },
    {
      input: 'cost = [7, 6, 5, 5, 5, 6, 8, 7, 8], target = 12',
      output: '"85"',
      explanation: 'Digit 8 costs 7, digit 5 costs 5. 7 + 5 = 12. "85" is the largest 2-digit combination.',
    },
    {
      input: 'cost = [2, 4, 6, 2, 4, 6, 2, 4, 6], target = 5',
      output: '"0"',
      explanation: 'All costs are even (2, 4, 6); target 5 is odd. Impossible.',
    },
  ],
  hints: [
    'Use DP where dp[j] = maximum number of digits reachable with cost exactly j. Initialize dp[0] = 0, all others = -Infinity.',
    'Transition: dp[j] = max over digits d: dp[j - cost[d]] + 1 (if j >= cost[d] and dp[j - cost[d]] != -Infinity).',
    'If dp[target] < 0, return "0". Otherwise reconstruct: greedily pick the largest digit d (from 9 down to 1) at each position such that dp[remaining - cost[d-1]] == dp[remaining] - 1.',
  ],
  functionName: 'largestNumber',
  params: ['cost', 'target'],
  starterCode: {
    javascript: `function largestNumber(cost, target) {
  // Return the largest integer string with total cost == target, or "0"
}`,
    python: `def largestNumber(cost: list[int], target: int) -> str:
    # Return the largest integer string with total cost == target, or "0"
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 5, 6, 7, 2, 5, 5], 9], expected: '7772' },
    { args: [[7, 6, 5, 5, 5, 6, 8, 7, 8], 12], expected: '85' },
    { args: [[2, 4, 6, 2, 4, 6, 2, 4, 6], 5], expected: '0' },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1], 1], expected: '9' },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1], 3], expected: '999' },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1], 9], expected: '999999999' },
    { args: [[9, 9, 9, 9, 9, 9, 9, 9, 9], 9], expected: '9' },
    { args: [[9, 9, 9, 9, 9, 9, 9, 9, 9], 10], expected: '0' },
    { args: [[3, 2, 1, 1, 1, 1, 1, 1, 1], 5], expected: '99999' },
    { args: [[4, 4, 4, 4, 4, 4, 4, 4, 4], 8], expected: '99' },
  ],
};
