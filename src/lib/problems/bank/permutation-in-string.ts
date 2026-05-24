import type { Problem } from '../types';

export const problem: Problem = {
  id: 'permutation-in-string',
  title: 'Permutation in String',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map', 'strings'],
  description: `Given strings \`s1\` and \`s2\`, return \`true\` if any **permutation** of \`s1\` is a contiguous substring of \`s2\`.

A permutation of \`s1\` is a rearrangement of its characters. You need to check whether any window in \`s2\` of length \`s1.length\` contains exactly the same character counts as \`s1\`.

Use a **fixed-size sliding window** of length \`s1.length\` over \`s2\`, maintaining a frequency map. Compare the window's character counts against \`s1\`'s counts.`,
  constraints: [
    '1 <= s1.length, s2.length <= 10^4',
    's1 and s2 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's1 = "ab", s2 = "eidbaooo"',
      output: 'true',
      explanation: 's2 contains "ba" which is a permutation of "ab".',
    },
    {
      input: 's1 = "ab", s2 = "eidboaoo"',
      output: 'false',
      explanation: 'No permutation of "ab" is a substring.',
    },
    {
      input: 's1 = "adc", s2 = "dcda"',
      output: 'true',
      explanation: '"dca" starts at index 1.',
    },
  ],
  hints: [
    'A permutation check is equivalent to: does `s2` have a window of length `s1.length` with the same character frequencies as `s1`? Start by building `s1`\'s frequency map.',
    'Maintain a sliding window of exactly `s1.length` characters in `s2`. Add the incoming character and remove the outgoing character from your frequency map. After each full-window step, compare the maps.',
    'Instead of comparing two full maps each step, keep a counter `matches` = number of characters whose frequencies match. Increment/decrement `matches` when a character\'s count transitions to/from equality. When `matches === 26` (or the total distinct chars), return true.',
  ],
  functionName: 'permutationInString',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function permutationInString(s1, s2) {\n  // your code here\n}\n',
    python: 'def permutationInString(s1: str, s2: str) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['ab', 'eidbaooo'], expected: true },
    { args: ['ab', 'eidboaoo'], expected: false },
    { args: ['adc', 'dcda'], expected: true },
    { args: ['a', 'ab'], expected: true },
  ],
  hiddenTests: [
    { args: ['abc', 'bbbca'], expected: true },
    { args: ['abc', 'xyz'], expected: false },
    { args: ['aa', 'aaa'], expected: true },
    { args: ['ab', 'a'], expected: false },
  ],
};
