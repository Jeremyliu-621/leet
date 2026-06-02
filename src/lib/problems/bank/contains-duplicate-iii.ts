import type { Problem } from '../types';

export const problem: Problem = {
  id: 'contains-duplicate-iii',
  title: 'Contains Duplicate III',
  difficulty: 'hard',
  tags: ['sliding-window'],
  description: `Given an integer array \`nums\` and two integers \`indexDiff\` and \`valueDiff\`, return \`true\` if there exist two distinct indices \`i\` and \`j\` such that:

- \`|i - j| <= indexDiff\`
- \`|nums[i] - nums[j]| <= valueDiff\`

Return \`false\` otherwise.

**Approach:** Use bucket sort with a sliding window. Assign each number to a bucket of size \`w = valueDiff + 1\`. Two numbers in the same bucket are guaranteed to satisfy the value condition. Also check adjacent buckets (±1). Maintain a map of at most \`indexDiff\` entries.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    '1 <= indexDiff <= nums.length',
    '0 <= valueDiff <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1], indexDiff = 3, valueDiff = 0',
      output: 'true',
      explanation: 'i=0, j=3: |0-3|=3≤3 and |1-1|=0≤0.',
    },
    {
      input: 'nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3',
      output: 'false',
      explanation: 'No two elements within distance 2 differ by at most 3.',
    },
    {
      input: 'nums = [2,2], indexDiff = 3, valueDiff = 0',
      output: 'true',
      explanation: 'i=0, j=1: |0-1|=1≤3 and |2-2|=0≤0.',
    },
  ],
  hints: [
    'Use a bucket of size `w = valueDiff + 1`. Two numbers in the same bucket always satisfy `|a - b| <= valueDiff`.',
    'For negative numbers, compute the bucket carefully: `x >= 0 ? Math.floor(x / w) : Math.floor((x + 1) / w) - 1`.',
    'Check the same bucket and adjacent buckets (±1) for each new element. Maintain a sliding window of size `indexDiff` by deleting old entries from the map.',
  ],
  functionName: 'containsNearbyAlmostDuplicate',
  params: ['nums', 'indexDiff', 'valueDiff'],
  starterCode: {
    javascript: `function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
  const w = valueDiff + 1;
  const getBucket = x => x >= 0 ? Math.floor(x / w) : Math.floor((x + 1) / w) - 1;
  const buckets = new Map();
  for (let i = 0; i < nums.length; i++) {
    const b = getBucket(nums[i]);
    if (buckets.has(b)) return true;
    if (buckets.has(b - 1) && Math.abs(nums[i] - buckets.get(b - 1)) <= valueDiff) return true;
    if (buckets.has(b + 1) && Math.abs(nums[i] - buckets.get(b + 1)) <= valueDiff) return true;
    buckets.set(b, nums[i]);
    if (i >= indexDiff) buckets.delete(getBucket(nums[i - indexDiff]));
  }
  return false;
}`,
    typescript: `function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
  const w = valueDiff + 1;
  const getBucket = (x: number) => x >= 0 ? Math.floor(x / w) : Math.floor((x + 1) / w) - 1;
  const buckets = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]!;
    const b = getBucket(x);
    if (buckets.has(b)) return true;
    if (buckets.has(b - 1) && Math.abs(x - buckets.get(b - 1)!) <= valueDiff) return true;
    if (buckets.has(b + 1) && Math.abs(x - buckets.get(b + 1)!) <= valueDiff) return true;
    buckets.set(b, x);
    if (i >= indexDiff) buckets.delete(getBucket(nums[i - indexDiff]!));
  }
  return false;
}`,

    python: `def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    w = valueDiff + 1
    def get_bucket(x):
        return x // w if x >= 0 else (x + 1) // w - 1
    buckets = {}
    for i, x in enumerate(nums):
        b = get_bucket(x)
        if b in buckets:
            return True
        if b - 1 in buckets and abs(x - buckets[b - 1]) <= valueDiff:
            return True
        if b + 1 in buckets and abs(x - buckets[b + 1]) <= valueDiff:
            return True
        buckets[b] = x
        if i >= indexDiff:
            del buckets[get_bucket(nums[i - indexDiff])]
    return False
`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 1], 3, 0], expected: true },
    { args: [[1, 5, 9, 1, 5, 9], 2, 3], expected: false },
    { args: [[2, 2], 3, 0], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1, 0], expected: false },
    { args: [[-3, -1, 1, 3, 5], 1, 1], expected: false },
    { args: [[1, 100, 200, 100, 1], 1, 100], expected: true },
  ],
};
