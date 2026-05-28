import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-health-to-beat-the-game',
  title: 'Minimum Health to Beat Game',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are playing a game with \`n\` levels. In each level \`i\`, enemies deal \`damage[i]\` damage to you. You have an \`armor\` that can reduce damage from **one** enemy in the game by \`armor\` (but not below 1).

Return the **minimum** health you need to start with to beat all levels (health must be > 0 after each level).`,
  constraints: [
    'n == damage.length',
    '1 <= n <= 10^5',
    '0 <= damage[i] <= 10^5',
    '0 <= armor <= 10^5',
  ],
  examples: [
    {
      input: 'damage = [2,7,4,3], armor = 4',
      output: '13',
      explanation: 'Use armor on damage 7: takes max(1,7-4)=3. Total = 2+3+4+3=12. Need health=13.',
    },
    {
      input: 'damage = [2,5,3,4], armor = 7',
      output: '11',
      explanation: 'Use armor on damage 5: takes max(1,5-7)=1. Total = 2+1+3+4=10. Need health=11.',
    },
  ],
  hints: [
    'Use armor on the level with maximum damage to maximize savings.',
    'savings = min(maxDamage - 1, armor). The -1 is because you always take at least 1 damage.',
    'Answer = sum(damage) - savings + 1.',
  ],
  functionName: 'minimumHealth',
  params: ['damage', 'armor'],
  starterCode: {
    javascript: 'function minimumHealth(damage, armor) {\n\n}\n',
    python: 'def minimumHealth(damage, armor):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 7, 4, 3], 4], expected: 13 },
    { args: [[2, 5, 3, 4], 7], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1], 10], expected: 2 },
    { args: [[3, 3, 3], 2], expected: 8 },
    { args: [[10, 1, 1], 5], expected: 8 },
    { args: [[2, 5, 3, 4], 0], expected: 15 },
  ],
};
