import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-valid-words-in-sentence',
  title: 'Number of Valid Words in a Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A sentence consists of lowercase letters (\`'a'\` to \`'z'\`), digits (\`'0'\` to \`'9'\`), hyphens (\`'-'\`), punctuation marks (\`'!'\`, \`'.'\`, \`','\`), and spaces (\`' '\`). Each sentence can be broken down into **one or more tokens** separated by one or more spaces \`' '\`.

A token is a valid word if all **three** of the following are true:
- It only contains lowercase letters, hyphens, and/or punctuation (**no** digits).
- There is **at most one** hyphen \`'-'\`. If present, it must be surrounded by lowercase characters on **both sides** (e.g., \`"b-c"\` is valid, but \`"-bc"\` and \`"bc-"\` are not valid).
- There is **at most one** punctuation mark. If present, it must be at the **end** of the token (e.g., \`"bc!"\` is valid).

Return the number of valid words in the sentence.`,
  constraints: [
    '1 <= sentence.length <= 1000',
    'sentence only contains lowercase English letters, digits, spaces, hyphens, and punctuation.',
    'There are no leading or trailing spaces.',
    'There is at least one token.',
  ],
  examples: [
    {
      input: 'sentence = "cat and in the hat"',
      output: '5',
      explanation: 'All 5 tokens are valid words.',
    },
    {
      input: 'sentence = "1-s b2b3d"',
      output: '0',
      explanation: '"1-s" has a digit. "b2b3d" has digits. Neither is valid.',
    },
    {
      input: 'sentence = "alice and bob are playing stone-game"',
      output: '6',
      explanation: 'All tokens are valid — "stone-game" has one hyphen surrounded by letters.',
    },
  ],
  hints: [
    'Split the sentence on spaces. For each non-empty token, check the validity rules: no digits, at most one hyphen (surrounded by letters), at most one punctuation at end.',
    'Check: any digit → invalid. Count hyphens: if > 1 → invalid; if exactly 1, check positions (not first/last, neighbors must be letters). Check punctuation: at most 1, must be last char.',
    'Punctuation chars are \'!\', \'.\', \',\'. Iterate the token character by character to apply all rules.',
  ],
  functionName: 'countValidWords',
  params: ['sentence'],
  starterCode: {
    javascript: `function countValidWords(sentence) {

}`,
    typescript: "function countValidWords(sentence: string): number {\n\n}",

    python: `def countValidWords(sentence):
    pass`,
  },
  visibleTests: [
    { args: ['cat and in the hat'], expected: 5 },
    { args: ['1-s b2b3d'], expected: 0 },
    { args: ['alice and bob are playing stone-game'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a-b'], expected: 1 },
    { args: ['a-1'], expected: 0 },
    { args: ['hello!'], expected: 1 },
    { args: ['-bc'], expected: 0 },
    { args: ['a--b'], expected: 0 },
  ],
};
