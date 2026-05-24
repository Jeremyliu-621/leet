import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-town-judge',
  title: 'Find the Town Judge',
  difficulty: 'easy',
  tags: ['graph'],
  description: `In a town there are \`n\` people labelled \`1\` to \`n\`. There is a rumor that one of them is secretly the town judge.

If the town judge exists, then:
1. The town judge **trusts nobody**.
2. **Everybody else** (except the town judge) trusts the town judge.
3. There is **exactly one** person that satisfies properties 1 and 2.

You are given an array \`trust\` where \`trust[i] = [a, b]\` means person \`a\` trusts person \`b\`.

Return the label of the town judge if the town judge exists, otherwise return \`-1\`.

**Approach:** Count in-degree (how many people trust each person) and out-degree (who each person trusts). The judge has in-degree \`n-1\` and out-degree \`0\`.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= trust.length <= 24000',
    'All the pairs of trust are unique',
    'a != b',
    '1 <= a, b <= n',
  ],
  examples: [
    {
      input: 'n = 2, trust = [[1,2]]',
      output: '2',
      explanation: 'Person 1 trusts person 2. Person 2 trusts nobody. Person 2 is the judge.',
    },
    {
      input: 'n = 3, trust = [[1,3],[2,3]]',
      output: '3',
      explanation: 'Persons 1 and 2 both trust person 3. Person 3 trusts nobody.',
    },
  ],
  hints: [
    'Track two arrays: how many people trust person i (in-degree), and whether person i trusts anyone (out-degree).',
    'The judge has in-degree exactly n-1 and out-degree 0.',
    'A single pass through `trust` builds both arrays; then scan 1..n for the judge.',
  ],
  functionName: 'findJudge',
  params: ['n', 'trust'],
  preamble: {},
  starterCode: {
    javascript: 'function findJudge(n, trust) {\n  \n}\n',
    python: 'def findJudge(n, trust):\n    pass\n',
  },
  visibleTests: [
    { args: [2, [[1, 2]]], expected: 2 },
    { args: [3, [[1, 3], [2, 3]]], expected: 3 },
    { args: [3, [[1, 3], [2, 3], [3, 1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, [[1, 2], [2, 3]]], expected: -1 },
    { args: [4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]], expected: 3 },
    { args: [3, [[1, 2], [1, 3], [2, 3]]], expected: 3 },
  ],
};
