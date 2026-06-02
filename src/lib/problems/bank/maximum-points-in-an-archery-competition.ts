import type { Problem } from '../types';

const JS_PREAMBLE = `
function maximumBobPointsRunner(numArrows, aliceArrows) {
  const bobArrows = maximumBobPoints(numArrows, aliceArrows);
  if (!Array.isArray(bobArrows) || bobArrows.length !== 12) return -1;
  const total = bobArrows.reduce((s, x) => s + x, 0);
  if (total > numArrows || bobArrows.some(x => x < 0)) return -2;
  let score = 0;
  for (let i = 1; i < 12; i++) {
    if (bobArrows[i] > aliceArrows[i]) score += i;
  }
  return score;
}
`.trim();

const PY_PREAMBLE = `
def maximumBobPointsRunner(numArrows, aliceArrows):
    bob_arrows = maximumBobPoints(numArrows, list(aliceArrows))
    if not isinstance(bob_arrows, list) or len(bob_arrows) != 12:
        return -1
    total = sum(bob_arrows)
    if total > numArrows or any(x < 0 for x in bob_arrows):
        return -2
    score = 0
    for i in range(1, 12):
        if bob_arrows[i] > aliceArrows[i]:
            score += i
    return score
`.trim();

export const problem: Problem = {
  id: 'maximum-points-in-an-archery-competition',
  title: 'Maximum Points in an Archery Competition',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `Alice and Bob are competing in an archery competition. The target has **12 scoring regions** numbered 0 to 11. Region \`i\` awards \`i\` points.

You are given an integer \`numArrows\` and an integer array \`aliceArrows\` of size 12 where \`aliceArrows[i]\` is the number of arrows Alice shot at region \`i\`.

Bob can shoot arrows at any region. To **win** region \`i\`, Bob must shoot **strictly more** arrows than Alice at that region. If Bob wins region \`i\`, he gets \`i\` points (region 0 awards 0 points). Bob has exactly \`numArrows\` arrows to distribute.

Return an array \`bobArrows\` of size 12 representing how many arrows Bob shoots at each region to **maximize his total score**. If there are multiple valid answers, return any.

> **Note:** The runner validates correctness by computing the score your \`bobArrows\` actually achieves. The test checks that this score matches the known maximum.`,
  constraints: [
    '1 <= numArrows <= 10^5',
    'aliceArrows.length == 12',
    '0 <= aliceArrows[i] <= numArrows',
  ],
  examples: [
    {
      input: 'numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,2]',
      output: '[0,0,0,0,0,2,0,2,1,2,0,3] (score = 40)',
      explanation:
        'One optimal allocation: win regions 5 (1 arrow vs 0), 7 (2 vs 1), 8 (1 vs 0), 9 (2 vs 1), 11 (3 vs 2). Score = 5+7+8+9+11 = 40.',
    },
    {
      input: 'numArrows = 3, aliceArrows = [0,0,1,0,0,0,0,0,0,0,0,2]',
      output: '[0,0,0,0,0,0,0,0,1,1,1,0] (score = 27)',
      explanation:
        'Win regions 8, 9, 10 with 1 arrow each (Alice has 0 in all three). Score = 8+9+10 = 27.',
    },
    {
      input: 'numArrows = 6, aliceArrows = [0,0,0,0,0,0,0,0,0,0,0,0]',
      output: '[0,0,0,0,0,0,1,1,1,1,1,1] (score = 51)',
      explanation:
        'Since Alice shoots 0 arrows everywhere, Bob needs only 1 arrow per region. Win regions 6–11 with 6 arrows. Score = 6+7+8+9+10+11 = 51.',
    },
  ],
  hints: [
    'Level 1: There are only 12 scoring regions, so try all 2^12 = 4096 subsets of regions Bob attempts to win. For each subset, check if the total arrows needed fits within numArrows.',
    'Level 2: For a bitmask mask, the cost to win all regions in the mask is Σ (aliceArrows[i]+1) for each set bit i. The score is Σ i for each set bit. Iterate all subsets and track the one with maximum score that fits the budget.',
    'Level 3: After finding the optimal bitmask, construct bobArrows by setting bobArrows[i] = aliceArrows[i]+1 for each winning region i. Put any remaining arrows into region 0. This ensures Σ bobArrows == numArrows.',
  ],
  functionName: 'maximumBobPointsRunner',
  params: ['numArrows', 'aliceArrows'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `function maximumBobPoints(numArrows, aliceArrows) {
  let bestMask = 0, bestScore = 0;
  for (let mask = 0; mask < (1 << 11); mask++) {
    let cost = 0, score = 0;
    for (let i = 1; i <= 11; i++) {
      if ((mask >> (i - 1)) & 1) { cost += aliceArrows[i] + 1; score += i; }
    }
    if (cost <= numArrows && score > bestScore) { bestScore = score; bestMask = mask; }
  }
  const bob = new Array(12).fill(0);
  let remaining = numArrows;
  for (let i = 1; i <= 11; i++) {
    if ((bestMask >> (i - 1)) & 1) { bob[i] = aliceArrows[i] + 1; remaining -= bob[i]; }
  }
  bob[0] = remaining;
  return bob;
}`,
    typescript: `function maximumBobPointsRunner(numArrows: number, aliceArrows: number[]): number {
  const bobArrows = maximumBobPoints(numArrows, aliceArrows);
  if (!Array.isArray(bobArrows) || bobArrows.length !== 12) return -1;
  const total = bobArrows.reduce((s: number, x: number) => s + x, 0);
  if (total > numArrows || bobArrows.some((x: number) => x < 0)) return -2;
  let score = 0;
  for (let i = 1; i < 12; i++) {
    if (bobArrows[i]! > aliceArrows[i]!) score += i;
  }
  return score;
}

function maximumBobPoints(numArrows: number, aliceArrows: number[]): number[] {
  let bestMask = 0, bestScore = 0;
  for (let mask = 0; mask < (1 << 11); mask++) {
    let cost = 0, score = 0;
    for (let i = 1; i <= 11; i++) {
      if ((mask >> (i - 1)) & 1) { cost += aliceArrows[i]! + 1; score += i; }
    }
    if (cost <= numArrows && score > bestScore) { bestScore = score; bestMask = mask; }
  }
  const bob = new Array<number>(12).fill(0);
  let remaining = numArrows;
  for (let i = 1; i <= 11; i++) {
    if ((bestMask >> (i - 1)) & 1) { bob[i] = aliceArrows[i]! + 1; remaining -= bob[i]!; }
  }
  bob[0] = remaining;
  return bob;
}`,
    python: `def maximumBobPoints(numArrows, aliceArrows):
    if hasattr(aliceArrows, 'to_py'): aliceArrows = list(aliceArrows.to_py())
    best_mask = best_score = 0
    for mask in range(1 << 11):
        cost = score = 0
        for i in range(1, 12):
            if (mask >> (i - 1)) & 1:
                cost += aliceArrows[i] + 1
                score += i
        if cost <= numArrows and score > best_score:
            best_score = score
            best_mask = mask
    bob = [0] * 12
    remaining = numArrows
    for i in range(1, 12):
        if (best_mask >> (i - 1)) & 1:
            bob[i] = aliceArrows[i] + 1
            remaining -= bob[i]
    bob[0] = remaining
    return bob`,
  },
  visibleTests: [
    { args: [9, [1, 1, 0, 1, 0, 0, 2, 1, 0, 1, 2, 2]], expected: 40 },
    { args: [3, [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2]], expected: 27 },
    { args: [6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: 51 },
  ],
  hiddenTests: [
    { args: [1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: 11 },
    { args: [2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: 21 },
    { args: [4, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: 38 },
    { args: [11, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], expected: 66 },
    { args: [5, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]], expected: 40 },
  ],
};
