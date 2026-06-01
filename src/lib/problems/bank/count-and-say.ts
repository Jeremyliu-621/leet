import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-and-say',
  title: 'Count and Say',
  difficulty: 'medium',
  tags: ['strings'],
  description: `The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:

- \`countAndSay(1) = "1"\`
- \`countAndSay(n)\` is the **run-length encoding** of \`countAndSay(n - 1)\`.

Run-length encoding (RLE) compresses a string by replacing each run of consecutive identical characters with the count followed by the character itself.

**Example RLE trace:**
- \`"1"\` → one 1 → \`"11"\`
- \`"11"\` → two 1s → \`"21"\`
- \`"21"\` → one 2, one 1 → \`"1211"\`
- \`"1211"\` → one 1, one 2, two 1s → \`"111221"\`

Given a positive integer \`n\`, return the \`n\`th term of the count-and-say sequence.`,
  constraints: [
    '1 <= n <= 30',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '"1"',
      explanation: 'The first term is defined as "1".',
    },
    {
      input: 'n = 4',
      output: '"1211"',
      explanation: 'countAndSay(1)="1", countAndSay(2)="11", countAndSay(3)="21", countAndSay(4)="1211".',
    },
  ],
  hints: [
    'Simulate the process iteratively. Start with "1" and build each successive term from the previous one.',
    'To encode a string: scan it left to right, counting consecutive identical characters. Each time the character changes (or you reach the end), append the count and the character to the result.',
    'Inner loop skeleton: `let i = 0; while (i < s.length) { let count = 1; while (i + count < s.length && s[i + count] === s[i]) count++; result += count + s[i]; i += count; }`',
  ],
  functionName: 'countAndSay',
  params: ['n'],
  starterCode: {
    javascript: `function countAndSay(n) {
  let s = '1';
  for (let k = 1; k < n; k++) {
    let result = '', i = 0;
    while (i < s.length) {
      let count = 1;
      while (i + count < s.length && s[i + count] === s[i]) count++;
      result += count + s[i];
      i += count;
    }
    s = result;
  }
  return s;
}`,
    typescript: `function countAndSay(n: number): string {
  let s = '1';
  for (let k = 1; k < n; k++) {
    let result = '', i = 0;
    while (i < s.length) {
      let count = 1;
      while (i + count < s.length && s[i + count] === s[i]) count++;
      result += count + s[i]!;
      i += count;
    }
    s = result;
  }
  return s;
}`,
    python: `def countAndSay(n):
    s = '1'
    for _ in range(n - 1):
        result, i = '', 0
        while i < len(s):
            count = 1
            while i + count < len(s) and s[i + count] == s[i]: count += 1
            result += str(count) + s[i]
            i += count
        s = result
    return s`,
  },
  visibleTests: [
    { args: [1], expected: '1' },
    { args: [4], expected: '1211' },
  ],
  hiddenTests: [
    { args: [2], expected: '11' },
    { args: [3], expected: '21' },
    { args: [5], expected: '111221' },
    { args: [6], expected: '312211' },
  ],
};
