import type { Problem } from '../types';

const JS_PREAMBLE = `
function mergeSortedRunner(nums1, m, nums2, n) {
  const a = [...nums1.slice(0, m), ...new Array(n).fill(0)];
  const b = nums2.slice(0, n);
  merge(a, m, b, n);
  return a;
}
`.trim();

const PY_PREAMBLE = `
def mergeSortedRunner(nums1, m, nums2, n):
    a = list(nums1[:m]) + [0] * n
    b = list(nums2[:n])
    merge(a, m, b, n)
    return a
`.trim();

export const problem: Problem = {
  id: 'merge-sorted-array',
  title: 'Merge Sorted Array',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\`, sorted in **non-decreasing order**, and two integers \`m\` and \`n\`, representing the number of elements in \`nums1\` and \`nums2\` respectively.

**Merge** \`nums1\` and \`nums2\` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be **stored inside** the array \`nums1\`. To accommodate this, \`nums1\` has a length of \`m + n\`, where the first \`m\` elements denote the elements that should be merged, and the last \`n\` elements are set to \`0\` and should be ignored. \`nums2\` has a length of \`n\`.

> **Note:** A runner function \`mergeSortedRunner(nums1, m, nums2, n)\` is pre-defined. It copies the first \`m\` elements of \`nums1\` and all of \`nums2\`, calls your \`merge\`, and returns the result.`,
  constraints: [
    'nums1.length == m + n',
    'nums2.length == n',
    '0 <= m, n <= 200',
    '1 <= m + n <= 200',
    '-10^9 <= nums1[i], nums2[j] <= 10^9',
  ],
  examples: [
    {
      input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
      output: '[1,2,2,3,5,6]',
      explanation: 'Merging [1,2,3] and [2,5,6] gives [1,2,2,3,5,6].',
    },
    {
      input: 'nums1 = [1], m = 1, nums2 = [], n = 0',
      output: '[1]',
    },
    {
      input: 'nums1 = [0], m = 0, nums2 = [1], n = 1',
      output: '[1]',
    },
  ],
  hints: [
    'Start merging from the back to avoid overwriting elements you still need.',
    'Use three pointers: one at the end of nums1\'s valid range, one at the end of nums2, and one at the very end of nums1.',
    'Place the larger element last and advance the corresponding pointer.',
  ],
  functionName: 'mergeSortedRunner',
  params: ['nums1', 'm', 'nums2', 'n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// mergeSortedRunner is pre-defined and calls your function below.
function merge(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
  while (j >= 0) nums1[k--] = nums2[j--];
}`,
    typescript: `function mergeSortedRunner(nums1: number[], m: number, nums2: number[], n: number): number[] {
  const a = [...nums1.slice(0, m), ...new Array<number>(n).fill(0)];
  const b = nums2.slice(0, n);
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (a[i]! >= b[j]!) a[k--] = a[i--]!;
    else a[k--] = b[j--]!;
  }
  while (j >= 0) a[k--] = b[j--]!;
  return a;
}`,
    python: `# mergeSortedRunner is pre-defined and calls your function below.
def merge(nums1, m, nums2, n):
    if hasattr(nums1, 'to_py'): nums1 = list(nums1.to_py())
    if hasattr(nums2, 'to_py'): nums2 = list(nums2.to_py())
    i, j, k = m - 1, n - 1, m + n - 1
    while i >= 0 and j >= 0:
        if nums1[i] >= nums2[j]: nums1[k] = nums1[i]; i -= 1
        else: nums1[k] = nums2[j]; j -= 1
        k -= 1
    while j >= 0: nums1[k] = nums2[j]; k -= 1; j -= 1`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], expected: [1, 2, 2, 3, 5, 6] },
    { args: [[1], 1, [], 0], expected: [1] },
    { args: [[0], 0, [1], 1], expected: [1] },
  ],
  hiddenTests: [
    { args: [[2, 0], 1, [1], 1], expected: [1, 2] },
    { args: [[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[1, 2, 4, 5, 6, 0], 5, [3], 1], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3], expected: [-1, 0, 0, 1, 2, 2, 3, 3, 3] },
  ],
};
