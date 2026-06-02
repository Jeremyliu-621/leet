import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-distance-in-arrays',
  title: 'Maximum Distance in Arrays',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given \`m\` arrays, where each array is sorted in **ascending order**.

You can pick up two integers from two **different** arrays (each array picks one) and calculate the distance. We define the distance between two integers \`a\` and \`b\` to be their absolute difference \`|a - b|\`.

Return the maximum distance.`,
  constraints: [
    'm == arrays.length',
    '2 <= m <= 10^5',
    '1 <= arrays[i].length <= 500',
    '-10^4 <= arrays[i][j] <= 10^4',
    'arrays[i] is sorted in ascending order.',
    'There will be at most 10^5 integers in all the arrays.',
  ],
  examples: [
    {
      input: 'arrays = [[1,2,3],[4,5],[1,2,3]]',
      output: '4',
      explanation: 'One way to reach the answer is to pick 1 from the first or third array and pick 5 from the second array.',
    },
    {
      input: 'arrays = [[1],[1]]',
      output: '0',
    },
  ],
  hints: [
    'Iterate through the arrays. For each array, the best candidates are its first (minimum) and last (maximum) elements.',
    'Track the running global minimum first-element and maximum last-element from all previously seen arrays.',
    'For the current array, compute distance as max(|last - globalMin|, |globalMax - first|) — this ensures both picks come from different arrays.',
    'Update globalMin and globalMax after computing the candidate distance.',
  ],
  functionName: 'maxDistance',
  params: ['arrays'],
  starterCode: {
    javascript: `function maxDistance(arrays) {
  let globalMin = arrays[0][0], globalMax = arrays[0][arrays[0].length - 1], ans = 0;
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    const first = arr[0], last = arr[arr.length - 1];
    ans = Math.max(ans, last - globalMin, globalMax - first);
    globalMin = Math.min(globalMin, first);
    globalMax = Math.max(globalMax, last);
  }
  return ans;
}`,
    typescript: `function maxDistance(arrays: number[][]): number {
  let globalMin = arrays[0]![0]!, globalMax = arrays[0]![arrays[0]!.length - 1]!, ans = 0;
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i]!;
    const first = arr[0]!, last = arr[arr.length - 1]!;
    ans = Math.max(ans, last - globalMin, globalMax - first);
    globalMin = Math.min(globalMin, first);
    globalMax = Math.max(globalMax, last);
  }
  return ans;
}`,
    python: `def maxDistance(arrays):
    global_min = arrays[0][0]
    global_max = arrays[0][-1]
    ans = 0
    for arr in arrays[1:]:
        first, last = arr[0], arr[-1]
        ans = max(ans, last - global_min, global_max - first)
        global_min = min(global_min, first)
        global_max = max(global_max, last)
    return ans`,
  },
  visibleTests: [
    { args: [[[1,2,3],[4,5],[1,2,3]]], expected: 4 },
    { args: [[[1],[1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1,4],[0,5]]], expected: 4 },
    { args: [[[1,2],[3,4],[5,6]]], expected: 5 },
    { args: [[[1,5],[3,4]]], expected: 3 },
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: 8 },
  ],
};
