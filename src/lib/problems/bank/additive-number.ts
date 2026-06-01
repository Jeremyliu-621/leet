import type { Problem } from '../types';

export const problem: Problem = {
  id: 'additive-number',
  title: 'Additive Number',
  difficulty: 'medium',
  tags: ['strings'],
  description: `An **additive number** is a string whose digits can form an additive sequence.

A valid additive sequence should contain **at least three** numbers. Except for the first two numbers, each subsequent number must equal the sum of the two preceding numbers.

Given a string \`num\` containing only digits, return \`true\` if it is an additive number, otherwise return \`false\`.

**Note:** Numbers in the sequence **cannot** have leading zeros, so "1, 2, 03" is invalid.

**Example 1:**
\`\`\`
Input: num = "112358"
Output: true
Explanation: The sequence is 1, 1, 2, 3, 5, 8 (Fibonacci).
\`\`\`

**Example 2:**
\`\`\`
Input: num = "199100199"
Output: true
Explanation: The additive sequence is 1, 99, 100, 199.
\`\`\`

**Constraints:**
- \`1 ≤ num.length ≤ 35\`
- \`num\` consists only of digits.`,
  constraints: [
    '1 ≤ num.length ≤ 35',
    'num consists only of digits',
  ],
  examples: [
    { input: 'num = "112358"', output: 'true' },
    { input: 'num = "199100199"', output: 'true' },
    { input: 'num = "1203"', output: 'false' },
  ],
  hints: [
    'Enumerate the first two numbers by trying all split points for i and j.',
    'Use BigInt to handle large number sums safely.',
    'Once a, b are chosen, verify the rest: check rest.startsWith(String(BigInt(a)+BigInt(b))), recurse.',
    "A number has a leading zero only if it equals '0' but has length > 1.",
  ],
  functionName: 'isAdditiveNumber',
  params: ['num'],
  starterCode: {
    javascript: `function isAdditiveNumber(num) {
  function check(a, b, rest) {
    const sum = String(BigInt(a) + BigInt(b));
    if (!rest.startsWith(sum)) return false;
    if (rest === sum) return true;
    return check(b, sum, rest.slice(sum.length));
  }
  const n = num.length;
  for (let i = 1; i <= n / 2; i++) {
    if (i > 1 && num[0] === '0') break; // leading zero
    for (let j = i + 1; j < n; j++) {
      const s = num.slice(i, j);
      if (s.length > 1 && s[0] === '0') break; // leading zero
      if (check(num.slice(0, i), s, num.slice(j))) return true;
    }
  }
  return false;
}`,
    typescript: `function isAdditiveNumber(num: string): boolean {
  function check(a: string, b: string, rest: string): boolean {
    const sum = String(BigInt(a) + BigInt(b));
    if (!rest.startsWith(sum)) return false;
    if (rest === sum) return true;
    return check(b, sum, rest.slice(sum.length));
  }
  const n = num.length;
  for (let i = 1; i <= n / 2; i++) {
    if (i > 1 && num[0] === '0') break;
    for (let j = i + 1; j < n; j++) {
      const s = num.slice(i, j);
      if (s.length > 1 && s[0] === '0') break;
      if (check(num.slice(0, i), s, num.slice(j))) return true;
    }
  }
  return false;
}`,
    python: `def isAdditiveNumber(num):
    def check(a, b, rest):
        s = str(int(a) + int(b))
        if not rest.startswith(s):
            return False
        if rest == s:
            return True
        return check(b, s, rest[len(s):])
    n = len(num)
    for i in range(1, n // 2 + 1):
        if i > 1 and num[0] == '0':
            break
        for j in range(i + 1, n):
            part = num[i:j]
            if len(part) > 1 and part[0] == '0':
                break
            if check(num[:i], part, num[j:]):
                return True
    return False`,
  },
  visibleTests: [
    { args: ['112358'], expected: true },
    { args: ['199100199'], expected: true },
    { args: ['1203'], expected: false },
    { args: ['123'], expected: true },
  ],
  hiddenTests: [
    { args: ['000'], expected: true },
    { args: ['0235813'], expected: false },
    { args: ['1'], expected: false },
    { args: ['12'], expected: false },
  ],
};
