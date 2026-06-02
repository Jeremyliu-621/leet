import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lfu-cache',
  title: 'LFU Cache',
  difficulty: 'hard',
  tags: ['design', 'hash-map'],
  description: `Design and implement a data structure for a **Least Frequently Used (LFU)** cache.

Implement a \`lfuCache(capacity, operations)\` function where \`operations\` is an array of \`["get", key]\` or \`["put", key, value]\` arrays. Return an array of results from \`get\` calls (-1 if not found).

The LFU cache evicts the least frequently used key when capacity is exceeded. If multiple keys have the same frequency, evict the **least recently used** among them.`,
  constraints: [
    '1 <= capacity <= 10^4',
    '0 <= key <= 10^5',
    '0 <= value <= 10^9',
  ],
  examples: [
    {
      input:
        'capacity = 2, operations = [["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",3],["put",4,4],["get",1],["get",3],["get",4]]',
      output: '[1,-1,3,-1,3,4]',
      explanation:
        'put(1,1), put(2,2): cache={1(f=1),2(f=1)}; get(1)→1, freq[1]=2; put(3,3): evict key 2 (LRU of minFreq=1); get(2)→-1; get(3)→3, freq[3]=2; put(4,4): both keys have f=2, evict key 1 (LRU); get(1)→-1; get(3)→3; get(4)→4.',
    },
  ],
  hints: [
    'Maintain two hash maps: one mapping key→(value, freq) and one mapping freq→ordered-set-of-keys.',
    'Track the minimum frequency. On get/put, update frequency and move the key to the next freq bucket.',
    'On eviction, remove the LRU key from the minFreq bucket. Use a Map (insertion-ordered) to track LRU within each frequency.',
  ],
  functionName: 'lfuCache',
  params: ['capacity', 'operations'],
  starterCode: {
    javascript: `function lfuCache(capacity, operations) {
  const keyMap = new Map(); // key → {val, freq}
  const freqMap = new Map(); // freq → Map<key, 1> (insertion-ordered for LRU)
  let minFreq = 0;
  const getOrCreate = (f) => { if (!freqMap.has(f)) freqMap.set(f, new Map()); return freqMap.get(f); };
  const touch = (key) => {
    const info = keyMap.get(key), f = info.freq;
    const old = freqMap.get(f);
    old.delete(key);
    if (old.size === 0) { freqMap.delete(f); if (minFreq === f) minFreq++; }
    info.freq++;
    getOrCreate(info.freq).set(key, 1);
  };
  const res = [];
  for (const op of operations) {
    const [type, key, val] = op;
    if (type === 'put') {
      if (capacity === 0) continue;
      if (keyMap.has(key)) { keyMap.get(key).val = val; touch(key); }
      else {
        if (keyMap.size >= capacity) {
          const lruSet = freqMap.get(minFreq);
          const lruKey = lruSet.keys().next().value;
          lruSet.delete(lruKey);
          if (lruSet.size === 0) freqMap.delete(minFreq);
          keyMap.delete(lruKey);
        }
        keyMap.set(key, {val, freq: 1});
        getOrCreate(1).set(key, 1);
        minFreq = 1;
      }
    } else {
      if (!keyMap.has(key)) { res.push(-1); continue; }
      res.push(keyMap.get(key).val);
      touch(key);
    }
  }
  return res;
}`,
    typescript: `function lfuCache(capacity: number, operations: (string | number)[][]): number[] {
  const keyMap = new Map<number, {val: number, freq: number}>();
  const freqMap = new Map<number, Map<number, number>>();
  let minFreq = 0;
  const getOrCreate = (f: number) => { if (!freqMap.has(f)) freqMap.set(f, new Map()); return freqMap.get(f)!; };
  const touch = (key: number) => {
    const info = keyMap.get(key)!, f = info.freq;
    const old = freqMap.get(f)!;
    old.delete(key);
    if (old.size === 0) { freqMap.delete(f); if (minFreq === f) minFreq++; }
    info.freq++;
    getOrCreate(info.freq).set(key, 1);
  };
  const res: number[] = [];
  for (const [type, key, val] of operations) {
    if (type === 'put') {
      if (capacity === 0) continue;
      if (keyMap.has(key as number)) { keyMap.get(key as number)!.val = val as number; touch(key as number); }
      else {
        if (keyMap.size >= capacity) {
          const lruSet = freqMap.get(minFreq)!;
          const lruKey = lruSet.keys().next().value as number;
          lruSet.delete(lruKey); if (lruSet.size === 0) freqMap.delete(minFreq);
          keyMap.delete(lruKey);
        }
        keyMap.set(key as number, {val: val as number, freq: 1});
        getOrCreate(1).set(key as number, 1); minFreq = 1;
      }
    } else {
      if (!keyMap.has(key as number)) { res.push(-1); continue; }
      res.push(keyMap.get(key as number)!.val); touch(key as number);
    }
  }
  return res;
}`,
    python: `def lfuCache(capacity, operations):
    from collections import defaultdict, OrderedDict
    key_map = {}  # key → [val, freq]
    freq_map = defaultdict(OrderedDict)  # freq → OrderedDict {key: 1}
    min_freq = 0
    res = []
    def touch(k):
        nonlocal min_freq
        val, f = key_map[k]
        del freq_map[f][k]
        if not freq_map[f] and min_freq == f: min_freq += 1
        key_map[k] = [val, f + 1]
        freq_map[f + 1][k] = 1
    for op in operations:
        if op[0] == 'put':
            k, v = op[1], op[2]
            if capacity == 0: continue
            if k in key_map:
                key_map[k][0] = v; touch(k)
            else:
                if len(key_map) >= capacity:
                    lru_key, _ = freq_map[min_freq].popitem(last=False)
                    del key_map[lru_key]
                key_map[k] = [v, 1]; freq_map[1][k] = 1; min_freq = 1
        else:
            k = op[1]
            if k not in key_map: res.append(-1); continue
            res.append(key_map[k][0]); touch(k)
    return res`,
  },
  visibleTests: [
    {
      args: [
        2,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['get', 1],
          ['put', 3, 3],
          ['get', 2],
          ['get', 3],
          ['put', 4, 4],
          ['get', 1],
          ['get', 3],
          ['get', 4],
        ],
      ],
      expected: [1, -1, 3, -1, 3, 4],
    },
  ],
  hiddenTests: [
    {
      args: [
        1,
        [
          ['put', 1, 1],
          ['get', 1],
          ['put', 2, 2],
          ['get', 1],
          ['get', 2],
        ],
      ],
      expected: [1, -1, 2],
    },
    {
      args: [
        2,
        [
          ['put', 1, 1],
          ['put', 2, 2],
          ['put', 3, 3],
          ['get', 2],
          ['get', 3],
        ],
      ],
      expected: [2, 3],
    },
  ],
};
