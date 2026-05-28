import type { Problem } from '../types';

const JS_PREAMBLE = `
function removeDuplicatesIIRunner(nums) {
  const arr = [...nums];
  const k = removeDuplicates(arr);
  return arr.slice(0, k);
}
`.trim();

const PY_PREAMBLE = `
def removeDuplicatesIIRunner(nums):
    arr = list(nums)
    k = removeDuplicates(arr)
    return arr[:k]
`.trim();

export const problem: Problem = {
  id: 'remove-duplicates-sorted-array-ii',
  title: 'Remove Duplicates from Sorted Array II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the same.

Return \`k\` — the number of elements remaining after removal. The first \`k\` elements of \`nums\` must contain the final result.

> **Note:** A runner function \`removeDuplicatesIIRunner(nums)\` is pre-defined. It copies the array, calls \`removeDuplicates\`, and returns the first \`k\` elements.`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-10^4 <= nums[i] <= 10^4',
    'nums is sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3]',
      output: '[1,1,2,2,3]',
      explanation: 'k = 5, first 5 elements are [1,1,2,2,3]. The third 1 is removed.',
    },
    {
      input: 'nums = [0,0,1,1,1,1,2,3,3]',
      output: '[0,0,1,1,2,3,3]',
      explanation: 'k = 7, first 7 elements are [0,0,1,1,2,3,3]. The extra 1s are removed.',
    },
  ],
  hints: [
    'Use a two-pointer approach: one pointer for reading, one for writing.',
    'The write pointer can always accept an element if fewer than 2 of that element have been written so far.',
    'Compare the current element to the element two positions back in the result: if equal, skip; otherwise, write.',
  ],
  functionName: 'removeDuplicatesIIRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// removeDuplicatesIIRunner is pre-defined and calls your function below.
function removeDuplicates(nums) {

}`,
    python: `# removeDuplicatesIIRunner is pre-defined and calls your function below.
def removeDuplicates(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 2, 2, 3]], expected: [1, 1, 2, 2, 3] },
    { args: [[0, 0, 1, 1, 1, 1, 2, 3, 3]], expected: [0, 0, 1, 1, 2, 3, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 1]], expected: [1, 1] },
    { args: [[1, 1, 1]], expected: [1, 1] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 1, 2, 2, 3, 3]], expected: [1, 1, 2, 2, 3, 3] },
    { args: [[1, 1, 1, 1, 1]], expected: [1, 1] },
    { args: [[-1, -1, 0, 0, 0, 1, 1, 2]], expected: [-1, -1, 0, 0, 1, 1, 2] },
  ],
};
