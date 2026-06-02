import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-tastiness-candy-basket',
  title: 'Maximum Tastiness of Candy Basket',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an array \`price\` where \`price[i]\` is the price of the \`i\`-th candy and a positive integer \`k\`.

Define the **tastiness** of a candy basket as the smallest absolute difference between the prices of **any two** candies in the basket.

Return the **maximum tastiness** of a candy basket consisting of exactly \`k\` distinct candies.

**Example:**

\`price = [13,5,1,8,21,2]\`, \`k = 3\`

Sort: \`[1,2,5,8,13,21]\`

If we pick {1, 5, 13}: differences are 4, 8, 12 → tastiness = 4
If we pick {1, 8, 21}: differences are 7, 13, 20 → tastiness = 7 (better!)

Maximum tastiness = **7**`,
  constraints: [
    '2 <= k <= price.length <= 10^5',
    '1 <= price[i] <= 10^9',
  ],
  examples: [
    {
      input: 'price = [13,5,1,8,21,2], k = 3',
      output: '8',
      explanation: 'Sort to [1,2,5,8,13,21]. Choosing {1,13,21} (or {2,13,21} or {5,13,21}) gives min difference 8. This is the maximum possible tastiness.',
    },
    {
      input: 'price = [1,3,1], k = 2',
      output: '2',
      explanation: 'Price list has duplicates — but all indices are distinct. Min difference choosing any 2 from sorted [1,1,3]: choosing index 0 and 2 (price 1 and 3) gives difference 2.',
    },
    {
      input: 'price = [7,7,7,7], k = 2',
      output: '0',
      explanation: 'All prices are the same, so min difference is always 0.',
    },
  ],
  hints: [
    'Binary search on the answer (the tastiness value). For a given minimum gap `g`, check if it\'s possible to select k candies with all pairwise differences >= g.',
    'Sort the prices first. To check feasibility for gap `g`: greedily pick candies starting from the smallest, always skipping ahead until the next price is at least `g` above the last picked.',
    'Binary search range: low = 0, high = (max - min) / (k - 1). The feasibility check runs in O(n) after sorting.',
  ],
  functionName: 'maximumTastiness',
  params: ['price', 'k'],
  starterCode: {
    javascript: `function maximumTastiness(price, k) {
  price.sort((a, b) => a - b);
  let lo = 0, hi = price[price.length - 1] - price[0];
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    let count = 1, last = price[0];
    for (let i = 1; i < price.length; i++) {
      if (price[i] - last >= mid) { count++; last = price[i]; }
    }
    if (count >= k) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maximumTastiness(price: number[], k: number): number {
  price.sort((a, b) => a - b);
  let lo = 0, hi = price[price.length - 1]! - price[0]!;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    let count = 1, last = price[0]!;
    for (let i = 1; i < price.length; i++) {
      if (price[i]! - last >= mid) { count++; last = price[i]!; }
    }
    if (count >= k) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,

    python: `def maximumTastiness(price, k):
    price.sort()
    lo, hi = 0, price[-1] - price[0]
    while lo < hi:
        mid = (lo + hi + 1) // 2
        count, last = 1, price[0]
        for p in price[1:]:
            if p - last >= mid:
                count += 1
                last = p
        if count >= k:
            lo = mid
        else:
            hi = mid - 1
    return lo
`,
  },
  visibleTests: [
    { args: [[13,5,1,8,21,2], 3], expected: 8 },
    { args: [[1,3,1], 2], expected: 2 },
    { args: [[7,7,7,7], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], 2], expected: 4 },
    { args: [[1,2,3,4,5], 3], expected: 2 },
    { args: [[1,2,3,4,5], 5], expected: 1 },
    { args: [[1,10,20,30,40], 2], expected: 39 },
    { args: [[1,10,20,30,40], 3], expected: 19 },
    { args: [[1,1,1,1,1], 3], expected: 0 },
    { args: [[100,200], 2], expected: 100 },
  ],
};
