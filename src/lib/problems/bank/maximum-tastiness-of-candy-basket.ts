import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-tastiness-of-candy-basket',
  title: 'Maximum Tastiness of Candy Basket',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an array of positive integers \`price\` where \`price[i]\` denotes the price of the \`i\`-th candy and a positive integer \`k\`.

The store sells baskets of \`k\` **distinct** candies. The **tastiness** of a candy basket is the **smallest absolute difference** of the prices of any two candies in the basket.

Return the **maximum** tastiness of a candy basket.`,
  constraints: [
    '2 <= k <= price.length <= 10^5',
    '1 <= price[i] <= 10^9',
  ],
  examples: [
    {
      input: 'price = [13,5,1,8,21,2], k = 3',
      output: '8',
      explanation: 'Sort: [1,2,5,8,13,21]. Basket [1,13,21]: min diff = min(12, 8) = 8. No basket of 3 achieves tastiness > 8.',
    },
    {
      input: 'price = [1,3,1], k = 2',
      output: '2',
      explanation: 'Sort: [1,1,3]. Best basket: [1,3] with tastiness 2.',
    },
    {
      input: 'price = [7,7,7,1,7,5], k = 3',
      output: '2',
      explanation: 'Sort: [1,5,7,7,7,7]. Basket [1,5,7]: min diff = min(4,2) = 2. Best achievable tastiness = 2.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer (the minimum gap). For a given gap g, check if we can choose k candies from the sorted array such that consecutive chosen prices differ by at least g.',
    'Level 2: After sorting, the greedy feasibility check: pick the smallest price, then always pick the next price that is >= current + g. Count how many we can pick. If count >= k, gap g is feasible.',
    'Level 3: Binary search range: lo=0 (always feasible with duplicate prices), hi=(max-min)/(k-1). For each mid, run the greedy. Find the largest feasible gap.',
  ],
  functionName: 'maximumTastiness',
  params: ['price', 'k'],
  starterCode: {
    javascript: `function maximumTastiness(price, k) {
  price.sort((a, b) => a - b);
  const n = price.length;
  function canAchieve(gap) {
    let count = 1;
    let last = price[0];
    for (let i = 1; i < n; i++) {
      if (price[i] - last >= gap) {
        count++;
        last = price[i];
        if (count >= k) return true;
      }
    }
    return count >= k;
  }
  let lo = 0, hi = (price[n - 1] - price[0]) / (k - 1) | 0;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canAchieve(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maximumTastiness(price: number[], k: number): number {
  price.sort((a, b) => a - b);
  const n = price.length;
  function canAchieve(gap: number): boolean {
    let count = 1;
    let last = price[0]!;
    for (let i = 1; i < n; i++) {
      if (price[i]! - last >= gap) {
        count++;
        last = price[i]!;
        if (count >= k) return true;
      }
    }
    return count >= k;
  }
  let lo = 0, hi = Math.floor((price[n - 1]! - price[0]!) / (k - 1));
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canAchieve(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    python: `def maximumTastiness(price, k):
    price.sort()
    n = len(price)
    def can_achieve(gap):
        count, last = 1, price[0]
        for i in range(1, n):
            if price[i] - last >= gap:
                count += 1
                last = price[i]
                if count >= k:
                    return True
        return count >= k
    lo, hi = 0, (price[-1] - price[0]) // (k - 1)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_achieve(mid):
            lo = mid
        else:
            hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[13, 5, 1, 8, 21, 2], 3], expected: 8 },
    { args: [[1, 3, 1], 2], expected: 2 },
    { args: [[7, 7, 7, 1, 7, 5], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2], 2], expected: 1 },
    { args: [[1, 1, 1, 1], 2], expected: 0 },
    { args: [[1, 10, 100], 2], expected: 99 },
    { args: [[1, 10, 100], 3], expected: 9 },
    { args: [[1, 5, 9, 13], 2], expected: 12 },
  ],
};
