import type { Problem } from '../types';

const JS_PREAMBLE = `
function kthLargestRunner(k, nums, adds) {
  const obj = new KthLargest(k, nums);
  return adds.map(v => obj.add(v));
}
`.trim();

const PY_PREAMBLE = `
def kthLargestRunner(k, nums, adds):
    obj = KthLargest(k, list(nums))
    return [obj.add(v) for v in adds]
`.trim();

export const problem: Problem = {
  id: 'kth-largest-in-stream',
  title: 'Kth Largest Element in a Stream',
  difficulty: 'medium',
  tags: ['heap'],
  description: `Design a class to find the **k-th largest element** in a stream.

Implement the \`KthLargest\` class:
- \`KthLargest(k, nums)\` — initializes the object with the integer \`k\` and the stream of integers \`nums\`.
- \`add(val)\` — appends the integer \`val\` to the stream and returns the element representing the k-th largest element in the stream.

Note that it is the k-th largest element **in sorted order**, not the k-th distinct element.

> **Note:** A runner function \`kthLargestRunner(k, nums, adds)\` is pre-defined. It creates a \`KthLargest\` instance with \`(k, nums)\` and calls \`add\` for each element in \`adds\`, returning the array of results.`,
  constraints: [
    '1 <= k <= 10^4',
    '0 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= val <= 10^4',
    'At most 10^4 calls will be made to add',
    'It is guaranteed that there will be at least k elements in the array when you search for the k-th element',
  ],
  examples: [
    {
      input: 'k = 3, nums = [4,5,8,2], adds = [3,5,10,9,4]',
      output: '[4,5,8,8,8]',
      explanation:
        'After add(3): stream=[2,3,4,5,8], 3rd largest=4. After add(5): stream=[2,3,4,5,5,8], 3rd largest=5. After add(10): stream=[2,3,4,5,5,8,10], 3rd largest=5. After add(9): stream sorted desc=[10,9,8,5,5,4,3,2], 3rd largest=8. After add(4): 3rd largest=8.',
    },
  ],
  hints: [
    'At any point, the k-th largest element is the minimum of the k largest elements seen so far. What data structure efficiently tracks this minimum?',
    'Maintain a min-heap of size exactly k. The top of the heap is always the k-th largest element. When you add a new value: if the heap has fewer than k elements, push it; otherwise if the new value is larger than the heap minimum, replace the minimum.',
    'In Python use `heapq` (which is a min-heap by default). In JavaScript, simulate a min-heap with a sorted array (acceptable since k ≤ 10^4).',
  ],
  functionName: 'kthLargestRunner',
  params: ['k', 'nums', 'adds'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// kthLargestRunner is pre-defined and calls your class below.\nclass KthLargest {\n  constructor(k, nums) {\n    this.k = k;\n  }\n  add(val) {\n    // return kth largest\n  }\n}\n',
    typescript: "function kthLargestRunner(k: number, nums: number[], adds: number[]): number[] {\n  constructor(k, nums) {\n    this.k = k;\n  }\n  add(val) {\n    // return kth largest\n  }\n}",

    python:
      '# kthLargestRunner is pre-defined and calls your class below.\nclass KthLargest:\n    def __init__(self, k, nums):\n        self.k = k\n    def add(self, val):\n        pass  # return kth largest\n',
  },
  visibleTests: [
    {
      args: [3, [4, 5, 8, 2], [3, 5, 10, 9, 4]],
      expected: [4, 5, 5, 8, 8],
    },
    {
      args: [1, [], [1, 2, 3]],
      expected: [1, 2, 3],
    },
  ],
  hiddenTests: [
    {
      args: [2, [0], [1, 2, 3]],
      expected: [0, 1, 2],
    },
    {
      args: [3, [5, 10, 1, 4, 6], [9, 3, 2]],
      expected: [6, 6, 6],
    },
    {
      args: [2, [7, 7, 7, 7], [5, 7, 7]],
      expected: [7, 7, 7],
    },
    {
      args: [4, [1, 1, 1, 1, 1], [0, 1, 1]],
      expected: [1, 1, 1],
    },
  ],
};
