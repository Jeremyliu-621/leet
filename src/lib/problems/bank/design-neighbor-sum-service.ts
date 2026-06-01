import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-neighbor-sum-service',
  title: 'Design Neighbor Sum Service',
  difficulty: 'easy',
  tags: ['design', 'arrays', 'hash-map'],
  description: `Design a class \`NeighborSum\` that provides neighbor sum queries on an \`n x n\` grid:

- \`NeighborSum(grid)\` Initializes the object with an \`n x n\` integer grid. Each value in the grid is unique.
- \`adjacentSum(value)\` Returns the **sum of elements** that are directly adjacent (up, down, left, right) to the cell containing \`value\` in the grid.
- \`diagonalSum(value)\` Returns the **sum of elements** at the four diagonal positions (NW, NE, SW, SE) of the cell containing \`value\`.

Cells outside grid boundaries contribute 0.

Simulate with arrays of operations and arguments. Return \`null\` for the constructor call and the integer result for each query call.`,
  constraints: [
    '3 <= n <= 10',
    '1 <= grid[i][j] <= n * n',
    'All values in grid are unique.',
    '1 <= value < n * n',
    'At most 2 * n^2 calls will be made in total to adjacentSum and diagonalSum.',
  ],
  examples: [
    {
      input: 'ops = ["NeighborSum","adjacentSum","diagonalSum"], args = [[[0,1,2],[3,4,5],[6,7,8]],[1],[4]]',
      output: '[null,6,16]',
      explanation:
        'adjacentSum(1): cell (0,1), neighbors are (1,1)=4, (0,0)=0, (0,2)=2 → sum = 6. diagonalSum(4): cell (1,1), diagonals are (0,0)=0, (0,2)=2, (2,0)=6, (2,2)=8 → sum = 16.',
    },
    {
      input: 'ops = ["NeighborSum","adjacentSum","diagonalSum"], args = [[[0,1,2],[3,4,5],[6,7,8]],[4],[4]]',
      output: '[null,16,16]',
      explanation:
        'adjacentSum(4): cell (1,1), neighbors 1+7+3+5 = 16. diagonalSum(4): 0+2+6+8 = 16.',
    },
  ],
  hints: [
    'Build a map from each value to its (row, col) position during construction — this gives O(1) lookup for any query.',
    'For adjacentSum, look up (row, col) for the value and check the four orthogonal neighbors, summing those that are in bounds.',
    `For diagonalSum, check the four diagonal positions (row±1, col±1). Both queries are O(1) after O(n²) preprocessing.
\`\`\`js
function designNeighborSumService(ops, args) {
  let grid, n;
  const pos = new Map();
  const results = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'NeighborSum') {
      grid = args[i];
      n = grid.length;
      pos.clear();
      for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
          pos.set(grid[r][c], [r, c]);
      results.push(null);
    } else {
      const value = args[i][0];
      const [r, c] = pos.get(value);
      const dirs = ops[i] === 'adjacentSum'
        ? [[-1,0],[1,0],[0,-1],[0,1]]
        : [[-1,-1],[-1,1],[1,-1],[1,1]];
      let sum = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n)
          sum += grid[nr][nc];
      }
      results.push(sum);
    }
  }
  return results;
}
\`\`\``,
  ],
  functionName: 'designNeighborSumService',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function designNeighborSumService(ops, args) {
  let grid, n;
  const pos = new Map();
  const results = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'NeighborSum') {
      grid = args[i];
      n = grid.length;
      pos.clear();
      for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
          pos.set(grid[r][c], [r, c]);
      results.push(null);
    } else {
      const value = args[i][0];
      const [r, c] = pos.get(value);
      const dirs = ops[i] === 'adjacentSum'
        ? [[-1,0],[1,0],[0,-1],[0,1]]
        : [[-1,-1],[-1,1],[1,-1],[1,1]];
      let sum = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) sum += grid[nr][nc];
      }
      results.push(sum);
    }
  }
  return results;
}`,
    typescript: `function designNeighborSumService(ops: string[], args: (number[][] | number[])[]): (number | null)[] {
  let grid: number[][] = [], n = 0;
  const pos = new Map<number, [number, number]>();
  const results: (number | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'NeighborSum') {
      grid = args[i] as number[][];
      n = grid.length;
      pos.clear();
      for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
          pos.set(grid[r]![c]!, [r, c]);
      results.push(null);
    } else {
      const value = (args[i] as number[])[0]!;
      const [r, c] = pos.get(value)!;
      const dirs = ops[i] === 'adjacentSum'
        ? [[-1,0],[1,0],[0,-1],[0,1]]
        : [[-1,-1],[-1,1],[1,-1],[1,1]];
      let sum = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr!, nc = c + dc!;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) sum += grid[nr]![nc]!;
      }
      results.push(sum);
    }
  }
  return results;
}`,
    python: `def designNeighborSumService(ops, args):
    ops = list(ops.to_py()) if hasattr(ops, 'to_py') else list(ops)
    args = list(args.to_py()) if hasattr(args, 'to_py') else list(args)
    grid, n, pos = [], 0, {}
    results = []
    for i in range(len(ops)):
        if ops[i] == 'NeighborSum':
            raw = args[i]
            if hasattr(raw, 'to_py'): raw = raw.to_py()
            grid = [[v for v in (row.to_py() if hasattr(row, 'to_py') else row)] for row in raw]
            n = len(grid)
            pos = {grid[r][c]: (r, c) for r in range(n) for c in range(n)}
            results.append(None)
        else:
            a = args[i]
            if hasattr(a, 'to_py'): a = a.to_py()
            value = a[0]
            r, c = pos[value]
            dirs = [(-1,0),(1,0),(0,-1),(0,1)] if ops[i] == 'adjacentSum' else [(-1,-1),(-1,1),(1,-1),(1,1)]
            s = sum(grid[r+dr][c+dc] for dr, dc in dirs if 0 <= r+dr < n and 0 <= c+dc < n)
            results.append(s)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['NeighborSum', 'adjacentSum', 'diagonalSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [1], [4]],
      ],
      expected: [null, 6, 16],
    },
    {
      args: [
        ['NeighborSum', 'adjacentSum', 'diagonalSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [4], [4]],
      ],
      expected: [null, 16, 16],
    },
    {
      args: [
        ['NeighborSum', 'adjacentSum'],
        [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [5]],
      ],
      expected: [null, 20],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['NeighborSum', 'adjacentSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [0]],
      ],
      expected: [null, 4],
    },
    {
      args: [
        ['NeighborSum', 'diagonalSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [0]],
      ],
      expected: [null, 4],
    },
    {
      args: [
        ['NeighborSum', 'adjacentSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [8]],
      ],
      expected: [null, 12],
    },
    {
      args: [
        ['NeighborSum', 'diagonalSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [8]],
      ],
      expected: [null, 4],
    },
    {
      args: [
        ['NeighborSum', 'adjacentSum', 'adjacentSum'],
        [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1], [9]],
      ],
      expected: [null, 6, 14],
    },
    {
      args: [
        ['NeighborSum', 'diagonalSum', 'diagonalSum'],
        [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1], [9]],
      ],
      expected: [null, 5, 5],
    },
    {
      args: [
        ['NeighborSum', 'adjacentSum', 'diagonalSum'],
        [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [7], [7]],
      ],
      expected: [null, 18, 8],
    },
  ],
};
