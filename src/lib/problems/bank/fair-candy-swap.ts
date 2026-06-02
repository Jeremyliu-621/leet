import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fair-candy-swap',
  title: 'Fair Candy Swap',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'math'],
  description: `Alice and Bob have a different total number of candies. You are given two integer arrays \`aliceSizes\` and \`bobSizes\` where \`aliceSizes[i]\` is the number of candies of the \`i\`th box of candy that Alice has and \`bobSizes[j]\` is the number of candies of the \`j\`th box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. Return an integer array \`answer\` where \`answer[0]\` is the number of candies in the box that Alice must exchange, and \`answer[1]\` is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.`,
  constraints: [
    '1 <= aliceSizes.length, bobSizes.length <= 10^4',
    '1 <= aliceSizes[i], bobSizes[j] <= 10^5',
    'Alice and Bob have a different total number of candies.',
    'There will be at least one valid answer for the given input.',
  ],
  examples: [
    {
      input: 'aliceSizes = [1,1], bobSizes = [2,2]',
      output: '[1,2]',
      explanation: 'After swapping 1 (from Alice) and 2 (from Bob): Alice has [2,1]=3, Bob has [1,2]=3.',
    },
    {
      input: 'aliceSizes = [1,2], bobSizes = [2,3]',
      output: '[1,2]',
      explanation: 'After swapping 1 and 2: Alice=1+2+2-1=4, Bob=2+3-2+1=4... wait: Alice total=3, Bob total=5. Diff=2. Alice gives a, Bob gives b: a-b=(sumA-sumB)/2. a=1, b=2: 1-2=-1, (3-5)/2=-1 ✓.',
    },
    {
      input: 'aliceSizes = [2], bobSizes = [1,3]',
      output: '[2,3]',
      explanation: 'After swapping 2 and 3: Alice=[3]=3, Bob=[1,2]=3.',
    },
  ],
  hints: [
    'Let sumA = sum(aliceSizes), sumB = sum(bobSizes). After swapping box a (Alice) for box b (Bob): sumA - a + b == sumB - b + a.',
    'Solving gives b = a + (sumB - sumA) / 2. Note: (sumB - sumA) must be even.',
    'Store bobSizes in a hash set. For each a in aliceSizes, check if a + (sumB - sumA) / 2 is in the set.',
  ],
  functionName: 'fairCandySwap',
  params: ['aliceSizes', 'bobSizes'],
  starterCode: {
    javascript: `function fairCandySwap(aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((a, b) => a + b, 0);
  const sumB = bobSizes.reduce((a, b) => a + b, 0);
  const diff = (sumB - sumA) / 2;
  const bobSet = new Set(bobSizes);
  for (const a of aliceSizes) {
    if (bobSet.has(a + diff)) return [a, a + diff];
  }
  return [];
}`,
    typescript: `function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const sumA = aliceSizes.reduce((a, b) => a + b, 0);
  const sumB = bobSizes.reduce((a, b) => a + b, 0);
  const diff = (sumB - sumA) / 2;
  const bobSet = new Set(bobSizes);
  for (const a of aliceSizes) {
    if (bobSet.has(a + diff)) return [a, a + diff];
  }
  return [];
}`,
    python: `def fairCandySwap(aliceSizes: list[int], bobSizes: list[int]) -> list[int]:
    sum_a, sum_b = sum(aliceSizes), sum(bobSizes)
    diff = (sum_b - sum_a) // 2
    bob_set = set(bobSizes)
    for a in aliceSizes:
        if a + diff in bob_set:
            return [a, a + diff]
    return []`,
  },
  visibleTests: [
    { args: [[1, 1], [2, 2]], expected: [1, 2] },
    { args: [[1, 2], [2, 3]], expected: [1, 2] },
    { args: [[2], [1, 3]], expected: [2, 3] },
  ],
  hiddenTests: [
    { args: [[1, 4], [2, 5]], expected: [1, 2] },
    { args: [[3], [1, 4]], expected: [3, 4] },
    { args: [[2, 5], [1, 4]], expected: [2, 1] },
    { args: [[1, 2, 5], [2, 4]], expected: [5, 4] },
    { args: [[1, 3], [2, 4]], expected: [1, 2] },
    { args: [[1, 2, 3, 4, 5], [6, 7, 8]], expected: [3, 6] },
    { args: [[2, 6], [3, 7]], expected: [2, 3] },
    { args: [[1, 2], [3, 4]], expected: [1, 3] },
  ],
};
