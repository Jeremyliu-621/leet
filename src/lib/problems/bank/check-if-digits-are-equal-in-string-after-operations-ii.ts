import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-digits-are-equal-in-string-after-operations-ii',
  title: 'Check if Digits Are Equal in String After Operations II',
  difficulty: 'hard',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` consisting of digits.

Repeatedly apply the following operation until the string has exactly **2** characters:
- For each pair of adjacent characters at indices \`i\` and \`i + 1\`, compute \`(s[i] + s[i+1]) % 10\` and replace the string with the sequence of these results (length decreases by 1 each pass).

Return \`true\` if the two remaining digits are **equal**, or \`false\` otherwise.`,
  constraints: [
    '3 <= s.length <= 10^5',
    's consists of digits only.',
  ],
  examples: [
    {
      input: 's = "3902"',
      output: 'true',
      explanation: '"3902" → "292" → "11". Both digits equal → true.',
    },
    {
      input: 's = "34789"',
      output: 'false',
      explanation: 'After repeated reduction the two final digits differ → false.',
    },
  ],
  hints: [
    'After m = n − 2 passes the two final digits are: d₀ = Σ C(m,i)·s[i] mod 10 and d₁ = Σ C(m,i)·s[i+1] mod 10. The answer is true iff d₀ = d₁.',
    'For n up to 10⁵, computing each binomial coefficient C(m, i) mod 10 directly is infeasible. Use **Lucas\' theorem**: C(m, i) mod 2 = 1 iff i is a bitwise subset of m (i.e. (i & m) === i). For mod 5, apply Lucas recursively with a small precomputed table for C(a, b) mod 5 where 0 ≤ a, b ≤ 4.',
    'Combine the two residues via CRT: C(m, i) mod 10 = (5 · c₂ + 6 · c₅) mod 10, where c₂ = C(m,i) mod 2 and c₅ = C(m,i) mod 5. Accumulate the weighted digit sums for both d₀ and d₁ in O(n log n) total.',
  ],
  functionName: 'hasSameDigits',
  params: ['s'],
  starterCode: {
    javascript: `function hasSameDigits(s) {
  const n = s.length, m = n - 2;
  const digits = Array.from(s, c => Number(c));
  // C(a,b) mod 5 for 0<=a,b<=4
  const C5 = [[1,0,0,0,0],[1,1,0,0,0],[1,2,1,0,0],[1,3,3,1,0],[1,4,1,4,1]];
  const mod2 = (n, k) => (k & n) === k ? 1 : 0;
  const mod5 = (n, k) => k === 0 ? 1 : (C5[n%5][k%5] * mod5(Math.floor(n/5), Math.floor(k/5))) % 5;
  const cMod10 = (n, k) => k > n ? 0 : (5 * mod2(n, k) + 6 * mod5(n, k)) % 10;
  let d0 = 0, d1 = 0;
  for (let i = 0; i <= m; i++) {
    const c = cMod10(m, i);
    d0 = (d0 + c * digits[i]) % 10;
    d1 = (d1 + c * digits[i + 1]) % 10;
  }
  return d0 === d1;
}`,
    typescript: `function hasSameDigits(s: string): boolean {
  const n = s.length, m = n - 2;
  const digits = Array.from(s, c => Number(c));
  const C5 = [[1,0,0,0,0],[1,1,0,0,0],[1,2,1,0,0],[1,3,3,1,0],[1,4,1,4,1]];
  const mod2 = (n: number, k: number): number => (k & n) === k ? 1 : 0;
  const mod5 = (n: number, k: number): number =>
    k === 0 ? 1 : (C5[n % 5]![k % 5]! * mod5(Math.floor(n / 5), Math.floor(k / 5))) % 5;
  const cMod10 = (n: number, k: number): number =>
    k > n ? 0 : (5 * mod2(n, k) + 6 * mod5(n, k)) % 10;
  let d0 = 0, d1 = 0;
  for (let i = 0; i <= m; i++) {
    const c = cMod10(m, i);
    d0 = (d0 + c * digits[i]!) % 10;
    d1 = (d1 + c * digits[i + 1]!) % 10;
  }
  return d0 === d1;
}`,
    python: `def hasSameDigits(s):
    n = len(s)
    m = n - 2
    digits = list(map(int, s))
    C5 = [[1,0,0,0,0],[1,1,0,0,0],[1,2,1,0,0],[1,3,3,1,0],[1,4,1,4,1]]
    def mod2(n, k): return 1 if (k & n) == k else 0
    def mod5(n, k):
        if k == 0: return 1
        return (C5[n%5][k%5] * mod5(n//5, k//5)) % 5
    def c_mod10(n, k):
        if k > n: return 0
        return (5 * mod2(n, k) + 6 * mod5(n, k)) % 10
    d0 = d1 = 0
    for i in range(m + 1):
        c = c_mod10(m, i)
        d0 = (d0 + c * digits[i]) % 10
        d1 = (d1 + c * digits[i+1]) % 10
    return d0 == d1`,
  },
  visibleTests: [
    { args: ['3902'], expected: true },
    { args: ['34789'], expected: false },
  ],
  hiddenTests: [
    { args: ['000'], expected: true },
    { args: ['555'], expected: true },
    { args: ['123'], expected: false },
    { args: ['9090'], expected: true },
    { args: ['1111'], expected: true },
    { args: ['1' + '0'.repeat(99)], expected: false },
    { args: ['5'.repeat(1000)], expected: true },
    { args: ['10'.repeat(50)], expected: true },
    { args: ['39023902'], expected: true },
    { args: ['123123123'], expected: false },
  ],
};
