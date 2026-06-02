import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-the-maximum-of-two-arrays',
  title: 'Minimize the Maximum of Two Arrays',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `We have two arrays \`arr1\` and \`arr2\` which are initially empty. You need to add positive integers to them such that they satisfy all the following conditions:

- \`arr1\` contains \`uniqueCnt1\` **distinct** positive integers, each of which is **not divisible** by \`divisor1\`.
- \`arr2\` contains \`uniqueCnt2\` **distinct** positive integers, each of which is **not divisible** by \`divisor2\`.
- **No** integer is in both \`arr1\` and \`arr2\`.

Given the four integers \`divisor1\`, \`divisor2\`, \`uniqueCnt1\`, and \`uniqueCnt2\`, return the **minimum** possible **maximum** integer that can appear in either array.`,
  constraints: [
    '2 <= divisor1, divisor2 <= 10^5',
    '1 <= uniqueCnt1, uniqueCnt2 <= 10^9',
    '2 <= divisor1 + divisor2',
  ],
  examples: [
    {
      input: 'divisor1 = 2, divisor2 = 7, uniqueCnt1 = 1, uniqueCnt2 = 3',
      output: '4',
      explanation: 'arr1 = [1], arr2 = [2, 3, 4]. None in arr1 are div by 2, none in arr2 are div by 7, and no number appears in both.',
    },
    {
      input: 'divisor1 = 3, divisor2 = 5, uniqueCnt1 = 2, uniqueCnt2 = 1',
      output: '3',
      explanation: 'arr1 = [1, 2], arr2 = [3]. Max is 3.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer x. For a given x, check if it is feasible to fill both arrays using only integers in [1, x].',
    'Level 2: Use inclusion-exclusion. Let lcm = lcm(divisor1, divisor2). Count: div1 = x//divisor1 (divisible by d1), div2 = x//divisor2 (divisible by d2), both = x//lcm. "Only-for-arr1" (divisible by d2 but not d1) = div2−both; "only-for-arr2" = div1−both; "flexible" (neither) = x−div1−div2+both.',
    'Level 3: Feasibility: max(0, uniqueCnt1−only_arr1) + max(0, uniqueCnt2−only_arr2) ≤ flexible. Binary search in [1, 2e9] with BigInt for the LCM computation.',
  ],
  functionName: 'minimizeTheMaximum',
  params: ['divisor1', 'divisor2', 'uniqueCnt1', 'uniqueCnt2'],
  starterCode: {
    javascript: `function minimizeTheMaximum(divisor1, divisor2, uniqueCnt1, uniqueCnt2) {

}`,
    typescript: `function minimizeTheMaximum(divisor1: number, divisor2: number, uniqueCnt1: number, uniqueCnt2: number): number {

}`,
    python: `def minimizeTheMaximum(divisor1: int, divisor2: int, uniqueCnt1: int, uniqueCnt2: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [2, 7, 1, 3], expected: 4 },
    { args: [3, 5, 2, 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [2, 2, 1, 1], expected: 3 },
    { args: [2, 3, 1, 1], expected: 2 },
    { args: [2, 2, 2, 2], expected: 7 },
    { args: [3, 3, 2, 2], expected: 5 },
    { args: [2, 3, 3, 3], expected: 7 },
    { args: [5, 7, 3, 3], expected: 6 },
    { args: [2, 3, 1000000000, 1000000000], expected: 2399999999 },
  ],
};
