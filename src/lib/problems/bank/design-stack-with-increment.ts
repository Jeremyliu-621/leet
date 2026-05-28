import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-stack-with-increment',
  title: 'Design a Stack With Increment Operation',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Design a stack that supports increment operations on its elements.

Implement the \`CustomStack\` class:
- \`CustomStack(int maxSize)\` Initializes the object with \`maxSize\` (max size of stack).
- \`void push(int x)\` Pushes \`x\` onto the stack if it has not reached \`maxSize\`.
- \`int pop()\` Pops and returns the top of the stack, or \`-1\` if the stack is empty.
- \`void increment(int k, int val)\` Increments the bottom \`min(k, stack.size)\` elements by \`val\`.

Simulate the operations given as an array of commands and return the results of all \`pop\` calls.`,
  constraints: [
    '`1 <= maxSize <= 1000`',
    '`0 <= x <= 1000`',
    '`0 <= k <= 1000`',
    '`0 <= val <= 100`',
    'At most `1000` calls will be made to each method',
  ],
  examples: [
    {
      input: 'maxSize = 3, ops = [["push",1],["push",2],["pop"],["push",2],["push",3],["push",4],["increment",5,100],["increment",2,100],["pop"],["pop"],["pop"],["pop"]]',
      output: '[2, 103, 202, 201, -1]',
      explanation: 'Pop calls return the modified top elements based on increments.',
    },
  ],
  hints: [
    'Use a stack array and a lazy increment array of the same size. When incrementing, mark inc[min(k,size)-1] += val instead of updating all elements.',
    'When popping, return stack[top] + inc[top], then propagate: inc[top-1] += inc[top], inc[top] = 0.',
    'This makes both push and pop O(1) and increment O(1) regardless of k.',
  ],
  functionName: 'customStackOps',
  params: ['maxSize', 'ops'],
  starterCode: {
    javascript: `// Return an array of results for all "pop" operations
function customStackOps(maxSize, ops) {
  // Implement CustomStack class and simulate ops
}`,
    typescript: "function customStackOps(maxSize: number, ops: ((string | number)[] | string[])[]): number[] {\n  // Implement CustomStack class and simulate ops\n}",

    python: `def customStackOps(maxSize, ops):
    # Implement CustomStack class and simulate ops
    pass`,
  },
  visibleTests: [
    {
      args: [3, [['push',1],['push',2],['pop'],['push',2],['push',3],['push',4],['increment',5,100],['increment',2,100],['pop'],['pop'],['pop'],['pop']]],
      expected: [2, 103, 202, 201, -1],
    },
  ],
  hiddenTests: [
    {
      args: [2, [['push',1],['push',2],['push',3],['pop'],['pop'],['pop']]],
      expected: [2, 1, -1],
    },
    {
      args: [3, [['push',5],['increment',3,10],['pop']]],
      expected: [15],
    },
    {
      args: [1, [['push',1],['push',2],['pop'],['pop']]],
      expected: [1, -1],
    },
  ],
};
