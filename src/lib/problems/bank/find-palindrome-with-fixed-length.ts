import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-palindrome-with-fixed-length',
  title: 'Find Palindrome With Fixed Length',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `Given an integer array \`queries\` and a positive integer \`intLength\`, return an array \`answer\` where \`answer[i]\` is either the \`queries[i]\`-th smallest **positive palindrome** of length \`intLength\`, or \`-1\` if no such palindrome exists.

A **palindrome** is a number that reads the same forwards and backwards.`,
  constraints: [
    '`1 <= queries.length <= 5 * 10^4`',
    '`1 <= queries[i] <= 10^9`',
    '`1 <= intLength <= 15`',
  ],
  examples: [
    {
      input: 'queries = [1,2,3,4,5,90], intLength = 3',
      output: '[101,111,121,131,141,999]',
      explanation: 'The first 90 three-digit palindromes are 101, 111, 121, …, 999.',
    },
    {
      input: 'queries = [2,4,6], intLength = 4',
      output: '[1111,1331,1551]',
      explanation: 'Four-digit palindromes: 1001, 1111, 1221, 1331, 1441, 1551, …',
    },
  ],
  hints: [
    'The first half (ceiling of intLength/2 digits) uniquely determines the palindrome. The smallest first half is 10^(halfLen-1) and the k-th one is 10^(halfLen-1) + k - 1.',
    'Mirror the first half to build the full palindrome. For odd length, drop the middle digit from the mirrored part.',
    '```js\nfunction kthPalindrome(queries, intLength) {\n  const halfLen = Math.ceil(intLength / 2);\n  const start = Math.pow(10, halfLen - 1);\n  const end = Math.pow(10, halfLen);\n  return queries.map(k => {\n    const first = start + k - 1;\n    if (first >= end) return -1;\n    const s = first.toString();\n    const mirror = s.split(\'\').reverse().join(\'\');\n    return Number(intLength % 2 === 0 ? s + mirror : s + mirror.slice(1));\n  });\n}\n```',
  ],
  functionName: 'kthPalindrome',
  params: ['queries', 'intLength'],
  starterCode: {
    javascript: `function kthPalindrome(queries, intLength) {
  const halfLen = Math.ceil(intLength / 2);
  const start = Math.pow(10, halfLen - 1);
  const end = Math.pow(10, halfLen);
  return queries.map(k => {
    const first = start + k - 1;
    if (first >= end) return -1;
    const s = first.toString();
    const mirror = s.split('').reverse().join('');
    return Number(intLength % 2 === 0 ? s + mirror : s + mirror.slice(1));
  });
}`,
    typescript: `function kthPalindrome(queries: number[], intLength: number): number[] {
  const halfLen = Math.ceil(intLength / 2);
  const start = Math.pow(10, halfLen - 1);
  const end = Math.pow(10, halfLen);
  return queries.map(k => {
    const first = start + k - 1;
    if (first >= end) return -1;
    const s = first.toString();
    const mirror = s.split('').reverse().join('');
    return Number(intLength % 2 === 0 ? s + mirror : s + mirror.slice(1));
  });
}`,
    python: `def kthPalindrome(queries, intLength):
    import math
    half_len = math.ceil(intLength / 2)
    start, end = 10 ** (half_len - 1), 10 ** half_len
    result = []
    for k in queries:
        first = start + k - 1
        if first >= end:
            result.append(-1)
        else:
            s = str(first); mirror = s[::-1]
            result.append(int(s + (mirror[1:] if intLength % 2 else mirror)))
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 90], 3], expected: [101, 111, 121, 131, 141, 999] },
    { args: [[2, 4, 6], 4], expected: [1111, 1331, 1551] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 9], 2], expected: [11, 99] },
    { args: [[1, 10], 2], expected: [11, -1] },
  ],
};
