import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-magic-trie-stream',
  title: 'Stream of Characters',
  difficulty: 'hard',
  tags: ['trie', 'strings', 'design'],
  description: `Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings \`words\`.

Implement the \`StreamChecker\` class:

- \`StreamChecker(words)\` Initializes the object with the strings array \`words\`.
- \`query(letter)\` Accepts a new character from the stream and returns \`true\` if any non-empty suffix of the characters queried so far is in \`words\`, \`false\` otherwise.

Simulate with the constructor call followed by query operations. Return results (\`null\` for the constructor).`,
  constraints: [
    '`1 <= words.length <= 2000`',
    '`1 <= words[i].length <= 2000`',
    '`words[i]` consists of lowercase English letters.',
    '`letter` is a lowercase English letter.',
    'At most `4 * 10^4` calls will be made to `query`.',
  ],
  examples: [
    {
      input: 'ops = ["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query"], args = [[["cd","f","kl"]],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"]]',
      output: '[null,false,false,false,true,false,true,false,false,false,false,false,true]',
      explanation: 'After "d", suffix "cd" is in words. After "f", "f" is in words. After "l", suffix "kl" is in words.',
    },
  ],
  hints: [
    'Build a trie of the reversed words. Maintain a list of active trie nodes representing all ongoing potential suffix matches.',
    'On each query(letter): start fresh active nodes at the root (checking every possible new suffix start), then advance all active nodes by the current letter. A match is found when an active node is a word-end node.',
    'Since we look backward in the stream, insert words reversed into the trie. Keep `maxLen = max word length` to bound how far back we scan.',
  ],
  functionName: 'streamOfCharacters',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function streamOfCharacters(ops, args) {

}`,
    typescript: 'function streamOfCharacters(ops: string[], args: (string | string[])[][]): (boolean | null)[] {\n\n}',
    python: `def streamOfCharacters(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['StreamChecker', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query'],
        [[['cd', 'f', 'kl']], ['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g'], ['h'], ['i'], ['j'], ['k'], ['l']],
      ],
      expected: [null, false, false, false, true, false, true, false, false, false, false, false, true],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['StreamChecker', 'query', 'query', 'query'],
        [[['a']], ['b'], ['a'], ['c']],
      ],
      expected: [null, false, true, false],
    },
    {
      args: [
        ['StreamChecker', 'query', 'query', 'query', 'query', 'query'],
        [[['ab', 'ba']], ['a'], ['b'], ['a'], ['b'], ['a']],
      ],
      expected: [null, false, true, true, true, true],
    },
    {
      args: [
        ['StreamChecker', 'query', 'query', 'query', 'query'],
        [[['abc']], ['a'], ['b'], ['c'], ['d']],
      ],
      expected: [null, false, false, true, false],
    },
    {
      args: [
        ['StreamChecker', 'query', 'query'],
        [[['z']], ['a'], ['z']],
      ],
      expected: [null, false, true],
    },
  ],
};
