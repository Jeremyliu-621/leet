import type { Problem } from '../types';

export const problem: Problem = {
  id: 'container-with-most-water',
  title: 'Container With Most Water',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`th line are at \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water the container can store.

The container cannot be tilted. Water is bounded by the shorter of the two chosen lines.`,
  constraints: [
    '2 <= height.length <= 1000',
    '0 <= height[i] <= 1000',
  ],
  examples: [
    {
      input: 'height = [1,8,6,2,5,4,8,3,7]',
      output: '49',
      explanation: 'Lines at index 1 (height 8) and index 8 (height 7) form a container of width 7 and height min(8,7)=7, giving 49.',
    },
    {
      input: 'height = [1,1]',
      output: '1',
      explanation: 'Only two lines, both height 1, width 1, so area = 1.',
    },
    {
      input: 'height = [4,3,2,1,4]',
      output: '16',
      explanation: 'Lines at index 0 and 4 (both height 4), width 4, area = 16.',
    },
  ],
  hints: [
    'The area is determined by the shorter line and the distance between the two lines. Moving the longer line inward can never increase area — think about which pointer to move.',
    'Use two pointers at both ends. At each step, compute area = min(height[left], height[right]) * (right - left). Move whichever pointer points to the shorter line inward.',
    '`let left = 0, right = height.length - 1, max = 0; while (left < right) { max = Math.max(max, Math.min(height[left], height[right]) * (right - left)); if (height[left] < height[right]) left++; else right--; } return max;`',
  ],
  functionName: 'containerWithMostWater',
  params: ['height'],
  starterCode: {
    javascript: `function containerWithMostWater(height) {
  let left = 0, right = height.length - 1, max = 0;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) left++; else right--;
  }
  return max;
}`,
    typescript: `function containerWithMostWater(height: number[]): number {
  let left = 0, right = height.length - 1, max = 0;
  while (left < right) {
    max = Math.max(max, Math.min(height[left]!, height[right]!) * (right - left));
    if (height[left]! < height[right]!) left++; else right--;
  }
  return max;
}`,
    python: `def containerWithMostWater(height):
    height = list(height.to_py()) if hasattr(height, 'to_py') else list(height)
    left, right, mx = 0, len(height)-1, 0
    while left < right:
        mx = max(mx, min(height[left], height[right]) * (right - left))
        if height[left] < height[right]: left += 1
        else: right -= 1
    return mx`,
  },
  visibleTests: [
    { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { args: [[1, 1]], expected: 1 },
    { args: [[4, 3, 2, 1, 4]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 3, 4, 5, 18, 17, 6]], expected: 17 },
    { args: [[1, 2, 1]], expected: 2 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[3, 1, 2, 4, 5]], expected: 12 },
    { args: [[10, 1, 1, 1, 10]], expected: 40 },
  ],
};
