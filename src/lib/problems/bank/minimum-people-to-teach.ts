import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-people-to-teach',
  title: 'Minimum Number of People to Teach',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `On a social network of \`n\` users, you are given a list of \`languages\` each user knows and a list of \`friendships\` between users.

You can teach **one language** to any number of users, and each user learns it instantly. A user can **communicate** with a friend if they share at least one language.

Return the **minimum number of users** you need to teach so that every pair of friends can communicate.

**Notes:**
- Users are numbered 1..n, languages are numbered 1..m.
- A friend pair that can already communicate requires no teaching.`,
  constraints: [
    '2 <= n <= 500',
    '1 <= m <= 500',
    '1 <= languages[i].length <= m',
    '1 <= languages[i][j] <= m',
    '1 <= ui, vi <= n',
    'ui != vi',
    'The friendship list has no duplicate pairs.',
    'No user has duplicate languages.',
  ],
  examples: [
    {
      input: 'n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]',
      output: '1',
      explanation: 'Users 1 and 2 cannot communicate. Users 1 and 3 can (language 1). Users 2 and 3 can (language 2). Teach user 1 or user 2 language 2 or 1 respectively — either way, 1 person.',
    },
    {
      input: 'n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]',
      output: '2',
      explanation: 'Users 1 and 4 only speak language 2 and 3 respectively; no common language. Teach both the same language (e.g., user 4 learns language 2, user 1 learns language 3): 2 people.',
    },
  ],
  hints: [
    'First, identify friend pairs that cannot already communicate (no shared language). Only those pairs matter.',
    'For each of the m languages, count how many users from the "cannot communicate" pairs would need to be taught (users in those pairs who don\'t already speak that language).',
    'The answer is the minimum count across all languages. Use sets for quick language membership queries.',
  ],
  functionName: 'minimumTeachings',
  params: ['n', 'languages', 'friendships'],
  starterCode: {
    javascript: `function minimumTeachings(n, languages, friendships) {
  // languages[i] is 1-indexed array of languages user i+1 speaks
  // friendships[j] = [u, v] (1-indexed user pair)

}`,
    typescript: "function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {\n  // languages[i] is 1-indexed array of languages user i+1 speaks\n  // friendships[j] = [u, v] (1-indexed user pair)\n\n}",

    python: `def minimumTeachings(n, languages, friendships):
    # languages[i] is 1-indexed list of languages user i+1 speaks
    # friendships[j] = [u, v] (1-indexed user pair)
    pass
`,
  },
  visibleTests: [
    {
      args: [2, [[1],[2],[1,2]], [[1,2],[1,3],[2,3]]],
      expected: 1,
    },
    {
      args: [3, [[2],[1,3],[1,2],[3]], [[1,4],[1,2],[3,4],[2,3]]],
      expected: 2,
    },
  ],
  hiddenTests: [
    {
      args: [1, [[1],[1],[1]], [[1,2],[2,3],[1,3]]],
      expected: 0,
    },
    {
      args: [3, [[1],[2],[3]], [[1,2],[2,3],[1,3]]],
      expected: 2,
    },
    {
      args: [2, [[1],[2]], [[1,2]]],
      expected: 1,
    },
    {
      args: [2, [[1,2],[1,2]], [[1,2]]],
      expected: 0,
    },
    {
      args: [4, [[1],[2],[3],[4]], [[1,2],[3,4]]],
      expected: 3,
    },
  ],
};
