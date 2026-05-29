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
function mergeKListsRunner(arrays) {
  arrays = Array.from(arrays).map(a => Array.from(a));
  const lists = arrays.map(a => __fromArray__(a));
  return __toArray__(mergeKLists(lists));
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

def mergeKListsRunner(arrays):
    arrays = list(arrays.to_py() if hasattr(arrays, 'to_py') else arrays)
    arrays = [list(a.to_py() if hasattr(a, 'to_py') else a) for a in arrays]
    lists = [__from_array__(a) for a in arrays]
    return __to_array__(mergeKLists(lists))
`.trim();

export const problem: Problem = {
  id: 'merge-k-sorted-linked-lists',
  title: 'Merge K Sorted Linked Lists',
  difficulty: 'hard',
  tags: ['linked-list', 'heap'],
  description: `You are given an array of \`k\` linked lists, each sorted in **ascending order**. Merge all the lists into one sorted linked list and return its head.

**Examples:**
- \`[[1,4,5],[1,3,4],[2,6]]\` → \`[1,1,2,3,4,4,5,6]\`
- \`[]\` → \`[]\`
- \`[[]]\` → \`[]\`

**Approach hint:** A min-heap (priority queue) can efficiently track the smallest current node across all lists in O(N log k) time, where N is the total number of nodes.

> **Note:** A \`ListNode\` class and \`mergeKListsRunner\` wrapper are pre-defined. Your function \`mergeKLists(lists)\` receives an array of \`ListNode | null\` heads and must return the merged head.`,
  constraints: [
    'k == lists.length',
    '0 <= k <= 10^4',
    '0 <= lists[i].length <= 500',
    '-10^4 <= lists[i][j] <= 10^4',
    'Each list is sorted in non-decreasing order',
    'The sum of all list lengths does not exceed 10^4',
  ],
  examples: [
    {
      input: 'arrays = [[1,4,5],[1,3,4],[2,6]]',
      output: '[1,1,2,3,4,4,5,6]',
      explanation: 'Merging three sorted lists: pick minimum heads repeatedly.',
    },
    {
      input: 'arrays = []',
      output: '[]',
      explanation: 'No lists to merge.',
    },
    {
      input: 'arrays = [[]]',
      output: '[]',
      explanation: 'Single empty list produces empty merged list.',
    },
  ],
  hints: [
    'The naive approach is O(Nk) — repeatedly scan all k list heads for the minimum. To do better, maintain a min-heap of size k containing the current front node of each non-empty list.',
    'Min-heap approach: initialize by inserting the head of each non-empty list. Repeatedly extract the minimum node, append it to the result, and if that node has a next, insert the next into the heap.',
    'JavaScript/Python have no built-in heap, but you can simulate one with a sorted structure or use a divide-and-conquer approach: merge lists pairwise (like merge sort), repeatedly halving the number of lists until one remains.',
  ],
  functionName: 'mergeKListsRunner',
  params: ['arrays'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// ListNode class and mergeKListsRunner wrapper are pre-defined.
// Implement the function below:
function mergeKLists(lists) {

}
`,
    typescript: `function mergeKListsRunner(arrays: number[][]): number[] {
  // implement mergeKLists using ListNode
  return [];
}`,
    python: `# ListNode class and mergeKListsRunner wrapper are pre-defined.
# Implement the function below:
def mergeKLists(lists):
    pass
`,
  },
  visibleTests: [
    { args: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
    { args: [[]], expected: [] },
    { args: [[[]]], expected: [] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [1] },
    { args: [[[1, 2, 3]]], expected: [1, 2, 3] },
    { args: [[[1, 3, 5], [2, 4, 6]]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[[1, 1, 1], [1, 1, 1]]], expected: [1, 1, 1, 1, 1, 1] },
    { args: [[[5], [4], [3], [2], [1]]], expected: [1, 2, 3, 4, 5] },
    { args: [[[1, 10, 20], [], [2, 5, 15]]], expected: [1, 2, 5, 10, 15, 20] },
    { args: [[[-5, -1, 0], [-3, 2, 4]]], expected: [-5, -3, -1, 0, 2, 4] },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [[[2, 2, 2], [2, 2], [2]]], expected: [2, 2, 2, 2, 2, 2] },
  ],
};
