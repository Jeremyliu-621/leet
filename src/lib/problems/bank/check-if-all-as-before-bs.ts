import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-as-before-bs',
  title: 'Check if All As Appear Before All Bs',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` consisting of **only** the characters \`'a'\` and \`'b'\`, return \`true\` if **every** \`'a'\` appears before **every** \`'b'\` in the string. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's[i] is either "a" or "b".',
  ],
  examples: [
    {
      input: 's = "aaabbb"',
      output: 'true',
    },
    {
      input: 's = "abab"',
      output: 'false',
      explanation: '"b" at index 1 appears before "a" at index 2.',
    },
    {
      input: 's = "bbb"',
      output: 'true',
      explanation: 'No "a" appears, so the condition is trivially satisfied.',
    },
  ],
  hints: [
    'Level 1: Track if you have seen a "b". Once you see "b", any "a" after it is invalid.',
    'Level 2: Scan left to right. If you see "a" after seeing "b", return false.',
    'Level 3: let seenB=false;for(const c of s){if(c==="b")seenB=true;else if(seenB)return false;}return true;',
  ],
  functionName: 'checkString',
  params: ['s'],
  starterCode: {
    javascript: `function checkString(s) {
  return !s.includes('ba');
}`,
    typescript: `function checkString(s: string): boolean {
  return !s.includes('ba');
}`,
    python: `def checkString(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    return 'ba' not in s`,
  },
  visibleTests: [
    { args: ['aaabbb'], expected: true },
    { args: ['abab'], expected: false },
    { args: ['bbb'], expected: true },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: true },
    { args: ['ab'], expected: true },
    { args: ['ba'], expected: false },
    { args: ['b'], expected: true },
    { args: ['aabb'], expected: true },
  ],
};
