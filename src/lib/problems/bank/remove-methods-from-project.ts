import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-methods-from-project',
  title: 'Remove Methods From Project',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are maintaining a project that has \`n\` methods numbered from \`0\` to \`n - 1\`.

You are given two integers \`n\` and \`k\`, and a 2D integer array \`invocations\`, where \`invocations[i] = [ai, bi]\` indicates that method \`ai\` invokes method \`bi\`.

There is a bug in method \`k\`. Method \`k\`, along with any method invoked by \`k\` directly or indirectly, are considered **suspected** to have bugs.

If a suspected method is invoked by a **non-suspected** method, the suspected method cannot be removed. Otherwise, remove all suspected methods.

Return an array containing the method numbers that remain after removal. You may return the answer in **any order**.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= k <= n - 1',
    '0 <= invocations.length <= 2 * 10^5',
    'invocations[i].length == 2',
    '0 <= ai, bi <= n - 1',
    'ai != bi',
    'invocations[i] != invocations[j]',
  ],
  examples: [
    {
      input: 'n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]',
      output: '[0,1,2,3]',
      explanation: 'Method 0 (non-suspected) calls method 1 (suspected), so suspected methods cannot be safely removed.',
    },
    {
      input: 'n = 4, k = 1, invocations = [[1,2],[1,3]]',
      output: '[0]',
      explanation: 'Methods 1, 2, 3 are all suspected (reachable from k=1) and no non-suspected method calls them.',
    },
  ],
  hints: [
    'Use DFS/BFS from method k to find all suspected methods (methods reachable from k in the call graph).',
    'Then check every edge in invocations: if a non-suspected method calls a suspected method, suspected methods cannot be removed — return all methods.',
    'If no such edge exists, return all methods that are not suspected.',
  ],
  functionName: 'remainingMethods',
  params: ['n', 'k', 'invocations'],
  starterCode: {
    javascript: 'function remainingMethods(n, k, invocations) {\n  \n}\n',
    typescript: 'function remainingMethods(n: number, k: number, invocations: number[][]): number[] {\n  \n}',
    python: 'def remainingMethods(n, k, invocations):\n    pass\n',
  },
  visibleTests: [
    { args: [4, 1, [[1, 2], [0, 1], [3, 2]]], expected: [0, 1, 2, 3] },
    { args: [4, 1, [[1, 2], [1, 3]]], expected: [0] },
  ],
  hiddenTests: [
    { args: [5, 0, [[1, 2], [0, 2], [0, 1], [3, 4]]], expected: [3, 4] },
    { args: [3, 0, [[0, 1], [0, 2]]], expected: [] },
    { args: [3, 2, [[0, 1]]], expected: [0, 1] },
  ],
};
