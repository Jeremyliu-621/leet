import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prefix-and-suffix-pairs-ii',
  title: 'Count Prefix and Suffix Pairs II',
  difficulty: 'hard',
  tags: ['strings', 'trie'],
  description: `You are given a **0-indexed** string array \`words\`.

Let's define a boolean function \`isPrefixAndSuffix(str1, str2)\`:

- It returns \`true\` if \`str1\` is **both** a prefix **and** a suffix of \`str2\`, and \`false\` otherwise.

Return an integer denoting the **number of pairs** \`(i, j)\` such that \`i < j\` and \`isPrefixAndSuffix(words[i], words[j])\` is \`true\`.

**Note:** This is the same problem as "Count Prefix and Suffix Pairs I" but with up to \`10^5\` words and total character length up to \`5 × 10^5\`. The O(n² × L) brute force is too slow — use a **trie on paired characters**.

For a word \`w\` of length \`L\`, define its **pair sequence** as \`[(w[0], w[L-1]), (w[1], w[L-2]), ..., (w[⌊L/2⌋-1], w[⌈L/2⌉])]\`.
Then \`isPrefixAndSuffix(s, t)\` is equivalent to: the pair sequence of \`s\` is a **prefix** of the pair sequence of \`t\`.

Process words left-to-right: for each word \`t\`, count how many prior words \`s\` have a pair sequence that is a prefix of \`t\`'s pair sequence (query a trie), then insert \`t\` into the trie.`,
  constraints: [
    '1 <= words.length <= 10^5',
    '1 <= words[i].length <= 10^5',
    'Total length of all words <= 5 × 10^5',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["a","aba","ababa","aa"]',
      output: '4',
      explanation: 'Pairs: (0,1) "a"→"aba" ✓, (0,2) "a"→"ababa" ✓, (0,3) "a"→"aa" ✓, (1,2) "aba"→"ababa" ✓. Total 4.',
    },
    {
      input: 'words = ["pa","papa","ma","mama"]',
      output: '2',
      explanation: 'isPrefixAndSuffix("pa","papa") = true, isPrefixAndSuffix("ma","mama") = true. Total 2.',
    },
    {
      input: 'words = ["abab","ab"]',
      output: '0',
      explanation: '"abab" is longer than "ab", so no pair is valid.',
    },
  ],
  hints: [
    'For word w of length L, define pair[i] = (w[i], w[L-1-i]) for 0 ≤ i < ⌈L/2⌉. Then isPrefixAndSuffix(s, t) iff s.length ≤ t.length AND pair_seq(s) is a prefix of pair_seq(t).',
    'Build a trie where edges are labelled by (charA, charB) pairs (up to 26×26=676 choices per node).',
    'For each word (left to right): first QUERY the trie — walk along pair_seq(word) accumulating the count stored at each node (counts inserted words whose pair_seq ends at that node). Then INSERT pair_seq(word) into the trie, incrementing the terminal count.',
    'The total work is O(sum of word lengths) = O(5×10^5), which is fast enough.',
  ],
  functionName: 'countPrefixSuffixPairs',
  params: ['words'],
  starterCode: {
    javascript: `function countPrefixSuffixPairs(words) {

}`,
    typescript: `function countPrefixSuffixPairs(words: string[]): number {

}`,
    python: `def countPrefixSuffixPairs(words: list[str]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['a', 'aba', 'ababa', 'aa']], expected: 4 },
    { args: [['pa', 'papa', 'ma', 'mama']], expected: 2 },
    { args: [['abab', 'ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 0 },
    { args: [['ab', 'ab']], expected: 1 },
    { args: [['a', 'b', 'aa']], expected: 1 },
    { args: [['abc', 'abcabc']], expected: 1 },
    { args: [['a', 'aa', 'aaa']], expected: 3 },
    { args: [['x', 'y', 'z']], expected: 0 },
    { args: [['ab', 'abab', 'ababab']], expected: 3 },
    { args: [['a', 'aba', 'ababa', 'abababa']], expected: 6 },
    { args: [['aa', 'aaa', 'aaaa']], expected: 3 },
    { args: [['ab', 'abab', 'ba', 'baba']], expected: 2 },
  ],
};
