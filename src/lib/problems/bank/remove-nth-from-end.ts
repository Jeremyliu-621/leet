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
function removeNthFromEndRunner(arr, n) { return __toArray__(removeNthFromEnd(__fromArray__(arr), n)); }
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

def removeNthFromEndRunner(arr, n):
    return __to_array__(removeNthFromEnd(__from_array__(arr), n))
`.trim();

export const problem: Problem = {
  id: 'remove-nth-from-end',
  title: 'Remove Nth Node From End of List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a linked list, remove the **n-th node from the end** of the list and return its head.

**Approach:** Use two pointers separated by n steps. Advance the fast pointer n+1 steps ahead, then move both together until fast reaches null. The slow pointer will be just before the node to remove.`,
  constraints: [
    'The number of nodes in the list is sz',
    '1 <= sz <= 30',
    '0 <= Node.val <= 100',
    '1 <= n <= sz',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5], n = 2',
      output: '[1,2,3,5]',
      explanation: 'The 2nd node from the end is 4. Remove it.',
    },
    {
      input: 'head = [1], n = 1',
      output: '[]',
      explanation: 'The only node is removed.',
    },
    {
      input: 'head = [1,2], n = 1',
      output: '[1]',
      explanation: 'The 1st node from the end is 2. Remove it.',
    },
  ],
  hints: [
    'Use a dummy node before head so you never need a special case for removing the head itself.',
    'Move the fast pointer n+1 steps ahead of slow. Then advance both until fast is null — slow is now the node just before the target.',
    '`let dummy = new ListNode(0, head), slow = dummy, fast = head; for(let i=0;i<n;i++) fast=fast.next; while(fast){slow=slow.next;fast=fast.next;} slow.next=slow.next.next; return dummy.next;`',
  ],
  functionName: 'removeNthFromEndRunner',
  params: ['head', 'n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and removeNthFromEndRunner wrapper are pre-defined.\n// Implement the function below:\nfunction removeNthFromEnd(head, n) {\n  \n}\n',
    python:
      '# ListNode class and removeNthFromEndRunner wrapper are pre-defined.\n# Implement the function below:\ndef removeNthFromEnd(head, n):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5] },
    { args: [[1], 1], expected: [] },
    { args: [[1, 2], 1], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2], 2], expected: [2] },
    { args: [[1, 2, 3], 1], expected: [1, 2] },
    { args: [[1, 2, 3], 3], expected: [2, 3] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4] },
  ],
};
