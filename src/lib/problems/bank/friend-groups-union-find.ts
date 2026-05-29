import type { Problem } from '../types';

export const problem: Problem = {
  id: 'friend-groups-union-find',
  title: 'Friend Groups — Count Connected Components',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You have \`n\` people labeled \`0\` to \`n-1\`. You are given a list of friendship pairs \`pairs\` where \`pairs[i] = [a, b]\` means person \`a\` and person \`b\` are friends. Friendship is transitive: if A is friends with B and B is friends with C, then A, B, and C are all in the same friend group.

Return the **number of distinct friend groups** (connected components).

**Examples:**
- \`n = 5\`, \`pairs = [[0,1],[1,2],[3,4]]\` → \`2\`
  - Group 1: {0, 1, 2}; Group 2: {3, 4}
- \`n = 4\`, \`pairs = []\` → \`4\`
  - No connections — each person is their own group.

**Approach:** Use Union-Find. Initialize each person as their own component. For each pair, union the two people. Count the number of distinct roots.`,
  constraints: [
    '1 <= n <= 2000',
    '0 <= pairs.length <= 10^4',
    'pairs[i].length == 2',
    '0 <= pairs[i][0] < pairs[i][1] < n',
    'There are no duplicate pairs.',
  ],
  examples: [
    {
      input: 'n = 5, pairs = [[0,1],[1,2],[3,4]]',
      output: '2',
      explanation: 'Group {0,1,2} and group {3,4}. Two distinct groups.',
    },
    {
      input: 'n = 4, pairs = []',
      output: '4',
      explanation: 'No friendships — each person is their own group.',
    },
    {
      input: 'n = 3, pairs = [[0,1],[1,2],[0,2]]',
      output: '1',
      explanation: 'All three people are connected — one group.',
    },
  ],
  hints: [
    'Initialize a Union-Find structure with n components. Each person starts as their own root.',
    'For each pair [a, b], call union(a, b). If they were in different components, the component count decreases by 1.',
    'The answer is the number of distinct root values after processing all pairs. You can track this with a counter: start at n, decrement by 1 each time a successful union merges two different components.',
  ],
  functionName: 'countFriendGroups',
  params: ['n', 'pairs'],
  starterCode: {
    javascript: `function countFriendGroups(n, pairs) {

}
`,
    typescript: `function countFriendGroups(n: number, pairs: number[][]): number {

  return 0;
}`,
    python: `def countFriendGroups(n, pairs):
    pass
`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
    { args: [4, []], expected: 4 },
    { args: [3, [[0, 1], [1, 2], [0, 2]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [2, [[0, 1]]], expected: 1 },
    { args: [6, [[0, 1], [2, 3], [4, 5]]], expected: 3 },
    { args: [6, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]], expected: 1 },
    { args: [5, [[0, 1], [2, 3]]], expected: 3 },
    { args: [7, [[0, 1], [1, 2], [3, 4], [5, 6]]], expected: 3 },
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: 1 },
    { args: [5, [[0, 4], [1, 4], [2, 4], [3, 4]]], expected: 1 },
  ],
};
