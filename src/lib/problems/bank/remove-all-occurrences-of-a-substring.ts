import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-all-occurrences-of-a-substring',
  title: 'Remove All Occurrences of a Substring',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `Given two strings \`s\` and \`part\`, perform the following operation on \`s\` until all occurrences of the substring \`part\` are removed:

- Find the **leftmost** occurrence of the substring \`part\` and **remove** it from \`s\`.

Return \`s\` *after removing all occurrences of* \`part\`.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`1 <= part.length <= 1000`',
    '`s` and `part` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "daabcbaabcbc", part = "abc"',
      output: '"dab"',
      explanation:
        'Remove "abc" from "daabcbaabcbc" → "dabaabcbc". Remove "abc" from "dabaabcbc" → "dababc". Remove "abc" from "dababc" → "dab". "dab" has no occurrence of "abc".',
    },
    {
      input: 's = "axxxxyyyyb", part = "xy"',
      output: '"ab"',
      explanation:
        'Repeatedly remove the leftmost "xy" until none remain. The x\'s and y\'s are consumed in pairs from the boundary.',
    },
  ],
  hints: [
    'Use a stack (array) of characters. As you append each character, check if the tail of the stack equals `part`.',
    'If the last `part.length` characters of the stack match `part`, pop them off.',
    'This processes the string in O(n × m) time where n = |s| and m = |part|.',
    `\`\`\`js
function removeOccurrences(s, part) {
  const stack = [];
  const m = part.length;
  for (const ch of s) {
    stack.push(ch);
    if (stack.length >= m && stack.slice(-m).join('') === part) {
      stack.splice(stack.length - m, m);
    }
  }
  return stack.join('');
}
\`\`\``,
  ],
  functionName: 'removeOccurrences',
  params: ['s', 'part'],
  starterCode: {
    javascript: `function removeOccurrences(s, part) {

}`,
    typescript: `function removeOccurrences(s: string, part: string): string {

}`,
    python: `def removeOccurrences(s, part):
    pass`,
  },
  visibleTests: [
    { args: ['daabcbaabcbc', 'abc'], expected: 'dab' },
    { args: ['axxxxyyyyb', 'xy'], expected: 'ab' },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: '' },
    { args: ['aa', 'a'], expected: '' },
    { args: ['ab', 'c'], expected: 'ab' },
    { args: ['ababab', 'ab'], expected: '' },
    { args: ['abcabc', 'abc'], expected: '' },
    { args: ['hello', 'world'], expected: 'hello' },
    { args: ['aabababa', 'aba'], expected: 'ba' },
    { args: ['aaaa', 'aa'], expected: '' },
    { args: ['xyzxyz', 'xyz'], expected: '' },
    { args: ['abcd', 'bc'], expected: 'ad' },
  ],
};
