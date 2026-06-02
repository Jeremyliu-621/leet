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
  const langSets = languages.map(l => new Set(l));
  const needTeach = new Set();
  for (const [u, v] of friendships) {
    const su = langSets[u - 1], sv = langSets[v - 1];
    let ok = false;
    for (const l of su) if (sv.has(l)) { ok = true; break; }
    if (!ok) { needTeach.add(u); needTeach.add(v); }
  }
  let best = needTeach.size;
  for (let lang = 1; lang <= n; lang++) {
    let count = 0;
    for (const u of needTeach) if (!langSets[u - 1].has(lang)) count++;
    best = Math.min(best, count);
  }
  return best;
}`,
    typescript: `function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
  const langSets = languages.map(l => new Set(l));
  const needTeach = new Set<number>();
  for (const [u, v] of friendships) {
    const su = langSets[u! - 1]!, sv = langSets[v! - 1]!;
    let ok = false;
    for (const l of su) if (sv.has(l)) { ok = true; break; }
    if (!ok) { needTeach.add(u!); needTeach.add(v!); }
  }
  let best = needTeach.size;
  for (let lang = 1; lang <= n; lang++) {
    let count = 0;
    for (const u of needTeach) if (!langSets[u - 1]!.has(lang)) count++;
    best = Math.min(best, count);
  }
  return best;
}`,
    python: `def minimumTeachings(n, languages, friendships):
    if hasattr(languages, 'to_py'): languages = languages.to_py()
    if hasattr(friendships, 'to_py'): friendships = friendships.to_py()
    languages = [[int(x) for x in (l.to_py() if hasattr(l,'to_py') else l)] for l in languages]
    friendships = [[int(x) for x in (f.to_py() if hasattr(f,'to_py') else f)] for f in friendships]
    lang_sets = [set(l) for l in languages]
    need = set()
    for u, v in friendships:
        if not lang_sets[u-1] & lang_sets[v-1]:
            need.add(u); need.add(v)
    best = len(need)
    for lang in range(1, n+1):
        count = sum(1 for u in need if lang not in lang_sets[u-1])
        best = min(best, count)
    return best`,
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
