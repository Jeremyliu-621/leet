import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-module',
  title: 'Range Module',
  difficulty: 'hard',
  tags: ['simulation', 'binary-search', 'arrays'],
  description: `A Range Module is a module that tracks ranges of numbers. Design a data structure to track half-open intervals \`[left, right)\` and answer queries about coverage.

Implement the following operations (provided as an array of \`[op, left, right]\` triples):
- \`"addRange"\ left\ right\` — Adds the half-open interval \`[left, right)\`. Any existing covered range intersecting \`[left, right)\` is merged.
- \`"removeRange"\ left\ right\` — Removes the coverage of \`[left, right)\`. Any covered portion in this interval is no longer tracked.
- \`"queryRange"\ left\ right\` — Returns \`true\` if the interval \`[left, right)\` is **fully** covered by tracked ranges, \`false\` otherwise.

Return an array of booleans, one for each \`"queryRange"\` operation in order.`,
  constraints: [
    '`1 <= left < right <= 10^9`',
    'At most `400` calls to operations total',
    'Input is a list of operations `[op, left, right]`',
  ],
  examples: [
    {
      input: 'operations = [["addRange",10,20],["removeRange",14,16],["queryRange",10,14],["queryRange",13,15],["queryRange",16,17]]',
      output: '[true,false,true]',
      explanation: 'Add [10,20). Remove [14,16), leaving [10,14) and [16,20). Query [10,14) → fully covered → true. Query [13,15) → 14 not covered → false. Query [16,17) → fully covered → true.',
    },
    {
      input: 'operations = [["addRange",1,5],["addRange",3,8],["queryRange",1,8],["removeRange",2,6],["queryRange",1,2],["queryRange",6,8]]',
      output: '[true,true,true]',
      explanation: 'Add [1,5) then [3,8) → merged [1,8). Query [1,8) → true. Remove [2,6) → [1,2) and [6,8) remain. Query [1,2) → true. Query [6,8) → true.',
    },
  ],
  hints: [
    'Maintain a sorted list of non-overlapping intervals. For each addRange / removeRange, find overlapping intervals via binary search, merge or split them, then insert the new segment.',
    'For addRange: find all intervals that overlap [left, right), take the union to form one merged interval, then splice them out and insert the merged result.',
    '```js\nfunction rangeModule(operations) {\n  const ranges = [];\n  const results = [];\n  function findStart(x) {\n    let lo = 0, hi = ranges.length;\n    while (lo < hi) {\n      const mid = (lo + hi) >> 1;\n      if (ranges[mid][1] < x) lo = mid + 1; else hi = mid;\n    }\n    return lo;\n  }\n  for (const [op, left, right] of operations) {\n    if (op === "addRange") {\n      let i = findStart(left), j = findStart(right);\n      const newLeft = (i < ranges.length && ranges[i][0] <= left) ? ranges[i][0] : left;\n      const newRight = (j < ranges.length && ranges[j][0] <= right) ? ranges[j][1] : right;\n      ranges.splice(i, j - i + (j < ranges.length && ranges[j][0] <= right ? 1 : 0), [newLeft, newRight]);\n    } else if (op === "removeRange") {\n      let i = findStart(left), j = findStart(right);\n      const toAdd = [];\n      if (i < ranges.length && ranges[i][0] < left) toAdd.push([ranges[i][0], left]);\n      if (j < ranges.length && ranges[j][0] <= right && ranges[j][1] > right) toAdd.push([right, ranges[j][1]]);\n      ranges.splice(i, j - i + (j < ranges.length && ranges[j][0] <= right ? 1 : 0), ...toAdd);\n    } else {\n      const i = findStart(left);\n      results.push(i < ranges.length && ranges[i][0] <= left && ranges[i][1] >= right);\n    }\n  }\n  return results;\n}\n```',
  ],
  functionName: 'rangeModule',
  params: ['operations'],
  starterCode: {
    javascript: `function rangeModule(operations) {

}`,
    typescript: `function rangeModule(operations: [string, number, number][]): boolean[] {

}`,
    python: `def rangeModule(operations: list[list]) -> list[bool]:
    pass`,
  },
  visibleTests: [
    {
      args: [[['addRange', 10, 20], ['removeRange', 14, 16], ['queryRange', 10, 14], ['queryRange', 13, 15], ['queryRange', 16, 17]]],
      expected: [true, false, true],
    },
    {
      args: [[['addRange', 1, 5], ['addRange', 3, 8], ['queryRange', 1, 8], ['removeRange', 2, 6], ['queryRange', 1, 2], ['queryRange', 6, 8]]],
      expected: [true, true, true],
    },
    {
      args: [[['addRange', 1, 100], ['queryRange', 1, 100], ['removeRange', 50, 60], ['queryRange', 1, 100], ['queryRange', 1, 50], ['queryRange', 60, 100]]],
      expected: [true, false, true, true],
    },
  ],
  hiddenTests: [
    {
      args: [[['queryRange', 1, 10]]],
      expected: [false],
    },
    {
      args: [[['addRange', 1, 3], ['addRange', 5, 7], ['queryRange', 1, 7], ['addRange', 3, 5], ['queryRange', 1, 7]]],
      expected: [false, true],
    },
    {
      args: [[['addRange', 10, 20], ['addRange', 20, 30], ['queryRange', 10, 30], ['removeRange', 15, 25], ['queryRange', 10, 15], ['queryRange', 25, 30]]],
      expected: [true, true, true],
    },
    {
      args: [[['addRange', 1, 10], ['removeRange', 1, 10], ['queryRange', 1, 10]]],
      expected: [false],
    },
    {
      args: [[['addRange', 3, 7], ['addRange', 1, 5], ['queryRange', 1, 7], ['removeRange', 4, 6], ['queryRange', 1, 4], ['queryRange', 6, 7]]],
      expected: [true, true, true],
    },
  ],
};
