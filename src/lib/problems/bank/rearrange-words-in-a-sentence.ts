import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-words-in-a-sentence',
  title: 'Rearrange Words in a Sentence',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `Given a sentence \`text\` (a string of space-separated words) where the first word is capitalized, rearrange the words in **ascending order by their lengths**. Words of equal length maintain their **original relative order** (stable sort).

Return the rearranged sentence with the **first word capitalized** and all other words **lowercase**.`,
  constraints: [
    '1 <= text.length <= 10^5',
    'text consists only of English letters and spaces',
    'text contains at least one word',
    'The first word is capitalized; all other words are lowercase',
  ],
  examples: [
    {
      input: 'text = "Leetcode is cool"',
      output: '"Is cool leetcode"',
      explanation: 'Word lengths: 8, 2, 4. Sorted ascending: is(2), cool(4), leetcode(8).',
    },
    {
      input: 'text = "Keep calm and code on"',
      output: '"On and keep calm code"',
      explanation: 'Lengths: 4,4,3,4,2. Sorted: on(2), and(3), keep(4), calm(4), code(4).',
    },
    {
      input: 'text = "To be or not to be"',
      output: '"To be or to be not"',
      explanation: 'Lengths: 2,2,2,3,2,2. Stable sort keeps equal-length words in original order.',
    },
  ],
  hints: [
    'Lowercase the entire text first, then split into words.',
    'Use a stable sort by word length (JavaScript Array.sort is stable since ES2019).',
    'Capitalize the first character of the first word and join with spaces.',
  ],
  functionName: 'arrangeWords',
  params: ['text'],
  starterCode: {
    javascript: `function arrangeWords(text) {
  const words = text.toLowerCase().split(' ');
  words.sort((a, b) => a.length - b.length);
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
}`,
    typescript: `function arrangeWords(text: string): string {
  const words = text.toLowerCase().split(' ');
  words.sort((a, b) => a.length - b.length);
  words[0] = words[0]![0]!.toUpperCase() + words[0]!.slice(1);
  return words.join(' ');
}`,
    python: `def arrangeWords(text):
    if hasattr(text, 'to_py'): text = text.to_py()
    text = str(text)
    words = text.lower().split()
    words.sort(key=len)
    words[0] = words[0][0].upper() + words[0][1:]
    return ' '.join(words)`,
  },
  visibleTests: [
    { args: ['Leetcode is cool'], expected: 'Is cool leetcode' },
    { args: ['Keep calm and code on'], expected: 'On and keep calm code' },
    { args: ['To be or not to be'], expected: 'To be or to be not' },
  ],
  hiddenTests: [
    { args: ['Hello'], expected: 'Hello' },
    { args: ['I love coding'], expected: 'I love coding' },
    { args: ['A b c'], expected: 'A b c' },
    { args: ['The quick brown fox'], expected: 'The fox quick brown' },
    { args: ['Sort me please'], expected: 'Me sort please' },
  ],
};
