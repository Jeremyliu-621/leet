import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trie-autocomplete',
  title: 'Trie Autocomplete',
  difficulty: 'medium',
  tags: ['trie', 'design'],
  description: `Implement a **trie** (prefix tree) that supports two operations:

- \`insert(word)\` — insert a word into the trie.
- \`autocomplete(prefix)\` — return all words in the trie that start with \`prefix\`, sorted lexicographically.

You are given a list of operations where each operation is \`["insert", word]\` or \`["autocomplete", prefix]\`. Return an array of results: for each \`"autocomplete"\` operation, push the sorted array of matching words; for each \`"insert"\` operation, push \`null\`.

**Example trie:** After inserting "apple", "app", "application", "apt":
- autocomplete("app") → ["app", "apple", "application"]
- autocomplete("apt") → ["apt"]
- autocomplete("b") → []`,
  constraints: [
    '1 <= operations.length <= 10^4',
    '1 <= word.length, prefix.length <= 20',
    'All strings consist of lowercase English letters only.',
    'At most 10^4 total insert operations.',
  ],
  examples: [
    {
      input: 'operations = [["insert","apple"],["insert","app"],["insert","apt"],["autocomplete","ap"],["autocomplete","apt"],["autocomplete","b"]]',
      output: '[null, null, null, ["app","apple","apt"], ["apt"], []]',
      explanation: '"ap" matches app, apple, apt. "apt" matches only apt. "b" matches nothing.',
    },
    {
      input: 'operations = [["insert","hello"],["insert","help"],["insert","world"],["autocomplete","hel"],["autocomplete","wor"]]',
      output: '[null, null, null, ["hello","help"], ["world"]]',
      explanation: '"hel" is a prefix of hello and help. "wor" is a prefix of world.',
    },
  ],
  hints: [
    'A trie node has a `children` map (char → node) and an `isEnd` flag. `insert` walks character by character, creating nodes as needed and setting `isEnd` at the last character.',
    'For `autocomplete`, navigate to the node at the end of the prefix. Then DFS from that node, collecting all words where `isEnd` is true. Append each character to a running string as you recurse.',
    `\`\`\`js\nfunction trieAutocomplete(operations) {\n  const root = { children: {}, isEnd: false };\n  const insert = (word) => {\n    let node = root;\n    for (const c of word) {\n      if (!node.children[c]) node.children[c] = { children: {}, isEnd: false };\n      node = node.children[c];\n    }\n    node.isEnd = true;\n  };\n  const collect = (node, prefix, result) => {\n    if (node.isEnd) result.push(prefix);\n    for (const c of Object.keys(node.children).sort())\n      collect(node.children[c], prefix + c, result);\n  };\n  const autocomplete = (prefix) => {\n    let node = root;\n    for (const c of prefix) { if (!node.children[c]) return []; node = node.children[c]; }\n    const result = [];\n    collect(node, prefix, result);\n    return result;\n  };\n  return operations.map(([op, s]) => op === 'insert' ? (insert(s), null) : autocomplete(s));\n}\n\`\`\``,
  ],
  functionName: 'trieAutocomplete',
  params: ['operations'],
  starterCode: {
    javascript: `function trieAutocomplete(operations) {\n\n}`,
    typescript: `function trieAutocomplete(operations: [string, string][]): (string[] | null)[] {\n\n}`,
    python: `def trieAutocomplete(operations: list[list[str]]) -> list:\n    pass`,
  },
  visibleTests: [
    {
      args: [[['insert', 'apple'], ['insert', 'app'], ['insert', 'apt'], ['autocomplete', 'ap'], ['autocomplete', 'apt'], ['autocomplete', 'b']]],
      expected: [null, null, null, ['app', 'apple', 'apt'], ['apt'], []],
    },
    {
      args: [[['insert', 'hello'], ['insert', 'help'], ['insert', 'world'], ['autocomplete', 'hel'], ['autocomplete', 'wor']]],
      expected: [null, null, null, ['hello', 'help'], ['world']],
    },
    {
      args: [[['insert', 'a'], ['autocomplete', 'a'], ['autocomplete', 'b']]],
      expected: [null, ['a'], []],
    },
  ],
  hiddenTests: [
    {
      args: [[['insert', 'abc'], ['insert', 'ab'], ['insert', 'a'], ['autocomplete', 'a']]],
      expected: [null, null, null, ['a', 'ab', 'abc']],
    },
    {
      args: [[['insert', 'dog'], ['insert', 'door'], ['insert', 'dot'], ['autocomplete', 'do']]],
      expected: [null, null, null, ['dog', 'door', 'dot']],
    },
    {
      args: [[['insert', 'test'], ['autocomplete', 'test'], ['autocomplete', 'tes']]],
      expected: [null, ['test'], ['test']],
    },
    {
      args: [[['insert', 'z'], ['autocomplete', 'a']]],
      expected: [null, []],
    },
    {
      args: [[['insert', 'cat'], ['insert', 'car'], ['insert', 'card'], ['autocomplete', 'car']]],
      expected: [null, null, null, ['car', 'card']],
    },
    {
      args: [[['insert', 'abc'], ['insert', 'abc'], ['autocomplete', 'abc']]],
      expected: [null, null, ['abc']],
    },
  ],
};
