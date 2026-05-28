import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; this.next = next;
  }
}
function __fromArray__(arr) {
  let dummy = new ListNode(0), cur = dummy;
  for (const v of arr) { cur.next = new ListNode(v); cur = cur.next; }
  return dummy.next;
}
function __toArray__(head) {
  const res = [];
  while (head) { res.push(head.val); head = head.next; }
  return res;
}
function removeNodesRunner(arr) {
  return __toArray__(removeNodes(__fromArray__(arr)));
}
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val; self.next = next

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    dummy = ListNode(); cur = dummy
    for v in raw_list:
        cur.next = ListNode(int(v)); cur = cur.next
    return dummy.next

def __to_array__(head):
    res = []
    while head:
        res.append(head.val); head = head.next
    return res

def removeNodesRunner(arr):
    return __to_array__(removeNodes(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'remove-nodes-from-linked-list',
  title: 'Remove Nodes From Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'stack'],
  description: `You are given the \`head\` of a linked list.

Remove every node which has a node with a **strictly greater** value anywhere to the right side of it.

Return the \`head\` of the modified linked list.

Lists are represented as arrays. The runner accepts an array and returns an array.

> **Note:** \`ListNode\` class and \`removeNodesRunner\` wrapper are pre-defined. Implement \`removeNodes(head)\`.`,
  constraints: [
    'The number of nodes in the given list is in the range [1, 10^5].',
    '1 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'head = [5,2,13,3,8]',
      output: '[13,8]',
      explanation:
        'Node 5 is removed because 13 is to its right. Node 2 is removed because 13 is to its right. Node 13 stays (nothing greater to its right). Node 3 is removed because 8 is to its right. Node 8 stays.',
    },
    {
      input: 'head = [1,1,1,1]',
      output: '[1,1,1,1]',
      explanation: 'Equal values are not strictly greater, so no node is removed and all four remain.',
    },
  ],
  hints: [
    'Reverse the list, traverse keeping a running max. A node survives if its value is ≥ the current max.',
    'Alternatively, use a monotonic stack: push nodes; when a larger node arrives, pop all smaller nodes from the top.',
    'After processing, the stack (from bottom to top) or reversed list gives the answer.',
  ],
  functionName: 'removeNodesRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and removeNodesRunner wrapper are pre-defined.\n// Implement the function below:\nfunction removeNodes(head) {\n  \n}\n',
    python:
      '# ListNode class and removeNodesRunner wrapper are pre-defined.\n# Implement the function below:\ndef removeNodes(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 2, 13, 3, 8]], expected: [13, 8] },
    { args: [[1, 1, 1, 1]], expected: [1, 1, 1, 1] },
    { args: [[1, 2, 3, 4, 5]], expected: [5] },
  ],
  hiddenTests: [
    { args: [[5]], expected: [5] },
    { args: [[3, 2, 1]], expected: [3, 2, 1] },
    { args: [[1, 3, 2, 4, 2, 5]], expected: [5] },
    { args: [[2, 1, 3, 1, 2]], expected: [3, 2] },
  ],
};
