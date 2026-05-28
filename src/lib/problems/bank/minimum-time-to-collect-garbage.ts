import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-collect-garbage',
  title: 'Minimum Amount of Time to Collect Garbage',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `You are given a **0-indexed** array of strings \`garbage\` where \`garbage[i]\` represents the assortment of garbage at house \`i\`. Garbage can only be one of three types: \`'M'\` (metal), \`'P'\` (paper), and \`'G'\` (glass). There is one garbage truck for each type of garbage and it must visit **each** house \`i\` in order from house \`0\` to house \`n-1\`.

Only one unit of garbage can be picked up each minute, and a truck must also travel between houses. Each index in the array \`travel\` represents the number of minutes the truck needs to travel to reach the next house.

Return the **minimum** number of minutes needed to pick up all the garbage.`,
  constraints: [
    '2 <= garbage.length <= 10^5',
    'garbage[i] consists only of the characters \'M\', \'P\', and \'G\'',
    '1 <= garbage[i].length <= 10',
    'travel.length == garbage.length - 1',
    '1 <= travel[i] <= 100',
  ],
  examples: [
    {
      input: 'garbage = ["G","P","GP","GG"], travel = [2,4,3]',
      output: '21',
      explanation: 'M truck: no M, 0 min. P truck: last P at index 2, travel 2+4=6, collect 2P, total=8. G truck: last G at index 3, travel 2+4+3=9, collect 4G, total=13. Sum=0+8+13=21.',
    },
    {
      input: 'garbage = ["MMM","PGM","GP"], travel = [3,10]',
      output: '37',
      explanation: 'M truck: last M at index 1, travel=3, collect 4M, total=7. P truck: last P at index 2, travel=13, collect 2P, total=15. G truck: last G at index 2, travel=13, collect 2G, total=15. Sum=7+15+15=37.',
    },
  ],
  hints: [
    'Each truck independently travels from house 0 to the last house with its garbage type.',
    'Count all garbage characters (each takes 1 minute to pick up).',
    'For each truck type, find the last index with that type, and add the travel time from 0 to that index.',
  ],
  functionName: 'garbageCollection',
  params: ['garbage', 'travel'],
  starterCode: {
    javascript: `function garbageCollection(garbage, travel) {

}`,
    typescript: "function garbageCollection(garbage: string[], travel: number[]): number {\n\n}",

    python: `def garbageCollection(garbage, travel):
    pass`,
  },
  visibleTests: [
    { args: [['G', 'P', 'GP', 'GG'], [2, 4, 3]], expected: 21 },
    { args: [['MMM', 'PGM', 'GP'], [3, 10]], expected: 37 },
  ],
  hiddenTests: [
    { args: [['M', 'P', 'G'], [1, 1]], expected: 6 },
    { args: [['G', 'G'], [3]], expected: 5 },
    { args: [['MM', 'MM'], [5]], expected: 9 },
  ],
};
