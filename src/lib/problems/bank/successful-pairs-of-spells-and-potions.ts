import type { Problem } from '../types';

export const problem: Problem = {
  id: 'successful-pairs-of-spells-and-potions',
  title: 'Successful Pairs of Spells and Potions',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given two positive integer arrays \`spells\` and \`potions\`, of length \`n\` and \`m\` respectively, where \`spells[i]\` is the strength of the \`i\`th spell and \`potions[j]\` is the strength of the \`j\`th potion.

You are also given an integer \`success\`. A spell and potion pair is considered **successful** if the product of their strengths is **at least** \`success\`.

Return an integer array \`pairs\` of length \`n\` where \`pairs[i]\` is the number of **potions** that will form a successful pair with the \`i\`th spell.`,
  constraints: [
    'n == spells.length',
    'm == potions.length',
    '1 <= n, m <= 10^5',
    '1 <= spells[i], potions[j] <= 10^5',
    '1 <= success <= 10^10',
  ],
  examples: [
    {
      input: 'spells = [5,1,3], potions = [1,2,3,4,5], success = 7',
      output: '[4,0,3]',
      explanation:
        '- spell[0]=5: 5×2=10, 5×3=15, 5×4=20, 5×5=25 all ≥ 7 → 4 potions.\n- spell[1]=1: max product is 1×5=5 < 7 → 0 potions.\n- spell[2]=3: 3×3=9, 3×4=12, 3×5=15 all ≥ 7 → 3 potions.',
    },
    {
      input: 'spells = [3,1,2], potions = [8,5,8], success = 16',
      output: '[2,0,2]',
      explanation:
        '- spell[0]=3: 3×8=24 ≥ 16 (both 8s) → 2 potions.\n- spell[1]=1: max is 1×8=8 < 16 → 0 potions.\n- spell[2]=2: 2×8=16 ≥ 16 (both 8s) → 2 potions.',
    },
  ],
  hints: [
    'Sort the potions array. For a given spell strength s, you need potions[j] ≥ success/s.',
    'Use binary search to find the leftmost index where potions[j] ≥ ceil(success/s).',
    'The count of valid potions is potions.length minus that index.',
    'Watch out for integer overflow when computing success/spell — use Math.ceil carefully.',
  ],
  functionName: 'successfulPairs',
  params: ['spells', 'potions', 'success'],
  starterCode: {
    javascript: `function successfulPairs(spells, potions, success) {
  // Return array where result[i] = count of potions that pair with spells[i]
}`,
    python: `def successfulPairs(spells: list[int], potions: list[int], success: int) -> list[int]:
    # Your code here
    pass`,
  },
  visibleTests: [
    { args: [[5, 1, 3], [1, 2, 3, 4, 5], 7], expected: [4, 0, 3] },
    { args: [[3, 1, 2], [8, 5, 8], 16], expected: [2, 0, 2] },
  ],
  hiddenTests: [
    { args: [[1], [1], 1], expected: [1] },
    { args: [[3, 1, 2], [5, 7, 3], 15], expected: [2, 0, 0] },
    { args: [[10, 20, 30], [2, 3, 5, 7], 50], expected: [2, 3, 4] },
    { args: [[2], [1, 3, 5], 10], expected: [1] },
    { args: [[5, 5, 5], [1, 1, 1], 5], expected: [3, 3, 3] },
    { args: [[1, 1, 1], [1, 2, 3], 4], expected: [0, 0, 0] },
  ],
};
