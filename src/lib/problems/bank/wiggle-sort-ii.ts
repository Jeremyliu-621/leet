import type { Problem } from '../types';

const JS_PREAMBLE = `
function wiggleSortIIRunner(nums) {
  const arr = [...nums];
  wiggleSortII(arr);
  return arr;
}
`.trim();

const PY_PREAMBLE = `
def wiggleSortIIRunner(nums):
    arr = list(nums)
    wiggleSortII(arr)
    return arr
`.trim();

export const problem: Problem = {
  id: 'wiggle-sort-ii',
  title: 'Wiggle Sort II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, reorder it **in-place** such that:

\`nums[0] < nums[1] > nums[2] < nums[3] > ...\`

You may assume the input array always has a valid answer.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '0 <= nums[i] <= 5000',
    'It is guaranteed that there will be an answer for the given input nums',
  ],
  examples: [
    {
      input: 'nums = [1,5,1,1,6,4]',
      output: '[1,6,1,5,1,4]',
      explanation: '[1,4,1,5,1,6] is also accepted.',
    },
    {
      input: 'nums = [1,3,2,2,3,1]',
      output: '[2,3,1,3,1,2]',
    },
  ],
  hints: [
    'Sort a copy. Split into a smaller half and a larger half. Place the smaller half (in reverse order) at even indices and the larger half (in reverse order) at odd indices.',
    'Reversing each half before placement prevents equal elements from ending up adjacent when the median element appears in both halves.',
    "For nums = [1,1,1,4,5,6]: smaller = [1,1,1] → reversed [1,1,1] at 0,2,4; larger = [4,5,6] → reversed [6,5,4] at 1,3,5 → [1,6,1,5,1,4].",
  ],
  functionName: 'wiggleSortIIRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// wiggleSortIIRunner calls wiggleSortII(nums) which modifies in-place.\nfunction wiggleSortII(nums) {\n\n}\n',
    python: '# wiggleSortIIRunner calls wiggleSortII(nums) which modifies in-place.\ndef wiggleSortII(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 1, 1, 6, 4]], expected: [1, 6, 1, 5, 1, 4] },
    { args: [[1, 3, 2, 2, 3, 1]], expected: [2, 3, 1, 3, 1, 2] },
  ],
  hiddenTests: [
    { args: [[4, 5, 5, 6]], expected: [5, 6, 4, 5] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[3, 1, 4, 1, 5]], expected: [3, 5, 1, 4, 1] },
  ],
};
