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
function mergeTwoListsRunner(a, b) {
  return __toArray__(mergeTwoLists(__fromArray__(a), __fromArray__(b)));
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

def mergeTwoListsRunner(a, b):
    return __to_array__(mergeTwoLists(__from_array__(a), __from_array__(b)))
`.trim();

export const problem: Problem = {
  id: 'merge-two-sorted-linked-lists',
  title: 'Merge Two Sorted Linked Lists',
  difficulty: 'easy',
  tags: ['linked-list', 'two-pointers'],
  description: `You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
  constraints: [
    'The number of nodes in both lists is in the range [0, 50]',
    '-100 <= Node.val <= 100',
    'Both list1 and list2 are sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'list1 = [1, 2, 4], list2 = [1, 3, 4]',
      output: '[1, 1, 2, 3, 4, 4]',
    },
    {
      input: 'list1 = [], list2 = []',
      output: '[]',
    },
    {
      input: 'list1 = [], list2 = [0]',
      output: '[0]',
    },
  ],
  hints: [
    'Use a dummy head node to simplify edge cases. Maintain a `curr` pointer starting at dummy. Compare `l1.val` and `l2.val`, attach the smaller node, and advance that pointer and `curr`.',
    'After the loop, attach the remaining non-null list to `curr.next`. Return `dummy.next`.',
    '`const dummy=new ListNode(0); let c=dummy; while(l1&&l2){if(l1.val<=l2.val){c.next=l1;l1=l1.next;}else{c.next=l2;l2=l2.next;} c=c.next;} c.next=l1||l2; return dummy.next;`',
  ],
  functionName: 'mergeTwoListsRunner',
  params: ['list1', 'list2'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and mergeTwoListsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction mergeTwoLists(list1, list2) {\n  \n}\n',
    typescript: "function mergeTwoListsRunner(list1: number[], list2: number[]): number[] {\n  \n}",

    python: '# ListNode class and mergeTwoListsRunner wrapper are pre-defined.\n# Implement the function below:\ndef mergeTwoLists(list1, list2):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4] },
    { args: [[], []], expected: [] },
    { args: [[], [0]], expected: [0] },
    { args: [[1], [2]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1, 1] },
    { args: [[2, 5, 7], [1, 3, 6, 9]], expected: [1, 2, 3, 5, 6, 7, 9] },
    { args: [[1, 2, 3], []], expected: [1, 2, 3] },
    { args: [[-3, -1, 2], [-2, 0, 4]], expected: [-3, -2, -1, 0, 2, 4] },
  ],
};
