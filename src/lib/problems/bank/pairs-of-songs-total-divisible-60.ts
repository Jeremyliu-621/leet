import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pairs-of-songs-total-divisible-60',
  title: 'Pairs of Songs With Total Durations Divisible by 60',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a list of songs where the \`i\`th song has a duration of \`time[i]\` seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by \`60\`. Formally, we want the number of indices \`i\`, \`j\` such that \`i < j\` with \`(time[i] + time[j]) % 60 == 0\`.`,
  constraints: [
    '1 <= time.length <= 6 * 10^4',
    '1 <= time[i] <= 500',
  ],
  examples: [
    {
      input: 'time = [30,20,150,100,40]',
      output: '3',
      explanation: 'Pairs: (30,150), (20,100), (20,40). Each pair sums to a multiple of 60.',
    },
    {
      input: 'time = [60,60,60]',
      output: '3',
      explanation: 'All 3 pairs of the three songs have total duration 120.',
    },
  ],
  hints: [
    'Count the frequency of each remainder when divided by 60.',
    'For each song with remainder r, count how many previous songs have remainder (60 - r) % 60.',
    'Handle r == 0 specially (pairs with other remainder 0 songs).',
  ],
  functionName: 'numPairsDivisibleBy60',
  params: ['time'],
  starterCode: {
    javascript: `function numPairsDivisibleBy60(time) {

}`,
    typescript: "function numPairsDivisibleBy60(time: number[]): number {\n\n}",

    python: `def numPairsDivisibleBy60(time):
    pass`,
  },
  visibleTests: [
    { args: [[30, 20, 150, 100, 40]], expected: 3 },
    { args: [[60, 60, 60]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[60]], expected: 0 },
    { args: [[30, 30]], expected: 1 },
    { args: [[30, 30, 30]], expected: 3 },
    { args: [[20, 40, 60]], expected: 1 },
  ],
};
