import type { Problem } from '../types';

export const problem: Problem = {
  id: 'race-car',
  title: 'Race Car',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Your car starts at position 0 and speed +1 on an infinite number line.

Instructions:
- **A** (Accelerate): \`position += speed; speed *= 2\`
- **R** (Reverse): \`speed = speed > 0 ? -1 : 1\`

Given a target position \`target\`, return the **length of the shortest sequence of instructions** to reach exactly \`target\`.

**Example 1:**
\`\`\`
Input: target = 3
Output: 2
Explanation: "AA" → pos=1,spd=2 → pos=3
\`\`\`

**Example 2:**
\`\`\`
Input: target = 6
Output: 5
Explanation: "AAARA" reaches position 6
\`\`\`

**Constraints:**
- \`1 ≤ target ≤ 10000\``,
  constraints: ['1 ≤ target ≤ 10000'],
  examples: [
    { input: 'target = 3', output: '2' },
    { input: 'target = 6', output: '5' },
  ],
  hints: [
    'DP: dp[t] = minimum steps to reach position t.',
    'k consecutive A instructions reach position 2^k − 1. If 2^k − 1 == t, answer is k.',
    'Otherwise: overshoot with k As then reverse and solve dp[reach − t]; or undershoot with k As, reverse, back j As, reverse, solve dp[t − (reach − back)].',
  ],
  functionName: 'racecar',
  params: ['target'],
  starterCode: {
    javascript: 'function racecar(target) {\n\n}\n',
    typescript: "function racecar(target: number): number {\n\n}",

    python: 'def racecar(target):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 2 },
    { args: [6], expected: 5 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 4 },
    { args: [5], expected: 7 },
    { args: [10], expected: 7 },
    { args: [7], expected: 3 },
  ],
};
