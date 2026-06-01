import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-median-of-the-uniqueness-array',
  title: 'Find the Median of the Uniqueness Array',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'sliding-window'],
  description: `Given an integer array \`nums\`, the **uniqueness array** is the sorted array of the number of distinct elements in every subarray of \`nums\`.

More formally, for every subarray \`nums[i..j]\` (0 <= i <= j < nums.length), count the number of distinct values and collect all these counts into a list. Sort the list — this is the uniqueness array.

Return the **median** of the uniqueness array. The median is the element at 1-based position \`ceil(total / 2)\`, where \`total\` is the length of the uniqueness array. For an even-length uniqueness array this returns the lower of the two middle elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,4,3,4,5]',
      output: '2',
      explanation: 'There are 15 subarrays total. The uniqueness array sorted is [1,1,1,1,1,2,2,2,2,2,2,2,3,3,3]. Median position = ceil(15/2) = 8. The 8th element is 2.',
    },
    {
      input: 'nums = [4,3,5,4]',
      output: '2',
      explanation: 'There are 10 subarrays. Median position = ceil(10/2) = 5. The 5th element of the sorted uniqueness array is 2.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '1',
      explanation: 'Uniqueness array sorted: [1,1,1,2,2,3]. Median position = ceil(6/2) = 3. The 3rd element is 1.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer k (a distinct-count value). For each candidate k, count how many subarrays have at most k distinct elements using a sliding window.',
    'Level 2: Total subarrays = n*(n+1)/2. Median position = ceil(total/2). Find the minimum k such that countAtMost(k) >= medianPos.',
    'Level 3: Sliding window for countAtMost(k): maintain a frequency map; expand right pointer, shrink left when distinct count exceeds k. Each right position contributes (right - left + 1) valid subarrays. Binary search range is [1, n].',
  ],
  functionName: 'findMedian',
  params: ['nums'],
  starterCode: {
    javascript: `function findMedian(nums) {
  const n = nums.length;
  const total = n * (n + 1) / 2;
  const medianPos = Math.ceil(total / 2);

  function countAtMost(k) {
    const freq = new Map();
    let left = 0;
    let cnt = 0;
    for (let right = 0; right < n; right++) {
      freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
      while (freq.size > k) {
        const v = nums[left++];
        if (freq.get(v) === 1) freq.delete(v);
        else freq.set(v, freq.get(v) - 1);
      }
      cnt += right - left + 1;
    }
    return cnt;
  }

  let lo = 1, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countAtMost(mid) >= medianPos) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    typescript: `function findMedian(nums: number[]): number {
  const n = nums.length;
  const total = n * (n + 1) / 2;
  const medianPos = Math.ceil(total / 2);

  function countAtMost(k: number): number {
    const freq = new Map<number, number>();
    let left = 0;
    let cnt = 0;
    for (let right = 0; right < n; right++) {
      freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);
      while (freq.size > k) {
        const v = nums[left++];
        if (freq.get(v) === 1) freq.delete(v);
        else freq.set(v, freq.get(v)! - 1);
      }
      cnt += right - left + 1;
    }
    return cnt;
  }

  let lo = 1, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countAtMost(mid) >= medianPos) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    python: `def findMedian(nums):
    n = len(nums)
    total = n * (n + 1) // 2
    median_pos = (total + 1) // 2  # ceil(total / 2)

    def count_at_most(k):
        freq = {}
        left = cnt = 0
        for right, v in enumerate(nums):
            freq[v] = freq.get(v, 0) + 1
            while len(freq) > k:
                lv = nums[left]
                if freq[lv] == 1:
                    del freq[lv]
                else:
                    freq[lv] -= 1
                left += 1
            cnt += right - left + 1
        return cnt

    lo, hi = 1, n
    while lo < hi:
        mid = (lo + hi) // 2
        if count_at_most(mid) >= median_pos:
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  },
  visibleTests: [
    { args: [[3, 4, 3, 4, 5]], expected: 2 },
    { args: [[4, 3, 5, 4]], expected: 2 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
    { args: [[1, 1, 2, 2, 3]], expected: 2 },
  ],
};
