import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alternating-groups-i',
  title: 'Alternating Groups I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There is a circle of red and blue tiles. You are given an array of integers \`colors\` where \`colors[i]\` represents the color of the \`i\`-th tile:

- \`colors[i] == 0\` means the \`i\`-th tile is **red**.
- \`colors[i] == 1\` means the \`i\`-th tile is **blue**.

An **alternating group** is every 3 contiguous tiles in the circle with **alternating** colors (each tile has a different color from its adjacent tiles in the group).

Return the **number** of alternating groups.

**Note:** Since \`colors\` represents a **circle**, the first and last tiles are considered to be next to each other.`,
  constraints: [
    '`3 <= colors.length <= 100`',
    '`0 <= colors[i] <= 1`',
  ],
  examples: [
    {
      input: 'colors = [1,1,1]',
      output: '0',
      explanation: 'No alternating groups exist.',
    },
    {
      input: 'colors = [0,1,0,0,1]',
      output: '3',
      explanation: 'Alternating groups centered at indices 0, 1, and 4: (colors[4],colors[0],colors[1])=(1,0,1), (colors[0],colors[1],colors[2])=(0,1,0), (colors[3],colors[4],colors[0])=(0,1,0).',
    },
  ],
  hints: [
    'Iterate over each index `i`. Check if the triple `(colors[i-1], colors[i], colors[i+1])` forms an alternating sequence (no two adjacent equal). Use modular indexing for the circular wrap-around.',
    'Three tiles are alternating if `colors[(i-1+n)%n] !== colors[i]` and `colors[i] !== colors[(i+1)%n]`, which also means the first and last elements differ.',
    'Count all `i` where both conditions hold. Because the array is circular, don\'t forget that indices 0 and n-1 are neighbors — the mod formula handles this automatically.',
  ],
  functionName: 'numberOfAlternatingGroups',
  params: ['colors'],
  starterCode: {
    javascript: `function numberOfAlternatingGroups(colors) {
  const n = colors.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const prev = colors[(i - 1 + n) % n];
    const curr = colors[i];
    const next = colors[(i + 1) % n];
    if (prev !== curr && curr !== next) count++;
  }
  return count;
}`,
    typescript: `function numberOfAlternatingGroups(colors: number[]): number {
  const n = colors.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const prev = colors[(i - 1 + n) % n]!;
    const curr = colors[i]!;
    const next = colors[(i + 1) % n]!;
    if (prev !== curr && curr !== next) count++;
  }
  return count;
}`,
    python: `def numberOfAlternatingGroups(colors):
    colors = list(colors.to_py()) if hasattr(colors, 'to_py') else list(colors)
    n = len(colors)
    count = 0
    for i in range(n):
        prev = colors[(i - 1) % n]
        curr = colors[i]
        nxt = colors[(i + 1) % n]
        if prev != curr and curr != nxt:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[0, 1, 0, 0, 1]], expected: 3 },
    { args: [[0, 1, 0]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 0, 1, 0, 1]], expected: 3 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[0, 1, 0, 1, 0, 1]], expected: 6 },
    { args: [[1, 0, 1, 1, 0]], expected: 3 },
    { args: [[0, 0, 1, 0, 1]], expected: 3 },
  ],
};
