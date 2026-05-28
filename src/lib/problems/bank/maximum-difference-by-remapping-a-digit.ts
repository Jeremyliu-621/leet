import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-by-remapping-a-digit',
  title: 'Maximum Difference by Remapping a Digit',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an integer \`num\`. You know that Bob will sneak into a car and change **at most one digit** of it. Bob can map one digit to another digit (possibly the same digit).

Bob wants to maximize the **difference** between the original number and the new number. He will apply the remapping to **all occurrences** of the chosen digit in \`num\`.

Return the **maximum** difference between the original and new numbers after a single digit remapping.

**Note:** The leading digit of the resulting number **cannot** be \`0\`. If the new number has a leading \`0\`, it becomes the number with the leading zero removed (e.g., \`091\` becomes \`91\`).`,
  constraints: [
    '`1 <= num <= 10^8`',
  ],
  examples: [
    {
      input: 'num = 11891',
      output: '99009',
      explanation:
        'Max: remap 1→9 → 99899. Min: remap 1→0 → 00890 = 890. Difference: 99899 − 890 = 99009.',
    },
    {
      input: 'num = 90',
      output: '99',
      explanation: 'Remap 0→9 → 99, remap 9→0 → 0 → 0. Diff = 99 - 0 = 99.',
    },
  ],
  hints: [
    'To maximize the result: replace the first non-9 digit with 9 throughout the number.',
    'To minimize the result: replace the first digit with 0 throughout (leading zeros auto-removed). The result is the original minus the minimized value.',
    `\`\`\`js
function minMaxDifference(num) {
  const s = String(num);
  const maxC = s.split('').find(c => c !== '9') ?? '9';
  const max = parseInt(s.replaceAll(maxC, '9'));
  const min = parseInt(s.replaceAll(s[0], '0') || '0');
  return max - min;
}\`\`\``,
  ],
  functionName: 'minMaxDifference',
  params: ['num'],
  starterCode: {
    javascript: `function minMaxDifference(num) {

}`,
    typescript: 'function minMaxDifference(num: number): number {\n\n}',
    python: `def minMaxDifference(num):
    pass`,
  },
  visibleTests: [
    { args: [11891], expected: 99009 },
    { args: [90], expected: 99 },
    { args: [9999], expected: 9999 },
  ],
  hiddenTests: [
    { args: [1], expected: 9 },
    { args: [10], expected: 90 },
    { args: [100], expected: 900 },
    { args: [99999999], expected: 99999999 },
    { args: [12345], expected: 90000 },
    { args: [11111], expected: 99999 },
  ],
};
