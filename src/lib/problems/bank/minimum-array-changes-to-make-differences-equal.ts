import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-changes-to-make-differences-equal',
  title: 'Minimum Array Changes to Make Differences Equal',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` of size \`n\` where \`n\` is **even**, and an integer \`k\`.

You can perform any number of changes on the array, where in each change you can change any element of the array to any value between \`0\` and \`k\` (inclusive).

Return the **minimum** number of changes required to make the absolute difference between every pair of elements at indices \`i\` and \`n-1-i\` equal for all \`0 <= i < n/2\`.`,
  constraints: [
    '2 <= n <= 10^5',
    'n is even',
    '0 <= nums[i] <= k',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,0,1,2,4,3], k = 4',
      output: '2',
      explanation:
        'Pairs: (1,3)|diff=2, (0,4)|diff=4, (1,2)|diff=1. Change pair (0,4) to diff=2 (cost 1) and (1,2) to diff=2 (cost 1). Total 2 changes.',
    },
    {
      input: 'nums = [3,3,3,3], k = 4',
      output: '0',
      explanation: 'All pairs already have diff=0.',
    },
    {
      input: 'nums = [0,1,2,3,4,3], k = 4',
      output: '1',
      explanation:
        'Pairs: (0,3)|diff=3, (1,4)|diff=3, (2,3)|diff=1. Change one element in the (2,3) pair to achieve diff=3. Cost: 1.',
    },
  ],
  hints: [
    'Level 1: For each symmetric pair (a, b) = (nums[i], nums[n-1-i]), D = |a-b| is the current diff. M = max(a, k-a, b, k-b) is the max diff achievable in one change.',
    'Level 2: At target diff d: cost 0 if D==d; cost 1 if d<=M; cost 2 otherwise. To minimize total cost, maximize pairs with cost 0 or 1.',
    'Level 3: Use a frequency array for D values and a difference array to track how many pairs have M >= d. For each d, pairs with cost 0 = freq_D[d], pairs with cost 1 = cnt_M[d] - freq_D[d]. Answer = 2*P - max over d of (freq_D[d] + cnt_M[d]).',
  ],
  functionName: 'minChanges',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minChanges(nums, k) {
  const n = nums.length;
  const P = n / 2;
  const freqD = new Array(k + 2).fill(0);
  const diffM = new Array(k + 2).fill(0);

  for (let i = 0; i < P; i++) {
    const a = nums[i], b = nums[n - 1 - i];
    const D = Math.abs(a - b);
    const M = Math.max(a, k - a, b, k - b);
    freqD[D]++;
    diffM[0]++;
    if (M + 1 <= k + 1) diffM[M + 1]--;
  }

  let cntM = 0, best = 0;
  for (let d = 0; d <= k; d++) {
    cntM += diffM[d];
    const score = freqD[d] + cntM;
    if (score > best) best = score;
  }
  return 2 * P - best;
}`,
    typescript: `function minChanges(nums: number[], k: number): number {
  const n = nums.length;
  const P = n / 2;
  const freqD = new Array(k + 2).fill(0);
  const diffM = new Array(k + 2).fill(0);

  for (let i = 0; i < P; i++) {
    const a = nums[i]!, b = nums[n - 1 - i]!;
    const D = Math.abs(a - b);
    const M = Math.max(a, k - a, b, k - b);
    freqD[D]++;
    diffM[0]++;
    if (M + 1 <= k + 1) diffM[M + 1]--;
  }

  let cntM = 0, best = 0;
  for (let d = 0; d <= k; d++) {
    cntM += diffM[d]!;
    const score = (freqD[d] ?? 0) + cntM;
    if (score > best) best = score;
  }
  return 2 * P - best;
}`,
    python: `def minChanges(nums, k):
    n = len(nums)
    P = n // 2
    freq_d = [0] * (k + 2)
    diff_m = [0] * (k + 2)

    for i in range(P):
        a, b = nums[i], nums[n - 1 - i]
        D = abs(a - b)
        M = max(a, k - a, b, k - b)
        freq_d[D] += 1
        diff_m[0] += 1
        if M + 1 <= k + 1:
            diff_m[M + 1] -= 1

    cnt_m = 0
    best = 0
    for d in range(k + 1):
        cnt_m += diff_m[d]
        score = freq_d[d] + cnt_m
        if score > best:
            best = score
    return 2 * P - best`,
  },
  visibleTests: [
    { args: [[1, 0, 1, 2, 4, 3], 4], expected: 2 },
    { args: [[3, 3, 3, 3], 4], expected: 0 },
    { args: [[0, 1, 2, 3, 4, 3], 4], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 4], 4], expected: 0 },
    { args: [[0, 0], 4], expected: 0 },
    { args: [[0, 2, 2, 4], 4], expected: 1 },
    { args: [[1, 4, 2, 3], 5], expected: 0 },
    { args: [[0, 0, 0, 0], 1], expected: 0 },
    { args: [[1, 0], 2], expected: 0 },
    { args: [[0, 2], 2], expected: 0 },
    { args: [[1, 1, 1, 1], 3], expected: 0 },
  ],
};
