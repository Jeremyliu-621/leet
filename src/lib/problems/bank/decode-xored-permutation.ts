import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-xored-permutation',
  title: 'Decode XORed Permutation',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `There is an integer array \`perm\` that is a permutation of the first \`n\` positive integers, where \`n\` is always **odd**.

It was encoded into another integer array \`encoded\` of length \`n - 1\`, where \`encoded[i] = perm[i] XOR perm[i + 1]\`.

Given the \`encoded\` array, return the original array \`perm\`. It is guaranteed that the answer exists and is unique.`,
  constraints: [
    '3 <= n <= 10^5',
    'n is odd',
    'encoded.length == n - 1',
    'encoded[i] >= 1',
  ],
  examples: [
    {
      input: 'encoded = [3,1]',
      output: '[1,2,3]',
      explanation: 'perm = [1,2,3]. Check: 1 XOR 2 = 3 ✓, 2 XOR 3 = 1 ✓.',
    },
    {
      input: 'encoded = [6,5,4,6]',
      output: '[2,4,1,5,3]',
      explanation: 'perm = [2,4,1,5,3]. Check: 2^4=6✓, 4^1=5✓, 1^5=4✓, 5^3=6✓.',
    },
  ],
  hints: [
    'The XOR of all integers 1..n can be computed directly. Call this "total".',
    'XOR encoded[1]^encoded[3]^...^encoded[n-2] gives perm[1]^perm[2]^...^perm[n-1] = total XOR perm[0]. So perm[0] = total XOR that value.',
    'Once perm[0] is known, reconstruct: perm[i] = perm[i-1] XOR encoded[i-1] for i = 1..n-1.',
  ],
  functionName: 'decode',
  params: ['encoded'],
  starterCode: {
    javascript: `function decode(encoded) {
  const n = encoded.length + 1;
  let total = 0;
  for (let i = 1; i <= n; i++) total ^= i;
  let rest = 0;
  for (let i = 1; i < encoded.length; i += 2) rest ^= encoded[i];
  const perm = [total ^ rest];
  for (let i = 0; i < encoded.length; i++) perm.push(perm[i] ^ encoded[i]);
  return perm;
}`,
    typescript: `function decode(encoded: number[]): number[] {
  const n = encoded.length + 1;
  let total = 0;
  for (let i = 1; i <= n; i++) total ^= i;
  let rest = 0;
  for (let i = 1; i < encoded.length; i += 2) rest ^= encoded[i]!;
  const perm: number[] = [total ^ rest];
  for (let i = 0; i < encoded.length; i++) perm.push(perm[i]! ^ encoded[i]!);
  return perm;
}`,
    python: `def decode(encoded):
    n = len(encoded) + 1
    total = 0
    for i in range(1, n + 1): total ^= i
    rest = 0
    for i in range(1, len(encoded), 2): rest ^= encoded[i]
    perm = [total ^ rest]
    for i in range(len(encoded)):
        perm.append(perm[i] ^ encoded[i])
    return perm`,
  },
  visibleTests: [
    { args: [[3, 1]], expected: [1, 2, 3] },
    { args: [[6, 5, 4, 6]], expected: [2, 4, 1, 5, 3] },
    { args: [[2, 5, 6, 7]], expected: [3, 1, 4, 2, 5] },
  ],
  hiddenTests: [
    // n=3 cases: total=1^2^3=0
    { args: [[1, 3]], expected: [3, 2, 1] },
    { args: [[2, 3]], expected: [3, 1, 2] },
    { args: [[3, 2]], expected: [2, 1, 3] },
    { args: [[1, 2]], expected: [2, 3, 1] },
    // n=5 cases: total=1^2^3^4^5=1
    { args: [[2, 1, 7, 1]], expected: [1, 3, 2, 5, 4] },
    { args: [[4, 3, 6, 7]], expected: [5, 1, 2, 4, 3] },
    { args: [[7, 1, 4, 3]], expected: [3, 4, 5, 1, 2] },
    // n=7 case: total=1^2^...^7=0
    { args: [[3, 4, 5, 7, 4, 7]], expected: [4, 7, 3, 6, 1, 5, 2] },
  ],
};
