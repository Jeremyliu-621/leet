import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-minimum-string-after-removing-stars',
  title: 'Lexicographically Minimum String After Removing Stars',
  difficulty: 'medium',
  tags: ['strings', 'stack', 'hash-map'],
  description: `You are given a string \`s\`. It may contain any number of \`'*'\` characters. Your task is to remove all \`'*'\` characters. While there is a \`'*'\`, do the following operation:

- Delete the leftmost \`'*'\` and the **smallest** non-\`'*'\` character to its left. If there are several smallest characters, you can delete any of them.

Return the **lexicographically smallest** resulting string after removing all \`'*'\` characters.`,
  constraints: [
    '1 <= s.length <= 100000',
    's consists only of lowercase English letters and \'*\'',
    'The input is generated such that it is possible to delete all \'*\' characters',
  ],
  examples: [
    {
      input: 's = "aaba*"',
      output: '"aab"',
      explanation: 'The \'*\' at index 4 — smallest character to its left is \'a\'. To get lex-min result, delete the rightmost \'a\' (index 3). Remaining: "aab".',
    },
    {
      input: 's = "abc"',
      output: '"abc"',
      explanation: 'There are no \'*\' characters, so return "abc" unchanged.',
    },
  ],
  hints: [
    'Process characters left to right. For each letter, record its index in a per-character bucket.',
    'When you encounter \'*\', find the smallest letter (smallest non-empty bucket) and remove the most recently added index from that bucket (the rightmost occurrence).',
    'Removing the rightmost occurrence preserves earlier occurrences for future stars, yielding the lexicographically smallest result.',
    'After processing, build the answer from all indices not marked for deletion (skipping \'*\' as well).',
  ],
  functionName: 'clearStars',
  params: ['s'],
  starterCode: {
    javascript: `function clearStars(s) {
  const buckets = Array.from({length: 26}, () => []);
  const deleted = new Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      deleted[i] = true;
      for (let c = 0; c < 26; c++) {
        if (buckets[c].length > 0) { deleted[buckets[c].pop()] = true; break; }
      }
    } else {
      buckets[s.charCodeAt(i) - 97].push(i);
    }
  }
  return [...s].filter((_, i) => !deleted[i]).join('');
}`,
    typescript: `function clearStars(s: string): string {
  const buckets: number[][] = Array.from({length: 26}, () => []);
  const deleted = new Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      deleted[i] = true;
      for (let c = 0; c < 26; c++) {
        if (buckets[c].length > 0) { deleted[buckets[c].pop()!] = true; break; }
      }
    } else {
      buckets[s.charCodeAt(i) - 97].push(i);
    }
  }
  return [...s].filter((_, i) => !deleted[i]).join('');
}`,
    python: `def clearStars(s):
    buckets = [[] for _ in range(26)]
    deleted = [False] * len(s)
    for i, c in enumerate(s):
        if c == '*':
            deleted[i] = True
            for b in range(26):
                if buckets[b]:
                    deleted[buckets[b].pop()] = True
                    break
        else:
            buckets[ord(c) - ord('a')].append(i)
    return ''.join(c for i, c in enumerate(s) if not deleted[i])`,
  },
  visibleTests: [
    { args: ['aaba*'], expected: 'aab' },
    { args: ['abc'], expected: 'abc' },
  ],
  hiddenTests: [
    { args: ['a*'], expected: '' },
    { args: ['ba*'], expected: 'b' },
    { args: ['cb*'], expected: 'c' },
    { args: ['a*b*'], expected: '' },
    { args: ['abc**'], expected: 'c' },
    { args: ['z*abc'], expected: 'abc' },
    { args: ['d*b'], expected: 'b' },
    { args: ['z*az*'], expected: 'z' },
  ],
};
