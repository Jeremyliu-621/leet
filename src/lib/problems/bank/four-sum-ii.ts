import type { Problem } from '../types';

export const problem: Problem = {
  id: 'four-sum-ii',
  title: 'Four Sum II',
  difficulty: 'hard',
  tags: ['hash-map', 'arrays'],
  description: `Given four integer arrays \`nums1\`, \`nums2\`, \`nums3\`, and \`nums4\`, each of length \`n\`, return the number of tuples \`(i, j, k, l)\` such that:

\`\`\`
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
\`\`\`

**Key insight:** split the four arrays into two pairs. Enumerate all sums \`a + b\` for every pair \`(a, b)\` from \`nums1\` × \`nums2\`, counting each sum in a hash map. Then for every pair \`(c, d)\` from \`nums3\` × \`nums4\`, look up how many times \`-(c + d)\` appeared in the first map.

This reduces O(n⁴) brute force to **O(n²)** time.`,
  constraints: [
    'n == nums1.length == nums2.length == nums3.length == nums4.length',
    '1 <= n <= 200',
    '-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28',
  ],
  examples: [
    {
      input: 'nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]',
      output: '2',
      explanation:
        'The two tuples are (0,0,0,0): 1+(-2)+(-1)+2=0, and (1,1,0,0): 2+(-1)+(-1)+0=0.',
    },
    {
      input: 'nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]',
      output: '1',
    },
  ],
  hints: [
    'Brute force is O(n⁴) — too slow for n=200. Instead, split the problem in half: compute all pairwise sums from `nums1` × `nums2` and store them in a frequency map. Then for each pair from `nums3` × `nums4`, look up how many times its negation appears.',
    'Build `sumMap: Map<number, number>` by iterating all pairs `(a, b)` from `nums1 × nums2` and incrementing `sumMap[a+b]`. Then for each pair `(c, d)` from `nums3 × nums4`, add `sumMap[-(c+d)] ?? 0` to the answer.',
    '`const map = new Map(); for (const a of nums1) for (const b of nums2) map.set(a+b, (map.get(a+b) ?? 0) + 1); let count = 0; for (const c of nums3) for (const d of nums4) count += map.get(-(c+d)) ?? 0; return count;`',
  ],
  functionName: 'fourSumII',
  params: ['nums1', 'nums2', 'nums3', 'nums4'],
  starterCode: {
    javascript: `function fourSumII(nums1, nums2, nums3, nums4) {
  const map = new Map();
  for (const a of nums1) for (const b of nums2) map.set(a + b, (map.get(a + b) ?? 0) + 1);
  let count = 0;
  for (const c of nums3) for (const d of nums4) count += map.get(-(c + d)) ?? 0;
  return count;
}`,
    typescript: `function fourSumII(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>();
  for (const a of nums1) for (const b of nums2) map.set(a + b, (map.get(a + b) ?? 0) + 1);
  let count = 0;
  for (const c of nums3) for (const d of nums4) count += map.get(-(c + d)) ?? 0;
  return count;
}`,
    python: `def fourSumII(nums1, nums2, nums3, nums4):
    nums1 = list(nums1.to_py()) if hasattr(nums1, 'to_py') else list(nums1)
    nums2 = list(nums2.to_py()) if hasattr(nums2, 'to_py') else list(nums2)
    nums3 = list(nums3.to_py()) if hasattr(nums3, 'to_py') else list(nums3)
    nums4 = list(nums4.to_py()) if hasattr(nums4, 'to_py') else list(nums4)
    from collections import defaultdict
    mp = defaultdict(int)
    for a in nums1:
        for b in nums2:
            mp[a + b] += 1
    return sum(mp[-(c + d)] for c in nums3 for d in nums4)`,
  },
  visibleTests: [
    { args: [[1, 2], [-2, -1], [-1, 2], [0, 2]], expected: 2 },
    { args: [[0], [0], [0], [0]], expected: 1 },
    { args: [[1, -1], [-1, 1], [-1, 1], [1, -1]], expected: 6 },
    { args: [[1, 2, 3], [-1, -2, -3], [-1, -2, -3], [1, 2, 3]], expected: 19 },
  ],
  hiddenTests: [
    { args: [[1], [-1], [1], [-1]], expected: 1 },
    { args: [[0, 1], [0, -1], [0, -1], [0, 1]], expected: 6 },
    { args: [[-1, -1], [-1, -1], [1, 1], [1, 1]], expected: 16 },
  ],
};
