import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-players-into-teams-of-equal-skill',
  title: 'Divide Players Into Teams of Equal Skill',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a positive integer array \`skill\` of **even** length \`n\` where \`skill[i]\` is the skill of the \`i\`th player. Divide the players into \`n / 2\` teams of exactly 2 players of your choice.

The **chemistry** of a team is equal to the **product** of the skills of the 2 players on that team.

Return the sum of the **chemistry** of all the teams, or return \`-1\` if there is no way to divide the players into teams such that the total skill of each team is equal.

**Args:** \`skill: number[]\`

**Example 1:**

\`\`\`
Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation: Divide players into teams: (1,5), (2,4), (3,3). Each team has skill sum 6.
Chemistry = 1*5 + 2*4 + 3*3 = 5 + 8 + 9 = 22.
\`\`\`

**Example 2:**

\`\`\`
Input: skill = [3,4]
Output: 12
\`\`\`

**Example 3:**

\`\`\`
Input: skill = [1,1,2,3]
Output: -1
\`\`\``,
  constraints: [
    '2 <= skill.length <= 10^5',
    'skill.length is even',
    '1 <= skill[i] <= 1000',
  ],
  examples: [
    { input: 'skill = [3,2,5,1,3,4]', output: '22' },
    { input: 'skill = [3,4]', output: '12' },
    { input: 'skill = [1,1,2,3]', output: '-1' },
  ],
  hints: [
    'Sort the array. The only valid pairing strategy is to pair the smallest with the largest, the second smallest with the second largest, and so on.',
    'After sorting, check that every pair (skill[i], skill[n-1-i]) has the same sum. If any pair differs, return -1.',
    'Accumulate the product of each pair and return the total chemistry.',
  ],
  functionName: 'dividePlayers',
  params: ['skill'],
  starterCode: {
    javascript: 'function dividePlayers(skill) {\n  \n}\n',
    python: 'def dividePlayers(skill):\n    ',
    typescript: 'function dividePlayers(skill: number[]): number {\n  \n}\n',
  },
  visibleTests: [
    { args: [[3, 2, 5, 1, 3, 4]], expected: 22 },
    { args: [[3, 4]], expected: 12 },
    { args: [[1, 1, 2, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 2, 2, 2]], expected: 8 },
    { args: [[1, 2, 3, 5]], expected: -1 },
    { args: [[2, 3]], expected: 6 },
    { args: [[1, 10, 9, 2, 3, 8, 4, 7, 5, 6]], expected: 110 },
  ],
};
