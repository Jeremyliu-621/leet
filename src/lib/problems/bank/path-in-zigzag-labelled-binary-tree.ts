import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-in-zigzag-labelled-binary-tree',
  title: 'Path in Zigzag Labelled Binary Tree',
  difficulty: 'medium',
  tags: ['math', 'tree'],
  description: `In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even rows (second, fourth, sixth,...), the labelling is right to left.

Given the \`label\` of a node in this tree, return the labels in the path from the root of the tree to the node with that \`label\`.`,
  constraints: [
    '1 <= label <= 10^6',
  ],
  examples: [
    {
      input: 'label = 14',
      output: '[1,3,4,14]',
      explanation: 'Level 4 (right-to-left): ...,14,... parent at level 3 is 4, whose parent at level 2 is 3, root is 1.',
    },
    {
      input: 'label = 26',
      output: '[1,2,6,10,26]',
    },
  ],
  hints: [
    'Level 1: Find which level the label is on: level = floor(log2(label)) + 1. The min/max labels at that level are 2^(level-1) and 2^level - 1.',
    'Level 2: Since adjacent levels have opposite directions, the parent\'s label can be found by first mirroring the current label within its level (min + max - label), then taking floor divided by 2.',
    'Level 3: Repeat until you reach the root (level 1). Prepend each label as you go up.',
  ],
  functionName: 'pathInZigZagTree',
  params: ['label'],
  starterCode: {
    javascript: `function pathInZigZagTree(label) {
  let level = Math.floor(Math.log2(label)) + 1;
  const path = [];
  while (level >= 1) {
    path.unshift(label);
    const minL = 1 << (level - 1);
    const maxL = (1 << level) - 1;
    label = (minL + maxL - label) >> 1;
    level--;
  }
  return path;
}`,
    typescript: `function pathInZigZagTree(label: number): number[] {
  let level = Math.floor(Math.log2(label)) + 1;
  const path: number[] = [];
  while (level >= 1) {
    path.unshift(label);
    const minL = 1 << (level - 1);
    const maxL = (1 << level) - 1;
    label = (minL + maxL - label) >> 1;
    level--;
  }
  return path;
}`,
    python: `def pathInZigZagTree(label):
    label = int(label)
    import math
    level = int(math.log2(label)) + 1
    path = []
    while level >= 1:
        path.append(label)
        min_l = 1 << (level - 1)
        max_l = (1 << level) - 1
        label = (min_l + max_l - label) >> 1
        level -= 1
    return path[::-1]`,
  },
  visibleTests: [
    { args: [14], expected: [1, 3, 4, 14] },
    { args: [26], expected: [1, 2, 6, 10, 26] },
  ],
  hiddenTests: [
    { args: [1], expected: [1] },
    { args: [2], expected: [1, 2] },
    { args: [3], expected: [1, 3] },
    { args: [7], expected: [1, 2, 7] },
    { args: [12], expected: [1, 3, 5, 12] },
  ],
};
