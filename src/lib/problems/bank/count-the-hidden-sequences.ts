import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-hidden-sequences',
  title: 'Count the Hidden Sequences',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You know the **differences** between consecutive elements of a hidden sequence of length \`n\` (so \`differences\` has length \`n-1\`). You also know that every element of the hidden sequence is in the inclusive range \`[lower, upper]\`.

Return the number of **possible hidden sequences**.

**Args:** \`differences: number[], lower: number, upper: number\`

**Example 1:**

Input: \`differences = [1,-3,4], lower = 1, upper = 6\`

Output: \`2\`

Explanation: The two valid sequences are [3,4,1,5] and [4,5,2,6]. If we set hidden[0]=x, the sequence is fully determined. We need all values in [1,6], giving 2 valid starting values.

**Example 2:**

Input: \`differences = [3,-4,5,1,-2], lower = -4, upper = 5\`

Output: \`4\`

**Approach:** Fix \`hidden[0] = 0\` and compute prefix sums. Find the min and max prefix values. The spread is \`max - min\`. The answer is \`max(0, (upper - lower) - (max_prefix - min_prefix) + 1)\`.`,
  constraints: [
    'n == differences.length + 1',
    '1 ≤ n ≤ 10^5',
    '-10^5 ≤ differences[i] ≤ 10^5',
    '-10^5 ≤ lower ≤ upper ≤ 10^5',
  ],
  examples: [
    {
      input: 'differences = [1,-3,4], lower = 1, upper = 6',
      output: '2',
      explanation: 'Fix hidden[0]=x: hidden = [x, x+1, x-2, x+2]. Need 1≤x and x+2≤6, so x in [1,4] but also x-2≥1 → x≥3. x in {3,4}: 2 values.',
    },
    {
      input: 'differences = [3,-4,5,1,-2], lower = -4, upper = 5',
      output: '4',
      explanation: 'Prefix sums from 0: [0,3,-1,4,5,3]. Spread = 5-(-1) = 6. Range = 5-(-4) = 9. Answer = 9-6+1 = 4.',
    },
  ],
  hints: [
    'Fix hidden[0] = 0. Compute each subsequent element using the differences. This gives a relative sequence.',
    'Find minVal and maxVal of this relative sequence (include 0 for hidden[0]).',
    'The sequence can start at any value x such that x + minVal >= lower and x + maxVal <= upper. The count of valid x is max(0, (upper - lower) - (maxVal - minVal) + 1).',
  ],
  functionName: 'numberOfArrays',
  params: ['differences', 'lower', 'upper'],
  starterCode: {
    javascript: `function numberOfArrays(differences, lower, upper) {
  let cur = 0, minVal = 0, maxVal = 0;
  for (const d of differences) {
    cur += d;
    if (cur < minVal) minVal = cur;
    if (cur > maxVal) maxVal = cur;
  }
  const spread = maxVal - minVal;
  const range = upper - lower;
  return Math.max(0, range - spread + 1);
}`,
    typescript: `function numberOfArrays(differences: number[], lower: number, upper: number): number {
  let cur = 0, minVal = 0, maxVal = 0;
  for (const d of differences) {
    cur += d;
    if (cur < minVal) minVal = cur;
    if (cur > maxVal) maxVal = cur;
  }
  const spread = maxVal - minVal;
  const range = upper - lower;
  return Math.max(0, range - spread + 1);
}`,
    python: `def numberOfArrays(differences, lower, upper):
    differences = list(differences.to_py()) if hasattr(differences, 'to_py') else list(differences)
    cur = 0
    min_val = 0
    max_val = 0
    for d in differences:
        cur += d
        if cur < min_val:
            min_val = cur
        if cur > max_val:
            max_val = cur
    spread = max_val - min_val
    return max(0, (upper - lower) - spread + 1)`,
  },
  visibleTests: [
    { args: [[1, -3, 4], 1, 6], expected: 2 },
    { args: [[3, -4, 5, 1, -2], -4, 5], expected: 4 },
    // prefix sums [0,1,0], spread=1, range=(2-0)=2, ans=2-1+1=2
    { args: [[1, -1], 0, 2], expected: 2 },
  ],
  hiddenTests: [
    // single element: spread=0, range=0, ans=1
    { args: [[], 0, 0], expected: 1 },
    // prefix [0,1], spread=1, range=1, ans=1
    { args: [[1], 0, 1], expected: 1 },
    // prefix [0,1,2,3], spread=3, range=3, ans=1
    { args: [[1, 1, 1], 0, 3], expected: 1 },
    // prefix [0,-1,-2], spread=2, range=5, ans=4
    { args: [[-1, -1], 0, 5], expected: 4 },
    // prefix [0,100000,0], spread=100000, range=200000, ans=100001
    { args: [[100000, -100000], -100000, 100000], expected: 100001 },
  ],
};
