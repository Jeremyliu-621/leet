import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-texts',
  title: 'Count Number of Texts',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'hash-map'],
  description: `Alice is texting Bob using her phone. The **mapping** of digits to letters is shown in the figure below.

- 2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz

In order to **add** a letter, Alice has to **press** the key of the corresponding digit an appropriate number of times.

However, due to an error, Alice's friends cannot decipher the intended message. Given the string \`pressedKeys\` representing the sequence of keys pressed, return the **total number of possible text messages** Alice could have sent.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Note: Keys 7 and 9 have 4 letters each; keys 2, 3, 4, 5, 6, 8 have 3 letters each.`,
  constraints: [
    '`1 <= pressedKeys.length <= 10^5`',
    '`pressedKeys` only consists of digits from `2` to `9`.',
  ],
  examples: [
    {
      input: 'pressedKeys = "22233"',
      output: '8',
      explanation: '22 can be a, b, or aa. 33 can be d, e, or dd. 2 alone is a, b. Combinations: (3 choices for 22) * (1 for 3) * (1 for 3) = not quite — this needs careful DP.',
    },
    {
      input: 'pressedKeys = "222222222222222222222222222222222222"',
      output: '82876089',
    },
  ],
  hints: [
    'Group consecutive identical digits. For each group of length k, the number of ways is a Fibonacci-like DP where each digit can represent 1 letter, 2 letters, or 3 letters (or 4 for 7/9).',
  ],
  functionName: 'countTexts',
  params: ['pressedKeys'],
  starterCode: {
    javascript: 'function countTexts(pressedKeys) {\n  \n}\n',
    python: 'def countTexts(pressedKeys):\n    pass\n',
  },
  visibleTests: [
    { args: ['22233'], expected: 8 },
    { args: ['222222222222222222222222222222222222'], expected: 82876089 },
    { args: ['2'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['7777'], expected: 8 },
    { args: ['9999'], expected: 8 },
    { args: ['3456789'], expected: 1 },
    { args: ['23'], expected: 1 },
    { args: ['2222'], expected: 7 },
  ],
};
