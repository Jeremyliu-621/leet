import type { Problem } from '../types';

export const problem: Problem = {
  id: 'poor-pigs',
  title: 'Poor Pigs',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `There are \`buckets\` buckets of liquid, where **exactly one** of the buckets is poisonous. To figure out which one is poisonous, you can feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have \`minutesToTest\` minutes to determine which bucket is poisonous.

You can feed the pigs according to these steps:
1. Choose some live pigs to feed.
2. For each pig, choose which buckets to feed it. A pig can drink from as many buckets as you want.
3. Wait for \`minutesToDie\` minutes.
4. Any pig that drank from a poisonous bucket will die.
5. Any pig that is still alive can be used again in the next round.

Given \`buckets\`, \`minutesToDie\`, and \`minutesToTest\`, return *the **minimum** number of pigs needed to figure out which bucket is poisonous within the allotted time*.

**Example 1:**
\`\`\`
Input: buckets = 4, minutesToDie = 15, minutesToTest = 15
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: buckets = 4, minutesToDie = 15, minutesToTest = 30
Output: 2
\`\`\``,
  examples: [
    { input: '4, 15, 15', output: '2' },
    { input: '4, 15, 30', output: '2' },
    { input: '1000, 15, 60', output: '5' },
  ],
  constraints: [
    '1 <= buckets <= 1000',
    '1 <= minutesToDie <= minutesToTest <= 100',
  ],
  hints: [
    'Each pig can test in multiple rounds. With T = minutesToTest / minutesToDie rounds, a single pig encodes (T+1) states (died in round 1, 2, ..., T, or survived).',
    'With p pigs, you can distinguish (T+1)^p bucket states.',
    'Find the minimum p such that (T+1)^p >= buckets.',
  ],
  functionName: 'poorPigs',
  params: ['buckets', 'minutesToDie', 'minutesToTest'],
  starterCode: {
    javascript: `function poorPigs(buckets, minutesToDie, minutesToTest) {

}`,
    typescript: "function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {\n\n}",

    python: `def poorPigs(buckets, minutesToDie, minutesToTest):
    `,
  },
  visibleTests: [
    { args: [4, 15, 15], expected: 2 },
    { args: [4, 15, 30], expected: 2 },
    { args: [1000, 15, 60], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 0 },
    { args: [2, 1, 1], expected: 1 },
    { args: [125, 1, 5], expected: 3 },
  ],
};
