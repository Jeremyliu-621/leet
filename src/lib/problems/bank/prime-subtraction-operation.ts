import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-subtraction-operation',
  title: 'Prime Subtraction Operation',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'binary-search'],
  description: `Given a 0-indexed integer array \`nums\` of length \`n\`. You may apply the following operation any number of times:

- Choose an index \`i\` that has not been chosen before, and a prime number \`p\` such that \`nums[i] - p > 0\`.
- Subtract \`p\` from \`nums[i]\`.

Return \`true\` if you can make \`nums\` **strictly increasing** using the above operation, and \`false\` otherwise.

**Examples:**
- \`nums = [4,9,6,10]\` → **true** (subtract 3 from 9 → 6; subtract 1... wait: subtract 2 from 9 to get 7; subtract nothing from 6 to get... actually: leave 4, subtract 2 from 9→7, subtract 2 from 6... no, use the greedy: 4 stays 4; subtract 7 from 9→2; 6→5; subtract 5 from 10→5. Result: [4,2,5,5] not strictly increasing. Better: 4 stays 4; subtract 2 from 9→7 no wait, we want each element after subtraction to be greater than the previous. 4→4, 9→7 (sub 2), 6→5 (sub 1... 1 not prime, sub nothing: 6>7? no). Greedy: for each element find the largest prime ≤ element − prev − 1.)
- \`nums = [6,8,11,12]\` → **true**
- \`nums = [5,8,3]\` → **false** (3 cannot be made greater than 8)`,
  constraints: [
    '1 ≤ nums.length ≤ 1000',
    '1 ≤ nums[i] ≤ 1000',
  ],
  examples: [
    {
      input: 'nums = [4,9,6,10]',
      output: 'true',
      explanation:
        'Use the sieve to get all primes up to 1000. Maintain prev = 0. For 4: largest prime ≤ 4−0−1=3 is 3; 4−3=1 > 0 = prev. prev=1. For 9: largest prime ≤ 9−1−1=7 is 7; 9−7=2 > 1. prev=2. For 6: largest prime ≤ 6−2−1=3 is 3; 6−3=3 > 2. prev=3. For 10: largest prime ≤ 10−3−1=6 is 5; 10−5=5 > 3. prev=5. Strictly increasing: [1,2,3,5].',
    },
    {
      input: 'nums = [6,8,11,12]',
      output: 'true',
      explanation: 'No subtraction needed — the array is already strictly increasing.',
    },
    {
      input: 'nums = [5,8,3]',
      output: 'false',
      explanation: '3 < 8 and subtracting a prime from 3 requires nums[i] − p > 0, which means at most 3−2=1. But 1 < 8, so no valid arrangement exists.',
    },
  ],
  hints: [
    'Precompute all primes up to 1000 with the Sieve of Eratosthenes and store them in a sorted array. You will binary-search this array for each element.',
    'Iterate through `nums` maintaining `prev = 0` (the effective value of the previous element). For each `nums[i]`, find the **largest** prime `p` satisfying `p ≤ nums[i] − prev − 1` using binary search. If such a prime exists, subtract it: `nums[i] − p` becomes the new effective value. If even without any subtraction `nums[i] > prev`, keep `nums[i]` as-is.',
    'If after the best possible subtraction the effective value of `nums[i]` is still `≤ prev`, return `false` immediately. If you exhaust all elements without failure, return `true`. The greedy choice (largest valid prime) is always optimal because it leaves the most room for subsequent elements.',
  ],
  functionName: 'primeSubOperation',
  params: ['nums'],
  starterCode: {
    javascript: `function primeSubOperation(nums) {
  // Return true if nums can be made strictly increasing
  // by subtracting a prime from each chosen element.
}`,
    python: `def primeSubOperation(nums: list[int]) -> bool:
    # Return True if nums can be made strictly increasing
    # by subtracting a prime from each chosen element.
    pass`,
  },
  visibleTests: [
    { args: [[4, 9, 6, 10]], expected: true },
    { args: [[6, 8, 11, 12]], expected: true },
    { args: [[5, 8, 3]], expected: false },
    { args: [[1, 2, 3, 4]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2, 2]], expected: false },
    { args: [[1, 1]], expected: false },
    { args: [[10, 7, 4]], expected: false },
    { args: [[3, 3]], expected: true },
    { args: [[2, 1]], expected: false },
    { args: [[4, 3, 10, 9, 8]], expected: true },
    { args: [[2, 3, 4, 5, 6]], expected: true },
  ],
};
