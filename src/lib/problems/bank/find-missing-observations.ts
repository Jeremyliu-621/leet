import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-missing-observations',
  title: 'Find Missing Observations',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'simulation'],
  description: `You have observations of \`n + m\` 6-sided dice rolls, but only \`m\` of them are recorded in the array \`rolls\`. The remaining \`n\` observations are missing. You are told that the **mean** of all \`n + m\` observations is \`mean\`.

Return an array of length \`n\` whose elements are the missing observations, where each value is between **1 and 6** inclusive. If no valid array exists, return an **empty array** \`[]\`.

If there are multiple valid arrays, return **any** of them.`,
  constraints: [
    'm == rolls.length',
    '1 ≤ n, m ≤ 10^5',
    '1 ≤ rolls[i] ≤ 6',
    '1 ≤ mean ≤ 6',
  ],
  examples: [
    {
      input: 'rolls = [3,2,4,3], mean = 4, n = 2',
      output: '[6,6]',
      explanation: 'Total sum needed: 4×6=24. Observed sum: 12. Missing sum: 12. Distribute as [6,6].',
    },
    {
      input: 'rolls = [1,5,6], mean = 3, n = 4',
      output: '[2,3,2,2]',
      explanation: 'Total sum: 3×7=21. Observed: 12. Missing: 9 split into 4 dice.',
    },
    {
      input: 'rolls = [1,2,3,4], mean = 6, n = 4',
      output: '[]',
      explanation: 'Total needed: 6×8=48. Observed: 10. Missing: 38, max possible is 6×4=24. Impossible.',
    },
  ],
  hints: [
    'Compute the total sum needed: mean × (n + m). Subtract the observed sum to get the missing sum.',
    'Check if the missing sum is achievable: n ≤ missing_sum ≤ 6×n. If not, return [].',
    'Distribute evenly: set each of n dice to floor(missing_sum / n), then add 1 to the first (missing_sum % n) dice.',
  ],
  functionName: 'missingRolls',
  params: ['rolls', 'mean', 'n'],
  starterCode: {
    javascript: `function missingRolls(rolls, mean, n) {
  const total = mean * (rolls.length + n);
  const missing = total - rolls.reduce((a, b) => a + b, 0);
  if (missing < n || missing > 6 * n) return [];
  const base = Math.floor(missing / n), rem = missing % n;
  const result = new Array(n).fill(base);
  for (let i = 0; i < rem; i++) result[i]++;
  return result;
}`,
    typescript: `function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const total = mean * (rolls.length + n);
  const missing = total - rolls.reduce((a, b) => a + b, 0);
  if (missing < n || missing > 6 * n) return [];
  const base = Math.floor(missing / n), rem = missing % n;
  const result: number[] = new Array(n).fill(base);
  for (let i = 0; i < rem; i++) result[i]++;
  return result;
}`,
    python: `def missingRolls(rolls, mean, n):
    total = mean * (len(rolls) + n)
    missing = total - sum(rolls)
    if missing < n or missing > 6 * n: return []
    base, rem = divmod(missing, n)
    return [base + (1 if i < rem else 0) for i in range(n)]`,
  },
  visibleTests: [
    { args: [[3, 2, 4, 3], 4, 2], expected: [6, 6] },
    { args: [[1, 5, 6], 3, 4], expected: [3, 2, 2, 2] },
    { args: [[1, 2, 3, 4], 6, 4], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: [1] },
    { args: [[6], 6, 1], expected: [6] },
    { args: [[1], 6, 1], expected: [] },
    { args: [[3, 3, 3], 3, 3], expected: [3, 3, 3] },
    { args: [[5, 5, 5, 5], 2, 2], expected: [] },
    { args: [[6, 6, 6, 6], 5, 4], expected: [4, 4, 4, 4] },
    { args: [[2, 4, 1, 3, 5], 3, 5], expected: [3, 3, 3, 3, 3] },
  ],
};
