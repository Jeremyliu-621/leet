import type { Problem } from '../types';

export const problem: Problem = {
  id: 'circular-sentence',
  title: 'Circular Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **sentence** is a list of words that are separated by a single space with no leading or trailing spaces.

- For example, \`"Hello World"\`, \`"HELLO"\`, \`"hello world hello world"\` are all sentences.

Words consist of **only** uppercase and lowercase English letters. Two sentences are considered **circle sentences** if:

- The last character of a word is equal to the first character of the next word.
- The last character of the last word is equal to the first character of the first word.

For example, \`"leetcode exercises sound delightful"\` is a circular sentence because:
- The last character of \`"leetcode"\` is \`'e'\`, which equals the first character of \`"exercises"\`.
- The last character of \`"exercises"\` is \`'s'\`, which equals the first character of \`"sound"\`.
- The last character of \`"sound"\` is \`'d'\`, which equals the first character of \`"delightful"\`.
- The last character of \`"delightful"\` is \`'l'\`, which equals the first character of \`"leetcode"\`.

Return \`true\` if \`sentence\` is a circular sentence, or \`false\` otherwise.`,
  constraints: [
    '1 <= sentence.length <= 500',
    'sentence consist of only lowercase and uppercase English letters and spaces',
    'The words in sentence are separated by a single space',
    'There are no leading or trailing spaces',
  ],
  examples: [
    {
      input: 'sentence = "leetcode exercises sound delightful"',
      output: 'true',
      explanation: 'All adjacent word boundaries match, and the last char "l" equals the first char "l".',
    },
    {
      input: 'sentence = "eetcode"',
      output: 'true',
      explanation: 'Single word: last char "e" equals first char "e", so it is circular.',
    },
    {
      input: 'sentence = "Leetcode is cool"',
      output: 'false',
      explanation: 'The last char of "Leetcode" is "e", but the first char of "is" is "i" — they do not match.',
    },
  ],
  hints: [
    'Split the sentence into words and check each adjacent pair.',
    'Also check that the last character of the last word equals the first character of the first word.',
    'A single-word sentence is circular if its first and last characters are equal.',
  ],
  functionName: 'isCircularSentence',
  params: ['sentence'],
  starterCode: {
    javascript: `function isCircularSentence(sentence) {
  const words = sentence.split(' ');
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const curr = words[i], next = words[(i + 1) % n];
    if (curr[curr.length - 1] !== next[0]) return false;
  }
  return true;
}`,
    typescript: `function isCircularSentence(sentence: string): boolean {
  const words = sentence.split(' ');
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const curr = words[i]!, next = words[(i + 1) % n]!;
    if (curr[curr.length - 1] !== next[0]) return false;
  }
  return true;
}`,
    python: `def isCircularSentence(sentence):
    words = sentence.split()
    n = len(words)
    return all(words[i][-1] == words[(i+1) % n][0] for i in range(n))`,
  },
  visibleTests: [
    { args: ['leetcode exercises sound delightful'], expected: true },
    { args: ['eetcode'], expected: true },
    { args: ['Leetcode is cool'], expected: false },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['ab ba'], expected: true },
    { args: ['ab bc'], expected: false },
    { args: ['aA Aa'], expected: true },
    { args: ['hello world'], expected: false },
  ],
};
