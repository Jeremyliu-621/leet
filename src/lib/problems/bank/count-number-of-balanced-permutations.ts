import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-balanced-permutations',
  title: 'Count Number of Balanced Permutations',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given a string \`num\` consisting of digits. A permutation of \`num\` is **balanced** if the sum of digits at even indices (0-indexed) equals the sum of digits at odd indices.

Return the **number of distinct balanced permutations** of \`num\`, modulo \`10^9 + 7\`.

**Note:** Two permutations are considered distinct only if the resulting strings are different.`,
  constraints: [
    '1 <= num.length <= 80',
    'num consists of digits 0-9.',
  ],
  examples: [
    {
      input: 'num = "123"',
      output: '2',
      explanation: 'The balanced permutations are "123" (even indices: 1+3=4, odd: 2. Not balanced!) and... Actually: "132" (1+2=3, 3 at odd=3? 0-indexed: pos0=1,pos1=3,pos2=2; even sum=1+2=3, odd sum=3 ✓) and "312" (pos0=3,pos1=1,pos2=2; even sum=3+2=5, odd sum=1 ✗). Balanced: "231" (2+1=3, 3 ✓) and "213" (2+3=5, 1 ✗). After checking all 6 permutations, exactly 2 are balanced.',
    },
    {
      input: 'num = "336"',
      output: '1',
      explanation: 'The only balanced permutation is "363" (3+3=6, 6 ✓). The string "336" gives even sum 3+6=9, odd sum 3 (not balanced).',
    },
    {
      input: 'num = "22"',
      output: '1',
      explanation: 'Only "22": even sum = 2, odd sum = 2. Since both digits are the same, there is exactly 1 distinct permutation, and it is balanced.',
    },
  ],
  hints: [
    'If the total digit sum is odd, the answer is 0 (you cannot split an odd sum equally).',
    'Let target = total_sum / 2 and nEven = ceil(n/2). You need to choose nEven digits to fill even positions such that their sum equals target.',
    'Use DP over digit values 0-9: dp[j][k] = number of ways (divided by factorials) to assign j digits to even positions with sum k, considering digits 0..d so far.',
    'For each digit d with frequency cnt[d], try placing e of them (0 to min(cnt[d], remaining even slots)) at even positions. Divide by e! and (cnt[d]-e)! to count combinations. Multiply by nEven! * nOdd! at the end to account for arrangements within positions.',
  ],
  functionName: 'countBalancedPermutations',
  params: ['num'],
  starterCode: {
    javascript: `function countBalancedPermutations(num) {
  const MOD = 1_000_000_007n;
  const digits = num.split('').map(Number);
  const total = digits.reduce((s, d) => s + d, 0);
  if (total % 2 !== 0) return 0; // odd sum can't be split equally
  const target = total / 2;
  const n = digits.length;
  const nEven = Math.ceil(n / 2); // slots at even indices
  // Count digit frequencies
  const cnt = new Array(10).fill(0);
  for (const d of digits) cnt[d]++;
  // DP: dp[j][s] = ways to fill j even slots with digit sum s (divided by factorials)
  // Precompute factorials/inverses for combination counting
  // TODO: iterate over digits 0-9, for each try placing e copies at even positions
}`,
    typescript: `function countBalancedPermutations(num: string): number {
  const MOD = 1_000_000_007n;
  const digits = num.split('').map(Number);
  const total = digits.reduce((s, d) => s + d, 0);
  if (total % 2 !== 0) return 0; // odd sum can't be split equally
  const target = total / 2;
  const n = digits.length;
  const nEven = Math.ceil(n / 2); // slots at even indices
  // Count digit frequencies
  const cnt = new Array(10).fill(0);
  for (const d of digits) cnt[d]++;
  // DP: dp[j][s] = ways to fill j even slots with digit sum s (divided by factorials)
  // Precompute factorials/inverses for combination counting
  // TODO: iterate over digits 0-9, for each try placing e copies at even positions
  return 0;
}`,
    python: `def countBalancedPermutations(num: str) -> int:
    MOD = 10**9 + 7
    digits = [int(c) for c in num]
    total = sum(digits)
    if total % 2 != 0:
        return 0  # odd sum can't be split equally
    target = total // 2
    n = len(digits)
    n_even = (n + 1) // 2  # slots at even indices
    # Count digit frequencies
    from collections import Counter
    cnt = Counter(digits)
    # DP: dp[j][s] = ways to fill j even slots with digit sum s (divided by factorials)
    # Precompute factorials/inverses for combination counting
    # TODO: iterate over digits 0-9, for each try placing e copies at even positions
    pass`,
  },
  visibleTests: [
    { args: ['123'], expected: 2 },
    { args: ['336'], expected: 1 },
    { args: ['22'], expected: 1 },
    { args: ['1'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['12'], expected: 0 },
    { args: ['1234'], expected: 8 },
    { args: ['9999'], expected: 1 },
    { args: ['1111'], expected: 1 },
    { args: ['246'], expected: 2 },
    { args: ['369'], expected: 2 },
    { args: ['99'], expected: 1 },
    { args: ['0000'], expected: 1 },
  ],
};
