import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-palindromes-after-operations',
  title: 'Maximum Palindromes After Operations',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given an array \`words\` of **distinct** strings.

In one operation, you can choose any two indices \`i\` and \`j\` (0-indexed) in \`words\`, then pick any character position \`k\` in \`words[i]\` and any character position \`m\` in \`words[j]\`, and swap \`words[i][k]\` with \`words[j][m]\`.

Return the **maximum** number of strings in \`words\` that can be made into **palindromes**.

A palindrome is a string that reads the same forwards and backwards.`,
  constraints: [
    '`1 <= words.length <= 1000`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abcd","dba","nac"]',
      output: '3',
      explanation: 'All characters pooled: a×3,b×2,c×2,d×2,n×1 → 4 pairs. Lengths sorted: [3,3,4]. Need 1+1+2=4 pairs → all 3 can be palindromes.',
    },
    {
      input: 'words = ["a"]',
      output: '1',
      explanation: '"a" is already a palindrome of length 1 (needs 0 pairs).',
    },
    {
      input: 'words = ["ab"]',
      output: '0',
      explanation: 'a×1 and b×1 → 0 pairs. A palindrome of length 2 needs 1 pair — impossible.',
    },
  ],
  hints: [
    'Pool all characters from all words together. The total number of "pairs" is the sum of floor(freq[c]/2) for each character c.',
    'You can freely redistribute characters into any words (same-length words still have their length preserved). To maximize palindromes, greedily assign pairs to the shortest words first.',
    'Sort word lengths ascending. For each length L, a palindrome needs floor(L/2) pairs. If your remaining pair count is >= floor(L/2), you can make it a palindrome — increment count and subtract floor(L/2) from your pool.',
  ],
  functionName: 'maxPalindromesAfterOperations',
  params: ['words'],
  starterCode: {
    javascript: `function maxPalindromesAfterOperations(words) {
  const freq = new Array(26).fill(0);
  for (const w of words) for (const c of w) freq[c.charCodeAt(0) - 97]++;
  let pairs = 0;
  for (const f of freq) pairs += Math.floor(f / 2);
  const lengths = words.map(w => w.length).sort((a, b) => a - b);
  let count = 0;
  for (const len of lengths) {
    const need = Math.floor(len / 2);
    if (pairs >= need) { count++; pairs -= need; }
  }
  return count;
}`,
    typescript: `function maxPalindromesAfterOperations(words: string[]): number {
  const freq = new Array<number>(26).fill(0);
  for (const w of words) for (const c of w) freq[c.charCodeAt(0) - 97]!++;
  let pairs = 0;
  for (const f of freq) pairs += Math.floor(f / 2);
  const lengths = words.map(w => w.length).sort((a, b) => a - b);
  let count = 0;
  for (const len of lengths) {
    const need = Math.floor(len / 2);
    if (pairs >= need) { count++; pairs -= need; }
  }
  return count;
}`,
    python: `def maxPalindromesAfterOperations(words):
    if hasattr(words, 'to_py'): words = list(words.to_py())
    from collections import Counter
    freq = Counter(''.join(words))
    pairs = sum(c // 2 for c in freq.values())
    lengths = sorted(len(w) for w in words)
    count = 0
    for ln in lengths:
        need = ln // 2
        if pairs >= need:
            count += 1
            pairs -= need
    return count`,
  },
  visibleTests: [
    { args: [['abcd', 'dba', 'nac']], expected: 3 },
    { args: [['a']], expected: 1 },
    { args: [['ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['aa']], expected: 1 },
    { args: [['aa', 'bb']], expected: 2 },
    { args: [['aabb', 'ccdd']], expected: 2 },
    { args: [['abc', 'def']], expected: 0 },
    { args: [['xyz', 'xxzz']], expected: 1 },
    { args: [['notapalindrome', 'seatopath']], expected: 1 },
  ],
};
