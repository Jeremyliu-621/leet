import type { Problem } from '../types';

export const problem: Problem = {
  id: 'base-7',
  title: 'Base 7',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return a string of its **base 7** representation.`,
  constraints: [
    '-10^7 <= num <= 10^7',
  ],
  examples: [
    { input: 'num = 100', output: '"202"', explanation: '1*49 + 0*7 + 2*1 = 51? No. 2*49 + 0*7 + 2*1 = 100.' },
    { input: 'num = -7', output: '"-10"', explanation: '-7 in base 7 is -10.' },
  ],
  hints: [
    'Repeatedly divide by 7 and collect remainders. Handle the negative sign separately. Return "0" for zero.',
    'Store the sign, work with Math.abs(n). While n > 0: push n % 7 to a result array, then n = Math.floor(n/7). Reverse and join, prepend \'-\' if negative.',
    'if(!n)return\'0\';let s=n<0?\'-\':\'\',r=\'\';n=Math.abs(n);while(n){r=(n%7)+r;n=Math.floor(n/7);}return s+r;',
  ],
  functionName: 'convertToBase7',
  params: ['num'],
  starterCode: {
    javascript: 'function convertToBase7(num) {\n  \n}\n',
    typescript: "function convertToBase7(num: number): string {\n  \n}",

    python: 'def convertToBase7(num):\n    pass\n',
  },
  visibleTests: [
    { args: [100], expected: '202' },
    { args: [-7], expected: '-10' },
    { args: [0], expected: '0' },
  ],
  hiddenTests: [
    { args: [7], expected: '10' },
    { args: [1], expected: '1' },
    { args: [49], expected: '100' },
    { args: [-1], expected: '-1' },
    { args: [343], expected: '1000' },
  ],
};
