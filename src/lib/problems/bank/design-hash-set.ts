import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-hash-set',
  title: 'Design HashSet',
  difficulty: 'easy',
  tags: ['design', 'hash-map'],
  description: `Design a HashSet without using any built-in hash table libraries.

Implement the \`MyHashSet\` class:
- \`MyHashSet()\` Initializes the object with an empty set.
- \`void add(int key)\` Inserts the value \`key\` into the HashSet.
- \`bool contains(int key)\` Returns whether the value \`key\` exists in the HashSet or not.
- \`void remove(int key)\` Removes the value \`key\` in the HashSet. If \`key\` does not exist in the HashSet, do nothing.

**Input format:** A list of operations and corresponding argument arrays. Return \`null\` for void operations and a boolean for \`contains\`.`,
  constraints: [
    '0 <= key <= 10^6',
    'At most 10^4 calls will be made to add, remove, and contains.',
  ],
  examples: [
    {
      input: 'ops = ["HashSet","add","add","contains","contains","add","contains","remove","contains"], args = [[],[1],[2],[1],[3],[2],[2],[2],[2]]',
      output: '[null,null,null,true,false,null,true,null,false]',
      explanation: 'Add 1 and 2. contains(1)=true, contains(3)=false. Add 2 (already exists). contains(2)=true. remove(2). contains(2)=false.',
    },
  ],
  hints: [
    'Level 1: You can use a fixed-size boolean array of length 10^6+1 since keys are bounded.',
    'Level 2: Alternatively, use separate chaining with a smaller array of buckets. Each bucket is a linked list of keys that hash to the same bucket.',
    'Level 3: A simple hash function: key % (prime number like 769) works well for uniform distribution.',
  ],
  functionName: 'simulateHashSet',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function simulateHashSet(ops, args) {
  const BUCKETS = 769;
  const data = Array.from({length: BUCKETS}, () => []);
  const hash = key => key % BUCKETS;
  const results = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i], a = args[i];
    if (op === 'HashSet') { results.push(null); continue; }
    const bucket = data[hash(a[0])];
    if (op === 'add') {
      if (!bucket.includes(a[0])) bucket.push(a[0]);
      results.push(null);
    } else if (op === 'remove') {
      const idx = bucket.indexOf(a[0]);
      if (idx !== -1) bucket.splice(idx, 1);
      results.push(null);
    } else if (op === 'contains') {
      results.push(bucket.includes(a[0]));
    }
  }
  return results;
}`,
    typescript: `function simulateHashSet(ops: string[], args: number[][]): (boolean | null)[] {
  const BUCKETS = 769;
  const data: number[][] = Array.from({length: BUCKETS}, () => []);
  const hash = (key: number) => key % BUCKETS;
  const results: (boolean | null)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i]!, a = args[i]!;
    if (op === 'HashSet') { results.push(null); continue; }
    const bucket = data[hash(a[0]!)]!;
    if (op === 'add') {
      if (!bucket.includes(a[0]!)) bucket.push(a[0]!);
      results.push(null);
    } else if (op === 'remove') {
      const idx = bucket.indexOf(a[0]!);
      if (idx !== -1) bucket.splice(idx, 1);
      results.push(null);
    } else if (op === 'contains') {
      results.push(bucket.includes(a[0]!));
    }
  }
  return results;
}`,
    python: `def simulateHashSet(ops, args):
    ops = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    args = [list(a.to_py() if hasattr(a, 'to_py') else a) for a in (args.to_py() if hasattr(args, 'to_py') else args)]
    BUCKETS = 769
    data = [[] for _ in range(BUCKETS)]
    results = []
    for op, a in zip(ops, args):
        if op == 'HashSet':
            results.append(None)
            continue
        bucket = data[int(a[0]) % BUCKETS]
        if op == 'add':
            if int(a[0]) not in bucket:
                bucket.append(int(a[0]))
            results.append(None)
        elif op == 'remove':
            if int(a[0]) in bucket:
                bucket.remove(int(a[0]))
            results.append(None)
        elif op == 'contains':
            results.append(int(a[0]) in bucket)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['HashSet', 'add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'],
        [[], [1], [2], [1], [3], [2], [2], [2], [2]],
      ],
      expected: [null, null, null, true, false, null, true, null, false],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['HashSet', 'add', 'remove', 'contains'],
        [[], [5], [5], [5]],
      ],
      expected: [null, null, null, false],
    },
    {
      args: [
        ['HashSet', 'add', 'add', 'remove', 'contains', 'add', 'contains'],
        [[], [10], [10], [10], [10], [10], [10]],
      ],
      expected: [null, null, null, null, false, null, true],
    },
    {
      args: [
        ['HashSet', 'add', 'contains', 'remove', 'contains'],
        [[], [0], [0], [0], [0]],
      ],
      expected: [null, null, true, null, false],
    },
  ],
};
