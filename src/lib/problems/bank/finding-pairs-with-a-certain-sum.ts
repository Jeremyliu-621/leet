import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-pairs-with-a-certain-sum',
  title: 'Finding Pairs With a Certain Sum',
  difficulty: 'medium',
  tags: ['design', 'hash-map', 'arrays'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\`. You are tasked to implement a data structure that supports queries of two types:

1. **Add** a positive integer to an element of a given index in the array \`nums2\`.
2. **Count** the number of pairs \`(i, j)\` such that \`nums1[i] + nums2[j]\` equals a given value (\`0 <= i < nums1.length\` and \`0 <= j < nums2.length\`).

Implement the \`FindSumPairs\` class:

- \`FindSumPairs(nums1, nums2)\` Initializes the \`FindSumPairs\` object with two integer arrays \`nums1\` and \`nums2\`.
- \`add(index, val)\` Adds \`val\` to \`nums2[index]\`, i.e., apply \`nums2[index] += val\`.
- \`count(tot)\` Returns the number of pairs \`(i, j)\` such that \`nums1[i] + nums2[j] == tot\`.

Simulate with arrays of operations. Return results (\`null\` for void operations).`,
  constraints: [
    '1 <= nums1.length <= 1000',
    '1 <= nums2.length <= 10^5',
    '1 <= nums1[i] <= 10^9',
    '1 <= nums2[i] <= 10^5',
    '0 <= index < nums2.length',
    '1 <= val <= 10^5',
    '1 <= tot <= 10^9',
    'At most 1000 calls are made to add and count each.',
  ],
  examples: [
    {
      input:
        'ops = ["FindSumPairs","count","add","count","count"], args = [[[1,1,2,2,2,3],[1,4,5,2,5,4]],[7],[3,2],[7],[8]]',
      output: '[null,8,null,2,6]',
      explanation:
        'Initially count(7)=8 pairs. After add(3,2): nums2[3] changes from 2 to 4. count(7)=2, count(8)=6.',
    },
  ],
  hints: [
    'nums1 is small (≤1000) but nums2 can be large (≤10^5). Keep a frequency map of nums2 values.',
    'For count(tot), iterate over each v in nums1 and look up freq[tot − v] in the map. O(|nums1|) per query.',
    'For add(index, val), decrement freq[old], update nums2[index], increment freq[new]. O(1) per update.',
  ],
  functionName: 'findSumPairsClass',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function findSumPairsClass(ops, args) {
  let nums1, nums2, freq;
  const res = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === 'FindSumPairs') {
      nums1 = args[i][0]; nums2 = args[i][1];
      freq = new Map();
      for (const v of nums2) freq.set(v, (freq.get(v) ?? 0) + 1);
      res.push(null);
    } else if (op === 'add') {
      const [idx, val] = args[i];
      const old = nums2[idx];
      freq.set(old, freq.get(old) - 1);
      nums2[idx] += val;
      const nv = nums2[idx];
      freq.set(nv, (freq.get(nv) ?? 0) + 1);
      res.push(null);
    } else {
      const tot = args[i][0];
      let cnt = 0;
      for (const v of nums1) cnt += freq.get(tot - v) ?? 0;
      res.push(cnt);
    }
  }
  return res;
}`,
    typescript: `function findSumPairsClass(ops: string[], args: unknown[][]): (number | null)[] {
  let nums1: number[], nums2: number[], freq: Map<number, number>;
  const res: (number | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === 'FindSumPairs') {
      [nums1, nums2] = args[i] as [number[], number[]];
      freq = new Map();
      for (const v of nums2) freq.set(v, (freq.get(v) ?? 0) + 1);
      res.push(null);
    } else if (op === 'add') {
      const [idx, val] = args[i] as [number, number];
      const old = nums2![idx];
      freq!.set(old, freq!.get(old)! - 1);
      nums2![idx] += val;
      const nv = nums2![idx];
      freq!.set(nv, (freq!.get(nv) ?? 0) + 1);
      res.push(null);
    } else {
      const tot = (args[i] as [number])[0];
      let cnt = 0;
      for (const v of nums1!) cnt += freq!.get(tot - v) ?? 0;
      res.push(cnt);
    }
  }
  return res;
}`,
    python: `def findSumPairsClass(ops, args):
    from collections import defaultdict
    nums1 = nums2 = None
    freq = defaultdict(int)
    res = []
    for op, a in zip(ops, args):
        if op == 'FindSumPairs':
            nums1, nums2 = a[0], list(a[1])
            for v in nums2: freq[v] += 1
            res.append(None)
        elif op == 'add':
            idx, val = a
            freq[nums2[idx]] -= 1
            nums2[idx] += val
            freq[nums2[idx]] += 1
            res.append(None)
        else:
            tot = a[0]
            res.append(sum(freq[tot - v] for v in nums1))
    return res`,
  },
  visibleTests: [
    {
      args: [
        ['FindSumPairs', 'count', 'add', 'count', 'count'],
        [[[1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]], [7], [3, 2], [7], [8]],
      ],
      // After add(3,2): nums2[3] = 4, freq={1:1,4:3,5:2}
      // count(7): v=2→freq[5]=2 ×3 + v=3→freq[4]=3 = 9; count(8): v=3→freq[5]=2 = 2
      expected: [null, 8, null, 9, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['FindSumPairs', 'count', 'count', 'add', 'count'],
        [[[1, 2, 3], [1, 2, 3]], [4], [6], [0, 1], [4]],
      ],
      // count(4): v=1→1, v=2→1, v=3→1 = 3; count(6): v=3→freq[3]=1 = 1
      // add(0,1): nums2[0]=2, freq={2:2,3:1}
      // count(4): v=1→freq[3]=1, v=2→freq[2]=2, v=3→0 = 3
      expected: [null, 3, 1, null, 3],
    },
    {
      args: [
        ['FindSumPairs', 'count', 'add', 'count', 'count'],
        [[[1], [1]], [2], [0, 9], [10], [2]],
      ],
      // count(2): v=1→freq[1]=1; add(0,9): nums2[0]=10; count(10): v=1→freq[9]=0; count(2): v=1→freq[1]=0
      expected: [null, 1, null, 0, 0],
    },
    {
      args: [
        ['FindSumPairs', 'add', 'add', 'count'],
        [[[1, 2], [1, 2]], [0, 5], [1, 3], [8]],
      ],
      // add(0,5): nums2[0]=6; add(1,3): nums2[1]=5; count(8): v=1→freq[7]=0, v=2→freq[6]=1 = 1
      expected: [null, null, null, 1],
    },
  ],
};
