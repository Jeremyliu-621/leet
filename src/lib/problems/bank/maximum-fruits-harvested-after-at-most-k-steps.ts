import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-fruits-harvested-after-at-most-k-steps',
  title: 'Maximum Fruits Harvested After at Most K Steps',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Fruits are falling from different positions on an infinite horizontal number line. You are given a 2D integer array \`fruits\` where \`fruits[i] = [position_i, amount_i]\` depicts \`amount_i\` fruits at position \`position_i\`. \`fruits\` is already **sorted** by \`position_i\` in **ascending** order, and each \`position_i\` is **unique**.

You are also given two integers \`startPos\` and \`k\`. Initially, you are at position \`startPos\` on the number line. From any position, you can either walk to the **left** or **right** by one step. You can move at most \`k\` steps in total.

You must collect fruits at any position you walk past or stop at. After taking at most \`k\` steps, you stop and collect all remaining fruits at your current position.

Return the **maximum** total fruits you can collect.`,
  constraints: [
    '1 <= fruits.length <= 10^5',
    'fruits[i].length == 2',
    '0 <= startPos <= 2 * 10^5',
    '0 <= position_i <= 2 * 10^5',
    'position_i-1 < position_i',
    '1 <= amount_i <= 10^4',
    '0 <= k <= 2 * 10^5',
  ],
  examples: [
    {
      input: 'fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4',
      output: '9',
      explanation: 'Go right to position 8 (3 steps), collecting fruits at 6 and 8: 3+6=9.',
    },
    {
      input: 'fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4',
      output: '14',
      explanation: 'Go left 1 step to 4, then right 3 steps to 7, collecting 1+7+2+4=14.',
    },
    {
      input: 'fruits = [[1,2],[3,5],[5,3],[7,4]], startPos = 4, k = 3',
      output: '8',
      explanation: 'Go left 1 step to 3, then right 2 steps to 5, collecting 5+3=8.',
    },
  ],
  hints: [
    'Use a sliding window over the sorted positions. A window [L, R] is reachable if you go one direction then the other.',
    'Steps for window [L, R] from startPos (when L ≤ startPos ≤ R): min(2*(R-startPos)+(startPos-L), 2*(startPos-L)+(R-startPos)).',
    'Use prefix sums to compute range sums efficiently.',
  ],
  functionName: 'maxTotalFruits',
  params: ['fruits', 'startPos', 'k'],
  starterCode: {
    javascript: `function maxTotalFruits(fruits, startPos, k) {
  const n = fruits.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + fruits[i][1];
  const steps = (l, r) => {
    const lp = fruits[l][0], rp = fruits[r][0];
    if (startPos <= lp) return rp - startPos;
    if (startPos >= rp) return startPos - lp;
    return Math.min(2*(startPos-lp)+(rp-startPos), 2*(rp-startPos)+(startPos-lp));
  };
  let ans = 0, l = 0;
  for (let r = 0; r < n; r++) {
    while (l <= r && steps(l, r) > k) l++;
    if (l <= r) ans = Math.max(ans, prefix[r+1] - prefix[l]);
  }
  return ans;
}`,
    typescript: `function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
  const n = fruits.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + fruits[i]![1]!;
  const steps = (l: number, r: number): number => {
    const lp = fruits[l]![0]!, rp = fruits[r]![0]!;
    if (startPos <= lp) return rp - startPos;
    if (startPos >= rp) return startPos - lp;
    return Math.min(2*(startPos-lp)+(rp-startPos), 2*(rp-startPos)+(startPos-lp));
  };
  let ans = 0, l = 0;
  for (let r = 0; r < n; r++) {
    while (l <= r && steps(l, r) > k) l++;
    if (l <= r) ans = Math.max(ans, prefix[r+1]! - prefix[l]!);
  }
  return ans;
}`,
    python: `def maxTotalFruits(fruits, startPos, k):
    if hasattr(fruits, 'to_py'): fruits = fruits.to_py()
    fruits = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in fruits]
    n = len(fruits)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + fruits[i][1]
    def steps(l, r):
        lp, rp = fruits[l][0], fruits[r][0]
        if startPos <= lp: return rp - startPos
        if startPos >= rp: return startPos - lp
        return min(2*(startPos-lp)+(rp-startPos), 2*(rp-startPos)+(startPos-lp))
    ans, l = 0, 0
    for r in range(n):
        while l <= r and steps(l, r) > k:
            l += 1
        if l <= r:
            ans = max(ans, prefix[r+1] - prefix[l])
    return ans`,
  },
  visibleTests: [
    { args: [[[2, 8], [6, 3], [8, 6]], 5, 4], expected: 9 },
    { args: [[[0, 9], [4, 1], [5, 7], [6, 2], [7, 4], [10, 9]], 5, 4], expected: 14 },
    { args: [[[1, 2], [3, 5], [5, 3], [7, 4]], 4, 3], expected: 8 },
  ],
  hiddenTests: [
    { args: [[[0, 1]], 0, 0], expected: 1 },
    { args: [[[3, 4]], 0, 2], expected: 0 },
    { args: [[[0, 5], [10, 5]], 5, 5], expected: 5 },
    { args: [[[0, 3], [6, 4], [8, 5]], 5, 4], expected: 9 },
    { args: [[[1, 5], [2, 5]], 3, 2], expected: 10 },
  ],
};
