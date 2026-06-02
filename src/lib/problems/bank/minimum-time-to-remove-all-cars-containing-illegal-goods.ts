import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-remove-all-cars-containing-illegal-goods',
  title: 'Minimum Time to Remove All Cars Containing Illegal Goods',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` where \`s[i] = '0'\` denotes that the \`i\`th car does **not** contain illegal goods and \`s[i] = '1'\` denotes that the \`i\`th car does contain illegal goods.

As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations **any** number of times:

1. Remove a train car from the **left** end (i.e., remove \`s[0]\`) — this takes **1** unit of time regardless of the number of cars left.
2. Remove a train car from the **right** end (i.e., remove \`s[s.length - 1]\`) — this takes **1** unit of time regardless of the number of cars left.
3. Remove a train car from anywhere in the train — this takes **2** units of time regardless of the number of cars left.

Return the **minimum** time to remove all the cars containing illegal goods.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's[i] is either \'0\' or \'1\'.',
    'At least one s[i] is \'1\'.',
  ],
  examples: [
    {
      input: 's = "1100101"',
      output: '5',
      explanation: 'Remove the cars at indices 0 and 1 from the left (cost 2), car at index 4 from middle (cost 2), car at index 6 from right (cost 1). Total = 5.',
    },
    {
      input: 's = "0010"',
      output: '2',
      explanation: 'Remove car at index 2 from the middle (cost 2). Total = 2.',
    },
  ],
  hints: [
    'Level 1: Think about splitting the problem. Some 1s are removed via left deletions, some via right deletions, some via middle (cost-2) individual deletions.',
    'Level 2: Define left[i] = minimum cost to remove all 1s in s[0..i] using only left-removals and middle-removals. Transition: left[i] = min(left[i-1] + (s[i]==\"1\"?2:0), i+1). The second option removes all s[0..i] from the left.',
    'Level 3: Similarly compute right[i] = min cost to remove all 1s in s[i..n-1]. Answer = min over all split points j of left[j] + right[j+1], plus min(left[n-1], right[0]).',
  ],
  functionName: 'minimumTime',
  params: ['s'],
  starterCode: {
    javascript: `function minimumTime(s) {

}`,
    typescript: `function minimumTime(s: string): number {

}`,
    python: `def minimumTime(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['1100101'], expected: 5 },
    { args: ['0010'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['1111'], expected: 4 },
    { args: ['1'], expected: 1 },
    { args: ['10'], expected: 1 },
    { args: ['01'], expected: 1 },
    { args: ['100'], expected: 1 },
    { args: ['011'], expected: 2 },
    { args: ['110100'], expected: 4 },
    { args: ['101010'], expected: 5 },
  ],
};
