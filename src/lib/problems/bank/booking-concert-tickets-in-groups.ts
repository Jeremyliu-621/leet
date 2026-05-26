import type { Problem } from '../types';

export const problem: Problem = {
  id: 'booking-concert-tickets-in-groups',
  title: 'Booking Concert Tickets in Groups',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'simulation'],
  description: `A concert hall has \`n\` rows, each with \`m\` seats. Simulate a booking system for two operations passed as a list:

- \`["gather", k, maxRow]\` — Allocate \`k\` **consecutive** seats in the **lowest-index** row \`<= maxRow\` that has at least \`k\` remaining seats. Return \`[row, firstSeat]\`, or \`[]\` if impossible.
- \`["scatter", k, maxRow]\` — Check if there are at least \`k\` seats available across rows \`0..maxRow\`. If yes, allocate them starting from the lowest-index row and return \`true\`; otherwise return \`false\`.

Seats in a row are filled left-to-right and are never freed. Return an array of results for each operation (gather returns an array or empty array; scatter returns a boolean).`,
  constraints: [
    '`1 <= n, m <= 5 * 10^4`',
    '`1 <= operations.length <= 5 * 10^4`',
    '`1 <= k <= n * m`',
    '`0 <= maxRow < n`',
  ],
  examples: [
    {
      input: 'n = 2, m = 5, operations = [["gather",4,0],["gather",2,0],["scatter",5,1],["scatter",6,1]]',
      output: '[[0,0],[],true,false]',
      explanation:
        'gather(4,0): row 0 has 5 seats, allocate 4 starting at seat 0 → [0,0]. gather(2,0): row 0 has 1 seat left < 2 → []. scatter(5,1): 1+5=6 >= 5, fill row 0 (1 seat) then row 1 (4 seats) → true. scatter(6,1): only 1 seat left (row 1 has 1 remaining) < 6 → false.',
    },
    {
      input: 'n = 1, m = 3, operations = [["gather",2,0],["scatter",1,0],["gather",2,0]]',
      output: '[[0,0],true,[]]',
      explanation: 'After gather(2,0): row 0 used seats 0-1. scatter(1,0): 1 seat left, ok. gather(2,0): row 0 has 0 seats left → [].',
    },
  ],
  hints: [
    'Use a Fenwick tree (BIT) to track the prefix sum of remaining seats per row. `scatter` checks `prefixSum(maxRow) >= k` in O(log n) before allocating greedily.',
    'For `gather`, scan rows linearly from 0 to maxRow to find the first row with `avail[r] >= k`. Once found, record the starting seat (= `m - avail[r]`), update the BIT, and return. Since seats are never freed, the scan skips full rows quickly in practice.',
    '```js\nfunction bookMyShow(n, m, operations) {\n  const avail = new Array(n).fill(m);\n  const bit = new Array(n + 1).fill(0);\n  for (let i = 0; i < n; i++)\n    for (let j = i + 1; j <= n; j += j & -j) bit[j] += m;\n  const query = i => { let s = 0; for (i++; i > 0; i -= i & -i) s += bit[i]; return s; };\n  const update = (i, d) => { for (i++; i <= n; i += i & -i) bit[i] += d; };\n  const results = [];\n  for (const [op, k, maxRow] of operations) {\n    if (op === "gather") {\n      let found = false;\n      for (let r = 0; r <= maxRow; r++) {\n        if (avail[r] >= k) {\n          results.push([r, m - avail[r]]);\n          update(r, -k); avail[r] -= k; found = true; break;\n        }\n      }\n      if (!found) results.push([]);\n    } else {\n      if (query(maxRow) < k) { results.push(false); continue; }\n      let rem = k;\n      for (let r = 0; r <= maxRow && rem > 0; r++) {\n        const take = Math.min(rem, avail[r]);\n        if (take > 0) { update(r, -take); avail[r] -= take; rem -= take; }\n      }\n      results.push(true);\n    }\n  }\n  return results;\n}\n```',
  ],
  functionName: 'bookMyShow',
  params: ['n', 'm', 'operations'],
  starterCode: {
    javascript: `function bookMyShow(n, m, operations) {

}`,
    python: `def bookMyShow(n: int, m: int, operations: list) -> list:
    pass`,
  },
  visibleTests: [
    {
      args: [2, 5, [['gather', 4, 0], ['gather', 2, 0], ['scatter', 5, 1], ['scatter', 6, 1]]],
      expected: [[0, 0], [], true, false],
    },
    {
      args: [1, 3, [['gather', 2, 0], ['scatter', 1, 0], ['gather', 2, 0]]],
      expected: [[0, 0], true, []],
    },
  ],
  hiddenTests: [
    {
      args: [3, 3, [['gather', 3, 2], ['gather', 3, 2], ['gather', 3, 2], ['gather', 3, 2]]],
      expected: [[0, 0], [1, 0], [2, 0], []],
    },
    {
      args: [2, 4, [['scatter', 4, 0], ['gather', 1, 0], ['scatter', 5, 1]]],
      expected: [true, [], false],
    },
    {
      args: [1, 10, [['gather', 5, 0], ['gather', 5, 0], ['gather', 1, 0]]],
      expected: [[0, 0], [0, 5], []],
    },
    {
      args: [3, 2, [['scatter', 6, 2], ['gather', 1, 2]]],
      expected: [true, []],
    },
  ],
};
