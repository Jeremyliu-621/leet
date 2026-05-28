import type { Problem } from '../types';

export const problem: Problem = {
  id: 'redistribute-characters-make-all-strings-equal',
  title: 'Redistribute Characters to Make All Strings Equal',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given an array \`words\` of strings. You may perform the following operation any number of times:

- Pick any character from any string in \`words\` and move it to **any position** in any other string.

Return \`true\` if you can make every string in \`words\` equal using **any** number of moves, otherwise return \`false\`.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","aabc","bc"]',
      output: 'true',
      explanation: 'Move the first "a" in words[1] to words[2] to make ["abc","abc","abc"].',
    },
    {
      input: 'words = ["ab","a"]',
      output: 'false',
      explanation: 'We can only make ["a","ab"] or ["ab","a"] or ["aa","b"] etc., but not equal.',
    },
  ],
  hints: [
    'Count the total frequency of each character across all strings.',
    'Each character must be evenly distributable across all strings (i.e., its count must be divisible by words.length).',
    `\`\`\`js
function makeEqual(words) {
  const freq={};
  for(const w of words) for(const c of w) freq[c]=(freq[c]||0)+1;
  return Object.values(freq).every(v=>v%words.length===0);
}\`\`\``,
  ],
  functionName: 'makeEqual',
  params: ['words'],
  starterCode: {
    javascript: 'function makeEqual(words) {\n  \n}\n',
    typescript: "function makeEqual(words: string[]): boolean {\n  \n}",

    python: 'def makeEqual(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['abc', 'aabc', 'bc']], expected: true },
    { args: [['ab', 'a']], expected: false },
    { args: [['a', 'a', 'a']], expected: true },
  ],
  hiddenTests: [
    { args: [['a']], expected: true },
    { args: [['abc', 'def']], expected: false },
    { args: [['ab', 'ab']], expected: true },
    { args: [['aa', 'bb']], expected: true },
  ],
};
