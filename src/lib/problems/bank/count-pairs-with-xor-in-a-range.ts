import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-with-xor-in-a-range',
  title: 'Count Pairs With XOR in a Range',
  difficulty: 'hard',
  tags: ['trie', 'arrays', 'binary-search'],
  description: `Given a (**0-indexed**) integer array \`nums\` and two integers \`low\` and \`high\`, return the number of **nice pairs**.

A **nice pair** is a pair \`(i, j)\` where \`0 <= i < j < nums.length\` and \`low <= (nums[i] XOR nums[j]) <= high\`.`,
  constraints: [
    '`1 <= nums.length <= 2 * 10^4`',
    '`1 <= nums[i] <= 2 * 10^4`',
    '`1 <= low <= high <= 2 * 10^4`',
  ],
  examples: [
    {
      input: 'nums = [1,4,2,7], low = 2, high = 6',
      output: '6',
      explanation: 'All nice pairs (i,j): (0,1)→5, (0,2)→3, (0,3)→6, (1,2)→6, (1,3)→3, (2,3)→5. All 6 are in [2,6].',
    },
    {
      input: 'nums = [9,8,4,2,1], low = 5, high = 14',
      output: '8',
      explanation: 'Pairs with XOR in [5,14]: (0,1)→1✗, (0,2)→13✓, (0,3)→11✓, (0,4)→8✓, (1,2)→12✓, (1,3)→10✓, (1,4)→9✓, (2,3)→6✓, (2,4)→5✓, (3,4)→3✗ → 8 pairs.',
    },
  ],
  hints: [
    'Use the identity: count(low, high) = countBelow(high+1) − countBelow(low), where countBelow(limit) counts pairs with XOR < limit.',
    'Build a binary trie of all numbers seen so far. For each new number, query how many existing numbers XOR to give a value < limit by traversing the trie bit by bit.',
    'At each bit: if the bit of limit is 1, all pairs that agree with number\'s bit at this level have XOR < limit for this bit — add that subtree count; then descend into the branch that differs.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'low', 'high'],
  starterCode: {
    javascript: `function countPairs(nums, low, high) {
  const BITS = 15;
  // Trie node: [count, children[0], children[1]]
  const trie = [[0, -1, -1]];
  const insert = v => {
    let node = 0;
    for (let b = BITS; b >= 0; b--) {
      const bit = (v >> b) & 1;
      if (trie[node][bit + 1] === -1) { trie[node][bit + 1] = trie.length; trie.push([0, -1, -1]); }
      node = trie[node][bit + 1];
      trie[node][0]++;
    }
  };
  const countBelow = (v, limit) => {
    let node = 0, cnt = 0;
    for (let b = BITS; b >= 0; b--) {
      const vb = (v >> b) & 1, lb = (limit >> b) & 1;
      if (lb === 1) {
        const child = trie[node][vb + 1]; // going same bit -> XOR bit = 0 < 1, all count
        if (child !== -1) cnt += trie[child][0];
        node = trie[node][(1 - vb) + 1]; // go to bit that makes XOR bit = 1
      } else {
        node = trie[node][vb + 1]; // must pick same bit to keep XOR < limit
      }
      if (node === -1) break;
    }
    return cnt;
  };
  let ans = 0;
  for (const n of nums) {
    ans += countBelow(n, high + 1) - countBelow(n, low);
    insert(n);
  }
  return ans;
}`,
    typescript: `function countPairs(nums: number[], low: number, high: number): number {
  const BITS = 15;
  const trie: [number, number, number][] = [[0, -1, -1]];
  const insert = (v: number) => {
    let node = 0;
    for (let b = BITS; b >= 0; b--) {
      const bit = (v >> b) & 1;
      if (trie[node]![bit + 1] === -1) { trie[node]![bit + 1] = trie.length; trie.push([0, -1, -1]); }
      node = trie[node]![bit + 1]!;
      trie[node]![0]++;
    }
  };
  const countBelow = (v: number, limit: number): number => {
    let node = 0, cnt = 0;
    for (let b = BITS; b >= 0; b--) {
      const vb = (v >> b) & 1, lb = (limit >> b) & 1;
      if (lb === 1) {
        const child = trie[node]![vb + 1]!;
        if (child !== -1) cnt += trie[child]![0]!;
        node = trie[node]![(1 - vb) + 1]!;
      } else {
        node = trie[node]![vb + 1]!;
      }
      if (node === -1) break;
    }
    return cnt;
  };
  let ans = 0;
  for (const n of nums) {
    ans += countBelow(n, high + 1) - countBelow(n, low);
    insert(n);
  }
  return ans;
}`,
    python: `def countPairs(nums, low, high):
    BITS = 15
    trie = [[0, None, None]]  # [count, child0, child1]
    def insert(v):
        node = 0
        for b in range(BITS, -1, -1):
            bit = (v >> b) & 1
            if trie[node][bit + 1] is None:
                trie[node][bit + 1] = len(trie); trie.append([0, None, None])
            node = trie[node][bit + 1]
            trie[node][0] += 1
    def count_below(v, limit):
        node, cnt = 0, 0
        for b in range(BITS, -1, -1):
            vb = (v >> b) & 1; lb = (limit >> b) & 1
            if lb == 1:
                child = trie[node][vb + 1]
                if child is not None: cnt += trie[child][0]
                node = trie[node][(1 - vb) + 1]
            else:
                node = trie[node][vb + 1]
            if node is None: break
        return cnt
    ans = 0
    for n in nums:
        ans += count_below(n, high + 1) - count_below(n, low)
        insert(n)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 4, 2, 7], 2, 6], expected: 6 },
    { args: [[9, 8, 4, 2, 1], 5, 14], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 0, 0], expected: 3 },
    { args: [[1, 2, 3, 4], 1, 2], expected: 2 },
    { args: [[5], 1, 10], expected: 0 },
    { args: [[1, 2, 4, 8], 3, 5], expected: 2 },
    { args: [[10, 20, 30], 5, 25], expected: 2 },
  ],
};
