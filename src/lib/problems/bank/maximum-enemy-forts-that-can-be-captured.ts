import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-enemy-forts-that-can-be-captured',
  title: 'Maximum Enemy Forts That Can Be Captured',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`forts\` of length \`n\` representing the positions of several forts. \`forts[i]\` can be \`-1\`, \`0\`, or \`1\` where:

- \`-1\` represents there is **no fort** at the \`i\`th position (empty land).
- \`0\` represents there is an **enemy fort** at the \`i\`th position.
- \`1\` represents the captain's fort at the \`i\`th position.

The captain can move the army from one of the captain's forts to an **empty position** directly to the right or left. While moving, the army **captures** all the enemy forts that come in its path.

The **captured army** from an enemy fort is the number of enemy forts that the army passes through.

Return the **maximum** number of enemy forts that the army can capture. If the army cannot reach an empty position, return \`0\`.

**Approach:** For each pair of 1 and -1 (or -1 and 1) with only 0s between them, count the zeros. Track the max.`,
  constraints: [
    '1 <= forts.length <= 1000',
    '-1 <= forts[i] <= 1',
  ],
  examples: [
    {
      input: 'forts = [1,0,0,-1,0,0,0,0,1]',
      output: '4',
      explanation: 'Moving army from fort at index 0 to empty at index 8 captures 4 enemy forts (indices 1,2,3... wait): from index 0 (1) to index 4 (where -1 is at 3). Actually move from 1 at index 0 rightward: between index 0 and -1 at index 3 are 2 zeros (max 2). Or from -1 at 3 to 1 at 8: 4 zeros between. Answer=4.',
    },
    {
      input: 'forts = [0,0,1,-1]',
      output: '0',
      explanation: 'No empty position can be reached with enemy forts between.',
    },
  ],
  hints: [
    'Scan for pairs (1, -1) or (-1, 1). Count zeros between each such pair.',
    '```js\nfunction captureForts(forts) {\n  let ans = 0, prev = -1;\n  for (let i = 0; i < forts.length; i++) {\n    if (forts[i] !== 0) {\n      if (prev !== -1 && forts[i] !== forts[prev])\n        ans = Math.max(ans, i - prev - 1);\n      prev = i;\n    }\n  }\n  return ans;\n}\n```',
    `\`\`\`js
function captureForts(forts) {
  let best = 0;
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] !== 1 && forts[i] !== -1) continue;
    for (let j = i+1; j < forts.length; j++) {
      if (forts[j] === 0) continue;
      if (forts[j] === -forts[i]) best = Math.max(best, j-i-1);
      break;
    }
  }
  return best;
}\`\`\``,
  ],
  functionName: 'captureForts',
  params: ['forts'],
  starterCode: {
    javascript: `function captureForts(forts) {
  // return maximum enemy forts captured

}`,
    python: `def captureForts(forts: list) -> int:
    # return maximum enemy forts captured
    pass
`,
  },
  visibleTests: [
    { args: [[1, 0, 0, -1, 0, 0, 0, 0, 1]], expected: 4 },
    { args: [[0, 0, 1, -1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, -1]], expected: 0 },
    { args: [[1, 0, -1]], expected: 1 },
    { args: [[-1, 0, 0, 0, 1]], expected: 3 },
    { args: [[1, 0, 0, 0, -1, 0, 0, 0, 1]], expected: 3 },
    { args: [[0, 1, 0, -1, 0]], expected: 1 },
    { args: [[1, 0, 0, 0, -1, 1, 0, 0, 0, -1]], expected: 3 },
  ],
};
