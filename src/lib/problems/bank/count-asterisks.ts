import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-asterisks',
  title: 'Count Asterisks',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` where every two consecutive vertical bars \`'|'\` form a pair. Return the number of \`'*'\` characters that are **not** between any pair of vertical bars.

More formally, a \`'*'\` counts if it appears before the first \`'|'\`, after the last \`'|'\`, or between the (2k)th and (2k+1)th \`'|'\` for any integer k (i.e., outside all pairs).`,
  constraints: [
    '1 <= s.length <= 1000',
    "s consists of '|', '*', and lowercase English letters.",
    "s has an even number of '|' characters.",
  ],
  examples: [
    {
      input: 's = "l|*e*et|**co|*de|"',
      output: '2',
      explanation: 'The segments outside pipes are "l" and "**co". Only "**co" contains asterisks, contributing 2.',
    },
    {
      input: 's = "*|*|*"',
      output: '2',
      explanation: 'The first \'*\' is outside (count 1), the middle \'*\' is inside the pipe pair, and the last \'*\' is outside (count 2).',
    },
    {
      input: 's = "abc"',
      output: '0',
      explanation: 'There are no \'*\' characters in the string.',
    },
  ],
  hints: [
    'Track whether you are currently inside or outside a pipe pair using a boolean toggle.',
    'Each time you encounter \'|\', flip the toggle.',
    'Count \'*\' characters only when the toggle indicates you are outside a pipe pair.',
  ],
  functionName: 'countAsterisks',
  params: ['s'],
  starterCode: {
    javascript: `function countAsterisks(s) {
  let count = 0, inside = false;
  for (const c of s) {
    if (c === '|') inside = !inside;
    else if (c === '*' && !inside) count++;
  }
  return count;
}`,
    typescript: `function countAsterisks(s: string): number {
  let count = 0, inside = false;
  for (const c of s) {
    if (c === '|') inside = !inside;
    else if (c === '*' && !inside) count++;
  }
  return count;
}`,
    python: `def countAsterisks(s):
    count, inside = 0, False
    for c in s:
        if c == '|':
            inside = not inside
        elif c == '*' and not inside:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: ['l|*e*et|**co|*de|'], expected: 2 },
    { args: ['*|*|*'], expected: 2 },
    { args: ['abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['*'], expected: 1 },
    { args: ['|*|'], expected: 0 },
    { args: ['*|abc|*|def|*'], expected: 3 },
    { args: ['**|***|**'], expected: 4 },
    { args: ['a*b*c'], expected: 2 },
  ],
};
