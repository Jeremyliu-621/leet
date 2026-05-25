import type { Problem } from '../types';

export const problem: Problem = {
  id: 'interchangeable-rectangles',
  title: 'Number of Pairs of Interchangeable Rectangles',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given \`n\` rectangles represented by a **0-indexed** 2D integer array \`rectangles\`, where \`rectangles[i] = [widthi, heighti]\` denotes the width and height of the \`i\`th rectangle.

Two rectangles \`i\` and \`j\` (\`i < j\`) are considered **interchangeable** if they have the **same** width-to-height ratio. More formally, they are interchangeable if \`widthi / heighti == widthj / heightj\` (using **decimal** division, not integer division).

Return the **number of pairs** of **interchangeable** rectangles.`,
  constraints: [
    'n == rectangles.length',
    '1 <= n <= 10^5',
    'rectangles[i].length == 2',
    '1 <= widthi, heighti <= 10^5',
  ],
  examples: [
    {
      input: 'rectangles = [[4,8],[3,6],[10,20],[15,30]]',
      output: '6',
      explanation: 'All rectangles have ratio 1:2. C(4,2) = 6 pairs.',
    },
    {
      input: 'rectangles = [[4,5],[7,8]]',
      output: '0',
      explanation: 'No two rectangles have the same ratio.',
    },
  ],
  hints: [
    'Level 1: Normalize each rectangle by dividing width and height by their GCD. Use a map to count how many rectangles share each normalized ratio.',
    'Level 2: For each unique ratio with count c, add c*(c-1)/2 pairs.',
    'Level 3: const gcd=(a,b)=>b?gcd(b,a%b):a;const m=new Map();for(const[w,h]of rectangles){const g=gcd(w,h);const k=`${w/g}:${h/g}`;m.set(k,(m.get(k)??0)+1);}let ans=0;for(const c of m.values())ans+=c*(c-1)/2;return ans;',
  ],
  functionName: 'interchangeableRectangles',
  params: ['rectangles'],
  starterCode: {
    javascript: 'function interchangeableRectangles(rectangles) {\n  // your code here\n}\n',
    python: 'def interchangeableRectangles(rectangles):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[4, 8], [3, 6], [10, 20], [15, 30]]], expected: 6 },
    { args: [[[4, 5], [7, 8]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 0 },
    { args: [[[1, 1], [2, 2]]], expected: 1 },
    { args: [[[1, 2], [2, 4], [3, 6]]], expected: 3 },
    { args: [[[2, 3], [4, 6], [6, 9], [1, 2]]], expected: 3 },
  ],
};
