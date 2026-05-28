import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fraction-to-recurring-decimal',
  title: 'Fraction to Recurring Decimal',
  difficulty: 'hard',
  tags: ['math', 'hash-map'],
  description: `Given two integers \`numerator\` and \`denominator\`, return the fraction as a string representation. If the decimal part is repeating, enclose the repeating part in parentheses.

**Examples:**
- \`1/2\` → \`"0.5"\`
- \`2/3\` → \`"0.(6)"\`
- \`1/6\` → \`"0.1(6)"\`

If the answer is negative, the minus sign comes before the result.`,
  constraints: [
    '-2^31 <= numerator, denominator <= 2^31 - 1',
    'denominator != 0',
  ],
  examples: [
    {
      input: 'numerator = 1, denominator = 2',
      output: '"0.5"',
      explanation: '1/2 = 0.5, no repeating part.',
    },
    {
      input: 'numerator = 2, denominator = 3',
      output: '"0.(6)"',
      explanation: '2/3 = 0.666..., the digit 6 repeats.',
    },
    {
      input: 'numerator = 4, denominator = 333',
      output: '"0.(012)"',
      explanation: '4/333 = 0.012012012..., the block "012" repeats.',
    },
  ],
  hints: [
    'Split into three parts: handle the sign, compute the integer part (Math.floor(abs/denom)), then do long division for the fractional part.',
    'For the repeating fractional part, keep a Map from remainder → position in the decimal string. When you see a remainder you\'ve seen before, insert \'(\' at that saved position and append \')\'.',
    'Long division loop: multiply remainder by 10, quotient digit = Math.floor(rem/denom), new rem = rem%denom. If rem===0 stop. If rem in map, insert \'(\' and close with \')\'. Otherwise record map.set(rem, pos) and continue.',
  ],
  functionName: 'fractionToDecimal',
  params: ['numerator', 'denominator'],
  starterCode: {
    javascript: 'function fractionToDecimal(numerator, denominator) {\n  \n}',
    typescript: "function fractionToDecimal(numerator: number, denominator: number): string {\n  \n}",

    python: 'def fractionToDecimal(numerator: int, denominator: int) -> str:\n    pass',
  },
  visibleTests: [
    { args: [1, 2], expected: '0.5' },
    { args: [2, 1], expected: '2' },
    { args: [2, 3], expected: '0.(6)' },
    { args: [4, 333], expected: '0.(012)' },
  ],
  hiddenTests: [
    { args: [1, 6], expected: '0.1(6)' },
    { args: [-1, 2], expected: '-0.5' },
    { args: [0, 5], expected: '0' },
  ],
};
