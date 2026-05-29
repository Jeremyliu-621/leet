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
function mergeInBetweenRunner(arr1, a, b, arr2) {
  const list1 = __fromArray__(arr1);
  const list2 = __fromArray__(arr2);
  return __toArray__(mergeInBetween(list1, a, b, list2));
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

def mergeInBetweenRunner(arr1, a, b, arr2):
    if hasattr(arr1, 'to_py'): arr1 = list(arr1.to_py())
    if hasattr(arr2, 'to_py'): arr2 = list(arr2.to_py())
    arr1 = [int(x) for x in arr1]
    arr2 = [int(x) for x in arr2]
    a, b = int(a), int(b)
    list1 = __from_array__(arr1)
    list2 = __from_array__(arr2)
    return __to_array__(mergeInBetween(list1, a, b, list2))
`.trim();

export const problem: Problem = {
  id: 'merge-in-between-linked-lists',
  title: 'Merge In Between Linked Lists',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `You are given two linked lists: \`list1\` and \`list2\` of sizes \`n\` and \`m\` respectively.

Remove nodes \`list1[a]\` through \`list1[b]\` (inclusive) and put \`list2\` in their place.

Return the head of the resulting linked list.

The function \`mergeInBetweenRunner(arr1, a, b, arr2)\` is used for testing, where \`arr1\` and \`arr2\` are arrays representing the lists.`,
  constraints: [
    '3 <= list1.length <= 10^4',
    '1 <= a <= b < list1.length - 1',
    '1 <= list2.length <= 10^4',
  ],
  examples: [
    {
      input: 'list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]',
      output: '[10,1,13,1000000,1000001,1000002,5]',
      explanation: 'Remove nodes 3 and 4 (values 6,9) from list1 and insert list2 there.',
    },
    {
      input: 'list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]',
      output: '[0,1,1000000,1000001,1000002,1000003,1000004,6]',
      explanation: 'Remove nodes 2-5, insert list2 between nodes 1 and 6.',
    },
  ],
  hints: [
    'Walk list1 to find the node just before index a (call it nodeA) and the node at index b+1 (call it nodeB).',
    'Find the tail of list2.',
    'Link nodeA.next = list2.head, list2.tail.next = nodeB.',
  ],
  functionName: 'mergeInBetweenRunner',
  params: ['arr1', 'a', 'b', 'arr2'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction mergeInBetween(list1, a, b, list2) {\n  \n}\n`,
    typescript: `${JS_PREAMBLE}\n\nfunction mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {\n  \n}\n`,
    python: `${PY_PREAMBLE}\n\ndef mergeInBetween(list1, a, b, list2):\n    pass\n`,
  },
  visibleTests: [
    { args: [[10, 1, 13, 6, 9, 5], 3, 4, [1000000, 1000001, 1000002]], expected: [10, 1, 13, 1000000, 1000001, 1000002, 5] },
    { args: [[0, 1, 2, 3, 4, 5, 6], 2, 5, [1000000, 1000001, 1000002, 1000003, 1000004]], expected: [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6] },
  ],
  hiddenTests: [
    { args: [[0, 1, 2], 1, 1, [10, 11]], expected: [0, 10, 11, 2] },
    { args: [[1, 2, 3, 4, 5], 1, 3, [100, 200]], expected: [1, 100, 200, 5] },
    { args: [[0, 1, 2, 3], 1, 2, [9, 8, 7]], expected: [0, 9, 8, 7, 3] },
    { args: [[5, 6, 7, 8, 9], 2, 4, [1, 2, 3]], expected: [5, 6, 1, 2, 3] },
  ],
};
