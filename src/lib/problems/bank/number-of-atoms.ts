import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-atoms',
  title: 'Number of Atoms',
  difficulty: 'hard',
  tags: ['strings', 'stack'],
  description: `Given a string \`formula\` representing a chemical formula, return the **count of each atom**.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name. One or more digits representing that element's count may follow if the count is greater than 1. If the count is omitted, assume the count is \`1\`.

Two formulas can be concatenated together. A formula placed in parentheses, and a count (optionally added) is also a formula.

Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.`,
  constraints: [
    '1 <= formula.length <= 1000',
    'formula consists of English letters, digits, \'(\', and \')\'.',
    'formula is always valid.',
  ],
  examples: [
    {
      input: 'formula = "H2O"',
      output: '"H2O"',
    },
    {
      input: 'formula = "Mg(OH)2"',
      output: '"H2MgO2"',
    },
    {
      input: 'formula = "K4(ON(SO3)2)2"',
      output: '"K4N2O14S4"',
    },
  ],
  hints: [
    'Use a stack of frequency maps. Push a new map when you see \'(\', pop and multiply when you see \')\'.',
    'Parse element names (uppercase + optional lowercase letters) followed by optional digit counts.',
    'After parsing, sort the element names and build the output string.',
  ],
  functionName: 'countOfAtoms',
  params: ['formula'],
  starterCode: {
    javascript: 'function countOfAtoms(formula) {\n\n}\n',
    python: 'def countOfAtoms(formula):\n    pass\n',
  },
  visibleTests: [
    { args: ['H2O'], expected: 'H2O' },
    { args: ['Mg(OH)2'], expected: 'H2MgO2' },
    { args: ['K4(ON(SO3)2)2'], expected: 'K4N2O14S4' },
  ],
  hiddenTests: [
    { args: ['H'], expected: 'H' },
    { args: ['HHO'], expected: 'H2O' },
    { args: ['(H2O)3'], expected: 'H6O3' },
    { args: ['Fe2(SO4)3'], expected: 'Fe2O12S3' },
  ],
};
