import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-of-minimum-for-every-window-size',
  title: 'Maximum of Minimum for Every Window Size',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`arr\` of size \`n\`, for each window size \`k\` from \`1\` to \`n\`, find the **maximum** of the **minimums** of all windows (contiguous subarrays) of that size.

Return an array \`ans\` of length \`n\` where \`ans[k-1]\` is the maximum of the minimum values over all contiguous subarrays of length \`k\`.

**Example:** For \`arr = [10, 20, 30]\`:
- Windows of size 1: [10], [20], [30] → minimums are 10,20,30 → max = 30
- Windows of size 2: [10,20], [20,30] → minimums are 10,20 → max = 20
- Windows of size 3: [10,20,30] → minimum is 10 → max = 10
- Answer: [30, 20, 10]`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^6',
  ],
  examples: [
    {
      input: 'arr = [10,20,30,50,10,70,30]',
      output: '[70,30,20,10,10,10,10]',
      explanation:
        'For k=1, each element is its own minimum; max is 70. For k=2, max of window mins is 30 (window [50,10] has min 10, [30,50] has min 30). For k=3, the max window-min is 20. And so on.',
    },
    {
      input: 'arr = [10,20,30]',
      output: '[30,20,10]',
      explanation: 'Window size 1: max of [10,20,30]=30. Size 2: max of mins([10,20],[20,30])=max(10,20)=20. Size 3: min([10,20,30])=10.',
    },
    {
      input: 'arr = [1]',
      output: '[1]',
      explanation: 'Single element: only window of size 1, minimum and maximum are both 1.',
    },
  ],
  hints: [
    'For each element arr[i], use a monotone stack to find left[i] (index of nearest smaller element to the left) and right[i] (index of nearest smaller or equal element to the right). The element arr[i] is the minimum of all windows that start after left[i] and end before right[i].',
    'The maximum window size for which arr[i] is the minimum is span = right[i] - left[i] - 1. Set ans[span - 1] = max(ans[span - 1], arr[i]).',
    'After processing all elements, fill remaining gaps from right to left: ans[i] = max(ans[i], ans[i+1]). This handles window sizes where no element was assigned (the answer for a smaller window is at least as large as for a larger window).',
  ],
  functionName: 'maxOfMins',
  params: ['arr'],
  starterCode: {
    javascript: `function maxOfMins(arr) {
  const n = arr.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);
  // Monotone stack to find nearest smaller to the left
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
    left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  stack.length = 0;
  // Nearest smaller (or equal) to the right
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) stack.pop();
    right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
    stack.push(i);
  }
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const span = right[i] - left[i] - 1;
    ans[span - 1] = Math.max(ans[span - 1], arr[i]);
  }
  // Fill gaps: a larger window can only have a smaller or equal max-of-min
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }
  return ans;
}`,
    typescript: `function maxOfMins(arr: number[]): number[] {
  const n = arr.length;
  const left = new Array<number>(n).fill(-1);
  const right = new Array<number>(n).fill(n);
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]!]! >= arr[i]!) stack.pop();
    left[i] = stack.length > 0 ? stack[stack.length - 1]! : -1;
    stack.push(i);
  }
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]!]! > arr[i]!) stack.pop();
    right[i] = stack.length > 0 ? stack[stack.length - 1]! : n;
    stack.push(i);
  }
  const ans = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    const span = right[i]! - left[i]! - 1;
    ans[span - 1] = Math.max(ans[span - 1]!, arr[i]!);
  }
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i]!, ans[i + 1]!);
  }
  return ans;
}`,
    python: `def maxOfMins(arr: list[int]) -> list[int]:
    n = len(arr)
    left = [-1] * n
    right = [n] * n
    stack: list[int] = []
    for i in range(n):
        while stack and arr[stack[-1]] >= arr[i]:
            stack.pop()
        left[i] = stack[-1] if stack else -1
        stack.append(i)
    stack.clear()
    for i in range(n - 1, -1, -1):
        while stack and arr[stack[-1]] > arr[i]:
            stack.pop()
        right[i] = stack[-1] if stack else n
        stack.append(i)
    ans = [0] * n
    for i in range(n):
        span = right[i] - left[i] - 1
        ans[span - 1] = max(ans[span - 1], arr[i])
    for i in range(n - 2, -1, -1):
        ans[i] = max(ans[i], ans[i + 1])
    return ans`,
  },
  visibleTests: [
    { args: [[10, 20, 30, 50, 10, 70, 30]], expected: [70, 30, 20, 10, 10, 10, 10] },
    { args: [[10, 20, 30]], expected: [30, 20, 10] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[5, 5, 5, 5]], expected: [5, 5, 5, 5] },
    { args: [[3, 1, 2]], expected: [3, 1, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
    { args: [[5, 4, 3, 2, 1]], expected: [5, 4, 3, 2, 1] },
    { args: [[2, 3, 1, 4]], expected: [4, 2, 1, 1] },
    { args: [[1, 3, 2, 4, 1]], expected: [4, 2, 2, 1, 1] },
    { args: [[10, 10, 10]], expected: [10, 10, 10] },
    { args: [[3, 5, 4, 2, 6]], expected: [6, 4, 3, 2, 2] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[100, 1, 100]], expected: [100, 1, 1] },
  ],
};
