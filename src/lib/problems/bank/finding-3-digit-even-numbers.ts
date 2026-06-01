import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-3-digit-even-numbers',
  title: 'Finding 3-Digit Even Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`digits\`, where each element is a digit. The array may contain duplicates.

You need to find **all** unique integers that:
- Are 3-digit numbers (100 to 999 inclusive).
- Are **even**.
- Each digit can be formed using the digits of \`digits\` array — you may use each element of the array **at most once** (i.e., each occurrence in \`digits\` counts separately).

Return the result in **increasing order**.`,
  constraints: [
    '1 <= digits.length <= 100',
    '0 <= digits[i] <= 9',
  ],
  examples: [
    {
      input: 'digits = [2,1,3,0]',
      output: '[102,120,130,132,210,230,302,310,312,320]',
      explanation: 'All 3-digit even numbers that can be formed using the given digits, in ascending order.',
    },
    {
      input: 'digits = [2,2,8,8,2]',
      output: '[222,228,282,288,822,828,882,888]',
      explanation: 'With three 2s and two 8s available, 888 cannot be formed (needs three 8s).',
    },
    {
      input: 'digits = [3,7,5]',
      output: '[]',
      explanation: 'No even number can be formed since no even digit is available.',
    },
  ],
  hints: [
    'Enumerate all 3-digit even numbers (100 to 998, step 2) and check if each can be formed from the given digits.',
    'Build a frequency map of the available digits. For each candidate number, extract its three digits and check the frequency map.',
    'const freq=new Array(10).fill(0);for(const d of digits)freq[d]++;const res=[];for(let n=100;n<=998;n+=2){const f=new Array(10).fill(0);const ds=[Math.floor(n/100),Math.floor(n/10)%10,n%10];for(const d of ds)f[d]++;if(ds.every((_,i)=>f[ds[i]]<=freq[ds[i]]))res.push(n);}return res;',
  ],
  functionName: 'findEvenNumbers',
  params: ['digits'],
  starterCode: {
    javascript: `function findEvenNumbers(digits) {
  const freq = new Array(10).fill(0);
  for (const d of digits) freq[d]++;
  const res = [];
  for (let n = 100; n <= 998; n += 2) {
    const f = new Array(10).fill(0);
    const ds = [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10];
    for (const d of ds) f[d]++;
    if (ds.every((d) => f[d] <= freq[d])) res.push(n);
  }
  return res;
}`,
    typescript: `function findEvenNumbers(digits: number[]): number[] {
  const freq = new Array<number>(10).fill(0);
  for (const d of digits) freq[d]!++;
  const res: number[] = [];
  for (let n = 100; n <= 998; n += 2) {
    const f = new Array<number>(10).fill(0);
    const ds = [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10];
    for (const d of ds) f[d]!++;
    if (ds.every((d) => f[d]! <= freq[d]!)) res.push(n);
  }
  return res;
}`,
    python: `def findEvenNumbers(digits):
    digits = list(digits.to_py()) if hasattr(digits, 'to_py') else list(digits)
    from collections import Counter
    freq = Counter(digits)
    res = []
    for n in range(100, 999, 2):
        ds = [n // 100, (n // 10) % 10, n % 10]
        f = Counter(ds)
        if all(f[d] <= freq[d] for d in f):
            res.append(n)
    return res`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 0]], expected: [102, 120, 130, 132, 210, 230, 302, 310, 312, 320] },
    { args: [[2, 2, 8, 8, 2]], expected: [222, 228, 282, 288, 822, 828, 882] },
    { args: [[3, 7, 5]], expected: [] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [] },
    { args: [[1, 0, 0]], expected: [100] },
    { args: [[0, 2]], expected: [] },
    { args: [[1, 2, 3, 4]], expected: [124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, 432] },
    { args: [[0, 0, 1]], expected: [100] },
    { args: [[5, 0, 2]], expected: [250, 502, 520] },
    { args: [[9, 9, 9]], expected: [] },
    { args: [[2, 0]], expected: [] },
    { args: [[4, 4, 4]], expected: [444] },
    { args: [[1, 1, 0]], expected: [110] },
  ],
};
