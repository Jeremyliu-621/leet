import type { Problem } from '../types';

const JS_PREAMBLE = `
function trieRunner(ops, words) {
  const trie = new Trie();
  return ops.map((op, i) => {
    if (op === 'insert') { trie.insert(words[i]); return null; }
    if (op === 'search') return trie.search(words[i]);
    if (op === 'startsWith') return trie.startsWith(words[i]);
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def trieRunner(ops, words):
    trie = Trie()
    result = []
    for op, word in zip(ops, words):
        if op == 'insert':
            trie.insert(word)
            result.append(None)
        elif op == 'search':
            result.append(trie.search(word))
        elif op == 'startsWith':
            result.append(trie.startsWith(word))
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'implement-trie',
  title: 'Implement Trie (Prefix Tree)',
  difficulty: 'medium',
  tags: ['strings'],
  description: `A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.

Implement the \`Trie\` class:
- \`Trie()\` — initializes the trie object.
- \`void insert(String word)\` — inserts the string \`word\` into the trie.
- \`boolean search(String word)\` — returns \`true\` if the string \`word\` is in the trie (i.e., was inserted before), and \`false\` otherwise.
- \`boolean startsWith(String prefix)\` — returns \`true\` if there is a previously inserted string that has the prefix \`prefix\`, and \`false\` otherwise.

> **Note:** A runner function \`trieRunner(ops, words)\` is pre-defined. It creates a \`Trie\` and calls the corresponding method for each op/word pair, returning the results.`,
  constraints: [
    '1 <= word.length, prefix.length <= 2000',
    'word and prefix consist only of lowercase English letters',
    'At most 3 * 10^4 calls in total',
  ],
  examples: [
    {
      input: 'ops = ["insert","search","search","startsWith","insert","search"], words = ["apple","apple","app","app","app","app"]',
      output: '[null,true,false,true,null,true]',
      explanation: 'After inserting "apple", searching "app" returns false (exact match only). After inserting "app", it returns true.',
    },
  ],
  hints: [
    'Each node in the trie stores a map of children (keyed by character) and a flag marking if it is the end of a word.',
    'For insert: traverse/create nodes for each character, mark the last node as end-of-word.',
    'For search: traverse nodes; return true only if you reach the end AND the end-of-word flag is set. For startsWith, omit the flag check.',
  ],
  functionName: 'trieRunner',
  params: ['ops', 'words'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// trieRunner is pre-defined and calls your class below.
class Trie {
  constructor() {

  }

  insert(word) {

  }

  search(word) {

  }

  startsWith(prefix) {

  }
}`,
    typescript: "function trieRunner(ops: string[], words: string[]): (null | boolean)[] {\n  constructor() {\n\n  }\n\n  insert(word) {\n\n  }\n\n  search(word) {\n\n  }\n\n  startsWith(prefix) {\n\n  }\n}",

    python: `# trieRunner is pre-defined and calls your class below.
class Trie:
    def __init__(self):
        pass

    def insert(self, word: str) -> None:
        pass

    def search(self, word: str) -> bool:
        pass

    def startsWith(self, prefix: str) -> bool:
        pass`,
  },
  visibleTests: [
    {
      args: [
        ['insert', 'search', 'search', 'startsWith', 'insert', 'search'],
        ['apple', 'apple', 'app', 'app', 'app', 'app'],
      ],
      expected: [null, true, false, true, null, true],
    },
  ],
  hiddenTests: [
    {
      args: [['insert', 'search', 'startsWith'], ['a', 'a', 'a']],
      expected: [null, true, true],
    },
    {
      args: [['insert', 'search', 'startsWith', 'search'], ['hello', 'hello', 'hell', 'hell']],
      expected: [null, true, true, false],
    },
    {
      args: [
        ['insert', 'insert', 'search', 'search', 'startsWith', 'startsWith'],
        ['car', 'card', 'car', 'card', 'ca', 'cards'],
      ],
      expected: [null, null, true, true, true, false],
    },
    {
      args: [['insert', 'search', 'search'], ['ab', 'a', 'ab']],
      expected: [null, false, true],
    },
  ],
};
