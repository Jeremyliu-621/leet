import type { Problem } from '../types';

export const problem: Problem = {
  id: 'naming-a-company',
  title: 'Naming a Company',
  difficulty: 'hard',
  tags: ['strings', 'hash-map'],
  description: `You are given an array of strings \`ideas\` that represents a list of names to be used in the naming of a company. The process of naming a company is as follows:

1. Choose 2 **distinct** names from \`ideas\`, call them \`ideaA\` and \`ideaB\`.
2. Swap the **first letters** of \`ideaA\` and \`ideaB\` with each other.
3. If **both** of the new names are **not** found in the original \`ideas\` list, then the name \`ideaA ideaB\` (the two names with a space between them) is a valid company name.

Return the number of **distinct** valid company names.`,
  constraints: [
    '2 <= ideas.length <= 5 * 10^4',
    '1 <= ideas[i].length <= 10^',
    'ideas[i] consists of lowercase English letters.',
    'All ideas[i] are unique.',
  ],
  examples: [
    {
      input: 'ideas = ["coffee","donuts","time","toffee"]',
      output: '6',
      explanation: 'Valid pairs: (coffee,time), (donuts,toffee), etc. — 6 valid combinations.',
    },
    {
      input: 'ideas = ["lack","back"]',
      output: '0',
      explanation: 'Swapping first letters: "back" (exists) or "lack" (exists), so no valid names.',
    },
  ],
  hints: [
    'Group suffixes (ideas without first letter) by their first letter into 26 sets.',
    'For each pair of first letters (a, b), count suffixes that appear in set[a] but not set[b], and vice versa.',
    'Each such (suffix in a only) × (suffix in b only) pair gives 2 valid company names (ordered pairs). Sum 2 * |onlyA| * |onlyB| over all pairs.',
  ],
  functionName: 'distinctNames',
  params: ['ideas'],
  starterCode: {
    javascript: 'function distinctNames(ideas) {\n  \n}\n',
    python: 'def distinctNames(ideas):\n    pass\n',
  },
  visibleTests: [
    { args: [['coffee', 'donuts', 'time', 'toffee']], expected: 6 },
    { args: [['lack', 'back']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['ab', 'ba']], expected: 2 },
    { args: [['abc', 'bde']], expected: 2 },
    { args: [['abc', 'bde', 'cde']], expected: 4 },
    { args: [['axy', 'bxy', 'cxz']], expected: 4 },
  ],
};
