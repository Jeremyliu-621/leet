import type { Problem } from '../types';

export const problem: Problem = {
  id: 'parsing-a-boolean-expression',
  title: 'Parsing A Boolean Expression',
  difficulty: 'hard',
  tags: ['strings', 'stack'],
  description: `A **boolean expression** is an expression that evaluates to either \`true\` or \`false\`. It can be one of:

- \`"t"\`: Always evaluates to \`true\`.
- \`"f"\`: Always evaluates to \`false\`.
- \`"!(subExpr)"\`: Evaluates to the logical NOT of the inner expression \`subExpr\`.
- \`"&(subExpr1, subExpr2, ..., subExprn)"\`: Evaluates to the logical AND of the inner expressions, where there is at least one inner expression.
- \`"|(subExpr1, subExpr2, ..., subExprn)"\`: Evaluates to the logical OR of the inner expressions, where there is at least one inner expression.

Given a string \`expression\` that represents a **boolean expression**, return the evaluation of that expression.`,
  constraints: [
    '1 <= expression.length <= 2 * 10^4',
    'expression[i] is one of \'(\', \')\', \'&\', \'|\', \'!\', \'t\', \'f\', \',\'.',
    'expression is a valid expression that evaluates to either true or false.',
  ],
  examples: [
    {
      input: 'expression = "!(f)"',
      output: 'true',
      explanation: '!false = true.',
    },
    {
      input: 'expression = "|(f,t)"',
      output: 'true',
      explanation: 'false OR true = true.',
    },
    {
      input: 'expression = "&(t,f)"',
      output: 'false',
      explanation: 'true AND false = false.',
    },
  ],
  hints: [
    'Use recursive descent parsing: consume one character at a time to determine the expression type.',
    'Base cases: "t" → true, "f" → false.',
    'For operators, skip the opening "(", recursively parse operands separated by ",", skip the closing ")", then apply the operator.',
  ],
  functionName: 'parseBoolExpr',
  params: ['expression'],
  starterCode: {
    javascript: 'function parseBoolExpr(expression) {\n  \n}\n',
    typescript: 'function parseBoolExpr(expression: string): boolean {\n  \n}',
    python: 'def parseBoolExpr(expression):\n    pass\n',
  },
  visibleTests: [
    { args: ['!(f)'], expected: true },
    { args: ['|(f,t)'], expected: true },
    { args: ['&(t,f)'], expected: false },
  ],
  hiddenTests: [
    { args: ['!(t)'], expected: false },
    { args: ['t'], expected: true },
    { args: ['|(|(f,f),!(t),&(f,t))'], expected: false },
    { args: ['|(&(t,f),!(f))'], expected: true },
    { args: ['&(t,t,t)'], expected: true },
  ],
};
