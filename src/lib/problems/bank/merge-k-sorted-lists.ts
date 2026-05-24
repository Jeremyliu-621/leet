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
function mergeKListsRunner(lists) {
  const heads = Array.from(lists).map(a => __fromArray__(a));
  return __toArray__(mergeKLists(heads));
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

def mergeKListsRunner(lists):
    heads = [__from_array__(list(lst)) for lst in list(lists)]
    return __to_array__(mergeKLists(heads))
`.trim();

export const problem: Problem = {
  id: 'merge-k-sorted-lists',
  title: 'Merge k Sorted Lists',
  difficulty: 'hard',
  tags: ['linked-list'],
  description: `You are given an array of \`k\` linked lists, each linked list is sorted in ascending order.

Merge all the linked lists into one sorted linked list and return it.

> **Note:** A \`ListNode\` class and helper utilities are pre-defined. Your function receives an array of \`ListNode | null\` heads and must return the head of the merged sorted list.`,
  constraints: [
    'k == lists.length',
    '0 <= k <= 10^4',
    '0 <= lists[i].length <= 500',
    '-10^4 <= lists[i][j] <= 10^4',
    'lists[i] is sorted in ascending order',
    'The sum of lists[i].length will not exceed 10^4',
  ],
  examples: [
    { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
    { input: 'lists = []', output: '[]' },
    { input: 'lists = [[]]', output: '[]' },
  ],
  hints: [
    'Brute force: collect all values, sort, rebuild the list (O(N log N)). For the optimal solution, use a min-heap of size k — always extract the smallest current node and advance that list.',
    'Alternatively, use a divide-and-conquer approach: merge lists in pairs until one remains. Each pass is O(N) and there are O(log k) passes → O(N log k) total.',
    'Min-heap approach: push the head of each non-null list. Pop the min node, append it to result, and push the popped node\'s `next` (if not null). Repeat until heap is empty.',
  ],
  functionName: 'mergeKListsRunner',
  params: ['lists'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// ListNode class and mergeKListsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction mergeKLists(lists) {\n  \n}\n',
    python: '# ListNode class and mergeKListsRunner wrapper are pre-defined.\n# Implement the function below:\ndef mergeKLists(lists):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
    { args: [[]], expected: [] },
    { args: [[[]]], expected: [] },
    { args: [[[1], [2], [3]]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [[[-1, 0, 1], [-3, -2, -1]]], expected: [-3, -2, -1, -1, 0, 1] },
    { args: [[[1, 4, 7], [2, 5, 8], [3, 6, 9]]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [[[0]]], expected: [0] },
  ],
};
