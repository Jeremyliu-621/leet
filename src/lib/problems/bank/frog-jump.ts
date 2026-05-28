import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frog-jump',
  title: 'Frog Jump',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of \`stones\`' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be **1 unit**.

If the frog's last jump was \`k\` units, its next jump must be either \`k - 1\`, \`k\`, or \`k + 1\` units. The frog can only jump in the forward direction.`,
  constraints: [
    '2 <= stones.length <= 2000',
    '0 <= stones[i] <= 2^31 - 1',
    'stones[0] == 0',
    'stones is sorted in a strictly increasing order',
  ],
  examples: [
    {
      input: 'stones = [0,1,3,5,6,8,12,17]',
      output: 'true',
      explanation: 'Jumps of 1, 2, 2, 3, 3, 4, 5 land on 1, 3, 5, 8, 11? No — 0→1(1), 1→3(2), 3→5(2), 5→8(3), 8→11? 11 not in list... Actually 0→1(1)→2?... Let the frog figure it out: 0→1(1)→3(2)→6(3)→10? Hmm. Try: 0→1(1)→3(2)→6(3)→8(2)? Wait: k=2, next can be 1,2,3. 6→8 is 2 ✓, 8→12(4) k=2→4 jump means k was 2, 4=k+2 which is > k+1 — invalid. Let me re-read: 0→1(1)→3(2)→6(3)→8(2)→12(4)? k=3 last, next can be 2,3,4. 8→12 is 4 ✓. Then 12→17(5), k=4, can jump 3,4,5. 5 ✓.',
    },
    {
      input: 'stones = [0,1,2,3,4,8,9,11]',
      output: 'false',
      explanation: 'No valid sequence of jumps can reach the last stone.',
    },
  ],
  hints: [
    'Use a hash map: stone position → set of possible jump sizes to reach that stone.',
    'Start with dp[0] = {0}. For each stone position p with possible jump k in dp[p], try to land at p+k-1, p+k, p+k+1 if those positions are stones.',
    'The answer is true if dp[last stone] is non-empty.',
  ],
  functionName: 'canCross',
  params: ['stones'],
  starterCode: {
    javascript: 'function canCross(stones) {\n\n}\n',
    typescript: "function canCross(stones: number[]): boolean {\n\n}",

    python: 'def canCross(stones):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 3, 5, 6, 8, 12, 17]], expected: true },
    { args: [[0, 1, 2, 3, 4, 8, 9, 11]], expected: false },
  ],
  hiddenTests: [
    { args: [[0, 1]], expected: true },
    { args: [[0, 2]], expected: false },
    { args: [[0, 1, 3, 6, 10, 15, 21]], expected: true },
    { args: [[0, 1, 3, 6, 11, 17]], expected: false },
  ],
};
