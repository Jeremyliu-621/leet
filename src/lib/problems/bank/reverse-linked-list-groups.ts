import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-linked-list-groups',
  title: 'Reverse Linked List in Groups of K',
  difficulty: 'hard',
  tags: ['linked-list', 'two-pointers'],
  description: `Given a linked list represented as an array and an integer \`k\`, reverse every **k consecutive nodes** in the list. If the remaining nodes at the end are fewer than \`k\`, leave them as-is.

The input is a 1D integer array (the linked list values in order) and an integer \`k\`. Return the resulting array after performing the group reversals.

**Example:** \`[1, 2, 3, 4, 5]\` with k=2 → \`[2, 1, 4, 3, 5]\`
- Group 1: [1,2] → reversed → [2,1]
- Group 2: [3,4] → reversed → [4,3]
- Tail: [5] → unchanged → [5]

**Example:** \`[1, 2, 3, 4, 5]\` with k=3 → \`[3, 2, 1, 4, 5]\`
- Group 1: [1,2,3] → reversed → [3,2,1]
- Tail: [4,5] (fewer than k) → unchanged`,
  constraints: [
    '1 <= head.length <= 5000',
    '0 <= head[i] <= 1000',
    '1 <= k <= head.length',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5], k = 2',
      output: '[2,1,4,3,5]',
      explanation: 'Reverse groups: [1,2]→[2,1], [3,4]→[4,3], [5] unchanged.',
    },
    {
      input: 'head = [1,2,3,4,5], k = 3',
      output: '[3,2,1,4,5]',
      explanation: 'Reverse groups: [1,2,3]→[3,2,1], [4,5] has only 2 < k=3, so unchanged.',
    },
    {
      input: 'head = [1,2,3,4,5], k = 1',
      output: '[1,2,3,4,5]',
      explanation: 'Groups of 1 — no change.',
    },
  ],
  hints: [
    'Process the array in chunks of `k`. For each chunk starting at index `i`, check if there are at least `k` elements remaining. If yes, reverse `arr[i..i+k-1]` in place.',
    'A clean slice-and-reverse approach: `result = []; for i in range(0, n, k): chunk = head[i:i+k]; result += (reversed chunk if len(chunk)==k else chunk)`.',
    `\`\`\`js\nfunction reverseKGroup(head, k) {\n  const arr = [...head];\n  const n = arr.length;\n  for (let i = 0; i + k <= n; i += k) {\n    let lo = i, hi = i + k - 1;\n    while (lo < hi) { [arr[lo], arr[hi]] = [arr[hi], arr[lo]]; lo++; hi--; }\n  }\n  return arr;\n}\n\`\`\``,
  ],
  functionName: 'reverseKGroup',
  params: ['head', 'k'],
  starterCode: {
    javascript: `function reverseKGroup(head, k) {\n\n}`,
    typescript: `function reverseKGroup(head: number[], k: number): number[] {\n\n}`,
    python: `def reverseKGroup(head: list[int], k: int) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [2, 1, 4, 3, 5] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5, 4, 3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2], 2], expected: [2, 1] },
    { args: [[1, 2, 3], 2], expected: [2, 1, 3] },
    { args: [[1, 2, 3, 4], 2], expected: [2, 1, 4, 3] },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: [3, 2, 1, 6, 5, 4] },
    { args: [[5, 4, 3, 2, 1], 2], expected: [4, 5, 2, 3, 1] },
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [3, 2, 1, 6, 5, 4, 7] },
    { args: [[0, 0, 0, 0], 2], expected: [0, 0, 0, 0] },
  ],
};
