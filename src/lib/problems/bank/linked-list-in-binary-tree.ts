import type { Problem } from '../types';

const JS_PREAMBLE = `
class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __listFromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) { cur.next = new ListNode(arr[i]); cur = cur.next; }
  return head;
}
function __treeFromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
function isSubPathRunner(listArr, treeArr) {
  return isSubPath(__listFromArray__(listArr), __treeFromArray__(treeArr));
}
`.trim();

const PY_PREAMBLE = `
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __list_from_array__(arr):
    arr = list(arr)
    if not arr:
        return None
    head = ListNode(arr[0])
    cur = head
    for v in arr[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head

def __tree_from_array__(arr):
    arr = list(arr)
    if not arr or arr[0] is None:
        return None
    root = TreeNode(int(arr[0]))
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(int(arr[i]))
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(int(arr[i]))
            queue.append(node.right)
        i += 1
    return root

def isSubPathRunner(list_arr, tree_arr):
    if hasattr(list_arr, 'to_py'): list_arr = list(list_arr.to_py())
    if hasattr(tree_arr, 'to_py'): tree_arr = list(tree_arr.to_py())
    list_arr = [int(x) for x in list_arr]
    tree_arr = [int(x) if isinstance(x, (int, float)) and not isinstance(x, bool) else None for x in tree_arr]
    return isSubPath(__list_from_array__(list_arr), __tree_from_array__(tree_arr))
`.trim();

const TREE = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];

export const problem: Problem = {
  id: 'linked-list-in-binary-tree',
  title: 'Linked List in Binary Tree',
  difficulty: 'medium',
  tags: ['linked-list', 'tree'],
  description: `Given a binary tree \`root\` and a linked list with \`head\` as the first node.

Return \`true\` if all the elements in the linked list starting from the \`head\` correspond to some **downward path** connected in the binary tree, otherwise return \`false\`.

A downward path means a path that starts at some node and goes downward.

The function \`isSubPathRunner(listArr, treeArr)\` is used for testing.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 2500].',
    'The number of nodes in the list is in the range [1, 100].',
    '1 <= Node.val <= 100 for both the tree and the linked list.',
  ],
  examples: [
    {
      input: 'head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]',
      output: 'true',
      explanation: 'The path 4→2→8 exists going down from a node with value 4.',
    },
    {
      input: 'head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]',
      output: 'true',
    },
    {
      input: 'head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]',
      output: 'false',
      explanation: 'No downward path matches the full sequence 1→4→2→6→8.',
    },
  ],
  hints: [
    'For each node in the tree, try to match the linked list starting from that node downward.',
    'Write a helper `dfs(list, tree)` that returns true if the linked list matches the tree path starting here.',
    'The outer function tries every tree node as a potential starting point.',
  ],
  functionName: 'isSubPathRunner',
  params: ['listArr', 'treeArr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction isSubPath(head, root) {\n  \n}\n`,
    typescript: `${JS_PREAMBLE}\n\nfunction isSubPath(head: ListNode | null, root: TreeNode | null): boolean {\n  \n}\n`,
    python: `${PY_PREAMBLE}\n\ndef isSubPath(head, root):\n    pass\n`,
  },
  visibleTests: [
    { args: [[4, 2, 8], TREE], expected: true },
    { args: [[1, 4, 2, 6], TREE], expected: true },
    { args: [[1, 4, 2, 6, 8], TREE], expected: false },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: true },
    { args: [[2], [1]], expected: false },
    { args: [[1, 2], [1, 2, 3]], expected: true },
    { args: [[1, 3], [1, 2, 3]], expected: true },
    { args: [[1, 2, 4], [1, 2, 3, 4, 5]], expected: true },
    { args: [[3, 2], [1, 2, 3, 4, 5]], expected: false },
  ],
};
