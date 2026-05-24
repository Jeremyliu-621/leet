import type { Problem } from '../types';

export const problem: Problem = {
  id: 'generate-parentheses',
  title: 'Generate Parentheses',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given \`n\` pairs of parentheses, write a function to **generate all combinations of well-formed parentheses**.`,
  constraints: [
    '1 <= n <= 8',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '["((()))","(()())","(())()","()(())","()()()"]',
    },
    {
      input: 'n = 1',
      output: '["()"]',
    },
  ],
  hints: [
    'Use backtracking. Track the count of open and close brackets placed so far.',
    'You can add an open bracket if open < n. You can add a close bracket if close < open.',
    'The base case is when the string length equals 2*n — add the current string to results.',
  ],
  functionName: 'generateParenthesisRunner',
  params: ['n'],
  preamble: {
    javascript: `function generateParenthesisRunner(n) {
  return generateParenthesis(n).slice().sort();
}`,
    python: `def generateParenthesisRunner(n):
    return sorted(generateParenthesis(n))
`,
  },
  starterCode: {
    javascript: `function generateParenthesis(n) {
  // Return all valid combinations of n pairs of parentheses
}`,
    python: `def generateParenthesis(n):
    # Return all valid combinations of n pairs of parentheses
    pass`,
  },
  visibleTests: [
    { args: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
    { args: [1], expected: ['()'] },
    { args: [2], expected: ['(())', '()()'] },
  ],
  hiddenTests: [
    { args: [4], expected: ['(((())))','((()()))','((())())','((()))()','(()(()))','(()()())','(()())()','(())(())','(())()()','()((()))','()(()())','()(())()','()()(())','()()()()'] },
    { args: [1], expected: ['()'] },
    { args: [2], expected: ['(())', '()()'] },
    { args: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  ],
};
