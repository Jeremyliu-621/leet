import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-people',
  title: 'Sort People',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `You are given an array of strings \`names\` and an array of positive integers \`heights\`, both of length \`n\`. For each index \`i\`, \`names[i]\` and \`heights[i]\` denote the name and height of the \`i\`th person.

Return \`names\` sorted in **descending** order by the people's heights.`,
  constraints: [
    'n == names.length == heights.length',
    '1 ≤ n ≤ 10^3',
    '1 ≤ heights[i] ≤ 10^5',
    'heights contains distinct integers.',
    'names[i] consists of lower and upper case English letters.',
  ],
  examples: [
    {
      input: 'names = ["Mary","John","Emma"], heights = [180,165,170]',
      output: '["Mary","Emma","John"]',
      explanation: 'Mary is tallest (180), then Emma (170), then John (165).',
    },
    {
      input: 'names = ["Alice","Bob","Bob"], heights = [155,185,150]',
      output: '["Bob","Alice","Bob"]',
      explanation: 'Bob at index 1 is tallest (185), Alice (155), Bob at index 2 (150).',
    },
    {
      input: 'names = ["IEO","Sgizfdfrims","EWESDS"], heights = [17834,16820,17271]',
      output: '["IEO","EWESDS","Sgizfdfrims"]',
      explanation: 'Heights sorted descending: 17834, 17271, 16820.',
    },
  ],
  hints: [
    'Create pairs of (height, name) for each person, then sort by height in descending order.',
    'After sorting, extract just the names from the sorted pairs.',
    'In JavaScript: zip names and heights into objects, sort by height descending, then map to names. Time complexity: O(n log n).',
  ],
  functionName: 'sortPeople',
  params: ['names', 'heights'],
  starterCode: {
    javascript: `function sortPeople(names, heights) {

}`,
    typescript: `function sortPeople(names: string[], heights: number[]): string[] {

}`,
    python: `def sortPeople(names, heights):
    pass`,
  },
  visibleTests: [
    { args: [['Mary', 'John', 'Emma'], [180, 165, 170]], expected: ['Mary', 'Emma', 'John'] },
    { args: [['Alice', 'Bob', 'Bob'], [155, 185, 150]], expected: ['Bob', 'Alice', 'Bob'] },
    { args: [['IEO', 'Sgizfdfrims', 'EWESDS'], [17834, 16820, 17271]], expected: ['IEO', 'EWESDS', 'Sgizfdfrims'] },
  ],
  hiddenTests: [
    { args: [['A'], [1]], expected: ['A'] },
    { args: [['Z', 'Y', 'X'], [1, 2, 3]], expected: ['X', 'Y', 'Z'] },
    { args: [['a', 'b', 'c', 'd'], [100, 50, 75, 25]], expected: ['a', 'c', 'b', 'd'] },
    { args: [['Tom', 'Jerry'], [60, 90]], expected: ['Jerry', 'Tom'] },
    { args: [['Sam', 'Alex', 'Jordan', 'Taylor'], [170, 160, 175, 165]], expected: ['Jordan', 'Sam', 'Taylor', 'Alex'] },
    { args: [['P', 'Q', 'R', 'S', 'T'], [5, 4, 3, 2, 1]], expected: ['P', 'Q', 'R', 'S', 'T'] },
    { args: [['One', 'Two', 'Three'], [99999, 100000, 99998]], expected: ['Two', 'One', 'Three'] },
  ],
};
