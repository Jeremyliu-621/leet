import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-atoms',
  title: 'Count Atoms in a Chemical Formula',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'stack'],
  description: `Given a string \`formula\` representing a chemical formula, return the **count of each atom**.

An atomic element always starts with an uppercase letter, followed by zero or more lowercase letters. One or more digits may follow to give the count of that element; if no digits follow, the count is \`1\`. Two formulas may be concatenated. A formula placed inside parentheses followed by an optional digit multiplier is also a valid formula.

Return all element counts as a single string: element names in **sorted alphabetical order**, each followed by its count. Omit the count if it equals \`1\`.

**Examples:**
- \`"H2O"\` → \`"H2O"\` (H:2, O:1)
- \`"Mg(OH)2"\` → \`"H2MgO2"\` (H:2, Mg:1, O:2)
- \`"K4(ON(SO3)2)2"\` → \`"K4N2O14S4"\``,
  constraints: [
    '`1 <= formula.length <= 1000`',
    'formula consists of English letters, digits, `(`, and `)`.',
    'formula is always valid.',
  ],
  examples: [
    {
      input: 'formula = "H2O"',
      output: '"H2O"',
      explanation: 'H appears 2 times, O appears 1 time.',
    },
    {
      input: 'formula = "Mg(OH)2"',
      output: '"H2MgO2"',
      explanation: 'Mg:1, O:2, H:2. Sorted: H2, Mg, O2.',
    },
    {
      input: 'formula = "K4(ON(SO3)2)2"',
      output: '"K4N2O14S4"',
      explanation: 'K:4, N:2, O:14, S:4 after expanding nested groups.',
    },
  ],
  hints: [
    'Use a stack of frequency maps. When you encounter `(`, push a new empty map. When you encounter `)`, pop the top map, multiply all its counts by the following number (default 1), and merge the counts into the map below.',
    'Parse element names character by character: one uppercase letter followed by zero or more lowercase letters, then collect any consecutive digit characters to form the count.',
    'After parsing the full formula, sort the element names alphabetically and build the result string, omitting the count suffix when the count is exactly `1`.',
  ],
  functionName: 'countOfAtoms',
  params: ['formula'],
  starterCode: {
    javascript: `function countOfAtoms(formula) {

}
`,
    typescript: `function countOfAtoms(formula: string): string {

}`,
    python: `def countOfAtoms(formula):
    pass
`,
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
    { args: ['Be32'], expected: 'Be32' },
    { args: ['C6H12O6'], expected: 'C6H12O6' },
    { args: ['Na2SO4'], expected: 'Na2O4S' },
    { args: ['((H)2O)3'], expected: 'H6O3' },
    { args: ['Ca(OH)2'], expected: 'CaH2O2' },
    { args: ['Al2(SO4)3'], expected: 'Al2O12S3' },
  ],
};
