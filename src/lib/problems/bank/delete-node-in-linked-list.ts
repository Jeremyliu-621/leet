import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; this.next = next;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}
function __toArray__(head) {
  const res = [];
  while (head) { res.push(head.val); head = head.next; }
  return res;
}
function deleteNodeRunner(arr, nodeVal) {
  const head = __fromArray__(arr);
  let cur = head;
  while (cur && cur.val !== nodeVal) cur = cur.next;
  deleteNode(cur);
  return __toArray__(head);
}
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def __from_array__(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    cur = head
    for v in arr[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head

def __to_array__(head):
    res = []
    while head:
        res.append(head.val)
        head = head.next
    return res

def deleteNodeRunner(arr, node_val):
    head = __from_array__(list(arr))
    cur = head
    while cur and cur.val != node_val:
        cur = cur.next
    deleteNode(cur)
    return __to_array__(head)
`.trim();

export const problem: Problem = {
  id: 'delete-node-in-linked-list',
  title: 'Delete Node in a Linked List',
  difficulty: 'easy',
  tags: ['linked-list'],
  description: `There is a singly linked list. You are given the **node to be deleted** (not the head). All node values in the list are **unique**.

Delete the given node such that the list no longer contains it. The node to delete is **not a tail node**.

> **Note:** A \`ListNode\` class is pre-defined. Nodes have \`val\` and \`next\` fields. The runner finds the node by value, passes it to your function, then collects the resulting list.`,
  constraints: [
    'The number of nodes in the given list is in the range [2, 1000]',
    '-1000 <= Node.val <= 1000',
    'The value of each node in the list is unique',
    'The node to be deleted is in the list and is not a tail node',
  ],
  examples: [
    {
      input: 'head = [4,5,1,9], node = 5',
      output: '[4,1,9]',
      explanation: 'Copy the next node\'s value into this node and redirect the next pointer, effectively skipping the original next node.',
    },
    {
      input: 'head = [4,5,1,9], node = 1',
      output: '[4,5,9]',
    },
  ],
  hints: [
    'You don\'t have access to the head of the list — only to the node itself.',
    'Copy the value of the next node into the current node, then make the current node skip the next node.',
    '`node.val = node.next.val; node.next = node.next.next`',
  ],
  functionName: 'deleteNodeRunner',
  params: ['head', 'node'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class is pre-defined. Implement the function below:\nfunction deleteNode(node) {\n  \n}\n',
    typescript: "function deleteNodeRunner(head: number[], node: number): number[] {\n  \n}",

    python:
      '# ListNode class is pre-defined. Implement the function below:\ndef deleteNode(node):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 5, 1, 9], 5], expected: [4, 1, 9] },
    { args: [[4, 5, 1, 9], 1], expected: [4, 5, 9] },
    { args: [[1, 2, 3], 1], expected: [2, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: [2] },
    { args: [[5, 1, 2, 3, 4], 3], expected: [5, 1, 2, 4] },
    { args: [[0, 1], 0], expected: [1] },
  ],
};
