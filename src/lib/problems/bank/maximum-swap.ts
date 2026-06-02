import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-swap',
  title: 'Maximum Swap',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `You are given an integer \`num\`. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.`,
  constraints: ['0 <= num <= 10^8'],
  examples: [
    {
      input: 'num = 2736',
      output: '7236',
      explanation: 'Swap the digit 2 with the digit 7.',
    },
    {
      input: 'num = 9973',
      output: '9973',
      explanation: 'The number is already the maximum — no beneficial swap exists.',
    },
  ],
  hints: [
    'Convert the number to an array of digits. To maximize the result, you want to place the largest possible digit as far left as possible.',
    'Record the last position of each digit 0–9. Then scan from left to right: for each position, check if any larger digit appears later in the number (using the last-position map).',
    'Among all larger digits that appear later, pick the largest one (and if tied, the rightmost occurrence). Swap it with the current position and return the result immediately. If no beneficial swap is found after scanning all positions, return the original number.',
  ],
  functionName: 'maximumSwap',
  params: ['num'],
  starterCode: {
    javascript: `function maximumSwap(num) {
  const d = String(num).split('');
  const last = {};
  for (let i = 0; i < d.length; i++) last[d[i]] = i;
  for (let i = 0; i < d.length; i++) {
    for (let c = 9; c > Number(d[i]); c--) {
      if (last[c] > i) {
        [d[i], d[last[c]]] = [d[last[c]], d[i]];
        return Number(d.join(''));
      }
    }
  }
  return num;
}`,
    typescript: `function maximumSwap(num: number): number {
  const d = String(num).split('');
  const last: Record<string, number> = {};
  for (let i = 0; i < d.length; i++) last[d[i]!] = i;
  for (let i = 0; i < d.length; i++) {
    for (let c = 9; c > Number(d[i]); c--) {
      if ((last[c] ?? -1) > i) {
        [d[i], d[last[c]!]] = [d[last[c]!]!, d[i]!];
        return Number(d.join(''));
      }
    }
  }
  return num;
}`,
    python: `def maximumSwap(num):
    d = list(str(num))
    last = {c: i for i, c in enumerate(d)}
    for i in range(len(d)):
        for c in range(9, int(d[i]), -1):
            if last.get(str(c), -1) > i:
                j = last[str(c)]
                d[i], d[j] = d[j], d[i]
                return int(''.join(d))
    return num`,
  },
  visibleTests: [
    { args: [2736], expected: 7236 },
    { args: [9973], expected: 9973 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [98368], expected: 98863 },
    { args: [1993], expected: 9913 },
    { args: [10], expected: 10 },
  ],
};
