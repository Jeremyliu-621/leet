import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-consecutive-cards-pickup',
  title: 'Minimum Consecutive Cards to Pick Up',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'sliding-window'],
  description: `You are given an integer array \`cards\` where \`cards[i]\` represents the **value** of the \`i\`th card. A pair of cards are **matching** if the cards have the **same** value.

Return the **minimum** number of consecutive cards you have to pick up to contain a pair of matching cards among the picked cards. If it is impossible to have matching cards, return \`-1\`.`,
  constraints: [
    '`1 <= cards.length <= 10^5`',
    '`0 <= cards[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'cards = [3,4,2,3,4,7]',
      output: '4',
      explanation: 'Pick cards [3,4,2,3] which contain a matching pair of 3. 4 cards were picked.',
    },
    {
      input: 'cards = [1,0,5,3]',
      output: '-1',
      explanation: 'There is no way to pick up a set of consecutive cards that contain a pair.',
    },
  ],
  hints: [
    'For each value, track the last index where it appeared. The minimum window for that value is (current index - last index + 1).',
    "Use a Map to store the most recent index for each card value. When a duplicate is found at index i, compute i - lastSeen + 1 and update the global minimum.",
    'const m=new Map<number,number>();let ans=Infinity;for(let i=0;i<cards.length;i++){if(m.has(cards[i]))ans=Math.min(ans,i-m.get(cards[i])!+1);m.set(cards[i],i);}return ans===Infinity?-1:ans;',
  ],
  functionName: 'minimumCardPickup',
  params: ['cards'],
  starterCode: {
    javascript: 'function minimumCardPickup(cards) {\n  \n}\n',
    typescript: "function minimumCardPickup(cards: number[]): number {\n  \n}",

    python: 'def minimumCardPickup(cards):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 2, 3, 4, 7]], expected: 4 },
    { args: [[1, 0, 5, 3]], expected: -1 },
    { args: [[1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: -1 },
    { args: [[1, 2, 1, 2, 1]], expected: 3 },
    { args: [[0, 0, 0]], expected: 2 },
  ],
};
