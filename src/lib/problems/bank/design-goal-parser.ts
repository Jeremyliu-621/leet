import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-goal-parser',
  title: 'Goal Parser Interpretation',
  difficulty: 'easy',
  tags: ['simulation', 'strings'],
  description: `You own a **Goal Parser** that can interpret a string \`command\`. The \`command\` consists of \`"()"\`, \`"(al)"\`, and lowercase English letters.

The Goal Parser interprets \`command\` as follows:
- \`"()"\` is interpreted as the string \`"Go"\`.
- \`"(al)"\` is interpreted as the string \`"Gal"\`.
- Any other lowercase letter is interpreted as itself.

Return the **Goal Parser's interpretation** of \`command\`.`,
  constraints: [
    '1 <= command.length <= 100',
    'command consists of "()","(al)", and lowercase English letters.',
  ],
  examples: [
    {
      input: 'command = "G()(al)"',
      output: '"GGoGal"',
      explanation: 'G stays G, () becomes Go, (al) becomes Gal.',
    },
    {
      input: 'command = "G()()()()(al)"',
      output: '"GGoGoGoGoGal"',
    },
    {
      input: 'command = "(al)G(al)()()G"',
      output: '"GalGGalGoGoG"',
    },
  ],
  hints: [
    'Scan the string left-to-right. At each position, check whether you see "()" (2 chars), "(al)" (4 chars), or a plain letter.',
    'Build the result string by appending "Go" for "()", "Gal" for "(al)", or the character itself. Skip the appropriate number of input characters after each match.',
    '```js\nfunction goalParserInterpretation(command) {\n  let res = "";\n  let i = 0;\n  while (i < command.length) {\n    if (command.startsWith("()", i)) { res += "Go"; i += 2; }\n    else if (command.startsWith("(al)", i)) { res += "Gal"; i += 4; }\n    else { res += command[i]; i++; }\n  }\n  return res;\n}\n```',
  ],
  functionName: 'goalParserInterpretation',
  params: ['command'],
  starterCode: {
    javascript: 'function goalParserInterpretation(command) {\n  \n}\n',
    python: 'def goalParserInterpretation(command):\n    pass\n',
  },
  visibleTests: [
    { args: ['G()(al)'], expected: 'GGoGal' },
    { args: ['G()()()()(al)'], expected: 'GGoGoGoGoGal' },
    { args: ['(al)G(al)()()G'], expected: 'GalGGalGoGoG' },
  ],
  hiddenTests: [
    { args: ['()'], expected: 'Go' },
    { args: ['(al)'], expected: 'Gal' },
    { args: ['G'], expected: 'G' },
    { args: ['()(al)()'], expected: 'GoGalGo' },
    { args: ['abc()(al)xyz'], expected: 'abcGoGalxyz' },
  ],
};
