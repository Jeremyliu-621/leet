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
function removeNthRunner(arr, n) {
  return __toArray__(removeNthFromEnd(__fromArray__(arr), n));
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

def removeNthRunner(arr, n):
    return __to_array__(removeNthFromEnd(__from_array__(arr), int(n)))
`.trim();

export const problem: Problem = {
  id: 'remove-nth-node-from-end-of-list',
  title: 'Remove Nth Node From End of List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the head of a linked list, remove the \`n\`th node from the end of the list and return its head.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and an integer \`n\`, and must return the modified head.`,
  constraints: [
    'The number of nodes in the list is sz.',
    '1 <= sz <= 30',
    '0 <= Node.val <= 100',
    '1 <= n <= sz',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5], n = 2',
      output: '[1,2,3,5]',
      explanation: 'The 2nd node from the end (value 4) is removed.',
    },
    {
      input: 'head = [1], n = 1',
      output: '[]',
      explanation: 'The only node is removed.',
    },
    {
      input: 'head = [1,2], n = 1',
      output: '[1]',
      explanation: 'The last node (value 2) is removed.',
    },
  ],
  hints: [
    'Use two pointers: advance the fast pointer n steps ahead, then move both pointers together until fast reaches the last node. At that point slow.next is the node to remove.',
    'A dummy node before head simplifies removing the head itself: set slow = dummy, fast = dummy, advance fast n steps, then co-advance until fast.next is null.',
    'After co-advancing, execute `slow.next = slow.next.next` to skip the target node, then return `dummy.next`.',
  ],
  functionName: 'removeNthRunner',
  params: ['arr', 'n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and removeNthRunner wrapper are pre-defined.
// Implement the function below:
function removeNthFromEnd(head, n) {

}`,
    python: `# ListNode class and removeNthRunner wrapper are pre-defined.
# Implement the function below:
def removeNthFromEnd(head, n):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5] },
    { args: [[1], 1], expected: [] },
    { args: [[1, 2], 1], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2], 2], expected: [2] },
    { args: [[1, 2, 3], 3], expected: [2, 3] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [1, 2, 3, 4] },
    { args: [[1, 2, 3], 1], expected: [1, 2] },
    { args: [[1, 2, 3], 2], expected: [1, 3] },
  ],
};
