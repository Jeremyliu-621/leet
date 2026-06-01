import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-hours-of-training-to-win-a-competition',
  title: 'Minimum Hours of Training to Win a Competition',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are entering a competition and are given two positive integers \`initialEnergy\` and \`initialExperience\` denoting your initial energy and experience respectively.

You are also given two integer arrays \`energy\` and \`experience\`, both of length \`n\`.

You will face \`n\` opponents **in order**. To defeat the \`i\`-th opponent, you need energy **strictly greater than** \`energy[i]\` and experience **strictly greater than** \`experience[i]\`.

Before each competition, you may train for some hours. For each hour of training:
- You can either gain **1 unit of energy** or **1 unit of experience**.

After defeating the \`i\`-th opponent, your energy is **reduced** by \`energy[i]\` and your experience is **increased** by \`experience[i]\`.

Return the **minimum** number of training hours required to defeat all opponents.`,
  constraints: [
    'n == energy.length == experience.length',
    '1 <= n <= 100',
    '1 <= initialEnergy, initialExperience <= 100',
    '1 <= energy[i], experience[i] <= 100',
  ],
  examples: [
    {
      input: 'initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]',
      output: '8',
      explanation: 'Train 1 energy before opponent 1 (need >4, have 4). Train 2 experience before opponent 1. Then train 3 energy before opponent 2, and 2 energy before opponent 3. Total = 1+2+3+2 = 8.',
    },
    {
      input: 'initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]',
      output: '0',
      explanation: '2 > 1 and 4 > 3 already satisfied, no training needed.',
    },
    {
      input: 'initialEnergy = 1, initialExperience = 1, energy = [1], experience = [1]',
      output: '2',
      explanation: 'Need energy > 1 (have 1, train 1 → 2) and experience > 1 (have 1, train 1 → 2). Total = 2.',
    },
  ],
  hints: [
    'Level 1: Greedily process each opponent in order. Before facing opponent i, check if current energy > energy[i] and current experience > experience[i]. If not, train the minimum needed.',
    'Level 2: For energy: if curEnergy <= energy[i], you need (energy[i] + 1 - curEnergy) more hours. For experience: if curExp <= experience[i], you need (experience[i] + 1 - curExp) more hours. After defeat: curEnergy -= energy[i], curExp += experience[i].',
    'Level 3: The greedy is optimal because training is free to "save" for later, but energy spent fighting is gone. Process linearly, accumulate total training hours.',
  ],
  functionName: 'minNumberOfHours',
  params: ['initialEnergy', 'initialExperience', 'energy', 'experience'],
  starterCode: {
    javascript: `function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {

}`,
    typescript: `function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {

}`,
    python: `def minNumberOfHours(initialEnergy, initialExperience, energy, experience):
    pass`,
  },
  visibleTests: [
    { args: [5, 3, [1, 4, 3, 2], [2, 6, 3, 1]], expected: 8 },
    { args: [2, 4, [1], [3]], expected: 0 },
    { args: [1, 1, [1], [1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, [1, 1], [1, 1]], expected: 3 },
    { args: [10, 10, [1, 1, 1], [1, 1, 1]], expected: 0 },
    { args: [3, 3, [4, 4, 4], [4, 4, 4]], expected: 12 },
    { args: [1, 100, [5, 5, 5], [1, 1, 1]], expected: 15 },
    { args: [100, 1, [1, 1, 1], [5, 5, 5]], expected: 5 },
    { args: [5, 1, [1, 2, 3], [10, 1, 1]], expected: 12 },
    { args: [2, 2, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], expected: 4 },
  ],
};
