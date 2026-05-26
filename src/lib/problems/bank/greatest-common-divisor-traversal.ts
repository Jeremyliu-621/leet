import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-common-divisor-traversal',
  title: 'Greatest Common Divisor Traversal',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'union-find'],
  description: `You are given a **0-indexed** integer array \`nums\`. You can traverse between indices \`i\` and \`j\` if \`gcd(nums[i], nums[j]) > 1\`, where \`gcd\` is the greatest common divisor.

Return \`true\` if it is possible to traverse **every** index of \`nums\`, starting from **any** one of them. Otherwise, return \`false\`.

You may visit indices in any order, and you may visit an index more than once.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [2,3,6]',
      output: 'true',
      explanation:
        'gcd(2,6)=2>1 and gcd(3,6)=3>1. All three indices are connected.',
    },
    {
      input: 'nums = [3,9,5]',
      output: 'false',
      explanation:
        'gcd(3,5)=1 and gcd(9,5)=1. Index 2 (value 5) is unreachable from indices 0 and 1.',
    },
    {
      input: 'nums = [4,3,12,8]',
      output: 'true',
      explanation:
        'gcd(4,12)=4>1, gcd(3,12)=3>1, gcd(8,4)=4>1. All indices are in the same component.',
    },
  ],
  hints: [
    'If any element equals 1, its gcd with every other element is 1, so it is isolated. Return false immediately when n > 1 and any element is 1.',
    'Model connectivity via prime factors: two indices are reachable from each other if and only if they share a common prime factor. Use Union-Find to group indices that share any prime factor.',
    `For each index \`i\`, factorize \`nums[i]\`. For each prime factor \`p\`, union index \`i\` with the first previously-seen index that also has factor \`p\`. After processing all elements, check that every index shares the same root.\n\`\`\`js\nfunction canTraverseAllPairs(nums) {\n  const n = nums.length;\n  if (n === 1) return true;\n  if (nums.some(x => x === 1)) return false;\n  const parent = Array.from({length: n}, (_, i) => i), rank = new Array(n).fill(0);\n  function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }\n  function union(x, y) { let rx=find(x),ry=find(y); if(rx===ry)return; if(rank[rx]<rank[ry])parent[rx]=ry; else if(rank[rx]>rank[ry])parent[ry]=rx; else{parent[ry]=rx;rank[rx]++;} }\n  const primeToIdx = new Map();\n  for (let i = 0; i < n; i++) {\n    let x = nums[i];\n    for (let p = 2; p*p <= x; p++) {\n      if (x % p === 0) { if (primeToIdx.has(p)) union(i, primeToIdx.get(p)); else primeToIdx.set(p, i); while (x%p===0) x=x/p|0; }\n    }\n    if (x > 1) { if (primeToIdx.has(x)) union(i, primeToIdx.get(x)); else primeToIdx.set(x, i); }\n  }\n  const root = find(0);\n  return nums.every((_, i) => find(i) === root);\n}\n\`\`\``,
  ],
  functionName: 'canTraverseAllPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function canTraverseAllPairs(nums) {

}`,
    python: `def canTraverseAllPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 6]], expected: true },
    { args: [[3, 9, 5]], expected: false },
    { args: [[4, 3, 12, 8]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 2]], expected: false },
    { args: [[2]], expected: true },
    { args: [[2, 3]], expected: false },
    { args: [[6, 10, 15]], expected: true },
    { args: [[2, 3, 4, 9]], expected: false },
    { args: [[4, 6, 15, 35]], expected: true },
    { args: [[2, 5, 3, 7]], expected: false },
    { args: [[7, 14, 21]], expected: true },
    { args: [[30, 6, 10]], expected: true },
  ],
};
