import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-all-valid-pickup-and-delivery-options',
  title: 'Count All Valid Pickup and Delivery Options',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given **n** orders, each order consists of a pickup P_i and delivery D_i. Count all valid orderings of pickups and deliveries such that D_i always occurs **after** P_i. Return the answer modulo **10^9 + 7**.

**Function signature:** \`countOrders(n)\`

**Example:**
- n=1 → 1 (only [P1, D1])
- n=2 → 6 (e.g., [P1,P2,D1,D2], [P1,D1,P2,D2], [P1,P2,D2,D1], [P2,P1,D1,D2], [P2,P1,D2,D1], [P2,D2,P1,D1])
- n=3 → 90`,
  constraints: [
    '1 <= n <= 500',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '1',
      explanation: 'Unique valid sequence: [P1, D1].',
    },
    {
      input: 'n = 2',
      output: '6',
      explanation: 'All valid: [P1,P2,D1,D2],[P1,P2,D2,D1],[P1,D1,P2,D2],[P2,P1,D1,D2],[P2,P1,D2,D1],[P2,D2,P1,D1].',
    },
    {
      input: 'n = 3',
      output: '90',
    },
  ],
  hints: [
    'Level 1: Think of placing orders one at a time. When adding order i (1-indexed), there are already 2(i-1) slots filled. The new pickup P_i can go in any of the 2i-1 gaps (before, between, or after existing items), and D_i must come after P_i — once P_i is placed, there are i positions for D_i.',
    'Level 2: dp[i] = dp[i-1] * i * (2*i - 1) % MOD. Base case: dp[1] = 1. For i=2: 1*2*3=6. For i=3: 6*3*5=90.',
    'Level 3: const MOD=1_000_000_007n; let dp=1n; for(let i=2;i<=n;i++) dp=dp*BigInt(i)*BigInt(2*i-1)%MOD; return Number(dp);',
  ],
  functionName: 'countOrders',
  params: ['n'],
  starterCode: {
    javascript: 'function countOrders(n) {\n  \n}\n',
    python: 'def countOrders(n):\n    ',
  },
  visibleTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 6 },
    { args: [3], expected: 90 },
  ],
  hiddenTests: [
    { args: [4], expected: 2520 },
    { args: [5], expected: 113400 },
    { args: [6], expected: 7484400 },
    { args: [7], expected: 681080400 },
  ],
};
