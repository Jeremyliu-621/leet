import type { Problem } from '../types';

export const problem: Problem = {
  id: 'build-an-array-with-stack-operations',
  title: 'Build an Array With Stack Operations',
  difficulty: 'easy',
  tags: ['arrays', 'stack', 'simulation'],
  description: `You are given an integer array \`target\` and an integer \`n\`.

You have a stream of integers from \`1\` to \`n\`. In each step, you read one integer from the stream and decide to **push** or **skip** it:
- **"Push"** — push the current number onto the stack.
- **"Pop"** — immediately pop the top of the stack (used to discard a number you just pushed).

Return the **sequence of "Push" and "Pop" operations** to build \`target\` using the stream \`1..n\`.

The \`target\` array is guaranteed to be achievable.

**Example:** \`target = [1, 3]\`, \`n = 3\`
- Read 1: Push → stack = [1] ✓
- Read 2: Push then Pop → 2 is discarded
- Read 3: Push → stack = [1, 3] ✓
- Result: \`["Push", "Push", "Pop", "Push"]\``,
  constraints: [
    '1 ≤ target.length ≤ 100',
    '1 ≤ target[i] ≤ n',
    '1 ≤ n ≤ 100',
    'target is strictly increasing',
    'target is achievable from the stream 1..n',
  ],
  examples: [
    {
      input: 'target = [1, 3], n = 3',
      output: '["Push", "Push", "Pop", "Push"]',
      explanation: 'Push 1, push 2 then pop it (discard), push 3.',
    },
    {
      input: 'target = [1, 2, 3], n = 3',
      output: '["Push", "Push", "Push"]',
      explanation: 'Every number 1–3 belongs to target; just push each one.',
    },
    {
      input: 'target = [2, 3, 4], n = 4',
      output: '["Push", "Pop", "Push", "Push", "Push"]',
      explanation: 'Push 1 then pop it (discard 1), push 2, push 3, push 4.',
    },
  ],
  hints: [
    'Iterate through integers 1 to n in order. For each integer, always Push it first.',
    'After pushing, if the integer is NOT in the target array, immediately Pop it.',
    'Stop as soon as you have pushed the last element of target — no need to continue reading from the stream.',
  ],
  functionName: 'buildArray',
  params: ['target', 'n'],
  starterCode: {
    javascript: `function buildArray(target, n) {
  const set = new Set(target), ops = [];
  for (let i = 1; i <= n; i++) {
    ops.push('Push');
    if (!set.has(i)) ops.push('Pop');
    if (ops.filter(o => o === 'Push').length - ops.filter(o => o === 'Pop').length === target.length) break;
  }
  return ops;
}`,
    typescript: `function buildArray(target: number[], n: number): string[] {
  const set = new Set(target);
  const ops: string[] = [];
  let count = 0;
  for (let i = 1; i <= n && count < target.length; i++) {
    ops.push('Push');
    if (set.has(i)) count++;
    else ops.push('Pop');
  }
  return ops;
}`,
    python: `def buildArray(target, n):
    target = list(target)
    target_set = set(target)
    ops = []
    count = 0
    for i in range(1, n + 1):
        if count == len(target):
            break
        ops.append('Push')
        if i in target_set:
            count += 1
        else:
            ops.append('Pop')
    return ops`,
  },
  visibleTests: [
    { args: [[1, 3], 3], expected: ['Push', 'Push', 'Pop', 'Push'] },
    { args: [[1, 2, 3], 3], expected: ['Push', 'Push', 'Push'] },
    { args: [[2, 3, 4], 4], expected: ['Push', 'Pop', 'Push', 'Push', 'Push'] },
    { args: [[1], 1], expected: ['Push'] },
  ],
  hiddenTests: [
    { args: [[1, 2], 3], expected: ['Push', 'Push'] },
    { args: [[3], 3], expected: ['Push', 'Pop', 'Push', 'Pop', 'Push'] },
    { args: [[1, 4], 4], expected: ['Push', 'Push', 'Pop', 'Push', 'Pop', 'Push'] },
    { args: [[3, 5], 5], expected: ['Push', 'Pop', 'Push', 'Pop', 'Push', 'Push', 'Pop', 'Push'] },
    { args: [[2], 4], expected: ['Push', 'Pop', 'Push'] },
    { args: [[1, 2, 3, 4], 4], expected: ['Push', 'Push', 'Push', 'Push'] },
    { args: [[5], 5], expected: ['Push', 'Pop', 'Push', 'Pop', 'Push', 'Pop', 'Push', 'Pop', 'Push'] },
  ],
};
