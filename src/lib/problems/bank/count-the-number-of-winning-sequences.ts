import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-winning-sequences',
  title: 'Count the Number of Winning Sequences',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice and Bob are playing a fantasy battle game. In each round, Alice casts one of three spells: **Fire** (\`'F'\`), **Water** (\`'W'\`), or **Earth** (\`'E'\`). The spell outcomes are:

- Fire beats Earth
- Earth beats Water
- Water beats Fire

If Bob's spell beats Alice's, Bob gains +1 point. If Alice's spell beats Bob's, Bob loses 1 point. A tie scores 0.

Bob wins the game if his **total score** is strictly positive. You are given a string \`s\` representing Alice's spell sequence. Bob must also play a sequence of the **same length**, but **he cannot use the same spell in two consecutive rounds**.

Return the number of **distinct** sequences Bob can play that guarantee him a win, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is either \'F\', \'W\', or \'E\'',
  ],
  examples: [
    {
      input: 's = "WFF"',
      output: '4',
      explanation: 'Winning sequences: "WFW" (score 1), "EFW" (score 2), "EWE" (score 1), "EWF" (score 2). All others score ≤ 0.',
    },
    {
      input: 's = "F"',
      output: '1',
      explanation: 'Only "W" beats Alice\'s "F" with score +1. "E" loses (-1), "F" ties (0). Answer = 1.',
    },
  ],
  hints: [
    'Use DP: dp[last_spell][score] = number of ways to play the first i rounds ending with last_spell and total score.',
    'Score ranges from -n to n; offset by n so it fits in a 0..2n array.',
    'For each new round, iterate over all 3 possible spells (excluding the last one), compute the score delta, and accumulate.',
    'The answer is the sum of dp[*][offset > n] after all n rounds.',
  ],
  functionName: 'countWinningSequences',
  params: ['s'],
  starterCode: {
    javascript: `function countWinningSequences(s) {

}`,
    typescript: `function countWinningSequences(s: string): number {

}`,
    python: `def countWinningSequences(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['WFF'], expected: 4 },
    { args: ['F'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['W'], expected: 1 },
    { args: ['E'], expected: 1 },
    { args: ['FF'], expected: 2 },
    { args: ['FW'], expected: 2 },
    { args: ['WE'], expected: 2 },
    { args: ['EE'], expected: 2 },
    { args: ['FFF'], expected: 3 },
    { args: ['EFF'], expected: 5 },
  ],
};
