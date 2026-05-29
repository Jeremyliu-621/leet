import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-filter',
  title: 'Prefix and Suffix Search',
  difficulty: 'hard',
  tags: ['trie', 'strings', 'design'],
  description: `Design a special dictionary that searches the words in it by a prefix and a suffix.

Implement the \`WordFilter\` class:

- \`WordFilter(words)\` Initializes the object with the \`words\` in the dictionary.
- \`int f(pref, suff)\` Returns the index of the word in the dictionary, which has the prefix \`pref\` and the suffix \`suff\`. If there is more than one valid index, return the **largest** of them. If there is no such word in the dictionary, return \`-1\`.

Simulate with arrays of operations. Return results (\`null\` for the constructor).`,
  constraints: [
    '`1 <= words.length <= 10^4`',
    '`1 <= words[i].length <= 7`',
    '`1 <= pref.length, suff.length <= 7`',
    '`words[i]`, `pref` and `suff` consist of lowercase English letters only.',
    'At most `10^4` calls will be made to the function `f`.',
  ],
  examples: [
    {
      input: 'ops = ["WordFilter","f"], args = [[["apple"]],["a","e"]]',
      output: '[null,0]',
      explanation: '"apple" has prefix "a" and suffix "e" at index 0.',
    },
    {
      input: 'ops = ["WordFilter","f","f","f"], args = [[["apple","apply"]],["app","le"],["app","ly"],["b","e"]]',
      output: '[null,0,1,-1]',
      explanation: '"apple" matches "app"+"le" at index 0; "apply" matches "app"+"ly" at index 1; no word matches "b"+"e".',
    },
  ],
  hints: [
    'For each word at index i, store all (prefix, suffix) → i pairs in a hash map. Query is O(1) but preprocessing is O(n × L²).',
    'Alternatively, build a trie of "suff#word" keys for every suffix of each word. Query pref by using a concatenated key lookup.',
    'The hash-map approach is simplest: for each word[i] enumerate all possible (pref, suff) pairs and map them to i. Later writes overwrite earlier ones, so the highest index wins.',
  ],
  functionName: 'wordFilter',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function wordFilter(ops, args) {

}`,
    typescript: 'function wordFilter(ops: string[], args: (string[] | string[])[]): (number | null)[] {\n\n}',
    python: `def wordFilter(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['WordFilter', 'f'],
        [[['apple']], ['a', 'e']],
      ],
      expected: [null, 0],
    },
    {
      args: [
        ['WordFilter', 'f', 'f', 'f'],
        [[['apple', 'apply']], ['app', 'le'], ['app', 'ly'], ['b', 'e']],
      ],
      expected: [null, 0, 1, -1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['WordFilter', 'f'],
        [[['caas', 'mooncat']], ['ca', 'as']],
      ],
      expected: [null, 0],
    },
    {
      args: [
        ['WordFilter', 'f', 'f'],
        [[['abc', 'abc']], ['a', 'c'], ['a', 'b']],
      ],
      expected: [null, 1, -1],
    },
    {
      args: [
        ['WordFilter', 'f', 'f', 'f'],
        [[['a', 'ab', 'abc']], ['a', 'a'], ['a', 'b'], ['a', 'c']],
      ],
      expected: [null, 0, 1, 2],
    },
    {
      args: [
        ['WordFilter', 'f'],
        [[['test', 'testing']], ['test', 'ing']],
      ],
      expected: [null, 1],
    },
    {
      args: [
        ['WordFilter', 'f', 'f'],
        [[['wind', 'windmill']], ['wind', 'wind'], ['wind', 'mill']],
      ],
      expected: [null, 0, 1],
    },
  ],
};
