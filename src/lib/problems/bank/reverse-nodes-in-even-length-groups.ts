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
function reverseEvenLengthGroupsRunner(arr) {
  return __toArray__(reverseEvenLengthGroups(__fromArray__(arr)));
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

def reverseEvenLengthGroupsRunner(arr):
    return __to_array__(reverseEvenLengthGroups(__from_array__(arr)))
`.trim();

export const problem: Problem = {
  id: 'reverse-nodes-in-even-length-groups',
  title: 'Reverse Nodes in Even Length Groups',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `You are given the head of a linked list. The nodes are assigned sequentially to groups of lengths **1, 2, 3, 4, …** (the last group may be shorter if the list runs out of nodes).

**Reverse** the nodes in every group with an **even** number of nodes, and return the head of the modified list.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and must return the modified head.`,
  constraints: [
    'The number of nodes in the list is in the range `[1, 10^5]`',
    '`0 <= Node.val <= 10^5`',
  ],
  examples: [
    {
      input: 'head = [5,2,6,3,9,1,7,3,8,4]',
      output: '[5,6,2,3,9,1,4,8,3,7]',
      explanation: 'Group 1: [5] (odd length 1, keep). Group 2: [2,6] (even length 2, reverse → [6,2]). Group 3: [3,9,1] (odd length 3, keep). Group 4: [7,3,8,4] (even length 4, reverse → [4,8,3,7]).',
    },
    {
      input: 'head = [1,1,0,6]',
      output: '[1,0,1,6]',
      explanation: 'Group 1: [1] (keep). Group 2: [1,0] (reverse → [0,1]). Group 3: [6] (only 1 node left, odd, keep).',
    },
    {
      input: 'head = [1,1,0,6,5]',
      output: '[1,0,1,5,6]',
      explanation: 'Group 1: [1] (keep). Group 2: [1,0] (even, reverse → [0,1]). Group 3: [6,5] (only 2 nodes left — length 2 is even, reverse → [5,6]).',
    },
  ],
  hints: [
    'Process the list group by group. Track the expected group size `g = 1, 2, 3, ...`. For each group, collect up to `g` nodes (fewer if the list ends early).',
    'Count how many nodes were actually collected. If the actual count is even, reverse that segment in place.',
    'To reverse a sublist segment: keep a pointer to the node just before the segment (`prev`). Walk the segment, collecting nodes; then re-attach in reversed order using standard singly-linked-list reversal.',
  ],
  functionName: 'reverseEvenLengthGroupsRunner',
  params: ['head'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and reverseEvenLengthGroupsRunner wrapper are pre-defined.
// Implement the function below:
function reverseEvenLengthGroups(head) {

}`,
    python: `# ListNode class and reverseEvenLengthGroupsRunner wrapper are pre-defined.
# Implement the function below:
def reverseEvenLengthGroups(head):
    pass`,
  },
  visibleTests: [
    { args: [[5, 2, 6, 3, 9, 1, 7, 3, 8, 4]], expected: [5, 6, 2, 3, 9, 1, 4, 8, 3, 7] },
    { args: [[1, 1, 0, 6]], expected: [1, 0, 1, 6] },
    { args: [[1, 1, 0, 6, 5]], expected: [1, 0, 1, 5, 6] },
  ],
  hiddenTests: [
    // Single node — group 1 has size 1 (odd), keep.
    { args: [[1]], expected: [1] },
    // Group 1=[1] odd keep; group 2 expected 2 but only 1 node [2] → odd keep.
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1, 2, 3]], expected: [1, 3, 2] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 3, 2, 4, 5, 6] },
    { args: [[1, 2, 3, 4]], expected: [1, 3, 2, 4] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 3, 2, 4, 5, 6, 7] },
  ],
};
