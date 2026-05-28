import type { Problem } from '../types';

const JS_PREAMBLE = `
function wordDictionaryRunner(ops, args) {
  const d = new WordDictionary();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'addWord') { d.addWord(a[0]); return null; }
    if (op === 'search') return d.search(a[0]);
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def wordDictionaryRunner(ops, args):
    d = WordDictionary()
    result = []
    for op, a in zip(ops, args):
        if op == 'addWord':
            d.addWord(a[0])
            result.append(None)
        elif op == 'search':
            result.append(d.search(a[0]))
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'design-add-and-search-words',
  title: 'Design Add and Search Words Data Structure',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the \`WordDictionary\` class:
- \`addWord(word)\` — adds \`word\` to the data structure.
- \`search(word)\` — returns \`true\` if there is any string in the data structure that matches \`word\` or \`false\` otherwise. \`word\` may contain dots \`'.'\` where dots can be matched with any letter.

> **Note:** A runner function is pre-defined.`,
  constraints: [
    '1 <= word.length <= 25',
    'word in addWord consists of lowercase English letters',
    'word in search consists of "." or lowercase English letters',
    'There will be at most 3 dots in word for search queries',
    'At most 10^4 calls will be made to addWord and search',
  ],
  examples: [
    {
      input: 'ops=["addWord","addWord","addWord","search","search","search","search"], args=[["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]',
      output: '[null,null,null,false,true,true,true]',
    },
  ],
  hints: [
    'Use a Trie for efficient prefix-based lookup.',
    'For addWord, insert the word character by character into the Trie.',
    'For search, use DFS/recursion. At each node, if the current character is ".", recurse into all children; otherwise follow the exact child.',
  ],
  functionName: 'wordDictionaryRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// wordDictionaryRunner is pre-defined.\nclass WordDictionary {\n  constructor() {}\n  addWord(word) {}\n  search(word) {}\n}\n',
    python: '# wordDictionaryRunner is pre-defined.\nclass WordDictionary:\n    def __init__(self): pass\n    def addWord(self, word): pass\n    def search(self, word): pass\n',
  },
  visibleTests: [
    {
      args: [
        ['addWord', 'addWord', 'addWord', 'search', 'search', 'search', 'search'],
        [['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..']],
      ],
      expected: [null, null, null, false, true, true, true],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['addWord', 'search', 'search', 'search'],
        [['a'], ['a'], ['.'], ['b']],
      ],
      expected: [null, true, true, false],
    },
    {
      args: [
        ['addWord', 'addWord', 'search', 'search', 'search'],
        [['abc'], ['xyz'], ['a.c'], ['...'], ['a.x']],
      ],
      expected: [null, null, true, true, false],
    },
  ],
};
