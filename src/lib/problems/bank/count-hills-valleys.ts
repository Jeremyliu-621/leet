import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-hills-valleys',
  title: 'Count Hills and Valleys',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. An index \`i\` is part of a **hill** if \`nums[i - 1] < nums[i]\` and \`nums[i] > nums[i + 1]\`. An index \`i\` is part of a **valley** if \`nums[i - 1] > nums[i]\` and \`nums[i] < nums[i + 1]\`.

Return the number of hills and valleys in \`nums\`.

**Note:** For purposes of counting, first remove consecutive duplicates — adjacent equal elements are considered the same position.`,
  constraints: [
    '3 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [2,4,1,1,6,5]',
      output: '3',
      explanation: 'After dedup: [2,4,1,6,5]. Index 1 (4) is a hill, index 2 (1) is a valley, index 3 (6) is a hill.',
    },
    {
      input: 'nums = [6,6,5,5,4,1]',
      output: '0',
      explanation: 'After dedup: [6,5,4,1]. Strictly decreasing — no hills or valleys.',
    },
    {
      input: 'nums = [1,3,2,3,1]',
      output: '3',
      explanation: 'Index 1 (3) is a hill, index 2 (2) is a valley, index 3 (3) is a hill. Total: 3.',
    },
  ],
  hints: [
    'First collapse consecutive duplicates into a single value.',
    'After deduplication, iterate over the interior elements and check both neighbors.',
    'An element is a hill if strictly greater than both neighbors; a valley if strictly less.',
  ],
  functionName: 'countHillValley',
  params: ['nums'],
  starterCode: {
    javascript: `function countHillValley(nums) {
  const a = nums.filter((v, i) => i === 0 || v !== nums[i - 1]);
  let count = 0;
  for (let i = 1; i < a.length - 1; i++) {
    if (a[i] > a[i-1] && a[i] > a[i+1]) count++;
    else if (a[i] < a[i-1] && a[i] < a[i+1]) count++;
  }
  return count;
}`,
    typescript: `function countHillValley(nums: number[]): number {
  const a = nums.filter((v, i) => i === 0 || v !== nums[i - 1]);
  let count = 0;
  for (let i = 1; i < a.length - 1; i++) {
    if (a[i]! > a[i-1]! && a[i]! > a[i+1]!) count++;
    else if (a[i]! < a[i-1]! && a[i]! < a[i+1]!) count++;
  }
  return count;
}`,
    python: `def countHillValley(nums):
    a = [v for i, v in enumerate(nums) if i == 0 or v != nums[i - 1]]
    count = 0
    for i in range(1, len(a) - 1):
        if a[i] > a[i-1] and a[i] > a[i+1]:
            count += 1
        elif a[i] < a[i-1] and a[i] < a[i+1]:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 1, 6, 5]], expected: 3 },
    { args: [[6, 6, 5, 5, 4, 1]], expected: 0 },
    { args: [[1, 3, 2, 3, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[3, 1, 3, 1, 3]], expected: 3 },
    { args: [[1, 2, 3, 2, 1]], expected: 1 },
    { args: [[1, 2, 2, 3, 1]], expected: 1 },
  ],
};
