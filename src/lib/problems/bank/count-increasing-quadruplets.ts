import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-increasing-quadruplets',
  title: 'Count Increasing Quadruplets',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given a 0-indexed integer array \`nums\` of size \`n\` containing all integers from \`1\` to \`n\`, return the number of **increasing quadruplets**.

A quadruplet \`(i, j, k, l)\` is increasing if:
- \`0 <= i < j < k < l < n\`, and
- \`nums[i] < nums[k] < nums[j] < nums[l]\`

Note the unusual ordering: the *third* index (k) must hold a value **between** the values at the *second* (j) and *first* (i) positions, creating a "valley–peak" inversion pattern.`,
  constraints: [
    '4 <= n <= 4000',
    '1 <= nums[i] <= n',
    'All integers in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,4]',
      output: '1',
      explanation: '(i=0,j=1,k=2,l=3): nums[0]=1 < nums[2]=2 < nums[1]=3 < nums[3]=4. This is the only valid quadruplet.',
    },
    {
      input: 'nums = [1,3,2,4,5]',
      output: '2',
      explanation: 'Quadruplets (0,1,2,3) and (0,1,2,4): both satisfy 1 < 2 < 3 < [4 or 5].',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'In a sorted array, nums[k] < nums[j] requires k>j, which contradicts the fully increasing sequence — so no valid quadruplets exist.',
    },
  ],
  hints: [
    'For a quadruplet to exist, you need a "132-like" pattern between positions j and k: j < k but nums[j] > nums[k]. For each such inversion pair (j, k), count how many i < j have nums[i] < nums[k], and how many l > k have nums[l] > nums[j].',
    'For a fixed k, scan j from 0 to k−1 while maintaining a running counter of elements seen so far that are less than nums[k]. Whenever nums[j] > nums[k], you have leftCount valid "i" choices. Precompute the right counts with an O(n) scan per k.',
    'O(n²): `let ans=0; for(let k=1;k<n-1;k++){let lc=0;for(let j=0;j<k;j++){if(nums[j]>nums[k]){let rc=0;for(let l=k+1;l<n;l++)if(nums[l]>nums[j])rc++;ans+=lc*rc;}if(nums[j]<nums[k])lc++;}} return ans;`',
  ],
  functionName: 'countQuadruplets',
  params: ['nums'],
  starterCode: {
    javascript: 'function countQuadruplets(nums) {\n  \n}\n',
    python: 'def countQuadruplets(nums: list[int]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 4]], expected: 1 },
    { args: [[1, 3, 2, 4, 5]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 4, 3, 5]], expected: 1 },
    { args: [[1, 3, 2, 4, 3, 5]], expected: 4 },
    { args: [[2, 4, 3, 5]], expected: 1 },
    { args: [[1, 5, 2, 4, 3, 6]], expected: 5 },
    { args: [[4, 3, 2, 1, 5, 6, 7, 8]], expected: 0 },
  ],
};
