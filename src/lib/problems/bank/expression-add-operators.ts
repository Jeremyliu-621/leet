import type { Problem } from '../types';

export const problem: Problem = {
  id: 'expression-add-operators',
  title: 'Expression Add Operators',
  difficulty: 'hard',
  tags: ['strings', 'backtracking'],
  description: `Given a string \`num\` that contains only digits and an integer \`target\`, return **all possibilities** to insert the binary operators \`'+'\`, \`'-'\`, or \`'*'\` between the digits of \`num\` so that the resultant expression evaluates to the \`target\` value.

Note that operands in the returned expressions **should not** contain leading zeros.`,
  constraints: [
    '`1 <= num.length <= 10`',
    '`num` consists of only digits',
    '`-2^31 <= target <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'num = "123", target = 6',
      output: '["1*2*3","1+2+3"]',
      explanation: 'Both "1*2*3" and "1+2+3" evaluate to 6.',
    },
    {
      input: 'num = "232", target = 8',
      output: '["2*3+2","2+3*2"]',
      explanation: 'Both "2*3+2" and "2+3*2" evaluate to 8.',
    },
    {
      input: 'num = "3456237490", target = 9191',
      output: '[]',
    },
  ],
  hints: [
    'Use backtracking. Track the current expression string, the cumulative value so far, and the "last multiplied" operand to handle multiplication precedence correctly.',
    'When you encounter a `*`, the new value is `(current - lastMul) + lastMul * cur` — subtracting the last multiplied term and re-adding it multiplied.',
    'Skip multi-digit numbers with a leading zero (`num[start] === "0"` means only the single digit `0` is valid for this position).',
  ],
  functionName: 'addOperators',
  params: ['num', 'target'],
  starterCode: {
    javascript: `function addOperators(num, target) {

}`,
    typescript: "function addOperators(num: string, target: number): string[] {\n\n}",

    python: `def addOperators(num, target):
    pass`,
  },
  visibleTests: [
    { args: ['123', 6], expected: ['1+2+3', '1*2*3'] },
    { args: ['232', 8], expected: ['2+3*2', '2*3+2'] },
    { args: ['3456237490', 9191], expected: [] },
  ],
  hiddenTests: [
    { args: ['105', 5], expected: ['1*0+5', '10-5'] },
    { args: ['00', 0], expected: ['0+0', '0-0', '0*0'] },
    { args: ['2147483647', 2147483647], expected: ['2147483647'] },
  ],
};
