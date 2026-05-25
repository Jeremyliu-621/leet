import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-array-strictly-increasing',
  title: 'Make Array Strictly Increasing',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given two integer arrays \`arr1\` and \`arr2\`, return the minimum number of operations needed to make \`arr1\` strictly increasing.

In one operation, you can replace any element of \`arr1\` with any element from \`arr2\`.

Return \`-1\` if it is impossible to make \`arr1\` strictly increasing.

**Approach:** Sort and deduplicate \`arr2\`. Use DP where the state tracks the last value placed in \`arr1\` mapped to the minimum operations needed. For each element of \`arr1\`, either keep it (if it exceeds the previous value) or replace it with any larger element from \`arr2\`.`,
  constraints: [
    '1 <= arr1.length, arr2.length <= 2000',
    '0 <= arr1[i], arr2[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]',
      output: '1',
      explanation: 'Replace arr1[2]=3 with arr2[3]=4. arr1 becomes [1,5,4,6,7]... actually replace with a value from arr2 that fits. Replace arr1[1]=5 with 2: [1,2,3,6,7]. 1 operation.',
    },
    {
      input: 'arr1 = [1,5,3,6,7], arr2 = [4,3,1]',
      output: '2',
      explanation: 'Replace arr1[1]=5 with 3, arr1[2]=3 with 4. arr1 becomes [1,3,4,6,7]. 2 operations.',
    },
    {
      input: 'arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]',
      output: '-1',
      explanation: 'It is impossible to make arr1 strictly increasing.',
    },
  ],
  hints: [
    'Sort and deduplicate arr2 first to avoid redundant states.',
    'DP state: Map from "last value used" → minimum operations. Start with `{-Infinity → 0}`.',
    'For each arr1[i]: if arr1[i] > last, we can keep it (same ops); for each arr2[j] > last, we can replace arr1[i] with arr2[j] (ops+1). Take the minimum over all transitions.',
  ],
  functionName: 'makeArrayIncreasing',
  params: ['arr1', 'arr2'],
  starterCode: {
    javascript: `function makeArrayIncreasing(arr1, arr2) {
  // Sort and deduplicate arr2, then use DP

}`,
    python: `def makeArrayIncreasing(arr1, arr2):
    # Sort and deduplicate arr2, then use DP
    pass
`,
  },
  visibleTests: [
    { args: [[1, 5, 3, 6, 7], [1, 3, 2, 4]], expected: 1 },
    { args: [[1, 5, 3, 6, 7], [4, 3, 1]], expected: 2 },
    { args: [[1, 5, 3, 6, 7], [1, 6, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]], expected: 4 },
    { args: [[1, 1], [1, 2]], expected: 1 },
    { args: [[3], [1, 2, 3]], expected: 0 },
  ],
};
