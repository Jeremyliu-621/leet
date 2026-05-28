import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-poker-hand',
  title: 'Best Poker Hand',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`ranks\` and a character array \`suits\`. You have **5** cards where the \`i\`th card has a rank of \`ranks[i]\` and a suit of \`suits[i]\`.

The following are the types of **poker hands** you can make from best to worst, in order:

1. \`"Flush"\`: Five cards of the same suit.
2. \`"Three of a Kind"\`: Three cards of the same rank.
3. \`"Pair"\`: Two cards of the same rank.
4. \`"High Card"\`: Any single card.

Return a string representing the **best** type of poker hand you can make with the given cards.

**Note:** The input is generated such that you can always make at least a \`"High Card"\`.`,
  constraints: [
    'ranks.length == suits.length == 5',
    '1 <= ranks[i] <= 13',
    '\'a\' <= suits[i] <= \'d\'',
    'No two cards have the same rank and suit.',
  ],
  examples: [
    {
      input: 'ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]',
      output: '"Flush"',
      explanation: 'All five cards share suit "a".',
    },
    {
      input: 'ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]',
      output: '"Three of a Kind"',
      explanation: 'Three cards have rank 4. (Four-of-a-kind is not a listed category, so "Three of a Kind" is the best applicable hand.)',
    },
    {
      input: 'ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]',
      output: '"Pair"',
      explanation: 'Two cards have rank 10.',
    },
  ],
  hints: [
    'Check for a flush first: if all 5 suits are identical, return "Flush".',
    'Count the frequency of each rank using a map. The maximum frequency determines the hand.',
    'Max frequency >= 3 means "Three of a Kind"; == 2 means "Pair"; otherwise "High Card".',
  ],
  functionName: 'bestHand',
  params: ['ranks', 'suits'],
  starterCode: {
    javascript: `function bestHand(ranks, suits) {

}`,
    typescript: "function bestHand(ranks: number[], suits: string[]): string {\n\n}",

    python: `def bestHand(ranks, suits):
    pass`,
  },
  visibleTests: [
    { args: [[13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a']], expected: 'Flush' },
    { args: [[4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c']], expected: 'Three of a Kind' },
    { args: [[10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd']], expected: 'Pair' },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'a']], expected: 'High Card' },
    { args: [[1, 1, 1, 2, 3], ['a', 'b', 'c', 'd', 'a']], expected: 'Three of a Kind' },
    { args: [[5, 5, 5, 5, 1], ['a', 'b', 'c', 'd', 'a']], expected: 'Three of a Kind' },
    { args: [[1, 2, 3, 4, 5], ['b', 'b', 'b', 'b', 'b']], expected: 'Flush' },
    { args: [[2, 3, 4, 5, 6], ['a', 'b', 'c', 'd', 'a']], expected: 'High Card' },
    { args: [[7, 7, 8, 9, 10], ['a', 'b', 'c', 'd', 'a']], expected: 'Pair' },
    { args: [[1, 1, 2, 2, 3], ['a', 'b', 'c', 'd', 'a']], expected: 'Pair' },
  ],
};
