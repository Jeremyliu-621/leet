import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-city-scheduling',
  title: 'Two City Scheduling',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `A company is planning to interview \`2n\` people. Given the array \`costs\` where \`costs[i] = [aCosti, bCosti]\`, the cost of flying the \`i\`th person to city A is \`aCosti\`, and the cost of flying the \`i\`th person to city B is \`bCosti\`.

Return the **minimum cost** to fly every person to a city such that exactly \`n\` people arrive in each city.`,
  constraints: [
    '2 * n == costs.length',
    '2 <= costs.length <= 100',
    'costs.length is even.',
    '1 <= aCosti, bCosti <= 1000',
  ],
  examples: [
    {
      input: 'costs = [[10,20],[30,200],[400,50],[30,20]]',
      output: '110',
      explanation: 'Person 0 → A (10), Person 1 → A (30), Person 2 → B (50), Person 3 → B (20). Total = 110.',
    },
    {
      input: 'costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]',
      output: '1859',
    },
  ],
  hints: [
    'Level 1: If everyone went to city B, what is the extra cost to send someone to A instead? Greedily send the cheapest-to-switch people to A.',
    'Level 2: Sort by (aCost - bCost). The n people with the smallest difference go to A, the rest to B.',
    'Level 3: costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]));const n=costs.length/2;return costs.reduce((s,c,i)=>s+(i<n?c[0]:c[1]),0);',
  ],
  functionName: 'twoCitySchedCost',
  params: ['costs'],
  starterCode: {
    javascript: 'function twoCitySchedCost(costs) {\n  // your code here\n}\n',
    typescript: "function twoCitySchedCost(costs: number[][]): number {\n  // your code here\n}",

    python: 'def twoCitySchedCost(costs):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[10, 20], [30, 200], [400, 50], [30, 20]]], expected: 110 },
    { args: [[[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]], expected: 1859 },
  ],
  hiddenTests: [
    { args: [[[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]]], expected: 3086 },
    { args: [[[1, 2], [3, 4]]], expected: 5 },
    { args: [[[1, 1000], [1000, 1]]], expected: 2 },
    { args: [[[10, 10], [10, 10]]], expected: 20 },
  ],
};
