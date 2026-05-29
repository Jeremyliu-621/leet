import type { Problem } from '../types';

export const problem: Problem = {
  id: 'neighboring-bitwise-xor',
  title: 'Neighboring Bitwise XOR',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `A **0-indexed** array \`derived\` with length \`n\` is derived by computing the **bitwise XOR** of adjacent values in a **binary array** \`original\` of length \`n\`.

Specifically, for each index \`i\` in the range \`[0, n - 1]\`:
- If \`i = n - 1\`, then \`derived[i] = original[i] XOR original[0]\`.
- Otherwise, \`derived[i] = original[i] XOR original[i + 1]\`.

Given an array \`derived\`, your task is to determine whether a **valid binary array** \`original\` exists that could have formed \`derived\`. Return \`true\` if such an array exists, or \`false\` otherwise.

A binary array contains only **0s** and **1s**.`,
  constraints: [
    'n == derived.length',
    '1 <= n <= 10^5',
    'The values in derived are either 0 or 1',
  ],
  examples: [
    {
      input: 'derived = [1,1,0]',
      output: 'true',
      explanation:
        'A valid original is [0,1,0]: 0 XOR 1=1, 1 XOR 0=1, 0 XOR 0=0. ✓',
    },
    {
      input: 'derived = [1,1]',
      output: 'true',
      explanation: 'Original [0,1]: 0 XOR 1=1, 1 XOR 0=1. ✓',
    },
    {
      input: 'derived = [1,0]',
      output: 'false',
      explanation:
        'No binary array can produce derived=[1,0]. If original[0]=0: original[1]=0 XOR 1=1, then derived[1] = 1 XOR 0 = 1 ≠ 0. If original[0]=1: original[1]=1 XOR 1=0, then derived[1] = 0 XOR 1 = 1 ≠ 0.',
    },
  ],
  hints: [
    'If you fix original[0] = 0, you can reconstruct the entire original array using original[i+1] = original[i] XOR derived[i].',
    'Check if the reconstructed array is valid by verifying derived[n-1] = original[n-1] XOR original[0].',
    'Also try original[0] = 1. The answer is true if either choice yields a consistent array.',
    'Shortcut: XOR of all elements in derived must equal 0 for a valid original to exist (since each bit appears exactly twice in the XOR sum).',
  ],
  functionName: 'doesValidArrayExist',
  params: ['derived'],
  starterCode: {
    javascript: 'function doesValidArrayExist(derived) {\n  \n}\n',
    typescript: "function doesValidArrayExist(derived: number[]): boolean {\n  \n}",

    python: 'def doesValidArrayExist(derived):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0]], expected: true },
    { args: [[1, 1]], expected: true },
    { args: [[1, 0]], expected: false },
  ],
  hiddenTests: [
    { args: [[0]], expected: true },
    { args: [[1]], expected: false },
    { args: [[0, 0]], expected: true },
    { args: [[1, 0, 1, 0]], expected: true },
    { args: [[1, 1, 1]], expected: false },
  ],
};
