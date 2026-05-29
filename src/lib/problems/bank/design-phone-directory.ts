import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-phone-directory',
  title: 'Design Phone Directory',
  difficulty: 'medium',
  tags: ['design', 'hash-map'],
  description: `Design a phone directory that manages phone numbers from \`0\` to \`maxNumbers - 1\`. All numbers are initially available.

Implement \`phoneDirectory(operations, args)\` using the ops-array pattern where:
- \`"PhoneDirectory"\` with args \`[maxNumbers]\` — initializes the directory. Returns \`null\`.
- \`"get"\` with args \`[]\` — provides an available number. Returns the smallest available number, or \`-1\` if none is available.
- \`"check"\` with args \`[number]\` — checks whether a number is available. Returns \`true\` or \`false\`.
- \`"release"\` with args \`[number]\` — recycles or releases a number, making it available again. Returns \`null\`.`,
  constraints: [
    '`1 <= maxNumbers <= 10^4`',
    '`0 <= number < maxNumbers`',
    'At most `2 × 10^4` calls will be made to `get`, `check`, and `release`.',
  ],
  examples: [
    {
      input: 'operations = ["PhoneDirectory","get","get","check","get","check","release","check"]\nargs = [[3],[],[],[2],[],[2],[2],[2]]',
      output: '[null,0,1,true,2,false,null,true]',
      explanation: 'Init with 3 numbers {0,1,2}. get()→0, get()→1, check(2)→true (still available), get()→2, check(2)→false (now taken), release(2)→null, check(2)→true (available again).',
    },
  ],
  hints: [
    'Maintain a Set of available numbers and a queue for O(1) retrieval.',
    'get(): dequeue from the front of the queue (skipping numbers no longer available); remove from the available set.',
    'check(n): check if n is in the available set.',
    'release(n): if n is not currently available, add to set and enqueue.',
  ],
  functionName: 'phoneDirectory',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function phoneDirectory(operations, args) {
  const results = [];
  let queue = [];
  let available = new Set();

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i];
    if (op === 'PhoneDirectory') {
      const n = arg[0];
      queue = Array.from({ length: n }, (_, k) => k);
      available = new Set(queue);
      results.push(null);
    } else if (op === 'get') {
      while (queue.length > 0 && !available.has(queue[0])) queue.shift();
      if (queue.length === 0) {
        results.push(-1);
      } else {
        const num = queue.shift();
        available.delete(num);
        results.push(num);
      }
    } else if (op === 'check') {
      results.push(available.has(arg[0]));
    } else { // release
      if (!available.has(arg[0])) {
        available.add(arg[0]);
        queue.push(arg[0]);
      }
      results.push(null);
    }
  }
  return results;
}`,
    typescript: `function phoneDirectory(operations: string[], args: (number[])[]): (null | number | boolean)[] {
  const results: (null | number | boolean)[] = [];
  let queue: number[] = [];
  let available = new Set<number>();

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const arg = args[i]!;
    if (op === 'PhoneDirectory') {
      const n = arg[0]!;
      queue = Array.from({ length: n }, (_, k) => k);
      available = new Set(queue);
      results.push(null);
    } else if (op === 'get') {
      while (queue.length > 0 && !available.has(queue[0]!)) queue.shift();
      if (queue.length === 0) {
        results.push(-1);
      } else {
        const num = queue.shift()!;
        available.delete(num);
        results.push(num);
      }
    } else if (op === 'check') {
      results.push(available.has(arg[0]!));
    } else {
      if (!available.has(arg[0]!)) {
        available.add(arg[0]!);
        queue.push(arg[0]!);
      }
      results.push(null);
    }
  }
  return results;
}`,
    python: `def phoneDirectory(operations, args):
    if hasattr(operations, 'to_py'): operations = list(operations.to_py())
    if hasattr(args, 'to_py'): args = list(args.to_py())
    results = []
    queue = []
    available = set()

    for i in range(len(operations)):
        op = operations[i]
        arg = list(args[i]) if hasattr(args[i], 'to_py') else list(args[i])

        if op == 'PhoneDirectory':
            n = int(arg[0])
            queue = list(range(n))
            available = set(range(n))
            results.append(None)
        elif op == 'get':
            while queue and queue[0] not in available:
                queue.pop(0)
            if not queue:
                results.append(-1)
            else:
                num = queue.pop(0)
                available.discard(num)
                results.append(num)
        elif op == 'check':
            results.append(int(arg[0]) in available)
        else:  # release
            num = int(arg[0])
            if num not in available:
                available.add(num)
                queue.append(num)
            results.append(None)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['PhoneDirectory', 'get', 'get', 'check', 'get', 'check', 'release', 'check'],
        [[3], [], [], [2], [], [2], [2], [2]],
      ],
      expected: [null, 0, 1, true, 2, false, null, true],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['PhoneDirectory', 'get', 'get', 'get'],
        [[2], [], [], []],
      ],
      expected: [null, 0, 1, -1],
    },
    {
      args: [
        ['PhoneDirectory', 'get', 'release', 'get'],
        [[2], [], [0], []],
      ],
      expected: [null, 0, null, 1],
    },
    {
      args: [
        ['PhoneDirectory', 'check', 'get', 'check'],
        [[1], [0], [], [0]],
      ],
      expected: [null, true, 0, false],
    },
    {
      args: [
        ['PhoneDirectory', 'get', 'get', 'get', 'release', 'check'],
        [[3], [], [], [], [1], [1]],
      ],
      expected: [null, 0, 1, 2, null, true],
    },
    {
      args: [
        ['PhoneDirectory', 'get', 'release', 'release', 'get', 'get'],
        [[2], [], [0], [0], [], []],
      ],
      expected: [null, 0, null, null, 1, 0],
    },
  ],
};
