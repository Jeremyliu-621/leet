import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-spaces-to-string',
  title: 'Add Spaces to a String',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `You are given a string \`s\` and a **0-indexed** integer array \`spaces\` that describes the indices in the original string where spaces will be added. Each space should be inserted **before** the character at the given index.

Return the modified string **after** the spaces have been added.`,
  constraints: [
    '`1 <= s.length <= 3 * 10^5`',
    '`s\` consists only of lowercase and uppercase English letters and digits.',
    '`1 <= spaces.length <= 3 * 10^5`',
    '`0 <= spaces[i] <= s.length - 1`',
    'All values in `spaces` are strictly increasing.',
  ],
  examples: [
    {
      input: 's = "LeetcodeHelpsMeLearn", spaces = [8,13,15]',
      output: '"Leetcode Helps Me Learn"',
      explanation: 'Spaces inserted before index 8 (\'H\'), 13 (\'M\'), and 15 (\'L\').',
    },
    {
      input: 's = "icodeinpython", spaces = [1,5,7,9]',
      output: '"i code in py thon"',
    },
  ],
  hints: [
    'Use a set or pointer to track where spaces should be inserted.',
    'Iterate through the string character by character. Before adding each character, check if its index is in `spaces`; if so, append a space first.',
    'Building the result with a string builder (array join) is more efficient than repeated string concatenation for large inputs.',
  ],
  functionName: 'addSpaces',
  params: ['s', 'spaces'],
  starterCode: {
    javascript: `function addSpaces(s, spaces) {
  const spaceSet = new Set(spaces);
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (spaceSet.has(i)) result.push(' ');
    result.push(s[i]);
  }
  return result.join('');
}`,
    typescript: `function addSpaces(s: string, spaces: number[]): string {
  const spaceSet = new Set(spaces);
  const result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (spaceSet.has(i)) result.push(' ');
    result.push(s[i]);
  }
  return result.join('');
}`,
    python: `def addSpaces(s, spaces):
    spaces = list(spaces.to_py()) if hasattr(spaces, 'to_py') else list(spaces)
    space_set = set(spaces)
    result = []
    for i, ch in enumerate(s):
        if i in space_set:
            result.append(' ')
        result.append(ch)
    return ''.join(result)`,
  },
  visibleTests: [
    { args: ['LeetcodeHelpsMeLearn', [8, 13, 15]], expected: 'Leetcode Helps Me Learn' },
    { args: ['icodeinpython', [1, 5, 7, 9]], expected: 'i code in py thon' },
  ],
  hiddenTests: [
    { args: ['abc', [0, 1, 2]], expected: ' a b c' },
    { args: ['hello', [2]], expected: 'he llo' },
    { args: ['a', [0]], expected: ' a' },
    { args: ['xyz', [0, 2]], expected: ' xy z' },
    { args: ['123', [1]], expected: '1 23' },
    { args: ['abcdef', [1, 3, 5]], expected: 'a bc de f' },
  ],
};
