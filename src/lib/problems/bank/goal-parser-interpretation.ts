import type { Problem } from '../types';

export const problem: Problem = {
  id: 'goal-parser-interpretation',
  title: 'Goal Parser Interpretation',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You own a **Goal Parser** that can interpret a string \`command\`. The \`command\` consists of an alphabet of \`"G"\`, \`"()"\`, and/or \`"(al)"\` in some order. The Goal Parser will interpret \`"G"\` as the string \`"G"\`, \`"()"\` as the string \`"o"\`, and \`"(al)"\` as the string \`"al"\`. The interpreted strings are then concatenated in the original order.

Given the string \`command\`, return *the Goal Parser's interpretation of* \`command\`.`,
  constraints: [
    '1 <= command.length <= 100',
    'command consists of "G", "()", and/or "(al)" in some order.',
  ],
  examples: [
    {
      input: 'command = "G()()()()(al)"',
      output: '"Gooooal"',
    },
    {
      input: 'command = "(al)G(al)()()G"',
      output: '"alGalooG"',
    },
    {
      input: 'command = "G()(al)"',
      output: '"Goal"',
    },
  ],
  hints: [
    'Level 1: Replace each token: "()" → "o" and "(al)" → "al". All other characters ("G") stay as-is.',
    'Level 2: Use string replace (with global flag) for a one-liner, or iterate and build the result character by character.',
    'Level 3: O(n) time. Regex: command.replace(/\\(\\)/g, "o").replace(/\\(al\\)/g, "al").',
  ],
  functionName: 'interpret',
  params: ['command'],
  starterCode: {
    javascript: `function interpret(command) {

}`,
    typescript: `function interpret(command: string): string {

}`,
    python: `def interpret(command):
    pass`,
  },
  visibleTests: [
    { args: ['G()()()()(al)'], expected: 'Gooooal' },
    { args: ['(al)G(al)()()G'], expected: 'alGalooG' },
    { args: ['G()(al)'], expected: 'Goal' },
  ],
  hiddenTests: [
    { args: ['G'], expected: 'G' },
    { args: ['()()'], expected: 'oo' },
    { args: ['(al)(al)'], expected: 'alal' },
    { args: ['G()G()G()'], expected: 'GoGoGo' },
    { args: ['(al)G()(al)G'], expected: 'alGoalG' },
    { args: ['G(al)G(al)G'], expected: 'GalGalG' },
    { args: ['()()()'], expected: 'ooo' },
  ],
};
