import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-almost-equal-pairs-ii',
  title: 'Count Almost Equal Pairs II',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given an array \`nums\` of non-negative integers. A pair of indices \`(i, j)\` (where \`i < j\`) is **almost equal** if \`nums[i]\` and \`nums[j]\` are equal, or if one of them can be made equal to the other by performing **at most two** swaps of any two digits (including leading zeros) within the number.

Return the number of almost equal pairs.

**Note:** A single swap exchanges any two digit positions within one number. You may apply up to two swaps on the **same** number.`,
  constraints: [
    '`2 <= nums.length <= 1000`',
    '`0 <= nums[i] <= 10^7`',
  ],
  examples: [
    {
      input: 'nums = [1, 1, 1, 1]',
      output: '6',
      explanation: 'All C(4,2)=6 pairs are equal.',
    },
    {
      input: 'nums = [123, 231, 312]',
      output: '3',
      explanation: '123→213→231 (2 swaps), 123→321→312 (2 swaps), 231→132→312 (2 swaps) — all three pairs are almost equal.',
    },
    {
      input: 'nums = [3, 12, 30, 17, 21]',
      output: '2',
      explanation: '(3,30) and (12,21) — each reachable in 1 swap. No additional pairs are reachable with a second swap.',
    },
  ],
  hints: [
    'Pad all numbers to the same digit length (7 digits) to treat leading zeros uniformly.',
    'For each number, generate the set of all values reachable by 0, 1, or 2 digit swaps.',
    'For a 7-digit string, there are C(7,2)=21 one-swap neighbors; doing two chained swaps gives at most 21×21=441 two-swap neighbors.',
    'Count pairs (i,j) where nums[j] appears in the reachable set of nums[i]. Since reachability by ≤2 swaps is symmetric, checking one direction per pair suffices.',
  ],
  functionName: 'countPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countPairs(nums) {
  const PAD = 7;

  function reachable(num) {
    const s = String(num).padStart(PAD, '0');
    const reached = new Set([num]);
    const oneSwaps = [];

    for (let i = 0; i < PAD; i++) {
      for (let j = i + 1; j < PAD; j++) {
        const t = s.split('');
        [t[i], t[j]] = [t[j], t[i]];
        const joined = t.join('');
        reached.add(parseInt(joined, 10));
        oneSwaps.push(joined);
      }
    }

    for (const s1 of oneSwaps) {
      for (let i = 0; i < PAD; i++) {
        for (let j = i + 1; j < PAD; j++) {
          const t = s1.split('');
          [t[i], t[j]] = [t[j], t[i]];
          reached.add(parseInt(t.join(''), 10));
        }
      }
    }

    return reached;
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const reach = reachable(nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      if (reach.has(nums[j])) count++;
    }
  }
  return count;
}`,
    typescript: `function countPairs(nums: number[]): number {
  const PAD = 7;

  function reachable(num: number): Set<number> {
    const s = String(num).padStart(PAD, '0');
    const reached = new Set<number>([num]);
    const oneSwaps: string[] = [];

    for (let i = 0; i < PAD; i++) {
      for (let j = i + 1; j < PAD; j++) {
        const t = s.split('');
        [t[i], t[j]] = [t[j]!, t[i]!];
        const joined = t.join('');
        reached.add(parseInt(joined, 10));
        oneSwaps.push(joined);
      }
    }

    for (const s1 of oneSwaps) {
      for (let i = 0; i < PAD; i++) {
        for (let j = i + 1; j < PAD; j++) {
          const t = s1.split('');
          [t[i], t[j]] = [t[j]!, t[i]!];
          reached.add(parseInt(t.join(''), 10));
        }
      }
    }

    return reached;
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const reach = reachable(nums[i]!);
    for (let j = i + 1; j < nums.length; j++) {
      if (reach.has(nums[j]!)) count++;
    }
  }
  return count;
}`,
    python: `def countPairs(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    nums = [int(x) for x in nums]
    PAD = 7

    def reachable(num):
        s = str(num).zfill(PAD)
        reached = {num}
        one_swaps = []
        chars = list(s)
        for i in range(PAD):
            for j in range(i + 1, PAD):
                t = chars[:]
                t[i], t[j] = t[j], t[i]
                joined = ''.join(t)
                reached.add(int(joined))
                one_swaps.append(joined)
        for s1 in one_swaps:
            chars1 = list(s1)
            for i in range(PAD):
                for j in range(i + 1, PAD):
                    t = chars1[:]
                    t[i], t[j] = t[j], t[i]
                    reached.add(int(''.join(t)))
        return reached

    count = 0
    n = len(nums)
    for i in range(n):
        reach = reachable(nums[i])
        for j in range(i + 1, n):
            if nums[j] in reach:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[123, 231, 312]], expected: 3 },
    { args: [[3, 12, 30, 17, 21]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 1 },
    { args: [[1234, 4321]], expected: 1 },
    { args: [[1234, 2143]], expected: 1 },
    { args: [[1234, 2143, 4321]], expected: 3 },
    { args: [[123, 231]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[10, 1]], expected: 1 },
  ],
};
