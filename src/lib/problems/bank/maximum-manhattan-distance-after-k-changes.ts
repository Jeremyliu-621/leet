import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-manhattan-distance-after-k-changes',
  title: 'Maximum Manhattan Distance After K Changes',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `You are given a string \`s\` consisting of the characters \`'N'\`, \`'S'\`, \`'E'\`, \`'W'\`, representing movements on a 2D plane starting at the origin.

You can **change** at most \`k\` characters of \`s\` to any of the four direction characters.

Return the **maximum Manhattan distance** (from the origin) you can reach after completing all movements.

Manhattan distance is \`|x| + |y|\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '0 <= k <= s.length',
    "s[i] is one of 'N', 'S', 'E', 'W'.",
  ],
  examples: [
    {
      input: 's = "NWSE", k = 0',
      output: '0',
      explanation: 'N cancels S, W cancels E. Net position is (0,0). Distance = 0.',
    },
    {
      input: 's = "NN", k = 0',
      output: '2',
      explanation: 'Two north steps: position (0,2). Distance = 2.',
    },
    {
      input: 's = "NS", k = 1',
      output: '2',
      explanation: 'Change S to N: two north steps, distance = 2.',
    },
  ],
  hints: [
    'Level 1: The Manhattan distance is |net_x| + |net_y|. Each change can flip an opposing step to a helpful one, gaining +2 to the targeted axis.',
    'Level 2: For each of the 4 target quadrants (+x+y, +x-y, -x+y, -x-y), the "opposing" steps are the two that reduce distance in that direction. Each change of an opposing step gives +2.',
    'Level 3: For quadrant (+x,+y): base = (E−W)+(N−S), opposing = W+S count. Result = base + 2*min(k, opposing). Take max over all 4 quadrants.',
  ],
  functionName: 'maxDistance',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function maxDistance(s, k) {
  let e = 0, w = 0, n = 0, sou = 0;
  for (const c of s) {
    if (c === 'E') e++;
    else if (c === 'W') w++;
    else if (c === 'N') n++;
    else sou++;
  }
  const quad = (dx, dy, opp) =>
    (e - w) * dx + (n - sou) * dy + 2 * Math.min(k, opp);
  return Math.max(
    quad(1, 1, w + sou),
    quad(1, -1, w + n),
    quad(-1, 1, e + sou),
    quad(-1, -1, e + n)
  );
}`,
    typescript: `function maxDistance(s: string, k: number): number {
  let e = 0, w = 0, n = 0, sou = 0;
  for (const c of s) {
    if (c === 'E') e++;
    else if (c === 'W') w++;
    else if (c === 'N') n++;
    else sou++;
  }
  const quad = (dx: number, dy: number, opp: number) =>
    (e - w) * dx + (n - sou) * dy + 2 * Math.min(k, opp);
  return Math.max(
    quad(1, 1, w + sou),
    quad(1, -1, w + n),
    quad(-1, 1, e + sou),
    quad(-1, -1, e + n)
  );
}`,
    python: `def maxDistance(s, k):
    e = w = n = sou = 0
    for c in s:
        if c == 'E': e += 1
        elif c == 'W': w += 1
        elif c == 'N': n += 1
        else: sou += 1
    def quad(dx, dy, opp):
        return (e - w) * dx + (n - sou) * dy + 2 * min(k, opp)
    return max(
        quad(1, 1, w + sou),
        quad(1, -1, w + n),
        quad(-1, 1, e + sou),
        quad(-1, -1, e + n)
    )`,
  },
  visibleTests: [
    { args: ['NWSE', 0], expected: 0 },
    { args: ['NN', 0], expected: 2 },
    { args: ['NS', 1], expected: 2 },
  ],
  hiddenTests: [
    { args: ['E', 0], expected: 1 },
    { args: ['NWSE', 1], expected: 2 },
    { args: ['SSSS', 2], expected: 4 },
    { args: ['NESW', 2], expected: 4 },
    { args: ['EEEEWWWW', 4], expected: 8 },
    { args: ['NWWSSSSE', 3], expected: 8 },
    { args: ['N', 1], expected: 1 },
    { args: ['NNNN', 2], expected: 4 },
  ],
};
