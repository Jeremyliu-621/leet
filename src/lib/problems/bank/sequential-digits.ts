import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sequential-digits',
  title: 'Sequential Digits',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer has **sequential digits** if and only if each digit in the number is one more than the previous digit.

Return a **sorted** list of all the integers in the range \`[low, high]\` inclusive that have sequential digits.`,
  constraints: ['10 <= low <= high <= 10^9'],
  examples: [
    { input: 'low = 100, high = 300', output: '[123,234]' },
    { input: 'low = 1000, high = 13000', output: '[1234,2345,3456,4567,5678,6789,12345]' },
  ],
  hints: [
    'Generate all sequential-digit numbers: for each starting digit d (1-9), extend right (d,d+1,d+2,...) until you reach 9.',
    'Collect those in [low, high] and sort.',
    `\`\`\`js
function sequentialDigits(low, high) {
  const res=[];
  const queue=Array.from({length:9},(_,i)=>i+1);
  while(queue.length){
    const n=queue.shift();
    if(n>=low&&n<=high) res.push(n);
    const last=n%10;
    if(last<9) queue.push(n*10+last+1);
  }
  return res.sort((a,b)=>a-b);
}\`\`\``,
  ],
  functionName: 'sequentialDigits',
  params: ['low', 'high'],
  starterCode: {
    javascript: 'function sequentialDigits(low, high) {\n\n}\n',
    typescript: "function sequentialDigits(low: number, high: number): number[] {\n\n}",

    python: 'def sequentialDigits(low, high):\n    pass\n',
  },
  visibleTests: [
    { args: [100, 300], expected: [123, 234] },
    { args: [1000, 13000], expected: [1234, 2345, 3456, 4567, 5678, 6789, 12345] },
  ],
  hiddenTests: [
    { args: [10, 99], expected: [12, 23, 34, 45, 56, 67, 78, 89] },
    { args: [100, 999], expected: [123, 234, 345, 456, 567, 678, 789] },
    { args: [58, 155], expected: [67, 78, 89, 123] },
    { args: [12345678, 999999999], expected: [12345678, 23456789, 123456789] },
  ],
};
