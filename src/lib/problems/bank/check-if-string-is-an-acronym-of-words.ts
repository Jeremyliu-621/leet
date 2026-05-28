import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-string-is-an-acronym-of-words',
  title: 'Check if String Is an Acronym of Words',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `Given an array of strings \`words\` and a string \`s\`, determine if \`s\` is an **acronym** of \`words\`.

The string \`s\` is an acronym of \`words\` if \`s\` can be formed by concatenating the **first** character of each string in \`words\` **in order**. For example, \`"wb"\` is an acronym of \`["word","book"]\`, and \`"un"\` is not an acronym of \`["ants","rodents"]\`.

Return \`true\` if \`s\` is an acronym of \`words\`, and \`false\` otherwise.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 10`',
    '`1 <= s.length <= 100`',
    '`words[i]` and `s` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["alice","bob","charlie"], s = "abc"',
      output: 'true',
      explanation: 'First chars: "a", "b", "c" → "abc" == s.',
    },
    {
      input: 'words = ["an","apple"], s = "a"',
      output: 'false',
      explanation: 'First chars give "aa", not "a". Length mismatch.',
    },
    {
      input: 'words = ["never","gonna","give","up","let","you","down"], s = "nggulyд"',
      output: 'false',
      explanation: 'First chars: "n","g","g","u","l","y","d" → "nggulyd". s is different.',
    },
  ],
  functionName: 'isAcronym',
  params: ['words', 's'],
  starterCode: {
    javascript: `/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
function isAcronym(words, s) {

}`,
    python: `def isAcronym(words: list[str], s: str) -> bool:
    pass`,
  },
  hints: [
    'The length of s must equal the number of words. If not, it cannot be an acronym.',
    'Check that s[i] === words[i][0] for every index i.',
    'One-liner: `return words.map(w => w[0]).join("") === s`.',
  ],
  visibleTests: [
    { args: [['alice', 'bob', 'charlie'], 'abc'], expected: true },
    { args: [['an', 'apple'], 'a'], expected: false },
    { args: [['never', 'gonna', 'give', 'up', 'let', 'you', 'down'], 'nggulyd'], expected: true },
  ],
  hiddenTests: [
    { args: [['word', 'book'], 'wb'], expected: true },
    { args: [['ants', 'rodents'], 'un'], expected: false },
    { args: [['a'], 'a'], expected: true },
    { args: [['a'], 'b'], expected: false },
    { args: [['hello', 'world'], 'hw'], expected: true },
    { args: [['hello', 'world'], 'hW'], expected: false },
  ],
};
