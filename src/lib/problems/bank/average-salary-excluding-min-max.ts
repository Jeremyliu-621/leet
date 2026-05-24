import type { Problem } from '../types';

export const problem: Problem = {
  id: 'average-salary-excluding-min-max',
  title: 'Average Salary Excluding the Minimum and Maximum Salary',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array of **unique** integers \`salary\` where \`salary[i]\` is the salary of the \`i\`th employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within \`10^-5\` of the actual answer will be accepted.`,
  constraints: [
    '`3 <= salary.length <= 100`',
    '`1000 <= salary[i] <= 10^6`',
    'All the integers of `salary` are **unique**.',
  ],
  examples: [
    {
      input: 'salary = [4000,3000,1000,2000]',
      output: '2500.00000',
      explanation: 'Min = 1000, max = 4000. Average of [3000, 2000] = 2500.',
    },
    {
      input: 'salary = [1000,2000,3000]',
      output: '2000.00000',
    },
  ],
  hints: [
    'Find the min and max. Sum all salaries minus the min and max. Divide by salary.length - 2.',
  ],
  functionName: 'average',
  params: ['salary'],
  starterCode: {
    javascript: `function average(salary) {

}`,
    python: `def average(salary):
    pass`,
  },
  visibleTests: [
    { args: [[4000, 3000, 1000, 2000]], expected: 2500 },
    { args: [[1000, 2000, 3000]], expected: 2000 },
  ],
  hiddenTests: [
    { args: [[48000, 59000, 100000, 12000]], expected: 53500 },
    { args: [[1000, 2000, 3000, 4000, 5000]], expected: 3000 },
    { args: [[25000, 48000, 57000]], expected: 48000 },
  ],
};
