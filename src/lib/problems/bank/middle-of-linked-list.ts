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
function middleNodeRunner(arr) { return __toArray__(middleNode(__fromArray__(arr))); }
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

def middleNodeRunner(arr):
    return __to_array__(middleNode(__from_array__(list(arr))))
`.trim();

export const problem: Problem = {
  id: 'middle-of-linked-list',
  title: 'Middle of the Linked List',
  difficulty: 'easy',
  tags: ['linked-list'],
  description: `Given the \`head\` of a singly linked list, return the middle node. If there are two middle nodes, return the **second** middle node.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the middle node.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 100]',
    '1 <= Node.val <= 100',
  ],
  examples: [
    { input: 'head = [1, 2, 3, 4, 5]', output: '[3, 4, 5]', explanation: 'Middle node has value 3. Return the node itself (and its successors).' },
    { input: 'head = [1, 2, 3, 4]', output: '[3, 4]', explanation: 'Two middles: nodes 2 and 3. Return the second one.' },
  ],
  hints: [
    'Use two pointers: a slow pointer that moves one step at a time, and a fast pointer that moves two steps. When fast reaches the end, slow is at the middle.',
    'For a list of length n, the fast pointer exhausts when slow is at index ⌊n/2⌋, which is the second middle for even-length lists.',
    '`let slow = head, fast = head; while (fast && fast.next) { slow = slow.next; fast = fast.next.next; } return slow;`',
  ],
  functionName: 'middleNodeRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and middleNodeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction middleNode(head) {\n  \n}\n',
    python: '# ListNode class and middleNodeRunner wrapper are pre-defined.\n# Implement the function below:\ndef middleNode(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [3, 4, 5] },
    { args: [[1, 2, 3, 4]], expected: [3, 4] },
    { args: [[1, 2, 3]], expected: [2, 3] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [2] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [4, 5, 6] },
    { args: [[10, 20, 30, 40]], expected: [30, 40] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [4, 5, 6, 7] },
  ],
};
