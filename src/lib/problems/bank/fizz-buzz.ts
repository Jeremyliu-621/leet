import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fizz-buzz',
  title: 'FizzBuzz',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `Given an integer \`n\`, return a string array \`answer\` (1-indexed) where:

- \`answer[i] == "FizzBuzz"\` if \`i\` is divisible by 3 and 5.
- \`answer[i] == "Fizz"\` if \`i\` is divisible by 3.
- \`answer[i] == "Buzz"\` if \`i\` is divisible by 5.
- \`answer[i] == i\` (as a string) if none of the above conditions are true.`,
  examples: [
    { input: 'n = 3', output: '["1","2","Fizz"]' },
    { input: 'n = 5', output: '["1","2","Fizz","4","Buzz"]' },
    { input: 'n = 15', output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' },
  ],
  constraints: ['1 <= n <= 10^4'],
  functionName: 'fizzBuzz',
  params: ['n'],
  starterCode: {
    javascript: 'function fizzBuzz(n) {\n  // your code here\n}\n',
    python: 'def fizzBuzz(n):\n    # your code here\n    pass\n',
  },
  hints: [
    'Loop from 1 to n inclusive. Check divisibility by 15 first (FizzBuzz), then by 3, then by 5.',
    'Convert non-Fizz/Buzz numbers to strings with String(i) or str(i).',
  ],
  visibleTests: [
    { args: [3], expected: ['1', '2', 'Fizz'] },
    { args: [5], expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
  ],
  hiddenTests: [
    { args: [1], expected: ['1'] },
    { args: [15], expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'] },
  ],
};
