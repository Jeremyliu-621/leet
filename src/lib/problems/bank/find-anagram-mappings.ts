import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-anagram-mappings',
  title: 'Find Anagram Mappings',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` where \`nums2\` is an anagram of \`nums1\`. Both arrays may contain duplicates.

Return an index mapping array \`mapping\` from \`nums1\` to \`nums2\` where \`mapping[i] = j\` means the \`i\`th element in \`nums1\` appears in \`nums2\` at index \`j\`. If there are multiple answers, return **any** of them.`,
  constraints: [
    '`1 <= nums1.length <= 100`',
    '`nums2.length == nums1.length`',
    '`0 <= nums1[i], nums2[i] <= 10^5`',
    '`nums2\` is an anagram of \`nums1\`.',
  ],
  examples: [
    {
      input: 'nums1 = [12,28,46,32,50], nums2 = [50,12,32,46,28]',
      output: '[1,4,3,2,0]',
      explanation: 'nums1[0]=12 appears at nums2[1]=12, nums1[1]=28 appears at nums2[4]=28, etc.',
    },
    {
      input: 'nums1 = [84,46], nums2 = [84,46]',
      output: '[0,1]',
    },
  ],
  hints: [
    'Build a hash map from value to index in `nums2`. For each element in `nums1`, look up its index in the map.',
    'If there are duplicates, store lists of indices and pop one off per lookup to ensure correctness.',
    `\`\`\`js
function anagramMappings(nums1, nums2) {
  const pos = {};
  nums2.forEach((v,i) => pos[v] = i);
  return nums1.map(v => pos[v]);
}\`\`\``,
  ],
  functionName: 'anagramMappings',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: `function anagramMappings(nums1, nums2) {

}`,
    typescript: "function anagramMappings(nums1: number[], nums2: number[]): number[] {\n\n}",

    python: `def anagramMappings(nums1, nums2):
    pass`,
  },
  visibleTests: [
    { args: [[12, 28, 46, 32, 50], [50, 12, 32, 46, 28]], expected: [1, 4, 3, 2, 0] },
    { args: [[84, 46], [84, 46]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [0] },
    { args: [[1, 2, 3], [3, 2, 1]], expected: [2, 1, 0] },
    { args: [[5, 10, 15], [15, 10, 5]], expected: [2, 1, 0] },
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: [0, 1, 2, 3, 4] },
  ],
};
