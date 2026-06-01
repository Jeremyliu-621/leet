import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-levels-to-gain-more-points',
  title: 'Minimum Levels to Gain More Points',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a binary array \`possible\` of length \`n\`. Alice and Bob are playing a game that has \`n\` levels. Some levels in the game are **possible** to clear and some are not. Level \`i\` is possible to clear if \`possible[i] == 1\`, and not if \`possible[i] == 0\`.

Alice and Bob play the game as follows:
- Alice plays levels **1 to j** (i.e., the first \`j\` levels).
- Bob plays the remaining levels **j+1 to n** (i.e., the last \`n - j\` levels).

Alice must play **at least 1 level** and Bob must play **at least 1 level**.

A player gains **+1** point for clearing a possible level and **-1** point for a non-possible level.

Alice wants to **maximize** the difference \`(Alice's score - Bob's score)\`. Bob wants to **minimize** it.

Return the **minimum** number of levels Alice should play (from 1 to n-1) such that Alice's score is **strictly greater** than Bob's score. Return \`-1\` if this is not possible.`,
  constraints: [
    '2 <= possible.length <= 10^5',
    'possible[i] is either 0 or 1',
  ],
  examples: [
    {
      input: 'possible = [1,0,1,1,0]',
      output: '1',
      explanation:
        'If Alice plays level 1, she scores +1. Bob plays levels 2–5: 0+1+1+0 = scores -1+1+1-1=0. Alice(1) > Bob(0). Minimum levels = 1.',
    },
    {
      input: 'possible = [1,1,1,1,0]',
      output: '2',
      explanation:
        'j=1: Alice=1, Bob=4*1+(-1)=3. 1>3? No. j=2: Alice=2, Bob=2. 2>2? No. j=2: Alice gets +1+1=2, Bob gets +1+1+(-1)=1. 2>1? Yes. Return 2.',
    },
    {
      input: 'possible = [0,0]',
      output: '-1',
      explanation: 'j=1: Alice=-1, Bob=-1. -1>-1? No. No valid split exists.',
    },
  ],
  hints: [
    'Level 1: Compute prefix sums where delta[i] = 2*possible[i] - 1 (+1 for clearable, -1 for non-clearable). Let prefix[j] = sum of delta[0..j-1].',
    'Level 2: Alice\'s score for first j levels = prefix[j]. Bob\'s score = total - prefix[j]. Alice wins when prefix[j] > total - prefix[j], i.e., 2*prefix[j] > total.',
    'Level 3: Iterate j from 1 to n-1, check the condition. Return the first j satisfying it, or -1.',
  ],
  functionName: 'minimumLevels',
  params: ['possible'],
  starterCode: {
    javascript: `function minimumLevels(possible) {
  const n = possible.length;
  let total = 0;
  for (const p of possible) total += 2 * p - 1;
  let prefix = 0;
  for (let j = 0; j < n - 1; j++) {
    prefix += 2 * possible[j] - 1;
    if (2 * prefix > total) return j + 1;
  }
  return -1;
}`,
    typescript: `function minimumLevels(possible: number[]): number {
  const n = possible.length;
  let total = 0;
  for (const p of possible) total += 2 * p - 1;
  let prefix = 0;
  for (let j = 0; j < n - 1; j++) {
    prefix += 2 * possible[j]! - 1;
    if (2 * prefix > total) return j + 1;
  }
  return -1;
}`,
    python: `def minimumLevels(possible):
    n = len(possible)
    total = sum(2 * p - 1 for p in possible)
    prefix = 0
    for j in range(n - 1):
        prefix += 2 * possible[j] - 1
        if 2 * prefix > total:
            return j + 1
    return -1`,
  },
  visibleTests: [
    { args: [[1, 0, 1, 1, 0]], expected: 1 },
    { args: [[1, 1, 1, 1, 0]], expected: 2 },
    { args: [[0, 0]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 1 },
    { args: [[0, 1]], expected: -1 },
    { args: [[1, 1]], expected: -1 },
    { args: [[1, 0, 0]], expected: 1 },
    { args: [[0, 1, 0]], expected: 2 },
    { args: [[0, 0, 1]], expected: -1 },
    { args: [[1, 1, 0, 0]], expected: 1 },
    { args: [[1, 1, 1, 0]], expected: 2 },
  ],
};
