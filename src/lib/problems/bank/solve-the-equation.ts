import type { Problem } from '../types';

export const problem: Problem = {
  id: 'solve-the-equation',
  title: 'Solve the Equation',
  difficulty: 'medium',
  tags: ['math', 'strings', 'simulation'],
  description: `Solve a given linear equation of the form \`"ax+b=cx+d"\` and return the value of \`x\` in the form \`"x=value"\`.

The equation contains only \`+\`, \`-\`, digits (0–9), and the character \`x\`. There is exactly one \`=\` sign. The equation is guaranteed to be valid.

Return:
- \`"x=value"\` if there is exactly one solution.
- \`"No solution"\` if there is no solution (the equation is a contradiction).
- \`"Infinite solutions"\` if every value of \`x\` satisfies the equation.`,
  constraints: [
    '3 <= equation.length <= 1000',
    'equation has exactly one \'=\'',
    'equation contains only digits, \'x\', \'+\', and \'-\'',
    'The equation is a valid linear equation with at most one variable',
  ],
  examples: [
    {
      input: 'equation = "x+5-3+x=6+x-2"',
      output: '"x=2"',
      explanation: '2x+2=x+4 → x=2.',
    },
    {
      input: 'equation = "x=x"',
      output: '"Infinite solutions"',
      explanation: 'Both sides are x; 0x=0, satisfied for all x.',
    },
    {
      input: 'equation = "2x=x"',
      output: '"x=0"',
      explanation: '2x-x=0 → x=0.',
    },
  ],
  hints: [
    'Parse each side into a coefficient for x and a constant term. Handle signs carefully.',
    'Move all x terms to the left side and constants to the right: (leftCoeff - rightCoeff) * x = rightConst - leftConst.',
    'If the x coefficient is 0: check if the constant difference is also 0 (infinite solutions) or not (no solution).',
  ],
  functionName: 'solveEquation',
  params: ['equation'],
  starterCode: {
    javascript: `function solveEquation(equation) {
  // your code here
}`,
    typescript: `function solveEquation(equation: string): string {
  // your code here
}`,
    python: `def solveEquation(equation):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['x+5-3+x=6+x-2'], expected: 'x=2' },
    { args: ['x=x'], expected: 'Infinite solutions' },
    { args: ['2x=x'], expected: 'x=0' },
    { args: ['0x=0'], expected: 'Infinite solutions' },
    { args: ['3x=6'], expected: 'x=2' },
    { args: ['x+1=x+2'], expected: 'No solution' },
  ],
  hiddenTests: [
    { args: ['-x=-1'], expected: 'x=1' },
    { args: ['5x+2=3x+10'], expected: 'x=4' },
    { args: ['x=0'], expected: 'x=0' },
    { args: ['0x+0=0'], expected: 'Infinite solutions' },
    { args: ['x+1=2'], expected: 'x=1' },
    { args: ['10x+3=7x+12'], expected: 'x=3' },
    { args: ['x+x+x=3x'], expected: 'Infinite solutions' },
    { args: ['x+x+x=3x+1'], expected: 'No solution' },
    { args: ['100x=200'], expected: 'x=2' },
    { args: ['-x+10=5'], expected: 'x=5' },
  ],
};
