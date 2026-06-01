import type { Problem } from '../types';

export const problem: Problem = {
  id: 'aho-corasick-multi-pattern',
  title: 'Multi-Pattern Search — Aho-Corasick',
  difficulty: 'hard',
  tags: ['strings', 'trie'],
  description: `Given a \`text\` string and a list of \`patterns\`, find all occurrences of every pattern in the text simultaneously using the **Aho-Corasick** algorithm (O(n + m + z) where n = text length, m = total pattern length, z = total matches).

The Aho-Corasick algorithm builds a **trie** of all patterns augmented with **failure links** (like KMP's failure function but generalized to a trie). Searching traverses the text once following trie transitions, falling back via failure links on mismatches.

Return a **sorted** list of \`[pattern, startIndex]\` pairs listing every occurrence of every pattern. If the same pattern occurs multiple times, include each occurrence. Sort by \`startIndex\` first, then by \`pattern\` lexicographically.`,
  constraints: [
    '1 <= text.length <= 10^5',
    '1 <= patterns.length <= 100',
    '1 <= patterns[i].length <= 100',
    'All characters are lowercase English letters.',
    'Patterns may overlap in the text.',
  ],
  examples: [
    {
      input: 'text = "abcabc", patterns = ["abc","bc","c"]',
      output: '[[\"abc\",0],[\"bc\",1],[\"c\",2],[\"abc\",3],[\"bc\",4],[\"c\",5]]',
      explanation: 'All three patterns match at two positions each; sorted by start index then pattern.',
    },
    {
      input: 'text = "aaa", patterns = ["a","aa"]',
      output: '[[\"a\",0],[\"aa\",0],[\"a\",1],[\"aa\",1],[\"a\",2]]',
      explanation: '"a" occurs at 0,1,2; "aa" occurs at 0 and 1 (overlapping matches included).',
    },
    {
      input: 'text = "xyz", patterns = ["abc"]',
      output: '[]',
      explanation: 'Pattern not found in text.',
    },
  ],
  hints: [
    'Build a trie from all patterns. Each node stores a map of character → child node, a failure link (longest proper suffix that is also a trie prefix), and a list of patterns that end at this node.',
    'Compute failure links via BFS: the root\'s children have failure link = root. For deeper nodes: if parent has failure link f and the character c leads to child ch, then ch.fail = f\'s child via c (or root if none). Also collect "dictionary links" — chain through failure links to find all matching patterns at each node.',
    'Scan the text: maintain a current trie node. For each character, follow the transition or fall back via failure links. At each step, walk the dictionary links to report all matching patterns ending at this position.',
  ],
  functionName: 'ahoCorasick',
  params: ['text', 'patterns'],
  starterCode: {
    javascript: `function ahoCorasick(text, patterns) {\n\n}`,
    typescript: `function ahoCorasick(text: string, patterns: string[]): [string, number][] {\n\n}`,
    python: `def ahoCorasick(text: str, patterns: list[str]) -> list:\n    pass`,
  },
  visibleTests: [
    {
      args: ['abcabc', ['abc', 'bc', 'c']],
      expected: [['abc', 0], ['bc', 1], ['c', 2], ['abc', 3], ['bc', 4], ['c', 5]],
    },
    {
      args: ['aaa', ['a', 'aa']],
      expected: [['a', 0], ['aa', 0], ['a', 1], ['aa', 1], ['a', 2]],
    },
    {
      args: ['xyz', ['abc']],
      expected: [],
    },
    {
      args: ['abcdef', ['bc', 'cd', 'ef']],
      expected: [['bc', 1], ['cd', 2], ['ef', 4]],
    },
  ],
  hiddenTests: [
    {
      args: ['mississippi', ['issi', 'miss', 'ippi']],
      expected: [['miss', 0], ['issi', 1], ['issi', 4], ['ippi', 7]],
    },
    {
      args: ['aababc', ['a', 'ab', 'abc']],
      expected: [['a', 0], ['a', 1], ['ab', 1], ['a', 3], ['ab', 3], ['abc', 3]],
    },
    {
      args: ['hello', ['hello', 'ell', 'll']],
      expected: [['hello', 0], ['ell', 1], ['ll', 2]],
    },
    {
      args: ['aaaa', ['aa', 'aaa']],
      expected: [['aa', 0], ['aaa', 0], ['aa', 1], ['aaa', 1], ['aa', 2]],
    },
  ],
};
