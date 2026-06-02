import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fraction-addition-and-subtraction',
  title: 'Fraction Addition and Subtraction',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a string \`expression\` representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an **irreducible fraction**. If your final result is an integer, say \`2\`, it should be changed to the fraction form \`2/1\`.

**Example 1:**
\`\`\`
Input: expression = "-1/2+1/2"
Output: "0/1"
\`\`\`

**Example 2:**
\`\`\`
Input: expression = "-1/2+1/2+1/3"
Output: "1/3"
\`\`\`

**Example 3:**
\`\`\`
Input: expression = "1/3-1/2"
Output: "-1/6"
\`\`\``,
  examples: [
    { input: '"-1/2+1/2"', output: '"0/1"' },
    { input: '"-1/2+1/2+1/3"', output: '"1/3"' },
    { input: '"1/3-1/2"', output: '"-1/6"' },
  ],
  constraints: [
    'The input string only contains \'+\', \'-\', \'/\', and digits.',
    'Each fraction contains exactly one \'/\'.',
    '1 <= denominator <= 10',
    '-10 <= numerator <= 10',
    'The result is guaranteed to be in the range \`[-1, 1]\`.',
  ],
  hints: [
    'Parse the expression by matching fractions with a regex like /[+-]?\\d+\\/\\d+/g.',
    'Accumulate a running numerator/denominator using cross-multiplication: num = num1*den2 + num2*den1, den = den1*den2.',
    'Reduce the final fraction by dividing both parts by their GCD. Keep the sign on the numerator.',
  ],
  functionName: 'fractionAddition',
  params: ['expression'],
  starterCode: {
    javascript: `function fractionAddition(expression) {
  const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);
  const fracs = expression.match(/[+-]?\\d+\\/\\d+/g) ?? [];
  let num = 0, den = 1;
  for (const f of fracs) {
    const [n, d] = f.split('/').map(Number);
    num = num * d + n * den;
    den = den * d;
    const g = gcd(Math.abs(num), den);
    num /= g; den /= g;
  }
  return \`\${num}/\${den}\`;
}`,
    typescript: `function fractionAddition(expression: string): string {
  const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);
  const fracs = expression.match(/[+-]?\\d+\\/\\d+/g) ?? [];
  let num = 0, den = 1;
  for (const f of fracs) {
    const [n, d] = f.split('/').map(Number);
    num = num * d + n * den;
    den = den * d;
    const g = gcd(Math.abs(num), den);
    num /= g; den /= g;
  }
  return \`\${num}/\${den}\`;
}`,
    python: `def fractionAddition(expression):
    import re
    from math import gcd
    fracs = re.findall(r'[+-]?\\d+/\\d+', expression)
    num, den = 0, 1
    for f in fracs:
        n, d = map(int, f.split('/'))
        num = num * d + n * den; den *= d
        g = gcd(abs(num), den); num //= g; den //= g
    return f'{num}/{den}'`,
  },
  visibleTests: [
    { args: ['-1/2+1/2'], expected: '0/1' },
    { args: ['-1/2+1/2+1/3'], expected: '1/3' },
    { args: ['1/3-1/2'], expected: '-1/6' },
  ],
  hiddenTests: [
    { args: ['5/3+1/3'], expected: '2/1' },
    { args: ['-1/6+1/6'], expected: '0/1' },
    { args: ['1/2+1/3+1/6'], expected: '1/1' },
  ],
};
