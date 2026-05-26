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
function interleaveListsRunner(arr1, arr2) {
  return __toArray__(interleaveLists(__fromArray__(arr1), __fromArray__(arr2)));
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

def interleaveListsRunner(arr1, arr2):
    return __to_array__(interleaveLists(__from_array__(list(arr1)), __from_array__(list(arr2))))
`.trim();

export const problem: Problem = {
  id: 'interleave-two-linked-lists',
  title: 'Interleave Two Linked Lists',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the heads of two singly linked lists \`l1\` and \`l2\`, interleave their nodes **alternately**, starting with \`l1\`. If one list is longer than the other, append the remaining nodes of the longer list at the end.

For example, if \`l1 = [a,b,c]\` and \`l2 = [x,y,z]\`, the result is \`[a,x,b,y,c,z]\`. If \`l1 = [a,b,c,d]\` and \`l2 = [x,y]\`, the result is \`[a,x,b,y,c,d]\`.

You must rearrange the **nodes themselves**, not create new nodes.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Implement \`interleaveLists(l1, l2)\`.`,
  constraints: [
    'The number of nodes in each list is in the range [0, 10^4]',
    '0 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'l1 = [1,3,5], l2 = [2,4,6]',
      output: '[1,2,3,4,5,6]',
      explanation: 'Nodes alternate perfectly since both lists have equal length.',
    },
    {
      input: 'l1 = [1,2,3,4], l2 = [5,6]',
      output: '[1,5,2,6,3,4]',
      explanation: 'After exhausting l2, the remaining nodes of l1 ([3,4]) are appended.',
    },
    {
      input: 'l1 = [1], l2 = [2,3,4]',
      output: '[1,2,3,4]',
      explanation: 'After exhausting l1, the remaining nodes of l2 ([3,4] after node 2) are appended.',
    },
  ],
  hints: [
    'Use two pointers `p1` and `p2`. At each step, save `p1.next` and `p2.next`, then wire `p1.next = p2` and `p2.next = savedP1Next`. Advance both pointers.',
    'Stop when either pointer is null. Then append the remaining nodes of the non-null list.',
    'Handle edge cases: if either list is empty, return the other list unchanged.',
  ],
  functionName: 'interleaveListsRunner',
  params: ['l1', 'l2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and interleaveListsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction interleaveLists(l1, l2) {\n  \n}\n',
    python: '# ListNode class and interleaveListsRunner wrapper are pre-defined.\n# Implement the function below:\ndef interleaveLists(l1, l2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[1, 2, 3, 4], [5, 6]], expected: [1, 5, 2, 6, 3, 4] },
    { args: [[1], [2, 3, 4]], expected: [1, 2, 3, 4] },
    { args: [[], [1, 2]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1, 2], []], expected: [1, 2] },
    { args: [[], []], expected: [] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [1, 4, 2, 5, 3, 6] },
    { args: [[1], [2]], expected: [1, 2] },
    { args: [[1, 2, 3, 4, 5], [6, 7]], expected: [1, 6, 2, 7, 3, 4, 5] },
  ],
};
