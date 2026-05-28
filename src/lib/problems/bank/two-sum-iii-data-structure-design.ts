import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-iii-data-structure-design',
  title: 'Two Sum III - Data Structure Design',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum to a particular value.

Implement the \`TwoSum\` class:

- \`TwoSum()\` Initializes the \`TwoSum\` object, with an empty array initially.
- \`void add(int number)\` Adds \`number\` to the data structure.
- \`boolean find(int value)\` Returns \`true\` if there exists **any** pair of numbers whose sum is equal to \`value\`, otherwise, it returns \`false\`.

**Input format:** An array of operations \`[["TwoSum", []], ["add", [n]], ["find", [v]], ...]\`. Return an array of results (use \`null\` for void methods).`,
  constraints: [
    '-10^5 <= number <= 10^5',
    '-2^31 <= value <= 2^31 - 1',
    'At most 10^4 calls will be made to add and find.',
  ],
  examples: [
    {
      input: 'ops = [["TwoSum",[]],["add",[1]],["add",[3]],["add",[5]],["find",[4]],["find",[7]]]',
      output: '[null,null,null,null,true,false]',
      explanation: 'After adding 1, 3, 5: find(4) is true (1+3=4); find(7) is false (no pair sums to 7).',
    },
    {
      input: 'ops = [["TwoSum",[]],["add",[3]],["add",[1]],["find",[4]],["find",[2]]]',
      output: '[null,null,null,true,false]',
      explanation: 'After adding 3 and 1: find(4) is true (3+1=4); find(2) is false (no pair of the added numbers sums to 2).',
    },
  ],
  hints: [
    'Store all numbers in a hash map mapping each number to its frequency.',
    'For `find(value)`, iterate over the map. For each number `n`, check if `value - n` is in the map.',
    'Handle the edge case: if `n == value - n` (i.e., the number is exactly half of value), you need at least 2 occurrences of `n` in the map.',
  ],
  functionName: 'twoSumOps',
  params: ['ops'],
  starterCode: {
    javascript: `function twoSumOps(ops) {
  const results = [];
  let ts;
  for (const [method, args] of ops) {
    if (method === 'TwoSum') {
      ts = new TwoSum();
      results.push(null);
    } else {
      const res = ts[method](...args);
      results.push(res === undefined ? null : res);
    }
  }
  return results;
}

class TwoSum {
  constructor() {

  }
  add(number) {

  }
  find(value) {

  }
}`,
    typescript: "function twoSumOps(ops: ((string | unknown[])[] | (string | number[])[])[]): (null | boolean)[] {\n  const results = [];\n  let ts;\n  for (const [method, args] of ops) {\n    if (method === 'TwoSum') {\n      ts = new TwoSum();\n      results.push(null);\n    } else {\n      const res = ts[method](...args);\n      results.push(res === undefined ? null : res);\n    }\n  }\n  return results;\n}\n\nclass TwoSum {\n  constructor() {\n\n  }\n  add(number) {\n\n  }\n  find(value) {\n\n  }\n}",

    python: `def twoSumOps(ops):
    ops = ops.to_py() if hasattr(ops, 'to_py') else list(ops)
    results = []
    ts = None
    for op in ops:
        op = op.to_py() if hasattr(op, 'to_py') else list(op)
        method = op[0]
        args = [int(a) for a in (op[1].to_py() if hasattr(op[1], 'to_py') else op[1])]
        if method == 'TwoSum':
            ts = TwoSum()
            results.append(None)
        else:
            res = getattr(ts, method)(*args)
            results.append(None if res is None else res)
    return results

class TwoSum:
    def __init__(self):
        pass
    def add(self, number):
        pass
    def find(self, value):
        pass`,
  },
  visibleTests: [
    {
      args: [[['TwoSum', []], ['add', [1]], ['add', [3]], ['add', [5]], ['find', [4]], ['find', [7]]]],
      expected: [null, null, null, null, true, false],
    },
    {
      args: [[['TwoSum', []], ['add', [3]], ['add', [1]], ['find', [4]], ['find', [2]]]],
      expected: [null, null, null, true, false],
    },
  ],
  hiddenTests: [
    {
      args: [[['TwoSum', []], ['find', [0]]]],
      expected: [null, false],
    },
    {
      args: [[['TwoSum', []], ['add', [0]], ['find', [0]]]],
      expected: [null, null, false],
    },
    {
      args: [[['TwoSum', []], ['add', [0]], ['add', [0]], ['find', [0]]]],
      expected: [null, null, null, true],
    },
    {
      args: [[['TwoSum', []], ['add', [-1]], ['add', [2]], ['find', [1]], ['find', [3]]]],
      expected: [null, null, null, true, false],
    },
    {
      args: [[['TwoSum', []], ['add', [1]], ['add', [1]], ['find', [2]], ['find', [1]]]],
      expected: [null, null, null, true, false],
    },
    {
      args: [[['TwoSum', []], ['add', [5]], ['add', [5]], ['add', [5]], ['find', [10]], ['find', [15]]]],
      expected: [null, null, null, null, true, false],
    },
  ],
};
