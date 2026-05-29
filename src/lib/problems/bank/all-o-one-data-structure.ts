import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-o-one-data-structure',
  title: 'All O(1) Data Structure',
  difficulty: 'hard',
  tags: ['design', 'hash-map', 'linked-list'],
  description: `Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the \`AllOne\` class:

- \`AllOne()\` Initializes the object of the data structure.
- \`inc(key)\` Increments the count of the string \`key\` by 1. If \`key\` does not exist in the data structure, insert it with count \`1\`.
- \`dec(key)\` Decrements the count of the string \`key\` by 1. If the count of \`key\` is \`0\` after the decrement, remove it from the data structure. It is guaranteed that \`key\` exists in the data structure before the decrement.
- \`getMaxKey()\` Returns one of the keys with the maximal count. If no element exists, returns \`""\`.
- \`getMinKey()\` Returns one of the keys with the minimum count. If no element exists, returns \`""\`.

Simulate with arrays of operations. Return results (\`null\` for void operations).`,
  constraints: [
    '`1 <= key.length <= 10`',
    '`key` consists of lowercase English letters.',
    'It is guaranteed that for each call to `dec`, `key` is existing in the data structure.',
    'At most `5 * 10^4` calls will be made to `inc`, `dec`, `getMaxKey`, and `getMinKey`.',
  ],
  examples: [
    {
      input: 'ops = ["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"], args = [[],["hello"],["hello"],[],[],["leet"],[],[]]',
      output: '[null,null,null,"hello","hello",null,"hello","leet"]',
      explanation: 'After two inc("hello"), hello→2. After inc("leet"), leet→1. Max=hello(2), Min=leet(1).',
    },
  ],
  hints: [
    'Use a hash map from key → count. For max/min, maintain a sorted structure or scan the map.',
    'For true O(1) max/min: use a doubly linked list where each node holds a count and a set of keys at that count. A hash map maps key → list node. inc/dec move keys between adjacent nodes.',
    'With the given constraints, using a map + linear scan for max/min is simpler and passes within O(N) per query.',
  ],
  functionName: 'allOOneDataStructure',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function allOOneDataStructure(ops, args) {

}`,
    typescript: 'function allOOneDataStructure(ops: string[], args: string[][]): (string | null)[] {\n\n}',
    python: `def allOOneDataStructure(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['AllOne', 'inc', 'inc', 'getMaxKey', 'getMinKey', 'inc', 'getMaxKey', 'getMinKey'],
        [[], ['hello'], ['hello'], [], [], ['leet'], [], []],
      ],
      expected: [null, null, null, 'hello', 'hello', null, 'hello', 'leet'],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['AllOne', 'getMaxKey', 'getMinKey'],
        [[], [], []],
      ],
      expected: [null, '', ''],
    },
    {
      args: [
        ['AllOne', 'inc', 'getMaxKey', 'getMinKey'],
        [[], ['a'], [], []],
      ],
      expected: [null, null, 'a', 'a'],
    },
    {
      args: [
        ['AllOne', 'inc', 'inc', 'inc', 'dec', 'getMaxKey', 'getMinKey'],
        [[], ['a'], ['b'], ['b'], ['b'], [], []],
      ],
      expected: [null, null, null, null, null, 'a', 'a'],
    },
    {
      args: [
        ['AllOne', 'inc', 'inc', 'inc', 'inc', 'dec', 'getMaxKey', 'getMinKey'],
        [[], ['a'], ['b'], ['a'], ['b'], ['a'], [], []],
      ],
      expected: [null, null, null, null, null, null, 'b', 'a'],
    },
    {
      args: [
        ['AllOne', 'inc', 'inc', 'inc', 'dec', 'dec', 'getMaxKey', 'getMinKey'],
        [[], ['a'], ['a'], ['a'], ['a'], ['a'], [], []],
      ],
      expected: [null, null, null, null, null, null, 'a', 'a'],
    },
  ],
};
