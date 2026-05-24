import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-invalid-parentheses',
  title: 'Remove Invalid Parentheses',
  difficulty: 'hard',
  tags: ['backtracking', 'strings'],
  description: `Given a string \`s\` that contains parentheses and letters, remove the **minimum** number of invalid parentheses to make the string valid.

Return **all** unique results. The answer may be returned in any order.

A string of parentheses is valid if every open parenthesis has a matching close parenthesis in the correct order.`,
  constraints: [
    '1 <= s.length <= 25',
    's consists of lowercase English letters and parentheses',
    'There are at most 20 parentheses in s',
  ],
  examples: [
    {
      input: 's = "()())()"',
      output: '["(())()", "()()()"]',
      explanation: 'Remove one \')\' to get two valid results.',
    },
    {
      input: 's = ")("',
      output: '[""]',
      explanation:
        'Remove both parentheses. The only valid result is the empty string.',
    },
  ],
  hints: [
    'First compute the minimum removals needed: scan left-to-right counting unmatched \'(\' and \')\'. Unmatched \')\' cannot be fixed by future characters; unmatched \'(\' at the end are also invalid.',
    'BFS: start with the original string. Generate all strings with one character removed. If any are valid at this level, collect all valid ones — they use the minimum removals. If none, try the next level.',
    'Or DFS/backtracking with counts of how many \'(\' and \')\' to remove. Prune by never removing the same character type consecutively at the same depth.',
  ],
  functionName: 'removeInvalidParentheses',
  params: ['s'],
  starterCode: {
    javascript: `function removeInvalidParentheses(s) {\n\n}`,
    python: `def removeInvalidParentheses(s):\n    pass`,
  },
  visibleTests: [
    { args: ['()())()'], expected: ['(())()', '()()()'] },
    { args: [')('], expected: [''] },
  ],
  hiddenTests: [
    { args: ['(a)())()'], expected: ['(a())()', '(a)()()'] },
    { args: [''], expected: [''] },
    { args: ['((('], expected: [''] },
    { args: ['()'], expected: ['()'] },
    { args: ['(())'], expected: ['(())'] },
  ],
};
