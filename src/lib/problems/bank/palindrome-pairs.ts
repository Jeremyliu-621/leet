import type { Problem } from '../types';

const JS_PREAMBLE = `
function palindromePairsRunner(words) {
  const r = palindromePairs(words);
  return r.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
}
`.trim();

const PY_PREAMBLE = `
def palindromePairsRunner(words):
    words = list(words) if hasattr(words, 'to_py') else list(words)
    r = palindromePairs(words)
    return sorted([list(p) for p in r])
`.trim();

export const problem: Problem = {
  id: 'palindrome-pairs',
  title: 'Palindrome Pairs',
  difficulty: 'hard',
  tags: ['trie', 'hash-map', 'strings'],
  description: `You are given a **0-indexed** array of **unique** strings \`words\`.

A **palindrome pair** is a pair of integers \`(i, j)\` such that:
- \`0 <= i, j < words.length\`
- \`i != j\`
- \`words[i] + words[j]\` (the concatenation of the two strings) is a palindrome.

Return an array of all the **palindrome pairs** of \`words\`. You may return the answer in **any order**.

> **Note:** The \`palindromePairsRunner\` wrapper is pre-defined. Implement \`palindromePairs(words)\`.`,
  constraints: [
    '1 <= words.length <= 5000',
    '0 <= words[i].length <= 300',
    'words[i] consists of lowercase English letters.',
    'All words in the input are unique.',
  ],
  examples: [
    {
      input: 'words = ["abcd","dcba","lls","s","sssll"]',
      output: '[[0,1],[1,0],[2,4],[3,2]]',
      explanation: 'abcd+dcba, dcba+abcd, lls+sssll, s+lls are all palindromes.',
    },
    {
      input: 'words = ["bat","tab","cat"]',
      output: '[[0,1],[1,0]]',
      explanation: 'bat+tab and tab+bat are palindromes.',
    },
  ],
  hints: [
    'For each word w at index i, its reverse must exist as another word j to form a full palindrome.',
    'Also consider cases where one word is a prefix/suffix of the other\'s reverse, and the remaining portion is itself a palindrome.',
    'Store a map from word → index for O(1) lookups. For each word, check its reverse and all prefix/suffix splits.',
  ],
  functionName: 'palindromePairsRunner',
  params: ['words'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `function palindromePairs(words) {

}`,
    typescript: "function palindromePairsRunner(words: string[]): number[][] {\n\n}",

    python: `def palindromePairs(words):
    pass`,
  },
  visibleTests: [
    {
      args: [['abcd', 'dcba', 'lls', 's', 'sssll']],
      expected: [[0, 1], [1, 0], [2, 4], [3, 2]],
    },
    {
      args: [['bat', 'tab', 'cat']],
      expected: [[0, 1], [1, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [['a', '']],
      expected: [[0, 1], [1, 0]],
    },
    {
      args: [['a', 'b', 'c']],
      expected: [],
    },
  ],
};
