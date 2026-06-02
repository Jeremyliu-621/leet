import type { Problem } from '../types';

export const problem: Problem = {
  id: 'meeting-rooms-iii',
  title: 'Meeting Rooms III',
  difficulty: 'hard',
  tags: ['heap', 'arrays'],
  description: `You are given an integer \`n\` representing the number of meeting rooms (numbered \`0\` to \`n-1\`) and a 2D array \`meetings\` where \`meetings[i] = [start_i, end_i]\`.

All meetings must be held. Assign each meeting to the **lowest-numbered available** room. If no room is free, delay the meeting until the earliest room becomes free (the meeting duration stays the same). Return the room that held the **most meetings**. Ties broken by the lowest room number.`,
  constraints: [
    '`1 <= n <= 100`',
    '`1 <= meetings.length <= 10^5`',
    '`0 <= start_i < end_i <= 5 * 10^5`',
    'All values of `start_i` are unique',
  ],
  examples: [
    {
      input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]',
      output: '0',
      explanation: 'Room 0 gets [0,10], [3,4] delayed to [10,11] (room 0 earliest free). Room 1 gets [1,5],[2,7]. Counts: room0=2, room1=2 → tie → return 0.',
    },
    {
      input: 'n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]',
      output: '1',
      explanation: 'Room 1 hosts 2 meetings; rooms 0 and 2 host 1 each.',
    },
  ],
  hints: [
    'Sort meetings by start time. Use two min-heaps: one for available room indices, one for busy rooms as (end_time, room_index).',
    'For each meeting: first free all rooms whose end_time <= start into the available heap. If rooms are available, pop the smallest-index room. Otherwise pop the earliest-finishing busy room and delay the meeting.',
    'Track meeting counts per room and return the room index with the maximum count (break ties by index).',
  ],
  functionName: 'mostBooked',
  params: ['n', 'meetings'],
  starterCode: {
    javascript: `function mostBooked(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  const counts = new Array(n).fill(0);
  const avail = Array.from({length: n}, (_, i) => i);
  const busy = []; // [endTime, roomIdx], sorted
  const insertBusy = (end, room) => {
    let p = 0;
    while (p < busy.length && (busy[p][0] < end || (busy[p][0] === end && busy[p][1] < room))) p++;
    busy.splice(p, 0, [end, room]);
  };
  const insertAvail = (room) => {
    let p = 0;
    while (p < avail.length && avail[p] < room) p++;
    avail.splice(p, 0, room);
  };
  for (const [start, end] of meetings) {
    let f = 0;
    while (f < busy.length && busy[f][0] <= start) f++;
    busy.splice(0, f).map(([, r]) => r).sort((a, b) => a - b).forEach(insertAvail);
    if (avail.length) {
      const room = avail.shift();
      counts[room]++;
      insertBusy(end, room);
    } else {
      const [earliest, room] = busy.shift();
      counts[room]++;
      insertBusy(earliest + (end - start), room);
    }
  }
  let best = 0;
  for (let i = 1; i < n; i++) if (counts[i] > counts[best]) best = i;
  return best;
}`,
    typescript: `function mostBooked(n: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0]! - b[0]!);
  const counts = new Array<number>(n).fill(0);
  const avail: number[] = Array.from({length: n}, (_, i) => i);
  const busy: [number, number][] = [];
  const insertBusy = (end: number, room: number) => {
    let p = 0;
    while (p < busy.length && (busy[p]![0]! < end || (busy[p]![0]! === end && busy[p]![1]! < room))) p++;
    busy.splice(p, 0, [end, room]);
  };
  const insertAvail = (room: number) => {
    let p = 0;
    while (p < avail.length && avail[p]! < room) p++;
    avail.splice(p, 0, room);
  };
  for (const m of meetings) {
    const start = m[0]!, end = m[1]!;
    let f = 0;
    while (f < busy.length && busy[f]![0]! <= start) f++;
    busy.splice(0, f).map(([, r]) => r!).sort((a, b) => a - b).forEach(insertAvail);
    if (avail.length) {
      const room = avail.shift()!;
      counts[room]!++;
      insertBusy(end, room);
    } else {
      const [earliest, room] = busy.shift()!;
      counts[room!]!++;
      insertBusy(earliest! + (end - start), room!);
    }
  }
  let best = 0;
  for (let i = 1; i < n; i++) if (counts[i]! > counts[best]!) best = i;
  return best;
}`,
    python: `def mostBooked(n, meetings):
    if hasattr(meetings, 'to_py'): meetings = [[int(x) for x in (m.to_py() if hasattr(m, 'to_py') else m)] for m in meetings.to_py()]
    import heapq
    meetings.sort()
    counts = [0] * n
    avail = list(range(n))
    heapq.heapify(avail)
    busy = []  # (end_time, room_idx)
    for start, end in meetings:
        while busy and busy[0][0] <= start:
            _, room = heapq.heappop(busy)
            heapq.heappush(avail, room)
        if avail:
            room = heapq.heappop(avail)
            counts[room] += 1
            heapq.heappush(busy, (end, room))
        else:
            earliest, room = heapq.heappop(busy)
            counts[room] += 1
            heapq.heappush(busy, (earliest + end - start, room))
    return counts.index(max(counts))`,
  },
  visibleTests: [
    { args: [2, [[0,10],[1,5],[2,7],[3,4]]], expected: 0 },
    { args: [3, [[1,20],[2,10],[3,5],[4,9],[6,8]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [[0,10],[10,20],[20,30]]], expected: 0 },
    { args: [2, [[0,10],[0,20]]], expected: 0 },
    { args: [2, [[0,10],[1,20],[2,30]]], expected: 0 },
    { args: [3, [[0,5],[1,2],[2,8]]], expected: 1 },
  ],
};
