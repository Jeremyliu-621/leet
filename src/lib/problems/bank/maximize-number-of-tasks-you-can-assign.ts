import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-number-of-tasks-you-can-assign',
  title: 'Maximize Number of Tasks You Can Assign',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You have \`n\` tasks and \`m\` workers. Each task has a strength requirement stored in a **0-indexed** integer array \`tasks\`, with the \`i\`th task requiring \`tasks[i]\` strength to complete. Each worker has a strength stored in a **0-indexed** integer array \`workers\`, where the \`j\`th worker has strength \`workers[j]\`. Each worker can complete at most one task, and a task can be assigned to at most one worker. A worker can take a **magic pill** (at most one) that increases strength by \`strength\` for one task. You have \`pills\` magic pills.

Return the **maximum** number of tasks that can be assigned to workers.`,
  constraints: [
    'n == tasks.length',
    'm == workers.length',
    '1 <= n, m <= 5 * 10^4',
    '0 <= pills <= m',
    '0 <= tasks[i], workers[j], strength <= 10^9',
  ],
  examples: [
    {
      input: 'tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1',
      output: '3',
      explanation: 'Worker 0 takes pill (0+1=1 >= task 1). Worker 1 takes task 2. Worker 2 takes task 3.',
    },
    {
      input: 'tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5',
      output: '1',
    },
  ],
  hints: [
    'Binary search on the answer k (how many tasks to complete).',
    'For a given k: take the k easiest tasks and k strongest workers.',
    'Greedily assign: for each task (hardest first), try the strongest non-pill worker; if not enough, give the weakest eligible pill-worker.',
  ],
  functionName: 'maxTaskAssign',
  params: ['tasks', 'workers', 'pills', 'strength'],
  starterCode: {
    javascript: `function maxTaskAssign(tasks, workers, pills, strength) {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);
  const n = tasks.length, m = workers.length;
  function canDo(k) {
    const ws = workers.slice(m - k);
    let pillsLeft = pills;
    for (let i = k - 1; i >= 0; i--) {
      const t = tasks[i];
      if (ws[ws.length - 1] >= t) { ws.pop(); continue; }
      if (!pillsLeft) return false;
      const need = t - strength;
      let lo = 0, hi = ws.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (ws[mid] >= need) hi = mid; else lo = mid + 1; }
      if (lo === ws.length) return false;
      ws.splice(lo, 1); pillsLeft--;
    }
    return true;
  }
  let lo = 0, hi = Math.min(n, m);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canDo(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);
  const n = tasks.length, m = workers.length;
  function canDo(k: number): boolean {
    const ws = workers.slice(m - k);
    let pillsLeft = pills;
    for (let i = k - 1; i >= 0; i--) {
      const t = tasks[i]!;
      if (ws[ws.length - 1]! >= t) { ws.pop(); continue; }
      if (!pillsLeft) return false;
      const need = t - strength;
      let lo = 0, hi = ws.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (ws[mid]! >= need) hi = mid; else lo = mid + 1; }
      if (lo === ws.length) return false;
      ws.splice(lo, 1); pillsLeft--;
    }
    return true;
  }
  let lo = 0, hi = Math.min(n, m);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canDo(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    python: `def maxTaskAssign(tasks, workers, pills, strength):
    from sortedcontainers import SortedList
    tasks.sort(); workers.sort()
    n, m = len(tasks), len(workers)
    def can_do(k):
        ws = SortedList(workers[m - k:])
        pills_left = pills
        for i in range(k - 1, -1, -1):
            t = tasks[i]
            if ws[-1] >= t: ws.pop(-1); continue
            if not pills_left: return False
            idx = ws.bisect_left(t - strength)
            if idx == len(ws): return False
            ws.pop(idx); pills_left -= 1
        return True
    lo, hi = 0, min(n, m)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_do(mid): lo = mid
        else: hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[3,2,1], [0,3,3], 1, 1], expected: 3 },
    { args: [[5,4], [0,0,0], 1, 5], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1,2,3], [3,2,1], 0, 0], expected: 3 },
    { args: [[10], [5], 1, 4], expected: 0 },
    { args: [[10], [5], 1, 5], expected: 1 },
    { args: [[3,2,1], [0,0,0], 3, 3], expected: 3 },
  ],
};
