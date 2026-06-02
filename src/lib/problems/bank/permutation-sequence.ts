import type { Problem } from '../types';

export const problem: Problem = {
  id: 'permutation-sequence',
  title: 'Permutation Sequence',
  difficulty: 'hard',
  tags: ['math', 'backtracking'],
  description: `The set \`[1, 2, 3, ..., n]\` contains a total of \`n!\` unique permutations.

By listing and labeling all permutations in order, we get the following sequence for \`n = 3\`:

1. \`"123"\`
2. \`"132"\`
3. \`"213"\`
4. \`"231"\`
5. \`"312"\`
6. \`"321"\`

Given \`n\` and \`k\`, return the \`k\`-th permutation sequence.

**Key insight:** Rather than generating all permutations, determine each digit position by position using the factorial number system.`,
  constraints: ['1 <= n <= 9', '1 <= k <= n!'],
  examples: [
    {
      input: 'n = 3, k = 3',
      output: '"213"',
      explanation: 'The 3rd permutation of [1,2,3] is "213".',
    },
    {
      input: 'n = 4, k = 9',
      output: '"2314"',
      explanation: 'The 9th permutation of [1,2,3,4] is "2314".',
    },
    {
      input: 'n = 3, k = 1',
      output: '"123"',
      explanation: 'The 1st permutation is the natural order.',
    },
  ],
  hints: [
    'For n digits, there are n! permutations. The first (n-1)! permutations start with digit 1, the next (n-1)! start with digit 2, etc. Use k to determine which group and thus which first digit.',
    'Use 0-indexed k. After picking the first digit by k / (n-1)!, reduce k to k % (n-1)! and repeat for the remaining digits with the remaining available numbers.',
    'Precompute factorial values. Maintain a list of available digits [1..n]. For each position, pick index = (k-1) / factorial[remaining-1], use that digit, remove it from the list, and update k = (k-1) % factorial[remaining-1] + 1.',
  ],
  functionName: 'getPermutation',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function getPermutation(n, k) {
  const fact = [1];
  for (let i = 1; i <= n; i++) fact.push(fact[i - 1] * i);
  const digits = Array.from({ length: n }, (_, i) => i + 1);
  let result = '';
  k--;
  for (let i = n - 1; i >= 0; i--) {
    const idx = Math.floor(k / fact[i]);
    result += digits[idx];
    digits.splice(idx, 1);
    k %= fact[i];
  }
  return result;
}`,
    typescript: `function getPermutation(n: number, k: number): string {
  const fact = [1];
  for (let i = 1; i <= n; i++) fact.push(fact[i - 1]! * i);
  const digits = Array.from({ length: n }, (_, i) => i + 1);
  let result = '';
  k--;
  for (let i = n - 1; i >= 0; i--) {
    const idx = Math.floor(k / fact[i]!);
    result += digits[idx];
    digits.splice(idx, 1);
    k %= fact[i]!;
  }
  return result;
}`,
    python: `def getPermutation(n, k):
    import math
    digits = list(range(1, n + 1))
    result = ''
    k -= 1
    for i in range(n - 1, -1, -1):
        idx = k // math.factorial(i)
        result += str(digits[idx])
        digits.pop(idx)
        k %= math.factorial(i)
    return result`,
  },
  visibleTests: [
    { args: [3, 3], expected: '213' },
    { args: [4, 9], expected: '2314' },
    { args: [3, 1], expected: '123' },
  ],
  hiddenTests: [
    { args: [1, 1], expected: '1' },
    { args: [2, 1], expected: '12' },
    { args: [2, 2], expected: '21' },
    { args: [3, 6], expected: '321' },
    { args: [4, 1], expected: '1234' },
    { args: [4, 24], expected: '4321' },
  ],
};
