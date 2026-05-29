import type { Problem } from '../types';

export const problem: Problem = {
  id: 'collect-garbage-by-collecting-trucks',
  title: 'Minimum Amount of Time to Collect Garbage',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a 0-indexed array of strings \`garbage\` where \`garbage[i]\` represents the assortment of garbage at house \`i\`. \`garbage[i]\` consists of characters \`'M'\`, \`'P'\`, and \`'G'\` representing metal, paper, and glass garbage respectively. Each truck picks up one type of garbage: a truck for \`'M'\`, one for \`'P'\`, and one for \`'G'\`.

The garbage trucks are released from house 0 and travel in order from house 0 to house \`n-1\`. Each truck always begins at house 0 and travels to each house it picks up garbage from. The time to pick up one piece of garbage is 1 minute; the time to travel between houses \`i\` and \`i+1\` is \`travel[i]\` minutes.

The trucks do not have to stop at every house; they only stop at houses where they have garbage to collect. Return the minimum number of minutes needed to pick up all the garbage.`,
  constraints: [
    '2 <= garbage.length <= 10^5',
    'garbage[i] consists of only the letters M, P, and G.',
    '1 <= garbage[i].length <= 10',
    'travel.length == garbage.length - 1',
    '1 <= travel[i] <= 100',
  ],
  examples: [
    {
      input: 'garbage = ["G","P","GP","GG"], travel = [2,4,3]',
      output: '21',
      explanation: 'The glass truck picks up 4 pieces and travels 2+4+3=9, total 13. The paper truck picks up 1 piece and travels 2+4=6, total 7. The metal truck picks up 0 pieces, total 0. 13+7+0=20... wait: G=4 pickups (positions 0,2,3 → travel 2+4+3=9, picks=4→13), P=1 pickup (position 1 → travel 2, picks=1→3), ... total=21.',
    },
    {
      input: 'garbage = ["MMM","PGM","GP"], travel = [3,10]',
      output: '37',
      explanation: 'Sum all pickup times plus travel costs for each truck type.',
    },
  ],
  hints: [
    'For each garbage type (G, M, P), find the last house where that type appears.',
    'The truck for that type picks up all pieces of that type (each counts 1 minute) and travels from house 0 to the last house where its type appears.',
    'Sum up all travel costs from house 0 to the last occurrence for each truck type.',
  ],
  functionName: 'garbageCollection',
  params: ['garbage', 'travel'],
  starterCode: {
    javascript: 'function garbageCollection(garbage, travel) {\n  // your code here\n}\n',
    typescript: 'function garbageCollection(garbage: string[], travel: number[]): number {\n  // your code here\n}',
    python: 'def garbageCollection(garbage, travel):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['G', 'P', 'GP', 'GG'], [2, 4, 3]], expected: 21 },
    { args: [['MMM', 'PGM', 'GP'], [3, 10]], expected: 37 },
  ],
  hiddenTests: [
    { args: [['G'], []], expected: 1 },
    { args: [['P', 'P'], [5]], expected: 7 },
    { args: [['G', 'G', 'G'], [1, 2]], expected: 6 },
    { args: [['M', 'P', 'G'], [2, 3]], expected: 10 },
    { args: [['MP', 'P'], [4]], expected: 7 },
  ],
};
