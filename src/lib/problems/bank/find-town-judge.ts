import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-town-judge',
  title: 'Find the Town Judge',
  difficulty: 'easy',
  tags: ['graph', 'arrays'],
  description: `In a town, there are \`n\` people labeled from \`1\` to \`n\`. There is a rumor that one of these people is secretly the **town judge**.

If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given an array \`trust\` where \`trust[i] = [a_i, b_i]\` represents that the person labeled \`a_i\` trusts the person labeled \`b_i\`. If a trust relationship does not exist in \`trust\` array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return \`-1\` otherwise.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= trust.length <= 10^4',
    'trust[i].length == 2',
    'All trust[i] are unique.',
    'a_i != b_i',
    '1 <= a_i, b_i <= n',
  ],
  examples: [
    { input: 'n = 2, trust = [[1,2]]', output: '2', explanation: 'Person 2 is trusted by person 1 and trusts nobody.' },
    { input: 'n = 3, trust = [[1,3],[2,3]]', output: '3', explanation: 'Person 3 is trusted by everyone and trusts nobody.' },
    { input: 'n = 3, trust = [[1,3],[2,3],[3,1]]', output: '-1', explanation: 'Person 3 trusts person 1, so cannot be the judge.' },
  ],
  hints: [
    'Level 1: The town judge has in-degree n-1 (trusted by all others) and out-degree 0 (trusts nobody).',
    'Level 2: Maintain a score array: +1 for each trust received, -1 for each trust given. The judge has score n-1.',
    'Level 3: const s=new Array(n+1).fill(0);for(const[a,b]of trust){s[a]--;s[b]++;}for(let i=1;i<=n;i++)if(s[i]===n-1)return i;return -1;',
  ],
  functionName: 'findJudge',
  params: ['n', 'trust'],
  starterCode: {
    javascript: 'function findJudge(n, trust) {\n  // your code here\n}\n',
    python: 'def findJudge(n, trust):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [2, [[1, 2]]], expected: 2 },
    { args: [3, [[1, 3], [2, 3]]], expected: 3 },
    { args: [3, [[1, 3], [2, 3], [3, 1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, []], expected: -1 },
    { args: [4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]], expected: 3 },
    { args: [2, [[1, 2], [2, 1]]], expected: -1 },
  ],
};
