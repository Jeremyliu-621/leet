import type { Problem } from '../types';

export const problem: Problem = {
  id: 'exclusive-time-of-functions',
  title: 'Exclusive Time of Functions',
  difficulty: 'medium',
  tags: ['stack'],
  description: `On a **single-threaded** CPU, we have \`n\` functions running. Each function has a unique ID from \`0\` to \`n-1\`.\n\nFunction calls are **stored** in a call stack. When a function call starts, its ID is pushed onto the stack. When a function call ends, its ID is popped off the stack.\n\nYou are given \`n\` and a list of \`logs\`, where each log is a string with format \`"{function_id}:{type}:{timestamp}"\`. \`type\` is either \`"start"\` or \`"end"\`. Timestamps are **non-negative integers** and the logs are sorted by timestamp. No two functions start or end at the same timestamp.\n\nReturn the **exclusive time** of each function (an integer array where \`answer[i]\` is the exclusive time for function \`i\`).`,
  constraints: [
    '1 <= n <= 100',
    '1 <= logs.length <= 500',
    '0 <= function_id < n',
    '0 <= timestamp <= 10^9',
    'No two start events will happen at the same timestamp.',
    'No two end events will happen at the same timestamp.',
  ],
  examples: [
    {
      input: 'n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]',
      output: '[3, 4]',
      explanation: 'Function 0 runs [0,2) = 2 units, pauses for function 1. Function 1 runs [2,6) = 4 units (timestamps 2–5 inclusive). Function 0 resumes and runs [6,7) = 1 unit. Total: function 0 = 3, function 1 = 4.',
    },
    {
      input: 'n = 1, logs = ["0:start:0","0:end:0"]',
      output: '[1]',
      explanation: 'Function 0 runs at timestamp 0 for exactly 1 unit.',
    },
  ],
  hints: [
    'Use a stack to track the current running function. When a new function starts, the currently running function pauses.',
    'Track `prev` = the timestamp from which the current top function has been running. When an event fires at time `t`: if "start", add `t - prev` to stack top\'s time, push new function; if "end", add `t - prev + 1` to popped function\'s time, set `prev = t + 1`.',
    '`const result = new Array(n).fill(0); const stack = []; let prev = 0; for (const log of logs) { const [id, type, ts] = log.split(\':\'); const t = +ts; if (type === \'start\') { if (stack.length) result[stack[stack.length-1]] += t - prev; stack.push(+id); prev = t; } else { result[+id] += t - prev + 1; stack.pop(); prev = t + 1; } } return result;`',
  ],
  functionName: 'exclusiveTime',
  params: ['n', 'logs'],
  starterCode: {
    javascript: `function exclusiveTime(n, logs) {\n  // your code here\n}\n`,
    python: `def exclusiveTime(n, logs):\n    # your code here\n    pass\n`,
  },
  visibleTests: [
    {
      args: [2, ['0:start:0','1:start:2','1:end:5','0:end:6']],
      expected: [3, 4],
    },
    {
      args: [1, ['0:start:0','0:end:0']],
      expected: [1],
    },
    {
      args: [2, ['0:start:0','0:end:0','1:start:1','1:end:1']],
      expected: [1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [2, ['0:start:0','1:start:1','1:end:1','0:end:2']],
      expected: [2, 1],
    },
    {
      args: [1, ['0:start:0','0:end:10']],
      expected: [11],
    },
    {
      args: [2, ['0:start:0','1:start:5','1:end:8','0:end:10']],
      expected: [7, 4],
    },
    {
      args: [3, ['0:start:0','1:start:1','1:end:4','2:start:5','2:end:6','0:end:8']],
      expected: [3, 4, 2],
    },
    {
      args: [2, ['0:start:0','0:end:5','1:start:6','1:end:8']],
      expected: [6, 3],
    },
    {
      args: [1, ['0:start:5','0:end:5']],
      expected: [1],
    },
  ],
};
