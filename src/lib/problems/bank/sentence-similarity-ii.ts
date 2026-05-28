import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sentence-similarity-ii',
  title: 'Sentence Similarity II',
  difficulty: 'medium',
  tags: ['union-find', 'strings', 'graph'],
  description: `We can represent a sentence as an array of words — for example, the sentence \`"I am happy with leetcode"\` is represented as \`arr = ["I","am","happy","with","leetcode"]\`.

Given two sentences \`sentence1\` and \`sentence2\` each represented as a string array, and given an array of string pairs \`similarPairs\` where \`similarPairs[i] = [xi, yi]\` indicates that \`xi\` and \`yi\` are similar, return \`true\` if \`sentence1\` and \`sentence2\` are **similar**.

Two sentences are similar if they have the same length and \`sentence1[i]\` is similar to \`sentence2[i]\` for all \`i\`.

Similarity here is **transitive**: if "great" and "fine" are similar, and "fine" and "good" are similar, then "great" and "good" are also similar.

Words are similar to themselves.`,
  constraints: [
    '1 <= sentence1.length, sentence2.length <= 1000',
    '1 <= sentence1[i].length, sentence2[i].length <= 20',
    'sentence1[i] and sentence2[i] consist of lower-case and upper-case English letters.',
    '0 <= similarPairs.length <= 2000',
    'similarPairs[i].length == 2',
    '1 <= xi.length, yi.length <= 20',
    'xi and yi consist of lower-case and upper-case English letters.',
  ],
  examples: [
    {
      input: 'sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]',
      output: 'true',
      explanation: '"great"~"fine" (direct pair), "acting"~"drama" (direct pair), "skills"~"talent" (direct pair).',
    },
    {
      input: 'sentence1 = ["I","love","leetcode"], sentence2 = ["I","like","algorithms"], similarPairs = [["love","like"],["leetcode","algorithms"]]',
      output: 'true',
      explanation: '"I"~"I" (same word), "love"~"like" (direct pair), "leetcode"~"algorithms" (direct pair).',
    },
  ],
  hints: [
    'Build a Union-Find (disjoint-set) structure over all unique words that appear in the pairs. Union each pair together.',
    'For each index i, check if sentence1[i] == sentence2[i] (trivially similar) or if find(sentence1[i]) == find(sentence2[i]) (transitively similar via the Union-Find).',
    'If sentence1 and sentence2 have different lengths, return false immediately. A word not present in any pair is only similar to itself.',
  ],
  functionName: 'areSentencesSimilarTwo',
  params: ['sentence1', 'sentence2', 'similarPairs'],
  starterCode: {
    javascript: 'function areSentencesSimilarTwo(sentence1, sentence2, similarPairs) {\n  \n}\n',
    typescript: "function areSentencesSimilarTwo(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {\n  \n}",

    python: 'def areSentencesSimilarTwo(sentence1, sentence2, similarPairs):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['great', 'acting', 'skills'],
        ['fine', 'drama', 'talent'],
        [['great', 'fine'], ['drama', 'acting'], ['skills', 'talent']],
      ],
      expected: true,
    },
    {
      args: [
        ['I', 'love', 'leetcode'],
        ['I', 'like', 'algorithms'],
        [['love', 'like'], ['leetcode', 'algorithms']],
      ],
      expected: true,
    },
  ],
  hiddenTests: [
    // Different lengths → false
    { args: [['hello'], ['hello', 'world'], []], expected: false },
    // Same sentence, no pairs → true (words are similar to themselves)
    { args: [['a', 'b'], ['a', 'b'], []], expected: true },
    // Transitivity: a~b, b~c → a~c
    {
      args: [['a'], ['c'], [['a', 'b'], ['b', 'c']]],
      expected: true,
    },
    // Not similar: missing pair
    {
      args: [['a'], ['d'], [['a', 'b'], ['b', 'c']]],
      expected: false,
    },
    // Two-word sentence with transitive similarity
    {
      args: [
        ['a', 'b'],
        ['c', 'd'],
        [['a', 'b'], ['b', 'c'], ['d', 'b']],
      ],
      // sentence1[0]='a', sentence2[0]='c': a~b~c ✓
      // sentence1[1]='b', sentence2[1]='d': b~d (since d~b is given) ✓
      expected: true,
    },
    // Sentence similarity fails at one word
    {
      args: [
        ['great', 'skills'],
        ['fine', 'unknown'],
        [['great', 'fine']],
      ],
      // 'skills' and 'unknown' are not paired → not similar
      expected: false,
    },
  ],
};
