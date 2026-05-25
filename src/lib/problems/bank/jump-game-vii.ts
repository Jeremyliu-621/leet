import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-vii',
  title: 'Jump Game VII',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **0-indexed** binary string \`s\` and two integers \`minJump\` and \`maxJump\`. In the beginning, you are standing at index \`0\`, which is equal to \`'0'\`. You can move from index \`i\` to index \`j\` if the following conditions are fulfilled:

- \`i + minJump <= j <= min(i + maxJump, s.length - 1)\`, and
- \`s[j] == '0'\`.

Return \`true\` if you can reach index \`s.length - 1\` in \`s\`, or \`false\` otherwise.`,
  constraints: [
    '2 <= s.length <= 10^5',
    's[i] is either 0 or 1',
    's[0] == 0',
    '1 <= minJump <= maxJump < s.length',
  ],
  examples: [
    {
      input: 's = "011010", minJump = 2, maxJump = 3',
      output: 'true',
      explanation: 'Jump from 0 to 3, then 3 to 5.',
    },
    {
      input: 's = "01101110", minJump = 2, maxJump = 3',
      output: 'false',
    },
  ],
  hints: [
    'Use a prefix sum of reachable positions to efficiently count how many positions in [i-maxJump, i-minJump] are reachable.',
    'A position i is reachable if s[i] == "0" and at least one position in the window is reachable.',
    'Maintain a sliding window count of reachable positions in the allowed jump range.',
  ],
  functionName: 'canReach',
  params: ['s', 'minJump', 'maxJump'],
  starterCode: {
    javascript: `function canReach(s, minJump, maxJump) {

}`,
    python: `def canReach(s, minJump, maxJump):
    pass`,
  },
  visibleTests: [
    { args: ['011010', 2, 3], expected: true },
    { args: ['01101110', 2, 3], expected: false },
  ],
  hiddenTests: [
    { args: ['00', 1, 1], expected: true },
    { args: ['01', 1, 1], expected: false },
    { args: ['0000', 1, 2], expected: true },
    { args: ['000000000', 2, 5], expected: true },
  ],
};
