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
function mergeNodesRunner(arr) { return __toArray__(mergeNodes(__fromArray__(arr))); }
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

def mergeNodesRunner(arr):
    return __to_array__(mergeNodes(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'merge-nodes-in-between-zeros',
  title: 'Merge Nodes in Between Zeros',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `You are given the head of a linked list, which contains a series of integers **separated** by \`0\`s. The **beginning** and **end** of the linked list will have \`Node.val == 0\`.

For every two consecutive \`0\`s, **merge** all the nodes lying in between them into a single node whose value is the **sum** of all the merged nodes. The modified list should not contain any \`0\`s.

Return the \`head\` of the modified linked list.

> **Note:** A \`ListNode\` class and helpers are pre-defined. Your function receives a \`ListNode\` and must return the head of the modified list.

**Args:** \`head: ListNode\`

**Example 1:**

\`\`\`
Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: The nodes between the first and second 0s: 3+1=4.
             The nodes between the second and third 0s: 4+5+2=11.
\`\`\`

**Example 2:**

\`\`\`
Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
\`\`\``,
  constraints: [
    'The number of nodes is in the range [3, 2 * 10^5]',
    '0 <= Node.val <= 1000',
    'There are no two consecutive nodes with Node.val == 0',
    'The beginning and end of the linked list have Node.val == 0',
  ],
  examples: [
    { input: 'head = [0,3,1,0,4,5,2,0]', output: '[4,11]' },
    { input: 'head = [0,1,0,3,0,2,2,0]', output: '[1,3,4]' },
  ],
  hints: [
    'Walk through the list starting after the first zero. Accumulate a running sum until you hit another zero.',
    'When you hit a zero, create a new node (or reuse the existing zero node) with the accumulated sum. Then reset the sum and continue.',
    'Build the result by chaining these sum-nodes. Stop when there are no more non-sentinel zeros (i.e., when the next zero is the tail sentinel).',
  ],
  functionName: 'mergeNodesRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and mergeNodesRunner wrapper are pre-defined.\n// Implement the function below:\nfunction mergeNodes(head) {\n  \n}\n',
    python: '# ListNode class and mergeNodesRunner wrapper are pre-defined.\n# Implement the function below:\ndef mergeNodes(head):\n    pass\n',
    typescript: '// ListNode class and mergeNodesRunner wrapper are pre-defined.\n// Implement the function below:\nfunction mergeNodes(head: ListNode | null): ListNode | null {\n  \n}\n',
  },
  visibleTests: [
    { args: [[0, 3, 1, 0, 4, 5, 2, 0]], expected: [4, 11] },
    { args: [[0, 1, 0, 3, 0, 2, 2, 0]], expected: [1, 3, 4] },
  ],
  hiddenTests: [
    { args: [[0, 5, 0]], expected: [5] },
    { args: [[0, 1, 2, 3, 0]], expected: [6] },
    { args: [[0, 1, 0, 2, 0, 3, 0]], expected: [1, 2, 3] },
    { args: [[0, 10, 10, 0, 5, 0]], expected: [20, 5] },
    { args: [[0, 7, 3, 0, 1, 0]], expected: [10, 1] },
  ],
};
