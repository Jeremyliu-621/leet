import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-string-k-distance-apart',
  title: 'Rearrange String k Distance Apart',
  difficulty: 'hard',
  tags: ['strings', 'heap', 'hash-map'],
  description: `Given a string \`s\` and an integer \`k\`, rearrange \`s\` such that the same characters are at least distance \`k\` from each other. If it is not possible to rearrange the string, return an empty string \`""\`.`,
  constraints: [
    '1 <= s.length <= 3 * 10^5',
    's consists of only lowercase English letters.',
    '0 <= k <= s.length',
  ],
  examples: [
    {
      input: 's = "aabbcc", k = 3',
      output: '"abcabc"',
      explanation: 'Same letters are 3 apart: a at 0,3; b at 1,4; c at 2,5.',
    },
    {
      input: 's = "aaabc", k = 3',
      output: '""',
      explanation: 'Three a\'s cannot be placed at least 3 apart in a string of length 5.',
    },
    {
      input: 's = "aab", k = 2',
      output: '"aba"',
      explanation: 'a at positions 0,2 (distance 2); b at position 1.',
    },
  ],
  hints: [
    'Level 1: At each position, greedily place the most frequent available character. A character placed at position p is unavailable until position p + k.',
    'Level 2: Track cooldown[c] = last position where c was placed. Character c is available at position pos if pos - cooldown[c] >= k.',
    'Level 3: Since there are at most 26 characters, a linear scan over the alphabet at each step is O(26n) = O(n).',
  ],
  functionName: 'rearrangeString',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function rearrangeString(s, k) {
  if (k === 0) return s;
  const freq = new Array(26).fill(0);
  for (const c of s) freq[c.charCodeAt(0) - 97]++;
  const result = new Array(s.length);
  const cooldown = new Array(26).fill(-Infinity);
  for (let pos = 0; pos < s.length; pos++) {
    let best = -1;
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0 && pos - cooldown[i] >= k)
        if (best === -1 || freq[i] > freq[best]) best = i;
    }
    if (best === -1) return '';
    result[pos] = String.fromCharCode(97 + best);
    freq[best]--;
    cooldown[best] = pos;
  }
  return result.join('');
}`,
    typescript: `function rearrangeString(s: string, k: number): string {
  if (k === 0) return s;
  const freq = new Array<number>(26).fill(0);
  for (const c of s) freq[c.charCodeAt(0) - 97]++;
  const result = new Array<string>(s.length);
  const cooldown = new Array<number>(26).fill(-Infinity);
  for (let pos = 0; pos < s.length; pos++) {
    let best = -1;
    for (let i = 0; i < 26; i++) {
      if (freq[i]! > 0 && pos - cooldown[i]! >= k)
        if (best === -1 || freq[i]! > freq[best]!) best = i;
    }
    if (best === -1) return '';
    result[pos] = String.fromCharCode(97 + best);
    freq[best]!--;
    cooldown[best] = pos;
  }
  return result.join('');
}`,
    python: `def rearrangeString(s, k):
    if hasattr(s, 'to_py'): s = s.to_py()
    s = str(s); k = int(k)
    if k == 0: return s
    freq = [0] * 26
    for c in s: freq[ord(c) - 97] += 1
    result = []
    cooldown = [-float('inf')] * 26
    for pos in range(len(s)):
        best = -1
        for i in range(26):
            if freq[i] > 0 and pos - cooldown[i] >= k:
                if best == -1 or freq[i] > freq[best]:
                    best = i
        if best == -1: return ''
        result.append(chr(97 + best))
        freq[best] -= 1
        cooldown[best] = pos
    return ''.join(result)`,
  },
  visibleTests: [
    { args: ['aabbcc', 3], expected: 'abcabc' },
    { args: ['aaabc', 3], expected: '' },
    { args: ['aab', 2], expected: 'aba' },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: 'a' },
    { args: ['aa', 2], expected: '' },
    { args: ['abcdef', 2], expected: 'abcdef' },
    { args: ['aaabbc', 2], expected: 'ababac' },
    { args: ['aab', 0], expected: 'aab' },
  ],
};
