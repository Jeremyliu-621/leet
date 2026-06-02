import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-equal-run',
  title: 'Longest Run Of Equal Characters',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description:
    'Given a string text, find the length of the longest stretch of consecutive identical characters.\n\nA growing window tracks the current run: extend it while the next character matches, and start a fresh window when a different character appears.\n\nReturn the length of the longest such run. An empty string has a longest run of 0.',
  constraints: [
    '0 <= text.length <= 1000',
    'text contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "aabbbcc"',
      output: '3',
      explanation: 'The run "bbb" has length 3.',
    },
    {
      input: 'text = "abc"',
      output: '1',
      explanation: 'No character repeats, so the longest run is a single character.',
    },
    {
      input: 'text = "zzzz"',
      output: '4',
    },
  ],
  hints: [
    'You\'re tracking a streak that resets when the character changes. What two things do you need to remember as you scan left to right?',
    'Keep a `curr` run length and a `best` seen so far. Extend `curr` when the next character matches the previous one; reset `curr = 1` when it differs. Update `best = Math.max(best, curr)` on every step.',
    '`if (!text.length) return 0; let best = 1, curr = 1; for (let i = 1; i < text.length; i++) { curr = text[i] === text[i-1] ? curr + 1 : 1; best = Math.max(best, curr); } return best;`',
  ],
  functionName: 'longestEqualRun',
  params: ['text'],
  starterCode: {
    javascript: `function longestEqualRun(text) {
  if (!text.length) return 0;
  let best = 1, curr = 1;
  for (let i = 1; i < text.length; i++) {
    curr = text[i] === text[i - 1] ? curr + 1 : 1;
    best = Math.max(best, curr);
  }
  return best;
}`,
    typescript: `function longestEqualRun(text: string): number {
  if (!text.length) return 0;
  let best = 1, curr = 1;
  for (let i = 1; i < text.length; i++) {
    curr = text[i] === text[i - 1] ? curr + 1 : 1;
    best = Math.max(best, curr);
  }
  return best;
}`,
    python: `def longestEqualRun(text):
    if hasattr(text, 'to_py'): text = text.to_py()
    if not text: return 0
    best = curr = 1
    for i in range(1, len(text)):
        curr = curr + 1 if text[i] == text[i - 1] else 1
        best = max(best, curr)
    return best`,
  },
  visibleTests: [
    { args: ['aabbbcc'], expected: 3 },
    { args: ['abc'], expected: 1 },
    { args: ['zzzz'], expected: 4 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['a'], expected: 1 },
    { args: ['aabbaa'], expected: 2 },
    { args: ['mississippi'], expected: 2 },
    { args: ['xxxyzzz'], expected: 3 },
    { args: ['abcddddd'], expected: 5 },
  ],
};
