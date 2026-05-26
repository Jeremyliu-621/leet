import type { Problem } from '../types';

export const problem: Problem = {
  id: 'self-dividing-numbers',
  title: 'Self Dividing Numbers',
  difficulty: 'easy',
  tags: ['math'],
  description: `A **self-dividing number** is a number that is divisible by every digit it contains.

- For example, \`128\` is a self-dividing number because \`128 % 1 == 0\`, \`128 % 2 == 0\`, and \`128 % 8 == 0\`.

A self-dividing number is not allowed to contain the digit zero.

Given two integers \`left\` and \`right\`, return a list of all the **self-dividing numbers** in the range \`[left, right]\`.`,
  constraints: [
    '`1 <= left <= right <= 10^4`',
  ],
  examples: [
    { input: 'left = 1, right = 22', output: '[1,2,3,4,5,6,7,8,9,11,12,15,22]' },
    { input: 'left = 47, right = 85', output: '[48,55,66,77]' },
  ],
  hints: [
    'For each number, extract each digit and check if the number is divisible by that digit.',
    'If any digit is 0 or the number is not divisible by the digit, skip it.',
    `\`\`\`js
function selfDividingNumbers(left, right) {
  function isSelfDiv(n){
    return !String(n).includes("0") && String(n).split("").every(d=>n%Number(d)===0);
  }
  const res=[];
  for(let n=left;n<=right;n++) if(isSelfDiv(n)) res.push(n);
  return res;
}\`\`\``,
  ],
  functionName: 'selfDividingNumbers',
  params: ['left', 'right'],
  starterCode: {
    javascript: 'function selfDividingNumbers(left, right) {\n  \n}\n',
    python: 'def selfDividingNumbers(left, right):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 22], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22] },
    { args: [47, 85], expected: [48, 55, 66, 77] },
  ],
  hiddenTests: [
    { args: [1, 9], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [10, 15], expected: [11, 12, 15] },
    { args: [100, 105], expected: [111, 112, 115, 122, 124, 126, 128, 132, 135, 144, 175, 212, 216, 224, 312, 315, 384].filter(x => x >= 100 && x <= 105) },
    { args: [1, 1], expected: [1] },
  ],
};
