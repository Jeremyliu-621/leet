import type { Problem } from '../types';

export const problem: Problem = {
  id: 'dota2-senate',
  title: 'Dota2 Senate',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `In the world of Dota2, there are two parties: the **Radiant** and the **Dire**.

The Dota2 senate consists of senators from both parties. The senate decides on a change by a **majority** vote. The voting procedure is:

1. Senators vote in round-robin order based on their index.
2. Each senator may either **ban one opposing senator's right** in this and future rounds, or **announce victory** if all remaining senators are from their own party.

Given a string \`senate\` where \`'R'\` represents Radiant and \`'D'\` represents Dire, simulate the voting process and return \`"Radiant"\` if Radiant wins, or \`"Dire"\` if Dire wins.

Both sides play **optimally** — a senator will always ban the nearest next opponent.`,
  constraints: [
    '1 <= senate.length <= 10⁴',
    '`senate[i]` is either `\'R\'` or `\'D\'`',
  ],
  examples: [
    {
      input: 'senate = "RD"',
      output: '"Radiant"',
      explanation: 'R bans D. Only R remains, Radiant wins.',
    },
    {
      input: 'senate = "RDD"',
      output: '"Dire"',
      explanation: 'R bans first D. Second D bans R. D announces victory.',
    },
    {
      input: 'senate = "RRDDD"',
      output: '"Radiant"',
      explanation: 'Round 1: R1 bans D1, R2 bans D2, D3 bans R1 (already used, so the remaining queue has R2 and D3). R2 bans D3. Radiant wins.',
    },
  ],
  hints: [
    'Use two queues storing the indices of Radiant and Dire senators. Process the senator with the smaller index first.',
    'When a Radiant senator acts before a Dire senator, the Radiant senator bans that Dire senator. Re-add the Radiant senator to its queue with index += n (to simulate the next round).',
    'Continue until one queue is empty. Whichever queue still has senators is the winner.',
  ],
  functionName: 'predictPartyVictory',
  params: ['senate'],
  starterCode: {
    javascript: 'function predictPartyVictory(senate) {\n  \n}\n',
    python: 'def predictPartyVictory(senate: str) -> str:\n    pass\n',
  },
  visibleTests: [
    { args: ['RD'], expected: 'Radiant' },
    { args: ['RDD'], expected: 'Dire' },
    { args: ['RRDDD'], expected: 'Radiant' },
  ],
  hiddenTests: [
    { args: ['R'], expected: 'Radiant' },
    { args: ['D'], expected: 'Dire' },
    { args: ['DDRRR'], expected: 'Radiant' },
    { args: ['DRRD'], expected: 'Dire' },
    { args: ['RDRDR'], expected: 'Radiant' },
  ],
};
