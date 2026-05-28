import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element-iii',
  title: 'Next Greater Element III',
  difficulty: 'medium',
  tags: ['math', 'two-pointers'],
  description: `Given a positive integer \`n\`, find the **smallest integer** which has exactly the same digits existing in the integer \`n\` and is **greater in value** than \`n\`. If no such positive integer exists, return \`-1\`.

**Note:** The returned integer should fit in a 32-bit integer, if there is a valid answer but it does not fit in a 32-bit integer, return \`-1\`.`,
  constraints: ['1 <= n <= 2^31 - 1'],
  examples: [
    { input: 'n = 12', output: '21' },
    { input: 'n = 21', output: '-1' },
  ],
  hints: [
    'This is exactly the "next permutation" algorithm applied to the digits of n.',
    'Step 1: Find the rightmost digit that is smaller than its right neighbor (scan from right). Call its index i.',
    'Step 2: Find the smallest digit to the right of i that is greater than digits[i]. Swap them.',
    'Step 3: Reverse the suffix after index i to get the smallest permutation.',
    'Check the result fits in a 32-bit integer (≤ 2^31 - 1).',
  ],
  functionName: 'nextGreaterElementIII',
  params: ['n'],
  starterCode: {
    javascript: 'function nextGreaterElementIII(n) {\n\n}\n',
    python: 'def nextGreaterElementIII(n):\n    pass\n',
  },
  visibleTests: [
    { args: [12], expected: 21 },
    { args: [21], expected: -1 },
  ],
  hiddenTests: [
    { args: [1234], expected: 1243 },
    { args: [4321], expected: -1 },
    { args: [1999999999], expected: -1 },
    { args: [230241], expected: 230412 },
    { args: [531], expected: -1 },
  ],
};
