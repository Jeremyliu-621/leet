import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-skyline-problem',
  title: 'The Skyline Problem',
  difficulty: 'hard',
  tags: ['heap', 'arrays'],
  description: `A city's **skyline** is the outer contour of the silhouette formed by all the buildings as viewed from a distance.

Given the locations and heights of all buildings, return the skyline formed by these buildings collectively.

Each building is given as a triplet \`[left, right, height]\` where:
- \`left\` is the x-coordinate of the left edge
- \`right\` is the x-coordinate of the right edge
- \`height\` is the height of the building

The skyline is a list of **key points** \`[x, height]\` that mark every point where the skyline changes height. The last key point always has height 0, representing the ground.

**Rules:**
- A key point is the left endpoint of a horizontal line segment.
- Any ground between buildings has height 0.
- Buildings may overlap.`,
  constraints: [
    '1 <= buildings.length <= 10^4',
    '0 <= left_i < right_i <= 2^31 - 1',
    '1 <= height_i <= 2^31 - 1',
    'buildings is sorted by left_i in non-decreasing order',
  ],
  examples: [
    {
      input: 'buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]',
      output: '[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]',
      explanation: 'Each key point marks where the visible roofline changes height.',
    },
    {
      input: 'buildings = [[0,2,3],[2,5,3]]',
      output: '[[0,3],[5,0]]',
      explanation: 'Two buildings at the same height form a single contiguous skyline segment.',
    },
    {
      input: 'buildings = [[1,2,1],[1,2,2],[1,2,3]]',
      output: '[[1,3],[2,0]]',
      explanation: 'Three overlapping buildings at the same x-range — only the tallest (3) is visible.',
    },
  ],
  hints: [
    'Decompose each building [L, R, H] into two events: a "start" event at x=L with height H, and an "end" event at x=R. Sort all events by x; break ties by putting start events before end events at the same x (and taller starts before shorter ones).',
    'Use a max-heap (or sorted multiset) to track active building heights. For each event: on a start event, add the height. On an end event, remove that height. After processing each event, if the current maximum height differs from the previous skyline height, emit a key point [x, newMax].',
    'JavaScript tip: simulate a max-heap with a sorted array or use a max-heap library. Alternatively, use a difference-array / sweep-line approach collecting all critical x-values, then computing the max active height at each.',
  ],
  functionName: 'getSkyline',
  params: ['buildings'],
  starterCode: {
    javascript: `function getSkyline(buildings) {
  const events = [];
  for (const [l, r, h] of buildings) { events.push([l, -h]); events.push([r, h]); }
  events.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  const freq = new Map([[0, 1]]);
  let prevMax = 0;
  const res = [];
  for (const [x, h] of events) {
    if (h < 0) { freq.set(-h, (freq.get(-h) ?? 0) + 1); }
    else { const c = freq.get(h) - 1; if (c === 0) freq.delete(h); else freq.set(h, c); }
    const curMax = Math.max(...freq.keys());
    if (curMax !== prevMax) { res.push([x, curMax]); prevMax = curMax; }
  }
  return res;
}`,
    typescript: `function getSkyline(buildings: number[][]): number[][] {
  const events: [number, number][] = [];
  for (const b of buildings) { events.push([b[0]!, -b[2]!]); events.push([b[1]!, b[2]!]); }
  events.sort((a, b) => a[0]! !== b[0]! ? a[0]! - b[0]! : a[1]! - b[1]!);
  const freq = new Map([[0, 1]]);
  let prevMax = 0;
  const res: number[][] = [];
  for (const [x, h] of events) {
    if (h < 0) { freq.set(-h, (freq.get(-h) ?? 0) + 1); }
    else { const c = freq.get(h)! - 1; if (c === 0) freq.delete(h); else freq.set(h, c); }
    const curMax = Math.max(...freq.keys());
    if (curMax !== prevMax) { res.push([x, curMax]); prevMax = curMax; }
  }
  return res;
}`,
    python: `def getSkyline(buildings):
    if hasattr(buildings, 'to_py'): buildings = buildings.to_py()
    buildings = [[int(v) for v in (b.to_py() if hasattr(b,'to_py') else b)] for b in buildings]
    events = []
    for l, r, h in buildings: events.append((l, -h)); events.append((r, h))
    events.sort()
    from collections import defaultdict
    freq = defaultdict(int); freq[0] = 1
    prev_max = 0; result = []
    for x, h in events:
        if h < 0: freq[-h] += 1
        else:
            freq[h] -= 1
            if freq[h] == 0: del freq[h]
        cur_max = max(freq.keys())
        if cur_max != prev_max: result.append([x, cur_max]); prev_max = cur_max
    return result`,
  },
  visibleTests: [
    {
      args: [[[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]],
      expected: [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]],
    },
    {
      args: [[[0, 2, 3], [2, 5, 3]]],
      expected: [[0, 3], [5, 0]],
    },
    {
      args: [[[1, 2, 1], [1, 2, 2], [1, 2, 3]]],
      expected: [[1, 3], [2, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 5, 3]]],
      expected: [[0, 3], [5, 0]],
    },
    {
      args: [[[1, 3, 3], [2, 4, 3]]],
      expected: [[1, 3], [4, 0]],
    },
    {
      args: [[[1, 5, 3], [2, 3, 4]]],
      expected: [[1, 3], [2, 4], [3, 3], [5, 0]],
    },
    {
      args: [[[0, 3, 3], [1, 2, 4], [2, 4, 2]]],
      expected: [[0, 3], [1, 4], [2, 3], [3, 2], [4, 0]],
    },
    {
      args: [[[1, 2, 1], [3, 4, 2], [5, 6, 3]]],
      expected: [[1, 1], [2, 0], [3, 2], [4, 0], [5, 3], [6, 0]],
    },
    {
      args: [[[0, 4, 2], [0, 4, 3], [0, 4, 5]]],
      expected: [[0, 5], [4, 0]],
    },
  ],
};
