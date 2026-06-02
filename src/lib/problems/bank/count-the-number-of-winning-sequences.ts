import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-winning-sequences',
  title: 'Count the Number of Winning Sequences',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice and Bob are playing a fantasy battle game. In each round, Alice casts one of three spells: **Fire** (\`'F'\`), **Water** (\`'W'\`), or **Earth** (\`'E'\`). The spell outcomes are:

- Fire beats Earth
- Earth beats Water
- Water beats Fire

If Bob's spell beats Alice's, Bob gains +1 point. If Alice's spell beats Bob's, Bob loses 1 point. A tie scores 0.

Bob wins the game if his **total score** is strictly positive. You are given a string \`s\` representing Alice's spell sequence. Bob must also play a sequence of the **same length**, but **he cannot use the same spell in two consecutive rounds**.

Return the number of **distinct** sequences Bob can play that guarantee him a win, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is either \'F\', \'W\', or \'E\'',
  ],
  examples: [
    {
      input: 's = "WFF"',
      output: '4',
      explanation: 'Winning sequences: "WFW" (score 1), "EFW" (score 2), "EWE" (score 1), "EWF" (score 2). All others score ≤ 0.',
    },
    {
      input: 's = "F"',
      output: '1',
      explanation: 'Only "W" beats Alice\'s "F" with score +1. "E" loses (-1), "F" ties (0). Answer = 1.',
    },
  ],
  hints: [
    'Use DP: dp[last_spell][score] = number of ways to play the first i rounds ending with last_spell and total score.',
    'Score ranges from -n to n; offset by n so it fits in a 0..2n array.',
    'For each new round, iterate over all 3 possible spells (excluding the last one), compute the score delta, and accumulate.',
    'The answer is the sum of dp[*][offset > n] after all n rounds.',
  ],
  functionName: 'countWinningSequences',
  params: ['s'],
  starterCode: {
    javascript: `function countWinningSequences(s) {
  const MOD = 1000000007;
  const spellIdx = {F: 0, W: 1, E: 2};
  const delta = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]]; // delta[bob][alice]: +1 win, -1 lose, 0 tie
  const n = s.length, offset = n;
  // dp[last][score+offset] = count
  let dp = Array.from({length: 3}, () => new Array(2*n+1).fill(0));
  const alice0 = spellIdx[s[0]];
  for (let bob = 0; bob < 3; bob++) {
    const sc = delta[bob][alice0];
    dp[bob][sc + offset] = (dp[bob][sc + offset] + 1) % MOD;
  }
  for (let i = 1; i < n; i++) {
    const aliceI = spellIdx[s[i]];
    const ndp = Array.from({length: 3}, () => new Array(2*n+1).fill(0));
    for (let last = 0; last < 3; last++) {
      for (let sc = 0; sc <= 2*n; sc++) {
        if (!dp[last][sc]) continue;
        for (let bob = 0; bob < 3; bob++) {
          if (bob === last) continue;
          const nsc = sc + delta[bob][aliceI];
          if (nsc >= 0 && nsc <= 2*n) ndp[bob][nsc] = (ndp[bob][nsc] + dp[last][sc]) % MOD;
        }
      }
    }
    dp = ndp;
  }
  let ans = 0;
  for (let last = 0; last < 3; last++) {
    for (let sc = offset + 1; sc <= 2*n; sc++) {
      ans = (ans + dp[last][sc]) % MOD;
    }
  }
  return ans;
}`,
    typescript: `function countWinningSequences(s: string): number {
  const MOD = 1000000007;
  const spellIdx: Record<string, number> = {F: 0, W: 1, E: 2};
  const delta = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
  const n = s.length, offset = n;
  let dp = Array.from({length: 3}, () => new Array<number>(2*n+1).fill(0));
  const alice0 = spellIdx[s[0]!]!;
  for (let bob = 0; bob < 3; bob++) {
    const sc = delta[bob]![alice0]!;
    dp[bob]![sc + offset] = (dp[bob]![sc + offset]! + 1) % MOD;
  }
  for (let i = 1; i < n; i++) {
    const aliceI = spellIdx[s[i]!]!;
    const ndp = Array.from({length: 3}, () => new Array<number>(2*n+1).fill(0));
    for (let last = 0; last < 3; last++) {
      for (let sc = 0; sc <= 2*n; sc++) {
        if (!dp[last]![sc]) continue;
        for (let bob = 0; bob < 3; bob++) {
          if (bob === last) continue;
          const nsc = sc + delta[bob]![aliceI]!;
          if (nsc >= 0 && nsc <= 2*n) ndp[bob]![nsc] = (ndp[bob]![nsc]! + dp[last]![sc]!) % MOD;
        }
      }
    }
    dp = ndp;
  }
  let ans = 0;
  for (let last = 0; last < 3; last++) {
    for (let sc = offset + 1; sc <= 2*n; sc++) {
      ans = (ans + dp[last]![sc]!) % MOD;
    }
  }
  return ans;
}`,
    python: `def countWinningSequences(s: str) -> int:
    MOD = 10**9 + 7
    spell_idx = {'F': 0, 'W': 1, 'E': 2}
    delta = [[0,-1,1],[1,0,-1],[-1,1,0]]
    n = len(s); offset = n
    dp = [[0]*(2*n+1) for _ in range(3)]
    alice0 = spell_idx[s[0]]
    for bob in range(3):
        sc = delta[bob][alice0]
        dp[bob][sc + offset] = 1
    for i in range(1, n):
        alice_i = spell_idx[s[i]]
        ndp = [[0]*(2*n+1) for _ in range(3)]
        for last in range(3):
            for sc in range(2*n+1):
                if not dp[last][sc]: continue
                for bob in range(3):
                    if bob == last: continue
                    nsc = sc + delta[bob][alice_i]
                    if 0 <= nsc <= 2*n:
                        ndp[bob][nsc] = (ndp[bob][nsc] + dp[last][sc]) % MOD
        dp = ndp
    return sum(dp[last][sc] for last in range(3) for sc in range(offset+1, 2*n+1)) % MOD`,
  },
  visibleTests: [
    { args: ['WFF'], expected: 4 },
    { args: ['F'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['W'], expected: 1 },
    { args: ['E'], expected: 1 },
    { args: ['FF'], expected: 2 },
    { args: ['FW'], expected: 2 },
    { args: ['WE'], expected: 2 },
    { args: ['EE'], expected: 2 },
    { args: ['FFF'], expected: 3 },
    { args: ['EFF'], expected: 5 },
  ],
};
