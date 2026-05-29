import type { Problem } from '../types';

export const problem: Problem = {
  id: 'implement-stack-using-queues',
  title: 'Implement Stack using Queues',
  difficulty: 'easy',
  tags: ['design', 'stack'],
  description: `Implement a **last-in-first-out (LIFO) stack** using only two queues. The implemented stack should support all the functions of a normal stack: \`push\`, \`top\`, \`pop\`, and \`empty\`.

Implement the \`MyStack\` class:
- \`MyStack()\` — initializes the stack object.
- \`void push(int x)\` — pushes element x to the top.
- \`int pop()\` — removes and returns the top element.
- \`int top()\` — returns the top element without removing it.
- \`boolean empty()\` — returns \`true\` if the stack is empty.

**Note:** You must use **only** standard queue operations: \`push to back\`, \`peek/pop from front\`, \`size\`, and \`is empty\`.

**Follow-up:** Can you implement it using only **one** queue?`,
  constraints: [
    '1 <= x <= 9',
    'At most 100 calls will be made to push, pop, top, and empty.',
    'All calls to pop and top are valid (stack is non-empty).',
  ],
  examples: [
    {
      input: 'ops = ["push","push","top","pop","empty"], vals = [1,2,0,0,0]',
      output: '[null,null,2,2,false]',
      explanation: 'push(1), push(2), top()→2, pop()→2, empty()→false',
    },
  ],
  hints: [
    'When pushing, enqueue x, then rotate all other elements to the back so x is at the front.',
    'After push(x), rotate the queue: for (n-1) times, dequeue and re-enqueue. Now the front is the most recently pushed element.',
    'pop() and top() just dequeue/peek from the front. empty() checks size.',
  ],
  functionName: 'myStackRunner',
  params: ['ops', 'vals'],
  preamble: {
    javascript: `
function myStackRunner(ops, vals) {
  const stack = new MyStack();
  return ops.map((op, i) => {
    if (op === 'push') { stack.push(vals[i]); return null; }
    if (op === 'pop') return stack.pop();
    if (op === 'top') return stack.top();
    if (op === 'empty') return stack.empty();
    return null;
  });
}
`.trim(),
    typescript: "function myStackRunner(ops: string[], vals: number[]): (null | number | boolean)[] {\n  constructor() {\n    // Initialize your data structure here\n  }\n\n  push(x) {\n    // Push element x onto stack\n  }\n\n  pop() {\n    // Removes the element on top of the stack and returns it\n  }\n\n  top() {\n    // Get the top element\n  }\n\n  empty() {\n    // Returns whether the stack is empty\n  }\n}",

    python: `
def myStackRunner(ops, vals):
    ops_list = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    vals_list = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    stack = MyStack()
    results = []
    for op, val in zip(ops_list, vals_list):
        if op == 'push':
            stack.push(val)
            results.append(None)
        elif op == 'pop':
            results.append(stack.pop())
        elif op == 'top':
            results.append(stack.top())
        elif op == 'empty':
            results.append(stack.empty())
    return results
`.trim(),
  },
  starterCode: {
    javascript: `class MyStack {
  constructor() {
    // Initialize your data structure here
  }

  push(x) {
    // Push element x onto stack
  }

  pop() {
    // Removes the element on top of the stack and returns it
  }

  top() {
    // Get the top element
  }

  empty() {
    // Returns whether the stack is empty
  }
}`,
    python: `class MyStack:
    def __init__(self):
        # Initialize your data structure here
        pass

    def push(self, x: int) -> None:
        pass

    def pop(self) -> int:
        pass

    def top(self) -> int:
        pass

    def empty(self) -> bool:
        pass`,
  },
  visibleTests: [
    {
      args: [['push', 'push', 'top', 'pop', 'empty'], [1, 2, 0, 0, 0]],
      expected: [null, null, 2, 2, false],
    },
  ],
  hiddenTests: [
    {
      args: [['push', 'pop', 'empty'], [5, 0, 0]],
      expected: [null, 5, true],
    },
    {
      args: [['push', 'push', 'push', 'pop', 'top', 'pop', 'empty'], [1, 2, 3, 0, 0, 0, 0]],
      expected: [null, null, null, 3, 2, 2, false],
    },
    {
      args: [['push', 'push', 'pop', 'push', 'top'], [4, 7, 0, 9, 0]],
      expected: [null, null, 7, null, 9],
    },
  ],
};
