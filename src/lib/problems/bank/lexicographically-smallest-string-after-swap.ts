import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-string-after-swap',
  title: 'Lexicographically Smallest String After a Swap',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` containing only digits, return the **lexicographically smallest** string that can be obtained after swapping **at most one** pair of adjacent digits in \`s\` that have the **same parity**.

Two digits have the same parity if both are **odd** or both are **even**. For example, 1 and 3 are both odd, so they have the same parity. 2 and 4 are both even, so they have the same parity.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of digits',
  ],
  examples: [
    {
      input: 's = "45320"',
      output: '"43520"',
      explanation:
        'At index 1, s[1]=\'5\' and s[2]=\'3\' are both odd. Since 5>3, swapping gives "43520" which is lexicographically smaller.',
    },
    {
      input: 's = "001"',
      output: '"001"',
      explanation:
        's[0]=\'0\' and s[1]=\'0\' are equal so swapping does not help. s[1]=\'0\' and s[2]=\'1\' have different parity. No beneficial swap possible.',
    },
    {
      input: 's = "9753"',
      output: '"7953"',
      explanation:
        's[0]=\'9\' and s[1]=\'7\' are both odd and 9>7. Swapping gives "7953".',
    },
  ],
  hints: [
    'Level 1: Try each adjacent pair. If they have the same parity and swapping them makes the string smaller, do the swap.',
    'Level 2: Scan left to right. The first position where s[i]>s[i+1] and both have the same parity is the optimal swap — it produces the smallest possible change at the leftmost position.',
    'Level 3: If s[i]>s[i+1] and s[i]%2==s[i+1]%2, swap and return. If no such pair exists, return s unchanged.',
  ],
  functionName: 'getSmallestString',
  params: ['s'],
  starterCode: {
    javascript: `function getSmallestString(s) {
  const a = [...s];
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i+1] && a[i] % 2 === a[i+1] % 2) {
      [a[i], a[i+1]] = [a[i+1], a[i]];
      return a.join('');
    }
  }
  return s;
}`,
    typescript: `function getSmallestString(s: string): string {
  const a = [...s];
  for (let i = 0; i < a.length - 1; i++) {
    const x = Number(a[i]!), y = Number(a[i + 1]!);
    if (x > y && x % 2 === y % 2) {
      [a[i], a[i + 1]] = [a[i + 1]!, a[i]!];
      return a.join('');
    }
  }
  return s;
}`,
    python: `def getSmallestString(s):
    a = list(s)
    for i in range(len(a) - 1):
        x, y = int(a[i]), int(a[i + 1])
        if x > y and x % 2 == y % 2:
            a[i], a[i + 1] = a[i + 1], a[i]
            return ''.join(a)
    return s`,
  },
  visibleTests: [
    { args: ['45320'], expected: '43520' },
    { args: ['001'], expected: '001' },
    { args: ['9753'], expected: '7953' },
  ],
  hiddenTests: [
    { args: ['31'], expected: '13' },
    { args: ['18'], expected: '18' },
    { args: ['21'], expected: '21' },
    { args: ['53'], expected: '35' },
    { args: ['24'], expected: '24' },
    { args: ['0000'], expected: '0000' },
    { args: ['1234'], expected: '1234' },
    { args: ['97531'], expected: '79531' },
  ],
};
