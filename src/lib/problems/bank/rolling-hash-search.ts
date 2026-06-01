import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rolling-hash-search',
  title: 'Rolling Hash Substring Search',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a text string \`text\` and a pattern string \`pattern\`, return the **starting index** of the first occurrence of \`pattern\` inside \`text\`, or **-1** if it does not appear.

You must implement this using **rolling hash (Rabin-Karp)** — compute the hash of the first window, then slide the window one character at a time by subtracting the outgoing character's contribution and adding the incoming character's, all in O(1) per step.

Use base **31** and modulus **10^9 + 7** for hashing (treat 'a' as 1, 'b' as 2, …, 'z' as 26).

**Overall time complexity must be O(n + m)** where n = text length and m = pattern length (average case; hash collision causes O(nm) worst case which is acceptable).

The input consists only of lowercase English letters.`,
  constraints: [
    '1 <= pattern.length <= text.length <= 10^5',
    'text and pattern consist of lowercase English letters only',
  ],
  examples: [
    {
      input: 'text = "abcdef", pattern = "cde"',
      output: '2',
      explanation: '"cde" starts at index 2 in "abcdef".',
    },
    {
      input: 'text = "aaaaab", pattern = "aaab"',
      output: '2',
      explanation: '"aaab" first appears at index 2.',
    },
    {
      input: 'text = "hello", pattern = "world"',
      output: '-1',
      explanation: '"world" does not appear in "hello".',
    },
  ],
  hints: [
    'Compute the hash of `pattern` and the hash of the first window of `text` (same length as `pattern`). Compare hashes at each position.',
    'Rolling update: remove the leftmost character by subtracting `charCode(text[i-1]) * base^(m-1) mod MOD`, shift left by multiplying by `base`, add the new character. Keep all arithmetic modulo MOD to avoid overflow.',
    `\`\`\`js\nfunction rollingHashSearch(text, pattern) {\n  const MOD = 1_000_000_007n, BASE = 31n;\n  const m = pattern.length, n = text.length;\n  if (m > n) return -1;\n  const code = s => BigInt(s.charCodeAt(0) - 96);\n  let ph = 0n, wh = 0n, pw = 1n;\n  for (let i = 0; i < m; i++) {\n    ph = (ph * BASE + code(pattern[i])) % MOD;\n    wh = (wh * BASE + code(text[i])) % MOD;\n    if (i < m - 1) pw = pw * BASE % MOD;\n  }\n  if (ph === wh && text.slice(0, m) === pattern) return 0;\n  for (let i = 1; i <= n - m; i++) {\n    wh = (wh - code(text[i-1]) * pw % MOD + MOD) % MOD;\n    wh = (wh * BASE + code(text[i + m - 1])) % MOD;\n    if (wh === ph && text.slice(i, i + m) === pattern) return i;\n  }\n  return -1;\n}\n\`\`\``,
  ],
  functionName: 'rollingHashSearch',
  params: ['text', 'pattern'],
  starterCode: {
    javascript: `function rollingHashSearch(text, pattern) {\n\n}`,
    typescript: `function rollingHashSearch(text: string, pattern: string): number {\n\n}`,
    python: `def rolling_hash_search(text: str, pattern: str) -> int:\n    pass`,
  },
  visibleTests: [
    { args: ['abcdef', 'cde'], expected: 2 },
    { args: ['aaaaab', 'aaab'], expected: 2 },
    { args: ['hello', 'world'], expected: -1 },
    { args: ['abcabc', 'abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 0 },
    { args: ['ab', 'b'], expected: 1 },
    { args: ['abc', 'abcd'], expected: -1 },
    { args: ['mississippi', 'issi'], expected: 1 },
    { args: ['aaaa', 'aa'], expected: 0 },
    { args: ['abababab', 'abab'], expected: 0 },
    { args: ['xyzxyz', 'xyz'], expected: 0 },
    { args: ['abcdefgh', 'fgh'], expected: 5 },
  ],
};
