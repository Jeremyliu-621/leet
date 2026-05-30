import type { Problem } from '../types';

export const problem: Problem = {
  id: 'group-the-people-given-the-group-size-they-belong-to',
  title: 'Group the People Given the Group Size They Belong To',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `There are \`n\` people whose **IDs** go from \`0\` to \`n - 1\` and each person belongs **exactly** to one group. Given the array \`groupSizes\` of length \`n\` telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

You can return any solution in the following format:
- \`answer[j]\` is an array that contains the IDs of the \`j-th\` group.
- The length of the \`j-th\` group is \`answer[j].length\`.

It is **guaranteed** that there exists at least one valid solution for the given input.`,
  constraints: [
    'groupSizes.length == n',
    '1 <= n <= 500',
    '1 <= groupSizes[i] <= n',
    'It is guaranteed that there will always be a valid solution for the given input.',
  ],
  examples: [
    {
      input: 'groupSizes = [3,3,3,3,3,3]',
      output: '[[0,1,2],[3,4,5]]',
      explanation: 'All 6 people require groups of size 3. Split them into two groups of 3.',
    },
    {
      input: 'groupSizes = [2,1,3,3,3,2]',
      output: '[[1],[0,5],[2,3,4]]',
      explanation:
        'Person 1 needs group size 1 → [1]. Persons 0,5 need size 2 → [0,5]. Persons 2,3,4 need size 3 → [2,3,4].',
    },
  ],
  hints: [
    'Group people by their required group size using a hash map.',
    'For each size k, collect all person IDs that need that group size.',
    'Slice the collected IDs into chunks of size k — each chunk is a valid group.',
  ],
  functionName: 'groupThePeople',
  params: ['groupSizes'],
  starterCode: {
    javascript: `function groupThePeople(groupSizes) {
  // your code here
}`,
    typescript: `function groupThePeople(groupSizes: number[]): number[][] {
  // your code here
}`,
    python: `def groupThePeople(groupSizes):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[3, 3, 3, 3, 3, 3]], expected: [[0, 1, 2], [3, 4, 5]] },
    { args: [[2, 1, 3, 3, 3, 2]], expected: [[0, 5], [1], [2, 3, 4]] },
    { args: [[1, 1, 1]], expected: [[0], [1], [2]] },
    { args: [[2, 2, 2, 2]], expected: [[0, 1], [2, 3]] },
    { args: [[4, 4, 4, 4, 2, 2]], expected: [[0, 1, 2, 3], [4, 5]] },
  ],
  hiddenTests: [
    { args: [[3, 3, 3]], expected: [[0, 1, 2]] },
    { args: [[2, 2, 2, 2, 2, 2]], expected: [[0, 1], [2, 3], [4, 5]] },
    { args: [[1, 2, 1, 2]], expected: [[0], [1, 3], [2]] },
    { args: [[3, 3, 3, 2, 2, 3, 3, 3]], expected: [[0, 1, 2], [3, 4], [5, 6, 7]] },
    { args: [[1]], expected: [[0]] },
  ],
};
