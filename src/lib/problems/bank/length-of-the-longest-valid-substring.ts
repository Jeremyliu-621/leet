import type { Problem } from '../types';

export const problem: Problem = {
  id: 'length-of-the-longest-valid-substring',
  title: 'Length of the Longest Valid Substring',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `You are given a string \`word\` and an array of strings \`forbidden\`.

A string is called **valid** if none of its substrings is in \`forbidden\`. Return the length of the **longest valid substring** of \`word\`.`,
  constraints: [
    '`1 <= word.length <= 10^5`',
    '`word\` consists only of lowercase English letters.',
    '`1 <= forbidden.length <= 10^5`',
    '`1 <= forbidden[i].length <= 10`',
    'All strings in \`forbidden\` are distinct.',
  ],
  examples: [
    {
      input: 'word = "cbaaaabc", forbidden = ["aaa","cb"]',
      output: '4',
      explanation: '"aabc" (indices 4-7) is the longest valid substring.',
    },
    {
      input: 'word = "leetcode", forbidden = ["de","le","e"]',
      output: '4',
      explanation: '"tcod" (indices 4-7) is the longest valid substring.',
    },
  ],
  hints: [
    'Use a sliding window with pointers `left` and `right`. For each position `right`, check if any suffix of the current window ending at `right` is forbidden.',
    'Since all forbidden strings have length ≤ 10, you only need to check at most 10 substrings ending at each `right` position.',
    'If a forbidden substring is found ending at `right` starting at index `start`, advance `left` to `start + 1`. Track the maximum `right - left + 1`.',
  ],
  functionName: 'longestValidSubstring',
  params: ['word', 'forbidden'],
  starterCode: {
    javascript: `function longestValidSubstring(word, forbidden) {
  const forbidSet = new Set(forbidden);
  let left = 0, ans = 0;
  for (let right = 0; right < word.length; right++) {
    for (let l = 1; l <= Math.min(10, right - left + 1); l++) {
      if (forbidSet.has(word.slice(right - l + 1, right + 1))) {
        left = right - l + 2;
        break;
      }
    }
    if (right - left + 1 > ans) ans = right - left + 1;
  }
  return ans;
}`,
    typescript: `function longestValidSubstring(word: string, forbidden: string[]): number {
  const forbidSet = new Set(forbidden);
  let left = 0, ans = 0;
  for (let right = 0; right < word.length; right++) {
    for (let l = 1; l <= Math.min(10, right - left + 1); l++) {
      if (forbidSet.has(word.slice(right - l + 1, right + 1))) {
        left = right - l + 2;
        break;
      }
    }
    if (right - left + 1 > ans) ans = right - left + 1;
  }
  return ans;
}`,
    python: `def longestValidSubstring(word, forbidden):
    forbid = set(forbidden)
    left = ans = 0
    for right in range(len(word)):
        for l in range(1, min(10, right - left + 1) + 1):
            if word[right - l + 1:right + 1] in forbid:
                left = right - l + 2
                break
        ans = max(ans, right - left + 1)
    return ans`,
  },
  visibleTests: [
    { args: ['cbaaaabc', ['aaa', 'cb']], expected: 4 },
    { args: ['leetcode', ['de', 'le', 'e']], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: 0 },
    { args: ['abc', ['abc']], expected: 2 },
    { args: ['abcdefg', ['abc']], expected: 6 },
    { args: ['abcdefg', ['abcdefg']], expected: 6 },
    { args: ['hello', ['hell', 'ello']], expected: 3 },
    { args: ['zxcv', ['z']], expected: 3 },
    { args: ['aaaa', ['aaa']], expected: 2 },
  ],
};
