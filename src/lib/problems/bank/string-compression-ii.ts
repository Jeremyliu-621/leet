import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-compression-ii',
  title: 'String Compression II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `**Run-length encoding (RLE)** compresses a string by replacing consecutive runs of the same character with the character followed by its count. For example:
- \`"aabccc"\` → \`"a2bc3"\` (length 5)
- Single characters are written without a count: \`"a1"\` is written as \`"a"\`.

You may delete **at most \`k\`** characters from string \`s\`. Return the **minimum length** of the run-length encoded string after optimally choosing which characters to delete.

**Example:** \`s = "aaabcccd"\`, \`k = 2\`
- Delete the 2 \`'c'\`s → \`"aaab"\` → RLE: \`"a3b"\` → length 3? Actually \`"aaabcccd"\` - deleting 2 of the 3 c's → \`"aaabcd"\` → \`"a3bcd"\` length 5. 
- Or delete the \`'b'\` and one \`'c'\` → \`"aaaccd"\` → \`"a3c2d"\` length 5.
- Or delete \`'b'\` and \`'d'\` → \`"aaaccc"\` → \`"a3c3"\` → length 4. ✓`,
  constraints: [
    '1 ≤ s.length ≤ 100',
    '0 ≤ k < s.length',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "aaabcccd", k = 2',
      output: '4',
      explanation: 'Delete "b" and "d" to get "aaaccc" → RLE "a3c3" of length 4.',
    },
    {
      input: 's = "aabbaa", k = 2',
      output: '2',
      explanation: 'Delete both "b"s to get "aaaa" → RLE "a4" of length 2.',
    },
    {
      input: 's = "aaaaaaaaaaa", k = 0',
      output: '3',
      explanation: 'No deletions; "aaaaaaaaaaa" (11 a\'s) → RLE "a11" of length 3.',
    },
  ],
  hints: [
    'Define \`dp[i][j]\` as the minimum RLE length for the prefix \`s[0..i-1]\` using exactly \`j\` deletions. Transition: either delete \`s[i-1]\` (use one deletion) or keep a run ending at \`i\` consisting of same characters.',
    'For the "keep" case, iterate backwards from index \`i\` to find all positions where \`s[l-1] === s[i-1]\`, counting same characters and different characters (which must be deleted). The run contributes \`rleLen(same)\` to the encoded length.',
    'The RLE length of a run of count \`c\` is: 1 if c==1, 2 if 2≤c≤9, 3 if 10≤c≤99, 4 if c≥100.',
  ],
  functionName: 'getLengthOfOptimalCompression',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function getLengthOfOptimalCompression(s, k) {
  // Return minimum RLE length after deleting at most k characters
}`,
    python: `def getLengthOfOptimalCompression(s: str, k: int) -> int:
    # Return minimum RLE length after deleting at most k characters
    pass`,
  },
  visibleTests: [
    { args: ['aaabcccd', 2], expected: 4 },
    { args: ['aabbaa', 2], expected: 2 },
    { args: ['aaaaaaaaaaa', 0], expected: 3 },
    { args: ['a', 0], expected: 1 },
  ],
  hiddenTests: [
    { args: ['ab', 1], expected: 1 },
    { args: ['aaa', 0], expected: 2 },
    { args: ['aaaa', 0], expected: 2 },
    { args: ['abc', 2], expected: 1 },
    { args: ['abcdef', 3], expected: 3 },
    { args: ['aab', 1], expected: 2 },
    { args: ['abcde', 1], expected: 4 },
    { args: ['aaaaaaaaaa', 0], expected: 3 },
    { args: ['aabbccddeeffgghhiijj', 10], expected: 10 },
  ],
};
