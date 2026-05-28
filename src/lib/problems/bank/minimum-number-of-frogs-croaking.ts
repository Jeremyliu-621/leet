import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-frogs-croaking',
  title: 'Minimum Number of Frogs Croaking',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given the string \`croakOfFrogs\`, which represents a combination of the string "croak" from different frogs, all croaking at the same time. Return the **minimum** number of different frogs to finish all the croakings in the given string, or \`-1\` if it is not a valid combination.`,
  constraints: [
    '`1 <= croakOfFrogs.length <= 10^5`',
    '`croakOfFrogs` is either \'c\', \'r\', \'o\', \'a\', or \'k\'',
  ],
  examples: [
    {
      input: 'croakOfFrogs = "croakcroak"',
      output: '1',
      explanation: 'One frog croaks twice.',
    },
    {
      input: 'croakOfFrogs = "crcoakroak"',
      output: '2',
      explanation: 'Two frogs croak simultaneously.',
    },
    {
      input: 'croakOfFrogs = "croakcrook"',
      output: '-1',
      explanation: 'Invalid: the last "crook" is missing the \'a\'.',
    },
  ],
  hints: [
    'Track counts for each letter in "croak". Each letter must be preceded by the previous letter in "croak".',
    'The number of frogs currently croaking equals those that have said \'c\' but not yet said \'k\'.',
    'Frogs start when they say \'c\' and finish when they say \'k\'. Track max concurrent frogs. Validate all counts are equal at the end.',
  ],
  functionName: 'minNumberOfFrogs',
  params: ['croakOfFrogs'],
  starterCode: {
    javascript: `function minNumberOfFrogs(croakOfFrogs) {

}`,
    typescript: "function minNumberOfFrogs(croakOfFrogs: string): number {\n\n}",

    python: `def minNumberOfFrogs(croakOfFrogs):
    pass`,
  },
  visibleTests: [
    { args: ['croakcroak'], expected: 1 },
    { args: ['crcoakroak'], expected: 2 },
    { args: ['croakcrook'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['croak'], expected: 1 },
    { args: ['ccrrooaakk'], expected: 2 },
    { args: ['crookk'], expected: -1 },
    { args: ['ccroakroak'], expected: 2 },
  ],
};
