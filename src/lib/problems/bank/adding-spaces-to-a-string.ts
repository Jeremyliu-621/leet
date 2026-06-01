import type { Problem } from '../types';

export const problem: Problem = {
  id: 'adding-spaces-to-a-string',
  title: 'Adding Spaces to a String',
  difficulty: 'medium',
  tags: ['strings', 'arrays', 'two-pointers'],
  description: `You are given a **0-indexed** string \`s\` and a **0-indexed** integer array \`spaces\` that describes the indices in the original string where spaces will be added. Each space should be inserted **before** the character at the given index.

- For example, given \`s = "EnjoyYourCoffee"\` and \`spaces = [5, 9]\`, we place spaces before index 5 and index 9, resulting in \`"Enjoy Your Coffee"\`.

Return *the modified string* **after** *the spaces have been added*.`,
  constraints: [
    '1 <= s.length <= 3 * 10^5',
    '1 <= spaces.length <= 3 * 10^5',
    '0 <= spaces[i] <= s.length - 1',
    'All the values of spaces are strictly increasing.',
  ],
  examples: [
    {
      input: 's = "LeetcodeHelpsMeLearn", spaces = [8,13,15]',
      output: '"Leetcode Helps Me Learn"',
      explanation:
        'Spaces are added before indices 8, 13, and 15: "Leetcode Helps Me Learn".',
    },
    {
      input: 's = "icodeinpython", spaces = [1,5,7,9]',
      output: '"i code in py thon"',
      explanation:
        'Spaces are added before indices 1, 5, 7, and 9: "i code in py thon".',
    },
    {
      input: 's = "spacing", spaces = [0,1,2,3,4,5,6]',
      output: '" s p a c i n g"',
      explanation: 'A space is added before every character.',
    },
  ],
  hints: [
    'Level 1: Build the result character by character. Use a pointer into the spaces array.',
    'Level 2: Use two pointers: one for s and one for spaces. When the s-index matches spaces[j], append a space first.',
    'Level 3: Append to a result array (not repeated string concatenation) for O(n+m) time and O(n+m) space.',
  ],
  functionName: 'addSpaces',
  params: ['s', 'spaces'],
  starterCode: {
    javascript: `function addSpaces(s, spaces) {
  const res = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (j < spaces.length && spaces[j] === i) {
      res.push(' ');
      j++;
    }
    res.push(s[i]);
  }
  return res.join('');
}`,
    typescript: `function addSpaces(s: string, spaces: number[]): string {
  const res: string[] = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (j < spaces.length && spaces[j] === i) {
      res.push(' ');
      j++;
    }
    res.push(s[i]);
  }
  return res.join('');
}`,
    python: `def addSpaces(s, spaces):
    res = []
    j = 0
    for i, ch in enumerate(s):
        if j < len(spaces) and spaces[j] == i:
            res.append(' ')
            j += 1
        res.append(ch)
    return ''.join(res)`,
  },
  visibleTests: [
    { args: ['LeetcodeHelpsMeLearn', [8, 13, 15]], expected: 'Leetcode Helps Me Learn' },
    { args: ['icodeinpython', [1, 5, 7, 9]], expected: 'i code in py thon' },
    { args: ['spacing', [0, 1, 2, 3, 4, 5, 6]], expected: ' s p a c i n g' },
  ],
  hiddenTests: [
    { args: ['a', [0]], expected: ' a' },
    { args: ['ab', [1]], expected: 'a b' },
    { args: ['hello', []], expected: 'hello' },
    { args: ['EnjoyYourCoffee', [5, 9]], expected: 'Enjoy Your Coffee' },
    { args: ['abc', [0, 1, 2]], expected: ' a b c' },
    { args: ['code', [2]], expected: 'co de' },
    { args: ['xyz', [0, 2]], expected: ' xy z' },
  ],
};
