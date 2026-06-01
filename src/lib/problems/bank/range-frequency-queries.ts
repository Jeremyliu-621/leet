import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-frequency-queries',
  title: 'Range Frequency Queries',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'binary-search', 'design'],
  description: `Design a data structure to find the **frequency** of a given value in a given subarray.

The **frequency** of a value in a subarray is the number of occurrences of that value in the subarray.

Implement the \`RangeFreqQuery\` class:
- \`RangeFreqQuery(int[] arr)\` Constructs an instance of the class with the given array \`arr\`.
- \`int query(int left, int right, int value)\` Returns the **frequency** of \`value\` in the subarray \`arr[left...right]\`.

A **subarray** is a contiguous sequence of elements within an array. \`arr[left...right]\` denotes the subarray that contains the elements of \`nums\` between indices \`left\` and \`right\` (**inclusive**).`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i], value <= 10^4',
    '0 <= left <= right < arr.length',
    'At most 10^5 calls will be made to query',
  ],
  examples: [
    {
      input: 'arr = [12,33,4,56,22,2,34,33,22,12,34,56], queries = [[1,2,4],[0,11,33]]',
      output: '[1,2]',
      explanation: 'query(1,2,4): arr[1..2]=[33,4], value 4 appears 1 time. query(0,11,33): 33 appears at indices 1 and 7, so 2 times.',
    },
  ],
  hints: [
    'For each distinct value, store the sorted list of indices where it appears in the array.',
    'To count occurrences in arr[left..right], use binary search on that value\'s index list.',
    'Count positions < left (lower bound) and positions <= right (upper bound) using binary search.',
    'The frequency = upperBound(right) - lowerBound(left).',
  ],
  functionName: 'RangeFreqQueryFn',
  params: ['arr', 'queries'],
  preamble: {
    javascript: `function RangeFreqQueryFn(arr, queries) {
  const obj = new RangeFreqQuery(arr);
  return queries.map(([left, right, value]) => obj.query(left, right, value));
}`,
    typescript: `function RangeFreqQueryFn(arr: number[], queries: number[][]): number[] {
  const obj = new RangeFreqQuery(arr);
  return queries.map(([left, right, value]) => obj.query(left!, right!, value!));
}`,
    python: `def RangeFreqQueryFn(arr, queries):
    obj = RangeFreqQuery(arr)
    return [obj.query(l, r, v) for l, r, v in queries]`,
  },
  starterCode: {
    javascript: `/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.index = {};
  for (let i = 0; i < arr.length; i++) {
    if (!this.index[arr[i]]) this.index[arr[i]] = [];
    this.index[arr[i]].push(i);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  const positions = this.index[value];
  if (!positions) return 0;
  // Binary search: count positions in [left, right]
  let lo = 0, hi = positions.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (positions[mid] < left) lo = mid + 1;
    else hi = mid;
  }
  const start = lo;
  lo = 0; hi = positions.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (positions[mid] <= right) lo = mid + 1;
    else hi = mid;
  }
  return lo - start;
};`,
    typescript: `class RangeFreqQuery {
  private index: Record<number, number[]> = {};

  constructor(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i]!;
      if (!this.index[v]) this.index[v] = [];
      this.index[v]!.push(i);
    }
  }

  query(left: number, right: number, value: number): number {
    const positions = this.index[value];
    if (!positions) return 0;
    let lo = 0, hi = positions.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (positions[mid]! < left) lo = mid + 1;
      else hi = mid;
    }
    const start = lo;
    lo = 0; hi = positions.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (positions[mid]! <= right) lo = mid + 1;
      else hi = mid;
    }
    return lo - start;
  }
}`,
    python: `class RangeFreqQuery:
    def __init__(self, arr):
        from collections import defaultdict
        import bisect
        self.index = defaultdict(list)
        for i, v in enumerate(arr):
            self.index[v].append(i)
        self._bisect = bisect

    def query(self, left, right, value):
        positions = self.index[value]
        if not positions:
            return 0
        l = self._bisect.bisect_left(positions, left)
        r = self._bisect.bisect_right(positions, right)
        return r - l`,
  },
  visibleTests: [
    {
      args: [[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56], [[1, 2, 4], [0, 11, 33]]],
      expected: [1, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[1, 1, 1, 1], [[0, 3, 1], [0, 0, 1], [1, 2, 1]]],
      expected: [4, 1, 2],
    },
    {
      args: [[5, 5, 5], [[0, 2, 5], [0, 1, 5]]],
      expected: [3, 2],
    },
    {
      args: [[1, 2, 3], [[0, 2, 4]]],
      expected: [0],
    },
    {
      args: [[1, 2, 1, 2, 1], [[0, 4, 1], [1, 3, 2], [0, 0, 1]]],
      expected: [3, 2, 1],
    },
  ],
};
