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
  const mask = w => [...w].reduce((m, c) => m | (1 << (c.charCodeAt(0) - 97)), 0);
  const set = new Set(startWords.map(mask));
  let count = 0;
  for (const t of targetWords) {
    const tm = mask(t);
    for (let i = 0; i < 26; i++) {
      if (tm & (1 << i) && set.has(tm ^ (1 << i))) { count++; break; }
    }
  }
  return count;
}`,
    typescript: `function wordCount(startWords: string[], targetWords: string[]): number {
  const mask = (w: string) => [...w].reduce((m, c) => m | (1 << (c.charCodeAt(0) - 97)), 0);
  const set = new Set(startWords.map(mask));
  let count = 0;
  for (const t of targetWords) {
    const tm = mask(t);
    for (let i = 0; i < 26; i++) {
      if (tm & (1 << i) && set.has(tm ^ (1 << i))) { count++; break; }
    }
  }
  return count;
}`,
    python: `def wordCount(startWords, targetWords):
    def mask(w): return sum(1 << (ord(c) - 97) for c in w)
    start_set = set(mask(w) for w in startWords)
    count = 0
    for t in targetWords:
        tm = mask(t)
        for i in range(26):
            if (tm >> i & 1) and (tm ^ (1 << i)) in start_set:
                count += 1; break
    return count`,
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
