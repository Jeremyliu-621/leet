import type { Problem } from '../types';

export const problem: Problem = {
  id: 'chalk-replacer',
  title: 'Chalk Replacer',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `There are \`n\` students in a class numbered from \`0\` to \`n - 1\`. The teacher will give each student a problem starting with student number \`0\`, then the student numbered \`1\`, and so on until the teacher reaches student number \`n - 1\`, whereupon the teacher will restart the process, starting with student \`0\` again.

You are given a **0-indexed** integer array \`chalk\` and an integer \`k\`. There are initially \`k\` pieces of chalk. When the student number \`i\` is given a problem, they will use \`chalk[i]\` pieces of chalk to solve it. However, if the current number of chalk pieces is **strictly less** than \`chalk[i]\`, then the student number \`i\` will be asked to **replace** the chalk.

Return the **index** of the student that will replace the chalk pieces.`,
  constraints: [
    'chalk.length == n',
    '1 <= n <= 10^5',
    '1 <= chalk[i] <= 10^5',
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'chalk = [5,1,5], k = 22',
      output: '0',
      explanation: 'Round 1: 22-5=17, 17-1=16, 16-5=11. Round 2: 11-5=6, 6-1=5, 5-5=0. Round 3: 0 < 5, so student 0 replaces.',
    },
    {
      input: 'chalk = [3,4,1,2], k = 25',
      output: '1',
      explanation: 'Round 1: 25-3=22-4=18-1=17-2=15. Round 2: 15-3=12-4=8-1=7-2=5. Round 3: 5-3=2. 2<4, so student 1 replaces.',
    },
  ],
  hints: [
    'Level 1: First compute k mod (sum of chalk). Then simulate from student 0 with remaining chalk.',
    'Level 2: The sum of one full round is sum(chalk). Reduce k by k % sum first, then walk until someone runs out.',
    'Level 3: const sum=chalk.reduce((a,b)=>a+b,0);k%=sum;for(let i=0;i<chalk.length;i++){if(k<chalk[i])return i;k-=chalk[i];}return 0;',
  ],
  functionName: 'chalkReplacer',
  params: ['chalk', 'k'],
  starterCode: {
    javascript: `function chalkReplacer(chalk, k) {
  const sum = chalk.reduce((a, b) => a + b, 0);
  k %= sum;
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }
  return 0;
}`,
    typescript: `function chalkReplacer(chalk: number[], k: number): number {
  const sum = chalk.reduce((a, b) => a + b, 0);
  k %= sum;
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]!) return i;
    k -= chalk[i]!;
  }
  return 0;
}`,
    python: `def chalkReplacer(chalk, k):
    chalk = list(chalk.to_py()) if hasattr(chalk, 'to_py') else list(chalk)
    k %= sum(chalk)
    for i, c in enumerate(chalk):
        if k < c: return i
        k -= c
    return 0`,
  },
  visibleTests: [
    { args: [[5, 1, 5], 22], expected: 0 },
    { args: [[3, 4, 1, 2], 25], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 2], 3], expected: 0 },
    { args: [[1, 2], 2], expected: 1 },
    { args: [[2, 3, 5], 15], expected: 2 },
    { args: [[1, 2, 3, 4], 20], expected: 0 },
  ],
};
