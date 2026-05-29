import type { Problem } from '../types';

export const problem: Problem = {
  id: 'thousand-separator',
  title: 'Thousand Separator',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an integer \`n\`, add a dot (\`"."\`) as the thousands separator and return it in string format.`,
  constraints: [
    '0 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 987',
      output: '"987"',
      explanation: 'Less than 1000, no separator needed.',
    },
    {
      input: 'n = 1234',
      output: '"1.234"',
      explanation: 'One separator after the first digit from the left.',
    },
    {
      input: 'n = 1000000',
      output: '"1.000.000"',
    },
  ],
  hints: [
    'Convert n to a string first.',
    'Iterate from right to left, inserting a dot every 3 characters.',
    'Or build the result by processing groups of 3 digits from the end.',
  ],
  functionName: 'thousandSeparator',
  params: ['n'],
  starterCode: {
    javascript: `function thousandSeparator(n) {

}`,
    typescript: `function thousandSeparator(n: number): string {

}`,
    python: `def thousandSeparator(n: int) -> str:
    pass`,
  },
  visibleTests: [
    { args: [987], expected: '987' },
    { args: [1234], expected: '1.234' },
    { args: [1000000], expected: '1.000.000' },
  ],
  hiddenTests: [
    { args: [0], expected: '0' },
    { args: [100], expected: '100' },
    { args: [1000], expected: '1.000' },
    { args: [123456789], expected: '123.456.789' },
    { args: [1000000000], expected: '1.000.000.000' },
    { args: [50], expected: '50' },
    { args: [1], expected: '1' },
    { args: [999999], expected: '999.999' },
  ],
};
