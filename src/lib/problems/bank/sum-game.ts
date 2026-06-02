import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-game',
  title: 'Sum Game',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `Alice and Bob take turns playing a game, with **Alice starting first**.

You are given a string \`num\` of **even length** consisting of digits and \`'?'\` characters. On each turn, a player will do the following if there are still \`'?'\` characters in \`num\`:

1. Choose an index \`i\` where \`num[i] == '?'\`.
2. Replace \`num[i]\` with any digit between \`'0'\` and \`'9'\`.

The game ends when there are no more \`'?'\` characters in \`num\`.

**Alice wins** if the sum of the digits in the first half of \`num\` is **not equal** to the sum of the second half. **Bob wins** if the sums are equal.

If Alice and Bob play optimally, return \`true\` if Alice wins, and \`false\` if Bob wins.`,
  constraints: [
    '2 <= num.length <= 10^5',
    'num.length is even.',
    "num[i] is either a digit or '?'.",
  ],
  examples: [
    {
      input: 'num = "5023"',
      output: 'false',
      explanation: 'No question marks. Sum of first half [5,0]=5, sum of second half [2,3]=5. They are equal, so Bob wins.',
    },
    {
      input: 'num = "25??"',
      output: 'true',
      explanation: 'Alice can replace the ?s so the halves are unequal, and Bob cannot prevent it.',
    },
    {
      input: 'num = "?3295???"',
      output: 'false',
      explanation: 'Bob can always equalize regardless of Alice\'s moves.',
    },
  ],
  hints: [
    'Consider the difference d = sumLeft - sumRight, and count of ?s in each half: qLeft and qRight.',
    'If the total number of ?s is odd, Alice always wins (she places last and can break symmetry).',
    'If the number of ?s is even, Bob can mirror Alice\'s strategy — but only if d + qLeft * 9 / 2 == qRight * 9 / 2, accounting for the net effect. More precisely, Alice wins if d != qRight * 4.5 - qLeft * 4.5 as integers — check d + (qLeft - qRight) * 9 / 2 != 0.',
  ],
  functionName: 'sumGame',
  params: ['num'],
  starterCode: {
    javascript: `function sumGame(num) {
  const half = num.length / 2;
  let sumL = 0, sumR = 0, qL = 0, qR = 0;
  for (let i = 0; i < half; i++) { if (num[i] === '?') qL++; else sumL += +num[i]; }
  for (let i = half; i < num.length; i++) { if (num[i] === '?') qR++; else sumR += +num[i]; }
  if ((qL + qR) % 2 === 1) return true;
  return 2 * (sumL - sumR) + (qL - qR) * 9 !== 0;
}`,
    typescript: `function sumGame(num: string): boolean {
  const half = num.length / 2;
  let sumL = 0, sumR = 0, qL = 0, qR = 0;
  for (let i = 0; i < half; i++) { if (num[i]! === '?') qL++; else sumL += +num[i]!; }
  for (let i = half; i < num.length; i++) { if (num[i]! === '?') qR++; else sumR += +num[i]!; }
  if ((qL + qR) % 2 === 1) return true;
  return 2 * (sumL - sumR) + (qL - qR) * 9 !== 0;
}`,
    python: `def sumGame(num):
    if hasattr(num, 'to_py'): num = num.to_py()
    num = str(num)
    half = len(num) // 2
    sum_l = sum_r = q_l = q_r = 0
    for c in num[:half]:
        if c == '?': q_l += 1
        else: sum_l += int(c)
    for c in num[half:]:
        if c == '?': q_r += 1
        else: sum_r += int(c)
    if (q_l + q_r) % 2 == 1: return True
    return 2 * (sum_l - sum_r) + (q_l - q_r) * 9 != 0`,
  },
  visibleTests: [
    { args: ['5023'], expected: false },
    { args: ['25??'], expected: true },
    { args: ['?3295???'], expected: false },
  ],
  hiddenTests: [
    { args: ['??'], expected: false },
    { args: ['?5'], expected: true },
    { args: ['0000'], expected: false },
    { args: ['9?99'], expected: true },
    { args: ['????'], expected: false },
    { args: ['00??'], expected: true },
  ],
};
