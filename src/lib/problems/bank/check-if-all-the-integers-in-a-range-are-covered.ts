import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-the-integers-in-a-range-are-covered',
  title: 'Check if All the Integers in a Range Are Covered',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a 2D integer array \`ranges\` where \`ranges[i] = [start_i, end_i]\` represents an **inclusive** range \`[start_i, end_i]\`.

You are also given two integers \`left\` and \`right\`.

Return \`true\` if every integer in the inclusive range \`[left, right]\` is covered by **at least one** range in \`ranges\`, and \`false\` otherwise.`,
  constraints: [
    '`1 <= ranges.length <= 50`',
    '`1 <= start_i <= end_i <= 50`',
    '`1 <= left <= right <= 50`',
  ],
  examples: [
    {
      input: 'ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5',
      output: 'true',
      explanation: 'Every integer from 2 to 5 is covered: 2 by [1,2], 3 by [3,4], 4 by [3,4], 5 by [5,6].',
    },
    {
      input: 'ranges = [[1,10],[10,20]], left = 21, right = 21',
      output: 'false',
      explanation: '21 is not covered by any range.',
    },
  ],
  hints: [
    'Iterate over every integer from `left` to `right`.',
    'For each integer, check whether any range in `ranges` covers it.',
    `\`\`\`js
function isCovered(ranges, left, right) {
  for (let i = left; i <= right; i++) {
    if (!ranges.some(([s, e]) => s <= i && i <= e)) return false;
  }
  return true;
}\`\`\``,
  ],
  functionName: 'isCovered',
  params: ['ranges', 'left', 'right'],
  starterCode: {
    javascript: `function isCovered(ranges, left, right) {
  for (let i = left; i <= right; i++) {
    if (!ranges.some(([s, e]) => s <= i && i <= e)) return false;
  }
  return true;
}`,
    typescript: `function isCovered(ranges: number[][], left: number, right: number): boolean {
  for (let i = left; i <= right; i++) {
    if (!ranges.some(([s, e]) => s <= i && i <= e)) return false;
  }
  return true;
}`,
    python: `def isCovered(ranges, left, right):
    for i in range(left, right + 1):
        if not any(s <= i <= e for s, e in ranges):
            return False
    return True`,
  },
  visibleTests: [
    { args: [[[1,2],[3,4],[5,6]], 2, 5], expected: true },
    { args: [[[1,10],[10,20]], 21, 21], expected: false },
  ],
  hiddenTests: [
    { args: [[[1,50]], 1, 50], expected: true },
    { args: [[[1,5],[7,10]], 1, 10], expected: false },
    { args: [[[3,7],[1,2],[8,10]], 1, 10], expected: true },
    { args: [[[1,3],[5,7]], 3, 5], expected: false },
    { args: [[[1,1]], 1, 1], expected: true },
    { args: [[[2,4],[6,8]], 1, 8], expected: false },
    { args: [[[1,10],[5,15]], 3, 12], expected: true },
  ],
};
