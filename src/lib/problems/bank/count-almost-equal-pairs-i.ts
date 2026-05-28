import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-almost-equal-pairs-i',
  title: 'Count Almost Equal Pairs I',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array \`nums\` of **non-negative** integers. We call a pair of indices \`(i, j)\` (where \`i < j\`) **almost equal** if \`nums[i]\` and \`nums[j]\` are equal, or they can be made equal by performing **at most one** swap of two digits (including leading zeros) of one number.

Return the number of almost equal pairs.`,
  constraints: [
    '`2 <= nums.length <= 100`',
    '`0 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [3,12,30,17,21]',
      output: '2',
      explanation: '(3, 30): swapping digits of "03" gives "30". (12, 21): swapping digits of "12" gives "21".',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '6',
      explanation: 'All C(4,2)=6 pairs are equal (0 swaps needed).',
    },
    {
      input: 'nums = [123,231,312]',
      output: '0',
      explanation: 'Each pair differs in all 3 digits — one swap cannot equate them.',
    },
  ],
  hints: [
    'Pad both numbers to the same length with leading zeros before comparing.',
    'Find the positions where the two digit strings differ. If there are 0 or 2 differing positions, check if swapping those positions in one number equals the other.',
    'If the numbers are equal (0 differences), count it. If exactly 2 differences, check that swapping positions `p` and `q` in the first number yields the second.',
    `\`\`\`js
function countPairs(nums) {
  let count = 0;
  const maxLen = Math.max(...nums.map(n => String(n).length));
  const padded = nums.map(n => String(n).padStart(maxLen, '0'));
  for (let i = 0; i < padded.length; i++) {
    for (let j = i + 1; j < padded.length; j++) {
      const a = padded[i], b = padded[j];
      if (a === b) { count++; continue; }
      const diffs = [];
      for (let k = 0; k < maxLen; k++) if (a[k] !== b[k]) diffs.push(k);
      if (diffs.length === 2) {
        const [p, q] = diffs;
        if (a[p] === b[q] && a[q] === b[p]) count++;
      }
    }
  }
  return count;
}\`\`\``,
  ],
  functionName: 'countPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countPairs(nums) {

}`,
    typescript: 'function countPairs(nums: number[]): number {\n\n}',
    python: `def countPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 12, 30, 17, 21]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[123, 231, 312]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 1 },
    { args: [[10, 1]], expected: 1 },
    { args: [[12, 21, 12]], expected: 3 },
    { args: [[100, 10, 1]], expected: 3 },
    { args: [[5, 50, 500]], expected: 3 },
    { args: [[13, 31, 13, 31]], expected: 6 },
  ],
};
