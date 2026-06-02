import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-nodes-from-linked-list-present-in-array',
  title: 'Delete Nodes From Linked List Present in Array',
  difficulty: 'medium',
  tags: ['linked-list', 'hash-map'],
  description: `You are given an array of integers \`nums\` and an array \`head\` representing the values of a linked list in order. Return the array of the remaining linked list after removing all nodes whose value appears in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= head.length <= 10^5',
    '1 <= nums[i], head[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3], head = [1,2,3,4,5]',
      output: '[4,5]',
      explanation: 'Nodes with values 1, 2, and 3 are removed.',
    },
    {
      input: 'nums = [1], head = [1,2,1,2,1,2]',
      output: '[2,2,2]',
      explanation: 'All nodes with value 1 are removed.',
    },
    {
      input: 'nums = [5], head = [1,2,3,4]',
      output: '[1,2,3,4]',
      explanation: '5 does not appear in the list, so nothing is removed.',
    },
  ],
  hints: [
    'Level 1: Build a Set from `nums` for O(1) lookup.',
    'Level 2: Iterate through `head`, keeping only the values not in the set.',
    'Level 3: `return head.filter(v => !set.has(v));`',
  ],
  functionName: 'deleteNodes',
  params: ['nums', 'head'],
  starterCode: {
    javascript: `function deleteNodes(nums, head) {
  const remove = new Set(nums);
  return head.filter(v => !remove.has(v));
}`,
    typescript: `function deleteNodes(nums: number[], head: number[]): number[] {
  const remove = new Set(nums);
  return head.filter(v => !remove.has(v));
}`,
    python: `def deleteNodes(nums, head):
    remove = set(int(x) for x in nums)
    return [v for v in head if int(v) not in remove]`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [1, 2, 3, 4, 5]], expected: [4, 5] },
    { args: [[1], [1, 2, 1, 2, 1, 2]], expected: [2, 2, 2] },
    { args: [[5], [1, 2, 3, 4]], expected: [1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [] },
    { args: [[2, 1], [1, 2, 3, 4, 5]], expected: [3, 4, 5] },
    { args: [[1, 3, 5], [1, 2, 3, 4, 5]], expected: [2, 4] },
    { args: [[100000], [1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: [] },
  ],
};
