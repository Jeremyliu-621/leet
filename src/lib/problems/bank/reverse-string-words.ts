import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-string-words',
  title: 'Reverse Order of Words in Sentence',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\` of words separated by spaces, return a new string with the **words in reversed order**.

- Strip any leading or trailing spaces.
- Collapse multiple consecutive spaces between words to a single space.
- A word is any maximal sequence of non-space characters.`,
  constraints: [
    '1 <= s.length <= 1000',
    's contains printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "the sky is blue"',
      output: '"blue is sky the"',
      explanation: 'Words reversed: blue, is, sky, the.',
    },
    {
      input: 's = "  hello world  "',
      output: '"world hello"',
      explanation: 'Leading and trailing spaces are stripped before reversing.',
    },
    {
      input: 's = "a good   example"',
      output: '"example good a"',
      explanation: 'Multiple spaces between words are collapsed to one.',
    },
  ],
  hints: [
    'Level 1: Split the string on whitespace, discard empty tokens caused by extra spaces, reverse the list of words, then join with a single space.',
    'Level 2: In most languages, `s.trim().split(/\\s+/)` gives you the cleaned word list. Reverse it with `.reverse()` and join with `" ".join(...)` or `.join(" ")`.',
    'Level 3: `return s.trim().split(/\\s+/).reverse().join(" ");`',
  ],
  functionName: 'reverseWordsInSentence',
  params: ['s'],
  starterCode: {
    javascript: 'function reverseWordsInSentence(s) {\n  // your code here\n}\n',
    python: 'def reverseWordsInSentence(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['the sky is blue'], expected: 'blue is sky the' },
    { args: ['  hello world  '], expected: 'world hello' },
    { args: ['a good   example'], expected: 'example good a' },
  ],
  hiddenTests: [
    { args: ['word'], expected: 'word' },
    { args: ['  single  '], expected: 'single' },
    { args: ['one two three'], expected: 'three two one' },
    { args: ['   a   b   c   '], expected: 'c b a' },
    { args: ['Alice is coding'], expected: 'coding is Alice' },
    { args: ['  multiple   spaces   here  '], expected: 'here spaces multiple' },
  ],
};
