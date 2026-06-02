import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-integer',
  title: 'Reverse Digits of an Integer',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given a signed 32-bit integer \`x\`, **reverse its digits**.

If the reversed integer overflows the 32-bit signed integer range **[-2^31, 2^31 - 1]** (i.e., [-2147483648, 2147483647]), return \`0\`.

**Notes:**
- The sign is preserved: negative numbers stay negative.
- Leading zeros in the reversed number are dropped (e.g., \`120\` → \`21\`).
- Do **not** use 64-bit integers; perform the overflow check manually.`,
  constraints: [
    '-2^31 <= x <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'x = 123',
      output: '321',
      explanation: 'Digits 1-2-3 reversed are 3-2-1.',
    },
    {
      input: 'x = -123',
      output: '-321',
      explanation: 'Negative sign is preserved; digits reversed give -321.',
    },
    {
      input: 'x = 120',
      output: '21',
      explanation: 'Leading zero in reversed result is dropped: 021 → 21.',
    },
  ],
  hints: [
    'Convert the absolute value of x to a string, reverse the characters, then convert back to an integer. Apply the original sign afterward.',
    'After reversing, check if the result fits in the 32-bit signed integer range [-2147483648, 2147483647]. If not, return 0.',
    '```js\nconst sign = x < 0 ? -1 : 1;\nconst abs = Math.abs(x);\nconst reversed = parseInt(String(abs).split(\'\').reverse().join(\'\'), 10) * sign;\nconst MAX = 2 ** 31 - 1;\nconst MIN = -(2 ** 31);\nreturn reversed > MAX || reversed < MIN ? 0 : reversed;\n```',
  ],
  functionName: 'reverseInteger',
  params: ['x'],
  starterCode: {
    javascript: `function reverseInteger(x) {
  const sign = x < 0 ? -1 : 1;
  const reversed = parseInt(String(Math.abs(x)).split('').reverse().join(''), 10) * sign;
  const MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
  return reversed > MAX || reversed < MIN ? 0 : reversed;
}`,
    typescript: `function reverseInteger(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const reversed = parseInt(String(Math.abs(x)).split('').reverse().join(''), 10) * sign;
  const MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
  return reversed > MAX || reversed < MIN ? 0 : reversed;
}`,
    python: `def reverseInteger(x):
    if hasattr(x, 'to_py'): x = x.to_py()
    x = int(x)
    sign = -1 if x < 0 else 1
    rev = int(str(abs(x))[::-1]) * sign
    if rev > 2**31-1 or rev < -(2**31): return 0
    return rev`,
  },
  visibleTests: [
    { args: [123], expected: 321 },
    { args: [-123], expected: -321 },
    { args: [120], expected: 21 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [-1], expected: -1 },
    { args: [1534236469], expected: 0 },
    { args: [100], expected: 1 },
    { args: [-120], expected: -21 },
    { args: [1000000003], expected: 0 },
  ],
};
