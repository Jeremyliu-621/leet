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
function doubleItRunner(arr) {
  return __toArray__(doubleIt(__fromArray__(arr)));
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

def doubleItRunner(arr):
    if hasattr(arr, 'to_py'): arr = list(arr.to_py())
    arr = [int(x) for x in arr]
    return __to_array__(doubleIt(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'double-a-number-represented-as-linked-list',
  title: 'Double a Number Represented as a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'math', 'stack'],
  description: `You are given the head of a **non-empty** linked list representing a non-negative integer without leading zeros.

Return the head of the linked list representing the value of the head's number **doubled**.

The function \`doubleItRunner(arr)\` is used for testing.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 10^4].',
    '0 <= Node.val <= 9',
    'The input is generated such that the list represents a number without leading zeros, except the number 0 itself.',
  ],
  examples: [
    {
      input: 'head = [1,8,9]',
      output: '[3,7,8]',
      explanation: '189 doubled is 378.',
    },
    {
      input: 'head = [9,9,9]',
      output: '[1,9,9,8]',
      explanation: '999 doubled is 1998.',
    },
  ],
  hints: [
    'Reverse the list, double from tail (LSB), propagate carry, then reverse back.',
    'Alternatively, use a stack or recursive approach to double from the tail.',
    'If the head digit × 2 has a carry after all operations, prepend a new node with value 1.',
  ],
  functionName: 'doubleItRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction doubleIt(head) {\n  \n}\n`,
    typescript: `${JS_PREAMBLE}\n\nfunction doubleIt(head: ListNode | null): ListNode | null {\n  \n}\n`,
    python: `${PY_PREAMBLE}\n\ndef doubleIt(head):\n    pass\n`,
  },
  visibleTests: [
    { args: [[1, 8, 9]], expected: [3, 7, 8] },
    { args: [[9, 9, 9]], expected: [1, 9, 9, 8] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[1]], expected: [2] },
    { args: [[5]], expected: [1, 0] },
    { args: [[1, 0, 0]], expected: [2, 0, 0] },
    { args: [[9, 9]], expected: [1, 9, 8] },
    { args: [[4, 5, 6]], expected: [9, 1, 2] },
  ],
};
