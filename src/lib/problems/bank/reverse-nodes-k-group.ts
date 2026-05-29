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
function reverseKGroupRunner(vals, k) {
  return __toArray__(reverseKGroup(__fromArray__(vals), k));
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

def reverseKGroupRunner(vals, k):
    vals = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    return __to_array__(reverseKGroup(__from_array__(vals), k))
`.trim();

export const problem: Problem = {
  id: 'reverse-nodes-k-group',
  title: 'Reverse Nodes in k-Group',
  difficulty: 'hard',
  tags: ['linked-list'],
  description: `Given the head of a linked list, reverse the nodes of the list \`k\` at a time, and return the modified list.

\`k\` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of \`k\` then the **left-out nodes at the end should remain as is**.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

**Examples:**
- \`[1,2,3,4,5]\`, \`k=2\` → \`[2,1,4,3,5]\` (last node 5 is not a full group)
- \`[1,2,3,4,5]\`, \`k=3\` → \`[3,2,1,4,5]\` (last two nodes 4,5 are not a full group)

> **Note:** A \`ListNode\` class with helper utilities is pre-defined. Implement \`reverseKGroup(head, k)\`.`,
  constraints: [
    'The number of nodes in the list is n',
    '1 <= k <= n <= 5000',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'vals = [1,2,3,4,5], k = 2',
      output: '[2,1,4,3,5]',
      explanation: 'Groups: [1,2]→[2,1], [3,4]→[4,3], leftover [5] stays.',
    },
    {
      input: 'vals = [1,2,3,4,5], k = 3',
      output: '[3,2,1,4,5]',
      explanation: 'First group [1,2,3]→[3,2,1]; leftover [4,5] stays.',
    },
    {
      input: 'vals = [1,2,3,4,5], k = 1',
      output: '[1,2,3,4,5]',
      explanation: 'k=1 means no reversal; list unchanged.',
    },
  ],
  hints: [
    'First check if there are at least k nodes remaining. If not, return the head as-is (the remaining nodes stay in order).',
    'To reverse a group: use three pointers (prev, curr, next). Walk curr forward k times, reversing `curr.next = prev` at each step. Then connect the tail of the reversed group to the result of recursing on the rest.',
    'The original head of each group becomes the tail after reversal. Use a dummy node approach: after reversing k nodes, `groupHead.next = reverseKGroup(nextGroupHead, k)`.',
  ],
  functionName: 'reverseKGroupRunner',
  params: ['vals', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and reverseKGroupRunner wrapper are pre-defined.
// Implement the function below:
function reverseKGroup(head, k) {

}
`,
    typescript: `function reverseKGroupRunner(vals: number[], k: number): number[] {
  // implement reverseKGroup using ListNode
  return [];
}`,
    python: `# ListNode class and reverseKGroupRunner wrapper are pre-defined.
# Implement the function below:
def reverseKGroup(head, k):
    pass
`,
  },
  visibleTests: [
    { args: [[1,2,3,4,5], 2], expected: [2,1,4,3,5] },
    { args: [[1,2,3,4,5], 3], expected: [3,2,1,4,5] },
    { args: [[1,2,3,4,5], 1], expected: [1,2,3,4,5] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1,2], 2], expected: [2,1] },
    { args: [[1,2,3], 2], expected: [2,1,3] },
    { args: [[1,2,3,4,5,6], 2], expected: [2,1,4,3,6,5] },
    { args: [[1,2,3,4,5,6], 3], expected: [3,2,1,6,5,4] },
    { args: [[1,2,3,4], 4], expected: [4,3,2,1] },
    { args: [[1,2,3,4,5], 5], expected: [5,4,3,2,1] },
    { args: [[1,2,3,4,5,6,7], 3], expected: [3,2,1,6,5,4,7] },
  ],
};
