import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-words-formed',
  title: 'Maximum Score Words Formed',
  difficulty: 'hard',
  tags: ['backtracking', 'arrays'],
  description: `Given a list of \`words\`, a list of single \`letters\` (may contain duplicates), and a \`score\` array of length 26 where \`score[i]\` is the score for the letter at position \`i\` ('a'=0, 'b'=1, ..., 'z'=25), return the **maximum score** of any valid subset of words you can form using the given letters.

Each letter in \`letters\` can only be used **once**. A word can only be included in a subset if all its letters are available in the remaining letter pool.`,
  constraints: [
    '1 <= words.length <= 14',
    '1 <= words[i].length <= 7',
    '1 <= letters.length <= 100',
    'letters[i] is a lowercase English letter',
    'score.length == 26',
    '0 <= score[i] <= 10',
    'words[i] and letters[i] consist of lowercase English letters',
  ],
  examples: [
    {
      input:
        'words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]',
      output: '23',
      explanation:
        'Use "dad" (d=5, a=1, d=5 → 11) and "good" (g=3, o=2, o=2, d=5 → 12). Combined score = 23. The letters used are d(3), a(1), g(1), o(2) — all within budget.',
    },
    {
      input:
        'words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]',
      output: '27',
      explanation:
        'Use "ax"(9) + "bx"(9) + "cx"(9) = 27, which beats "xxxz"(25).',
    },
    {
      input:
        'words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]',
      output: '0',
      explanation:
        '"leetcode" needs 2 e\'s but only 1 is available — no valid subset.',
    },
  ],
  hints: [
    'Use bitmask enumeration over all 2^n subsets of words (n ≤ 14 so at most 16384 subsets).',
    'For each subset, tally the letters required and check if every letter count is within the available pool.',
    'Track the maximum score across all valid subsets.',
  ],
  functionName: 'maxScoreWords',
  params: ['words', 'letters', 'score'],
  starterCode: {
    javascript: `function maxScoreWords(words, letters, score) {
  const avail = new Array(26).fill(0);
  for (const l of letters) avail[l.charCodeAt(0) - 97]++;
  const n = words.length;
  let ans = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    const cnt = new Array(26).fill(0);
    let sc = 0;
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) for (const c of words[i]) { cnt[c.charCodeAt(0) - 97]++; sc += score[c.charCodeAt(0) - 97]; }
    }
    if (cnt.every((c, i) => c <= avail[i]) && sc > ans) ans = sc;
  }
  return ans;
}`,
    typescript: `function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const avail = new Array<number>(26).fill(0);
  for (const l of letters) avail[l.charCodeAt(0) - 97]!++;
  const n = words.length;
  let ans = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    const cnt = new Array<number>(26).fill(0);
    let sc = 0;
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) for (const c of words[i]!) { cnt[c.charCodeAt(0) - 97]!++; sc += score[c.charCodeAt(0) - 97]!; }
    }
    if (cnt.every((c, i) => c <= avail[i]!) && sc > ans) ans = sc;
  }
  return ans;
}`,
    python: `def maxScoreWords(words: list[str], letters: list[str], score: list[int]) -> int:
    if hasattr(words, 'to_py'): words = list(words.to_py())
    if hasattr(letters, 'to_py'): letters = list(letters.to_py())
    if hasattr(score, 'to_py'): score = list(score.to_py())
    avail = [0] * 26
    for l in letters: avail[ord(l) - 97] += 1
    n = len(words)
    ans = 0
    for mask in range(1 << n):
        cnt = [0] * 26
        sc = 0
        for i in range(n):
            if (mask >> i) & 1:
                for c in words[i]: cnt[ord(c) - 97] += 1; sc += score[ord(c) - 97]
        if all(cnt[i] <= avail[i] for i in range(26)) and sc > ans: ans = sc
    return ans`,
  },
  visibleTests: [
    {
      args: [
        ['dog', 'cat', 'dad', 'good'],
        ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
        [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 23,
    },
    {
      args: [
        ['xxxz', 'ax', 'bx', 'cx'],
        ['z', 'a', 'b', 'c', 'x', 'x', 'x'],
        [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10],
      ],
      expected: 27,
    },
    {
      args: [
        ['leetcode'],
        ['l', 'e', 't', 'c', 'o', 'd'],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      ],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [
        ['a'],
        ['a'],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 1,
    },
    {
      args: [
        ['ab', 'cd'],
        ['a', 'b', 'c', 'd'],
        [1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 10,
    },
    {
      args: [
        ['ab', 'a'],
        ['a', 'b'],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 2,
    },
  ],
};
