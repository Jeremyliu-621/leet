import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-characters-to-make-fancy-string',
  title: 'Delete Characters to Make Fancy String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **fancy string** is a string where no **three** consecutive characters are equal.

Given a string \`s\`, delete the **minimum** possible number of characters from \`s\` to make it **fancy**.

Return the final string after the deletion. It can be shown that the answer will always be **unique**.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "leeetcode"',
      output: '"leetcode"',
      explanation: 'Remove one "e" from "leee" to get "lee". Result: "leetcode".',
    },
    {
      input: 's = "aaabaaaa"',
      output: '"aabaa"',
      explanation: 'Remove one "a" from "aaa" and two "a"s from "aaaa".',
    },
    {
      input: 's = "aab"',
      output: '"aab"',
      explanation: 'No three consecutive same characters.',
    },
  ],
  hints: [
    'Build the result character by character. Only append s[i] if the last two characters of the result are not both equal to s[i].',
    'Check: result.length < 2 || !(result[end-1] === s[i] && result[end-2] === s[i])',
    'This is O(n) with O(n) output space.',
  ],
  functionName: 'makeFancyString',
  params: ['s'],
  starterCode: {
    javascript: `function makeFancyString(s) {
  const res = [];
  for (const c of s) {
    const n = res.length;
    if (n < 2 || !(res[n - 1] === c && res[n - 2] === c)) res.push(c);
  }
  return res.join('');
}`,
    typescript: `function makeFancyString(s: string): string {
  const res: string[] = [];
  for (const c of s) {
    const n = res.length;
    if (n < 2 || !(res[n - 1] === c && res[n - 2] === c)) res.push(c);
  }
  return res.join('');
}`,
    python: `def makeFancyString(s):
    res = []
    for c in s:
        if len(res) < 2 or not (res[-1] == c == res[-2]):
            res.append(c)
    return ''.join(res)`,
  },
  visibleTests: [
    { args: ['leeetcode'], expected: 'leetcode' },
    { args: ['aaabaaaa'], expected: 'aabaa' },
    { args: ['aab'], expected: 'aab' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aaa'], expected: 'aa' },
    { args: ['abcabc'], expected: 'abcabc' },
    { args: ['aaaa'], expected: 'aa' },
  ],
};
