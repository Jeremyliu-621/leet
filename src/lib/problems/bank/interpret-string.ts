import type { Problem } from '../types';

export const problem: Problem = {
  id: 'interpret-string',
  title: 'Interpret a Competition Result String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`command\` consisting of characters \`G\`, \`(\`, \`)\`, \`a\`, and \`l\`. Interpret the command string using the following rules:
- \`G\` is converted to the string "G".
- \`()\` is converted to the string "o".
- \`(al)\` is converted to the string "al".

Return the resulting string after interpretation.`,
  constraints: [
    '1 <= command.length <= 100',
    'command consists of "G", "()", and/or "(al)" in some order.',
  ],
  examples: [
    {
      input: 'command = "G()(al)"',
      output: '"Goal"',
    },
    {
      input: 'command = "G()()()(al)al"',
      output: '"Goooalal"',
    },
  ],
  hints: [
    'Level 1: Replace "()" with "o" and "(al)" with "al" — in that order to avoid partial matches.',
    'Level 2: Use string replace: command.replace(/\\(al\\)/g,"al").replace(/\\(\\)/g,"o").',
    'Level 3: return command.replace(/\\(al\\)/g,"al").replace(/\\(\\)/g,"o");',
  ],
  functionName: 'interpret',
  params: ['command'],
  starterCode: {
    javascript: 'function interpret(command) {\n  // your code here\n}\n',
    python: 'def interpret(command):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['G()(al)'], expected: 'Goal' },
    { args: ['G()()()(al)al'], expected: 'Goooalal' },
  ],
  hiddenTests: [
    { args: ['G'], expected: 'G' },
    { args: ['()'], expected: 'o' },
    { args: ['(al)'], expected: 'al' },
    { args: ['G()G(al)G()G'], expected: 'GoGalGoG' },
    { args: ['(al)()'], expected: 'alo' },
  ],
};
