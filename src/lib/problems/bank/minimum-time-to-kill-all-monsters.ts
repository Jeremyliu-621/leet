import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-kill-all-monsters',
  title: 'Minimum Time to Kill All Monsters',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'bit-manipulation'],
  description: `You have an array of monsters where \`power[i]\` is the power of the \`i\`th monster.

You start with 1 gain per day. Each day, your gain increases by 1 for every monster you have already killed. Killing a monster requires accumulating power equal to \`power[i]\` points over one or more days.

More precisely: if at the start of day \`d\` you have gain \`g\` per day, it takes \`⌈power[i] / g⌉\` additional days to kill monster \`i\`.

You may only focus on one monster at a time. Return the **minimum number of days** to kill all monsters.`,
  constraints: [
    '1 <= power.length <= 17',
    '1 <= power[i] <= 10^9',
  ],
  examples: [
    {
      input: 'power = [3,1,4]',
      output: '4',
      explanation: 'Kill monster 1 (power 3) in ceil(3/1)=3 days (gain=1). Then kill monster 0 (power 1) in ceil(1/2)=1 day (gain=2, since 1 monster killed). Total = 3+1 = 4 days... Actually optimal: kill monster 1 (power 1) on day 1. Then gain=2. Kill monster 0 (power 3) in ceil(3/2)=2 more days. Then gain=3. Kill monster 2 (power 4) in ceil(4/3)=2 more days. Total = 1+2+2=5? Minimum is 4.',
    },
    {
      input: 'power = [1,2,4]',
      output: '4',
      explanation: 'Kill in order 0,1,2: 1 + ceil(2/2) + ceil(4/3) = 1+1+2 = 4 days.',
    },
  ],
  hints: [
    'Level 1: With n ≤ 17 monsters, use bitmask DP. Let dp[mask] = minimum days to kill all monsters in the bitmask.',
    'Level 2: When transitioning to state mask, the gain equals 1 + popcount(mask) − 1 = popcount(mask) (the number of monsters already killed before this kill). Wait: gain = 1 (base) + number already killed = 1 + (total − remaining − 1). Better: for mask representing the set of already-killed monsters, gain = 1 + popcount(mask). To kill monster i next: days += ceil(power[i] / gain).',
    'Level 3: dp[0] = 0. For each mask, for each monster i not in mask: dp[mask | (1<<i)] = min(dp[mask | (1<<i)], dp[mask] + ceil(power[i] / (1 + popcount(mask)))). O(2^n × n).',
  ],
  functionName: 'minimumTime',
  params: ['power'],
  starterCode: {
    javascript: `function minimumTime(power) {

}`,
    typescript: `function minimumTime(power: number[]): number {

}`,
    python: `def minimumTime(power: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 4]], expected: 4 },
    { args: [[1, 2, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1000000000]], expected: 1000000000 },
    { args: [[1, 1]], expected: 2 },
    { args: [[3, 4]], expected: 5 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[10, 5, 2]], expected: 9 },
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[6, 1, 1]], expected: 4 },
  ],
};
