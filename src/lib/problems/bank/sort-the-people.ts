import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-the-people',
  title: 'Sort the People',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array of strings \`names\` and an array of distinct positive integers \`heights\`. Both arrays are of length \`n\`.

For each index \`i\`, \`names[i]\` and \`heights[i]\` denote the name and height of the \`i\`th person.

Return \`names\` sorted in **descending** order by the people's heights.`,
  constraints: [
    'n == names.length == heights.length',
    '1 <= n <= 10^3',
    '1 <= names[i].length <= 20',
    'names[i] consists of lower and upper case English letters.',
    'All the values of heights are distinct.',
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
    },
  ],
  hints: [
    'Level 1: Pair each name with its height and sort the pairs by height in descending order.',
    'Level 2: Create an array of indices [0,1,...,n-1] and sort by heights[i] descending. Map to names.',
    'Level 3: return names.map((_,i)=>[names[i],heights[i]]).sort((a,b)=>b[1]-a[1]).map(p=>p[0]);',
  ],
  functionName: 'sortPeople',
  params: ['names', 'heights'],
  starterCode: {
    javascript: 'function sortPeople(names, heights) {\n  // your code here\n}\n',
    python: 'def sortPeople(names, heights):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['Mary', 'John', 'Emma'], [180, 165, 170]], expected: ['Mary', 'Emma', 'John'] },
    { args: [['Alice', 'Bob', 'Bob'], [155, 185, 150]], expected: ['Bob', 'Alice', 'Bob'] },
  ],
  hiddenTests: [
    { args: [['A'], [1]], expected: ['A'] },
    { args: [['Ana', 'Bob', 'Jon'], [10, 5, 7]], expected: ['Ana', 'Jon', 'Bob'] },
    { args: [['Z', 'Y', 'X'], [1, 2, 3]], expected: ['X', 'Y', 'Z'] },
    { args: [['Short', 'Tall'], [100, 200]], expected: ['Tall', 'Short'] },
  ],
};
