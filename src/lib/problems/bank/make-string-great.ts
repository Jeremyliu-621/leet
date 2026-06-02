import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-string-great',
  title: 'Make The String Great',
  difficulty: 'easy',
  tags: ['strings', 'stack'],
  description: `Given a string \`s\` of lowercase and uppercase English letters, a **good** string is one where no adjacent characters \`s[i]\` and \`s[i+1]\` satisfy both:
- \`s[i]\` is a lowercase letter and \`s[i+1]\` is its uppercase equivalent, or
- \`s[i]\` is an uppercase letter and \`s[i+1]\` is its lowercase equivalent.

To make the string good, you can choose **two adjacent** characters that make it bad and remove them. Keep applying this operation until the string is good.

Return the resulting good string. It is **guaranteed** the answer is unique.`,
  constraints: [
    '1 <= s.length <= 100',
    's contains only lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 's = "leEeetcode"',
      output: '"leetcode"',
      explanation: '"leE" and "Ee" can be removed to leave "leetcode".',
    },
    {
      input: 's = "abBAcC"',
      output: '""',
      explanation: 'Removing all adjacent bad pairs leaves the empty string.',
    },
    {
      input: 's = "s"',
      output: '"s"',
      explanation: 'A single character is always good.',
    },
  ],
  hints: [
    'Level 1: Simulate the process by scanning left to right. When you find a bad pair, remove it and re-scan — but that\'s O(n²). Think of a faster structure.',
    'Level 2: Use a stack. Push each character. Before pushing, check if the stack\'s top and the current character form a bad pair. If so, pop instead of pushing.',
    'Level 3: A bad pair (top, cur) is when top.toLowerCase() === cur.toLowerCase() but top !== cur. This handles both (lowercase, UPPERCASE) and (UPPERCASE, lowercase) cases. Join the stack at the end.',
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
    { args: ['aAbBcC'], expected: '' },
    { args: ['aAbBCDEd'], expected: 'CDEd' },
    { args: ['aaAa'], expected: 'aa' },
    { args: ['abc'], expected: 'abc' },
    { args: ['ABC'], expected: 'ABC' },
    { args: ['AaBb'], expected: '' },
    { args: ['aABb'], expected: '' },
  ],
};
