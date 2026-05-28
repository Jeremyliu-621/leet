import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-total-strength-of-wizards',
  title: 'Sum of Total Strength of Wizards',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `As the ruler of a kingdom, you have an army of wizards at your command.

You are given a **0-indexed** integer array \`strength\`, where \`strength[i]\` denotes the strength of the \`i\`th wizard. For a **contiguous** group of wizards, the total strength is defined as the product of the following two values:
- The **weakest** (minimum) strength among all the wizards in the group.
- The **total** (sum) of all the strengths in the group.

Return the **sum of the total strengths** of **all** contiguous groups of wizards. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= strength.length <= 10^5`',
    '`1 <= strength[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'strength = [1,3,1,2]',
      output: '44',
      explanation: 'Subarrays and (min × sum): [1]→1, [3]→9, [1]→1, [2]→4, [1,3]→1×4=4, [3,1]→1×4=4, [1,2]→1×3=3, [1,3,1]→1×5=5, [3,1,2]→1×6=6, [1,3,1,2]→1×7=7. Sum = 44.',
    },
    {
      input: 'strength = [5,4,6]',
      output: '213',
      explanation: '[5]→25, [4]→16, [6]→36, [5,4]→4×9=36, [4,6]→4×10=40, [5,4,6]→4×15=60. Sum = 213.',
    },
  ],
  hints: [
    'For each wizard i as the minimum of a subarray, find L[i] (previous strictly smaller index) and R[i] (next smaller-or-equal index) using a monotonic stack.',
    'The contribution of wizard i is strength[i] × Σ_{l=L[i]+1}^{i} Σ_{r=i}^{R[i]-1} (sum of subarray [l,r]). Express this using prefix sums and prefix-of-prefix sums.',
    '```js\nfunction totalStrength(strength) {\n  const MOD = 1000000007n;\n  const n = strength.length;\n  const s = strength.map(BigInt);\n  const prefix = new Array(n+1).fill(0n);\n  for (let i = 0; i < n; i++) prefix[i+1] = (prefix[i]+s[i])%MOD;\n  const pp = new Array(n+2).fill(0n);\n  for (let i = 0; i <= n; i++) pp[i+1] = (pp[i]+prefix[i])%MOD;\n  const L = new Int32Array(n).fill(-1), R = new Int32Array(n).fill(n);\n  const stack = [];\n  for (let i = 0; i < n; i++) {\n    while (stack.length && s[stack[stack.length-1]] >= s[i]) R[stack.pop()] = i;\n    L[i] = stack.length ? stack[stack.length-1] : -1;\n    stack.push(i);\n  }\n  let ans = 0n;\n  for (let i = 0; i < n; i++) {\n    const l=BigInt(L[i]+1), r=BigInt(R[i]), ii=BigInt(i);\n    const cL=ii-l+1n, cR=r-ii;\n    const sR=(pp[Number(r)+1]-pp[i+1]+MOD)%MOD;\n    const sL=(pp[i+1]-pp[Number(l)]+MOD)%MOD;\n    ans=(ans+s[i]*((cL*sR-cR*sL)%MOD+MOD)%MOD)%MOD;\n  }\n  return Number(ans);\n}\n```',
  ],
  functionName: 'totalStrength',
  params: ['strength'],
  starterCode: {
    javascript: `function totalStrength(strength) {

}`,
    typescript: `function totalStrength(strength: number[]): number {

}`,
    python: `def totalStrength(strength):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 2]], expected: 44 },
    { args: [[5, 4, 6]], expected: 213 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: 16 },
    { args: [[1, 2, 3]], expected: 33 },
    { args: [[3, 1, 2]], expected: 27 },
    { args: [[1, 1, 1]], expected: 10 },
    { args: [[4, 3, 2, 1]], expected: 98 },
  ],
};
