import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-substring-with-at-least-k-repeating',
  title: 'Longest Substring with At Least K Repeating Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the length of the **longest substring** of \`s\` such that the frequency of each character in this substring is **greater than or equal to** \`k\`.

If no such substring exists, return \`0\`.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of only lowercase English letters',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 's = "aaabb", k = 3',
      output: '3',
      explanation: 'The longest substring is "aaa", as \'a\' appears 3 times (>= k = 3).',
    },
    {
      input: 's = "ababbc", k = 2',
      output: '5',
      explanation: '"ababb" — \'a\' appears 2 times, \'b\' appears 3 times. Both >= 2.',
    },
  ],
  hints: [
    'A character that appears **fewer than k times** in the whole string cannot appear in any valid substring. Split the string at positions of such characters and recursively solve each part.',
    'The recursion terminates when every character in the current substring appears at least k times — the entire substring is valid.',
    'Alternatively, use a **sliding window with a fixed number of unique characters** (1 to 26). For each target number of distinct chars, use two pointers to find the longest window with exactly that many distinct chars where all have frequency >= k.',
  ],
  functionName: 'longestSubstring',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function longestSubstring(s, k) {
  function solve(str) {
    if (str.length === 0) return 0;
    const freq = new Array(26).fill(0);
    for (const c of str) freq[c.charCodeAt(0) - 97]++;
    // If all chars appear >= k times, entire string is valid
    let allValid = true;
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0 && freq[i] < k) { allValid = false; break; }
    }
    if (allValid) return str.length;
    // Split at chars that appear fewer than k times
    let best = 0, start = 0;
    for (let i = 0; i <= str.length; i++) {
      const idx = i < str.length ? str.charCodeAt(i) - 97 : -1;
      if (i === str.length || (freq[idx] > 0 && freq[idx] < k)) {
        best = Math.max(best, solve(str.slice(start, i)));
        start = i + 1;
      }
    }
    return best;
  }
  return solve(s);
}`,
    typescript: `function longestSubstring(s: string, k: number): number {
  function solve(str: string): number {
    if (str.length === 0) return 0;
    const freq = new Array<number>(26).fill(0);
    for (const c of str) freq[c.charCodeAt(0) - 97]!++;
    let allValid = true;
    for (let i = 0; i < 26; i++) {
      if (freq[i]! > 0 && freq[i]! < k) { allValid = false; break; }
    }
    if (allValid) return str.length;
    let best = 0, start = 0;
    for (let i = 0; i <= str.length; i++) {
      const idx = i < str.length ? str.charCodeAt(i) - 97 : -1;
      if (i === str.length || (idx >= 0 && freq[idx]! > 0 && freq[idx]! < k)) {
        best = Math.max(best, solve(str.slice(start, i)));
        start = i + 1;
      }
    }
    return best;
  }
  return solve(s);
}`,
    python: `def longestSubstring(s: str, k: int) -> int:
    def solve(sub: str) -> int:
        if not sub:
            return 0
        freq = [0] * 26
        for c in sub:
            freq[ord(c) - 97] += 1
        if all(f == 0 or f >= k for f in freq):
            return len(sub)
        best = 0
        start = 0
        for i in range(len(sub) + 1):
            if i == len(sub) or (freq[ord(sub[i]) - 97] > 0 and freq[ord(sub[i]) - 97] < k):
                best = max(best, solve(sub[start:i]))
                start = i + 1
        return best
    return solve(s)`,
  },
  visibleTests: [
    { args: ['aaabb', 3], expected: 3 },
    { args: ['ababbc', 2], expected: 5 },
    { args: ['aaabbb', 3], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['a', 2], expected: 0 },
    { args: ['aababc', 2], expected: 5 },
    { args: ['weitong', 2], expected: 0 },
    { args: ['bbaaacbd', 3], expected: 3 },
    { args: ['aacbbbdc', 2], expected: 3 },
    { args: ['ababacb', 3], expected: 0 },
    { args: ['aaaaaaa', 4], expected: 7 },
    { args: ['abcabc', 1], expected: 6 },
    { args: ['', 1], expected: 0 },
  ],
};
