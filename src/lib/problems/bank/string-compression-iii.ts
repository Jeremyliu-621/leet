import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-compression-iii',
  title: 'String Compression III',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a string \`word\`, compress it using the following algorithm:

- Begin with an empty string \`comp\`.
- While \`word\` is not empty, use the following operation:
  - Remove a maximum length prefix of \`word\` made of a single character \`c\` repeating at most 9 times.
  - Append the length of the prefix followed by \`c\` to \`comp\`.

Return the string \`comp\`.`,
  constraints: [
    '`1 <= word.length <= 2 × 10⁵`',
    '`word\` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abcde"',
      output: '"1a1b1c1d1e"',
      explanation: 'Each character appears once consecutively.',
    },
    {
      input: 'word = "aaaaaaaaaaaaaabb"',
      output: '"9a5a2b"',
      explanation: 'First 9 a\'s → "9a", next 5 a\'s → "5a", then 2 b\'s → "2b".',
    },
    {
      input: 'word = "aaabbbccc"',
      output: '"3a3b3c"',
      explanation: 'Three a\'s, three b\'s, three c\'s.',
    },
  ],
  hints: [
    'Scan left to right. For each position, count consecutive same characters but cap at 9.',
    'Append count.toString() + char to the result, then advance the index by the count.',
    `\`\`\`js
function compressedString(word) {
  let res="",i=0;
  while(i<word.length){
    let j=i,cnt=0;
    while(j<word.length&&word[j]===word[i]&&cnt<9){j++;cnt++;}
    res+=cnt+word[i];
    i=j;
  }
  return res;
}\`\`\``,
  ],
  functionName: 'compressedString',
  params: ['word'],
  starterCode: {
    javascript: `function compressedString(word) {

}`,
    python: `def compressedString(word):
    pass`,
  },
  visibleTests: [
    { args: ['abcde'], expected: '1a1b1c1d1e' },
    { args: ['aaaaaaaaaaaaaabb'], expected: '9a5a2b' },
    { args: ['aaabbbccc'], expected: '3a3b3c' },
  ],
  hiddenTests: [
    { args: ['a'], expected: '1a' },
    { args: ['aaaaaaaaaa'], expected: '9a1a' },
    { args: ['aabbcc'], expected: '2a2b2c' },
    { args: ['zzzzzzzzzzzzz'], expected: '9z4z' },
  ],
};
