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
function listDecimalValueRunner(arr) { return listDecimalValue(__fromArray__(arr)); }
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

def listDecimalValueRunner(arr):
    return listDecimalValue(__from_array__(list(arr)))
`.trim();

export const problem: Problem = {
  id: 'linked-list-decimal-value',
  title: 'Decimal Value of Linked List',
  difficulty: 'easy',
  tags: ['linked-list', 'math'],
  description: `You are given a singly linked list where each node stores a **single decimal digit** (0–9). The digits are stored in **most-significant-digit-first** order (i.e., the head node contains the most significant digit).

Return the **integer value** of the number formed by the linked list's digits.

For example, if the list is \`1 → 2 → 3\`, the value is \`123\`.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Implement \`listDecimalValue(head)\`.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 30]',
    '0 <= Node.val <= 9',
    'The number represented does not have leading zeros, except for the number 0 itself',
  ],
  examples: [
    {
      input: 'head = [1,2,3]',
      output: '123',
      explanation: '1 × 100 + 2 × 10 + 3 × 1 = 123.',
    },
    {
      input: 'head = [0]',
      output: '0',
      explanation: 'Single node with value 0.',
    },
    {
      input: 'head = [9,9,9]',
      output: '999',
    },
  ],
  hints: [
    'Traverse the list while maintaining a running result. At each node, multiply the current result by 10 and add the node\'s value.',
    '`result = result * 10 + node.val`. This is analogous to how you would read a decimal number left to right.',
    'Initialize `result = 0` and traverse until `head` is null. The final value of `result` is the answer.',
  ],
  functionName: 'listDecimalValueRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and listDecimalValueRunner wrapper are pre-defined.\n// Implement the function below:\nfunction listDecimalValue(head) {\n  \n}\n',
    typescript: "function listDecimalValueRunner(head: number[]): number {\n  \n}",

    python: '# ListNode class and listDecimalValueRunner wrapper are pre-defined.\n# Implement the function below:\ndef listDecimalValue(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 123 },
    { args: [[0]], expected: 0 },
    { args: [[9, 9, 9]], expected: 999 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 0, 0]], expected: 100 },
    { args: [[4, 5, 6, 7]], expected: 4567 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 123456789 },
    { args: [[5, 0]], expected: 50 },
    { args: [[3, 7, 2]], expected: 372 },
  ],
};
