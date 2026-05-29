import type { Problem } from '../types';

export const problem: Problem = {
  id: 'second-greater-element',
  title: 'Find All Second Greater Elements',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `Given a **0-indexed** integer array \`nums\`, find a 0-indexed integer array \`answer\` where \`answer[i]\` is the **second greater** integer of \`nums[i]\`.

The **second greater** integer of \`nums[i]\` is defined as follows:
1. Let all the indices with a value strictly greater than \`nums[i]\` that are to the right of \`i\` form a set, ordered from smallest to largest index. Call these indices \`j1, j2, ...\`.
2. The **second greater** integer of \`nums[i]\` is \`nums[j2]\` if \`j2\` exists, otherwise \`-1\`.

Return the array \`answer\`.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,4,0,9,6]',
      output: '[9,6,6,-1,-1]',
      explanation: 'For index 0 (val 2): first greater=4 at idx 1, second greater=9 at idx 3. For index 1 (val 4): first greater=9 at idx 3, second greater=6 at idx 4. For index 2 (val 0): first greater=9 at idx 3, second greater=6 at idx 4. Indices 3 and 4 have no second greater.',
    },
    {
      input: 'nums = [3,3]',
      output: '[-1,-1]',
      explanation: 'No element is strictly greater than 3 in the array, so both answers are -1.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '[3,4,5,-1,-1]',
      explanation: 'For index 0 (1): j1=1(2), j2=2(3). For index 1 (2): j1=2(3), j2=3(4). For index 2 (3): j1=3(4), j2=4(5). Indices 3 and 4 have no second greater.',
    },
  ],
  hints: [
    'Think of two monotone stacks: one for elements waiting for their first greater element, and one for elements waiting for their second.',
    'When processing nums[i], first pop from the "second" stack elements whose value < nums[i] — nums[i] is their second greater.',
    'Then pop from the "main" stack elements whose value < nums[i] — they have found their first greater, move them to the second stack. Finally push i onto the main stack.',
  ],
  functionName: 'secondGreaterElement',
  params: ['nums'],
  starterCode: {
    javascript: `function secondGreaterElement(nums) {

}`,
    typescript: `function secondGreaterElement(nums: number[]): number[] {

}`,
    python: `def secondGreaterElement(nums: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 0, 9, 6]], expected: [9, 6, 6, -1, -1] },
    { args: [[3, 3]], expected: [-1, -1] },
    { args: [[1, 2, 3, 4, 5]], expected: [3, 4, 5, -1, -1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [-1] },
    { args: [[5, 3, 4]], expected: [-1, -1, -1] },
    { args: [[1, 4, 3, 2, 6]], expected: [3, -1, -1, -1, -1] },
    { args: [[1, 1, 1]], expected: [-1, -1, -1] },
    // [1,2,1,3,2,4]: for val=1 j1=1(2),j2=3(3)→3; val=2 j1=3(3),j2=5(4)→4; val=1 j1=3,j2=4→2; rest -1
    { args: [[1, 2, 1, 3, 2, 4]], expected: [3, 4, 2, -1, -1, -1] },
    // [2,1,4,3,5]: val=2→j1=2(4),j2=3(3)→3; val=1→j1=2(4),j2=3(3)→3; rest -1
    { args: [[2, 1, 4, 3, 5]], expected: [3, 3, -1, -1, -1] },
    { args: [[6, 5, 4, 3, 2, 1]], expected: [-1, -1, -1, -1, -1, -1] },
    // [1,3,2,5,4]: val=1→j1=1(3),j2=2(2)→2; val=3→j1=3(5),j2=4(4)→4; val=2→j1=3(5),j2=4(4)→4
    { args: [[1, 3, 2, 5, 4]], expected: [2, 4, 4, -1, -1] },
  ],
};
