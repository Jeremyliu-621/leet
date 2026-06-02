import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-words-formed-by-letters',
  title: 'Maximum Score Words Formed by Letters',
  difficulty: 'hard',
  tags: ['arrays', 'backtracking', 'bit-manipulation'],
  description: `Given a list of \`words\`, a list of single \`letters\` (might be repeating), and the \`score\` of every character, return *the maximum score of any valid set of words formed by using the given letters* (\`words[i]\` cannot be used two or more times).

It is not necessary to use all characters in \`letters\` and each letter can only be scored once. There are no negative letter scores.`,
  constraints: [
    '1 <= words.length <= 14',
    '1 <= words[i].length <= 7',
    '1 <= letters.length <= 100',
    'letters[i].length == 1',
    'score.length == 26',
    '0 <= score[i] <= 10',
    'words[i] and letters[i] contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]',
      output: '23',
      explanation: '"dad" (5+1+5=11) + "good" (3+2+2+5=12) = 23. Letters used: d,a,d,g,o,o,d.',
    },
    {
      input: 'words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]',
      output: '27',
      explanation: '"ax"=4+5=9, "bx"=4+5=9, "cx"=4+5=9. Sum=27.',
    },
    {
      input: 'words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]',
      output: '0',
      explanation: 'Not enough letters to form "leetcode" (missing second e).',
    },
  ],
  hints: [
    'Level 1: Try every subset of words. Since words.length ≤ 14, there are only 2^14 = 16384 subsets.',
    'Level 2: For each subset, check if the total letter counts fit within the available letters. If yes, compute the score.',
    'Level 3: Use backtracking: for each position, decide include/skip. Track remaining letter availability as a 26-length array. Update running score.',
  ],
  functionName: 'maxScoreWords',
  params: ['words', 'letters', 'score'],
  starterCode: {
    javascript: `function maxScoreWords(words, letters, score) {
  const freq = new Array(26).fill(0);
  for (const c of letters) freq[c.charCodeAt(0) - 97]++;
  let best = 0;
  function bt(i, avail, cur) {
    best = Math.max(best, cur);
    for (let j = i; j < words.length; j++) {
      const wf = new Array(26).fill(0);
      for (const c of words[j]) wf[c.charCodeAt(0) - 97]++;
      let ws = 0, valid = true;
      const na = avail.slice();
      for (let k = 0; k < 26; k++) {
        if (wf[k] > na[k]) { valid = false; break; }
        na[k] -= wf[k];
        ws += wf[k] * score[k];
      }
      if (valid) bt(j + 1, na, cur + ws);
    }
  }
  bt(0, freq, 0);
  return best;
}`,
    typescript: `function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const freq = new Array(26).fill(0);
  for (const c of letters) freq[c.charCodeAt(0) - 97]++;
  let best = 0;
  function bt(i: number, avail: number[], cur: number): void {
    best = Math.max(best, cur);
    for (let j = i; j < words.length; j++) {
      const wf = new Array(26).fill(0);
      for (const c of words[j]) wf[c.charCodeAt(0) - 97]++;
      let ws = 0, valid = true;
      const na = avail.slice();
      for (let k = 0; k < 26; k++) {
        if (wf[k] > na[k]) { valid = false; break; }
        na[k] -= wf[k];
        ws += wf[k] * score[k];
      }
      if (valid) bt(j + 1, na, cur + ws);
    }
  }
  bt(0, freq, 0);
  return best;
}`,
    python: `def maxScoreWords(words, letters, score):
    from collections import Counter
    freq = Counter(letters)
    best = 0
    def bt(i, avail, cur):
        nonlocal best
        best = max(best, cur)
        for j in range(i, len(words)):
            wf = Counter(words[j])
            if all(wf[c] <= avail.get(c, 0) for c in wf):
                ws = sum(score[ord(c) - ord('a')] * cnt for c, cnt in wf.items())
                na = dict(avail)
                for c, cnt in wf.items():
                    na[c] = na.get(c, 0) - cnt
                bt(j + 1, na, cur + ws)
    bt(0, dict(freq), 0)
    return best`,
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
        [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 5,
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
        ['abc'],
        ['a', 'b'],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 0,
    },
    {
      args: [
        ['a', 'b'],
        ['a', 'b'],
        [3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      expected: 8,
    },
  ],
};
