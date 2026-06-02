import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-the-number-of-visible-mountains',
  title: 'Finding the Number of Visible Mountains',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** 2D integer array \`peaks\` where \`peaks[i] = [xi, yi]\` states that mountain \`i\` has a peak at coordinates \`(xi, yi)\`. A mountain can be described as a right-angled isosceles triangle, where its base is on the **x-axis** and the right angle is at its peak. More formally, the **gradients** of heading towards the peak are \`1\` and \`-1\`, and the area is expressed as \`(yi)^2\`.

A mountain \`i\` is **visible** if there does not exist a mountain \`j\` such that \`i != j\`, \`xj - yj <= xi - yi\`, and \`xi + yi <= xj + yj\`.

Return the **number of visible mountains**.`,
  constraints: [
    '1 <= peaks.length <= 10^5',
    'peaks[i].length == 2',
    '1 <= xi, yi <= 10^5',
  ],
  examples: [
    {
      input: 'peaks = [[2,2],[6,3],[5,4]]',
      output: '2',
      explanation:
        'Intervals: [0,4],[3,9],[1,9]. Mountain [6,3] (interval [3,9]) is covered by [5,4] (interval [1,9]). Mountains [2,2] and [5,4] are visible.',
    },
    {
      input: 'peaks = [[1,3],[1,3]]',
      output: '0',
      explanation:
        'Both peaks have the same interval [-2,4]. Each hides the other, so neither is visible.',
    },
  ],
  hints: [
    'Level 1: Mountain i has "shadow" interval [xi-yi, xi+yi] on the x-axis. Mountain i is hidden if another interval completely contains it (lj<=li and ri<=rj).',
    'Level 2: Sort intervals by left endpoint ascending, right endpoint descending. Track maxR seen so far. If current r <= maxR, the mountain is hidden.',
    'Level 3: Duplicate intervals (same peak) hide each other — neither is visible. Use a frequency map to detect duplicates. Process unique intervals left-to-right, skipping duplicates and those with r <= maxR.',
  ],
  functionName: 'numberOfVisibleMountains',
  params: ['peaks'],
  starterCode: {
    javascript: `function numberOfVisibleMountains(peaks) {

}`,
    typescript: `function numberOfVisibleMountains(peaks: number[][]): number {

}`,
    python: `def numberOfVisibleMountains(peaks):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 2], [6, 3], [5, 4]]], expected: 2 },
    { args: [[[1, 3], [1, 3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[3, 3]]], expected: 1 },
    { args: [[[1, 2], [3, 4]]], expected: 1 },
    { args: [[[2, 1], [4, 2], [6, 3]]], expected: 3 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[1, 1], [2, 1], [3, 1]]], expected: 3 },
  ],
};
