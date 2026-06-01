import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-columns-to-make-sorted',
  title: 'Delete Columns to Make Sorted',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `You are given an array of \`n\` strings \`strs\`, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

- For example, \`strs = ["abc", "bce", "cae"]\` can be arranged as:
\`\`\`
abc
bce
cae
\`\`\`

You want to **delete** the columns that are **not sorted lexicographically**. In the above example (**0-indexed**), columns 0 (\`'a'\`, \`'b'\`, \`'c'\`) and 2 (\`'c'\`, \`'e'\`, \`'e'\`) are sorted, while column 1 (\`'b'\`, \`'c'\`, \`'a'\`) is not, so you would delete column 1.

Return the *number of columns you will delete*.`,
  constraints: [
    'n == strs.length',
    '1 <= n <= 100',
    '1 <= strs[i].length <= 1000',
    'strs[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'strs = ["cba","daf","ghi"]',
      output: '1',
      explanation:
        'Column 0: c,d,g (sorted). Column 1: b,a,h — b>a, not sorted, delete. Column 2: a,f,i (sorted). Total: 1 deletion.',
    },
    {
      input: 'strs = ["a","b"]',
      output: '0',
      explanation: 'Column 0: a,b — sorted. No deletions needed.',
    },
  ],
  hints: [
    'For each column index j, check every consecutive pair of rows i and i+1 to see if strs[i][j] <= strs[i+1][j].',
    'If any pair violates the sorted order, that column must be deleted.',
    'Count the number of columns that contain at least one violation.',
  ],
  functionName: 'minDeletionSize',
  params: ['strs'],
  starterCode: {
    javascript: `function minDeletionSize(strs) {
  let count = 0;
  for (let c = 0; c < strs[0].length; c++)
    for (let r = 1; r < strs.length; r++)
      if (strs[r][c] < strs[r-1][c]) { count++; break; }
  return count;
}`,
    typescript: `function minDeletionSize(strs: string[]): number {
  let count = 0;
  for (let c = 0; c < strs[0]!.length; c++)
    for (let r = 1; r < strs.length; r++)
      if (strs[r]![c]! < strs[r-1]![c]!) { count++; break; }
  return count;
}`,
    python: `def minDeletionSize(strs):
    strs = list(strs.to_py()) if hasattr(strs, 'to_py') else list(strs)
    count = 0
    for c in range(len(strs[0])):
        for r in range(1, len(strs)):
            if strs[r][c] < strs[r-1][c]:
                count += 1
                break
    return count`,
  },
  visibleTests: [
    { args: [['cba', 'daf', 'ghi']], expected: 1 },
    { args: [['a', 'b']], expected: 0 },
    { args: [['zyx', 'wvu', 'tsr']], expected: 3 },
    { args: [['abc', 'bce', 'cdf']], expected: 0 },
    { args: [['a', 'a', 'a']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['ba', 'ab']], expected: 1 },
    { args: [['xz', 'yz']], expected: 0 },
    { args: [['xyz', 'aaa', 'bbb']], expected: 3 },
    { args: [['aaaa', 'bbbb']], expected: 0 },
    { args: [['edcba', 'aeiou']], expected: 1 },
  ],
};
