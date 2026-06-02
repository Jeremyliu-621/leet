import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-balloons',
  title: 'Maximum Number of Balloons',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given a string \`text\`, you want to use the characters of \`text\` to form as many instances of the word **"balloon"** as possible.

You can use each character in \`text\` **at most once**. Return the maximum number of instances that can be formed.`,
  constraints: [
    '`1 <= text.length <= 10^4`',
    '`text` consists of lower case English letters only.',
  ],
  examples: [
    {
      input: 'text = "nlaebolko"',
      output: '1',
      explanation: 'b=1, a=1, l=2, o=2, n=1 — exactly one "balloon".',
    },
    {
      input: 'text = "loonbalxballpoon"',
      output: '2',
      explanation: 'b=2, a=2, l=4, o=4, n=2 — two "balloon"s.',
    },
    {
      input: 'text = "leetcode"',
      output: '0',
      explanation: 'No \'b\' in text, so zero "balloon"s.',
    },
  ],
  hints: [
    'Count the frequency of each relevant character: b, a, l, o, n.',
    '"balloon" uses b×1, a×1, l×2, o×2, n×1 — so floor(l/2) and floor(o/2) are the effective counts.',
    'The answer is the minimum of those five effective counts.',
  ],
  functionName: 'maxNumberOfBalloons',
  params: ['text'],
  starterCode: {
    javascript: `function maxNumberOfBalloons(text) {
  const f = {};
  for (const c of text) f[c] = (f[c] || 0) + 1;
  return Math.min(f['b']||0, f['a']||0, (f['l']||0)>>1, (f['o']||0)>>1, f['n']||0);
}`,
    typescript: `function maxNumberOfBalloons(text: string): number {
  const f: Record<string, number> = {};
  for (const c of text) f[c] = (f[c] ?? 0) + 1;
  return Math.min(f['b']??0, f['a']??0, (f['l']??0)>>1, (f['o']??0)>>1, f['n']??0);
}`,
    python: `def maxNumberOfBalloons(text):
    from collections import Counter
    f = Counter(text)
    return min(f['b'], f['a'], f['l']//2, f['o']//2, f['n'])`,
  },
  visibleTests: [
    { args: ['nlaebolko'], expected: 1 },
    { args: ['loonbalxballpoon'], expected: 2 },
    { args: ['leetcode'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['balon'], expected: 0 },
    { args: ['balloonballoon'], expected: 2 },
    { args: [''], expected: 0 },
    { args: ['bbaalllloonn'], expected: 1 },
    { args: ['kpplloon'], expected: 0 },
  ],
};
