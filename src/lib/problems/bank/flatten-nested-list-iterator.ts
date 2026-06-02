import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flatten-nested-list-iterator',
  title: 'Flatten Nested List Iterator',
  difficulty: 'medium',
  tags: ['design', 'stack', 'arrays'],
  description: `You are given a nested list of integers \`nestedList\`. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the \`NestedIterator\` class:

- \`NestedIterator(nestedList)\` Initializes the iterator with the nested list.
- \`int next()\` Returns the next integer in the nested list.
- \`boolean hasNext()\` Returns \`true\` if there are still some integers in the nested list.

The input is given as a **JSON-like** array where integers are numbers and nested lists are arrays.

Simulate with arrays of operations. Return results (\`null\` for constructor).`,
  constraints: [
    '`1 <= nestedList.length <= 500`',
    'The values of the integers in the nested list are in the range `[-10^6, 10^6]`.',
  ],
  examples: [
    {
      input: 'ops = ["NestedIterator","next","next","next"], args = [[[[1,1],2,[1,1]]],[],[],[]]',
      output: '[null,1,1,2]',
      explanation: 'Flattened: [1,1,2,1,1]. next() calls return 1,1,2.',
    },
    {
      input: 'ops = ["NestedIterator","next","hasNext","next","next","hasNext"], args = [[[1,[4,[6]]]],[],[],[],[],[]]',
      output: '[null,1,true,4,6,false]',
      explanation: 'Flattened: [1,4,6].',
    },
  ],
  hints: [
    'Pre-flatten the list recursively during initialization. Maintain a pointer into the flat array.',
    'Alternatively, use a stack: push all elements in reverse order. When hasNext() is called, pop and flatten until you have an integer on top.',
    'Recursive flattening into a flat array is simpler and sufficient for this problem.',
  ],
  functionName: 'flattenNestedListIterator',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function flattenNestedListIterator(ops, args) {
  const flatten = (v) => Array.isArray(v) ? v.flatMap(flatten) : [v];
  let flat = [], idx = 0;
  const res = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'NestedIterator') {
      flat = args[i][0].flatMap(flatten); idx = 0; res.push(null);
    } else if (ops[i] === 'next') {
      res.push(flat[idx++]);
    } else {
      res.push(idx < flat.length);
    }
  }
  return res;
}`,
    typescript: `function flattenNestedListIterator(ops: string[], args: unknown[][]): (number | boolean | null)[] {
  const flatten = (v: unknown): number[] => Array.isArray(v) ? v.flatMap(flatten) : [v as number];
  let flat: number[] = [], idx = 0;
  const res: (number | boolean | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'NestedIterator') {
      flat = (args[i][0] as unknown[]).flatMap(flatten); idx = 0; res.push(null);
    } else if (ops[i] === 'next') {
      res.push(flat[idx++]);
    } else {
      res.push(idx < flat.length);
    }
  }
  return res;
}`,
    python: `def flattenNestedListIterator(ops, args):
    def flatten(v):
        if isinstance(v, list): return [x for item in v for x in flatten(item)]
        return [v]
    flat, idx, res = [], 0, []
    for op, a in zip(ops, args):
        if op == 'NestedIterator': flat = flatten(a[0]); idx = 0; res.append(None)
        elif op == 'next': res.append(flat[idx]); idx += 1
        else: res.append(idx < len(flat))
    return res`,
  },
  visibleTests: [
    {
      args: [
        ['NestedIterator', 'next', 'next', 'next'],
        [[[[1, 1], 2, [1, 1]]], [], [], []],
      ],
      expected: [null, 1, 1, 2],
    },
    {
      args: [
        ['NestedIterator', 'next', 'hasNext', 'next', 'next', 'hasNext'],
        [[[1, [4, [6]]]], [], [], [], [], []],
      ],
      expected: [null, 1, true, 4, 6, false],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['NestedIterator', 'next', 'hasNext'],
        [[[5]], [], []],
      ],
      expected: [null, 5, false],
    },
    {
      args: [
        ['NestedIterator', 'next', 'next', 'next'],
        [[[[1, 2], [3, 4]]], [], [], []],
      ],
      expected: [null, 1, 2, 3],
    },
    {
      args: [
        ['NestedIterator', 'hasNext', 'next', 'hasNext', 'next'],
        [[[1, [2, 3]]], [], [], [], []],
      ],
      expected: [null, true, 1, true, 2],
    },
    {
      args: [
        ['NestedIterator', 'next', 'next', 'next', 'next', 'hasNext'],
        [[[[[1]], 2, [3, [4]]]], [], [], [], [], []],
      ],
      expected: [null, 1, 2, 3, 4, false],
    },
  ],
};
