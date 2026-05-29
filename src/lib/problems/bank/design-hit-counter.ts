import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-hit-counter',
  title: 'Design Hit Counter',
  difficulty: 'medium',
  tags: ['design', 'hash-map'],
  description: `Design a hit counter that counts the number of hits received in the past **5 minutes** (300 seconds).

Implement \`hitCounter(operations, args)\` where:
- \`operations\` is an array of strings: \`"HitCounter"\`, \`"hit"\`, or \`"getHits"\`
- \`args\` is an array of argument arrays: \`[]\` for constructor, \`[timestamp]\` for \`hit\` and \`getHits\`

**Rules:**
- \`"HitCounter"\` — initializes the counter. Returns \`null\`.
- \`"hit(timestamp)"\` — records a hit at the given timestamp (guaranteed non-decreasing). Returns \`null\`.
- \`"getHits(timestamp)"\` — returns the number of hits in the range \`[timestamp - 299, timestamp]\` (inclusive).

Timestamps are given as positive integers. Multiple hits at the same timestamp are allowed.`,
  constraints: [
    '1 <= timestamp <= 2 * 10^9',
    'All timestamps of hits are non-decreasing.',
    'At most 300 calls will be made to hit and getHits.',
    'operations[0] is always "HitCounter".',
  ],
  examples: [
    {
      input: 'operations = ["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"], args = [[],[1],[2],[3],[4],[300],[300],[301]]',
      output: '[null,null,null,null,3,null,4,3]',
      explanation: 'After hitting at 1,2,3 → getHits(4) sees all 3 (all within [4-299,4]). After hit(300) → getHits(300) sees hits 1,2,3,300 = 4. getHits(301) excludes hit at 1 (1 < 302-299=2) → 3.',
    },
    {
      input: 'operations = ["HitCounter","hit","getHits","hit","getHits"], args = [[],[5],[5],[10],[10]]',
      output: '[null,null,1,null,2]',
      explanation: 'getHits(5) sees hit at 5 → 1. After hit(10) → getHits(10) sees hits at 5 and 10 → 2.',
    },
  ],
  hints: [
    'Store all hit timestamps in an array. For getHits(t), count how many stored timestamps satisfy timestamp >= t - 299.',
    'Since timestamps are non-decreasing, you can use a simple filter: filter out entries older than t - 299.',
    'Optimize with a circular buffer of size 300: each slot stores (time, count). On hit(t), overwrite slot t % 300 if it is a new second. On getHits(t), sum slots where slot.time > t - 300.',
  ],
  functionName: 'hitCounter',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function hitCounter(operations, args) {
  const results = [];
  let timestamps = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i] ?? [];
    if (op === 'HitCounter') {
      timestamps = [];
      results.push(null);
    } else if (op === 'hit') {
      // record the hit
      results.push(null);
    } else { // getHits
      const t = arg[0];
      // count hits in [t - 299, t]
      results.push(0);
    }
  }
  return results;
}`,
    typescript: "function hitCounter(operations: string[], args: (unknown[] | number[])[]): (null | number)[] {\n  const results = [];\n  let timestamps = [];\n\n  for (let i = 0; i < operations.length; i++) {\n    const op = operations[i];\n    const arg = args[i] ?? [];\n    if (op === 'HitCounter') {\n      timestamps = [];\n      results.push(null);\n    } else if (op === 'hit') {\n      // record the hit\n      results.push(null);\n    } else { // getHits\n      const t = arg[0];\n      // count hits in [t - 299, t]\n      results.push(0);\n    }\n  }\n  return results;\n}",

    python: `def hitCounter(operations, args):
    results = []
    timestamps = []

    for i in range(len(operations)):
        op = operations[i]
        arg = args[i] if args[i] else []
        if op == 'HitCounter':
            timestamps = []
            results.append(None)
        elif op == 'hit':
            # record the hit
            results.append(None)
        else:  # getHits
            t = arg[0]
            # count hits in [t - 299, t]
            results.append(0)
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['HitCounter', 'hit', 'hit', 'hit', 'getHits', 'hit', 'getHits', 'getHits'],
        [[], [1], [2], [3], [4], [300], [300], [301]],
      ],
      expected: [null, null, null, null, 3, null, 4, 3],
    },
    {
      args: [
        ['HitCounter', 'hit', 'getHits', 'hit', 'getHits'],
        [[], [5], [5], [10], [10]],
      ],
      expected: [null, null, 1, null, 2],
    },
    {
      args: [
        ['HitCounter', 'hit', 'hit', 'hit', 'getHits'],
        [[], [1], [1], [1], [1]],
      ],
      expected: [null, null, null, null, 3],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['HitCounter', 'hit', 'getHits', 'hit', 'hit', 'hit', 'getHits', 'hit', 'getHits'],
        [[], [2], [3], [4], [5], [6], [7], [300], [300]],
      ],
      expected: [null, null, 1, null, null, null, 4, null, 5],
    },
    {
      args: [
        ['HitCounter', 'hit', 'hit', 'getHits', 'hit', 'hit', 'getHits', 'getHits'],
        [[], [1], [300], [300], [301], [600], [600], [601]],
      ],
      expected: [null, null, null, 2, null, null, 2, 1],
    },
  ],
};
