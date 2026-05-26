import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-food-buckets',
  title: 'Minimum Number of Food Buckets to Feed the Hamsters',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** string \`street\`. Each character in \`street\` is either \`'H'\`, representing a house with a hamster, or \`'.'\`, representing an empty space.

You can place food buckets at **empty spaces** (i.e., at positions where \`street[i] == '.'\`). Each placed bucket can serve a hamster if the hamster is in an **adjacent** cell (directly left or right).

Hamsters that can be served by **two** buckets still need only one; every house must have **at least one** adjacent bucket.

Return the **minimum** number of buckets needed to feed all hamsters. If it is impossible to place buckets to feed all hamsters, return \`-1\`.`,
  constraints: [
    '1 <= street.length <= 10^5',
    'street[i] is either \'H\' or \'.\'.',
  ],
  examples: [
    {
      input: 'street = "H.H.H"',
      output: '2',
      explanation: 'Place buckets at indices 1 and 3. Bucket at 1 serves H at 0 and H at 2; bucket at 3 serves H at 2 and H at 4.',
    },
    {
      input: 'street = "H..H"',
      output: '2',
      explanation: 'Place buckets at indices 1 and 2. Bucket at 1 serves H at 0; bucket at 2 serves H at 3.',
    },
    {
      input: 'street = "HHH"',
      output: '-1',
      explanation: 'The middle H has no adjacent empty spaces, so it is impossible.',
    },
  ],
  hints: [
    'Greedily prefer placing a bucket to the right of a house (index i+1) if possible — it may also serve the next house.',
    'If the right space is taken or a wall, fall back to placing at the left (index i-1) if possible.',
    'If neither adjacent cell is available, return -1.',
  ],
  functionName: 'minimumBuckets',
  params: ['street'],
  starterCode: {
    javascript: 'function minimumBuckets(street) {\n\n}',
    python: 'def minimumBuckets(street):\n    pass',
  },
  visibleTests: [
    { args: ['H.H.H'], expected: 2 },
    { args: ['H..H'], expected: 2 },
    { args: ['HHH'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['.H.H.'], expected: 1 },
    { args: ['H'], expected: -1 },
    { args: ['.H.'], expected: 1 },
    { args: ['H.'], expected: 1 },
    { args: ['.H'], expected: 1 },
    { args: ['H.H'], expected: 1 },
    { args: ['HH'], expected: -1 },
    { args: ['H.H.H.H'], expected: 2 },
  ],
};
