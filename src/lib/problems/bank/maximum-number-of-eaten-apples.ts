import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-eaten-apples',
  title: 'Maximum Number of Eaten Apples',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `There is a special kind of apple tree that grows apples every day for \`n\` days.

On the \`i\`-th day (0-indexed), the tree grows \`apples[i]\` apples that will rot after \`days[i]\` days, i.e., on day \`i + days[i]\` the apples will be rotten and cannot be eaten. On some days the apple tree does not grow any apples, which are denoted by \`apples[i] == 0\` and \`days[i] == 0\`.

You decided to eat **at most** one apple a day (on any of the \`n\` days or after). Note that you will keep eating after the first \`n\` days.

Given two integer arrays \`days\` and \`apples\` of length \`n\`, return the **maximum** number of apples you can eat.`,
  constraints: [
    '1 <= n <= 2 * 10^4',
    '0 <= apples[i], days[i] <= 2 * 10^4',
    'apples[i] > 0 implies days[i] > 0',
  ],
  examples: [
    {
      input: 'apples = [1,2,3,5,2], days = [3,2,1,4,2]',
      output: '7',
      explanation:
        'You can eat 7 apples: day 0 (1 apple, expires day 3), day 1 (1 of 2, expires day 3), day 2 (1 of 3, expires day 3 — but use those expiring day 3 first), day 3 (1 of 5, expires day 7), day 4 (1 of 5), day 5 (1 of 5), day 6 (1 of 5).',
    },
    {
      input: 'apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]',
      output: '5',
      explanation: 'Eat one of the 3 apples each on days 0, 1, 2. Then eat one of the 2 apples on days 5 and 6.',
    },
  ],
  hints: [
    'On each day, you want to eat the apple batch that expires soonest — greedy by expiration date.',
    'Use a min-heap keyed by expiration day. Push [expirationDay, count] on day i if apples[i] > 0. Pop expired batches before eating.',
    'After day n-1, the tree stops growing but you can keep eating from remaining valid batches.',
  ],
  functionName: 'eatenApples',
  params: ['apples', 'days'],
  starterCode: {
    javascript: `function eatenApples(apples, days) {
  const n = apples.length;
  const heap = []; // min-heap [expirationDay, count]
  const siftUp = i => { while (i > 0) { const p = (i-1)>>1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const siftDown = i => { while (true) { const l=2*i+1, r=2*i+2; let m=i; if (l<heap.length && heap[l][0]<heap[m][0]) m=l; if (r<heap.length && heap[r][0]<heap[m][0]) m=r; if (m===i) break; [heap[i], heap[m]] = [heap[m], heap[i]]; i=m; } };
  let ans = 0;
  for (let day = 0; day < n || heap.length > 0; day++) {
    if (day < n && apples[day] > 0) { heap.push([day + days[day], apples[day]]); siftUp(heap.length - 1); }
    while (heap.length > 0 && heap[0][0] <= day) { heap[0] = heap.pop(); if (heap.length > 0) siftDown(0); }
    if (heap.length > 0) { ans++; heap[0][1]--; if (heap[0][1] === 0) { heap[0] = heap.pop(); if (heap.length > 0) siftDown(0); } }
  }
  return ans;
}`,
    typescript: `function eatenApples(apples: number[], days: number[]): number {
  const n = apples.length;
  const heap: [number, number][] = [];
  const siftUp = (i: number) => { while (i > 0) { const p = (i-1)>>1; if (heap[p]![0] <= heap[i]![0]) break; [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p; } };
  const siftDown = (i: number) => { while (true) { const l=2*i+1, r=2*i+2; let m=i; if (l<heap.length && heap[l]![0]<heap[m]![0]) m=l; if (r<heap.length && heap[r]![0]<heap[m]![0]) m=r; if (m===i) break; [heap[i], heap[m]] = [heap[m]!, heap[i]!]; i=m; } };
  let ans = 0;
  for (let day = 0; day < n || heap.length > 0; day++) {
    if (day < n && apples[day]! > 0) { heap.push([day + days[day]!, apples[day]!]); siftUp(heap.length - 1); }
    while (heap.length > 0 && heap[0]![0] <= day) { heap[0] = heap.pop()!; if (heap.length > 0) siftDown(0); }
    if (heap.length > 0) { ans++; heap[0]![1]--; if (heap[0]![1] === 0) { heap[0] = heap.pop()!; if (heap.length > 0) siftDown(0); } }
  }
  return ans;
}`,
    python: `def eatenApples(apples, days):
    if hasattr(apples, 'to_py'): apples = list(apples.to_py())
    if hasattr(days, 'to_py'): days = list(days.to_py())
    import heapq
    n = len(apples)
    heap = []  # (expiration_day, count)
    ans = 0
    day = 0
    while day < n or heap:
        if day < n and apples[day] > 0:
            heapq.heappush(heap, (day + days[day], apples[day]))
        while heap and heap[0][0] <= day:
            heapq.heappop(heap)
        if heap:
            ans += 1
            exp, cnt = heapq.heappop(heap)
            if cnt > 1: heapq.heappush(heap, (exp, cnt - 1))
        day += 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 5, 2], [3, 2, 1, 4, 2]], expected: 7 },
    { args: [[3, 0, 0, 0, 0, 2], [3, 0, 0, 0, 0, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[2, 1, 1, 1, 1], [5, 2, 3, 3, 2]], expected: 6 },
    { args: [[0], [0]], expected: 0 },
    { args: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], expected: 5 },
    { args: [[5, 0, 0, 0, 0], [5, 0, 0, 0, 0]], expected: 5 },
    { args: [[1, 2], [2, 1]], expected: 2 },
  ],
};
