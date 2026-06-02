import type { Problem } from '../types';

export const problem: Problem = {
  id: 'mo-algorithm-range-distinct',
  title: "Mo's Algorithm — Distinct Values in Range",
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `Given an array \`nums\` and a list of queries \`[l, r]\`, return the **number of distinct values** in \`nums[l..r]\` (0-indexed, inclusive) for each query.

**Mo's Algorithm** answers all Q offline range queries in O((N + Q) √N) total time by sorting queries in a special order that minimizes pointer movement.

**Sorting rule:** divide the array into blocks of size √N. Sort queries first by their left block (l / √N), then within each block sort by r (ascending for even blocks, descending for odd blocks — "zigzag" optimisation, optional).

Return one integer per query, in the original query order.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^4',
    '1 <= queries.length <= 10^4',
    '0 <= l <= r < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3, 2, 1], queries = [[0,4],[1,3],[0,2]]',
      output: '[3, 2, 3]',
      explanation: '[1,2,3,2,1] has 3 distinct. [2,3,2] has 2 distinct. [1,2,3] has 3 distinct.',
    },
    {
      input: 'nums = [5, 5, 5, 5], queries = [[0,3],[0,0],[1,2]]',
      output: '[1, 1, 1]',
      explanation: 'All elements are 5, so every subarray has exactly 1 distinct value.',
    },
    {
      input: 'nums = [1, 2, 3, 4, 5], queries = [[0,4],[0,1],[3,4],[2,3]]',
      output: '[5, 2, 2, 2]',
      explanation: 'All elements distinct. Any subarray of length k has k distinct values.',
    },
  ],
  hints: [
    "Brute force: for each query iterate [l,r] and use a Set. O(N*Q). Mo's sorts queries to share work between adjacent queries via two moving pointers curL and curR.",
    "Maintain freq[v] = count of v in current window and a counter `distinct`. add(x): if freq[x]++ was 0, distinct++. remove(x): if --freq[x] is 0, distinct--. Process queries in Mo's order, expanding/contracting window.",
    `\`\`\`js
const B = Math.ceil(Math.sqrt(nums.length));
const order = queries.map((_,i)=>i).sort((a,b)=>{
  const ba=Math.floor(queries[a][0]/B), bb=Math.floor(queries[b][0]/B);
  if (ba!==bb) return ba-bb;
  return ba%2===0 ? queries[a][1]-queries[b][1] : queries[b][1]-queries[a][1];
});
let curL=0, curR=-1, distinct=0;
const freq=new Int32Array(10001);
const add=(x)=>{ if(freq[x]++===0) distinct++; };
const rem=(x)=>{ if(--freq[x]===0) distinct--; };
const ans=new Array(queries.length);
for (const i of order) {
  const [l,r]=queries[i];
  while(curR<r) add(nums[++curR]);
  while(curL>l) add(nums[--curL]);
  while(curR>r) rem(nums[curR--]);
  while(curL<l) rem(nums[curL++]);
  ans[i]=distinct;
}
return ans;\`\`\``,
  ],
  functionName: 'moDistinctCount',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function moDistinctCount(nums, queries) {
  const n = nums.length, Q = queries.length;
  const B = Math.ceil(Math.sqrt(n));
  const order = queries.map((_, i) => i).sort((a, b) => {
    const ba = Math.floor(queries[a][0] / B), bb = Math.floor(queries[b][0] / B);
    if (ba !== bb) return ba - bb;
    return ba % 2 === 0 ? queries[a][1] - queries[b][1] : queries[b][1] - queries[a][1];
  });
  const freq = new Int32Array(10001);
  let curL = 0, curR = -1, distinct = 0;
  const add = x => { if (freq[x]++ === 0) distinct++; };
  const rem = x => { if (--freq[x] === 0) distinct--; };
  const ans = new Array(Q);
  for (const i of order) {
    const [l, r] = queries[i];
    while (curR < r) add(nums[++curR]);
    while (curL > l) add(nums[--curL]);
    while (curR > r) rem(nums[curR--]);
    while (curL < l) rem(nums[curL++]);
    ans[i] = distinct;
  }
  return ans;
}`,
    typescript: `function moDistinctCount(nums: number[], queries: number[][]): number[] {
  const n = nums.length, Q = queries.length;
  const B = Math.ceil(Math.sqrt(n));
  const order = queries.map((_, i) => i).sort((a, b) => {
    const ba = Math.floor(queries[a]![0]! / B), bb = Math.floor(queries[b]![0]! / B);
    if (ba !== bb) return ba - bb;
    return ba % 2 === 0 ? queries[a]![1]! - queries[b]![1]! : queries[b]![1]! - queries[a]![1]!;
  });
  const freq = new Int32Array(10001);
  let curL = 0, curR = -1, distinct = 0;
  const add = (x: number): void => { if (freq[x]! === 0) distinct++; freq[x]!++; };
  const rem = (x: number): void => { freq[x]!--; if (freq[x]! === 0) distinct--; };
  const ans: number[] = new Array(Q);
  for (const i of order) {
    const [l, r] = queries[i]!;
    while (curR < r!) add(nums[++curR]!);
    while (curL > l!) add(nums[--curL]!);
    while (curR > r!) rem(nums[curR--]!);
    while (curL < l!) rem(nums[curL++]!);
    ans[i] = distinct;
  }
  return ans;
}`,
    python: `def moDistinctCount(nums: list[int], queries: list[list[int]]) -> list[int]:
    import math
    n, Q = len(nums), len(queries)
    B = max(1, int(math.sqrt(n)))
    order = sorted(range(Q), key=lambda i: (
        queries[i][0] // B,
        queries[i][1] if (queries[i][0] // B) % 2 == 0 else -queries[i][1]
    ))
    freq = [0] * 10001
    curL, curR, distinct = 0, -1, 0
    def add(x):
        nonlocal distinct
        if freq[x] == 0: distinct += 1
        freq[x] += 1
    def rem(x):
        nonlocal distinct
        freq[x] -= 1
        if freq[x] == 0: distinct -= 1
    ans = [0] * Q
    for i in order:
        l, r = queries[i]
        while curR < r: curR += 1; add(nums[curR])
        while curL > l: curL -= 1; add(nums[curL])
        while curR > r: rem(nums[curR]); curR -= 1
        while curL < l: rem(nums[curL]); curL += 1
        ans[i] = distinct
    return ans
`,
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 2, 1], [[0, 4], [1, 3], [0, 2]]],
      expected: [3, 2, 3],
    },
    {
      args: [[5, 5, 5, 5], [[0, 3], [0, 0], [1, 2]]],
      expected: [1, 1, 1],
    },
    {
      args: [[1, 2, 3, 4, 5], [[0, 4], [0, 1], [3, 4], [2, 3]]],
      expected: [5, 2, 2, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[1, 1, 2, 2, 3, 3], [[0, 5], [0, 1], [2, 3], [0, 3], [1, 4]]],
      expected: [3, 1, 1, 2, 3],
    },
    {
      args: [[0, 1, 0, 1, 0], [[0, 4], [0, 2], [1, 3], [2, 4]]],
      expected: [2, 2, 2, 2],
    },
    {
      args: [[3], [[0, 0]]],
      expected: [1],
    },
    {
      args: [[1, 2, 1, 2, 1], [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]],
      expected: [1, 2, 2, 2, 2],
    },
    {
      args: [[1, 2, 3, 1, 2, 3], [[0, 2], [3, 5], [0, 5], [1, 4]]],
      expected: [3, 3, 3, 3],
    },
  ],
};
