import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-heights-of-a-mountain',
  title: 'Maximum Sum of Heights of a Mountain',
  difficulty: 'medium',
  tags: ['arrays', 'stack', 'math'],
  description: `You are given a **0-indexed** array \`heights\` of \`n\` integers.

Define the **mountain sum** at index \`i\` as:

- Start with \`heights[i]\`.
- Going left from \`i\`, add \`min(heights[k], prev)\` for each step, where \`prev\` starts at \`heights[i]\` and tracks the minimum so far.
- Going right from \`i\`, do the same.

Formally, for peak index \`p\`, the mountain sum is:
\`\`\`
sum = heights[p]
     + Σ min(heights[0..i]) from i=p-1 down to 0  (non-increasing constraint)
     + Σ min(heights[i..n-1]) from i=p+1 to n-1    (non-increasing constraint)
\`\`\`

Return the **maximum mountain sum** over all possible peak indices.`,
  constraints: [
    '1 <= heights.length <= 10^5',
    '1 <= heights[i] <= 10^9',
  ],
  examples: [
    {
      input: 'heights = [5,3,4,1,1]',
      output: '13',
      explanation: 'Peak at index 2 (height 4): left = min(3,4)+min(5,3)=3+3=6, right = min(1,4)+min(1,1)=1+1=2. But peak at index 0 (height 5): right = 3+3+1+1=8, total=5+8=13. Maximum is 13.',
    },
    {
      input: 'heights = [6,1,3,2,5,4]',
      output: '15',
      explanation: 'Peak at index 4 (height 5): left contributions = min(2,5)+min(3,2)+min(1,2)+min(6,1) = 2+2+1+1=6, right = min(4,5)=4. Total = 5+6+4 = 15.',
    },
  ],
  hints: [
    'For each index as peak, compute the non-increasing contribution from the left and from the right.',
    'Use a monotonic stack to compute left[i] = total contribution when i is the peak, considering all left elements non-increasingly capped.',
    'Similarly compute right[i] from the right side. Answer = max(left[i] + right[i] - heights[i]).',
  ],
  functionName: 'maximumSumOfHeights',
  params: ['heights'],
  starterCode: {
    javascript: `function maximumSumOfHeights(heights) {
  const n = heights.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const stack = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop();
      total -= heights[top] * (top - (stack.length ? stack[stack.length - 1] : -1));
    }
    const j = stack.length ? stack[stack.length - 1] : -1;
    total += heights[i] * (i - j);
    left[i] = total;
    stack.push(i);
  }
  stack.length = 0;
  total = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop();
      total -= heights[top] * ((stack.length ? stack[stack.length - 1] : n) - top);
    }
    const j = stack.length ? stack[stack.length - 1] : n;
    total += heights[i] * (j - i);
    right[i] = total;
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) ans = Math.max(ans, left[i] + right[i] - heights[i]);
  return ans;
}`,
    typescript: `function maximumSumOfHeights(heights: number[]): number {
  const n = heights.length;
  const left = new Array<number>(n).fill(0);
  const right = new Array<number>(n).fill(0);
  const stack: number[] = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]!]! > heights[i]!) {
      const top = stack.pop()!;
      total -= heights[top]! * (top - (stack.length ? stack[stack.length - 1]! : -1));
    }
    const j = stack.length ? stack[stack.length - 1]! : -1;
    total += heights[i]! * (i - j);
    left[i] = total;
    stack.push(i);
  }
  stack.length = 0;
  total = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]!]! > heights[i]!) {
      const top = stack.pop()!;
      total -= heights[top]! * ((stack.length ? stack[stack.length - 1]! : n) - top);
    }
    const j = stack.length ? stack[stack.length - 1]! : n;
    total += heights[i]! * (j - i);
    right[i] = total;
    stack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) ans = Math.max(ans, left[i]! + right[i]! - heights[i]!);
  return ans;
}`,
    python: `def maximumSumOfHeights(heights: list[int]) -> int:
    n = len(heights)
    left = [0] * n
    right = [0] * n
    stack = []
    total = 0
    for i in range(n):
        while stack and heights[stack[-1]] > heights[i]:
            top = stack.pop()
            total -= heights[top] * (top - (stack[-1] if stack else -1))
        j = stack[-1] if stack else -1
        total += heights[i] * (i - j)
        left[i] = total
        stack.append(i)
    stack.clear()
    total = 0
    for i in range(n - 1, -1, -1):
        while stack and heights[stack[-1]] > heights[i]:
            top = stack.pop()
            total -= heights[top] * ((stack[-1] if stack else n) - top)
        j = stack[-1] if stack else n
        total += heights[i] * (j - i)
        right[i] = total
        stack.append(i)
    return max(left[i] + right[i] - heights[i] for i in range(n))`,
  },
  visibleTests: [
    { args: [[5, 3, 4, 1, 1]], expected: 13 },
    { args: [[6, 1, 3, 2, 5, 4]], expected: 15 },
    { args: [[1]], expected: 1 },
    { args: [[1, 5, 1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[10, 1, 2, 3, 10]], expected: 17 },
    { args: [[1, 5, 3, 4, 2, 7, 6]], expected: 22 },
    { args: [[3, 3, 3, 3, 3]], expected: 15 },
    { args: [[10, 10, 10]], expected: 30 },
    { args: [[5, 10, 15, 10, 5]], expected: 45 },
    { args: [[1, 5, 2, 5, 6, 4, 7, 3, 4, 5]], expected: 33 },
  ],
};
