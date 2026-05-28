import type { Problem } from '../types';

const JS_PREAMBLE = `
function accountsMergeRunner(accounts) {
  const r = accountsMerge(accounts.map(a => [...a]));
  return r.map(a => [a[0], ...a.slice(1).sort()]).sort((a, b) => {
    if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
    if (a[1] !== b[1]) return a[1] < b[1] ? -1 : 1;
    return 0;
  });
}
`.trim();

const PY_PREAMBLE = `
def accountsMergeRunner(accounts):
    r = accountsMerge([list(a) for a in accounts])
    return sorted([[a[0]] + sorted(a[1:]) for a in r], key=lambda a: (a[0], a[1] if len(a) > 1 else ''))
`.trim();

export const problem: Problem = {
  id: 'accounts-merge',
  title: 'Accounts Merge',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given a list of \`accounts\` where each element \`accounts[i]\` is a list of strings, where \`accounts[i][0]\` is a name, and the rest of the elements are **emails** representing emails of the account.

Merge accounts that belong to the same person. Two accounts are in the same person if there is some common email. Return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails **in sorted order**.

> **Note:** The \`accountsMergeRunner\` wrapper normalizes the output order for comparison. Implement \`accountsMerge(accounts)\`.`,
  constraints: [
    '1 <= accounts.length <= 1000',
    '2 <= accounts[i].length <= 10',
    '1 <= accounts[i][j].length <= 30',
    'accounts[i][0] consists of English letters',
    'accounts[i][j] (j > 0) is a valid email',
  ],
  examples: [
    {
      input:
        'accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
      output:
        '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["John","johnnybravo@mail.com"],["Mary","mary@mail.com"]]',
      explanation:
        'The first and second John accounts have a common email (johnsmith@mail.com), so they are merged. The fourth John has no common email with others.',
    },
    {
      input:
        'accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co"]]',
      output:
        '[["Ethan","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co"]]',
    },
  ],
  hints: [
    'Use Union-Find (DSU): treat each email as a node. For each account, union the first email with every other email in the same account.',
    'After union operations, group all emails by their root representative. Reconstruct each merged account using the name associated with any email in that group.',
    'Alternatively, use a graph approach: build an adjacency list where emails in the same account are connected, then run DFS/BFS to find connected components.',
  ],
  functionName: 'accountsMergeRunner',
  params: ['accounts'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function accountsMerge(accounts) {\n  \n}\n',
    python: 'def accountsMerge(accounts):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
          ['John', 'johnsmith@mail.com', 'john00@mail.com'],
          ['Mary', 'mary@mail.com'],
          ['John', 'johnnybravo@mail.com'],
        ],
      ],
      expected: [
        ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
        ['John', 'johnnybravo@mail.com'],
        ['Mary', 'mary@mail.com'],
      ],
    },
    {
      args: [
        [
          ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
          ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co'],
          ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co'],
        ],
      ],
      expected: [
        ['Ethan', 'Ethan4@m.co', 'Ethan5@m.co'],
        ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
        ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co'],
      ],
    },
  ],
  hiddenTests: [
    {
      args: [[['Alice', 'alice@example.com'], ['Bob', 'bob@example.com']]],
      expected: [
        ['Alice', 'alice@example.com'],
        ['Bob', 'bob@example.com'],
      ],
    },
    {
      args: [
        [
          ['David', 'David0@m.co', 'David1@m.co'],
          ['David', 'David3@m.co', 'David4@m.co'],
          ['David', 'David4@m.co', 'David5@m.co'],
        ],
      ],
      expected: [
        ['David', 'David0@m.co', 'David1@m.co'],
        ['David', 'David3@m.co', 'David4@m.co', 'David5@m.co'],
      ],
    },
  ],
};
