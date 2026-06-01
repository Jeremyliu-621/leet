import type { Problem } from '../types';

export const problem: Problem = {
  id: 'mark-elements-on-array-by-performing-queries',
  title: 'Mark Elements on Array by Performing Queries',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** array \`nums\` of size \`n\` consisting of positive integers.

You are also given a 2D array \`queries\` of size \`m\` where \`queries[i] = [index_i, k_i]\`.

Initially, all elements of the array are **unmarked**.

You need to apply \`m\` queries to the array in order, where in the \`i\`th query you do the following:
1. Mark the element at index \`index_i\` if it is not already marked.
2. Then mark \`k_i\` unmarked elements in the array with the **smallest** values. If multiple elements have the same value, mark those with the **smallest** indices. If fewer than \`k_i\` unmarked elements remain after step 1, mark all of them.

Return an array \`answer\` of size \`m\` where \`answer[i]\` is the **sum of unmarked elements** in the array after the \`i\`th query.`,
  constraints: [
    'n == nums.length',
    '1 <= m <= n <= 10^5',
    '1 <= nums[i] <= 10^5',
    'queries.length == m',
    'queries[i].length == 2',
    '0 <= index_i <= n - 1',
    '0 <= k_i <= n',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1,2,3,1], queries = [[1,2],[3,3],[4,2]]',
      output: '[8,3,0]',
      explanation:
        'Query [1,2]: mark index 1 (val 2). Mark 2 smallest unmarked: index 0 (val 1) and index 3 (val 1). Sum of unmarked = 2+2+3+1=8. Query [3,3]: mark index 3 (already marked). Mark 3 smallest: index 6 (val 1), index 2 (val 2), index 4 (val 2). Sum=3. Query [4,2]: mark index 4 (already marked). Mark 2 smallest: index 5 (val 3). Sum=0.',
    },
    {
      input: 'nums = [1,4,2,3], queries = [[0,1]]',
      output: '[7]',
      explanation: 'Query [0,1]: mark index 0 (val 1). Mark 1 smallest unmarked: index 2 (val 2). Unmarked: indices 1 (4) and 3 (3). Sum = 7.',
    },
  ],
  hints: [
    'Level 1: Maintain a total sum starting as the sum of all elements. Track marked elements. For each query, subtract newly marked elements from the total.',
    'Level 2: Use a min-heap (priority queue) of (value, index) for all elements. For each query, first mark the specified index (if unmarked, subtract from total). Then pop k_i elements from the heap, skipping already-marked ones, subtracting each popped value from the total.',
    'Level 3: A simple boolean array `marked[]` suffices to track state. The heap may contain already-marked entries — just skip them when popping (lazy deletion).',
  ],
  functionName: 'unmarkedSumArray',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function unmarkedSumArray(nums, queries) {
  const n = nums.length;
  const marked = new Array(n).fill(false);
  let total = nums.reduce((a, b) => a + b, 0);
  const heap = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let ptr = 0;
  const ans = [];
  for (const [idx, k] of queries) {
    if (!marked[idx]) {
      marked[idx] = true;
      total -= nums[idx];
    }
    let remaining = k;
    while (remaining > 0 && ptr < n) {
      const [v, i] = heap[ptr];
      ptr++;
      if (!marked[i]) {
        marked[i] = true;
        total -= v;
        remaining--;
      }
    }
    ans.push(total);
  }
  return ans;
}`,
    typescript: `function unmarkedSumArray(nums: number[], queries: number[][]): number[] {
  const n = nums.length;
  const marked = new Array(n).fill(false);
  let total = nums.reduce((a, b) => a + b, 0);
  const heap = nums.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!);
  let ptr = 0;
  const ans: number[] = [];
  for (const q of queries) {
    const idx = q[0]!, k = q[1]!;
    if (!marked[idx]) {
      marked[idx] = true;
      total -= nums[idx]!;
    }
    let remaining = k;
    while (remaining > 0 && ptr < n) {
      const [v, i] = heap[ptr]!;
      ptr++;
      if (!marked[i!]) {
        marked[i!] = true;
        total -= v!;
        remaining--;
      }
    }
    ans.push(total);
  }
  return ans;
}`,
    python: `def unmarkedSumArray(nums, queries):
    n = len(nums)
    marked = [False] * n
    total = sum(nums)
    heap = sorted(range(n), key=lambda i: (nums[i], i))
    ptr = 0
    ans = []
    for idx, k in queries:
        if not marked[idx]:
            marked[idx] = True
            total -= nums[idx]
        remaining = k
        while remaining > 0 and ptr < n:
            i = heap[ptr]
            ptr += 1
            if not marked[i]:
                marked[i] = True
                total -= nums[i]
                remaining -= 1
        ans.append(total)
    return ans`,
  },
  visibleTests: [
    {
      args: [[1, 2, 2, 1, 2, 3, 1], [[1, 2], [3, 3], [4, 2]]],
      expected: [8, 3, 0],
    },
    {
      args: [[1, 4, 2, 3], [[0, 1]]],
      expected: [7],
    },
  ],
  hiddenTests: [
    {
      args: [[5], [[0, 0]]],
      expected: [0],
    },
    {
      args: [[1, 2, 3], [[0, 0], [1, 0], [2, 0]]],
      expected: [5, 3, 0],
    },
    {
      args: [[3, 1, 2], [[0, 1], [0, 1]]],
      expected: [2, 0],
    },
    {
      args: [[1, 2, 2, 1], [[1, 2], [0, 2]]],
      expected: [2, 0],
    },
    {
      args: [[2, 2, 2, 2], [[0, 1], [1, 1], [2, 1]]],
      expected: [4, 2, 0],
    },
    {
      args: [[1, 3, 2], [[2, 5]]],
      expected: [0],
    },
  ],
};
