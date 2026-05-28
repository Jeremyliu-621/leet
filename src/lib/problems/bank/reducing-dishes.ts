import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reducing-dishes',
  title: 'Reducing Dishes',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `A chef has prepared \`n\` dishes. The \`i\`-th dish has a satisfaction level of \`satisfaction[i]\`. After cooking the \`i\`-th dish (1-indexed), its **like-time coefficient** is \`time[i] * satisfaction[i]\`.

Return the **maximum sum of like-time coefficients** you can achieve after cooking some (possibly zero) dishes. You can discard any number of dishes to optimize the result.

**Approach:** Sort satisfaction descending. Greedily add dishes from highest to lowest. Track the cumulative sum (\`curr\`); adding a dish of value \`v\` increases all previously selected dishes by \`v\` (since they shift one position later). Stop when \`curr ≤ 0\`.`,
  constraints: [
    '1 <= n <= 500',
    '-10^3 <= satisfaction[i] <= 10^3',
  ],
  examples: [
    {
      input: 'satisfaction = [-1,-8,0,5,-9]',
      output: '14',
      explanation: 'Cook dishes with satisfaction [5,0,-1] in that order: 1*5+2*0+3*(-1)=14.',
    },
    {
      input: 'satisfaction = [4,3,2]',
      output: '20',
      explanation: 'Cook all: 1*2+2*3+3*4=20.',
    },
    {
      input: 'satisfaction = [-1,-4,-5]',
      output: '0',
      explanation: 'No positive like-time coefficient achievable; cook nothing.',
    },
  ],
  hints: [
    'Sort satisfaction in descending order. When you add a dish of value v after k chosen dishes, the total increases by v + sum(already chosen) = v + curr.',
    'Maintain `curr` = running sum of chosen dishes. After each addition, if `curr <= 0`, adding more dishes won\'t help (they\'re all lower). Accumulate `curr` into total.',
    '```js\nsatisfaction.sort((a,b) => b-a);\nlet total = 0, curr = 0;\nfor (const s of satisfaction) {\n  curr += s;\n  if (curr <= 0) break;\n  total += curr;\n}\nreturn total;\n```',
  ],
  functionName: 'maxSatisfaction',
  params: ['satisfaction'],
  starterCode: {
    javascript: `function maxSatisfaction(satisfaction) {
  // return max sum of like-time coefficients

}`,
    typescript: "function maxSatisfaction(satisfaction: number[]): number {\n  // return max sum of like-time coefficients\n\n}",

    python: `def maxSatisfaction(satisfaction: list) -> int:
    # return max sum of like-time coefficients
    pass
`,
  },
  visibleTests: [
    { args: [[-1, -8, 0, 5, -9]], expected: 14 },
    { args: [[4, 3, 2]], expected: 20 },
    { args: [[-1, -4, -5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[-2, 5, -1, 0, 3, -3]], expected: 35 },
    { args: [[5, 4, 3, 2, 1]], expected: 55 },
    { args: [[-100]], expected: 0 },
  ],
};
