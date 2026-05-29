import type { Problem } from '../types';

export const problem: Problem = {
  id: 'line-reflection',
  title: 'Line Reflection',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `Given \`n\` points on a 2D plane, find if there is such a vertical line \`x = k\` that reflects the given points symmetrically. In other words, answer whether or not if there exists a line that after reflecting all points over the given line the set of points does not change.

Notice that there can be repeated points.`,
  constraints: [
    'n == points.length',
    '1 <= n <= 10^4',
    '-10^8 <= points[i][0] <= 10^8',
    '-10^8 <= points[i][1] <= 10^8',
  ],
  examples: [
    {
      input: 'points = [[1,1],[-1,1]]',
      output: 'true',
      explanation: 'Reflect over x = 0.',
    },
    {
      input: 'points = [[1,1],[-1,-1]]',
      output: 'false',
      explanation: 'No vertical line of reflection exists.',
    },
  ],
  hints: [
    'The reflection line x = k must satisfy 2k = minX + maxX (the midpoint of the extreme x-values).',
    'Build a Set of all points as "x,y" strings. For each point (x,y), check if (minX + maxX - x, y) is in the set.',
    'Use 2*(minX+maxX) to avoid floating-point: for each point (x,y) check if (sum-x, y) exists, where sum = minX+maxX.',
  ],
  functionName: 'isReflected',
  params: ['points'],
  starterCode: {
    javascript: `function isReflected(points) {
  const set = new Set(points.map(([x, y]) => \`\${x},\${y}\`));
  const xs = points.map(([x]) => x);
  const sum = Math.min(...xs) + Math.max(...xs);
  return points.every(([x, y]) => set.has(\`\${sum - x},\${y}\`));
}`,
    typescript: `function isReflected(points: number[][]): boolean {
  const set = new Set(points.map(([x, y]) => \`\${x},\${y}\`));
  const xs = points.map(([x]) => x!);
  const sum = Math.min(...xs) + Math.max(...xs);
  return points.every(([x, y]) => set.has(\`\${sum - x!},\${y}\`));
}`,
    python: `def isReflected(points):
    if hasattr(points, 'to_py'): points = [list(p.to_py()) if hasattr(p, 'to_py') else list(p) for p in points.to_py()]
    point_set = set()
    for p in points:
        point_set.add((int(p[0]), int(p[1])))
    xs = [int(p[0]) for p in points]
    total = min(xs) + max(xs)
    return all((total - x, y) in point_set for x, y in point_set)`,
  },
  visibleTests: [
    { args: [[[1, 1], [-1, 1]]], expected: true },
    { args: [[[1, 1], [-1, -1]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: true },
    { args: [[[0, 0], [1, 0], [3, 0]]], expected: false },
    { args: [[[-16, 1], [16, 1]]], expected: true },
    { args: [[[1, 1], [1, 1], [-1, 1]]], expected: true },
    { args: [[[0, 0], [2, 0], [1, 0]]], expected: true },
    { args: [[[1, 0], [1, 0]]], expected: true },
    { args: [[[-1, 0], [0, 0], [1, 0]]], expected: true },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: false },
  ],
};
