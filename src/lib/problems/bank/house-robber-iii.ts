import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
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
function robRunner(arr) {
  return rob(__fromArray__(arr));
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

def robRunner(arr):
    return rob(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'house-robber-iii',
  title: 'House Robber III',
  difficulty: 'medium',
  tags: ['tree'],
  description: `The thief has found himself a new place for his activities: a binary tree of houses. Each house has a certain amount of money stashed. The only constraint stopping the thief from robbing each of them is that adjacent houses (connected by an edge) will sound an alarm if robbed on the same night.

Given the \`root\` of the binary tree, return the **maximum amount of money the thief can rob** without alerting the police.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10000]',
    '0 <= Node.val <= 10000',
  ],
  examples: [
    {
      input: 'root = [3,2,3,null,3,null,1]',
      output: '7',
      explanation: 'Rob 3 (root) + 3 (left grandchild) + 1 (right grandchild) = 7.',
    },
    {
      input: 'root = [3,4,5,1,3,null,1]',
      output: '9',
      explanation: 'Rob 4 (left child) + 5 (right child) = 9.',
    },
    {
      input: 'root = [1]',
      output: '1',
    },
  ],
  hints: [
    'For each node, you have two choices: rob it (and cannot rob its children) or skip it (can rob its children). These choices form a recursion.',
    'Let `dp(node)` return two values: the max money if we rob `node` and the max money if we skip `node`. Then choose the better option at the parent.',
    'If we rob `node`: gain = node.val + skip(left) + skip(right). If we skip: gain = max(rob(left), skip(left)) + max(rob(right), skip(right)).',
  ],
  functionName: 'robRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and robRunner wrapper are pre-defined.
function rob(root) {
  function dp(node) {
    if (!node) return [0, 0];
    const [lr, ls] = dp(node.left);
    const [rr, rs] = dp(node.right);
    return [node.val + ls + rs, Math.max(lr, ls) + Math.max(rr, rs)];
  }
  return Math.max(...dp(root));
}`,
    typescript: `function robRunner(arr: (number | null)[]): number {
  if (!arr.length || arr[0] === null) return 0;
  type N = { val: number; left: N | null; right: N | null };
  const mk = (v: number): N => ({ val: v, left: null, right: null });
  const root = mk(arr[0] as number);
  const q: N[] = [root];
  let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift()!;
    if (arr[i] != null) { node.left = mk(arr[i] as number); q.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = mk(arr[i] as number); q.push(node.right); }
    i++;
  }
  const dp = (n: N | null): [number, number] => {
    if (!n) return [0, 0];
    const [lr, ls] = dp(n.left), [rr, rs] = dp(n.right);
    return [n.val + ls + rs, Math.max(lr, ls) + Math.max(rr, rs)];
  };
  return Math.max(...dp(root));
}`,
    python: `# TreeNode class and robRunner wrapper are pre-defined.
def rob(root):
    def dp(node):
        if not node:
            return (0, 0)
        lr, ls = dp(node.left)
        rr, rs = dp(node.right)
        return (node.val + ls + rs, max(lr, ls) + max(rr, rs))
    return max(dp(root))`,
  },
  visibleTests: [
    { args: [[3, 2, 3, null, 3, null, 1]], expected: 7 },
    { args: [[3, 4, 5, 1, 3, null, 1]], expected: 9 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 1, 3, null, null, null, 1]], expected: 4 },
    { args: [[4, 1, null, 2, null, 3]], expected: 7 },
    { args: [[1, 2, 3, 4, 5]], expected: 12 },
    { args: [[5, 1, 1, 2, 2, 2, 2]], expected: 13 },
  ],
};
