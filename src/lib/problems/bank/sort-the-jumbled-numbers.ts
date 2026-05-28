import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-the-jumbled-numbers',
  title: 'Sort the Jumbled Numbers',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a 0-indexed integer array \`mapping\` which represents the mapping rule of a shuffled decimal system. \`mapping[i] = j\` means digit \`i\` should be mapped to digit \`j\` in this system.

You are also given another integer array \`nums\`. Return \`nums\` sorted in increasing order based on their **mapped** values. Ties should be resolved by maintaining the original relative order of the elements (i.e., the sort must be **stable**).

The **mapped value** of an integer is the new integer obtained by replacing each occurrence of digit \`d\` in the integer with \`mapping[d]\`.`,
  constraints: [
    'mapping.length == 10',
    '0 <= mapping[i] <= 9',
    '1 <= nums.length <= 3 * 10^4',
    '0 <= nums[i] < 10^9',
  ],
  examples: [
    {
      input: 'mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]',
      output: '[338,38,991]',
      explanation:
        '991 maps to 669; 338 maps to 007=7; 38 maps to 07=7. 338 and 38 have equal mapped values and 338 comes first originally, so [338,38,991].',
    },
    {
      input: 'mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]',
      output: '[123,456,789]',
      explanation: 'Identity mapping; sort by actual value.',
    },
  ],
  hints: [
    'For each number, compute its mapped value by replacing each digit using mapping[].',
    'Use a stable sort keyed by the mapped value.',
    `\`\`\`js
function sortJumbled(mapping, nums) {
  function mapped(n){
    return Number(n===0?mapping[0]:String(n).split("").map(d=>mapping[Number(d)]).join(""));
  }
  const indexed=nums.map((v,i)=>[v,i,mapped(v)]);
  indexed.sort((a,b)=>a[2]-b[2]||a[1]-b[1]);
  return indexed.map(([v])=>v);
}\`\`\``,
  ],
  functionName: 'sortJumbled',
  params: ['mapping', 'nums'],
  starterCode: {
    javascript: 'function sortJumbled(mapping, nums) {\n  \n}\n',
    python: 'def sortJumbled(mapping, nums):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]],
      expected: [338, 38, 991],
    },
    {
      args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]],
      expected: [123, 456, 789],
    },
    {
      args: [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
      expected: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    },
  ],
  hiddenTests: [
    {
      args: [[8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [0, 1, 2, 3]],
      expected: [3, 2, 0, 1],
    },
    {
      args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 1]],
      expected: [1, 2, 3],
    },
    {
      args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [5]],
      expected: [5],
    },
    {
      args: [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [9, 8, 7, 6, 5]],
      expected: [9, 8, 7, 6, 5],
    },
  ],
};
