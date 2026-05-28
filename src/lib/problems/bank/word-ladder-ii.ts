import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-ladder-ii',
  title: 'Word Ladder II',
  difficulty: 'hard',
  tags: ['graph', 'backtracking'],
  description: `A **transformation sequence** from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> sk\` such that:
- Every adjacent pair of words differs by a single letter.
- Every \`si\` for \`1 <= i <= k\` is in \`wordList\`. \`beginWord\` does not need to be in \`wordList\`.
- \`sk == endWord\`.

Given two words, \`beginWord\` and \`endWord\`, and a dictionary \`wordList\`, return **all shortest transformation sequences** from \`beginWord\` to \`endWord\`, or an empty list if no such sequence exists. Each sequence should be returned as a list of words.`,
  constraints: [
    '1 <= beginWord.length <= 5',
    'endWord.length == beginWord.length',
    '1 <= wordList.length <= 500',
    'wordList[i].length == beginWord.length',
    'All words consist of lowercase English letters',
    'beginWord != endWord',
    'All words in wordList are unique',
  ],
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
      output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]',
      explanation: 'There are 2 shortest sequences of length 5.',
    },
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
      output: '[]',
      explanation: '"cog" is not in the word list, so no transformation sequence exists.',
    },
  ],
  hints: [
    'Use BFS to build a **level graph**: track all words reachable at each BFS level, recording which word(s) can be the parent of each word in the shortest path. Never revisit a word at a level already processed.',
    'After BFS completes (or finds `endWord`), use **backtracking/DFS** from `endWord` back to `beginWord` using the parent map to reconstruct all shortest paths.',
    '```js\nfunction findLadders(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return [];\n  const parents = new Map(); // word -> Set of parents\n  let curr = new Set([beginWord]);\n  let found = false;\n  while (curr.size && !found) {\n    const next = new Map();\n    for (const word of curr) wordSet.delete(word);\n    for (const word of curr) {\n      for each one-letter neighbor neigh in wordSet:\n        if (!parents.has(neigh)) parents.set(neigh, new Set());\n        parents.get(neigh).add(word);\n        next.set(neigh, true);\n        if (neigh === endWord) found = true;\n    }\n    curr = new Set(next.keys());\n  }\n  // DFS backtrack from endWord\n}\n```',
  ],
  functionName: 'findLadders',
  params: ['beginWord', 'endWord', 'wordList'],
  starterCode: {
    javascript: 'function findLadders(beginWord, endWord, wordList) {\n  \n}\n',
    typescript: "function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {\n  \n}",

    python: 'def findLadders(beginWord, endWord, wordList):\n    pass\n',
  },
  visibleTests: [
    {
      args: ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
      expected: [
        ['hit', 'hot', 'dot', 'dog', 'cog'],
        ['hit', 'hot', 'lot', 'log', 'cog'],
      ],
    },
    {
      args: ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
      expected: [],
    },
    {
      args: ['hot', 'dog', ['hot', 'cog', 'dog', 'tot', 'hog', 'hop', 'pot', 'dot']],
      expected: [
        ['hot', 'dot', 'dog'],
        ['hot', 'hog', 'dog'],
      ],
    },
  ],
  hiddenTests: [
    {
      args: ['red', 'tax', ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee']],
      expected: [
        ['red', 'rex', 'tex', 'tax'],
        ['red', 'ted', 'tad', 'tax'],
        ['red', 'ted', 'tex', 'tax'],
      ],
    },
    {
      args: ['a', 'c', ['a', 'b', 'c']],
      expected: [['a', 'c']],
    },
    {
      args: ['ab', 'cd', ['ac', 'bc', 'bd', 'cd']],
      expected: [['ab', 'ac', 'bc', 'bd', 'cd']],
    },
    {
      args: ['abc', 'def', ['aec', 'aef', 'def']],
      expected: [['abc', 'aec', 'aef', 'def']],
    },
  ],
};
