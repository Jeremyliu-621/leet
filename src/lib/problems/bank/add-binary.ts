import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-binary',
  title: 'Add Binary',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given two binary strings \`a\` and \`b\`, return their sum as a binary string.`,
  constraints: [
    '`1 <= a.length, b.length <= 10^4`',
    '`a` and `b` consist only of `\'0\'` or `\'1\'` characters.',
    'Each string does not contain leading zeros except for the zero itself.',
  ],
  examples: [
    {
      input: 'a = "11", b = "1"',
      output: '"100"',
    },
    {
      input: 'a = "1010", b = "1011"',
      output: '"10101"',
    },
  ],
  hints: [
    'Work from right to left, tracking a carry. At each position sum the two bits plus carry; the result bit is `sum % 2` and the new carry is `Math.floor(sum / 2)`.',
    'Use two pointers `i = a.length - 1` and `j = b.length - 1`. Build the result string and reverse it at the end.',
    `\`\`\`js
function addBinary(a, b) {
  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}
// Or manual: i=a.length-1,j=b.length-1,carry=0,res=[]
// while i>=0||j>=0||carry: sum=(a[i--]|0)+(b[j--]|0)+carry; res.push(sum%2); carry=sum>>1
// return res.reverse().join("")\`\`\``,
  ],
  functionName: 'addBinary',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, result = '';
  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}`,
    typescript: `function addBinary(a: string, b: string): string {
  let i = a.length - 1, j = b.length - 1, carry = 0, result = '';
  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}`,

    python: `def addBinary(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]`,
  },
  visibleTests: [
    { args: ['11', '1'], expected: '100' },
    { args: ['1010', '1011'], expected: '10101' },
  ],
  hiddenTests: [
    { args: ['0', '0'], expected: '0' },
    { args: ['1', '1'], expected: '10' },
    { args: ['111', '111'], expected: '1110' },
    { args: ['1111', '1111'], expected: '11110' },
    { args: ['100', '110010'], expected: '110110' },
    { args: ['0', '1'], expected: '1' },
    { args: ['1111111', '1'], expected: '10000000' },
  ],
};
