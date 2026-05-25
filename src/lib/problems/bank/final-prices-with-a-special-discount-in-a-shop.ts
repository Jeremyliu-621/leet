import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-prices-with-a-special-discount-in-a-shop',
  title: 'Final Prices With a Special Discount in a Shop',
  difficulty: 'easy',
  tags: ['arrays', 'stack'],
  description: `You are given an integer array \`prices\` where \`prices[i]\` is the price of the \`i\`th item in a shop.

There is a special discount for items in the shop. If you buy the \`i\`th item, then you will receive a discount equivalent to \`prices[j]\` where \`j\` is the **minimum** index such that \`j > i\` and \`prices[j] <= prices[i]\`. Otherwise, you will not receive any discount at all.

Return an integer array \`answer\` where \`answer[i]\` is the final price you will pay for the \`i\`th item of the shop considering the special discount.`,
  constraints: [
    '1 <= prices.length <= 500',
    '1 <= prices[i] <= 10^3',
  ],
  examples: [
    {
      input: 'prices = [8,4,6,2,3]',
      output: '[4,2,4,2,3]',
      explanation:
        'For item 0 (price 8): next item with price ≤ 8 is item 1 (price 4), so discount = 4, final = 4. For item 1 (price 4): next ≤ 4 is item 3 (price 2), discount = 2, final = 2. For item 2 (price 6): next ≤ 6 is item 3 (price 2), discount = 2, final = 4. Item 3 and 4 have no smaller-or-equal item after them.',
    },
    {
      input: 'prices = [1,2,3,4,5]',
      output: '[1,2,3,4,5]',
      explanation: 'No item has a following item with a smaller or equal price, so no discounts apply.',
    },
    {
      input: 'prices = [10,1,1,6]',
      output: '[9,0,1,6]',
      explanation:
        'Item 0 (10) → discount 1 = 9. Item 1 (1) → discount 1 = 0. Item 2 (1) → no discount. Item 3 (6) → no discount.',
    },
  ],
  hints: [
    'A monotonic stack naturally tracks elements waiting for their next smaller-or-equal element.',
    'Push indices onto the stack. When you encounter prices[i] <= prices[stack.top], pop and apply the discount.',
    'Alternatively, use a simple O(n²) nested loop since n ≤ 500.',
  ],
  functionName: 'finalPrices',
  params: ['prices'],
  starterCode: {
    javascript: 'function finalPrices(prices) {\n  \n}\n',
    python: 'def finalPrices(prices):\n    pass\n',
  },
  visibleTests: [
    { args: [[8, 4, 6, 2, 3]], expected: [4, 2, 4, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[10, 1, 1, 6]], expected: [9, 0, 1, 6] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[5, 5, 5, 5]], expected: [0, 0, 0, 5] },
    { args: [[3, 1, 2]], expected: [2, 1, 2] },
    { args: [[4, 3, 2, 1]], expected: [1, 1, 1, 1] },
  ],
};
