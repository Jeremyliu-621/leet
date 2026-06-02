import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-hours-of-training',
  title: 'Minimum Hours of Training to Win a Competition',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are entering a competition, and are given two **positive** integers \`initialEnergy\` and \`initialExperience\` denoting your initial energy and initial experience.

You are also given two **0-indexed** integer arrays \`energy\` and \`experience\`, each of length \`n\`.

You will face \`n\` opponents in order. The \`i\`th opponent has \`energy[i]\` energy and \`experience[i]\` experience. You can **only** beat the \`i\`th opponent if you have **strictly more** energy and experience. After each opponent you win against, your experience increases by \`experience[i]\`, but your energy decreases by \`energy[i]\`.

Before starting, you can train for some hours. Each hour of training increases either energy or experience by 1.

Return the **minimum** number of training hours required to defeat all \`n\` opponents.

**Approach:** Compute how many extra energy you need (sum all energy + 1 minus initialEnergy if negative). Then simulate opponents greedily for experience.`,
  constraints: [
    'n == energy.length == experience.length',
    '1 <= n <= 100',
    '1 <= initialEnergy, initialExperience, energy[i], experience[i] <= 100',
  ],
  examples: [
    {
      input: 'initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]',
      output: '8',
      explanation: 'Need 5 more experience (train 5h) and 3 more energy (train 3h). Total = 8.',
    },
    {
      input: 'initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]',
      output: '0',
      explanation: 'Already have enough energy (2>1) and experience (4>3).',
    },
  ],
  hints: [
    'For energy: you need sum(energy)+1 total, so train max(0, sum(energy)+1 - initialEnergy) hours.',
    'For experience: simulate; if cur < opp, add the deficit to training hours, then add opp exp.',
    '```js\nfunction minNumberOfHours(initE, initX, energy, experience) {\n  let hours = 0;\n  const totalE = energy.reduce((a,b)=>a+b,0)+1;\n  if (initE < totalE) { hours += totalE - initE; initE = totalE; }\n  let cur = initX;\n  for (let i = 0; i < experience.length; i++) {\n    if (cur <= experience[i]) { hours += experience[i]-cur+1; cur = experience[i]+1; }\n    cur += experience[i];\n  }\n  return hours;\n}\n```',
  ],
  functionName: 'minNumberOfHours',
  params: ['initialEnergy', 'initialExperience', 'energy', 'experience'],
  starterCode: {
    javascript: `function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
  let hours = 0;
  const totalE = energy.reduce((a, b) => a + b, 0) + 1;
  if (initialEnergy < totalE) { hours += totalE - initialEnergy; initialEnergy = totalE; }
  let cur = initialExperience;
  for (let i = 0; i < experience.length; i++) {
    if (cur <= experience[i]) { hours += experience[i] - cur + 1; cur = experience[i] + 1; }
    cur += experience[i];
  }
  return hours;
}`,
    typescript: `function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
  let hours = 0;
  const totalE = energy.reduce((a, b) => a + b, 0) + 1;
  if (initialEnergy < totalE) { hours += totalE - initialEnergy; initialEnergy = totalE; }
  let cur = initialExperience;
  for (let i = 0; i < experience.length; i++) {
    if (cur <= experience[i]!) { hours += experience[i]! - cur + 1; cur = experience[i]! + 1; }
    cur += experience[i]!;
  }
  return hours;
}`,
    python: `def minNumberOfHours(initialEnergy, initialExperience, energy, experience):
    energy = list(energy.to_py()) if hasattr(energy, 'to_py') else list(energy)
    experience = list(experience.to_py()) if hasattr(experience, 'to_py') else list(experience)
    hours = 0
    total_e = sum(energy) + 1
    if initialEnergy < total_e: hours += total_e - initialEnergy; initialEnergy = total_e
    cur = initialExperience
    for exp in experience:
        if cur <= exp: hours += exp - cur + 1; cur = exp + 1
        cur += exp
    return hours`,
  },
  visibleTests: [
    { args: [5, 3, [1, 4, 3, 2], [2, 6, 3, 1]], expected: 8 },
    { args: [2, 4, [1], [3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 1, [1], [1]], expected: 2 },
    { args: [10, 10, [1, 1, 1], [1, 1, 1]], expected: 0 },
    { args: [1, 1, [5], [5]], expected: 10 },
    { args: [3, 3, [1, 2, 3], [1, 2, 3]], expected: 4 },
    { args: [6, 3, [2, 2, 2], [3, 3, 3]], expected: 2 },
    { args: [5, 5, [3, 4], [2, 6]], expected: 3 },
  ],
};
