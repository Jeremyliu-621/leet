import type { Problem } from '../types';

export const problem: Problem = {
  id: 'average-salary-excluding-the-minimum-and-maximum-salary',
  title: 'Average Salary Excluding the Minimum and Maximum Salary',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array of **unique** integers \`salary\` where \`salary[i]\` is the salary of the \`i\`th employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within \`10^-5\` of the actual answer will be accepted.`,
  constraints: [
    '`3 <= salary.length <= 100`',
    '`1000 <= salary[i] <= 10^6`',
    'All integers in \`salary\` are **unique**.',
  ],
  examples: [
    {
      input: 'salary = [4000,3000,1000,2000]',
      output: '2500.00000',
      explanation: 'Min=1000, max=4000. Average of 3000 and 2000 = 2500.0.',
    },
    {
      input: 'salary = [1000,2000,3000]',
      output: '2000.00000',
      explanation: 'Min=1000, max=3000. Only 2000 remains. Average = 2000.0.',
    },
  ],
  hints: [
    'Find the minimum and maximum values, then sum all remaining elements.',
    'Alternatively, sort and slice off the first and last elements, then compute the average.',
    'The answer is `(sum - min - max) / (salary.length - 2)`.',
  ],
  functionName: 'average',
  params: ['salary'],
  starterCode: {
    javascript: `function average(salary) {
  const mn = Math.min(...salary), mx = Math.max(...salary);
  return (salary.reduce((s, v) => s + v, 0) - mn - mx) / (salary.length - 2);
}`,
    typescript: `function average(salary: number[]): number {
  const mn = Math.min(...salary), mx = Math.max(...salary);
  return (salary.reduce((s, v) => s + v, 0) - mn - mx) / (salary.length - 2);
}`,
    python: `def average(salary):
    salary = list(salary.to_py()) if hasattr(salary, 'to_py') else list(salary)
    return (sum(salary) - min(salary) - max(salary)) / (len(salary) - 2)`,
  },
  visibleTests: [
    { args: [[4000, 3000, 1000, 2000]], expected: 2500.0 },
    { args: [[1000, 2000, 3000]], expected: 2000.0 },
  ],
  hiddenTests: [
    { args: [[6000, 5000, 4000, 3000, 2000, 1000]], expected: 3500.0 },
    { args: [[8000, 9000, 2000, 3000, 6000, 1000]], expected: 4750.0 },
    { args: [[48000, 59000, 100000, 1000]], expected: 53500.0 },
    { args: [[1000, 1001, 1002]], expected: 1001.0 },
    { args: [[1000, 2000, 3000, 4000, 5000]], expected: 3000.0 },
  ],
};
