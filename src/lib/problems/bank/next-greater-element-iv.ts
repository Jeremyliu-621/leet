import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element-iv',
  title: 'Next Greater Element IV',
  difficulty: 'hard',
  tags: ['stack'],
  description: `Given a 0-indexed array \`nums\`, return an array \`ans\` of the same length where \`ans[i]\` is the **second greater** integer of \`nums[i]\`.

The **second greater** integer of \`nums[i]\` is defined as follows: let \`j\` be the smallest index to the right of \`i\` with \`nums[j] > nums[i]\` (the first next greater element). Then let \`k\` be the smallest index to the right of \`j\` with \`nums[k] > nums[i]\` (the second next greater element). \`ans[i] = nums[k]\`, or \`-1\` if no such \`k\` exists.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,4,0,9,6]',
      output: '[9,6,6,-1,-1]',
      explanation:
        'For 2: first NGE is 4, second NGE is 9 → 9. For 4: first NGE is 9, second NGE is 6 → 6. For 0: first NGE is 9, second NGE is 6 → 6. For 9 and 6: no second NGE → -1.',
    },
    {
      input: 'nums = [3,3]',
      output: '[-1,-1]',
      explanation: 'No element is greater than 3 in either direction.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '[3,4,5,-1,-1]',
      explanation:
        'For 1: first NGE = 2, second NGE = 3. For 2: first = 3, second = 4. For 3: first = 4, second = 5. For 4 and 5: not enough NGEs.',
    },
  ],
  hints: [
    'Use two monotone stacks: stack1 for elements waiting for their first next greater element, and stack2 for elements that already found their first NGE and are waiting for their second.',
    'As you scan left to right, first pop from stack2 any index whose first NGE has been found and the current element is also greater than nums[index] — that current element is the second NGE.',
    'Then pop from stack1 any index where the current element exceeds nums[index] (first NGE found) and move them into stack2. Finally push the current index onto stack1.',
  ],
  functionName: 'secondGreaterElement',
  params: ['nums'],
  starterCode: {
    javascript: `function secondGreaterElement(nums) {

}`,
    python: `def secondGreaterElement(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 0, 9, 6]], expected: [9, 6, 6, -1, -1] },
    { args: [[3, 3]], expected: [-1, -1] },
    { args: [[1, 2, 3, 4, 5]], expected: [3, 4, 5, -1, -1] },
  ],
  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: [-1, -1, -1, -1, -1] },
    { args: [[1, 1, 1]], expected: [-1, -1, -1] },
    { args: [[2, 1, 3]], expected: [-1, -1, -1] },
    { args: [[1, 2]], expected: [-1, -1] },
  ],
};
