import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-ii',
  title: 'Stone Game II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Alice and Bob continue their games with piles of stones. There are a number of piles **arranged in a row**, and each pile has a positive integer number of stones \`piles[i]\`. The objective of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take all the stones in the **first** \`X\` remaining piles, where \`1 <= X <= 2M\`. Then, we set \`M = max(M, X)\`. Initially, \`M = 1\`.

The game continues until all the stones have been taken. Assuming Alice and Bob play optimally, return the **maximum number of stones Alice can get**.`,
  constraints: [
    '1 <= piles.length <= 100',
    '1 <= piles[i] <= 10^4',
  ],
  examples: [
    {
      input: 'piles = [2,7,9,4,4]',
      output: '10',
      explanation: 'Alice takes pile [2] (M becomes 1→1). Bob takes [7,9] (M becomes 2). Alice takes [4,4] (2 piles). Alice gets 2+8=10, Bob gets 16.',
    },
    {
      input: 'piles = [1,2,3,4,5,100]',
      output: '104',
    },
  ],
  hints: [
    'Level 1: Use suffix sums + memoized recursion. dp(i, M) = max stones current player can get starting at index i with parameter M. Current player takes X piles (1 ≤ X ≤ 2M): gets suffix[i]-dp(i+X, max(M,X)).',
    'Level 2: Precompute suffix[i] = sum of piles[i..n-1]. dp(i, M) = max over x in 1..2M of: suffix[i] - dp(i+x, max(M,x)). Cache by (i, M). Return dp(0, 1).',
    'Level 3: const n=piles.length,suf=Array(n+1).fill(0);for(let i=n-1;i>=0;i--)suf[i]=suf[i+1]+piles[i];const memo=new Map();function dp(i,m){if(i>=n)return 0;if(2*m>=n-i)return suf[i];const k=i*200+m;if(memo.has(k))return memo.get(k);let best=0;for(let x=1;x<=2*m;x++)best=Math.max(best,suf[i]-dp(i+x,Math.max(m,x)));memo.set(k,best);return best;}return dp(0,1);',
  ],
  functionName: 'stoneGameII',
  params: ['piles'],
  starterCode: {
    javascript: 'function stoneGameII(piles) {\n  // your code here\n}\n',
    python: 'def stoneGameII(piles):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 7, 9, 4, 4]], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 100]], expected: 104 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 2]], expected: 3 },
    { args: [[3, 1]], expected: 4 },
    { args: [[1, 2, 3]], expected: 3 },
  ],
};
