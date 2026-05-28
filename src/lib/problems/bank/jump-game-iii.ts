import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-iii',
  title: 'Jump Game III',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given an array of non-negative integers \`arr\`, you are initially positioned at \`start\` index of the array. When you are at index \`i\`, you can jump to \`i + arr[i]\` or \`i - arr[i]\`.

Check if you can reach any index with value \`0\`.

Notice that you can not jump outside of the array at any time.`,
  constraints: [
    '1 <= arr.length <= 5 * 10^4',
    '0 <= arr[i] < arr.length',
    '0 <= start < arr.length',
  ],
  examples: [
    {
      input: 'arr = [4,2,3,0,3,1,2], start = 5',
      output: 'true',
      explanation: 'All possible ways to reach at index 3 with value 0 are: index 5 → index 4 → index 1 → index 3, or index 5 → index 6 → index 4 → index 1 → index 3.',
    },
    {
      input: 'arr = [4,2,3,0,3,1,2], start = 0',
      output: 'true',
    },
    {
      input: 'arr = [3,0,2,1,2], start = 2',
      output: 'false',
      explanation: 'There is no way to reach at index 1 with value 0.',
    },
  ],
  hints: [
    'Use BFS or DFS from the start index. Mark visited nodes to avoid cycles.',
    'From index i, you can reach i + arr[i] and i - arr[i] if they are within bounds.',
    'Return true as soon as you reach any index with arr[index] === 0.',
  ],
  functionName: 'canReach',
  params: ['arr', 'start'],
  starterCode: {
    javascript: `function canReach(arr, start) {
  // Return true if any index with value 0 is reachable
}`,
    python: `def canReach(arr, start):
    # Return true if any index with value 0 is reachable
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 3, 0, 3, 1, 2], 5], expected: true },
    { args: [[4, 2, 3, 0, 3, 1, 2], 0], expected: true },
    { args: [[3, 0, 2, 1, 2], 2], expected: false },
  ],
  hiddenTests: [
    { args: [[0], 0], expected: true },
    { args: [[1, 2, 3], 2], expected: false },
    { args: [[2, 3, 0, 1, 4], 4], expected: true },
    { args: [[3, 0, 2, 1, 2], 2], expected: false },
  ],
};
