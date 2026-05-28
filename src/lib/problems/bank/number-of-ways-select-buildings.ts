import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-select-buildings',
  title: 'Number of Ways to Select Buildings',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` which represents the types of buildings along a street where:

- \`s[i] = '0'\` denotes that the \`i\`th building is an **office** and
- \`s[i] = '1'\` denotes that the \`i\`th building is a **restaurant**.

As a city official, you would like to **select** 3 buildings with indices \`i\`, \`j\`, \`k\` where \`i < j < k\` such that the selected buildings are **not consecutive** in the same type. That is, the selected buildings must follow the pattern \`"010"\` or \`"101"\` as a subsequence.

Return the **number of ways** to select 3 buildings.`,
  constraints: [
    '3 <= s.length <= 10^5',
    "s[i] is either '0' or '1'.",
  ],
  examples: [
    {
      input: 's = "001101"',
      output: '6',
      explanation: 'The valid selections are indices (0,2,4), (0,3,4), (1,2,4), (1,3,4), (0,2,5), (1,2,5).',
    },
    {
      input: 's = "11100"',
      output: '0',
      explanation: 'No valid selection exists.',
    },
  ],
  hints: [
    'Level 1: Think about building pairs as states. Track c0 (count of 0s), c1 (count of 1s), c01 (count of "01" pairs), c10 (count of "10" pairs).',
    'Level 2: When you see a 0: new "10" pairs = c1; complete "010" patterns = c01. When you see a 1: new "01" pairs = c0; complete "101" patterns = c10.',
    'Level 3: let c0=0,c1=0,c01=0,c10=0,ans=0;for(const ch of s){if(ch==="0"){c10+=c1;ans+=c01;c0++;}else{c01+=c0;ans+=c10;c1++;}}return ans;',
  ],
  functionName: 'numberOfWays',
  params: ['s'],
  starterCode: {
    javascript: 'function numberOfWays(s) {\n  // your code here\n}\n',
    typescript: "function numberOfWays(s: string): number {\n  // your code here\n}",

    python: 'def numberOfWays(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['001101'], expected: 6 },
    { args: ['11100'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['010'], expected: 1 },
    { args: ['101'], expected: 1 },
    { args: ['000'], expected: 0 },
    { args: ['111'], expected: 0 },
    { args: ['0101'], expected: 2 },
  ],
};
