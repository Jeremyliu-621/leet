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
function partitionListRunner(arr, x) { return __toArray__(partition(__fromArray__(arr), x)); }
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

def partitionListRunner(arr, x):
    return __to_array__(partition(__from_array__(arr), int(x)))
`.trim();

export const problem: Problem = {
  id: 'partition-list',
  title: 'Partition List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given the \`head\` of a linked list and a value \`x\`, partition it so that all nodes with values **less than** \`x\` come before nodes with values **greater than or equal to** \`x\`.

You must **preserve the original relative order** of nodes in each partition.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives a \`ListNode | null\` head and an integer \`x\`, and must return the head of the rearranged list.`,
  constraints: [
    'The number of nodes in the list is in the range [0, 200]',
    '-100 <= Node.val <= 100',
    '-200 <= x <= 200',
  ],
  examples: [
    {
      input: 'head = [1, 4, 3, 2, 5, 2], x = 3',
      output: '[1, 2, 2, 4, 3, 5]',
      explanation: 'Nodes with values < 3 are [1, 2, 2]; nodes with values >= 3 are [4, 3, 5]. Their relative orders are preserved.',
    },
    {
      input: 'head = [2, 1], x = 2',
      output: '[1, 2]',
      explanation: 'Node 1 (< 2) moves before node 2 (>= 2).',
    },
    {
      input: 'head = [], x = 3',
      output: '[]',
      explanation: 'Empty list — nothing to partition.',
    },
  ],
  hints: [
    'Create two dummy head nodes: one for the "less" partition and one for the "greater-or-equal" partition.',
    'Scan the original list. Append each node to the appropriate sub-list based on whether its value is less than `x`.',
    'After the scan, terminate the "greater-or-equal" list with null, then link the tail of the "less" list to the head of the "greater-or-equal" list. Return `lessDummy.next`.',
  ],
  functionName: 'partitionListRunner',
  params: ['head', 'x'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// ListNode class and partitionListRunner wrapper are pre-defined.\n// Implement the function below:\nfunction partition(head, x) {\n  \n}\n',
    typescript: "function partitionListRunner(head: number[], x: number): number[] {\n  \n}",

    python:
      '# ListNode class and partitionListRunner wrapper are pre-defined.\n# Implement the function below:\ndef partition(head, x):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 4, 3, 2, 5, 2], 3], expected: [1, 2, 2, 4, 3, 5] },
    { args: [[2, 1], 2], expected: [1, 2] },
    { args: [[], 3], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 1], 0], expected: [1, 1] },
    { args: [[3, 1, 2], 2], expected: [1, 3, 2] },
    { args: [[1, 4, 3, 0, 2, 5, 2], 3], expected: [1, 0, 2, 2, 4, 3, 5] },
    { args: [[5, 4, 3, 2, 1], 3], expected: [2, 1, 5, 4, 3] },
  ],
};
