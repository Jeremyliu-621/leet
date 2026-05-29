import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-stack',
  title: 'Min Stack',
  difficulty: 'easy',
  tags: ['design', 'stack'],
  description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the \`MinStack\` class:
- \`MinStack()\` initializes the stack object.
- \`void push(int val)\` pushes the element \`val\` onto the stack.
- \`void pop()\` removes the element on the top of the stack.
- \`int top()\` gets the top element of the stack.
- \`int getMin()\` retrieves the minimum element in the stack.

You must implement a solution with \`O(1)\` time complexity for each function.

Simulate with arrays of operations and arguments. Return results (\`null\` for void operations).`,
  constraints: [
    '`-2^31 <= val <= 2^31 - 1`',
    'Methods `pop`, `top`, and `getMin` operations will always be called on **non-empty** stacks.',
    'At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.',
  ],
  examples: [
    {
      input: 'ops = ["MinStack","push","push","push","getMin","pop","top","getMin"], args = [[],[-2],[0],[-3],[],[],[],[]]',
      output: '[null,null,null,null,-3,null,0,-2]',
      explanation: 'push(-2), push(0), push(-3). getMin()=-3. pop() removes -3. top()=0. getMin()=-2.',
    },
  ],
  hints: [
    'Use a second "min stack" that tracks the current minimum at each level.',
    'When pushing, push to the min stack the minimum of (new value, current min stack top).',
    'When popping, pop from both the main stack and the min stack simultaneously.',
  ],
  functionName: 'minStack',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function minStack(ops, args) {

}`,
    typescript: `function minStack(ops: string[], args: (number | null)[][]): (number | null)[] {

}`,
    python: `def minStack(ops, args):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
        [[], [-2], [0], [-3], [], [], [], []],
      ],
      expected: [null, null, null, null, -3, null, 0, -2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['MinStack', 'push', 'getMin'],
        [[], [5], []],
      ],
      expected: [null, null, 5],
    },
    {
      args: [
        ['MinStack', 'push', 'push', 'pop', 'getMin'],
        [[], [2], [1], [], []],
      ],
      expected: [null, null, null, null, 2],
    },
    {
      args: [
        ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'getMin'],
        [[], [3], [1], [2], [], [], []],
      ],
      expected: [null, null, null, null, 1, null, 1],
    },
    {
      args: [
        ['MinStack', 'push', 'push', 'top'],
        [[], [1], [2], []],
      ],
      expected: [null, null, null, 2],
    },
    {
      args: [
        ['MinStack', 'push', 'push', 'push', 'pop', 'getMin'],
        [[], [5], [3], [4], [], []],
      ],
      expected: [null, null, null, null, null, 3],
    },
  ],
};
