import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-points-on-line',
  title: 'Max Points on a Line',
  difficulty: 'hard',
  tags: ['hash-map', 'math'],
  description: `Given an array of \`points\` where \`points[i] = [x, y]\`, return the **maximum number of points** that lie on the same straight line.

**Key insight:** For a fixed anchor point \`p\`, two other points \`q\` and \`r\` are collinear with \`p\` if they share the same slope from \`p\`. Represent the slope as a reduced fraction \`dy/dx\` using GCD to avoid floating-point errors. Use a hash map to count how many points share each slope from the current anchor.

Iterate over every anchor in O(n); for each anchor, build the slope map in O(n). Overall O(n²).`,
  constraints: [
    '1 <= points.length <= 300',
    '-10^4 <= x[i], y[i] <= 10^4',
    'All points are unique',
  ],
  examples: [
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '3',
      explanation: 'All three points lie on the line y = x.',
    },
    {
      input: 'points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]',
      output: '4',
      explanation:
        'The points [1,4],[2,3],[3,2],[4,1] all lie on the same line with slope -1.',
    },
  ],
  hints: [
    'For each anchor point, count how many other points share the same slope from that anchor. Two points share a slope if `(y2-y1)/(x2-x1)` is the same. Represent slopes as reduced fractions `(dy/gcd, dx/gcd)` to avoid floating-point issues.',
    'Handle special cases: vertical lines (`dx=0`) get a unique slope key by normalizing so `dy=1`; normalize the fraction so the denominator is always non-negative to avoid treating the same slope as two distinct keys.',
    '`function gcd(a,b){return b===0?a:gcd(b,a%b);} for each anchor i: build a Map of slope→count; for each j>i, compute (dy=y[j]-y[i], dx=x[j]-x[i]); let g=gcd(|dy|,|dx|); normalize so dx>=0 (flip both if dx<0, or ensure dy>0 when dx=0); key=dy/g+","+dx/g; track localMax; result=max(result, localMax+1).`',
  ],
  functionName: 'maxPoints',
  params: ['points'],
  starterCode: {
    javascript: 'function maxPoints(points) {\n  // your code here\n}\n',
    python:
      'def maxPoints(points: list[list[int]]) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 3 },
    { args: [[[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]], expected: 4 },
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 1], [1, 2], [2, 1]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 1], [1, -1]]], expected: 2 },
    { args: [[[1, 1], [2, 2], [3, 3], [0, 0]]], expected: 4 },
    { args: [[[0, 0], [0, 1], [0, 2], [1, 0], [2, 0]]], expected: 3 },
  ],
};
