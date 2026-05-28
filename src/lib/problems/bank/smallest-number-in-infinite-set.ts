import type { Problem } from '../types';

const JS_PREAMBLE = `
function smallestInfiniteSetRunner(ops, args) {
  const s = new SmallestInfiniteSet();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'popSmallest') return s.popSmallest();
    if (op === 'addBack') { s.addBack(a[0]); return null; }
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def smallestInfiniteSetRunner(ops, args):
    s = SmallestInfiniteSet()
    result = []
    for op, a in zip(ops, args):
        if op == 'popSmallest':
            result.append(s.popSmallest())
        elif op == 'addBack':
            s.addBack(a[0] if a else 0)
            result.append(None)
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'smallest-number-in-infinite-set',
  title: 'Smallest Number in Infinite Set',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You have a set which initially contains all positive integers \`[1, 2, 3, 4, 5, ...]\`.

Implement the \`SmallestInfiniteSet\` class:

- \`SmallestInfiniteSet()\` — Initializes the object with all positive integers.
- \`int popSmallest()\` — Removes and returns the smallest integer in the set.
- \`void addBack(int num)\` — Adds a positive integer \`num\` back into the set, if it is not already present.

> **Note:** A runner function \`smallestInfiniteSetRunner(ops, args)\` is pre-defined. It creates a \`SmallestInfiniteSet\` instance and dispatches each operation, returning the array of results (\`null\` for \`addBack\`).`,
  constraints: [
    '1 <= num <= 1000',
    'At most 1000 calls will be made in total to popSmallest and addBack',
  ],
  examples: [
    {
      input:
        'ops = ["popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest"], args = [[],[],[],[2],[],[],[],[],[]]',
      output: '[1,2,3,null,2,4,5,6,7]',
      explanation:
        'Pop 1, 2, 3. Add back 2. Pop again: 2 (re-added), then 4, 5, 6, 7 from the infinite sequence.',
    },
  ],
  hints: [
    'Track a "cursor" representing the smallest not-yet-popped number from the infinite sequence. Also keep a sorted set of numbers that were popped and then added back.',
    'When popSmallest: if the added-back set is non-empty and its minimum < cursor, pop from that set. Otherwise return cursor and increment it.',
    'Use a min-heap (or sorted array) for the added-back numbers. The smallest overall is min(min(addedBack) if non-empty, cursor).',
  ],
  functionName: 'smallestInfiniteSetRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// smallestInfiniteSetRunner is pre-defined and calls your class below.\nclass SmallestInfiniteSet {\n  constructor() {\n  }\n  popSmallest() {\n    // return the smallest integer\n  }\n  addBack(num) {\n  }\n}\n',
    typescript: "function smallestInfiniteSetRunner(ops: string[], args: (unknown[] | number[])[]): (number | null)[] {\n  constructor() {\n  }\n  popSmallest() {\n    // return the smallest integer\n  }\n  addBack(num) {\n  }\n}",

    python:
      '# smallestInfiniteSetRunner is pre-defined and calls your class below.\nclass SmallestInfiniteSet:\n    def __init__(self):\n        pass\n    def popSmallest(self):\n        pass  # return int\n    def addBack(self, num):\n        pass\n',
  },
  visibleTests: [
    {
      args: [
        ['popSmallest', 'popSmallest', 'popSmallest', 'addBack', 'popSmallest', 'popSmallest', 'popSmallest', 'popSmallest', 'popSmallest'],
        [[], [], [], [2], [], [], [], [], []],
      ],
      expected: [1, 2, 3, null, 2, 4, 5, 6, 7],
    },
  ],
  hiddenTests: [
    {
      args: [['popSmallest'], [[]]],
      expected: [1],
    },
    {
      args: [
        ['popSmallest', 'popSmallest', 'addBack', 'addBack', 'popSmallest'],
        [[], [], [1], [2], []],
      ],
      expected: [1, 2, null, null, 1],
    },
    {
      args: [
        ['popSmallest', 'popSmallest', 'popSmallest', 'addBack', 'addBack', 'popSmallest', 'popSmallest'],
        [[], [], [], [1], [3], [], []],
      ],
      expected: [1, 2, 3, null, null, 1, 3],
    },
    {
      args: [['addBack', 'popSmallest'], [[2], []]],
      expected: [null, 1],
    },
  ],
};
