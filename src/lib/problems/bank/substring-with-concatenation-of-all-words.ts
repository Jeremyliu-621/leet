import type { Problem } from '../types';

export const problem: Problem = {
  id: 'substring-with-concatenation-of-all-words',
  title: 'Substring with Concatenation of All Words',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `You are given a string \`s\` and an array of strings \`words\`. All strings in \`words\` are of the **same length**.

A **concatenated string** is a string formed by concatenating **all** the strings in \`words\` in **any order** (each word used exactly once).

Return an array of all starting indices in \`s\` where a concatenated string begins. Return the indices in **sorted order**.`,
  constraints: [
    '1 <= s.length <= 10^4',
    '1 <= words.length <= 5000',
    '1 <= words[i].length <= 30',
    'words[i] and s consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "barfoothefoobarman", words = ["foo","bar"]',
      output: '[0,9]',
      explanation: '"barfoo" starts at index 0; "foobar" starts at index 9.',
    },
    {
      input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]',
      output: '[]',
      explanation: 'No valid starting index exists.',
    },
    {
      input: 's = "barfoofoobarthefoobarman", words = ["bar","foo","the"]',
      output: '[6,9,12]',
      explanation: '"foobarthe" at 6, "barthefoo" at 9, "thefoobar" at 12.',
    },
  ],
  hints: [
    'Build a frequency map of words. For each starting index i in s (up to s.length - windowLen), extract consecutive substrings of wordLen and check if they form a valid permutation.',
    'Use a sliding window of size wordLen * words.length. Maintain a current frequency map. Slide one word at a time — add the word entering the window, remove the word leaving.',
    'Run the sliding window wordLen times, starting at offsets 0, 1, ..., wordLen-1. This way every possible alignment is covered in O(s.length * words.length / wordLen) time.',
  ],
  functionName: 'findSubstring',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function findSubstring(s, words) {
  if (!s || !words.length) return [];
  const wLen = words[0].length, wCount = words.length;
  const wordFreq = new Map();
  for (const w of words) wordFreq.set(w, (wordFreq.get(w) || 0) + 1);
  const result = [];
  for (let offset = 0; offset < wLen; offset++) {
    const cur = new Map();
    let left = offset, count = 0;
    for (let right = offset; right + wLen <= s.length; right += wLen) {
      const w = s.slice(right, right + wLen);
      if (wordFreq.has(w)) {
        cur.set(w, (cur.get(w) || 0) + 1);
        count++;
        while (cur.get(w) > wordFreq.get(w)) {
          const lw = s.slice(left, left + wLen);
          cur.set(lw, cur.get(lw) - 1);
          count--; left += wLen;
        }
        if (count === wCount) result.push(left);
      } else {
        cur.clear(); count = 0; left = right + wLen;
      }
    }
  }
  return result.sort((a, b) => a - b);
}`,
    typescript: `function findSubstring(s: string, words: string[]): number[] {
  if (!s || !words.length) return [];
  const wLen = words[0]!.length, wCount = words.length;
  const wordFreq = new Map<string, number>();
  for (const w of words) wordFreq.set(w, (wordFreq.get(w) ?? 0) + 1);
  const result: number[] = [];
  for (let offset = 0; offset < wLen; offset++) {
    const cur = new Map<string, number>();
    let left = offset, count = 0;
    for (let right = offset; right + wLen <= s.length; right += wLen) {
      const w = s.slice(right, right + wLen);
      if (wordFreq.has(w)) {
        cur.set(w, (cur.get(w) ?? 0) + 1);
        count++;
        while (cur.get(w)! > wordFreq.get(w)!) {
          const lw = s.slice(left, left + wLen);
          cur.set(lw, cur.get(lw)! - 1);
          count--; left += wLen;
        }
        if (count === wCount) result.push(left);
      } else {
        cur.clear(); count = 0; left = right + wLen;
      }
    }
  }
  return result.sort((a, b) => a - b);
}`,
    python: `def findSubstring(s, words):
    from collections import Counter
    if not s or not words:
        return []
    w_len, w_count = len(words[0]), len(words)
    word_freq = Counter(words)
    result = []
    for offset in range(w_len):
        cur = Counter()
        left, count = offset, 0
        for right in range(offset, len(s) - w_len + 1, w_len):
            w = s[right:right + w_len]
            if w in word_freq:
                cur[w] += 1
                count += 1
                while cur[w] > word_freq[w]:
                    lw = s[left:left + w_len]
                    cur[lw] -= 1
                    count -= 1
                    left += w_len
                if count == w_count:
                    result.append(left)
            else:
                cur.clear()
                count = 0
                left = right + w_len
    return sorted(result)
`,
  },
  visibleTests: [
    { args: ['barfoothefoobarman', ['foo','bar']], expected: [0, 9] },
    { args: ['wordgoodgoodgoodbestword', ['word','good','best','word']], expected: [] },
    { args: ['barfoofoobarthefoobarman', ['bar','foo','the']], expected: [6, 9, 12] },
  ],
  hiddenTests: [
    { args: ['aaaaa', ['aa','aa']], expected: [0, 1] },
    { args: ['abc', ['a','b','c']], expected: [0] },
    { args: ['lingmindraboofooowingdingbarrwingmonkeypoundcake', ['fooo','barr','wing','ding','wing']], expected: [13] },
    { args: ['aaa', ['a','a']], expected: [0, 1] },
    { args: ['abcdef', ['bc','de']], expected: [1] },
    { args: ['xy', ['x','y']], expected: [0] },
  ],
};
