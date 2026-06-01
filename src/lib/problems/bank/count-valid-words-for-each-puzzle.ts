import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-valid-words-for-each-puzzle',
  title: 'Number of Valid Words for Each Puzzle',
  difficulty: 'hard',
  tags: ['strings', 'bit-manipulation', 'hash-map'],
  description: `With respect to a given \`puzzle\` string, a \`word\` is **valid** if both the following conditions are satisfied:

- \`word\` contains the **first** letter of \`puzzle\`.
- For each letter in \`word\`, that letter is in \`puzzle\`.

For example, if the puzzle is \`"abcdefg"\`, then valid words are \`"faced"\`, \`"cabbage"\`, and \`"baggage"\`, while invalid words are \`"beefed"\` (does not contain \`'a'\`) and \`"based"\` (contains \`'s'\` which is not in the puzzle).

Return an array \`answer\`, where \`answer[i]\` is the number of words in the given word list \`words\` that are valid with respect to the puzzle \`puzzles[i]\`.`,
  constraints: [
    '1 <= words.length <= 10^5',
    '4 <= words[i].length <= 50',
    '1 <= puzzles.length <= 10^4',
    'puzzles[i].length == 7',
    'words[i] and puzzles[i] consist of lowercase English letters.',
    'Each puzzles[i] does not contain repeated characters.',
  ],
  examples: [
    {
      input: 'words = ["apple","pleas","please"], puzzles = ["aelp","apple","please"]',
      output: '[1,1,3]',
      explanation: '"aelp": only "apple" valid (letters ⊆ {a,e,l,p}, contains \'a\'). "apple": only "apple". "please": all three valid (letters ⊆ {p,l,e,a,s}, contains \'p\').',
    },
    {
      input: 'words = ["a","b","ba","c","abc"], puzzles = ["a","bc","abc","bca"]',
      output: '[1,1,3,3]',
      explanation: '"a": only "a". "bc": only "b". "abc": "a","ba","abc". "bca": "b","ba","abc".',
    },
    {
      input: 'words = ["kite","maui"], puzzles = ["maui"]',
      output: '[1]',
      explanation: '"maui": "kite" has letters not in {m,a,u,i}; "maui" ⊆ {m,a,u,i} and contains \'m\'. Count=1.',
    },
  ],
  hints: [
    'Level 1: Represent each word as a 26-bit bitmask (one bit per distinct letter). Group words by their bitmask using a frequency map.',
    'Level 2: For each puzzle (max 7 distinct letters), enumerate all submasks of the puzzle\'s bitmask that also include the first letter\'s bit. Each such submask is a valid letter-set for a word.',
    'Level 3: A puzzle with 7 distinct letters has at most 2^7=128 submasks — enumerable in O(128) per puzzle. Total time: O(|words|*max_word_len + |puzzles|*128).',
  ],
  functionName: 'findNumOfValidWords',
  params: ['words', 'puzzles'],
  starterCode: {
    javascript: `function findNumOfValidWords(words, puzzles) {
  const wordCount = new Map();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    wordCount.set(mask, (wordCount.get(mask) ?? 0) + 1);
  }
  const result = [];
  for (const puzzle of puzzles) {
    const first = 1 << (puzzle.charCodeAt(0) - 97);
    let puzzleMask = 0;
    for (const c of puzzle) puzzleMask |= 1 << (c.charCodeAt(0) - 97);
    let count = 0, sub = puzzleMask;
    while (sub > 0) {
      if (sub & first) count += wordCount.get(sub) ?? 0;
      sub = (sub - 1) & puzzleMask;
    }
    result.push(count);
  }
  return result;
}`,
    typescript: `function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const wordCount = new Map<number, number>();
  for (const word of words) {
    let mask = 0;
    for (const c of word) mask |= 1 << (c.charCodeAt(0) - 97);
    wordCount.set(mask, (wordCount.get(mask) ?? 0) + 1);
  }
  const result: number[] = [];
  for (const puzzle of puzzles) {
    const first = 1 << (puzzle.charCodeAt(0) - 97);
    let puzzleMask = 0;
    for (const c of puzzle) puzzleMask |= 1 << (c.charCodeAt(0) - 97);
    let count = 0, sub = puzzleMask;
    while (sub > 0) {
      if (sub & first) count += wordCount.get(sub) ?? 0;
      sub = (sub - 1) & puzzleMask;
    }
    result.push(count);
  }
  return result;
}`,
    python: `def findNumOfValidWords(words, puzzles):
    from collections import defaultdict
    word_count = defaultdict(int)
    for word in words:
        mask = 0
        for c in word:
            mask |= 1 << (ord(c) - ord('a'))
        word_count[mask] += 1
    result = []
    for puzzle in puzzles:
        first = 1 << (ord(puzzle[0]) - ord('a'))
        puzzle_mask = 0
        for c in puzzle:
            puzzle_mask |= 1 << (ord(c) - ord('a'))
        count, sub = 0, puzzle_mask
        while sub:
            if sub & first:
                count += word_count[sub]
            sub = (sub - 1) & puzzle_mask
        result.append(count)
    return result`,
  },
  visibleTests: [
    { args: [['apple', 'pleas', 'please'], ['aelp', 'apple', 'please']], expected: [1, 1, 3] },
    { args: [['a', 'b', 'ba', 'c', 'abc'], ['a', 'bc', 'abc', 'bca']], expected: [1, 1, 3, 3] },
    { args: [['kite', 'maui'], ['maui']], expected: [1] },
  ],
  hiddenTests: [
    { args: [['z'], ['abcdefg']], expected: [0] },
    { args: [['abc', 'bcd'], ['bcde']], expected: [1] },
    { args: [['ab', 'bc', 'ca'], ['abc']], expected: [2] },
    { args: [['aaa', 'bbb', 'ccc'], ['abcdefg']], expected: [1] },
    { args: [['word', 'world'], ['world']], expected: [2] },
  ],
};
