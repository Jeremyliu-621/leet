import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longer-contiguous-segments-of-ones-than-zeros',
  title: 'Longer Contiguous Segments of Ones than Zeros',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a binary string \`s\`, return \`true\` if the **longest** contiguous segment of \`1\`s is **strictly longer** than the longest contiguous segment of \`0\`s in \`s\`, or return \`false\` otherwise.

- For example, in \`s = "110100010"\` the longest contiguous segment of \`1\`s has length \`2\`, and the longest contiguous segment of \`0\`s has length \`3\`.

Note that if there are no \`0\`s, then the longest contiguous segment of \`0\`s is considered to have a length of \`0\`. The same applies if there are no \`1\`s.`,
  constraints: [
    '1 <= s.length <= 100',
    's[i] is either "0" or "1".',
  ],
  examples: [
    {
      input: 's = "1101"',
      output: 'true',
      explanation: 'The longest contiguous segment of 1s has length 2 (positions 0-1). The longest contiguous segment of 0s has length 1 (position 2). Since 2 > 1, return true.',
    },
    {
      input: 's = "111000"',
      output: 'false',
      explanation: 'The longest contiguous segment of 1s has length 3. The longest contiguous segment of 0s has length 3. Since 3 is not strictly greater than 3, return false.',
    },
    {
      input: 's = "110100010"',
      output: 'false',
      explanation: 'The longest contiguous segment of 1s has length 2. The longest contiguous segment of 0s has length 3. Since 2 < 3, return false.',
    },
  ],
  hints: [
    'Scan the string once for each character type to find the maximum consecutive run.',
    'Write a helper `maxRun(s, c)` that scans the string and tracks the current and maximum run length of character `c`.',
    'Return `maxRun(s, "1") > maxRun(s, "0")`.',
  ],
  functionName: 'checkZeroOnes',
  params: ['s'],
  starterCode: {
    javascript: `function checkZeroOnes(s) {
  const maxRun = (c) => {
    let best = 0, cur = 0;
    for (const ch of s) { if (ch === c) cur++; else cur = 0; if (cur > best) best = cur; }
    return best;
  };
  return maxRun('1') > maxRun('0');
}`,
    typescript: `function checkZeroOnes(s: string): boolean {
  const maxRun = (c: string) => {
    let best = 0, cur = 0;
    for (const ch of s) { if (ch === c) cur++; else cur = 0; if (cur > best) best = cur; }
    return best;
  };
  return maxRun('1') > maxRun('0');
}`,
    python: `def checkZeroOnes(s):
    def max_run(c):
        best = cur = 0
        for ch in s:
            if ch == c: cur += 1
            else: cur = 0
            best = max(best, cur)
        return best
    return max_run('1') > max_run('0')`,
  },
  visibleTests: [
    { args: ['1101'], expected: true },
    { args: ['111000'], expected: false },
    { args: ['110100010'], expected: false },
  ],
  hiddenTests: [
    { args: ['1'], expected: true },
    { args: ['0'], expected: false },
    { args: ['10'], expected: false },
    { args: ['01'], expected: false },
    { args: ['11110000'], expected: false },
    { args: ['111110000'], expected: true },
    { args: ['0001'], expected: false },
    { args: ['1110010001110'], expected: false },
  ],
};
