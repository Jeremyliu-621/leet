import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-team-with-no-conflicts',
  title: 'Best Team With No Conflicts',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the **highest overall score**. The score of the team is the **sum** of scores of all the players in the team.

However, the basketball team is not allowed to have **conflicts**. A **conflict** exists if a younger player has a **strictly higher** score than an older player. A conflict does not occur between players of the **same** age.

Given two lists, \`scores\` and \`ages\`, where each \`scores[i]\` and \`ages[i]\` represents the score and age of the \`i\`th player, return the highest overall score of all possible basketball teams.

**DP:** Sort players by age (breaking ties by score). Then find the maximum sum subsequence where scores are non-decreasing — equivalent to LIS with sum instead of length.`,
  constraints: [
    '1 <= scores.length, ages.length <= 1000',
    'scores.length == ages.length',
    '1 <= scores[i] <= 10^6',
    '1 <= ages[i] <= 1000',
  ],
  examples: [
    {
      input: 'scores = [1,3,5,10,15], ages = [1,2,3,4,5]',
      output: '34',
      explanation: 'Choose all players. No conflict since score increases with age.',
    },
    {
      input: 'scores = [4,5,6,5], ages = [2,1,2,1]',
      output: '16',
      explanation: 'Choose all players. Players of the same age with any scores never conflict.',
    },
    {
      input: 'scores = [1,2,3,5], ages = [8,9,10,1]',
      output: '6',
      explanation: 'Choose players with scores [1,2,3]. Age-10 player cannot join because score-5 player (age 1) is younger but doesn\'t create a conflict if not selected.',
    },
  ],
  hints: [
    'Sort players by (age, score). Then for each player i, compute dp[i] = max team score ending at player i.',
    'dp[i] = max(dp[j] + scores[i]) for j < i where players[j].score <= players[i].score. No age conflict because ages are sorted.',
    'Answer = max(dp).',
  ],
  functionName: 'bestTeamScore',
  params: ['scores', 'ages'],
  starterCode: {
    javascript: `function bestTeamScore(scores, ages) {
  const n = scores.length;
  const p = Array.from({length: n}, (_, i) => [ages[i], scores[i]]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const dp = p.map(x => x[1]);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++)
      if (p[j][1] <= p[i][1]) dp[i] = Math.max(dp[i], dp[j] + p[i][1]);
  return Math.max(...dp);
}`,
    typescript: `function bestTeamScore(scores: number[], ages: number[]): number {
  const n = scores.length;
  const p = Array.from({length: n}, (_, i) => [ages[i]!, scores[i]!]).sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!);
  const dp = p.map(x => x[1]!);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < i; j++)
      if (p[j]![1]! <= p[i]![1]!) dp[i] = Math.max(dp[i]!, dp[j]! + p[i]![1]!);
  return Math.max(...dp);
}`,

    python: `def bestTeamScore(scores: list, ages: list) -> int:
    if hasattr(scores, 'to_py'): scores = scores.to_py()
    if hasattr(ages, 'to_py'): ages = ages.to_py()
    players = sorted(zip([int(a) for a in ages], [int(s) for s in scores]))
    n = len(players)
    dp = [s for _, s in players]
    for i in range(n):
        for j in range(i):
            if players[j][1] <= players[i][1]:
                dp[i] = max(dp[i], dp[j] + players[i][1])
    return max(dp)
`,
  },
  visibleTests: [
    { args: [[1,3,5,10,15], [1,2,3,4,5]], expected: 34 },
    { args: [[4,5,6,5], [2,1,2,1]], expected: 16 },
    { args: [[1,2,3,5], [8,9,10,1]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[5,4], [1,2]], expected: 5 },
    { args: [[3,5,3,7,2], [1,2,3,4,5]], expected: 15 },
    { args: [[5,5,5], [1,2,3]], expected: 15 },
  ],
};
