import type { Problem } from '../types';

export const problem: Problem = {
  id: 'hand-of-straights',
  title: 'Hand of Straights',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size \`groupSize\`, and consists of \`groupSize\` consecutive cards.

Given an integer array \`hand\` where \`hand[i]\` is the value written on the \`i\`th card and an integer \`groupSize\`, return \`true\` if she can rearrange the cards, or \`false\` otherwise.`,
  constraints: [
    '`1 <= hand.length <= 10^4`',
    '`0 <= hand[i] <= 10^9`',
    '`1 <= groupSize <= hand.length`',
  ],
  examples: [
    {
      input: 'hand = [1,2,3,6,2,3,4,7,8], groupSize = 3',
      output: 'true',
      explanation: 'Alice\'s hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].',
    },
    {
      input: 'hand = [1,2,3,4,5], groupSize = 4',
      output: 'false',
      explanation: 'Alice\'s hand can\'t be rearranged into groups of 4.',
    },
  ],
  hints: [
    'Count each card\'s frequency. Process from smallest card: greedily form a group starting at that card, decrementing frequencies of the next groupSize cards.',
    'If `hand.length % groupSize !== 0`, return `false`. Use a sorted map of frequencies. At each step, start a group from the smallest available card and consume `groupSize` consecutive frequencies.',
    `\`\`\`js
if (hand.length % groupSize !== 0) return false;
const cnt = new Map();
for (const c of hand) cnt.set(c, (cnt.get(c)||0)+1);
const keys = [...cnt.keys()].sort((a,b)=>a-b);
for (const k of keys) {
  const n = cnt.get(k);
  if (!n) continue;
  for (let i = 0; i < groupSize; i++) {
    if ((cnt.get(k+i)||0) < n) return false;
    cnt.set(k+i, cnt.get(k+i)-n);
  }
}
return true;\`\`\``
  ],
  functionName: 'isNStraightHand',
  params: ['hand', 'groupSize'],
  starterCode: {
    javascript: 'function isNStraightHand(hand, groupSize) {\n  \n}\n',
    typescript: "function isNStraightHand(hand: number[], groupSize: number): boolean {\n  \n}",

    python: 'def isNStraightHand(hand, groupSize):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 6, 2, 3, 4, 7, 8], 3], expected: true },
    { args: [[1, 2, 3, 4, 5], 4], expected: false },
    { args: [[1, 2, 3], 3], expected: true },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: true },
    { args: [[1, 1, 2, 2, 3, 3], 3], expected: true },
    { args: [[1, 1, 1], 1], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: true },
    { args: [[1, 2, 3, 3, 4, 5], 3], expected: true },
  ],
};
