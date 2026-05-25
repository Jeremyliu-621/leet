import type { Problem } from '../types';

const JS_PREAMBLE = `
function insertDeleteGetRandomRunner(ops, args) {
  const obj = new RandomizedSet();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'insert') return obj.insert(a[0]);
    if (op === 'remove') return obj.remove(a[0]);
    if (op === 'getRandom') return obj.getRandom();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def insertDeleteGetRandomRunner(ops, args):
    obj = RandomizedSet()
    result = []
    for op, a in zip(ops, args):
        if op == 'insert':
            result.append(obj.insert(a[0]))
        elif op == 'remove':
            result.append(obj.remove(a[0]))
        elif op == 'getRandom':
            result.append(obj.getRandom())
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'insert-delete-getrandom',
  title: 'Insert Delete GetRandom O(1)',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `Implement the \`RandomizedSet\` class:

- \`insert(val)\` — inserts an item \`val\` into the set if not present. Returns \`true\` if the item was not present, \`false\` otherwise.
- \`remove(val)\` — removes an item \`val\` from the set if present. Returns \`true\` if the item was present, \`false\` otherwise.
- \`getRandom()\` — returns a random element from the current set of elements (it's guaranteed that at least one element exists). Each element must have the **same probability** of being returned.

All operations must run in **average O(1)** time.

> **Note:** A runner function is pre-defined that creates a \`RandomizedSet\` and calls your methods. Tests avoid calling \`getRandom\` when multiple elements would make the result unpredictable.`,
  constraints: [
    '-2^31 <= val <= 2^31 - 1',
    'At most 2 × 10^5 calls will be made to insert, remove, and getRandom',
    'There will be at least one element in the data structure when getRandom is called',
  ],
  examples: [
    {
      input: 'ops=["insert","remove","insert","getRandom","remove","insert","getRandom"], args=[[1],[2],[2],[],[1],[2],[]]',
      output: '[true,false,true,2,true,false,2]',
      explanation: 'insert(1)→true, remove(2)→false (not in set), insert(2)→true, getRandom()→1 or 2, remove(1)→true, insert(2)→false (already present), getRandom()→2.',
    },
  ],
  hints: [
    'Use a hash map (val → index) and a dynamic array. insert appends to the array and records the index in the map.',
    'For remove in O(1): swap the target element with the last element in the array, update the swapped element\'s index in the map, then pop the last element.',
    'getRandom just picks a random index in the array — O(1) because arrays support random access.',
  ],
  functionName: 'insertDeleteGetRandomRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// insertDeleteGetRandomRunner is pre-defined and calls your class below.\nclass RandomizedSet {\n  constructor() {}\n  insert(val) {}\n  remove(val) {}\n  getRandom() {}\n}\n',
    python: '# insertDeleteGetRandomRunner is pre-defined and calls your class below.\nimport random\nclass RandomizedSet:\n    def __init__(self): pass\n    def insert(self, val): pass\n    def remove(self, val): pass\n    def getRandom(self): pass\n',
  },
  visibleTests: [
    {
      args: [
        ['insert', 'remove', 'insert', 'remove', 'insert', 'insert'],
        [[1], [2], [2], [1], [3], [3]],
      ],
      expected: [true, false, true, true, true, false],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['insert', 'insert', 'remove', 'getRandom'],
        [[0], [1], [0], []],
      ],
      expected: [true, true, true, 1],
    },
    {
      args: [
        ['insert', 'insert', 'insert', 'remove', 'remove', 'insert'],
        [[5], [10], [15], [10], [5], [10]],
      ],
      expected: [true, true, true, true, true, true],
    },
  ],
};
