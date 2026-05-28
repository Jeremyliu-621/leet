import type { Problem } from '../types';

export const problem: Problem = {
  id: 'repeated-string-match',
  title: 'Repeated String Match',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given two strings \`a\` and \`b\`, return the minimum number of times you should repeat string \`a\` such that string \`b\` is a substring of the repeated string. If it is not possible for \`b\` to be a substring of any repetition of \`a\`, return \`-1\`.

Notice: string \`"abc"\` repeated 0 times is \`""\`, repeated 1 time is \`"abc"\` and repeated 2 times is \`"abcabc"\`.`,
  constraints: [
    '1 <= a.length, b.length <= 10^4',
    'a and b consist of lowercase English letters',
  ],
  examples: [
    {
      input: 'a = "abcd", b = "cdabcdab"',
      output: '3',
      explanation: 'After repeating a three times ("abcdabcdabcd"), b is a substring of it.',
    },
    {
      input: 'a = "a", b = "aa"',
      output: '2',
      explanation: '"aa" is a substring of "aa" (a repeated twice).',
    },
    {
      input: 'a = "abc", b = "wxyz"',
      output: '-1',
      explanation: 'No matter how many times you repeat a, b will never be a substring.',
    },
  ],
  hints: [
    'The minimum number of repetitions needed is at least ceil(b.length / a.length).',
    'You only need to try ceil(b.length / a.length) and ceil(b.length / a.length) + 1 repetitions.',
    'Build the repeated string and use indexOf to check for b. One extra repetition handles the case where b straddles the last boundary.',
  ],
  functionName: 'repeatedStringMatch',
  params: ['a', 'b'],
  starterCode: {
    javascript: 'function repeatedStringMatch(a, b) {\n  \n}\n',
    python: 'def repeatedStringMatch(a, b):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcd', 'cdabcdab'], expected: 3 },
    { args: ['a', 'aa'], expected: 2 },
    { args: ['abc', 'wxyz'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['abcd', 'abcd'], expected: 1 },
    { args: ['ab', 'ababab'], expected: 3 },
    { args: ['abc', 'cabcabca'], expected: 4 },
    { args: ['a', 'a'], expected: 1 },
    { args: ['aa', 'a'], expected: 1 },
    { args: ['abcdef', 'cdefab'], expected: 2 },
  ],
};
