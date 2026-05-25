import type { Problem } from '../types';

export const problem: Problem = {
  id: 'group-people-given-group-size',
  title: 'Group the People Given the Group Size They Belong To',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `There are \`n\` people that are split into some unknown number of groups. Each person is labeled with a **unique ID** from \`0\` to \`n - 1\`.

You are given an integer array \`groupSizes\`, where \`groupSizes[i]\` is the size of the group that person \`i\` belongs to. For example, if \`groupSizes[1] = 3\`, then person \`1\` must be in a group of size \`3\`.

Return a list of groups there are. Each person should appear in **exactly one group**, and every person must be in a group. If there are multiple answers, **return any of them**. It is **guaranteed** that there will always be a valid answer for the given input.`,
  constraints: [
    'groupSizes.length == n',
    '1 <= n <= 500',
    '1 <= groupSizes[i] <= n',
  ],
  examples: [
    {
      input: 'groupSizes = [3,3,3,3,3,1,3]',
      output: '[[0,1,2],[5],[3,4,6]]',
      explanation: 'Persons 0,1,2 are the first 3 people with groupSize=3, so they form one group. Person 5 has groupSize=1. Persons 3,4,6 form the second group of 3.',
    },
    {
      input: 'groupSizes = [2,1,3,3,3,2]',
      output: '[[1],[2,3,4],[0,5]]',
      explanation: 'Person 1 has groupSize=1. Persons 2,3,4 have groupSize=3. Persons 0,5 have groupSize=2.',
    },
  ],
  hints: [
    'Group people by their groupSize value using a hash map.',
    'When a bucket reaches the required group size, flush it into the result and start a new bucket.',
    'The problem guarantees the input is valid, so every bucket will be flushed completely.',
  ],
  functionName: 'groupThePeople',
  params: ['groupSizes'],
  starterCode: {
    javascript: `function groupThePeople(groupSizes) {

}`,
    python: `def groupThePeople(groupSizes):
    pass`,
  },
  visibleTests: [
    { args: [[3, 3, 3, 3, 3, 1, 3]], expected: [[0, 1, 2], [5], [3, 4, 6]] },
    { args: [[2, 1, 3, 3, 3, 2]], expected: [[1], [2, 3, 4], [0, 5]] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: [[0], [1], [2]] },
    { args: [[2, 2]], expected: [[0, 1]] },
    { args: [[1, 2, 2, 1]], expected: [[0], [1, 2], [3]] },
  ],
};
