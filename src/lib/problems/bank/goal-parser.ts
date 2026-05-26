import type { Problem } from '../types';

export const problem: Problem = {
  id: 'goal-parser',
  title: 'Goal Parser Interpretation',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You own a Goal Parser that can interpret a string \`command\`. The \`command\` consists of an alphabet of \`"G"\`, \`"()"\`, and/or \`"(al)"\` in some order. The Goal Parser will interpret \`"G"\` as the string \`"G"\`, \`"()"\` as the string \`"o"\`, and \`"(al)"\` as the string \`"al"\`. The interpreted strings are then concatenated in the original order.

Given the string \`command\`, return the Goal Parser's interpretation of \`command\`.`,
  constraints: [
    '`1 <= command.length <= 100`',
    '`command` consists of `"G"`, `"()"`, and/or `"(al)"` in some order.',
  ],
  examples: [
    {
      input: 'command = "G()(al)"',
      output: '"Goal"',
    },
    {
      input: 'command = "G()()()()(al)"',
      output: '"Gooooal"',
    },
    {
      input: 'command = "(al)G(al)()()G"',
      output: '"alGalooG"',
    },
  ],
  hints: [
    'Replace `"()"` with `"o"` and `"(al)"` with `"al"`. All `"G"` characters remain.',
    "Chain replaceAll (or replace with /g flag) for both substrings. Order matters: replace longer pattern first.",
    "return command.replaceAll('(al)','al').replaceAll('()','o');",
  ],
  functionName: 'interpret',
  params: ['command'],
  starterCode: {
    javascript: `function interpret(command) {

}`,
    python: `def interpret(command):
    pass`,
  },
  visibleTests: [
    { args: ['G()(al)'], expected: 'Goal' },
    { args: ['G()()()()(al)'], expected: 'Gooooal' },
    { args: ['(al)G(al)()()G'], expected: 'alGalooG' },
  ],
  hiddenTests: [
    { args: ['G'], expected: 'G' },
    { args: ['()'], expected: 'o' },
    { args: ['(al)'], expected: 'al' },
    { args: ['G()()G(al)(al)G'], expected: 'GooGalalG' },
  ],
};
