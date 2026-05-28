import type { Problem } from '../types';

export const problem: Problem = {
  id: 'top-k-frequent-words',
  title: 'Top K Frequent Words',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Given an array of strings \`words\` and an integer \`k\`, return the \`k\` most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.`,
  constraints: [
    '1 <= words.length <= 500',
    '1 <= words[i].length <= 10',
    'words[i] consists of lowercase English letters',
    'k is in the range [1, the number of unique words[i]]',
  ],
  examples: [
    {
      input: 'words = ["i","love","leetcode","i","love","coding"], k = 2',
      output: '["i","love"]',
      explanation: '"i" and "love" are the two most frequent words.',
    },
    {
      input: 'words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4',
      output: '["the","is","sunny","day"]',
    },
  ],
  hints: [
    'Count the frequency of each word using a hash map.',
    'Sort entries by frequency descending; for equal frequency, sort lexicographically ascending.',
    'Return the first k words from the sorted list.',
  ],
  functionName: 'topKFrequent',
  params: ['words', 'k'],
  starterCode: {
    javascript: `function topKFrequent(words, k) {
  // Return top k frequent words sorted by frequency desc, then lexicographically
}`,
    python: `def topKFrequent(words, k):
    # Return top k frequent words sorted by frequency desc, then lexicographically
    pass`,
  },
  visibleTests: [
    { args: [['i','love','leetcode','i','love','coding'], 2], expected: ['i', 'love'] },
    { args: [['the','day','is','sunny','the','the','the','sunny','is','is'], 4], expected: ['the','is','sunny','day'] },
    { args: [['a'], 1], expected: ['a'] },
  ],
  hiddenTests: [
    { args: [['aa','bb','aa','cc','bb','aa'], 2], expected: ['aa','bb'] },
    { args: [['b','a','b','a','b'], 1], expected: ['b'] },
    { args: [['i','love','leetcode','i','love','coding'], 3], expected: ['i','love','coding'] },
    { args: [['z','a','z','b','z','a'], 2], expected: ['z','a'] },
  ],
};
