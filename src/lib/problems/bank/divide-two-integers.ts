import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-two-integers',
  title: 'Divide Two Integers',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given two integers \`dividend\` and \`divisor\`, divide two integers **without** using multiplication, division, or mod operator.

The integer division should truncate toward zero, which means losing its fractional part.

Return the **quotient** after dividing \`dividend\` by \`divisor\`.

**Note:** Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: \`[−2^31, 2^31 − 1]\`. If the quotient exceeds the range, return \`2^31 − 1\`.

**Approach:** Handle overflow edge case (MIN_INT / −1). Use bit-shifting: find the largest power-of-2 multiple of |divisor| ≤ |dividend|, subtract it, and accumulate the quotient.`,
  constraints: [
    '-2^31 <= dividend, divisor <= 2^31 - 1',
    'divisor != 0',
  ],
  examples: [
    {
      input: 'dividend = 10, divisor = 3',
      output: '3',
      explanation: '10 / 3 = 3.333... truncated to 3.',
    },
    {
      input: 'dividend = 7, divisor = -2',
      output: '-3',
      explanation: '7 / -2 = -3.5 truncated to -3.',
    },
  ],
  hints: [
    'Handle the overflow edge case: -2^31 / -1 would give 2^31 which overflows — return 2^31 - 1.',
    'Use bit-shifting: double the divisor until it exceeds dividend, then subtract and accumulate.',
    '```js\nfunction divide(dividend, divisor) {\n  if (dividend === -2147483648 && divisor === -1) return 2147483647;\n  const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;\n  let a = BigInt(Math.abs(dividend)), b = BigInt(Math.abs(divisor));\n  let result = 0n;\n  while (a >= b) {\n    let temp = b, mul = 1n;\n    while (a >= (temp << 1n)) { temp <<= 1n; mul <<= 1n; }\n    a -= temp; result += mul;\n  }\n  return Number(BigInt(sign) * result);\n}\n```',
  ],
  functionName: 'divide',
  params: ['dividend', 'divisor'],
  starterCode: {
    javascript: `function divide(dividend, divisor) {
  // return quotient of dividend / divisor without using * / or %

}`,
    python: `def divide(dividend: int, divisor: int) -> int:
    # return quotient of dividend / divisor without using * / or %
    pass
`,
  },
  visibleTests: [
    { args: [10, 3], expected: 3 },
    { args: [7, -2], expected: -3 },
  ],
  hiddenTests: [
    { args: [-2147483648, -1], expected: 2147483647 },
    { args: [1, 1], expected: 1 },
    { args: [-1, 1], expected: -1 },
    { args: [0, 1], expected: 0 },
    { args: [100, 10], expected: 10 },
    { args: [-100, -10], expected: 10 },
    { args: [2147483647, 1], expected: 2147483647 },
  ],
};
