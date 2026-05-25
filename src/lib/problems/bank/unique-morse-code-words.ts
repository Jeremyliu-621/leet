import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-morse-code-words',
  title: 'Unique Morse Code Words',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `International Morse Code defines a standard encoding where each letter maps to a series of dots and dashes.

The 26-letter mapping (\`a\` to \`z\`) is:

\`[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
\`

Given an array of strings \`words\`, return the number of **different** Morse code transformations among all words. The transformation of a word is the concatenation of the Morse code of each letter.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 12',
    'words[i] consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["gin","zen","gig","msg"]',
      output: '2',
      explanation: 'gin → "--...-.", zen → "--...-.", gig → "--...--.", msg → "--...--." → 2 unique transformations.',
    },
    {
      input: 'words = ["a"]',
      output: '1',
    },
  ],
  hints: [
    'Build each word\'s morse transformation by concatenating the code for each character. Store transformations in a Set to count unique ones.',
    'Index into the mapping with `word.charCodeAt(i) - 97` (or `ord(c) - ord("a")` in Python) to get the Morse code for each letter.',
  ],
  functionName: 'uniqueMorseRepresentations',
  params: ['words'],
  starterCode: {
    javascript: 'function uniqueMorseRepresentations(words) {\n  \n}\n',
    python: 'def uniqueMorseRepresentations(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['gin', 'zen', 'gig', 'msg']], expected: 2 },
    { args: [['a']], expected: 1 },
    { args: [['dot', 'toc', 'cat', 'dog', 'log']], expected: 5 },
  ],
  hiddenTests: [
    { args: [['abc', 'bca', 'cab']], expected: 3 },
    { args: [['a', 'b', 'c']], expected: 3 },
    { args: [['zz', 'zzz', 'zzzz']], expected: 3 },
    { args: [['gin', 'zen']], expected: 1 },
    { args: [['hello', 'world']], expected: 2 },
  ],
};
