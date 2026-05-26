import type { Problem } from '../types';

export const problem: Problem = {
  id: 'guess-number-higher-or-lower',
  title: 'Guess Number Higher or Lower',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `We are playing the Guess Game. The game is as follows:

I pick a number from \`1\` to \`n\`. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You are given a pre-built API function \`guess(num)\` which returns:
- \`-1\`: Your guess is higher than the number I picked (i.e. \`num > pick\`).
- \`1\`: Your guess is lower than the number I picked (i.e. \`num < pick\`).
- \`0\`: Your guess is equal to the number I picked (i.e. \`num == pick\`).

For this problem, you are given both \`n\` and \`pick\` directly. Return the number that was picked.`,
  constraints: [
    '`1 <= n <= 2^31 - 1`',
    '`1 <= pick <= n`',
  ],
  examples: [
    {
      input: 'n = 10, pick = 6',
      output: '6',
    },
    {
      input: 'n = 1, pick = 1',
      output: '1',
    },
    {
      input: 'n = 2, pick = 1',
      output: '1',
    },
  ],
  hints: [
    'Use binary search. Repeatedly guess the midpoint of your search range.',
    'If `guess(mid) === 0`, you found the answer. If `guess(mid) === -1`, search the lower half. If `guess(mid) === 1`, search the upper half.',
    `\`\`\`js
var guessGame = function(guess) {
  return function(n) {
    let lo = 1, hi = n;
    while (lo <= hi) {
      const mid = lo + Math.floor((hi-lo)/2);
      const r = guess(mid);
      if (r === 0) return mid;
      if (r === -1) hi = mid-1; else lo = mid+1;
    }
  };
};\`\`\``,
  ],
  functionName: 'guessNumber',
  params: ['n', 'pick'],
  starterCode: {
    javascript: `function guessNumber(n, pick) {
  // pick is provided so you can simulate: guess(num) returns 0, -1, or 1
  // relative to pick. Return the picked number.

}`,
    python: `def guessNumber(n, pick):
    # pick is provided; simulate guess(num): 0 if equal, -1 if num > pick, 1 if num < pick
    pass`,
  },
  visibleTests: [
    { args: [10, 6], expected: 6 },
    { args: [1, 1], expected: 1 },
    { args: [2, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [100, 50], expected: 50 },
    { args: [100, 1], expected: 1 },
    { args: [100, 100], expected: 100 },
    { args: [2147483647, 2147483647], expected: 2147483647 },
  ],
};
