import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-latest-group-of-size-m',
  title: 'Find Latest Group of Size M',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `Given an array \`arr\` that represents a permutation of numbers from \`1\` to \`n\`.

You have a binary string of size \`n\` that initially has all its bits set to zero. At step \`i\` (1-indexed), the bit at position \`arr[i]\` is set to \`1\`.

Return the latest step at which there exists **at least one** group of \`1\`s of length exactly \`m\`. A group is a contiguous run of \`1\`s. If no such step exists, return \`-1\`.`,
  constraints: [
    'n == arr.length',
    '1 <= m <= n <= 10^5',
    '1 <= arr[i] <= n',
    'All integers in arr are distinct.',
  ],
  examples: [
    {
      input: 'arr = [3,5,1,2,4], m = 1',
      output: '4',
      explanation: 'Step 1: "00100" — groups: {3} length 1. Step 2: "00101" — {3},{5} each length 1. Step 3: "10101" — {1},{3},{5} each length 1. Step 4: "11101" — {1..3} length 3, {5} length 1. At step 4, {5} still has length 1. Step 5: "11111" — {1..5} length 5, no group of length 1. Latest step = 4.',
    },
    {
      input: 'arr = [3,1,5,4,2], m = 2',
      output: '-1',
      explanation: 'Step 1: "00100". Step 2: "10100". Step 3: "10101". Step 4: "10111" — groups {1},{3..5}. Step 5: "11111". No step ever has a group of exactly length 2.',
    },
  ],
  hints: [
    'For each position, track the length of the contiguous group it belongs to. When you set arr[i], merge it with adjacent groups on the left and right.',
    'Maintain a count array: count[len] = number of groups currently of that length. When merging, decrement count for old lengths and increment for the new merged length.',
    'Iterate from i = n down to 1 (reverse direction). At each step, check if count[m] > 0. The first such i (scanning from the end) is the answer. Alternatively iterate forward and record the last step where count[m] > 0.',
  ],
  functionName: 'findLatestStep',
  params: ['arr', 'm'],
  starterCode: {
    javascript: 'function findLatestStep(arr, m) {\n  \n}\n',
    typescript: "function findLatestStep(arr: number[], m: number): number {\n  \n}",

    python: 'def findLatestStep(arr, m):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,5,1,2,4], 1], expected: 4 },
    { args: [[3,1,5,4,2], 2], expected: -1 },
  ],
  hiddenTests: [
    // n=1, m=1: only one step, sets bit 1 → group of length 1 at step 1
    { args: [[1], 1], expected: 1 },
    // n=2, m=2: arr=[2,1], step1:"01"→group{2} len1, step2:"11"→group{1,2} len2. Latest with len2=step2=2
    { args: [[2,1], 2], expected: 2 },
    // n=4, arr=[1,2,3,4], m=2:
    // step1:"1000"→{1}len1. step2:"1100"→{1,2}len2 ✓. step3:"1110"→{1..3}len3. step4:"1111"→{1..4}len4.
    // latest with group len2 is step 2.
    { args: [[1,2,3,4], 2], expected: 2 },
    // n=5, arr=[2,4,1,5,3], m=3:
    // step1:"01000"→{2}len1. step2:"01010"→{2}len1,{4}len1. step3:"11010"→{1,2}len2,{4}len1.
    // step4:"11011"→{1,2}len2,{4,5}len2. step5:"11111"→{1..5}len5.
    // No group of len3 ever. Answer=-1.
    { args: [[2,4,1,5,3], 3], expected: -1 },
    // n=6, arr=[4,2,6,1,3,5], m=2:
    // step1:"000100"→{4}len1. step2:"010100"→{2}len1,{4}len1. step3:"010101"→{2},{4},{6}len1.
    // step4:"110101"→{1,2}len2,{4},{6}. step5:"111101"→{1..3}len3,{4}len1,... wait:
    // After step4, pos1 is set. step5 sets pos3: "110101"→set pos3→"111101". {1,2,3}len3,{4}? wait {3,4} merge?
    // Actually arr=[4,2,6,1,3,5]: arr[1]=4,arr[2]=2,arr[3]=6,arr[4]=1,arr[5]=3,arr[6]=5
    // step1: set pos4 → "000100" → {4}
    // step2: set pos2 → "010100" → {2},{4}
    // step3: set pos6 → "010101" → {2},{4},{6} each len1
    // step4: set pos1 → "110101" → {1,2}len2,{4}len1,{6}len1. Has len2!
    // step5: set pos3 → "111101" → {1,2,3}len3,{4}len1,{6}len1. No len2.
    //   Wait: pos3 set, pos2 already set, pos4 already set → merge {1,2,3,4}len4? pos4 is already set!
    //   "010100" at step2. After step3 (pos6): "010101". After step4 (pos1): "110101".
    //   After step5 (pos3): pos3 is 0, pos2 is 1, pos4 is 1. So setting pos3 merges {1,2} and {4}: "111101" → {1,2,3,4}len4,{6}len1. No len2 anymore.
    // step6: set pos5 → "111111" → {1..6}len6. No len2.
    // Latest step with len2 = step4. Answer=4.
    { args: [[4,2,6,1,3,5], 2], expected: 4 },
  ],
};
