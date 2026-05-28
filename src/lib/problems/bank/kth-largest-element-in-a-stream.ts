import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-largest-element-in-a-stream',
  title: 'Kth Largest Element in a Stream',
  difficulty: 'easy',
  tags: ['heap', 'arrays'],
  description: `Design a class to find the \`k\`th largest element in a stream. Note that it is the \`k\`th largest element in **sorted order**, not the \`k\`th distinct element.

Implement \`KthLargest\`:

- \`KthLargest(int k, int[] nums)\` — initializes the object with the integer \`k\` and the stream of integers \`nums\`.
- \`int add(int val)\` — appends the integer \`val\` to the stream and returns the element representing the \`k\`th largest element in the stream.

Presented in the **operations/args** format. The constructor args are \`[k, [nums...]]\`.`,
  constraints: [
    '1 <= k <= 10^4',
    '0 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= val <= 10^4',
    'At most 10^4 calls will be made to add.',
    'It is guaranteed that there will be at least k elements in the array when you search for the kth element.',
  ],
  examples: [
    {
      input:
        'ops = ["KthLargest","add","add","add","add","add"]\n' +
        'args = [[3,[4,5,8,2]],[3],[5],[10],[9],[4]]',
      output: '[null,4,5,5,8,8]',
      explanation:
        'After init with k=3 and [4,5,8,2]: stream=[2,4,5,8]. add(3)→4, add(5)→5 (stream 3rd=5), add(10)→5 (3rd of [2,3,4,5,5,8,10]), add(9)→8, add(4)→8.',
    },
  ],
  hints: [
    'Maintain a min-heap of size k.',
    'When adding a new element: push it to the heap; if heap size exceeds k, pop the minimum.',
    'The kth largest is always the heap top (minimum of the top-k elements).',
  ],
  functionName: 'kthLargest',
  params: ['operations', 'args'],
  starterCode: {
    javascript: 'function kthLargest(operations, args) {\n  \n}\n',
    typescript: "function kthLargest(operations: string[], args: ((number | number[])[] | number[])[]): (null | number)[] {\n  \n}",

    python: 'def kthLargest(operations, args):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['KthLargest', 'add', 'add', 'add', 'add', 'add'],
        [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]],
      ],
      expected: [null, 4, 5, 5, 8, 8],
    },
    {
      args: [
        ['KthLargest', 'add', 'add', 'add'],
        [[1, []], [1], [2], [3]],
      ],
      expected: [null, 1, 2, 3],
    },
    {
      args: [
        ['KthLargest', 'add', 'add'],
        [[2, [0]], [-1], [1]],
      ],
      expected: [null, -1, 0],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['KthLargest', 'add', 'add', 'add', 'add'],
        [[3, [5, 10, 11]], [6], [7], [8], [9]],
      ],
      expected: [null, 6, 7, 8, 9],
    },
    {
      args: [
        ['KthLargest', 'add'],
        [[1, [1, 2, 3]], [4]],
      ],
      expected: [null, 4],
    },
    {
      args: [
        ['KthLargest', 'add', 'add', 'add'],
        [[2, [1, 2]], [3], [4], [5]],
      ],
      expected: [null, 2, 3, 4],
    },
  ],
};
