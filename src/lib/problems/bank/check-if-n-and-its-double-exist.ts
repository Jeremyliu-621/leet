import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-n-and-its-double-exist',
  title: 'Check If N and Its Double Exist',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`arr\` of integers, return \`true\` if and only if there exist two indices \`i\` and \`j\` such that:

- \`i != j\`
- \`0 <= i, j < arr.length\`
- \`arr[i] == 2 * arr[j]\``,
  constraints: [
    '2 <= arr.length <= 500',
    '-10^3 <= arr[i] <= 10^3',
  ],
  examples: [
    {
      input: 'arr = [10,2,5,3]',
      output: 'true',
      explanation: '10 == 2 * 5, so return true.',
    },
    {
      input: 'arr = [3,1,7,11]',
      output: 'false',
      explanation: 'No pair satisfies arr[i] == 2 * arr[j].',
    },
  ],
  hints: [
    'Use a hash set. For each element x, check whether 2*x or x/2 is already in the set.',
    'Be careful with zero: 0*2 == 0, but we need two distinct indices. Track whether you have seen a zero already.',
    'Insert each element into the set after checking, so you never compare an element against itself.',
  ],
  functionName: 'checkIfExist',
  params: ['arr'],
  starterCode: {
    javascript: `function checkIfExist(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(2 * x) || (x % 2 === 0 && seen.has(x / 2))) return true;
    seen.add(x);
  }
  return false;
}`,
    typescript: `function checkIfExist(arr: number[]): boolean {
  const seen = new Set<number>();
  for (const x of arr) {
    if (seen.has(2 * x) || (x % 2 === 0 && seen.has(x / 2))) return true;
    seen.add(x);
  }
  return false;
}`,
    python: `def checkIfExist(arr):
    seen = set()
    for x in arr:
        if 2 * x in seen or (x % 2 == 0 and x // 2 in seen):
            return True
        seen.add(x)
    return False`,
  },
  visibleTests: [
    { args: [[10, 2, 5, 3]], expected: true },
    { args: [[3, 1, 7, 11]], expected: false },
  ],
  hiddenTests: [
    { args: [[7, 1, 14, 11]], expected: true },
    { args: [[0, 0]], expected: true },
    { args: [[0, 1]], expected: false },
    { args: [[-2, 0, 10, -19, 4, 6, -8]], expected: false },
    { args: [[2, 4]], expected: true },
  ],
};
