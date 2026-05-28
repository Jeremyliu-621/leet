import type { Problem } from '../types';

export const problem: Problem = {
  id: 'daily-temperatures',
  title: 'Days Until Warmer Temperature',
  difficulty: 'easy',
  tags: ['stack'],
  description: `Given an array of daily temperatures \`temps\`, for each day find the number of days you have to wait until a warmer temperature. If no future day is warmer, the answer for that day is 0.

A **monotonic decreasing stack** stores the indices of days waiting for a warmer day. When a warmer day arrives, pop every colder day off the stack and record the gap.

Return an array \`answer\` where \`answer[i]\` is the number of days after day \`i\` until a warmer temperature, or 0 if there is no such day.`,
  constraints: [
    '1 <= temps.length <= 1000',
    '0 <= temps[i] <= 100',
    'All temperatures are integers.',
  ],
  examples: [
    {
      input: 'temps = [73,74,75,71,69,72,76,73]',
      output: '[1,1,4,2,1,1,0,0]',
      explanation: 'Day 0 (73) waits 1 day for 74; day 2 (75) waits 4 days for 76; the last two days see no warmer future day.',
    },
    {
      input: 'temps = [30,40,50,60]',
      output: '[1,1,1,0]',
      explanation: 'Each day is warmer than the previous; the last has no warmer day.',
    },
    {
      input: 'temps = [30,20,10]',
      output: '[0,0,0]',
      explanation: 'Temperatures only decrease; no day has a warmer future day.',
    },
  ],
  hints: [
    'A brute-force double loop works in O(n²). Think about which previously seen days are still "unresolved" — still waiting for a warmer day. Can you maintain this set efficiently?',
    'Use a stack of **indices** of unresolved days. For each day `i`, while the stack is non-empty and `temps[i] > temps[stack.top]`, pop the top index `j` and set `answer[j] = i - j`. Then push `i`.',
    '`const stack = [], answer = new Array(temps.length).fill(0); for (let i = 0; i < temps.length; i++) { while (stack.length && temps[i] > temps[stack[stack.length-1]]) { const j = stack.pop(); answer[j] = i - j; } stack.push(i); } return answer;`',
  ],
  functionName: 'daysUntilWarmer',
  params: ['temps'],
  starterCode: {
    javascript: 'function daysUntilWarmer(temps) {\n  // your code here\n}\n',
    typescript: "function daysUntilWarmer(temps: number[]): number[] {\n  // your code here\n}",

    python: 'def daysUntilWarmer(temps):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { args: [[30, 20, 10]], expected: [0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[50]], expected: [0] },
    { args: [[50, 50]], expected: [0, 0] },
    { args: [[50, 60]], expected: [1, 0] },
    { args: [[60, 50, 40, 70]], expected: [3, 2, 1, 0] },
    { args: [[10, 20, 10, 20]], expected: [1, 0, 1, 0] },
    { args: [[100, 90, 80, 70, 100]], expected: [0, 3, 2, 1, 0] },
  ],
};
