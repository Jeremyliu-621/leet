import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-population-year',
  title: 'Maximum Population Year',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 2D integer array \`logs\` where each \`logs[i] = [birthi, deathi]\` indicates the birth and death years of the \`i\`th person.

The **population** of some year \`x\` is the number of people alive during year \`x\`. The \`i\`th person is alive during year \`x\` if \`birthi <= x < deathi\`.

Note that the birth year and the death year is **not** included in the definition of "alive."

Return the **earliest** year with the **maximum population**.`,
  constraints: [
    '1 <= logs.length <= 100',
    '1950 <= birthi < deathi <= 2050',
  ],
  examples: [
    {
      input: 'logs = [[1993,1999],[2000,2010]]',
      output: '1993',
      explanation: 'The maximum population is 1 (either 1993-1998 or 2000-2009). Earliest is 1993.',
    },
    {
      input: 'logs = [[1950,1961],[1960,1971],[1970,1981]]',
      output: '1960',
    },
  ],
  hints: [
    'Level 1: Use a difference array indexed by year - 1950.',
    'Level 2: For each person, diff[birth-1950]++, diff[death-1950]--. Take prefix sums to find population each year.',
    'Level 3: const d=new Array(101).fill(0);for(const[b,e]of logs){d[b-1950]++;d[e-1950]--;}let mx=0,yr=1950,cur=0;for(let i=0;i<101;i++){cur+=d[i];if(cur>mx){mx=cur;yr=i+1950;}}return yr;',
  ],
  functionName: 'maximumPopulation',
  params: ['logs'],
  starterCode: {
    javascript: 'function maximumPopulation(logs) {\n  // your code here\n}\n',
    typescript: "function maximumPopulation(logs: number[][]): number {\n  // your code here\n}",

    python: 'def maximumPopulation(logs):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1993, 1999], [2000, 2010]]], expected: 1993 },
    { args: [[[1950, 1961], [1960, 1971], [1970, 1981]]], expected: 1960 },
  ],
  hiddenTests: [
    { args: [[[1950, 2050]]], expected: 1950 },
    { args: [[[1960, 1970], [1965, 1975]]], expected: 1965 },
    { args: [[[1960, 1965], [1960, 1965], [1960, 1965]]], expected: 1960 },
    { args: [[[2000, 2010], [1990, 2000]]], expected: 1990 },
  ],
};
