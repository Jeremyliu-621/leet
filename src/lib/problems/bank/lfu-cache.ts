import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lfu-cache',
  title: 'LFU Cache',
  difficulty: 'hard',
  tags: ['design', 'hash-map'],
  description: `Design and implement a data structure for a **Least Frequently Used (LFU)** cache.

Implement a \`lfuCache(capacity, operations)\` function where \`operations\` is an array of \`["get", key]\` or \`["put", key, value]\` arrays. Return an array of results from \`get\` calls (-1 if not found).

The LFU cache evicts the least frequently used key when capacity is exceeded. If multiple keys have the same frequency, evict the **least recently used** among them.`,
  constraints: [
    '1 <= capacity <= 10^4',
    '0 <= key <= 10^5',
    '0 <= value <= 10^9',
  ],
  examples: [
    {
      input:
        'capacity = 2, operations = [["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",3],["put",4,4],["get",1],["get",3],["get",4]]',
      output: '[1,-1,3,-1,3,4]',
      explanation:
        'put(1,1), put(2,2): cache={1(f=1),2(f=1)}; get(1)→1, freq[1]=2; put(3,3): evict key 2 (LRU of minFreq=1); get(2)→-1; get(3)→3, freq[3]=2; put(4,4): both keys have f=2, evict key 1 (LRU); get(1)→-1; get(3)→3; get(4)→4.',
    },
  ],
  hints: [
    'Maintain two hash maps: one mapping key→(value, freq) and one mapping freq→ordered-set-of-keys.',
    'Track the minimum frequency. On get/put, update frequency and move the key to the next freq bucket.',
    'On eviction, remove the LRU key from the minFreq bucket. Use a Map (insertion-ordered) to track LRU within each frequency.',
  ],
  functionName: 'lfuCache',
  params: ['capacity', 'operations'],
  starterCode: {
    javascript: `function lfuCache(capacity, operations) {

}`,
    typescript: "function lfuCache(capacity: number, operations: (string | number)[][]): number[] {\n\n}",

    python: `def lfuCache(capacity: int, operations: list) -> list:
    pass`,
  },
  visibleTests: [
    {
      args: [
        2,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['get', 1],
          ['put', 3, 3],
          ['get', 2],
          ['get', 3],
          ['put', 4, 4],
          ['get', 1],
          ['get', 3],
          ['get', 4],
        ],
      ],
      expected: [1, -1, 3, -1, 3, 4],
    },
  ],
  hiddenTests: [
    {
      args: [
        1,
        [
          ['put', 1, 1],
          ['get', 1],
          ['put', 2, 2],
          ['get', 1],
          ['get', 2],
        ],
      ],
      expected: [1, -1, 2],
    },
    {
      args: [
        2,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['put', 3, 3],
          ['get', 2],
          ['get', 3],
        ],
      ],
      expected: [2, 3],
    },
  ],
};
