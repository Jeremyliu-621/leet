import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-books-on-a-shelf',
  title: 'Filling Bookcase Shelves',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`books\` where \`books[i] = [thicknessi, heighti]\` indicates the thickness and height of the \`i\`th book. You are also given an integer \`shelfWidth\`.

We want to place these books **in order** onto bookcase shelves that have a total width of \`shelfWidth\`.

We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to \`shelfWidth\`, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We continue this process until there are no more books to place.

Note that at each step of the above process, the **order** of the books we place is the same order as the given sequence of books.

Return the **minimum** possible height that the total bookcase can be after placing shelves in this manner.`,
  constraints: [
    '1 <= books.length <= 1000',
    '1 <= thicknessi <= shelfWidth <= 1000',
    '1 <= heighti <= 1000',
  ],
  examples: [
    {
      input: 'books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4',
      output: '6',
      explanation:
        'The sum of the heights of the 3 shelves is 3 + 3 + 0... The optimal placement gives a total height of 6.',
    },
    {
      input: 'books = [[1,3],[2,4],[3,2]], shelfWidth = 6',
      output: '4',
      explanation: 'All three books fit on one shelf with width 1+2+3=6. The maximum height is 4.',
    },
  ],
  hints: [
    'Use DP where dp[i] = minimum total height to place the first i books.',
    'For each i, scan backwards to find all valid last shelves: books j..i must fit in shelfWidth.',
    'dp[i] = min over all valid j of (dp[j-1] + max_height(books[j..i])).',
  ],
  functionName: 'minHeightShelves',
  params: ['books', 'shelfWidth'],
  starterCode: {
    javascript: `function minHeightShelves(books, shelfWidth) {

}`,
    typescript: `function minHeightShelves(books: number[][], shelfWidth: number): number {

}`,
    python: `def minHeightShelves(books, shelfWidth):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], 4], expected: 6 },
    { args: [[[1, 3], [2, 4], [3, 2]], 6], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 1], expected: 1 },
    { args: [[[1, 3], [1, 2]], 1], expected: 5 },
    { args: [[[1, 2], [1, 1], [1, 3]], 2], expected: 5 },
    { args: [[[1, 2], [2, 3], [3, 4]], 3], expected: 7 },
    { args: [[[1, 5], [2, 4], [3, 3]], 4], expected: 8 },
    { args: [[[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]], 3], expected: 2 },
    { args: [[[3, 3], [3, 3], [3, 3]], 6], expected: 6 },
    { args: [[[2, 1], [1, 3], [2, 4], [1, 2]], 3], expected: 7 },
  ],
};
