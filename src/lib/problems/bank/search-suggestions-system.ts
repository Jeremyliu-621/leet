import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-suggestions-system',
  title: 'Search Suggestions System',
  difficulty: 'medium',
  tags: ['binary-search', 'strings'],
  description: `You are given an array of strings \`products\` and a string \`searchWord\`.

Design a system that suggests at most three product names from \`products\` after each character of \`searchWord\` is typed. Suggested products should have common prefix with \`searchWord\`. If there are more than three products with a common prefix, return the three lexicographically minimum products.

Return a list of lists of the suggested products after each character of \`searchWord\` is typed.`,
  constraints: [
    '1 <= products.length <= 1000',
    '1 <= products[i].length <= 3000',
    '1 <= sum(products[i].length) <= 2 * 10^4',
    'All strings in products are unique.',
    'products[i] consists of lowercase English letters.',
    '1 <= searchWord.length <= 1000',
    'searchWord consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"',
      output: '[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]',
      explanation: 'Products sorted: ["mobile","moneypot","monitor","mouse","mousepad"]. After each character: "m","mo","mou","mous","mouse".',
    },
    {
      input: 'products = ["havana"], searchWord = "havana"',
      output: '[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]',
    },
  ],
  hints: [
    'Sort products lexicographically first.',
    'For each prefix, binary search for the first product that starts with the prefix.',
    'Take up to 3 products from that position that still match the prefix.',
  ],
  functionName: 'suggestedProducts',
  params: ['products', 'searchWord'],
  starterCode: {
    javascript: `function suggestedProducts(products, searchWord) {

}`,
    typescript: "function suggestedProducts(products: string[], searchWord: string): string[][] {\n\n}",

    python: `def suggestedProducts(products, searchWord):
    pass`,
  },
  visibleTests: [
    {
      args: [['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'],
      expected: [
        ['mobile', 'moneypot', 'monitor'],
        ['mobile', 'moneypot', 'monitor'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
        ['mouse', 'mousepad'],
      ],
    },
    {
      args: [['havana'], 'havana'],
      expected: [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']],
    },
  ],
  hiddenTests: [
    {
      args: [['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags'],
      expected: [
        ['baggage', 'bags', 'banner'],
        ['baggage', 'bags', 'banner'],
        ['baggage', 'bags'],
        ['bags'],
      ],
    },
    {
      args: [['abc', 'abcd', 'acd'], 'a'],
      expected: [['abc', 'abcd', 'acd']],
    },
  ],
};
