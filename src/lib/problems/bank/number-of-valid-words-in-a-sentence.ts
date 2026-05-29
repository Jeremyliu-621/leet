import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-valid-words-in-a-sentence',
  title: 'Number of Valid Words in a Sentence',
  difficulty: 'medium',
  tags: ['strings'],
  description: `A sentence consists of lowercase letters, spaces, digits, and certain punctuation marks (\`!\`, \`.\`, \`,\`). A **token** is a contiguous sequence of non-space characters.

A token is a **valid word** if all three of the following conditions are met:

- It only contains lowercase letters, hyphens, and/or punctuation (\`!\`, \`.\`, \`,\`). No digits.
- There is **at most one** hyphen \`-\`. If a hyphen exists, it must be surrounded by **lowercase letters** on both sides (i.e., the characters immediately before and after the hyphen must each be a lowercase letter).
- There is **at most one** punctuation symbol. If a punctuation symbol exists, it must be at the **end** of the token.

Return the number of valid words in \`sentence\`.

**Note:** A hyphen and punctuation character are not the same. An empty string (produced by consecutive spaces) is not a valid word.`,
  constraints: [
    '`1 <= sentence.length <= 1000`',
    '`sentence` only contains lowercase English letters, spaces, digits, and the characters `!`, `.`, and `,`.',
  ],
  examples: [
    {
      input: 'sentence = "cat and  dog"',
      output: '3',
      explanation: '"cat", "and", and "dog" are all valid words. The empty token from the double space is not.',
    },
    {
      input: 'sentence = "!this  1-s b8d"',
      output: '0',
      explanation: '"!this" has punctuation not at the end. "1-s" contains a digit. "b8d" contains a digit.',
    },
    {
      input: 'sentence = "alice and bob are playing stone-game10"',
      output: '5',
      explanation: '"alice", "and", "bob", "are", and "playing" are valid. "stone-game10" contains a digit.',
    },
  ],
  hints: [
    'Split the sentence on spaces (`sentence.split(" ")`), filter out empty strings, then validate each token independently.',
    'For a single token, count digits, hyphens, and punctuation characters (`!`, `.`, `,`). If there is any digit, the token is immediately invalid.',
    'For the hyphen rule, check that exactly the character before and after the hyphen are both lowercase letters (`/^[a-z]$/.test(ch)`). For punctuation, verify its position is the last character of the token. Use a single regex or manual scan — both are valid approaches.',
  ],
  functionName: 'countValidWords',
  params: ['sentence'],
  starterCode: {
    javascript: `function countValidWords(sentence) {

}`,
    typescript: `function countValidWords(sentence: string): number {

}`,
    python: `def countValidWords(sentence):
    `,
  },
  visibleTests: [
    { args: ['cat and  dog'], expected: 3 },
    { args: ['!this  1-s b8d'], expected: 0 },
    { args: ['alice and bob are playing stone-game10'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['cat and  dog'], expected: 3 },
    { args: ['!this  1-s b8d'], expected: 0 },
    { args: ['alice and bob are playing stone-game10'], expected: 5 },
    { args: ['he bought 2 books.'], expected: 3 },
    { args: ['there-is  a bone'], expected: 3 },
    { args: ['hello'], expected: 1 },
    { args: ['a-b.'], expected: 1 },
    { args: ['a- b'], expected: 1 },
  ],
};
