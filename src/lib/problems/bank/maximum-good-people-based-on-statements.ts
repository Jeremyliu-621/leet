import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-good-people-based-on-statements',
  title: 'Maximum Good People Based on Statements',
  difficulty: 'hard',
  tags: ['arrays', 'backtracking'],
  description: `There are \`n\` people labeled from \`0\` to \`n - 1\`, and there is a rumor that exactly some of them are good.

You are given a 0-indexed integer array \`statements\` of size \`n x n\` where:
- \`statements[i][j] = 0\` means person \`i\` says person \`j\` is **bad**.
- \`statements[i][j] = 1\` means person \`i\` says person \`j\` is **good**.
- \`statements[i][j] = 2\` means person \`i\` has **not made a statement** about person \`j\`.

**Good people always tell the truth.** **Bad people can either lie or tell the truth.**

Return the **maximum** number of people who can be labeled **good** based on the given statements.`,
  constraints: [
    'n == statements.length == statements[i].length',
    '2 <= n <= 15',
    'statements[i][j] is 0, 1, or 2',
    'statements[i][i] = 2',
  ],
  examples: [
    {
      input: 'statements = [[2,1,2],[1,2,2],[2,0,2]]',
      output: '2',
      explanation:
        'Consider labeling people 0 and 1 as good. Person 0 says person 1 is good — consistent. Person 1 says person 0 is good — consistent. Person 2 says person 1 is bad — person 2 is bad, so this can be a lie. This is a valid configuration with 2 good people, which is the maximum.',
    },
    {
      input: 'statements = [[2,0],[0,2]]',
      output: '1',
      explanation:
        'If person 0 is good they say person 1 is bad, which is consistent. Max good people = 1. We cannot have both good since each says the other is bad.',
    },
  ],
  hints: [
    'Level 1: Enumerate all 2^n possible subsets of "good" people. For each subset, check if it is self-consistent: every person in the good subset must have all their non-2 statements match the subset.',
    'Level 2: A subset S is valid if for every i in S and every j where statements[i][j] != 2: statements[i][j] == 1 iff j is in S. Bad people (not in S) can say anything, so ignore their statements.',
    'Level 3: `function maximumGood(s) { const n=s.length; let best=0; for(let mask=1;mask<(1<<n);mask++) { let ok=true; for(let i=0;i<n&&ok;i++) { if(!(mask>>i&1)) continue; for(let j=0;j<n;j++) { if(s[i][j]===2) continue; if(s[i][j]===1 !== !!(mask>>j&1)) { ok=false; break; } } } if(ok) best=Math.max(best, (mask).toString(2).split("").filter(c=>c==="1").length); } return best; }`',
  ],
  functionName: 'maximumGood',
  params: ['statements'],
  starterCode: {
    javascript: `function maximumGood(statements) {
  const n = statements.length;
  let best = 0;
  for (let mask = 1; mask < (1 << n); mask++) {
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      if (!(mask >> i & 1)) continue;
      for (let j = 0; j < n; j++) {
        if (statements[i][j] === 2) continue;
        if ((statements[i][j] === 1) !== !!(mask >> j & 1)) { ok = false; break; }
      }
    }
    if (ok) { let c = 0, m = mask; while (m) { c += m & 1; m >>= 1; } best = Math.max(best, c); }
  }
  return best;
}`,
    typescript: `function maximumGood(statements: number[][]): number {
  const n = statements.length;
  let best = 0;
  for (let mask = 1; mask < (1 << n); mask++) {
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      if (!(mask >> i & 1)) continue;
      for (let j = 0; j < n; j++) {
        if (statements[i]![j] === 2) continue;
        if ((statements[i]![j] === 1) !== !!(mask >> j & 1)) { ok = false; break; }
      }
    }
    if (ok) { let c = 0, m = mask; while (m) { c += m & 1; m >>= 1; } best = Math.max(best, c); }
  }
  return best;
}`,
    python: `def maximumGood(statements):
    if hasattr(statements, 'to_py'): statements = statements.to_py()
    statements = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in statements]
    n = len(statements)
    best = 0
    for mask in range(1, 1 << n):
        ok = True
        for i in range(n):
            if not (mask >> i & 1): continue
            for j in range(n):
                if statements[i][j] == 2: continue
                if (statements[i][j] == 1) != bool(mask >> j & 1): ok = False; break
            if not ok: break
        if ok: best = max(best, bin(mask).count('1'))
    return best`,
  },
  visibleTests: [
    {
      args: [[[2,1,2],[1,2,2],[2,0,2]]],
      expected: 2,
    },
    {
      args: [[[2,0],[0,2]]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[[2,1],[1,2]]],
      expected: 2,
    },
    {
      args: [[[2,1,1,2],[1,2,1,2],[1,1,2,2],[0,0,0,2]]],
      expected: 3,
    },
    {
      args: [[[2]]],
      expected: 1,
    },
    {
      args: [[[2,0,0],[0,2,0],[0,0,2]]],
      expected: 1,
    },
    {
      args: [[[2,1,1],[1,2,1],[1,1,2]]],
      expected: 3,
    },
  ],
};
