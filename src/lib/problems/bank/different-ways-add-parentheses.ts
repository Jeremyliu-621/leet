import type { Problem } from '../types';

const JS_PREAMBLE = `
function diffWaysToComputeRunner(expr) {
  return diffWaysToCompute(expr).sort((a, b) => a - b);
}
`.trim();

const PY_PREAMBLE = `
def diffWaysToComputeRunner(expr):
    return sorted(diffWaysToCompute(expr))
`.trim();

export const problem: Problem = {
  id: 'different-ways-add-parentheses',
  title: 'Different Ways to Add Parentheses',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'backtracking'],
  description: `Given a string \`expression\` of numbers and operators, return *all possible results* from computing all the different possible ways to group numbers and operators. You may return the answer in **any order**.

The test expression only contains the digits \`0-9\` and the operators \`'+'\`, \`'-'\`, and \`'*'\`.

> **Note:** The \`diffWaysToComputeRunner\` wrapper sorts results for deterministic output. Implement \`diffWaysToCompute(expression)\`.`,
  constraints: [
    '`1 <= expression.length <= 20`',
    '`expression` consists of digits and the operators \`+\`, \`-\`, and \`*\`.',
    'All the integer values in the input expression are in the range \`[0, 99]\`.',
  ],
  examples: [
    {
      input: 'expression = "2-1-1"',
      output: '[0,2]',
      explanation: '((2-1)-1)=0; (2-(1-1))=2.',
    },
    {
      input: 'expression = "2*3-4*5"',
      output: '[-34,-14,-10,-10,10]',
      explanation: 'Five different ways to place parentheses yield these results.',
    },
  ],
  hints: [
    'Divide and conquer: for each operator, compute all results for the left side and right side independently, then combine.',
    'Split the expression at each operator. Recursively compute all results for left and right sub-expressions. Combine every left result with every right result using the operator.',
    `\`\`\`js
const res = [];
for (let i = 0; i < expr.length; i++) {
  if ('+-*'.includes(expr[i])) {
    const L = diffWays(expr.slice(0, i));
    const R = diffWays(expr.slice(i+1));
    for (const l of L) for (const r of R)
      res.push(expr[i]==='+'?l+r : expr[i]==='-'?l-r : l*r);
  }
}
return res.length ? res : [+expr];\`\`\``
  ],
  functionName: 'diffWaysToComputeRunner',
  params: ['expression'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\nfunction diffWaysToCompute(expression) {\n  \n}\n`,
    typescript: "function diffWaysToComputeRunner(expression: string): number[] {\n  return diffWaysToCompute(expr).sort((a, b) => a - b);\n}\nfunction diffWaysToCompute(expression) {\n  \n}",

    python: `${PY_PREAMBLE}\ndef diffWaysToCompute(expression):\n    pass\n`,
  },
  visibleTests: [
    { args: ['2-1-1'], expected: [0, 2] },
    { args: ['2*3-4*5'], expected: [-34, -14, -10, -10, 10] },
    { args: ['1'], expected: [1] },
  ],
  hiddenTests: [
    { args: ['1+2'], expected: [3] },
    { args: ['1+2+3'], expected: [6, 6] },
    { args: ['2*3'], expected: [6] },
    { args: ['3-2-1'], expected: [0, 2] },
  ],
};
