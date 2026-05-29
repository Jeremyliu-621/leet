import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-amount-paid-in-taxes',
  title: 'Calculate Amount Paid in Taxes',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** 2D integer array \`brackets\` where \`brackets[i] = [upperi, percenti]\` means that the \`i\`-th tax bracket has an upper bound of \`upperi\` and is taxed at a rate of \`percenti\`. The brackets are **sorted** by upper bound (i.e., \`upperi-1 < upperi\` for all valid \`i\`).

Tax is calculated as follows:
- The first \`brackets[0][0]\` dollars earned are taxed at \`brackets[0][1]%\`.
- The next \`brackets[1][0] - brackets[0][0]\` dollars are taxed at \`brackets[1][1]%\`.
- And so on.

Given an integer \`income\` representing the amount earned, return the amount of tax owed. Answers within \`10^-5\` of the actual answer will be accepted.`,
  constraints: [
    '`1 <= brackets.length <= 100`',
    '`1 <= upperi <= 1000`',
    '`0 <= percenti <= 100`',
    '`0 <= income <= 1000`',
    '`upperi\` is sorted in ascending order.',
    'All values of `upperi` are unique.',
    'The upper bound of the last tax bracket is greater than or equal to `income`.',
  ],
  examples: [
    {
      input: 'brackets = [[3,50],[7,10],[12,25]], income = 10',
      output: '2.65',
      explanation: 'First 3: taxed at 50% = 1.5. Next 4 (3 to 7): taxed at 10% = 0.4. Last 3 (7 to 10): taxed at 25% = 0.75. Total = 2.65.',
    },
    {
      input: 'brackets = [[1,0],[4,25],[5,50]], income = 2',
      output: '0.25',
      explanation: 'First 1: taxed at 0% = 0. Next 1 (1 to 2): taxed at 25% = 0.25. Total = 0.25.',
    },
  ],
  hints: [
    'Iterate through the brackets. For each bracket, compute the amount of income that falls in that bracket and multiply by the tax rate.',
    'Keep track of the previous upper bound. Income in bracket i spans from `prev` to `min(income, upper_i)`.',
    '```js\nfunction calculateTax(brackets, income) {\n  let tax = 0, prev = 0;\n  for (const [upper, percent] of brackets) {\n    if (income <= prev) break;\n    const taxable = Math.min(income, upper) - prev;\n    tax += taxable * percent / 100;\n    prev = upper;\n  }\n  return tax;\n}\n```',
  ],
  functionName: 'calculateTax',
  params: ['brackets', 'income'],
  starterCode: {
    javascript: `function calculateTax(brackets, income) {

}`,
    typescript: `function calculateTax(brackets: number[][], income: number): number {

}`,
    python: `def calculateTax(brackets, income):
    pass`,
  },
  visibleTests: [
    { args: [[[3, 50], [7, 10], [12, 25]], 10], expected: 2.65 },
    { args: [[[1, 0], [4, 25], [5, 50]], 2], expected: 0.25 },
  ],
  hiddenTests: [
    { args: [[[3, 50], [7, 10], [12, 25]], 0], expected: 0 },
    { args: [[[2, 50], [4, 25], [6, 10]], 5], expected: 1.6 },
    { args: [[[2, 50], [4, 25], [6, 10]], 6], expected: 1.7 },
  ],
};
