import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-digit',
  title: 'Nth Digit',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the \`n\`th digit of the infinite integer sequence \`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...\`].`,
  constraints: ['1 <= n <= 2^31 - 1'],
  examples: [
    { input: 'n = 3', output: '3', explanation: 'Sequence: 1,2,3,4,... → digit 3 is "3".' },
    { input: 'n = 11', output: '0', explanation: 'Sequence: 1,2,...,9,10,11 → position 11 is the "0" in "10".' },
  ],
  hints: [
    'Level 1: Group digits by length: 1-digit (1-9, 9 numbers), 2-digit (10-99, 90 numbers), etc. Find which group n falls in.',
    'Level 2: For group of d-digit numbers: count = 9*10^(d-1) numbers, total digits = d*count. Subtract from n until n <= d*count. Then find which number and which digit.',
    'Level 3: let d=1,cnt=9,start=1;while(n>d*cnt){n-=d*cnt;d++;cnt*=10;start*=10;}const num=start+Math.floor((n-1)/d);return+String(num)[(n-1)%d];',
  ],
  functionName: 'findNthDigit',
  params: ['n'],
  starterCode: {
    javascript: 'function findNthDigit(n) {\n  // your code here\n}\n',
    python: 'def findNthDigit(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 3 },
    { args: [11], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 1 },
    { args: [15], expected: 2 },
    { args: [100], expected: 5 },
  ],
};
