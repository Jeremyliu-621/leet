import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-palindrome-ii',
  title: 'Valid Palindrome II',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, return \`true\` if the \`s\` can be palindrome after deleting **at most one** character from it.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    { input: 's = "aba"', output: 'true' },
    { input: 's = "abca"', output: 'true', explanation: 'Delete \'c\'.' },
    { input: 's = "abc"', output: 'false' },
  ],
  hints: [
    'Use two pointers from both ends.',
    'When characters differ, try deleting either the left or right character and check if the remaining substring is a palindrome.',
    `\`\`\`js
function validPalindrome(s) {
  function isPalin(l,r){while(l<r){if(s[l]!==s[r])return false;l++;r--;}return true;}
  let l=0,r=s.length-1;
  while(l<r){
    if(s[l]!==s[r]) return isPalin(l+1,r)||isPalin(l,r-1);
    l++;r--;
  }
  return true;
}\`\`\``,
  ],
  functionName: 'validPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function validPalindrome(s) {\n  \n}\n',
    typescript: "function validPalindrome(s: string): boolean {\n  \n}",

    python: 'def validPalindrome(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aba'], expected: true },
    { args: ['abca'], expected: true },
    { args: ['abc'], expected: false },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['aa'], expected: true },
    { args: ['deeee'], expected: true },
    { args: ['abcba'], expected: true },
    { args: ['abcbda'], expected: true },
    { args: ['abcdef'], expected: false },
  ],
};
