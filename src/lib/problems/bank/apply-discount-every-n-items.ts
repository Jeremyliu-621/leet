import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-discount-every-n-items',
  title: 'Apply Discount Every n Items',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `A shop is selling products. When a customer buys \`n\` or more products, they receive a discount on the current product being bought. Specifically, every \`n\`th item and beyond gets a discount.

You are given:
- \`prices\`: the list of prices of products (in order they are bought)
- \`n\`: the discount frequency (every \`n\`th item gets the discount)
- \`discount\`: the discount percentage

Every \`n\`th item (1-indexed: items n, 2n, 3n, ...) costs \`price * (100 - discount) / 100\`. The other items cost the full price.

Return the bill with these discounts applied. The answer is the sum of the discounted prices, rounded down to the nearest integer (use floor division per item).

**Note:** Prices are integers. Apply floor to each discounted item's price.`,
  constraints: [
    '1 <= prices.length <= 500',
    '1 <= prices[i] <= 1000',
    '1 <= n <= prices.length',
    '0 <= discount <= 100',
  ],
  examples: [
    {
      input: 'prices = [100,200,300], n = 1, discount = 0',
      output: '600',
      explanation: '0% discount means no reduction. All items cost full price: 100+200+300=600.',
    },
    {
      input: 'prices = [100,200,300], n = 3, discount = 100',
      output: '300',
      explanation: 'Only item 3 (price=300) gets 100% off → 0. Sum = 100+200+0 = 300.',
    },
    {
      input: 'prices = [10,20,30,40,50], n = 2, discount = 50',
      output: '120',
      explanation: 'Items 2 (20) and 4 (40) get 50% off: floor(20*50/100)=10, floor(40*50/100)=20. Sum = 10+10+30+20+50 = 120.',
    },
  ],
  hints: [
    'Track the item count (1-indexed). Every time count is divisible by n, apply the discount.',
    'For each price at 1-indexed position i, if i % n === 0, add floor(price * (100 - discount) / 100); otherwise add price.',
    'Initialize a running total and a counter. Increment counter per item. When counter % n === 0, use the discounted price.',
  ],
  functionName: 'discountPrices',
  params: ['prices', 'n', 'discount'],
  starterCode: {
    javascript: 'function discountPrices(prices, n, discount) {\n  // your code here\n}\n',
    typescript: "function discountPrices(prices: number[], n: number, discount: number): number {\n  // your code here\n}",

    python: 'def discountPrices(prices, n, discount):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[100, 200, 300], 1, 0], expected: 600 },
    { args: [[100, 200, 300], 3, 100], expected: 300 },
    { args: [[10, 20, 30, 40, 50], 2, 50], expected: 120 },
  ],
  hiddenTests: [
    { args: [[100], 1, 100], expected: 0 },
    { args: [[100], 1, 0], expected: 100 },
    { args: [[10, 10, 10], 1, 10], expected: 27 },
    { args: [[5, 10, 15, 20], 4, 50], expected: 40 },
    { args: [[1, 2, 3, 4, 5], 2, 20], expected: 13 },
    { args: [[100, 200], 2, 25], expected: 250 },
  ],
};
