import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-the-students-by-their-kth-score',
  title: 'Sort the Students by Their Kth Score',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is a class of \`m\` students. You are given a **0-indexed** integer array \`score\` of size \`m x n\`, where \`score[i][j]\` denotes the score of the \`i\`-th student in the \`j\`-th exam. The students are **0-indexed**.

You are also given an integer \`k\`. Sort the students (rows of the matrix) in **non-increasing order** by their scores in the \`k\`-th (\`0\`-indexed) exam.

Return the matrix after sorting it.`,
  constraints: [
    'm == score.length',
    'n == score[i].length',
    '1 <= m, n <= 250',
    '1 <= score[i][j] <= 10^5',
    '0 <= k < n',
    'All elements in each row are distinct.',
  ],
  examples: [
    {
      input: 'score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2',
      output: '[[7,5,11,2],[10,6,9,1],[4,8,3,15]]',
      explanation: 'k=2 scores: 9,11,3. Sort descending by exam 2: 11→row1, 9→row0, 3→row2.',
    },
    {
      input: 'score = [[3,4],[5,6]], k = 0',
      output: '[[5,6],[3,4]]',
      explanation: 'k=0 scores: 3,5. Sort descending: 5→row1, 3→row0.',
    },
  ],
  hints: [
    'Level 1: Sort the rows (students) by the k-th column value in descending order.',
    'Level 2: Use a standard sort with comparator: (a, b) => b[k] - a[k].',
    'Level 3: `return score.sort((a, b) => b[k] - a[k]);`',
  ],
  functionName: 'sortTheStudents',
  params: ['score', 'k'],
  starterCode: {
    javascript: 'function sortTheStudents(score, k) {\n  // your code here\n}\n',
    typescript: 'function sortTheStudents(score: number[][], k: number): number[][] {\n  // your code here\n}\n',
    python: 'def sortTheStudents(score, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2],
      expected: [[7,5,11,2],[10,6,9,1],[4,8,3,15]],
    },
    {
      args: [[[3,4],[5,6]], 0],
      expected: [[5,6],[3,4]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1,2,3]], 0],
      expected: [[1,2,3]],
    },
    {
      args: [[[5,3],[2,7]], 1],
      expected: [[2,7],[5,3]],
    },
    {
      args: [[[1,2],[3,4],[5,6]], 1],
      expected: [[5,6],[3,4],[1,2]],
    },
    {
      args: [[[100,1],[50,2],[75,3]], 0],
      expected: [[100,1],[75,3],[50,2]],
    },
  ],
};
