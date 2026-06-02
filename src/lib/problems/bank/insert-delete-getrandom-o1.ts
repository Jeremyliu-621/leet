import type { Problem } from '../types';

export const problem: Problem = {
  id: 'insert-delete-getrandom-o1',
  title: 'Insert Delete GetRandom O(1)',
  difficulty: 'medium',
  tags: ['design', 'arrays', 'hash-map', 'simulation'],
  description: `Implement a data structure that supports all the following operations in **average O(1)** time:

- \`insert(val)\` — Inserts \`val\` into the set if not present. Returns \`true\` if the item was not present, \`false\` otherwise.
- \`remove(val)\` — Removes \`val\` from the set if present. Returns \`true\` if the item was present, \`false\` otherwise.
- \`getRandom()\` — Returns a random element from the current set of elements. Each element must have an **equal probability** of being returned.

You are given a list of \`operations\` where each operation is \`["insert", val]\`, \`["remove", val]\`, or \`["getRandom", -1]\`. Return an array of results for each operation (\`insert\`/\`remove\` return booleans; \`getRandom\` returns the chosen value).

**Note:** In the test cases, \`getRandom\` is only called when exactly one element is in the set, making the result deterministic.`,
  constraints: [
    '`-2^31 <= val <= 2^31 - 1`',
    'At most `2 * 10^5` calls will be made to the operations',
    'There will be at least one element in the data structure when `getRandom` is called',
    'In test cases, `getRandom` is called only when the set has exactly one element',
  ],
  examples: [
    {
      input:
        'operations = [["insert",1],["remove",2],["insert",2],["remove",1],["getRandom",-1]]',
      output: '[true,false,true,true,2]',
      explanation:
        'Insert 1 (not present → true). Remove 2 (not present → false). Insert 2 (not present → true). Remove 1 (present → true). Set = {2}. GetRandom returns 2.',
    },
    {
      input: 'operations = [["insert",5],["getRandom",-1],["remove",5],["insert",7],["getRandom",-1]]',
      output: '[true,5,true,true,7]',
      explanation:
        'Insert 5, GetRandom from {5}=5, Remove 5, Insert 7, GetRandom from {7}=7.',
    },
  ],
  hints: [
    'For O(1) insert and remove, use a hash map from value to its index in an array. For O(1) getRandom, pick a random index in the array.',
    'The tricky part is O(1) removal from the middle of the array. Swap the element to remove with the last element, update the map for the swapped element, then pop the last element.',
    '```js\nfunction insertDeleteGetRandom(operations) {\n  const map = new Map(); // val -> index in vals\n  const vals = [];\n  return operations.map(([op, val]) => {\n    if (op === "insert") {\n      if (map.has(val)) return false;\n      map.set(val, vals.length);\n      vals.push(val);\n      return true;\n    } else if (op === "remove") {\n      if (!map.has(val)) return false;\n      const idx = map.get(val);\n      const last = vals[vals.length - 1];\n      vals[idx] = last;\n      map.set(last, idx);\n      vals.pop();\n      map.delete(val);\n      return true;\n    } else {\n      return vals[Math.floor(Math.random() * vals.length)];\n    }\n  });\n}\n```',
  ],
  functionName: 'insertDeleteGetRandom',
  params: ['operations'],
  starterCode: {
    javascript: `function insertDeleteGetRandom(operations) {
  const map = new Map();
  const vals = [];
  return operations.map(([op, val]) => {
    if (op === 'insert') {
      if (map.has(val)) return false;
      map.set(val, vals.length);
      vals.push(val);
      return true;
    } else if (op === 'remove') {
      if (!map.has(val)) return false;
      const idx = map.get(val);
      const last = vals[vals.length - 1];
      vals[idx] = last;
      map.set(last, idx);
      vals.pop();
      map.delete(val);
      return true;
    } else {
      return vals[Math.floor(Math.random() * vals.length)];
    }
  });
}`,
    typescript: `function insertDeleteGetRandom(operations: (string | number)[][]): (boolean | number)[] {
  const map = new Map<number, number>();
  const vals: number[] = [];
  return operations.map(([op, val]) => {
    if (op === 'insert') {
      if (map.has(val as number)) return false;
      map.set(val as number, vals.length);
      vals.push(val as number);
      return true;
    } else if (op === 'remove') {
      if (!map.has(val as number)) return false;
      const idx = map.get(val as number)!;
      const last = vals[vals.length - 1];
      vals[idx] = last;
      map.set(last, idx);
      vals.pop();
      map.delete(val as number);
      return true;
    } else {
      return vals[Math.floor(Math.random() * vals.length)];
    }
  });
}`,
    python: `def insertDeleteGetRandom(operations):
    import random
    idx_map = {}
    vals = []
    res = []
    for op, val in operations:
        if op == 'insert':
            if val in idx_map: res.append(False); continue
            idx_map[val] = len(vals); vals.append(val); res.append(True)
        elif op == 'remove':
            if val not in idx_map: res.append(False); continue
            i = idx_map[val]; last = vals[-1]
            vals[i] = last; idx_map[last] = i; vals.pop(); del idx_map[val]; res.append(True)
        else:
            res.append(random.choice(vals))
    return res`,
  },
  visibleTests: [
    {
      args: [[['insert', 1], ['remove', 2], ['insert', 2], ['remove', 1], ['getRandom', -1]]],
      expected: [true, false, true, true, 2],
    },
    {
      args: [[['insert', 5], ['getRandom', -1], ['remove', 5], ['insert', 7], ['getRandom', -1]]],
      expected: [true, 5, true, true, 7],
    },
  ],
  hiddenTests: [
    {
      args: [[['insert', 1], ['insert', 1], ['remove', 1], ['insert', 1]]],
      expected: [true, false, true, true],
    },
    {
      args: [[['remove', 1]]],
      expected: [false],
    },
    {
      args: [[['insert', 10], ['insert', 20], ['remove', 10], ['remove', 20], ['remove', 5]]],
      expected: [true, true, true, true, false],
    },
    {
      args: [[['insert', 0], ['insert', 1], ['remove', 0], ['getRandom', -1]]],
      expected: [true, true, true, 1],
    },
  ],
};
