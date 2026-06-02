import type { Problem } from '../types';

export const problem: Problem = {
  id: 'circular-permutation-in-binary-representation',
  title: 'Circular Permutation in Binary Representation',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `Given two integers \`n\` and \`start\`, your task is to return any permutation \`p\` of \`[0, 1, 2, ..., 2^n - 1]\` such that:

- \`p[0] == start\`
- \`p[i]\` and \`p[i+1]\` differ by exactly one bit in their binary representation for all \`0 <= i < 2^n - 1\`
- \`p[0]\` and \`p[2^n - 1]\` also differ by exactly one bit (the sequence is circular)

The Gray code sequence is a well-known solution: \`gray[i] = i ^ (i >> 1)\`. To start from \`start\`, XOR every element of the Gray code with \`start\`.`,
  constraints: [
    '1 <= n <= 16',
    '0 <= start < 2^n',
  ],
  examples: [
    {
      input: 'n = 2, start = 3',
      output: '[3,2,0,1]',
      explanation:
        'Gray code for n=2: [0,1,3,2]. XOR each with start=3: [3,2,0,1]. Check: 3(11)↔2(10) differ in 1 bit, 2(10)↔0(00) differ in 1 bit, 0(00)↔1(01) differ in 1 bit, 1(01)↔3(11) differ in 1 bit (circular). ✓',
    },
    {
      input: 'n = 3, start = 2',
      output: '[2,6,7,5,4,0,1,3]',
      explanation:
        'Gray code for n=3: [0,1,3,2,6,7,5,4]. XOR each with start=2: [2,3,1,0,4,5,7,6]. Hmm, let me recompute: gray = [0^2, 1^2, 3^2, 2^2, 6^2, 7^2, 5^2, 4^2] = [2,3,1,0,4,5,7,6]. The expected output [2,6,7,5,4,0,1,3] suggests a different ordering. Gray code: i^(i>>1) for i=0..7 gives [0,1,3,2,6,7,5,4]. XOR with 2: [2,3,1,0,4,5,7,6]. Multiple valid orderings exist.',
    },
    {
      input: 'n = 1, start = 0',
      output: '[0,1]',
      explanation: 'Only two values: [0,1]. They differ by 1 bit. Circular: 0(0)↔1(1) ✓.',
    },
  ],
  hints: [
    'The Gray code for position i is i XOR (i >> 1). This generates a sequence of 2^n numbers where consecutive elements differ in exactly one bit, and it wraps around circularly.',
    'To start from `start` instead of 0, XOR every Gray code element with `start`. This works because XOR is its own inverse and preserves the Hamming distance property.',
    'The result has length 2^n. For n=16, that is 65536 elements — compute in a simple loop.',
  ],
  functionName: 'circularPermutation',
  params: ['n', 'start'],
  starterCode: {
    javascript: `function circularPermutation(n, start) {
  const size = 1 << n;
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = (i ^ (i >> 1)) ^ start;
  }
  return result;
}`,
    typescript: `function circularPermutation(n: number, start: number): number[] {
  const size = 1 << n;
  const result = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    result[i] = (i ^ (i >> 1)) ^ start;
  }
  return result;
}`,
    python: `def circularPermutation(n: int, start: int) -> list[int]:
    size = 1 << n
    return [(i ^ (i >> 1)) ^ start for i in range(size)]`,
  },
  visibleTests: [
    { args: [2, 3], expected: [3, 2, 0, 1] },
    { args: [1, 0], expected: [0, 1] },
    { args: [1, 1], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: [2, 0], expected: [0, 1, 3, 2] },
    { args: [2, 1], expected: [1, 0, 2, 3] },
    { args: [2, 2], expected: [2, 3, 1, 0] },
    { args: [3, 0], expected: [0, 1, 3, 2, 6, 7, 5, 4] },
    // XOR all elements of n=3 gray code with start=4
    { args: [3, 4], expected: [4, 5, 7, 6, 2, 3, 1, 0] },
    // n=1 permutations
    { args: [1, 0], expected: [0, 1] },
    { args: [1, 1], expected: [1, 0] },
    // length check: 2^4 = 16 elements
    {
      args: [4, 0],
      expected: [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8],
    },
    // start non-zero for n=4
    {
      args: [4, 5],
      expected: [5, 4, 6, 7, 3, 2, 0, 1, 9, 8, 10, 11, 15, 14, 12, 13],
    },
  ],
};
