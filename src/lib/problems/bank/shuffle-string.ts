import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shuffle-string',
  title: 'Shuffle String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` and an integer array \`indices\` of the **same length**. The string \`s\` will be shuffled such that the character at the \`i-th\` position moves to \`indices[i]\` in the shuffled string.

Return the shuffled string.`,
  constraints: [
    's.length == indices.length == n',
    '1 <= n <= 100',
    's consists of only lowercase English letters',
    '0 <= indices[i] < n',
    'All values of indices are unique',
  ],
  examples: [
    { input: 's = "codeleet", indices = [4,5,6,7,0,2,1,3]', output: '"leetcode"', explanation: 'As shown, "codeleet" becomes "leetcode" after shuffling.' },
    { input: 's = "abc", indices = [0,1,2]', output: '"abc"', explanation: 'No change.' },
  ],
  hints: [
    'Create an array of the same length. Place s[i] at result[indices[i]] for each i.',
    'Create a result array, then place `s[i]` at `result[indices[i]]`.',
    `\`\`\`js
const res = new Array(s.length);
for (let i = 0; i < s.length; i++) res[indices[i]] = s[i];
return res.join('');\`\`\``
  ],
  functionName: 'restoreString',
  params: ['s', 'indices'],
  starterCode: {
    javascript: 'function restoreString(s, indices) {\n  \n}\n',
    python: 'def restoreString(s, indices):\n    pass\n',
  },
  visibleTests: [
    { args: ['codeleet', [4, 5, 6, 7, 0, 2, 1, 3]], expected: 'leetcode' },
    { args: ['abc', [0, 1, 2]], expected: 'abc' },
    { args: ['aiohn', [3, 1, 4, 2, 0]], expected: 'nihao' },
  ],
  hiddenTests: [
    { args: ['a', [0]], expected: 'a' },
    { args: ['ab', [1, 0]], expected: 'ba' },
    { args: ['art', [1, 0, 2]], expected: 'rat' },
    { args: ['dcba', [3, 2, 1, 0]], expected: 'abcd' },
  ],
};
