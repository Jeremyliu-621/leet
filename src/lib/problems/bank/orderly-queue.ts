import type { Problem } from '../types';

export const problem: Problem = {
  id: 'orderly-queue',
  title: 'Orderly Queue',
  difficulty: 'hard',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` and an integer \`k\`. You can choose one of the first \`k\` letters of \`s\` and append it at the end of the string.

Return the **lexicographically smallest** string you can make after applying the above move any number of times.`,
  constraints: [
    '`1 <= k <= s.length <= 1000`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "cba", k = 1',
      output: '"acb"',
      explanation: 'In the first move, we move the 1st character "c" to the end, obtaining "bac". In the second move, we move "b" to the end, obtaining "acb".',
    },
    {
      input: 's = "baaca", k = 3',
      output: '"aaabc"',
      explanation: 'With k >= 2 we can sort the characters: "aaabc".',
    },
  ],
  hints: [
    'When k == 1 the only operation is rotating the string: move the first character to the end. The answer is the minimum rotation.',
    'When k >= 2, you can eventually produce any permutation of the characters (bubble-sort argument: swapping adjacent elements is achievable). So just sort the string.',
    'For k == 1: generate all n rotations and return the minimum.',
    'For the minimum rotation you can use the O(n) Booth algorithm, but for n ≤ 1000 a straightforward O(n²) comparison is fine.',
  ],
  functionName: 'orderlyQueue',
  params: ['s', 'k'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function orderlyQueue(s, k) {

}`,
    typescript: `function orderlyQueue(s: string, k: number): string {

}`,
    python: `def orderlyQueue(s: str, k: int) -> str:
    `,
  },
  visibleTests: [
    { args: ['cba', 1], expected: 'acb' },
    { args: ['baaca', 3], expected: 'aaabc' },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 'a' },
    { args: ['zyx', 2], expected: 'xyz' },
    { args: ['abcd', 1], expected: 'abcd' },
    { args: ['bdca', 1], expected: 'abdc' },
    { args: ['dcba', 2], expected: 'abcd' },
  ],
};
