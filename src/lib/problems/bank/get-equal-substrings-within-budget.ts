import type { Problem } from '../types';

export const problem: Problem = {
  id: 'get-equal-substrings-within-budget',
  title: 'Get Equal Substrings Within Budget',
  difficulty: 'medium',
  tags: ['two-pointers', 'strings', 'sliding-window'],
  description: `You are given two strings \`s\` and \`t\` of the same length and an integer \`maxCost\`.

You want to change \`s\` to \`t\`. Changing the \`i\`-th character of \`s\` to the \`i\`-th character of \`t\` costs \`|s[i] - t[i]|\` (the absolute difference of the ASCII values).

Return the **maximum length** of a substring of \`s\` that can be changed to be the same as the corresponding substring of \`t\` with a cost **less than or equal to** \`maxCost\`.

If there is no substring that can be changed, return \`0\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    't.length == s.length',
    '0 <= maxCost <= 10^6',
    's and t consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", t = "bcdf", maxCost = 3',
      output: '3',
      explanation: 'Costs per position: [1,1,1,2]. Substrings within budget 3: "abc"→"bcd" costs 1+1+1=3 ≤ 3 (length 3). "bcd"→"cde" costs 1+1+2=4 > 3. Best length = 3.',
    },
    {
      input: 's = "abcd", t = "cdef", maxCost = 3',
      output: '1',
      explanation: 'Costs: [2,2,2,2]. Any single character costs 2 ≤ 3. Any two consecutive characters cost 4 > 3. Best length = 1.',
    },
    {
      input: 's = "abcd", t = "acde", maxCost = 0',
      output: '1',
      explanation: 'Costs: [0,1,1,1]. Only "a"→"a" costs 0 ≤ 0. Length = 1.',
    },
  ],
  hints: [
    'Precompute the cost array: `cost[i] = |s[i].charCodeAt(0) - t[i].charCodeAt(0)|`.',
    'Use a sliding window. Expand the right pointer, accumulating cost. When the total cost exceeds `maxCost`, shrink from the left.',
    'The answer is the maximum window size observed while total cost ≤ maxCost.',
  ],
  functionName: 'equalSubstring',
  params: ['s', 't', 'maxCost'],
  starterCode: {
    javascript: `function equalSubstring(s, t, maxCost) {
  let left = 0, cost = 0, result = 0;
  for (let right = 0; right < s.length; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}`,
    typescript: "function equalSubstring(s: string, t: string, maxCost: number): number {\n  let left = 0, cost = 0, result = 0;\n  for (let right = 0; right < s.length; right++) {\n    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));\n    while (cost > maxCost) {\n      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));\n      left++;\n    }\n    result = Math.max(result, right - left + 1);\n  }\n  return result;\n}",

    python: `def equalSubstring(s, t, maxCost):
    left = cost = result = 0
    for right in range(len(s)):
        cost += abs(ord(s[right]) - ord(t[right]))
        while cost > maxCost:
            cost -= abs(ord(s[left]) - ord(t[left]))
            left += 1
        result = max(result, right - left + 1)
    return result`,
  },
  visibleTests: [
    { args: ['abcd', 'bcdf', 3], expected: 3 },
    { args: ['abcd', 'cdef', 3], expected: 1 },
    { args: ['abcd', 'acde', 0], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a', 'z', 25], expected: 1 },
    { args: ['aaa', 'bbb', 3], expected: 3 },
    { args: ['aab', 'bca', 1], expected: 1 },
    { args: ['abcde', 'abcde', 100], expected: 5 },
    { args: ['krrgw', 'zjxss', 19], expected: 2 },
  ],
};
