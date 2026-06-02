import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-hire-k-workers',
  title: 'Minimum Cost to Hire K Workers',
  difficulty: 'hard',
  tags: ['heap', 'math'],
  description: `There are \`n\` workers. You are given two integer arrays \`quality\` and \`wage\` where \`quality[i]\` is the quality of the \`i-th\` worker and \`wage[i]\` is the minimum wage expectation of the \`i-th\` worker.

We want to hire exactly \`k\` workers to form a **paid group**. To hire a group of \`k\` workers, we must pay them according to the following rules:

1. Every worker in the paid group must be paid at least their minimum wage expectation.
2. In the group, each worker's pay must be proportional to their quality. (If worker A has twice the quality of worker B, then worker A must be paid twice as much as worker B.)

Given the two integer arrays \`quality\` and \`wage\` and an integer \`k\`, return the **least amount of money** needed to form a paid group satisfying the above conditions. Answers within 10^-5 of the actual answer will be accepted.`,
  constraints: [
    'n == quality.length == wage.length',
    '1 <= k <= n <= 10^4',
    '1 <= quality[i] <= 10^4',
    '1 <= wage[i] <= 10^6',
  ],
  examples: [
    { input: 'quality = [10,20,5], wage = [70,50,30], k = 2', output: '105.00000' },
    { input: 'quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3', output: '30.66667' },
  ],
  hints: [
    'Sort workers by their wage/quality ratio. If we pick worker i as the "captain" (highest ratio), everyone in the group must be paid at their ratio.',
    'The total cost with captain i = ratio_i × (sum of qualities of the k lowest-quality workers in {0..i}).',
    'Use a max-heap of size k to maintain the k smallest quality values as you sweep through workers sorted by ratio.',
  ],
  functionName: 'mincostToHireWorkers',
  params: ['quality', 'wage', 'k'],
  starterCode: {
    javascript: `function mincostToHireWorkers(quality, wage, k) {
  const workers = quality.map((q, i) => [wage[i] / q, q]).sort((a, b) => a[0] - b[0]);
  const heap = [];
  const push = q => { heap.push(q); let i=heap.length-1; while(i>0){const p=(i-1)>>1;if(heap[p]>=heap[i])break;const t=heap[p];heap[p]=heap[i];heap[i]=t;i=p;} };
  const pop = () => { const top=heap[0]; const last=heap.pop(); if(heap.length>0){heap[0]=last;let i=0;while(true){const l=2*i+1,r=2*i+2;let m=i;if(l<heap.length&&heap[l]>heap[m])m=l;if(r<heap.length&&heap[r]>heap[m])m=r;if(m===i)break;const t=heap[i];heap[i]=heap[m];heap[m]=t;i=m;}} return top; };
  let qualitySum = 0, ans = Infinity;
  for (const [ratio, q] of workers) {
    push(q); qualitySum += q;
    if (heap.length > k) qualitySum -= pop();
    if (heap.length === k) ans = Math.min(ans, ratio * qualitySum);
  }
  return ans;
}`,
    typescript: `function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const workers = quality.map((q, i) => [wage[i]! / q, q] as [number, number]).sort((a, b) => a[0] - b[0]);
  const heap: number[] = [];
  const push = (q: number) => { heap.push(q); let i=heap.length-1; while(i>0){const p=(i-1)>>1;if(heap[p]!>=heap[i]!)break;const t=heap[p]!;heap[p]=heap[i]!;heap[i]=t;i=p;} };
  const pop = (): number => { const top=heap[0]!; const last=heap.pop()!; if(heap.length>0){heap[0]=last;let i=0;while(true){const l=2*i+1,r=2*i+2;let m=i;if(l<heap.length&&heap[l]!>heap[m]!)m=l;if(r<heap.length&&heap[r]!>heap[m]!)m=r;if(m===i)break;const t=heap[i]!;heap[i]=heap[m]!;heap[m]=t;i=m;}} return top; };
  let qualitySum = 0, ans = Infinity;
  for (const [ratio, q] of workers) {
    push(q); qualitySum += q;
    if (heap.length > k) qualitySum -= pop();
    if (heap.length === k) ans = Math.min(ans, ratio * qualitySum);
  }
  return ans;
}`,
    python: `def mincostToHireWorkers(quality, wage, k):
    import heapq
    if hasattr(quality, 'to_py'): quality = list(quality.to_py())
    if hasattr(wage, 'to_py'): wage = list(wage.to_py())
    workers = sorted(zip(wage, quality), key=lambda x: x[0] / x[1])
    heap = []; quality_sum = 0; ans = float('inf')
    for w, q in workers:
        heapq.heappush(heap, -q); quality_sum += q
        if len(heap) > k: quality_sum += heapq.heappop(heap)
        if len(heap) == k: ans = min(ans, (w / q) * quality_sum)
    return ans`,
  },
  visibleTests: [
    { args: [[10, 20, 5], [70, 50, 30], 2], expected: 105.0 },
    { args: [[3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3], expected: 30.666666666666664 },
  ],
  hiddenTests: [
    { args: [[1], [10000], 1], expected: 10000.0 },
    { args: [[4, 8, 2], [2, 4, 1], 1], expected: 1.0 },
    { args: [[10, 20, 5, 15], [70, 50, 30, 60], 2], expected: 105.0 },
  ],
};
