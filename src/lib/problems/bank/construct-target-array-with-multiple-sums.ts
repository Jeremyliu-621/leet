import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-target-array-with-multiple-sums',
  title: 'Construct Target Array With Multiple Sums',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`target\`. You start with an array of all ones (same length).

In one operation, choose any index \`i\` and replace \`arr[i]\` with the sum of all elements in \`arr\`.

Return \`true\` if it is possible to construct \`target\` from an array of all ones using these operations. Otherwise return \`false\`.`,
  constraints: [
    'n == target.length',
    '1 <= n <= 5 * 10^4',
    '1 <= target[i] <= 10^9',
  ],
  examples: [
    {
      input: 'target = [9,3,5]',
      output: 'true',
      explanation: 'Start [1,1,1] → [3,1,1] → [3,5,1] → [9,5,1]. Rearranging gives [9,3,5].',
    },
    {
      input: 'target = [1,1,1,2]',
      output: 'false',
      explanation: 'The smallest achievable array from [1,1,1,1] with one operation is [1,1,1,4].',
    },
    {
      input: 'target = [1,1,1,4]',
      output: 'true',
      explanation: 'Start [1,1,1,1] → replace index 3 with sum 4.',
    },
  ],
  hints: [
    'Work backwards: the largest element was the last one replaced. Undo the operation: if max = x and the sum of remaining elements is rest, then before the operation max was (x - rest). Use modulo to undo multiple operations at once.',
    'If rest == 1, any large max can be reduced to 1. If max % rest == 0, you\'d need a 0 in the original array which is invalid. If max <= rest, this element couldn\'t have been produced from a sum operation.',
    'Simulate with a max value + total sum (no heap needed for small arrays): `let arr=[...target],total=arr.reduce((a,b)=>a+b,0); while(true){arr.sort((a,b)=>b-a); const mx=arr[0],rest=total-mx; if(mx===1)return true; if(rest<1||mx<=rest)return false; if(rest===1)return true; const nv=mx%rest; if(nv===0)return false; total=total-mx+nv; arr[0]=nv;}`',
  ],
  functionName: 'isPossible',
  params: ['target'],
  starterCode: {
    javascript: 'function isPossible(target) {\n  \n}\n',
    python: 'def isPossible(target: list[int]) -> bool:\n    pass\n',
  },
  visibleTests: [
    { args: [[9, 3, 5]], expected: true },
    { args: [[1, 1, 1, 2]], expected: false },
    { args: [[1, 1, 1, 4]], expected: true },
    { args: [[1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: true },
    { args: [[2, 1]], expected: true },
    { args: [[5, 5]], expected: false },
    { args: [[1, 1000000000]], expected: true },
    { args: [[9, 9, 9]], expected: false },
    { args: [[1, 2, 3]], expected: false },
    { args: [[1, 1, 5]], expected: true },
  ],
};
