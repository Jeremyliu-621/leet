import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-a-string-into-groups-of-size-k',
  title: 'Divide a String Into Groups of Size k',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A string \`s\` can be partitioned into groups of size \`k\` using the following procedure:

- The first group consists of the first \`k\` characters of the string, the second group consists of the next \`k\` characters, and so on. Each character can only belong to **one** group.
- For the last group, if the string **does not** have \`k\` characters remaining, a character \`fill\` is used to complete the group.

Note that the partition is done so that after removing the \`fill\` character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be \`s\`.

Given the string \`s\`, the size of each group \`k\` and the character \`fill\`, return *a string array denoting the **composition of every group*** \`s\` *has been divided into, using the above procedure.*

**Approach:** Pad \`s\` to a multiple of \`k\` with \`fill\`, then slice into chunks of size \`k\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of lowercase English letters only.',
    '1 <= k <= 100',
    'fill is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "abcdefghi", k = 3, fill = "x"',
      output: '["abc","def","ghi"]',
      explanation: 'Divide into groups of 3: "abc", "def", "ghi".',
    },
    {
      input: 's = "abcdefghij", k = 3, fill = "x"',
      output: '["abc","def","ghi","jxx"]',
      explanation: '"j" needs 2 fill characters to make a group of 3.',
    },
  ],
  hints: [
    'Pad s with fill characters until its length is divisible by k, then split into groups of k.',
    '```js\nfunction divideString(s, k, fill) {\n  const rem = s.length % k;\n  if (rem) s += fill.repeat(k - rem);\n  const result = [];\n  for (let i = 0; i < s.length; i += k) result.push(s.slice(i, i+k));\n  return result;\n}\n```',
    `\`\`\`js
function divideString(s, k, fill) {
  while (s.length % k !== 0) s += fill;
  const res = [];
  for (let i = 0; i < s.length; i += k) res.push(s.slice(i, i+k));
  return res;
}\`\`\``,
  ],
  functionName: 'divideString',
  params: ['s', 'k', 'fill'],
  starterCode: {
    javascript: `function divideString(s, k, fill) {
  // return array of groups

}`,
    typescript: "function divideString(s: string, k: number, fill: string): string[] {\n  // return array of groups\n\n}",

    python: `def divideString(s: str, k: int, fill: str) -> list:
    # return array of groups
    pass
`,
  },
  visibleTests: [
    { args: ['abcdefghi', 3, 'x'], expected: ['abc', 'def', 'ghi'] },
    { args: ['abcdefghij', 3, 'x'], expected: ['abc', 'def', 'ghi', 'jxx'] },
  ],
  hiddenTests: [
    { args: ['a', 1, 'x'], expected: ['a'] },
    { args: ['a', 2, 'z'], expected: ['az'] },
    { args: ['abc', 3, 'x'], expected: ['abc'] },
    { args: ['abcd', 2, 'x'], expected: ['ab', 'cd'] },
    { args: ['abcde', 4, 'y'], expected: ['abcd', 'eyyy'] },
    { args: ['hello', 2, 'x'], expected: ['he', 'll', 'ox'] },
  ],
};
