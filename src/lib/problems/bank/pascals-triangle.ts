import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pascals-triangle',
  title: "Pascal's Triangle",
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer \`numRows\`, return the first \`numRows\` rows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.`,
  constraints: [
    '`1 <= numRows <= 30`',
  ],
  examples: [
    {
      input: 'numRows = 5',
      output: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]',
    },
    {
      input: 'numRows = 1',
      output: '[[1]]',
    },
  ],
  hints: [
    'Build each row using the previous row: `row[j] = prev[j-1] + prev[j]`. The first and last elements of each row are always 1.',
    'Build each row from the previous row. Start and end with 1; middle elements are the sum of the two elements above them.',
    `\`\`\`js
const res = [[1]];
for (let i = 1; i < numRows; i++) {
  const prev = res[i-1];
  res.push([1, ...Array.from({length: i-1}, (_,j) => prev[j]+prev[j+1]), 1]);
}
return res;\`\`\``
  ],
  functionName: 'generate',
  params: ['numRows'],
  starterCode: {
    javascript: `function generate(numRows) {

}`,
    typescript: "function generate(numRows: number): number[][] {\n\n}",

    python: `def generate(numRows):
    pass`,
  },
  visibleTests: [
    { args: [5], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
    { args: [1], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [2], expected: [[1], [1, 1]] },
    { args: [3], expected: [[1], [1, 1], [1, 2, 1]] },
    { args: [6], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]] },
    { args: [4], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
  ],
};
