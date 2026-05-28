import type { Problem } from '../types';

const JS_PREAMBLE = `
function circularQueueRunner(k, ops, args) {
  const q = new MyCircularQueue(Number(k));
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'enQueue') return q.enQueue(a[0]);
    if (op === 'deQueue') return q.deQueue();
    if (op === 'Front') return q.Front();
    if (op === 'Rear') return q.Rear();
    if (op === 'isEmpty') return q.isEmpty();
    if (op === 'isFull') return q.isFull();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def circularQueueRunner(k, ops, args):
    q = MyCircularQueue(int(k))
    result = []
    for op, a in zip(ops, args):
        if op == 'enQueue': result.append(q.enQueue(a[0]))
        elif op == 'deQueue': result.append(q.deQueue())
        elif op == 'Front': result.append(q.Front())
        elif op == 'Rear': result.append(q.Rear())
        elif op == 'isEmpty': result.append(q.isEmpty())
        elif op == 'isFull': result.append(q.isFull())
        else: result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'design-circular-queue',
  title: 'Design Circular Queue',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle (hence "circular").

Implement the \`MyCircularQueue\` class:
- \`MyCircularQueue(k)\` — initializes the object with the size of the queue \`k\`.
- \`enQueue(value)\` — inserts an element into the circular queue. Returns \`true\` if successful.
- \`deQueue()\` — deletes an element from the circular queue. Returns \`true\` if successful.
- \`Front()\` — gets the front item. Returns \`-1\` if the queue is empty.
- \`Rear()\` — gets the last item. Returns \`-1\` if the queue is empty.
- \`isEmpty()\` — checks whether the circular queue is empty.
- \`isFull()\` — checks whether the circular queue is full.

> **Note:** A runner function is pre-defined.`,
  constraints: [
    '1 <= k <= 1000',
    '0 <= value <= 1000',
    'At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull',
  ],
  examples: [
    {
      input: 'k=3, ops=["enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"], args=[[1],[2],[3],[4],[],[],[],[4],[]]',
      output: '[true,true,true,false,3,true,true,true,4]',
    },
  ],
  hints: [
    'Use a fixed-size array with head and tail pointers. Track the current size.',
    'enQueue: add at (tail + 1) % k. deQueue: remove from head, advance head = (head + 1) % k.',
    'isEmpty: size == 0. isFull: size == k. Front: arr[head]. Rear: arr[(head + size - 1) % k].',
  ],
  functionName: 'circularQueueRunner',
  params: ['k', 'ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// circularQueueRunner is pre-defined.\nclass MyCircularQueue {\n  constructor(k) { this.k = k; }\n  enQueue(value) {}\n  deQueue() {}\n  Front() {}\n  Rear() {}\n  isEmpty() {}\n  isFull() {}\n}\n',
    python: '# circularQueueRunner is pre-defined.\nclass MyCircularQueue:\n    def __init__(self, k): self.k = k\n    def enQueue(self, value): pass\n    def deQueue(self): pass\n    def Front(self): pass\n    def Rear(self): pass\n    def isEmpty(self): pass\n    def isFull(self): pass\n',
  },
  visibleTests: [
    {
      args: [3, ['enQueue', 'enQueue', 'enQueue', 'enQueue', 'Rear', 'isFull', 'deQueue', 'enQueue', 'Rear'], [[1], [2], [3], [4], [], [], [], [4], []]],
      expected: [true, true, true, false, 3, true, true, true, 4],
    },
  ],
  hiddenTests: [
    {
      args: [1, ['enQueue', 'isFull', 'deQueue', 'isEmpty', 'Front'], [[5], [], [], [], []]],
      expected: [true, true, true, true, -1],
    },
    {
      args: [3, ['enQueue', 'enQueue', 'Front', 'Rear', 'deQueue', 'Front'], [[10], [20], [], [], [], []]],
      expected: [true, true, 10, 20, true, 20],
    },
  ],
};
