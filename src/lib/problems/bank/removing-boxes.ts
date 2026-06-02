import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-boxes',
  title: 'Remove Boxes',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given several boxes with different colors represented by different positive numbers.

You may experience several rounds to remove boxes until there are no boxes left. Each time you can choose some continuous boxes with the same color (i.e., composed of \`k\` boxes, \`k >= 1\`), remove them and get \`k * k\` points.

Return the **maximum points** you can get.`,
  constraints: [
    '1 <= boxes.length <= 100',
    '1 <= boxes[i] <= 100',
  ],
  examples: [
    {
      input: 'boxes = [1,3,2,2,2,3,4,3,1]',
      output: '23',
      explanation: 'Remove [2,2,2] (9 pts), [4] (1 pt), [3,3,3] (9 pts), [1,1] (4 pts) = 23.',
    },
    {
      input: 'boxes = [1]',
      output: '1',
    },
    {
      input: 'boxes = [1,1,1]',
      output: '9',
      explanation: 'Remove all three at once for 3*3=9 points.',
    },
  ],
  hints: [
    'Level 1: Define dp(l, r, k) = max points from boxes[l..r] with k extra boxes of color boxes[l] attached to the left.',
    'Level 2: Option A: remove the k+1 leftmost boxes together for (k+1)² + dp(l+1, r, 0). Option B: for each m in (l,r] with boxes[m]==boxes[l], skip [l+1..m-1] then dp(l+1, m-1, 0) + dp(m, r, k+1).',
    'Level 3: Memoize on (l, r, k). The recursion is O(n⁴) which fits n≤100.',
  ],
  functionName: 'removeBoxes',
  params: ['boxes'],
  starterCode: {
    javascript: `function removeBoxes(boxes) {
  const n = boxes.length;
  const dp = Array.from({length: n}, () =>
    Array.from({length: n}, () => new Array(n).fill(-1)));
  function solve(l, r, k) {
    if (l > r) return 0;
    if (dp[l][r][k] !== -1) return dp[l][r][k];
    let res = (k + 1) * (k + 1) + solve(l + 1, r, 0);
    for (let m = l + 1; m <= r; m++) {
      if (boxes[m] === boxes[l]) {
        res = Math.max(res, solve(l + 1, m - 1, 0) + solve(m, r, k + 1));
      }
    }
    return dp[l][r][k] = res;
  }
  return solve(0, n - 1, 0);
}`,
    typescript: `function removeBoxes(boxes: number[]): number {
  const n = boxes.length;
  const dp: number[][][] = Array.from({length: n}, () =>
    Array.from({length: n}, () => new Array(n).fill(-1)));
  function solve(l: number, r: number, k: number): number {
    if (l > r) return 0;
    if (dp[l]![r]![k] !== -1) return dp[l]![r]![k]!;
    let res = (k + 1) * (k + 1) + solve(l + 1, r, 0);
    for (let m = l + 1; m <= r; m++) {
      if (boxes[m] === boxes[l]) {
        res = Math.max(res, solve(l + 1, m - 1, 0) + solve(m, r, k + 1));
      }
    }
    return dp[l]![r]![k] = res;
  }
  return solve(0, n - 1, 0);
}`,
    python: `def removeBoxes(boxes):
    boxes = [int(x) for x in (boxes.to_py() if hasattr(boxes, 'to_py') else boxes)]
    n = len(boxes)
    from functools import lru_cache

    @lru_cache(maxsize=None)
    def dp(l, r, k):
        if l > r: return 0
        res = (k + 1) * (k + 1) + dp(l + 1, r, 0)
        for m in range(l + 1, r + 1):
            if boxes[m] == boxes[l]:
                res = max(res, dp(l + 1, m - 1, 0) + dp(m, r, k + 1))
        return res

    return dp(0, n - 1, 0)`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 2, 2, 3, 4, 3, 1]], expected: 23 },
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: 4 },
    { args: [[1, 2, 1]], expected: 5 },
    { args: [[1, 1, 2, 2]], expected: 8 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 2, 2, 1]], expected: 8 },
  ],
};
