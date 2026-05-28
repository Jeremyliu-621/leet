import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alien-dictionary',
  title: 'Alien Dictionary',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a list of strings \`words\` sorted lexicographically by the rules of an alien language.

Derive the character ordering of that language and return any valid ordering as a string. If no valid ordering exists (due to a cycle or an invalid prefix relationship), return \`""\`.

Your function receives the array of sorted words and must return a string of the unique characters in a valid ordering.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters',
    'All characters in words[i] are lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["wrt","wrf","er","ett","rftt"]',
      output: '"wertf"',
      explanation:
        'From adjacent pairs: t < f (wrt vs wrf), w < e (wrf vs er), r < t (er vs ett), e < r (ett vs rftt). The unique chain is w → e → r → t → f.',
    },
    {
      input: 'words = ["z","x","z"]',
      output: '""',
      explanation:
        '"z" < "x" from the first pair, but "x" < "z" from the second pair — a cycle, so no valid ordering exists.',
    },
  ],
  hints: [
    'Build a directed graph from adjacent word pairs: compare the first differing character in each pair to get a directed edge (earlier char → later char). If word A is longer than word B, A starts with B, and A appears before B in the list, return "" immediately — that\'s an impossible ordering.',
    'Run topological sort (BFS / Kahn\'s algorithm) on the character graph. Collect all unique characters from all words as the node set; every unique character must appear in the output.',
    'After BFS, if the result string length equals the number of unique characters, return it. Otherwise a cycle was detected — return "".',
  ],
  functionName: 'alienOrder',
  params: ['words'],
  starterCode: {
    javascript: 'function alienOrder(words) {\n  \n}\n',
    python: 'def alienOrder(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['wrt', 'wrf', 'er', 'ett', 'rftt']], expected: 'wertf' },
    { args: [['z', 'x']], expected: 'zx' },
    { args: [['z', 'x', 'z']], expected: '' },
  ],
  hiddenTests: [
    { args: [['abc', 'ab']], expected: '' },
    { args: [['z']], expected: 'z' },
    { args: [['baa', 'abcd', 'abca', 'cab', 'cad']], expected: 'bdac' },
  ],
};
