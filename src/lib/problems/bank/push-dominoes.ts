import type { Problem } from '../types';

export const problem: Problem = {
  id: 'push-dominoes',
  title: 'Push Dominoes',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `There are \`n\` dominoes in a line, represented by a string where:
- \`'L'\` means the domino is being pushed to the left,
- \`'R'\` means the domino is being pushed to the right,
- \`'.'\` means the domino is standing upright.

Each second, a falling domino pushes adjacent dominoes. Determine the final state of all dominoes.`,
  constraints: [
    'n == dominoes.length',
    '1 <= n <= 10^5',
    'dominoes[i] is either \'L\', \'R\', or \'.\'',
  ],
  examples: [
    {
      input: 'dominoes = "RR.L"',
      output: '"RR.L"',
      explanation: 'The first R pushes the second, which reaches the L — they balance.',
    },
    {
      input: 'dominoes = ".L.R...LR..L.."',
      output: '"LL.RR.LLRRLL.."',
      explanation: 'Forces from each R and L propagate until they cancel or dominate.',
    },
  ],
  hints: [
    'Model the problem as force propagation: each R emits a rightward force that decays by 1 each step, and each L emits a leftward force.',
    'Make two passes: left-to-right accumulating rightward forces, right-to-left accumulating leftward forces.',
    'For each position, if net force > 0 → R, < 0 → L, = 0 → ..',
  ],
  functionName: 'pushDominoes',
  params: ['dominoes'],
  starterCode: {
    javascript: `function pushDominoes(dominoes) {

}`,
    typescript: "function pushDominoes(dominoes: string): string {\n\n}",

    python: `def pushDominoes(dominoes):
    pass`,
  },
  visibleTests: [
    { args: ['RR.L'], expected: 'RR.L' },
    { args: ['.L.R...LR..L..'], expected: 'LL.RR.LLRRLL..' },
  ],
  hiddenTests: [
    { args: ['.'], expected: '.' },
    { args: ['R'], expected: 'R' },
    { args: ['L'], expected: 'L' },
    { args: ['R.R.L'], expected: 'RRR.L' },
    { args: ['LR'], expected: 'LR' },
    { args: ['.L.'], expected: 'LL.' },
  ],
};
