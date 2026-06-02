import type { Problem } from '../types';

export const problem: Problem = {
  id: 'seat-reservation-manager',
  title: 'Seat Reservation Manager',
  difficulty: 'medium',
  tags: ['heap'],
  description: `Design a system that manages the reservation state of \`n\` seats numbered \`1\` to \`n\`.

Implement a seat reservation manager that supports two operations:
- **reserve()**: Returns the smallest-numbered available seat and marks it as reserved.
- **unreserve(seatNumber)**: Cancels the reservation of the seat numbered \`seatNumber\` and makes it available again.

Given \`n\` seats and a sequence of operations, return the result for each \`reserve\` call.

**Note:** The first call will always have at least one free seat.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= seatNumber <= n',
    'For each unreserve call, it is guaranteed that seatNumber is reserved.',
    '1 <= operations.length <= 10^5',
  ],
  examples: [
    {
      input: 'n = 5, operations = ["reserve","reserve","unreserve","reserve","reserve"], operandArgs = [null,null,2,null,null]',
      output: '[1,2,2,3]',
      explanation: 'reserve→1, reserve→2, unreserve(2), reserve→2 (now smallest), reserve→3.',
    },
    {
      input: 'n = 3, operations = ["reserve","reserve","reserve","unreserve","reserve"], operandArgs = [null,null,null,1,null]',
      output: '[1,2,3,1]',
      explanation: 'Fill all 3 seats, free seat 1, reserve returns 1.',
    },
  ],
  hints: [
    'Use a min-heap (priority queue) that initially contains all seats 1..n.',
    '`reserve()` pops the minimum from the heap.',
    '`unreserve(x)` pushes x back onto the heap.',
    'In JavaScript, simulate a min-heap with a sorted array or use a binary heap implementation.',
  ],
  functionName: 'seatReservationManager',
  params: ['n', 'operations', 'operandArgs'],
  starterCode: {
    javascript: `function seatReservationManager(n, operations, operandArgs) {
  const heap = Array.from({length: n}, (_, i) => i + 1);
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] > heap[i]) { const t = heap[p]; heap[p] = heap[i]; heap[i] = t; i = p; }
      else break;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2*i+1, r = 2*i+2;
        let s = i;
        if (l < heap.length && heap[l] < heap[s]) s = l;
        if (r < heap.length && heap[r] < heap[s]) s = r;
        if (s !== i) { const t = heap[s]; heap[s] = heap[i]; heap[i] = t; i = s; } else break;
      }
    }
    return top;
  };
  const result = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'reserve') result.push(pop());
    else push(operandArgs[i]);
  }
  return result;
}`,
    typescript: `function seatReservationManager(n: number, operations: string[], operandArgs: (null | number)[]): number[] {
  const heap: number[] = Array.from({length: n}, (_, i) => i + 1);
  const push = (x: number) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p]! > heap[i]!) { const t = heap[p]!; heap[p] = heap[i]!; heap[i] = t; i = p; }
      else break;
    }
  };
  const pop = (): number => {
    const top = heap[0]!;
    const last = heap.pop()!;
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2*i+1, r = 2*i+2;
        let s = i;
        if (l < heap.length && heap[l]! < heap[s]!) s = l;
        if (r < heap.length && heap[r]! < heap[s]!) s = r;
        if (s !== i) { const t = heap[s]!; heap[s] = heap[i]!; heap[i] = t; i = s; } else break;
      }
    }
    return top;
  };
  const result: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'reserve') result.push(pop());
    else push(operandArgs[i] as number);
  }
  return result;
}`,
    python: `def seatReservationManager(n, operations, operandArgs):
    import heapq
    heap = list(range(1, n + 1))
    result = []
    for op, arg in zip(operations, operandArgs):
        if op == 'reserve':
            result.append(heapq.heappop(heap))
        else:
            heapq.heappush(heap, int(arg))
    return result
`,
  },
  visibleTests: [
    { args: [5, ['reserve','reserve','unreserve','reserve','reserve'], [null,null,2,null,null]], expected: [1,2,2,3] },
    { args: [3, ['reserve','reserve','reserve','unreserve','reserve'], [null,null,null,1,null]], expected: [1,2,3,1] },
  ],
  hiddenTests: [
    { args: [1, ['reserve','unreserve','reserve'], [null,1,null]], expected: [1,1] },
    { args: [5, ['reserve','reserve','reserve','unreserve','unreserve','reserve','reserve'], [null,null,null,3,1,null,null]], expected: [1,2,3,1,3] },
    { args: [3, ['reserve','reserve','reserve'], [null,null,null]], expected: [1,2,3] },
    { args: [4, ['reserve','reserve','unreserve','reserve','unreserve','reserve'], [null,null,1,null,2,null]], expected: [1,2,1,2] },
  ],
};
