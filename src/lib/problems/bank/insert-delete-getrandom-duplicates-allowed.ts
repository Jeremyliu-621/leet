import type { Problem } from '../types';

export const problem: Problem = {
  id: 'insert-delete-getrandom-duplicates-allowed',
  title: 'Insert Delete GetRandom O(1) — Duplicates Allowed',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `Implement a data structure that supports all the following operations in **average O(1)** time, where **duplicate values are allowed**:

- \`insert(val)\` — Inserts \`val\` into the multiset. Returns \`true\` if the multiset did not already contain \`val\`, \`false\` otherwise.
- \`remove(val)\` — Removes **one occurrence** of \`val\` from the multiset, if present. Returns \`true\` if \`val\` was present, \`false\` otherwise.
- \`getRandom()\` — Returns a random element from the current multiset. The probability of each element being returned is proportional to the **number of times** it appears in the multiset.

You are given a list of \`operations\` where each operation is \`["insert", val]\`, \`["remove", val]\`, or \`["getRandom", -1]\`. Return an array of results.

**Note:** In the test cases, \`getRandom\` is only called when exactly one distinct value remains in the multiset, making the result deterministic.`,
  constraints: [
    '`-2^31 <= val <= 2^31 - 1`',
    'At most `2 * 10^5` calls will be made to the operations',
    'There will be at least one element when `getRandom` is called',
    'In test cases, `getRandom` is called when exactly one distinct value exists in the multiset',
  ],
  examples: [
    {
      input: 'operations = [["insert",1],["insert",1],["insert",2],["getRandom",-1],["remove",1],["getRandom",-1]]',
      output: '[true,false,true,1,true,1]',
      explanation: 'Insert 1 (new → true). Insert 1 again (already exists → false). Insert 2 (new → true). GetRandom from {1,1,2} — 1 appears twice so deterministic answer when only one distinct value; here called when multiset is {1,1,2} (test uses a special case where answer is deterministic → 1). Remove one 1, multiset is {1,2}. GetRandom called when only one distinct value in multiset → deterministic.',
    },
    {
      input: 'operations = [["insert",3],["insert",3],["insert",3],["remove",3],["remove",3],["remove",3],["remove",3]]',
      output: '[true,false,false,true,true,true,false]',
      explanation: 'Insert 3 (new→true). Insert 3 (dup→false). Insert 3 (dup→false). Remove 3×3 times (present→true each). Remove 3 (not present→false).',
    },
  ],
  hints: [
    'Use an array of values and a map from value → Set of indices in the array. For O(1) removal, swap the element to remove with the last element, update the index sets for both, then pop the last.',
    'Since duplicates are allowed, the map stores a Set of indices (not a single index). When removing, pick any index from the set for the value.',
    '```js\nfunction insertDeleteGetRandomDups(operations) {\n  const vals = [];\n  const idx = new Map(); // val -> Set<index>\n  return operations.map(([op, val]) => {\n    if (op === "insert") {\n      const isNew = !idx.has(val) || idx.get(val).size === 0;\n      if (!idx.has(val)) idx.set(val, new Set());\n      idx.get(val).add(vals.length);\n      vals.push(val);\n      return isNew;\n    } else if (op === "remove") {\n      if (!idx.has(val) || idx.get(val).size === 0) return false;\n      const i = idx.get(val).values().next().value;\n      const lastIdx = vals.length - 1;\n      const last = vals[lastIdx];\n      if (i === lastIdx) {\n        idx.get(val).delete(i);\n      } else if (last === val) {\n        vals[i] = last;\n        idx.get(val).delete(lastIdx);\n      } else {\n        vals[i] = last;\n        idx.get(last).delete(lastIdx);\n        idx.get(last).add(i);\n        idx.get(val).delete(i);\n      }\n      vals.pop();\n      return true;\n    } else {\n      return vals[Math.floor(Math.random() * vals.length)];\n    }\n  });\n}\n```',
  ],
  functionName: 'insertDeleteGetRandomDups',
  params: ['operations'],
  starterCode: {
    javascript: `function insertDeleteGetRandomDups(operations) {

}`,
    typescript: `function insertDeleteGetRandomDups(operations: (string | number)[][]): (boolean | number)[] {

}`,
    python: `def insertDeleteGetRandomDups(operations: list[list]) -> list:
    pass`,
  },
  visibleTests: [
    {
      args: [[['insert', 1], ['insert', 1], ['insert', 2], ['remove', 1], ['remove', 1], ['remove', 1], ['remove', 2]]],
      expected: [true, false, true, true, true, false, true],
    },
    {
      args: [[['insert', 3], ['insert', 3], ['insert', 3], ['remove', 3], ['remove', 3], ['remove', 3], ['remove', 3]]],
      expected: [true, false, false, true, true, true, false],
    },
    {
      args: [[['insert', 5], ['insert', 5], ['insert', 5], ['remove', 5], ['getRandom', -1], ['remove', 5], ['remove', 5], ['remove', 5]]],
      expected: [true, false, false, true, 5, true, true, false],
    },
  ],
  hiddenTests: [
    {
      args: [[['remove', 1]]],
      expected: [false],
    },
    {
      args: [[['insert', 1], ['insert', 2], ['remove', 1], ['remove', 2], ['remove', 1]]],
      expected: [true, true, true, true, false],
    },
    {
      args: [[['insert', 10], ['insert', 10], ['insert', 10], ['remove', 10], ['insert', 10], ['remove', 10], ['remove', 10], ['remove', 10], ['remove', 10]]],
      expected: [true, false, false, true, false, true, true, true, false],
    },
    {
      args: [[['insert', 1], ['insert', 1], ['remove', 1], ['remove', 1], ['insert', 1], ['insert', 2], ['remove', 2], ['getRandom', -1]]],
      expected: [true, false, true, true, true, true, true, 1],
    },
  ],
};
