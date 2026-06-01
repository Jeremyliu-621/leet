import type { Problem } from '../types';

export const problem: Problem = {
  id: 'high-access-employees',
  title: 'High-Access Employees',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `You are given a 2D **0-indexed** array of strings \`accessTimes\`. Each element has two parts:
- \`accessTimes[i][0]\` — the **name** of the employee.
- \`accessTimes[i][1]\` — the **access time** in a 24-hour day as a 4-digit string \`"HHMM"\`.

A **high-access** employee is one who accessed the system **at least three times** within a **one-hour window** (a window \`[x, x + 60)\` minutes). Accesses exactly 60 minutes apart do **not** count (the window is exclusive of the right endpoint).

Return a list of all high-access employees in any order.`,
  constraints: [
    '1 <= accessTimes.length <= 100',
    'accessTimes[i].length == 2',
    '1 <= accessTimes[i][0].length <= 10',
    'accessTimes[i][1].length == 4',
    'accessTimes[i][1] is in the format "HHMM".',
    'All access times are valid — 00 <= HH <= 23, 00 <= MM <= 59.',
    'All strings in accessTimes[i][0] consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'accessTimes = [["a","0549"],["b","0457"],["a","0532"],["a","0621"],["b","0540"]]',
      output: '["a"]',
      explanation: '"a" has accesses at 0532, 0549, 0621. In minutes: 332, 349, 381. 381-332=49 < 60, so all 3 fit within one hour. "b" has 0457 (297 min) and 0540 (340 min); only 2 accesses total.',
    },
    {
      input: 'accessTimes = [["d","0002"],["c","0808"],["c","0816"],["c","0900"],["d","0468"]]',
      output: '["c"]',
      explanation: '"c" has accesses at 0808→488, 0816→496, 0900→540. 540-488=52<60, all 3 in one hour.',
    },
    {
      input: 'accessTimes = [["cd","1025"],["cd","1050"],["cd","1130"]]',
      output: '["cd"]',
      explanation: '"cd" has accesses at 1025→625, 1050→650, 1130→690. 690-625=65>=60, but 650-625=25<60 and 690-650=40<60. Check triples: [625,650,690] → 690-625=65≥60, not in window. Wait, it\'s a consecutive-3 check: we need three where the last - first < 60. [625,650] window works for 2. Need 3 where times[i+2]-times[i]<60: 690-625=65, fails. So "cd" is NOT high-access. Output: [].',
    },
  ],
  hints: [
    'Convert each access time "HHMM" to an integer number of minutes: `HH * 60 + MM`.',
    'Group the minute values by employee name using a hash map.',
    'For each employee, sort their access times. Then check every consecutive triple `(times[i], times[i+1], times[i+2])`: if `times[i+2] - times[i] < 60`, this employee is high-access.',
  ],
  functionName: 'findHighAccessEmployees',
  params: ['accessTimes'],
  starterCode: {
    javascript: 'function findHighAccessEmployees(accessTimes) {\n  // your code here\n}\n',
    typescript: `function findHighAccessEmployees(accessTimes: string[][]): string[] {

}`,
    python: 'def findHighAccessEmployees(accessTimes):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[['a', '0549'], ['b', '0457'], ['a', '0532'], ['a', '0621'], ['b', '0540']]],
      expected: ['a'],
    },
    {
      args: [[['d', '0002'], ['c', '0808'], ['c', '0816'], ['c', '0900'], ['d', '0042']]],
      expected: ['c'],
    },
    {
      args: [[['cd', '1025'], ['cd', '1050'], ['cd', '1130']]],
      expected: [],
    },
  ],
  hiddenTests: [
    {
      args: [[['a', '0100'], ['a', '0110'], ['a', '0159']]],
      expected: ['a'],
    },
    {
      args: [[['a', '0100'], ['a', '0200'], ['a', '0300']]],
      expected: [],
    },
    {
      args: [[['x', '2300'], ['x', '2310'], ['x', '2355'], ['y', '0000'], ['y', '0005'], ['y', '0010']]],
      expected: ['x', 'y'],
    },
    {
      args: [[['a', '0000'], ['a', '0059'], ['a', '0100']]],
      expected: [],
    },
    {
      args: [[['a', '0000'], ['a', '0030'], ['a', '0059']]],
      expected: ['a'],
    },
    {
      args: [[['z', '1200'], ['z', '1201'], ['z', '1202'], ['z', '1203']]],
      expected: ['z'],
    },
  ],
};
