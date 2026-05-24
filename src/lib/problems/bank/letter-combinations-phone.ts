import type { Problem } from '../types';

const JS_PREAMBLE = `
function letterCombinationsRunner(digits) {
  const r = letterCombinations(String(digits));
  return r.sort();
}
`.trim();

const PY_PREAMBLE = `
def letterCombinationsRunner(digits):
    r = letterCombinations(str(digits))
    return sorted(r if r else [])
`.trim();

export const problem: Problem = {
  id: 'letter-combinations-phone',
  title: 'Letter Combinations of a Phone Number',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `Given a string containing digits from \`2\`–\`9\` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like telephone buttons) is given:
- 2 → abc · 3 → def · 4 → ghi · 5 → jkl
- 6 → mno · 7 → pqrs · 8 → tuv · 9 → wxyz

> **Note:** The \`letterCombinationsRunner\` wrapper is pre-defined. Implement \`letterCombinations(digits)\`.`,
  constraints: [
    '0 <= digits.length <= 4',
    "digits[i] is a digit in the range ['2', '9']",
  ],
  examples: [
    {
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
    },
    {
      input: 'digits = ""',
      output: '[]',
    },
    {
      input: 'digits = "2"',
      output: '["a","b","c"]',
    },
  ],
  hints: [
    'Store the digit → letters mapping. Backtrack: for each position, iterate over the letters for that digit, append the letter, recurse for the next position, then remove the letter.',
    'Base case: when your current string length equals digits.length, add it to results.',
    'Edge case: if digits is empty, return an empty array immediately.',
  ],
  functionName: 'letterCombinationsRunner',
  params: ['digits'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function letterCombinations(digits) {\n  \n}\n',
    python: 'def letterCombinations(digits):\n    pass\n',
  },
  visibleTests: [
    { args: ['23'], expected: ['ad','ae','af','bd','be','bf','cd','ce','cf'] },
    { args: [''], expected: [] },
    { args: ['2'], expected: ['a','b','c'] },
  ],
  hiddenTests: [
    {
      args: ['79'],
      expected: ['pw','px','py','pz','qw','qx','qy','qz','rw','rx','ry','rz','sw','sx','sy','sz'],
    },
    {
      args: ['234'],
      expected: [
        'adg','adh','adi','aeg','aeh','aei','afg','afh','afi',
        'bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi',
        'cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi',
      ],
    },
  ],
};
