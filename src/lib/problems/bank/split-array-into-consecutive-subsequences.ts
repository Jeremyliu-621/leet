import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-array-into-consecutive-subsequences',
  title: 'Split Array into Consecutive Subsequences',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a sorted integer array \`nums\`, determine if it can be **split into one or more subsequences** such that each subsequence consists of **consecutive integers** and has a length of **at least 3**.

**Approach:** Greedy with two hash maps:
- \`freq[v]\`: remaining count of value \`v\`
- \`end[v]\`: number of subsequences ending exactly at \`v - 1\` (i.e., that can be extended by \`v\`)

For each value, prefer appending to an existing subsequence before starting a new one.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-1000 <= nums[i] <= 1000',
    'nums is sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,3,4,5]',
      output: 'true',
      explanation: 'Split into [1,2,3] and [3,4,5].',
    },
    {
      input: 'nums = [1,2,3,3,4,4,5,5]',
      output: 'true',
      explanation: 'Split into [1,2,3,4,5] and [3,4,5].',
    },
    {
      input: 'nums = [1,2,3,4,4,5]',
      output: 'false',
    },
  ],
  hints: [
    'For each number v, first try to extend an existing subsequence ending at v-1. If none exists and there are subsequences ending at v-2 or less, we cannot use v — return false.',
    'If no existing subsequence can be extended, try to start a new one: v, v+1, v+2 must all be available. Consume them and record a new sequence ending at v+2.',
    '```js\nconst freq = new Map(), end = new Map();\nfor (const v of nums) freq.set(v, (freq.get(v) ?? 0) + 1);\nfor (const v of nums) {\n  if (!freq.get(v)) continue;\n  if (end.get(v)) {\n    end.set(v, end.get(v) - 1);\n    end.set(v+1, (end.get(v+1) ?? 0) + 1);\n  } else if (freq.get(v+1) && freq.get(v+2)) {\n    freq.set(v+1, freq.get(v+1) - 1);\n    freq.set(v+2, freq.get(v+2) - 1);\n    end.set(v+3, (end.get(v+3) ?? 0) + 1);\n  } else return false;\n  freq.set(v, freq.get(v) - 1);\n}\nreturn true;\n```',
  ],
  functionName: 'isPossible',
  params: ['nums'],
  starterCode: {
    javascript: `function isPossible(nums) {
  // return true if nums can be split into valid consecutive subsequences

}`,
    typescript: "function isPossible(nums: number[]): boolean {\n  // return true if nums can be split into valid consecutive subsequences\n\n}",

    python: `def isPossible(nums: list) -> bool:
    # return True if nums can be split into valid consecutive subsequences
    pass
`,
  },
  visibleTests: [
    { args: [[1,2,3,3,4,5]], expected: true },
    { args: [[1,2,3,3,4,4,5,5]], expected: true },
    { args: [[1,2,3,4,4,5]], expected: false },
  ],
  hiddenTests: [
    { args: [[1,2,3]], expected: true },
    { args: [[1,2]], expected: false },
    { args: [[1,2,3,4,5,6]], expected: true },
    { args: [[1,1,1,2,2,2,3,3,3]], expected: true },
    { args: [[1,2,3,5,6,7]], expected: true },
  ],
};
