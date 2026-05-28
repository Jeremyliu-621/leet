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
function nodesBetweenCriticalPointsRunner(arr) {
  return nodesBetweenCriticalPoints(__fromArray__(arr));
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

def nodesBetweenCriticalPointsRunner(arr):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    return nodesBetweenCriticalPoints(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'find-the-minimum-and-maximum-number-of-nodes-between-critical-points',
  title: 'Find the Minimum and Maximum Number of Nodes Between Critical Points',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `A **critical point** in a linked list is defined as **either** a **local maxima** or a **local minima**.

A node is a **local maxima** if the current node has a value **strictly greater** than the previous node and the next node.

A node is a **local minima** if the current node has a value **strictly smaller** than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists **both** a previous node and a next node.

Given a linked list \`head\`, return *an array of length* \`2\` *containing* \`[minDistance, maxDistance]\` *where* \`minDistance\` *is the **minimum distance** between **any two distinct** critical points and* \`maxDistance\` *is the **maximum distance** between **any two distinct** critical points. If there are **fewer than two** critical points, return* \`[-1, -1]\`.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\`.`,
  constraints: [
    'The number of nodes in the list is in the range [2, 10^5].',
    '1 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'head = [3,1]',
      output: '[-1,-1]',
      explanation: 'There are no critical points in the list.',
    },
    {
      input: 'head = [5,3,1,2,5,1,2]',
      output: '[1,3]',
      explanation: 'Critical points at 0-based indices 2 (local min), 4 (local max), 5 (local min). Min distance = 5−4 = 1, max distance = 5−2 = 3.',
    },
    {
      input: 'head = [1,3,2,2,3,2,2,2,7]',
      output: '[3,3]',
      explanation: 'Critical points at indices 1 and 4 only. Distance = 3.',
    },
  ],
  hints: [
    'Traverse the list with a (prev, curr, next) window, tracking the 0-based index of each node.',
    'A critical point occurs when curr.val is strictly greater than both neighbors (local max) or strictly less (local min).',
    'Collect all critical-point indices. Return [min consecutive diff, last − first]. If fewer than 2 criticals, return [−1, −1].',
  ],
  functionName: 'nodesBetweenCriticalPointsRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and nodesBetweenCriticalPointsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction nodesBetweenCriticalPoints(head) {\n  \n}\n',
    python:
      '# ListNode class and nodesBetweenCriticalPointsRunner wrapper are pre-defined.\n# Implement the function below:\ndef nodesBetweenCriticalPoints(head):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,1]], expected: [-1,-1] },
    { args: [[5,3,1,2,5,1,2]], expected: [1,3] },
    { args: [[1,3,2,2,3,2,2,2,7]], expected: [3,3] },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5]], expected: [-1,-1] },
    { args: [[2,3,3,2]], expected: [-1,-1] },
    { args: [[1,3,1,3,1]], expected: [1,2] },
    { args: [[1,3,1,2,5,2,3,2,1]], expected: [1,5] },
  ],
};
