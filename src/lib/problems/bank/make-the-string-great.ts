import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-the-string-great',
  title: 'Make The String Great',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given a string \`s\` of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** \`s[i]\` and \`s[i + 1]\` where:

- \`0 <= i <= s.length - 2\`
- \`s[i]\` is a lower-case letter and \`s[i + 1]\` is the same letter but in upper-case or **vice-versa**.

To make the string good, you can choose **two adjacent** characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer will be unique.`,
  constraints: [
    '1 <= s.length <= 100',
    's contains only lower and upper case English letters.',
  ],
  examples: [
    {
      input: 's = "leEeetcode"',
      output: '"leetcode"',
      explanation: 'Remove \'e\' and \'E\' (adjacent pair). Result: "leetcode".',
    },
    {
      input: 's = "abBAcC"',
      output: '""',
      explanation: 'Remove pairs: "abBAcC" → "aacC" → "cC" → "" (or other orderings, same result).',
    },
    {
      input: 's = "s"',
      output: '"s"',
      explanation: 'Single character — already good.',
    },
  ],
  hints: [
    'Use a stack. For each character, if the top of the stack is the same letter in the opposite case, pop it. Otherwise push.',
    'Two characters are opposite case if their ASCII values differ by 32.',
    `\`\`\`js
function makeGood(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length-1].toLowerCase()===c.toLowerCase() && stack[stack.length-1]!==c)
      stack.pop();
    else stack.push(c);
  }
  return stack.join("");
}\`\`\``,
  ],
  functionName: 'makeGood',
  params: ['s'],
  starterCode: {
    javascript: `function makeGood(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && Math.abs(stack[stack.length-1].charCodeAt(0) - c.charCodeAt(0)) === 32) stack.pop();
    else stack.push(c);
  }
  return stack.join('');
}`,
    typescript: `function makeGood(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (stack.length && Math.abs(stack[stack.length-1].charCodeAt(0) - c.charCodeAt(0)) === 32) stack.pop();
    else stack.push(c);
  }
  return stack.join('');
}`,
    python: `def makeGood(s):
    stack = []
    for c in s:
        if stack and abs(ord(stack[-1]) - ord(c)) == 32: stack.pop()
        else: stack.append(c)
    return ''.join(stack)`,
  },
  visibleTests: [
    { args: ['leEeetcode'], expected: 'leetcode' },
    { args: ['abBAcC'], expected: '' },
    { args: ['s'], expected: 's' },
  ],
  hiddenTests: [
    { args: ['Aa'], expected: '' },
    { args: ['AaBbCc'], expected: '' },
    { args: ['aA'], expected: '' },
    { args: ['aaAA'], expected: '' },
  ],
};
