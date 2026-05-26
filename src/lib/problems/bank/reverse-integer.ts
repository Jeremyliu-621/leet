import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-integer',
  title: 'Reverse Integer',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a signed 32-bit integer \`x\`, return \`x\` with its digits reversed. If reversing \`x\` causes the value to go outside the signed 32-bit integer range \`[-2^31, 2^31 - 1]\`, return \`0\`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**`,
  examples: [
    { input: 'x = 123', output: '321' },
    { input: 'x = -123', output: '-321' },
    { input: 'x = 120', output: '21' },
  ],
  constraints: ['-2^31 <= x <= 2^31 - 1'],
  functionName: 'reverseInteger',
  params: ['x'],
  starterCode: {
    javascript: 'function reverseInteger(x) {\n  // your code here\n}\n',
    python: 'def reverseInteger(x):\n    # your code here\n    pass\n',
  },
  hints: [
    'Extract digits using % 10 and build the reversed number by multiplying by 10 and adding the digit.',
    'Check for overflow: before multiplying result by 10, check if result > (2^31 - 1) / 10.',
    'Handle the sign separately: work with the absolute value, then reapply the sign.',
  ],
  visibleTests: [
    { args: [123], expected: 321 },
    { args: [-123], expected: -321 },
    { args: [120], expected: 21 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1534236469], expected: 0 },
    { args: [-2147483648], expected: 0 },
    { args: [100], expected: 1 },
  ],
};
