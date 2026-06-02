import type { Problem } from '../types';

export const problem: Problem = {
  id: 'double-modular-exponentiation',
  title: 'Double Modular Exponentiation',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'simulation'],
  description: `You are given a **0-indexed** 2D array \`variables\` where \`variables[i] = [a_i, b_i, c_i, m_i]\`.

For each index \`i\`, compute the result of the expression \`((a_i^{b_i} \\% 10)^{c_i}) \\% m_i\`.

Return a **0-indexed** integer array \`goodIndices\` containing all valid indices \`i\` in **ascending order** where the result equals \`0\`.

**Note:** \`0^0\` is defined to be \`1\` in this problem.`,
  constraints: [
    '1 <= variables.length <= 100',
    'variables[i].length == 4',
    '2 <= a_i <= 10^6',
    '1 <= b_i <= 10^5',
    '1 <= c_i <= 10^5',
    '1 <= m_i <= 10^5',
  ],
  examples: [
    {
      input: 'variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]]',
      output: '[1]',
      explanation:
        '[2,3,3,10]: 2^3 % 10 = 8, 8^3 % 10 = 2 ≠ 0. [3,3,3,1]: 3^3 % 10 = 7, 7^3 % 1 = 0. [6,1,1,4]: 6^1 % 10 = 6, 6^1 % 4 = 2 ≠ 0. Only index 1 qualifies.',
    },
    {
      input: 'variables = [[10,1,1,10]]',
      output: '[0]',
      explanation: '10^1 % 10 = 0, 0^1 % 10 = 0. Index 0 qualifies.',
    },
  ],
  hints: [
    'Level 1: For each variable [a,b,c,m], compute the expression in two stages: first compute a^b mod 10 (the result is a single digit 0–9), then compute that digit raised to c, mod m.',
    'Level 2: Use fast modular exponentiation (repeated squaring) to compute a^b mod 10 efficiently. Since the base of the second stage is at most 9, the second modpow is also fast.',
    'Level 3: Since 10 is fixed, you can use BigInt for safety with large exponents, or observe that a^b mod 10 only depends on a mod 10 and the cycle length of powers mod 10 (which divides 4 for any digit by Euler\'s theorem).',
  ],
  functionName: 'doubleModularExponentiation',
  params: ['variables'],
  starterCode: {
    javascript: `function doubleModularExponentiation(variables) {

}`,
    typescript: `function doubleModularExponentiation(variables: number[][]): number[] {

}`,
    python: `def doubleModularExponentiation(variables: list[list[int]]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[[2, 3, 3, 10], [3, 3, 3, 1], [6, 1, 1, 4]]], expected: [1] },
    { args: [[[10, 1, 1, 10]]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1, 1]]], expected: [0] },
    { args: [[[5, 2, 5, 10], [1, 1, 1, 1], [3, 2, 4, 5]]], expected: [1] },
    { args: [[[3, 3, 3, 1], [1, 1, 1, 1]]], expected: [0, 1] },
    { args: [[[5, 5, 5, 5], [7, 3, 2, 5], [2, 5, 2, 7]]], expected: [0] },
    { args: [[[10, 100, 100, 7], [3, 3, 3, 3]]], expected: [0] },
  ],
};
