import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-pairs-of-strings-with-concatenation-equal-to-target',
  title: 'Number of Pairs of Strings With Concatenation Equal to Target',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'strings'],
  description: `Given an array of digit strings \`nums\` and a digit string \`target\`, return *the number of pairs of indices* \`(i, j)\` *(where* \`i != j\`*) such that the concatenation of* \`nums[i] + nums[j]\` *equals* \`target\`.

**Approach:** Use a frequency map of nums. For each string in nums, check if target starts with it (i.e., target with that prefix removed is also in nums). Carefully handle the case where the prefix and suffix are identical strings.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i].length <= 100',
    '2 <= target.length <= 100',
    'nums[i] and target consist of digits.',
  ],
  examples: [
    {
      input: 'nums = ["777","7","77","77"], target = "7777"',
      output: '4',
      explanation: 'Valid pairs (i,j): (0,1),(1,0),(2,3),(3,2).',
    },
    {
      input: 'nums = ["123","4","12","34"], target = "1234"',
      output: '2',
      explanation: 'Pairs (0,1) → "1234" and (2,3) → "1234".',
    },
  ],
  hints: [
    'For each pair of distinct indices i,j check if nums[i]+nums[j] === target. O(n²) is fine.',
    '```js\nfunction numOfPairs(nums, target) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++)\n    for (let j = 0; j < nums.length; j++)\n      if (i !== j && nums[i] + nums[j] === target) count++;\n  return count;\n}\n```',
  ],
  functionName: 'numOfPairs',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function numOfPairs(nums, target) {
  // return count of pairs

}`,
    python: `def numOfPairs(nums: list, target: str) -> int:
    # return count of pairs
    pass
`,
  },
  visibleTests: [
    { args: [['777', '7', '77', '77'], '7777'], expected: 4 },
    { args: [['123', '4', '12', '34'], '1234'], expected: 2 },
  ],
  hiddenTests: [
    { args: [['1', '1', '1'], '11'], expected: 6 },
    { args: [['12', '3', '123', '45'], '123'], expected: 1 },
    { args: [['1', '2', '3'], '12'], expected: 1 },
    { args: [['5', '5', '55', '5'], '555'], expected: 6 },
    { args: [['1', '23', '123'], '123'], expected: 1 },
  ],
};
