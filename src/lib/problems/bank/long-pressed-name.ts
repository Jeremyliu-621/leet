import type { Problem } from '../types';

export const problem: Problem = {
  id: 'long-pressed-name',
  title: 'Long Pressed Name',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Your friend is typing his name into a keyboard. Sometimes, when typing a character \`c\`, the key might get long pressed, and the character will be typed 1 or more times.

You examine the \`typed\` string. Return \`true\` if it is possible that it was your friends name, with some characters (possibly none) being long pressed.`,
  constraints: [
    '1 <= name.length, typed.length <= 1000',
    'name and typed consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'name = "alex", typed = "aaleex"',
      output: 'true',
      explanation: '\'a\' is long pressed once, \'e\' is long pressed once.',
    },
    {
      input: 'name = "saeed", typed = "ssaaedd"',
      output: 'false',
      explanation: '\'e\' must be typed twice but only appears once in typed at the right position.',
    },
  ],
  hints: [
    'Use two pointers i (name) and j (typed).',
    'If name[i]==typed[j], advance both. Else if typed[j]==typed[j-1] (long press), advance j. Otherwise return false.',
    `\`\`\`js
function isLongPressedName(name, typed) {
  let i = 0;
  for (let j = 0; j < typed.length; j++) {
    if (i < name.length && typed[j] === name[i]) i++;
    else if (j === 0 || typed[j] !== typed[j-1]) return false;
  }
  return i === name.length;
}\`\`\``,
  ],
  functionName: 'isLongPressedName',
  params: ['name', 'typed'],
  starterCode: {
    javascript: `function isLongPressedName(name, typed) {

}`,
    python: `def isLongPressedName(name, typed):
    pass`,
  },
  visibleTests: [
    { args: ['alex', 'aaleex'], expected: true },
    { args: ['saeed', 'ssaaedd'], expected: false },
  ],
  hiddenTests: [
    { args: ['leelee', 'lleeelee'], expected: true },
    { args: ['a', 'b'], expected: false },
    { args: ['alex', 'alex'], expected: true },
    { args: ['vtkgn', 'vttkgnn'], expected: true },
  ],
};
