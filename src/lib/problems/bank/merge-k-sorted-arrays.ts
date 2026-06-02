import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-k-sorted-arrays',
  title: 'Merge K Sorted Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given \`k\` sorted integer arrays. Merge them all into one **sorted** array and return it.

Each individual array is already sorted in non-decreasing order.`,
  constraints: [
    '1 <= k <= 500',
    '0 <= arrays[i].length <= 500',
    '-10^4 <= arrays[i][j] <= 10^4',
    'Total number of elements across all arrays <= 10^4',
  ],
  examples: [
    {
      input: 'arrays = [[1,4,7],[2,5,8],[3,6,9]]',
      output: '[1,2,3,4,5,6,7,8,9]',
      explanation: 'Interleave elements from all three sorted arrays.',
    },
    {
      input: 'arrays = [[1,2,3],[4,5,6]]',
      output: '[1,2,3,4,5,6]',
      explanation: 'The two arrays are already in order relative to each other.',
    },
    {
      input: 'arrays = [[]]',
      output: '[]',
      explanation: 'Empty array yields empty output.',
    },
  ],
  hints: [
    'Use a min-heap that stores triples of `(value, arrayIndex, elementIndex)`. Initialize by pushing the first element of each non-empty array.',
    'Repeatedly extract the minimum element from the heap, add it to the result, then push the next element from the same array (if any remains).',
    'This runs in O(n log k) time where n is the total number of elements, since each element is pushed/popped from the heap exactly once.',
  ],
  functionName: 'mergeKSortedArrays',
  params: ['arrays'],
  starterCode: {
    javascript: `function mergeKSortedArrays(arrays) {
  // Min-heap simulation using sorted insertion; for n<=10^4, flatten+sort is O(N log N) and clear
  // For a proper heap approach with O(N log k):
  const result = [];
  // Priority queue: [value, arrayIdx, elemIdx]
  const heap = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) heap.push([arrays[i][0], i, 0]);
  }
  // Heapify (min-heap by value)
  const siftUp = (idx) => {
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (heap[parent][0] > heap[idx][0]) {
        [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
        idx = parent;
      } else break;
    }
  };
  const siftDown = (idx) => {
    const n = heap.length;
    while (true) {
      let smallest = idx;
      const l = 2 * idx + 1, r = 2 * idx + 2;
      if (l < n && heap[l][0] < heap[smallest][0]) smallest = l;
      if (r < n && heap[r][0] < heap[smallest][0]) smallest = r;
      if (smallest === idx) break;
      [heap[smallest], heap[idx]] = [heap[idx], heap[smallest]];
      idx = smallest;
    }
  };
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) siftDown(i);
  while (heap.length > 0) {
    const [val, ai, ei] = heap[0];
    result.push(val);
    if (ei + 1 < arrays[ai].length) {
      heap[0] = [arrays[ai][ei + 1], ai, ei + 1];
      siftDown(0);
    } else {
      heap[0] = heap[heap.length - 1];
      heap.pop();
      if (heap.length > 0) siftDown(0);
    }
  }
  return result;
}`,
    typescript: `function mergeKSortedArrays(arrays: number[][]): number[] {
  const result: number[] = [];
  // heap: [value, arrayIdx, elemIdx]
  const heap: [number, number, number][] = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i]!.length > 0) heap.push([arrays[i]![0]!, i, 0]);
  }
  const siftDown = (idx: number): void => {
    const n = heap.length;
    while (true) {
      let smallest = idx;
      const l = 2 * idx + 1, r = 2 * idx + 2;
      if (l < n && heap[l]![0]! < heap[smallest]![0]!) smallest = l;
      if (r < n && heap[r]![0]! < heap[smallest]![0]!) smallest = r;
      if (smallest === idx) break;
      const tmp = heap[smallest]!;
      heap[smallest] = heap[idx]!;
      heap[idx] = tmp;
      idx = smallest;
    }
  };
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) siftDown(i);
  while (heap.length > 0) {
    const [val, ai, ei] = heap[0]!;
    result.push(val);
    if (ei + 1 < arrays[ai]!.length) {
      heap[0] = [arrays[ai]![ei + 1]!, ai, ei + 1];
      siftDown(0);
    } else {
      const last = heap.pop()!;
      if (heap.length > 0) { heap[0] = last; siftDown(0); }
    }
  }
  return result;
}`,
    python: `def mergeKSortedArrays(arrays: list[list[int]]) -> list[int]:
    import heapq
    heap: list[tuple[int, int, int]] = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result: list[int] = []
    while heap:
        val, ai, ei = heapq.heappop(heap)
        result.append(val)
        if ei + 1 < len(arrays[ai]):
            heapq.heappush(heap, (arrays[ai][ei + 1], ai, ei + 1))
    return result`,
  },
  visibleTests: [
    { args: [[[1,4,7],[2,5,8],[3,6,9]]], expected: [1,2,3,4,5,6,7,8,9] },
    { args: [[[1,2,3],[4,5,6]]], expected: [1,2,3,4,5,6] },
    { args: [[[]]], expected: [] },
    { args: [[[1],[2],[3]]], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[[1,3,5],[2,4,6],[0,7,8]]], expected: [0,1,2,3,4,5,6,7,8] },
    { args: [[[],[1,2]]], expected: [1,2] },
    { args: [[[5],[1],[3],[2],[4]]], expected: [1,2,3,4,5] },
    { args: [[[1,1,1],[1,1]]], expected: [1,1,1,1,1] },
    { args: [[[1,2],[3,4],[5,6],[7,8]]], expected: [1,2,3,4,5,6,7,8] },
  ],
};
