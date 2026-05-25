import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-players-into-teams-of-equal-skill',
  title: 'Divide Players Into Teams of Equal Skill',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a positive integer array \`skill\` of **even** length \`n\` where \`skill[i]\` is the skill of the \`i\`th player. Divide the players into \`n / 2\` teams of size 2 such that the total skill of each team is **equal**.

The **chemistry** of a team is equal to the **product** of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return \`-1\` if there is no way to divide the players into teams with equal total skill.`,
  constraints: [
    '2 <= skill.length <= 10^5',
    'skill.length is even',
    '1 <= skill[i] <= 1000',
  ],
  examples: [
    {
      input: 'skill = [3,2,5,1,3,4]',
      output: '22',
      explanation: 'Divide into teams (1,5), (2,4), (3,3). Each team sum = 6. Chemistry = 5 + 8 + 9 = 22.',
    },
    {
      input: 'skill = [3,4]',
      output: '12',
      explanation: 'One team (3,4) with chemistry 12.',
    },
    {
      input: 'skill = [1,1,2,3]',
      output: '-1',
      explanation: 'Cannot form teams with equal total skill.',
    },
  ],
  hints: [
    'Sort the array. Then pair the smallest with the largest.',
    'All pairs must have the same sum — check this condition.',
    'If all pairs have equal sum, return the sum of products.',
  ],
  functionName: 'dividePlayers',
  params: ['skill'],
  starterCode: {
    javascript: `function dividePlayers(skill) {

}`,
    python: `def dividePlayers(skill):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 5, 1, 3, 4]], expected: 22 },
    { args: [[3, 4]], expected: 12 },
    { args: [[1, 1, 2, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2, 2]], expected: 8 },
    { args: [[1, 4, 1, 4]], expected: 8 },
    { args: [[1, 2, 3, 4]], expected: 10 },
  ],
};
