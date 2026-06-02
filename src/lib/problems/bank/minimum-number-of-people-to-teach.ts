import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-people-to-teach',
  title: 'Minimum Number of People to Teach',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `On a social network consisting of \`m\` users and some friendships between users, two users can communicate with each other if they know a common language.

You are given an integer \`n\`, an array \`languages\`, and an array \`friendships\` where:
- There are \`n\` languages labeled from \`1\` to \`n\`.
- \`languages[i]\` is the set of languages the \`i\`-th user knows (1-indexed).
- \`friendships[i] = [u, v]\` denotes a friendship between users \`u\` and \`v\`.

You can choose **one** language and teach it to some users so that all friends can communicate with each other. Return the **minimum** number of users you need to teach.

Note that friendships are not transitive; that is, if \`x\` is a friend of \`y\` and \`y\` is a friend of \`z\`, it does not follow that \`x\` is a friend of \`z\`.`,
  constraints: [
    '2 <= n <= 500',
    'languages.length == m',
    '1 <= m <= 500',
    '1 <= languages[i].length <= n',
    '1 <= languages[i][j] <= n',
    '1 <= u < v <= languages.length',
    '1 <= friendships.length <= 500',
    'All tuples (u, v) are unique',
    'languages[i] contains only unique values',
  ],
  examples: [
    {
      input: 'n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]',
      output: '1',
      explanation: 'Teach user 1 or user 2 language 2 or 1 respectively. Teaching 1 person suffices.',
    },
    {
      input: 'n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]',
      output: '2',
      explanation: 'Teach language 1 to user 4 and either user 1 or user 2. 2 people minimum.',
    },
  ],
  hints: [
    'For each friendship [u,v], check if they already share a language. Collect all users involved in friendships where no common language exists.',
    'For each language L (1..n), count how many of the "needy" users don\'t already know L. The answer is the minimum count across all languages.',
    'This is O(n * m * max_lang) which is at most O(500 * 500 * 500) = 125M — too slow. Optimize: for each language L, count the number of distinct "needy" users who do NOT already know L. Use a Set for O(1) lookup.',
  ],
  functionName: 'minimumTeachings',
  params: ['n', 'languages', 'friendships'],
  starterCode: {
    javascript: `function minimumTeachings(n, languages, friendships) {
  // Convert to sets for fast lookup
  const langSets = languages.map(l => new Set(l));
  // Find pairs that can't communicate
  const needTeaching = new Set();
  for (const [u, v] of friendships) {
    // Check if u and v share any language
    let share = false;
    for (const lang of langSets[u - 1]) {
      if (langSets[v - 1].has(lang)) { share = true; break; }
    }
    if (!share) {
      needTeaching.add(u - 1);
      needTeaching.add(v - 1);
    }
  }
  if (needTeaching.size === 0) return 0;
  // For each language, count how many needy users don't know it
  let ans = needTeaching.size;
  for (let lang = 1; lang <= n; lang++) {
    let teach = 0;
    for (const userIdx of needTeaching) {
      if (!langSets[userIdx].has(lang)) teach++;
    }
    ans = Math.min(ans, teach);
  }
  return ans;
}`,
    typescript: `function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
  const langSets = languages.map(l => new Set(l));
  const needTeaching = new Set<number>();
  for (const [u, v] of friendships) {
    let share = false;
    for (const lang of langSets[u! - 1]!) {
      if (langSets[v! - 1]!.has(lang)) { share = true; break; }
    }
    if (!share) {
      needTeaching.add(u! - 1);
      needTeaching.add(v! - 1);
    }
  }
  if (needTeaching.size === 0) return 0;
  let ans = needTeaching.size;
  for (let lang = 1; lang <= n; lang++) {
    let teach = 0;
    for (const userIdx of needTeaching) {
      if (!langSets[userIdx]!.has(lang)) teach++;
    }
    ans = Math.min(ans, teach);
  }
  return ans;
}`,
    python: `def minimumTeachings(n: int, languages: list[list[int]], friendships: list[list[int]]) -> int:
    lang_sets = [set(l) for l in languages]
    need_teaching = set()
    for u, v in friendships:
        if not lang_sets[u - 1] & lang_sets[v - 1]:
            need_teaching.add(u - 1)
            need_teaching.add(v - 1)
    if not need_teaching:
        return 0
    ans = len(need_teaching)
    for lang in range(1, n + 1):
        teach = sum(1 for i in need_teaching if lang not in lang_sets[i])
        ans = min(ans, teach)
    return ans`,
  },
  visibleTests: [
    {
      args: [2, [[1], [2], [1, 2]], [[1, 2], [1, 3], [2, 3]]],
      expected: 1,
    },
    {
      args: [3, [[2], [1, 3], [1, 2], [3]], [[1, 4], [1, 2], [3, 4], [2, 3]]],
      expected: 2,
    },
    {
      args: [2, [[1, 2], [1, 2]], [[1, 2]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [2, [[1], [2]], [[1, 2]]], expected: 1 },
    { args: [3, [[1], [2], [3]], [[1, 2], [2, 3], [1, 3]]], expected: 2 },
    { args: [1, [[1], [1], [1]], [[1, 2], [2, 3]]], expected: 0 },
    { args: [3, [[1, 2], [2, 3], [1, 3]], [[1, 2], [2, 3]]], expected: 0 },
    { args: [2, [[1], [1], [2]], [[1, 3], [2, 3]]], expected: 1 },
    { args: [4, [[1, 2], [3, 4], [1, 3], [2, 4]], [[1, 2], [3, 4]]], expected: 2 },
  ],
};
