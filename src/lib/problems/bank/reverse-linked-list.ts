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
function reverseListRunner(arr) { return __toArray__(reverseList(__fromArray__(arr))); }
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

def reverseListRunner(arr):
    return __to_array__(reverseList(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'reverse-linked-list',
  title: 'Reverse Linked List',
  difficulty: 'easy',
  tags: ['linked-list'],
  description: `Given the head of a singly linked list, reverse the list, and return the reversed list.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined in the runtime environment. Your function receives a \`ListNode | null\` head and must return the reversed head.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 5000]',
    '-5000 <= Node.val <= 5000',
  ],
  examples: [
    { input: 'head = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' },
    { input: 'head = [1, 2]', output: '[2, 1]' },
    { input: 'head = []', output: '[]' },
  ],
  hints: [
    'Iterative approach: keep three pointers — `prev` (initially null), `curr` (initially head), and `next`. At each step, save `curr.next`, point `curr.next` to `prev`, advance `prev` to `curr`, and advance `curr` to the saved `next`.',
    'When the loop ends (`curr === null`), `prev` is the new head. Return `prev`.',
    '`let prev=null, curr=head; while(curr){const next=curr.next; curr.next=prev; prev=curr; curr=next;} return prev;`',
  ],
  functionName: 'reverseListRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and reverseListRunner wrapper are pre-defined.\n// Implement the function below:\nfunction reverseList(head) {\n  \n}\n',
    python: '# ListNode class and reverseListRunner wrapper are pre-defined.\n# Implement the function below:\ndef reverseList(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [3, 2, 1] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[-1, 0, 1]], expected: [1, 0, -1] },
  ],
};
