import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-original-array-from-prefix-xor',
  title: 'Find The Original Array of Prefix XOR',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays'],
  description: `You are given an **integer** array \`pref\` of size \`n\`. Find and return the array \`arr\` of size \`n\` that satisfies:
- \`pref[i] = arr[0] XOR arr[1] XOR ... XOR arr[i]\`.

Note that \`XOR\` denotes the **bitwise-XOR** operation.

It can be proven that the answer is **unique**.`,
  constraints: [
    '1 <= pref.length <= 10^5',
    '0 <= pref[i] <= 10^6',
  ],
  examples: [
    {
      input: 'pref = [5,2,0,3,1]',
      output: '[5,7,2,3,2]',
      explanation: 'arr[0]=5=pref[0]. arr[1]=pref[0]^pref[1]=5^2=7. arr[2]=pref[1]^pref[2]=2^0=2... wait, arr[2]=pref[1]^pref[2]=2^0=2. arr[3]=pref[2]^pref[3]=0^3=3. arr[4]=pref[3]^pref[4]=3^1=2.',
    },
    {
      input: 'pref = [13]',
      output: '[13]',
      explanation: 'Single element: arr[0] = pref[0] = 13.',
    },
  ],
  hints: [
    'arr[0] = pref[0]. For i > 0: arr[i] = pref[i-1] XOR pref[i].',
    'This follows from the definition: pref[i] = arr[0] ^ ... ^ arr[i], so arr[i] = pref[i] ^ pref[i-1].',
    'Build the result array in one O(n) pass.',
  ],
  functionName: 'findArray',
  params: ['pref'],
  starterCode: {
    javascript: `function findArray(pref) {
  return pref.map((v, i) => i === 0 ? v : pref[i - 1] ^ v);
}`,
    typescript: `function findArray(pref: number[]): number[] {
  return pref.map((v, i) => i === 0 ? v : pref[i - 1]! ^ v);
}`,
    python: `def findArray(pref):
    return [pref[0]] + [pref[i-1] ^ pref[i] for i in range(1, len(pref))]`,
  },
  visibleTests: [
    { args: [[5, 2, 0, 3, 1]], expected: [5, 7, 2, 3, 2] },
    { args: [[13]], expected: [13] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[1, 0]], expected: [1, 1] },
    { args: [[2, 3, 1]], expected: [2, 1, 2] },
    { args: [[5, 5, 5]], expected: [5, 0, 0] },
  ],
};
