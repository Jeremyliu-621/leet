import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-buckets-required-to-collect-rainwater',
  title: 'Minimum Number of Buckets Required to Collect Rainwater from Houses',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `You are given a **0-indexed** string \`street\`. Each character in \`street\` is either \`'H'\` representing a house or \`'.'\` representing an empty space.

You may place buckets on the **empty spaces** in \`street\` as follows:

- Buckets are placed on empty spaces \`'.'\`.
- Each placed bucket can collect rainwater from the **adjacent** (left or right) house.

Return the **minimum** number of buckets that need to be placed to collect rainwater from **every** house. If it is impossible to place buckets to collect rainwater from every house, return \`-1\`.

Note: It is guaranteed that there is no house directly adjacent to two other houses.`,
  constraints: [
    '1 <= street.length <= 10^5',
    'street[i] is either \'H\' or \'.\'.',
  ],
  examples: [
    {
      input: 'street = ".H.H."',
      output: '1',
      explanation: 'Place a bucket at position 2 (between the two houses). It covers both houses at positions 1 and 3.',
    },
    {
      input: 'street = "H.H.H"',
      output: '2',
      explanation: 'Place buckets at positions 1 and 3 to cover all three houses.',
    },
    {
      input: 'street = "HHH"',
      output: '-1',
      explanation: 'House at position 1 has no empty cell adjacent to it. Impossible.',
    },
  ],
  hints: [
    'Level 1: Greedily scan left to right. When you encounter a house \'H\', check if it can be covered.',
    'Level 2: For each \'H\', first check if it is already covered by a previously placed bucket (left neighbor is marked). If not, try to place a bucket to the right. If the right is also unavailable, try the left.',
    'Level 3: Scan i=0..n-1. If s[i]=\'H\' and s[i-1] is a placed bucket → skip (covered). Else if s[i+1]=\'.\' → mark s[i+1] as bucket, count++. Else if s[i-1]=\'.\' → mark s[i-1] as bucket, count++. Else → return -1.',
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
    { args: ['.H.H.'], expected: 1 },
    { args: ['H.H.H'], expected: 2 },
    { args: ['HHH'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['H'], expected: -1 },
    { args: ['.'], expected: 0 },
    { args: ['H.H'], expected: 1 },
    { args: ['H..H'], expected: 2 },
    { args: ['..H'], expected: 1 },
    { args: ['HH'], expected: -1 },
    { args: ['.H.'], expected: 1 },
    { args: ['H.H.H'], expected: 2 },
  ],
};
