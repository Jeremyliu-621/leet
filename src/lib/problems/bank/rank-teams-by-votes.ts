import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rank-teams-by-votes',
  title: 'Rank Teams by Votes',
  difficulty: 'medium',
  tags: ['arrays', 'simulation', 'hash-map'],
  description: `In a special ranking system, each voter gives a rank from highest to lowest to all teams participating in the competition.

The ordering of teams is decided by a voting system. Specifically, we sort the teams according to the following rules:

1. The team with the highest number of **first-choice votes** comes first.
2. If two or more teams are tied in first-choice votes, consider their second-choice votes. If still tied, consider third-choice votes, and so on.
3. If teams are still tied after exhausting all positions, sort them alphabetically by their team name (single uppercase letter).

Given an array of strings \`votes\`, return a string of all teams sorted by the described ranking system.`,
  constraints: [
    '1 <= votes.length <= 1000',
    '1 <= votes[i].length <= 26',
    'votes[i].length == votes[0].length',
    'votes[i][j] is an English **uppercase** letter.',
    'All characters of votes[i] are unique.',
    'All the characters that occur in votes[0] also occur in votes[j] where 1 <= j < votes.length.',
  ],
  examples: [
    {
      input: 'votes = ["ABC","ACB","ABC","ACB","ACB"]',
      output: '"ACB"',
      explanation:
        'A has 5 first-place votes (most). C has 3 second-place votes vs B\'s 2, so C ranks above B.',
    },
    {
      input: 'votes = ["WXYZ","XYZW"]',
      output: '"XWYZ"',
      explanation:
        'X and W are tied in first-place votes (1 each). X has 1 second-place vote, W has 0, so X > W. Y and Z follow similarly.',
    },
  ],
  hints: [
    'For each team (letter), count how many times it appears in each rank position across all votes. Store this as a count array of length equal to the number of teams.',
    'Sort the team letters using a custom comparator: compare their count arrays element by element. If all counts are equal, break the tie alphabetically.',
    'Build the count map in O(votes.length * teams) time, then sort in O(teams^2) time.',
  ],
  functionName: 'rankTeams',
  params: ['votes'],
  starterCode: {
    javascript: 'function rankTeams(votes) {\n  \n}\n',
    typescript: "function rankTeams(votes: string[]): string {\n  \n}",

    python: 'def rankTeams(votes):\n    pass\n',
  },
  visibleTests: [
    { args: [['ABC','ACB','ABC','ACB','ACB']], expected: 'ACB' },
    { args: [['WXYZ','XYZW']], expected: 'XWYZ' },
  ],
  hiddenTests: [
    // Single voter — result is same as their vote
    { args: [['BCA']], expected: 'BCA' },
    // Single team
    { args: [['M']], expected: 'M' },
    // All votes identical
    { args: [['AB','AB','AB']], expected: 'AB' },
    // All counts equal: tie broken alphabetically
    { args: [['BCA','CAB','CBA','ABC','ACB','BAC']], expected: 'ABC' },
    // Two teams, all votes same
    { args: [['ZA','ZA']], expected: 'ZA' },
    // Two voters split between two teams: A gets 1st once, B gets 1st once; tie → alphabetical
    { args: [['AB','BA']], expected: 'AB' },
  ],
};
