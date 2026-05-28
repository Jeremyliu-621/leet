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
    head = __from_array__(list(arr))
    result = removeNthFromEnd(head, int(n))
    return __to_array__(result)
`.trim();

export const problem: Problem = {
  id: 'remove-nth-from-end',
  title: 'Remove Nth Node From End of List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the \`head\` of a linked list, remove the \`n\`th node from the end of the list and return its head.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and an integer \`n\`, and must return the head of the modified list.`,
  constraints: [
    'The number of nodes in the list is sz',
    '1 <= sz <= 30',
    '0 <= Node.val <= 100',
    '1 <= n <= sz',
  ],
  examples: [
    { input: 'head = [1, 2, 3, 4, 5], n = 2', output: '[1, 2, 3, 5]', explanation: 'Remove the 2nd node from the end (value 4).' },
    { input: 'head = [1], n = 1', output: '[]' },
    { input: 'head = [1, 2], n = 1', output: '[1]' },
  ],
  hints: [
    'Use a dummy node before head to simplify edge cases (removing the first node). Apply the fast/slow two-pointer technique.',
    'Advance the fast pointer n+1 steps from the dummy. Then move both pointers together until fast reaches null. The slow pointer is now just before the node to remove.',
    '`const dummy = new ListNode(0); dummy.next = head; let fast = dummy, slow = dummy; for (let i = 0; i <= n; i++) fast = fast.next; while (fast) { fast = fast.next; slow = slow.next; } slow.next = slow.next.next; return dummy.next;`',
  ],
  functionName: 'removeNthFromEndRunner',
  params: ['head', 'n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and removeNthFromEndRunner wrapper are pre-defined.\n// Implement the function below:\nfunction removeNthFromEnd(head, n) {\n  \n}\n',
    typescript: "function removeNthFromEndRunner(head: number[], n: number): number[] {\n  \n}",

    python: '# ListNode class and removeNthFromEndRunner wrapper are pre-defined.\n# Implement the function below:\ndef removeNthFromEnd(head, n):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5] },
    { args: [[1], 1], expected: [] },
    { args: [[1, 2], 1], expected: [1] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [2, 3, 4, 5] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4] },
    { args: [[1, 2], 2], expected: [2] },
    { args: [[1, 2, 3], 2], expected: [1, 3] },
    { args: [[1, 2, 3, 4], 3], expected: [1, 3, 4] },
  ],
};
