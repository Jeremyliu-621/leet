import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-day-where-you-can-still-cross',
  title: 'Last Day Where You Can Still Cross',
  difficulty: 'hard',
  tags: ['union-find', 'graph', 'binary-search', 'arrays'],
  description: `There is a \`1\`-based \`row × col\` grid. Every cell is initially land. Each day, one cell becomes flooded (water). You are given an array \`cells\` where \`cells[i] = [ri, ci]\` represents the cell (row \`ri\`, column \`ci\`) that floods on day \`i\` (1-indexed).

Return the **last day** you are able to walk from the **top row** to the **bottom row** by only stepping on land cells. You can move **up, down, left, or right** from one land cell to an adjacent land cell. Any cell in the top row is a valid start, and any cell in the bottom row is a valid destination.`,
  constraints: [
    '2 <= row, col <= 2 * 10^4',
    '4 <= row * col <= 2 * 10^4',
    'cells.length == row * col',
    '1 <= ri <= row, 1 <= ci <= col',
    'All the values of cells are unique.',
  ],
  examples: [
    {
      input: 'row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]',
      output: '1',
      explanation: 'After day 1: cell (1,1) is water. Top land: (1,2). Path (1,2)→(2,2) exists. After day 2: top row fully flooded — impossible. Last valid day = 1.',
    },
    {
      input: 'row = 2, col = 3, cells = [[1,1],[2,1],[1,3],[2,2],[1,2],[2,3]]',
      output: '3',
      explanation: 'After day 3: flooded cells are (1,1),(2,1),(1,3). Top land: (1,2). Path (1,2)→(2,2)→bottom row. After day 4: (2,2) also flooded — cell (1,2) is surrounded and cut off. Last valid day = 3.',
    },
  ],
  hints: [
    'Binary search on the answer: for a given day d, check if we can still cross using BFS/DFS on the unflooded grid. The predicate is monotone: if we can cross on day d, we can also cross on any day < d.',
    'Alternatively, reverse the process: start from the last day and "unfloood" cells one at a time. Use Union-Find with virtual top and bottom nodes to detect when a path exists.',
    'For the Union-Find reverse approach: the virtual top node connects to all land cells in row 1; the virtual bottom node connects to all land cells in row R. When find(top) == find(bottom), you\'ve found the last day.',
  ],
  functionName: 'latestDayToCross',
  params: ['row', 'col', 'cells'],
  starterCode: {
    javascript: 'function latestDayToCross(row, col, cells) {\n  \n}\n',
    typescript: "function latestDayToCross(row: number, col: number, cells: number[][]): number {\n  \n}",

    python: 'def latestDayToCross(row, col, cells):\n    pass\n',
  },
  visibleTests: [
    { args: [2, 2, [[1,1],[1,2],[2,1],[2,2]]], expected: 1 },
    { args: [2, 3, [[1,1],[2,1],[1,3],[2,2],[1,2],[2,3]]], expected: 3 },
  ],
  hiddenTests: [
    // 2×2 with different flood order
    // cells=[[1,2],[2,1],[1,1],[2,2]]
    // day1: (1,2) water. Top land: (1,1). Path (1,1)→(2,1)→bottom. YES.
    // day2: (1,2),(2,1) water. Top land: (1,1). Bottom land: (2,2). (1,1) adj: (1,2)=W,(2,1)=W. No path. Last = 1.
    { args: [2, 2, [[1,2],[2,1],[1,1],[2,2]]], expected: 1 },
    // 3×3 grid: flood corners first, leaving middle column as path
    // cells=[[1,1],[3,3],[1,3],[3,1],[1,2],[3,2],[2,1],[2,3],[2,2]]
    // day4: flooded (1,1),(3,3),(1,3),(3,1). Top land: {(1,2)}. Bottom land: {(3,2)}.
    //   (1,2)→(2,2)→(3,2)→bottom. YES.
    // day5: +(1,2). Top fully flooded. Can't cross. Last = 4.
    { args: [3, 3, [[1,1],[3,3],[1,3],[3,1],[1,2],[3,2],[2,1],[2,3],[2,2]]], expected: 4 },
    // single column: row=3, col=1. Only column, each row is one cell.
    // cells=[[1,1],[2,1],[3,1]]. Path must go (1,1)→(2,1)→(3,1).
    // day0: all land, can cross (row1 land→row3 land via row2).
    // day1: (1,1) water. Top row has no land. Can't cross. Last = 0.
    // But wait, what does "last day" mean for day 0? The constraint says 4 <= row*col, so this case is invalid.
    // Let's use row=4, col=1:
    // cells=[[2,1],[3,1],[1,1],[4,1]].
    // day1: (2,1) water. Top: (1,1) land. (1,1) adj: (2,1)=W. Can't reach bottom. Last = 0.
    // Hmm, day 0 means no flooding at all. Technically day=0 is not defined in cells (1-indexed).
    // The problem guarantees n >= 1, so we might return 0 if even day-1 flood blocks it.
    // Let me use row=4,col=2 instead for a clearer case.
    // cells=[[1,1],[1,2],[2,1],[2,2],[3,1],[3,2],[4,1],[4,2]]
    // day2: (1,1),(1,2) flooded. Top row fully water. Can't cross. Last = 1... wait.
    // day1: (1,1) water. Top land: (1,2). (1,2)→(2,2)→(3,2)→(4,2)→bottom. YES. Last >= 1.
    // day2: (1,1),(1,2) water. Top fully flooded. Last = 1. ✓
    { args: [4, 2, [[1,1],[1,2],[2,1],[2,2],[3,1],[3,2],[4,1],[4,2]]], expected: 1 },
  ],
};
