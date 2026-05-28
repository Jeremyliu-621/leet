import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-two-arrays-equal-by-reversing-subarrays',
  title: 'Make Two Arrays Equal by Reversing Subarrays',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given two integer arrays of equal length \`target\` and \`arr\`. In one step, you can select any **non-empty subarray** of \`arr\` and reverse it. You are allowed to make any number of steps.

Return \`true\` if you can make \`arr\` equal to \`target\`, or \`false\` otherwise.

**Key insight:** Since you can reverse any subarray any number of times, you can rearrange \`arr\` into any permutation you want. Therefore, the two arrays can be made equal if and only if they contain the **same elements with the same frequencies**.`,
  constraints: [
    'target.length == arr.length',
    '1 <= target.length <= 1000',
    '1 <= target[i] <= 1000',
    '1 <= arr[i] <= 1000',
  ],
  examples: [
    {
      input: 'target = [1,2,3,4], arr = [2,4,1,3]',
      output: 'true',
      explanation: 'We can reverse subarrays to rearrange arr into [1,2,3,4].',
    },
    {
      input: 'target = [7], arr = [7]',
      output: 'true',
      explanation: 'Both arrays are identical.',
    },
    {
      input: 'target = [3,7,9], arr = [3,7,11]',
      output: 'false',
      explanation: 'arr has element 11 but target has 9. They cannot be made equal.',
    },
  ],
  hints: [
    'Think about what invariant is preserved no matter how many reversals you apply.',
    'Reversals are just rearrangements. Any permutation is reachable from any other via repeated reversals. So check if both arrays have the same multiset of elements.',
    'Sort both arrays and compare element by element, or use a frequency map: count elements in target and subtract counts for arr. If all counts end at zero, return true.',
  ],
  functionName: 'canBeEqual',
  params: ['target', 'arr'],
  starterCode: {
    javascript: 'function canBeEqual(target, arr) {\n  // your code here\n}\n',
    typescript: "function canBeEqual(target: number[], arr: number[]): boolean {\n  // your code here\n}",

    python: 'def canBeEqual(target, arr):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], [2, 4, 1, 3]], expected: true },
    { args: [[7], [7]], expected: true },
    { args: [[3, 7, 9], [3, 7, 11]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], [1, 1, 1]], expected: true },
    { args: [[1, 2], [2, 1]], expected: true },
    { args: [[1, 2], [1, 3]], expected: false },
    { args: [[1, 1, 2], [1, 2, 2]], expected: false },
    { args: [[5, 3, 1], [1, 3, 5]], expected: true },
    { args: [[1000, 1000], [1000, 999]], expected: false },
  ],
};
