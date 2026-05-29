import type { Problem } from '../types';

export const problem: Problem = {
  id: 'build-array-with-stack-operations',
  title: 'Build an Array With Stack Operations',
  difficulty: 'easy',
  tags: ['arrays', 'stack', 'simulation'],
  description: `You are given an integer array \`target\` and an integer \`n\`.

You have an empty stack with the two following operations:

- **"Push"**: pushes an integer onto the top of the stack.
- **"Pop"**: removes the integer on the top of the stack.

You also have a stream of integers in the range \`[1, n]\`.

Use the two stack operations to make the numbers in your stack (from bottom to top) equal to \`target\`. Follow these rules:

- If the current integer is in \`target\`, do a **Push**.
- If the current integer is not in \`target\`, do a **Push** and then immediately a **Pop**.
- Stop as soon as the stack equals \`target\`.

Return the stack operations needed to build \`target\`.`,
  constraints: [
    '`1 <= target.length <= 100`',
    '`1 <= n <= 100`',
    '`1 <= target[i] <= n`',
    '`target` is strictly increasing.',
  ],
  examples: [
    {
      input: 'target = [1,3], n = 3',
      output: '["Push","Push","Pop","Push"]',
      explanation: 'Push 1 (keep). Push 2 (not in target → Pop). Push 3 (keep).',
    },
    {
      input: 'target = [1,2,3], n = 3',
      output: '["Push","Push","Push"]',
      explanation: 'Every number 1,2,3 is in target; just push each.',
    },
  ],
  hints: [
    'Iterate integers from 1 to n, simulating the stream.',
    'For each integer: always Push. If it is not in target, also Pop immediately after.',
    'Stop once you have pushed the last element of target — no further integers are needed.',
  ],
  functionName: 'buildArray',
  params: ['target', 'n'],
  starterCode: {
    javascript: `function buildArray(target, n) {

}`,
    typescript: `function buildArray(target: number[], n: number): string[] {

}`,
    python: `def buildArray(target, n):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3], 3], expected: ['Push', 'Push', 'Pop', 'Push'] },
    { args: [[1, 2, 3], 3], expected: ['Push', 'Push', 'Push'] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: ['Push'] },
    { args: [[2], 2], expected: ['Push', 'Pop', 'Push'] },
    { args: [[1, 2], 3], expected: ['Push', 'Push'] },
    { args: [[1, 3, 5], 5], expected: ['Push', 'Push', 'Pop', 'Push', 'Push', 'Pop', 'Push'] },
    { args: [[2, 3, 4], 4], expected: ['Push', 'Pop', 'Push', 'Push', 'Push'] },
  ],
};
