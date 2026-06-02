import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-capture-the-queen',
  title: 'Minimum Moves to Capture the Queen',
  difficulty: 'medium',
  tags: ['simulation'],
  description: `There is an **8 × 8** chessboard. You are given the position of a **rook**, a **bishop**, and the **black queen** you want to capture.

- The **rook** (white) is at position \`(a, b)\`.
- The **bishop** (white) is at position \`(c, d)\`.
- The **queen** (black) is at position \`(e, f)\`.

Return the **minimum** number of moves to **capture the queen** using one of the two white pieces. Note that the other white piece may block the path.

**Movement rules:**
- The rook moves horizontally or vertically any number of squares.
- The bishop moves diagonally any number of squares.
- A piece cannot jump over another piece.`,
  constraints: [
    '`1 <= a, b, c, d, e, f <= 8`',
    'No two pieces occupy the same square.',
  ],
  examples: [
    {
      input: 'a = 1, b = 1, c = 8, d = 8, e = 2, f = 3',
      output: '2',
      explanation: 'The rook cannot reach (2,3) in one move from (1,1) in a straight line. The bishop (8,8) is not on the diagonal of the queen (2,3). So the answer is 2.',
    },
    {
      input: 'a = 5, b = 3, c = 3, d = 4, e = 5, f = 2',
      output: '1',
      explanation: 'Rook at (5,3) and queen at (5,2) are in the same column. The bishop (3,4) is not between them. Rook captures in 1 move.',
    },
  ],
  hints: [
    'If the rook is in the same row or column as the queen AND the bishop does not block, return 1.',
    'If the bishop is on the same diagonal as the queen AND the rook does not block, return 1.',
    'Otherwise, the rook can always reach the queen in exactly 2 moves.',
    'To check if a piece blocks: see if it lies on the segment between the mover and the queen.',
  ],
  functionName: 'minMovesToCaptureTheQueen',
  params: ['a', 'b', 'c', 'd', 'e', 'f'],
  starterCode: {
    javascript: `function minMovesToCaptureTheQueen(a, b, c, d, e, f) {
  const between = (p, q, r) => (q - p) * (q - r) < 0;
  const onDiag = (x1, y1, x2, y2) => Math.abs(x1 - x2) === Math.abs(y1 - y2);
  if (b === f && !(d === b && between(a, c, e))) return 1;
  if (a === e && !(c === a && between(b, d, f))) return 1;
  if (onDiag(c, d, e, f) && !(onDiag(c, d, a, b) && between(c, a, e))) return 1;
  return 2;
}`,
    typescript: `function minMovesToCaptureTheQueen(a: number, b: number, c: number, d: number, e: number, f: number): number {
  const between = (p: number, q: number, r: number) => (q - p) * (q - r) < 0;
  const onDiag = (x1: number, y1: number, x2: number, y2: number) => Math.abs(x1 - x2) === Math.abs(y1 - y2);
  if (b === f && !(d === b && between(a, c, e))) return 1;
  if (a === e && !(c === a && between(b, d, f))) return 1;
  if (onDiag(c, d, e, f) && !(onDiag(c, d, a, b) && between(c, a, e))) return 1;
  return 2;
}`,
    python: `def minMovesToCaptureTheQueen(a, b, c, d, e, f):
    between = lambda p, q, r: (q - p) * (q - r) < 0
    on_diag = lambda x1, y1, x2, y2: abs(x1 - x2) == abs(y1 - y2)
    if b == f and not (d == b and between(a, c, e)): return 1
    if a == e and not (c == a and between(b, d, f)): return 1
    if on_diag(c, d, e, f) and not (on_diag(c, d, a, b) and between(c, a, e)): return 1
    return 2`,
  },
  visibleTests: [
    { args: [1, 1, 8, 8, 2, 3], expected: 2 },
    { args: [5, 3, 3, 4, 5, 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1, 2, 2, 8, 8], expected: 1 },
    { args: [1, 1, 1, 4, 1, 8], expected: 2 },
    { args: [3, 3, 4, 4, 6, 6], expected: 1 },
    { args: [1, 5, 3, 5, 7, 5], expected: 2 },
    { args: [4, 4, 4, 6, 4, 8], expected: 2 },
    { args: [1, 1, 2, 1, 8, 1], expected: 2 },
  ],
};
