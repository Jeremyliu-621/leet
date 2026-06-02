import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-wear-different-hats',
  title: 'Number of Ways to Wear Different Hats to Each Other',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `There are \`n\` people and \`40\` types of hats labeled from \`1\` to \`40\`.

Given a 2D integer array \`hats\` where \`hats[i]\` is a list of **preferred hats** that person \`i\` (0-indexed) likes, return the number of ways each person can wear a **different** hat, where each person **must** choose from their own preferred hats list.

Since the answer may be very large, return it **modulo 10^9 + 7**.

**Note:** Each hat can be worn by at most one person.`,
  constraints: [
    'n == hats.length',
    '1 <= n <= 10',
    '1 <= hats[i].length <= 40',
    '1 <= hats[i][j] <= 40',
    'hats[i] contains a list of unique integers',
  ],
  examples: [
    {
      input: 'hats = [[3,4],[4,5],[5]]',
      output: '1',
      explanation: 'Person 2 must wear hat 5. Person 1 must then wear hat 4. Person 0 must wear hat 3. Only 1 way.',
    },
    {
      input: 'hats = [[3,5,1],[3,5]]',
      output: '4',
      explanation:
        'Person 1 can wear hat 3 or 5. If person 1 wears hat 3, person 0 can wear hat 5 or 1 (2 options). If person 1 wears hat 5, person 0 can wear hat 3 or 1 (2 options). Total = 4.',
    },
    {
      input: 'hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]',
      output: '24',
      explanation: 'All 4 people can wear any of 4 hats and each must be distinct: 4! = 24.',
    },
  ],
  hints: [
    'Let the DP state be dp[mask] where mask is a bitmask of which people have been assigned a hat. dp[mask] = number of ways to assign hats to the people indicated by mask.',
    'Iterate over hats 1 to 40. For each hat h, for each person i who likes hat h, for each current mask where person i is NOT yet assigned: dp[mask | (1<<i)] += dp[mask]. Process each hat only once to ensure no hat is reused.',
    'Initialize dp[0] = 1 (no one has a hat yet). The answer is dp[(1<<n) - 1] after processing all 40 hats.',
  ],
  functionName: 'numberWays',
  params: ['hats'],
  starterCode: {
    javascript: `function numberWays(hats) {
  const MOD = 1000000007;
  const n = hats.length;
  const full = (1 << n) - 1;
  // Build: for each hat, which people like it
  const hatToPeople = Array.from({ length: 41 }, () => []);
  for (let i = 0; i < n; i++) {
    for (const h of hats[i]) hatToPeople[h].push(i);
  }
  // dp[mask] = ways to assign exactly the people in mask using hats considered so far
  const dp = new Array(full + 1).fill(0);
  dp[0] = 1;
  for (let h = 1; h <= 40; h++) {
    // Process in reverse to avoid counting hat h twice
    for (let mask = full; mask >= 0; mask--) {
      for (const person of hatToPeople[h]) {
        if (mask & (1 << person)) continue; // person already has a hat
        dp[mask | (1 << person)] = (dp[mask | (1 << person)] + dp[mask]) % MOD;
      }
    }
  }
  return dp[full];
}`,
    typescript: `function numberWays(hats: number[][]): number {
  const MOD = 1000000007;
  const n = hats.length;
  const full = (1 << n) - 1;
  const hatToPeople: number[][] = Array.from({ length: 41 }, () => []);
  for (let i = 0; i < n; i++) {
    for (const h of hats[i]!) hatToPeople[h]!.push(i);
  }
  const dp = new Array<number>(full + 1).fill(0);
  dp[0] = 1;
  for (let h = 1; h <= 40; h++) {
    for (let mask = full; mask >= 0; mask--) {
      for (const person of hatToPeople[h]!) {
        if (mask & (1 << person)) continue;
        dp[mask | (1 << person)]! = (dp[mask | (1 << person)]! + dp[mask]!) % MOD;
      }
    }
  }
  return dp[full]!;
}`,
    python: `def numberWays(hats: list[list[int]]) -> int:
    MOD = 10**9 + 7
    n = len(hats)
    full = (1 << n) - 1
    hat_to_people: list[list[int]] = [[] for _ in range(41)]
    for i, pref in enumerate(hats):
        for h in pref:
            hat_to_people[h].append(i)
    dp = [0] * (full + 1)
    dp[0] = 1
    for h in range(1, 41):
        for mask in range(full, -1, -1):
            if dp[mask] == 0:
                continue
            for person in hat_to_people[h]:
                if mask & (1 << person):
                    continue
                new_mask = mask | (1 << person)
                dp[new_mask] = (dp[new_mask] + dp[mask]) % MOD
    return dp[full]`,
  },
  visibleTests: [
    { args: [[[3, 4], [4, 5], [5]]], expected: 1 },
    { args: [[[3, 5, 1], [3, 5]]], expected: 4 },
    { args: [[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]], expected: 24 },
  ],
  hiddenTests: [
    // single person, single hat
    { args: [[[1]]], expected: 1 },
    // single person, multiple hats
    { args: [[[1, 2, 3]]], expected: 3 },
    // two people, no overlap in hats
    { args: [[[1, 2], [3, 4]]], expected: 4 },
    // two people, all hats shared
    { args: [[[1, 2], [1, 2]]], expected: 2 },
    // impossible: same required hat
    { args: [[[1], [1]]], expected: 0 },
    // three people, disjoint preferences
    { args: [[[1], [2], [3]]], expected: 1 },
    // three people, each can wear hat from [1..3] freely
    { args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]]], expected: 6 },
    // person 1 must wear hat 5; person 0 can wear any of [1,2,3,4] (5 is taken)
    { args: [[[1, 2, 3, 4, 5], [5]]], expected: 4 },
    // two people share all 40 hats — 40*39 = 1560 ordered pairs
    {
      args: [
        [Array.from({ length: 40 }, (_, i) => i + 1), Array.from({ length: 40 }, (_, i) => i + 1)],
      ],
      expected: 1560,
    },
  ],
};
