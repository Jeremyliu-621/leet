import type { Problem } from '../types';

export const problem: Problem = {
  id: 'backspace-string-compare',
  title: 'Backspace String Compare',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two strings \`s\` and \`t\`, return \`true\` if they are equal when both are typed into empty text editors. \`'#'\` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.`,
  constraints: [
    '`1 <= s.length, t.length <= 200`',
    '`s` and `t` only contain lowercase letters and `\'#\'` characters.',
  ],
  examples: [
    {
      input: 's = "ab#c", t = "ad#c"',
      output: 'true',
      explanation: 'Both s and t become "ac".',
    },
    {
      input: 's = "ab##", t = "c#d#"',
      output: 'true',
      explanation: 'Both s and t become "".',
    },
    {
      input: 's = "a#c", t = "b"',
      output: 'false',
      explanation: 's becomes "c" while t becomes "b".',
    },
  ],
  hints: [
    'Simulate the typing: build the final string by iterating characters. When you see `#`, pop the last character from the stack (if any).',
    'Compare the two resulting strings.',
    `\`\`\`js
function backspaceCompare(s, t) {
  function process(str) {
    const stack = [];
    for (const c of str) c === "#" ? stack.pop() : stack.push(c);
    return stack.join("");
  }
  return process(s) === process(t);
}\`\`\``,
  ],
  functionName: 'backspaceCompare',
  params: ['s', 't'],
  starterCode: {
    javascript: `function backspaceCompare(s, t) {

}`,
    python: `def backspaceCompare(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['ab#c', 'ad#c'], expected: true },
    { args: ['ab##', 'c#d#'], expected: true },
    { args: ['a#c', 'b'], expected: false },
  ],
  hiddenTests: [
    { args: ['y#fo##f', 'y#f#o##f'], expected: true },
    { args: ['a##c', '#a#c'], expected: true },
    { args: ['bxj##tw', 'bxj###tw'], expected: false },
    { args: ['nzp#o#g', 'b#nzp#o#g'], expected: true },
  ],
};
