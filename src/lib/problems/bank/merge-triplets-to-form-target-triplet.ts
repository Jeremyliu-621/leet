import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-triplets-to-form-target-triplet',
  title: 'Merge Triplets to Form Target Triplet',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `A **triplet** is an array of three integers. You are given a 2D integer array \`triplets\`, where \`triplets[i] = [a_i, b_i, c_i]\` describes the \`i\`th triplet. You are also given an integer array \`target = [x, y, z]\`.

To obtain \`target\`, you apply the following operation any number of times:
- Choose two triplets from \`triplets\` and update one to be \`[max(a_i,a_j), max(b_i,b_j), max(c_i,c_j)]\`.

Return \`true\` if it is possible to obtain \`target\` as an element of \`triplets\`, \`false\` otherwise.`,
  constraints: [
    '1 <= triplets.length <= 10^5',
    'triplets[i].length == target.length == 3',
    '1 <= a_i, b_i, c_i, x, y, z <= 1000',
  ],
  examples: [
    {
      input: 'triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]',
      output: 'true',
      explanation: 'Filter out [1,8,4] (8>7). Merge [2,5,3] and [1,7,5] → [2,7,5] = target.',
    },
    {
      input: 'triplets = [[3,4,5],[4,5,6]], target = [3,2,5]',
      output: 'false',
      explanation: 'Both triplets exceed target in some component, so neither is usable.',
    },
    {
      input: 'triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]',
      output: 'true',
      explanation: 'All four triplets are ≤ target. Their union is [5,5,5].',
    },
  ],
  hints: [
    'Discard any triplet that exceeds target in any component — it can only hurt.',
    'Take the element-wise max of remaining triplets. If equal to target, return true.',
    `\`\`\`js
function mergeTriplets(triplets, target) {
  const [a,b,c] = target;
  const valid = triplets.filter(([x,y,z])=>x<=a&&y<=b&&z<=c);
  const merged = valid.reduce(([mx,my,mz],[x,y,z])=>[Math.max(mx,x),Math.max(my,y),Math.max(mz,z)],[0,0,0]);
  return merged[0]===a&&merged[1]===b&&merged[2]===c;
}\`\`\``,
  ],
  functionName: 'mergeTriplets',
  params: ['triplets', 'target'],
  starterCode: {
    javascript: `function mergeTriplets(triplets, target) {

}`,
    typescript: "function mergeTriplets(triplets: number[][], target: number[]): boolean {\n\n}",

    python: `def mergeTriplets(triplets, target):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]], expected: true },
    { args: [[[3, 4, 5], [4, 5, 6]], [3, 2, 5]], expected: false },
    { args: [[[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]], [1, 1, 1]], expected: true },
    { args: [[[1, 1, 1]], [2, 2, 2]], expected: false },
    { args: [[[2, 2, 1], [1, 2, 2]], [2, 2, 2]], expected: true },
    { args: [[[3, 3, 3], [1, 2, 3]], [2, 2, 3]], expected: false },
  ],
};
