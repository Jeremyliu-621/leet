import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-triplets-in-an-array',
  title: 'Count Good Triplets in an Array',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given two **0-indexed** arrays \`nums1\` and \`nums2\` of length \`n\`, both of which are **permutations** of \`[0, 1, ..., n - 1]\`.

A **good triplet** is a set of **3** distinct values which are present in **increasing order** by position in both \`nums1\` and \`nums2\`. In other words, if we consider their positions in \`nums1\` as \`pos1v\`, \`pos1u\`, \`pos1w\` and in \`nums2\` as \`pos2v\`, \`pos2u\`, \`pos2w\`, then a good triplet satisfies:

- \`pos1v < pos1u < pos1w\` and \`pos2v < pos2u < pos2w\`.

Return *the **total number** of good triplets*.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '3 <= n <= 10^5',
    '0 <= nums1[i], nums2[i] <= n - 1',
    'nums1 and nums2 are permutations of [0, 1, ..., n - 1].',
  ],
  examples: [
    {
      input: 'nums1 = [2,0,1,3], nums2 = [0,1,2,3]',
      output: '1',
      explanation: 'The only good triplet is (0,1,3): pos1=[1,2,3] and pos2=[0,1,3], both increasing.',
    },
    {
      input: 'nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]',
      output: '4',
      explanation: 'Good triplets: (4,1,3),(4,1,2),(4,0,3),(4,0,2). All have increasing positions in both arrays.',
    },
  ],
  hints: [
    'Map each value to its position in nums2. This creates a new array pos where pos[i] = position of nums1[i] in nums2.',
    'Now count the number of increasing triplets in the array pos (i.e., count (i,j,k) with i<j<k and pos[i]<pos[j]<pos[k]).',
    'For each middle element j, count the elements to its left with pos < pos[j] (call it leftSmaller[j]) and elements to its right with pos > pos[j] (call it rightLarger[j]). Answer = sum of leftSmaller[j] * rightLarger[j].',
    'Use a Binary Indexed Tree (Fenwick Tree) to compute prefix sums efficiently.',
  ],
  functionName: 'goodTriplets',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function goodTriplets(nums1, nums2) {
  const n = nums1.length;
  const pos2 = new Array(n);
  for (let i = 0; i < n; i++) pos2[nums2[i]] = i;
  // pos[i] = position of nums1[i] in nums2
  const pos = nums1.map(v => pos2[v]);
  // BIT (1-indexed, size n)
  const bit = new Array(n + 1).fill(0);
  const update = i => { for (i++; i <= n; i += i & -i) bit[i]++; };
  const query = i => { let s = 0; for (i++; i > 0; i -= i & -i) s += bit[i]; return s; };
  const leftSmaller = new Array(n);
  for (let j = 0; j < n; j++) {
    leftSmaller[j] = pos[j] > 0 ? query(pos[j] - 1) : 0;
    update(pos[j]);
  }
  bit.fill(0);
  let ans = 0;
  for (let j = n - 1; j >= 0; j--) {
    const rightLarger = (j < n - 1) ? (query(n - 1) - query(pos[j])) : 0;
    ans += leftSmaller[j] * rightLarger;
    update(pos[j]);
  }
  return ans;
}`,
    typescript: `function goodTriplets(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const pos2 = new Array<number>(n);
  for (let i = 0; i < n; i++) pos2[nums2[i]!] = i;
  const pos = nums1.map(v => pos2[v]!);
  const bit = new Array<number>(n + 1).fill(0);
  const update = (i: number) => { for (i++; i <= n; i += i & -i) bit[i]!++; };
  const query = (i: number) => { let s = 0; for (i++; i > 0; i -= i & -i) s += bit[i]!; return s; };
  const leftSmaller = new Array<number>(n);
  for (let j = 0; j < n; j++) {
    leftSmaller[j] = pos[j]! > 0 ? query(pos[j]! - 1) : 0;
    update(pos[j]!);
  }
  bit.fill(0);
  let ans = 0;
  for (let j = n - 1; j >= 0; j--) {
    const rightLarger = j < n - 1 ? query(n - 1) - query(pos[j]!) : 0;
    ans += leftSmaller[j]! * rightLarger;
    update(pos[j]!);
  }
  return ans;
}`,
    python: `def goodTriplets(nums1, nums2):
    n = len(nums1)
    pos2 = [0] * n
    for i, v in enumerate(nums2):
        pos2[v] = i
    pos = [pos2[v] for v in nums1]
    bit = [0] * (n + 1)
    def update(i):
        i += 1
        while i <= n:
            bit[i] += 1
            i += i & -i
    def query(i):
        i += 1
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    left_smaller = [0] * n
    for j in range(n):
        left_smaller[j] = query(pos[j] - 1) if pos[j] > 0 else 0
        update(pos[j])
    bit[:] = [0] * (n + 1)
    ans = 0
    for j in range(n - 1, -1, -1):
        right_larger = query(n - 1) - query(pos[j]) if j < n - 1 else 0
        ans += left_smaller[j] * right_larger
        update(pos[j])
    return ans`,
  },
  visibleTests: [
    { args: [[2, 0, 1, 3], [0, 1, 2, 3]], expected: 1 },
    { args: [[4, 0, 1, 3, 2], [4, 1, 0, 2, 3]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2], [0, 1, 2]], expected: 1 },
    { args: [[0, 1, 2], [2, 1, 0]], expected: 0 },
    { args: [[0, 1, 2, 3], [0, 1, 2, 3]], expected: 4 },
    { args: [[0, 1, 2, 3], [3, 2, 1, 0]], expected: 0 },
    { args: [[1, 0, 2, 3], [0, 1, 2, 3]], expected: 2 },
  ],
};
