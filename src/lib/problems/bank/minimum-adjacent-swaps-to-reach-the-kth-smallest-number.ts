import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-adjacent-swaps-to-reach-the-kth-smallest-number',
  title: 'Minimum Adjacent Swaps to Reach the Kth Smallest Number',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `You are given a string \`num\`, representing a large integer, and an integer \`k\`.

We call some integer **wonderful** if it is a **permutation** of the digits in \`num\` and is **greater in value** than \`num\`. There can be many wonderful integers; only the **smallest-valued** ones are considered.

- For example, when \`num = "5489355142"\`:
  - The 1st smallest wonderful integer is \`"5489355214"\`.
  - The 2nd smallest wonderful integer is \`"5489355241"\`.
  - The 3rd smallest wonderful integer is \`"5489355412"\`.
  - The 4th smallest wonderful integer is \`"5489355421"\`.

Return the **minimum number of adjacent digit swaps** so that \`num\` becomes the k-th smallest wonderful integer.`,
  constraints: [
    '2 <= num.length <= 1000',
    '1 <= k <= 1000',
    'num only consists of digits.',
  ],
  examples: [
    {
      input: 'num = "5489355142", k = 4',
      output: '2',
      explanation:
        'The 4th smallest wonderful integer is "5489355421". The first 7 digits match. Transform "142" → "421": move \'4\' left by 1 (1 swap), then move \'2\' left by 1 (1 swap). Total: 2.',
    },
    {
      input: 'num = "11112", k = 4',
      output: '4',
      explanation:
        'The 4th smallest wonderful integer is "21111". Moving \'2\' from position 4 to position 0 takes 4 adjacent swaps.',
    },
    {
      input: 'num = "00123", k = 1',
      output: '1',
      explanation:
        'The 1st smallest wonderful integer is "00132". Swap positions 3 and 4: 1 swap.',
    },
  ],
  hints: [
    'Level 1: Apply the "next permutation" algorithm k times to find the target number.',
    'Level 2: Next permutation: find the rightmost i where num[i] < num[i+1], then find the rightmost j where num[j] > num[i], swap, then reverse the suffix after i.',
    'Level 3: Count minimum adjacent swaps from num to target: for each position i, find target[i] in the remaining array starting at i, count the distance, shift the element into place (greedy left-to-right matching).',
  ],
  functionName: 'getMinSwaps',
  params: ['num', 'k'],
  starterCode: {
    javascript: `function getMinSwaps(num, k) {
  const orig = num.split('');
  const arr = num.split('');
  function nextPerm(a) {
    let i = a.length - 2;
    while (i >= 0 && a[i] >= a[i + 1]) i--;
    if (i < 0) return;
    let j = a.length - 1;
    while (a[j] <= a[i]) j--;
    [a[i], a[j]] = [a[j], a[i]];
    let l = i + 1, r = a.length - 1;
    while (l < r) { [a[l], a[r]] = [a[r], a[l]]; l++; r--; }
  }
  for (let t = 0; t < k; t++) nextPerm(arr);
  let ans = 0;
  const temp = [...orig];
  for (let i = 0; i < temp.length; i++) {
    let j = i;
    while (temp[j] !== arr[i]) j++;
    ans += j - i;
    while (j > i) { [temp[j], temp[j - 1]] = [temp[j - 1], temp[j]]; j--; }
  }
  return ans;
}`,
    typescript: `function getMinSwaps(num: string, k: number): number {
  const orig = num.split('');
  const arr = num.split('');
  function nextPerm(a: string[]): void {
    let i = a.length - 2;
    while (i >= 0 && a[i]! >= a[i + 1]!) i--;
    if (i < 0) return;
    let j = a.length - 1;
    while (a[j]! <= a[i]!) j--;
    [a[i], a[j]] = [a[j]!, a[i]!];
    let l = i + 1, r = a.length - 1;
    while (l < r) { [a[l], a[r]] = [a[r]!, a[l]!]; l++; r--; }
  }
  for (let t = 0; t < k; t++) nextPerm(arr);
  let ans = 0;
  const temp = [...orig];
  for (let i = 0; i < temp.length; i++) {
    let j = i;
    while (temp[j] !== arr[i]) j++;
    ans += j - i;
    while (j > i) { [temp[j], temp[j - 1]] = [temp[j - 1]!, temp[j]!]; j--; }
  }
  return ans;
}`,
    python: `def getMinSwaps(num, k):
    if hasattr(num, 'to_py'): num = num.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    num = str(num); k = int(k)
    def next_perm(a):
        i = len(a) - 2
        while i >= 0 and a[i] >= a[i+1]: i -= 1
        if i < 0: return
        j = len(a) - 1
        while a[j] <= a[i]: j -= 1
        a[i], a[j] = a[j], a[i]
        a[i+1:] = reversed(a[i+1:])
    orig = list(num); arr = list(num)
    for _ in range(k): next_perm(arr)
    ans = 0; temp = orig[:]
    for i in range(len(temp)):
        j = i
        while temp[j] != arr[i]: j += 1
        ans += j - i
        while j > i: temp[j], temp[j-1] = temp[j-1], temp[j]; j -= 1
    return ans`,
  },
  visibleTests: [
    { args: ['5489355142', 4], expected: 2 },
    { args: ['11112', 4], expected: 4 },
    { args: ['00123', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['12', 1], expected: 1 },
    { args: ['1234', 1], expected: 1 },
    { args: ['1234', 3], expected: 2 },
    { args: ['112', 1], expected: 1 },
  ],
};
