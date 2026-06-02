import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-removal',
  title: 'Palindrome Removal',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given an integer array \`arr\`, in one step you can select a **palindromic subarray** \`arr[i], arr[i+1], ..., arr[j]\` where \`i <= j\`, and remove that subarray from the array. After removing a subarray, the elements on the left and right of that subarray move to fill the gap.

Return the minimum number of steps to remove all elements from the array.`,
  constraints: [
    '1 <= arr.length <= 100',
    '1 <= arr[i] <= 20',
  ],
  examples: [
    {
      input: 'arr = [1,2]',
      output: '2',
      explanation: 'Remove 1 and remove 2, each as a single-element (palindromic) subarray.',
    },
    {
      input: 'arr = [1,3,4,1,5]',
      output: '3',
      explanation: 'Remove [4] in step 1, then [1,3,1] in step 2, then [5] in step 3.',
    },
    {
      input: 'arr = [1,2,1,2,1]',
      output: '1',
      explanation: 'The whole array [1,2,1,2,1] is itself a palindrome, remove it in one step.',
    },
  ],
  hints: [
    'Level 1: Try interval DP: dp[i][j] = min steps to remove arr[i..j]. Base: dp[i][i] = 1. Build up from shorter to longer intervals.',
    'Level 2: For dp[i][j]: (1) remove arr[j] alone: dp[i][j-1] + 1. (2) If arr[i]==arr[j]: dp[i][j] = dp[i+1][j-1] (the equal pair can be removed in the same step as the inner subarray, extending any palindrome). (3) For any k where arr[k]==arr[j]: dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j-1]).',
    'Level 3: O(n³) DP: for each length l=2..n, for each start i with j=i+l-1: dp[i][j] = dp[i][j-1]+1. If arr[i]==arr[j]: dp[i][j]=min(dp[i][j], i+1>j-1 ? 1 : dp[i+1][j-1]). For k=i..j-2 where arr[k]==arr[j]: dp[i][j]=min(dp[i][j], dp[i][k]+(k+1>j-1 ? 0 : dp[k+1][j-1])). Return dp[0][n-1].',
  ],
  functionName: 'minimumMoves',
  params: ['arr'],
  starterCode: {
    javascript: `function minimumMoves(arr) {

}`,
    typescript: `function minimumMoves(arr: number[]): number {

}`,
    python: `def minimumMoves(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 3, 4, 1, 5]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[1, 3, 4, 1]], expected: 2 },
    { args: [[2, 1, 1, 2]], expected: 1 },
    { args: [[1, 1, 2, 2, 1, 1]], expected: 1 },
  ],
};
