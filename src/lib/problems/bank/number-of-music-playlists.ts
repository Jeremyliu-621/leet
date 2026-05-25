import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-music-playlists',
  title: 'Number of Music Playlists',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Your music player contains \`n\` different songs. You want to listen to \`goal\` songs (not necessarily different) during your trip. To avoid boredom, you will create a playlist so that:

- Every song is played **at least once**.
- A song can only be played again only if \`k\` other songs have been played since last time it was played.

Given \`n\`, \`goal\`, and \`k\`, return the **number of possible playlists**. The answer will be very large, so return it **modulo 10^9 + 7**.

**DP:** \`dp[i][j]\` = number of playlists of length \`i\` using exactly \`j\` unique songs.

- Add a new song: \`dp[i-1][j-1] × (n - (j-1))\`
- Replay an old song: \`dp[i-1][j] × max(0, j - k)\``,
  constraints: [
    '0 <= k < n <= goal <= 100',
  ],
  examples: [
    {
      input: 'n = 3, goal = 3, k = 1',
      output: '6',
      explanation: 'There are 6 possible playlists: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].',
    },
    {
      input: 'n = 2, goal = 3, k = 0',
      output: '6',
      explanation: 'There are 6 possible playlists.',
    },
    {
      input: 'n = 2, goal = 3, k = 1',
      output: '2',
    },
  ],
  hints: [
    'dp[i][j] = number of playlists of length i with exactly j distinct songs.',
    'Transition: to form dp[i][j], either add a new song (dp[i-1][j-1] × (n-j+1) choices), or replay a previously heard song that is now eligible (dp[i-1][j] × max(0, j-k) choices).',
    'Base case: dp[0][0] = 1. Answer is dp[goal][n].',
  ],
  functionName: 'numMusicPlaylists',
  params: ['n', 'goal', 'k'],
  starterCode: {
    javascript: 'function numMusicPlaylists(n, goal, k) {\n\n}\n',
    python: 'def numMusicPlaylists(n: int, goal: int, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [3, 3, 1], expected: 6 },
    { args: [2, 3, 0], expected: 6 },
    { args: [2, 3, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, 0], expected: 1 },
    { args: [2, 2, 0], expected: 2 },
    { args: [3, 3, 0], expected: 6 },
    { args: [5, 5, 2], expected: 120 },
  ],
};
