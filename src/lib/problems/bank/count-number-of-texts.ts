import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-texts',
  title: 'Count Number of Texts',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Alice is texting Bob using her phone's numeric keypad. The mapping from digit to letters is:

- \`'2'\` → "abc", \`'3'\` → "def", \`'4'\` → "ghi", \`'5'\` → "jkl"
- \`'6'\` → "mno", \`'7'\` → "pqrs", \`'8'\` → "tuv", \`'9'\` → "wxyz"

Alice encodes each character by pressing its corresponding digit one or more times consecutively — up to 3 times for digits 2–6 and 8, or up to 4 times for digits 7 and 9.

Given a string \`pressedKeys\` representing the sequence of digit presses Alice made, return the **number of possible text messages** Alice could have sent. Since the answer may be very large, return it **modulo 10^9 + 7**.`,
  constraints: [
    '`1 <= pressedKeys.length <= 10^5`',
    '`pressedKeys[i]` is a digit from `\'2\'` to `\'9\'`.',
  ],
  examples: [
    {
      input: 'pressedKeys = "22233"',
      output: '8',
      explanation:
        'The run "22" (digit 2, length 2) can decode as: "aa" or "b" → 2 ways. ' +
        'The run "3" (length 1) → 1 way. The run "3" (length 1) → 1 way. ' +
        'But "22233" is parsed as runs [22][3][3]... actually the DP considers all valid groupings across the entire string, yielding 8 total.',
    },
    {
      input: 'pressedKeys = "222222222222222222222222222222222222"',
      output: '82876089',
      explanation: 'The answer is huge; return it modulo 10^9 + 7.',
    },
  ],
  hints: [
    'Process consecutive runs of the same digit. For a run of length L, count how many ways you can split it into groups of 1, 2, or 3 (or 4 for \'7\' and \'9\').',
    'Use 1-D dynamic programming: let `dp[i]` = number of ways to decode the first `i` presses. For each position look back 1, 2, 3 (or 4) steps — but only while all those presses are the same digit as the current one.',
    'Take every intermediate result modulo 10^9 + 7 to avoid overflow.',
  ],
  functionName: 'countTexts',
  params: ['pressedKeys'],
  starterCode: {
    javascript: `function countTexts(pressedKeys) {

}
`,
    python: `def countTexts(pressedKeys):
    pass
`,
  },
  visibleTests: [
    { args: ['22233'], expected: 8 },
    { args: ['222222222222222222222222222222222222'], expected: 82876089 },
  ],
  hiddenTests: [
    { args: ['2'], expected: 1 },
    { args: ['22'], expected: 2 },
    { args: ['222'], expected: 4 },
    { args: ['7777'], expected: 8 },
    { args: ['23'], expected: 1 },
  ],
};
