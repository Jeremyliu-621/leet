import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-lattice-points-circle',
  title: 'Count Lattice Points Inside a Circle',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer array \`circles\` where \`circles[i] = [xi, yi, ri]\` represents the center \`(xi, yi)\` and radius \`ri\` of the \`i\`th circle drawn on a grid, return the **number of lattice points** that are present inside **at least one** circle.

**Note:**
- A **lattice point** is a point with integer coordinates.
- Points that lie **on the circumference** of a circle are also considered to be inside it.`,
  constraints: [
    '1 <= circles.length <= 200',
    'circles[i].length == 3',
    '1 <= xi, yi <= 100',
    '1 <= ri <= 100',
  ],
  examples: [
    {
      input: 'circles = [[2,2,1]]',
      output: '5',
      explanation: 'Lattice points inside or on circle centered (2,2) r=1: (1,2),(2,1),(2,2),(2,3),(3,2). Count=5.',
    },
    {
      input: 'circles = [[2,2,2],[3,4,1]]',
      output: '16',
    },
  ],
  hints: [
    'Level 1: Enumerate all integer points in the bounding box. For each point, check if it lies in at least one circle.',
    'Level 2: A point (x,y) is in circle (cx,cy,r) if (x-cx)^2 + (y-cy)^2 <= r^2.',
    'Level 3: const s=new Set();for(const[cx,cy,r]of circles)for(let x=cx-r;x<=cx+r;x++)for(let y=cy-r;y<=cy+r;y++)if((x-cx)**2+(y-cy)**2<=r**2)s.add(x+","+y);return s.size;',
  ],
  functionName: 'countLatticePoints',
  params: ['circles'],
  starterCode: {
    javascript: 'function countLatticePoints(circles) {\n  // your code here\n}\n',
    python: 'def countLatticePoints(circles):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 2, 1]]], expected: 5 },
    { args: [[[2, 2, 2], [3, 4, 1]]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]]], expected: 5 },
    { args: [[[5, 5, 1]]], expected: 5 },
    { args: [[[2, 2, 1], [2, 2, 1]]], expected: 5 },
    { args: [[[1, 1, 2]]], expected: 13 },
    { args: [[[3, 3, 3]]], expected: 29 },
  ],
};
