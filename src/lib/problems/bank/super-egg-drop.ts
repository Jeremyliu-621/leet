import type { Problem } from '../types';

export const problem: Problem = {
  id: 'super-egg-drop',
  title: 'Super Egg Drop',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search'],
  description: `You are given \`k\` identical eggs and a building with \`n\` floors labeled \`1\` to \`n\`.

You want to determine floor \`f\` (\`0 <= f <= n\`) such that:
- Any egg dropped from a floor **above** \`f\` **breaks**.
- Any egg dropped from a floor **at or below** \`f\` **does not break**.

Each move consists of picking an egg and dropping it from any floor. If the egg breaks, it cannot be used again. If it doesn't break, you can reuse it.

Return the **minimum number of moves** that guarantees you can determine \`f\`, regardless of the initial value of \`f\`.`,
  constraints: [
    '1 <= k <= 100',
    '1 <= n <= 10000',
  ],
  examples: [
    {
      input: 'k = 1, n = 2',
      output: '2',
      explanation: 'With only 1 egg, you must try floor 1 then floor 2. 2 moves.',
    },
    {
      input: 'k = 2, n = 6',
      output: '3',
      explanation: 'With 2 eggs you can always determine f in 3 moves. Drop from floor 3: if breaks (f<3), try 1 then 2. If not (f>=3), drop from 5: if breaks try 4; if not try 6.',
    },
    {
      input: 'k = 3, n = 14',
      output: '4',
    },
  ],
  hints: [
    'Instead of dp[eggs][floors] = min moves, try the inverse: dp[moves][eggs] = max floors you can check. This avoids the exponential state space.',
    'With m moves and k eggs, if you drop from some floor and it breaks you have m-1 moves and k-1 eggs (check dp[m-1][k-1] floors below). If it doesn\'t break you have m-1 moves and k eggs (check dp[m-1][k] floors above). Plus the current floor itself. So dp[m][k] = dp[m-1][k-1] + dp[m-1][k] + 1.',
    'Find the minimum m such that dp[m][k] >= n. Space-optimize to 1D: iterate backwards over k from k to 1 each round. `const dp=new Array(k+1).fill(0); let m=0; while(dp[k]<n){ m++; for(let j=k;j>=1;j--) dp[j]=dp[j-1]+dp[j]+1; } return m;`',
  ],
  functionName: 'superEggDrop',
  params: ['k', 'n'],
  starterCode: {
    javascript: 'function superEggDrop(k, n) {\n  \n}\n',
    typescript: "function superEggDrop(k: number, n: number): number {\n  \n}",

    python: 'def superEggDrop(k: int, n: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [1, 2], expected: 2 },
    { args: [2, 6], expected: 3 },
    { args: [3, 14], expected: 4 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2, 2], expected: 2 },
    { args: [2, 100], expected: 14 },
    { args: [1, 100], expected: 100 },
    { args: [2, 1], expected: 1 },
    { args: [4, 10000], expected: 23 },
    { args: [3, 100], expected: 9 },
    { args: [2, 10], expected: 4 },
  ],
};
