import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-digit-sum-of-a-string',
  title: 'Calculate Digit Sum of a String',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `You are given a string \`num\` representing a large integer and an integer \`k\`.

We call an integer **worthy** if its digit sum is divisible by \`k\`.

Perform the following operation repeatedly until the length of \`num\` is less than or equal to \`k\`:

1. Divide \`num\` into consecutive groups of size \`k\` such that the first \`k\` characters are in the first group, the next \`k\` characters are in the second group, and so on. Note that the size of the last group can be smaller than \`k\`.
2. Replace each group by the value of its **digit sum**.
3. Merge consecutive groups together to form the new \`num\`.

Return \`num\` after the algorithm stops.`,
  constraints: [
    '1 <= num.length <= 100',
    '2 <= k <= 100',
    'num consists of digits only.',
  ],
  examples: [
    {
      input: 'num = "11111222223", k = 3',
      output: '"135"',
      explanation: 'Groups: "111","112","222","23" → sums 3,4,6,5 → "3465". Then "346","5" → 13,5 → "135". Length 3 ≤ 3, done.',
    },
    {
      input: 'num = "00000000", k = 3',
      output: '"000"',
      explanation: 'Groups: "000","000","00" → sums 0,0,0 → "000". Length 3 ≤ 3, done.',
    },
  ],
  hints: [
    'Simulate the process: repeatedly group digits by k, replace each group with its digit sum string, concatenate, and repeat.',
    'Stop when the resulting string length is ≤ k.',
    'Use parseInt or charCodeAt to convert digit characters to numbers.',
  ],
  functionName: 'calculateDigitSum',
  params: ['num', 'k'],
  starterCode: {
    javascript: `function calculateDigitSum(num, k) {
  while (num.length > k) {
    let next = '';
    for (let i = 0; i < num.length; i += k) {
      const g = num.slice(i, i + k);
      next += String(g.split('').reduce((a, c) => a + Number(c), 0));
    }
    num = next;
  }
  return num;
}`,
    typescript: `function calculateDigitSum(num: string, k: number): string {
  while (num.length > k) {
    let next = '';
    for (let i = 0; i < num.length; i += k) {
      const g = num.slice(i, i + k);
      next += String(g.split('').reduce((a, c) => a + Number(c), 0));
    }
    num = next;
  }
  return num;
}`,
    python: `def calculateDigitSum(num, k):
    while len(num) > k:
        groups = [num[i:i+k] for i in range(0, len(num), k)]
        num = ''.join(str(sum(int(c) for c in g)) for g in groups)
    return num`,
  },
  visibleTests: [
    { args: ['11111222223', 3], expected: '135' },
    { args: ['00000000', 3], expected: '000' },
    { args: ['1', 1], expected: '1' },
    { args: ['9999999999999999', 4], expected: '1818' },
    { args: ['1234', 2], expected: '37' },
  ],
  hiddenTests: [
    { args: ['1111', 2], expected: '22' },
    { args: ['99999', 2], expected: '99' },
    { args: ['0', 1], expected: '0' },
    { args: ['100', 3], expected: '100' },
    { args: ['123456', 3], expected: '615' },
    { args: ['987654321', 3], expected: '711' },
    { args: ['11', 2], expected: '11' },
    { args: ['999', 2], expected: '99' },
  ],
};
