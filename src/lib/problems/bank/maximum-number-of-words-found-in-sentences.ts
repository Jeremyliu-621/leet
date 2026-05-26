import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-words-found-in-sentences',
  title: 'Maximum Number of Words Found in Sentences',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `A **sentence** is a list of **words** that are separated by a single space with no leading or trailing spaces.

You are given an array of strings \`sentences\`, where each \`sentences[i]\` represents a single sentence.

Return the **maximum number of words** that appear in a single sentence.`,
  constraints: [
    '1 <= sentences.length <= 100',
    '1 <= sentences[i].length <= 100',
    'sentences[i] consists only of lowercase English letters and spaces.',
    'sentences[i] does not have leading or trailing spaces.',
    'All words in sentences[i] are separated by a single space.',
  ],
  examples: [
    {
      input: 'sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]',
      output: '6',
      explanation: 'The last sentence has 6 words.',
    },
    {
      input: 'sentences = ["please wait", "continue to fight", "continue to win"]',
      output: '3',
      explanation: 'Both "continue to fight" and "continue to win" have 3 words.',
    },
  ],
  hints: [
    'Count words in each sentence by counting spaces and adding 1.',
    'Return the maximum count.',
    `\`\`\`js
function mostWordsFound(sentences) {
  return Math.max(...sentences.map(s => s.split(" ").length));
}\`\`\``,
  ],
  functionName: 'mostWordsFound',
  params: ['sentences'],
  starterCode: {
    javascript: 'function mostWordsFound(sentences) {\n  \n}\n',
    python: 'def mostWordsFound(sentences):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']],
      expected: 6,
    },
    { args: [['please wait', 'continue to fight', 'continue to win']], expected: 3 },
  ],
  hiddenTests: [
    { args: [['hello']], expected: 1 },
    { args: [['one two', 'three four five']], expected: 3 },
    { args: [['a b c d e', 'f g']], expected: 5 },
    { args: [['word']], expected: 1 },
    { args: [['a', 'b c', 'd e f', 'g h i j']], expected: 4 },
  ],
};
