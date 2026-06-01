import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-queue-using-stacks',
  title: 'Implement Queue using Stacks',
  difficulty: 'easy',
  tags: ['design', 'stack'],
  description: `Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (\`push\`, \`peek\`, \`pop\`, and \`empty\`).

For this problem, implement a function \`queueOps(operations, values)\` that simulates a queue:
- \`"push"\`: push the corresponding value onto the queue
- \`"pop"\`: remove and return the front element
- \`"peek"\`: return the front element without removing it
- \`"empty"\`: return \`true\` if the queue is empty, \`false\` otherwise

Return an array of results for \`"pop"\`, \`"peek"\`, and \`"empty"\` operations (in order). \`"push"\` operations produce no output.`,
  constraints: [
    '`1 <= operations.length <= 100`',
    '`1 <= val <= 9` for push operations',
    'It is guaranteed that all \`pop\` and \`peek\` operations are valid (queue is non-empty).',
    'At most `100` calls to each method.',
  ],
  examples: [
    {
      input: 'operations = ["push","push","peek","pop","empty"], values = [1,2,null,null,null]',
      output: '[1,1,false]',
      explanation: 'push(1), push(2), peek()→1, pop()→1, empty()→false',
    },
    {
      input: 'operations = ["push","pop","empty"], values = [3,null,null]',
      output: '[3,true]',
      explanation: 'push(3), pop()→3, empty()→true',
    },
  ],
  hints: [
    'Use two stacks: `inbox` for pushes and `outbox` for pops. When `outbox` is empty and you need to pop/peek, pour all elements from `inbox` into `outbox` (reverses their order).',
    'This gives amortized O(1) per operation — each element moves at most twice total.',
    `\`\`\`js
// Two stacks: inbox (push) and outbox (pop/peek)
// Transfer inbox→outbox only when outbox is empty
// push: inbox.push(x)
// pop/peek: if outbox empty, while inbox.length: outbox.push(inbox.pop()); return outbox.pop/top\`\`\``,
  ],
  functionName: 'queueOps',
  params: ['operations', 'values'],
  starterCode: {
    javascript: `function queueOps(operations, values) {
  const inbox = [], outbox = [];
  function pour() { while (inbox.length) outbox.push(inbox.pop()); }
  const result = [];
  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    if (op === 'push') { inbox.push(values[i]); }
    else if (op === 'pop') { if (!outbox.length) pour(); result.push(outbox.pop()); }
    else if (op === 'peek') { if (!outbox.length) pour(); result.push(outbox[outbox.length - 1]); }
    else if (op === 'empty') { result.push(inbox.length === 0 && outbox.length === 0); }
  }
  return result;
}`,
    typescript: `function queueOps(operations: string[], values: (number | null)[]): (number | boolean)[] {
  const inbox: number[] = [], outbox: number[] = [];
  function pour(): void { while (inbox.length) outbox.push(inbox.pop()!); }
  const result: (number | boolean)[] = [];
  for (let i = 0; i < operations.length; i++) {
    const op = operations[i]!;
    if (op === 'push') { inbox.push(values[i] as number); }
    else if (op === 'pop') { if (!outbox.length) pour(); result.push(outbox.pop()!); }
    else if (op === 'peek') { if (!outbox.length) pour(); result.push(outbox[outbox.length - 1]!); }
    else if (op === 'empty') { result.push(inbox.length === 0 && outbox.length === 0); }
  }
  return result;
}`,

    python: `def queueOps(operations, values):
    inbox, outbox = [], []
    def pour():
        while inbox:
            outbox.append(inbox.pop())
    result = []
    ops = list(operations.to_py() if hasattr(operations, 'to_py') else operations)
    vals = list(values.to_py() if hasattr(values, 'to_py') else values)
    for op, val in zip(ops, vals):
        if op == 'push':
            inbox.append(val)
        elif op == 'pop':
            if not outbox:
                pour()
            result.append(outbox.pop())
        elif op == 'peek':
            if not outbox:
                pour()
            result.append(outbox[-1])
        elif op == 'empty':
            result.append(len(inbox) == 0 and len(outbox) == 0)
    return result`,
  },
  visibleTests: [
    { args: [['push', 'push', 'peek', 'pop', 'empty'], [1, 2, null, null, null]], expected: [1, 1, false] },
    { args: [['push', 'pop', 'empty'], [3, null, null]], expected: [3, true] },
  ],
  hiddenTests: [
    { args: [['push', 'empty'], [5, null]], expected: [false] },
    { args: [['push', 'push', 'push', 'pop', 'pop', 'empty'], [1, 2, 3, null, null, null]], expected: [1, 2, false] },
    { args: [['push', 'peek', 'push', 'peek', 'pop', 'pop'], [1, null, 2, null, null, null]], expected: [1, 1, 1, 2] },
  ],
};
