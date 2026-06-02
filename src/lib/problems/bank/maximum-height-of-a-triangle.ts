import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-height-of-a-triangle',
  title: 'Maximum Height of a Triangle',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given two positive integers \`red\` and \`blue\` representing the count of red and blue balls respectively. Arrange balls in a triangle where row \`i\` contains exactly \`i\` balls. All balls in a given row must be the **same color**, and any two adjacent rows must be **different colors**.

Return the **maximum height** of the triangle that can be formed, or \`0\` if no valid arrangement exists.`,
  constraints: [
    '`1 <= red, blue <= 100`',
  ],
  examples: [
    {
      input: 'red = 2, blue = 4',
      output: '3',
      explanation: 'Row 1: 1 blue, Row 2: 2 red, Row 3: 3 blue. Total: 2 red + 4 blue. Height = 3.',
    },
    {
      input: 'red = 2, blue = 1',
      output: '2',
      explanation: 'Row 1: 1 blue, Row 2: 2 red. Height = 2.',
    },
    {
      input: 'red = 1, blue = 1',
      output: '1',
    },
    {
      input: 'red = 10, blue = 1',
      output: '2',
    },
  ],
  hints: [
    'Try both color assignments: red in odd rows (1,3,5,…) or red in even rows (2,4,6,…).',
    'For each assignment simulate row by row, consuming balls until you run out.',
    'Return the maximum height across both configurations.',
  ],
  functionName: 'maxHeightOfTriangle',
  params: ['red', 'blue'],
  starterCode: {
    javascript: `function maxHeightOfTriangle(red, blue) {
  function sim(a, b) {
    let h = 0;
    for (let row = 1; ; row++) {
      if (row % 2 === 1) { if (a < row) break; a -= row; }
      else { if (b < row) break; b -= row; }
      h = row;
    }
    return h;
  }
  return Math.max(sim(red, blue), sim(blue, red));
}`,
    typescript: `function maxHeightOfTriangle(red: number, blue: number): number {
  function sim(a: number, b: number): number {
    let h = 0;
    for (let row = 1; ; row++) {
      if (row % 2 === 1) { if (a < row) break; a -= row; }
      else { if (b < row) break; b -= row; }
      h = row;
    }
    return h;
  }
  return Math.max(sim(red, blue), sim(blue, red));
}`,
    python: `def maxHeightOfTriangle(red, blue):
    def sim(a, b):
        h = 0
        row = 1
        while True:
            if row % 2 == 1:
                if a < row: break
                a -= row
            else:
                if b < row: break
                b -= row
            h = row
            row += 1
        return h
    return max(sim(red, blue), sim(blue, red))`,
  },
  visibleTests: [
    { args: [2, 4], expected: 3 },
    { args: [2, 1], expected: 2 },
    { args: [1, 1], expected: 1 },
    { args: [10, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 100], expected: 2 },
    { args: [100, 100], expected: 19 },
    { args: [1, 2], expected: 2 },
    { args: [3, 3], expected: 2 },
    { args: [6, 10], expected: 5 },
    { args: [100, 1], expected: 2 },
  ],
};
