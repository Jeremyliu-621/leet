import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-obtained-after-adding-a-letter',
  title: 'Count Words Obtained After Adding a Letter',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given two **0-indexed** arrays of strings \`startWords\` and \`targetWords\`. Each string consists of **lowercase English letters** only.

For each string in \`targetWords\`, check if it is possible to choose a string from \`startWords\` and perform the following operations:
1. **Append** any lowercase letter that is **not present** in the chosen string to its **end**.
2. **Rearrange** the letters of the new string in **any** order.

Return *the number of strings in* \`targetWords\` *that can be obtained by performing the operations on **any** string of* \`startWords\`.

**Example 1:**
\`\`\`
Input: startWords = ["ant","act","tack"], targetWords = ["tack","act","acti"]
Output: 2
Explanation: tack = act + 'k' (rearranged), acti = act + 'i'. "act" cannot be formed.
\`\`\``,
  examples: [
    { input: '["ant","act","tack"], ["tack","act","acti"]', output: '2' },
    { input: '["ab","a"], ["abc","abcd"]', output: '1' },
  ],
  constraints: [
    '1 <= startWords.length, targetWords.length <= 5 * 10^4',
    '1 <= startWords[i].length, targetWords[j].length <= 26',
    'Each string of startWords and targetWords consists of lowercase English letters only.',
    'No letter occurs more than once in any string of startWords or targetWords.',
  ],
  hints: [
    'Represent each word as a bitmask of 26 bits (bit i set if letter i+\'a\' is present).',
    'Store all start word bitmasks in a Set.',
    'For each target word bitmask, try removing each of its letters (there are at most 26). If the result is in the Set, count it.',
  ],
  functionName: 'wordCount',
  params: ['startWords', 'targetWords'],
  starterCode: {
    javascript: `function wordCount(startWords, targetWords) {

}`,
    python: `def wordCount(startWords, targetWords):
    `,
  },
  visibleTests: [
    { args: [['ant','act','tack'], ['tack','act','acti']], expected: 2 },
    { args: [['ab','a'], ['abc','abcd']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['a'], ['b','ab']], expected: 1 },
    { args: [['abcdefghijklmnopqrstuvwxyz'.slice(0,25)], ['abcdefghijklmnopqrstuvwxyz']], expected: 1 },
  ],
};
