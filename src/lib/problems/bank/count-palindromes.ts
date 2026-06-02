import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-palindromes',
  title: 'Count Palindromes',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\` consisting of digits, return the number of **palindromic subsequences** of length **5** in \`s\`. Since the answer can be large, return it modulo \`10^9 + 7\`.

A **subsequence** is a string derived by deleting some or no characters without changing the order of the remaining characters. A **palindrome** reads the same forwards and backwards.

A 5-character palindrome has the form \`xyzyx\` — the first and last characters match, the second and fourth match, and the middle character can be anything.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of digits only (\'0\' to \'9\')',
  ],
  examples: [
    {
      input: 's = "103301"',
      output: '2',
      explanation:
        'Two palindromic subsequences of length 5: positions (0,1,2,3,5) → "10301" and (0,1,3,4,5) → "10301". Both spell "10301".',
    },
    {
      input: 's = "0000000"',
      output: '21',
      explanation:
        'Every set of 5 indices chosen from the 7 zeros gives the palindrome "00000". C(7,5) = 21.',
    },
    {
      input: 's = "9"',
      output: '0',
      explanation: 'The string is too short to have a 5-character subsequence.',
    },
  ],
  hints: [
    'A length-5 palindrome has the form xyzyx. For each center position k, you need to count pairs (x, y) with the pattern x, y appearing to the left of k, and y, x appearing to the right of k.',
    'Define left_pairs[x][y] = number of 2-char subsequences (x,y) strictly to the left of position k. Similarly right_pairs[y][x] = number of 2-char subsequences (y,x) strictly to the right. At center k, sum left_pairs[x][y] * right_pairs[y][x] over all digit pairs.',
    'Slide the center from left to right. Maintain prefix pair counts by tracking prefix single counts: left_pairs[a][c] += left_single[a] for each new char c. Maintain suffix pairs similarly by pre-building from the right.',
  ],
  functionName: 'countPalindromes',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromes(s) {
  const MOD = 1000000007n, n = s.length;
  const rS = new Array(10).fill(0), rP = Array.from({length:10},()=>new Array(10).fill(0));
  for (const c of s) { const d=+c; for (let p=0;p<10;p++) rP[p][d]+=rS[p]; rS[d]++; }
  const lS = new Array(10).fill(0), lP = Array.from({length:10},()=>new Array(10).fill(0));
  let ans = 0n;
  for (let k = 0; k < n; k++) {
    const d = +s[k];
    rS[d]--; for (let q=0;q<10;q++) rP[d][q]-=rS[q];
    for (let x=0;x<10;x++) for (let y=0;y<10;y++) ans=(ans+BigInt(lP[x][y])*BigInt(rP[y][x]))%MOD;
    for (let p=0;p<10;p++) lP[p][d]+=lS[p]; lS[d]++;
  }
  return Number(ans);
}`,
    typescript: `function countPalindromes(s: string): number {
  const MOD = 1000000007n, n = s.length;
  const rS = new Array<number>(10).fill(0);
  const rP: number[][] = Array.from({length:10},()=>new Array<number>(10).fill(0));
  for (const c of s) { const d=+c; for (let p=0;p<10;p++) rP[p]![d]!+=rS[p]!; rS[d]!++; }
  const lS = new Array<number>(10).fill(0);
  const lP: number[][] = Array.from({length:10},()=>new Array<number>(10).fill(0));
  let ans = 0n;
  for (let k = 0; k < n; k++) {
    const d = +s[k]!;
    rS[d]!--; for (let q=0;q<10;q++) rP[d]![q]!-=rS[q]!;
    for (let x=0;x<10;x++) for (let y=0;y<10;y++) ans=(ans+BigInt(lP[x]![y]!)*BigInt(rP[y]![x]!))%MOD;
    for (let p=0;p<10;p++) lP[p]![d]!+=lS[p]!; lS[d]!++;
  }
  return Number(ans);
}`,
    python: `def countPalindromes(s: str) -> int:
    MOD = 10**9 + 7
    n = len(s)
    r_s = [0] * 10
    r_p = [[0]*10 for _ in range(10)]
    for c in s:
        d = int(c)
        for p in range(10): r_p[p][d] += r_s[p]
        r_s[d] += 1
    l_s = [0] * 10
    l_p = [[0]*10 for _ in range(10)]
    ans = 0
    for k in range(n):
        d = int(s[k])
        r_s[d] -= 1
        for q in range(10): r_p[d][q] -= r_s[q]
        for x in range(10):
            for y in range(10):
                ans = (ans + l_p[x][y] * r_p[y][x]) % MOD
        for p in range(10): l_p[p][d] += l_s[p]
        l_s[d] += 1
    return ans`,
  },
  visibleTests: [
    { args: ['103301'], expected: 2 },
    { args: ['0000000'], expected: 21 },
    { args: ['9'], expected: 0 },
    { args: ['12321'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['11111'], expected: 1 },
    { args: ['12123'], expected: 0 },
    { args: ['00000000'], expected: 56 },
    { args: ['112233'], expected: 0 },
    { args: ['1221221'], expected: 9 },
    { args: ['1111111111'], expected: 252 },
  ],
};
