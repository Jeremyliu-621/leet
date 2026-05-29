import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-trie-ii-prefix-tree',
  title: 'Implement Trie II (Prefix Tree)',
  difficulty: 'medium',
  tags: ['trie', 'strings', 'design'],
  description: `A **trie** (pronounced "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.

Implement the \`Trie\` class:

- \`Trie()\` Initializes the trie object.
- \`void insert(String word)\` Inserts the string \`word\` into the trie.
- \`int countWordsEqualTo(String word)\` Returns the number of instances of the string \`word\` in the trie.
- \`int countWordsStartingWith(String prefix)\` Returns the number of strings in the trie that have the string \`prefix\` as a prefix.
- \`void erase(String word)\` Erases the string \`word\` from the trie.

It is guaranteed that for any call to \`erase\`, the string \`word\` will be in the trie.

Simulate with arrays of operations. Return results (\`null\` for void operations).`,
  constraints: [
    '`1 <= word.length, prefix.length <= 2000`',
    '`word` and `prefix` consist only of lowercase English letters.',
    'At most `3 * 10^4` calls in total will be made to `insert`, `countWordsEqualTo`, `countWordsStartingWith`, and `erase`.',
    'It is guaranteed that for any call to `erase`, `word` is present in the trie.',
  ],
  examples: [
    {
      input: 'ops = ["Trie","insert","insert","countWordsEqualTo","countWordsStartingWith","erase","countWordsEqualTo","countWordsStartingWith"], args = [[],["apple"],["apple"],["apple"],["app"],["apple"],["apple"],["app"]]',
      output: '[null,null,null,2,2,null,1,1]',
      explanation: 'After inserting "apple" twice, countWordsEqualTo("apple")=2, countWordsStartingWith("app")=2. After erasing one "apple", both counts drop to 1.',
    },
  ],
  hints: [
    'Each trie node stores two counts: `endCount` (number of words ending here) and `prefixCount` (number of words passing through here).',
    'On `insert`, increment `prefixCount` for every node along the path and `endCount` at the final node.',
    'On `erase`, decrement `prefixCount` for every node along the path and `endCount` at the final node.',
    '`countWordsEqualTo` returns the `endCount` of the node reached by the full word (0 if node does not exist). `countWordsStartingWith` returns the `prefixCount` of the node reached by the prefix.',
  ],
  functionName: 'implementTrieII',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function implementTrieII(ops, args) {

}`,
    typescript: 'function implementTrieII(ops: string[], args: (string[] | [])[]): (number | null)[] {\n\n}',
    python: `def implementTrieII(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['Trie', 'insert', 'insert', 'countWordsEqualTo', 'countWordsStartingWith', 'erase', 'countWordsEqualTo', 'countWordsStartingWith'],
        [[], ['apple'], ['apple'], ['apple'], ['app'], ['apple'], ['apple'], ['app']],
      ],
      expected: [null, null, null, 2, 2, null, 1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['Trie', 'insert', 'countWordsEqualTo', 'countWordsStartingWith'],
        [[], ['hello'], ['hello'], ['hel']],
      ],
      expected: [null, null, 1, 1],
    },
    {
      args: [
        ['Trie', 'insert', 'insert', 'insert', 'countWordsStartingWith', 'erase', 'countWordsStartingWith'],
        [[], ['a'], ['ab'], ['abc'], ['a'], ['a'], ['a']],
      ],
      expected: [null, null, null, null, 3, null, 2],
    },
    {
      args: [
        ['Trie', 'insert', 'erase', 'countWordsEqualTo', 'countWordsStartingWith'],
        [[], ['test'], ['test'], ['test'], ['t']],
      ],
      expected: [null, null, null, 0, 0],
    },
    {
      args: [
        ['Trie', 'insert', 'insert', 'countWordsEqualTo', 'erase', 'erase', 'countWordsEqualTo'],
        [[], ['leet'], ['leet'], ['leet'], ['leet'], ['leet'], ['leet']],
      ],
      expected: [null, null, null, 2, null, null, 0],
    },
    {
      args: [
        ['Trie', 'insert', 'insert', 'countWordsStartingWith', 'countWordsEqualTo'],
        [[], ['apple'], ['app'], ['app'], ['app']],
      ],
      expected: [null, null, null, 2, 1],
    },
  ],
};
