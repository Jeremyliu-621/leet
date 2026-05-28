import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}
function middleNodeRunner(arr) {
  const mid = middleNode(__fromArray__(arr));
  const res = [];
  let cur = mid;
  while (cur) { res.push(cur.val); cur = cur.next; }
  return res;
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

def middleNodeRunner(arr):
    mid = middleNode(__from_array__(arr))
    res = []
    cur = mid
    while cur:
        res.append(cur.val)
        cur = cur.next
    return res
`.trim();

export const problem: Problem = {
  id: 'middle-of-the-linked-list',
  title: 'Middle of the Linked List',
  difficulty: 'easy',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the \`head\` of a singly linked list, return the **middle node**. If there are two middle nodes, return the **second** middle node.

> **Note:** A \`ListNode\` class is pre-defined with \`val\` and \`next\` fields. Return the middle \`ListNode\` itself — the runner collects all nodes from it to the end for testing.`,
  constraints: [
    'The number of nodes in the list is in the range [1, 100].',
    '1 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'head = [1,2,3,4,5]',
      output: '[3,4,5]',
      explanation: 'The middle node has value 3. Returning it gives the sublist [3,4,5].',
    },
    {
      input: 'head = [1,2,3,4,5,6]',
      output: '[4,5,6]',
      explanation: 'With two middle nodes (3 and 4), we return the second one. Sublist is [4,5,6].',
    },
  ],
  hints: [
    'Use the slow/fast pointer (tortoise-and-hare) technique. Move `slow` one step at a time and `fast` two steps at a time.',
    'When `fast` reaches the end (null) or the last node, `slow` is at the middle.',
    'Initialize both pointers to `head`. Loop while `fast !== null && fast.next !== null`, then return `slow`.',
  ],
  functionName: 'middleNodeRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode is pre-defined. Implement the function below:
function middleNode(head) {

}`,
    python: `# ListNode is pre-defined. Implement the function below:
def middleNode(head):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [3, 4, 5] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [4, 5, 6] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [2] },
    { args: [[1, 2, 3]], expected: [2, 3] },
    { args: [[1, 2, 3, 4]], expected: [3, 4] },
    { args: [[5, 10, 15, 20, 25, 30, 35]], expected: [20, 25, 30, 35] },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: [5, 6, 7, 8] },
    { args: [[42]], expected: [42] },
  ],
};
