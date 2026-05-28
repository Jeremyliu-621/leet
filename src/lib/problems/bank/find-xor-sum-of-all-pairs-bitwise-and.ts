import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-xor-sum-of-all-pairs-bitwise-and',
  title: 'Find XOR Sum of All Pairs Bitwise AND',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given two integer arrays \`arr1\` and \`arr2\`, compute the **XOR** of the bitwise AND of every pair \`(arr1[i], arr2[j])\` for all valid indices \`i\` and \`j\`.

That is, return \`(arr1[0] & arr2[0]) XOR (arr1[0] & arr2[1]) XOR ... XOR (arr1[n-1] & arr2[m-1])\`.

A brute-force O(n × m) loop is too slow for large inputs. Find an O(n + m) solution.`,
  constraints: [
    '1 ≤ arr1.length, arr2.length ≤ 10^5',
    '0 ≤ arr1[i], arr2[j] ≤ 10^9',
  ],
  examples: [
    {
      input: 'arr1 = [1,2,3], arr2 = [6,5,4]',
      output: '0',
      explanation: 'All pair ANDs: 0,1,0,2,0,0,2,1,0. Their XOR is 0.',
    },
    {
      input: 'arr1 = [12], arr2 = [4]',
      output: '4',
      explanation: 'Only one pair: 12 & 4 = 4.',
    },
    {
      input: 'arr1 = [2,3], arr2 = [1,4]',
      output: '1',
      explanation: 'Pairs: (2&1)=0, (2&4)=0, (3&1)=1, (3&4)=0. XOR = 1.',
    },
  ],
  hints: [
    'Consider each bit position k independently. The XOR of all (arr1[i] >> k & 1) & (arr2[j] >> k & 1) over all pairs simplifies.',
    'For a single bit: XOR of (a_k · b_k) over all pairs = (XOR of a_k over arr1) · (XOR of b_k over arr2), where · is AND. This follows because XOR distributes over binary multiplication.',
    'Therefore the answer is simply XOR(arr1) & XOR(arr2), computed in two linear passes.',
  ],
  functionName: 'findXORSumOfAllPairBitwiseAND',
  params: ['arr1', 'arr2'],
  starterCode: {
    javascript: `function findXORSumOfAllPairBitwiseAND(arr1, arr2) {

}`,
    typescript: `function findXORSumOfAllPairBitwiseAND(arr1: number[], arr2: number[]): number {

}`,
    python: `def findXORSumOfAllPairBitwiseAND(arr1, arr2):
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3], [6,5,4]], expected: 0 },
    { args: [[12], [4]], expected: 4 },
    { args: [[2,3], [1,4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5], [7]], expected: 5 },
    { args: [[1,1], [1,1]], expected: 0 },
    { args: [[7,5,3], [1]], expected: 1 },
    { args: [[3,5], [2,4]], expected: 6 },
    { args: [[1], [1]], expected: 1 },
    { args: [[10,12], [15]], expected: 6 },
    { args: [[4,6,8], [2,3]], expected: 0 },
  ],
};
