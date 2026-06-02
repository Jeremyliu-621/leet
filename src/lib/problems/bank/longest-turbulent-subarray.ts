import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-turbulent-subarray',
  title: 'Longest Turbulent Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'dynamic-programming'],
  description: `Given an integer array \`arr\`, return the **length** of a maximum size turbulent subarray of \`arr\`.

A subarray is **turbulent** if the comparison sign alternates between consecutive elements. The array \`[a, b, c]\` is turbulent if \`(a > b < c)\` or \`(a < b > c)\`. An array of length 1 is trivially turbulent.`,
  constraints: [
    '1 <= arr.length <= 4 * 10^4',
    '0 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [9,4,2,10,7,8,8,1,9]',
      output: '5',
      explanation:
        'The longest turbulent subarray is [4,2,10,7,8] (length 5), with signs <, >, <, >.',
    },
    {
      input: 'arr = [4,8,12,16]',
      output: '2',
      explanation:
        'The array is monotonically increasing so the longest turbulent subarray has length 2.',
    },
    {
      input: 'arr = [100]',
      output: '1',
      explanation: 'A single element is trivially turbulent.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window. Track the current turbulent subarray length. When the alternating comparison pattern breaks, reset the window.',
    'Level 2: Compare each adjacent pair: if arr[i] > arr[i+1], sign is +1; if less, -1; if equal, 0. The current window breaks when sign is 0 (equal elements) or the sign does not alternate.',
    'Level 3: Track prev sign and current run length. When arr[i] == arr[i+1], reset length to 1 and prev to 0. When sign equals prev (no alternation), reset to 2 and update prev. Otherwise extend and update prev.',
  ],
  functionName: 'maxTurbulenceSize',
  params: ['arr'],
  starterCode: {
    javascript: `function maxTurbulenceSize(arr) {
  let up = 1, down = 1, ans = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) { up = down + 1; down = 1; }
    else if (arr[i] < arr[i-1]) { down = up + 1; up = 1; }
    else { up = 1; down = 1; }
    ans = Math.max(ans, up, down);
  }
  return ans;
}`,
    typescript: `function maxTurbulenceSize(arr: number[]): number {
  let up = 1, down = 1, ans = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) { up = down + 1; down = 1; }
    else if (arr[i] < arr[i-1]) { down = up + 1; up = 1; }
    else { up = 1; down = 1; }
    ans = Math.max(ans, up, down);
  }
  return ans;
}`,
    python: `def maxTurbulenceSize(arr):
    up = down = ans = 1
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]: up, down = down + 1, 1
        elif arr[i] < arr[i-1]: down, up = up + 1, 1
        else: up = down = 1
        ans = max(ans, up, down)
    return ans`,
  },
  visibleTests: [
    { args: [[9, 4, 2, 10, 7, 8, 8, 1, 9]], expected: 5 },
    { args: [[4, 8, 12, 16]], expected: 2 },
    { args: [[100]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 4 },
    { args: [[0, 8, 45, 88, 48, 68, 28, 55, 17, 24]], expected: 8 },
    { args: [[2, 0, 4]], expected: 3 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[9, 9]], expected: 1 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 5 },
  ],
};
