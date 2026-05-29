import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-log-storage-system',
  title: 'Design Log Storage System',
  difficulty: 'medium',
  tags: ['design', 'hash-map', 'strings'],
  description: `You are given several logs, where each log contains a unique ID and a timestamp. Timestamps are formatted as \`"Year:Month:Day:Hour:Minute:Second"\` (all fields are zero-padded to fixed widths: Year=4, all others=2).

Implement the \`LogSystem\` class:
- \`put(int id, string timestamp)\` — Stores the given log ID at the given timestamp.
- \`retrieve(string start, string end, string granularity)\` — Returns the IDs of logs whose timestamps are in the range [\`start\`, \`end\`] **inclusive at the given granularity**. \`granularity\` is one of \`"Year"\`, \`"Month"\`, \`"Day"\`, \`"Hour"\`, \`"Minute"\`, \`"Second"\`.

The function \`logSystemRunner(ops, args)\` is called with operation names and argument lists.`,
  constraints: [
    '1 <= id <= 500',
    '2000 <= Year <= 2017',
    '1 <= Month <= 12',
    '1 <= Day <= 31',
    '0 <= Hour <= 23',
    '0 <= Minute <= 59',
    '0 <= Second <= 59',
    'At most 500 calls to put and retrieve.',
  ],
  examples: [
    {
      input: 'ops = ["LogSystem","put","put","put","retrieve","retrieve"], args = [[],[1,"2017:01:01:23:59:59"],[2,"2017:01:01:22:59:59"],[3,"2016:01:01:00:00:00"],["2016:01:01:01:01:01","2017:01:01:23:00:00","Year"],["2016:01:01:01:01:01","2017:01:01:23:00:00","Hour"]]',
      output: '[null,null,null,null,[3,2,1],[2,1]]',
      explanation: 'Year granularity: 2016 and 2017 both in [2016,2017] → ids 1,2,3. Hour granularity: truncate to hour → 2016:01:01:00, 2017:01:01:22, 2017:01:01:23 in range [2016:01:01:01, 2017:01:01:23] → ids 2,1.',
    },
  ],
  hints: [
    'Map granularity to a prefix length: Year→4, Month→7, Day→10, Hour→13, Minute→16, Second→19.',
    'For retrieve, truncate each stored timestamp and the bounds to that prefix length, then check start <= ts <= end lexicographically.',
    'Store logs as (timestamp, id) pairs and scan all entries on retrieve.',
  ],
  functionName: 'logSystemRunner',
  params: ['ops', 'args'],
  starterCode: {
    javascript: 'function logSystemRunner(ops, args) {\n  \n}\n',
    typescript: 'function logSystemRunner(ops: string[], args: (number | string)[][]): (null | number[])[] {\n  \n}\n',
    python: 'def logSystemRunner(ops, args):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['LogSystem', 'put', 'put', 'put', 'retrieve', 'retrieve'],
        [[], [1, '2017:01:01:23:59:59'], [2, '2017:01:01:22:59:59'], [3, '2016:01:01:00:00:00'], ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Year'], ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Hour']],
      ],
      expected: [null, null, null, null, [1, 2, 3], [1, 2]],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['LogSystem', 'put', 'put', 'retrieve'],
        [[], [1, '2017:05:15:10:30:00'], [2, '2017:05:15:10:45:00'], ['2017:05:15:10:00:00', '2017:05:15:10:59:59', 'Minute']],
      ],
      expected: [null, null, null, [1, 2]],
    },
    {
      args: [
        ['LogSystem', 'put', 'put', 'put', 'retrieve'],
        [[], [1, '2015:01:01:00:00:00'], [2, '2016:06:15:12:30:00'], [3, '2017:12:31:23:59:59'], ['2016:01:01:00:00:00', '2016:12:31:23:59:59', 'Year']],
      ],
      expected: [null, null, null, null, [2]],
    },
    {
      args: [
        ['LogSystem', 'put', 'put', 'retrieve'],
        [[], [1, '2017:03:01:00:00:00'], [2, '2017:05:01:00:00:00'], ['2017:01:01:00:00:00', '2017:04:01:00:00:00', 'Month']],
      ],
      expected: [null, null, null, [1]],
    },
  ],
};
