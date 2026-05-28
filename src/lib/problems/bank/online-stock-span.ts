import type { Problem } from '../types';

export const problem: Problem = {
  id: 'online-stock-span',
  title: 'Online Stock Span',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Design an algorithm that collects daily price quotes for some asset and returns the **span** of that asset's price for the current day.

The **span** of the asset's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

Implement the \`StockSpanner\` class:
- \`StockSpanner()\` — initializes the object.
- \`int next(int price)\` — returns the **span** of the stock's price given that today's price is \`price\`.

> **Note:** A runner function \`stockSpannerRunner(prices)\` is pre-defined. It creates a \`StockSpanner\` instance and calls \`next\` for each price, returning the array of spans.`,
  constraints: [
    '1 <= price <= 10^5',
    'At most 10^4 calls will be made to next.',
  ],
  examples: [
    {
      input: 'prices = [100,80,60,70,60,75,85]',
      output: '[1,1,1,2,1,4,6]',
      explanation: 'Spans: 100→1, 80→1, 60→1, 70→2 (70≥60), 60→1, 75→4 (75≥60,70,60), 85→6 (85≥all).',
    },
  ],
  hints: [
    'Use a monotonic decreasing stack storing (price, span) pairs.',
    'When the current price is ≥ stack top, pop and accumulate the span.',
    'Push (currentPrice, accumulatedSpan) onto the stack.',
  ],
  functionName: 'stockSpannerRunner',
  params: ['prices'],
  preamble: {
    javascript: `function stockSpannerRunner(prices) {
  const spanner = new StockSpanner();
  return prices.map(p => spanner.next(p));
}`,
    typescript: "function stockSpannerRunner(prices: number[]): number[] {\n  constructor() {\n\n  }\n\n  next(price) {\n\n  }\n}",

    python: `def stockSpannerRunner(prices):
    spanner = StockSpanner()
    return [spanner.next(p) for p in prices]
`,
  },
  starterCode: {
    javascript: `// stockSpannerRunner is pre-defined and calls your class below.
class StockSpanner {
  constructor() {

  }

  next(price) {

  }
}`,
    python: `# stockSpannerRunner is pre-defined and calls your class below.
class StockSpanner:
    def __init__(self):
        pass

    def next(self, price: int) -> int:
        pass`,
  },
  visibleTests: [
    { args: [[100, 80, 60, 70, 60, 75, 85]], expected: [1, 1, 1, 2, 1, 4, 6] },
  ],
  hiddenTests: [
    { args: [[100]], expected: [1] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 1, 1, 1, 1] },
    { args: [[10, 10, 10, 10]], expected: [1, 2, 3, 4] },
    { args: [[3, 1, 2, 5, 1, 4]], expected: [1, 1, 2, 4, 1, 2] },
  ],
};
