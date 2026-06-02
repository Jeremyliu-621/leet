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
  const n = books.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let w = 0, h = 0;
    for (let j = i; j >= 1; j--) {
      w += books[j-1][0];
      if (w > shelfWidth) break;
      h = Math.max(h, books[j-1][1]);
      dp[i] = Math.min(dp[i], dp[j-1] + h);
    }
  }
  return dp[n];
}`,
    typescript: `function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let w = 0, h = 0;
    for (let j = i; j >= 1; j--) {
      w += books[j-1]![0]!;
      if (w > shelfWidth) break;
      h = Math.max(h, books[j-1]![1]!);
      dp[i] = Math.min(dp[i]!, dp[j-1]! + h);
    }
  }
  return dp[n]!;
}`,
    python: `def minHeightShelves(books, shelfWidth):
    if hasattr(books, 'to_py'): books = books.to_py()
    books = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in books]
    n = len(books)
    dp = [float('inf')] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        w = h = 0
        for j in range(i, 0, -1):
            w += books[j-1][0]
            if w > shelfWidth: break
            h = max(h, books[j-1][1])
            dp[i] = min(dp[i], dp[j-1] + h)
    return dp[n]`,
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
