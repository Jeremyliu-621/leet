import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-subarray-minimums',
  title: 'Sum of Subarray Minimums',
  difficulty: 'hard',
  tags: ['stack', 'arrays'],
  description: `Given an array of integers \`arr\`, return the **sum of \`min(b)\`** for every contiguous subarray \`b\` of \`arr\`, modulo \`10^9 + 7\`.

**Brute force** (O(n²)) sums the minimum of every pair \`[i,j]\`. The **optimal approach** (O(n)) asks: for each element \`arr[i]\`, how many subarrays have it as their minimum?

Use a **monotonic stack** to compute, for each index \`i\`:
- \`left[i]\`: the distance to the nearest element strictly smaller than \`arr[i]\` to the left (or the start of the array).
- \`right[i]\`: the distance to the nearest element **less than or equal to** \`arr[i]\` to the right (or the end of the array).

Then \`arr[i]\` contributes \`arr[i] * left[i] * right[i]\` to the answer. The left/right asymmetry avoids double-counting duplicates.`,
  constraints: [
    '1 <= arr.length <= 3 * 10^4',
    '1 <= arr[i] <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'arr = [3,1,2,4]',
      output: '17',
      explanation: 'Subarrays: [3]=3, [1]=1, [2]=2, [4]=4, [3,1]=1, [1,2]=1, [2,4]=2, [3,1,2]=1, [1,2,4]=1, [3,1,2,4]=1. Sum = 17.',
    },
    {
      input: 'arr = [11,81,94,43,3]',
      output: '444',
      explanation: 'Summing the minimum of every contiguous subarray gives 444.',
    },
  ],
  hints: [
    'The brute-force O(n²) loops over all [i,j] pairs and sums up minimums. To get O(n), ask instead: *how many subarrays have `arr[i]` as their minimum?* For each `i`, this count equals `L * R` where `L` is how far left we can extend while `arr[i]` stays the minimum, and `R` is how far right.',
    'Use a **monotonic increasing stack** to compute left boundaries: for each `i`, pop the stack while `stack.top >= arr[i]`. The distance from `i` to the new top (or start of array) is `left[i]`. Repeat from the right for `right[i]`, using `>` instead of `>=` on one side to handle duplicates without double-counting.',
    '`const MOD = 1_000_000_007; const n = arr.length; const left = new Array(n).fill(0); const right = new Array(n).fill(0); const stk = []; for (let i = 0; i < n; i++) { while (stk.length && arr[stk[stk.length-1]] >= arr[i]) stk.pop(); left[i] = stk.length ? i - stk[stk.length-1] : i + 1; stk.push(i); } stk.length = 0; for (let i = n-1; i >= 0; i--) { while (stk.length && arr[stk[stk.length-1]] > arr[i]) stk.pop(); right[i] = stk.length ? stk[stk.length-1] - i : n - i; stk.push(i); } let ans = 0; for (let i = 0; i < n; i++) ans = (ans + arr[i] * left[i] * right[i]) % MOD; return ans;`',
  ],
  functionName: 'sumSubarrayMins',
  params: ['arr'],
  starterCode: {
    javascript: 'function sumSubarrayMins(arr) {\n  // your code here\n}\n',
    typescript: "function sumSubarrayMins(arr: number[]): number {\n  // your code here\n}",

    python: 'def sumSubarrayMins(arr: list[int]) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 2, 4]], expected: 17 },
    { args: [[11, 81, 94, 43, 3]], expected: 444 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[3, 3]], expected: 9 },
    { args: [[1, 2, 1]], expected: 7 },
    { args: [[2, 3, 4, 5, 6]], expected: 50 },
  ],
};
