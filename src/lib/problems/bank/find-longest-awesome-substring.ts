import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-awesome-substring',
  title: 'Find Longest Awesome Substring',
  difficulty: 'hard',
  tags: ['strings', 'math'],
  description: `A string is **awesome** if it can be rearranged so that it forms a **palindrome** (characters that appear an odd number of times can number at most one).

Given a string \`s\` consisting only of digit characters (\`'0'\`–\`'9'\`), return the length of its **longest awesome substring**.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists only of digits `\'0\'`–`\'9\'`.',
  ],
  examples: [
    {
      input: 's = "3242415"',
      output: '5',
      explanation:
        '"32424" is the longest awesome substring. It can be rearranged to "24342", which is a palindrome.',
    },
    {
      input: 's = "12345678"',
      output: '1',
      explanation: 'Every single-digit substring is trivially a palindrome.',
    },
    {
      input: 's = "213123"',
      output: '6',
      explanation:
        'The entire string has two each of \'1\', \'2\', \'3\' — all even counts — and can be rearranged to a palindrome.',
    },
  ],
  hints: [
    'A string can be rearranged into a palindrome if and only if at most one character has an odd frequency. Represent the parity of each digit\'s count as one bit in a 10-bit bitmask.',
    'Use a prefix XOR mask: after processing position `i`, the mask encodes which digits have been seen an odd number of times so far. A substring `[j+1..i]` is awesome iff `prefix[i+1] XOR prefix[j+1]` is 0 (all even) or a single bit (one odd digit).',
    `Store the **first** index at which each prefix mask was seen (initialise seen[0] = -1 for the empty prefix). For each position \`i\`, check \`seen[mask]\` and \`seen[mask XOR (1<<d)]\` for all 10 digits in O(10) time, updating the running maximum length.\n\`\`\`js\nfunction longestAwesome(s) {\n  const seen = new Array(1 << 10).fill(-2);\n  seen[0] = -1;\n  let mask = 0, ans = 0;\n  for (let i = 0; i < s.length; i++) {\n    mask ^= 1 << (s.charCodeAt(i) - 48);\n    if (seen[mask] !== -2) ans = Math.max(ans, i - seen[mask]);\n    else seen[mask] = i;\n    for (let d = 0; d < 10; d++) {\n      const t = mask ^ (1 << d);\n      if (seen[t] !== -2) ans = Math.max(ans, i - seen[t]);\n    }\n  }\n  return ans;\n}\n\`\`\``,
  ],
  functionName: 'longestAwesome',
  params: ['s'],
  starterCode: {
    javascript: `function longestAwesome(s) {

}`,
    python: `def longestAwesome(s):
    pass`,
  },
  visibleTests: [
    { args: ['3242415'], expected: 5 },
    { args: ['12345678'], expected: 1 },
    { args: ['213123'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['9'], expected: 1 },
    { args: ['99'], expected: 2 },
    { args: ['00'], expected: 2 },
    { args: ['0000'], expected: 4 },
    { args: ['1230123'], expected: 7 },
    { args: ['98789'], expected: 5 },
    { args: ['1234567890'], expected: 1 },
    { args: ['11223344'], expected: 8 },
    { args: ['112233'], expected: 6 },
    { args: ['1122334'], expected: 7 },
  ],
};
