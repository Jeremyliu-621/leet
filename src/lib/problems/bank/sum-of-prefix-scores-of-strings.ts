import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-prefix-scores-of-strings',
  title: 'Sum of Prefix Scores of Strings',
  difficulty: 'hard',
  tags: ['strings', 'hash-map'],
  description: `You are given an array \`words\` of size \`n\` consisting of **non-empty** strings.

We define the **score** of a string \`term\` as the **number of strings** in \`words\` that start with \`term\` (i.e., \`term\` is a prefix of those strings, including \`term\` itself if it appears in \`words\`).

The **prefix score** of \`words[i]\` is the **sum of scores** of all non-empty prefixes of \`words[i]\`.

Return an array \`answer\` of size \`n\` where \`answer[i]\` is the prefix score of \`words[i]\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'words[i] consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["abc","ab","bc","b"]',
      output: '[5,4,3,2]',
      explanation:
        '"abc": prefixes are "a"(2 words), "ab"(2 words), "abc"(1 word) → 2+2+1=5. "ab": "a"(2)+"ab"(2)=4. "bc": "b"(2)+"bc"(1)=3. "b": "b"(2)=2.',
    },
    {
      input: 'words = ["abcd"]',
      output: '[4]',
      explanation:
        '"abcd": each prefix "a","ab","abc","abcd" matches only 1 word → 1+1+1+1=4.',
    },
  ],
  hints: [
    'Build a trie from all words. At each trie node, store how many words pass through that node (i.e., how many words have that prefix).',
    'For each word, walk down the trie and sum the counts stored at each node along the path.',
    'Alternatively, for each prefix of each word, count how many words start with that prefix. Use a hash map: precompute prefix frequencies in one pass over all words.',
  ],
  functionName: 'sumPrefixScores',
  params: ['words'],
  starterCode: {
    javascript: `function sumPrefixScores(words) {
  // Return array of prefix scores for each word
}`,
    typescript: "function sumPrefixScores(words: string[]): number[] {\n  // Return array of prefix scores for each word\n}",

    python: `def sumPrefixScores(words: list[str]) -> list[int]:
    # Return list of prefix scores for each word
    pass`,
  },
  visibleTests: [
    { args: [['abc', 'ab', 'bc', 'b']], expected: [5, 4, 3, 2] },
    { args: [['abcd']], expected: [4] },
    { args: [['a', 'a', 'a']], expected: [3, 3, 3] },
  ],
  hiddenTests: [
    { args: [['ab', 'cd', 'ef']], expected: [2, 2, 2] },
    { args: [['abc', 'abc', 'bc']], expected: [6, 6, 2] },
    { args: [['a', 'ab', 'abc', 'abcd']], expected: [4, 7, 9, 10] },
    { args: [['z', 'za', 'zab']], expected: [3, 5, 6] },
    { args: [['aa', 'ab', 'ac']], expected: [4, 4, 4] },
    { args: [['hello', 'help', 'world']], expected: [8, 7, 5] },
  ],
};
