import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-students-taking-exam',
  title: 'Maximum Students Taking Exam',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'bit-manipulation', 'arrays'],
  description: `Given a \`m x n\` matrix \`seats\` that represent seats distributions in a classroom. A seat is **broken** if it is marked as \`'#'\`, otherwise it is **available** if it is marked as \`'.'\`.

Students can see the answers of those sitting next to the left, right, upper left and upper right, but they **cannot** see the answers of the student directly in front or behind them.

Return *the **maximum** number of students that can take the exam together without any form of cheating being possible.*

**Note:** Students cannot be placed in broken seats.`,
  constraints: [
    'm == seats.length',
    'n == seats[i].length',
    '1 <= m <= 8',
    '1 <= n <= 8',
    "seats[i][j] is either '.' or '#'.",
  ],
  examples: [
    {
      input: 'seats = [["#",".","#","#",".","#"],[".",".","#","#",".","."],[".",".",".",".",".",""]]',
      output: '4',
      explanation: 'Teacher can place 4 students with no cheating possible.',
    },
    {
      input: 'seats = [[".","#"],["#","#"],["#","."],["#","#"],[".","#"]]',
      output: '3',
      explanation: 'Place at the available dots.',
    },
    {
      input: 'seats = [[".",".",".",".",".","."],[".",".",".",".",".","."],[".",".",".",".",".","."],".",".",".",".",".",""]]',
      output: '9',
      explanation: 'Maximum 3 non-adjacent students per row × 3 rows = 9 students.',
    },
  ],
  hints: [
    'Level 1: For each row, only certain bitmask subsets of seats are valid: mask is a subset of available seats with no two adjacent bits set.',
    'Level 2: DP row by row. State = which seats are occupied in the current row. Transition: for prev row mask p and current mask m, check no diagonal conflicts: !(m & (p<<1)) && !(m & (p>>1)).',
    'Level 3: Enumerate all submasks of the available row using the "submask of a mask" trick: start at avail, decrement, AND with avail. O(3^n · m) total.',
  ],
  functionName: 'maxStudents',
  params: ['seats'],
  starterCode: {
    javascript: `function maxStudents(seats) {
  const m = seats.length, n = seats[0].length;
  const rowMasks = seats.map(row => {
    let mask = 0;
    for (let i = 0; i < n; i++) if (row[i] === '.') mask |= 1 << i;
    return mask;
  });
  const popcount = (x) => { let c = 0; while (x) { c += x & 1; x >>>= 1; } return c; };
  const full = (1 << n) - 1;
  let dp = new Array(full + 1).fill(-1);
  dp[0] = 0;
  for (let r = 0; r < m; r++) {
    const avail = rowMasks[r];
    const ndp = new Array(full + 1).fill(-1);
    for (let prevMask = 0; prevMask <= full; prevMask++) {
      if (dp[prevMask] < 0) continue;
      let mask = avail;
      do {
        if (!(mask & (mask >> 1)) && !(mask & (prevMask << 1)) && !(mask & (prevMask >> 1))) {
          const val = dp[prevMask] + popcount(mask);
          if (val > ndp[mask]) ndp[mask] = val;
        }
        if (mask === 0) break;
        mask = (mask - 1) & avail;
      } while (true);
    }
    dp = ndp;
  }
  return Math.max(0, ...dp.filter(x => x >= 0));
}`,
    typescript: `function maxStudents(seats: string[][]): number {
  const m = seats.length, n = seats[0]!.length;
  const rowMasks = seats.map(row => {
    let mask = 0;
    for (let i = 0; i < n; i++) if (row[i] === '.') mask |= 1 << i;
    return mask;
  });
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1; } return c; };
  const full = (1 << n) - 1;
  let dp = new Array<number>(full + 1).fill(-1);
  dp[0] = 0;
  for (let r = 0; r < m; r++) {
    const avail = rowMasks[r]!;
    const ndp = new Array<number>(full + 1).fill(-1);
    for (let prevMask = 0; prevMask <= full; prevMask++) {
      if ((dp[prevMask] ?? -1) < 0) continue;
      let mask = avail;
      do {
        if (!(mask & (mask >> 1)) && !(mask & (prevMask << 1)) && !(mask & (prevMask >> 1))) {
          const val = (dp[prevMask] ?? 0) + popcount(mask);
          if (val > (ndp[mask] ?? -1)) ndp[mask] = val;
        }
        if (mask === 0) break;
        mask = (mask - 1) & avail;
      } while (true);
    }
    dp = ndp;
  }
  return Math.max(0, ...dp.filter(x => x >= 0));
}`,
    python: `def maxStudents(seats):
    m, n = len(seats), len(seats[0])
    row_masks = []
    for row in seats:
        mask = 0
        for i, c in enumerate(row):
            if c == '.': mask |= 1 << i
        row_masks.append(mask)

    full = (1 << n) - 1
    dp = [-1] * (full + 1)
    dp[0] = 0

    for r in range(m):
        avail = row_masks[r]
        ndp = [-1] * (full + 1)
        for prev_mask in range(full + 1):
            if dp[prev_mask] < 0: continue
            mask = avail
            while True:
                if not (mask & (mask >> 1)) and not (mask & (prev_mask << 1)) and not (mask & (prev_mask >> 1)):
                    val = dp[prev_mask] + bin(mask).count('1')
                    if val > ndp[mask]: ndp[mask] = val
                if mask == 0: break
                mask = (mask - 1) & avail
        dp = ndp

    return max((x for x in dp if x >= 0), default=0)`,
  },
  visibleTests: [
    { args: [[['.', '#'], ['#', '#'], ['#', '.'], ['#', '#'], ['.', '#']]], expected: 3 },
    { args: [[['.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.']]], expected: 9 },
    { args: [[['.', '.']]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[['.']]], expected: 1 },
    { args: [[['#']]], expected: 0 },
    { args: [[['.', '.', '.', '.']]], expected: 2 },
    { args: [[['.', '.'], ['.', '.']]], expected: 2 },
    { args: [[['.', '.', '.', '.', '.', '.']]], expected: 3 },
    { args: [[['.', '#', '.']]], expected: 2 },
  ],
};
