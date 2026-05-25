import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-texts',
  title: 'Count Number of Texts',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice is texting Bob using her phone. The **mapping** of digits to letters is shown in the figure above (a standard phone keypad where 2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz).

In order to **add** a letter, Alice has to **press** the key of the corresponding digit once for the first letter, twice for the second letter, and so on.

Alice will not press the same key more times than necessary.

Given a string \`pressedKeys\` representing the sequence of keys pressed, return the **total number of possible text messages** Alice could have sent modulo \`10^9 + 7\`.

Note: keys 7 and 9 each map to 4 letters (pqrs and wxyz), so pressing the same digit up to **4 times** is valid for those keys; for all other digit keys, up to **3 times**.`,
  constraints: [
    '1 <= pressedKeys.length <= 10^5',
    'pressedKeys only consists of digits from 2-9.',
  ],
  examples: [
    { input: 'pressedKeys = "22233"', output: '8', explanation: 'The possible texts are: "bcd", "bd", "cd", "b d" ... 8 ways total.' },
    { input: 'pressedKeys = "222222222222222222222222222222222222"', output: '82876089' },
  ],
  hints: [
    'Use DP where dp[i] = number of messages for pressedKeys[0..i-1]. For each position, look back 2, 3 (or 4 for 7/9) positions while the digit is the same.',
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
  ],
  hiddenTests: [
    { args: ['99'], expected: 2 },
    { args: ['999'], expected: 4 },
    { args: ['9999'], expected: 8 },
    { args: ['2222'], expected: 7 },
    { args: ['23'], expected: 1 },
  ],
};
