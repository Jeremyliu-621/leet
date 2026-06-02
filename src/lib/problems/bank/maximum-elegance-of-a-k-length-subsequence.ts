import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-elegance-of-a-k-length-subsequence',
  title: 'Maximum Elegance of a K-Length Subsequence',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** 2D integer array \`items\` of length \`n\` and an integer \`k\`.

\`items[i] = [profit_i, category_i]\`, where \`profit_i\` and \`category_i\` denote the profit and category of the \`i\`th item respectively.

Let's define the **elegance** of a subsequence of \`items\` as \`total_profit + distinct_categories^2\`, where \`total_profit\` is the sum of all profits in the subsequence, and \`distinct_categories\` is the number of **distinct** categories in the subsequence.

Return the **maximum elegance** out of all subsequences of size \`k\` in \`items\`.`,
  constraints: [
    '1 <= items.length == n <= 10^5',
    'items[i].length == 2',
    'items[i][0] == profit_i',
    '1 <= profit_i <= 10^9',
    '1 <= category_i <= n',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'items = [[3,2],[5,1],[10,1]], k = 2',
      output: '17',
      explanation: 'Take items 1 and 2 (profit=5+10=15, distinct categories=1). Elegance=15+1=16. Or take items 0 and 2 (profit=13, distinct=2). Elegance=13+4=17. Maximum is 17.',
    },
    {
      input: 'items = [[3,1],[3,2],[2,1]], k = 3',
      output: '12',
      explanation: 'Take all 3 items. total_profit=8, distinct_categories=2. Elegance=8+4=12.',
    },
  ],
  hints: [
    'Level 1: Sort items by profit descending. Greedily take the top-k items. Then try to improve by swapping a duplicate-category item for a not-yet-included item that adds a new category.',
    'Level 2: Track which categories are already represented. Keep a stack of profits from the currently-selected items whose category appears more than once (duplicates). For each remaining item (not yet in selection) with a new category: swap out the smallest duplicate profit, gaining +profit_new - profit_removed + 2*distinct + 1 in elegance.',
    'Level 3: Sort desc by profit; select top-k tracking category frequencies and a list of "replaceable" profits (duplicate-category items, lowest first). For each subsequent item with a new category: if replaceable list is non-empty, pop lowest replaceable, remove that category if count drops to 1, add new category. Update and track max elegance throughout.',
  ],
  functionName: 'findMaximumElegance',
  params: ['items', 'k'],
  starterCode: {
    javascript: `function findMaximumElegance(items, k) {

}`,
    typescript: `function findMaximumElegance(items: number[][], k: number): number {

}`,
    python: `def findMaximumElegance(items: list[list[int]], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[3,2],[5,1],[10,1]], 2], expected: 17 },
    { args: [[[3,1],[3,2],[2,1]], 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [[[1,1]], 1], expected: 2 },
    { args: [[[4,1],[3,2],[2,1],[1,2]], 2], expected: 11 },
    { args: [[[1,1],[2,2],[3,3],[4,4]], 2], expected: 11 },
    { args: [[[10,1],[10,2],[10,3],[1,4]], 3], expected: 39 },
    { args: [[[5,1],[4,1],[3,1],[2,2]], 3], expected: 15 },
    { args: [[[1,1],[1,2],[1,3],[1,4],[1,5]], 3], expected: 12 },
  ],
};
