import type { Problem } from '../types';

const JS_PREAMBLE = `
function lruCacheRunner(capacity, ops, args) {
  const cache = new LRUCache(Number(capacity));
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'get') return cache.get(a[0]);
    if (op === 'put') { cache.put(a[0], a[1]); return null; }
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def lruCacheRunner(capacity, ops, args):
    cache = LRUCache(int(capacity))
    result = []
    for op, a in zip(ops, args):
        if op == 'get':
            result.append(cache.get(a[0]))
        elif op == 'put':
            cache.put(a[0], a[1])
            result.append(None)
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'lru-cache',
  title: 'LRU Cache',
  difficulty: 'hard',
  tags: ['design', 'hash-map'],
  description: `Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the \`LRUCache\` class:
- \`LRUCache(capacity)\` — initializes the LRU cache with positive size \`capacity\`.
- \`get(key)\` — returns the value of the \`key\` if it exists, otherwise returns \`-1\`.
- \`put(key, value)\` — updates the value of the \`key\` if it exists, or inserts the key-value pair. If the number of keys exceeds \`capacity\`, **evict the least recently used key**.

The \`get\` and \`put\` operations must each run in **O(1)** average time complexity.

> **Note:** A runner function is pre-defined that creates an \`LRUCache\` and calls your methods. Implement the class below.`,
  constraints: [
    '1 <= capacity <= 3000',
    '0 <= key <= 10^4',
    '0 <= value <= 10^5',
    'At most 2 × 10^5 calls will be made to get and put',
  ],
  examples: [
    {
      input:
        'capacity = 2, ops = ["put","put","get","put","get","put","get","get","get"], args = [[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
      output: '[null,null,1,null,-1,null,-1,3,4]',
      explanation:
        'Cache capacity=2. put(1,1), put(2,2): cache={1:1,2:2}. get(1)=1. put(3,3): evicts key 2, cache={1:1,3:3}. get(2)=-1 (evicted). put(4,4): evicts key 1, cache={3:3,4:4}. get(1)=-1, get(3)=3, get(4)=4.',
    },
  ],
  hints: [
    'Use a hash map for O(1) key lookup combined with a doubly-linked list to maintain insertion/access order.',
    'The doubly-linked list keeps the most recently used items near one end and the least recently used near the other. On every get or put, move the accessed node to the "most recent" end.',
    'On eviction, remove the node at the "least recently used" end and delete its key from the hash map.',
  ],
  functionName: 'lruCacheRunner',
  params: ['capacity', 'ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// lruCacheRunner is pre-defined and calls your class below.\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n  }\n  get(key) {}\n  put(key, value) {}\n}\n',
    typescript: "function lruCacheRunner(capacity: number, ops: string[], args: number[][]): (null | number)[] {\n  constructor(capacity) {\n    this.capacity = capacity;\n  }\n  get(key) {}\n  put(key, value) {}\n}",

    python:
      '# lruCacheRunner is pre-defined and calls your class below.\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n    def get(self, key): pass\n    def put(self, key, value): pass\n',
  },
  visibleTests: [
    {
      args: [
        2,
        ['put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
        [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
      ],
      expected: [null, null, 1, null, -1, null, -1, 3, 4],
    },
    {
      args: [
        1,
        ['put', 'get', 'put', 'get', 'get'],
        [[1, 1], [1], [2, 2], [1], [2]],
      ],
      expected: [null, 1, null, -1, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        2,
        ['put', 'put', 'put', 'get', 'get'],
        [[1, 1], [2, 2], [3, 3], [1], [2]],
      ],
      expected: [null, null, null, -1, 2],
    },
    {
      args: [
        3,
        ['put', 'put', 'put', 'get', 'put', 'get', 'get'],
        [[1, 1], [2, 2], [3, 3], [1], [4, 4], [2], [3]],
      ],
      expected: [null, null, null, 1, null, -1, 3],
    },
    {
      args: [
        2,
        ['put', 'get', 'put', 'put', 'get', 'get'],
        [[2, 1], [2], [3, 2], [4, 3], [3], [2]],
      ],
      expected: [null, 1, null, null, 2, -1],
    },
  ],
};
