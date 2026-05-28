import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-buckets-required',
  title: 'Minimum Number of Buckets Required to Collect Rainwater',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a **0-indexed** string \`street\`. Each character in \`street\` is either \`'H'\`, representing a house, or \`'.'\`, representing an empty space.

You can place buckets at **empty spaces** to collect rainwater that falls from adjacent houses. For each house that rains water, it must have a bucket either immediately to its left, or immediately to its right (or both). A bucket collects water from at most **two** adjacent houses.

Return the **minimum** number of buckets needed so that every house has at least one bucket adjacent to it. If it is impossible to place enough buckets, return \`-1\`.

It is guaranteed that:
- There will not be two adjacent houses without a space between them.`,
  constraints: [
    '1 <= street.length <= 10^5',
    'street[i] is either \'H\' or \'.\'.',
  ],
  examples: [
    {
      input: 'street = "H..H"',
      output: '2',
      explanation: 'Place buckets at indices 1 and 2. Each bucket is adjacent to one house.',
    },
    {
      input: 'street = ".H.H."',
      output: '1',
      explanation: 'Place one bucket at index 2. It is adjacent to both H at index 1 and H at index 3.',
    },
    {
      input: 'street = ".HHH."',
      output: '-1',
      explanation: 'The middle H at index 2 cannot have a bucket on either side since both sides are also H.',
    },
  ],
  hints: [
    'Greedily: for each house, try to place a bucket to its right first (to potentially serve the next house too).',
    'Iterate left to right. When you encounter an H, check if the right neighbor is empty — if so, place a bucket there (skip ahead). Otherwise, check the left neighbor. If neither works, return -1.',
    'Place a bucket at i+1 if possible (covers current and possibly next house). Otherwise place at i-1. If neither spot is available (both out of bounds or H), return -1.',
  ],
  functionName: 'minimumBuckets',
  params: ['street'],
  starterCode: {
    javascript: 'function minimumBuckets(street) {\n  // your code here\n}\n',
    typescript: "function minimumBuckets(street: string): number {\n  // your code here\n}",

    python: 'def minimumBuckets(street):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['H..H'], expected: 2 },
    { args: ['.H.H.'], expected: 1 },
    { args: ['.HHH.'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['H'], expected: -1 },
    { args: ['.H.'], expected: 1 },
    { args: ['H.H'], expected: 1 },
    { args: ['H.H.H'], expected: 2 },
    { args: ['H..H..H'], expected: 3 },
    { args: ['.H..H.'], expected: 2 },
  ],
};
