import type { Problem } from '../types';

export const problem: Problem = {
  id: 'satisfiability-of-equality-equations',
  title: 'Satisfiability of Equality Equations',
  difficulty: 'medium',
  tags: ['union-find', 'graph', 'strings'],
  description: `You are given an array of strings \`equations\` that represent relationships between variables. Each string \`equations[i]\` is of length 4 and takes one of two forms: \`"xi==yi"\` or \`"xi!=yi"\`, where \`xi\` and \`yi\` are lowercase English letters.

Return \`true\` if it is possible to assign integer values to variable names so as to satisfy all the given equations, or \`false\` otherwise.`,
  constraints: [
    '1 <= equations.length <= 500',
    'equations[i].length == 4',
    'equations[i][0] is a lowercase letter',
    'equations[i][1] is either \'=\' or \'!\'',
    'equations[i][2] == \'=\'',
    'equations[i][3] is a lowercase letter',
  ],
  examples: [
    {
      input: 'equations = ["a==b","b!=a"]',
      output: 'false',
      explanation: 'a==b and b!=a cannot both be satisfied since a==b implies b==a.',
    },
    {
      input: 'equations = ["b==a","a==b"]',
      output: 'true',
      explanation: 'Both equations say the same thing.',
    },
    {
      input: 'equations = ["a==b","b!=c","c==a"]',
      output: 'false',
      explanation: 'a==b and c==a means all three are equal, but b!=c is a contradiction.',
    },
  ],
  hints: [
    'Use Union-Find on the 26 lowercase letters. First pass: process all "==" equations and union the two variables. Second pass: check all "!=" equations — if the two variables are in the same component, return false.',
    'The order matters: you must process ALL equality constraints before checking inequalities. This ensures transitivity is fully captured.',
    '```js\nfunction equationsPossible(equations) {\n  const parent = Array.from({length: 26}, (_, i) => i);\n  function find(x) { return parent[x] === x ? x : (parent[x] = find(parent[x])); }\n  for (const eq of equations)\n    if (eq[1] === \'=\') parent[find(eq.charCodeAt(0)-97)] = find(eq.charCodeAt(3)-97);\n  for (const eq of equations)\n    if (eq[1] === \'!\' && find(eq.charCodeAt(0)-97) === find(eq.charCodeAt(3)-97)) return false;\n  return true;\n}\n```',
  ],
  functionName: 'equationsPossible',
  params: ['equations'],
  starterCode: {
    javascript: 'function equationsPossible(equations) {\n  \n}\n',
    python: 'def equationsPossible(equations):\n    pass\n',
  },
  visibleTests: [
    { args: [['a==b', 'b!=a']], expected: false },
    { args: [['b==a', 'a==b']], expected: true },
    { args: [['a==b', 'b!=c', 'c==a']], expected: false },
  ],
  hiddenTests: [
    { args: [['a==b', 'b==c', 'a==c']], expected: true },
    { args: [['c==c', 'b==d', 'x!=z']], expected: true },
    { args: [['a!=a']], expected: false },
    { args: [['a==b', 'c!=d', 'b==c', 'a!=d']], expected: true },
    { args: [['a==b', 'e==c', 'b==c', 'a!=e']], expected: false },
  ],
};
