import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-word-equals-summation',
  title: 'Check if Word Equals Summation of Two Words',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `The **letter value** of a letter is its position in the alphabet **starting from 0** (i.e., \`'a' -> 0\`, \`'b' -> 1\`, ..., \`'z' -> 25\`).

The **numerical value** of some string of lowercase English letters \`s\` is the **concatenation** of the **letter values** of each letter in \`s\`, which is then **converted** into an integer.

Given three strings \`firstWord\`, \`secondWord\`, and \`targetWord\`, return \`true\` if the summation of the numerical values of \`firstWord\` and \`secondWord\` equals the numerical value of \`targetWord\`, or \`false\` otherwise.`,
  constraints: [
    '1 <= firstWord.length, secondWord.length, targetWord.length <= 8',
    'firstWord, secondWord, and targetWord consist of lowercase English letters from "a" to "j".',
  ],
  examples: [
    {
      input: 'firstWord = "acb", secondWord = "cba", targetWord = "cdb"',
      output: 'true',
      explanation: '"acb" → 021 = 21, "cba" → 210, 21+210=231, "cdb" → 231. ✓',
    },
    {
      input: 'firstWord = "aaa", secondWord = "a", targetWord = "aab"',
      output: 'false',
      explanation: '"aaa" → 000 = 0, "a" → 0, 0+0=0 ≠ 001 = 1.',
    },
  ],
  hints: [
    'Level 1: Convert each word to a number using charCode - "a".charCodeAt(0) as digits.',
    'Level 2: Parse each word as base-10 number of letter values. Then check sum.',
    'Level 3: const toNum=w=>parseInt(w.split("").map(c=>c.charCodeAt(0)-97).join(""));return toNum(firstWord)+toNum(secondWord)===toNum(targetWord);',
  ],
  functionName: 'isSumEqual',
  params: ['firstWord', 'secondWord', 'targetWord'],
  starterCode: {
    javascript: `function isSumEqual(firstWord, secondWord, targetWord) {
  const toNum = w => parseInt(w.split('').map(c => c.charCodeAt(0) - 97).join('') || '0');
  return toNum(firstWord) + toNum(secondWord) === toNum(targetWord);
}`,
    typescript: `function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  const toNum = (w: string) => parseInt(w.split('').map(c => c.charCodeAt(0) - 97).join('') || '0');
  return toNum(firstWord) + toNum(secondWord) === toNum(targetWord);
}`,
    python: `def isSumEqual(firstWord, secondWord, targetWord):
    if hasattr(firstWord, 'to_py'): firstWord = firstWord.to_py()
    if hasattr(secondWord, 'to_py'): secondWord = secondWord.to_py()
    if hasattr(targetWord, 'to_py'): targetWord = targetWord.to_py()
    def to_num(w): return int(''.join(str(ord(c)-97) for c in w)) if w else 0
    return to_num(firstWord) + to_num(secondWord) == to_num(targetWord)`,
  },
  visibleTests: [
    { args: ['acb', 'cba', 'cdb'], expected: true },
    { args: ['aaa', 'a', 'aab'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 'b', 'ba'], expected: false },
    { args: ['ab', 'ba', 'cba'], expected: false },
    { args: ['aa', 'a', 'ba'], expected: false },
    { args: ['a', 'b', 'b'], expected: true },
    { args: ['ab', 'ba', 'bb'], expected: true },
  ],
};
