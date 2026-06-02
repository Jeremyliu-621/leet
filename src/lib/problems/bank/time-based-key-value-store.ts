import type { Problem } from '../types';

export const problem: Problem = {
  id: 'time-based-key-value-store',
  title: 'Time Based Key-Value Store',
  difficulty: 'medium',
  tags: ['hash-map', 'binary-search'],
  description: `Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the key's value at a certain timestamp.

Implement the \`TimeMap\` class:
- \`TimeMap()\` — initializes the object
- \`set(key, value, timestamp)\` — stores the key with the value at the given timestamp
- \`get(key, timestamp)\` — returns a value such that \`set\` was called previously with \`timestamp_prev <= timestamp\`. If multiple such values exist, return the value with the **largest** \`timestamp_prev\`. If no value exists, return \`""\`.

**Implement a simulation function** \`timeMap(ops, args)\` where \`ops\` is an array of operation names (\`"TimeMap"\`, \`"set"\`, \`"get"\`) and \`args\` is an array of argument arrays. Return an array of results (\`null\` for \`"TimeMap"\` and \`"set"\`).`,
  constraints: [
    '1 <= key.length, value.length <= 100',
    'key and value consist of lowercase English letters and digits',
    '1 <= timestamp <= 10^7',
    'All timestamps of set are strictly increasing',
    'At most 2 * 10^5 calls will be made to set and get',
  ],
  examples: [
    {
      input: 'ops = ["TimeMap","set","get","get","set","get","get"], args = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]',
      output: '[null,null,"bar","bar",null,"bar2","bar2"]',
      explanation: 'get("foo",3) returns "bar" since that was set at timestamp 1 (≤3) and no later set exists. get("foo",5) returns "bar2" (set at timestamp 4).',
    },
  ],
  hints: [
    'Level 1: Store a list of (timestamp, value) pairs per key. For get, binary-search the sorted timestamps to find the largest timestamp ≤ the query timestamp.',
    'Level 2: Map key → array of [timestamp, value]. Since set timestamps are strictly increasing, the array is always sorted. For get, binary-search for the last entry with timestamp ≤ query.',
    'Level 3: const store=new Map();function set(k,v,t){if(!store.has(k))store.set(k,[]);store.get(k).push([t,v]);}function get(k,t){const a=store.get(k)??[];let lo=0,hi=a.length-1,res="";while(lo<=hi){const mid=(lo+hi)>>1;if(a[mid][0]<=t){res=a[mid][1];lo=mid+1;}else hi=mid-1;}return res;}',
  ],
  functionName: 'timeMap',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function timeMap(ops, args) {
  const store = new Map(); // key → [[timestamp, value], ...]
  return ops.map((op, i) => {
    if (op === 'TimeMap') return null;
    const a = args[i];
    if (op === 'set') {
      if (!store.has(a[0])) store.set(a[0], []);
      store.get(a[0]).push([a[2], a[1]]);
      return null;
    }
    // get: binary search for largest timestamp <= a[1]
    const arr = store.get(a[0]) ?? [];
    let lo = 0, hi = arr.length - 1, res = '';
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid][0] <= a[1]) { res = arr[mid][1]; lo = mid + 1; } else hi = mid - 1;
    }
    return res;
  });
}`,
    typescript: `function timeMap(ops: string[], args: (string | number)[][]): (null | string)[] {
  const store = new Map<string, [number, string][]>();
  return ops.map((op, i) => {
    if (op === 'TimeMap') return null;
    const a = args[i]!;
    if (op === 'set') {
      const key = a[0] as string, val = a[1] as string, ts = a[2] as number;
      if (!store.has(key)) store.set(key, []);
      store.get(key)!.push([ts, val]);
      return null;
    }
    const key = a[0] as string, ts = a[1] as number;
    const arr = store.get(key) ?? [];
    let lo = 0, hi = arr.length - 1, res = '';
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid]![0] <= ts) { res = arr[mid]![1]; lo = mid + 1; } else hi = mid - 1;
    }
    return res;
  });
}`,
    python: `def timeMap(ops, args):
    import bisect
    store = {}
    results = []
    for op, a in zip(ops, args):
        if op == 'TimeMap':
            results.append(None)
        elif op == 'set':
            key, val, ts = a[0], a[1], int(a[2])
            if key not in store:
                store[key] = []
            store[key].append((ts, val))
            results.append(None)
        else:
            key, ts = a[0], int(a[1])
            arr = store.get(key, [])
            lo, hi, res = 0, len(arr) - 1, ''
            while lo <= hi:
                mid = (lo + hi) // 2
                if arr[mid][0] <= ts:
                    res = arr[mid][1]; lo = mid + 1
                else:
                    hi = mid - 1
            results.append(res)
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['TimeMap', 'set', 'get', 'get', 'set', 'get', 'get'],
        [[], ['foo', 'bar', 1], ['foo', 1], ['foo', 3], ['foo', 'bar2', 4], ['foo', 4], ['foo', 5]],
      ],
      expected: [null, null, 'bar', 'bar', null, 'bar2', 'bar2'],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['TimeMap', 'set', 'get'],
        [[], ['love', 'high', 10], ['love', 5]],
      ],
      expected: [null, null, ''],
    },
    {
      args: [
        ['TimeMap', 'set', 'set', 'get', 'get', 'get'],
        [[], ['a', 'x', 1], ['a', 'y', 3], ['a', 1], ['a', 3], ['a', 4]],
      ],
      expected: [null, null, null, 'x', 'y', 'y'],
    },
  ],
};
