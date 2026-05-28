import type { Problem } from '../types';

export const problem: Problem = {
  id: 'clear-digits',
  title: 'Clear Digits',
  difficulty: 'easy',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\`.

Your task is to remove all digits from \`s\` by performing this operation repeatedly until no digits remain:

- Delete the **first** digit and the **closest non-digit character to its left**.

Return the resulting string after all operations.

It is guaranteed that the operation is always possible — \`s\` does not start with a digit.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of lowercase English letters and digits.',
    'The input is generated such that it is possible to delete all digits.',
  ],
  examples: [
    {
      input: 's = "cb34"',
      output: '""',
      explanation: '"cb34" → delete \'3\' and \'b\' → "c4" → delete \'4\' and \'c\' → "".',
    },
    {
      input: 's = "abc1d"',
      output: '"abd"',
      explanation: '"abc1d" → delete \'1\' and \'c\' → "abd". No more digits.',
    },
  ],
  hints: [
    'Use a stack: push non-digit chars; when you see a digit, pop the top non-digit char.',
    'Join the stack to get the result.',
    `\`\`\`js
function clearDigits(s) {
  const stack = [];
  for (const c of s) {
    if (c >= "0" && c <= "9") stack.pop();
    else stack.push(c);
  }
  return stack.join("");
}\`\`\``,
  ],
  functionName: 'clearDigits',
  params: ['s'],
  starterCode: {
    javascript: 'function clearDigits(s) {\n  \n}\n',
    python: 'def clearDigits(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['cb34'], expected: '' },
    { args: ['abc1d'], expected: 'abd' },
    { args: ['a1b2'], expected: '' },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 'abc' },
    { args: ['a1b2c3'], expected: '' },
    { args: ['xyz12'], expected: 'x' },
    { args: ['ab2cd3'], expected: 'ac' },
  ],
};
