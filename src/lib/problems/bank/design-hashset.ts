import type { Problem } from '../types';

const JS_PREAMBLE = `
class MyHashSet {
  constructor() {
    // Your code here
  }
  add(key) {
    // Your code here
  }
  remove(key) {
    // Your code here
  }
  contains(key) {
    // Your code here
  }
}
`;

const PYTHON_PREAMBLE = `
class MyHashSet:
    def __init__(self):
        # Your code here
        pass

    def add(self, key: int) -> None:
        # Your code here
        pass

    def remove(self, key: int) -> None:
        # Your code here
        pass

    def contains(self, key: int) -> bool:
        # Your code here
        pass
`;

export const problem: Problem = {
  id: 'design-hashset',
  title: 'Design HashSet',
  difficulty: 'easy',
  tags: ['hash-map', 'arrays'],
  description: `Design a HashSet without using any built-in hash table libraries.

Implement \`MyHashSet\`:
- \`MyHashSet()\` — Initializes the MyHashSet object.
- \`void add(int key)\` — Inserts the value \`key\` into the HashSet.
- \`bool contains(int key)\` — Returns whether the value \`key\` exists in the HashSet or not.
- \`void remove(int key)\` — Removes the value \`key\` in the HashSet. If \`key\` does not exist in the HashSet, do nothing.`,
  constraints: [
    '0 <= key <= 10^6',
    'At most 10^4 calls will be made to add, remove, and contains.',
  ],
  examples: [
    {
      input: 'ops = ["add","add","contains","contains","add","contains","remove","contains"], vals = [1,2,1,3,2,2,2,2]',
      output: '[null,null,true,false,null,true,null,false]',
    },
  ],
  hints: [
    'Use a boolean array of size 10^6 + 1 — each index represents a key.',
    'Alternatively, use chaining: an array of buckets where each bucket is a list of keys.',
  ],
  starterCode: {
    javascript: JS_PREAMBLE.trim(),
    python: PYTHON_PREAMBLE.trim(),
  },
  functionName: 'myHashSetRunner',
  params: ['ops', 'vals'],
  preamble: {
    javascript: `
function myHashSetRunner(ops, vals) {
  const set = new MyHashSet();
  return ops.map((op, i) => {
    if (op === 'add') { set.add(vals[i]); return null; }
    if (op === 'remove') { set.remove(vals[i]); return null; }
    if (op === 'contains') return set.contains(vals[i]);
    return null;
  });
}
`,
    python: `
def myHashSetRunner(ops, vals):
    ops_list = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    vals_list = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    obj = MyHashSet()
    results = []
    for op, val in zip(ops_list, vals_list):
        if op == 'add':
            obj.add(int(val))
            results.append(None)
        elif op == 'remove':
            obj.remove(int(val))
            results.append(None)
        elif op == 'contains':
            results.append(obj.contains(int(val)))
    return results
`,
  },
  visibleTests: [
    {
      args: [['add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'], [1, 2, 1, 3, 2, 2, 2, 2]],
      expected: [null, null, true, false, null, true, null, false],
    },
    {
      args: [['add', 'contains', 'remove', 'contains'], [100, 100, 100, 100]],
      expected: [null, true, null, false],
    },
  ],
  hiddenTests: [
    {
      args: [['add', 'add', 'add', 'contains', 'contains', 'remove', 'contains'], [0, 500000, 1000000, 0, 999999, 0, 0]],
      expected: [null, null, null, true, false, null, false],
    },
    {
      args: [['add', 'remove', 'contains'], [5, 5, 5]],
      expected: [null, null, false],
    },
    {
      args: [['add', 'add', 'contains', 'remove', 'contains', 'add', 'contains'], [3, 3, 3, 3, 3, 3, 3]],
      expected: [null, null, true, null, false, null, true],
    },
  ],
};
