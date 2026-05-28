import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-number',
  title: 'Palindrome Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`x\`, return \`true\` if \`x\` is a **palindrome**, and \`false\` otherwise. A palindrome reads the same forwards and backwards.

**Without converting to a string:** Reverse the second half of the number and compare it with the first half.`,
  constraints: [
    '-2^31 <= x <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'x = 121',
      output: 'true',
      explanation: '121 reads as 121 from left to right and right to left.',
    },
    {
      input: 'x = -121',
      output: 'false',
      explanation: 'From left to right it reads -121. From right to left it reads 121-.',
    },
    {
      input: 'x = 10',
      output: 'false',
      explanation: 'Reads 01 from right to left, not a palindrome.',
    },
  ],
  hints: [
    'Negative numbers are never palindromes. Numbers ending in 0 (except 0 itself) are not palindromes.',
    'Reverse only the second half of the number. Stop when the reversed portion is ≥ the remaining portion.',
    '`if(x<0||(x%10===0&&x!==0))return false; let rev=0; while(x>rev){rev=rev*10+x%10;x=Math.floor(x/10);} return x===rev||x===Math.floor(rev/10);`',
  ],
  functionName: 'isPalindrome',
  params: ['x'],
  starterCode: {
    javascript: 'function isPalindrome(x) {\n  // your code here\n}\n',
    typescript: "function isPalindrome(x: number): boolean {\n  // your code here\n}",

    python: 'def isPalindrome(x: int) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [121], expected: true },
    { args: [-121], expected: false },
    { args: [10], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: true },
    { args: [1], expected: true },
    { args: [11], expected: true },
    { args: [1221], expected: true },
    { args: [12321], expected: true },
    { args: [12345], expected: false },
  ],
};
