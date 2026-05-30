import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-two-2d-arrays-by-summing-values',
  title: 'Merge Two 2D Arrays by Summing Values',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given two **2D** integer arrays \`nums1\` and \`nums2\`.

- \`nums1[i] = [id_i, val_i]\` indicate that the number with the id \`id_i\` has a value equal to \`val_i\`.
- \`nums2[i] = [id_i, val_i]\` indicate that the number with the id \`id_i\` has a value equal to \`val_i\`.

Each array contains **unique** ids and is sorted in **ascending** order by id.

Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

- Only ids that appear in at least one of the two arrays should be included in the result.
- Each id should be included **only once** and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.

Return the resulting array. The returned array must be sorted in ascending order by id.`,
  constraints: [
    '`1 <= nums1.length, nums2.length <= 200`',
    '`nums1[i].length == nums2[j].length == 2`',
    '`1 <= id_i <= 1000`',
    '`1 <= val_i <= 1000`',
    'Both arrays contain unique ids.',
    'Both arrays are in strictly ascending order by id.',
  ],
  examples: [
    {
      input: 'nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]',
      output: '[[1,6],[2,3],[3,2],[4,6]]',
      explanation: 'id=1: 2+4=6, id=2: 3+0=3, id=3: 0+2=2, id=4: 5+1=6.',
    },
    {
      input: 'nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]',
      output: '[[1,3],[2,4],[3,6],[4,3],[5,5]]',
      explanation: 'No ids overlap, so each entry appears once with its original value.',
    },
  ],
  hints: [
    'Use a two-pointer approach since both arrays are already sorted by id.',
    'Compare the current ids from each array: if equal, sum the values; if one is smaller, take it directly.',
    'Advance the pointer(s) accordingly. After one array is exhausted, append the rest of the other.',
  ],
  functionName: 'mergeArrays',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function mergeArrays(nums1, nums2) {

}`,
    typescript: `function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {

}`,
    python: `def mergeArrays(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]], expected: [[1, 6], [2, 3], [3, 2], [4, 6]] },
    { args: [[[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]], expected: [[1, 3], [2, 4], [3, 6], [4, 3], [5, 5]] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], [[1, 1]]], expected: [[1, 2]] },
    { args: [[[1, 5]], [[2, 3]]], expected: [[1, 5], [2, 3]] },
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 1], [2, 2], [3, 3]]], expected: [[1, 2], [2, 4], [3, 6]] },
    { args: [[[3, 10]], [[1, 5], [2, 7]]], expected: [[1, 5], [2, 7], [3, 10]] },
    { args: [[[1, 1], [3, 3]], [[2, 2], [4, 4]]], expected: [[1, 1], [2, 2], [3, 3], [4, 4]] },
  ],
};
