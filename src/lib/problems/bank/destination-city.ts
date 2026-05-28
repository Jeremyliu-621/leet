import type { Problem } from '../types';

export const problem: Problem = {
  id: 'destination-city',
  title: 'Destination City',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `You are given the array \`paths\`, where \`paths[i] = [cityA_i, cityB_i]\` means there exists a direct path going from \`cityA_i\` to \`cityB_i\`. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.`,
  constraints: [
    '1 <= paths.length <= 100',
    'paths[i].length == 2',
    '1 <= cityA_i.length, cityB_i.length <= 10',
    'cityA_i != cityB_i',
    'All strings consist of lowercase and uppercase English letters and spaces.',
  ],
  examples: [
    { input: 'paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]', output: '"Sao Paulo"', explanation: 'Sao Paulo has no outgoing path.' },
    { input: 'paths = [["B","C"],["D","B"],["C","A"]]', output: '"A"' },
  ],
  hints: [
    'Collect all source cities in a set. The destination city is the city that appears as a destination but never as a source.',
    "Build a Set of all paths[i][0] (sources). Then find paths[i][1] (destination) that is not in the set.",
    "const src=new Set(paths.map(p=>p[0]));return paths.find(p=>!src.has(p[1]))[1];",
  ],
  functionName: 'destCity',
  params: ['paths'],
  starterCode: {
    javascript: 'function destCity(paths) {\n\n}\n',
    typescript: "function destCity(paths: string[][]): string {\n\n}",

    python: 'def destCity(paths):\n    pass\n',
  },
  visibleTests: [
    { args: [[['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]], expected: 'Sao Paulo' },
    { args: [[['B', 'C'], ['D', 'B'], ['C', 'A']]], expected: 'A' },
  ],
  hiddenTests: [
    { args: [[['A', 'Z']]], expected: 'Z' },
    { args: [[['A', 'B'], ['B', 'C'], ['C', 'D']]], expected: 'D' },
  ],
};
