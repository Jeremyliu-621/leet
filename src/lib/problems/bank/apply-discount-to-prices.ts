import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-discount-to-prices',
  title: 'Apply Discount to Prices',
  difficulty: 'medium',
  tags: ['strings'],
  description: `A **price** is a string that starts with a dollar sign \`'$'\` followed by a positive integer with **no leading zeros**.

For example, \`"$100"\`, \`"$23"\`, and \`"$6"\` represent prices, but \`"$"\`, \`"$01"\`, \`"12"\`, and \`"$1e5"\` do not.

You are given a string \`sentence\` representing a sentence and an integer \`discount\`. For each price in \`sentence\`, apply the given discount percentage and **round down** to the nearest cent. Return the modified sentence as a string.

A single space separates words. No leading or trailing spaces.`,
  constraints: [
    '1 <= sentence.length <= 10^5',
    'sentence consists of lowercase English letters, digits, spaces, and \'$\'',
    '1 <= discount <= 100',
    'Each price is a positive integer with at most 10 digits',
  ],
  examples: [
    {
      input: 'sentence = "there are $1 $2 and 5$ candies in the shop", discount = 50',
      output: '"there are $0.50 $1.00 and 5$ candies in the shop"',
      explanation: '"$1" → $0.50, "$2" → $1.00. "5$" doesn\'t start with \'$\', so it is unchanged.',
    },
    {
      input: 'sentence = "1 2 $3 4 $5 $6 7 8$ $9 $10$", discount = 100',
      output: '"1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$"',
      explanation: '"8$" and "$10$" are not valid prices — only words matching $[1-9][0-9]* are discounted.',
    },
  ],
  hints: [
    'Split the sentence by spaces and check each word.',
    'A word is a price if it matches /^\\$[1-9]\\d*$/.',
    'For a valid price, compute new_price = price * (100 - discount), then format as dollars.cents with exactly 2 decimal places.',
    'Use integer arithmetic: raw = price * (100 - discount); dollars = Math.floor(raw / 100); cents = raw % 100.',
  ],
  functionName: 'discountPrices',
  params: ['sentence', 'discount'],
  starterCode: {
    javascript: `function discountPrices(sentence, discount) {

}`,
    typescript: `function discountPrices(sentence: string, discount: number): string {

}`,
    python: `def discountPrices(sentence: str, discount: int) -> str:
    pass`,
  },
  visibleTests: [
    {
      args: ['there are $1 $2 and 5$ candies in the shop', 50],
      expected: 'there are $0.50 $1.00 and 5$ candies in the shop',
    },
    {
      args: ['$1 $10 $100', 10],
      expected: '$0.90 $9.00 $90.00',
    },
    {
      args: ['the $100 shirt is awesome', 25],
      expected: 'the $75.00 shirt is awesome',
    },
  ],
  hiddenTests: [
    { args: ['hello world', 50], expected: 'hello world' },
    { args: ['$5', 0], expected: '$5.00' },
    { args: ['$5', 100], expected: '$0.00' },
    { args: ['$1000 stuff', 1], expected: '$990.00 stuff' },
    { args: ['price is $3 dollars', 33], expected: 'price is $2.01 dollars' },
    { args: ['item costs $7', 7], expected: 'item costs $6.51' },
    { args: ['it is $10 or $20', 50], expected: 'it is $5.00 or $10.00' },
    { args: ['$0 item for $5', 50], expected: '$0 item for $2.50' },
  ],
};
