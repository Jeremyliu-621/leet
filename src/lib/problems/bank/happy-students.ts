import type { Problem } from '../types';

export const problem: Problem = {
  id: 'happy-students',
  title: 'Happy Students',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\` where \`nums[i]\` is the number of students the \`i\`-th student expects to be selected.

For a group of exactly \`m\` students to be **happy**, every selected student \`i\` must have \`nums[i] <= m\`, and every non-selected student \`j\` must have \`nums[j] > m\`.

Return the **number of** values of \`m\` (from \`0\` to \`n\`) for which a **happy** group exists.`,
  constraints: [
    '1 <= n <= 50',
    '0 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4]',
      output: '1',
      explanation: 'Only m=5 (select all): all nums[i] < 5. No students left out. Happy.',
    },
    {
      input: 'nums = [1,1]',
      output: '2',
      explanation: 'm=0: no one selected, both have nums[i]=1 > 0. Happy. m=2: select both, both have nums[i]=1 < 2. Happy.',
    },
  ],
  hints: [
    'Sort nums. For each m from 0 to n, the m smallest values would be selected.',
    'After sorting: m is valid if (m == 0 OR sorted[m-1] <= m) AND (m == n OR sorted[m] > m).',
    'The condition sorted[m-1] <= m ensures the m-th selected student is content with m total selected, and sorted[m] > m ensures the (m+1)-th unselected student expects more than m to be selected.',
  ],
  functionName: 'countHappyStudents',
  params: ['nums'],
  starterCode: {
    javascript: 'function countHappyStudents(nums) {\n  \n}\n',
    typescript: 'function countHappyStudents(nums: number[]): number {\n  \n}',
    python: 'def countHappyStudents(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[3, 3, 3, 3]], expected: 2 },
    { args: [[0, 0, 0, 0]], expected: 1 },
    { args: [[2]], expected: 1 },
    { args: [[0]], expected: 1 },
  ],
};
