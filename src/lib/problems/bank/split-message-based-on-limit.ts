import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-message-based-on-limit',
  title: 'Split Message Based on Limit',
  difficulty: 'hard',
  tags: ['strings'],
  description: `You are given a string \`message\` and a positive integer \`limit\`.

You must split the message into one or more parts. Each part \`k\` must be formatted as:
\`<message-part><k/n>\`

Where \`n\` is the total number of parts, and the entire part (text + suffix) must not exceed \`limit\` characters.

Return the **parts** array, or an empty array if it is impossible to split the message.

**Example:** \`message = "this is really a very awesome message"\`, \`limit = 9\`

Each part has suffix \`<k/14>\` or \`<k/n>\`. With limit=9, each part holds up to 3 chars of text plus the suffix.

Output: \`["thi<1/14>", "s i<2/14>", ..., "ge<14/14>"]\``,
  constraints: [
    '1 <= message.length <= 10^4',
    '1 <= limit <= 10^4',
  ],
  examples: [
    {
      input: 'message = "this is really a very awesome message", limit = 9',
      output: '["thi<1/14>","s i<2/14>","s r<3/14>","eal<4/14>","ly <5/14>","a v<6/14>","ery<7/14>"," aw<8/14>","eso<9/14>","me<10/14>"," m<11/14>","es<12/14>","sa<13/14>","ge<14/14>"]',
      explanation: 'Each part text + suffix fits within limit=9.',
    },
    {
      input: 'message = "short message", limit = 15',
      output: '["short mess<1/2>","age<2/2>"]',
    },
    {
      input: 'message = "a", limit = 5',
      output: '[]',
      explanation: '"a<1/1>" has 6 characters > limit 5. Impossible.',
    },
  ],
  hints: [
    'Binary search or linear search on the total number of parts n (from 1 upward).',
    'For a given n, compute how many characters each part can hold: `limit - len("<k/n>")`. If any part gets ≤ 0 characters, n is too small.',
    'Check if the total available characters across all n parts is ≥ message.length. If so, construct the parts greedily.',
  ],
  functionName: 'splitMessage',
  params: ['message', 'limit'],
  starterCode: {
    javascript: `function splitMessage(message, limit) {

}`,
    typescript: "function splitMessage(message: string, limit: number): string[] {\n\n}",

    python: `def splitMessage(message, limit):
    pass
`,
  },
  visibleTests: [
    {
      args: ['this is really a very awesome message', 9],
      expected: ['thi<1/14>','s i<2/14>','s r<3/14>','eal<4/14>','ly <5/14>','a v<6/14>','ery<7/14>',' aw<8/14>','eso<9/14>','me<10/14>',' m<11/14>','es<12/14>','sa<13/14>','ge<14/14>'],
    },
    {
      args: ['short message', 15],
      expected: ['short mess<1/2>', 'age<2/2>'],
    },
    {
      args: ['a', 5],
      expected: [],
    },
  ],
  hiddenTests: [
    { args: ['a', 6], expected: ['a<1/1>'] },
    { args: ['ab', 6], expected: ['a<1/2>', 'b<2/2>'] },
    { args: ['hello', 10], expected: ['hello<1/1>'] },
    { args: ['hello', 9], expected: ['hell<1/2>', 'o<2/2>'] },
    { args: ['x'.repeat(100), 5], expected: [] },
  ],
};
