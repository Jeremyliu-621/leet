import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-gap',
  title: 'Binary Gap',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, find and return the **longest distance** between any two adjacent \`1\`'s in the binary representation of \`n\`. If there are no two adjacent \`1\`'s, return \`0\`.

Two \`1\`'s are adjacent if there are only \`0\`'s separating them (possibly no \`0\`'s).`,
  constraints: ['1 <= n <= 10^9'],
  examples: [
    { input: 'n = 22', output: '2', explanation: '22 in binary is 10110. The adjacent 1s at positions 1 and 3 are distance 2 apart.' },
    { input: 'n = 8', output: '0', explanation: '8 in binary is 1000. There is only one 1, so return 0.' },
    { input: 'n = 5', output: '2', explanation: '5 in binary is 101. The adjacent 1s are distance 2 apart.' },
  ],
  hints: [
    'Level 1: Convert n to binary, find positions of all 1s, then find the max gap between consecutive positions.',
    'Level 2: Scan bits with a running variable tracking the last seen 1-bit position.',
    'Level 3: let last=-1,best=0,pos=0;while(n){if(n&1){if(last>=0)best=Math.max(best,pos-last);last=pos;}n>>>=1;pos++;}return best;',
  ],
  functionName: 'binaryGap',
  params: ['n'],
  starterCode: {
    javascript: `function binaryGap(n) {
  let last = -1, best = 0, pos = 0;
  while (n) {
    if (n & 1) { if (last >= 0) best = Math.max(best, pos - last); last = pos; }
    n >>>= 1; pos++;
  }
  return best;
}`,
    typescript: `function binaryGap(n: number): number {
  let last = -1, best = 0, pos = 0;
  while (n) {
    if (n & 1) { if (last >= 0) best = Math.max(best, pos - last); last = pos; }
    n >>>= 1; pos++;
  }
  return best;
}`,
    python: `def binaryGap(n):
    last, best, pos = -1, 0, 0
    while n:
        if n & 1:
            if last >= 0: best = max(best, pos - last)
            last = pos
        n >>= 1; pos += 1
    return best`,
  },
  visibleTests: [
    { args: [22], expected: 2 },
    { args: [8], expected: 0 },
    { args: [5], expected: 2 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [6], expected: 1 },
    { args: [7], expected: 1 },
    { args: [536870912], expected: 0 },
    { args: [1073741825], expected: 30 },
  ],
};
