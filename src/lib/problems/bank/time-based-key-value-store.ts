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
  // Simulate TimeMap class operations
  // ops: array of method names, args: array of argument arrays
  // Return array of results (null for constructor and set, string for get)
}
`,
    typescript: "function timeMap(ops: string[], args: (unknown[] | (string | number)[])[]): (null | string)[] {\n  // Simulate TimeMap class operations\n  // ops: array of method names, args: array of argument arrays\n  // Return array of results (null for constructor and set, string for get)\n}",

    python: `def timeMap(ops, args):
    # Simulate TimeMap class operations
    pass
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
