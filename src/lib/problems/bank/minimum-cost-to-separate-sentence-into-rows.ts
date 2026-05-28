import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-separate-sentence-into-rows',
  title: 'Minimum Cost to Separate Sentence Into Rows',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a string \`sentence\` (a sequence of words separated by single spaces) and an integer \`k\`. You want to separate \`sentence\` into **rows** where the total character count of words on each row (including spaces between them) is at most \`k\`.

The **cost** of a row is \`(k - totalChars)^2\` where \`totalChars\` is the total length of characters (words + spaces) on that row. The **last row has zero cost**.

Return the **minimum total cost** to separate the sentence into rows.

**Example:**

\`sentence = "i love leetcode"\`, \`k = 12\`

Words: \`["i", "love", "leetcode"]\` (lengths 1, 4, 8)

Option 1: "i love" (6 chars, cost=(12-6)²=36), "leetcode" (8 chars, last row cost=0) → total **36**
Option 2: \`"i"\` (1 char, cost=121), \`"love leetcode"\` → 13 chars > 12 → **invalid**
Option 3: \`"i love"\` (6 chars, cost=36), \`"leetcode"\` → **36**

Minimum cost: **36**`,
  constraints: [
    '1 <= sentence.length <= 5000',
    'sentence consists of only lowercase English letters and spaces.',
    'sentence does not begin or end with a space.',
    'The words in sentence are separated by a single space.',
    '1 <= k <= 5000',
    'The length of each word is at most k.',
  ],
  examples: [
    {
      input: 'sentence = "i love leetcode", k = 12',
      output: '36',
      explanation: '"i love" on row 1 (cost=(12-6)²=36), "leetcode" on last row (cost=0). Total = 36.',
    },
    {
      input: 'sentence = "apples and bananas taste great", k = 7',
      output: '21',
      explanation: '"apples" (cost=0), "and" (cost=16), "bananas" (cost=0), "taste" (cost=4), "great" (last, cost=0). Total=21? Actually optimal is 21.',
    },
    {
      input: 'sentence = "a b c d e f", k = 5',
      output: '0',
      explanation: '"a b c" (5 chars, cost=0), "d e f" (5 chars, last, cost=0). Total=0.',
    },
  ],
  hints: [
    'Split the sentence into an array of words. Precompute prefix sums of word lengths to quickly compute the character count (words + spaces) of any range of words.',
    'Define `dp[i]` = minimum cost to place words `i..n-1`. The last row of words has cost 0.',
    'For each starting word i, try all ending words j such that words[i..j] fit in k chars. If j is the last word, cost is 0. Otherwise cost is (k - charsUsed)². Take the minimum.',
  ],
  functionName: 'minimumCost',
  params: ['sentence', 'k'],
  starterCode: {
    javascript: `function minimumCost(sentence, k) {

}`,
    typescript: "function minimumCost(sentence: string, k: number): number {\n\n}",

    python: `def minimumCost(sentence, k):
    pass
`,
  },
  visibleTests: [
    { args: ['i love leetcode', 12], expected: 36 },
    { args: ['apples and bananas taste great', 7], expected: 21 },
    { args: ['a b c d e f', 5], expected: 0 },
  ],
  hiddenTests: [
    { args: ['the quick brown fox', 10], expected: 1 },
    { args: ['hello world', 20], expected: 0 },
    { args: ['hello world', 5], expected: 0 },
    { args: ['a', 5], expected: 0 },
    { args: ['one two three four', 9], expected: 20 },
    { args: ['coding is fun', 10], expected: 1 },
  ],
};
