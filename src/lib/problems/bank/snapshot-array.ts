import type { Problem } from '../types';

const JS_PREAMBLE = `
function snapshotArrayRunner(length, ops, args) {
  const obj = new SnapshotArray(Number(length));
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'set') { obj.set(a[0], a[1]); return null; }
    if (op === 'snap') return obj.snap();
    if (op === 'get') return obj.get(a[0], a[1]);
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def snapshotArrayRunner(length, ops, args):
    obj = SnapshotArray(int(length))
    result = []
    for op, a in zip(ops, args):
        if op == 'set':
            obj.set(a[0], a[1])
            result.append(None)
        elif op == 'snap':
            result.append(obj.snap())
        elif op == 'get':
            result.append(obj.get(a[0], a[1]))
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'snapshot-array',
  title: 'Snapshot Array',
  difficulty: 'medium',
  tags: ['binary-search', 'hash-map'],
  description: `Implement a SnapshotArray that supports the following interface:

- \`SnapshotArray(length)\` — initializes an array-like data structure with the given length. **Initially, each element equals 0.**
- \`set(index, val)\` — sets the element at the given index to be equal to \`val\`.
- \`snap()\` — takes a snapshot of the array and returns the \`snap_id\` (the total number of times snap() was called minus 1).
- \`get(index, snap_id)\` — returns the value at the given index, at the time we took the snapshot with the given \`snap_id\`.

> **Note:** A runner function is pre-defined that creates a \`SnapshotArray\` and calls your methods.`,
  constraints: [
    '1 <= length <= 50000',
    '0 <= index < length',
    '0 <= val <= 10^9',
    '0 <= snap_id < (the total number of times snap() is called)',
    'At most 50000 calls will be made to set, snap, and get',
  ],
  examples: [
    {
      input: 'length=3, ops=["set","snap","set","get"], args=[[0,5],[],[0,6],[0,0]]',
      output: '[null,0,null,5]',
      explanation: 'set(0,5), snap()→0, set(0,6), get(0,0)→5 (value at snap 0 was 5).',
    },
  ],
  hints: [
    'Instead of copying the whole array on every snap(), store a history per index: a list of (snap_id, value) pairs.',
    'On get(index, snap_id), binary search through that index\'s history to find the most recent entry with snap_id ≤ the requested snap_id.',
    'This makes snap() O(1) and get() O(log(snap_count)) instead of copying O(n) per snap.',
  ],
  functionName: 'snapshotArrayRunner',
  params: ['length', 'ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// snapshotArrayRunner is pre-defined and calls your class below.\nclass SnapshotArray {\n  constructor(length) {\n    this.length = length;\n  }\n  set(index, val) {}\n  snap() {}\n  get(index, snap_id) {}\n}\n',
    python: '# snapshotArrayRunner is pre-defined and calls your class below.\nclass SnapshotArray:\n    def __init__(self, length):\n        self.length = length\n    def set(self, index, val): pass\n    def snap(self): pass\n    def get(self, index, snap_id): pass\n',
  },
  visibleTests: [
    {
      args: [3, ['set', 'snap', 'set', 'get'], [[0, 5], [], [0, 6], [0, 0]]],
      expected: [null, 0, null, 5],
    },
  ],
  hiddenTests: [
    {
      args: [1, ['set', 'snap', 'snap', 'snap', 'get', 'snap', 'set', 'get'], [[0, 4], [], [], [], [0, 1], [], [0, 12], [0, 3]]],
      expected: [null, 0, 1, 2, 4, 3, null, 4],
    },
    {
      args: [2, ['set', 'snap', 'set', 'get', 'snap', 'get'], [[0, 1], [], [1, 2], [1, 0], [], [0, 1]]],
      expected: [null, 0, null, 0, 1, 1],
    },
  ],
};
