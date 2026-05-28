import type { Problem } from '../types';

const JS_PREAMBLE = `
function maxStackRunner(ops, args) {
  const stack = new MaxStack();
  return ops.map((op, i) => {
    const a = args[i] || [];
    if (op === 'push') { stack.push(a[0]); return null; }
    if (op === 'pop') return stack.pop();
    if (op === 'top') return stack.top();
    if (op === 'peekMax') return stack.peekMax();
    if (op === 'popMax') return stack.popMax();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def maxStackRunner(ops, args):
    stack = MaxStack()
    result = []
    for op, a in zip(ops, args):
        if op == 'push':
            stack.push(a[0])
            result.append(None)
        elif op == 'pop':
            result.append(stack.pop())
        elif op == 'top':
            result.append(stack.top())
        elif op == 'peekMax':
            result.append(stack.peekMax())
        elif op == 'popMax':
            result.append(stack.popMax())
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'max-stack',
  title: 'Max Stack',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Design a max stack that supports the standard stack operations and also the ability to retrieve the maximum element.

Implement the \`MaxStack\` class:

- \`push(x)\` — pushes element \`x\` onto the stack.
- \`pop()\` — removes the element on top of the stack and returns it.
- \`top()\` — returns the element on top of the stack without removing it.
- \`peekMax()\` — returns the maximum element in the stack without removing it.
- \`popMax()\` — removes the element with the maximum value in the stack and returns it. If there is more than one maximum element, only remove the **top-most** one.

> **Note:** A runner function \`maxStackRunner(ops, args)\` is pre-defined. It creates a \`MaxStack\` instance and dispatches each operation in \`ops\` with the corresponding \`args\` element, returning the array of results (\`null\` for \`push\`).`,
  constraints: [
    '-10^7 <= x <= 10^7',
    'At most 10^4 calls will be made to each method',
    'There will be at least one element in the stack when pop, top, peekMax, or popMax is called',
  ],
  examples: [
    {
      input:
        'ops = ["push","push","push","top","popMax","top","peekMax","pop","top"], args = [[5],[1],[5],[],[],[],[],[],[]]',
      output: '[null,null,null,5,5,1,5,1,5]',
      explanation:
        'push(5): stack=[5]. push(1): stack=[5,1]. push(5): stack=[5,1,5]. top()=5. popMax() removes topmost 5: stack=[5,1], returns 5. top()=1. peekMax()=5. pop() removes 1: stack=[5], returns 1. top()=5.',
    },
  ],
  hints: [
    'Use two stacks: one main stack to track the order of elements, and a second "max stack" where each entry is the running maximum up to that position.',
    'On `push(x)`: push `x` to the main stack; push `max(x, maxStack.top())` to the max stack. On `pop()`: pop from both stacks. `top()` and `peekMax()` just peek the respective stacks.',
    'For `popMax()`, the tricky part is that the maximum may not be at the top. Pop elements off the main stack into a temporary buffer until you reach the maximum, then restore them.',
  ],
  functionName: 'maxStackRunner',
  params: ['ops', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// maxStackRunner is pre-defined and calls your class below.\nclass MaxStack {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  top() {}\n  peekMax() {}\n  popMax() {}\n}\n',
    typescript: "function maxStackRunner(ops: string[], args: (number[] | unknown[])[]): (null | number)[] {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  top() {}\n  peekMax() {}\n  popMax() {}\n}",

    python:
      '# maxStackRunner is pre-defined and calls your class below.\nclass MaxStack:\n    def __init__(self): pass\n    def push(self, x): pass\n    def pop(self): pass\n    def top(self): pass\n    def peekMax(self): pass\n    def popMax(self): pass\n',
  },
  visibleTests: [
    {
      args: [
        ['push', 'push', 'push', 'top', 'popMax', 'top', 'peekMax', 'pop', 'top'],
        [[5], [1], [5], [], [], [], [], [], []],
      ],
      expected: [null, null, null, 5, 5, 1, 5, 1, 5],
    },
    {
      args: [
        ['push', 'push', 'peekMax', 'pop', 'peekMax'],
        [[3], [7], [], [], []],
      ],
      expected: [null, null, 7, 7, 3],
    },
    {
      args: [
        ['push', 'push', 'push', 'popMax', 'top'],
        [[1], [2], [3], [], []],
      ],
      expected: [null, null, null, 3, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['push', 'push', 'push', 'popMax', 'popMax', 'top'],
        [[2], [5], [2], [], [], []],
      ],
      expected: [null, null, null, 5, 2, 2],
    },
    {
      args: [
        ['push', 'push', 'push', 'peekMax', 'pop', 'peekMax'],
        [[10], [3], [10], [], [], []],
      ],
      expected: [null, null, null, 10, 10, 10],
    },
    {
      args: [
        ['push', 'push', 'push', 'push', 'popMax', 'top', 'popMax', 'top'],
        [[4], [1], [6], [2], [], [], [], []],
      ],
      expected: [null, null, null, null, 6, 2, 4, 2],
    },
  ],
};
