import type { Problem } from '../types';

export const problem: Problem = {
  id: 'closest-room',
  title: 'Closest Room',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `There is a hotel with \`n\` rooms. The rooms are represented by a 2D integer array \`rooms\` where \`rooms[i] = [roomId_i, size_i]\` denotes that there is a room with room number \`roomId_i\` and size equal to \`size_i\`. Each \`roomId_i\` is guaranteed to be **unique**.

You are also given \`k\` queries in a 2D array \`queries\` where \`queries[j] = [preferred_j, minSize_j]\`. The answer to the \`j\`th query is the room number \`id\` of a room such that:

- The room has a size of **at least** \`minSize_j\`, and
- \`|id - preferred_j|\` is **minimized**, breaking ties by choosing the **smaller** id.

If there is no such room, the answer is \`-1\`.

Return an array \`answer\` of length \`k\` where \`answer[j]\` contains the answer to the \`j\`th query.`,
  constraints: [
    'n == rooms.length',
    '1 <= n <= 10^5',
    'k == queries.length',
    '1 <= k <= 10^4',
    '1 <= roomId_i, preferred_j <= 10^7',
    '1 <= size_i, minSize_j <= 10^7',
  ],
  examples: [
    {
      input: 'rooms = [[2,2],[1,2],[3,2]], queries = [[3,1],[3,3],[5,2]]',
      output: '[3,-1,3]',
      explanation: 'Query [3,1]: rooms with size≥1 include all; closest id to 3 is 3. Query [3,3]: no room with size≥3. Query [5,2]: closest id to 5 with size≥2 is 3.',
    },
    {
      input: 'rooms = [[1,4],[2,3],[3,5],[4,1],[5,2]], queries = [[2,3],[2,4],[2,5]]',
      output: '[2,1,3]',
      explanation: 'Query [2,3]: rooms {1,2,3} qualify; closest to 2 is 2. Query [2,4]: rooms {1,3} qualify; 1 and 3 both |d|=1, choose smaller: 1. Query [2,5]: only room 3; answer 3.',
    },
    {
      input: 'rooms = [[1,1]], queries = [[1,2]]',
      output: '[-1]',
      explanation: 'No room has size ≥ 2.',
    },
  ],
  hints: [
    'Level 1: Process queries offline. Sort rooms and queries by size in descending order.',
    'Level 2: For each query (processed in decreasing minSize order), add all rooms with size ≥ minSize to a sorted set of ids. Then binary-search the set for the closest id to preferred.',
    'Level 3: The sorted set can be maintained as a sorted array. On tie (equal |distance|), pick the smaller id. Return results at original query indices.',
  ],
  functionName: 'closestRoom',
  params: ['rooms', 'queries'],
  starterCode: {
    javascript: `function closestRoom(rooms, queries) {
  rooms.sort((a, b) => b[1] - a[1]);
  const sortedQ = queries.map((q, i) => [...q, i]).sort((a, b) => b[1] - a[1]);
  const ans = new Array(queries.length).fill(-1);
  const ids = [];
  const bisect = (id) => {
    let lo = 0, hi = ids.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (ids[mid] < id) lo = mid + 1; else hi = mid; }
    return lo;
  };
  let ri = 0;
  for (const [pref, minSize, qi] of sortedQ) {
    while (ri < rooms.length && rooms[ri][1] >= minSize) {
      const pos = bisect(rooms[ri][0]);
      ids.splice(pos, 0, rooms[ri][0]);
      ri++;
    }
    if (!ids.length) continue;
    const lo = bisect(pref);
    let best = -1;
    if (lo < ids.length) best = ids[lo];
    if (lo > 0) {
      const cand = ids[lo - 1];
      if (best === -1 || Math.abs(cand - pref) <= Math.abs(best - pref)) best = cand;
    }
    ans[qi] = best;
  }
  return ans;
}`,
    typescript: `function closestRoom(rooms: number[][], queries: number[][]): number[] {
  rooms.sort((a, b) => b[1]! - a[1]!);
  const sortedQ = queries.map((q, i) => [...q, i]).sort((a, b) => b[1]! - a[1]!);
  const ans = new Array<number>(queries.length).fill(-1);
  const ids: number[] = [];
  const bisect = (id: number) => {
    let lo = 0, hi = ids.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (ids[mid]! < id) lo = mid + 1; else hi = mid; }
    return lo;
  };
  let ri = 0;
  for (const [pref, minSize, qi] of sortedQ) {
    while (ri < rooms.length && rooms[ri]![1]! >= minSize!) {
      const pos = bisect(rooms[ri]![0]!);
      ids.splice(pos, 0, rooms[ri]![0]!);
      ri++;
    }
    if (!ids.length) continue;
    const lo = bisect(pref!);
    let best = -1;
    if (lo < ids.length) best = ids[lo]!;
    if (lo > 0) {
      const cand = ids[lo - 1]!;
      if (best === -1 || Math.abs(cand - pref!) <= Math.abs(best - pref!)) best = cand;
    }
    ans[qi!] = best;
  }
  return ans;
}`,
    python: `def closestRoom(rooms, queries):
    import bisect
    rooms = [list(r) for r in rooms]
    queries = [list(q) for q in queries]
    rooms.sort(key=lambda x: -x[1])
    sorted_q = sorted(enumerate(queries), key=lambda x: -x[1][1])
    ans = [-1] * len(queries)
    ids = []
    ri = 0
    for qi, (pref, min_size) in sorted_q:
        while ri < len(rooms) and rooms[ri][1] >= min_size:
            bisect.insort(ids, rooms[ri][0])
            ri += 1
        if not ids:
            continue
        lo = bisect.bisect_left(ids, pref)
        best = -1
        if lo < len(ids):
            best = ids[lo]
        if lo > 0:
            cand = ids[lo - 1]
            if best == -1 or abs(cand - pref) <= abs(best - pref):
                best = cand
        ans[qi] = best
    return ans`,
  },
  visibleTests: [
    { args: [[[2, 2], [1, 2], [3, 2]], [[3, 1], [3, 3], [5, 2]]], expected: [3, -1, 3] },
    { args: [[[1, 4], [2, 3], [3, 5], [4, 1], [5, 2]], [[2, 3], [2, 4], [2, 5]]], expected: [2, 1, 3] },
    { args: [[[1, 1]], [[1, 2]]], expected: [-1] },
  ],
  hiddenTests: [
    { args: [[[1, 10], [2, 5], [3, 1]], [[1, 1], [2, 5], [3, 10]]], expected: [1, 2, 1] },
    { args: [[[10, 10], [5, 5]], [[7, 8]]], expected: [10] },
    { args: [[[1, 5], [2, 3], [3, 2], [4, 1]], [[3, 3], [2, 1]]], expected: [2, 2] },
    { args: [[[2, 5], [1, 3], [3, 4]], [[3, 5]]], expected: [2] },
    { args: [[[1, 1]], [[1, 1]]], expected: [1] },
  ],
};
