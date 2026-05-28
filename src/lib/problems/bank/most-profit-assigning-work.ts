import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-profit-assigning-work',
  title: 'Most Profit Assigning Work',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You have \`n\` jobs and \`m\` workers. You are given three arrays: \`difficulty\`, \`profit\`, and \`worker\` where:

- \`difficulty[i]\` and \`profit[i]\` are the difficulty and the profit of the \`i\`th job.
- \`worker[j]\` is the ability of the \`j\`th worker (i.e., the \`j\`th worker can only complete a job with difficulty at most \`worker[j]\`).

Every worker can be assigned **at most one job**, but one job can be completed **multiple times**.

Return the maximum profit we can achieve after assigning the workers to the jobs.`,
  constraints: [
    'n == difficulty.length',
    'n == profit.length',
    'm == worker.length',
    '1 <= n, m <= 10^4',
    '1 <= difficulty[i], profit[i], worker[i] <= 10^5',
  ],
  examples: [
    {
      input: 'difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]',
      output: '100',
      explanation: 'Workers with abilities 4, 5 earn 20 each; workers with abilities 6, 7 earn 30 each. Total = 100.',
    },
    {
      input: 'difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]',
      output: '0',
      explanation: 'No worker has sufficient ability for any job.',
    },
  ],
  hints: [
    'Level 1: Sort jobs by difficulty. For each worker, find all jobs they can do (difficulty ≤ ability) and pick the one with max profit. Precompute a running max profit so each worker query is O(log n).',
    'Level 2: Create pairs (difficulty[i], profit[i]), sort by difficulty. Compute prefix max profit. For each worker, binary-search for the rightmost job with difficulty ≤ ability, look up the prefix max at that index.',
    'Level 3: const jobs=difficulty.map((d,i)=>[d,profit[i]]).sort((a,b)=>a[0]-b[0]);const maxP=[0];for(const[,p]of jobs)maxP.push(Math.max(maxP[maxP.length-1],p));let total=0;for(const w of worker){let lo=0,hi=jobs.length;while(lo<hi){const m=(lo+hi)>>1;if(jobs[m][0]<=w)lo=m+1;else hi=m;}total+=maxP[lo];}return total;',
  ],
  functionName: 'maxProfitAssignment',
  params: ['difficulty', 'profit', 'worker'],
  starterCode: {
    javascript: 'function maxProfitAssignment(difficulty, profit, worker) {\n  // your code here\n}\n',
    python: 'def maxProfitAssignment(difficulty, profit, worker):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]], expected: 100 },
    { args: [[85, 47, 57], [24, 66, 99], [40, 25, 25]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2], [10], [1]], expected: 0 },
    { args: [[2], [10], [2]], expected: 10 },
    { args: [[1, 2, 3], [3, 2, 1], [1, 2, 3]], expected: 9 },
    { args: [[3, 1, 2], [30, 10, 20], [2, 3]], expected: 50 },
    { args: [[2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [1, 100]], expected: 50 },
  ],
};
