import type { Problem } from '../types';

const JS_PREAMBLE = `
function findWordsRunner(board, words) {
  return findWords(board.map(r => [...r]), words.slice()).slice().sort();
}
`.trim();

const PY_PREAMBLE = `
def findWordsRunner(board, words):
    b = [list(row) for row in board]
    w = list(words)
    return sorted(findWords(b, w))
`.trim();

export const problem: Problem = {
  id: 'word-search-ii',
  title: 'Word Search II',
  difficulty: 'hard',
  tags: ['graph', 'backtracking'],
  description: `Given an \`m × n\` board of characters and a list of strings \`words\`, return all words on the board.

A word is found if it can be constructed from letters of **sequentially adjacent cells** (horizontally or vertically neighboring). The **same cell may not be used more than once** in a word.

> **Note:** A runner function is pre-defined. Call \`findWords(board, words)\` where \`board\` is a 2D character array and \`words\` is a string array. Return the found words as an array (duplicates removed, any order).`,
  constraints: [
    'm == board.length',
    'n == board[i].length',
    '1 <= m, n <= 12',
    '1 <= words.length <= 3 × 10^4',
    '1 <= words[i].length <= 10',
    'board[i][j] and words[i] consist only of lowercase English letters',
  ],
  examples: [
    {
      input:
        'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
      output: '["eat","oath"]',
      explanation:
        '"eat" found via e(1,3)→a(1,2)→t(1,1). "oath" found via o(0,0)→a(0,1)→t(1,1)→h(2,1). "pea" and "rain" are not on the board.',
    },
    {
      input: 'board = [["a","b"],["c","d"]], words = ["abdc","acdb","ab","zz"]',
      output: '["ab","abdc","acdb"]',
      explanation:
        '"abdc": a(0,0)→b(0,1)→d(1,1)→c(1,0). "acdb": a(0,0)→c(1,0)→d(1,1)→b(0,1). "ab": a(0,0)→b(0,1).',
    },
  ],
  hints: [
    'Build a Trie from the words list. This lets you prune entire DFS branches early — if the current path prefix isn\'t in the Trie, there\'s no need to explore deeper.',
    'Run a DFS from every cell. At each step, check if the current character leads to a valid Trie node. Mark cells as visited (e.g., replace with "#") while exploring; restore them when backtracking.',
    'When a Trie node marks the end of a word, add that word to results. To avoid duplicates, remove the word from the Trie once found (set its `end` marker to null).',
  ],
  functionName: 'findWordsRunner',
  params: ['board', 'words'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// findWordsRunner is pre-defined and calls your function below.\nfunction findWords(board, words) {\n  \n}\n',
    typescript: "function findWordsRunner(board: string[][], words: string[]): string[] {\n  \n}",

    python:
      '# findWordsRunner is pre-defined and calls your function below.\ndef findWords(board, words):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          ['o', 'a', 'a', 'n'],
          ['e', 't', 'a', 'e'],
          ['i', 'h', 'k', 'r'],
          ['i', 'f', 'l', 'v'],
        ],
        ['oath', 'pea', 'eat', 'rain'],
      ],
      expected: ['eat', 'oath'],
    },
    {
      args: [
        [
          ['a', 'b'],
          ['c', 'd'],
        ],
        ['abdc', 'acdb', 'ab', 'zz'],
      ],
      expected: ['ab', 'abdc', 'acdb'],
    },
  ],
  hiddenTests: [
    { args: [[['a']], ['a', 'b']], expected: ['a'] },
    {
      args: [
        [
          ['a', 'a'],
          ['a', 'a'],
        ],
        ['aaa', 'aaaa', 'b'],
      ],
      expected: ['aaa', 'aaaa'],
    },
  ],
};
