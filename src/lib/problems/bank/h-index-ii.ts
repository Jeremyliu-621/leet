import type { Problem } from '../types';

export const problem: Problem = {
  id: 'h-index-ii',
  title: 'H-Index II',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given an integer array \`citations\` where \`citations[i]\` is the number of citations a researcher received for their \`i\`-th paper and \`citations\` is sorted in **ascending order**, return the researcher's **h-index**.

The **h-index** is defined as the maximum value of \`h\` such that the researcher has published at least \`h\` papers with at least \`h\` citations each.

You must write an algorithm with **O(log n)** runtime complexity.`,
  constraints: [
    'n == citations.length',
    '1 <= n <= 10^5',
    '0 <= citations[i] <= 1000',
    'citations is sorted in ascending order',
  ],
  examples: [
    {
      input: 'citations = [0,1,3,5,6]',
      output: '3',
      explanation: 'There are 3 papers with at least 3 citations each (citations[2]=3, citations[3]=5, citations[4]=6).',
    },
    {
      input: 'citations = [1,2,100]',
      output: '2',
      explanation: '2 papers have at least 2 citations each.',
    },
  ],
  hints: [
    'Binary search on the answer h (1 ≤ h ≤ n). There are (n - mid) papers from index mid onward.',
    'A candidate h is valid if citations[n - h] >= h. Find the largest such h.',
    'Use lo=0, hi=n. At each step check if citations[n - mid] >= mid. If yes, lo = mid, else hi = mid - 1.',
  ],
  functionName: 'hIndex',
  params: ['citations'],
  starterCode: {
    javascript: 'function hIndex(citations) {\n  \n}\n',
    typescript: 'function hIndex(citations: number[]): number {\n  \n}\n',
    python: 'def hIndex(citations):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 3, 5, 6]], expected: 3 },
    { args: [[1, 2, 100]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[100]], expected: 1 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[0, 1, 3, 5, 6]], expected: 3 },
    { args: [[0, 0, 4, 4]], expected: 2 },
    { args: [[11, 15]], expected: 2 },
  ],
};
