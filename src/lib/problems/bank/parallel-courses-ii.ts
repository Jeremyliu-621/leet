import type { Problem } from '../types';

export const problem: Problem = {
  id: 'parallel-courses-ii',
  title: 'Parallel Courses II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'graph', 'backtracking'],
  description: `You have \`n\` courses labeled \`0\` to \`n-1\` and an array \`relations\` where \`relations[i] = [x, y]\` means course \`x\` must be taken before course \`y\`. Each semester you can take **at most \`k\`** courses, provided all their prerequisites are met.

Return the **minimum number of semesters** needed to complete all \`n\` courses.

It is guaranteed that the given relations form a DAG (no cycles).

**Note:** \`n\` is small (≤ 15), enabling a **bitmask DP** approach.

**Example:**
- n = 4, relations = [[2,1],[3,0]], k = 2
- Semester 1: take courses 2 and 3 (no prerequisites)
- Semester 2: take courses 0 and 1
- Answer: **2**`,
  constraints: [
    '1 <= n <= 15',
    '1 <= k <= n',
    '0 <= relations.length <= n * (n - 1) / 2',
    '0 <= relations[i][0], relations[i][1] <= n - 1',
    'relations[i][0] != relations[i][1]',
    'No duplicate relations, no cycles',
  ],
  examples: [
    {
      input: 'n = 4, relations = [[2,1],[3,0]], k = 2',
      output: '2',
      explanation: 'Take {2,3} in semester 1, then {1,0} in semester 2.',
    },
    {
      input: 'n = 5, relations = [[2,1],[3,0],[4,1],[4,0]], k = 2',
      output: '3',
      explanation: 'Semester 1: {2,4}, Semester 2: {1,3}, Semester 3: {0}. Total 3 semesters.',
    },
    {
      input: 'n = 4, relations = [], k = 2',
      output: '2',
      explanation: 'No prerequisites. Take 2 per semester: ceil(4/2) = 2.',
    },
  ],
  hints: [
    'With n ≤ 15, represent sets as bitmasks. `dp[mask]` = minimum semesters to finish the set of courses represented by `mask`. Precompute `prereqs[i]` as the bitmask of prerequisites for course i.',
    'A course `i` is "available" given a taken-set `mask` if all its prerequisites are in `mask` and `i` itself is not. Enumerate all subsets of the available set with size ≤ k using bitmask enumeration.',
    'For each state `mask`, find `available` = set of courses whose prerequisites are all in `mask`. Try each subset of `available` with size ≤ k as the next semester. `dp[mask | subset] = min(dp[mask | subset], dp[mask] + 1)`.',
  ],
  functionName: 'minNumberOfSemesters',
  params: ['n', 'relations', 'k'],
  starterCode: {
    javascript: `function minNumberOfSemesters(n, relations, k) {
  // Return minimum semesters to complete all courses taking at most k per semester
}`,
    typescript: "function minNumberOfSemesters(n: number, relations: number[][], k: number): number {\n  // Return minimum semesters to complete all courses taking at most k per semester\n}",

    python: `def minNumberOfSemesters(n: int, relations: list[list[int]], k: int) -> int:
    # Return minimum semesters to complete all courses taking at most k per semester
    pass`,
  },
  visibleTests: [
    { args: [4, [[2, 1], [3, 0]], 2], expected: 2 },
    { args: [5, [[2, 1], [3, 0], [4, 1], [4, 0]], 2], expected: 3 },
    { args: [4, [], 2], expected: 2 },
    { args: [1, [], 1], expected: 1 },
  ],
  hiddenTests: [
    // chain 0→1→2: must be 3 semesters regardless of k
    { args: [3, [[0, 1], [1, 2]], 2], expected: 3 },
    { args: [3, [[0, 1], [1, 2]], 1], expected: 3 },
    // two independent chains of length 2, k=1: 4 semesters
    { args: [4, [[0, 1], [2, 3]], 1], expected: 4 },
    // two independent chains of length 2, k=2: take both roots, then both ends → 2 semesters
    { args: [4, [[0, 1], [2, 3]], 2], expected: 2 },
    // 6 independent courses, k=2: 3 semesters
    { args: [6, [], 2], expected: 3 },
    // single prereq chain of 2, k=1: 2 semesters
    { args: [2, [[0, 1]], 1], expected: 2 },
  ],
};
