import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-valid-words-for-each-puzzle',
  title: 'Number of Valid Words for Each Puzzle',
  difficulty: 'hard',
  tags: ['bit-manipulation', 'hash-map'],
  description: `With respect to a given \`puzzle\` string, a \`word\` is **valid** if:

- Every letter in the \`word\` is in the \`puzzle\`.
- The **first** letter of the \`puzzle\` is in the \`word\`.

Return an array \`answer\`, where \`answer[i]\` is the number of words in the given word list \`words\` that is valid with respect to \`puzzles[i]\`.

**Note:** Each puzzle has exactly 7 unique letters. A single word can have repeated letters.`,
  constraints: [
    '1 <= words.length <= 10^5',
    '4 <= words[i].length <= 50',
    '1 <= puzzles.length <= 10^4',
    'puzzles[i].length == 7',
    'words[i] and puzzles[i] consist of lowercase English letters',
    'Each puzzles[i] does not contain repeated characters',
  ],
  examples: [
    {
      input:
        'words = ["aaaa","asas","able","ability","actt","actor","access"], puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]',
      output: '[1,1,3,2,4,0]',
      explanation:
        '"aboveyz": only "aaaa" is valid (all letters in puzzle, contains first letter a). "actresz": "aaaa","asas","actt","access" are valid — 4.',
    },
  ],
  hints: [
    'Level 1: Represent each word as a bitmask over 26 letters. For each puzzle, count words whose bitmask is a subset of the puzzle bitmask AND whose bitmask has the first letter of the puzzle set.',
    'Level 2: Precompute a frequency map: wordCount[mask] = number of words with that bitmask. For each puzzle (at most 7 letters → at most 2^7=128 submasks), iterate over all submasks of the puzzle bitmask that include the first letter; sum wordCount values.',
    'Level 3: freq = Map<number,number> of word bitmasks. For each puzzle: firstBit = 1<<(puzzle[0]-"a"); puzzleMask = bitmask of puzzle. Enumerate all submasks sub of puzzleMask: for sub=puzzleMask; sub>0; sub=(sub-1)&puzzleMask. If sub&firstBit: ans += freq.get(sub)??0. Result per puzzle is this sum.',
  ],
  functionName: 'findNumOfValidWords',
  params: ['words', 'puzzles'],
  starterCode: {
    javascript: `function findNumOfValidWords(words, puzzles) {

}`,
    typescript: `function findNumOfValidWords(words: string[], puzzles: string[]): number[] {

}`,
    python: `def findNumOfValidWords(words, puzzles):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access'],
        ['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz'],
      ],
      expected: [1, 1, 3, 2, 4, 0],
    },
  ],
  hiddenTests: [
    { args: [['aaaa'], ['abcdefg']], expected: [1] },
    { args: [['abc'], ['abcdefg']], expected: [1] },
    { args: [['xyz'], ['abcdefg']], expected: [0] },
    { args: [['bc'], ['abcdefg']], expected: [0] },
    { args: [['a', 'b', 'ab'], ['abcde']], expected: [2] },
    { args: [['a', 'abc', 'xyz', 'ax'], ['abcdefg', 'xyzabcd']], expected: [2, 2] },
  ],
};
