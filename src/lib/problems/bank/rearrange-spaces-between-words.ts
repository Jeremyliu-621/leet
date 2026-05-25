import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-spaces-between-words',
  title: 'Rearrange Spaces Between Words',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`text\` of words separated by spaces. Rearrange the spaces so that there is an **equal** number of spaces between every pair of adjacent words and that number is **maximized**. If you cannot redistribute all the remaining spaces equally, place the extra spaces at the **end**.

Return the string after rearranging the spaces.`,
  constraints: [
    '1 <= text.length <= 100',
    'text consists of lowercase English letters and \' \'.',
    'text contains at least one word.',
  ],
  examples: [
    {
      input: 'text = "  this   is  a sentence "',
      output: '"this   is   a   sentence"',
      explanation: 'Total spaces=9, words=4. 9//(4-1)=3 spaces between words, 9%3=0 trailing.',
    },
    {
      input: 'text = " practice   makes   perfect"',
      output: '"practice   makes   perfect "',
      explanation: 'Total spaces=7, words=3. 7//(3-1)=3 between, 7%2=1 trailing.',
    },
  ],
  hints: [
    'Count total spaces (S) and extract words (n).',
    'If n==1, append all spaces at the end. Otherwise S//(n-1) between each pair, S%(n-1) trailing.',
  ],
  functionName: 'reorderSpaces',
  params: ['text'],
  starterCode: {
    javascript: `function reorderSpaces(text) {

}`,
    python: `def reorderSpaces(text):
    pass`,
  },
  visibleTests: [
    { args: ['  this   is  a sentence '], expected: 'this   is   a   sentence' },
    { args: [' practice   makes   perfect'], expected: 'practice   makes   perfect ' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['  a'], expected: 'a  ' },
    { args: ['hello world'], expected: 'hello world' },
    { args: ['hello   world'], expected: 'hello   world' },
  ],
};
