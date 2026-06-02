import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-prefix-trie',
  title: 'Longest Common Prefix via Trie',
  difficulty: 'medium',
  tags: ['trie', 'strings'],
  description: `Given an array of strings \`words\`, find the **longest common prefix** among all strings using a **trie** (prefix tree).

Build a trie from all words. The longest common prefix is the path from the root where every node has exactly one child and is not the end of any word (except possibly the last node if all words are the same).

Return the longest common prefix string. If there is no common prefix, return \`""\`.`,
  constraints: [
    '1 <= words.length <= 200',
    '0 <= words[i].length <= 200',
    'words[i] consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["flower", "flow", "flight"]',
      output: '"fl"',
      explanation: 'All three words start with "fl".',
    },
    {
      input: 'words = ["dog", "racecar", "car"]',
      output: '""',
      explanation: 'No common prefix.',
    },
  ],
  hints: [
    'Build a trie: insert all words. Each node has a map of children and a count of how many words pass through it.',
    'Walk from the root following the single-child path while every node has exactly one child and the count of words through that node equals words.length. Stop when a node has multiple children or fewer words pass through.',
    `\`\`\`js
function lcpTrie(words) {
  if (words.length === 0) return "";
  const root = {};
  for (const w of words) {
    let node = root;
    for (const ch of w) {
      if (!node[ch]) node[ch] = { _count: 0 };
      node[ch]._count++;
      node = node[ch];
    }
  }
  let prefix = "", node = root;
  while (true) {
    const keys = Object.keys(node).filter(k => k !== '_count');
    if (keys.length !== 1) break;
    const ch = keys[0];
    if (node[ch]._count !== words.length) break;
    prefix += ch;
    node = node[ch];
  }
  return prefix;
}\`\`\``,
  ],
  functionName: 'lcpTrie',
  params: ['words'],
  starterCode: {
    javascript: `function lcpTrie(words) {\n\n}`,
    typescript: `function lcpTrie(words: string[]): string {\n\n}`,
    python: `def lcpTrie(words):\n    pass`,
  },
  visibleTests: [
    { args: [['flower', 'flow', 'flight']], expected: 'fl' },
    { args: [['dog', 'racecar', 'car']], expected: '' },
    { args: [['abc', 'abc', 'abc']], expected: 'abc' },
  ],
  hiddenTests: [
    { args: [['']], expected: '' },
    { args: [['a']], expected: 'a' },
    { args: [['hello']], expected: 'hello' },
    { args: [['abc', 'abd']], expected: 'ab' },
    { args: [['x', 'y']], expected: '' },
    { args: [['prefix', 'preface', 'prevent']], expected: 'pre' },
    { args: [['aa', 'aab', 'aac', 'aad']], expected: 'aa' },
  ],
};
