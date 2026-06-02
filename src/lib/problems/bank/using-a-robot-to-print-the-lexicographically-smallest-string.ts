import type { Problem } from '../types';

export const problem: Problem = {
  id: 'using-a-robot-to-print-the-lexicographically-smallest-string',
  title: 'Using a Robot to Print the Lexicographically Smallest String',
  difficulty: 'medium',
  tags: ['strings', 'stack', 'hash-map'],
  description: `You are given a string \`s\` and a robot that currently has an empty string \`t\`. Apply one of the following operations until both \`s\` and \`t\` are empty:

- Remove the **first** character of \`s\` and give it to the robot. The robot will append this character to the **beginning** of \`t\`.
- Remove the **first** character of \`t\` and give it to the robot. The robot will write this character on paper.

Return the **lexicographically smallest** string that can be written on paper.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "zza"',
      output: '"azz"',
      explanation: 'Push z, push z, push a, pop a, pop z, pop z → "azz".',
    },
    {
      input: 's = "bac"',
      output: '"abc"',
      explanation: 'Push b, push a, pop a, pop b, push c, pop c → "abc".',
    },
    {
      input: 's = "bdda"',
      output: '"addb"',
      explanation: 'Push b, d, d, a; then pop a, d, d, b → "addb".',
    },
  ],
  hints: [
    'Level 1: t acts like a stack (push to front = push to top). You can pop from t at any time. Greedily pop when it helps.',
    'Level 2: Precompute suffMin[i] = minimum character in s[i..n-1]. Pop from t while t.top() <= suffMin[current index], then push the next character.',
    'Level 3: After consuming all of s, drain t completely into the result.',
  ],
  functionName: 'robotWithString',
  params: ['s'],
  starterCode: {
    javascript: `function robotWithString(s) {
  const n = s.length;
  const suffMin = new Array(n + 1).fill('{');
  for (let i = n - 1; i >= 0; i--)
    suffMin[i] = s[i] < suffMin[i + 1] ? s[i] : suffMin[i + 1];
  const t = [], result = [];
  for (let i = 0; i < n; i++) {
    while (t.length > 0 && t[t.length - 1] <= suffMin[i])
      result.push(t.pop());
    t.push(s[i]);
  }
  while (t.length > 0) result.push(t.pop());
  return result.join('');
}`,
    typescript: `function robotWithString(s: string): string {
  const n = s.length;
  const suffMin: string[] = new Array(n + 1).fill('{');
  for (let i = n - 1; i >= 0; i--)
    suffMin[i] = s[i]! < suffMin[i + 1]! ? s[i]! : suffMin[i + 1]!;
  const t: string[] = [], result: string[] = [];
  for (let i = 0; i < n; i++) {
    while (t.length > 0 && t[t.length - 1]! <= suffMin[i]!)
      result.push(t.pop()!);
    t.push(s[i]!);
  }
  while (t.length > 0) result.push(t.pop()!);
  return result.join('');
}`,
    python: `def robotWithString(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    s = str(s)
    n = len(s)
    suf = ['{'] * (n + 1)
    for i in range(n - 1, -1, -1):
        suf[i] = min(s[i], suf[i + 1])
    t, result = [], []
    for i in range(n):
        while t and t[-1] <= suf[i]:
            result.append(t.pop())
        t.append(s[i])
    while t:
        result.append(t.pop())
    return ''.join(result)`,
  },
  visibleTests: [
    { args: ['zza'], expected: 'azz' },
    { args: ['bac'], expected: 'abc' },
    { args: ['bdda'], expected: 'addb' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ba'], expected: 'ab' },
    { args: ['dcba'], expected: 'abcd' },
    { args: ['cab'], expected: 'abc' },
    { args: ['xyz'], expected: 'xyz' },
  ],
};
