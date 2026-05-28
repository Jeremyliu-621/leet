import type { Problem } from '../types';

export const problem: Problem = {
  id: 'token-bucket-rate-limiter',
  title: 'Token Bucket Rate Limiter',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `You are simulating a **token bucket rate limiter**. The bucket holds at most \`capacity\` tokens and refills at a rate of \`refillRate\` tokens per second.

You are given a list of \`requests\`, where each request is \`[timestamp, tokensNeeded]\`. Requests arrive in non-decreasing order of timestamp. Process them in order:

1. First, add tokens based on elapsed time since the last request: \`tokensAdded = elapsedSeconds × refillRate\`. The bucket never exceeds \`capacity\`.
2. If the bucket has at least \`tokensNeeded\` tokens, **approve** the request (deduct the tokens, record \`true\`).
3. Otherwise, **reject** it (record \`false\`, tokens unchanged).

Return a boolean array indicating which requests were approved. The bucket starts full (at \`capacity\` tokens) at time 0.`,
  constraints: [
    '1 <= capacity, refillRate <= 100',
    '1 <= requests.length <= 1000',
    '0 <= requests[i][0] <= 10^6',
    '1 <= requests[i][1] <= capacity',
    'Timestamps are non-decreasing',
  ],
  examples: [
    {
      input: 'capacity = 10, refillRate = 2, requests = [[0,9],[1,5],[2,3]]',
      output: '[true,false,true]',
      explanation: 'Start with 10 tokens. t=0: approve (10−9=1 token). t=1: +2 → 3 tokens; need 5 → reject. t=2: +2 → 5 tokens; need 3 → approve (5−3=2 tokens).',
    },
    {
      input: 'capacity = 5, refillRate = 1, requests = [[0,5],[1,3],[4,2]]',
      output: '[true,false,true]',
      explanation: 'Start with 5. t=0: approve (5-5=0 tokens). t=1: +1 → 1; need 3 → reject. t=4: +3 → 4; need 2 → approve (4-2=2).',
    },
  ],
  hints: [
    'Track the current token count and the last request timestamp. For each request, compute elapsed = timestamp - lastTime, then tokens = min(tokens + elapsed * refillRate, capacity).',
    'If tokens >= tokensNeeded, approve and deduct. Otherwise reject (do not deduct).',
    'Update lastTime to the current request\'s timestamp after processing (whether approved or rejected).',
  ],
  functionName: 'tokenBucket',
  params: ['capacity', 'refillRate', 'requests'],
  starterCode: {
    javascript: `function tokenBucket(capacity, refillRate, requests) {\n  \n}`,
    typescript: "function tokenBucket(capacity: number, refillRate: number, requests: number[][]): boolean[] {\n  \n}",

    python: `def tokenBucket(capacity, refillRate, requests):\n    pass`,
  },
  visibleTests: [
    {
      args: [5, 1, [[0,5],[1,3],[4,2]]],
      expected: [true, false, true],
    },
    {
      args: [10, 2, [[0,5],[1,5],[3,3]]],
      expected: [true, true, true],
    },
    {
      args: [3, 1, [[0,3],[1,3]]],
      expected: [true, false],
    },
  ],
  hiddenTests: [
    {
      args: [10, 10, [[0,10],[0,10]]],
      expected: [true, false],
    },
    {
      args: [5, 5, [[0,5],[1,5],[2,5]]],
      expected: [true, true, true],
    },
    {
      args: [10, 1, [[0,10],[1,1],[1,1]]],
      expected: [true, true, false],
    },
    {
      args: [4, 2, [[0,4],[1,3],[3,4]]],
      expected: [true, false, true],
    },
    {
      args: [1, 1, [[0,1],[2,1],[3,1]]],
      expected: [true, true, true],
    },
  ],
};
