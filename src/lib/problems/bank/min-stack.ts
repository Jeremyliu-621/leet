import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-stack',
  title: 'Min Stack',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the \`MinStack\` class:
- \`MinStack()\` initializes the stack object.
- \`void push(int val)\` pushes the element val onto the stack.
- \`void pop()\` removes the element on the top of the stack.
- \`int top()\` gets the top element of the stack.
- \`int getMin()\` retrieves the minimum element in the stack.

You must implement a solution with **O(1)** time complexity for each function.

**Input format:** an array of operations where each is \`[op, val]\`: op \`"push"\` pushes val, op \`"pop"\` pops (val ignored), op \`"top"\` returns top (val ignored), op \`"min"\` returns min (val ignored).`,
  examples: [
    {
      input: 'ops = [["push",5],["push",3],["push",7],["min",0],["pop",0],["min",0],["top",0]]',
      output: '[3,3,5]',
      explanation: 'After pushing 5,3,7: min is 3. After popping 7: min is 3, top is 3 (the new top is 3).',
    },
  ],
  constraints: [
    '-2^31 <= val <= 2^31 - 1',
    'Methods pop, top, and getMin operations will always be called on non-empty stacks.',
    'At most 3 * 10^4 calls will be made to push, pop, top, and getMin.',
  ],
  functionName: 'runMinStack',
  params: ['ops'],
  starterCode: {
    javascript: `function runMinStack(ops) {
  // Implement MinStack and simulate the ops.
  // Return the results of "top" and "min" operations in order.
}
`,
    python: `def runMinStack(ops):
    # Implement MinStack and simulate the ops.
    # Return the results of "top" and "min" operations in order.
    pass
`,
  },
  hints: [
    'Maintain two stacks: one main stack and one min stack. The min stack tracks the current minimum at each push.',
    'When pushing val, push val to main stack. Push min(val, minStack.top) to min stack.',
    'getMin() returns minStack.top. Both stacks stay in sync.',
  ],
  visibleTests: [
    {
      args: [[['push', 5], ['push', 3], ['push', 7], ['min', 0], ['pop', 0], ['min', 0], ['top', 0]]],
      expected: [3, 3, 3],
    },
    {
      args: [[['push', -2], ['push', 0], ['push', -3], ['min', 0], ['pop', 0], ['top', 0], ['min', 0]]],
      expected: [-3, 0, -2],
    },
  ],
  hiddenTests: [
    {
      args: [[['push', 1], ['min', 0], ['push', 2], ['min', 0], ['pop', 0], ['min', 0]]],
      expected: [1, 1, 1],
    },
    {
      args: [[['push', 3], ['push', 1], ['push', 2], ['min', 0], ['top', 0]]],
      expected: [1, 2],
    },
  ],
};
