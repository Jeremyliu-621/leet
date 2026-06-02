import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-convert-string-ii',
  title: 'Minimum Cost to Convert String II',
  difficulty: 'hard',
  tags: ['strings', 'graph', 'dynamic-programming'],
  description: `You are given two **0-indexed** strings \`source\` and \`target\`, both of length \`n\`. You are also given two **0-indexed** string arrays \`original\` and \`changed\`, and an integer array \`cost\`, where \`cost[i]\` represents the cost of changing the substring \`original[i]\` to the substring \`changed[i]\`.

You start with the string \`source\`. In one operation, you can pick a substring \`source[i..j]\` and if it equals some \`original[k]\`, replace it with \`changed[k]\`, paying cost \`cost[k]\`.

Your goal is to convert \`source\` to \`target\`. Return the **minimum total cost** required, or \`-1\` if it is impossible.

> **Note:** Unlike version I, the replacements are **substring-level** (not character-level), so the same position can only be covered by one replacement at a time.`,
  constraints: [
    '`1 <= source.length == target.length <= 1000`',
    '`source` and `target` consist only of lowercase English letters.',
    '`1 <= cost.length == original.length == changed.length <= 100`',
    '`1 <= original[i].length == changed[i].length <= source.length`',
    '`original[i]`, `changed[i]` consist only of lowercase English letters.',
    '`1 <= cost[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]',
      output: '28',
      explanation: 'Convert "abcd" → "acbe" using a series of single-character substitutions with total cost 28.',
    },
    {
      input: 'source = "abcdefgh", target = "acdeeghh", original = ["bcd","fgh","thh"], changed = ["cde","thh","ghh"], cost = [1,3,5]',
      output: '9',
      explanation: 'Apply bcd→cde (cost 1) and fgh→thh→ghh (cost 3+5=8). Total = 9.',
    },
    {
      input: 'source = "abcdefgh", target = "addddddd", original = ["bcd","defgh"], changed = ["ddd","ddddd"], cost = [100,1578]',
      output: '-1',
      explanation: 'No combination of replacements can convert source to target.',
    },
  ],
  hints: [
    'Collect all distinct substrings from `original` and `changed`. Assign each an integer ID. Build a weighted graph where edge (u→v) has minimum cost among all operations mapping original[i]→changed[i] with the same (u,v) IDs.',
    'Run Floyd-Warshall on this graph to find shortest (minimum-cost) paths between all pairs.',
    'Use DP: `dp[i]` = minimum cost to convert `source[0..i-1]` to `target[0..i-1]`. For each ending index `i`, try all lengths `len` of substrings: if `source[i-len..i-1]` and `target[i-len..i-1]` both have IDs and a path exists between them, update `dp[i] = min(dp[i], dp[i-len] + dist[sourceId][targetId])`. If `source[i-len..i-1] == target[i-len..i-1]`, also allow `dp[i] = dp[i-len]`.',
  ],
  functionName: 'minimumCost',
  params: ['source', 'target', 'original', 'changed', 'cost'],
  starterCode: {
    javascript: `function minimumCost(source, target, original, changed, cost) {
  const n = source.length;
  const strId = new Map();
  const getId = s => { if (!strId.has(s)) strId.set(s, strId.size); return strId.get(s); };
  for (const s of original) getId(s);
  for (const s of changed) getId(s);
  const m = strId.size;
  const INF = Infinity;
  const dist = Array.from({length: m}, (_, i) => { const r = new Array(m).fill(INF); r[i] = 0; return r; });
  for (let k = 0; k < original.length; k++) {
    const u = getId(original[k]), v = getId(changed[k]);
    if (cost[k] < dist[u][v]) dist[u][v] = cost[k];
  }
  for (let k=0;k<m;k++) for (let i=0;i<m;i++) for (let j=0;j<m;j++)
    if (dist[i][k]<INF&&dist[k][j]<INF&&dist[i][k]+dist[k][j]<dist[i][j]) dist[i][j]=dist[i][k]+dist[k][j];
  const dp = new Array(n + 1).fill(INF); dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let len = 1; len <= i; len++) {
      if (dp[i - len] === INF) continue;
      const src = source.slice(i - len, i), tgt = target.slice(i - len, i);
      if (src === tgt) { if (dp[i - len] < dp[i]) dp[i] = dp[i - len]; continue; }
      if (!strId.has(src) || !strId.has(tgt)) continue;
      const u = strId.get(src), v = strId.get(tgt), c = dist[u][v];
      if (c < INF && dp[i - len] + c < dp[i]) dp[i] = dp[i - len] + c;
    }
  }
  return dp[n] === INF ? -1 : dp[n];
}`,
    typescript: `function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
  const n = source.length;
  const strId = new Map<string, number>();
  const getId = (s: string): number => { if (!strId.has(s)) strId.set(s, strId.size); return strId.get(s)!; };
  for (const s of original) getId(s);
  for (const s of changed) getId(s);
  const m = strId.size;
  const INF = Infinity;
  const dist = Array.from({length: m}, (_, i) => { const r = new Array<number>(m).fill(INF); r[i] = 0; return r; });
  for (let k = 0; k < original.length; k++) {
    const u = getId(original[k]!), v = getId(changed[k]!);
    if (cost[k]! < dist[u]![v]!) dist[u]![v] = cost[k]!;
  }
  for (let k=0;k<m;k++) for (let i=0;i<m;i++) for (let j=0;j<m;j++)
    if (dist[i]![k]!<INF&&dist[k]![j]!<INF&&dist[i]![k]!+dist[k]![j]!<dist[i]![j]!) dist[i]![j]=dist[i]![k]!+dist[k]![j]!;
  const dp = new Array<number>(n + 1).fill(INF); dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let len = 1; len <= i; len++) {
      if (dp[i - len]! === INF) continue;
      const src = source.slice(i - len, i), tgt = target.slice(i - len, i);
      if (src === tgt) { if (dp[i - len]! < dp[i]!) dp[i] = dp[i - len]!; continue; }
      if (!strId.has(src) || !strId.has(tgt)) continue;
      const u = strId.get(src)!, v = strId.get(tgt)!, c = dist[u]![v]!;
      if (c < INF && dp[i - len]! + c < dp[i]!) dp[i] = dp[i - len]! + c;
    }
  }
  return dp[n]! === INF ? -1 : dp[n]!;
}`,
    python: `def minimumCost(source, target, original, changed, cost):
    if hasattr(source, 'to_py'): source = str(source)
    if hasattr(target, 'to_py'): target = str(target)
    if hasattr(original, 'to_py'): original = [str(x) for x in original.to_py()]
    if hasattr(changed, 'to_py'): changed = [str(x) for x in changed.to_py()]
    if hasattr(cost, 'to_py'): cost = list(cost.to_py())
    n = len(source)
    str_id = {}
    def get_id(s):
        if s not in str_id: str_id[s] = len(str_id)
        return str_id[s]
    for s in original: get_id(s)
    for s in changed: get_id(s)
    m = len(str_id)
    INF = float('inf')
    dist = [[INF] * m for _ in range(m)]
    for i in range(m): dist[i][i] = 0
    for k in range(len(original)):
        u, v = get_id(original[k]), get_id(changed[k])
        if cost[k] < dist[u][v]: dist[u][v] = cost[k]
    for k in range(m):
        for i in range(m):
            for j in range(m):
                if dist[i][k] < INF and dist[k][j] < INF and dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    dp = [INF] * (n + 1); dp[0] = 0
    for i in range(1, n + 1):
        for l in range(1, i + 1):
            if dp[i - l] == INF: continue
            src = source[i-l:i]; tgt = target[i-l:i]
            if src == tgt:
                if dp[i - l] < dp[i]: dp[i] = dp[i - l]
                continue
            if src not in str_id or tgt not in str_id: continue
            u, v = str_id[src], str_id[tgt]; c = dist[u][v]
            if c < INF and dp[i - l] + c < dp[i]: dp[i] = dp[i - l] + c
    return -1 if dp[n] == INF else dp[n]`,
  },
  visibleTests: [
    {
      args: ['abcd', 'acbe', ['a','b','c','c','e','d'], ['b','c','b','e','b','e'], [2,5,5,1,2,20]],
      expected: 28,
    },
    {
      args: ['abcdefgh', 'acdeeghh', ['bcd','fgh','thh'], ['cde','thh','ghh'], [1,3,5]],
      expected: 9,
    },
    {
      args: ['abcdefgh', 'addddddd', ['bcd','defgh'], ['ddd','ddddd'], [100,1578]],
      expected: -1,
    },
  ],
  hiddenTests: [
    {
      args: ['aaaa', 'bbbb', ['a','aa','aaa','aaaa'], ['b','bb','bbb','bbbb'], [1,2,3,4]],
      expected: 4,
    },
    {
      args: ['abc', 'abc', ['a'], ['b'], [1]],
      expected: 0,
    },
    {
      args: ['abcd', 'efgh', ['abcd'], ['efgh'], [10]],
      expected: 10,
    },
    {
      args: ['ab', 'cd', ['a','b'], ['c','d'], [5,5]],
      expected: 10,
    },
  ],
};
