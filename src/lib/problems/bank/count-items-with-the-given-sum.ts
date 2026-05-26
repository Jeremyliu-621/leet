import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-items-with-the-given-sum',
  title: 'Count Elements With Maximum Frequency',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

Return the **total frequencies** of elements in \`nums\` such that those elements all have the **maximum** frequency.

The **frequency** of an element is the number of occurrences of that element in the array.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,1,4]',
      output: '4',
      explanation: 'Elements 1 and 2 both have frequency 2, which is the max. Total = 2 + 2 = 4.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '5',
      explanation: 'All elements have frequency 1 (the max). Total = 5.',
    },
  ],
  hints: [
    'Count the frequency of each element.',
    'Find the maximum frequency, then sum up counts of all elements with that frequency.',
    `\`\`\`js
// count max-frequency elements
function maxFrequencyElements(nums) {
  const freq = {};
  for (const n of nums) freq[n] = (freq[n]||0)+1;
  const maxF = Math.max(...Object.values(freq));
  return Object.values(freq).filter(f => f===maxF).reduce((a,b)=>a+b,0);
}\`\`\``,
  ],
  functionName: 'maxFrequencyElements',
  params: ['nums'],
  starterCode: {
    javascript: `function maxFrequencyElements(nums) {

}`,
    python: `def maxFrequencyElements(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 1, 4]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 2]], expected: 2 },
    { args: [[3, 3, 2, 2, 1]], expected: 4 },
  ],
};
