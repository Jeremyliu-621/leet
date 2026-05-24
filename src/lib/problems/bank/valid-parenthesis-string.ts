import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-parenthesis-string',
  title: 'Valid Parenthesis String',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given a string \`s\` containing \`'('\`, \`')'\`, and \`'*'\`, determine if the string is **valid**.

The following rules define a valid string:
- Any left parenthesis \`'('\` must have a corresponding \`')'\`.
- Any right parenthesis \`')'\` must have a corresponding \`'('\`.
- Left parenthesis \`'('\` must go before the corresponding \`')'\`.
- \`'*'\` can be treated as a \`'('\`, a \`')'\`, or an empty string \`""\`.

Return \`true\` if \`s\` is valid, otherwise return \`false\`.`,
  constraints: [
    '1 <= s.length <= 100',
    "s[i] is '(', ')' or '*'.",
  ],
  examples: [
    {
      input: 's = "()"',
      output: 'true',
      explanation: 'Simple balanced pair.',
    },
    {
      input: 's = "(*)"',
      output: 'true',
      explanation: '"*" can be empty, leaving "()" which is valid.',
    },
    {
      input: 's = "(*))"',
      output: 'true',
      explanation: '"*" can be "(", giving "(())" which is valid.',
    },
  ],
  hints: [
    'Because "*" has three possible meanings, track a range of possible open-bracket counts rather than a single count.',
    'Maintain `minOpen` and `maxOpen`: the minimum and maximum number of unmatched "(" that could exist so far. "(" increments both; ")" decrements both; "*" decrements min and increments max. If `maxOpen` ever goes negative, the string is invalid. Clamp `minOpen` to 0.',
    '```js\nlet minOpen = 0, maxOpen = 0;\nfor (const c of s) {\n  if (c === \'(\') { minOpen++; maxOpen++; }\n  else if (c === \')\') { minOpen--; maxOpen--; }\n  else { minOpen--; maxOpen++; } // \'*\'\n  if (maxOpen < 0) return false;\n  if (minOpen < 0) minOpen = 0;\n}\nreturn minOpen === 0;\n```',
  ],
  functionName: 'validParenthesisString',
  params: ['s'],
  starterCode: {
    javascript: 'function validParenthesisString(s) {\n  // your code here\n}\n',
    python: 'def validParenthesisString(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['()'], expected: true },
    { args: ['(*)'], expected: true },
    { args: ['(*))'], expected: true },
  ],
  hiddenTests: [
    { args: ['*'], expected: true },
    { args: ['**'], expected: true },
    { args: ['(*'], expected: true },
    { args: [')'], expected: false },
    { args: ['(()'], expected: false },
    { args: ['(((*'], expected: false },
    { args: ['(((***)))'], expected: true },
  ],
};
