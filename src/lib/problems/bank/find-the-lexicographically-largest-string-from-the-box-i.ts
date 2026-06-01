import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-lexicographically-largest-string-from-the-box-i',
  title: 'Find the Lexicographically Largest String From the Box I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`word\` and an integer \`numFriends\`.

Alice is organizing a game for her \`numFriends\` friends. There are multiple rounds in the game, where in each round:
- \`word\` is split into \`numFriends\` **non-empty** strings, such that their concatenation equals \`word\`.
- One string is picked and put into a **box**. If the box already contains a string, the **lexicographically larger** of the two is kept.

Return the lexicographically largest string that could be in the box after all rounds are over.

**Note:** A string \`a\` is lexicographically larger than string \`b\` if at the first position where they differ, \`a\` has a letter that comes later in the alphabet, or if \`b\` is a prefix of \`a\`.`,
  constraints: [
    '1 <= numFriends <= word.length <= 5000',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "dbca", numFriends = 2',
      output: '"dbc"',
      explanation: 'All possible splits: ["d","bca"], ["db","ca"], ["dbc","a"]. The largest strings in each split: "bca", "db", "dbc". Over all rounds, the box keeps the lexicographically largest: "dbc".',
    },
    {
      input: 'word = "gggg", numFriends = 4',
      output: '"g"',
      explanation: 'The only valid split is ["g","g","g","g"]. The box will contain "g".',
    },
    {
      input: 'word = "gh", numFriends = 1',
      output: '"gh"',
      explanation: 'With numFriends=1, the whole string is one segment, so "gh" is always in the box.',
    },
  ],
  hints: [
    'Any segment of length at most `word.length - numFriends + 1` can appear in the box: use the segment itself as one part, and distribute the remaining characters as single characters to the other numFriends-1 parts.',
    'The maximum segment length is `maxLen = word.length - numFriends + 1`. The answer is the lexicographically largest substring of length exactly `maxLen`.',
    'Iterate all starting positions `i` and compare `word.slice(i, i + maxLen)` to find the maximum. If `maxLen == word.length`, the answer is `word` itself.',
  ],
  functionName: 'answerString',
  params: ['word', 'numFriends'],
  starterCode: {
    javascript: 'function answerString(word, numFriends) {\n  // your code here\n}\n',
    typescript: `function answerString(word: string, numFriends: number): string {

}`,
    python: 'def answerString(word, numFriends):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['dbca', 2], expected: 'dbc' },
    { args: ['gggg', 4], expected: 'g' },
    { args: ['gh', 1], expected: 'gh' },
  ],
  hiddenTests: [
    { args: ['aaa', 3], expected: 'a' },
    { args: ['abcde', 2], expected: 'bcde' },
    { args: ['abcde', 1], expected: 'abcde' },
    { args: ['zyxwv', 3], expected: 'zyx' },
    { args: ['a', 1], expected: 'a' },
    { args: ['ba', 2], expected: 'b' },
    { args: ['ba', 1], expected: 'ba' },
    { args: ['abba', 2], expected: 'bba' },
    { args: ['zaza', 3], expected: 'za' },
  ],
};
