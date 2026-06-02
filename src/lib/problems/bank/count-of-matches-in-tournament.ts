import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-matches-in-tournament',
  title: 'Count of Matches in Tournament',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an integer \`n\`, the number of teams in a tournament that obeys these rules:

- If the current number of teams is **even**, each team is paired with another team. A total of \`n / 2\` matches are played, and \`n / 2\` teams advance to the next round.
- If the current number of teams is **odd**, one team randomly advances in the tournament, and the rest of the teams are paired. A total of \`(n - 1) / 2\` matches are played, and \`(n - 1) / 2 + 1\` teams advance.

Return the **number of matches** played in the tournament until a winner is decided.

**Key insight:** Every match eliminates exactly one team. To crown one winner from \`n\` teams, exactly \`n - 1\` teams must be eliminated — so the answer is always \`n - 1\`.`,
  constraints: [
    '1 <= n <= 200',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '6',
      explanation: 'Round 1: 3 matches (4 advance). Round 2: 2 matches (2 advance). Round 3: 1 match. Total = 6.',
    },
    {
      input: 'n = 14',
      output: '13',
    },
    {
      input: 'n = 1',
      output: '0',
      explanation: 'Already one team, no matches needed.',
    },
  ],
  hints: [
    'Try simulating: while n > 1, if n is even add n/2 matches and set n = n/2; if odd add (n-1)/2 and set n = (n+1)/2.',
    'Notice that every match eliminates exactly one team. To get from n teams to 1 winner, you need n-1 eliminations.',
    '`return n - 1;`',
  ],
  functionName: 'numberOfMatches',
  params: ['n'],
  starterCode: {
    javascript: `function numberOfMatches(n) {
  return n - 1;
}`,
    typescript: `function numberOfMatches(n: number): number {
  return n - 1;
}`,
    python: `def numberOfMatches(n: int) -> int:
    return n - 1`,
  },
  visibleTests: [
    { args: [7], expected: 6 },
    { args: [14], expected: 13 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [4], expected: 3 },
    { args: [100], expected: 99 },
    { args: [200], expected: 199 },
    { args: [15], expected: 14 },
    { args: [50], expected: 49 },
  ],
};
