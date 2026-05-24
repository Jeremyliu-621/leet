import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-adjacent-dupes',
  title: 'Collapse Adjacent Duplicates',
  difficulty: 'easy',
  tags: ['stack'],
  description:
    'Given a string text of lowercase letters, repeatedly remove any two adjacent characters that are equal. After a removal, the characters that were on either side become adjacent and may form a new equal pair to remove.\n\nKeep removing until no equal adjacent pair remains. A stack makes this simple: push each character, but if it equals the top of the stack, pop instead.\n\nReturn the final string. It may be empty.',
  constraints: [
    '0 <= text.length <= 1000',
    'text contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "abbaca"',
      output: '"ca"',
      explanation: 'Remove "bb" to get "aaca", then remove "aa" to get "ca".',
    },
    {
      input: 'text = "azxxzy"',
      output: '"ay"',
      explanation: 'Remove "xx", then "zz", leaving "ay".',
    },
    {
      input: 'text = "abc"',
      output: '"abc"',
    },
  ],
  functionName: 'collapseAdjacentDuplicates',
  params: ['text'],
  starterCode: {
    javascript: 'function collapseAdjacentDuplicates(text) {\n  // your code here\n}\n',
    python: 'def collapseAdjacentDuplicates(text):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abbaca'], expected: 'ca' },
    { args: ['azxxzy'], expected: 'ay' },
    { args: ['abc'], expected: 'abc' },
  ],
  hiddenTests: [
    { args: [''], expected: '' },
    { args: ['aa'], expected: '' },
    { args: ['aabbcc'], expected: '' },
    { args: ['a'], expected: 'a' },
    { args: ['abccba'], expected: '' },
    { args: ['mississippi'], expected: 'm' },
  ],
};
