import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-boomerangs',
  title: 'Number of Boomerangs',
  difficulty: 'medium',
  tags: ['hash-map', 'math'],
  description: `You are given \`n\` \`points\` in the plane that are all **distinct**, where \`points[i] = [xi, yi]\`. A **boomerang** is a tuple of points \`(i, j, k)\` such that the distance between \`i\` and \`j\` equals the distance between \`i\` and \`k\` (**the order of the tuple matters**).

Return *the number of boomerangs*.

**Example 1:**
\`\`\`
Input: points = [[0,0],[1,0],[2,0]]
Output: 2
Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
\`\`\`

**Example 2:**
\`\`\`
Input: points = [[1,1],[2,2],[3,3]]
Output: 2
\`\`\``,
  examples: [
    { input: '[[0,0],[1,0],[2,0]]', output: '2' },
    { input: '[[1,1],[2,2],[3,3]]', output: '2' },
    { input: '[[0,0]]', output: '0' },
  ],
  constraints: [
    'n == points.length',
    '1 <= n <= 500',
    'points[i].length == 2',
    '-10000 <= xi, yi <= 10000',
    'All points are unique.',
  ],
  hints: [
    'For each point i, compute squared distances to all other points and group them in a hash map.',
    'For each distance group of size k, the number of ordered pairs (j, k) is k × (k − 1).',
    'Using squared distances avoids floating-point issues.',
  ],
  functionName: 'numberOfBoomerangs',
  params: ['points'],
  starterCode: {
    javascript: `function numberOfBoomerangs(points) {

}`,
    python: `def numberOfBoomerangs(points):
    `,
  },
  visibleTests: [
    { args: [[[0,0],[1,0],[2,0]]], expected: 2 },
    { args: [[[1,1],[2,2],[3,3]]], expected: 2 },
    { args: [[[0,0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0,0],[1,0],[2,0],[1,1]]], expected: 8 },
    { args: [[[0,0],[1,0],[0,1]]], expected: 2 },
  ],
};
