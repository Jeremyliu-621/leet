import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-initial-energy-to-finish-tasks',
  title: 'Minimum Initial Energy to Finish Tasks',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`tasks\` where \`tasks[i] = [actual_i, minimum_i]\`:
- \`actual_i\` is the energy you consume to finish task \`i\`.
- \`minimum_i\` is the minimum energy you must have before starting task \`i\`.

You can complete the tasks in **any order**. Return the minimum initial energy you need to finish **all tasks**.`,
  constraints: [
    '1 <= tasks.length <= 10^5',
    '1 <= actual_i <= minimum_i <= 10^4',
  ],
  examples: [
    {
      input: 'tasks = [[1,2],[2,4],[4,8]]',
      output: '8',
      explanation: 'Do tasks in order [4,8] → [2,4] → [1,2]. Start with 8: 8>=8, use 4→4; 4>=4, use 2→2; 2>=2, use 1→1.',
    },
    {
      input: 'tasks = [[1,3],[2,4],[4,8]]',
      output: '9',
    },
    {
      input: 'tasks = [[1,2]]',
      output: '2',
    },
  ],
  hints: [
    'Think about which tasks to prioritize. If two tasks A and B must be done, and doing A before B requires less initial energy than B before A, then A should go first.',
    'For two adjacent tasks A and B: doing A first needs max(A.min, A.actual + B.min). Doing B first needs max(B.min, B.actual + A.min). Prefer A first when its cost is lower, which reduces to sorting by (minimum − actual) in **decreasing** order.',
    'After sorting, greedily track the needed initial energy: if your running energy ever falls below a task\'s minimum, top up the deficit. `tasks.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0])); let e=0,ans=0; for(const[act,mn]of tasks){if(e<mn){ans+=mn-e;e=mn;} e-=act;} return ans;`',
  ],
  functionName: 'minimumEffort',
  params: ['tasks'],
  starterCode: {
    javascript: 'function minimumEffort(tasks) {\n  \n}\n',
    typescript: "function minimumEffort(tasks: number[][]): number {\n  \n}",

    python: 'def minimumEffort(tasks: list[list[int]]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 4], [4, 8]]], expected: 8 },
    { args: [[[1, 3], [2, 4], [4, 8]]], expected: 9 },
    { args: [[[1, 2]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [2, 4]]], expected: 4 },
    { args: [[[5, 5]]], expected: 5 },
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 3 },
    { args: [[[3, 5], [1, 1], [4, 4]]], expected: 8 },
    { args: [[[2, 2], [2, 2]]], expected: 4 },
    { args: [[[1, 10], [1, 10], [1, 10]]], expected: 12 },
  ],
};
