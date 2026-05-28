import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-digits-of-string-after-convert',
  title: 'Sum of Digits of String After Convert',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` consisting of lowercase English letters, and an integer \`k\`.

First, **convert** \`s\` into an integer by replacing each letter with its position in the alphabet (i.e. replace \`'a'\` with \`1\`, \`'b'\` with \`2\`, ..., \`'z'\` with \`26\`). Concatenate all the numbers together — the resulting integer has no leading zeros.

Then, **transform** the integer by replacing it with the **sum of its digits**. Repeat the transform operation **exactly** \`k\` times in total.

Return the resulting integer after performing the operations described above.`,
  constraints: [
    '1 <= s.length <= 100',
    '2 <= k <= 10',
    "s consists of lowercase English letters.",
  ],
  examples: [
    {
      input: 's = "iiii", k = 1',
      output: '36',
      explanation: '"iiii" → 9999. Transform 1: 9+9+9+9=36.',
    },
    {
      input: 's = "leetcode", k = 2',
      output: '6',
      explanation: '"leetcode" → "12552031545". Transform 1: 1+2+5+5+2+0+3+1+5+4+5=33. Transform 2: 3+3=6.',
    },
  ],
  hints: [
    'Build the digit string by converting each character to its 1-indexed position.',
    'Sum the digits (that\'s the first transform), then repeat k-1 more times.',
    `\`\`\`js
function getLucky(s, k) {
  let num=s.split("").map(c=>String(c.charCodeAt(0)-96)).join("");
  let sum=num.split("").reduce((a,c)=>a+Number(c),0);
  for(let i=1;i<k;i++)
    sum=String(sum).split("").reduce((a,c)=>a+Number(c),0);
  return sum;
}\`\`\``,
  ],
  functionName: 'getLucky',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function getLucky(s, k) {

}`,
    typescript: "function getLucky(s: string, k: number): number {\n\n}",

    python: `def getLucky(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['iiii', 1], expected: 36 },
    { args: ['leetcode', 2], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['z', 1], expected: 8 },
    { args: ['a', 5], expected: 1 },
    { args: ['zbzbz', 3], expected: 1 },
  ],
};
