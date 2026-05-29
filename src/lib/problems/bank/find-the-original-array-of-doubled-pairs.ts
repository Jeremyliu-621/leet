import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-original-array-of-doubled-pairs',
  title: 'Find Original Array From Doubled Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `An integer array \`original\` is transformed into a **doubled** array \`changed\` by appending **twice the value** of every element in \`original\`, and then randomly **shuffling** the resulting array.

Given an array \`changed\`, return \`original\` if \`changed\` is a doubled array. If \`changed\` is not a doubled array, return an empty array. The elements in \`original\` may be returned in **any** order.`,
  constraints: [
    '`2 <= changed.length <= 10^5`',
    '`changed.length` is even.',
    '`0 <= changed[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'changed = [1,3,4,2,6,8]',
      output: '[1,3,4]',
      explanation: 'One possible original is [1,3,4]. Doubled: [1,2,3,6,4,8]. Shuffled to [1,3,4,2,6,8].',
    },
    {
      input: 'changed = [6,3,0,1]',
      output: '[]',
      explanation: 'changed is not a doubled array.',
    },
    {
      input: 'changed = [2,1,2,4,3,6]',
      output: '[1,2,3]',
      explanation: 'Pairs: 1→2, 2→4, 3→6.',
    },
  ],
  hints: [
    'Sort `changed` in ascending order and build a frequency map.',
    'Iterate through sorted values. If `freq[x] > 0`, you must pair it with `freq[2*x]`. Consume both.',
    'Special case: `x = 0` pairs with itself (`0*2 = 0`), so its frequency must be even.',
    `\`\`\`js
function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) return [];
  changed.sort((a, b) => a - b);
  const freq = new Map();
  for (const x of changed) freq.set(x, (freq.get(x) || 0) + 1);
  const result = [];
  for (const x of changed) {
    if (freq.get(x) === 0) continue;
    if (x === 0) {
      if (freq.get(0) % 2 !== 0) return [];
      const half = freq.get(0) / 2;
      for (let i = 0; i < half; i++) result.push(0);
      freq.set(0, 0);
      continue;
    }
    if ((freq.get(2 * x) || 0) === 0) return [];
    result.push(x);
    freq.set(x, freq.get(x) - 1);
    freq.set(2 * x, freq.get(2 * x) - 1);
  }
  return result;
}\`\`\``,
  ],
  functionName: 'findOriginalArray',
  params: ['changed'],
  starterCode: {
    javascript: `function findOriginalArray(changed) {

}`,
    typescript: 'function findOriginalArray(changed: number[]): number[] {\n\n}',
    python: `def findOriginalArray(changed):
    pass`,
  },
  visibleTests: [
    { args: [[1,3,4,2,6,8]], expected: [1,3,4] },
    { args: [[6,3,0,1]], expected: [] },
    { args: [[2,1,2,4,3,6]], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[0,0,0,0]], expected: [0,0] },
    { args: [[0,0,2,1]], expected: [0,1] },
    { args: [[4,8,2,4]], expected: [2,4] },
    { args: [[1,2]], expected: [1] },
    { args: [[2,1]], expected: [1] },
    { args: [[1,2,4,16]], expected: [] },
    { args: [[3,1,3,6,1,2]], expected: [] },
    { args: [[2,4,4,8]], expected: [2,4] },
  ],
};
