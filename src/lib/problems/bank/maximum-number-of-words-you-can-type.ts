import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-words-you-can-type',
  title: 'Maximum Number of Words You Can Type',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `There is a malfunctioning keyboard where some letter keys are broken. You are given a string \`text\` of words separated by single spaces (no leading or trailing spaces) and a string \`brokenLetters\` of distinct letters that are broken.

Return *the **number of words** in* \`text\` *you can fully type using this keyboard.*

A word can be typed if **none** of its letters appear in \`brokenLetters\`.`,
  constraints: [
    '1 <= text.length <= 10^4',
    '0 <= brokenLetters.length <= 26',
    'text consists of words separated by single space with no leading/trailing spaces.',
    'Each word only contains lowercase English letters.',
    'brokenLetters consists of distinct lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "hello world", brokenLetters = "ad"',
      output: '1',
      explanation: '\'d\' is broken. "world" contains \'d\' so it cannot be typed. "hello" has no broken letters. Answer = 1.',
    },
    {
      input: 'text = "leet code", brokenLetters = "lt"',
      output: '1',
      explanation: '"leet" cannot be typed (contains \'l\' and \'t\'). "code" can be typed. Answer = 1.',
    },
  ],
  hints: [
    'Split text into words; for each word, check if any character is in the broken set.',
    '```js\nfunction canBeTypedWords(text, brokenLetters) {\n  const broken = new Set(brokenLetters);\n  return text.split(" ").filter(w => ![...w].some(c => broken.has(c))).length;\n}\n```',
    `\`\`\`js
function canBeTypedWords(text, brokenLetters) {
  const broken = new Set(brokenLetters);
  return text.split(" ").filter(w => [...w].every(c=>!broken.has(c))).length;
}\`\`\``,
  ],
  functionName: 'canBeTypedWords',
  params: ['text', 'brokenLetters'],
  starterCode: {
    javascript: `function canBeTypedWords(text, brokenLetters) {
  const broken = new Set(brokenLetters);
  return text.split(' ').filter(w => [...w].every(c => !broken.has(c))).length;
}`,
    typescript: `function canBeTypedWords(text: string, brokenLetters: string): number {
  const broken = new Set(brokenLetters);
  return text.split(' ').filter(w => [...w].every(c => !broken.has(c))).length;
}`,
    python: `def canBeTypedWords(text: str, brokenLetters: str) -> int:
    broken = set(brokenLetters)
    return sum(1 for w in text.split(' ') if not any(c in broken for c in w))`,
  },
  visibleTests: [
    { args: ['hello world', 'ad'], expected: 1 },
    { args: ['leet code', 'lt'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a b c d e', ''], expected: 5 },
    { args: ['a b c d e', 'abcde'], expected: 0 },
    { args: ['hello world', ''], expected: 2 },
    { args: ['abc def ghi', 'a'], expected: 2 },
    { args: ['typing', 'yz'], expected: 0 },
    { args: ['i love leetcode', 'l'], expected: 1 },
  ],
};
