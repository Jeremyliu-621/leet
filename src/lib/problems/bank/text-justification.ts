import type { Problem } from '../types';

export const problem: Problem = {
  id: 'text-justification',
  title: 'Text Justification',
  difficulty: 'hard',
  tags: ['strings', 'arrays'],
  description: `Given an array of strings \`words\` and a width \`maxWidth\`, format the text such that each line has exactly \`maxWidth\` characters and is **fully (left and right) justified**.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces \`' '\` when necessary so that each line has exactly \`maxWidth\` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be **left-justified**, and no extra space is inserted between words.

**Note:** A word is defined as a character sequence consisting of non-space characters only.`,
  constraints: [
    '1 <= words.length <= 300',
    '1 <= words[i].length <= 20',
    'words[i] consists of only English letters and symbols',
    '1 <= maxWidth <= 100',
    'words[i].length <= maxWidth',
  ],
  examples: [
    {
      input: 'words = ["This","is","an","example","of","text","justification."], maxWidth = 16',
      output: '["This    is    an","example  of text","justification.  "]',
    },
    {
      input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16',
      output: '["What   must   be","acknowledgment  ","shall be        "]',
    },
  ],
  hints: [
    'First, group words into lines greedily: fit as many words as possible in each line while staying under maxWidth.',
    'For each line (except last): count spaces needed. If only one word, left-justify. Otherwise distribute spaces evenly (extra spaces go to leftmost gaps).',
    'Last line: join words with single spaces and pad right with spaces to maxWidth.',
  ],
  functionName: 'fullJustify',
  params: ['words', 'maxWidth'],
  starterCode: {
    javascript: 'function fullJustify(words, maxWidth) {\n\n}\n',
    typescript: "function fullJustify(words: string[], maxWidth: number): string[] {\n\n}",

    python: 'def fullJustify(words, maxWidth):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16],
      expected: ['This    is    an', 'example  of text', 'justification.  '],
    },
    {
      args: [['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16],
      expected: ['What   must   be', 'acknowledgment  ', 'shall be        '],
    },
  ],
  hiddenTests: [
    {
      args: [['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'], 20],
      expected: ['Science  is  what we', 'understand      well', 'enough to explain to', 'a  computer.  Art is', 'everything  else  we', 'do                  '],
    },
    {
      args: [['a'], 1],
      expected: ['a'],
    },
  ],
};
