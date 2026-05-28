import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-to-array-form-of-integer',
  title: 'Add to Array-Form of Integer',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `The **array-form** of an integer \`num\` is an array representing its digits in left-to-right order. For example, for \`num = 1321\` the array form is \`[1,3,2,1]\`.

Given \`num\`, the array-form of an integer, and an integer \`k\`, return the **array-form** of the integer \`num + k\`.

**Example 1:**

\`\`\`
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
\`\`\`

**Example 2:**

\`\`\`
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
\`\`\`

**Example 3:**

\`\`\`
Input: num = [9,9,9,9,9], k = 1
Output: [1,0,0,0,0,0]
Explanation: 99999 + 1 = 100000
\`\`\``,
  constraints: [
    '1 <= num.length <= 10^4',
    '0 <= num[i] <= 9',
    'num does not contain any leading zeros except for the number 0 itself',
    '1 <= k <= 10^4',
  ],
  examples: [
    { input: 'num = [1,2,0,0], k = 34', output: '[1,2,3,4]' },
    { input: 'num = [2,7,4], k = 181', output: '[4,5,5]' },
    { input: 'num = [9,9,9,9,9], k = 1', output: '[1,0,0,0,0,0]' },
  ],
  hints: [
    'Work from the rightmost digit. Add `k` to the last element and track the carry (`Math.floor(sum / 10)`).',
    'Move left through the array, adding the carry at each position. After exhausting `num`, keep propagating any remaining carry from `k` itself.',
    'When there are still digits left in `k` (or a final carry remains) after processing all of `num`, prepend those digits to the front of the result array.',
  ],
  functionName: 'addToArrayForm',
  params: ['num', 'k'],
  starterCode: {
    javascript: 'function addToArrayForm(num, k) {\n  \n}\n',
    python: 'def addToArrayForm(num, k):\n    ',
  },
  visibleTests: [
    { args: [[1, 2, 0, 0], 34], expected: [1, 2, 3, 4] },
    { args: [[2, 7, 4], 181], expected: [4, 5, 5] },
    { args: [[9, 9, 9, 9, 9], 1], expected: [1, 0, 0, 0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[2, 1, 5], 806], expected: [1, 0, 2, 1] },
    { args: [[0], 10000], expected: [1, 0, 0, 0, 0] },
    { args: [[1], 999], expected: [1, 0, 0, 0] },
    { args: [[1, 2, 3], 1], expected: [1, 2, 4] },
    { args: [[9], 1], expected: [1, 0] },
    { args: [[1, 0, 0, 0], 9999], expected: [1, 0, 9, 9, 9] },
    { args: [[5], 5], expected: [1, 0] },
    { args: [[9, 9], 99], expected: [1, 9, 8] },
  ],
};
