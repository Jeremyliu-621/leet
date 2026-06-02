import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-distinct-string-in-array',
  title: 'Kth Distinct String in an Array',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `A **distinct** string is a string that is present only **once** in an array.

Given an array of strings \`arr\`, and an integer \`k\`, return the \`k\`th **distinct** string present in \`arr\`. If there are fewer than \`k\` distinct strings, return an **empty string** \`""\`.

Note that the strings are considered in the **order** in which they appear in the array.`,
  constraints: [
    '1 <= k <= arr.length <= 1000',
    '1 <= arr[i].length <= 5',
    'arr[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'arr = ["d","b","c","b","c","a"], k = 2',
      output: '"a"',
      explanation: 'Distinct strings in order: "d", "a". The 2nd is "a".',
    },
    {
      input: 'arr = ["aaa","aa","a"], k = 1',
      output: '"aaa"',
      explanation: 'All are distinct. 1st is "aaa".',
    },
    {
      input: 'arr = ["a","b","a"], k = 3',
      output: '""',
      explanation: 'Only "b" is distinct. k=3 exceeds count of 1.',
    },
  ],
  hints: [
    'Count occurrences of each string.',
    'Iterate in order and collect strings with count = 1; return the kth one.',
    `\`\`\`js
function kthDistinct(arr, k) {
  const freq = {};
  for (const s of arr) freq[s] = (freq[s]||0)+1;
  let count = 0;
  for (const s of arr) if (freq[s]===1 && ++count===k) return s;
  return "";
}\`\`\``,
  ],
  functionName: 'kthDistinct',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function kthDistinct(arr, k) {
  const freq = {};
  for (const s of arr) freq[s] = (freq[s] || 0) + 1;
  let count = 0;
  for (const s of arr) if (freq[s] === 1 && ++count === k) return s;
  return '';
}`,
    typescript: `function kthDistinct(arr: string[], k: number): string {
  const freq: Record<string, number> = {};
  for (const s of arr) freq[s] = (freq[s] || 0) + 1;
  let count = 0;
  for (const s of arr) if (freq[s] === 1 && ++count === k) return s;
  return '';
}`,
    python: `def kthDistinct(arr, k):
    from collections import Counter
    freq = Counter(arr)
    count = 0
    for s in arr:
        if freq[s] == 1:
            count += 1
            if count == k: return s
    return ''`,
  },
  visibleTests: [
    { args: [['d', 'b', 'c', 'b', 'c', 'a'], 2], expected: 'a' },
    { args: [['aaa', 'aa', 'a'], 1], expected: 'aaa' },
    { args: [['a', 'b', 'a'], 3], expected: '' },
  ],
  hiddenTests: [
    { args: [['a'], 1], expected: 'a' },
    { args: [['a', 'a'], 1], expected: '' },
    { args: [['x', 'y', 'x', 'z'], 2], expected: 'z' },
    { args: [['a', 'b', 'c', 'd'], 3], expected: 'c' },
  ],
};
