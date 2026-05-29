import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-search-autocomplete-system',
  title: 'Design Search Autocomplete System',
  difficulty: 'hard',
  tags: ['trie', 'design', 'strings'],
  description: `Design a search autocomplete system for a search engine. Users may input a sentence (at least one word, ending with a special character \`'#'\`).

Implement the \`AutocompleteSystem\` class:

- \`AutocompleteSystem(sentences, times)\` Initializes the object with the \`sentences\` and corresponding \`times\`.
- \`List<String> input(c)\` This indicates that the user typed the character \`c\`.
  - Returns the **top 3** historical hot sentences that have the same prefix as the part of the sentence already typed.
  - If there are fewer than 3 matches, return all of them.
  - The **hot degree** for a sentence is defined as the number of times a user has typed the **exact** same sentence before.
  - The returned top 3 hot sentences should be sorted by **hot degree** (descending). If several sentences have the same hot degree, use **ASCII-code order** (ascending) as the tiebreaker.
  - If the input is \`'#'\`, the user finishes the input sentence. Store the typed sentence and clear the current input.

Simulate with arrays of operations. Return results (\`null\` for constructor, list for each input call). Each input call except '#' returns a list of up to 3 strings; '#' returns an empty list \`[]\`.`,
  constraints: [
    '`1 <= sentences.length <= 100`',
    '`1 <= sentences[i].length <= 100`',
    '`1 <= times[i] <= 50`',
    '`c` is a lowercase English letter or `\'#\'`.',
    'Each sentence consists of lowercase letters only.',
    'At most `5000` calls will be made to `input`.',
    'It is guaranteed that the input sentence during each call to `input` forms a valid sentence.',
  ],
  examples: [
    {
      input: 'ops = ["AutocompleteSystem","input","input","input","input"], args = [[["i love you","island","iroman","i love leetcode"],[5,3,2,2]],["i"],[""],["a"],["#"]]',
      output: '[null,["i love you","island","i love leetcode"],["i love you","i love leetcode"],["i love you","i love leetcode","iroman"],[]]',
      explanation: 'After "i": top matches by hot degree. After "i ": "i love you"(5) and "i love leetcode"(2). After "i a": no match, return []. "#" ends input — "i a" is stored with count 1.',
    },
  ],
  hints: [
    'Use a hash map from sentence → count for lookups. On each character input, maintain the current prefix string and filter + sort matching sentences.',
    'For `input(c)`: if c is "#", add current prefix to the map (increment count), clear prefix, return []. Otherwise append c to prefix, scan all map entries whose key starts with prefix, sort by (-count, key), return first 3.',
    'Optionally build a trie where each node stores the top-3 matches for that prefix, but a simple prefix-scan over a map works for the given constraints.',
  ],
  functionName: 'autoCompleteSystem',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function autoCompleteSystem(ops, args) {

}`,
    typescript: 'function autoCompleteSystem(ops: string[], args: unknown[][]): (string[] | null)[] {\n\n}',
    python: `def autoCompleteSystem(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['AutocompleteSystem', 'input', 'input', 'input', 'input'],
        [
          [['i love you', 'island', 'iroman', 'i love leetcode'], [5, 3, 2, 2]],
          ['i'],
          [' '],
          ['a'],
          ['#'],
        ],
      ],
      expected: [null, ['i love you', 'island', 'i love leetcode'], ['i love you', 'i love leetcode'], [], []],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['AutocompleteSystem', 'input', 'input', 'input'],
        [
          [['abc', 'abd'], [3, 3]],
          ['a'],
          ['b'],
          ['#'],
        ],
      ],
      expected: [null, ['abc', 'abd'], ['abc', 'abd'], []],
    },
    {
      args: [
        ['AutocompleteSystem', 'input', 'input', 'input', 'input'],
        [
          [['hello', 'hi'], [5, 3]],
          ['h'],
          ['i'],
          ['#'],
          ['h'],
        ],
      ],
      expected: [null, ['hello', 'hi'], ['hi'], [], ['hello', 'hi']],
    },
    {
      args: [
        ['AutocompleteSystem', 'input', 'input', 'input'],
        [
          [['a', 'ab', 'abc', 'abcd'], [4, 3, 2, 1]],
          ['a'],
          ['b'],
          ['#'],
        ],
      ],
      expected: [null, ['a', 'ab', 'abc'], ['ab', 'abc', 'abcd'], []],
    },
    {
      args: [
        ['AutocompleteSystem', 'input', 'input', 'input'],
        [
          [['a', 'b', 'c'], [1, 1, 1]],
          ['a'],
          ['#'],
          ['a'],
        ],
      ],
      expected: [null, ['a'], [], ['a']],
    },
  ],
};
