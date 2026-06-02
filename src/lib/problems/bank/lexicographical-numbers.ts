import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographical-numbers',
  title: 'Lexicographical Numbers',
  difficulty: 'medium',
  tags: ['trie', 'arrays'],
  description: `Given an integer \`n\`, return all the numbers in the range \`[1, n]\` sorted in lexicographical order.

You must write an algorithm that runs in \`O(n)\` time and uses \`O(1)\` extra space.`,
  constraints: ['`1 <= n <= 5 * 10^4`'],
  examples: [
    {
      input: 'n = 13',
      output: '[1,10,11,12,13,2,3,4,5,6,7,8,9]',
    },
    {
      input: 'n = 2',
      output: '[1,2]',
    },
  ],
  hints: [
    'Think of numbers as paths in a trie rooted at 0. DFS pre-order starting at each digit 1–9 gives lexicographic order.',
    'Iterative: start at 1. At each step, try to go deeper (curr * 10) if ≤ n. Otherwise, increment curr; if curr % 10 == 0 or curr > n, divide by 10 and increment.',
    'The O(1) space O(n) solution uses pointer-style DFS: move to curr*10 if ≤ n; else move to next sibling (increment, then back up while trailing 0s or > n).',
  ],
  functionName: 'lexicalOrder',
  params: ['n'],
  starterCode: {
    javascript: `function lexicalOrder(n) {
  const res = [];
  let curr = 1;
  for (let i = 0; i < n; i++) {
    res.push(curr);
    if (curr * 10 <= n) {
      curr *= 10;
    } else {
      if (curr === n) curr = Math.floor(curr / 10);
      curr++;
      while (curr % 10 === 0) curr = Math.floor(curr / 10);
    }
  }
  return res;
}`,
    typescript: `function lexicalOrder(n: number): number[] {
  const res: number[] = [];
  let curr = 1;
  for (let i = 0; i < n; i++) {
    res.push(curr);
    if (curr * 10 <= n) {
      curr *= 10;
    } else {
      if (curr === n) curr = Math.floor(curr / 10);
      curr++;
      while (curr % 10 === 0) curr = Math.floor(curr / 10);
    }
  }
  return res;
}`,
    python: `def lexicalOrder(n):
    res, curr = [], 1
    for _ in range(n):
        res.append(curr)
        if curr * 10 <= n:
            curr *= 10
        else:
            if curr == n: curr //= 10
            curr += 1
            while curr % 10 == 0: curr //= 10
    return res`,
  },
  visibleTests: [
    { args: [13], expected: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [2], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [1], expected: [1] },
    { args: [10], expected: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [20], expected: [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 3, 4, 5, 6, 7, 8, 9] },
    { args: [100], expected: [1, 10, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 5, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 6, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 7, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 8, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] },
  ],
};
