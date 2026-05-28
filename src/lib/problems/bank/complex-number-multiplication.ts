import type { Problem } from '../types';

export const problem: Problem = {
  id: 'complex-number-multiplication',
  title: 'Complex Number Multiplication',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `A complex number can be represented as a string on the form **"real+imaginaryi"** where:
- \`real\` is the real part and is an integer in the range \`[-100, 100]\`.
- \`imaginary\` is the imaginary part and is an integer in the range \`[-100, 100]\`.
- \`i^2 == -1\`.

Given two complex numbers \`num1\` and \`num2\` as strings, return *a string of the complex number that represents their multiplications*.

**Example 1:**
\`\`\`
Input: num1 = "1+1i", num2 = "1+1i"
Output: "0+2i"
Explanation: (1+1i) × (1+1i) = 1 + 1i + 1i + i² = 1 + 2i − 1 = 0 + 2i
\`\`\`

**Example 2:**
\`\`\`
Input: num1 = "1+-1i", num2 = "1+-1i"
Output: "0+-2i"
\`\`\``,
  examples: [
    { input: '"1+1i", "1+1i"', output: '"0+2i"' },
    { input: '"1+-1i", "1+-1i"', output: '"0+-2i"' },
  ],
  constraints: [
    'num1 and num2 are valid complex numbers.',
  ],
  hints: [
    'Parse each number into real and imaginary parts by splitting on "+" then stripping the trailing "i".',
    'Use (a+bi)(c+di) = (ac − bd) + (ad + bc)i.',
    'Return the result formatted as "real+imaginaryi".',
  ],
  functionName: 'complexNumberMultiply',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: `function complexNumberMultiply(num1, num2) {

}`,
    typescript: "function complexNumberMultiply(num1: string, num2: string): string {\n\n}",

    python: `def complexNumberMultiply(num1, num2):
    `,
  },
  visibleTests: [
    { args: ['1+1i', '1+1i'], expected: '0+2i' },
    { args: ['1+-1i', '1+-1i'], expected: '0+-2i' },
    { args: ['0+0i', '5+3i'], expected: '0+0i' },
  ],
  hiddenTests: [
    { args: ['2+3i', '4+-5i'], expected: '23+2i' },
    { args: ['-1+1i', '1+-1i'], expected: '0+2i' },
    { args: ['3+0i', '0+2i'], expected: '0+6i' },
  ],
};
