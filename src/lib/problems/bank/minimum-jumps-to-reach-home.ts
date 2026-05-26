import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-jumps-to-reach-home',
  title: 'Minimum Jumps to Reach Home',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph', 'dynamic-programming'],
  description: `A bug is at position \`0\` on a number line and wants to reach position \`x\`.

The bug can jump:
- **Forward** \`a\` positions (from position \`p\` to \`p + a\`).
- **Backward** \`b\` positions (from position \`p\` to \`p - b\`), but it **cannot** jump backward twice in a row.

Certain positions are **forbidden** (the bug cannot land on them). The bug also cannot go to a negative position.

Return the **minimum number of jumps** to reach position \`x\`, or **-1** if it's impossible.`,
  constraints: [
    '1 <= forbidden.length <= 1000',
    '1 <= a, b, x <= 2000',
    '0 <= forbidden[i] <= 5000',
    'All values in forbidden are distinct.',
    'x is not in forbidden.',
  ],
  examples: [
    {
      input: 'forbidden = [14,4,18,22,16], a = 3, b = 15, x = 9',
      output: '3',
      explanation: '0 →+3→ 3 →+3→ 6 →+3→ 9 (3 forward jumps, no backward jumps needed).',
    },
    {
      input: 'forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11',
      output: '-1',
      explanation: 'No valid sequence of jumps reaches position 11.',
    },
    {
      input: 'forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7',
      output: '2',
      explanation: '0 →+16→ 16 →-9→ 7 (1 forward + 1 backward = 2 jumps).',
    },
  ],
  hints: [
    'Model as BFS. Each state is (position, can_jump_backward). Transitions: forward jump always allowed (if not forbidden and in range); backward jump only if the previous jump was not also backward.',
    'The upper bound on reachable positions is x + b (jumping beyond x and coming back). Combined with the forbidden array constraint, bound the search to roughly max(x, max(forbidden)) + a + b.',
    'Use a visited set of (position, last_was_backward) tuples. BFS level = number of jumps. Return the level when position x is first reached.',
  ],
  functionName: 'minimumJumps',
  params: ['forbidden', 'a', 'b', 'x'],
  starterCode: {
    javascript: `function minimumJumps(forbidden, a, b, x) {
  // BFS on states (position, canGoBack).
  // Forward: always valid (if not forbidden, not negative, within bound).
  // Backward: valid only if last jump was not also backward.
}`,
    python: `def minimumJumps(forbidden, a, b, x):
    # BFS on states (position, can_go_back).
    # Forward: always valid (if not forbidden, not negative, within bound).
    # Backward: valid only if last jump was not also backward.
    pass`,
  },
  visibleTests: [
    { args: [[14, 4, 18, 22, 16], 3, 15, 9], expected: 3 },
    { args: [[8, 3, 16, 6, 12, 20], 15, 13, 11], expected: -1 },
    { args: [[1, 6, 2, 14, 5, 17, 4], 16, 9, 7], expected: 2 },
  ],
  hiddenTests: [
    { args: [[], 1, 1, 1], expected: 1 },
    { args: [[2], 1, 1, 3], expected: -1 },
    { args: [[], 2, 1, 4], expected: 2 },
    { args: [[3], 2, 1, 6], expected: 3 },
    { args: [[1], 3, 2, 9], expected: 3 },
  ],
};
