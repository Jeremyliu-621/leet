import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-distance-to-target-string-in-a-circular-array',
  title: 'Shortest Distance to Target String in a Circular Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** circular string array \`words\` and a string \`target\`. A **circular array** means that the array's end connects to the array's beginning.

- Formally, the next element of \`words[i]\` is \`words[(i + 1) % n]\` and the previous element of \`words[i]\` is \`words[(i - 1 + n) % n]\`.

Starting from \`startIndex\`, you can move to either the next word or the previous word with \`1\` step at a time.

Return the **shortest** distance needed to reach the string \`target\`. If the string \`target\` does not exist in \`words\`, return \`-1\`.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` and `target` consist of only lowercase English letters.',
    '`0 <= startIndex < words.length`',
  ],
  examples: [
    {
      input: 'words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1',
      output: '1',
      explanation: 'words[0] and words[4] are "hello". The closest is words[4] at distance 1 (go backward from index 1 to index 4 in a circle of 5).',
    },
    {
      input: 'words = ["a","b","leetcode"], target = "leetcode", startIndex = 0',
      output: '1',
      explanation: 'words[2] is "leetcode". Distance = min(|2-0|, 3-2) = min(2, 1) = 1.',
    },
    {
      input: 'words = ["i","eat","leetcode"], target = "ate", startIndex = 0',
      output: '-1',
      explanation: '"ate" is not in the array.',
    },
  ],
  hints: [
    'Iterate over every index i where words[i] == target.',
    'For each match, the circular distance from startIndex is min(|i - startIndex|, n - |i - startIndex|).',
    'Return the minimum of all such distances, or -1 if no match is found.',
  ],
  functionName: 'closetTarget',
  params: ['words', 'target', 'startIndex'],
  starterCode: {
    javascript: `function closetTarget(words, target, startIndex) {

}`,
    typescript: `function closetTarget(words: string[], target: string, startIndex: number): number {

}`,
    python: `def closetTarget(words, target, startIndex):
    pass`,
  },
  visibleTests: [
    { args: [['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1], expected: 1 },
    { args: [['a', 'b', 'leetcode'], 'leetcode', 0], expected: 1 },
    { args: [['i', 'eat', 'leetcode'], 'ate', 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [['a'], 'a', 0], expected: 0 },
    { args: [['a', 'b', 'c', 'a'], 'a', 2], expected: 1 },
    { args: [['x', 'y', 'z'], 'z', 0], expected: 1 },
    { args: [['x', 'y', 'z'], 'x', 2], expected: 1 },
    { args: [['a', 'b', 'c', 'd', 'e'], 'c', 0], expected: 2 },
    { args: [['a', 'b', 'c', 'd', 'e'], 'c', 4], expected: 2 },
    { args: [['a', 'b', 'c'], 'x', 0], expected: -1 },
  ],
};
