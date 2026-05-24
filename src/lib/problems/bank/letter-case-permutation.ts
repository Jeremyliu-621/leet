import type { Problem } from '../types';

const JS_PREAMBLE = `
function letterCasePermutationRunner(s) {
  return letterCasePermutation(s).slice().sort();
}
`.trim();

const PY_PREAMBLE = `
def letterCasePermutationRunner(s):
    return sorted(letterCasePermutation(s))
`.trim();

export const problem: Problem = {
  id: 'letter-case-permutation',
  title: 'Letter Case Permutation',
  difficulty: 'easy',
  tags: ['strings', 'backtracking'],
  description: `Given a string \`s\`, you can transform every letter individually to be lowercase or uppercase to create another string.

Return **a list of all possible strings** we could create. Return the output in **any order**.

> **Note:** A runner function pre-sorts the output for testing. Implement \`letterCasePermutation(s)\` and return all permutations in any order.`,
  constraints: ['1 <= s.length <= 12', 's consists of lowercase English letters, uppercase English letters, and digits'],
  examples: [
    {
      input: 's = "a1b2"',
      output: '["A1B2","A1b2","a1B2","a1b2"]',
      explanation: 'Each letter can be upper or lower; digits are unchanged.',
    },
    {
      input: 's = "3z4"',
      output: '["3Z4","3z4"]',
      explanation: 'Only "z" can change case.',
    },
  ],
  hints: [
    'Use backtracking (or recursion). At each index, if the character is a digit, move to the next index unchanged.',
    'If the character is a letter, branch into two recursive calls: one with the letter lowercased and one with it uppercased.',
    'When the index reaches the end of the string, add the current string to results.',
  ],
  functionName: 'letterCasePermutationRunner',
  params: ['s'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// letterCasePermutationRunner is pre-defined and sorts the output.\nfunction letterCasePermutation(s) {\n  \n}\n',
    python:
      '# letterCasePermutationRunner is pre-defined and sorts the output.\ndef letterCasePermutation(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['a1b2'], expected: ['A1B2', 'A1b2', 'a1B2', 'a1b2'] },
    { args: ['3z4'], expected: ['3Z4', '3z4'] },
    { args: ['12'], expected: ['12'] },
  ],
  hiddenTests: [
    { args: ['C'], expected: ['C', 'c'] },
    { args: ['ab'], expected: ['AB', 'Ab', 'aB', 'ab'] },
    { args: ['a1'], expected: ['A1', 'a1'] },
  ],
};
