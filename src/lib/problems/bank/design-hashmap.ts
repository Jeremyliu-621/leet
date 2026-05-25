import type { Problem } from '../types';

const JS_PREAMBLE = `
class MyHashMap {
  constructor() { this.data = new Array(1001).fill(-1); }
  put(key, val) { this.data[key] = val; }
  get(key) { return this.data[key] === undefined ? -1 : this.data[key]; }
  remove(key) { this.data[key] = -1; }
}
function designHashMapRunner(ops, vals) {
  const map = new MyHashMap();
  const results = [null];
  for (let i = 1; i < ops.length; i++) {
    if (ops[i] === 'put') { map.put(vals[i][0], vals[i][1]); results.push(null); }
    else if (ops[i] === 'get') { results.push(map.get(vals[i][0])); }
    else { map.remove(vals[i][0]); results.push(null); }
  }
  return results;
}
`;

const PY_PREAMBLE = `
class MyHashMap:
    def __init__(self):
        self.data = [-1] * 1001
    def put(self, key, val):
        self.data[key] = val
    def get(self, key):
        return self.data[key]
    def remove(self, key):
        self.data[key] = -1

def designHashMapRunner(ops, vals):
    ops = list(ops)
    vals = [list(v) for v in vals]
    m = MyHashMap()
    results = [None]
    for i in range(1, len(ops)):
        if ops[i] == 'put':
            m.put(vals[i][0], vals[i][1])
            results.append(None)
        elif ops[i] == 'get':
            results.append(m.get(vals[i][0]))
        else:
            m.remove(vals[i][0])
            results.append(None)
    return results
`;

export const problem: Problem = {
  id: 'design-hashmap',
  title: 'Design HashMap',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Design a HashMap without using any built-in hash table libraries.

Implement the \`MyHashMap\` class:

- \`MyHashMap()\` initializes the object with an empty map.
- \`void put(int key, int value)\` inserts a \`(key, value)\` pair into the HashMap. If the \`key\` already exists in the map, update the corresponding \`value\`.
- \`int get(int key)\` returns the \`value\` to which the specified \`key\` is mapped, or \`-1\` if this map contains no mapping for the \`key\`.
- \`void remove(key)\` removes the \`key\` and its corresponding \`value\` if the map contains the mapping for the \`key\`.

**Note:** For this problem, your function receives \`ops\` (operation names) and \`vals\` (arguments), and returns results for each operation (null for put/remove).`,
  constraints: [
    '`0 <= key, value <= 10^6`',
    'At most `10^4` calls will be made to `put`, `get` and `remove`.',
  ],
  examples: [
    {
      input: 'ops = ["MyHashMap","put","put","get","get","put","get","remove","get"], vals = [[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]',
      output: '[null,null,null,1,-1,null,1,null,-1]',
    },
  ],
  hints: [
    'For a simple implementation, use an array of size 10^6+1 initialized to -1.',
    'For a more efficient approach, use an array of buckets with linked lists (chaining).',
  ],
  functionName: 'designHashMapRunner',
  params: ['ops', 'vals'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript: 'class MyHashMap {\n  constructor() {\n    \n  }\n  put(key, val) {\n    \n  }\n  get(key) {\n    \n  }\n  remove(key) {\n    \n  }\n}\n',
    python: 'class MyHashMap:\n    def __init__(self):\n        pass\n    def put(self, key, val):\n        pass\n    def get(self, key):\n        pass\n    def remove(self, key):\n        pass\n',
  },
  visibleTests: [
    {
      args: [
        ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'],
        [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]],
      ],
      expected: [null, null, null, 1, -1, null, 1, null, -1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['MyHashMap', 'put', 'get', 'remove', 'get'],
        [[], [5, 10], [5], [5], [5]],
      ],
      expected: [null, null, 10, null, -1],
    },
    {
      args: [
        ['MyHashMap', 'put', 'put', 'put', 'get', 'get'],
        [[], [0, 0], [0, 1], [1, 2], [0], [1]],
      ],
      expected: [null, null, null, null, 1, 2],
    },
  ],
};
