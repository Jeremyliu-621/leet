import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-substrings-between-parentheses',
  title: 'Reverse Substrings Between Each Pair of Parentheses',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `You are given a string \`s\` that consists of lower case English letters and brackets. Reverse the strings in each pair of matching parentheses, starting from the innermost one. Your result should **not** contain any brackets.`,
  constraints: [
    '`1 <= s.length <= 2000`',
    '`s` only contains lower case English letters and parentheses',
    'It is guaranteed that all parentheses are balanced',
  ],
  examples: [
    {
      input: 's = "(abcd)"',
      output: '"dcba"',
    },
    {
      input: 's = "(u(love)i)"',
      output: '"iloveu"',
      explanation: 'Inner: reverse "love" → "evol". Outer: reverse "uevoli" → "iloveu".',
    },
    {
      input: 's = "(ed(et(oc))el)"',
      output: '"leetcode"',
    },
  ],
  hints: [
    'Use a stack of strings. When you see a letter, append to the top string. When you see \'(\', push a new empty string.',
    'When you see \')\', pop the top string, reverse it, and append to the new top.',
    'The result is the single remaining string on the stack after processing all characters.',
  ],
  functionName: 'reverseParentheses',
  params: ['s'],
  starterCode: {
    javascript: `function reverseParentheses(s) {

}`,
    python: `def reverseParentheses(s):
    pass`,
  },
  visibleTests: [
    { args: ['(abcd)'], expected: 'dcba' },
    { args: ['(u(love)i)'], expected: 'iloveu' },
    { args: ['(ed(et(oc))el)'], expected: 'leetcode' },
  ],
  hiddenTests: [
    { args: ['a(bcde)f'], expected: 'aedcbf' },
    { args: ['(a(b)c)'], expected: 'cba' },
    { args: ['a'], expected: 'a' },
    { args: ['(abc)(de)'], expected: 'cbaed' },
  ],
};
