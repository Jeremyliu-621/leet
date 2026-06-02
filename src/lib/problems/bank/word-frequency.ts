import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-frequency',
  title: 'Word Frequency Count',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given a sentence string \`text\`, return an object / dictionary that maps each unique word to the number of times it appears.

Words are separated by single spaces. Treat the input as case-sensitive (so \`"The"\` and \`"the"\` are different words). Preserve the exact case of each word as the key.`,
  constraints: [
    '1 <= text.length <= 1000',
    'text consists of printable characters.',
    'Words are separated by exactly one space.',
    'No leading or trailing spaces.',
  ],
  examples: [
    {
      input: 'text = "the cat sat on the mat"',
      output: '{"the":2,"cat":1,"sat":1,"on":1,"mat":1}',
      explanation: '"the" appears twice; all other words appear once.',
    },
    {
      input: 'text = "hello world hello"',
      output: '{"hello":2,"world":1}',
      explanation: '"hello" appears twice.',
    },
    {
      input: 'text = "one"',
      output: '{"one":1}',
      explanation: 'Single word, frequency 1.',
    },
  ],
  hints: [
    'Split the sentence into words first, then count each one.',
    '`text.split(" ")` gives you the words array. Walk through it and maintain a frequency map.',
    '`const freq = {}; for (const w of text.split(" ")) { freq[w] = (freq[w] ?? 0) + 1; } return freq;`',
  ],
  functionName: 'wordFrequency',
  params: ['text'],
  starterCode: {
    javascript: `function wordFrequency(text) {
  const freq = {};
  for (const w of text.split(' ')) freq[w] = (freq[w] ?? 0) + 1;
  return freq;
}`,
    typescript: `function wordFrequency(text: string): unknown {
  const freq: Record<string, number> = {};
  for (const w of text.split(' ')) freq[w] = (freq[w] ?? 0) + 1;
  return freq;
}`,
    python: `def wordFrequency(text):
    if hasattr(text, 'to_py'): text = text.to_py()
    from collections import Counter
    return dict(Counter(str(text).split(' ')))`,
  },
  visibleTests: [
    { args: ['the cat sat on the mat'], expected: { the: 2, cat: 1, sat: 1, on: 1, mat: 1 } },
    { args: ['hello world hello'], expected: { hello: 2, world: 1 } },
    { args: ['one'], expected: { one: 1 } },
  ],
  hiddenTests: [
    { args: ['a a a'], expected: { a: 3 } },
    { args: ['foo bar baz'], expected: { foo: 1, bar: 1, baz: 1 } },
    { args: ['The the THE'], expected: { The: 1, the: 1, THE: 1 } },
    { args: ['go go go stop go'], expected: { go: 4, stop: 1 } },
    { args: ['x y x y x'], expected: { x: 3, y: 2 } },
    { args: ['repeat repeat'], expected: { repeat: 2 } },
  ],
};
