import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-characters-in-string-after-transformations-ii',
  title: 'Total Characters in String After Transformations II',
  difficulty: 'hard',
  tags: ['strings', 'math', 'dynamic-programming'],
  description: `You are given a string \`s\`, an integer \`t\` representing the number of **transformations** to perform, and an array \`nums\` of size 26. In one transformation, every character in \`s\` is replaced according to the following rules:

- Replace the \`i\`-th character of the alphabet (\`'a' + i\`) with the **next** \`nums[i]\` characters in the alphabet, **cyclically** wrapping around \`'z'\` back to \`'a'\`.

Return *the **length** of the resulting string after exactly* \`t\` *transformations*, modulo \`10^9 + 7\`.

**Note:** When \`nums[i] = 1\` for all \`i != 25\` and \`nums[25] = 2\`, this reduces to the first version of the problem.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= t <= 10^9',
    'nums.length == 26',
    '1 <= nums[i] <= 25',
  ],
  examples: [
    {
      input: 's = "a", t = 1, nums = [2,1,1,...,1] (nums[0]=2, rest=1)',
      output: '2',
      explanation: '"a" expands to the next nums[0]=2 chars: "bc". Length = 2.',
    },
    {
      input: 's = "abcyy", t = 2, nums = [...,1,2] (nums[24]=1, nums[25]=2, rest=1)',
      output: '7',
      explanation: 'Same transformation rules as Transformations I. See that problem for the step-by-step trace.',
    },
  ],
  hints: [
    'Model each step as a linear map: multiply the 26-dimensional frequency vector by a 26×26 transition matrix M, where M[j][i] = 1 iff character j appears in the expansion of character i.',
    'Compute M^t mod 10^9+7 using matrix exponentiation (O(26³ log t)).',
    'The answer is the sum of all entries in M^t · freq_initial.',
  ],
  functionName: 'lengthAfterTransformations',
  params: ['s', 't', 'nums'],
  starterCode: {
    javascript: 'function lengthAfterTransformations(s, t, nums) {\n\n}\n',
    typescript: 'function lengthAfterTransformations(s: string, t: number, nums: number[]): number {\n\n}\n',
    python: 'def lengthAfterTransformations(s, t, nums):\n    pass\n',
  },
  visibleTests: [
    { args: ['a', 1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], expected: 1 },
    { args: ['a', 1, [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], expected: 2 },
  ],
  hiddenTests: [
    { args: ['z', 1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]], expected: 2 },
    { args: ['z', 1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3]], expected: 3 },
    { args: ['a', 2, [2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], expected: 4 },
    { args: ['abcyy', 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]], expected: 7 },
    { args: ['azbk', 1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]], expected: 5 },
    { args: ['a', 100, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], expected: 1 },
  ],
};
