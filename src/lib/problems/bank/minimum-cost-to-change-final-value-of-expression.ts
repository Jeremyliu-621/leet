import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-change-final-value-of-expression',
  title: 'Minimum Cost to Change the Final Value of Expression',
  difficulty: 'hard',
  tags: ['stack', 'dynamic-programming'],
  description: `You are given a valid boolean expression as a string \`expression\` consisting of the characters \`'1'\`, \`'0'\`, \`'&'\` (bitwise AND), \`'|'\` (bitwise OR), \`'('\`, and \`')'\`.

For example, \`"()1|1"\` and \`"(1)&()"\` are **not** valid while \`"1"\`, \`"(((1))|(0))"\`, and \`"1|(0&(1))"\` are valid expressions.

Return the **minimum cost** to change the **final value** of the expression.

- To change the value of an expression from \`0\` to \`1\`, or from \`1\` to \`0\`, you can do one of the following:
  - Turn any **\`'1'\`** in a valid expression into a **\`'0'\`**.
  - Turn any **\`'0'\`** in a valid expression into a **\`'1'\`**.
  - Turn any **\`'&'\`** into a **\`'|'\`** (or vice versa).

**Note:** \`'&'\` does not take precedence over \`'|'\` in the **order of calculation**. Evaluate from left to right.`,
  constraints: [
    '1 <= expression.length <= 10^5',
    'expression only contains "1", "0", "&", "|", "(", and ")"',
    'All parentheses are properly matched',
    'There are no empty parentheses (i.e., "()" is not a substring of expression)',
  ],
  examples: [
    {
      input: 'expression = "1&(0|1)"',
      output: '1',
      explanation: 'Expression evaluates to 1. Flip "1" at position 0 to "0": "0&(0|1)"=0. Cost=1.',
    },
    {
      input: 'expression = "((0&0)|(0&0))"',
      output: '2',
      explanation: 'Expression evaluates to 0. Need 2 ops to make it 1 (e.g., flip both 0s in one subexpression to 1s).',
    },
    {
      input: 'expression = "((1|0)&(1|0))"',
      output: '1',
      explanation: 'Expression evaluates to 1. Flip any "1" to "0" in one of the OR subexpressions costs 1 op.',
    },
  ],
  hints: [
    'Level 1: For each subexpression, compute (cost_to_make_0, cost_to_make_1) using DP on the expression tree.',
    'Level 2: Literals: "0"→(0,1), "1"→(1,0). For "a&b": c0=min(min(a0,b0), 1+a0+b0); c1=min(a1+b1, 1+min(a1,b1)). For "a|b": c0=min(a0+b0, 1+min(a0,b0)); c1=min(min(a1,b1), 1+a1+b1). The extra +1 accounts for flipping the operator.',
    'Level 3: Parse recursively: on "(": recurse left, read op, recurse right, close ")". If expression evaluates to 0 (cost_to_0==0), return cost_to_1; else return cost_to_0. O(n) time.',
  ],
  functionName: 'minOperationsToFlip',
  params: ['expression'],
  starterCode: {
    javascript: `function minOperationsToFlip(expression) {

}`,
    typescript: `function minOperationsToFlip(expression: string): number {

}`,
    python: `def minOperationsToFlip(expression):
    pass`,
  },
  visibleTests: [
    { args: ['1&(0|1)'], expected: 1 },
    { args: ['((0&0)|(0&0))'], expected: 2 },
    { args: ['((1|0)&(1|0))'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['0'], expected: 1 },
    { args: ['(0|1)'], expected: 1 },
    { args: ['(1&1)'], expected: 1 },
    { args: ['((0&0)&(0&0))'], expected: 3 },
  ],
};
