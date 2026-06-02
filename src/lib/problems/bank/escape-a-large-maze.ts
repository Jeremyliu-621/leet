import type { Problem } from '../types';

export const problem: Problem = {
  id: 'escape-a-large-maze',
  title: 'Escape a Large Maze',
  difficulty: 'hard',
  tags: ['graph', 'hash-map'],
  description: `There is a 1 million by 1 million grid on an infinite plane. Given an array \`blocked\` of blocked cells and a \`source\` cell and a \`target\` cell, return \`true\` *if and only if it is possible to escape from \`source\` to \`target\` through the grid of non-blocked cells*.

Both \`source\` and \`target\` are not blocked. Moves can only be done in 4 directions (up, down, left, right).`,
  constraints: [
    '0 <= blocked.length <= 200',
    'blocked[i].length == 2',
    '0 <= blocked[i][j] < 10^6',
    'source.length == target.length == 2',
    '0 <= source[i][j], target[i][j] < 10^6',
    'source != target',
    'source and target are not in blocked.',
  ],
  examples: [
    {
      input: 'blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]',
      output: 'false',
      explanation: 'The target square is inaccessible starting from the source square because we cannot move upwards.',
    },
    {
      input: 'blocked = [], source = [0,0], target = [999999,999999]',
      output: 'true',
      explanation: 'Because there are no blocked cells, it is always possible to reach the target.',
    },
  ],
  hints: [
    'Level 1: n ≤ 200 blocked cells can enclose at most n*(n-1)/2 ≈ 20000 cells. Use this as a BFS exploration limit.',
    'Level 2: BFS from source: if you visit more than 20000 cells without being blocked in, source is not enclosed. Similarly BFS from target.',
    'Level 3: Return true iff BFS from source either directly reaches target OR exhausts the limit (source not enclosed) AND BFS from target also succeeds.',
  ],
  functionName: 'isEscapePossible',
  params: ['blocked', 'source', 'target'],
  starterCode: {
    javascript: `function isEscapePossible(blocked, source, target) {
  if (!blocked.length) return true;
  const LIMIT = Math.floor(blocked.length * blocked.length / 2);
  const blockedSet = new Set(blocked.map(([r, c]) => r + ',' + c));
  function bfs(start, end) {
    const [sr, sc] = start, [er, ec] = end;
    const visited = new Set([sr + ',' + sc]);
    const queue = [[sr, sc]];
    while (queue.length) {
      const [r, c] = queue.shift();
      if (r === er && c === ec) return true;
      if (visited.size > LIMIT) return true;
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= 1000000 || nc < 0 || nc >= 1000000) continue;
        const key = nr + ',' + nc;
        if (!blockedSet.has(key) && !visited.has(key)) {
          visited.add(key);
          queue.push([nr, nc]);
        }
      }
    }
    return visited.size > LIMIT;
  }
  return bfs(source, target) && bfs(target, source);
}`,
    typescript: `function isEscapePossible(blocked: number[][], source: number[], target: number[]): boolean {
  if (!blocked.length) return true;
  const LIMIT = Math.floor(blocked.length * blocked.length / 2);
  const blockedSet = new Set(blocked.map(([r, c]) => \`\${r},\${c}\`));
  function bfs(start: number[], end: number[]): boolean {
    const [sr, sc] = start, [er, ec] = end;
    const visited = new Set([\`\${sr},\${sc}\`]);
    const queue: number[][] = [[sr, sc]];
    while (queue.length) {
      const [r, c] = queue.shift()!;
      if (r === er && c === ec) return true;
      if (visited.size > LIMIT) return true;
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = r! + dr, nc = c! + dc;
        if (nr < 0 || nr >= 1000000 || nc < 0 || nc >= 1000000) continue;
        const key = \`\${nr},\${nc}\`;
        if (!blockedSet.has(key) && !visited.has(key)) {
          visited.add(key);
          queue.push([nr, nc]);
        }
      }
    }
    return visited.size > LIMIT;
  }
  return bfs(source, target) && bfs(target, source);
}`,
    python: `def isEscapePossible(blocked, source, target):
    if not blocked:
        return True
    LIMIT = len(blocked) * len(blocked) // 2
    blocked_set = set(map(tuple, blocked))
    def bfs(start, end):
        sr, sc = start
        er, ec = end
        visited = {(sr, sc)}
        queue = [(sr, sc)]
        head = 0
        while head < len(queue):
            r, c = queue[head]; head += 1
            if r == er and c == ec:
                return True
            if len(visited) > LIMIT:
                return True
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < 1000000 and 0 <= nc < 1000000:
                    if (nr, nc) not in blocked_set and (nr, nc) not in visited:
                        visited.add((nr, nc))
                        queue.append((nr, nc))
        return len(visited) > LIMIT
    return bfs(source, target) and bfs(target, source)`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]], [0, 0], [0, 2]], expected: false },
    { args: [[], [0, 0], [999999, 999999]], expected: true },
  ],
  hiddenTests: [
    { args: [[[0, 1], [1, 0]], [0, 0], [1, 1]], expected: false },
    { args: [[[0, 5], [1, 4], [2, 3], [3, 2], [4, 1], [5, 0]], [0, 0], [5, 5]], expected: false },
    { args: [[[5, 5]], [0, 0], [9, 9]], expected: true },
    { args: [[[0, 1]], [0, 0], [0, 2]], expected: true },
    { args: [[[0, 1], [1, 0], [1, 1]], [0, 0], [5, 5]], expected: false },
  ],
};
