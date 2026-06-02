import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-collisions-on-a-road',
  title: 'Count Collisions on a Road',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `There are \`n\` cars on an infinitely long road. Each car has a direction: \`'L'\` (moving left), \`'R'\` (moving right), or \`'S'\` (stationary). All cars start at distinct positions and move at the same speed.

A **collision** occurs when two cars meet. When cars collide:
- Two moving cars become stationary (counts as **2** collisions).
- A moving car hitting a stationary car becomes stationary (counts as **1** collision).

Return the total number of collisions.`,
  constraints: [
    '1 <= directions.length <= 10^5',
    'directions[i] is either "L", "R", or "S".',
  ],
  examples: [
    {
      input: 'directions = "RLRSLL"',
      output: '5',
      explanation: 'R[0] and L[1] collide (+2); R[2] hits S[3] (+1); L[4] hits stopped car (+1); L[5] hits stopped car (+1). Total = 5.',
    },
    {
      input: 'directions = "LLRR"',
      output: '0',
      explanation: 'L cars go left off the road, R cars go right off the road. No collisions.',
    },
    {
      input: 'directions = "SSRSSRLL"',
      output: '4',
      explanation: 'The two R cars eventually hit L cars and stop, accumulating 4 total collisions.',
    },
  ],
  hints: [
    'Leading L cars and trailing R cars will never collide with anything — they go off the road.',
    'Trim the leading L\'s and trailing R\'s; every non-S car in the remaining substring must collide.',
    'The answer equals the count of non-S characters in the trimmed substring.',
  ],
  functionName: 'countCollisions',
  params: ['directions'],
  starterCode: {
    javascript: `function countCollisions(directions) {
  // Trim leading L's and trailing R's — they never collide
  let s = directions.replace(/^L+/, '').replace(/R+$/, '');
  return s.split('').filter(c => c !== 'S').length;
}`,
    typescript: `function countCollisions(directions: string): number {
  const s = directions.replace(/^L+/, '').replace(/R+$/, '');
  return [...s].filter(c => c !== 'S').length;
}`,
    python: `def countCollisions(directions):
    s = directions.lstrip('L').rstrip('R')
    return sum(1 for c in s if c != 'S')`,
  },
  visibleTests: [
    { args: ['RLRSLL'], expected: 5 },
    { args: ['LLRR'], expected: 0 },
    { args: ['SSRSSRLL'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['RS'], expected: 1 },
    { args: ['SR'], expected: 0 },
    { args: ['RL'], expected: 2 },
    { args: ['LL'], expected: 0 },
    { args: ['S'], expected: 0 },
    { args: ['LSR'], expected: 0 },
  ],
};
