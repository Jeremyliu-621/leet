import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-sudoku',
  title: 'Valid Sudoku',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Determine if a 9 × 9 Sudoku board is **valid**. Only the filled cells (non-\`'.'\`) need to be validated according to the following rules:

1. Each row must contain the digits 1–9 **without repetition**.
2. Each column must contain the digits 1–9 **without repetition**.
3. Each of the nine 3 × 3 sub-boxes must contain the digits 1–9 **without repetition**.

You do **not** need to solve the puzzle — just validate it. A partially-filled board is valid as long as no rule is violated.`,
  constraints: [
    'board.length == 9',
    'board[i].length == 9',
    "board[i][j] is a digit '1'-'9' or '.'",
  ],
  examples: [
    {
      input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
      output: 'true',
      explanation: 'The partially-filled board satisfies all three rules.',
    },
    {
      input: 'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
      output: 'false',
      explanation: 'The first column has two 8s (rows 0 and 3), violating the column rule.',
    },
  ],
  hints: [
    'Use three sets of seen-digits arrays: one per row, one per column, one per 3×3 box. For cell (i,j), the box index is Math.floor(i/3)*3 + Math.floor(j/3).',
    'For each non-"." cell, check if the digit already appears in the row set, column set, or box set. If it does, return false. Otherwise, add it to all three sets.',
    '`const rows=Array.from({length:9},()=>new Set()), cols=Array.from({length:9},()=>new Set()), boxes=Array.from({length:9},()=>new Set()); for(let i=0;i<9;i++) for(let j=0;j<9;j++){ const v=board[i][j]; if(v===".") continue; const b=Math.floor(i/3)*3+Math.floor(j/3); if(rows[i].has(v)||cols[j].has(v)||boxes[b].has(v)) return false; rows[i].add(v); cols[j].add(v); boxes[b].add(v); } return true;`',
  ],
  functionName: 'isValidSudoku',
  params: ['board'] as readonly string[],
  starterCode: {
    javascript: `function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    const row = new Set(), col = new Set(), box = new Set();
    for (let j = 0; j < 9; j++) {
      const r = board[i][j], c = board[j][i];
      const br = 3*Math.floor(i/3)+Math.floor(j/3), bc = 3*(i%3)+(j%3);
      const b = board[br][bc];
      if (r !== '.') { if (row.has(r)) return false; row.add(r); }
      if (c !== '.') { if (col.has(c)) return false; col.add(c); }
      if (b !== '.') { if (box.has(b)) return false; box.add(b); }
    }
  }
  return true;
}`,
    typescript: `function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = new Set<string>(), col = new Set<string>(), box = new Set<string>();
    for (let j = 0; j < 9; j++) {
      const r = board[i]![j]!, c = board[j]![i]!;
      const br = 3*Math.floor(i/3)+Math.floor(j/3), bc = 3*(i%3)+(j%3);
      const b = board[br]![bc]!;
      if (r !== '.') { if (row.has(r)) return false; row.add(r); }
      if (c !== '.') { if (col.has(c)) return false; col.add(c); }
      if (b !== '.') { if (box.has(b)) return false; box.add(b); }
    }
  }
  return true;
}`,
    python: `def isValidSudoku(board: list[list[str]]) -> bool:
    if hasattr(board, 'to_py'): board = board.to_py()
    board = [[(v.to_py() if hasattr(v,'to_py') else str(v)) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in board]
    for i in range(9):
        row, col, box = set(), set(), set()
        for j in range(9):
            r, c = board[i][j], board[j][i]
            br, bc = 3*(i//3)+j//3, 3*(i%3)+j%3
            b = board[br][bc]
            if r != '.':
                if r in row: return False
                row.add(r)
            if c != '.':
                if c in col: return False
                col.add(c)
            if b != '.':
                if b in box: return False
                box.add(b)
    return True`,
  },
  visibleTests: [
    {
      args: [[['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]],
      expected: true,
    },
    {
      args: [[['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]],
      expected: false,
    },
  ],
  hiddenTests: [
    {
      args: [[['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.']]],
      expected: true,
    },
    {
      args: [[['1','.','.','.','.','.','.','.','.'],['1','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.']]],
      expected: false,
    },
  ],
};
