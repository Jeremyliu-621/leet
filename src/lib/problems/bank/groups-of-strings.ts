import type { Problem } from '../types';

export const problem: Problem = {
  id: 'groups-of-strings',
  title: 'Groups of Strings',
  difficulty: 'hard',
  tags: ['strings', 'union-find', 'bit-manipulation'],
  description: `You are given a **0-indexed** array of strings \`words\`. Two strings are **connected** if one can be obtained from the other by:

1. **Inserting** exactly one lowercase letter at any position.
2. **Deleting** exactly one lowercase letter.
3. **Replacing** exactly one lowercase letter with any other lowercase letter.

The **groups** are defined as groups of strings such that a string belongs to a group if it is connected to **at least one other** string of the group, or if it is the only string in the group.

Note that the type of operation is irrelevant; the strings in each group are connected if they can reach each other via **any** sequence of operations.

Return *a length-2 array* \`answer\` where:
- \`answer[0]\` is the **total number** of groups.
- \`answer[1]\` is the **size of the largest** group.`,
  constraints: [
    '1 <= words.length <= 2 * 10^4',
    '1 <= words[i].length <= 10',
    'words[i] consists of lowercase English letters only',
    'No two strings in words are identical',
  ],
  examples: [
    {
      input: 'words = ["a","b","ab","cde"]',
      output: '[2,3]',
      explanation: '"a" connects to "b" (replace) and to "ab" (insert); "b" connects to "ab" (insert); so {"a","b","ab"} form one group of size 3. "cde" is isolated. 2 groups, largest size 3.',
    },
    {
      input: 'words = ["a","ab","abc"]',
      output: '[1,3]',
      explanation: '"a"→"ab" by insert, "ab"→"abc" by insert; all three are transitively connected. 1 group of size 3.',
    },
    {
      input: 'words = ["a","z"]',
      output: '[1,2]',
      explanation: '"a" can become "z" by replacing the single character. 1 group of size 2.',
    },
  ],
  hints: [
    'Level 1: Represent each string as a bitmask of which letters it contains (26-bit integer). Two strings with the same bitmask are automatically in the same group (deletions/insertions can bridge them).',
    'Level 2: Beyond same-mask, two masks m1 and m2 are directly connected if they differ by exactly 1 bit (one add or remove) OR they have the same popcount but differ in exactly 2 bits (one replace). Use Union-Find keyed by bitmask.',
    'Level 3: For each unique mask m, try all 26 single-bit toggles (add/remove) and all pairs (i,j) where bit i is set and bit j is not (replace). If the resulting mask exists, union them. Complexity O(n·26²).',
  ],
  functionName: 'groupStrings',
  params: ['words'],
  starterCode: {
    javascript: `function groupStrings(words) {
  const parent = new Map(), rank = new Map();
  const find = (x) => {
    if (!parent.has(x)) return x;
    const root = find(parent.get(x));
    parent.set(x, root);
    return root;
  };
  const union = (x, y) => {
    const rx = find(x), ry = find(y);
    if (rx === ry) return;
    const rk = rank.get(rx) || 0, rkk = rank.get(ry) || 0;
    if (rk < rkk) parent.set(rx, ry);
    else if (rk > rkk) parent.set(ry, rx);
    else { parent.set(ry, rx); rank.set(rx, rk + 1); }
  };
  const maskMap = new Map();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    if (!maskMap.has(mask)) maskMap.set(mask, mask);
    else union(mask, maskMap.get(mask));
  }
  for (const m of maskMap.keys()) {
    for (let i = 0; i < 26; i++) {
      const t = m ^ (1 << i);
      if (maskMap.has(t)) union(m, t);
    }
    for (let i = 0; i < 26; i++) {
      if (!(m >> i & 1)) continue;
      for (let j = 0; j < 26; j++) {
        if (m >> j & 1) continue;
        const t = m ^ (1 << i) ^ (1 << j);
        if (maskMap.has(t)) union(m, t);
      }
    }
  }
  const groupSizes = new Map();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    const root = find(maskMap.get(mask) ?? mask);
    groupSizes.set(root, (groupSizes.get(root) ?? 0) + 1);
  }
  let groups = groupSizes.size, maxSize = 0;
  for (const v of groupSizes.values()) maxSize = Math.max(maxSize, v);
  return [groups, maxSize];
}`,
    typescript: `function groupStrings(words: string[]): number[] {
  const parent = new Map<number, number>(), rank = new Map<number, number>();
  const find = (x: number): number => {
    if (!parent.has(x)) return x;
    const root = find(parent.get(x)!);
    parent.set(x, root);
    return root;
  };
  const union = (x: number, y: number) => {
    const rx = find(x), ry = find(y);
    if (rx === ry) return;
    const rk = rank.get(rx) ?? 0, rkk = rank.get(ry) ?? 0;
    if (rk < rkk) parent.set(rx, ry);
    else if (rk > rkk) parent.set(ry, rx);
    else { parent.set(ry, rx); rank.set(rx, rk + 1); }
  };
  const maskMap = new Map<number, number>();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    if (!maskMap.has(mask)) maskMap.set(mask, mask);
    else union(mask, maskMap.get(mask)!);
  }
  for (const m of maskMap.keys()) {
    for (let i = 0; i < 26; i++) {
      const t = m ^ (1 << i);
      if (maskMap.has(t)) union(m, t);
    }
    for (let i = 0; i < 26; i++) {
      if (!(m >> i & 1)) continue;
      for (let j = 0; j < 26; j++) {
        if (m >> j & 1) continue;
        const t = m ^ (1 << i) ^ (1 << j);
        if (maskMap.has(t)) union(m, t);
      }
    }
  }
  const groupSizes = new Map<number, number>();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    const root = find(maskMap.get(mask) ?? mask);
    groupSizes.set(root, (groupSizes.get(root) ?? 0) + 1);
  }
  let groups = groupSizes.size, maxSize = 0;
  for (const v of groupSizes.values()) maxSize = Math.max(maxSize, v);
  return [groups, maxSize];
}`,
    python: `def groupStrings(words):
    parent = {}
    rank = {}
    def find(x):
        if x not in parent: return x
        parent[x] = find(parent[x])
        return parent[x]
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return
        rk, rky = rank.get(rx, 0), rank.get(ry, 0)
        if rk < rky: parent[rx] = ry
        elif rk > rky: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] = rk + 1
    mask_map = {}
    for word in words:
        mask = 0
        for c in word: mask |= 1 << (ord(c) - 97)
        if mask not in mask_map: mask_map[mask] = mask
        else: union(mask, mask_map[mask])
    for m in list(mask_map.keys()):
        for i in range(26):
            t = m ^ (1 << i)
            if t in mask_map: union(m, t)
        for i in range(26):
            if not (m >> i & 1): continue
            for j in range(26):
                if m >> j & 1: continue
                t = m ^ (1 << i) ^ (1 << j)
                if t in mask_map: union(m, t)
    group_sizes = {}
    for word in words:
        mask = 0
        for c in word: mask |= 1 << (ord(c) - 97)
        root = find(mask_map[mask])
        group_sizes[root] = group_sizes.get(root, 0) + 1
    groups = len(group_sizes)
    max_size = max(group_sizes.values())
    return [groups, max_size]`,
  },
  visibleTests: [
    { args: [['a', 'b', 'ab', 'cde']], expected: [2, 3] },
    { args: [['a', 'ab', 'abc']], expected: [1, 3] },
    { args: [['a', 'z']], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [['a']], expected: [1, 1] },
    { args: [['abc', 'bca', 'cba']], expected: [1, 3] },
    { args: [['ab', 'cd', 'ef']], expected: [3, 1] },
    { args: [['ab', 'cd']], expected: [2, 1] },
    { args: [['a', 'b', 'c', 'd']], expected: [1, 4] },
  ],
};
