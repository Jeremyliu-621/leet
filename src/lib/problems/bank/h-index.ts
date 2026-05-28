import type { Problem } from '../types';

export const problem: Problem = {
  id: 'h-index',
  title: 'H-Index',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of integers \`citations\` where \`citations[i]\` is the number of citations a researcher received for their \`ith\` paper, return the researcher's **h-index**.

The **h-index** is defined as the maximum value of \`h\` such that the given researcher has published at least \`h\` papers that have each been cited at least \`h\` times.`,
  constraints: [
    '`n == citations.length`',
    '`1 <= n <= 5000`',
    '`0 <= citations[i] <= 1000`',
  ],
  examples: [
    {
      input: 'citations = [3,0,6,1,5]',
      output: '3',
      explanation: 'The researcher has 5 papers. 3 of them have been cited at least 3 times (3, 6, 5).',
    },
    {
      input: 'citations = [1,3,1]',
      output: '1',
    },
  ],
  hints: [
    'Sort citations in descending order. The h-index is the largest `h` such that `citations[h-1] >= h`.',
    'Iterate with index `i` (0-based): if `citations[i] >= i+1`, h could be at least `i+1`. Return the largest such `i+1`.',
    `\`\`\`js
function hIndex(citations) {
  citations.sort((a,b)=>b-a);
  let h = 0;
  for (let i = 0; i < citations.length; i++)
    if (citations[i] >= i+1) h = i+1; else break;
  return h;
}\`\`\``,
  ],
  functionName: 'hIndex',
  params: ['citations'],
  starterCode: {
    javascript: `function hIndex(citations) {

}`,
    typescript: "function hIndex(citations: number[]): number {\n\n}",

    python: `def hIndex(citations):
    pass`,
  },
  visibleTests: [
    { args: [[3, 0, 6, 1, 5]], expected: 3 },
    { args: [[1, 3, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[100]], expected: 1 },
    { args: [[5, 5, 5, 5, 5]], expected: 5 },
    { args: [[0, 0, 4, 4]], expected: 2 },
  ],
};
