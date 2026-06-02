import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-in-sums-after-removal-of-elements',
  title: 'Minimum Difference in Sums After Removal of Elements',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`nums\` consisting of \`3 * n\` elements.

You are allowed to remove exactly \`n\` elements from the **first half** (\`nums[0..2n-1]\`) and exactly \`n\` elements from the **second half** (\`nums[n..3n-1]\`).

The **difference** is defined as:
- (sum of the **remaining** \`n\` elements from the first half) **minus** (sum of the **remaining** \`n\` elements from the second half)

Return the **minimum possible difference**.

**Note:** The first and second halves overlap at index \`n\`.`,
  constraints: [
    '`nums.length == 3 * n`',
    '`1 <= n <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [3,1,2]',
      output: '-1',
      explanation: 'n=1. First half: [3,1], second half: [1,2]. Remove 3 from first half → keep [1]. Remove 1 from second half → keep [2]. Difference = 1 - 2 = -1.',
    },
    {
      input: 'nums = [7,9,5,8,1,3]',
      output: '1',
      explanation: 'n=2. The optimal split: keep [5,7] from first half (sum=12) and keep [8,3] → no, keep elements with max sum from second half. Best: first-half keep sum 5+7=12... actually first half sum - second half sum = 1.',
    },
  ],
  hints: [
    'At any split point `m` (where `n ≤ m ≤ 2n`), we choose `n` elements from `nums[0..m]` with minimum sum, and `n` elements from `nums[m..3n-1]` with maximum sum.',
    'Build `prefMin[m]` = minimum sum of any `n` elements from `nums[0..m]` using a max-heap: slide a window and always keep the `n` smallest values seen so far.',
    'Similarly build `suffMax[m]` = maximum sum of any `n` elements from `nums[m..3n-1]` using a min-heap from right. The answer is `min over m from n to 2n of (prefMin[m] - suffMax[m+1])`.',
  ],
  functionName: 'minimumDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumDifference(nums) {
  const N = nums.length / 3 | 0;
  const prefMin = new Array(3 * N + 1), suffMax = new Array(3 * N + 1);
  const mxH = []; let ps = 0;
  const mxUp = i => { while (i > 0) { const p = (i-1)>>1; if (mxH[p] >= mxH[i]) break; [mxH[p],mxH[i]]=[mxH[i],mxH[p]]; i=p; } };
  const mxDn = () => { let i=0,n=mxH.length; while(true){let m=i,l=2*i+1,r=2*i+2;if(l<n&&mxH[l]>mxH[m])m=l;if(r<n&&mxH[r]>mxH[m])m=r;if(m===i)break;[mxH[m],mxH[i]]=[mxH[i],mxH[m]];i=m;} };
  for (let i = 0; i < 2*N; i++) {
    mxH.push(nums[i]); ps += nums[i]; mxUp(mxH.length-1);
    if (mxH.length > N) { ps -= mxH[0]; mxH[0] = mxH.pop(); mxDn(); }
    if (i+1 >= N) prefMin[i+1] = ps;
  }
  const mnH = []; let ss = 0;
  const mnUp = i => { while (i > 0) { const p = (i-1)>>1; if (mnH[p] <= mnH[i]) break; [mnH[p],mnH[i]]=[mnH[i],mnH[p]]; i=p; } };
  const mnDn = () => { let i=0,n=mnH.length; while(true){let m=i,l=2*i+1,r=2*i+2;if(l<n&&mnH[l]<mnH[m])m=l;if(r<n&&mnH[r]<mnH[m])m=r;if(m===i)break;[mnH[m],mnH[i]]=[mnH[i],mnH[m]];i=m;} };
  for (let i = 3*N-1; i >= N; i--) {
    mnH.push(nums[i]); ss += nums[i]; mnUp(mnH.length-1);
    if (mnH.length > N) { ss -= mnH[0]; mnH[0] = mnH.pop(); mnDn(); }
    if (i <= 2*N) suffMax[i] = ss;
  }
  let ans = Infinity;
  for (let m = N; m <= 2*N; m++) ans = Math.min(ans, prefMin[m] - suffMax[m]);
  return ans;
}`,
    typescript: `function minimumDifference(nums: number[]): number {
  const N = Math.floor(nums.length / 3);
  const prefMin: number[] = new Array(3 * N + 1), suffMax: number[] = new Array(3 * N + 1);
  const mxH: number[] = []; let ps = 0;
  const mxUp = (i: number) => { while (i > 0) { const p = (i-1)>>1; if (mxH[p]! >= mxH[i]!) break; [mxH[p],mxH[i]]=[mxH[i]!,mxH[p]!]; i=p; } };
  const mxDn = () => { let i=0,n=mxH.length; while(true){let m=i,l=2*i+1,r=2*i+2;if(l<n&&mxH[l]!>mxH[m]!)m=l;if(r<n&&mxH[r]!>mxH[m]!)m=r;if(m===i)break;[mxH[m],mxH[i]]=[mxH[i]!,mxH[m]!];i=m;} };
  for (let i = 0; i < 2*N; i++) {
    mxH.push(nums[i]!); ps += nums[i]!; mxUp(mxH.length-1);
    if (mxH.length > N) { ps -= mxH[0]!; mxH[0] = mxH.pop()!; mxDn(); }
    if (i+1 >= N) prefMin[i+1] = ps;
  }
  const mnH: number[] = []; let ss = 0;
  const mnUp = (i: number) => { while (i > 0) { const p = (i-1)>>1; if (mnH[p]! <= mnH[i]!) break; [mnH[p],mnH[i]]=[mnH[i]!,mnH[p]!]; i=p; } };
  const mnDn = () => { let i=0,n=mnH.length; while(true){let m=i,l=2*i+1,r=2*i+2;if(l<n&&mnH[l]!<mnH[m]!)m=l;if(r<n&&mnH[r]!<mnH[m]!)m=r;if(m===i)break;[mnH[m],mnH[i]]=[mnH[i]!,mnH[m]!];i=m;} };
  for (let i = 3*N-1; i >= N; i--) {
    mnH.push(nums[i]!); ss += nums[i]!; mnUp(mnH.length-1);
    if (mnH.length > N) { ss -= mnH[0]!; mnH[0] = mnH.pop()!; mnDn(); }
    if (i <= 2*N) suffMax[i] = ss;
  }
  let ans = Infinity;
  for (let m = N; m <= 2*N; m++) ans = Math.min(ans, prefMin[m]! - suffMax[m]!);
  return ans;
}`,
    python: `def minimumDifference(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    import heapq
    N = len(nums) // 3
    pref_min = [0] * (3 * N + 1); suff_max = [0] * (3 * N + 1)
    h = []; ps = 0
    for i in range(2 * N):
        heapq.heappush(h, -nums[i]); ps += nums[i]
        if len(h) > N: ps += heapq.heappop(h)
        if i + 1 >= N: pref_min[i + 1] = ps
    h = []; ss = 0
    for i in range(3 * N - 1, N - 1, -1):
        heapq.heappush(h, nums[i]); ss += nums[i]
        if len(h) > N: ss -= heapq.heappop(h)
        if i <= 2 * N: suff_max[i] = ss
    return min(pref_min[m] - suff_max[m] for m in range(N, 2 * N + 1))`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: -1 },
    { args: [[7, 9, 5, 8, 1, 3]], expected: 1 },
  ],
  hiddenTests: [
    // n=1: min 1 from [1,2], max 1 from [2,3] → 1-3=-2
    { args: [[1, 2, 3]], expected: -2 },
    // n=1: all equal → 3-3=0
    { args: [[3, 3, 3]], expected: 0 },
    // n=2: min 2 from [1..m], max 2 from [m..6] → best -8 at any split
    { args: [[1, 2, 3, 4, 5, 6]], expected: -8 },
    // n=2: m=3 → min 2 from [5,3,2]=5, max 2 from [4,1,6]=10 → diff=-5
    { args: [[5, 3, 2, 4, 1, 6]], expected: -5 },
    // n=3: all 1s → diff=0
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
    // n=3: at m=5 → min 3 from [10,1,1,10,1]=3, max 3 from [1,10,1,1]=12 → diff=-9
    { args: [[10, 1, 1, 10, 1, 1, 10, 1, 1]], expected: -9 },
  ],
};
