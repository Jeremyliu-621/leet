import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-books-you-can-take',
  title: 'Maximum Number of Books You Can Take',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'dynamic-programming'],
  description: `You are given a 0-indexed integer array \`books\` where \`books[i]\` is the number of books in shelf \`i\`.

You want to take books from a **contiguous** section of shelves. From this section you must take books in a way such that the number of books taken from shelf \`i\` is **strictly less** than the number taken from shelf \`i+1\` for all valid \`i\`. The maximum you can take from each shelf \`i\` is \`books[i]\`.

Return the **maximum** number of books you can take from all the shelves.`,
  constraints: [
    '1 <= books.length <= 10^5',
    '0 <= books[i] <= 10^9',
  ],
  examples: [
    {
      input: 'books = [8,5,2,7,9]',
      output: '19',
      explanation:
        'Take books from shelves [1..4]: take 1 from shelf 1, 2 from shelf 2, 7 from shelf 3, 9 from shelf 4 → 1+2+7+9=19.',
    },
    {
      input: 'books = [7,0,3,4,5]',
      output: '12',
      explanation:
        'Take from shelves [2..4]: 3+4+5=12.',
    },
    {
      input: 'books = [8,2,3,7,3,4,0,1,4,3]',
      output: '13',
      explanation:
        'Best contiguous section gives 13 books with a valid strictly-increasing selection.',
    },
  ],
  hints: [
    'For each rightmost shelf `r`, the optimal amount to take from shelf `j ≤ r` is `min(books[j], cap)`, where `cap` starts at `books[r]` and decreases by 1 each step to the left. Stop when `cap` reaches 0.',
    'Brute force is O(n²): for each `r`, walk left accumulating `cap = min(books[j], cap-1)` until cap=0. This finds the best range ending at `r`.',
    'For O(n): use a monotonic stack. Maintain a stack of shelf indices with strictly increasing `books[i] - i`. When processing shelf `r`, pop indices `j` where `books[j] >= books[r] - (r-j)` (i.e., where `j` would not create a bottleneck). Use dp[j] (best total ending at j) to efficiently compute dp[r].',
  ],
  functionName: 'maximumBooks',
  params: ['books'],
  starterCode: {
    javascript: `function maximumBooks(books) {
  const n = books.length;
  const dp = new Array(n).fill(0);
  const stack = []; // indices with strictly increasing books[i]-i
  function freeSum(j, r) {
    const len = r - j; // j=-1 means len=r+1
    const cnt = Math.min(len, books[r]);
    return cnt * books[r] - cnt * (cnt - 1) / 2;
  }
  let ans = 0;
  for (let r = 0; r < n; r++) {
    while (stack.length && books[stack[stack.length-1]] - stack[stack.length-1] >= books[r] - r) stack.pop();
    dp[r] = stack.length === 0 ? freeSum(-1, r) : dp[stack[stack.length-1]] + freeSum(stack[stack.length-1], r);
    ans = Math.max(ans, dp[r]);
    stack.push(r);
  }
  return ans;
}`,
    typescript: `function maximumBooks(books: number[]): number {
  const n = books.length;
  const dp = new Array(n).fill(0) as number[];
  const stack: number[] = [];
  function freeSum(j: number, r: number): number {
    const len = r - j;
    const cnt = Math.min(len, books[r]!);
    return cnt * books[r]! - cnt * (cnt - 1) / 2;
  }
  let ans = 0;
  for (let r = 0; r < n; r++) {
    while (stack.length && books[stack[stack.length-1]!]! - stack[stack.length-1]! >= books[r]! - r) stack.pop();
    dp[r] = stack.length === 0 ? freeSum(-1, r) : dp[stack[stack.length-1]!]! + freeSum(stack[stack.length-1]!, r);
    ans = Math.max(ans, dp[r]!);
    stack.push(r);
  }
  return ans;
}`,
    python: `def maximumBooks(books):
    if hasattr(books, 'to_py'): books = books.to_py()
    books = [int(x) for x in books]
    n = len(books); dp = [0] * n; stack = []; ans = 0
    def free_sum(j, r):
        length = r - j
        cnt = min(length, books[r])
        return cnt * books[r] - cnt * (cnt - 1) // 2
    for r in range(n):
        while stack and books[stack[-1]] - stack[-1] >= books[r] - r: stack.pop()
        dp[r] = free_sum(-1, r) if not stack else dp[stack[-1]] + free_sum(stack[-1], r)
        ans = max(ans, dp[r]); stack.append(r)
    return ans`,
  },
  visibleTests: [
    { args: [[8, 5, 2, 7, 9]], expected: 19 },
    { args: [[7, 0, 3, 4, 5]], expected: 12 },
    { args: [[8, 2, 3, 7, 3, 4, 0, 1, 4, 3]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[5, 5, 5]], expected: 12 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[10, 1, 10]], expected: 11 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[5, 4, 3, 2, 1]], expected: 7 },
    { args: [[0, 0, 5]], expected: 5 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 15 },
  ],
};
