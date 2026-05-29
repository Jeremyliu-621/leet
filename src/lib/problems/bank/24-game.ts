import type { Problem } from '../types';

export const problem: Problem = {
  id: '24-game',
  title: '24 Game',
  difficulty: 'hard',
  tags: ['backtracking', 'math'],
  description: `You are given an integer array \`cards\` of length 4. You have 4 cards, each containing a number in the range \`[1, 9]\`. You should use the following mathematical operations to get the value \`24\`:
- Addition \`+\`
- Subtraction \`-\`
- Multiplication \`*\`
- Division \`/\`

You may use each card **exactly once** and you may use any parentheses arrangement. Integer division is **floating-point** division (e.g. \`4 / (1 - 3/4) = 16\`, which equals 24). Return \`true\` if you can get \`24\`, otherwise return \`false\`.`,
  constraints: [
    '`cards.length == 4`',
    '`1 <= cards[i] <= 9`',
  ],
  examples: [
    {
      input: 'cards = [4,1,8,7]',
      output: 'true',
      explanation: '(8 - 4) * (7 - 1) = 4 * 6 = 24.',
    },
    {
      input: 'cards = [1,2,1,2]',
      output: 'false',
      explanation: 'No arrangement of 1,2,1,2 with +,-,*,/ gives 24.',
    },
    {
      input: 'cards = [3,3,8,8]',
      output: 'true',
      explanation: '8 / (3 - 8/3) = 8 / (1/3) = 24.',
    },
  ],
  hints: [
    'Try all permutations of the 4 numbers and all combinations of 3 operators. There are 4! = 24 permutations and 4^3 = 64 operator triples, and 5 parenthesisation patterns — manageable by brute force.',
    'More elegantly: use recursive backtracking on the list of remaining numbers. Pick any two numbers, apply all 4 operations (and the reverse for non-commutative ops), replace the pair with the result, and recurse on the 3-element list. Base case: 1 number remains and equals 24.',
    '```js\nfunction judgePoint24(cards) {\n  const EPS = 1e-6;\n  function solve(nums) {\n    if (nums.length === 1) return Math.abs(nums[0] - 24) < EPS;\n    for (let i = 0; i < nums.length; i++) {\n      for (let j = 0; j < nums.length; j++) {\n        if (i === j) continue;\n        const rest = nums.filter((_, k) => k !== i && k !== j);\n        const a = nums[i], b = nums[j];\n        const candidates = [a+b, a-b, a*b];\n        if (Math.abs(b) > EPS) candidates.push(a/b);\n        for (const c of candidates) {\n          if (solve([...rest, c])) return true;\n        }\n      }\n    }\n    return false;\n  }\n  return solve(cards.map(Number));\n}\n```',
  ],
  functionName: 'judgePoint24',
  params: ['cards'],
  starterCode: {
    javascript: `function judgePoint24(cards) {

}`,
    typescript: `function judgePoint24(cards: number[]): boolean {

}`,
    python: `def judgePoint24(cards: list[int]) -> bool:
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 8, 7]], expected: true },
    { args: [[1, 2, 1, 2]], expected: false },
    { args: [[3, 3, 8, 8]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: false },
    { args: [[2, 4, 6, 8]], expected: true },
    { args: [[1, 9, 1, 2]], expected: true },
    { args: [[1, 1, 2, 2]], expected: false },
    { args: [[5, 5, 5, 1]], expected: true },
    { args: [[1, 3, 4, 6]], expected: true },
    { args: [[1, 5, 8, 2]], expected: true },
    { args: [[3, 9, 7, 7]], expected: true },
  ],
};
