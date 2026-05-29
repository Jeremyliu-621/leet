import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-iii',
  title: 'Jump Game III',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `Given an array \`arr\` of non-negative integers and integer \`start\`, you can jump from index \`i\` to \`i + arr[i]\` or \`i - arr[i]\`. Return \`true\` if you can reach any index with value 0.`,
  constraints: [
    '1 <= arr.length <= 5 * 10^4',
    '0 <= arr[i] < arr.length',
    '0 <= start < arr.length',
  ],
  examples: [
    {
      input: 'arr = [4,2,3,0,3,1,2], start = 5',
      output: 'true',
      explanation: 'Path: 5→4→1→3 (arr[3]=0).',
    },
    {
      input: 'arr = [3,0,2,1,2], start = 2',
      output: 'false',
    },
  ],
  hints: [
    'BFS/DFS from start; track visited indices.',
    'Valid next positions: i+arr[i] and i-arr[i] if within bounds and not yet visited.',
    'Return true if you reach any index where arr[index] === 0.',
  ],
  functionName: 'canReach',
  params: ['arr', 'start'],
  starterCode: {
    javascript: `function canReach(arr, start) {
  // BFS/DFS with visited set
}`,
    typescript: `function canReach(arr: number[], start: number): boolean {
  // BFS/DFS with visited set
}`,
    python: `def canReach(arr, start):
    # BFS/DFS with visited set
    pass`,
  },
  visibleTests: [
    { args: [[4,2,3,0,3,1,2], 5], expected: true },
    { args: [[3,0,2,1,2], 2], expected: false },
  ],
  hiddenTests: [
    { args: [[0], 0], expected: true },
    { args: [[1,1], 1], expected: false },
    { args: [[2,0,2], 0], expected: false },
    { args: [[4,2,3,0,3,1,2], 3], expected: true },
    { args: [[3,0,2,3,4], 2], expected: false },
  ],
};
