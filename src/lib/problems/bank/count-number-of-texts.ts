import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-texts',
  title: 'Count Number of Texts',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice is texting Bob using her phone. The mapping of digits to letters is:

\`\`\`
2 → abc    3 → def    4 → ghi    5 → jkl
6 → mno    7 → pqrs   8 → tuv    9 → wxyz
\`\`\`

To add a letter, Alice presses the key of the corresponding digit the required number of times. For example, \`'d'\` requires pressing \`'3'\` twice, and \`'s'\` requires pressing \`'7'\` four times.

The character Alice is typing can only be determined if there is a **pause** between presses of the same key. For example, pressing \`'2'\` twice could be \`"aa"\` or \`"b"\`; pressing \`'2'\` then \`'3'\` must be \`"ad"\`.

Given a string \`pressedKeys\` representing Alice's key presses, return the **total number of possible text messages** Alice could have sent, modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= pressedKeys.length <= 10^5`',
    '`pressedKeys` only consists of digits from `2` to `9`.',
  ],
  examples: [
    {
      input: 'pressedKeys = "22233"',
      output: '8',
      explanation: '"22" can be "aa" or "b" (2 ways), "33" can be "dd", "e" (2 ways), "3" is "d" (1 way). Total = 2 × 4 × 1... actually computed by DP across all positions: 8 ways.',
    },
    {
      input: 'pressedKeys = "222222222222222222222222222222222222"',
      output: '82876089',
      explanation: 'Answer modulo 10^9 + 7.',
    },
  ],
  hints: [
    'DP: dp[i] = number of ways to decode pressedKeys[0..i-1]. dp[0] = 1.',
    'For position i (1-indexed), look back k = 1, 2, 3 (or 4 for digits 7 and 9) positions. If all k characters equal pressedKeys[i-1] and they differ from the character before them (or k reaches the start), add dp[i-k] to dp[i].',
    'Digits 7 and 9 map to 4 letters, so at most 4 consecutive presses of the same key count as 1 letter.',
  ],
  functionName: 'countTexts',
  params: ['pressedKeys'],
  starterCode: {
    javascript: `function countTexts(pressedKeys) {

}`,
    python: `def countTexts(pressedKeys):
    pass`,
  },
  visibleTests: [
    { args: ['22233'], expected: 8 },
    { args: ['222222222222222222222222222222222222'], expected: 82876089 },
  ],
  hiddenTests: [
    { args: ['2'], expected: 1 },
    { args: ['22'], expected: 2 },
    { args: ['222'], expected: 4 },
    { args: ['2222'], expected: 7 },
    { args: ['7777'], expected: 8 },
    { args: ['77777'], expected: 15 },
    { args: ['23'], expected: 1 },
    { args: ['7777777777'], expected: 401 },
  ],
};
