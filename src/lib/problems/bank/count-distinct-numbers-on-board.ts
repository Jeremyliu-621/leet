import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-distinct-numbers-on-board',
  title: 'Count Distinct Numbers on Board',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `You are given a positive integer \`n\`, that is initially placed on a board. Every day, for every number \`x\` currently on the board, you find all numbers \`1 <= i <= n\` such that \`x % i == 1\`. Then, you put those numbers \`i\` on the board.

Return *the number of **distinct** integers on the board after \`n\` days*.`,
  constraints: ['1 <= n <= 100'],
  examples: [
    {
      input: 'n = 5',
      output: '4',
      explanation:
        'Starting with 5: day 1 adds 2 (5%2=1) and 4 (5%4=1). Day 2 adds 3 (4%3=1). No new numbers after that. Distinct: {5,4,3,2} → 4.',
    },
    {
      input: 'n = 3',
      output: '2',
      explanation: 'Starting with 3: day 1 adds 2 (3%2=1). No further additions. Distinct: {3,2} → 2.',
    },
  ],
  hints: [
    'For any n > 1, n % (n-1) = 1, so n-1 gets added. Then (n-1) % (n-2) = 1, and so on down to 2.',
    'The board eventually contains all integers from 2 to n. The number 1 is never added because x % 1 = 0 for all x.',
    'Special case: n = 1 gives 1 (no i satisfies x % i = 1 in [1, 1]).',
  ],
  functionName: 'distinctIntegers',
  params: ['n'],
  starterCode: {
    javascript: 'function distinctIntegers(n) {\n\n}\n',
    typescript: 'function distinctIntegers(n: number): number {\n\n}\n',
    python: 'def distinctIntegers(n):\n    pass\n',
  },
  visibleTests: [
    { args: [5], expected: 4 },
    { args: [3], expected: 2 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [4], expected: 3 },
    { args: [6], expected: 5 },
    { args: [10], expected: 9 },
    { args: [100], expected: 99 },
  ],
};
