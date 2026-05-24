import type { Problem } from '../types';

const JS_PREAMBLE = `
function lruCacheRunner(ops, args) {
  let cache = null;
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'LRUCache') { cache = new LRUCache(a[0]); return null; }
    if (op === 'get') return cache.get(a[0]);
    if (op === 'put') { cache.put(a[0], a[1]); return null; }
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def lruCacheRunner(ops, args):
    cache = None
    result = []
    for op, a in zip(ops, args):
        if op == 'LRUCache':
            cache = LRUCache(a[0])
            result.append(None)
        elif op == 'get':
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
  tags: ['hash-map'],
  description: `Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the \`LRUCache\` class:
- \`LRUCache(capacity)\` — initializes the cache with positive size \`capacity\`.
- \`get(key)\` — returns the value of the key if it exists, otherwise returns \`-1\`.
- \`put(key, value)\` — updates the value of the key if it exists, or inserts the key-value pair. If inserting causes the cache to exceed capacity, evict the least recently used key.

Both \`get\` and \`put\` must run in **O(1)** average time complexity.

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
        'ops = ["LRUCache","put","put","get","put","get","put","get","get","get"], args = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
      output: '[null,null,null,1,null,-1,null,-1,3,4]',
      explanation:
        'Cache capacity 2. After put(1,1) and put(2,2): cache = {1:1, 2:2}. get(1)=1 (1 now MRU). put(3,3) evicts key 2 (LRU). get(2)=-1. put(4,4) evicts key 1 (LRU). get(1)=-1, get(3)=3, get(4)=4.',
    },
  ],
  hints: [
    'Use a doubly-linked list to track recency order (head = MRU, tail = LRU) combined with a hash map from key to node for O(1) access.',
    'On every get or put, move the accessed/updated node to the head of the list.',
    'When capacity is exceeded on a put, remove the node at the tail and also delete its key from the hash map.',
  ],
  functionName: 'lruCacheRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// lruCacheRunner is pre-defined and calls your class below.\nclass LRUCache {\n  constructor(capacity) {}\n  get(key) {}\n  put(key, value) {}\n}\n',
    python:
      '# lruCacheRunner is pre-defined and calls your class below.\nclass LRUCache:\n    def __init__(self, capacity): pass\n    def get(self, key): pass\n    def put(self, key, value): pass\n',
  },
  visibleTests: [
    {
      args: [
        ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
      ],
      expected: [null, null, null, 1, null, -1, null, -1, 3, 4],
    },
    {
      args: [
        ['LRUCache', 'put', 'get', 'put', 'get', 'get'],
        [[1], [2, 1], [2], [3, 2], [2], [3]],
      ],
      expected: [null, null, 1, null, -1, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['LRUCache', 'put', 'put', 'put', 'get', 'get', 'get'],
        [[2], [1, 10], [2, 20], [1, 30], [1], [2], [3]],
      ],
      expected: [null, null, null, null, 30, 20, -1],
    },
    {
      args: [
        ['LRUCache', 'put', 'put', 'get', 'put', 'put', 'get', 'get'],
        [[3], [1, 1], [2, 2], [1], [3, 3], [4, 4], [2], [3]],
      ],
      expected: [null, null, null, 1, null, null, -1, 3],
    },
  ],
};
