import type { Problem } from '../types';

export const problem: Problem = {
  id: 'form-array-by-concatenating-subarrays-of-another-array',
  title: 'Form Array by Concatenating Subarrays of Another Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a 2D integer array \`groups\` of length \`n\`. You are also given an integer array \`nums\`.

You are asked if you can choose \`n\` **disjoint** subarrays from the array \`nums\` such that the \`i\`th subarray is equal to \`groups[i]\` (**0-indexed**), and if \`i > 0\`, the \`(i-1)\`th subarray appears **before** the \`i\`th subarray in \`nums\` (i.e., the subarrays must be non-overlapping and in order).

Return \`true\` if you can do this task, and \`false\` otherwise.

Note that the subarrays are **disjoint** if and only if they do not share any element (index). Subarrays are allowed to be adjacent.`,
  constraints: [
    'groups.length == n',
    '1 <= n <= 10^3',
    '1 <= groups[i].length, sum(groups[i].length) <= 10^3',
    '1 <= nums.length <= 10^3',
    '-10^7 <= groups[i][j], nums[k] <= 10^7',
  ],
  examples: [
    {
      input: 'groups = [[1,-1,-1],[3,-2,0]], nums = [1,-1,-1,3,-2,0]',
      output: 'true',
      explanation: 'We can choose subarrays nums[0..2] = [1,-1,-1] and nums[3..5] = [3,-2,0].',
    },
    {
      input: 'groups = [[10,-2],[1,2,3,4]], nums = [1,2,3,4,10,-2]',
      output: 'false',
      explanation: '[10,-2] must appear before [1,2,3,4] in nums, but 10 appears after 1 in nums.',
    },
    {
      input: 'groups = [[1,2],[3,4]], nums = [5,1,2,3,4,5]',
      output: 'true',
      explanation: 'nums[1..2] = [1,2] matches groups[0], then nums[3..4] = [3,4] matches groups[1]. Both are disjoint.',
    },
  ],
  hints: [
    'Greedily match each group to the earliest possible subarray in nums.',
    'For each group, scan nums from the current position looking for a match; advance the pointer past the match.',
    'A subarray match check is O(|group|); overall O(n * m) is fine given the constraints.',
  ],
  functionName: 'canChoose',
  params: ['groups', 'nums'],
  starterCode: {
    javascript: `function canChoose(groups, nums) {
  let pos = 0;
  for (const g of groups) {
    let found = false;
    while (pos + g.length <= nums.length) {
      if (g.every((v, i) => nums[pos + i] === v)) { pos += g.length; found = true; break; }
      pos++;
    }
    if (!found) return false;
  }
  return true;
}`,
    typescript: `function canChoose(groups: number[][], nums: number[]): boolean {
  let pos = 0;
  for (const g of groups) {
    let found = false;
    while (pos + g.length <= nums.length) {
      if (g.every((v, i) => nums[pos + i] === v)) { pos += g.length; found = true; break; }
      pos++;
    }
    if (!found) return false;
  }
  return true;
}`,
    python: `def canChoose(groups, nums):
    pos = 0
    for g in groups:
        found = False
        while pos + len(g) <= len(nums):
            if nums[pos:pos+len(g)] == g: pos += len(g); found = True; break
            pos += 1
        if not found: return False
    return True`,
  },
  visibleTests: [
    { args: [[[1,-1,-1],[3,-2,0]], [1,-1,-1,3,-2,0]], expected: true },
    { args: [[[10,-2],[1,2,3,4]], [1,2,3,4,10,-2]], expected: false },
    { args: [[[1,2],[3,4]], [5,1,2,3,4,5]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1]], [1]], expected: true },
    { args: [[[1],[2]], [1,2]], expected: true },
    { args: [[[1],[2]], [2,1]], expected: false },
    { args: [[[1,2]], [1,1,2]], expected: true },
    { args: [[[1,2],[1,2]], [1,2,1,2]], expected: true },
    { args: [[[1,2],[1,2]], [1,2]], expected: false },
  ],
};
