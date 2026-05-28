import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-to-integer-atoi',
  title: 'String to Integer (atoi)',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Implement the \`myAtoi(s)\` function which converts a string to a 32-bit signed integer.

The algorithm reads the string until it can no longer form a valid integer:

1. **Skip** leading whitespace.
2. Read an optional \`'+'\` or \`'-'\` sign.
3. Read digits (stop at the first non-digit character or end of string).
4. Clamp the result to the 32-bit signed integer range \`[-2^31, 2^31 - 1]\` (\`[-2147483648, 2147483647]\`).

If no digits are read (after skipping whitespace and an optional sign), return \`0\`.`,
  constraints: [
    '0 <= s.length <= 200',
    's consists of English letters, digits, \' \', \'+\', \'-\', and \'.\'.',
  ],
  examples: [
    {
      input: 's = "42"',
      output: '42',
    },
    {
      input: 's = "   -42"',
      output: '-42',
      explanation: 'Leading whitespace skipped; \'-\' sign read; digits "42" read.',
    },
    {
      input: 's = "4193 with words"',
      output: '4193',
      explanation: 'Reading stops at the space after "4193".',
    },
  ],
  hints: [
    'Use a state machine (or sequential if-checks): skip spaces → read sign → read digits → clamp.',
    'After collecting digits, clamp: if result > 2^31 - 1 return 2147483647; if result < -2^31 return -2147483648. Detect overflow early by comparing to 214748364 before adding the next digit.',
    `\`\`\`js
function myAtoi(s) {
  s=s.trimStart();
  let sign=1,i=0,result=0;
  const INT_MAX=2**31-1,INT_MIN=-(2**31);
  if(s[0]==="-"){sign=-1;i++;}else if(s[0]==="+")i++;
  while(i<s.length&&s[i]>="0"&&s[i]<="9"){
    result=result*10+Number(s[i++]);
    if(sign*result>INT_MAX)return INT_MAX;
    if(sign*result<INT_MIN)return INT_MIN;
  }
  return sign*result;
}\`\`\``,
  ],
  functionName: 'myAtoi',
  params: ['s'],
  starterCode: {
    javascript: 'function myAtoi(s) {\n  \n}\n',
    typescript: "function myAtoi(s: string): number {\n  \n}",

    python: 'def myAtoi(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['42'], expected: 42 },
    { args: ['   -42'], expected: -42 },
    { args: ['4193 with words'], expected: 4193 },
  ],
  hiddenTests: [
    { args: ['words and 987'], expected: 0 },
    { args: ['-91283472332'], expected: -2147483648 },
    { args: ['91283472332'], expected: 2147483647 },
    { args: ['+1'], expected: 1 },
    { args: ['  +  413'], expected: 0 },
    { args: ['0032'], expected: 32 },
    { args: [''], expected: 0 },
  ],
};
