import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-artifacts-that-can-be-extracted',
  title: 'Count Artifacts That Can Be Extracted',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `There is an \`n × n\` 0-indexed grid. You are given the integer \`n\` and a 0-indexed 2D integer array \`artifacts\` where \`artifacts[i] = [r1, c1, r2, c2]\` denotes the top-left cell \`(r1, c1)\` and the bottom-right cell \`(r2, c2)\` of artifact \`i\`.

You are also given a 0-indexed 2D integer array \`dig\` where \`dig[j] = [r, c]\` indicates that you will excavate cell \`(r, c)\`.

Return the number of artifacts that can be **extracted** — i.e., every cell of the artifact has been dug.`,
  constraints: [
    '1 <= n <= 1000',
    '1 <= artifacts.length, dig.length <= min(n^2, 10^5)',
    'Artifact rectangles are non-overlapping and all coordinates are in range',
  ],
  examples: [
    {
      input: 'n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1]]',
      output: '1',
      explanation:
        'Artifact 0 covers only (0,0) which was dug. Artifact 1 covers (0,1) and (1,1); (1,1) was not dug, so only artifact 0 can be extracted.',
    },
    {
      input: 'n = 2, artifacts = [[0,0,1,1]], dig = [[0,0],[0,1],[1,1],[1,0]]',
      output: '1',
      explanation: 'All 4 cells of artifact 0 were dug, so it can be extracted.',
    },
  ],
  hints: [
    'Build a Set of "r,c" string keys from the dig array for O(1) lookup.',
    'For each artifact, iterate over every cell in its rectangle and check if it is in the Set.',
    'If all cells are present in the Set, increment the count.',
  ],
  functionName: 'digArtifacts',
  params: ['n', 'artifacts', 'dig'],
  starterCode: {
    javascript: `function digArtifacts(n, artifacts, dig) {
  const dug = new Set(dig.map(([r, c]) => r + ',' + c));
  let count = 0;
  for (const [r1, c1, r2, c2] of artifacts) {
    let ok = true;
    for (let r = r1; r <= r2 && ok; r++)
      for (let c = c1; c <= c2 && ok; c++)
        if (!dug.has(r + ',' + c)) ok = false;
    if (ok) count++;
  }
  return count;
}`,
    typescript: `function digArtifacts(n: number, artifacts: number[][], dig: number[][]): number {
  const dug = new Set(dig.map(d => d[0]! + ',' + d[1]!));
  let count = 0;
  for (const art of artifacts) {
    const [r1, c1, r2, c2] = art as [number, number, number, number];
    let ok = true;
    for (let r = r1; r <= r2 && ok; r++)
      for (let c = c1; c <= c2 && ok; c++)
        if (!dug.has(r + ',' + c)) ok = false;
    if (ok) count++;
  }
  return count;
}`,
    python: `def digArtifacts(n, artifacts, dig):
    artifacts = list(artifacts.to_py()) if hasattr(artifacts, 'to_py') else list(artifacts)
    dig = list(dig.to_py()) if hasattr(dig, 'to_py') else list(dig)
    artifacts = [list(a.to_py() if hasattr(a, 'to_py') else a) for a in artifacts]
    dig = [list(d.to_py() if hasattr(d, 'to_py') else d) for d in dig]
    dug = {(d[0], d[1]) for d in dig}
    count = 0
    for r1, c1, r2, c2 in artifacts:
        if all((r, c) in dug for r in range(r1, r2+1) for c in range(c1, c2+1)):
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [2, [[0, 0, 0, 0], [0, 1, 1, 1]], [[0, 0], [0, 1]]], expected: 1 },
    { args: [2, [[0, 0, 1, 1]], [[0, 0], [0, 1], [1, 1], [1, 0]]], expected: 1 },
    {
      args: [
        3,
        [[0, 0, 2, 2]],
        [
          [0, 0], [0, 1], [0, 2],
          [1, 0], [1, 1], [1, 2],
          [2, 0], [2, 1], [2, 2],
        ],
      ],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [
        2,
        [[0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 1, 0], [1, 1, 1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
      ],
      expected: 4,
    },
    { args: [3, [[0, 0, 0, 0]], [[1, 1]]], expected: 0 },
    { args: [1, [[0, 0, 0, 0]], [[0, 0]]], expected: 1 },
    {
      args: [
        5,
        [[0, 0, 0, 1], [2, 2, 4, 4]],
        [
          [0, 0], [0, 1],
          [2, 2], [2, 3], [2, 4],
          [3, 2], [3, 3], [3, 4],
          [4, 2], [4, 3], [4, 4],
        ],
      ],
      expected: 2,
    },
    { args: [3, [[0, 0, 2, 0], [0, 1, 2, 2]], [[0, 0], [1, 0], [2, 0]]], expected: 1 },
    {
      args: [
        4,
        [[0, 0, 1, 1], [2, 0, 3, 1], [0, 2, 1, 3], [2, 2, 3, 3]],
        [[0, 0], [0, 1], [1, 0], [1, 1], [2, 2], [2, 3], [3, 2], [3, 3]],
      ],
      expected: 2,
    },
  ],
};
