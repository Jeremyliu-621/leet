import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-i-win',
  title: 'Can I Win',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `In the "100 game" two players take turns adding, to a running total, any integer from \`1\` to \`maxChoosableInteger\`. The player who first causes the running total to reach or exceed \`desiredTotal\` wins.

Return \`true\` if the **first player** can guarantee a win, assuming both play optimally. **No number may be reused.**

**Approach:** Bitmask DP where the state is the set of already-chosen numbers. \`memo[mask]\` = can the current player win given this set of used numbers? Try each unused number; if choosing it reaches \`desiredTotal\` or leaves the opponent in a losing state, return \`true\`.`,
  constraints: [
    '1 <= maxChoosableInteger <= 20',
    '0 <= desiredTotal <= 300',
  ],
  examples: [
    {
      input: 'maxChoosableInteger = 10, desiredTotal = 11',
      output: 'false',
      explanation: 'No matter which number the first player picks, the second player can always pick the complementary number and eventually win.',
    },
    {
      input: 'maxChoosableInteger = 10, desiredTotal = 0',
      output: 'true',
      explanation: 'The first player can win immediately (total is already ≥ 0).',
    },
    {
      input: 'maxChoosableInteger = 10, desiredTotal = 1',
      output: 'true',
      explanation: 'First player picks 1 and wins.',
    },
  ],
  hints: [
    'Early exit: if `desiredTotal <= 0`, first player wins immediately. If sum(1..maxChoosableInteger) < desiredTotal, no one can win — return false.',
    'Represent chosen numbers as a bitmask. `memo[mask]` = whether current player wins from this state.',
    'For each bit not set: if picking it reaches desiredTotal or the opponent loses, current player wins.',
    '```js\nif (desiredTotal <= 0) return true;\nconst sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;\nif (sum < desiredTotal) return false;\nconst memo = new Map();\nconst canWin = (mask, total) => {\n  if (memo.has(mask)) return memo.get(mask);\n  for (let i = 1; i <= maxChoosableInteger; i++) {\n    if (mask >> i & 1) continue;\n    if (total + i >= desiredTotal || !canWin(mask | (1 << i), total + i)) {\n      memo.set(mask, true); return true;\n    }\n  }\n  memo.set(mask, false); return false;\n};\nreturn canWin(0, 0);\n```',
  ],
  functionName: 'canIWin',
  params: ['maxChoosableInteger', 'desiredTotal'],
  starterCode: {
    javascript: `function canIWin(maxChoosableInteger, desiredTotal) {
  // return true if first player can guarantee a win

}`,
    typescript: "function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {\n  // return true if first player can guarantee a win\n\n}",

    python: `def canIWin(maxChoosableInteger: int, desiredTotal: int) -> bool:
    # return true if first player can guarantee a win
    pass
`,
  },
  visibleTests: [
    { args: [10, 11], expected: false },
    { args: [10, 0], expected: true },
    { args: [10, 1], expected: true },
  ],
  hiddenTests: [
    { args: [1, 1], expected: true },
    { args: [2, 3], expected: false },
    { args: [3, 4], expected: false },
    { args: [3, 6], expected: true },
    { args: [4, 4], expected: true },
    { args: [4, 6], expected: true },
    { args: [5, 6], expected: false },
  ],
};
