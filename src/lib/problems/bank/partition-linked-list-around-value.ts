import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}
function __toArray__(head) {
  const result = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}
function partitionListRunner(vals, x) {
  return __toArray__(partitionList(__fromArray__(vals), x));
}
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def __from_array__(arr):
    arr = list(arr)
    if not arr:
        return None
    head = ListNode(arr[0])
    cur = head
    for v in arr[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head

def __to_array__(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

def partitionListRunner(vals, x):
    vals = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    return __to_array__(partitionList(__from_array__(vals), x))
`.trim();

export const problem: Problem = {
  id: 'partition-linked-list-around-value',
  title: 'Partition Linked List Around a Value',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a linked list and a value \`x\`, partition it so that all nodes with values **strictly less than** \`x\` appear before all nodes with values **greater than or equal to** \`x\`.

You must **preserve the original relative order** of nodes in each partition.

**Example:**
- Input: \`[1, 4, 3, 2, 5, 2]\`, \`x = 3\`
- Output: \`[1, 2, 2, 4, 3, 5]\`
  - Nodes \`< 3\`: 1, 2, 2 (in original order)
  - Nodes \`>= 3\`: 4, 3, 5 (in original order)

> **Note:** A \`ListNode\` class and \`partitionListRunner\` wrapper are pre-defined. Implement \`partitionList(head, x)\`.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 200]',
    '-100 <= Node.val <= 100',
    '-200 <= x <= 200',
  ],
  examples: [
    {
      input: 'vals = [1,4,3,2,5,2], x = 3',
      output: '[1,2,2,4,3,5]',
      explanation: 'Elements < 3 are [1,2,2]; elements >= 3 are [4,3,5]. Both in original order.',
    },
    {
      input: 'vals = [2,1], x = 2',
      output: '[1,2]',
      explanation: 'Only node 1 is < 2; node 2 is >= 2.',
    },
    {
      input: 'vals = [], x = 0',
      output: '[]',
      explanation: 'Empty list stays empty.',
    },
  ],
  hints: [
    'Create two separate dummy-head chains: one for nodes with val < x ("before") and one for nodes with val >= x ("after"). Walk the list once and append each node to the appropriate chain.',
    'After the full traversal, connect the tail of the "before" chain to the head of the "after" chain (after removing the dummy heads). Set the tail of the "after" chain to null.',
    'This is O(n) time, O(1) space (just rearranging pointers). The key detail: terminate the "after" chain by setting its tail\'s next to null to avoid cycles from the original list structure.',
  ],
  functionName: 'partitionListRunner',
  params: ['vals', 'x'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and partitionListRunner wrapper are pre-defined.
// Implement the function below:
function partitionList(head, x) {

}
`,
    typescript: `function partitionListRunner(vals: number[], x: number): number[] {
  // implement partitionList using ListNode
  return [];
}`,
    python: `# ListNode class and partitionListRunner wrapper are pre-defined.
# Implement the function below:
def partitionList(head, x):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 2, 5, 2], 3], expected: [1, 2, 2, 4, 3, 5] },
    { args: [[2, 1], 2], expected: [1, 2] },
    { args: [[], 0], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1], 2], expected: [1] },
    { args: [[5, 1, 3, 2, 4], 3], expected: [1, 2, 5, 3, 4] },
    { args: [[3, 1, 2], 3], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5], 6], expected: [1, 2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4, 5] },
    { args: [[4, 3, 2, 5, 2], 3], expected: [2, 2, 4, 3, 5] },
    { args: [[-3, 5, -2, 11, -1, 0], 0], expected: [-3, -2, -1, 5, 11, 0] },
  ],
};
