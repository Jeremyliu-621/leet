import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-employees-who-met-the-target',
  title: 'Number of Employees Who Met the Target',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` employees in a company, numbered from \`0\` to \`n - 1\`. Each employee \`i\` has worked for \`hours[i]\` hours in the company.

The company requires each employee to work for **at least** \`target\` hours.

You are given a **0-indexed** array of non-negative integers \`hours\` of length \`n\` and a non-negative integer \`target\`.

Return the integer denoting the number of employees who worked at least \`target\` hours.`,
  constraints: [
    '1 <= n == hours.length <= 50',
    '0 <= hours[i], target <= 10^5',
  ],
  examples: [
    {
      input: 'hours = [0,1,2,3,4], target = 2',
      output: '3',
      explanation: 'Employees 2, 3, and 4 worked at least 2 hours.',
    },
    {
      input: 'hours = [5,1,4,2,2], target = 6',
      output: '0',
      explanation: 'No employee worked at least 6 hours.',
    },
  ],
  hints: [
    'Simply count the elements that are >= target.',
    'Count employees whose `hours[i] >= target`.',
    '`return hours.filter(h => h >= target).length;`'
  ],
  functionName: 'numberOfEmployeesWhoMetTarget',
  params: ['hours', 'target'],
  starterCode: {
    javascript: `function numberOfEmployeesWhoMetTarget(hours, target) {

}`,
    typescript: "function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {\n\n}",

    python: `def numberOfEmployeesWhoMetTarget(hours, target):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], 2], expected: 3 },
    { args: [[5, 1, 4, 2, 2], 6], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0], 0], expected: 1 },
    { args: [[10, 10, 10], 10], expected: 3 },
    { args: [[1, 2, 3], 4], expected: 0 },
    { args: [[3, 3, 3, 3], 3], expected: 4 },
  ],
};
