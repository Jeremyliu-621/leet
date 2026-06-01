import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-original-typed-string-i',
  title: 'Find the Original Typed String I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Alice is attempting to type a specific string on her computer. When she was typing, she may have accidentally pressed a key for **too long**, causing a character to be typed **more than once**.

Given a string \`word\`, which represents the **final** output displayed on Alice's screen, return the total number of **possible** original strings that Alice might have intended to type.

**Note:** You may assume the key that was pressed for too long always produces exactly one run of repeated characters; if it happened at all, it happened exactly once.`,
  constraints: [
    '1 <= word.length <= 100',
    'word consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abbcccc"',
      output: '5',
      explanation: 'Runs: a(1), b(2), c(4). Total = 1 + (2-1) + (4-1) = 5. The 5 originals: "abbcccc" (no accident), "abcccc" (b-run from 1→2), "abbccc", "abbcc", "abbc" (c-run from 1/2/3→4).',
    },
    {
      input: 'word = "abcd"',
      output: '1',
      explanation: 'No character appears consecutively, so the only possibility is "abcd" itself.',
    },
    {
      input: 'word = "aaaa"',
      output: '4',
      explanation: 'The run of 4 a\'s could originally have been 1, 2, 3, or 4 a\'s.',
    },
  ],
  hints: [
    'For each consecutive run of length L, there are L-1 ways it could have been extended by a long press (original had 1..L-1 chars, accidentally extended to L).',
    'Plus 1 for the case where no key was pressed too long at all.',
    'Total = 1 + sum(run_length - 1) for each run, which equals sum(run_length) - (number of runs) + 1.',
  ],
  functionName: 'possibleStringCount',
  params: ['word'],
  starterCode: {
    javascript: `function possibleStringCount(word) {

}`,
    typescript: `function possibleStringCount(word: string): number {

}`,
    python: `def possibleStringCount(word):
    pass`,
  },
  visibleTests: [
    { args: ['abbcccc'], expected: 5 },
    { args: ['abcd'], expected: 1 },
    { args: ['aaaa'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aab'], expected: 2 },
    { args: ['aabb'], expected: 3 },
    { args: ['aaabb'], expected: 4 },
    { args: ['aabbcc'], expected: 4 },
    { args: ['aaabbbccc'], expected: 7 },
  ],
};
