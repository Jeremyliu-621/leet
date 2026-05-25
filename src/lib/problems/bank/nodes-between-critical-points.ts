import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nodes-between-critical-points',
  title: 'Find the Minimum and Maximum Number of Nodes Between Critical Points',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `A **critical point** in a linked list is defined as either a **local maxima** or a **local minima**.

A node is a local maxima if the current node has a value **strictly greater** than the previous node and the next node.

A node is a local minima if the current node has a value **strictly smaller** than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous and a next node.

Given a linked list represented as an array, return an array of length two where the first element is the **minimum distance** between any two critical points and the second element is the **maximum distance** between any two critical points. If there are **fewer than two** critical points, return \`[-1, -1]\`.

**Approach:** Scan for critical points, recording their indices. Min = smallest adjacent difference; max = last − first.`,
  constraints: [
    'The number of nodes in the list is in the range [2, 10^5].',
    '1 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'head = [3,1]',
      output: '[-1,-1]',
      explanation: 'No critical points exist.',
    },
    {
      input: 'head = [5,3,1,2,5,1,2]',
      output: '[1,3]',
      explanation: 'Critical points at indices 1 (local min), 3 (local max), 4 (local min). Min gap=1, Max gap=4-1=3.',
    },
  ],
  hints: [
    'Iterate through nodes (skipping first/last), recording indices of critical points.',
    'Min distance = min adjacent diff in the list of critical indices; max = last - first.',
    '```js\nfunction nodesBetweenCriticalPoints(head) {\n  const arr = [];\n  let cur = head;\n  while (cur) { arr.push(cur.val); cur = cur.next; }\n  const crit = [];\n  for (let i = 1; i < arr.length - 1; i++)\n    if ((arr[i] > arr[i-1] && arr[i] > arr[i+1]) ||\n        (arr[i] < arr[i-1] && arr[i] < arr[i+1]))\n      crit.push(i);\n  if (crit.length < 2) return [-1, -1];\n  let minD = Infinity;\n  for (let i = 1; i < crit.length; i++) minD = Math.min(minD, crit[i] - crit[i-1]);\n  return [minD, crit[crit.length-1] - crit[0]];\n}\n```',
  ],
  functionName: 'nodesBetweenCriticalPoints',
  params: ['head'],
  starterCode: {
    javascript: `function nodesBetweenCriticalPoints(head) {
  // return [minDistance, maxDistance] or [-1,-1]

}`,
    python: `def nodesBetweenCriticalPoints(head) -> list:
    # return [minDistance, maxDistance] or [-1,-1]
    pass
`,
  },
  visibleTests: [
    { args: [[3, 1]], expected: [-1, -1] },
    { args: [[5, 3, 1, 2, 5, 1, 2]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[1, 3, 2, 2, 3, 2, 2, 2, 7]], expected: [3, 3] },
    { args: [[1, 2, 3, 4]], expected: [-1, -1] },
    { args: [[2, 4, 2, 4]], expected: [1, 1] },
    { args: [[1, 3, 1, 3, 1]], expected: [1, 2] },
    { args: [[3, 1, 2, 3, 1]], expected: [2, 2] },
    { args: [[1]], expected: [-1, -1] },
  ],
};
