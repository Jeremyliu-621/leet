import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-consecutive-cards-to-pick-up',
  title: 'Minimum Consecutive Cards to Pick Up',
  difficulty: 'medium',
  tags: ['hash-map', 'sliding-window'],
  description: `You are given an integer array \`cards\` where \`cards[i]\` represents the **value** of the \`i\`th card. A pair of cards are **matching** if both cards have the same value.

Return the **minimum** number of consecutive cards you have to pick up to contain a pair of matching cards among the picked cards. If it is impossible to have matching cards, return \`-1\`.`,
  constraints: [
    '1 <= cards.length <= 10^5',
    '0 <= cards[i] <= 10^6',
  ],
  examples: [
    {
      input: 'cards = [3,4,2,3,4,7]',
      output: '4',
      explanation: 'Pick up cards[0..3] = [3,4,2,3]. This contains a matching pair of 3s. Length = 4.',
    },
    {
      input: 'cards = [1,0,5,3]',
      output: '-1',
      explanation: 'No matching pairs.',
    },
  ],
  hints: [
    'Track the last index where each card value was seen.',
    'For each card, if its value was seen before, update the minimum window (current - last + 1).',
    `\`\`\`js
function minimumCardPickup(cards) {
  const last = new Map();
  let best = Infinity;
  for (let i = 0; i < cards.length; i++) {
    if (last.has(cards[i])) best = Math.min(best, i - last.get(cards[i]) + 1);
    last.set(cards[i], i);
  }
  return best === Infinity ? -1 : best;
}\`\`\``,
  ],
  functionName: 'minimumCardPickup',
  params: ['cards'],
  starterCode: {
    javascript: 'function minimumCardPickup(cards) {\n\n}\n',
    python: 'def minimumCardPickup(cards):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,4,2,3,4,7]], expected: 4 },
    { args: [[1,0,5,3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[0,0]], expected: 2 },
    { args: [[1,2,1,2,1]], expected: 3 },
    { args: [[1,2,3,4,5,1]], expected: 6 },
    { args: [[96,96,96]], expected: 2 },
  ],
};
