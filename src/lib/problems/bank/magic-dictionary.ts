import type { Problem } from '../types';

export const problem: Problem = {
  id: 'magic-dictionary',
  title: 'Implement Magic Dictionary',
  difficulty: 'medium',
  tags: ['trie', 'hash-map', 'strings'],
  description: `Design a data structure that is initialized with a list of **different** words. Provided a string, you should determine if you can change **exactly one** character in this string to match any word in the data structure.

Implement the \`MagicDictionary\` class:

- \`MagicDictionary()\` Initializes the object.
- \`buildDict(dictionary)\` Sets the data structure with an array of distinct strings \`dictionary\`.
- \`search(searchWord)\` Returns \`true\` if you can change **exactly one** character in \`searchWord\` to match any string in the dictionary, otherwise returns \`false\`.

Simulate with arrays of operations and arguments. Return results (\`null\` for void operations).`,
  constraints: [
    '`1 <= dictionary.length <= 100`',
    '`1 <= dictionary[i].length <= 100`',
    '`dictionary[i]` consists of only lowercase English letters.',
    'All strings in `dictionary` are **distinct**.',
    '`1 <= searchWord.length <= 100`',
    '`searchWord` consists of only lowercase English letters.',
    'At most `100` calls total to `buildDict` and `search`.',
  ],
  examples: [
    {
      input: 'ops = ["MagicDictionary","buildDict","search","search","search","search"], args = [[],[["hello","hallo","haha"]],["hello"],["hhllo"],["hell"],["leetcode"]]',
      output: '[null,null,false,true,false,false]',
      explanation: '"hello" exists but 0 changes needed, not 1. "hhllo" changes h→e at index 1 to match "hello". "hell" is shorter. "leetcode" no match.',
    },
    {
      input: 'ops = ["MagicDictionary","buildDict","search","search"], args = [[],[["abc"]],["abc"],["abd"]]',
      output: '[null,null,false,true]',
      explanation: '"abc" would need 0 changes. "abd" changes d→c to match "abc".',
    },
  ],
  hints: [
    'For search, compare the searchWord against each dictionary word of the same length: count differing characters. Return true if exactly one difference exists.',
    'With the given constraints (≤100 words, ≤100 length), brute-force comparison is O(N×L) per search and is fast enough.',
    'A trie approach: at each node, try replacing the current char with every other char; recurse only when you have exactly 1 substitution remaining.',
  ],
  functionName: 'magicDictionary',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function magicDictionary(ops, args) {

}`,
    typescript: 'function magicDictionary(ops: string[], args: (string | string[])[][]): (boolean | null)[] {\n\n}',
    python: `def magicDictionary(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search'],
        [[], [['hello', 'hallo', 'haha']], ['hello'], ['hhllo'], ['hell'], ['leetcode']],
      ],
      expected: [null, null, false, true, false, false],
    },
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search', 'search'],
        [[], [['abc']], ['abc'], ['abd']],
      ],
      expected: [null, null, false, true],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search'],
        [[], [['a']], ['b']],
      ],
      expected: [null, null, true],
    },
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search', 'search'],
        [[], [['hello']], ['bello'], ['hello']],
      ],
      expected: [null, null, true, false],
    },
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search', 'search', 'search'],
        [[], [['cat', 'bat', 'hat']], ['cat'], ['mat'], ['ca']],
      ],
      expected: [null, null, false, true, false],
    },
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search'],
        [[], [['ab']], ['aa']],
      ],
      expected: [null, null, true],
    },
    {
      args: [
        ['MagicDictionary', 'buildDict', 'search', 'search'],
        [[], [['abc', 'xyz']], ['ayc'], ['axz']],
      ],
      expected: [null, null, true, false],
    },
  ],
};
