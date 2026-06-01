import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alien-dictionary',
  title: 'Alien Dictionary',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a list of strings \`words\` sorted lexicographically by the rules of an alien language.

Derive the character ordering of that language and return any valid ordering as a string. If no valid ordering exists (due to a cycle or an invalid prefix relationship), return \`""\`.

Your function receives the array of sorted words and must return a string of the unique characters in a valid ordering.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters',
    'All characters in words[i] are lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["wrt","wrf","er","ett","rftt"]',
      output: '"wertf"',
      explanation:
        'From adjacent pairs: t < f (wrt vs wrf), w < e (wrf vs er), r < t (er vs ett), e < r (ett vs rftt). The unique chain is w → e → r → t → f.',
    },
    {
      input: 'words = ["z","x","z"]',
      output: '""',
      explanation:
        '"z" < "x" from the first pair, but "x" < "z" from the second pair — a cycle, so no valid ordering exists.',
    },
  ],
  hints: [
    'Build a directed graph from adjacent word pairs: compare the first differing character in each pair to get a directed edge (earlier char → later char). If word A is longer than word B, A starts with B, and A appears before B in the list, return "" immediately — that\'s an impossible ordering.',
    'Run topological sort (BFS / Kahn\'s algorithm) on the character graph. Collect all unique characters from all words as the node set; every unique character must appear in the output.',
    'After BFS, if the result string length equals the number of unique characters, return it. Otherwise a cycle was detected — return "".',
  ],
  functionName: 'alienOrder',
  params: ['words'],
  starterCode: {
    javascript: `function alienOrder(words) {
  const chars = new Set(words.flatMap(w => [...w]));
  const adj = new Map([...chars].map(c => [c, new Set()]));
  const indegree = new Map([...chars].map(c => [c, 0]));
  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i], b = words[i + 1];
    if (a.length > b.length && a.startsWith(b)) return '';
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] !== b[j]) {
        if (!adj.get(a[j]).has(b[j])) {
          adj.get(a[j]).add(b[j]);
          indegree.set(b[j], indegree.get(b[j]) + 1);
        }
        break;
      }
    }
  }
  const queue = [...chars].filter(c => indegree.get(c) === 0);
  let result = '';
  while (queue.length > 0) {
    const c = queue.shift();
    result += c;
    for (const next of adj.get(c)) {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) queue.push(next);
    }
  }
  return result.length === chars.size ? result : '';
}`,
    typescript: `function alienOrder(words: string[]): string {
  const chars = new Set(words.flatMap(w => [...w]));
  const adj = new Map<string, Set<string>>([...chars].map(c => [c, new Set()]));
  const indegree = new Map<string, number>([...chars].map(c => [c, 0]));
  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i], b = words[i + 1];
    if (a.length > b.length && a.startsWith(b)) return '';
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] !== b[j]) {
        if (!adj.get(a[j])!.has(b[j])) {
          adj.get(a[j])!.add(b[j]);
          indegree.set(b[j], indegree.get(b[j])! + 1);
        }
        break;
      }
    }
  }
  const queue = [...chars].filter(c => indegree.get(c) === 0);
  let result = '';
  while (queue.length > 0) {
    const c = queue.shift()!;
    result += c;
    for (const next of adj.get(c)!) {
      indegree.set(next, indegree.get(next)! - 1);
      if (indegree.get(next) === 0) queue.push(next);
    }
  }
  return result.length === chars.size ? result : '';
}`,
    python: `def alienOrder(words):
    from collections import deque, defaultdict
    chars = set(c for w in words for c in w)
    adj = defaultdict(set)
    indegree = {c: 0 for c in chars}
    for i in range(len(words) - 1):
        a, b = words[i], words[i + 1]
        if len(a) > len(b) and a.startswith(b):
            return ''
        for j in range(min(len(a), len(b))):
            if a[j] != b[j]:
                if b[j] not in adj[a[j]]:
                    adj[a[j]].add(b[j])
                    indegree[b[j]] += 1
                break
    queue = deque(c for c in chars if indegree[c] == 0)
    result = []
    while queue:
        c = queue.popleft()
        result.append(c)
        for nxt in adj[c]:
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                queue.append(nxt)
    return ''.join(result) if len(result) == len(chars) else ''
`,
  },
  visibleTests: [
    { args: [['wrt', 'wrf', 'er', 'ett', 'rftt']], expected: 'wertf' },
    { args: [['z', 'x']], expected: 'zx' },
    { args: [['z', 'x', 'z']], expected: '' },
  ],
  hiddenTests: [
    { args: [['abc', 'ab']], expected: '' },
    { args: [['z']], expected: 'z' },
    { args: [['baa', 'abcd', 'abca', 'cab', 'cad']], expected: 'bdac' },
  ],
};
