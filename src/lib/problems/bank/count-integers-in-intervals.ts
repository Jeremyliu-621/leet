import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-integers-in-intervals',
  title: 'Count Integers in Intervals',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Design a data structure to count the number of integers present in at least one interval after a series of interval additions.

Implement the \`CountIntervals\` class:

- \`void add(int left, int right)\` Adds the interval \`[left, right]\` to the set of intervals.
- \`int count()\` Returns the number of **distinct** integers in the range **currently covered** by the union of all added intervals.

Note: An interval \`[left, right]\` covers every integer \`x\` with \`left <= x <= right\`.

For this problem, implement it as a function that accepts a list of operations and returns all \`count()\` results.

The input is an array of operations where each operation is either \`["add", left, right]\` or \`["count"]\`. Return all results from \`count()\` operations.`,
  constraints: [
    '1 <= left <= right <= 10^9',
    'At most 10^5 calls total to add and count',
  ],
  examples: [
    {
      input: 'operations = [["add",2,3],["add",7,10],["count"],["add",5,8],["count"]]',
      output: '[6, 8]',
      explanation:
        'After adds [2,3] and [7,10]: count()=6 (2,3,7,8,9,10). After add [5,8]: union is [2,3],[5,10]; count()=8.',
    },
    {
      input: 'operations = [["add",1,5],["add",3,7],["count"],["add",1,9],["count"]]',
      output: '[7, 9]',
      explanation:
        'After two adds: [1,7]. count()=7. After third add [1,9]: [1,9]. count()=9.',
    },
  ],
  hints: [
    'Level 1: Maintain a sorted list of non-overlapping intervals. When adding a new interval, merge it with any overlapping ones and update the total count.',
    'Level 2: Use a sorted list keyed by interval start. To add [l, r]: find all intervals that overlap [l, r] (interval [s,e] overlaps if e >= l and s <= r), merge them into a single extended interval, and update the total covered count.',
    'Level 3: Binary search for the first interval with end >= left, walk forward merging intervals with start <= right. Track a running `total` updated incrementally: subtract merged interval lengths, add new merged interval length. count() returns total in O(1).',
  ],
  functionName: 'countIntegersInIntervals',
  params: ['operations'],
  starterCode: {
    javascript: `function countIntegersInIntervals(operations) {
  const results = [];
  let total = 0;
  const intervals = []; // sorted by start
  for (const op of operations) {
    if (op[0] === 'count') {
      results.push(total);
    } else {
      let [, l, r] = op;
      let newL = l, newR = r;
      const next = [];
      for (const [s, e] of intervals) {
        if (e < l || s > r) { next.push([s, e]); }
        else { total -= (e - s + 1); newL = Math.min(newL, s); newR = Math.max(newR, e); }
      }
      total += (newR - newL + 1);
      let pos = 0;
      while (pos < next.length && next[pos][0] < newL) pos++;
      next.splice(pos, 0, [newL, newR]);
      intervals.length = 0;
      for (const iv of next) intervals.push(iv);
    }
  }
  return results;
}`,
    typescript: `function countIntegersInIntervals(operations: (["add", number, number] | ["count"])[]): number[] {
  const results: number[] = [];
  let total = 0;
  const intervals: [number, number][] = [];
  for (const op of operations) {
    if (op[0] === 'count') {
      results.push(total);
    } else {
      const [, l, r] = op;
      let newL = l, newR = r;
      const next: [number, number][] = [];
      for (const [s, e] of intervals) {
        if (e < l || s > r) { next.push([s, e]); }
        else { total -= (e - s + 1); newL = Math.min(newL, s); newR = Math.max(newR, e); }
      }
      total += (newR - newL + 1);
      let pos = 0;
      while (pos < next.length && next[pos]![0] < newL) pos++;
      next.splice(pos, 0, [newL, newR]);
      intervals.length = 0;
      for (const iv of next) intervals.push(iv);
    }
  }
  return results;
}`,
    python: `def countIntegersInIntervals(operations):
    if hasattr(operations, 'to_py'): operations = operations.to_py()
    ops = [[x.to_py() if hasattr(x, 'to_py') else x for x in op] for op in operations]
    results = []; total = 0; intervals = []
    for op in ops:
        if op[0] == 'count':
            results.append(total)
        else:
            l, r = int(op[1]), int(op[2])
            new_l, new_r = l, r; nxt = []
            for s, e in intervals:
                if e < l or s > r: nxt.append((s, e))
                else:
                    total -= (e - s + 1); new_l = min(new_l, s); new_r = max(new_r, e)
            total += (new_r - new_l + 1)
            pos = 0
            while pos < len(nxt) and nxt[pos][0] < new_l: pos += 1
            nxt.insert(pos, (new_l, new_r))
            intervals = nxt
    return results`,
  },
  visibleTests: [
    {
      args: [[['add',2,3],['add',7,10],['count'],['add',5,8],['count']]],
      expected: [6, 8],
    },
    {
      args: [[['add',1,5],['add',3,7],['count'],['add',1,9],['count']]],
      expected: [7, 9],
    },
  ],
  hiddenTests: [
    {
      args: [[['count']]],
      expected: [0],
    },
    {
      args: [[['add',1,1],['count']]],
      expected: [1],
    },
    {
      args: [[['add',1,3],['add',5,7],['add',2,6],['count']]],
      expected: [7],
    },
    {
      args: [[['add',1,10],['count'],['add',5,15],['count']]],
      expected: [10, 15],
    },
    {
      args: [[['add',1,5],['add',1,5],['count']]],
      expected: [5],
    },
    {
      args: [[['add',3,5],['add',1,2],['add',7,8],['count']]],
      expected: [7],
    },
  ],
};
