import type { Problem } from '../types';

export const problem: Problem = {
  id: 'student-attendance-record-ii',
  title: 'Student Attendance Record II',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day:

- \`'A'\`: Absent
- \`'L'\`: Late
- \`'P'\`: Present

A student is eligible for an attendance award if their record contains:
- **Fewer than 2** absences (\`'A'\`), AND
- **No** 3 or more consecutive lates (\`'LLL'\` or longer)

Given an integer \`n\`, return the **number of all possible attendance records** of length \`n\` that make the student eligible for an award.

Since the answer may be very large, return it **modulo \`10^9 + 7\`**.

**Example:** For \`n = 2\`, the eligible records are: \`PP, AP, PA, LP, PL, AL, LA, LL\` — that is **8** records.`,
  constraints: ['1 <= n <= 10^5'],
  examples: [
    {
      input: 'n = 2',
      output: '8',
      explanation: 'Eligible records of length 2: PP, AP, PA, LP, PL, AL, LA, LL. Ineligible: AA (2 absences), LLL would need length 3.',
    },
    {
      input: 'n = 1',
      output: '3',
      explanation: 'Any single character P, A, or L is eligible.',
    },
    {
      input: 'n = 10101',
      output: '183236316',
      explanation: 'Large n; return answer modulo 10^9 + 7.',
    },
  ],
  hints: [
    'Define state as (number of As so far, number of trailing Ls). Number of As is 0 or 1 (2 makes it invalid), trailing Ls is 0, 1, or 2 (3 makes it invalid). So there are 2 × 3 = 6 states.',
    'At each step, extend the current string by one character. Appending P resets trailing Ls to 0. Appending L increments trailing Ls (if already 2, this is invalid). Appending A increments the A count (if already 1, this is invalid) and resets trailing Ls to 0.',
    'Use DP where dp[a][l] = number of valid sequences with "a" absences and "l" trailing Ls. Iterate n times, updating all 6 states simultaneously. The answer is the sum of all valid states after n steps.',
  ],
  functionName: 'checkRecord',
  params: ['n'],
  starterCode: {
    javascript: `function checkRecord(n) {
  const MOD = 1_000_000_007;
  // dp[a][l] = ways with a absences (0|1) and l trailing Ls (0|1|2)
  let dp = [[1, 0, 0], [0, 0, 0]];
  for (let i = 0; i < n; i++) {
    const nd = [[0, 0, 0], [0, 0, 0]];
    for (let a = 0; a <= 1; a++) {
      for (let l = 0; l <= 2; l++) {
        const v = dp[a][l];
        if (!v) continue;
        nd[a][0] = (nd[a][0] + v) % MOD;        // append P
        if (l < 2) nd[a][l + 1] = (nd[a][l + 1] + v) % MOD; // append L
        if (a < 1) nd[1][0] = (nd[1][0] + v) % MOD;          // append A
      }
    }
    dp = nd;
  }
  let ans = 0;
  for (const row of dp) for (const v of row) ans = (ans + v) % MOD;
  return ans;
}`,
    typescript: `function checkRecord(n: number): number {
  const MOD = 1_000_000_007;
  let dp: number[][] = [[1, 0, 0], [0, 0, 0]];
  for (let i = 0; i < n; i++) {
    const nd: number[][] = [[0, 0, 0], [0, 0, 0]];
    for (let a = 0; a <= 1; a++) {
      for (let l = 0; l <= 2; l++) {
        const v = dp[a]![l]!;
        if (!v) continue;
        nd[a]![0] = (nd[a]![0]! + v) % MOD;
        if (l < 2) nd[a]![l + 1] = (nd[a]![l + 1]! + v) % MOD;
        if (a < 1) nd[1]![0] = (nd[1]![0]! + v) % MOD;
      }
    }
    dp = nd;
  }
  let ans = 0;
  for (const row of dp) for (const v of row) ans = (ans + v) % MOD;
  return ans;
}`,
    python: `def checkRecord(n):
    MOD = 10**9 + 7
    # dp[a][l]: a absences (0|1), l trailing Ls (0|1|2)
    dp = [[1, 0, 0], [0, 0, 0]]
    for _ in range(n):
        nd = [[0, 0, 0], [0, 0, 0]]
        for a in range(2):
            for l in range(3):
                v = dp[a][l]
                if not v:
                    continue
                nd[a][0] = (nd[a][0] + v) % MOD       # append P
                if l < 2:
                    nd[a][l + 1] = (nd[a][l + 1] + v) % MOD  # append L
                if a < 1:
                    nd[1][0] = (nd[1][0] + v) % MOD    # append A
        dp = nd
    return sum(dp[a][l] for a in range(2) for l in range(3)) % MOD
`,
  },
  visibleTests: [
    { args: [2], expected: 8 },
    { args: [1], expected: 3 },
    { args: [10101], expected: 183236316 },
  ],
  hiddenTests: [
    { args: [3], expected: 19 },
    { args: [4], expected: 43 },
    { args: [5], expected: 94 },
    { args: [6], expected: 200 },
    { args: [10], expected: 3536 },
    { args: [100], expected: 985598218 },
  ],
};
