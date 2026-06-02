import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-events-can-attend',
  title: 'Maximum Number of Events That Can Be Attended',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given an array of \`events\` where \`events[i] = [startDay_i, endDay_i]\`. Every event \`i\` starts at \`startDay_i\` and ends at \`endDay_i\`.

You can attend an event \`i\` at any day \`d\` where \`startDay_i <= d <= endDay_i\`. You can only attend **one** event per day.

Return the **maximum** number of events you can attend.`,
  constraints: [
    '1 <= events.length <= 10^5',
    'events[i].length == 2',
    '1 <= startDay_i <= endDay_i <= 10^5',
  ],
  examples: [
    {
      input: 'events = [[1,2],[2,3],[3,4]]',
      output: '3',
      explanation: 'Attend all 3 events: event 1 on day 1, event 2 on day 2, event 3 on day 3.',
    },
    {
      input: 'events = [[1,2],[2,3],[3,4],[1,2]]',
      output: '4',
    },
  ],
  hints: [
    'Level 1: Greedy approach: always attend the event with the earliest deadline. Sort events by start day. Use a min-heap keyed by end day to track available events for the current day.',
    'Level 2: Advance a day counter. Add events that have started to the heap. Remove expired events. Attend (pop) the event with the smallest end day. Increment the answer.',
    'Level 3: Sort events by start. Simulate days: use a min-heap of end days. Each day, enqueue all events starting that day, dequeue expired ones, attend the one ending soonest.',
  ],
  functionName: 'maxEvents',
  params: ['events'],
  starterCode: {
    javascript: `function maxEvents(events) {
  events.sort((a, b) => a[0] - b[0]);
  const h = [];
  function push(v) { h.push(v); let i = h.length - 1; while (i > 0) { const p = (i-1)>>1; if (h[p] <= h[i]) break; [h[p],h[i]]=[h[i],h[p]]; i=p; } }
  function pop() { const t=h[0], l=h.pop(); if (h.length) { h[0]=l; let i=0; while(true){const a=2*i+1,b=2*i+2;let m=i;if(a<h.length&&h[a]<h[m])m=a;if(b<h.length&&h[b]<h[m])m=b;if(m===i)break;[h[m],h[i]]=[h[i],h[m]];i=m;} } return t; }
  const maxDay = Math.max(...events.map(e => e[1]));
  let ei = 0, count = 0;
  for (let d = 1; d <= maxDay && (ei < events.length || h.length); d++) {
    while (ei < events.length && events[ei][0] <= d) push(events[ei++][1]);
    while (h.length && h[0] < d) pop();
    if (h.length) { pop(); count++; }
  }
  return count;
}`,
    typescript: `function maxEvents(events: number[][]): number {
  events.sort((a, b) => a[0]! - b[0]!);
  const h: number[] = [];
  function push(v: number) { h.push(v); let i = h.length-1; while(i>0){const p=(i-1)>>1;if(h[p]!<=h[i]!)break;[h[p],h[i]]=[h[i]!,h[p]!];i=p;} }
  function pop(): number { const t=h[0]!,l=h.pop()!; if(h.length){h[0]=l;let i=0;while(true){const a=2*i+1,b=2*i+2;let m=i;if(a<h.length&&h[a]!<h[m]!)m=a;if(b<h.length&&h[b]!<h[m]!)m=b;if(m===i)break;[h[m],h[i]]=[h[i]!,h[m]!];i=m;}}return t;}
  const maxDay = Math.max(...events.map(e => e[1]!));
  let ei = 0, count = 0;
  for (let d = 1; d <= maxDay && (ei < events.length || h.length); d++) {
    while (ei < events.length && events[ei]![0]! <= d) push(events[ei++]![1]!);
    while (h.length && h[0]! < d) pop();
    if (h.length) { pop(); count++; }
  }
  return count;
}`,
    python: `def maxEvents(events):
    if hasattr(events, 'to_py'): events = events.to_py()
    events = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in events]
    import heapq
    events.sort()
    n = len(events)
    max_day = max(e[1] for e in events)
    heap = []
    ei = count = 0
    for d in range(1, max_day + 1):
        if ei >= n and not heap: break
        while ei < n and events[ei][0] <= d: heapq.heappush(heap, events[ei][1]); ei += 1
        while heap and heap[0] < d: heapq.heappop(heap)
        if heap: heapq.heappop(heap); count += 1
    return count`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: 3 },
    { args: [[[1, 2], [2, 3], [3, 4], [1, 2]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]], expected: 5 },
    { args: [[[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]]], expected: 4 },
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, 5], [1, 5], [1, 5], [2, 3], [2, 3]]], expected: 5 },
  ],
};
