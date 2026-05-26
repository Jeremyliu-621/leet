import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-common-factors',
  title: 'Number of Common Factors',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two positive integers \`a\` and \`b\`, return the number of **common factors** of \`a\` and \`b\`.

An integer \`x\` is a common factor of \`a\` and \`b\` if \`x\` divides both \`a\` and \`b\`.`,
  constraints: [
    '1 <= a, b <= 1000',
  ],
  examples: [
    {
      input: 'a = 12, b = 6',
      output: '4',
      explanation: 'Common factors of 12 and 6 are 1, 2, 3, 6. There are 4 common factors.',
    },
    {
      input: 'a = 25, b = 30',
      output: '2',
      explanation: 'Common factors of 25 and 30 are 1 and 5. There are 2 common factors.',
    },
  ],
  hints: [
    'Iterate from 1 to min(a, b). Count each i where a % i == 0 and b % i == 0.',
    'Alternatively, compute GCD(a, b) and count divisors of the GCD.',
    `\`\`\`js
function commonFactors(a, b) {
  function gcd(x,y){return y?gcd(y,x%y):x;}
  const g=gcd(a,b);
  let c=0;
  for(let i=1;i<=g;i++) if(g%i===0)c++;
  return c;
}\`\`\``,
  ],
  functionName: 'commonFactors',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function commonFactors(a, b) {

}`,
    python: `def commonFactors(a, b):
    pass`,
  },
  visibleTests: [
    { args: [12, 6], expected: 4 },
    { args: [25, 30], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [12, 12], expected: 6 },
    { args: [2, 3], expected: 1 },
    { args: [6, 10], expected: 2 },
  ],
};
