import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-a-number-container-system',
  title: 'Design a Number Container System',
  difficulty: 'medium',
  tags: ['design', 'hash-map'],
  description: `Design a number container system that supports the following operations:

- **Insert or Replace** a number at the given index.
- **Return** the smallest index for the given number in the system.

Implement \`numberContainers(operations, args)\` which simulates the following class:

- \`"NumberContainers"\` — constructor. Returns \`null\`.
- \`"change", [index, number]\` — Fill the container at the given \`index\` with \`number\`. If there is already a number at that index, replace it. Returns \`null\`.
- \`"find", [number]\` — Return the **smallest index** for the given \`number\`, or \`-1\` if no container holds that number.`,
  constraints: [
    '1 <= index, number <= 10^9',
    'At most 10^5 calls in total.',
  ],
  examples: [
    {
      input: `operations = ["NumberContainers","find","change","change","change","change","find","find","find","find"]
args = [[],[10],[2,10],[1,10],[3,10],[5,10],[10],[1],[2],[3]]`,
      output: '[null,-1,null,null,null,null,1,-1,-1,-1]',
      explanation: 'find(10) before any change → -1. After setting indices 2,1,3,5 to 10: find(10) = 1 (smallest index). find(1), find(2), find(3) all return -1 since no index holds number 1, 2, or 3.',
    },
  ],
  hints: [
    'Maintain two maps: one from index → current number, and one from number → sorted list of indices holding that number.',
    'For change(index, number): remove index from the old number\'s list (if any), then insert index into the new number\'s list in sorted order.',
    'For find(number): return the first element of the sorted list for that number, or -1 if empty.',
  ],
  functionName: 'numberContainers',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function numberContainers(operations, args) {
  const results = [null];
  const indexToNum = new Map();
  const numToIndices = new Map();
  for (let i = 1; i < operations.length; i++) {
    const op = operations[i], a = args[i];
    if (op === 'change') {
      const [idx, num] = a;
      if (indexToNum.has(idx)) {
        const old = indexToNum.get(idx);
        const arr = numToIndices.get(old);
        const pos = arr.indexOf(idx);
        if (pos !== -1) arr.splice(pos, 1);
      }
      indexToNum.set(idx, num);
      if (!numToIndices.has(num)) numToIndices.set(num, []);
      const arr = numToIndices.get(num);
      let lo = 0, hi = arr.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < idx) lo = mid + 1; else hi = mid; }
      arr.splice(lo, 0, idx);
      results.push(null);
    } else if (op === 'find') {
      const arr = numToIndices.get(a[0]);
      results.push(arr && arr.length > 0 ? arr[0] : -1);
    }
  }
  return results;
}`,
    typescript: `function numberContainers(operations: string[], args: unknown[][]): unknown[] {
  const results: unknown[] = [null];
  const indexToNum = new Map<number, number>();
  const numToIndices = new Map<number, number[]>();
  for (let i = 1; i < operations.length; i++) {
    const op = operations[i]!, a = args[i] as number[];
    if (op === 'change') {
      const [idx, num] = [a[0]!, a[1]!];
      if (indexToNum.has(idx)) {
        const old = indexToNum.get(idx)!;
        const arr = numToIndices.get(old)!;
        const pos = arr.indexOf(idx);
        if (pos !== -1) arr.splice(pos, 1);
      }
      indexToNum.set(idx, num);
      if (!numToIndices.has(num)) numToIndices.set(num, []);
      const arr = numToIndices.get(num)!;
      let lo = 0, hi = arr.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid]! < idx) lo = mid + 1; else hi = mid; }
      arr.splice(lo, 0, idx);
      results.push(null);
    } else if (op === 'find') {
      const arr = numToIndices.get(a[0]!);
      results.push(arr && arr.length > 0 ? arr[0]! : -1);
    }
  }
  return results;
}`,
    python: `def numberContainers(operations, args):
    import bisect
    operations = list(operations.to_py() if hasattr(operations, 'to_py') else operations)
    args = [list(a.to_py() if hasattr(a, 'to_py') else a) for a in (args.to_py() if hasattr(args, 'to_py') else args)]
    results = [None]
    index_to_num = {}
    num_to_indices = {}
    for i in range(1, len(operations)):
        op, a = operations[i], args[i]
        if op == 'change':
            idx, num = a[0], a[1]
            if idx in index_to_num:
                old = index_to_num[idx]
                lst = num_to_indices[old]
                pos = bisect.bisect_left(lst, idx)
                if pos < len(lst) and lst[pos] == idx: lst.pop(pos)
            index_to_num[idx] = num
            if num not in num_to_indices: num_to_indices[num] = []
            bisect.insort(num_to_indices[num], idx)
            results.append(None)
        elif op == 'find':
            num = a[0]
            lst = num_to_indices.get(num, [])
            results.append(lst[0] if lst else -1)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['NumberContainers', 'find', 'change', 'change', 'change', 'change', 'find', 'find', 'find', 'find'],
        [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1], [2], [3]],
      ],
      expected: [null, -1, null, null, null, null, 1, -1, -1, -1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['NumberContainers', 'change', 'find'],
        [[], [1, 42], [42]],
      ],
      expected: [null, null, 1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'find', 'find'],
        [[], [1, 5], [1, 10], [5], [10]],
      ],
      expected: [null, null, null, -1, 1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'change', 'find'],
        [[], [3, 7], [1, 7], [5, 7], [7]],
      ],
      expected: [null, null, null, null, 1],
    },
    {
      args: [
        ['NumberContainers', 'find', 'change', 'find', 'change', 'find'],
        [[], [100], [2, 100], [100], [1, 100], [100]],
      ],
      expected: [null, -1, null, 2, null, 1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'change', 'change', 'find', 'change', 'find'],
        [[], [1, 10], [2, 10], [3, 10], [4, 10], [10], [1, 20], [10]],
      ],
      expected: [null, null, null, null, null, 1, null, 2],
    },
  ],
};
