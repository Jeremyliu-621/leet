import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-number-of-occurrences',
  title: 'Unique Number of Occurrences',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given an array of integers \`arr\`, return \`true\` if the number of occurrences of each value in the array is **unique** or \`false\` otherwise.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '-1000 <= arr[i] <= 1000',
  ],
  examples: [
    { input: 'arr = [1,2,2,1,1,3]', output: 'true', explanation: '1 appears 3 times, 2 appears 2 times, 3 appears 1 time. All occurrence counts are unique.' },
    { input: 'arr = [1,2]', output: 'false', explanation: '1 and 2 both appear 1 time.' },
    { input: 'arr = [-3,0,1,-3,1,1,1,-3,10,0]', output: 'true', explanation: '-3 appears 3 times, 0 twice, 1 four times, 10 once. All unique.' },
  ],
  hints: [
    'Count each value with a hash map. Then check if all count values are distinct using a set.',
    'Count frequencies of each value. A mapping from values to counts is unique if all frequency values are distinct (no two values share the same frequency).',
    `\`\`\`js
const freq = {};
for (const x of arr) freq[x] = (freq[x]||0)+1;
const counts = Object.values(freq);
return new Set(counts).size === counts.length;\`\`\``
  ],
  functionName: 'uniqueOccurrences',
  params: ['arr'],
  starterCode: {
    javascript: 'function uniqueOccurrences(arr) {\n  \n}\n',
    typescript: "function uniqueOccurrences(arr: number[]): boolean {\n  \n}",

    python: 'def uniqueOccurrences(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1, 1, 3]], expected: true },
    { args: [[1, 2]], expected: false },
    { args: [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 1, 2, 2]], expected: false },
    { args: [[5, 5, 5, 3, 3, 1]], expected: true },
    { args: [[1, 2, 3]], expected: false },
  ],
};
