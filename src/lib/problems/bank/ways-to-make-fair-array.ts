import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-make-fair-array',
  title: 'Ways to Make a Fair Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\`. You must **remove exactly one element** from the array.

The resulting array is **fair** if the sum of the odd-indexed values equals the sum of the even-indexed values (0-indexed).

Return the **number of indices** you can remove to make \`nums\` fair.

**Key observation:** when you remove index \`i\`, elements to the left keep their parities, but elements to the right have their parities **flipped** (even becomes odd, odd becomes even).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,1,6,4]',
      output: '1',
      explanation: 'Remove index 1 (value 1): [2,6,4]. Even-indexed sum = 2+4 = 6. Odd-indexed sum = 6. Fair!',
    },
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'Removing any index gives [1,1], which is always fair.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No removal makes the array fair.',
    },
  ],
  hints: [
    'Precompute total even-indexed sum and total odd-indexed sum. When you remove index i, the left part (indices 0..i-1) is unchanged. The right part (indices i+1..n-1) has parities flipped.',
    'New even sum = (even sum of elements before i) + (odd sum of elements after i). New odd sum = (odd sum before i) + (even sum after i). Check if they\'re equal.',
    'Use running prefix sums. `let [eS,oS]=[0,0]; for(let i=0;i<n;i++) i%2?oS+=a[i]:eS+=a[i]; let [pE,pO]=[0,0],res=0; for(let i=0;i<n;i++){const sE=eS-pE-(i%2?0:a[i]),sO=oS-pO-(i%2?a[i]:0);if(pE+sO===pO+sE)res++;i%2?pO+=a[i]:pE+=a[i];} return res;`',
  ],
  functionName: 'waysToMakeFair',
  params: ['nums'],
  starterCode: {
    javascript: 'function waysToMakeFair(nums) {\n  \n}\n',
    python: 'def waysToMakeFair(nums: list[int]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 6, 4]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, 2, 1]], expected: 2 },
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[4, 4, 4, 4]], expected: 0 },
    { args: [[1, 3, 2, 4, 5]], expected: 1 },
    { args: [[2, 1, 6, 4, 3, 5]], expected: 0 },
  ],
};
