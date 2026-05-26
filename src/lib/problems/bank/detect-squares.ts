import type { Problem } from '../types';

const JS_PREAMBLE = `
class DetectSquares {
  constructor() {
    this.pointCount = new Map();
    this.xToYs = new Map();
  }
  add(point) {
    const key = point[0] + ',' + point[1];
    this.pointCount.set(key, (this.pointCount.get(key) ?? 0) + 1);
    if (!this.xToYs.has(point[0])) this.xToYs.set(point[0], new Set());
    this.xToYs.get(point[0]).add(point[1]);
  }
  count(point) {
    const [px, py] = point;
    let res = 0;
    const ys = this.xToYs.get(px);
    if (!ys) return 0;
    for (const y2 of ys) {
      if (y2 === py) continue;
      const side = y2 - py;
      for (const x2 of [px + side, px - side]) {
        const c1 = this.pointCount.get(x2 + ',' + py) ?? 0;
        const c2 = this.pointCount.get(x2 + ',' + y2) ?? 0;
        const c3 = this.pointCount.get(px + ',' + y2) ?? 0;
        res += c1 * c2 * c3;
      }
    }
    return res;
  }
}
function detectSquaresRunner(ops, args) {
  const ds = new DetectSquares();
  const results = [null];
  for (let i = 1; i < ops.length; i++) {
    if (ops[i] === 'add') { ds.add(args[i]); results.push(null); }
    else results.push(ds.count(args[i]));
  }
  return results;
}
`;

const PY_PREAMBLE = `
class DetectSquares:
    def __init__(self):
        self.point_count = {}
        self.x_to_ys = {}
    def add(self, point):
        key = (point[0], point[1])
        self.point_count[key] = self.point_count.get(key, 0) + 1
        if point[0] not in self.x_to_ys:
            self.x_to_ys[point[0]] = set()
        self.x_to_ys[point[0]].add(point[1])
    def count(self, point):
        px, py = point[0], point[1]
        res = 0
        for y2 in self.x_to_ys.get(px, set()):
            if y2 == py:
                continue
            side = y2 - py
            for x2 in [px + side, px - side]:
                c1 = self.point_count.get((x2, py), 0)
                c2 = self.point_count.get((x2, y2), 0)
                c3 = self.point_count.get((px, y2), 0)
                res += c1 * c2 * c3
        return res

def detectSquaresRunner(ops, args_list):
    ops = list(ops)
    args_list = [list(a) for a in args_list]
    ds = DetectSquares()
    results = [None]
    for i in range(1, len(ops)):
        if ops[i] == 'add':
            ds.add(args_list[i])
            results.append(None)
        else:
            results.append(ds.count(args_list[i]))
    return results
`;

export const problem: Problem = {
  id: 'detect-squares',
  title: 'Detect Squares',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a stream of points on an XY-plane. Design an algorithm that:

- **Adds** new points from the stream into a data structure. Duplicate points are allowed.
- Given a query point, **counts** the number of ways to choose three points from the data structure such that the three points and the query point form an **axis-aligned square** with **positive area**.

Implement the \`DetectSquares\` class. For this problem, your function receives \`ops\` (operation names) and \`args\` (arguments), and returns results (null for add, integer for count).

**Example:**
\`\`\`
ops  = ["DetectSquares","add","add","add","count","count","add","count"]
args = [[],[3,10],[11,2],[3,2],[11,10],[14,8],[11,2],[11,10]]
Output: [null,null,null,null,1,0,null,2]
\`\`\`

**Constraints:**
- \`0 <= x, y <= 1000\`
- At most \`3000\` calls in total to \`add\` and \`count\`.`,
  constraints: ['0 <= x, y <= 1000', 'At most 3000 calls in total.'],
  examples: [
    {
      input:
        'ops = ["DetectSquares","add","add","add","count","count","add","count"], args = [[],[3,10],[11,2],[3,2],[11,10],[14,8],[11,2],[11,10]]',
      output: '[null,null,null,null,1,0,null,2]',
    },
  ],
  hints: [
    'For each query point (px, py), enumerate candidate diagonal corners (px, y2) by iterating over all y-values stored at column px.',
    'For each y2 ≠ py, the square side length is |y2 - py|. The other two corners are (px ± side, py) and (px ± side, y2).',
    'Multiply the occurrence counts of the three corners. Use a Map<string, number> for point counts and a Map<number, Set<number>> mapping x → set of y values.',
  ],
  functionName: 'detectSquaresRunner',
  params: ['ops', 'args'],
  preamble: {
    javascript: JS_PREAMBLE,
    python: PY_PREAMBLE,
  },
  starterCode: {
    javascript:
      'class DetectSquares {\n  constructor() {\n    \n  }\n  add(point) {\n    \n  }\n  count(point) {\n    \n  }\n}\n',
    python:
      'class DetectSquares:\n    def __init__(self):\n        pass\n    def add(self, point):\n        pass\n    def count(self, point):\n        pass\n',
  },
  visibleTests: [
    {
      args: [
        ['DetectSquares', 'add', 'add', 'add', 'count', 'count', 'add', 'count'],
        [[], [3, 10], [11, 2], [3, 2], [11, 10], [14, 8], [11, 2], [11, 10]],
      ],
      expected: [null, null, null, null, 1, 0, null, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['DetectSquares', 'add', 'add', 'add', 'add', 'count'],
        [[], [0, 0], [0, 2], [2, 0], [2, 2], [0, 0]],
      ],
      expected: [null, null, null, null, null, 1],
    },
    {
      args: [
        ['DetectSquares', 'add', 'add', 'add', 'count'],
        [[], [1, 1], [1, 4], [4, 1], [4, 4]],
      ],
      expected: [null, null, null, null, 1],
    },
  ],
};
