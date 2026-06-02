import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-group-all-ones-together',
  title: 'Minimum Swaps to Group All 1\'s Together',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a binary array \`data\`, return the minimum number of swaps required to group all \`1\`'s present in the array together in **any place** in the array.`,
  constraints: [
    '1 <= data.length <= 10^5',
    'data[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'data = [1,0,1,0,1]',
      output: '1',
      explanation: 'There are 3 ones. Best window of size 3: [1,0,1] has 2 ones, needs 1 swap.',
    },
    {
      input: 'data = [0,0,0,1,0]',
      output: '0',
      explanation: 'There is 1 one already in one place.',
    },
    {
      input: 'data = [1,0,1,0,1,0,0,1,1,0,1]',
      output: '3',
      explanation: 'Group of 6 ones, best window has 3 ones, needs 3 swaps.',
    },
  ],
  hints: [
    'Level 1: The total number of 1s, call it k, tells you the window size. Any group of k consecutive elements can hold all 1s; swaps needed = k minus the number of 1s already in that window.',
    'Level 2: Slide a window of size k across the array. Track the count of 1s in the window using a running sum.',
    'Level 3: `minSwaps = k - maxOnesInWindow`.',
  ],
  functionName: 'minSwaps',
  params: ['data'],
  starterCode: {
    javascript: `function minSwaps(data) {
  const k = data.reduce((s, x) => s + x, 0);
  if (k <= 1) return 0;
  let ones = 0;
  for (let i = 0; i < k; i++) ones += data[i];
  let maxOnes = ones;
  for (let i = k; i < data.length; i++) {
    ones += data[i] - data[i - k];
    maxOnes = Math.max(maxOnes, ones);
  }
  return k - maxOnes;
}`,
    typescript: `function minSwaps(data: number[]): number {
  const k = data.reduce((s, x) => s + x, 0);
  if (k <= 1) return 0;
  let ones = 0;
  for (let i = 0; i < k; i++) ones += data[i]!;
  let maxOnes = ones;
  for (let i = k; i < data.length; i++) {
    ones += data[i]! - data[i - k]!;
    maxOnes = Math.max(maxOnes, ones);
  }
  return k - maxOnes;
}`,
    python: `def minSwaps(data):
    data = [int(x) for x in (data.to_py() if hasattr(data, 'to_py') else data)]
    k = sum(data)
    if k <= 1: return 0
    ones = sum(data[:k])
    max_ones = ones
    for i in range(k, len(data)):
        ones += data[i] - data[i - k]
        max_ones = max(max_ones, ones)
    return k - max_ones`,
  },
  visibleTests: [
    { args: [[1, 0, 1, 0, 1]], expected: 1 },
    { args: [[0, 0, 0, 1, 0]], expected: 0 },
    { args: [[1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[1, 0, 0, 1]], expected: 1 },
    { args: [[0, 1, 0, 1, 0, 1, 0]], expected: 1 },
    { args: [[1, 1, 0, 0, 1, 1]], expected: 2 },
  ],
};
