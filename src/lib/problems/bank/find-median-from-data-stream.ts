import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-median-from-data-stream',
  title: 'Find Median from Data Stream',
  difficulty: 'hard',
  tags: ['heap', 'two-pointers'],
  description: `The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

Implement the \`MedianFinder\` class:
- \`MedianFinder()\` initializes the \`MedianFinder\` object.
- \`void addNum(int num)\` adds the integer \`num\` from the data stream to the data structure.
- \`double findMedian()\` returns the median of all elements so far. Answers within \`10^-5\` of the actual answer will be accepted.

For this problem, implement a function \`medianFinder(ops, vals)\` where \`ops\` is an array of operation names (\`"addNum"\` or \`"findMedian"\`) and \`vals\` is an array of argument arrays. Return an array of results (null for \`addNum\`, the median for \`findMedian\`).`,
  constraints: [
    '-10^5 <= num <= 10^5',
    'There will be at least one element in the data structure before calling findMedian.',
    'At most 5 * 10^4 calls will be made to addNum and findMedian.',
  ],
  examples: [
    {
      input: 'ops = ["addNum","addNum","findMedian","addNum","findMedian"], vals = [[1],[2],[],[3],[]]',
      output: '[null,null,1.5,null,2.0]',
      explanation: 'After adding 1 and 2, median is (1+2)/2 = 1.5. After adding 3, median is 2.',
    },
    {
      input: 'ops = ["addNum","findMedian"], vals = [[5],[]]',
      output: '[null,5.0]',
      explanation: 'Only one element, median is 5.',
    },
  ],
  hints: [
    'Use two heaps: a max-heap for the lower half and a min-heap for the upper half.',
    'Keep them balanced: sizes differ by at most 1.',
    'If sizes are equal, median is (max of lower + min of upper) / 2; otherwise it\'s the top of the larger heap.',
  ],
  functionName: 'medianFinder',
  params: ['ops', 'vals'],
  starterCode: {
    javascript: 'function medianFinder(ops, vals) {\n  \n}\n',
    python: 'def medianFinder(ops, vals):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'], [[1], [2], [], [3], []]],
      expected: [null, null, 1.5, null, 2.0],
    },
    {
      args: [['addNum', 'findMedian'], [[5], []]],
      expected: [null, 5.0],
    },
  ],
  hiddenTests: [
    {
      args: [['addNum', 'addNum', 'addNum', 'findMedian'], [[1], [1], [2], []]],
      expected: [null, null, null, 1.0],
    },
    {
      args: [['addNum', 'addNum', 'findMedian', 'addNum', 'addNum', 'findMedian'], [[6], [10], [], [2], [6], []]],
      expected: [null, null, 8.0, null, null, 6.0],
    },
    {
      args: [['addNum', 'addNum', 'addNum', 'addNum', 'findMedian'], [[-1], [-2], [-3], [-4], []]],
      expected: [null, null, null, null, -2.5],
    },
  ],
};
