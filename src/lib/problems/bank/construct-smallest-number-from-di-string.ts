import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-smallest-number-from-di-string',
  title: 'Construct Smallest Number From DI String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a **0-indexed** string \`pattern\` of length \`n\` consisting of the characters \`'I'\` meaning **increasing** and \`'D'\` meaning **decreasing**.

A **0-indexed** string \`num\` of length \`n + 1\` is created using the following conditions:

- \`num\` consists of the digits \`'1'\` to \`'9'\`, where each digit is used **at most once**.
- If \`pattern[i] == 'I'\`, then \`num[i] < num[i + 1]\`.
- If \`pattern[i] == 'D'\`, then \`num[i] > num[i + 1]\`.

Return the lexicographically **smallest** possible string \`num\` that meets the conditions.`,
  constraints: [
    '1 <= pattern.length <= 8',
    'pattern consists of only the characters \'I\' and \'D\'.',
  ],
  examples: [
    {
      input: 'pattern = "IIIDIDDD"',
      output: '"123549876"',
    },
    {
      input: 'pattern = "DDD"',
      output: '"4321"',
    },
    {
      input: 'pattern = "I"',
      output: '"12"',
    },
  ],
  hints: [
    'Think of building the number left to right. When you encounter an \'I\', you need to output an increasing run; when you see a \'D\', you need a decreasing run. A stack makes it natural to collect a "D" sequence and output it in reverse at the end of the run.',
    'Push consecutive digits onto a stack. When you see \'I\' (or reach the end), pop everything off the stack to the result. This yields the smallest digit at the start of each increasing step.',
    `\`\`\`js
function smallestNumber(pattern) {
  const result = [];
  const stack = [];
  for (let i = 0; i <= pattern.length; i++) {
    stack.push(i + 1); // push next digit
    if (i === pattern.length || pattern[i] === 'I') {
      while (stack.length) result.push(stack.pop());
    }
  }
  return result.join('');
}
\`\`\``,
  ],
  functionName: 'smallestNumber',
  params: ['pattern'],
  starterCode: {
    javascript: `function smallestNumber(pattern) {

}`,
    typescript: 'function smallestNumber(pattern: string): string {\n\n}',
    python: `def smallestNumber(pattern: str) -> str:
    pass`,
  },
  visibleTests: [
    { args: ['IIIDIDDD'], expected: '123549876' },
    { args: ['DDD'], expected: '4321' },
    { args: ['I'], expected: '12' },
  ],
  hiddenTests: [
    { args: ['D'], expected: '21' },
    { args: ['ID'], expected: '132' },
    { args: ['DI'], expected: '213' },
    { args: ['IDIDID'], expected: '1325476' },
    { args: ['DDDDDDD'], expected: '87654321' },
    { args: ['IIIIIII'], expected: '12345678' },
    { args: ['DDIIDDI'], expected: '32147658' },
  ],
};
