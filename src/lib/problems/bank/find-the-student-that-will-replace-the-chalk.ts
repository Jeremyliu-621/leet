import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-student-that-will-replace-the-chalk',
  title: 'Find the Student that Will Replace the Chalk',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `There are \`n\` students in a class numbered \`0\` to \`n-1\`. The teacher goes through students in order starting from index \`0\`. Each student \`i\` uses \`chalk[i]\` pieces of chalk. Once all students have gone, a new round starts. If student \`i\` does not have enough chalk, they must replace it.

Given integer array \`chalk\` and integer \`k\` (initial chalk count), return the **index** of the student that will replace the chalk.`,
  constraints: [
    'chalk.length == n',
    '1 <= n <= 10^5',
    '1 <= chalk[i] <= 10^5',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'chalk = [5,1,5], k = 22',
      output: '0',
      explanation: 'Total per round = 11. 22 % 11 = 0. Student 0 needs 5 > 0, so student 0 replaces.',
    },
    {
      input: 'chalk = [3,4,1,2], k = 25',
      output: '1',
      explanation: 'Total per round = 10. 25 % 10 = 5. Student 0 uses 3 (5-3=2), student 1 needs 4 > 2.',
    },
  ],
  hints: [
    'After complete rounds, only `k % sum(chalk)` chalk remains.',
    'Then walk through the array and find the first student who needs more than what\'s left.',
  ],
  starterCode: {
    javascript: `function chalkReplacer(chalk, k) {
  // chalk: number[], k: integer
  // Return index of student who replaces chalk
}`,
    python: `def chalkReplacer(chalk: list[int], k: int) -> int:
    # Your code here
    pass`,
  },
  functionName: 'chalkReplacer',
  params: ['chalk', 'k'],
  visibleTests: [
    { args: [[5, 1, 5], 22], expected: 0 },
    { args: [[3, 4, 1, 2], 25], expected: 1 },
    { args: [[1, 2, 3], 6], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1000000], expected: 0 },
    { args: [[1, 1], 3], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 1 },
    { args: [[1, 2, 3], 2], expected: 1 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1, 2, 3], 5], expected: 2 },
    { args: [[5, 1, 5], 11], expected: 0 },
    { args: [[5, 1, 5], 12], expected: 0 },
  ],
};
