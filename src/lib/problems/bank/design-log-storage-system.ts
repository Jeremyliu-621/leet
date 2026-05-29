import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-log-storage-system',
  title: 'Design Log Storage System',
  difficulty: 'medium',
  tags: ['design', 'strings'],
  description: `You are given several logs, where each log contains a unique ID and a timestamp in the format \`"YYYY:MM:DD:HH:mm:SS"\` (Year:Month:Day:Hour:Minute:Second). All values are zero-padded.

Implement \`logSystem(operations, args)\` using the ops-array pattern where:
- \`"LogSystem"\` with args \`[]\` — initializes the system. Returns \`null\`.
- \`"put"\` with args \`[id, timestamp]\` — stores a log with the given integer \`id\` and \`timestamp\` string. Returns \`null\`.
- \`"retrieve"\` with args \`[start, end, granularity]\` — returns a list of IDs of all logs whose timestamps fall within the inclusive range \`[start, end]\` after truncating timestamps to the given granularity level. \`granularity\` is one of \`"Year"\`, \`"Month"\`, \`"Day"\`, \`"Hour"\`, \`"Minute"\`, \`"Second"\`.`,
  constraints: [
    '`1 <= id <= 500`',
    '`"2000:01:01:00:00:00" <= timestamp <= "2017:12:31:23:59:59"`',
    '`granularity` is one of "Year", "Month", "Day", "Hour", "Minute", "Second".',
    'At most `500` calls will be made to `put` and `retrieve`.',
  ],
  examples: [
    {
      input: 'operations = ["LogSystem","put","put","put","retrieve","retrieve"]\nargs = [[],[1,"2017:01:01:23:59:59"],[2,"2017:01:01:22:59:59"],[3,"2016:01:01:00:00:00"],["2016:01:01:01:01:01","2017:01:01:23:00:00","Year"],["2016:01:01:01:01:01","2017:01:01:23:00:00","Hour"]]',
      output: '[null,null,null,null,[1,2,3],[1,2]]',
      explanation: 'With "Year" granularity, all three logs (2016 and 2017) fall in [2016,2017]. With "Hour" granularity, log 3 (2016:01:01:00) is before start (2016:01:01:01), so only logs 1 and 2 are returned.',
    },
  ],
  hints: [
    'Store all (id, timestamp) pairs in an array.',
    'Map each granularity to a prefix length: Year=4, Month=7, Day=10, Hour=13, Minute=16, Second=19.',
    'For retrieve, truncate each stored timestamp and start/end to the prefix length, then compare lexicographically.',
  ],
  functionName: 'logSystem',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function logSystem(operations, args) {
  const results = [];
  const logs = [];
  const granMap = { Year: 4, Month: 7, Day: 10, Hour: 13, Minute: 16, Second: 19 };

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i];
    if (op === 'LogSystem') {
      logs.length = 0;
      results.push(null);
    } else if (op === 'put') {
      logs.push({ id: arg[0], timestamp: arg[1] });
      results.push(null);
    } else { // retrieve
      const [start, end, gran] = arg;
      const len = granMap[gran];
      const s = start.slice(0, len);
      const e = end.slice(0, len);
      const ids = logs
        .filter(log => {
          const t = log.timestamp.slice(0, len);
          return t >= s && t <= e;
        })
        .map(log => log.id);
      results.push(ids);
    }
  }
  return results;
}`,
    typescript: `function logSystem(operations: string[], args: (string | number)[][]): (null | number[])[] {
  const results: (null | number[])[] = [];
  const logs: { id: number; timestamp: string }[] = [];
  const granMap: Record<string, number> = { Year: 4, Month: 7, Day: 10, Hour: 13, Minute: 16, Second: 19 };

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i]!;
    if (op === 'LogSystem') {
      logs.length = 0;
      results.push(null);
    } else if (op === 'put') {
      logs.push({ id: arg[0] as number, timestamp: arg[1] as string });
      results.push(null);
    } else {
      const [start, end, gran] = arg as string[];
      const len = granMap[gran!]!;
      const s = start!.slice(0, len);
      const e = end!.slice(0, len);
      const ids = logs
        .filter(log => {
          const t = log.timestamp.slice(0, len);
          return t >= s && t <= e;
        })
        .map(log => log.id);
      results.push(ids);
    }
  }
  return results;
}`,
    python: `def logSystem(operations, args):
    if hasattr(operations, 'to_py'): operations = list(operations.to_py())
    if hasattr(args, 'to_py'): args = list(args.to_py())
    results = []
    logs = []
    gran_map = {'Year': 4, 'Month': 7, 'Day': 10, 'Hour': 13, 'Minute': 16, 'Second': 19}

    for i in range(len(operations)):
        op = operations[i]
        arg = list(args[i]) if hasattr(args[i], 'to_py') else list(args[i])

        if op == 'LogSystem':
            logs.clear()
            results.append(None)
        elif op == 'put':
            logs.append({'id': int(arg[0]), 'timestamp': str(arg[1])})
            results.append(None)
        else:  # retrieve
            start, end, gran = str(arg[0]), str(arg[1]), str(arg[2])
            length = gran_map[gran]
            s = start[:length]
            e = end[:length]
            ids = [log['id'] for log in logs if s <= log['timestamp'][:length] <= e]
            results.append(ids)
    return results`,
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
        ['LogSystem', 'put', 'retrieve'],
        [[], [1, '2017:06:15:12:30:45'], ['2017:06:15:12:30:00', '2017:06:15:12:30:59', 'Second']],
      ],
      expected: [null, null, [1]],
    },
    {
      args: [
        ['LogSystem', 'put', 'put', 'retrieve'],
        [[], [1, '2016:12:31:23:59:59'], [2, '2017:01:01:00:00:00'], ['2016:12:31:00:00:00', '2016:12:31:23:59:59', 'Day']],
      ],
      expected: [null, null, null, [1]],
    },
    {
      args: [
        ['LogSystem', 'put', 'put', 'retrieve'],
        [[], [1, '2015:05:10:00:00:00'], [2, '2016:05:10:00:00:00'], ['2014:01:01:00:00:00', '2016:01:01:00:00:00', 'Year']],
      ],
      expected: [null, null, null, [1, 2]],
    },
    {
      args: [
        ['LogSystem', 'put', 'put', 'retrieve'],
        [[], [1, '2017:01:15:00:00:00'], [2, '2017:02:15:00:00:00'], ['2017:01:01:00:00:00', '2017:02:28:00:00:00', 'Month']],
      ],
      expected: [null, null, null, [1, 2]],
    },
    {
      args: [
        ['LogSystem', 'retrieve'],
        [[], ['2000:01:01:00:00:00', '2017:12:31:23:59:59', 'Year']],
      ],
      expected: [null, []],
    },
  ],
};
