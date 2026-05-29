import type { Problem } from '../types';

export const problem: Problem = {
  id: 'large-group-positions',
  title: 'Positions of Large Groups',
  difficulty: 'easy',
  tags: ['simulation', 'arrays', 'strings'],
  description: `In a string \`s\` of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like \`s = "abbxxxxzyy"\` has the groups \`"a"\`, \`"bb"\`, \`"xxxx"\`, \`"z"\`, and \`"yy"\`.

A group is identified by an interval \`[start, end]\`, where \`start\` and \`end\` denote the start and end indices (inclusive) of the group. In the above example, \`"xxxx"\` has the interval \`[3, 6]\`.

A group is considered **large** if it has 3 or more characters.

Return the intervals of every **large** group sorted in increasing order by start index.`,
  constraints: [
    '1 <= s.length <= 1000',
    's contains lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "abbxxxxzzy"',
      output: '[[3,6]]',
      explanation: '"xxxx" is the only large group with interval [3, 6].',
    },
    {
      input: 's = "abc"',
      output: '[]',
      explanation: 'No group has 3 or more characters.',
    },
    {
      input: 's = "abcdddeeeeaabbbcd"',
      output: '[[3,5],[6,9],[12,14]]',
      explanation: '"ddd" at [3,5], "eeee" at [6,9], and "bbb" at [12,14].',
    },
  ],
  hints: [
    'Scan through the string tracking the start of the current group.',
    'When the character changes (or you reach the end), check if the group length >= 3.',
    'If so, add [start, i-1] (or [start, n-1] for the last group) to your result.',
  ],
  functionName: 'largeGroupPositions',
  params: ['s'],
  starterCode: {
    javascript: `function largeGroupPositions(s) {

}`,
    typescript: `function largeGroupPositions(s: string): number[][] {

}`,
    python: `def largeGroupPositions(s: str) -> list[list[int]]:
    pass`,
  },
  visibleTests: [
    { args: ['abbxxxxzzy'], expected: [[3, 6]] },
    { args: ['abc'], expected: [] },
    { args: ['abcdddeeeeaabbbcd'], expected: [[3, 5], [6, 9], [12, 14]] },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: [[0, 2]] },
    { args: ['aaaa'], expected: [[0, 3]] },
    { args: ['aabbbccc'], expected: [[2, 4], [5, 7]] },
    { args: ['a'], expected: [] },
    { args: ['aaabbb'], expected: [[0, 2], [3, 5]] },
    { args: ['aabb'], expected: [] },
    { args: ['aaabbbccc'], expected: [[0, 2], [3, 5], [6, 8]] },
    { args: ['abbbbbbbbbbb'], expected: [[1, 11]] },
  ],
};
