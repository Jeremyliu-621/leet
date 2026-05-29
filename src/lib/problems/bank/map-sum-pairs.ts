import type { Problem } from '../types';

export const problem: Problem = {
  id: 'map-sum-pairs',
  title: 'Map Sum Pairs',
  difficulty: 'medium',
  tags: ['trie', 'hash-map', 'strings'],
  description: `Implement the \`MapSum\` class:

- \`MapSum()\` Initializes the object.
- \`insert(key, val)\` Inserts the \`key-val\` pair into the map. If the \`key\` already exists, the original \`key-value\` will be overwritten.
- \`sum(prefix)\` Returns the sum of all pairs' values whose key starts with the \`prefix\`.

Simulate the class with an array of operations and arguments. The first operation is always \`"MapSum"\` with no arguments (constructor call). Return an array of results for each operation (\`null\` for operations that return nothing).`,
  constraints: [
    '`1 <= key.length, prefix.length <= 50`',
    '`key` and `prefix` consist of only lowercase English letters.',
    '`1 <= val <= 1000`',
    'At most `50` calls will be made to `insert` and `sum`.',
  ],
  examples: [
    {
      input: 'ops = ["MapSum","insert","sum","insert","sum"], args = [[],["apple",3],["ap"],["app",2],["ap"]]',
      output: '[null,null,3,null,5]',
      explanation: 'After inserting "apple"→3, sum("ap")=3. After inserting "app"→2, sum("ap")=3+2=5.',
    },
    {
      input: 'ops = ["MapSum","insert","sum","insert","sum"], args = [[],["a",3],["a"],["b",2],["a"]]',
      output: '[null,null,3,null,3]',
      explanation: '"b" does not start with "a", so sum("a") remains 3.',
    },
  ],
  hints: [
    'Use a hash map from key → val for O(1) insert and overwrite. For sum, iterate all keys and sum those that start with the prefix.',
    'For better performance, use a Trie where each node stores the cumulative sum of all keys passing through it. On insert, update every ancestor node by the delta (new_val - old_val).',
    'The hash map approach is simpler and sufficient given the constraint of at most 50 calls.',
  ],
  functionName: 'mapSumPairs',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function mapSumPairs(ops, args) {

}`,
    typescript: 'function mapSumPairs(ops: string[], args: (string | number)[][]): (number | null)[] {\n\n}',
    python: `def mapSumPairs(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['MapSum', 'insert', 'sum', 'insert', 'sum'],
        [[], ['apple', 3], ['ap'], ['app', 2], ['ap']],
      ],
      expected: [null, null, 3, null, 5],
    },
    {
      args: [
        ['MapSum', 'insert', 'sum', 'insert', 'sum'],
        [[], ['a', 3], ['a'], ['b', 2], ['a']],
      ],
      expected: [null, null, 3, null, 3],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['MapSum', 'insert', 'sum'],
        [[], ['hello', 5], ['he']],
      ],
      expected: [null, null, 5],
    },
    {
      args: [
        ['MapSum', 'insert', 'insert', 'sum'],
        [[], ['apple', 3], ['apple', 5], ['apple']],
      ],
      expected: [null, null, null, 5],
    },
    {
      args: [
        ['MapSum', 'insert', 'insert', 'sum', 'sum'],
        [[], ['abc', 10], ['abcd', 1], ['ab'], ['abc']],
      ],
      expected: [null, null, null, 11, 11],
    },
    {
      args: [
        ['MapSum', 'insert', 'sum'],
        [[], ['xyz', 7], ['a']],
      ],
      expected: [null, null, 0],
    },
    {
      args: [
        ['MapSum', 'insert', 'insert', 'insert', 'sum', 'sum', 'sum'],
        [[], ['a', 1], ['ab', 2], ['abc', 3], ['a'], ['ab'], ['abc']],
      ],
      expected: [null, null, null, null, 6, 5, 3],
    },
  ],
};
