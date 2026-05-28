import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-beauty-of-gardens',
  title: 'Maximum Total Beauty of the Gardens',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays', 'two-pointers'],
  description: `Alice is a gardener, and she wants to plant \`n\` gardens so that they look as beautiful as possible.

She has already planted \`n\` gardens and is represented by a **0-indexed** integer array \`flowers\` of size \`n\`, where \`flowers[i]\` is the number of flowers already planted in the \`i\`-th garden. Flowers can also be planted in a garden that **already has** flowers.

She also has \`newFlowers\` seeds that she can plant. She can plant seeds in any garden to add exactly one flower to it.

A garden is considered **complete** if it has **at least** \`target\` flowers. The **total beauty** of the gardens is then determined as the **sum** of the following:

- \`full * (number of complete gardens)\`
- \`partial * (minimum number of flowers in any of the incomplete gardens)\`

Return the **maximum** total beauty that Alice can achieve after planting at most \`newFlowers\` new flowers.`,
  constraints: [
    '1 <= flowers.length <= 10^5',
    '1 <= flowers[i], newFlowers, target, full, partial <= 10^5',
  ],
  examples: [
    {
      input: 'flowers = [1,3,1,1], newFlowers = 7, target = 6, full = 12, partial = 1',
      output: '14',
      explanation:
        'Make garden 1 full (cost 3). With 4 remaining flowers, raise the other 3 gardens to 2 flowers each. Beauty = 1*12 + 2*1 = 14.',
    },
    {
      input: 'flowers = [2,4,5,3], newFlowers = 10, target = 5, full = 2, partial = 6',
      output: '30',
      explanation:
        'Make gardens 1, 2, 3 full (cost 3). With 7 remaining, raise garden 0 from 2 to 4 flowers. Beauty = 3*2 + 4*6 = 30.',
    },
  ],
  hints: [
    'Sort the flowers array. For each choice of how many gardens to make "full" (the k largest), compute the minimum cost to complete them, then use the remaining seeds to maximize the minimum among the incomplete gardens.',
    'Use prefix sums to quickly compute the cost of raising all incomplete gardens to a given value v. Binary search for the maximum v achievable with remaining seeds.',
    'Iterate over the number of complete gardens from n down to 0, maintaining a running cost for completions. For each count, binary search for the best min-value of incomplete gardens.',
  ],
  functionName: 'maximumBeauty',
  params: ['flowers', 'newFlowers', 'target', 'full', 'partial'],
  starterCode: {
    javascript: 'function maximumBeauty(flowers, newFlowers, target, full, partial) {\n  \n}\n',
    typescript: "function maximumBeauty(flowers: number[], newFlowers: number, target: number, full: number, partial: number): number {\n  \n}",

    python: 'def maximumBeauty(flowers, newFlowers, target, full, partial):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,1,1], 7, 6, 12, 1], expected: 14 },
    { args: [[2,4,5,3], 10, 5, 2, 6], expected: 30 },
  ],
  hiddenTests: [
    // Single garden: keeping incomplete (min=1+4=5=target, capped to target-1=4) gives 4*3=12 > full=10.
    // Partial beauty beats completing: beauty=12.
    { args: [[1], 4, 5, 10, 3], expected: 12 },
    // All gardens already at or above target (flowers=5=target=5): all complete, beauty=3*7=21.
    { args: [[5,5,5], 0, 5, 7, 3], expected: 21 },
    // flowers=[3,3], newFlowers=5, target=5, full=2, partial=4
    // 1 full: cost=2, remain=3, incomplete=[3], min raised to target-1=4. beauty=1*2+4*4=18.
    // 2 full: cost=4, remain=1, beauty=2*2=4.
    // 0 full: incomplete=[3,3], v=4 (cost 2). beauty=0+4*4=16.
    // Best=18.
    { args: [[3,3], 5, 5, 2, 4], expected: 18 },
    // flowers=[1,2,3], newFlowers=100, target=4, full=5, partial=2
    // Make 2 full (gardens with 2,3): cost=2+1=3. remaining=97. incomplete=[1], min=3(target-1).
    // beauty=2*5+3*2=16. Better than all 3 full (beauty=15).
    { args: [[1,2,3], 100, 4, 5, 2], expected: 16 },
    // No newFlowers available: beauty = full*(gardens already complete) + partial*(min incomplete)
    // flowers=[3,1,5], newFlowers=0, target=5, full=4, partial=2
    // Gardens: 3 < 5 (incomplete), 1 < 5 (incomplete), 5 >= 5 (complete).
    // beauty = 1*4 + 1*2 = 6 (min of incomplete = min(3,1) = 1)
    { args: [[3,1,5], 0, 5, 4, 2], expected: 6 },
  ],
};
