import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-string-into-groups',
  title: 'Divide a String Into Groups of Size k',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A string \`s\` can be partitioned into groups of size \`k\` using the following procedure:

- The first group consists of the first \`k\` characters of the string, the second group consists of the next \`k\` characters of the string, and so on. Each character can be a part of **exactly one** group.
- For the last group, if the string **does not** have \`k\` characters remaining, a character \`fill\` is used to complete the group.

Note that the partition is done so that after removing the \`fill\` character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be \`s\`.

Given the string \`s\`, the size of each group \`k\` and the character \`fill\`, return *a string array denoting the **composition of every group*** \`s\` has been divided into, using the above procedure.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists of lowercase English letters only.',
    '`1 <= k <= 100`',
    '`fill` is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "abcdefghi", k = 3, fill = "x"',
      output: '["abc","def","ghi"]',
    },
    {
      input: 's = "abcdefghij", k = 3, fill = "x"',
      output: '["abc","def","ghi","jxx"]',
    },
  ],
  hints: [
    'Pad s with fill characters until its length is divisible by k. Then split into chunks of size k.',
  ],
  functionName: 'divideString',
  params: ['s', 'k', 'fill'],
  starterCode: {
    javascript: `function divideString(s, k, fill) {

}`,
    python: `def divideString(s, k, fill):
    pass`,
  },
  visibleTests: [
    { args: ['abcdefghi', 3, 'x'], expected: ['abc', 'def', 'ghi'] },
    { args: ['abcdefghij', 3, 'x'], expected: ['abc', 'def', 'ghi', 'jxx'] },
  ],
  hiddenTests: [
    { args: ['a', 1, 'z'], expected: ['a'] },
    { args: ['a', 3, 'z'], expected: ['azz'] },
    { args: ['abc', 3, 'z'], expected: ['abc'] },
    { args: ['ab', 4, 'z'], expected: ['abzz'] },
    { args: ['abcde', 2, 'x'], expected: ['ab', 'cd', 'ex'] },
  ],
};
