import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-with-element-from-array',
  title: 'Maximum XOR With an Element From Array',
  difficulty: 'hard',
  tags: ['trie', 'arrays', 'binary-search'],
  description: `You are given an array \`nums\` consisting of non-negative integers. You are also given a \`queries\` array, where \`queries[i] = [xi, mi]\`.

The answer to the \`i\`-th query is the **maximum** bitwise XOR of \`xi\` with any element of \`nums\` that does **not exceed** \`mi\`. In other words, the answer is \`max(nums[j] XOR xi)\` for all \`j\` such that \`nums[j] <= mi\`. If all elements in \`nums\` are greater than \`mi\`, then the answer is \`-1\`.

Return an integer array \`answer\` where \`answer.length == queries.length\` and \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '`1 <= nums.length, queries.length <= 10^5`',
    '`queries[i].length == 2`',
    '`0 <= nums[j], xi, mi <= 3 * 10^4`',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]',
      output: '[3,3,7]',
      explanation: '1) xi=3, mi=1: nums ≤ 1 are {0,1}; max XOR: 3^0=3, 3^1=2 → 3. 2) xi=1, mi=3: nums ≤ 3 are {0,1,2,3}; max XOR: 1^2=3 → 3. 3) xi=5, mi=6: all nums ≤ 6; max XOR: 5^2=7 → 7.',
    },
    {
      input: 'nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]',
      output: '[15,-1,5]',
      explanation: '1) xi=12, mi=4: nums ≤ 4 → {2,3,4}; 12^3=15. 2) xi=8, mi=1: no nums ≤ 1 → -1. 3) xi=6, mi=3: nums ≤ 3 → {2,3}; 6^3=5.',
    },
  ],
  hints: [
    'Sort nums. Sort queries by mi. Process queries in order of increasing mi, inserting elements into a trie as they become available.',
    'Use an offline approach: attach original query index, sort by mi ascending, then walk through sorted queries inserting qualifying nums into a trie.',
    'Each trie node represents a bit (from MSB to LSB). To maximize XOR with xi, greedily go to the child that differs from the corresponding bit of xi.',
  ],
  functionName: 'maximizeXor',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function maximizeXor(nums, queries) {
  nums.sort((a, b) => a - b);
  const q = queries.map((qr, i) => [qr[0], qr[1], i]).sort((a, b) => a[1] - b[1]);
  const BITS = 15;
  const ch = [[-1, -1]];
  let ni = 0;
  const insert = (num) => {
    let node = 0;
    for (let i = BITS - 1; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (ch[node][bit] === -1) { ch.push([-1, -1]); ch[node][bit] = ch.length - 1; }
      node = ch[node][bit];
    }
  };
  const queryXor = (x) => {
    let node = 0, res = 0;
    for (let i = BITS - 1; i >= 0; i--) {
      const bit = (x >> i) & 1, want = 1 - bit;
      if (ch[node][want] !== -1) { res |= (1 << i); node = ch[node][want]; }
      else node = ch[node][bit];
    }
    return res;
  };
  let ptr = 0;
  const ans = new Array(queries.length);
  for (const [x, m, origIdx] of q) {
    while (ptr < nums.length && nums[ptr] <= m) insert(nums[ptr++]);
    ans[origIdx] = ptr > 0 ? queryXor(x) : -1;
  }
  return ans;
}`,
    typescript: `function maximizeXor(nums: number[], queries: number[][]): number[] {
  nums.sort((a, b) => a - b);
  const q = queries.map((qr, i) => [qr[0]!, qr[1]!, i]).sort((a, b) => a[1]! - b[1]!);
  const BITS = 15;
  const ch: number[][] = [[-1, -1]];
  let ptr = 0;
  const insert = (num: number) => {
    let node = 0;
    for (let i = BITS - 1; i >= 0; i--) {
      const bit = (num >> i) & 1;
      if (ch[node]![bit] === -1) { ch.push([-1, -1]); ch[node]![bit] = ch.length - 1; }
      node = ch[node]![bit]!;
    }
  };
  const queryXor = (x: number) => {
    let node = 0, res = 0;
    for (let i = BITS - 1; i >= 0; i--) {
      const bit = (x >> i) & 1, want = 1 - bit;
      if (ch[node]![want] !== -1) { res |= (1 << i); node = ch[node]![want]!; }
      else node = ch[node]![bit]!;
    }
    return res;
  };
  const ans = new Array<number>(queries.length);
  for (const entry of q) {
    const [x, m, origIdx] = entry as [number, number, number];
    while (ptr < nums.length && nums[ptr]! <= m) insert(nums[ptr++]!);
    ans[origIdx] = ptr > 0 ? queryXor(x) : -1;
  }
  return ans;
}`,
    python: `def maximizeXor(nums, queries):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if hasattr(queries, 'to_py'): queries = [[int(x) for x in (q.to_py() if hasattr(q, 'to_py') else q)] for q in queries.to_py()]
    nums.sort()
    q = sorted(enumerate(queries), key=lambda t: t[1][1])
    BITS = 15
    ch = [[-1, -1]]
    def insert(num):
        node = 0
        for i in range(BITS - 1, -1, -1):
            bit = (num >> i) & 1
            if ch[node][bit] == -1:
                ch.append([-1, -1])
                ch[node][bit] = len(ch) - 1
            node = ch[node][bit]
    def query_xor(x):
        node = 0; res = 0
        for i in range(BITS - 1, -1, -1):
            bit = (x >> i) & 1; want = 1 - bit
            if ch[node][want] != -1: res |= (1 << i); node = ch[node][want]
            else: node = ch[node][bit]
        return res
    ptr = 0
    ans = [0] * len(queries)
    for orig_idx, (x, m) in q:
        while ptr < len(nums) and nums[ptr] <= m: insert(nums[ptr]); ptr += 1
        ans[orig_idx] = query_xor(x) if ptr > 0 else -1
    return ans`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], [[3, 1], [1, 3], [5, 6]]], expected: [3, 3, 7] },
    { args: [[5, 2, 4, 6, 6, 3], [[12, 4], [8, 1], [6, 3]]], expected: [15, -1, 5] },
  ],
  hiddenTests: [
    { args: [[0], [[0, 0]]], expected: [0] },
    { args: [[1, 2, 3], [[0, 0]]], expected: [-1] },
    { args: [[1, 2, 3], [[4, 3]]], expected: [7] },
    { args: [[0, 1, 2, 3], [[1, 0], [1, 1], [1, 2], [1, 3]]], expected: [1, 1, 3, 3] },
    { args: [[3, 10, 5, 25, 2, 8], [[9, 8], [7, 25], [1, 10]]], expected: [12, 30, 11] },
  ],
};
