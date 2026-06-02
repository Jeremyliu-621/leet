import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-duplicate-file-in-system',
  title: 'Find Duplicate File in System',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a list \`paths\` of directory info, find all the groups of **duplicate files** in the file system in terms of their paths. A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format: \`"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fk.txt(fk_content)"\`

It means there are \`k\` files (\`f1.txt\`, \`f2.txt\` ... \`fk.txt\`) with content \`f1_content\`, \`f2_content\` ... \`fk_content\` respectively in the directory \`root/d1/d2/.../dm\`. Note that \`n >= 1\` and \`k >= 1\`.

Return a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string like \`"directory/file.txt"\`. You may return the answer in **any order**.

**Example:**
\`\`\`
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
\`\`\``,
  examples: [
    {
      input: '["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]',
      output: '[["root/4.txt","root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]',
    },
    {
      input: '["root/a 1.txt(abcd)","root/c 2.txt(efgh)"]',
      output: '[]',
    },
  ],
  constraints: [
    '1 <= paths.length <= 2 * 10^4',
    '1 <= paths[i].length <= 3000',
    '1 <= sum of paths[i].length <= 5 * 10^5',
    'paths[i] consist of English letters, digits, \'/\', \'.\', \'(\', \')\', and \' \'.',
    'No two files have the same path.',
    'There is at least one file in each directory.',
    'The extension of the files is always .txt.',
  ],
  hints: [
    'Split each path string by spaces: first token is the directory, rest are "filename(content)" entries.',
    'Parse each file entry to extract name and content, then map content → list of full paths.',
    'Return groups where the list length >= 2. Sort inner groups for determinism.',
  ],
  functionName: 'findDuplicate',
  params: ['paths'],
  starterCode: {
    javascript: `function findDuplicate(paths) {
  const map = new Map();
  for (const p of paths) {
    const parts = p.split(' ');
    const dir = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const m = parts[i].match(/^(.+)\((.+)\)$/);
      if (!m) continue;
      const content = m[2];
      if (!map.has(content)) map.set(content, []);
      map.get(content).push(\`\${dir}/\${m[1]}\`);
    }
  }
  const res = [];
  for (const g of map.values()) if (g.length >= 2) res.push([...g].sort());
  return res.sort((a, b) => a[0] < b[0] ? -1 : 1);
}`,
    typescript: `function findDuplicate(paths: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const p of paths) {
    const parts = p.split(' ');
    const dir = parts[0]!;
    for (let i = 1; i < parts.length; i++) {
      const m = parts[i]!.match(/^(.+)\((.+)\)$/);
      if (!m) continue;
      const content = m[2]!;
      if (!map.has(content)) map.set(content, []);
      map.get(content)!.push(\`\${dir}/\${m[1]!}\`);
    }
  }
  const res: string[][] = [];
  for (const g of map.values()) if (g.length >= 2) res.push([...g].sort());
  return res.sort((a, b) => (a[0] ?? '').localeCompare(b[0] ?? ''));
}`,
    python: `def findDuplicate(paths):
    from collections import defaultdict
    content_map = defaultdict(list)
    for p in paths:
        parts = p.split(' ')
        directory = parts[0]
        for entry in parts[1:]:
            paren = entry.index('(')
            name, content = entry[:paren], entry[paren+1:-1]
            content_map[content].append(f'{directory}/{name}')
    return sorted([sorted(g) for g in content_map.values() if len(g) >= 2])`,
  },
  visibleTests: [
    {
      args: [['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)']],
      expected: [['root/4.txt','root/a/2.txt','root/c/d/4.txt'],['root/a/1.txt','root/c/3.txt']],
    },
    {
      args: [['root/a 1.txt(abcd)', 'root/c 2.txt(efgh)']],
      expected: [],
    },
  ],
  hiddenTests: [
    {
      args: [['root 1.txt(a) 2.txt(b) 3.txt(a)']],
      expected: [['root/1.txt','root/3.txt']],
    },
  ],
};
