import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alternating-groups-ii',
  title: 'Alternating Groups II',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **circular** array of integers \`colors\` where \`colors[i]\` represents the color of the i-th element (0 = red, 1 = blue). You are also given an integer \`k\`.

An **alternating group** is a contiguous subarray of length **exactly** \`k\` in the circular array where every two adjacent elements have **different** colors.

Return the number of alternating groups.

**Note:** Since \`colors\` is circular, the last element and the first element are considered adjacent.`,
  constraints: [
    '`3 <= colors.length <= 10^5`',
    '`0 <= colors[i] <= 1`',
    '`3 <= k <= colors.length`',
  ],
  examples: [
    {
      input: 'colors = [0,1,0,1,0], k = 3',
      output: '3',
      explanation: 'The alternating groups of length 3 are: [0,1,0] starting at index 0, [1,0,1] starting at index 1, and [0,1,0] starting at index 2.',
    },
    {
      input: 'colors = [0,1,0,0,1,0,1], k = 6',
      output: '2',
      explanation: 'Two alternating groups of length 6 exist in the circular array.',
    },
    {
      input: 'colors = [1,1], k = 1',
      output: '2',
      explanation: 'Every single element is trivially an alternating group of length 1.',
    },
  ],
  hints: [
    'Duplicate the array by appending it to itself. This handles the circular nature.',
    'Use a sliding window of size k over the doubled array.',
    'Track the length of the current alternating run ending at position i. If colors[i] != colors[i-1], extend the run by 1; otherwise reset to 1.',
    'A window ending at position i (start = i - k + 1) is valid if the alternating run length is at least k.',
    'Only count windows whose start index is less than n (to avoid double-counting).',
  ],
  functionName: 'numberOfAlternatingGroups',
  params: ['colors', 'k'],
  starterCode: {
    javascript: `function numberOfAlternatingGroups(colors, k) {
  const n = colors.length;
  let count = 0, len = 1;
  for (let i = 0; i < n + k - 1; i++) {
    if (colors[(i + 1) % n] !== colors[i % n]) len++;
    else len = 1;
    if (i >= k - 1 && len >= k) count++;
  }
  return count;
}`,
    typescript: `function numberOfAlternatingGroups(colors: number[], k: number): number {
  const n = colors.length;
  let count = 0, len = 1;
  for (let i = 0; i < n + k - 1; i++) {
    if (colors[(i + 1) % n] !== colors[i % n]) len++;
    else len = 1;
    if (i >= k - 1 && len >= k) count++;
  }
  return count;
}`,
    python: `def numberOfAlternatingGroups(colors, k):
    colors = list(colors.to_py()) if hasattr(colors, 'to_py') else list(colors)
    n = len(colors)
    count, length = 0, 1
    for i in range(n + k - 1):
        if colors[(i + 1) % n] != colors[i % n]:
            length += 1
        else:
            length = 1
        if i >= k - 1 and length >= k:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[0, 1, 0, 1, 0], 3], expected: 3 },
    { args: [[0, 1, 0, 0, 1, 0, 1], 6], expected: 2 },
    { args: [[1, 1], 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 1, 0, 1], 2], expected: 4 },
    { args: [[0, 0, 0], 1], expected: 3 },
    { args: [[0, 1, 0, 1, 0, 1], 4], expected: 6 },
    { args: [[1, 0, 1, 0], 3], expected: 4 },
  ],
};
