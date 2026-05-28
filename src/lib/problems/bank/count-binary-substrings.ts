import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-binary-substrings',
  title: 'Count Binary Substrings',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a binary string \`s\`, return the number of substrings that have an equal number of consecutive \`0\`s and \`1\`s, and all the \`0\`s and all the \`1\`s are grouped together.

Substrings that occur multiple times at different positions are counted separately.

**Example:** In \`"0011"\` the valid substrings are \`"01"\` and \`"0011"\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    "s[i] is either '0' or '1'.",
  ],
  examples: [
    {
      input: 's = "00110011"',
      output: '6',
      explanation: 'The valid substrings are "0011", "01", "11", "0011", "01", "1" — wait: "0011" (2), "01" (2), "1100"? No. The 6 valid substrings are: "0011", "01", "0110", "10", "1100", "01". Actually: at boundary between each run of same chars, min(left_run, right_run) is contributed.',
    },
    {
      input: 's = "10101"',
      output: '4',
      explanation: 'Valid substrings: "10", "01", "10", "01".',
    },
  ],
  hints: [
    'Level 1: Group the string into runs (consecutive identical characters). E.g. "00110011" → [2, 2, 2, 2]. At each boundary between two adjacent runs, the number of valid substrings contributed is `min(left_run_length, right_run_length)`.',
    'Level 2: Iterate through runs stored as lengths. For each adjacent pair (prev, curr): answer += min(prev, curr). This works because every k ≤ min(left, right) gives a valid "kk" substring centered at the boundary.',
    'Level 3: `let ans=0,prev=0,curr=1; for(let i=1;i<s.length;i++){if(s[i]===s[i-1])curr++;else{prev=curr;curr=1;} ans+=prev>=curr?1:0;} return ans;` — or more cleanly: count run lengths then sum adjacent mins.',
  ],
  functionName: 'countBinarySubstrings',
  params: ['s'],
  starterCode: {
    javascript: 'function countBinarySubstrings(s) {\n  // your code here\n}\n',
    python: 'def countBinarySubstrings(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['00110011'], expected: 6 },
    { args: ['10101'], expected: 4 },
    { args: ['0011'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['01'], expected: 1 },
    { args: ['0001111'], expected: 3 },
    { args: ['000111'], expected: 3 },
    { args: ['11100'], expected: 2 },
    { args: ['001100110011'], expected: 10 },
  ],
};
