import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindrome-build',
  title: 'Longest Palindrome',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` which consists of lowercase or uppercase letters, return the length of the **longest palindrome** that can be built with those letters.

Letters are **case sensitive**, so \`"Aa"\` is not considered a palindrome.`,
  constraints: [
    '`1 <= s.length <= 2000`',
    '`s` consists of lowercase **and/or** uppercase English letters only',
  ],
  examples: [
    {
      input: 's = "abccccdd"',
      output: '7',
      explanation: 'One longest palindrome that can be built is "dccaccd", whose length is 7.',
    },
    {
      input: 's = "a"',
      output: '1',
    },
  ],
  hints: [
    'Count the frequency of each character. A character with an even count can be fully used. A character with an odd count can contribute `count - 1` characters (making it even), plus one character can go in the middle.',
    'If any character has an odd count, add 1 to the total for the center position.',
    `\`\`\`js
function longestPalindrome(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c]||0)+1;
  let len = 0, hasOdd = false;
  for (const v of Object.values(freq)) {
    len += v - (v%2);
    if (v%2===1) hasOdd=true;
  }
  return len + (hasOdd ? 1 : 0);
}\`\`\``,
  ],
  functionName: 'longestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: `function longestPalindrome(s) {

}`,
    python: `def longestPalindrome(s):
    pass`,
  },
  visibleTests: [
    { args: ['abccccdd'], expected: 7 },
    { args: ['a'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['Aa'], expected: 1 },
    { args: ['aabb'], expected: 4 },
    { args: ['ccc'], expected: 3 },
    { args: ['aabbccddee'], expected: 10 },
  ],
};
