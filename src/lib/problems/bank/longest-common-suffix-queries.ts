import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-suffix-queries',
  title: 'Longest Common Suffix Queries',
  difficulty: 'hard',
  tags: ['arrays', 'strings', 'trie'],
  description: `You are given two arrays of strings \`wordsContainer\` and \`wordsQuery\`.

For each \`wordsQuery[i]\`, you need to find a string from \`wordsContainer\` that has the **longest common suffix** with \`wordsQuery[i]\`. If there are two or more strings in \`wordsContainer\` that share the maximum length of common suffix, find the string that is the **shortest**. If there are two or more such strings that have the same shortest length, find the one with the **smallest index** in \`wordsContainer\`.

Return an array of integers \`answer\`, where \`answer[i]\` is the index of the string in \`wordsContainer\` that has the longest common suffix with \`wordsQuery[i]\`.`,
  constraints: [
    '1 <= wordsContainer.length, wordsQuery.length <= 10^4',
    '1 <= wordsContainer[i].length <= 5 * 10^3',
    '1 <= wordsQuery[i].length <= 5 * 10^3',
    'wordsContainer[i] consists only of lowercase English letters',
    'wordsQuery[i] consists only of lowercase English letters',
    'Sum of wordsContainer[i].length is at most 5 * 10^5',
    'Sum of wordsQuery[i].length is at most 5 * 10^5',
  ],
  examples: [
    {
      input: 'wordsContainer = ["abcd","bcd","xbcd","xbcde"], wordsQuery = ["bcd","abcd","e"]',
      output: '[1,0,3]',
      explanation:
        'For "bcd": longest common suffix with "abcd"=3, "bcd"=3, "xbcd"=3, "xbcde"=0. Max=3, shortest among indices 0,1,2 is "bcd" (len 3, idx 1). For "abcd": max LCS=4 only with "abcd" (idx 0). For "e": LCS with "xbcde"=1, others=0. Answer idx=3.',
    },
    {
      input: 'wordsContainer = ["ab","bc"], wordsQuery = ["bc","b"]',
      output: '[1,0]',
      explanation:
        'For "bc": LCS with "ab"=0, "bc"=2. Max=2 at idx 1. For "b": LCS with "ab"=1, "bc"=0. Max=1 at idx 0.',
    },
    {
      input: 'wordsContainer = ["abc","bc","c"], wordsQuery = ["bc"]',
      output: '[1]',
      explanation: 'LCS("bc","abc")=2, LCS("bc","bc")=2, LCS("bc","c")=1. Max=2 at idx 0 (len 3) and idx 1 (len 2). Shortest is "bc" at idx 1.',
    },
  ],
  hints: [
    'Level 1: A trie of reversed words efficiently finds the longest common suffix: the longest common prefix of two reversed strings equals the longest common suffix of the originals.',
    'Level 2: Build a trie by inserting each wordsContainer[i] reversed. At each trie node, store the index of the "best" container word (shortest length; smallest index on tie) among all words whose reversed form passes through that node.',
    'Level 3: For each query, reverse it and traverse the trie as far as possible. The "best" index stored at the deepest node reached is the answer for that query.',
  ],
  functionName: 'stringIndices',
  params: ['wordsContainer', 'wordsQuery'],
  starterCode: {
    javascript: `function stringIndices(wordsContainer, wordsQuery) {
  const root = { ch: {}, best: -1 };
  const updateBest = (node, idx, len) => {
    const bLen = node.best === -1 ? Infinity : wordsContainer[node.best].length;
    if (len < bLen || (len === bLen && idx < node.best)) node.best = idx;
  };
  for (let idx = 0; idx < wordsContainer.length; idx++) {
    const w = wordsContainer[idx];
    let cur = root;
    updateBest(cur, idx, w.length);
    for (let i = w.length - 1; i >= 0; i--) {
      const c = w[i];
      if (!cur.ch[c]) cur.ch[c] = { ch: {}, best: -1 };
      cur = cur.ch[c];
      updateBest(cur, idx, w.length);
    }
  }
  return wordsQuery.map(q => {
    let cur = root;
    for (let i = q.length - 1; i >= 0; i--) {
      if (!cur.ch[q[i]]) break;
      cur = cur.ch[q[i]];
    }
    return cur.best;
  });
}`,
    typescript: `function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
  type TrieNode = { ch: Record<string, TrieNode>; best: number };
  const root: TrieNode = { ch: {}, best: -1 };
  const updateBest = (node: TrieNode, idx: number, len: number): void => {
    const bLen = node.best === -1 ? Infinity : wordsContainer[node.best]!.length;
    if (len < bLen || (len === bLen && idx < node.best)) node.best = idx;
  };
  for (let idx = 0; idx < wordsContainer.length; idx++) {
    const w = wordsContainer[idx]!;
    let cur = root;
    updateBest(cur, idx, w.length);
    for (let i = w.length - 1; i >= 0; i--) {
      const c = w[i]!;
      if (!cur.ch[c]) cur.ch[c] = { ch: {}, best: -1 };
      cur = cur.ch[c]!;
      updateBest(cur, idx, w.length);
    }
  }
  return wordsQuery.map(q => {
    let cur = root;
    for (let i = q.length - 1; i >= 0; i--) {
      if (!cur.ch[q[i]!]) break;
      cur = cur.ch[q[i]!]!;
    }
    return cur.best;
  });
}`,
    python: `def stringIndices(wordsContainer, wordsQuery):
    root = {'ch': {}, 'best': -1}

    def update_best(node, idx, length):
        if node['best'] == -1:
            best_len = float('inf')
        else:
            best_len = len(wordsContainer[node['best']])
        if length < best_len or (length == best_len and idx < node['best']):
            node['best'] = idx

    for idx, w in enumerate(wordsContainer):
        cur = root
        update_best(cur, idx, len(w))
        for c in reversed(w):
            if c not in cur['ch']:
                cur['ch'][c] = {'ch': {}, 'best': -1}
            cur = cur['ch'][c]
            update_best(cur, idx, len(w))

    result = []
    for q in wordsQuery:
        cur = root
        for c in reversed(q):
            if c not in cur['ch']:
                break
            cur = cur['ch'][c]
        result.append(cur['best'])
    return result`,
  },
  visibleTests: [
    {
      args: [['abcd', 'bcd', 'xbcd', 'xbcde'], ['bcd', 'abcd', 'e']],
      expected: [1, 0, 3],
    },
    {
      args: [['ab', 'bc'], ['bc', 'b']],
      expected: [1, 0],
    },
    {
      args: [['abc', 'bc', 'c'], ['bc']],
      expected: [1],
    },
  ],
  hiddenTests: [
    { args: [['a'], ['a']], expected: [0] },
    { args: [['a', 'b'], ['a', 'b', 'c']], expected: [0, 1, 0] },
    { args: [['aa', 'a'], ['aaa']], expected: [0] },
    { args: [['ba', 'b'], ['ab']], expected: [1] },
    { args: [['speak', 'speak'], ['speak']], expected: [0] },
    { args: [['abcde', 'bcd'], ['cde', 'e']], expected: [0, 0] },
    { args: [['a', 'b'], ['ab']], expected: [1] },
  ],
};
