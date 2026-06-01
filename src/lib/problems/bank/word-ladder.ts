import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-ladder',
  title: 'Word Ladder',
  difficulty: 'hard',
  tags: ['graph'],
  description: `A **transformation sequence** from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> sk\` such that:
- Every adjacent pair of words differs by a single letter.
- Every \`si\` for \`1 <= i <= k\` is in \`wordList\`. Note that \`beginWord\` does not need to be in \`wordList\`.
- \`sk == endWord\`.

Given two words, \`beginWord\` and \`endWord\`, and a dictionary \`wordList\`, return the **number of words in the shortest transformation sequence** from \`beginWord\` to \`endWord\`, or \`0\` if no such sequence exists.

**Approach:** BFS from \`beginWord\`. At each step, try replacing each character with 'a'–'z' to find neighbors present in the word set. Track visited words to avoid cycles. Return the level count when \`endWord\` is reached.`,
  constraints: [
    '1 <= beginWord.length <= 10',
    'endWord.length == beginWord.length',
    '1 <= wordList.length <= 5000',
    'wordList[i].length == beginWord.length',
    'beginWord, endWord, and wordList[i] consist of lowercase English letters',
    'beginWord != endWord',
    'All words in wordList are unique',
  ],
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
      output: '5',
      explanation: '"hit" → "hot" → "dot" → "dog" → "cog" — 5 words in the sequence.',
    },
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
      output: '0',
      explanation: '"cog" is not in the word list, so no transformation sequence exists.',
    },
  ],
  hints: [
    'Use BFS — the shortest path in an unweighted graph is found by BFS.',
    'Represent words as nodes; two words are connected if they differ by exactly one character.',
    'Instead of comparing all word pairs (O(n²)), generate all one-letter variants of the current word and check if they are in the word set (O(L×26) per step).',
  ],
  functionName: 'ladderLength',
  params: ['beginWord', 'endWord', 'wordList'],
  preamble: {},
  starterCode: {
    javascript: 'function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n  while (queue.length) {\n    const [word, len] = queue.shift();\n    for (let i = 0; i < word.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);\n        if (next === endWord) return len + 1;\n        if (wordSet.has(next) && !visited.has(next)) {\n          visited.add(next);\n          queue.push([next, len + 1]);\n        }\n      }\n    }\n  }\n  return 0;\n}\n',
    typescript: "function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n  const queue: [string, number][] = [[beginWord, 1]];\n  const visited = new Set<string>([beginWord]);\n  while (queue.length) {\n    const [word, len] = queue.shift()!;\n    for (let i = 0; i < word.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);\n        if (next === endWord) return len + 1;\n        if (wordSet.has(next) && !visited.has(next)) {\n          visited.add(next);\n          queue.push([next, len + 1]);\n        }\n      }\n    }\n  }\n  return 0;\n}",

    python: 'def ladderLength(beginWord, endWord, wordList):\n    word_set = set(wordList)\n    if endWord not in word_set:\n        return 0\n    queue = [(beginWord, 1)]\n    visited = {beginWord}\n    while queue:\n        word, length = queue.pop(0)\n        for i in range(len(word)):\n            for c in range(ord(\'a\'), ord(\'z\') + 1):\n                next_word = word[:i] + chr(c) + word[i+1:]\n                if next_word == endWord:\n                    return length + 1\n                if next_word in word_set and next_word not in visited:\n                    visited.add(next_word)\n                    queue.append((next_word, length + 1))\n    return 0\n',
  },
  visibleTests: [
    { args: ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']], expected: 5 },
    { args: ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']], expected: 0 },
    { args: ['a', 'c', ['a', 'b', 'c']], expected: 2 },
  ],
  hiddenTests: [
    { args: ['hot', 'dog', ['hot', 'dog']], expected: 0 },
    { args: ['hot', 'dot', ['hot', 'dot']], expected: 2 },
    { args: ['hit', 'hip', ['hit', 'hip']], expected: 2 },
    { args: ['abc', 'def', ['aec', 'aef', 'def']], expected: 4 },
  ],
};
