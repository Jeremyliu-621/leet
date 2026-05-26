import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-memory-allocator',
  title: 'Design Memory Allocator',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer \`n\` representing the size of a **0-indexed** memory array. All memory units are initially free.

You need to implement a memory allocator with the following interface:

- \`Allocator(n)\` — initializes the allocator with a memory array of size \`n\`.
- \`allocate(size, mID)\` — find the **leftmost** block of \`size\` consecutive free memory units and allocate it with id \`mID\`. Return the **index** of the first unit, or \`-1\` if not enough free units.
- \`freeMemory(mID)\` — free all units with memory id \`mID\`. Return the **number of memory units** freed.

Implement the solution as a function that takes a list of operations and returns results.

**Input format:** \`n\` is the memory size. \`ops\` is an array where each element is \`[type, a, b]\`: if \`type === 0\`, call \`allocate(a, b)\`; if \`type === 1\`, call \`freeMemory(a)\` (b unused).

**Output:** array of results for each operation (\`allocate\` returns the index, \`freeMemory\` returns the count).`,
  examples: [
    {
      input: 'n = 10, ops = [[0,1,1],[0,1,2],[0,1,3],[1,2,0],[0,3,4],[1,1,0],[0,1,5]]',
      output: '[0,1,2,1,3,1,0]',
      explanation: 'allocate(1,1)→0, allocate(1,2)→1, allocate(1,3)→2, free(2)→1 (unit 1 freed), allocate(3,4)→3 (leftmost 3 consecutive free starting at 3), free(1)→1 (unit 0 freed), allocate(1,5)→0.',
    },
    {
      input: 'n = 5, ops = [[0,2,1],[0,2,2],[0,2,3],[1,1,0],[0,2,1]]',
      output: '[0,2,-1,2,0]',
      explanation: 'allocate(2,1)→0, allocate(2,2)→2, allocate(2,3)→-1 (only 1 free unit left), free(1)→2 (2 units freed), allocate(2,1)→0.',
    },
  ],
  constraints: [
    '1 <= n, size, mID <= 1000',
    '1 <= ops.length <= 1000',
    'ops[i].length == 3',
    'ops[i][0] is 0 or 1',
  ],
  functionName: 'memoryAllocator',
  params: ['n', 'ops'],
  starterCode: {
    javascript: `function memoryAllocator(n, ops) {
  // Implement the Allocator class logic here.
  // For each op [type, a, b]:
  //   type=0: allocate(size=a, mID=b), return first free index or -1
  //   type=1: freeMemory(mID=a), return count freed
  // Return array of results.
}
`,
    python: `def memoryAllocator(n, ops):
    # Implement the Allocator class logic here.
    # For each op [type, a, b]:
    #   type=0: allocate(size=a, mID=b), return first free index or -1
    #   type=1: freeMemory(mID=a), return count freed
    # Return array of results.
    pass
`,
  },
  hints: [
    'Maintain a memory array of size n initialized to 0 (free). Each cell stores the mID of its occupant, or 0 if free.',
    'For allocate(size, mID): scan left to right for the first run of `size` consecutive zeros. If found, mark those cells with mID and return the start index.',
    'For freeMemory(mID): scan all cells, set any cell equal to mID back to 0, and count them.',
  ],
  visibleTests: [
    {
      args: [10, [[0, 1, 1], [0, 1, 2], [0, 1, 3], [1, 2, 0], [0, 3, 4], [1, 1, 0], [0, 1, 5]]],
      expected: [0, 1, 2, 1, 3, 1, 0],
    },
    {
      args: [5, [[0, 2, 1], [0, 2, 2], [0, 2, 3], [1, 1, 0], [0, 2, 1]]],
      expected: [0, 2, -1, 2, 0],
    },
  ],
  hiddenTests: [
    {
      args: [3, [[0, 3, 1], [1, 1, 0]]],
      expected: [0, 3],
    },
    {
      args: [3, [[0, 2, 1], [0, 2, 2], [1, 1, 0], [0, 2, 2]]],
      expected: [0, -1, 2, 0],
    },
    {
      args: [1, [[0, 1, 1], [0, 1, 2], [1, 1, 0], [0, 1, 2]]],
      expected: [0, -1, 1, 0],
    },
  ],
};
