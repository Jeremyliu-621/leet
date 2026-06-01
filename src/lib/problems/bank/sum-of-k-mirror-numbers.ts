import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-k-mirror-numbers',
  title: 'Sum of k-Mirror Numbers',
  difficulty: 'hard',
  tags: ['math', 'strings'],
  description: `A **k-mirror number** is a positive integer (with no leading zeros) that reads the same both forward and backward in **base-10** AND in **base-k**.

Given the base \`k\` and the number \`n\`, return the **sum** of the \`n\` smallest k-mirror numbers.`,
  constraints: [
    '2 <= k <= 9',
    '1 <= n <= 30',
  ],
  examples: [
    {
      input: 'k = 2, n = 5',
      output: '25',
      explanation:
        'The 5 smallest 2-mirror numbers are: 1 → "1" in base 2, 3 → "11", 5 → "101", 7 → "111", 9 → "1001". All are palindromes in both base 10 and base 2. Sum = 1 + 3 + 5 + 7 + 9 = 25.',
    },
    {
      input: 'k = 3, n = 7',
      output: '499',
      explanation:
        'The 7 smallest 3-mirror numbers are 1, 2, 4, 8, 121, 151, 212. Check: 1→"1" ✓, 2→"2" ✓, 4→"11" in base 3 ✓, 8→"22" ✓, 121→"11111" ✓, 151→"12121" ✓, 212→"21212" ✓. Sum = 499.',
    },
    {
      input: 'k = 7, n = 4',
      output: '10',
      explanation:
        'The 4 smallest 7-mirror numbers are 1, 2, 3, 4 (single-digit numbers are palindromes in all bases). Sum = 1 + 2 + 3 + 4 = 10.',
    },
  ],
  hints: [
    'Level 1: Enumerate base-10 palindromes in increasing order (they are much fewer than all integers). For each, convert to base k and check if the base-k representation is also a palindrome. Stop when you have collected n numbers.',
    'Level 2: Generate base-10 palindromes by their "mirror half": 1-digit (1..9), 2-digit (11,22,..,99), 3-digit (mirroring 10..99 → 101,111,...,999), 4-digit (mirroring 10..99 → 1001, 1111,...), etc. This is far more efficient than testing every integer.',
    'Level 3: To convert a number to base k, repeatedly take num % k and num = floor(num / k), collect the remainders — that gives the digits in reverse. Check if the resulting digit string is a palindrome.',
  ],
  functionName: 'kMirror',
  params: ['k', 'n'],
  starterCode: {
    javascript: `function kMirror(k, n) {
  const isKPalin = (num) => {
    const d = [];
    while (num > 0) { d.push(num % k); num = Math.floor(num / k); }
    for (let i = 0, j = d.length - 1; i < j; i++, j--)
      if (d[i] !== d[j]) return false;
    return true;
  };
  let count = 0, sum = 0;
  for (let len = 1; count < n; len++) {
    const half = Math.ceil(len / 2);
    const start = half === 1 ? 1 : Math.pow(10, half - 1);
    const end = Math.pow(10, half);
    for (let h = start; h < end && count < n; h++) {
      const s = String(h);
      const rev = s.split('').reverse().join('');
      const pal = len % 2 === 1 ? s + rev.slice(1) : s + rev;
      const num = parseInt(pal, 10);
      if (isKPalin(num)) { sum += num; count++; }
    }
  }
  return sum;
}`,
    typescript: `function kMirror(k: number, n: number): number {
  const isKPalin = (num: number): boolean => {
    const d: number[] = [];
    while (num > 0) { d.push(num % k); num = Math.floor(num / k); }
    for (let i = 0, j = d.length - 1; i < j; i++, j--)
      if (d[i] !== d[j]) return false;
    return true;
  };
  let count = 0, sum = 0;
  for (let len = 1; count < n; len++) {
    const half = Math.ceil(len / 2);
    const start = half === 1 ? 1 : Math.pow(10, half - 1);
    const end = Math.pow(10, half);
    for (let h = start; h < end && count < n; h++) {
      const s = String(h);
      const rev = s.split('').reverse().join('');
      const pal = len % 2 === 1 ? s + rev.slice(1) : s + rev;
      const num = parseInt(pal, 10);
      if (isKPalin(num)) { sum += num; count++; }
    }
  }
  return sum;
}`,
    python: `def kMirror(k, n):
    def is_k_palin(num):
        d = []
        while num > 0:
            d.append(num % k)
            num //= k
        return d == d[::-1]

    count = 0
    total = 0
    length = 1
    while count < n:
        half = (length + 1) // 2
        start = 1 if half == 1 else 10 ** (half - 1)
        end = 10 ** half
        for h in range(start, end):
            if count >= n:
                break
            s = str(h)
            rev = s[::-1]
            pal = s + rev[1:] if length % 2 == 1 else s + rev
            num = int(pal)
            if is_k_palin(num):
                total += num
                count += 1
        length += 1
    return total`,
  },
  visibleTests: [
    { args: [2, 5], expected: 25 },
    { args: [3, 7], expected: 499 },
    { args: [7, 4], expected: 10 },
  ],
  hiddenTests: [
    { args: [2, 1], expected: 1 },
    { args: [2, 3], expected: 9 },
    { args: [3, 3], expected: 7 },
    { args: [4, 4], expected: 11 },
    { args: [5, 5], expected: 16 },
    { args: [9, 5], expected: 15 },
    { args: [7, 17], expected: 20379000 },
    { args: [10, 5], expected: 15 },
  ],
};
