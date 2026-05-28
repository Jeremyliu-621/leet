import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-make-array-complementary',
  title: 'Minimum Moves to Make Array Complementary',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array **nums** of **even** length **n** and an integer **limit**. In one move, you can replace any integer in **nums** with any integer between **1** and **limit** (inclusive).

The array **nums** is **complementary** if for all indices **0 <= i < n / 2**, \`nums[i] + nums[n - 1 - i]\` equals the **same** number. For example, the array \`[1,2,3,4]\` is complementary because for all indices i, \`nums[i] + nums[n - 1 - i] = 5\`.

Return the **minimum** number of moves required to make **nums** **complementary**.

**Function signature:** \`minMoves(nums, limit)\``,
  examples: [
    {
      input: 'nums = [1,2,4,3], limit = 4',
      output: '1',
      explanation:
        'In 1 move, change nums[1] = 1 so that nums[1] + nums[2] = 1 + 4 = 5 and nums[0] + nums[3] = 1 + 3 = 4... actually the optimal is change 2 to 1, making pairs (1,3) and (1,4) with target 4. Or change 4 to 2, making both pairs sum to 4. Either way: 1 move.',
    },
    {
      input: 'nums = [1,2,2,1], limit = 2',
      output: '2',
      explanation:
        'In 2 moves, we can make nums = [2,2,2,2] (change 1,1 to 2,2) so all pairs sum to 4.',
    },
  ],
  constraints: [
    'n == nums.length',
    '2 <= n <= 10^5',
    '1 <= nums[i] <= limit <= 10^4',
    'n is even.',
  ],
  hints: [
    'For each pair (a, b) and a target sum t, the cost is: 0 if a+b==t; 1 if min(a,b)+1 ≤ t ≤ max(a,b)+limit (we can adjust one element to hit t); 2 otherwise.',
    'Use a **difference array** over possible target sums [2, 2*limit]. Start with cost 2 everywhere, subtract 1 in the range where one move suffices, subtract 1 again at the exact sum a+b (and add back 1 after).',
    'For pair (a=min, b=max): diff[2]+=2, diff[2*limit+1]-=2; diff[a+1]-=1, diff[b+limit+1]+=1; diff[a+b]-=1, diff[a+b+1]+=1. Then sweep prefix sums to find the minimum total cost.',
  ],
  functionName: 'minMoves',
  params: ['nums', 'limit'],
  starterCode: {
    javascript: 'function minMoves(nums, limit) {\n  \n}\n',
    typescript: "function minMoves(nums: number[], limit: number): number {\n  \n}",

    python: 'def minMoves(nums, limit):\n    ',
  },
  visibleTests: [
    { args: [[1, 2, 4, 3], 4], expected: 1 },
    { args: [[1, 2, 2, 1], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 0 },
    // pair (1,1): a+b=2=t, 0 moves
    { args: [[5, 5], 10], expected: 0 },
    // pair (5,5): a+b=10=t, 0 moves
    { args: [[1, 10], 10], expected: 0 },
    // pair (1,10): a+b=11≤2*10=20. 0 moves at t=11.
    { args: [[3, 1, 3, 1], 4], expected: 0 },
    // pairs (3,1) and (3,1): both already sum to 4. 0 moves.
    { args: [[1, 2, 3, 4], 4], expected: 0 },
    // pairs (nums[0],nums[3])=(1,4)=5 and (nums[1],nums[2])=(2,3)=5. Both sum to 5. 0 moves.
    { args: [[1, 3, 3, 1], 3], expected: 2 },
    // pairs (1,1) and (3,3): best target t=4 → 1 move each = 2 moves total.
    { args: [[1, 3, 2, 2], 3], expected: 1 },
    // pairs (1,2) and (3,2): at t=3, pair(1,2) needs 0 moves (1+2=3), pair(3,2) needs 1 move (change 3→1). Total=1.
  ],
};
