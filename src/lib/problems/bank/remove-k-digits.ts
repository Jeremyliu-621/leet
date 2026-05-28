import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-k-digits',
  title: 'Remove K Digits',
  difficulty: 'hard',
  tags: ['stack', 'strings'],
  description: `Given a string \`num\` representing a non-negative integer and an integer \`k\`, remove exactly \`k\` digits to produce the **smallest possible number**. Return the result as a string without leading zeros.

**Key insight:** Use a **monotonic increasing stack**. For each digit, pop the stack while the top is greater than the current digit AND we still have removals left. This greedily keeps the smallest digits in the most significant positions.

After processing all digits, if removals remain, trim from the end (those would be the largest trailing digits).`,
  constraints: [
    '1 <= k <= num.length <= 10^5',
    'num consists of digits only',
    'num does not have leading zeros except when num == "0"',
  ],
  examples: [
    {
      input: 'num = "1432219", k = 3',
      output: '"1219"',
      explanation: 'Remove the digits 4, 3, and 2 to get the smallest number 1219.',
    },
    {
      input: 'num = "10200", k = 1',
      output: '"200"',
      explanation: 'Remove the leading 1; the remaining "0200" strips its leading zero to give "200".',
    },
    {
      input: 'num = "10", k = 2',
      output: '"0"',
      explanation: 'Remove all digits; an empty result is returned as "0".',
    },
  ],
  hints: [
    'To get the smallest number, you want the most significant positions to hold the smallest digits. Greedily: for each incoming digit, remove previous digits from the top of your stack if they\'re larger and you have removals left.',
    'Use a stack: for each digit in `num`, while the stack\'s top is greater than the current digit and `k > 0`, pop and decrement `k`. Then push the current digit. If `k > 0` after processing all digits, remove the last `k` digits from the stack.',
    '`const stk = []; let rem = k; for (const d of num) { while (rem > 0 && stk.length && stk[stk.length-1] > d) { stk.pop(); rem--; } stk.push(d); } while (rem-- > 0) stk.pop(); const result = stk.join(\'\').replace(/^0+/, \'\') || \'0\'; return result;`',
  ],
  functionName: 'removeKdigits',
  params: ['num', 'k'],
  starterCode: {
    javascript: 'function removeKdigits(num, k) {\n  // your code here\n}\n',
    typescript: "function removeKdigits(num: string, k: number): string {\n  // your code here\n}",

    python: 'def removeKdigits(num: str, k: int) -> str:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['1432219', 3], expected: '1219' },
    { args: ['10200', 1], expected: '200' },
    { args: ['10', 2], expected: '0' },
    { args: ['9', 1], expected: '0' },
  ],
  hiddenTests: [
    { args: ['112', 1], expected: '11' },
    { args: ['10', 1], expected: '0' },
    { args: ['1234567890', 9], expected: '0' },
    { args: ['100', 1], expected: '0' },
  ],
};
