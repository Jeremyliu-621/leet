import type { Problem } from '../types';

export const problem: Problem = {
  id: 'filling-bookcase-shelves',
  title: 'Filling Bookcase Shelves',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array \`books\` where \`books[i] = [thickness_i, height_i]\` represents the \`i\`-th book. You are also given an integer \`shelfWidth\`.

You want to place books on shelves of a bookcase. You must **place books in order**, and you may decide to put some books on the same shelf or start a new shelf. Books on the same shelf are placed side by side.

The height of each shelf is equal to the **maximum height** of the books on it. The total height of the bookcase is the sum of heights of all shelves.

Return the **minimum possible total height** of the bookcase.`,
  constraints: [
    '1 <= books.length <= 1000',
    '1 <= thickness_i <= shelfWidth <= 1000',
    '1 <= height_i <= 1000',
  ],
  examples: [
    {
      input: 'books = [[1,3],[2,4],[3,2]], shelfWidth = 6',
      output: '4',
      explanation:
        'All three books fit on one shelf (1+2+3=6). The shelf height is max(3,4,2)=4.',
    },
    {
      input: 'books = [[1,1],[1,1],[1,1]], shelfWidth = 1',
      output: '3',
      explanation:
        'Each book must occupy its own shelf (width 1 each). Three shelves of height 1 → total 3.',
    },
    {
      input: 'books = [[2,2],[2,2],[2,2]], shelfWidth = 4',
      output: '4',
      explanation:
        'Shelf 1: books 1 and 2 (width=4, height=2). Shelf 2: book 3 (height=2). Total = 4.',
    },
  ],
  hints: [
    'Use DP. Let dp[i] = minimum height to place the first i books. For each position i, try all contiguous suffixes of books ending at i that fit on one shelf (sum of widths ≤ shelfWidth).',
    'For each valid suffix books[j..i] on the last shelf, dp[i] = min(dp[i], dp[j-1] + max_height_of_books[j..i]).',
    'Iterate j from i downward, accumulating width and tracking max height. Stop when width exceeds shelfWidth. Time complexity is O(n × shelfWidth / minThickness).',
  ],
  functionName: 'minHeightShelves',
  params: ['books', 'shelfWidth'],
  starterCode: {
    javascript: `function minHeightShelves(books, shelfWidth) {
  // Return minimum total height of the bookcase
}`,
    python: `def minHeightShelves(books: list[list[int]], shelfWidth: int) -> int:
    # Return minimum total height of the bookcase
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [2, 4], [3, 2]], 6], expected: 4 },
    { args: [[[1, 1], [1, 1], [1, 1]], 1], expected: 3 },
    { args: [[[2, 2], [2, 2], [2, 2]], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[3, 4], [2, 3], [1, 2]], 3], expected: 7 },
    { args: [[[1, 5], [2, 3], [3, 6], [1, 4]], 4], expected: 11 },
    { args: [[[4, 6], [1, 2], [2, 5], [3, 3]], 6], expected: 11 },
    { args: [[[1, 1]], 100], expected: 1 },
    { args: [[[1, 2], [2, 1]], 3], expected: 2 },
    { args: [[[5, 3], [5, 3], [5, 3]], 5], expected: 9 },
  ],
};
