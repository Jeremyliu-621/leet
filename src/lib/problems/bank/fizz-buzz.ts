import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fizz-buzz',
  title: 'Fizz Buzz',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`n\`, return a string array \`answer\` (**1-indexed**) where:

- \`answer[i] == "FizzBuzz"\` if \`i\` is divisible by 3 and 5.
- \`answer[i] == "Fizz"\` if \`i\` is divisible by 3.
- \`answer[i] == "Buzz"\` if \`i\` is divisible by 5.
- \`answer[i] == i\` (as a string) if none of the above conditions are true.`,
  constraints: [
    '1 <= n <= 10^4',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '["1","2","Fizz"]',
    },
    {
      input: 'n = 5',
      output: '["1","2","Fizz","4","Buzz"]',
    },
    {
      input: 'n = 15',
      output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
    },
  ],
  hints: [
    'Iterate from 1 to n. For each i, check divisibility by 15 (FizzBuzz), 3 (Fizz), and 5 (Buzz) in that order.',
    'Otherwise, push String(i) to the result.',
    'Check 15 first (or check both 3 and 5), not 3 and 5 separately — otherwise 15 would match Fizz before FizzBuzz.',
  ],
  functionName: 'fizzBuzz',
  params: ['n'],
  starterCode: {
    javascript: `function fizzBuzz(n) {
  // Return FizzBuzz array from 1 to n
}`,
    typescript: "function fizzBuzz(n: number): string[] {\n  // Return FizzBuzz array from 1 to n\n}",

    python: `def fizzBuzz(n):
    # Return FizzBuzz array from 1 to n
    pass`,
  },
  visibleTests: [
    { args: [3], expected: ['1','2','Fizz'] },
    { args: [5], expected: ['1','2','Fizz','4','Buzz'] },
    { args: [15], expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'] },
  ],
  hiddenTests: [
    { args: [1], expected: ['1'] },
    { args: [6], expected: ['1','2','Fizz','4','Buzz','Fizz'] },
    { args: [10], expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz'] },
    { args: [4], expected: ['1','2','Fizz','4'] },
  ],
};
