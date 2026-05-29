import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-trie-prefix-tree',
  title: 'Implement Trie (Prefix Tree)',
  difficulty: 'medium',
  tags: ['design', 'tree', 'strings', 'hash-map'],
  description: `A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the \`Trie\` class:

- \`Trie()\` Initializes the trie object.
- \`void insert(String word)\` Inserts the string \`word\` into the trie.
- \`boolean search(String word)\` Returns \`true\` if the string \`word\` is in the trie (i.e., was inserted before), and \`false\` otherwise.
- \`boolean startsWith(String prefix)\` Returns \`true\` if there is a previously inserted string that has the prefix \`prefix\`, and \`false\` otherwise.

**Input format:** An array of operations \`[["Trie", []], ["insert", ["word"]], ...]\` where each element is \`[methodName, [args]]\`. Return an array of results (use \`null\` for void methods).`,
  constraints: [
    '1 <= word.length, prefix.length <= 2000',
    'word and prefix consist only of lowercase English letters.',
    'At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.',
  ],
  examples: [
    {
      input: 'ops = [["Trie",[]],["insert",["apple"]],["search",["apple"]],["search",["app"]],["startsWith",["app"]],["insert",["app"]],["search",["app"]]]',
      output: '[null,null,true,false,true,null,true]',
      explanation: 'After inserting "apple": search("apple")=true, search("app")=false (not a full word), startsWith("app")=true. After inserting "app": search("app")=true.',
    },
  ],
  hints: [
    'Each trie node stores a map (or 26-element array) of children and a boolean marking whether a word ends at this node.',
    'For `insert`, walk the trie character by character, creating new nodes as needed, then mark the final node as end-of-word.',
    'For `search`, walk the trie and check that the final node exists and is marked end-of-word. For `startsWith`, just check that all prefix characters exist in the trie.',
  ],
  functionName: 'trieOps',
  params: ['ops'],
  starterCode: {
    javascript: `function trieOps(ops) {
  // ops is an array of [methodName, args] pairs.
  // Return an array of results; use null for void methods.
  const results = [];
  let trie;
  for (const [method, args] of ops) {
    if (method === 'Trie') {
      // Initialize your Trie here
      trie = new Trie();
      results.push(null);
    } else {
      results.push(trie[method](...args));
    }
  }
  return results;
}

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
    typescript: "function trieOps(ops: ((string | unknown[])[] | (string | string[])[])[]): (null | boolean)[] {\n  // ops is an array of [methodName, args] pairs.\n  // Return an array of results; use null for void methods.\n  const results = [];\n  let trie;\n  for (const [method, args] of ops) {\n    if (method === 'Trie') {\n      // Initialize your Trie here\n      trie = new Trie();\n      results.push(null);\n    } else {\n      results.push(trie[method](...args));\n    }\n  }\n  return results;\n}\n\nclass Trie {\n  constructor() {\n\n  }\n  insert(word) {\n\n  }\n  search(word) {\n\n  }\n  startsWith(prefix) {\n\n  }\n}",

    python: `def trieOps(ops):
    # ops is a list of [method, args] pairs.
    # Return a list of results; use None for void methods.
    ops = ops.to_py() if hasattr(ops, 'to_py') else list(ops)
    results = []
    trie = None
    for op in ops:
        op = op.to_py() if hasattr(op, 'to_py') else list(op)
        method = op[0]
        args = list(op[1].to_py() if hasattr(op[1], 'to_py') else op[1])
        if method == 'Trie':
            trie = Trie()
            results.append(None)
        else:
            results.append(getattr(trie, method)(*args))
    return results

class Trie:
    def __init__(self):
        pass
    def insert(self, word):
        pass
    def search(self, word):
        pass
    def startsWith(self, prefix):
        pass`,
  },
  visibleTests: [
    {
      args: [[['Trie', []], ['insert', ['apple']], ['search', ['apple']], ['search', ['app']], ['startsWith', ['app']], ['insert', ['app']], ['search', ['app']]]],
      expected: [null, null, true, false, true, null, true],
    },
    {
      args: [[['Trie', []], ['insert', ['hello']], ['search', ['hell']], ['startsWith', ['hell']], ['search', ['hello']]]],
      expected: [null, null, false, true, true],
    },
  ],
  hiddenTests: [
    {
      args: [[['Trie', []], ['search', ['a']]]],
      expected: [null, false],
    },
    {
      args: [[['Trie', []], ['insert', ['abc']], ['insert', ['ab']], ['search', ['a']], ['search', ['ab']], ['search', ['abc']], ['startsWith', ['a']]]],
      expected: [null, null, null, false, true, true, true],
    },
    {
      args: [[['Trie', []], ['insert', ['a']], ['search', ['a']], ['startsWith', ['a']], ['startsWith', ['b']]]],
      expected: [null, null, true, true, false],
    },
    {
      args: [[['Trie', []], ['insert', ['ab']], ['search', ['a']], ['search', ['ab']], ['startsWith', ['a']]]],
      expected: [null, null, false, true, true],
    },
    {
      args: [[['Trie', []], ['insert', ['car']], ['insert', ['card']], ['search', ['car']], ['search', ['card']], ['search', ['care']], ['startsWith', ['car']]]],
      expected: [null, null, null, true, true, false, true],
    },
  ],
};
