import type { Problem } from '../types';

const JS_PREAMBLE = `
function medianFinderRunner(ops, args) {
  const mf = new MedianFinder();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'addNum') { mf.addNum(a[0]); return null; }
    if (op === 'findMedian') return mf.findMedian();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def medianFinderRunner(ops, args):
    mf = MedianFinder()
    result = []
    for op, a in zip(ops, args):
        if op == 'addNum':
            mf.addNum(a[0])
            result.append(None)
        elif op == 'findMedian':
            result.append(mf.findMedian())
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'median-from-data-stream',
  title: 'Find Median from Data Stream',
  difficulty: 'hard',
  tags: ['heap'],
  description: `The **median** is the middle value in an ordered integer list. If the size of the list is even, the median is the mean of the two middle values.

Design a data structure that supports the following two operations:

- \`addNum(num)\` — adds an integer from the data stream to the data structure.
- \`findMedian()\` — returns the median of current data elements.

> **Note:** A runner function \`medianFinderRunner(ops, args)\` is pre-defined. It creates a \`MedianFinder\` instance and calls each method in \`ops\` with the corresponding \`args\` element, returning the array of results (\`null\` for \`addNum\`).`,
  constraints: [
    '-10^5 <= num <= 10^5',
    'There will be at least one element in the data structure before calling findMedian',
    'At most 5 × 10^4 calls will be made to addNum and findMedian',
  ],
  examples: [
    {
      input:
        'ops = ["addNum","addNum","findMedian","addNum","findMedian"], args = [[1],[2],[],[3],[]]',
      output: '[null,null,1.5,null,2.0]',
      explanation:
        'add(1): data=[1]. add(2): data=[1,2]. findMedian()=(1+2)/2=1.5. add(3): data=[1,2,3]. findMedian()=2.0.',
    },
  ],
  hints: [
    'A sorted list always gives you the median, but inserting into a sorted list is O(n). Can you do better by splitting the data into two halves?',
    'Maintain two heaps: a **max-heap** for the lower half and a **min-heap** for the upper half. Keep their sizes balanced (equal or lower half has one extra). The median is either the top of the larger heap, or the average of both tops.',
    'When adding a number: push to the max-heap (lower half), then move its maximum to the min-heap (upper half) to maintain ordering. Then rebalance sizes so the lower half is never more than one element larger.',
  ],
  functionName: 'medianFinderRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// medianFinderRunner is pre-defined and calls your class below.\nclass MedianFinder {\n  constructor() {\n  }\n  addNum(num) {\n  }\n  findMedian() {\n    // return median as a number\n  }\n}\n',
    typescript: "function medianFinderRunner(ops: string[], args: (number[] | unknown[])[]): (null | number)[] {\n  constructor() {\n  }\n  addNum(num) {\n  }\n  findMedian() {\n    // return median as a number\n  }\n}",

    python:
      '# medianFinderRunner is pre-defined and calls your class below.\nclass MedianFinder:\n    def __init__(self):\n        pass\n    def addNum(self, num):\n        pass\n    def findMedian(self):\n        pass  # return median as a float\n',
  },
  visibleTests: [
    {
      args: [
        ['addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'],
        [[1], [2], [], [3], []],
      ],
      expected: [null, null, 1.5, null, 2],
    },
    {
      args: [
        ['addNum', 'findMedian'],
        [[6], []],
      ],
      expected: [null, 6],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['addNum', 'addNum', 'findMedian', 'addNum', 'addNum', 'findMedian'],
        [[5], [3], [], [8], [4], []],
      ],
      expected: [null, null, 4, null, null, 4.5],
    },
    {
      args: [
        ['addNum', 'addNum', 'addNum', 'addNum', 'findMedian'],
        [[1], [2], [3], [4], []],
      ],
      expected: [null, null, null, null, 2.5],
    },
    {
      args: [
        ['addNum', 'addNum', 'addNum', 'findMedian'],
        [[-1], [-2], [-3], []],
      ],
      expected: [null, null, null, -2],
    },
    {
      args: [
        ['addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian'],
        [[2], [], [3], [], [4], []],
      ],
      expected: [null, 2, null, 2.5, null, 3],
    },
  ],
};
