import type { Problem } from '../types';

export const problem: Problem = {
  id: 'utf-8-validation',
  title: 'UTF-8 Validation',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer array \`data\` representing bytes, determine whether it is a **valid UTF-8 encoding**.

A UTF-8 encoded character uses 1 to 4 bytes. The valid patterns are:
| Bytes | Byte 1       | Byte 2–4 (continuation) |
|-------|-------------|-------------------------|
| 1     | \`0xxxxxxx\` | —                       |
| 2     | \`110xxxxx\` | \`10xxxxxx\`            |
| 3     | \`1110xxxx\` | \`10xxxxxx 10xxxxxx\`   |
| 4     | \`11110xxx\` | \`10xxxxxx 10xxxxxx 10xxxxxx\` |

Each integer in \`data\` represents **one byte** (only the least significant 8 bits matter).

Return \`true\` if the data represents a valid UTF-8 encoding.`,
  constraints: ['1 <= data.length <= 2 * 10^4', '0 <= data[i] <= 255'],
  examples: [
    {
      input: 'data = [197,130,1]',
      output: 'true',
      explanation:
        '197 = 11000101 → 2-byte char, needs 1 continuation. 130 = 10000010 → valid continuation. 1 = 00000001 → 1-byte char.',
    },
    {
      input: 'data = [235,140,4]',
      output: 'false',
      explanation:
        '235 = 11101011 → 3-byte char, needs 2 continuations. 140 = 10001100 → valid. 4 = 00000100 → NOT a continuation byte (must start with 10). Invalid.',
    },
  ],
  hints: [
    'For each byte, determine how many bytes the character takes by looking at the leading bits: `0` → 1, `110` → 2, `1110` → 3, `11110` → 4.',
    'After the first byte, read the required number of continuation bytes. Each must start with `10` (i.e., the byte ANDed with 0xC0 must equal 0x80).',
    'If the byte starts with `10` without a preceding lead byte, or if there are too few/many bytes, return false.',
  ],
  functionName: 'validUtf8',
  params: ['data'],
  starterCode: {
    javascript: 'function validUtf8(data) {\n  // your code here\n}\n',
    python: 'def validUtf8(data):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[197, 130, 1]], expected: true },
    { args: [[235, 140, 4]], expected: false },
  ],
  hiddenTests: [
    { args: [[0]], expected: true },
    { args: [[127]], expected: true },
    { args: [[128]], expected: false },
    { args: [[192, 128]], expected: true },
    { args: [[224, 128, 128]], expected: true },
    { args: [[240, 128, 128, 128]], expected: true },
    { args: [[248]], expected: false },
    { args: [[145]], expected: false },
    { args: [[192, 80]], expected: false },
  ],
};
