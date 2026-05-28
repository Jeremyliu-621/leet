import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-paint-n-3-grid',
  title: 'Number of Ways to Paint N × 3 Grid',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'math'],
  description: `You have a \`n × 3\` grid and you want to paint each cell with **exactly one** of **three** colors: **Red**, **Yellow**, or **Green**. A valid coloring must ensure that **no two adjacent cells** (sharing a horizontal or vertical edge) have the **same color**.

Given \`n\` the number of rows, return the number of ways you can paint this grid. Since the answer may be very large, return it **modulo 10^9 + 7**.`,
  constraints: ['1 <= n <= 5000'],
  examples: [
    {
      input: 'n = 1',
      output: '12',
      explanation:
        'A single row of 3 cells: the first and last cells must differ from the middle. Valid rows: 6 of the form ABA (e.g. RYR) and 6 of the form ABC (e.g. RYG). Total = 12.',
    },
    {
      input: 'n = 2',
      output: '54',
      explanation:
        'Each of the 12 valid first rows extends to valid second rows. The transitions from ABA rows yield 5 choices each, and from ABC rows yield 4 choices each: 6×5 + 6×4 = 54.',
    },
    {
      input: 'n = 3',
      output: '246',
    },
  ],
  hints: [
    'Categorize valid row patterns into two types: **ABA** (first and third cell same, middle different) — there are 6 such rows — and **ABC** (all three cells different) — there are also 6 such rows.',
    'For transitions between consecutive rows, count how many valid next-rows exist for each type. An ABA row can be followed by 3 ABA rows and 2 ABC rows. An ABC row can be followed by 2 ABA rows and 2 ABC rows.',
    'Let aba and abc be the total ways ending with an ABA-type or ABC-type row. Recurrence: aba_new = 3*aba + 2*abc, abc_new = 2*aba + 2*abc. Start with aba=abc=6 and iterate n-1 times. Answer = (aba + abc) mod (10^9+7).',
  ],
  functionName: 'numOfWays',
  params: ['n'],
  starterCode: {
    javascript: `function numOfWays(n) {
  // Return number of valid 3-color paintings of an n×3 grid, mod 10^9+7
}`,
    python: `def numOfWays(n: int) -> int:
    # Return number of valid 3-color paintings of an n×3 grid, mod 10^9+7
    pass`,
  },
  visibleTests: [
    { args: [1], expected: 12 },
    { args: [2], expected: 54 },
    { args: [3], expected: 246 },
  ],
  hiddenTests: [
    { args: [4], expected: 1122 },
    { args: [5], expected: 5118 },
    { args: [7], expected: 106494 },
    { args: [10], expected: 10107954 },
    { args: [1000], expected: 650420578 },
    { args: [5000], expected: 30228214 },
  ],
};
