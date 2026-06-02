import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-common-word',
  title: 'Most Common Word',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`paragraph\` and a string array \`banned\`, return the **most frequent** word that is **not banned**. It is guaranteed there is at least one word that is not banned, and the answer is unique.

The words in \`paragraph\` are **case-insensitive** and the answer should be returned in **lowercase**.

Punctuation characters (\`!?',;.\`) should be ignored — strip them before processing.

**Example:**

\`paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."\`
\`banned = ["hit"]\`

Word frequencies (excluding banned): \`bob:1, a:1, ball:2, the:1, flew:1, far:1, after:1, it:1, was:1\`

Most common non-banned word: \`"ball"\` (appears 2 times).`,
  constraints: [
    '1 <= paragraph.length <= 1000',
    "paragraph consists of English letters, space, and the punctuation symbols !?'\\,;.",
    '0 <= banned.length <= 100',
    '1 <= banned[i].length <= 10',
    'banned[i] consists of only lowercase English letters',
  ],
  examples: [
    {
      input: 'paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]',
      output: '"ball"',
      explanation: '"ball" appears 2 times (ignoring case and punctuation). "hit" is banned.',
    },
    {
      input: 'paragraph = "a.", banned = []',
      output: '"a"',
      explanation: 'Only word after stripping punctuation is "a".',
    },
  ],
  hints: [
    'Convert the paragraph to lowercase, then replace all punctuation with spaces. Split on whitespace to get individual words.',
    'Count the frequency of each non-banned word using a hash map. Return the word with the highest count.',
    'Use a regex or character-by-character scan to strip non-alpha characters. Build a Set from banned words for O(1) lookup when filtering.',
  ],
  functionName: 'mostCommonWord',
  params: ['paragraph', 'banned'],
  starterCode: {
    javascript: `function mostCommonWord(paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().replace(/[^a-z]/g, ' ').split(/\s+/).filter(w => w);
  const freq = new Map();
  for (const w of words) if (!bannedSet.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1);
  return [...freq.entries()].reduce((a, b) => b[1] > a[1] ? b : a)[0];
}`,
    typescript: `function mostCommonWord(paragraph: string, banned: string[]): string {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().replace(/[^a-z]/g, ' ').split(/\s+/).filter(w => w);
  const freq = new Map<string, number>();
  for (const w of words) if (!bannedSet.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1);
  return [...freq.entries()].reduce((a, b) => b[1] > a[1] ? b : a)[0];
}`,
    python: `def mostCommonWord(paragraph, banned):
    import re
    from collections import Counter
    banned_set = set(banned)
    words = re.findall(r'[a-z]+', paragraph.lower())
    freq = Counter(w for w in words if w not in banned_set)
    return freq.most_common(1)[0][0]`,
  },
  visibleTests: [
    { args: ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']], expected: 'ball' },
    { args: ['a.', []], expected: 'a' },
    { args: ['Bob. hIt, baLl', ['bob', 'hit']], expected: 'ball' },
  ],
  hiddenTests: [
    { args: ['a, a, a, a, b,b,b,c, c', ['a']], expected: 'b' },
    { args: ['Bob. hIt, baLl baLl baLl', ['bob']], expected: 'ball' },
    { args: ['!a, a, b?', []], expected: 'a' },
    { args: ['jack is awesome', ['awesome', 'jack']], expected: 'is' },
    { args: ['the quick brown the fox the', []], expected: 'the' },
    { args: ['hello world Hello', []], expected: 'hello' },
  ],
};
