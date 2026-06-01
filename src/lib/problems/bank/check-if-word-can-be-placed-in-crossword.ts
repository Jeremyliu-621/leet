import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-word-can-be-placed-in-crossword',
  title: 'Check if Word Can Be Placed In Crossword',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `Given an \`m x n\` \`board\` (where each cell is \`'#'\`, \`'.'\`, or a lowercase letter) and a string \`word\`, return \`true\` if \`word\` can be placed in the crossword.

\`word\` can be placed in a **maximal horizontal or vertical blank slot** (a contiguous run of non-\`'#'\` cells bounded by \`'#'\` or grid edges). The slot length must exactly equal \`word\` length, and each cell in the slot must either be \`'.'\` or match the corresponding letter of \`word\` (placed forward or backward).`,
  constraints: [
    'm == board.length',
    'n == board[i].length',
    '1 <= m * n <= 2 * 10^5',
    'board[i][j] is either \'#\', \'.\', or a lowercase English letter.',
    '1 <= word.length <= max(m, n)',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'board = [["#",".","#"],[".",".","."],[\"#\",\".\",\"#\"]], word = "abc"',
      output: 'true',
      explanation: 'Row 1 is "...", which matches "abc" (forward). Placed successfully.',
    },
    {
      input: 'board = [[".",".","."],[".",".","."],[\"#\",\"#\",\".\"]], word = "abcd"',
      output: 'false',
      explanation: 'No row or column slot has length 4.',
    },
  ],
  hints: [
    'Scan each row and each column. Extract maximal contiguous runs of non-"#" cells as slots.',
    'For each slot of the same length as word: check if word matches either forward (slot[i]==\'.\' or slot[i]==word[i]) or backward (slot[i]==\'.\' or slot[i]==word[L-1-i]).',
    'Return true as soon as any slot matches.',
  ],
  functionName: 'placeWordInCrossword',
  params: ['board', 'word'],
  starterCode: {
    javascript: 'function placeWordInCrossword(board, word) {\n  const m = board.length, n = board[0].length, L = word.length;\n  function fits(slot) {\n    if (slot.length !== L) return false;\n    let fwd = true, bwd = true;\n    for (let i = 0; i < L; i++) {\n      if (slot[i] !== "." && slot[i] !== word[i]) fwd = false;\n      if (slot[i] !== "." && slot[i] !== word[L - 1 - i]) bwd = false;\n    }\n    return fwd || bwd;\n  }\n  for (let r = 0; r < m; r++) {\n    let slot = [];\n    for (let c = 0; c <= n; c++) {\n      if (c < n && board[r][c] !== "#") { slot.push(board[r][c]); }\n      else { if (fits(slot)) return true; slot = []; }\n    }\n  }\n  for (let c = 0; c < n; c++) {\n    let slot = [];\n    for (let r = 0; r <= m; r++) {\n      if (r < m && board[r][c] !== "#") { slot.push(board[r][c]); }\n      else { if (fits(slot)) return true; slot = []; }\n    }\n  }\n  return false;\n}\n',
    typescript: 'function placeWordInCrossword(board: string[][], word: string): boolean {\n  const m = board.length, n = board[0]!.length, L = word.length;\n  function fits(slot: string[]): boolean {\n    if (slot.length !== L) return false;\n    let fwd = true, bwd = true;\n    for (let i = 0; i < L; i++) {\n      if (slot[i] !== "." && slot[i] !== word[i]) fwd = false;\n      if (slot[i] !== "." && slot[i] !== word[L - 1 - i]) bwd = false;\n    }\n    return fwd || bwd;\n  }\n  for (let r = 0; r < m; r++) {\n    let slot: string[] = [];\n    for (let c = 0; c <= n; c++) {\n      if (c < n && board[r]![c] !== "#") { slot.push(board[r]![c]!); }\n      else { if (fits(slot)) return true; slot = []; }\n    }\n  }\n  for (let c = 0; c < n; c++) {\n    let slot: string[] = [];\n    for (let r = 0; r <= m; r++) {\n      if (r < m && board[r]![c] !== "#") { slot.push(board[r]![c]!); }\n      else { if (fits(slot)) return true; slot = []; }\n    }\n  }\n  return false;\n}',
    python: 'def placeWordInCrossword(board, word):\n    m, n, L = len(board), len(board[0]), len(word)\n    def fits(slot):\n        if len(slot) != L:\n            return False\n        fwd = all(slot[i] == "." or slot[i] == word[i] for i in range(L))\n        bwd = all(slot[i] == "." or slot[i] == word[L-1-i] for i in range(L))\n        return fwd or bwd\n    for r in range(m):\n        slot = []\n        for c in range(n + 1):\n            if c < n and board[r][c] != "#":\n                slot.append(board[r][c])\n            else:\n                if fits(slot): return True\n                slot = []\n    for c in range(n):\n        slot = []\n        for r in range(m + 1):\n            if r < m and board[r][c] != "#":\n                slot.append(board[r][c])\n            else:\n                if fits(slot): return True\n                slot = []\n    return False\n',
  },
  visibleTests: [
    { args: [[['#', '.', '#'], ['.', '.', '.'], ['#', '.', '#']], 'abc'], expected: true },
    { args: [[['.', '.', '.'], ['.', '.', '.'], ['#', '#', '.']], 'abcd'], expected: false },
  ],
  hiddenTests: [
    { args: [[['#', 'a', 'b']], 'ab'], expected: true },
    { args: [[['#', 'a', 'b']], 'ba'], expected: true },
    { args: [[['#', 'a', 'c']], 'ab'], expected: false },
    { args: [[['a', '#', 'b']], 'ab'], expected: false },
    { args: [[['a', 'b', 'c']], 'ab'], expected: false },
  ],
};
