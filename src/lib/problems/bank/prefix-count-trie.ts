import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prefix-count-trie',
  title: 'Count Words with Given Prefix — Trie',
  difficulty: 'easy',
  tags: ['trie', 'strings'],
  description: `Given a list of \`words\` and a list of \`prefixes\`, for each prefix count how many words in the list start with that prefix.

Use a **trie** to efficiently answer prefix queries.

Return an array of counts, one per prefix.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 100',
    '1 <= prefixes.length <= 1000',
    '1 <= prefixes[i].length <= 100',
    'All strings consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["apple", "app", "apricot", "banana"], prefixes = ["ap", "ban", "c"]',
      output: '[3, 1, 0]',
      explanation: '"ap" matches apple, app, apricot. "ban" matches banana. "c" matches nothing.',
    },
  ],
  hints: [
    'Build a trie from all words. At each node, store a count of how many words pass through that node.',
    'For each prefix, walk the trie. If you reach the end of the prefix, the count at that node is the answer. If you fall off the trie, the answer is 0.',
    `\`\`\`js
function prefixCount(words, prefixes) {
  const root = {};
  for (const w of words) {
    let node = root;
    for (const ch of w) {
      if (!node[ch]) node[ch] = { count: 0 };
      node[ch].count++;
      node = node[ch];
    }
  }
  return prefixes.map(p => {
    let node = root;
    for (const ch of p) {
      if (!node[ch]) return 0;
      node = node[ch];
    }
    return node.count;
  });
}\`\`\``,
  ],
  functionName: 'prefixCount',
  params: ['words', 'prefixes'],
  starterCode: {
    javascript: `function prefixCount(words, prefixes) {\n\n}`,
    typescript: `function prefixCount(words: string[], prefixes: string[]): number[] {\n\n}`,
    python: `def prefixCount(words, prefixes):\n    pass`,
  },
  visibleTests: [
    {
      args: [['apple', 'app', 'apricot', 'banana'], ['ap', 'ban', 'c']],
      expected: [3, 1, 0],
    },
    {
      args: [['hello', 'help', 'heap'], ['he', 'hel', 'heap', 'hi']],
      expected: [3, 2, 1, 0],
    },
  ],
  hiddenTests: [
    {
      args: [['a'], ['a', 'b']],
      expected: [1, 0],
    },
    {
      args: [['abc', 'abc', 'abc'], ['abc', 'ab', 'a']],
      expected: [3, 3, 3],
    },
    {
      args: [['cat', 'car', 'card', 'care'], ['ca', 'car', 'card', 'cat', 'caz']],
      expected: [4, 3, 1, 1, 0],
    },
    {
      args: [['x', 'xy', 'xyz', 'xyzz'], ['x', 'xy', 'xyz', 'xyzz', 'xyzzz']],
      expected: [4, 3, 2, 1, 0],
    },
    {
      args: [[], ['a']],
      expected: [0],
    },
  ],
};
