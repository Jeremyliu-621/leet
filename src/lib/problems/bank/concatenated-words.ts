import type { Problem } from '../types';

export const problem: Problem = {
  id: 'concatenated-words',
  title: 'Concatenated Words',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given an array of strings \`words\` (**unique**), return all the **concatenated words** in the given list of \`words\`.

A **concatenated word** is a string that is entirely composed of at least two shorter words in the given list.

Return the result in **sorted order**.

**DP approach:** For each word, use word-break DP to check if it can be formed by concatenating at least two other words from the set. Build a hash set for O(1) lookup.`,
  constraints: [
    '1 <= words.length <= 10000',
    '1 <= words[i].length <= 30',
    'words[i] consists of only lowercase English letters',
    'All strings in words are unique',
  ],
  examples: [
    {
      input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
      output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
      explanation: '"catsdogcats" = "cats" + "dog" + "cats". "dogcatsdog" = "dog" + "cats" + "dog". "ratcatdogcat" = "rat" + "cat" + "dog" + "cat".',
    },
    {
      input: 'words = ["cat","dog","catdog"]',
      output: '["catdog"]',
    },
  ],
  hints: [
    'Put all words in a hash set for O(1) lookup.',
    'For each word, run word-break DP: dp[i] = true if word[0..i-1] can be formed from shorter words in the set.',
    'The word must use at least 2 components — track whether at least one split has been made. A word cannot be its own component.',
  ],
  functionName: 'findAllConcatenatedWordsInADict',
  params: ['words'],
  starterCode: {
    javascript: 'function findAllConcatenatedWordsInADict(words) {\n\n}\n',
    python: 'def findAllConcatenatedWordsInADict(words: list) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [['cat','cats','catsdogcats','dog','dogcatsdog','hippopotamuses','rat','ratcatdogcat']], expected: ['catsdogcats','dogcatsdog','ratcatdogcat'] },
    { args: [['cat','dog','catdog']], expected: ['catdog'] },
  ],
  hiddenTests: [
    { args: [['a','b','ab','abc']], expected: ['ab'] },
    { args: [['hello','world']], expected: [] },
    { args: [['a','aa','aaa','aaaa']], expected: ['aa','aaa','aaaa'] },
    { args: [['cat','cats','dog','catdog','catsdog']], expected: ['catdog','catsdog'] },
  ],
};
