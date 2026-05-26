import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-compression',
  title: 'String Compression',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, apply **run-length encoding** compression:

For each group of consecutive identical characters, write the character followed by the group's count. If the count is 1, omit it.

Return the **length** of the compressed result.

For example, \`"aabcccccaaa"\` compresses to \`"a2bc5a3"\`, which has length **7**.`,
  constraints: [
    '`1 <= s.length <= 2 * 10^4`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aabcccccaaa"',
      output: '7',
      explanation: '"aabcccccaaa" → "a2bc5a3" → length 7.',
    },
    {
      input: 's = "abbbbbbbbbbbb"',
      output: '4',
      explanation: '"abbbbbbbbbbbb" → "ab12" → length 4 (a=1 char, b12=3 chars).',
    },
    {
      input: 's = "a"',
      output: '1',
      explanation: '"a" → "a" → length 1.',
    },
  ],
  hints: [
    'Walk through the string tracking the current character and its run length. Each time the character changes (or end of string), write the character and the count (if > 1) to a result buffer.',
    'The count itself may be multi-digit (e.g., 12 → "12" = 2 extra chars), so use `toString()` and add its length.',
    `\`\`\`js
function compress(chars) {
  let write=0,i=0;
  while(i<chars.length){
    let j=i;
    while(j<chars.length&&chars[j]===chars[i]) j++;
    chars[write++]=chars[i];
    if(j-i>1) for(const c of String(j-i)) chars[write++]=c;
    i=j;
  }
  return write;
}\`\`\``,
  ],
  functionName: 'compress',
  params: ['s'],
  starterCode: {
    javascript: `function compress(s) {

}`,
    python: `def compress(s):
    pass`,
  },
  visibleTests: [
    { args: ['aabcccccaaa'], expected: 7 },
    { args: ['a'], expected: 1 },
    { args: ['ab'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 2 },
    { args: ['aabb'], expected: 4 },
    { args: ['abbbbbbbbbbbb'], expected: 4 },
    { args: ['aaabbbccd'], expected: 7 },
    { args: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'], expected: 4 },
  ],
};
