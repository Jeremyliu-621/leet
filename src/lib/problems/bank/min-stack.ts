import type { Problem } from '../types';

const JS_PREAMBLE = `
function minStackRunner(ops, args) {
  const stack = new MinStack();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'push') { stack.push(a[0]); return null; }
    if (op === 'pop') { stack.pop(); return null; }
    if (op === 'top') return stack.top();
    if (op === 'getMin') return stack.getMin();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def minStackRunner(ops, args):
    stack = MinStack()
    result = []
    for op, a in zip(ops, args):
        if op == 'push':
            stack.push(a[0])
            result.append(None)
        elif op == 'pop':
            stack.pop()
            result.append(None)
        elif op == 'top':
            result.append(stack.top())
        elif op == 'getMin':
            result.append(stack.getMin())
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'min-stack',
  title: 'Min Stack',
  difficulty: 'easy',
  tags: ['stack'],
  description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the \`MinStack\` class:
- \`push(val)\` — pushes the element \`val\` onto the stack.
- \`pop()\` — removes the element on top of the stack.
- \`top()\` — returns the top element of the stack.
- \`getMin()\` — retrieves the minimum element in the stack.

You must implement a solution with **O(1) time complexity** for each function.

> **Note:** A runner function is pre-defined that creates a \`MinStack\` and calls your methods. Implement the class below.`,
  constraints: [
    '-2^31 <= val <= 2^31 - 1',
    'Methods pop, top and getMin will always be called on non-empty stacks',
    'At most 3 × 10^4 calls will be made to push, pop, top, and getMin',
  ],
  examples: [
    {
      input:
        'ops = ["push","push","push","getMin","pop","top","getMin"], args = [[-2],[0],[-3],[],[],[],[]]',
      output: '[null,null,null,-3,null,0,-2]',
      explanation:
        'After pushing -2, 0, -3: getMin() = -3. Pop removes -3. top() = 0. getMin() = -2.',
    },
  ],
  hints: [
    'Use two stacks: one for the actual values and a second "min stack" that tracks the current minimum.',
    'On push: add to the main stack. If the min stack is empty or the new value is ≤ the current min, also push to the min stack.',
    'On pop: remove from the main stack. If the popped value equals the top of the min stack, also pop the min stack.',
  ],
  functionName: 'minStackRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// minStackRunner is pre-defined and calls your class below.\nclass MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {\n      this.minStack.push(val);\n    }\n  }\n  pop() {\n    const val = this.stack.pop();\n    if (val === this.minStack[this.minStack.length - 1]) this.minStack.pop();\n  }\n  top() {\n    return this.stack[this.stack.length - 1];\n  }\n  getMin() {\n    return this.minStack[this.minStack.length - 1];\n  }\n}\n',
    typescript: `// minStackRunner is pre-defined and calls your class below.
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];
  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]!) {
      this.minStack.push(val);
    }
  }
  pop(): void {
    const val = this.stack.pop()!;
    if (val === this.minStack[this.minStack.length - 1]) this.minStack.pop();
  }
  top(): number {
    return this.stack[this.stack.length - 1]!;
  }
  getMin(): number {
    return this.minStack[this.minStack.length - 1]!;
  }
}`,

    python:
      '# minStackRunner is pre-defined and calls your class below.\nclass MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val):\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]:\n            self.min_stack.append(val)\n    def pop(self):\n        val = self.stack.pop()\n        if val == self.min_stack[-1]:\n            self.min_stack.pop()\n    def top(self):\n        return self.stack[-1]\n    def getMin(self):\n        return self.min_stack[-1]\n',
  },
  visibleTests: [
    {
      args: [
        ['push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
        [[-2], [0], [-3], [], [], [], []],
      ],
      expected: [null, null, null, -3, null, 0, -2],
    },
    {
      args: [
        ['push', 'getMin', 'push', 'getMin', 'pop', 'getMin'],
        [[5], [], [3], [], [], []],
      ],
      expected: [null, 5, null, 3, null, 5],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['push', 'push', 'top', 'pop', 'getMin'],
        [[1], [2], [], [], []],
      ],
      expected: [null, null, 2, null, 1],
    },
    {
      args: [
        ['push', 'push', 'push', 'pop', 'getMin'],
        [[2], [1], [0], [], []],
      ],
      expected: [null, null, null, null, 1],
    },
  ],
};
