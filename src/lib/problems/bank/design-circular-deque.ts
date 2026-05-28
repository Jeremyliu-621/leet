import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-circular-deque',
  title: 'Design Circular Deque',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Design your implementation of the circular double-ended queue (deque).

Implement \`designCircularDeque(k, actions, values)\` which simulates the following operations on a deque with capacity \`k\`:

- \`"insertFront"\` — Adds an item to the front. Returns \`true\` if successful, \`false\` if full.
- \`"insertLast"\` — Adds an item to the rear. Returns \`true\` if successful, \`false\` if full.
- \`"deleteFront"\` — Deletes an item from the front. Returns \`true\` if successful, \`false\` if empty.
- \`"deleteLast"\` — Deletes an item from the rear. Returns \`true\` if successful, \`false\` if empty.
- \`"getFront"\` — Gets the front item. Returns \`-1\` if empty.
- \`"getRear"\` — Gets the last item. Returns \`-1\` if empty.
- \`"isEmpty"\` — Returns \`true\` if empty, \`false\` otherwise.
- \`"isFull"\` — Returns \`true\` if full, \`false\` otherwise.

The \`values\` array provides the integer argument for insert operations (ignored for all other operations).`,
  constraints: [
    '1 <= k <= 1000',
    '0 <= value <= 1000',
    'At most 2000 calls will be made to the operations.',
  ],
  examples: [
    {
      input: 'k = 3, actions = ["insertLast","insertLast","insertFront","isFull","deleteLast","insertFront","getFront"], values = [1,2,3,null,null,4,null]',
      output: '[true,true,true,true,true,true,4]',
      explanation: 'Insert 1 rear → [1]. Insert 2 rear → [1,2]. Insert 3 front → [3,1,2]. Full → true. Delete rear → [3,1]. Insert 4 front → [4,3,1]. Front → 4.',
    },
  ],
  hints: [
    'Use a fixed-size array of length k+1 and two pointers (front and rear) modulo k+1. The extra slot distinguishes full from empty.',
    'insertFront: decrement front (mod k+1) then write. insertLast: write at rear then increment rear (mod k+1). Check isEmpty/isFull before mutations.',
    'getFront reads arr[front]; getRear reads arr[(rear - 1 + k + 1) % (k + 1)]. Empty when front === rear, full when (rear + 1) % (k + 1) === front.',
  ],
  functionName: 'designCircularDeque',
  params: ['k', 'actions', 'values'],
  starterCode: {
    javascript: `function designCircularDeque(k, actions, values) {
  const results = [];
  // Initialize your deque here

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const val = values[i];
    if (action === 'insertFront') {
      // results.push(...)
    } else if (action === 'insertLast') {
      // results.push(...)
    } else if (action === 'deleteFront') {
      // results.push(...)
    } else if (action === 'deleteLast') {
      // results.push(...)
    } else if (action === 'getFront') {
      // results.push(...)
    } else if (action === 'getRear') {
      // results.push(...)
    } else if (action === 'isEmpty') {
      // results.push(...)
    } else if (action === 'isFull') {
      // results.push(...)
    }
  }
  return results;
}`,
    python: `def designCircularDeque(k, actions, values):
    results = []
    # Initialize your deque here

    for i in range(len(actions)):
        action = actions[i]
        val = values[i]
        if action == 'insertFront':
            pass  # results.append(...)
        elif action == 'insertLast':
            pass  # results.append(...)
        elif action == 'deleteFront':
            pass  # results.append(...)
        elif action == 'deleteLast':
            pass  # results.append(...)
        elif action == 'getFront':
            pass  # results.append(...)
        elif action == 'getRear':
            pass  # results.append(...)
        elif action == 'isEmpty':
            pass  # results.append(...)
        elif action == 'isFull':
            pass  # results.append(...)
    return results
`,
  },
  visibleTests: [
    {
      args: [
        3,
        ['insertLast','insertLast','insertFront','isFull','deleteLast','insertFront','getFront'],
        [1, 2, 3, null, null, 4, null],
      ],
      expected: [true, true, true, true, true, true, 4],
    },
    {
      args: [
        2,
        ['insertFront','isFull','getRear','deleteFront','getFront'],
        [5, null, null, null, null],
      ],
      expected: [true, false, 5, true, -1],
    },
  ],
  hiddenTests: [
    {
      args: [
        1,
        ['insertFront','isFull','insertLast','deleteFront','isEmpty'],
        [10, null, 20, null, null],
      ],
      expected: [true, true, false, true, true],
    },
    {
      args: [
        3,
        ['insertLast','insertFront','insertFront','insertFront','getFront','getRear'],
        [1, 2, 3, 4, null, null],
      ],
      expected: [true, true, true, false, 3, 1],
    },
    {
      args: [
        2,
        ['isEmpty','insertFront','isEmpty','getFront','getRear','insertLast','isFull','deleteLast','getRear'],
        [null, 7, null, null, null, 8, null, null, null],
      ],
      expected: [true, true, false, 7, 7, true, true, true, 7],
    },
    {
      args: [
        4,
        ['insertLast','insertLast','insertFront','insertFront','getFront','getRear','deleteFront','deleteLast','getFront','getRear'],
        [10, 20, 30, 40, null, null, null, null, null, null],
      ],
      expected: [true, true, true, true, 40, 20, true, true, 30, 10],
    },
  ],
};
