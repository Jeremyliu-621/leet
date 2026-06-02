import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-consecutive-floors-without-special-floors',
  title: 'Maximum Consecutive Floors Without Special Floors',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Alice manages a building with \`n + 1\` floors numbered from \`0\` to \`n\`. Some floors are **special**: they are given in the integer array \`special\`, where \`special[i]\` is a special floor.

Alice decides to visit all floors from floor \`bottom\` to floor \`top\` (inclusive). She cannot visit a **special** floor. Return the **maximum number of consecutive non-special floors** Alice can visit.`,
  constraints: [
    '1 <= special.length <= 10^5',
    '1 <= bottom <= special[i] <= top <= 10^9',
    'All values in special are distinct.',
  ],
  examples: [
    {
      input: 'special = [2,9], bottom = 6, top = 8',
      output: '3',
      explanation: 'No special floors in [6,8]; all 3 floors are consecutive non-special.',
    },
    {
      input: 'special = [1,3,5,7,10], bottom = 1, top = 10',
      output: '2',
    },
  ],
  hints: [
    'Sort the special floors. Compute the gap before the first, between each pair, and after the last.',
    'Gap before first special floor: first_special - bottom.',
    'Gap after last special floor: top - last_special.',
  ],
  functionName: 'maxConsecutive',
  params: ['bottom', 'top', 'special'],
  starterCode: {
    javascript: `function maxConsecutive(bottom, top, special) {
  special = special.filter(s => s >= bottom && s <= top).sort((a, b) => a - b);
  if (!special.length) return top - bottom + 1;
  let ans = special[0] - bottom;
  for (let i = 1; i < special.length; i++) ans = Math.max(ans, special[i] - special[i-1] - 1);
  return Math.max(ans, top - special[special.length - 1]);
}`,
    typescript: `function maxConsecutive(bottom: number, top: number, special: number[]): number {
  const s = special.filter(x => x >= bottom && x <= top).sort((a, b) => a - b);
  if (!s.length) return top - bottom + 1;
  let ans = s[0]! - bottom;
  for (let i = 1; i < s.length; i++) ans = Math.max(ans, s[i]! - s[i-1]! - 1);
  return Math.max(ans, top - s[s.length - 1]!);
}`,
    python: `def maxConsecutive(bottom, top, special):
    s = sorted(x for x in special if bottom <= x <= top)
    if not s:
        return top - bottom + 1
    ans = s[0] - bottom
    for i in range(1, len(s)):
        ans = max(ans, s[i] - s[i-1] - 1)
    return max(ans, top - s[-1])`,
  },
  visibleTests: [
    { args: [6, 8, [2,9]], expected: 3 },
    { args: [1, 10, [1,3,5,7,10]], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 5, [3]], expected: 2 },
    { args: [1, 10, [5]], expected: 5 },
    { args: [1, 1, [1]], expected: 0 },
    { args: [2, 10, [3,6,9]], expected: 2 },
  ],
};
