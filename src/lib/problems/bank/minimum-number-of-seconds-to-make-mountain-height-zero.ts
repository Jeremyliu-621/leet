import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-seconds-to-make-mountain-height-zero',
  title: 'Minimum Number of Seconds to Make Mountain Height Zero',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'math'],
  description: `You are given an integer \`mountainHeight\` and an integer array \`workerTimes\` representing workers' work times.

The workers work simultaneously. For worker \`i\`:
- They take \`workerTimes[i]\` seconds to reduce the mountain height by \`1\`.
- Each subsequent reduction costs more: the k-th reduction costs \`k × workerTimes[i]\` seconds.
- To reduce the height by \`x\` total, worker \`i\` needs \`workerTimes[i] × x × (x+1) / 2\` seconds.

Return the **minimum** number of seconds needed to make the mountain height **zero**.`,
  constraints: [
    '1 <= mountainHeight <= 10^5',
    '1 <= workerTimes.length <= 10^4',
    '1 <= workerTimes[i] <= 10^6',
  ],
  examples: [
    {
      input: 'mountainHeight = 4, workerTimes = [2,1,1]',
      output: '3',
      explanation:
        'At time 3: worker 0 (time=2) reduces by 1 (cost 2), workers 1 and 2 (time=1) each reduce by 2 (cost 1+2=3). Total: 1+2+2=5 >= 4.',
    },
    {
      input: 'mountainHeight = 1, workerTimes = [1]',
      output: '1',
      explanation: 'One worker reduces height by 1 in workerTimes[0]=1 second.',
    },
    {
      input: 'mountainHeight = 3, workerTimes = [1,1]',
      output: '3',
      explanation:
        'Each worker needs w*x*(x+1)/2 seconds for x reductions. At t=3, each worker can do 2 reductions (1*2*3/2=3). Total reductions = 4 >= 3.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer t (time). Check if all workers together can reduce the mountain height to 0 within t seconds.',
    'Level 2: For a given time t and worker with workerTime w, the maximum number of reductions x satisfies w*x*(x+1)/2 <= t. Solve for x using binary search or the quadratic formula.',
    'Level 3: Binary search x in [0, mountainHeight]: find max x where w*x*(x+1)/2 <= t. Sum all workers\' max reductions; if sum >= mountainHeight, t is feasible.',
  ],
  functionName: 'minNumberOfSeconds',
  params: ['mountainHeight', 'workerTimes'],
  starterCode: {
    javascript: `function minNumberOfSeconds(mountainHeight, workerTimes) {
  const canFinish = (t) => {
    let total = 0;
    for (const w of workerTimes) {
      let lo = 0, hi = mountainHeight;
      while (lo < hi) {
        const mid = lo + Math.ceil((hi - lo) / 2);
        if (w * mid * (mid + 1) / 2 <= t) lo = mid;
        else hi = mid - 1;
      }
      total += lo;
      if (total >= mountainHeight) return true;
    }
    return false;
  };

  let lo = 0;
  let hi = workerTimes.reduce((a, b) => Math.max(a, b), 0) * mountainHeight * (mountainHeight + 1) / 2;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    typescript: `function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
  const canFinish = (t: number): boolean => {
    let total = 0;
    for (const w of workerTimes) {
      let lo = 0, hi = mountainHeight;
      while (lo < hi) {
        const mid = lo + Math.ceil((hi - lo) / 2);
        if (w * mid * (mid + 1) / 2 <= t) lo = mid;
        else hi = mid - 1;
      }
      total += lo;
      if (total >= mountainHeight) return true;
    }
    return false;
  };

  let lo = 0;
  let hi = workerTimes.reduce((a, b) => Math.max(a, b), 0) * mountainHeight * (mountainHeight + 1) / 2;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    python: `def minNumberOfSeconds(mountainHeight, workerTimes):
    def can_finish(t):
        total = 0
        for w in workerTimes:
            lo, hi = 0, mountainHeight
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if w * mid * (mid + 1) // 2 <= t:
                    lo = mid
                else:
                    hi = mid - 1
            total += lo
            if total >= mountainHeight:
                return True
        return False

    lo = 0
    hi = max(workerTimes) * mountainHeight * (mountainHeight + 1) // 2
    while lo < hi:
        mid = (lo + hi) // 2
        if can_finish(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
  },
  visibleTests: [
    { args: [4, [2, 1, 1]], expected: 3 },
    { args: [1, [1]], expected: 1 },
    { args: [3, [1, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [5, [1]], expected: 15 },
    { args: [2, [1]], expected: 3 },
    { args: [1, [100]], expected: 100 },
    { args: [10, [3, 2, 2, 4]], expected: 12 },
    { args: [5, [1, 2, 3]], expected: 6 },
    { args: [6, [1, 2, 3]], expected: 6 },
    { args: [1, [1, 1, 1]], expected: 1 },
    { args: [4, [1, 2]], expected: 6 },
  ],
};
