import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-outermost-parentheses',
  title: 'Remove Outermost Parentheses',
  difficulty: 'easy',
  tags: ['strings', 'stack'],
  description: `A valid parentheses string is either empty \`""\`, \`"(" + A + ")"\`, or \`A + B\`, where \`A\` and \`B\` are valid parentheses strings.

The **depth** of a valid parentheses string \`P\` is defined as: \`0\` for empty, \`1 + depth(A)\` for \`"(" + A + ")"\`, and \`max(depth(A), depth(B))\` for \`A + B\`.

A valid parentheses string \`S\` is a **primitive** if \`S\` is nonempty and there does not exist a way to split it into \`S = A + B\` with A and B nonempty.

Given a valid parentheses string \`s\`, consider its primitive decomposition: \`s = P_1 + P_2 + ... + P_k\`, where each \`P_i\` is a primitive. Return \`s\` after removing the outermost parentheses of every primitive string in the primitive decomposition.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is either \'(\' or \')\'.',
    's is a valid parentheses string.',
  ],
  examples: [
    {
      input: 's = "(()())(())"',
      output: '"()()()"',
      explanation: 'Primitives: "(()())" and "(())". Removing outermost: "()()" + "()" = "()()()".',
    },
    {
      input: 's = "(()())(())(()(()))"',
      output: '"()()()()(())"',
      explanation: 'Primitives: "(()())", "(())", "(()(()))". Removing outermost: "()()" + "()" + "()(())" = "()()()()(())".',
    },
    {
      input: 's = "()()"',
      output: '""',
      explanation: 'Primitives: "()" and "()". Removing outermost: "" + "" = "".',
    },
  ],
  hints: [
    'Track depth. At depth > 1, include the character. Increment on \'(\', decrement on \')\'.',
    'Track depth. At depth 0, opening parentheses start a new primitive (don\'t include the outermost `(`). At depth 1, closing parentheses end a primitive (don\'t include the outermost `)`).',
    `\`\`\`js
let depth = 0, res = '';
for (const c of s) {
  if (c === '(') { if (depth > 0) res += c; depth++; }
  else { depth--; if (depth > 0) res += c; }
}
return res;\`\`\``
  ],
  functionName: 'removeOuterParentheses',
  params: ['s'],
  starterCode: {
    javascript: `function removeOuterParentheses(s) {

}`,
    python: `def removeOuterParentheses(s):
    pass`,
  },
  visibleTests: [
    { args: ['(()())(())'], expected: '()()()' },
    { args: ['(()())(())(()(()))'], expected: '()()()()(())' },
    { args: ['()()'], expected: '' },
  ],
  hiddenTests: [
    { args: ['(())'], expected: '()' },
    { args: ['((()))'], expected: '(())' },
    { args: ['()'], expected: '' },
    { args: ['(())(())'], expected: '()()' },
  ],
};
