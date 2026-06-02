import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-oone-data-structure',
  title: 'All O`one Data Structure',
  difficulty: 'hard',
  tags: ['design', 'hash-map'],
  description: `Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the \`AllOne\` class:
- \`AllOne()\` Initializes the object of the data structure.
- \`void inc(String key)\` Increments the count of the string \`key\` by 1. If \`key\` does not exist in the data structure, insert it with count \`1\`.
- \`void dec(String key)\` Decrements the count of the string \`key\` by 1. If the count of \`key\` is \`0\` after the decrement, remove it from the data structure. It is guaranteed that \`key\` exists in the data structure before the decrement.
- \`String getMaxKey()\` Returns one of the keys with the maximum count. If no element exists, return an empty string \`""\`.
- \`String getMinKey()\` Returns one of the keys with the minimum count. If no element exists, return an empty string \`""\`.

**Note** that each function must run in \`O(1)\` average time complexity.

Simulate operations on the structure. Given an array of operations where each is one of \`"inc key"\`, \`"dec key"\`, \`"getMaxKey"\`, or \`"getMinKey"\`, return the results of \`getMaxKey\` and \`getMinKey\` calls.`,
  constraints: [
    '1 <= key.length <= 10',
    'key consists of lowercase English letters.',
    'It is guaranteed that for each call to dec, key is existing in the data structure.',
    'At most 5 * 10^4 calls will be made to inc, dec, getMaxKey, and getMinKey.',
  ],
  examples: [
    {
      input: 'ops = ["inc a","inc b","inc b","inc c","inc c","inc c","getMaxKey","getMinKey","dec b","dec b","getMaxKey","getMinKey"]',
      output: '["c","a","c","a"]',
      explanation: 'After incs: a=1,b=2,c=3. getMaxKey→"c", getMinKey→"a". After dec b twice: a=1,b=0(removed),c=3. getMaxKey→"c", getMinKey→"a".',
    },
    {
      input: 'ops = ["inc hello","inc hello","inc world","getMaxKey","getMinKey"]',
      output: '["hello","world"]',
      explanation: 'hello=2, world=1. Max=hello, Min=world.',
    },
  ],
  hints: [
    'Use a doubly linked list of "buckets" where each bucket holds all keys with the same count. The list is ordered from min to max count.',
    'Also maintain a hash map from key → count and from count → bucket node. inc(key) moves key to the next bucket; dec(key) moves key to the previous bucket.',
    'getMaxKey() returns any key from the tail bucket (highest count); getMinKey() returns any key from the head bucket (lowest count). All operations are O(1) since you only ever touch one or two adjacent bucket nodes.',
  ],
  functionName: 'allOone',
  params: ['ops'],
  starterCode: {
    javascript: `function allOone(ops) {
  // Doubly linked list of count-buckets
  const dummy_min = { count: 0, keys: new Set(), prev: null, next: null };
  const dummy_max = { count: Infinity, keys: new Set(), prev: null, next: null };
  dummy_min.next = dummy_max;
  dummy_max.prev = dummy_min;
  const keyCount = new Map();   // key -> count
  const countBucket = new Map(); // count -> bucket node

  function insertBucketAfter(node, count) {
    const newNode = { count, keys: new Set(), prev: node, next: node.next };
    node.next.prev = newNode;
    node.next = newNode;
    countBucket.set(count, newNode);
    return newNode;
  }
  function removeBucket(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    countBucket.delete(node.count);
  }

  const result = [];
  for (const op of ops) {
    if (op === 'getMaxKey') {
      const tail = dummy_max.prev;
      result.push(tail === dummy_min ? '' : [...tail.keys][0]);
    } else if (op === 'getMinKey') {
      const head = dummy_min.next;
      result.push(head === dummy_max ? '' : [...head.keys][0]);
    } else {
      const [cmd, key] = op.split(' ');
      const curCount = keyCount.get(key) ?? 0;
      const newCount = cmd === 'inc' ? curCount + 1 : curCount - 1;
      // Move key from curCount bucket to newCount bucket
      if (curCount > 0) {
        const curBucket = countBucket.get(curCount);
        curBucket.keys.delete(key);
        if (curBucket.keys.size === 0) removeBucket(curBucket);
      }
      if (newCount > 0) {
        keyCount.set(key, newCount);
        if (!countBucket.has(newCount)) {
          // Insert after curCount's bucket (or after dummy_min if curCount=0)
          const prevBucket = curCount > 0 && countBucket.has(curCount)
            ? countBucket.get(curCount)
            : cmd === 'inc'
              ? (countBucket.has(curCount) ? countBucket.get(curCount) : dummy_min)
              : (countBucket.has(curCount) ? countBucket.get(curCount).prev : dummy_min);
          // Find correct position: insert before next bucket with count > newCount
          let node = dummy_min;
          while (node.next !== dummy_max && node.next.count < newCount) node = node.next;
          insertBucketAfter(node, newCount);
        }
        countBucket.get(newCount).keys.add(key);
      } else {
        keyCount.delete(key);
      }
    }
  }
  return result;
}`,
    typescript: `function allOone(ops: string[]): string[] {
  interface Bucket { count: number; keys: Set<string>; prev: Bucket | null; next: Bucket | null; }
  const dummy_min: Bucket = { count: 0, keys: new Set(), prev: null, next: null };
  const dummy_max: Bucket = { count: Infinity, keys: new Set(), prev: null, next: null };
  dummy_min.next = dummy_max;
  dummy_max.prev = dummy_min;
  const keyCount = new Map<string, number>();
  const countBucket = new Map<number, Bucket>();
  function insertBucketAfter(node: Bucket, count: number): Bucket {
    const nb: Bucket = { count, keys: new Set(), prev: node, next: node.next };
    node.next!.prev = nb;
    node.next = nb;
    countBucket.set(count, nb);
    return nb;
  }
  function removeBucket(node: Bucket): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    countBucket.delete(node.count);
  }
  const result: string[] = [];
  for (const op of ops) {
    if (op === 'getMaxKey') {
      const tail = dummy_max.prev!;
      result.push(tail === dummy_min ? '' : [...tail.keys][0]!);
    } else if (op === 'getMinKey') {
      const head = dummy_min.next!;
      result.push(head === dummy_max ? '' : [...head.keys][0]!);
    } else {
      const [cmd, key] = op.split(' ') as [string, string];
      const curCount = keyCount.get(key) ?? 0;
      const newCount = cmd === 'inc' ? curCount + 1 : curCount - 1;
      if (curCount > 0) {
        const curBucket = countBucket.get(curCount)!;
        curBucket.keys.delete(key);
        if (curBucket.keys.size === 0) removeBucket(curBucket);
      }
      if (newCount > 0) {
        keyCount.set(key, newCount);
        if (!countBucket.has(newCount)) {
          let node: Bucket = dummy_min;
          while (node.next !== dummy_max && node.next!.count < newCount) node = node.next!;
          insertBucketAfter(node, newCount);
        }
        countBucket.get(newCount)!.keys.add(key);
      } else {
        keyCount.delete(key);
      }
    }
  }
  return result;
}`,
    python: `def allOone(ops: list[str]) -> list[str]:
    class Bucket:
        def __init__(self, count):
            self.count = count
            self.keys: dict = {}  # ordered dict as ordered set
            self.prev = self.next = None

    dummy_min = Bucket(0)
    dummy_max = Bucket(float('inf'))
    dummy_min.next = dummy_max
    dummy_max.prev = dummy_min
    key_count: dict = {}
    count_bucket: dict = {}

    def insert_after(node, count):
        nb = Bucket(count)
        nb.prev, nb.next = node, node.next
        node.next.prev = nb
        node.next = nb
        count_bucket[count] = nb
        return nb

    def remove_bucket(node):
        node.prev.next = node.next
        node.next.prev = node.prev
        del count_bucket[node.count]

    result = []
    for op in ops:
        if op == 'getMaxKey':
            tail = dummy_max.prev
            result.append(next(iter(tail.keys)) if tail is not dummy_min else '')
        elif op == 'getMinKey':
            head = dummy_min.next
            result.append(next(iter(head.keys)) if head is not dummy_max else '')
        else:
            cmd, key = op.split()
            cur = key_count.get(key, 0)
            nxt = cur + 1 if cmd == 'inc' else cur - 1
            if cur > 0:
                b = count_bucket[cur]
                b.keys.pop(key, None)
                if not b.keys:
                    remove_bucket(b)
            if nxt > 0:
                key_count[key] = nxt
                if nxt not in count_bucket:
                    node = dummy_min
                    while node.next is not dummy_max and node.next.count < nxt:
                        node = node.next
                    insert_after(node, nxt)
                count_bucket[nxt].keys[key] = None
            else:
                key_count.pop(key, None)
    return result`,
  },
  visibleTests: [
    {
      args: [['inc a', 'inc b', 'inc b', 'inc c', 'inc c', 'inc c', 'getMaxKey', 'getMinKey', 'dec b', 'dec b', 'getMaxKey', 'getMinKey']],
      expected: ['c', 'a', 'c', 'a'],
    },
    {
      args: [['inc hello', 'inc hello', 'inc world', 'getMaxKey', 'getMinKey']],
      expected: ['hello', 'world'],
    },
    {
      args: [['getMaxKey', 'getMinKey']],
      expected: ['', ''],
    },
  ],
  hiddenTests: [
    {
      args: [['inc a', 'getMaxKey', 'getMinKey']],
      expected: ['a', 'a'],
    },
    {
      args: [['inc a', 'inc a', 'dec a', 'getMaxKey', 'getMinKey']],
      expected: ['a', 'a'],
    },
    {
      args: [['inc a', 'inc b', 'getMaxKey', 'getMinKey', 'dec a', 'getMinKey']],
      expected: ['a', 'a', 'b'],
    },
    {
      args: [['inc a', 'inc a', 'inc b', 'inc b', 'inc c', 'getMaxKey', 'dec c', 'getMaxKey', 'getMinKey']],
      expected: ['a', 'a', 'a'],
    },
    {
      args: [['inc a', 'dec a', 'getMaxKey', 'getMinKey']],
      expected: ['', ''],
    },
    {
      args: [['inc a', 'inc b', 'inc b', 'dec a', 'getMaxKey', 'getMinKey']],
      expected: ['b', 'b'],
    },
  ],
};
