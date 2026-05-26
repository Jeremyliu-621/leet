import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-matches-tournament',
  title: 'Count of Matches in Tournament',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given an integer \`n\`, the number of teams in a tournament. The tournament follows these rules:

- If the current number of teams is **even**, each team pairs with another. There are \`n / 2\` matches and \`n / 2\` teams advance.
- If the current number of teams is **odd**, one team advances automatically (**bye**), and the rest pair up. There are \`(n - 1) / 2\` matches and \`(n - 1) / 2 + 1\` teams advance.

Return the **total number of matches** played in the tournament until one team wins.`,
  constraints: [
    '`1 <= n <= 200`',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '6',
      explanation: 'Round 1: 3 matches, 4 teams left. Round 2: 2 matches, 2 teams left. Round 3: 1 match. Total = 6.',
    },
    {
      input: 'n = 14',
      output: '13',
      explanation: 'Every match eliminates exactly one team, so 13 teams must be eliminated for 1 winner.',
    },
  ],
  hints: [
    'Simulate the rounds: keep halving n (with bye for odd) until n === 1.',
    'Or observe: every match eliminates exactly one team. To go from n teams to 1 winner, exactly n−1 eliminations (matches) are needed.',
    `\`\`\`js
function numberOfMatches(n) {
  return n - 1; // every match eliminates exactly one team
}
// Or simulate: let matches=0; while(n>1): if n%2===0: matches+=n/2,n=n/2; else: matches+=(n-1)/2,n=(n-1)/2+1; return matches\`\`\``,
  ],
  functionName: 'numberOfMatches',
  params: ['n'],
  starterCode: {
    javascript: `function numberOfMatches(n) {

}`,
    python: `def numberOfMatches(n):
    pass`,
  },
  visibleTests: [
    { args: [7], expected: 6 },
    { args: [14], expected: 13 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [100], expected: 99 },
    { args: [200], expected: 199 },
  ],
};
