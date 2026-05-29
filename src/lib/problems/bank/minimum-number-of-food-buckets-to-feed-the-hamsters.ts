import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-food-buckets-to-feed-the-hamsters',
  title: 'Minimum Number of Food Buckets to Feed the Hamsters',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** string \`street\`. Each character in \`street\` is either \`'H'\`, representing the location of a hamster, or \`'.'\`, representing an empty space.

You want to place food buckets in the **empty spaces** in the street to feed the hamsters. A food bucket at position \`i\` can feed the hamster at position \`i - 1\` and the hamster at position \`i + 1\` (if they exist).

Return the **minimum** number of food buckets you need to place to feed all the hamsters. If it is **impossible** to feed all hamsters, return \`-1\`.`,
  constraints: [
    '1 <= street.length <= 10^5',
    'street[i] is either \'H\' or \'.\'',
  ],
  examples: [
    {
      input: 'street = "H..H"',
      output: '2',
      explanation: 'Place buckets at positions 1 and 2. Bucket at 1 feeds hamster at 0; bucket at 2 feeds hamster at 3.',
    },
    {
      input: 'street = "HHH"',
      output: '-1',
      explanation: 'No empty spaces exist adjacent to the middle hamster.',
    },
    {
      input: 'street = ".H.H."',
      output: '1',
      explanation: 'Place one bucket at position 2. It feeds both the hamster at 1 (left) and the hamster at 3 (right).',
    },
  ],
  hints: [
    'Greedily scan left-to-right. For each hamster, first check if it\'s already fed by a bucket placed to its left.',
    'If not already fed, prefer placing a bucket to its RIGHT (position i+1) — this may also feed the next hamster.',
    'If the right is unavailable (not empty), try placing a bucket to the LEFT (i-1). If both are impossible, return -1.',
    'Use a marker (e.g., change \'.\' to \'B\') to track placed buckets and detect already-fed hamsters.',
  ],
  functionName: 'minimumBuckets',
  params: ['street'],
  starterCode: {
    javascript: `function minimumBuckets(street) {

}`,
    typescript: `function minimumBuckets(street: string): number {

}`,
    python: `def minimumBuckets(street: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['H..H'], expected: 2 },
    { args: ['HHH'], expected: -1 },
    { args: ['.H.H.'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['H'], expected: -1 },
    { args: ['H.'], expected: 1 },
    { args: ['.H'], expected: 1 },
    { args: ['.'], expected: 0 },
    { args: ['H.H'], expected: 1 },
    { args: ['HH'], expected: -1 },
    { args: ['....H....'], expected: 1 },
    { args: ['H...H'], expected: 2 },
  ],
};
