import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-paths-that-can-form-a-palindrome-in-a-tree',
  title: 'Count Paths That Can Form a Palindrome in a Tree',
  difficulty: 'hard',
  tags: ['tree', 'bit-manipulation'],
  description: `You are given a tree (connected undirected acyclic graph) rooted at node \`0\` consisting of \`n\` nodes numbered \`0\` to \`n - 1\`. The tree is given via a \`parent\` array where \`parent[0] = -1\` and \`parent[i]\` is the parent of node \`i\`. Each edge from node \`i\` to its parent has a label equal to \`s[i]\`, a lowercase English letter.

Return the number of pairs of nodes \`(u, v)\` such that \`u < v\` and the characters on the path from \`u\` to \`v\` can be **rearranged** to form a palindrome.

A string can be rearranged to form a palindrome if and only if **at most one** character appears an odd number of times.`,
  constraints: [
    '2 <= n <= 10^5',
    'parent.length == n',
    '0 <= parent[i] <= n - 1 for all i >= 1',
    'parent[0] == -1',
    's.length == n',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'parent = [-1,0,0,0], s = "aabc"',
      output: '3',
      explanation: 'The 3 valid pairs are (0,1) path "a", (0,2) path "b", (0,3) path "c" — each is a single character, hence a palindrome.',
    },
    {
      input: 'parent = [-1,0,1,2], s = "aaaa"',
      output: '6',
      explanation: 'All 6 pairs are valid. Every path has only \'a\' characters (possibly even count), so any path can form a palindrome.',
    },
    {
      input: 'parent = [-1,0], s = "aa"',
      output: '1',
      explanation: 'The only pair is (0,1), path label "a" — a single character, palindrome.',
    },
  ],
  hints: [
    'Level 1: For a path to be rearrangeable into a palindrome, at most one character can appear an odd number of times. Represent each path from the root as a 26-bit XOR mask (bit i = parity of character i).',
    'Level 2: The XOR mask for path u→v equals xorFromRoot[u] ^ xorFromRoot[v], since the shared root-to-LCA portion cancels.',
    'Level 3: Count pairs (u,v) where xorFromRoot[u]^xorFromRoot[v] has at most 1 bit set. Use a frequency map: for each node, look up count[mask] + Σcount[mask^(1<<b)] for b in 0..25 before inserting.',
  ],
  functionName: 'countPalindromePaths',
  params: ['parent', 's'],
  starterCode: {
    javascript: `function countPalindromePaths(parent, s) {
  const n = parent.length;
  const children = Array.from({length: n}, () => []);
  for (let i = 1; i < n; i++) children[parent[i]].push(i);
  const xor = new Array(n).fill(0);
  const queue = [0];
  while (queue.length) {
    const u = queue.shift();
    for (const v of children[u]) {
      xor[v] = xor[u] ^ (1 << (s.charCodeAt(v) - 97));
      queue.push(v);
    }
  }
  const count = new Map();
  let ans = 0;
  for (let v = 0; v < n; v++) {
    const m = xor[v];
    ans += (count.get(m) || 0);
    for (let b = 0; b < 26; b++) ans += (count.get(m ^ (1 << b)) || 0);
    count.set(m, (count.get(m) || 0) + 1);
  }
  return ans;
}`,
    typescript: `function countPalindromePaths(parent: number[], s: string): number {
  const n = parent.length;
  const children: number[][] = Array.from({length: n}, () => []);
  for (let i = 1; i < n; i++) children[parent[i]].push(i);
  const xor = new Array(n).fill(0);
  const queue = [0];
  while (queue.length) {
    const u = queue.shift()!;
    for (const v of children[u]) {
      xor[v] = xor[u] ^ (1 << (s.charCodeAt(v) - 97));
      queue.push(v);
    }
  }
  const count = new Map<number, number>();
  let ans = 0;
  for (let v = 0; v < n; v++) {
    const m = xor[v];
    ans += (count.get(m) || 0);
    for (let b = 0; b < 26; b++) ans += (count.get(m ^ (1 << b)) || 0);
    count.set(m, (count.get(m) || 0) + 1);
  }
  return ans;
}`,
    python: `def countPalindromePaths(parent, s):
    n = len(parent)
    children = [[] for _ in range(n)]
    for i in range(1, n):
        children[parent[i]].append(i)
    xor = [0] * n
    queue = [0]
    while queue:
        u = queue.pop(0)
        for v in children[u]:
            xor[v] = xor[u] ^ (1 << (ord(s[v]) - ord('a')))
            queue.append(v)
    count = {}
    ans = 0
    for v in range(n):
        m = xor[v]
        ans += count.get(m, 0)
        for b in range(26):
            ans += count.get(m ^ (1 << b), 0)
        count[m] = count.get(m, 0) + 1
    return ans`,
  },
  visibleTests: [
    { args: [[-1, 0, 0, 0], 'aabc'], expected: 3 },
    { args: [[-1, 0, 1, 2], 'aaaa'], expected: 6 },
    { args: [[-1, 0], 'aa'], expected: 1 },
  ],
  hiddenTests: [
    { args: [[-1, 0], 'ab'], expected: 1 },
    { args: [[-1, 0, 0], 'aab'], expected: 2 },
    { args: [[-1, 0, 1], 'aab'], expected: 2 },
    { args: [[-1, 0, 0, 1, 1], 'aaabb'], expected: 8 },
  ],
};
