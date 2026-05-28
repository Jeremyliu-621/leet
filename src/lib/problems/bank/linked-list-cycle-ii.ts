import type { Problem } from '../types';

export const problem: Problem = {
  id: 'linked-list-cycle-ii',
  title: 'Linked List Cycle II',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a linked list, return the **index** of the node where the cycle begins, or \`-1\` if there is no cycle.

**Input format:** The list is given as a flat array, and a separate integer \`pos\` indicates which node's next pointer is connected back (0-indexed). If \`pos == -1\`, there is no cycle.

**Return:** the 0-based index of the cycle start, or \`-1\` if no cycle.

**Algorithm (Floyd's + math):**
1. Use slow/fast pointers to detect a cycle.
2. Once they meet, start a new pointer from head and move both one step at a time — they meet at the cycle start.

**Proof:** If the cycle start is at distance F from head, and meeting point is distance C–h into the cycle (C = cycle length, h = head-to-start), the math works out so both pointers meet at the cycle entrance.`,
  constraints: [
    'The number of the nodes in the list is in the range [0, 10000]',
    '-100000 <= Node.val <= 100000',
    'pos is -1 or a valid index in the linked-list',
  ],
  examples: [
    {
      input: 'head = [3,1,0,-4], pos = 1',
      output: '1',
      explanation: 'The tail connects back to index 1.',
    },
    {
      input: 'head = [1,2], pos = 0',
      output: '0',
      explanation: 'The tail connects back to index 0.',
    },
    {
      input: 'head = [1], pos = -1',
      output: '-1',
      explanation: 'No cycle.',
    },
  ],
  hints: [
    'First use Floyd\'s tortoise-and-hare algorithm to detect if a cycle exists. Slow moves 1 step, fast moves 2 steps. If they meet, there is a cycle.',
    'Once the slow and fast pointers meet, reset one pointer to the head. Move both pointers one step at a time — they will meet at the cycle start.',
    'To return the index (not the node), count steps from head until the meeting point, or use a node-to-index map built during cycle detection.',
  ],
  functionName: 'detectCycle',
  params: ['vals', 'pos'],
  starterCode: {
    javascript: `// The function receives a flat array and a pos (cycle start index, -1 = no cycle).
// Return the 0-based index of the cycle start, or -1 if no cycle.
function detectCycle(vals, pos) {

}
`,
    typescript: "function detectCycle(vals: number[], pos: number): number {\n\n}",

    python: `# The function receives a flat array and a pos (cycle start index, -1 = no cycle).
# Return the 0-based index of the cycle start, or -1 if no cycle.
def detectCycle(vals: list, pos: int) -> int:
    pass
`,
  },
  visibleTests: [
    { args: [[3,1,0,-4], 1], expected: 1 },
    { args: [[1,2], 0], expected: 0 },
    { args: [[1], -1], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], 2], expected: 2 },
    { args: [[1,2,3,4,5], 0], expected: 0 },
    { args: [[1,2,3,4,5], 4], expected: 4 },
    { args: [[1,2,3], -1], expected: -1 },
    { args: [[], -1], expected: -1 },
  ],
};
