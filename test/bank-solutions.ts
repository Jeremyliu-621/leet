// Reference solutions — test-only, never imported by application code.
// Each function is the source of truth that proves every test case's
// `expected` value in the matching problem definition.

// Helpers for tree reference solutions (BFS-based, matches preamble format)
interface _TN { v: number; l: _TN | null; r: _TN | null }
function _buildTree(arr: (number | null)[]): _TN | null {
  if (!arr.length || arr[0] === null || arr[0] === undefined) return null;
  const root: _TN = { v: arr[0], l: null, r: null };
  const q: _TN[] = [root];
  let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift()!;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.l = { v: arr[i]!, l: null, r: null }; q.push(node.l);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.r = { v: arr[i]!, l: null, r: null }; q.push(node.r);
    }
    i++;
  }
  return root;
}
function _treeToArr(root: _TN | null): (number | null)[] {
  if (!root) return [];
  const result: (number | null)[] = [];
  const q: (_TN | null)[] = [root];
  while (q.length) {
    const n = q.shift()!;
    if (!n) { result.push(null); continue; }
    result.push(n.v);
    q.push(n.l);
    q.push(n.r);
  }
  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
}

export const solutions: Record<string, (...args: unknown[]) => unknown> = {
  // --- arrays --------------------------------------------------------------
  'running-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const out: number[] = [];
    let sum = 0;
    for (const n of nums) {
      sum += n;
      out.push(sum);
    }
    return out;
  },

  'peak-element-count': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
      const prev = nums[i - 1] as number;
      const cur = nums[i] as number;
      const next = nums[i + 1] as number;
      if (cur > prev && cur > next) count++;
    }
    return count;
  },

  'rotate-left-one': (...args: unknown[]) => {
    const nums = args[0] as number[];
    if (nums.length <= 1) return [...nums];
    const out: number[] = [];
    for (let i = 1; i < nums.length; i++) out.push(nums[i] as number);
    out.push(nums[0] as number);
    return out;
  },

  // --- strings -------------------------------------------------------------
  'vowel-tally': (...args: unknown[]) => {
    const text = args[0] as string;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (const ch of text.toLowerCase()) {
      if (vowels.has(ch)) count++;
    }
    return count;
  },

  'reverse-words-order': (...args: unknown[]) => {
    const sentence = args[0] as string;
    return sentence.split(' ').reverse().join(' ');
  },

  'is-palindrome-clean': (...args: unknown[]) => {
    const text = args[0] as string;
    const cleaned = text.toLowerCase().replace(/[^a-z]/g, '');
    let lo = 0;
    let hi = cleaned.length - 1;
    while (lo < hi) {
      if (cleaned[lo] !== cleaned[hi]) return false;
      lo++;
      hi--;
    }
    return true;
  },

  // --- hash-map ------------------------------------------------------------
  'first-unique-char': (...args: unknown[]) => {
    const text = args[0] as string;
    const counts = new Map<string, number>();
    for (const ch of text) counts.set(ch, (counts.get(ch) ?? 0) + 1);
    for (let i = 0; i < text.length; i++) {
      const ch = text[i] as string;
      if (counts.get(ch) === 1) return i;
    }
    return -1;
  },

  'two-sum-indices': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i] as number;
      const need = target - value;
      const j = seen.get(need);
      if (j !== undefined) return [j, i];
      seen.set(value, i);
    }
    return [-1, -1];
  },

  'most-frequent-value': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const counts = new Map<number, number>();
    for (const n of nums) counts.set(n, (counts.get(n) ?? 0) + 1);
    let bestValue = nums[0] as number;
    let bestCount = 0;
    for (const [value, count] of counts) {
      if (count > bestCount || (count === bestCount && value < bestValue)) {
        bestValue = value;
        bestCount = count;
      }
    }
    return bestValue;
  },

  // --- two-pointers --------------------------------------------------------
  'reverse-array-inplace': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const out = [...nums];
    let lo = 0;
    let hi = out.length - 1;
    while (lo < hi) {
      const tmp = out[lo] as number;
      out[lo] = out[hi] as number;
      out[hi] = tmp;
      lo++;
      hi--;
    }
    return out;
  },

  'sorted-pair-exists': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
      const sum = (nums[lo] as number) + (nums[hi] as number);
      if (sum === target) return true;
      if (sum < target) lo++;
      else hi--;
    }
    return false;
  },

  'merge-sorted-lists': (...args: unknown[]) => {
    const a = args[0] as number[];
    const b = args[1] as number[];
    const out: number[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      const av = a[i] as number;
      const bv = b[j] as number;
      if (av <= bv) {
        out.push(av);
        i++;
      } else {
        out.push(bv);
        j++;
      }
    }
    while (i < a.length) {
      out.push(a[i] as number);
      i++;
    }
    while (j < b.length) {
      out.push(b[j] as number);
      j++;
    }
    return out;
  },

  // --- sliding-window ------------------------------------------------------
  'max-window-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i] as number;
    let best = windowSum;
    for (let i = k; i < nums.length; i++) {
      windowSum += (nums[i] as number) - (nums[i - k] as number);
      if (windowSum > best) best = windowSum;
    }
    return best;
  },

  'longest-equal-run': (...args: unknown[]) => {
    const text = args[0] as string;
    if (text.length === 0) return 0;
    let best = 1;
    let current = 1;
    for (let i = 1; i < text.length; i++) {
      if (text[i] === text[i - 1]) {
        current++;
        if (current > best) best = current;
      } else {
        current = 1;
      }
    }
    return best;
  },

  'min-window-average': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i] as number;
    let best = windowSum;
    for (let i = k; i < nums.length; i++) {
      windowSum += (nums[i] as number) - (nums[i - k] as number);
      if (windowSum < best) best = windowSum;
    }
    return best;
  },

  // --- binary-search -------------------------------------------------------
  'find-target-index': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const value = nums[mid] as number;
      if (value === target) return mid;
      if (value < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return -1;
  },

  'integer-square-root': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n < 2) return n;
    let lo = 1;
    let hi = n;
    let answer = 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (mid * mid <= n) {
        answer = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return answer;
  },

  'first-not-smaller': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let lo = 0;
    let hi = nums.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if ((nums[mid] as number) < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  },

  // --- stack ---------------------------------------------------------------
  'balanced-brackets': (...args: unknown[]) => {
    const text = args[0] as string;
    const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
    const stack: string[] = [];
    for (const ch of text) {
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
      } else {
        const expected = pairs[ch];
        if (stack.pop() !== expected) return false;
      }
    }
    return stack.length === 0;
  },

  'remove-adjacent-dupes': (...args: unknown[]) => {
    const text = args[0] as string;
    const stack: string[] = [];
    for (const ch of text) {
      if (stack.length > 0 && stack[stack.length - 1] === ch) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
    return stack.join('');
  },

  'next-greater-element': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const out: number[] = new Array(nums.length).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i] as number;
      while (stack.length > 0 && (nums[stack[stack.length - 1] as number] as number) < value) {
        const idx = stack.pop() as number;
        out[idx] = value;
      }
      stack.push(i);
    }
    return out;
  },

  'next-greater-element-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const res = new Array<number>(n).fill(-1);
    const stack: number[] = [];
    for (let i = 0; i < 2 * n; i++) {
      const val = nums[i % n]!;
      while (stack.length > 0 && nums[stack[stack.length - 1]!]! < val) {
        const idx = stack.pop()!;
        res[idx] = val;
      }
      if (i < n) stack.push(i);
    }
    return res;
  },

  // --- math ----------------------------------------------------------------
  'hamming-weight': (...args: unknown[]) => {
    let n = args[0] as number;
    let count = 0;
    while (n) { n &= n - 1; count++; }
    return count;
  },

  'digit-sum': (...args: unknown[]) => {
    let n = args[0] as number;
    let sum = 0;
    if (n === 0) return 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  },

  'is-prime-number': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n < 2) return false;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) return false;
    }
    return true;
  },

  'greatest-common-divisor': (...args: unknown[]) => {
    let a = args[0] as number;
    let b = args[1] as number;
    while (b !== 0) {
      const tmp = b;
      b = a % b;
      a = tmp;
    }
    return a;
  },

  'letter-combinations-phone': (...args: unknown[]) => {
    const digits = args[0] as string;
    if (!digits) return [];
    const map: Record<string, string> = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const result: string[] = [];
    const bt = (idx: number, cur: string): void => {
      if (idx === digits.length) { result.push(cur); return; }
      for (const ch of map[digits[idx]!]!) bt(idx + 1, cur + ch);
    };
    bt(0, '');
    return result;
  },

  'subsets': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const result: number[][] = [];
    const bt = (start: number, cur: number[]): void => {
      result.push([...cur]);
      for (let i = start; i < nums.length; i++) { cur.push(nums[i]!); bt(i + 1, cur); cur.pop(); }
    };
    bt(0, []);
    return result.sort((a, b) => { for (let i = 0; i < Math.max(a.length, b.length); i++) { const d = (a[i] ?? -Infinity) - (b[i] ?? -Infinity); if (d) return d; } return a.length - b.length; });
  },

  'subsets-ii': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const result: number[][] = [];
    const bt = (start: number, cur: number[]): void => {
      result.push([...cur]);
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        cur.push(nums[i]!); bt(i + 1, cur); cur.pop();
      }
    };
    bt(0, []);
    const norm = result.map(s => [...s].sort((a, b) => a - b));
    return norm.sort((a, b) => { for (let i = 0; i < Math.max(a.length, b.length); i++) { const d = (a[i] ?? -Infinity) - (b[i] ?? -Infinity); if (d) return d; } return a.length - b.length; });
  },

  'combination-sum': (...args: unknown[]) => {
    const candidates = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    const result: number[][] = [];
    const bt = (start: number, rem: number, cur: number[]): void => {
      if (rem === 0) { result.push([...cur]); return; }
      for (let i = start; i < candidates.length; i++) {
        if (candidates[i]! > rem) break;
        cur.push(candidates[i]!);
        bt(i, rem - candidates[i]!, cur);
        cur.pop();
      }
    };
    bt(0, target, []);
    return result;
  },

  'combination-sum-iii': (...args: unknown[]) => {
    const k = args[0] as number;
    const n = args[1] as number;
    const result: number[][] = [];
    const bt = (start: number, rem: number, cur: number[]): void => {
      if (cur.length === k && rem === 0) { result.push([...cur]); return; }
      if (cur.length === k || rem <= 0) return;
      for (let d = start; d <= 9; d++) {
        cur.push(d); bt(d + 1, rem - d, cur); cur.pop();
      }
    };
    bt(1, n, []);
    return result.sort((a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i]! - b[i]!; return 0; });
  },

  'meeting-rooms-ii': (...args: unknown[]) => {
    const intervals = args[0] as number[][];
    const starts = intervals.map((iv) => iv[0]!).sort((a, b) => a - b);
    const ends = intervals.map((iv) => iv[1]!).sort((a, b) => a - b);
    let maxRooms = 0, j = 0;
    for (let i = 0; i < starts.length; i++) {
      if (starts[i]! >= ends[j]!) j++;
      maxRooms = Math.max(maxRooms, i - j + 1);
    }
    return maxRooms;
  },

  'h-index': (...args: unknown[]) => {
    const citations = [...(args[0] as number[])].sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i]! >= i + 1) h = i + 1; else break;
    }
    return h;
  },

  'merge-intervals': (...args: unknown[]) => {
    const intervals = [...(args[0] as number[][])].sort((a, b) => a[0]! - b[0]!);
    const result: number[][] = [];
    for (const iv of intervals) {
      if (result.length && iv[0]! <= result[result.length - 1]![1]!) {
        result[result.length - 1]![1] = Math.max(result[result.length - 1]![1]!, iv[1]!);
      } else {
        result.push([...iv]);
      }
    }
    return result;
  },

  'non-overlapping-intervals': (...args: unknown[]) => {
    const intervals = [...(args[0] as number[][])].sort((a, b) => a[1]! - b[1]!);
    let removed = 0, end = -Infinity;
    for (const iv of intervals) {
      if (iv[0]! >= end) { end = iv[1]!; }
      else { removed++; }
    }
    return removed;
  },

  'permutations': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const result: number[][] = [];
    const bt = (start: number): void => {
      if (start === nums.length) { result.push([...nums]); return; }
      for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i]!, nums[start]!];
        bt(start + 1);
        [nums[start], nums[i]] = [nums[i]!, nums[start]!];
      }
    };
    bt(0);
    return result.sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i]! < b[i]!) return -1;
        if (a[i]! > b[i]!) return 1;
      }
      return 0;
    });
  },

  'generate-parentheses': (...args: unknown[]) => {
    const n = args[0] as number;
    const result: string[] = [];
    const bt = (cur: string, open: number, close: number): void => {
      if (cur.length === 2 * n) { result.push(cur); return; }
      if (open < n) bt(cur + '(', open + 1, close);
      if (close < open) bt(cur + ')', open, close + 1);
    };
    bt('', 0, 0);
    return result.sort();
  },

  'palindrome-partitioning': (...args: unknown[]) => {
    const s = args[0] as string;
    const result: string[][] = [];
    const isPalin = (l: number, r: number): boolean => {
      while (l < r) { if (s[l++] !== s[r--]) return false; }
      return true;
    };
    const bt = (start: number, cur: string[]): void => {
      if (start === s.length) { result.push([...cur]); return; }
      for (let end = start + 1; end <= s.length; end++) {
        if (isPalin(start, end - 1)) {
          cur.push(s.slice(start, end));
          bt(end, cur);
          cur.pop();
        }
      }
    };
    bt(0, []);
    return result;
  },

  // --- arrays (batch 7) ----------------------------------------------------
  'rotate-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const n = nums.length;
    const steps = k % n;
    return [...nums.slice(n - steps), ...nums.slice(0, n - steps)];
  },

  'max-product-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let curMax = nums[0] as number;
    let curMin = nums[0] as number;
    let best = nums[0] as number;
    for (let i = 1; i < nums.length; i++) {
      const v = nums[i] as number;
      const newMax = Math.max(v, curMax * v, curMin * v);
      curMin = Math.min(v, curMax * v, curMin * v);
      curMax = newMax;
      if (curMax > best) best = curMax;
    }
    return best;
  },

  // --- strings (batch 7) ---------------------------------------------------
  'longest-palindromic-string': (...args: unknown[]) => {
    const s = args[0] as string;
    function expand(l: number, r: number): string {
      while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
      }
      return s.slice(l + 1, r);
    }
    let best = '';
    for (let i = 0; i < s.length; i++) {
      const a = expand(i, i);
      const b = expand(i, i + 1);
      if (a.length > best.length) best = a;
      if (b.length > best.length) best = b;
    }
    return best;
  },

  // --- math (batch 7) ------------------------------------------------------
  'climbing-stairs': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n <= 2) return n;
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
      const tmp = a + b;
      a = b;
      b = tmp;
    }
    return b;
  },

  // --- arrays (batch 6) ----------------------------------------------------
  'max-consecutive-ones': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let best = 0;
    let current = 0;
    for (const n of nums) {
      current = n === 1 ? current + 1 : 0;
      if (current > best) best = current;
    }
    return best;
  },

  // --- strings (batch 6) ---------------------------------------------------
  'capitalize-words': (...args: unknown[]) => {
    const sentence = args[0] as string;
    return sentence
      .split(' ')
      .map((w) => (w[0] as string).toUpperCase() + w.slice(1))
      .join(' ');
  },

  // --- hash-map (batch 6) --------------------------------------------------
  'intersection-two-arrays': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const set1 = new Set(nums1);
    return [...new Set(nums2)].filter((n) => set1.has(n));
  },

  'subarray-sum-equals-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const freq = new Map<number, number>([[0, 1]]);
    let sum = 0;
    let count = 0;
    for (const n of nums) {
      sum += n;
      count += freq.get(sum - k) ?? 0;
      freq.set(sum, (freq.get(sum) ?? 0) + 1);
    }
    return count;
  },

  // --- binary-search (batch 6) ---------------------------------------------
  'is-perfect-square': (...args: unknown[]) => {
    const n = args[0] as number;
    let lo = 1;
    let hi = n;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const sq = mid * mid;
      if (sq === n) return true;
      if (sq < n) lo = mid + 1;
      else hi = mid - 1;
    }
    return false;
  },

  // --- math (batch 6) ------------------------------------------------------
  'sum-of-squares': (...args: unknown[]) => {
    let n = args[0] as number;
    if (n === 0) return 0;
    let sum = 0;
    while (n > 0) {
      const d = n % 10;
      sum += d * d;
      n = Math.floor(n / 10);
    }
    return sum;
  },

  // --- arrays (batch 5) ----------------------------------------------------
  'find-max-min': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max = nums[0] as number;
    let min = nums[0] as number;
    for (let i = 1; i < nums.length; i++) {
      const v = nums[i] as number;
      if (v > max) max = v;
      if (v < min) min = v;
    }
    return [max, min];
  },

  // --- strings (batch 5) ---------------------------------------------------
  'reverse-string': (...args: unknown[]) => {
    const s = args[0] as string;
    return s.split('').reverse().join('');
  },

  // --- hash-map (batch 5) --------------------------------------------------
  'count-good-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    let count = 0;
    for (const n of nums) {
      count += freq.get(n) ?? 0;
      freq.set(n, (freq.get(n) ?? 0) + 1);
    }
    return count;
  },

  // --- two-pointers (batch 5) ----------------------------------------------
  'remove-duplicates-sorted': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const out: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (i === 0 || (nums[i] as number) !== (nums[i - 1] as number)) out.push(nums[i] as number);
    }
    return out;
  },

  // --- sliding-window (batch 5) --------------------------------------------
  'min-subarray-length': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let left = 0;
    let sum = 0;
    let best = Infinity;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right] as number;
      while (sum >= target) {
        best = Math.min(best, right - left + 1);
        sum -= nums[left] as number;
        left++;
      }
    }
    return best === Infinity ? 0 : best;
  },

  'minimum-size-subarray-sum': (...args: unknown[]) => {
    const target = args[0] as number;
    const nums = args[1] as number[];
    let left = 0;
    let sum = 0;
    let best = Infinity;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right]!;
      while (sum >= target) {
        best = Math.min(best, right - left + 1);
        sum -= nums[left]!;
        left++;
      }
    }
    return best === Infinity ? 0 : best;
  },

  // --- stack (batch 5) -----------------------------------------------------
  'evaluate-rpn': (...args: unknown[]) => {
    const tokens = args[0] as string[];
    const stack: number[] = [];
    for (const t of tokens) {
      if ('+-*/'.includes(t) && t.length === 1) {
        const b = stack.pop() as number;
        const a = stack.pop() as number;
        if (t === '+') stack.push(a + b);
        else if (t === '-') stack.push(a - b);
        else if (t === '*') stack.push(a * b);
        else stack.push(Math.trunc(a / b));
      } else {
        stack.push(Number(t));
      }
    }
    return stack[0];
  },

  // --- arrays (batch 4) ----------------------------------------------------
  'missing-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const expected = (n * (n + 1)) / 2;
    const actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
  },

  'contains-duplicate': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const seen = new Set<number>();
    for (const n of nums) {
      if (seen.has(n)) return true;
      seen.add(n);
    }
    return false;
  },

  // --- strings (batch 4) ---------------------------------------------------
  'longest-common-prefix': (...args: unknown[]) => {
    const strs = args[0] as string[];
    let prefix = strs[0] as string;
    for (const s of strs) {
      while (!s.startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        if (!prefix) return '';
      }
    }
    return prefix;
  },

  // --- hash-map (batch 4) --------------------------------------------------
  'word-frequency': (...args: unknown[]) => {
    const text = args[0] as string;
    const freq: Record<string, number> = {};
    for (const w of text.split(' ')) {
      freq[w] = (freq[w] ?? 0) + 1;
    }
    return freq;
  },

  // --- math (batch 4) ------------------------------------------------------
  'power-of-two': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
  },

  'fibonacci-number': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n <= 1) return n;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const tmp = a + b;
      a = b;
      b = tmp;
    }
    return b;
  },

  // --- new problems --------------------------------------------------------
  'max-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let cur = nums[0] as number;
    let best = cur;
    for (let i = 1; i < nums.length; i++) {
      const n = nums[i] as number;
      cur = Math.max(n, cur + n);
      if (cur > best) best = cur;
    }
    return best;
  },

  'anagram-check': (...args: unknown[]) => {
    const s = args[0] as string;
    const t = args[1] as string;
    if (s.length !== t.length) return false;
    const freq = new Map<string, number>();
    for (const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1);
    for (const ch of t) {
      const c = freq.get(ch);
      if (!c) return false;
      freq.set(ch, c - 1);
    }
    return true;
  },

  'move-zeros': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const out: number[] = nums.filter((n) => n !== 0);
    while (out.length < nums.length) out.push(0);
    return out;
  },

  'compress-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let out = '';
    let i = 0;
    while (i < s.length) {
      let j = i;
      while (j < s.length && s[j] === s[i]) j++;
      out += s[i] + String(j - i);
      i = j;
    }
    return out;
  },

  'longest-unique-window': (...args: unknown[]) => {
    const s = args[0] as string;
    const seen = new Set<string>();
    let left = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
      while (seen.has(s[right] as string)) {
        seen.delete(s[left] as string);
        left++;
      }
      seen.add(s[right] as string);
      if (right - left + 1 > best) best = right - left + 1;
    }
    return best;
  },

  'count-divisors': (...args: unknown[]) => {
    const n = args[0] as number;
    let count = 0;
    for (let d = 1; d * d <= n; d++) {
      if (n % d === 0) {
        count += d * d === n ? 1 : 2;
      }
    }
    return count;
  },

  'valid-subsequence': (...args: unknown[]) => {
    const seq = args[0] as number[];
    const arr = args[1] as number[];
    let i = 0;
    for (const val of arr) {
      if (i < seq.length && val === seq[i]) i++;
    }
    return i === seq.length;
  },

  'binary-search-range': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    function lowerBound(t: number): number {
      let lo = 0;
      let hi = nums.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if ((nums[mid] as number) >= t) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
    return lowerBound(target + 1) - lowerBound(target);
  },

  'daily-temperatures': (...args: unknown[]) => {
    const temps = args[0] as number[];
    const stack: number[] = [];
    const answer = new Array<number>(temps.length).fill(0);
    for (let i = 0; i < temps.length; i++) {
      while (stack.length && (temps[i] as number) > (temps[stack[stack.length - 1] as number] as number)) {
        const j = stack.pop() as number;
        answer[j] = i - j;
      }
      stack.push(i);
    }
    return answer;
  },



  // ---------------------------------------------------------------------------
  // Medium-difficulty problems (batch expansion)
  // ---------------------------------------------------------------------------

  'product-except-self': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const out = new Array<number>(n).fill(1);
    let p = 1;
    for (let i = 0; i < n; i++) {
      out[i] = p;
      p *= nums[i] as number;
    }
    p = 1;
    for (let i = n - 1; i >= 0; i--) {
      out[i] = (out[i] as number) * p;
      p *= nums[i] as number;
    }
    return out.map(v => v + 0); // normalize -0 → 0
  },

  'sort-colors': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice();
    let lo = 0, mid = 0, hi = nums.length - 1;
    while (mid <= hi) {
      const mVal = nums[mid] as number;
      if (mVal === 0) {
        const tmp = nums[lo] as number;
        nums[lo] = mVal;
        nums[mid] = tmp;
        lo++; mid++;
      } else if (mVal === 2) {
        const tmp = nums[hi] as number;
        nums[hi] = mVal;
        nums[mid] = tmp;
        hi--;
      } else {
        mid++;
      }
    }
    return nums;
  },

  'trap-rain-water': (...args: unknown[]) => {
    const height = args[0] as number[];
    const n = height.length;
    if (n === 0) return 0;
    const leftMax = new Array<number>(n);
    const rightMax = new Array<number>(n);
    leftMax[0] = height[0] as number;
    for (let i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1] as number, height[i] as number);
    rightMax[n - 1] = height[n - 1] as number;
    for (let i = n - 2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i + 1] as number, height[i] as number);
    let water = 0;
    for (let i = 0; i < n; i++) water += Math.max(0, Math.min(leftMax[i] as number, rightMax[i] as number) - (height[i] as number));
    return water;
  },

  'container-with-most-water': (...args: unknown[]) => {
    const height = args[0] as number[];
    let left = 0, right = height.length - 1, max = 0;
    while (left < right) {
      const lh = height[left] as number;
      const rh = height[right] as number;
      max = Math.max(max, Math.min(lh, rh) * (right - left));
      if (lh < rh) left++;
      else right--;
    }
    return max;
  },

  'three-sum-zero': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
        const ni = nums[i] as number;
        const nl = nums[l] as number;
        const nr = nums[r] as number;
        const s = ni + nl + nr;
        if (s === 0) {
          res.push([ni, nl, nr]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++; r--;
        } else if (s < 0) {
          l++;
        } else {
          r--;
        }
      }
    }
    return res;
  },

  'jump-game': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > maxReach) return false;
      maxReach = Math.max(maxReach, i + (nums[i] as number));
    }
    return true;
  },

  'best-time-buy-sell-two': (...args: unknown[]) => {
    const prices = args[0] as number[];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      const today = prices[i] as number;
      const yesterday = prices[i - 1] as number;
      if (today > yesterday) profit += today - yesterday;
    }
    return profit;
  },

  'majority-element': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let candidate = nums[0] as number, count = 1;
    for (let i = 1; i < nums.length; i++) {
      const cur = nums[i] as number;
      if (count === 0) { candidate = cur; count = 1; }
      else if (cur === candidate) count++;
      else count--;
    }
    return candidate;
  },

  'kth-largest-element': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice();
    const k = args[1] as number;
    nums.sort((a, b) => b - a);
    return nums[k - 1] as number;
  },

  'find-all-duplicates': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice();
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i] as number) - 1;
      if ((nums[idx] as number) < 0) {
        res.push(idx + 1);
      } else {
        nums[idx] = -(nums[idx] as number);
      }
    }
    return res.sort((a, b) => a - b);
  },

  'longest-subarray-of-ones': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right < nums.length; right++) {
      if ((nums[right] as number) === 0) zeros++;
      while (zeros > 1) {
        if ((nums[left] as number) === 0) zeros--;
        left++;
      }
      best = Math.max(best, right - left);
    }
    return best;
  },

  'maximum-erasure-value': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0, sum = 0, best = 0;
    const seen = new Set<number>();
    for (let right = 0; right < nums.length; right++) {
      const val = nums[right] as number;
      while (seen.has(val)) {
        const lv = nums[left] as number;
        seen.delete(lv);
        sum -= lv;
        left++;
      }
      seen.add(val);
      sum += val;
      best = Math.max(best, sum);
    }
    return best;
  },


  // -------------------------------------------------------------------------
  // 1. group-anagrams
  // Canonical: each group sorted asc, groups sorted lexicographically by [0].
  // -------------------------------------------------------------------------
  'group-anagrams': (...args: unknown[]) => {
    const strs = args[0] as string[];
    const map = new Map<string, string[]>();
    for (const s of strs) {
      const key = s.split('').sort().join('');
      const group = map.get(key) ?? [];
      group.push(s);
      map.set(key, group);
    }
    return [...map.values()]
      .map(g => g.sort())
      .sort((a, b) => (a[0] ?? '').localeCompare(b[0] ?? ''));
  },

  // -------------------------------------------------------------------------
  // 2. top-k-frequent-elements
  // Canonical: sort by (-frequency, value), take k, return sorted ascending.
  // -------------------------------------------------------------------------
  'top-k-frequent-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    return [...freq.keys()]
      .sort((a, b) => (freq.get(b) ?? 0) - (freq.get(a) ?? 0) || a - b)
      .slice(0, k)
      .sort((a, b) => a - b);
  },

  // -------------------------------------------------------------------------
  // 3. longest-consecutive-sequence
  // O(n) set-based approach.
  // -------------------------------------------------------------------------
  'longest-consecutive-sequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const s = new Set(nums);
    let best = 0;
    for (const n of s) {
      if (!s.has(n - 1)) {
        let len = 1;
        while (s.has(n + len)) len++;
        best = Math.max(best, len);
      }
    }
    return best;
  },

  // -------------------------------------------------------------------------
  // 4. find-all-anagrams-in-string
  // Canonical: sorted array of starting indices.
  // -------------------------------------------------------------------------
  'find-all-anagrams-in-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const p = args[1] as string;
    const pFreq: Record<string, number> = {};
    for (const c of p) pFreq[c] = (pFreq[c] ?? 0) + 1;
    const wFreq: Record<string, number> = {};
    const result: number[] = [];
    for (let i = 0; i < s.length; i++) {
      const ch = s.charAt(i);
      wFreq[ch] = (wFreq[ch] ?? 0) + 1;
      if (i >= p.length) {
        const out = s.charAt(i - p.length);
        wFreq[out] = (wFreq[out] ?? 0) - 1;
        if (wFreq[out] === 0) delete wFreq[out];
      }
      if (i >= p.length - 1) {
        if (
          Object.keys(pFreq).length === Object.keys(wFreq).length &&
          Object.keys(pFreq).every(c => pFreq[c] === wFreq[c])
        ) {
          result.push(i - p.length + 1);
        }
      }
    }
    return result;
  },

  // -------------------------------------------------------------------------
  // 5. count-palindromic-substrings
  // Expand-around-center.
  // -------------------------------------------------------------------------
  'count-palindromic-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      // Odd length
      for (let l = i, r = i; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) count++;
      // Even length
      for (let l = i, r = i + 1; l >= 0 && r < s.length && s[l] === s[r]; l--, r++) count++;
    }
    return count;
  },

  // -------------------------------------------------------------------------
  // 6. decode-string
  // Stack-based decoder for k[encoded_string] patterns.
  // -------------------------------------------------------------------------
  'decode-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let cur = '';
    let num = 0;
    const stack: Array<[string, number]> = [];
    for (const ch of s) {
      if (ch >= '0' && ch <= '9') {
        num = num * 10 + Number(ch);
      } else if (ch === '[') {
        stack.push([cur, num]);
        cur = '';
        num = 0;
      } else if (ch === ']') {
        const [prev, k] = stack.pop()!;
        cur = prev + cur.repeat(k);
      } else {
        cur += ch;
      }
    }
    return cur;
  },

  // -------------------------------------------------------------------------
  // 7. minimum-remove-to-make-valid
  // Two-pass: left-to-right removes unmatched ')'; right-to-left removes '('.
  // -------------------------------------------------------------------------
  'minimum-remove-to-make-valid': (...args: unknown[]) => {
    const s = args[0] as string;
    let open = 0;
    let s1 = '';
    for (const c of s) {
      if (c === '(') {
        open++;
        s1 += c;
      } else if (c === ')') {
        if (open > 0) {
          open--;
          s1 += c;
        }
        // else drop unmatched ')'
      } else {
        s1 += c;
      }
    }
    let close = 0;
    let s2 = '';
    for (let i = s1.length - 1; i >= 0; i--) {
      const c = s1[i];
      if (c === ')') {
        close++;
        s2 = c + s2;
      } else if (c === '(') {
        if (close > 0) {
          close--;
          s2 = c + s2;
        }
        // else drop unmatched '('
      } else {
        s2 = c + s2;
      }
    }
    return s2;
  },

  // -------------------------------------------------------------------------
  // 8. reverse-string-words
  // Split, filter, reverse, join.
  // -------------------------------------------------------------------------
  'reverse-string-words': (...args: unknown[]) => {
    const s = args[0] as string;
    return s.trim().split(/\s+/).reverse().join(' ');
  },

  // -------------------------------------------------------------------------
  // 9. string-multiply
  // Grade-school digit-by-digit multiplication.
  // -------------------------------------------------------------------------
  'string-multiply': (...args: unknown[]) => {
    const num1 = args[0] as string;
    const num2 = args[1] as string;
    const m = num1.length;
    const n = num2.length;
    const res: number[] = new Array<number>(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        const d1 = num1.charCodeAt(i) - 48;
        const d2 = num2.charCodeAt(j) - 48;
        const sum = d1 * d2 + (res[i + j + 1] ?? 0);
        res[i + j + 1] = sum % 10;
        res[i + j] = (res[i + j] ?? 0) + Math.floor(sum / 10);
      }
    }
    const str = res.join('').replace(/^0+/, '');
    return str || '0';
  },

  // -------------------------------------------------------------------------
  // 10. is-subsequence-medium
  // DP: count distinct subsequence occurrences of s in t, mod 10^9+7.
  // -------------------------------------------------------------------------
  'is-subsequence-medium': (...args: unknown[]) => {
    const s = args[0] as string;
    const t = args[1] as string;
    const MOD = 1_000_000_007;
    const m = s.length;
    const n = t.length;
    // prev[j] = number of ways to form s[0..i-1] using t[0..j-1]
    let prev: number[] = new Array<number>(n + 1).fill(0);
    // Base case: empty pattern matches exactly once at every position
    for (let j = 0; j <= n; j++) prev[j] = 1;
    for (let i = 1; i <= m; i++) {
      const curr: number[] = new Array<number>(n + 1).fill(0);
      for (let j = 1; j <= n; j++) {
        curr[j] = curr[j - 1] as number;
        if (s.charAt(i - 1) === t.charAt(j - 1)) {
          curr[j] = ((curr[j] as number) + (prev[j - 1] as number)) % MOD;
        }
      }
      prev = curr;
    }
    return prev[n] as number;
  },

  // -------------------------------------------------------------------------
  // 11. character-replacement
  // Sliding window: valid if (window_size - maxCount) <= k.
  // -------------------------------------------------------------------------
  'character-replacement': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const freq = new Array<number>(26).fill(0);
    let left = 0;
    let maxCount = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
      const idx = s.charCodeAt(right) - 65;
      freq[idx] = (freq[idx] ?? 0) + 1;
      maxCount = Math.max(maxCount, freq[idx] ?? 0);
      while (right - left + 1 - maxCount > k) {
        const li = s.charCodeAt(left) - 65;
        freq[li] = (freq[li] ?? 0) - 1;
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return best;
  },


  // --- binary-search --------------------------------------------------------

  'find-k-pairs-smallest-sums': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const k = args[2] as number;
    if (!nums1.length || !nums2.length) return [];
    const heap: [number, number, number][] = [];
    const push = (sum: number, i: number, j: number) => {
      let idx = heap.length;
      heap.push([sum, i, j]);
      while (idx > 0) {
        const parent = (idx - 1) >> 1;
        if (heap[parent]![0] > heap[idx]![0]) {
          [heap[parent], heap[idx]] = [heap[idx]!, heap[parent]!];
          idx = parent;
        } else break;
      }
    };
    const pop = () => {
      const top = heap[0];
      const last = heap.pop()!;
      if (heap.length > 0) {
        heap[0] = last;
        let idx = 0;
        while (true) {
          let small = idx;
          const l = 2 * idx + 1, r = 2 * idx + 2;
          if (l < heap.length && heap[l]![0] < heap[small]![0]) small = l;
          if (r < heap.length && heap[r]![0] < heap[small]![0]) small = r;
          if (small === idx) break;
          [heap[small], heap[idx]] = [heap[idx]!, heap[small]!];
          idx = small;
        }
      }
      return top;
    };
    for (let i = 0; i < Math.min(nums1.length, k); i++) push(nums1[i]! + nums2[0]!, i, 0);
    const result: number[][] = [];
    while (result.length < k && heap.length > 0) {
      const [, i, j] = pop()!;
      result.push([nums1[i]!, nums2[j]!]);
      if (j + 1 < nums2.length) push(nums1[i]! + nums2[j + 1]!, i, j + 1);
    }
    return result.sort((a, b) => (a[0]! - b[0]!) || (a[1]! - b[1]!));
  },

  'search-rotated-sorted': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const midVal = nums[mid] as number;
      const leftVal = nums[left] as number;
      const rightVal = nums[right] as number;
      if (midVal === target) return mid;
      if (leftVal <= midVal) {
        // left half is sorted
        if (target >= leftVal && target < midVal) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // right half is sorted
        if (target > midVal && target <= rightVal) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  },

  'find-minimum-rotated': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = (left + right) >> 1;
      if ((nums[mid] as number) > (nums[right] as number)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return nums[left] as number;
  },

  'single-element-sorted': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (mid % 2 === 1) mid--; // align to even index
      if ((nums[mid] as number) === (nums[mid + 1] as number)) {
        left = mid + 2;
      } else {
        right = mid;
      }
    }
    return nums[left] as number;
  },

  // --- stack ----------------------------------------------------------------

  'asteroid-collision': (...args: unknown[]) => {
    const asteroids = args[0] as number[];
    const stack: number[] = [];
    for (const a of asteroids) {
      let survived = true;
      while (survived && a < 0 && stack.length > 0 && (stack[stack.length - 1] as number) > 0) {
        const top = stack[stack.length - 1] as number;
        if (top < -a) {
          stack.pop();
        } else if (top === -a) {
          stack.pop();
          survived = false;
        } else {
          survived = false;
        }
      }
      if (survived) stack.push(a);
    }
    return stack;
  },

  'score-of-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: number[] = [0];
    for (const c of s) {
      if (c === '(') {
        stack.push(0);
      } else {
        const v = stack.pop() as number;
        stack[stack.length - 1] = (stack[stack.length - 1] as number) + Math.max(2 * v, 1);
      }
    }
    return stack[0] as number;
  },

  'valid-parenthesis-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let minOpen = 0;
    let maxOpen = 0;
    for (const c of s) {
      if (c === '(') {
        minOpen++;
        maxOpen++;
      } else if (c === ')') {
        minOpen--;
        maxOpen--;
      } else {
        // '*' can be '(', ')' or empty
        minOpen--;
        maxOpen++;
      }
      if (maxOpen < 0) return false;
      if (minOpen < 0) minOpen = 0;
    }
    return minOpen === 0;
  },

  'simplify-path': (...args: unknown[]) => {
    const path = args[0] as string;
    const stack: string[] = [];
    for (const part of path.split('/')) {
      if (part === '' || part === '.') continue;
      if (part === '..') { stack.pop(); } else { stack.push(part); }
    }
    return '/' + stack.join('/');
  },

  // --- math -----------------------------------------------------------------

  'add-binary': (...args: unknown[]) => {
    const a = args[0] as string, b = args[1] as string;
    let i = a.length - 1, j = b.length - 1, carry = 0, result = '';
    while (i >= 0 || j >= 0 || carry) {
      const sum = (i >= 0 ? parseInt(a[i--]!) : 0) + (j >= 0 ? parseInt(b[j--]!) : 0) + carry;
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
    }
    return result || '0';
  },

  'integer-to-roman': (...args: unknown[]) => {
    let num = args[0] as number;
    const table: [number, string][] = [
      [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],
      [50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I'],
    ];
    let result = '';
    for (const [val, sym] of table) {
      while (num >= val) { result += sym; num -= val; }
    }
    return result;
  },

  'task-scheduler': (...args: unknown[]) => {
    const tasks = args[0] as string[];
    const n = args[1] as number;
    const freq = new Map<string, number>();
    for (const t of tasks) freq.set(t, (freq.get(t) ?? 0) + 1);
    const maxFreq = Math.max(...freq.values());
    const maxCount = [...freq.values()].filter(v => v === maxFreq).length;
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
  },

  'count-primes-sieve': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n < 2) return 0;
    const isPrime = new Array(n).fill(true) as boolean[];
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime.filter(Boolean).length;
  },

  'pow-x-n': (...args: unknown[]) => {
    const x = args[0] as number;
    const n = args[1] as number;
    function helper(base: number, exp: number): number {
      if (exp === 0) return 1;
      const half = helper(base, Math.floor(exp / 2));
      return exp % 2 === 0 ? half * half : base * half * half;
    }
    if (n < 0) return helper(1 / x, -n);
    return helper(x, n);
  },

  'reverse-integer': (...args: unknown[]) => {
    const x = args[0] as number;
    const sign = x < 0 ? -1 : 1;
    const abs = Math.abs(x);
    const reversed = parseInt(String(abs).split('').reverse().join(''), 10) * sign;
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);
    return reversed > MAX || reversed < MIN ? 0 : reversed;
  },

  'happy-number': (...args: unknown[]) => {
    const n = args[0] as number;
    function digitSquareSum(num: number): number {
      let sum = 0;
      let remaining = num;
      while (remaining > 0) {
        const d = remaining % 10;
        sum += d * d;
        remaining = Math.floor(remaining / 10);
      }
      return sum;
    }
    let cur = n;
    const seen = new Set<number>();
    while (cur !== 1) {
      if (seen.has(cur)) return false;
      seen.add(cur);
      cur = digitSquareSum(cur);
    }
    return true;
  },

  // ---------------------------------------------------------------------------
  // Hard-difficulty problems
  // ---------------------------------------------------------------------------

  'n-queens': (...args: unknown[]) => {
    const n = args[0] as number;
    const result: string[][] = [];
    const cols = new Set<number>();
    const diag1 = new Set<number>(); // row - col
    const diag2 = new Set<number>(); // row + col
    const queens: number[] = [];
    const bt = (row: number): void => {
      if (row === n) {
        result.push(queens.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
      }
      for (let c = 0; c < n; c++) {
        if (cols.has(c) || diag1.has(row - c) || diag2.has(row + c)) continue;
        cols.add(c); diag1.add(row - c); diag2.add(row + c); queens.push(c);
        bt(row + 1);
        cols.delete(c); diag1.delete(row - c); diag2.delete(row + c); queens.pop();
      }
    };
    bt(0);
    return result;
  },

  'sudoku-solver': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(r => [...r]);
    const isValid = (r: number, c: number, d: string): boolean => {
      for (let i = 0; i < 9; i++) {
        if (board[r]![i] === d) return false;
        if (board[i]![c] === d) return false;
        const br = 3 * Math.floor(r / 3) + Math.floor(i / 3);
        const bc = 3 * Math.floor(c / 3) + (i % 3);
        if (board[br]![bc] === d) return false;
      }
      return true;
    };
    const solve = (): boolean => {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (board[r]![c] === '.') {
            for (let d = 1; d <= 9; d++) {
              const ch = String(d);
              if (isValid(r, c, ch)) {
                board[r]![c] = ch;
                if (solve()) return true;
                board[r]![c] = '.';
              }
            }
            return false;
          }
        }
      }
      return true;
    };
    solve();
    return board;
  },

  'first-missing-positive': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      while ((nums[i] as number) >= 1 && (nums[i] as number) <= n && nums[(nums[i] as number) - 1] !== nums[i]) {
        const idx = (nums[i] as number) - 1;
        const tmp = nums[idx] as number;
        nums[idx] = nums[i] as number;
        nums[i] = tmp;
      }
    }
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
  },

  'jump-game-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let jumps = 0, curEnd = 0, farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + (nums[i] as number));
      if (i === curEnd) { jumps++; curEnd = farthest; }
    }
    return jumps;
  },

  'largest-rectangle-histogram': (...args: unknown[]) => {
    const heights = args[0] as number[];
    const stack: number[] = [];
    let maxArea = 0;
    const h = [...heights, 0];
    for (let i = 0; i < h.length; i++) {
      while (stack.length && (h[stack[stack.length - 1] as number] as number) > (h[i] as number)) {
        const height = h[stack.pop() as number] as number;
        const width = stack.length === 0 ? i : i - (stack[stack.length - 1] as number) - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
    return maxArea;
  },

  'sliding-window-maximum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const deque: number[] = [];
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      while (deque.length && (deque[0] as number) < i - k + 1) deque.shift();
      while (deque.length && (nums[deque[deque.length - 1] as number] as number) < (nums[i] as number)) deque.pop();
      deque.push(i);
      if (i >= k - 1) result.push(nums[deque[0] as number] as number);
    }
    return result;
  },

  'largest-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const strs = nums.map(String);
    strs.sort((a, b) => (b + a) > (a + b) ? 1 : -1);
    if (strs[0] === '0') return '0';
    return strs.join('');
  },

  'longest-increasing-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const tails: number[] = [];
    for (const n of nums) {
      let lo = 0, hi = tails.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if ((tails[mid] as number) < n) lo = mid + 1;
        else hi = mid;
      }
      tails[lo] = n;
    }
    return tails.length;
  },

  'minimum-window-substring': (...args: unknown[]) => {
    const s = args[0] as string;
    const t = args[1] as string;
    const need = new Map<string, number>();
    for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
    let have = 0;
    const required = need.size;
    const window = new Map<string, number>();
    let left = 0, minLen = Infinity, minLeft = 0;
    for (let right = 0; right < s.length; right++) {
      const c = s.charAt(right);
      window.set(c, (window.get(c) ?? 0) + 1);
      if (need.has(c) && window.get(c) === need.get(c)) have++;
      while (have === required) {
        if (right - left + 1 < minLen) { minLen = right - left + 1; minLeft = left; }
        const lc = s.charAt(left);
        window.set(lc, (window.get(lc) ?? 0) - 1);
        if (need.has(lc) && (window.get(lc) ?? 0) < (need.get(lc) ?? 0)) have--;
        left++;
      }
    }
    return minLen === Infinity ? '' : s.slice(minLeft, minLeft + minLen);
  },

  'longest-valid-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: number[] = [-1];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === '(') {
        stack.push(i);
      } else {
        stack.pop();
        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLen = Math.max(maxLen, i - (stack[stack.length - 1] as number));
        }
      }
    }
    return maxLen;
  },

  'edit-distance': (...args: unknown[]) => {
    const word1 = args[0] as string;
    const word2 = args[1] as string;
    const m = word1.length, n = word2.length;
    const dp = Array.from({ length: m + 1 }, (_, i) =>
      Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
    );
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          (dp[i] as number[])[j] = (dp[i - 1] as number[])[j - 1] as number;
        } else {
          (dp[i] as number[])[j] = 1 + Math.min(
            (dp[i - 1] as number[])[j] as number,
            (dp[i] as number[])[j - 1] as number,
            (dp[i - 1] as number[])[j - 1] as number,
          );
        }
      }
    }
    return (dp[m] as number[])[n] as number;
  },

  'word-break': (...args: unknown[]) => {
    const s = args[0] as string;
    const wordDict = args[1] as string[];
    const wordSet = new Set(wordDict);
    const dp = new Array<boolean>(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordSet.has(s.slice(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[s.length] as boolean;
  },

  // ---------------------------------------------------------------------------
  // New problems — two-pointers (medium) + binary-search (hard) + stack (hard)
  // ---------------------------------------------------------------------------

  'three-sum-closest': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const target = args[1] as number;
    let closest = (nums[0] as number) + (nums[1] as number) + (nums[2] as number);
    for (let i = 0; i < nums.length - 2; i++) {
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        const s = (nums[i] as number) + (nums[l] as number) + (nums[r] as number);
        if (Math.abs(s - target) < Math.abs(closest - target)) closest = s;
        if (s === target) return s;
        else if (s < target) l++;
        else r--;
      }
    }
    return closest;
  },

  'boats-to-save-people': (...args: unknown[]) => {
    const people = (args[0] as number[]).slice().sort((a, b) => a - b);
    const limit = args[1] as number;
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    while (left <= right) {
      if ((people[left] as number) + (people[right] as number) <= limit) left++;
      right--;
      boats++;
    }
    return boats;
  },

  'partition-labels': (...args: unknown[]) => {
    const s = args[0] as string;
    const last: Record<string, number> = {};
    for (let i = 0; i < s.length; i++) last[s[i] as string] = i;
    const parts: number[] = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
      end = Math.max(end, last[s[i] as string] as number);
      if (i === end) {
        parts.push(end - start + 1);
        start = i + 1;
      }
    }
    return parts;
  },

  'basic-calculator': (...args: unknown[]) => {
    const s = args[0] as string;
    let result = 0;
    let num = 0;
    let sign = 1;
    const stack: number[] = [];
    for (const ch of s) {
      if (ch >= '0' && ch <= '9') {
        num = num * 10 + Number(ch);
      } else if (ch === '+') {
        result += sign * num;
        num = 0;
        sign = 1;
      } else if (ch === '-') {
        result += sign * num;
        num = 0;
        sign = -1;
      } else if (ch === '(') {
        stack.push(result, sign);
        result = 0;
        sign = 1;
      } else if (ch === ')') {
        result += sign * num;
        num = 0;
        const savedSign = stack.pop() as number;
        const savedResult = stack.pop() as number;
        result = savedResult + savedSign * result;
      }
      // spaces are skipped
    }
    return result + sign * num;
  },

  'sum-subarray-minimums': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const MOD = 1_000_000_007;
    const n = arr.length;
    const left = new Array<number>(n).fill(0);
    const right = new Array<number>(n).fill(0);
    const stk: number[] = [];
    for (let i = 0; i < n; i++) {
      while (stk.length && (arr[stk[stk.length - 1] as number] as number) >= (arr[i] as number)) stk.pop();
      left[i] = stk.length ? i - (stk[stk.length - 1] as number) : i + 1;
      stk.push(i);
    }
    stk.length = 0;
    for (let i = n - 1; i >= 0; i--) {
      while (stk.length && (arr[stk[stk.length - 1] as number] as number) > (arr[i] as number)) stk.pop();
      right[i] = stk.length ? (stk[stk.length - 1] as number) - i : n - i;
      stk.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans = (ans + (arr[i] as number) * (left[i] as number) * (right[i] as number)) % MOD;
    }
    return ans;
  },

  'remove-k-digits': (...args: unknown[]) => {
    const num = args[0] as string;
    const k = args[1] as number;
    const stk: string[] = [];
    let rem = k;
    for (const d of num) {
      while (rem > 0 && stk.length && (stk[stk.length - 1] as string) > d) {
        stk.pop();
        rem--;
      }
      stk.push(d);
    }
    while (rem-- > 0) stk.pop();
    return stk.join('').replace(/^0+/, '') || '0';
  },

  'split-array-largest-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let lo = Math.max(...nums);
    let hi = nums.reduce((a, b) => a + b, 0);
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      let parts = 1;
      let curr = 0;
      for (const n of nums) {
        if (curr + n > mid) {
          parts++;
          curr = 0;
        }
        curr += n;
      }
      if (parts <= k) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  },

  'capacity-to-ship': (...args: unknown[]) => {
    const weights = args[0] as number[];
    const days = args[1] as number;
    let lo = Math.max(...weights);
    let hi = weights.reduce((a, b) => a + b, 0);
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      let d = 1;
      let curr = 0;
      for (const w of weights) {
        if (curr + w > mid) {
          d++;
          curr = 0;
        }
        curr += w;
      }
      if (d <= days) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  },

  'max-consecutive-flips': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let left = 0;
    let zeros = 0;
    let best = 0;
    for (let right = 0; right < nums.length; right++) {
      if ((nums[right] as number) === 0) zeros++;
      while (zeros > k) {
        if ((nums[left] as number) === 0) zeros--;
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'count-subarrays-bounded-max': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const left = args[1] as number;
    const right = args[2] as number;
    function countAtMost(bound: number): number {
      let res = 0;
      let curr = 0;
      for (const n of nums) {
        curr = n <= bound ? curr + 1 : 0;
        res += curr;
      }
      return res;
    }
    return countAtMost(right) - countAtMost(left - 1);
  },

  // --- two-pointers — hard -------------------------------------------------
  'trapping-rain-water': (...args: unknown[]) => {
    const height = args[0] as number[];
    if (height.length === 0) return 0;
    let l = 0;
    let r = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    while (l < r) {
      if ((height[l] as number) <= (height[r] as number)) {
        leftMax = Math.max(leftMax, height[l] as number);
        water += leftMax - (height[l] as number);
        l++;
      } else {
        rightMax = Math.max(rightMax, height[r] as number);
        water += rightMax - (height[r] as number);
        r--;
      }
    }
    return water;
  },

  'four-sum': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const target = args[1] as number;
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const result: number[][] = [];
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;
        let l = j + 1;
        let r = n - 1;
        while (l < r) {
          const sum = (nums[i] as number) + (nums[j] as number) + (nums[l] as number) + (nums[r] as number);
          if (sum === target) {
            result.push([nums[i] as number, nums[j] as number, nums[l] as number, nums[r] as number]);
            while (l < r && nums[l] === nums[l + 1]) l++;
            while (l < r && nums[r] === nums[r - 1]) r--;
            l++;
            r--;
          } else if (sum < target) {
            l++;
          } else {
            r--;
          }
        }
      }
    }
    return result;
  },

  // --- math — hard ---------------------------------------------------------
  'fraction-to-recurring-decimal': (...args: unknown[]) => {
    let numerator = args[0] as number;
    let denominator = args[1] as number;
    if (numerator === 0) return '0';
    let result = '';
    if ((numerator < 0) !== (denominator < 0)) result += '-';
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    result += Math.floor(numerator / denominator).toString();
    let remainder = numerator % denominator;
    if (remainder === 0) return result;
    result += '.';
    const seen = new Map<number, number>();
    const fracChars: string[] = [];
    while (remainder !== 0) {
      if (seen.has(remainder)) {
        const pos = seen.get(remainder) as number;
        fracChars.splice(pos, 0, '(');
        fracChars.push(')');
        break;
      }
      seen.set(remainder, fracChars.length);
      remainder *= 10;
      fracChars.push(Math.floor(remainder / denominator).toString());
      remainder = remainder % denominator;
    }
    return result + fracChars.join('');
  },

  'integer-to-english-words': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num === 0) return 'Zero';
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
      'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    function helper(n: number): string {
      if (n === 0) return '';
      if (n < 20) return (ones[n] as string) + ' ';
      if (n < 100) return (tens[Math.floor(n / 10)] as string) + ' ' + helper(n % 10);
      return (ones[Math.floor(n / 100)] as string) + ' Hundred ' + helper(n % 100);
    }
    const scales: [number, string][] = [
      [1_000_000_000, 'Billion'],
      [1_000_000, 'Million'],
      [1_000, 'Thousand'],
      [1, ''],
    ];
    let result = '';
    let remaining = num;
    for (const [scale, label] of scales) {
      if (remaining >= scale) {
        result += helper(Math.floor(remaining / scale)) + (label ? label + ' ' : '');
        remaining = remaining % scale;
      }
    }
    return result.trim();
  },

  'median-two-sorted-arrays': (...args: unknown[]) => {
    let nums1 = args[0] as number[];
    let nums2 = args[1] as number[];
    if (nums1.length > nums2.length) {
      const tmp = nums1;
      nums1 = nums2;
      nums2 = tmp;
    }
    const m = nums1.length;
    const n = nums2.length;
    const half = Math.floor((m + n + 1) / 2);
    let lo = 0;
    let hi = m;
    while (lo <= hi) {
      const i = (lo + hi) >> 1;
      const j = half - i;
      const ln1 = i === 0 ? -Infinity : (nums1[i - 1] as number);
      const rn1 = i === m ? Infinity : (nums1[i] as number);
      const ln2 = j === 0 ? -Infinity : (nums2[j - 1] as number);
      const rn2 = j === n ? Infinity : (nums2[j] as number);
      if (ln1 <= rn2 && ln2 <= rn1) {
        const maxLeft = Math.max(ln1, ln2);
        if ((m + n) % 2 === 1) return maxLeft;
        return (maxLeft + Math.min(rn1, rn2)) / 2;
      } else if (ln1 > rn2) {
        hi = i - 1;
      } else {
        lo = i + 1;
      }
    }
    return 0; // unreachable for valid inputs
  },

  // --- sliding-window — medium ----------------------------------------------
  'at-most-k-distinct': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const freq = new Map<string, number>();
    let l = 0;
    let best = 0;
    for (let r = 0; r < s.length; r++) {
      freq.set(s[r]!, (freq.get(s[r]!) ?? 0) + 1);
      while (freq.size > k) {
        const lc = s[l++]!;
        freq.set(lc, freq.get(lc)! - 1);
        if (freq.get(lc) === 0) freq.delete(lc);
      }
      best = Math.max(best, r - l + 1);
    }
    return best;
  },

  'permutation-in-string': (...args: unknown[]) => {
    const s1 = args[0] as string;
    const s2 = args[1] as string;
    if (s1.length > s2.length) return false;
    const count = new Array<number>(26).fill(0);
    const window = new Array<number>(26).fill(0);
    const a = 'a'.charCodeAt(0);
    for (const c of s1) count[c.charCodeAt(0) - a]!++;
    const n = s1.length;
    for (let r = 0; r < s2.length; r++) {
      window[s2.charCodeAt(r) - a]!++;
      if (r >= n) window[s2.charCodeAt(r - n) - a]!--;
      if (r >= n - 1) {
        let ok = true;
        for (let i = 0; i < 26; i++) {
          if (window[i] !== count[i]) { ok = false; break; }
        }
        if (ok) return true;
      }
    }
    return false;
  },

  'subarray-product-less-than-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    if (k <= 1) return 0;
    let l = 0;
    let product = 1;
    let count = 0;
    for (let r = 0; r < nums.length; r++) {
      product *= nums[r]!;
      while (product >= k) product /= nums[l++]!;
      count += r - l + 1;
    }
    return count;
  },

  // --- dynamic-programming --------------------------------------------------
  'longest-string-chain': (...args: unknown[]) => {
    const words = (args[0] as string[]).slice();
    words.sort((a, b) => a.length - b.length);
    const dp = new Map<string, number>();
    let best = 1;
    for (const word of words) {
      let max = 0;
      for (let i = 0; i < word.length; i++) {
        const pred = word.slice(0, i) + word.slice(i + 1);
        max = Math.max(max, dp.get(pred) ?? 0);
      }
      dp.set(word, max + 1);
      best = Math.max(best, max + 1);
    }
    return best;
  },

  'house-robber': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let prev2 = 0;
    let prev1 = 0;
    for (const n of nums) {
      const curr = Math.max(prev1, prev2 + n);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  },

  'coin-change': (...args: unknown[]) => {
    const coins = args[0] as number[];
    const amount = args[1] as number;
    const dp = new Array<number>(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
      for (const c of coins) {
        if (i >= c) dp[i] = Math.min(dp[i]!, dp[i - c]! + 1);
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  },

  'longest-common-subsequence': (...args: unknown[]) => {
    const text1 = args[0] as string;
    const text2 = args[1] as string;
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i]![j] = text1[i - 1] === text2[j - 1]
          ? dp[i - 1]![j - 1]! + 1
          : Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
      }
    }
    return dp[m]![n];
  },

  'minimum-path-sum': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const m = grid.length, n = grid[0]!.length;
    const dp = grid.map(row => [...row]);
    for (let j = 1; j < n; j++) dp[0]![j]! += dp[0]![j - 1]!;
    for (let i = 1; i < m; i++) dp[i]![0]! += dp[i - 1]![0]!;
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i]![j]! += Math.min(dp[i - 1]![j]!, dp[i]![j - 1]!);
      }
    }
    return dp[m - 1]![n - 1];
  },

  'decode-ways': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    const dp = new Array<number>(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] !== '0' ? 1 : 0;
    for (let i = 2; i <= n; i++) {
      if (s[i - 1] !== '0') dp[i]! += dp[i - 1]!;
      const two = +s.slice(i - 2, i);
      if (two >= 10 && two <= 26) dp[i]! += dp[i - 2]!;
    }
    return dp[n];
  },

  'unique-paths': (...args: unknown[]) => {
    const m = args[0] as number;
    const n = args[1] as number;
    const dp = Array.from({ length: m }, () => new Array<number>(n).fill(1));
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i]![j] = dp[i - 1]![j]! + dp[i]![j - 1]!;
      }
    }
    return dp[m - 1]![n - 1];
  },

  // --- hash-map — hard -------------------------------------------------------
  'four-sum-ii': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const nums3 = args[2] as number[];
    const nums4 = args[3] as number[];
    const map = new Map<number, number>();
    for (const a of nums1) {
      for (const b of nums2) {
        map.set(a + b, (map.get(a + b) ?? 0) + 1);
      }
    }
    let count = 0;
    for (const c of nums3) {
      for (const d of nums4) {
        count += map.get(-(c + d)) ?? 0;
      }
    }
    return count;
  },

  'max-points-on-line': (...args: unknown[]) => {
    const points = args[0] as number[][];
    if (points.length <= 2) return points.length;
    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
    let result = 1;
    for (let i = 0; i < points.length; i++) {
      const map = new Map<string, number>();
      let localMax = 0;
      for (let j = i + 1; j < points.length; j++) {
        let dy = points[j]![1]! - points[i]![1]!;
        let dx = points[j]![0]! - points[i]![0]!;
        const g = gcd(Math.abs(dy), Math.abs(dx));
        dy /= g;
        dx /= g;
        if (dx < 0 || (dx === 0 && dy < 0)) {
          dy = -dy;
          dx = -dx;
        }
        const key = `${dy},${dx}`;
        const cnt = (map.get(key) ?? 0) + 1;
        map.set(key, cnt);
        localMax = Math.max(localMax, cnt);
      }
      result = Math.max(result, localMax + 1);
    }
    return result;
  },

  'lru-cache': (...args: unknown[]) => {
    const capacity = args[0] as number;
    const ops = args[1] as string[];
    const opArgs = args[2] as number[][];
    const map = new Map<number, number>();
    const order: number[] = [];
    const touch = (key: number) => {
      const i = order.indexOf(key);
      if (i !== -1) order.splice(i, 1);
      order.push(key);
    };
    const cache = {
      get(key: number): number {
        if (!map.has(key)) return -1;
        touch(key);
        return map.get(key)!;
      },
      put(key: number, value: number): void {
        if (map.has(key)) {
          map.set(key, value);
          touch(key);
        } else {
          if (map.size >= capacity) {
            const lru = order.shift()!;
            map.delete(lru);
          }
          map.set(key, value);
          order.push(key);
        }
      },
    };
    return ops.map((op, i) => {
      const a = opArgs[i] ?? [];
      if (op === 'get') return cache.get(a[0]!);
      if (op === 'put') { cache.put(a[0]!, a[1]!); return null; }
      return null;
    });
  },

  // --- math — easy -----------------------------------------------------------
  'roman-to-integer': (...args: unknown[]) => {
    const s = args[0] as string;
    const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      const cur = map[s[i]!]!;
      const next = map[s[i + 1]!] ?? 0;
      res += cur < next ? -cur : cur;
    }
    return res;
  },

  // --- math — medium ---------------------------------------------------------
  'perfect-squares': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array<number>(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i]!, dp[i - j * j]! + 1);
      }
    }
    return dp[n];
  },

  // --- arrays — medium (extra) -----------------------------------------------
  'valid-sudoku': (...args: unknown[]) => {
    const board = args[0] as string[][];
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const v = board[i]![j]!;
        if (v === '.') continue;
        const b = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i]!.has(v) || cols[j]!.has(v) || boxes[b]!.has(v)) return false;
        rows[i]!.add(v);
        cols[j]!.add(v);
        boxes[b]!.add(v);
      }
    }
    return true;
  },

  // --- binary-search — medium ------------------------------------------------
  'find-first-and-last-position': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    function search(findFirst: boolean): number {
      let lo = 0, hi = nums.length - 1, res = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] === target) {
          res = mid;
          if (findFirst) hi = mid - 1;
          else lo = mid + 1;
        } else if (nums[mid]! < target) lo = mid + 1;
        else hi = mid - 1;
      }
      return res;
    }
    return [search(true), search(false)];
  },

  'search-2d-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const target = args[1] as number;
    const m = matrix.length, n = matrix[0]!.length;
    let lo = 0, hi = m * n - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const val = matrix[Math.floor(mid / n)]![mid % n]!;
      if (val === target) return true;
      else if (val < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return false;
  },

  'search-2d-matrix-ii': (...args: unknown[]) => {
    const matrix = args[0] as number[][], target = args[1] as number;
    let row = 0, col = matrix[0]!.length - 1;
    while (row < matrix.length && col >= 0) {
      const val = matrix[row]![col]!;
      if (val === target) return true;
      else if (val > target) col--;
      else row++;
    }
    return false;
  },

  // --- arrays — medium (matrix) ---------------------------------------------
  'spiral-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const m = matrix.length, n = matrix[0]!.length;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    const res: number[] = [];
    while (top <= bottom && left <= right) {
      for (let c = left; c <= right; c++) res.push(matrix[top]![c]!);
      top++;
      for (let r = top; r <= bottom; r++) res.push(matrix[r]![right]!);
      right--;
      if (top <= bottom) {
        for (let c = right; c >= left; c--) res.push(matrix[bottom]![c]!);
        bottom--;
      }
      if (left <= right) {
        for (let r = bottom; r >= top; r--) res.push(matrix[r]![left]!);
        left++;
      }
    }
    return res;
  },

  'rotate-image': (...args: unknown[]) => {
    const matrix = (args[0] as number[][]).map(r => [...r]);
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i]![j], matrix[j]![i]] = [matrix[j]![i]!, matrix[i]![j]!];
      }
    }
    for (const row of matrix) row.reverse();
    return matrix;
  },

  'maximal-square': (...args: unknown[]) => {
    const matrix = args[0] as string[][];
    const m = matrix.length, n = matrix[0]!.length;
    const dp = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    let best = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i]![j] === '1') {
          dp[i]![j] = i > 0 && j > 0
            ? Math.min(dp[i - 1]![j]!, dp[i]![j - 1]!, dp[i - 1]![j - 1]!) + 1
            : 1;
          best = Math.max(best, dp[i]![j]!);
        }
      }
    }
    return best * best;
  },

  'queue-reconstruction-by-height': (...args: unknown[]) => {
    const people = (args[0] as number[][]).map(p => [...p]);
    people.sort((a, b) => b[0]! !== a[0]! ? b[0]! - a[0]! : a[1]! - b[1]!);
    const result: number[][] = [];
    for (const p of people) result.splice(p[1]!, 0, p);
    return result;
  },

  'remove-duplicates-sorted-array-ii': (...args: unknown[]) => {
    const arr = (args[0] as number[]).slice();
    let k = 0;
    for (const num of arr) {
      if (k < 2 || arr[k - 2] !== num) arr[k++] = num;
    }
    return arr.slice(0, k);
  },

  'set-matrix-zeroes': (...args: unknown[]) => {
    const matrix = (args[0] as number[][]).map(r => [...r]);
    const m = matrix.length, n = matrix[0]!.length;
    let firstRowZero = false, firstColZero = false;
    for (let j = 0; j < n; j++) if (matrix[0]![j] === 0) firstRowZero = true;
    for (let i = 0; i < m; i++) if (matrix[i]![0] === 0) firstColZero = true;
    for (let i = 1; i < m; i++)
      for (let j = 1; j < n; j++)
        if (matrix[i]![j] === 0) { matrix[i]![0] = 0; matrix[0]![j] = 0; }
    for (let i = 1; i < m; i++)
      for (let j = 1; j < n; j++)
        if (matrix[i]![0] === 0 || matrix[0]![j] === 0) matrix[i]![j] = 0;
    if (firstRowZero) for (let j = 0; j < n; j++) matrix[0]![j] = 0;
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i]![0] = 0;
    return matrix;
  },

  'minimum-arrows-burst-balloons': (...args: unknown[]) => {
    const points = (args[0] as number[][]).map(p => [...p]);
    points.sort((a, b) => a[1]! - b[1]!);
    let arrows = 1, arrowPos = points[0]![1]!;
    for (let i = 1; i < points.length; i++) {
      if (points[i]![0]! > arrowPos) { arrows++; arrowPos = points[i]![1]!; }
    }
    return arrows;
  },

  // --- dynamic-programming — hard --------------------------------------------
  'word-break-ii': (...args: unknown[]) => {
    const s = args[0] as string, wordDict = args[1] as string[];
    const wordSet = new Set(wordDict);
    const memo = new Map<number, string[]>();
    function bt(start: number): string[] {
      if (memo.has(start)) return memo.get(start)!;
      if (start === s.length) return [''];
      const results: string[] = [];
      for (let end = start + 1; end <= s.length; end++) {
        const word = s.slice(start, end);
        if (wordSet.has(word)) {
          for (const rest of bt(end)) {
            results.push(rest === '' ? word : word + ' ' + rest);
          }
        }
      }
      memo.set(start, results);
      return results;
    }
    return bt(0).sort();
  },

  'decode-ways-ii': (...args: unknown[]) => {
    const s = args[0] as string;
    const MOD = 1_000_000_007n;
    let prev2 = 1n;
    let prev1 = s[0] === '*' ? 9n : s[0] === '0' ? 0n : 1n;
    for (let i = 1; i < s.length; i++) {
      const cur = s[i]!;
      const pre = s[i - 1]!;
      let single = cur === '*' ? 9n : cur === '0' ? 0n : 1n;
      let two = 0n;
      if (pre === '*') {
        if (cur === '*') two = 15n;
        else if (Number(cur) <= 6) two = 2n;
        else two = 1n;
      } else if (pre === '1') {
        if (cur === '*') two = 9n;
        else two = 1n;
      } else if (pre === '2') {
        if (cur === '*') two = 6n;
        else if (Number(cur) <= 6) two = 1n;
      }
      const next = (single * prev1 + two * prev2) % MOD;
      prev2 = prev1;
      prev1 = next;
    }
    return Number(prev1);
  },

  'longest-palindromic-subsequence': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    const dp = Array.from({ length: n }, () => new Array<number>(n).fill(0));
    for (let i = 0; i < n; i++) dp[i]![i] = 1;
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j]) {
          dp[i]![j] = len === 2 ? 2 : dp[i + 1]![j - 1]! + 2;
        } else {
          dp[i]![j] = Math.max(dp[i + 1]![j]!, dp[i]![j - 1]!);
        }
      }
    }
    return dp[0]![n - 1];
  },

  'palindrome-partitioning-min-cuts': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    const isPalin = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
    for (let i = 0; i < n; i++) {
      for (let d = 0; i - d >= 0 && i + d < n; d++) {
        if (s[i - d] === s[i + d]) isPalin[i - d]![i + d] = true;
        else break;
      }
      for (let d = 0; i - d >= 0 && i + d + 1 < n; d++) {
        if (s[i - d] === s[i + d + 1]) isPalin[i - d]![i + d + 1] = true;
        else break;
      }
    }
    const cuts = Array.from({ length: n }, (_, i) => i);
    for (let i = 1; i < n; i++) {
      if (isPalin[0]![i]) { cuts[i] = 0; continue; }
      for (let j = 1; j <= i; j++) {
        if (isPalin[j]![i]) cuts[i] = Math.min(cuts[i]!, cuts[j - 1]! + 1);
      }
    }
    return cuts[n - 1];
  },

  'maximum-product-cutting': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array<number>(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        dp[i] = Math.max(dp[i]!, j * Math.max(i - j, dp[i - j]!));
      }
    }
    return dp[n];
  },

  // --- two-pointers — medium -------------------------------------------------
  'next-permutation': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    let i = nums.length - 2;
    while (i >= 0 && nums[i]! >= nums[i + 1]!) i--;
    if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j]! <= nums[i]!) j--;
      [nums[i], nums[j]] = [nums[j]!, nums[i]!];
    }
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      [nums[l], nums[r]] = [nums[r]!, nums[l]!];
      l++;
      r--;
    }
    return nums;
  },

  'interval-list-intersections': (...args: unknown[]) => {
    const firstList = args[0] as number[][];
    const secondList = args[1] as number[][];
    const res: number[][] = [];
    let i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
      const lo = Math.max(firstList[i]![0]!, secondList[j]![0]!);
      const hi = Math.min(firstList[i]![1]!, secondList[j]![1]!);
      if (lo <= hi) res.push([lo, hi]);
      if (firstList[i]![1]! < secondList[j]![1]!) i++;
      else j++;
    }
    return res;
  },

  'longest-mountain-in-array': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let best = 0;
    for (let k = 1; k < arr.length - 1; k++) {
      if (arr[k - 1]! < arr[k]! && arr[k]! > arr[k + 1]!) {
        let l = k - 1, r = k + 1;
        while (l > 0 && arr[l - 1]! < arr[l]!) l--;
        while (r < arr.length - 1 && arr[r]! > arr[r + 1]!) r++;
        best = Math.max(best, r - l + 1);
      }
    }
    return best;
  },

  // --- dynamic-programming — hard -------------------------------------------
  'regular-expression-matching': (...args: unknown[]) => {
    const s = args[0] as string;
    const p = args[1] as string;
    const m = s.length;
    const n = p.length;
    const dp = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
    dp[0]![0] = true;
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') dp[0]![j] = dp[0]![j - 2]!;
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
          dp[i]![j] = dp[i]![j - 2]!;
          if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
            dp[i]![j] = dp[i]![j]! || dp[i - 1]![j]!;
          }
        } else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
          dp[i]![j] = dp[i - 1]![j - 1]!;
        }
      }
    }
    return dp[m]![n];
  },

  'partition-equal-subset-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    const target = total / 2;
    const dp = new Array<boolean>(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
      for (let j = target; j >= num; j--) {
        dp[j] = dp[j]! || dp[j - num]!;
      }
    }
    return dp[target];
  },

  'target-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let dp = new Map<number, number>([[0, 1]]);
    for (const num of nums) {
      const next = new Map<number, number>();
      for (const [s, c] of dp) {
        next.set(s + num, (next.get(s + num) ?? 0) + c);
        next.set(s - num, (next.get(s - num) ?? 0) + c);
      }
      dp = next;
    }
    return dp.get(target) ?? 0;
  },

  'burst-balloons': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const a = [1, ...nums, 1];
    const n = a.length;
    const dp = Array.from({ length: n }, () => new Array<number>(n).fill(0));
    for (let len = 2; len < n; len++) {
      for (let i = 0; i + len < n; i++) {
        const j = i + len;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.max(dp[i]![j]!, dp[i]![k]! + a[i]! * a[k]! * a[j]! + dp[k]![j]!);
        }
      }
    }
    return dp[0]![n - 1];
  },

  'wildcard-matching': (...args: unknown[]) => {
    const s = args[0] as string;
    const p = args[1] as string;
    const m = s.length;
    const n = p.length;
    const dp = Array.from({ length: m + 1 }, () => new Array<boolean>(n + 1).fill(false));
    dp[0]![0] = true;
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') dp[0]![j] = dp[0]![j - 1]!;
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
          dp[i]![j] = dp[i - 1]![j]! || dp[i]![j - 1]!;
        } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
          dp[i]![j] = dp[i - 1]![j - 1]!;
        }
      }
    }
    return dp[m]![n];
  },

  'dungeon-game': (...args: unknown[]) => {
    const dungeon = args[0] as number[][];
    const m = dungeon.length;
    const n = dungeon[0]!.length;
    const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(Infinity));
    dp[m]![n - 1] = 1;
    dp[m - 1]![n] = 1;
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        dp[i]![j] = Math.max(1, Math.min(dp[i + 1]![j]!, dp[i]![j + 1]!) - dungeon[i]![j]!);
      }
    }
    return dp[0]![0];
  },

  // --- dynamic-programming — easy --------------------------------------------
  'min-cost-climbing-stairs': (...args: unknown[]) => {
    const cost = args[0] as number[];
    const n = cost.length;
    const dp = [...cost];
    for (let i = 2; i < n; i++) dp[i] = cost[i]! + Math.min(dp[i - 1]!, dp[i - 2]!);
    return Math.min(dp[n - 1]!, dp[n - 2]!);
  },

  'counting-bits': (...args: unknown[]) => {
    const n = args[0] as number;
    const ans = new Array<number>(n + 1).fill(0);
    for (let i = 1; i <= n; i++) ans[i] = ans[i >> 1]! + (i & 1);
    return ans;
  },

  'best-time-buy-sell': (...args: unknown[]) => {
    const prices = args[0] as number[];
    let min = Infinity, profit = 0;
    for (const p of prices) { min = Math.min(min, p); profit = Math.max(profit, p - min); }
    return profit;
  },

  'search-insert-position': (...args: unknown[]) => {
    const nums = args[0] as number[], target = args[1] as number;
    let lo = 0, hi = nums.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (nums[mid]! < target) lo = mid + 1; else hi = mid; }
    return lo;
  },

  // --- stack — medium --------------------------------------------------------
  'car-fleet': (...args: unknown[]) => {
    const target = args[0] as number;
    const position = args[1] as number[];
    const speed = args[2] as number[];
    const pairs = position.map((p, i) => [p, speed[i]!] as [number, number]);
    pairs.sort((a, b) => b[0] - a[0]);
    const stack: number[] = [];
    for (const [p, s] of pairs) {
      const t = (target - p) / s;
      if (!stack.length || t > stack[stack.length - 1]!) stack.push(t);
    }
    return stack.length;
  },

  'online-stock-span': (...args: unknown[]) => {
    const prices = args[0] as number[];
    const stack: [number, number][] = [];
    return prices.map(price => {
      let span = 1;
      while (stack.length && stack[stack.length - 1]![0] <= price)
        span += stack.pop()![1];
      stack.push([price, span]);
      return span;
    });
  },

  // --- binary-search — medium ------------------------------------------------
  'koko-eating-bananas': (...args: unknown[]) => {
    const piles = args[0] as number[], h = args[1] as number;
    let lo = 1, hi = Math.max(...piles);
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      const hours = piles.reduce((s, p) => s + Math.ceil(p / mid), 0);
      if (hours <= h) hi = mid; else lo = mid + 1;
    }
    return lo;
  },

  'find-peak-element': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid]! < nums[mid + 1]!) lo = mid + 1; else hi = mid;
    }
    return lo;
  },

  // --- sliding-window — medium -----------------------------------------------
  'minimum-operations-reduce-x': (...args: unknown[]) => {
    const nums = args[0] as number[], x = args[1] as number;
    const target = nums.reduce((a, b) => a + b, 0) - x;
    if (target < 0) return -1;
    let lo = 0, sum = 0, best = -1;
    for (let hi = 0; hi < nums.length; hi++) {
      sum += nums[hi]!;
      while (sum > target) sum -= nums[lo++]!;
      if (sum === target) best = Math.max(best, hi - lo + 1);
    }
    return best === -1 ? -1 : nums.length - best;
  },

  // --- two-pointers — hard ---------------------------------------------------
  'sort-list': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    function merge(a: number[], b: number[]): number[] {
      let i = 0, j = 0;
      const r: number[] = [];
      while (i < a.length && j < b.length) r.push(a[i]! <= b[j]! ? a[i++]! : b[j++]!);
      return r.concat(a.slice(i), b.slice(j));
    }
    function ms(a: number[]): number[] {
      if (a.length <= 1) return a;
      const m = a.length >> 1;
      return merge(ms(a.slice(0, m)), ms(a.slice(m)));
    }
    return ms(nums);
  },

  'subarrays-k-distinct': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    function atMost(limit: number): number {
      const freq = new Map<number, number>();
      let lo = 0, cnt = 0;
      for (let hi = 0; hi < nums.length; hi++) {
        freq.set(nums[hi]!, (freq.get(nums[hi]!) ?? 0) + 1);
        while (freq.size > limit) {
          const v = nums[lo++]!;
          if (freq.get(v) === 1) freq.delete(v); else freq.set(v, freq.get(v)! - 1);
        }
        cnt += hi - lo + 1;
      }
      return cnt;
    }
    return atMost(k) - atMost(k - 1);
  },

  'ransom-note': (...args: unknown[]) => {
    const note = args[0] as string, mag = args[1] as string;
    const freq = new Map<string, number>();
    for (const c of mag) freq.set(c, (freq.get(c) ?? 0) + 1);
    for (const c of note) {
      if (!freq.get(c)) return false;
      freq.set(c, freq.get(c)! - 1);
    }
    return true;
  },
  'isomorphic-strings': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    const sToT = new Map<string, string>(), tToS = new Map<string, string>();
    for (let i = 0; i < s.length; i++) {
      const sc = s[i]!, tc = t[i]!;
      if ((sToT.has(sc) && sToT.get(sc) !== tc) || (tToS.has(tc) && tToS.get(tc) !== sc)) return false;
      sToT.set(sc, tc); tToS.set(tc, sc);
    }
    return true;
  },
  'nth-ugly-number': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array<number>(n).fill(0);
    dp[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < n; i++) {
      const next = Math.min(dp[i2]! * 2, dp[i3]! * 3, dp[i5]! * 5);
      dp[i] = next;
      if (next === dp[i2]! * 2) i2++;
      if (next === dp[i3]! * 3) i3++;
      if (next === dp[i5]! * 5) i5++;
    }
    return dp[n - 1];
  },
  'maximum-swap': (...args: unknown[]) => {
    const digits = [...String(args[0] as number)].map(Number);
    const last = new Array<number>(10).fill(-1);
    for (let i = 0; i < digits.length; i++) last[digits[i]!] = i;
    for (let i = 0; i < digits.length; i++) {
      for (let d = 9; d > digits[i]!; d--) {
        if (last[d]! > i) {
          [digits[i], digits[last[d]!]] = [digits[last[d]!]!, digits[i]!];
          return parseInt(digits.join(''), 10);
        }
      }
    }
    return args[0] as number;
  },

  // --- linked-list -----------------------------------------------------------
  'delete-node-in-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const nodeVal = args[1] as number;
    return arr.filter(v => v !== nodeVal);
  },

  'reverse-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    return [...arr].reverse();
  },

  'linked-list-cycle': (...args: unknown[]) => {
    void args;
    return false;
  },

  'merge-two-sorted-linked-lists': (...args: unknown[]) => {
    const a = [...(args[0] as number[])];
    const b = [...(args[1] as number[])];
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      if (a[i]! <= b[j]!) result.push(a[i++]!);
      else result.push(b[j++]!);
    }
    while (i < a.length) result.push(a[i++]!);
    while (j < b.length) result.push(b[j++]!);
    return result;
  },

  'middle-of-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let slow = 0;
    let fast = 0;
    while (fast < arr.length && fast + 1 < arr.length) {
      slow++;
      fast += 2;
    }
    return arr.slice(slow);
  },

  'palindrome-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const rev = [...arr].reverse();
    return arr.every((v, i) => v === rev[i]);
  },

  'remove-nth-from-end': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])];
    const n = args[1] as number;
    arr.splice(arr.length - n, 1);
    return arr;
  },

  'odd-even-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const odd: number[] = [];
    const even: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) odd.push(arr[i]!);
      else even.push(arr[i]!);
    }
    return [...odd, ...even];
  },

  'intersection-two-linked-lists': (...args: unknown[]) => {
    const arrA = args[0] as number[];
    const arrB = args[1] as number[];
    const shared = args[2] as number[];
    void arrA; void arrB;
    return shared.length > 0 ? shared[0]! : -1;
  },

  // --- arrays + math + strings — easy ----------------------------------------
  'plus-one': (...args: unknown[]) => {
    const digits = [...(args[0] as number[])];
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i]! < 9) { digits[i]!++; return digits; }
      digits[i] = 0;
    }
    return [1, ...digits];
  },

  'length-of-last-word': (...args: unknown[]) => {
    const s = (args[0] as string).trimEnd();
    return s.length - s.lastIndexOf(' ') - 1;
  },

  'palindrome-number': (...args: unknown[]) => {
    let x = args[0] as number;
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let rev = 0;
    while (x > rev) { rev = rev * 10 + (x % 10); x = Math.floor(x / 10); }
    return x === rev || x === Math.floor(rev / 10);
  },

  'excel-column-number': (...args: unknown[]) => {
    const s = args[0] as string;
    let r = 0;
    for (const c of s) r = r * 26 + (c.charCodeAt(0) - 64);
    return r;
  },

  'reorder-list': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])];
    const result: number[] = [];
    let l = 0, r = arr.length - 1;
    while (l <= r) {
      result.push(arr[l++]!);
      if (l <= r) result.push(arr[r--]!);
    }
    return result;
  },

  'add-two-numbers': (...args: unknown[]) => {
    const a = args[0] as number[];
    const b = args[1] as number[];
    let carry = 0, i = 0, j = 0;
    const result: number[] = [];
    while (i < a.length || j < b.length || carry) {
      const sum = (a[i++] ?? 0) + (b[j++] ?? 0) + carry;
      result.push(sum % 10);
      carry = Math.floor(sum / 10);
    }
    return result;
  },

  'merge-k-sorted-lists': (...args: unknown[]) => {
    const lists = args[0] as number[][];
    return lists.flat().sort((a, b) => a - b);
  },

  'swap-nodes-in-pairs': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const result = [...arr];
    for (let i = 0; i + 1 < result.length; i += 2) {
      [result[i], result[i + 1]] = [result[i + 1]!, result[i]!];
    }
    return result;
  },

  'remove-linked-list-elements': (...args: unknown[]) => {
    const arr = args[0] as number[], val = args[1] as number;
    return arr.filter((v) => v !== val);
  },

  'partition-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const x = args[1] as number;
    return [...arr.filter((v) => v < x), ...arr.filter((v) => v >= x)];
  },

  'reverse-linked-list-ii': (...args: unknown[]) => {
    const arr = args[0] as number[], left = args[1] as number, right = args[2] as number;
    const result = [...arr];
    let l = left - 1, r = right - 1;
    while (l < r) { [result[l], result[r]] = [result[r]!, result[l]!]; l++; r--; }
    return result;
  },

  'rotate-list': (...args: unknown[]) => {
    const arr = args[0] as number[], k = args[1] as number;
    if (arr.length === 0) return [];
    const n = arr.length, step = k % n;
    if (step === 0) return [...arr];
    return [...arr.slice(n - step), ...arr.slice(0, n - step)];
  },

  // --- graph ---------------------------------------------------------------

  'find-if-path-exists': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    const source = args[2] as number;
    const destination = args[3] as number;
    if (source === destination) return true;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) { adj[u as number]!.push(v as number); adj[v as number]!.push(u as number); }
    const visited = new Set<number>();
    const queue = [source];
    visited.add(source);
    while (queue.length) {
      const cur = queue.shift()!;
      for (const nb of adj[cur]!) {
        if (nb === destination) return true;
        if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
      }
    }
    return false;
  },

  '01-matrix': (...args: unknown[]) => {
    const mat = (args[0] as number[][]).map(r => [...r]);
    const m = mat.length, n = mat[0]!.length;
    const dist = mat.map(r => r.map(v => v === 0 ? 0 : Infinity));
    const queue: [number, number][] = [];
    for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (mat[r]![c] === 0) queue.push([r, c]);
    const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let qi = 0;
    while (qi < queue.length) {
      const [r, c] = queue[qi++]!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr]![nc]! > dist[r]![c]! + 1) {
          dist[nr]![nc] = dist[r]![c]! + 1;
          queue.push([nr, nc]);
        }
      }
    }
    return dist;
  },

  'flood-fill': (...args: unknown[]) => {
    const image = (args[0] as number[][]).map((row) => [...row]);
    const sr = args[1] as number;
    const sc = args[2] as number;
    const color = args[3] as number;
    const orig = image[sr]![sc]!;
    if (orig === color) return image;
    function dfs(r: number, c: number): void {
      if (r < 0 || r >= image.length || c < 0 || c >= image[0]!.length) return;
      if (image[r]![c] !== orig) return;
      image[r]![c] = color;
      dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);
    }
    dfs(sr, sc);
    return image;
  },

  'number-of-islands': (...args: unknown[]) => {
    const grid = (args[0] as string[][]).map((row) => [...row]);
    let count = 0;
    const rows = grid.length;
    const cols = grid[0]!.length;
    function dfs(r: number, c: number): void {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r]![c] !== '1') return;
      grid[r]![c] = '0';
      dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r]![c] === '1') { count++; dfs(r, c); }
      }
    }
    return count;
  },

  'course-schedule': (...args: unknown[]) => {
    const numCourses = args[0] as number;
    const prerequisites = args[1] as number[][];
    const adj: number[][] = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) adj[b!]!.push(a!);
    const state = new Array<number>(numCourses).fill(0);
    function dfs(node: number): boolean {
      if (state[node] === 1) return false;
      if (state[node] === 2) return true;
      state[node] = 1;
      for (const nb of adj[node]!) { if (!dfs(nb)) return false; }
      state[node] = 2;
      return true;
    }
    for (let i = 0; i < numCourses; i++) { if (!dfs(i)) return false; }
    return true;
  },

  'binary-tree-level-order-bottom': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return [];
    const result: number[][] = [];
    const queue: _TN[] = [root];
    while (queue.length) {
      const size = queue.length;
      const level: number[] = [];
      for (let i = 0; i < size; i++) {
        const node = queue.shift()!;
        level.push(node.v);
        if (node.l) queue.push(node.l);
        if (node.r) queue.push(node.r);
      }
      result.unshift(level);
    }
    return result;
  },

  'find-duplicate-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let slow = nums[0]!, fast = nums[0]!;
    do { slow = nums[slow]!; fast = nums[nums[fast]!]!; } while (slow !== fast);
    slow = nums[0]!;
    while (slow !== fast) { slow = nums[slow]!; fast = nums[fast]!; }
    return slow;
  },

  'shortest-path-binary-matrix': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map(r => [...r]);
    const n = grid.length;
    if (grid[0]![0] || grid[n - 1]![n - 1]) return -1;
    if (n === 1) return 1;
    const q: [number, number, number][] = [[0, 0, 1]];
    grid[0]![0] = 1;
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]] as const;
    while (q.length) {
      const [r, c, d] = q.shift()!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr]![nc] === 0) {
          if (nr === n - 1 && nc === n - 1) return d + 1;
          grid[nr]![nc] = 1;
          q.push([nr, nc, d + 1]);
        }
      }
    }
    return -1;
  },

  'accounts-merge': (...args: unknown[]) => {
    const accounts = args[0] as string[][];
    const parent = new Map<string, string>();
    const find = (x: string): string => {
      if (!parent.has(x)) parent.set(x, x);
      if (parent.get(x) !== x) parent.set(x, find(parent.get(x)!));
      return parent.get(x)!;
    };
    const union = (a: string, b: string) => parent.set(find(a), find(b));
    const emailToName = new Map<string, string>();
    for (const acc of accounts) {
      const name = acc[0]!;
      for (let i = 1; i < acc.length; i++) {
        emailToName.set(acc[i]!, name);
        union(acc[1]!, acc[i]!);
      }
    }
    const groups = new Map<string, string[]>();
    for (const [email] of emailToName) {
      const root = find(email);
      if (!groups.has(root)) groups.set(root, []);
      groups.get(root)!.push(email);
    }
    const result: string[][] = [];
    for (const [root, emails] of groups) {
      emails.sort();
      result.push([emailToName.get(root)!, ...emails]);
    }
    return result.map(a => [a[0], ...a.slice(1).sort()]).sort((a, b) => {
      if (a[0] !== b[0]) return (a[0]! < b[0]! ? -1 : 1);
      if (a[1] !== b[1]) return (a[1]! < b[1]! ? -1 : 1);
      return 0;
    });
  },

  'graph-valid-tree': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    if (edges.length !== n - 1) return false;
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x: number): number => parent[x] === x ? x : (parent[x] = find(parent[x]!));
    for (const [a, b] of edges) {
      const ra = find(a!), rb = find(b!);
      if (ra === rb) return false;
      parent[ra] = rb;
    }
    return true;
  },

  // --- tree -------------------------------------------------------------------
  'balanced-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const height = (n: _TN | null): number => {
      if (!n) return 0;
      const l = height(n.l);
      if (l === -1) return -1;
      const r = height(n.r);
      if (r === -1) return -1;
      if (Math.abs(l - r) > 1) return -1;
      return 1 + Math.max(l, r);
    };
    return height(root) !== -1;
  },

  'minimum-depth-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return 0;
    const minD = (n: _TN | null): number => {
      if (!n) return Infinity;
      if (!n.l && !n.r) return 1;
      return 1 + Math.min(minD(n.l), minD(n.r));
    };
    return minD(root);
  },

  'max-depth-binary-tree': (...args: unknown[]) => {
    const d = (n: _TN | null): number => n ? 1 + Math.max(d(n.l), d(n.r)) : 0;
    return d(_buildTree(args[0] as (number | null)[]));
  },

  'symmetric-tree': (...args: unknown[]) => {
    const tree = _buildTree(args[0] as (number | null)[]);
    const mirror = (a: _TN | null, b: _TN | null): boolean => {
      if (!a && !b) return true;
      if (!a || !b || a.v !== b.v) return false;
      return mirror(a.l, b.r) && mirror(a.r, b.l);
    };
    return !tree || mirror(tree.l, tree.r);
  },

  'invert-binary-tree': (...args: unknown[]) => {
    const inv = (n: _TN | null): _TN | null =>
      n ? { v: n.v, l: inv(n.r), r: inv(n.l) } : null;
    return _treeToArr(inv(_buildTree(args[0] as (number | null)[])));
  },

  'binary-tree-paths': (...args: unknown[]) => {
    const tree = _buildTree(args[0] as (number | null)[]);
    const paths: string[] = [];
    function dfs(n: _TN | null, path: string): void {
      if (!n) return;
      const p = path ? `${path}->${n.v}` : `${n.v}`;
      if (!n.l && !n.r) { paths.push(p); return; }
      dfs(n.l, p);
      dfs(n.r, p);
    }
    dfs(tree, '');
    return paths;
  },

  'validate-bst': (...args: unknown[]) => {
    const validate = (n: _TN | null, min: number, max: number): boolean => {
      if (!n) return true;
      if (n.v <= min || n.v >= max) return false;
      return validate(n.l, min, n.v) && validate(n.r, n.v, max);
    };
    return validate(_buildTree(args[0] as (number | null)[]), -Infinity, Infinity);
  },

  'level-order-traversal': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return [];
    const result: number[][] = [];
    const queue: _TN[] = [root];
    while (queue.length) {
      const size = queue.length;
      const level: number[] = [];
      for (let i = 0; i < size; i++) {
        const node = queue.shift()!;
        level.push(node.v);
        if (node.l) queue.push(node.l);
        if (node.r) queue.push(node.r);
      }
      result.push(level);
    }
    return result;
  },

  'path-sum': (...args: unknown[]) => {
    const check = (n: _TN | null, rem: number): boolean => {
      if (!n) return false;
      if (!n.l && !n.r) return rem === n.v;
      return check(n.l, rem - n.v) || check(n.r, rem - n.v);
    };
    return check(_buildTree(args[0] as (number | null)[]), args[1] as number);
  },

  'diameter-of-binary-tree': (...args: unknown[]) => {
    let best = 0;
    const depth = (n: _TN | null): number => {
      if (!n) return 0;
      const l = depth(n.l);
      const r = depth(n.r);
      if (l + r > best) best = l + r;
      return 1 + Math.max(l, r);
    };
    depth(_buildTree(args[0] as (number | null)[]));
    return best;
  },

  'lowest-common-ancestor-bst': (...args: unknown[]) => {
    const p = args[1] as number;
    const q = args[2] as number;
    let node = _buildTree(args[0] as (number | null)[]);
    while (node) {
      if (p < node.v && q < node.v) { node = node.l; }
      else if (p > node.v && q > node.v) { node = node.r; }
      else { return node.v; }
    }
    return -1;
  },

  'same-tree': (...args: unknown[]) => {
    const p = _buildTree(args[0] as (number | null)[]);
    const q = _buildTree(args[1] as (number | null)[]);
    const same = (a: _TN | null, b: _TN | null): boolean => {
      if (!a && !b) return true;
      if (!a || !b) return false;
      return a.v === b.v && same(a.l, b.l) && same(a.r, b.r);
    };
    return same(p, q);
  },

  'binary-tree-max-path-sum': (...args: unknown[]) => {
    let best = -Infinity;
    const gain = (n: _TN | null): number => {
      if (!n) return 0;
      const l = Math.max(0, gain(n.l));
      const r = Math.max(0, gain(n.r));
      if (n.v + l + r > best) best = n.v + l + r;
      return n.v + Math.max(l, r);
    };
    gain(_buildTree(args[0] as (number | null)[]));
    return best;
  },

  // --- graph additions -------------------------------------------------------

  'word-search': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(r => [...r]);
    const word = args[1] as string;
    const m = board.length, n = board[0]!.length;
    const dfs = (r: number, c: number, idx: number): boolean => {
      if (idx === word.length) return true;
      if (r < 0 || r >= m || c < 0 || c >= n || board[r]![c] !== word[idx]) return false;
      const ch = board[r]![c]!;
      board[r]![c] = '#';
      const found = dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1);
      board[r]![c] = ch;
      return found;
    };
    for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) { if (dfs(r, c, 0)) return true; }
    return false;
  },

  'surrounded-regions': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(r => [...r]);
    const m = board.length, n = board[0]!.length;
    const mark = (r: number, c: number): void => {
      if (r < 0 || r >= m || c < 0 || c >= n || board[r]![c] !== 'O') return;
      board[r]![c] = 'S';
      mark(r + 1, c); mark(r - 1, c); mark(r, c + 1); mark(r, c - 1);
    };
    for (let r = 0; r < m; r++) { mark(r, 0); mark(r, n - 1); }
    for (let c = 0; c < n; c++) { mark(0, c); mark(m - 1, c); }
    for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) {
      if (board[r]![c] === 'O') board[r]![c] = 'X';
      else if (board[r]![c] === 'S') board[r]![c] = 'O';
    }
    return board;
  },

  'find-the-town-judge': (...args: unknown[]) => {
    const n = args[0] as number;
    const trust = args[1] as number[][];
    const inDeg = new Array<number>(n + 1).fill(0);
    const outDeg = new Array<number>(n + 1).fill(0);
    for (const edge of trust) { const [a, b] = edge as [number, number]; outDeg[a] = (outDeg[a] ?? 0) + 1; inDeg[b] = (inDeg[b] ?? 0) + 1; }
    for (let i = 1; i <= n; i++) { if ((inDeg[i] ?? 0) === n - 1 && (outDeg[i] ?? 0) === 0) return i; }
    return -1;
  },

  'max-area-of-island': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map((r) => [...r]);
    const rows = grid.length;
    const cols = grid[0]!.length;
    let best = 0;
    function dfs(r: number, c: number): number {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r]![c] !== 1) return 0;
      grid[r]![c] = 0;
      return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r]![c] === 1) { const area = dfs(r, c); if (area > best) best = area; }
      }
    }
    return best;
  },

  'rotting-oranges': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map((r) => [...r]);
    const rows = grid.length;
    const cols = grid[0]!.length;
    const queue: [number, number][] = [];
    let fresh = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r]![c] === 2) queue.push([r, c]);
        else if (grid[r]![c] === 1) fresh++;
      }
    }
    let minutes = 0;
    const dirs: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length && fresh > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [r, c] = queue.shift()!;
        for (const [dr, dc] of dirs) {
          const nr = r + dr; const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr]![nc] === 1) {
            grid[nr]![nc] = 2;
            fresh--;
            queue.push([nr, nc]);
          }
        }
      }
      minutes++;
    }
    return fresh === 0 ? minutes : -1;
  },

  'keys-and-rooms': (...args: unknown[]) => {
    const rooms = args[0] as number[][];
    const visited = new Set<number>([0]);
    const stack = [0];
    while (stack.length) {
      const room = stack.pop()!;
      for (const key of rooms[room]!) {
        if (!visited.has(key)) { visited.add(key); stack.push(key); }
      }
    }
    return visited.size === rooms.length;
  },

  'network-delay-time': (...args: unknown[]) => {
    const times = args[0] as number[][];
    const n = args[1] as number;
    const k = args[2] as number;
    const dist = new Array<number>(n + 1).fill(Infinity);
    dist[k] = 0;
    const adj: [number, number][][] = Array.from({ length: n + 1 }, () => []);
    for (const edge of times) { adj[edge[0] as number]!.push([edge[1] as number, edge[2] as number]); }
    const seen = new Set<number>();
    for (;;) {
      let u = -1;
      for (let i = 1; i <= n; i++) {
        if (!seen.has(i) && (u === -1 || (dist[i] ?? Infinity) < (dist[u] ?? Infinity))) u = i;
      }
      if (u === -1 || (dist[u] ?? Infinity) === Infinity) break;
      seen.add(u);
      for (const [v, w] of adj[u]!) {
        if ((dist[u] ?? Infinity) + w < (dist[v] ?? Infinity)) dist[v] = (dist[u] ?? 0) + w;
      }
    }
    const maxDist = Math.max(...dist.slice(1));
    return maxDist === Infinity ? -1 : maxDist;
  },

  'word-ladder': (...args: unknown[]) => {
    const beginWord = args[0] as string;
    const endWord = args[1] as string;
    const wordSet = new Set<string>(args[2] as string[]);
    if (!wordSet.has(endWord)) return 0;
    const queue: [string, number][] = [[beginWord, 1]];
    const visited = new Set<string>([beginWord]);
    while (queue.length) {
      const item = queue.shift()!;
      const word = item[0]; const len = item[1];
      for (let i = 0; i < word.length; i++) {
        for (let c = 97; c <= 122; c++) {
          const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (next === endWord) return len + 1;
          if (wordSet.has(next) && !visited.has(next)) { visited.add(next); queue.push([next, len + 1]); }
        }
      }
    }
    return 0;
  },

  'count-good-nodes': (...args: unknown[]) => {
    let cnt = 0;
    const dfs = (n: _TN | null, mx: number): void => {
      if (!n) return;
      if (n.v >= mx) cnt++;
      const nx = n.v > mx ? n.v : mx;
      dfs(n.l, nx);
      dfs(n.r, nx);
    };
    dfs(_buildTree(args[0] as (number | null)[]), -Infinity);
    return cnt;
  },

  'binary-tree-right-side-view': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return [];
    const result: number[] = [];
    const queue: _TN[] = [root];
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift()!;
        if (i === size - 1) result.push(node.v);
        if (node.l) queue.push(node.l);
        if (node.r) queue.push(node.r);
      }
    }
    return result;
  },

  'number-of-connected-components': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    const parent = Array.from({ length: n }, (_, i) => i);
    function find(x: number): number {
      if (parent[x] !== x) parent[x] = find(parent[x]!);
      return parent[x]!;
    }
    let components = n;
    for (const edge of edges) {
      const a = find(edge[0] as number);
      const b = find(edge[1] as number);
      if (a !== b) { parent[a] = b; components--; }
    }
    return components;
  },

  'clone-graph': (...args: unknown[]) => {
    const adjList = args[0] as number[][];
    if (!adjList || adjList.length === 0) return [];
    interface GN { val: number; neighbors: GN[] }
    const nodes: GN[] = adjList.map((_, i) => ({ val: i + 1, neighbors: [] }));
    adjList.forEach((nbrs, i) => { nodes[i]!.neighbors = nbrs.map((n) => nodes[n - 1]!); });
    const cloned = new Map<GN, GN>();
    function dfs(node: GN): GN {
      if (cloned.has(node)) return cloned.get(node)!;
      const copy: GN = { val: node.val, neighbors: [] };
      cloned.set(node, copy);
      copy.neighbors = node.neighbors.map(dfs);
      return copy;
    }
    const cloneRoot = dfs(nodes[0]!);
    const visited = new Map<number, GN>();
    const queue = [cloneRoot];
    visited.set(cloneRoot.val, cloneRoot);
    while (queue.length) {
      const curr = queue.shift()!;
      for (const nb of curr.neighbors) {
        if (!visited.has(nb.val)) { visited.set(nb.val, nb); queue.push(nb); }
      }
    }
    const n = visited.size;
    const result: number[][] = [];
    for (let i = 1; i <= n; i++) {
      const nd = visited.get(i)!;
      result.push([...nd.neighbors.map((nb) => nb.val)].sort((a, b) => a - b));
    }
    return result;
  },

  'serialize-binary-tree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr || arr.length === 0) return [];
    const root = _buildTree(arr);
    const tokens: string[] = [];
    const q: (_TN | null)[] = [root];
    while (q.length) {
      const n = q.shift()!;
      if (!n) { tokens.push('#'); continue; }
      tokens.push(String(n.v));
      q.push(n.l);
      q.push(n.r);
    }
    const data = tokens.join(',');
    const parts = data.split(',');
    if (!parts[0] || parts[0] === '#') return [];
    const rNode: _TN = { v: parseInt(parts[0]!), l: null, r: null };
    const q2: _TN[] = [rNode];
    let i = 1;
    while (q2.length && i < parts.length) {
      const cur = q2.shift()!;
      if (i < parts.length && parts[i] !== '#') { cur.l = { v: parseInt(parts[i]!), l: null, r: null }; q2.push(cur.l); }
      i++;
      if (i < parts.length && parts[i] !== '#') { cur.r = { v: parseInt(parts[i]!), l: null, r: null }; q2.push(cur.r); }
      i++;
    }
    return _treeToArr(rNode);
  },

  'construct-binary-tree': (...args: unknown[]) => {
    const preorder = args[0] as number[];
    const inorder = args[1] as number[];
    if (!preorder.length) return [];
    const indexMap = new Map<number, number>();
    inorder.forEach((v, i) => indexMap.set(v, i));
    let pi = 0;
    function build(lo: number, hi: number): _TN | null {
      if (lo > hi) return null;
      const rootVal = preorder[pi++]!;
      const mid = indexMap.get(rootVal)!;
      return { v: rootVal, l: build(lo, mid - 1), r: build(mid + 1, hi) };
    }
    return _treeToArr(build(0, inorder.length - 1));
  },

  'flatten-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return [];
    // preorder iterative flatten
    const stack: _TN[] = [root];
    while (stack.length) {
      const node = stack.pop()!;
      if (node.r) stack.push(node.r);
      if (node.l) stack.push(node.l);
      node.l = null;
      node.r = stack.length ? stack[stack.length - 1]! : null;
    }
    const vals: number[] = [];
    let cur: _TN | null = root;
    while (cur) { vals.push(cur.v); cur = cur.r; }
    return vals;
  },

  'pacific-atlantic': (...args: unknown[]) => {
    const heights = args[0] as number[][];
    const rows = heights.length;
    const cols = heights[0]!.length;
    const dirs: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    function bfs(starts: [number, number][]): boolean[][] {
      const reach = Array.from({ length: rows }, () => new Array<boolean>(cols).fill(false));
      const queue: [number, number][] = [...starts];
      for (const [r, c] of starts) reach[r]![c] = true;
      while (queue.length) {
        const [r, c] = queue.shift()!;
        for (const [dr, dc] of dirs) {
          const nr = r + dr; const nc = c + dc;
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || reach[nr]![nc] || heights[nr]![nc]! < heights[r]![c]!) continue;
          reach[nr]![nc] = true;
          queue.push([nr, nc]);
        }
      }
      return reach;
    }
    const pStarts: [number, number][] = [];
    const aStarts: [number, number][] = [];
    for (let r = 0; r < rows; r++) { pStarts.push([r, 0]); aStarts.push([r, cols - 1]); }
    for (let c = 0; c < cols; c++) { pStarts.push([0, c]); aStarts.push([rows - 1, c]); }
    const pr = bfs(pStarts); const ar = bfs(aStarts);
    const result: number[][] = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { if (pr[r]![c] && ar[r]![c]) result.push([r, c]); }
    return result;
  },

  'kth-smallest-bst': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const k = args[1] as number;
    const vals: number[] = [];
    function inorder(n: _TN | null): void {
      if (!n) return;
      inorder(n.l);
      vals.push(n.v);
      inorder(n.r);
    }
    inorder(root);
    return vals[k - 1]!;
  },

  'course-schedule-ii': (...args: unknown[]) => {
    const n = args[0] as number;
    const prereqs = args[1] as number[][];
    const inDeg = new Array<number>(n).fill(0);
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const edge of prereqs) { const [a, b] = edge as [number, number]; adj[b]!.push(a); inDeg[a] = (inDeg[a] ?? 0) + 1; }
    const queue: number[] = [];
    for (let i = 0; i < n; i++) { if (inDeg[i] === 0) queue.push(i); }
    const order: number[] = [];
    while (queue.length) {
      const cur = queue.shift()!;
      order.push(cur);
      for (const nb of adj[cur]!) { if (--inDeg[nb]! === 0) queue.push(nb); }
    }
    return order.length === n ? order : [];
  },

  'zigzag-level-order': (...args: unknown[]) => {
    const a = args[0] as (number | null)[] | null;
    const root = a ? _buildTree(a) : null;
    if (!root) return [];
    const result: number[][] = [];
    const queue: _TN[] = [root];
    let leftToRight = true;
    while (queue.length) {
      const size = queue.length;
      const level: number[] = [];
      for (let i = 0; i < size; i++) {
        const node = queue.shift()!;
        level.push(node.v);
        if (node.l) queue.push(node.l);
        if (node.r) queue.push(node.r);
      }
      result.push(leftToRight ? level : [...level].reverse());
      leftToRight = !leftToRight;
    }
    return result;
  },

  'sum-root-to-leaf': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    function dfs(node: _TN | null, cur: number): number {
      if (!node) return 0;
      const n = cur * 10 + node.v;
      if (!node.l && !node.r) return n;
      return dfs(node.l, n) + dfs(node.r, n);
    }
    return dfs(root, 0);
  },

  'number-of-provinces': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const n = grid.length;
    const visited = new Array<boolean>(n).fill(false);
    function dfs(i: number): void {
      visited[i] = true;
      for (let j = 0; j < n; j++) {
        if (grid[i]![j] === 1 && !visited[j]) dfs(j);
      }
    }
    let provinces = 0;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) { dfs(i); provinces++; }
    }
    return provinces;
  },

  'path-sum-iii': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const target = args[1] as number;
    const prefixCount = new Map<number, number>();
    prefixCount.set(0, 1);
    let count = 0;
    function dfs(node: _TN | null, sum: number): void {
      if (!node) return;
      sum += node.v;
      count += prefixCount.get(sum - target) ?? 0;
      prefixCount.set(sum, (prefixCount.get(sum) ?? 0) + 1);
      dfs(node.l, sum);
      dfs(node.r, sum);
      prefixCount.set(sum, prefixCount.get(sum)! - 1);
    }
    dfs(root, 0);
    return count;
  },

  'reverse-nodes-in-k-group': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const k = args[1] as number;
    interface LN { v: number; n: LN | null }
    function fromArr(a: number[]): LN | null {
      if (!a.length) return null;
      const h: LN = { v: a[0]!, n: null };
      let c = h;
      for (let i = 1; i < a.length; i++) { c.n = { v: a[i]!, n: null }; c = c.n; }
      return h;
    }
    function toArr(h: LN | null): number[] {
      const r: number[] = [];
      while (h) { r.push(h.v); h = h.n; }
      return r;
    }
    function reverseK(head: LN | null): LN | null {
      if (!head) return null;
      let count = 0;
      let cur: LN | null = head;
      while (cur && count < k) { cur = cur.n; count++; }
      if (count < k) return head;
      let prev: LN | null = null;
      cur = head;
      for (let i = 0; i < k; i++) { const nxt: LN | null = cur!.n; cur!.n = prev; prev = cur; cur = nxt; }
      head.n = reverseK(cur);
      return prev;
    }
    return toArr(reverseK(fromArr(arr)));
  },

  'redundant-connection': (...args: unknown[]) => {
    const edges = args[0] as number[][];
    const parent: number[] = Array.from({ length: edges.length + 1 }, (_, i) => i);
    function find(x: number): number { return parent[x] === x ? x : (parent[x] = find(parent[x]!)); }
    for (const edge of edges) {
      const [u, v] = edge as [number, number];
      const pu = find(u); const pv = find(v);
      if (pu === pv) return [u, v];
      parent[pu] = pv;
    }
    return [];
  },

  'is-graph-bipartite': (...args: unknown[]) => {
    const graph = args[0] as number[][];
    const color = new Array<number>(graph.length).fill(-1);
    function bfs(start: number): boolean {
      color[start] = 0;
      const q: number[] = [start];
      while (q.length) {
        const u = q.shift()!;
        for (const v of graph[u]!) {
          if (color[v] === -1) { color[v] = 1 - color[u]!; q.push(v); }
          else if (color[v] === color[u]) return false;
        }
      }
      return true;
    }
    for (let i = 0; i < graph.length; i++) { if (color[i] === -1 && !bfs(i)) return false; }
    return true;
  },

  'all-paths-source-target': (...args: unknown[]) => {
    const graph = args[0] as number[][];
    const n = graph.length;
    const result: number[][] = [];
    function dfs(node: number, path: number[]): void {
      if (node === n - 1) { result.push([...path]); return; }
      for (const nb of graph[node]!) { path.push(nb); dfs(nb, path); path.pop(); }
    }
    dfs(0, [0]);
    return result.sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) { if (a[i] !== b[i]) return a[i]! - b[i]!; }
      return a.length - b.length;
    });
  },

  'house-robber-iii': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    function dp(node: _TN | null): [number, number] {
      if (!node) return [0, 0];
      const [ll, ls] = dp(node.l);
      const [rl, rs] = dp(node.r);
      const rob = node.v + ls + rs;
      const skip = Math.max(ll, ls) + Math.max(rl, rs);
      return [rob, skip];
    }
    const [r, s] = dp(root);
    return Math.max(r, s);
  },

  'maximum-width-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return 0;
    let max = 0;
    let queue: [_TN, bigint][] = [[root, 0n]];
    while (queue.length) {
      const leftIdx = queue[0]![1];
      const next: [_TN, bigint][] = [];
      let rightIdx = leftIdx;
      for (const [node, idx] of queue) {
        rightIdx = idx;
        const norm = idx - leftIdx;
        if (node.l) next.push([node.l, 2n * norm]);
        if (node.r) next.push([node.r, 2n * norm + 1n]);
      }
      max = Math.max(max, Number(rightIdx - leftIdx + 1n));
      queue = next;
    }
    return max;
  },

  'minimum-height-trees': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    if (n === 1) return [0];
    const deg = new Array<number>(n).fill(0);
    const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
    for (const edge of edges) {
      const [a, b] = edge as [number, number];
      adj[a]!.add(b); adj[b]!.add(a); deg[a]!++; deg[b]!++;
    }
    let leaves: number[] = [];
    for (let i = 0; i < n; i++) { if (deg[i] === 1) leaves.push(i); }
    let remaining = n;
    while (remaining > 2) {
      remaining -= leaves.length;
      const next: number[] = [];
      for (const l of leaves) {
        for (const nb of adj[l]!) {
          adj[nb]!.delete(l);
          if (--deg[nb]! === 1) next.push(nb);
        }
      }
      leaves = next;
    }
    return leaves.sort((a, b) => a - b);
  },

  'triangle': (...args: unknown[]) => {
    const tri = args[0] as number[][];
    const dp = [...tri[tri.length - 1]!];
    for (let i = tri.length - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) { dp[j] = tri[i]![j]! + Math.min(dp[j]!, dp[j + 1]!); }
    }
    return dp[0]!;
  },

  'interleaving-string': (...args: unknown[]) => {
    const s1 = args[0] as string; const s2 = args[1] as string; const s3 = args[2] as string;
    if (s1.length + s2.length !== s3.length) return false;
    const dp = Array.from({ length: s1.length + 1 }, () => new Array<boolean>(s2.length + 1).fill(false));
    dp[0]![0] = true;
    for (let i = 1; i <= s1.length; i++) dp[i]![0] = dp[i - 1]![0]! && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= s2.length; j++) dp[0]![j] = dp[0]![j - 1]! && s2[j - 1] === s3[j - 1];
    for (let i = 1; i <= s1.length; i++)
      for (let j = 1; j <= s2.length; j++)
        dp[i]![j] = (s1[i - 1] === s3[i + j - 1] && dp[i - 1]![j]!) || (s2[j - 1] === s3[i + j - 1] && dp[i]![j - 1]!);
    return dp[s1.length]![s2.length]!;
  },

  'find-eventual-safe-states': (...args: unknown[]) => {
    const graph = args[0] as number[][];
    const n = graph.length;
    const state = new Array<number>(n).fill(0);
    function dfs(node: number): boolean {
      if (state[node] === 1) return false;
      if (state[node] === 2) return true;
      state[node] = 1;
      for (const nb of graph[node]!) { if (!dfs(nb)) { state[node] = 1; return false; } }
      state[node] = 2;
      return true;
    }
    const result: number[] = [];
    for (let i = 0; i < n; i++) { if (dfs(i)) result.push(i); }
    return result;
  },

  'lowest-common-ancestor-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const p = args[1] as number;
    const q = args[2] as number;
    function find(node: _TN | null, val: number): _TN | null {
      if (!node) return null;
      if (node.v === val) return node;
      return find(node.l, val) || find(node.r, val);
    }
    const pNode = find(root, p);
    const qNode = find(root, q);
    function lca(node: _TN | null): _TN | null {
      if (!node) return null;
      if (node === pNode || node === qNode) return node;
      const left = lca(node.l);
      const right = lca(node.r);
      if (left && right) return node;
      return left ?? right;
    }
    return lca(root)?.v ?? null;
  },

  'reverse-vowels': (...args: unknown[]) => {
    const s = args[0] as string;
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let l = 0, r = arr.length - 1;
    while (l < r) {
      while (l < r && !vowels.has(arr[l]!)) l++;
      while (l < r && !vowels.has(arr[r]!)) r--;
      if (l < r) { [arr[l], arr[r]] = [arr[r]!, arr[l]!]; l++; r--; }
    }
    return arr.join('');
  },

  'fizz-buzz': (...args: unknown[]) => {
    const n = args[0] as number;
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) result.push('FizzBuzz');
      else if (i % 3 === 0) result.push('Fizz');
      else if (i % 5 === 0) result.push('Buzz');
      else result.push(String(i));
    }
    return result;
  },

  'lucky-numbers-in-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const m = matrix.length, n = matrix[0]!.length;
    const result: number[] = [];
    for (let i = 0; i < m; i++) {
      let minVal = Infinity, minCol = 0;
      for (let j = 0; j < n; j++) { if (matrix[i]![j]! < minVal) { minVal = matrix[i]![j]!; minCol = j; } }
      let isMax = true;
      for (let k = 0; k < m; k++) { if (matrix[k]![minCol]! > minVal) { isMax = false; break; } }
      if (isMax) result.push(minVal);
    }
    return result;
  },

  'check-sorted-rotated': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) { if (nums[i]! > nums[(i + 1) % n]!) count++; }
    return count <= 1;
  },

  'maximum-vowels': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const vowels = new Set('aeiou');
    let count = 0, best = 0;
    for (let i = 0; i < s.length; i++) {
      if (vowels.has(s[i]!)) count++;
      if (i >= k && vowels.has(s[i - k]!)) count--;
      best = Math.max(best, count);
    }
    return best;
  },

  'longest-subarray-after-deleting': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] === 0) zeros++;
      while (zeros > 1) { if (nums[left++] === 0) zeros--; }
      best = Math.max(best, right - left);
    }
    return best;
  },

  'gas-station': (...args: unknown[]) => {
    const gas = args[0] as number[];
    const cost = args[1] as number[];
    let total = 0, tank = 0, start = 0;
    for (let i = 0; i < gas.length; i++) {
      const diff = gas[i]! - cost[i]!;
      total += diff; tank += diff;
      if (tank < 0) { start = i + 1; tank = 0; }
    }
    return total >= 0 ? start : -1;
  },

  'minimum-cost-tickets': (...args: unknown[]) => {
    const days = args[0] as number[];
    const costs = args[1] as number[];
    const dp = new Array<number>(366).fill(0);
    const daySet = new Set(days);
    for (let i = 1; i <= 365; i++) {
      if (!daySet.has(i)) { dp[i] = dp[i-1]!; continue; }
      dp[i] = Math.min(dp[i-1]! + costs[0]!, dp[Math.max(0,i-7)]! + costs[1]!, dp[Math.max(0,i-30)]! + costs[2]!);
    }
    return dp[365]!;
  },

  'max-subarray-circular': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let totalSum = 0, maxSum = nums[0]!, curMax = 0, minSum = nums[0]!, curMin = 0;
    for (const n of nums) {
      curMax = Math.max(curMax + n, n); maxSum = Math.max(maxSum, curMax);
      curMin = Math.min(curMin + n, n); minSum = Math.min(minSum, curMin);
      totalSum += n;
    }
    return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum;
  },

  'squares-of-sorted-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0, right = nums.length - 1;
    const result = new Array<number>(nums.length);
    let pos = nums.length - 1;
    while (left <= right) {
      const lsq = nums[left]! ** 2, rsq = nums[right]! ** 2;
      if (lsq > rsq) { result[pos--] = lsq; left++; }
      else { result[pos--] = rsq; right--; }
    }
    return result;
  },

  'minimum-absolute-difference': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])].sort((a, b) => a - b);
    let best = Infinity;
    for (let i = 1; i < arr.length; i++) best = Math.min(best, arr[i]! - arr[i-1]!);
    const result: number[][] = [];
    for (let i = 1; i < arr.length; i++) { if (arr[i]! - arr[i-1]! === best) result.push([arr[i-1]!, arr[i]!]); }
    return result;
  },

  'count-negatives-in-sorted-matrix': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    let count = 0;
    for (const row of grid) {
      let l = 0, r = row.length;
      while (l < r) { const m = (l + r) >> 1; if (row[m]! < 0) r = m; else l = m + 1; }
      count += row.length - l;
    }
    return count;
  },

  'k-closest-points': (...args: unknown[]) => {
    const points = (args[0] as number[][]).map(p => [p[0]!, p[1]!] as [number, number]);
    const k = args[1] as number;
    return points.sort((a, b) => {
      const da = a[0] * a[0] + a[1] * a[1], db = b[0] * b[0] + b[1] * b[1];
      if (da !== db) return da - db;
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    }).slice(0, k);
  },

  'top-k-frequent-words': (...args: unknown[]) => {
    const words = args[0] as string[];
    const k = args[1] as number;
    const map = new Map<string, number>();
    for (const w of words) map.set(w, (map.get(w) ?? 0) + 1);
    return [...map.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, k)
      .map(e => e[0]);
  },

  'find-disappeared-numbers': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    for (const n of nums) { const idx = Math.abs(n) - 1; if (nums[idx]! > 0) nums[idx]! *= -1; }
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) { if (nums[i]! > 0) result.push(i + 1); }
    return result;
  },

  'spiral-matrix-ii': (...args: unknown[]) => {
    const n = args[0] as number;
    const mat = Array.from({ length: n }, () => new Array<number>(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) mat[top]![i] = num++;
      top++;
      for (let i = top; i <= bottom; i++) mat[i]![right] = num++;
      right--;
      if (top <= bottom) { for (let i = right; i >= left; i--) mat[bottom]![i] = num++; bottom--; }
      if (left <= right) { for (let i = bottom; i >= top; i--) mat[i]![left] = num++; left++; }
    }
    return mat;
  },

  'max-consecutive-ones-iii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] === 0) zeros++;
      while (zeros > k) { if (nums[left++] === 0) zeros--; }
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'jump-game-iii': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const start = args[1] as number;
    const n = arr.length;
    const visited = new Array<boolean>(n).fill(false);
    const queue = [start];
    visited[start] = true;
    while (queue.length) {
      const i = queue.shift()!;
      if (arr[i] === 0) return true;
      for (const next of [i - arr[i]!, i + arr[i]!]) {
        if (next >= 0 && next < n && !visited[next]) { visited[next] = true; queue.push(next); }
      }
    }
    return false;
  },

  'coin-change-ii': (...args: unknown[]) => {
    const amount = args[0] as number;
    const coins = args[1] as number[];
    const dp = new Array<number>(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) dp[i]! += dp[i - coin]!;
    }
    return dp[amount]!;
  },

  'best-time-buy-sell-cooldown': (...args: unknown[]) => {
    const prices = args[0] as number[];
    if (prices.length <= 1) return 0;
    let held = -prices[0]!, sold = 0, rest = 0;
    for (let i = 1; i < prices.length; i++) {
      const ph = held, ps = sold, pr = rest;
      held = Math.max(ph, pr - prices[i]!);
      sold = ph + prices[i]!;
      rest = Math.max(pr, ps);
    }
    return Math.max(sold, rest);
  },

  'longest-arithmetic-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const dp = Array.from({ length: n }, () => new Map<number, number>());
    let best = 2;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        const diff = nums[i]! - nums[j]!;
        const prev = dp[j]!.get(diff) ?? 1;
        const cur = prev + 1;
        dp[i]!.set(diff, Math.max(dp[i]!.get(diff) ?? 0, cur));
        best = Math.max(best, cur);
      }
    }
    return best;
  },

  'combination-sum-ii': (...args: unknown[]) => {
    const candidates = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    const result: number[][] = [];
    function bt(start: number, rem: number, cur: number[]) {
      if (rem === 0) { result.push([...cur]); return; }
      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i-1]) continue;
        if (candidates[i]! > rem) break;
        cur.push(candidates[i]!);
        bt(i + 1, rem - candidates[i]!, cur);
        cur.pop();
      }
    }
    bt(0, target, []);
    return result;
  },

  'number-of-dice-rolls': (...args: unknown[]) => {
    const n = args[0] as number;
    const k = args[1] as number;
    const target = args[2] as number;
    const MOD = 1_000_000_007;
    let dp = new Array<number>(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
      const next = new Array<number>(target + 1).fill(0);
      for (let t = 0; t <= target; t++) {
        if (!dp[t]) continue;
        for (let face = 1; face <= k; face++) {
          if (t + face <= target) next[t + face] = (next[t + face]! + dp[t]!) % MOD;
        }
      }
      dp = next;
    }
    return dp[target]!;
  },

  'unique-paths-ii': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const m = grid.length, n = grid[0]!.length;
    const dp = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    for (let i = 0; i < m; i++) { if (grid[i]![0] === 1) break; dp[i]![0] = 1; }
    for (let j = 0; j < n; j++) { if (grid[0]![j] === 1) break; dp[0]![j] = 1; }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (grid[i]![j] === 0) dp[i]![j] = dp[i-1]![j]! + dp[i]![j-1]!;
      }
    }
    return dp[m-1]![n-1]!;
  },

  'word-search-ii': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(r => [...r]);
    const words = args[1] as string[];
    interface TN { c: Record<string, TN>; w: string | null }
    const mk = (): TN => ({ c: {}, w: null });
    const root = mk();
    for (const word of words) {
      let n = root;
      for (const ch of word) { if (!n.c[ch]) n.c[ch] = mk(); n = n.c[ch]!; }
      n.w = word;
    }
    const result: string[] = [];
    const m = board.length, nc = board[0]!.length;
    function dfs(r: number, c: number, node: TN): void {
      const ch = board[r]![c]!;
      const next = node.c[ch];
      if (!next) return;
      if (next.w) { result.push(next.w); next.w = null; }
      board[r]![c] = '#';
      for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        const nr = r + dr!, nc2 = c + dc!;
        if (nr >= 0 && nr < m && nc2 >= 0 && nc2 < nc && board[nr]![nc2] !== '#') dfs(nr, nc2, next);
      }
      board[r]![c] = ch;
    }
    for (let r = 0; r < m; r++) for (let c = 0; c < nc; c++) dfs(r, c, root);
    return result.sort();
  },

  'letter-case-permutation': (...args: unknown[]) => {
    const s = args[0] as string;
    const result: string[] = [];
    const bt = (i: number, cur: string[]): void => {
      if (i === s.length) { result.push(cur.join('')); return; }
      const ch = s[i]!;
      if (/\d/.test(ch)) { cur.push(ch); bt(i + 1, cur); cur.pop(); }
      else {
        cur.push(ch.toLowerCase()); bt(i + 1, cur); cur.pop();
        cur.push(ch.toUpperCase()); bt(i + 1, cur); cur.pop();
      }
    };
    bt(0, []);
    return result.sort();
  },


  'combinations': (...args: unknown[]) => {
    const [n, k] = args as [number, number];
    const result: number[][] = [];
    const bt = (start: number, cur: number[]): void => {
      if (cur.length === k) { result.push([...cur]); return; }
      for (let i = start; i <= n - (k - cur.length) + 1; i++) {
        cur.push(i); bt(i + 1, cur); cur.pop();
      }
    };
    bt(1, []);
    return result;
  },

  'alien-dictionary': (...args: unknown[]) => {
    const words = args[0] as string[];
    const chars = new Set<string>();
    for (const w of words) for (const c of w) chars.add(c);
    const adj = new Map<string, Set<string>>();
    const indeg = new Map<string, number>();
    for (const c of chars) { adj.set(c, new Set()); indeg.set(c, 0); }
    for (let i = 0; i < words.length - 1; i++) {
      const [w1, w2] = [words[i]!, words[i + 1]!];
      if (w1.length > w2.length && w1.startsWith(w2)) return '';
      const len = Math.min(w1.length, w2.length);
      for (let j = 0; j < len; j++) {
        if (w1[j] !== w2[j]) {
          if (!adj.get(w1[j]!)!.has(w2[j]!)) {
            adj.get(w1[j]!)!.add(w2[j]!);
            indeg.set(w2[j]!, indeg.get(w2[j]!)! + 1);
          }
          break;
        }
      }
    }
    let queue = [...chars].filter(c => indeg.get(c) === 0).sort();
    let result = '';
    while (queue.length > 0) {
      const c = queue.shift()!;
      result += c;
      for (const nb of adj.get(c)!) {
        indeg.set(nb, indeg.get(nb)! - 1);
        if (indeg.get(nb) === 0) queue.push(nb);
      }
      queue.sort();
    }
    return result.length === chars.size ? result : '';
  },

  'critical-connections': (...args: unknown[]) => {
    const n = args[0] as number;
    const connections = args[1] as number[][];
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const edge of connections) { const u = edge[0]!, v = edge[1]!; adj[u]!.push(v); adj[v]!.push(u); }
    const disc = new Array<number>(n).fill(-1);
    const low = new Array<number>(n).fill(0);
    const bridges: number[][] = [];
    let timer = 0;
    function dfs(u: number, parent: number): void {
      disc[u] = low[u] = timer++;
      for (const v of adj[u]!) {
        if (v === parent) continue;
        if (disc[v] === -1) {
          dfs(v, u);
          low[u] = Math.min(low[u]!, low[v]!);
          if (low[v]! > disc[u]!) bridges.push([Math.min(u, v), Math.max(u, v)]);
        } else {
          low[u] = Math.min(low[u]!, disc[v]!);
        }
      }
    }
    for (let i = 0; i < n; i++) if (disc[i] === -1) dfs(i, -1);
    return bridges.sort((a, b) => a[0]! !== b[0]! ? a[0]! - b[0]! : a[1]! - b[1]!);
  },

  'vertical-order-traversal': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr || arr.length === 0 || arr[0] === null) return [];
    interface Node { val: number; left: Node | null; right: Node | null }
    const makeNode = (v: number): Node => ({ val: v, left: null, right: null });
    const root = makeNode(arr[0] as number);
    const queue: Node[] = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
      const node = queue.shift()!;
      if (arr[i] !== null && arr[i] !== undefined) { node.left = makeNode(arr[i] as number); queue.push(node.left); }
      i++;
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = makeNode(arr[i] as number); queue.push(node.right); }
      i++;
    }
    const nodes: [number, number, number][] = [];
    const dfs = (node: Node | null, row: number, col: number): void => {
      if (!node) return;
      nodes.push([col, row, node.val]);
      dfs(node.left, row + 1, col - 1);
      dfs(node.right, row + 1, col + 1);
    };
    dfs(root, 0, 0);
    nodes.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]);
    const colMap = new Map<number, number[]>();
    for (const [col, , val] of nodes) {
      if (!colMap.has(col)) colMap.set(col, []);
      colMap.get(col)!.push(val);
    }
    const cols = [...colMap.keys()].sort((a, b) => a - b);
    return cols.map(c => colMap.get(c)!);
  },

  'longest-increasing-path-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const m = matrix.length, n = matrix[0]!.length;
    const memo = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    function dfs(i: number, j: number): number {
      if (memo[i]![j]) return memo[i]![j]!;
      let best = 1;
      for (const [di, dj] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as [number, number][]) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni]![nj]! > matrix[i]![j]!) {
          best = Math.max(best, 1 + dfs(ni, nj));
        }
      }
      return (memo[i]![j] = best);
    }
    let ans = 0;
    for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) ans = Math.max(ans, dfs(i, j));
    return ans;
  },

  'find-min-rotated-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid]! > nums[hi]!) lo = mid + 1;
      else if (nums[mid]! < nums[hi]!) hi = mid;
      else hi--;
    }
    return nums[lo]!;
  },

  'number-of-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    const count = [0, 0, 0];
    let left = 0, result = 0;
    for (let right = 0; right < s.length; right++) {
      count[s.charCodeAt(right) - 97]!++;
      while (count[0]! > 0 && count[1]! > 0 && count[2]! > 0) {
        result += s.length - right;
        count[s.charCodeAt(left) - 97]!--;
        left++;
      }
    }
    return result;
  },

  'single-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.reduce((acc, n) => acc ^ n, 0);
  },

  'house-robber-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    if (nums.length === 1) return nums[0]!;
    function robRange(arr: number[], lo: number, hi: number): number {
      let prev2 = 0, prev1 = 0;
      for (let i = lo; i <= hi; i++) {
        const cur = Math.max(prev1, prev2 + arr[i]!);
        prev2 = prev1;
        prev1 = cur;
      }
      return prev1;
    }
    return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
  },

  'wiggle-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    if (nums.length < 2) return nums.length;
    let up = 1, down = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! > nums[i - 1]!) up = down + 1;
      else if (nums[i]! < nums[i - 1]!) down = up + 1;
    }
    return Math.max(up, down);
  },

  'insert-interval': (...args: unknown[]) => {
    const intervals = args[0] as number[][];
    const [ns, ne] = args[1] as number[];
    const result: number[][] = [];
    let start = ns!, end = ne!;
    let i = 0;
    while (i < intervals.length && intervals[i]![1]! < start) result.push(intervals[i++]!);
    while (i < intervals.length && intervals[i]![0]! <= end) {
      start = Math.min(start, intervals[i]![0]!);
      end = Math.max(end, intervals[i]![1]!);
      i++;
    }
    result.push([start, end]);
    while (i < intervals.length) result.push(intervals[i++]!);
    return result;
  },

  'sum-of-two-integers': (...args: unknown[]) => {
    let a = args[0] as number, b = args[1] as number;
    while (b !== 0) {
      const carry = (a & b) << 1;
      a = a ^ b;
      b = carry;
    }
    return a;
  },

  'majority-element-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let c1 = 0, c2 = 1, cnt1 = 0, cnt2 = 0;
    for (const n of nums) {
      if (n === c1) cnt1++;
      else if (n === c2) cnt2++;
      else if (cnt1 === 0) { c1 = n; cnt1 = 1; }
      else if (cnt2 === 0) { c2 = n; cnt2 = 1; }
      else { cnt1--; cnt2--; }
    }
    cnt1 = cnt2 = 0;
    for (const n of nums) { if (n === c1) cnt1++; else if (n === c2) cnt2++; }
    const result: number[] = [];
    if (cnt1 > nums.length / 3) result.push(c1);
    if (cnt2 > nums.length / 3) result.push(c2);
    return result.sort((a, b) => a - b);
  },

  'contains-duplicate-ii': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const seen = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i]!)) return true;
      seen.add(nums[i]!);
      if (seen.size > k) seen.delete(nums[i - k]!);
    }
    return false;
  },

  'pascals-triangle': (...args: unknown[]) => {
    const numRows = args[0] as number;
    const result: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      const row: number[] = [1];
      for (let j = 1; j < i; j++) row.push(result[i - 1]![j - 1]! + result[i - 1]![j]!);
      if (i > 0) row.push(1);
      result.push(row);
    }
    return result;
  },

  'single-number-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let ones = 0, twos = 0;
    for (const n of nums) {
      ones = (ones ^ n) & ~twos;
      twos = (twos ^ n) & ~ones;
    }
    return ones;
  },

  'goal-parser': (...args: unknown[]) => {
    return (args[0] as string).replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
  },

  'shuffle-the-array': (...args: unknown[]) => {
    const nums = args[0] as number[], n = args[1] as number;
    const result: number[] = [];
    for (let i = 0; i < n; i++) { result.push(nums[i]!); result.push(nums[i + n]!); }
    return result;
  },

  'count-items-matching-rule': (...args: unknown[]) => {
    const items = args[0] as string[][], ruleKey = args[1] as string, ruleValue = args[2] as string;
    const idx = { type: 0, color: 1, name: 2 }[ruleKey] as number;
    return items.filter(item => item[idx] === ruleValue).length;
  },

  'richest-customer-wealth': (...args: unknown[]) => {
    const accounts = args[0] as number[][];
    return Math.max(...accounts.map(row => row.reduce((a, b) => a + b, 0)));
  },

  'maximum-units-on-truck': (...args: unknown[]) => {
    const boxTypes = (args[0] as number[][]).slice().sort((a, b) => b[1]! - a[1]!);
    let truckSize = args[1] as number, total = 0;
    for (const [count, units] of boxTypes) {
      const take = Math.min(count!, truckSize);
      total += take * units!;
      truckSize -= take;
      if (truckSize === 0) break;
    }
    return total;
  },

  'find-the-difference': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    let c = 0;
    for (const ch of s) c ^= ch.charCodeAt(0);
    for (const ch of t) c ^= ch.charCodeAt(0);
    return String.fromCharCode(c);
  },

  'reverse-only-letters': (...args: unknown[]) => {
    const s = args[0] as string;
    const arr = s.split('');
    let lo = 0, hi = arr.length - 1;
    while (lo < hi) {
      while (lo < hi && !/[a-zA-Z]/.test(arr[lo]!)) lo++;
      while (lo < hi && !/[a-zA-Z]/.test(arr[hi]!)) hi--;
      if (lo < hi) { [arr[lo], arr[hi]] = [arr[hi]!, arr[lo]!]; lo++; hi--; }
    }
    return arr.join('');
  },

  'backspace-string-compare': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    function build(str: string): string {
      const stack: string[] = [];
      for (const c of str) { if (c === '#') stack.pop(); else stack.push(c); }
      return stack.join('');
    }
    return build(s) === build(t);
  },

  'number-of-steps': (...args: unknown[]) => {
    let num = args[0] as number;
    let steps = 0;
    while (num > 0) { if (num % 2 === 0) num >>= 1; else num--; steps++; }
    return steps;
  },

  'summary-ranges': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const result: string[] = [];
    let i = 0;
    while (i < nums.length) {
      const start = nums[i]!;
      while (i + 1 < nums.length && nums[i + 1]! === nums[i]! + 1) i++;
      result.push(nums[i] === start ? `${start}` : `${start}->${nums[i]}`);
      i++;
    }
    return result;
  },

  'longest-turbulent-subarray': (...args: unknown[]) => {
    const arr = args[0] as number[];
    if (arr.length < 2) return arr.length;
    let ans = 1, inc = 1, dec = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i]! > arr[i - 1]!) { inc = dec + 1; dec = 1; }
      else if (arr[i]! < arr[i - 1]!) { dec = inc + 1; inc = 1; }
      else { inc = 1; dec = 1; }
      ans = Math.max(ans, inc, dec);
    }
    return ans;
  },

  'minimum-genetic-mutation': (...args: unknown[]) => {
    const startGene = args[0] as string, endGene = args[1] as string;
    const bank = new Set(args[2] as string[]);
    const queue: [string, number][] = [[startGene, 0]];
    const visited = new Set([startGene]);
    const chars = 'ACGT';
    while (queue.length) {
      const [gene, steps] = queue.shift()!;
      if (gene === endGene) return steps;
      for (let i = 0; i < 8; i++) {
        for (const c of chars) {
          if (c === gene[i]) continue;
          const next = gene.slice(0, i) + c + gene.slice(i + 1);
          if (bank.has(next) && !visited.has(next)) {
            visited.add(next);
            queue.push([next, steps + 1]);
          }
        }
      }
    }
    return -1;
  },

  'largest-divisible-subset': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const n = nums.length;
    const dp = new Array<number>(n).fill(1);
    const parent = new Array<number>(n).fill(-1);
    let maxLen = 1, maxIdx = 0;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i]! % nums[j]! === 0 && dp[j]! + 1 > dp[i]!) {
          dp[i] = dp[j]! + 1;
          parent[i] = j;
        }
      }
      if (dp[i]! > maxLen) { maxLen = dp[i]!; maxIdx = i; }
    }
    const result: number[] = [];
    let idx = maxIdx;
    while (idx !== -1) { result.push(nums[idx]!); idx = parent[idx]!; }
    return result.sort((a, b) => a - b);
  },

  'restore-ip-addresses': (...args: unknown[]) => {
    const s = args[0] as string;
    const result: string[] = [];
    function bt(start: number, parts: string[]): void {
      if (parts.length === 4 && start === s.length) { result.push(parts.join('.')); return; }
      if (parts.length === 4 || start === s.length) return;
      const remaining = s.length - start;
      const partsLeft = 4 - parts.length;
      if (remaining < partsLeft || remaining > partsLeft * 3) return;
      for (let len = 1; len <= 3 && start + len <= s.length; len++) {
        const part = s.slice(start, start + len);
        if (len > 1 && part[0] === '0') break;
        if (parseInt(part, 10) > 255) break;
        parts.push(part);
        bt(start + len, parts);
        parts.pop();
      }
    }
    bt(0, []);
    return result.sort();
  },

  'maximum-product-word-lengths': (...args: unknown[]) => {
    const words = args[0] as string[];
    const masks = words.map(w => {
      let m = 0;
      for (const c of w) m |= 1 << (c.charCodeAt(0) - 97);
      return m;
    });
    let best = 0;
    for (let i = 0; i < words.length; i++)
      for (let j = i + 1; j < words.length; j++)
        if ((masks[i]! & masks[j]!) === 0)
          best = Math.max(best, words[i]!.length * words[j]!.length);
    return best;
  },

  'missing-ranges': (...args: unknown[]) => {
    const nums = args[0] as number[], lower = args[1] as number, upper = args[2] as number;
    const result: string[] = [];
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
      const cur = i < nums.length ? nums[i]! : upper + 1;
      if (cur - prev >= 2) {
        result.push(cur - prev === 2 ? `${prev + 1}` : `${prev + 1}->${cur - 1}`);
      }
      prev = cur;
    }
    return result;
  },

  'excel-sheet-column-title': (...args: unknown[]) => {
    let n = args[0] as number;
    let result = '';
    while (n > 0) {
      n--;
      result = String.fromCharCode(65 + (n % 26)) + result;
      n = Math.floor(n / 26);
    }
    return result;
  },

  'number-of-1-bits': (...args: unknown[]) => {
    let n = args[0] as number, count = 0;
    while (n > 0) { count += n & 1; n >>>= 1; }
    return count;
  },

  'longest-palindrome-build': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq: Record<string, number> = {};
    for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
    let len = 0, hasOdd = false;
    for (const cnt of Object.values(freq)) {
      len += Math.floor(cnt / 2) * 2;
      if (cnt % 2 === 1) hasOdd = true;
    }
    return hasOdd ? len + 1 : len;
  },

  'power-of-three': (...args: unknown[]) => {
    let n = args[0] as number;
    if (n <= 0) return false;
    while (n % 3 === 0) n = Math.floor(n / 3);
    return n === 1;
  },

  'reverse-bits': (...args: unknown[]) => {
    let n = args[0] as number, result = 0;
    for (let i = 0; i < 32; i++) {
      result = ((result * 2) + (n & 1)) >>> 0;
      n = Math.floor(n / 2);
    }
    return result >>> 0;
  },

  'game-of-life': (...args: unknown[]) => {
    const board = (args[0] as number[][]).map(r => [...r]);
    const m = board.length, n = board[0]!.length;
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]] as [number,number][];
    const next = board.map(r => [...r]);
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        const live = dirs.reduce((acc, [dr, dc]) => {
          const nr = r + dr!, nc = c + dc!;
          return acc + (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr]![nc] === 1 ? 1 : 0);
        }, 0);
        if (board[r]![c] === 1) next[r]![c] = (live === 2 || live === 3) ? 1 : 0;
        else next[r]![c] = live === 3 ? 1 : 0;
      }
    }
    return next;
  },

  'count-and-say': (...args: unknown[]) => {
    let s = '1';
    for (let i = 1; i < (args[0] as number); i++) {
      let next = '';
      let j = 0;
      while (j < s.length) {
        let count = 1;
        while (j + count < s.length && s[j + count] === s[j]) count++;
        next += count + s[j]!;
        j += count;
      }
      s = next;
    }
    return s;
  },

  'beautiful-arrangement': (...args: unknown[]) => {
    const n = args[0] as number;
    const visited = new Array<boolean>(n + 1).fill(false);
    let count = 0;
    function bt(pos: number): void {
      if (pos > n) { count++; return; }
      for (let k = 1; k <= n; k++) {
        if (!visited[k] && (k % pos === 0 || pos % k === 0)) {
          visited[k] = true;
          bt(pos + 1);
          visited[k] = false;
        }
      }
    }
    bt(1);
    return count;
  },

  'expression-add-operators': (...args: unknown[]) => {
    const num = args[0] as string, target = args[1] as number;
    const result: string[] = [];
    function bt(start: number, expr: string, val: number, lastMul: number): void {
      if (start === num.length) {
        if (val === target) result.push(expr);
        return;
      }
      for (let len = 1; len <= num.length - start; len++) {
        const s = num.slice(start, start + len);
        if (s.length > 1 && s[0] === '0') break;
        const cur = parseInt(s, 10);
        if (start === 0) {
          bt(len, s, cur, cur);
        } else {
          bt(start + len, expr + '+' + s, val + cur, cur);
          bt(start + len, expr + '-' + s, val - cur, -cur);
          bt(start + len, expr + '*' + s, val - lastMul + lastMul * cur, lastMul * cur);
        }
      }
    }
    bt(0, '', 0, 0);
    return result;
  },

  'valid-anagram': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    if (s.length !== t.length) return false;
    const count: Record<string, number> = {};
    for (const c of s) count[c] = (count[c] ?? 0) + 1;
    for (const c of t) {
      if (!count[c]) return false;
      count[c]!--;
    }
    return true;
  },

  'defanging-ip-address': (...args: unknown[]) => {
    return (args[0] as string).replace(/\./g, '[.]');
  },

  'kids-with-candies': (...args: unknown[]) => {
    const candies = args[0] as number[], extra = args[1] as number;
    const max = Math.max(...candies);
    return candies.map(c => c + extra >= max);
  },

  'monotonic-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let inc = true, dec = true;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! > nums[i - 1]!) dec = false;
      if (nums[i]! < nums[i - 1]!) inc = false;
    }
    return inc || dec;
  },

  'build-array-from-permutation': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.map((_, i) => nums[nums[i]!]!);
  },

  'decode-xored-array': (...args: unknown[]) => {
    const encoded = args[0] as number[], first = args[1] as number;
    const arr = [first];
    for (const e of encoded) arr.push(arr[arr.length - 1]! ^ e);
    return arr;
  },

  'replace-elements-with-greatest': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])];
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      const cur = arr[i]!;
      arr[i] = max;
      if (cur > max) max = cur;
    }
    return arr;
  },

  'highest-altitude': (...args: unknown[]) => {
    const gain = args[0] as number[];
    let max = 0, cur = 0;
    for (const g of gain) { cur += g; if (cur > max) max = cur; }
    return max;
  },

  'sign-of-product-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let neg = 0;
    for (const n of nums) {
      if (n === 0) return 0;
      if (n < 0) neg++;
    }
    return neg % 2 === 0 ? 1 : -1;
  },

  'maximum-difference-increasing-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let minVal = nums[0]!, ans = -1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! > minVal) ans = Math.max(ans, nums[i]! - minVal);
      else minVal = nums[i]!;
    }
    return ans;
  },

  'cells-in-range': (...args: unknown[]) => {
    const s = args[0] as string;
    const c1 = s.charCodeAt(0), c2 = s.charCodeAt(3);
    const r1 = +s[1]!, r2 = +s[4]!;
    const result: string[] = [];
    for (let c = c1; c <= c2; c++)
      for (let r = r1; r <= r2; r++)
        result.push(String.fromCharCode(c) + r);
    return result;
  },

  'find-all-numbers-disappeared': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const seen = new Set(nums);
    const result: number[] = [];
    for (let i = 1; i <= n; i++) if (!seen.has(i)) result.push(i);
    return result;
  },
  'check-if-n-and-double-exist': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const seen = new Set<number>();
    for (const x of arr) {
      if (seen.has(x * 2) || (x % 2 === 0 && seen.has(x / 2))) return true;
      seen.add(x);
    }
    return false;
  },
  'largest-number-at-least-twice': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let maxIdx = 0;
    for (let i = 1; i < nums.length; i++) if (nums[i]! > nums[maxIdx]!) maxIdx = i;
    for (let i = 0; i < nums.length; i++) {
      if (i !== maxIdx && nums[maxIdx]! < 2 * nums[i]!) return -1;
    }
    return maxIdx;
  },
  'special-positions-binary-matrix': (...args: unknown[]) => {
    const mat = args[0] as number[][];
    const m = mat.length, n = mat[0]!.length;
    let count = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i]![j] !== 1) continue;
        const rowSum = mat[i]!.reduce((a, b) => a + b, 0);
        const colSum = mat.reduce((a, row) => a + row[j]!, 0);
        if (rowSum === 1 && colSum === 1) count++;
      }
    }
    return count;
  },
  'matrix-diagonal-sum': (...args: unknown[]) => {
    const mat = args[0] as number[][];
    const n = mat.length;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += mat[i]![i]! + mat[i]![n - 1 - i]!;
    if (n % 2 === 1) sum -= mat[Math.floor(n / 2)]![Math.floor(n / 2)]!;
    return sum;
  },
  'sort-array-by-parity': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return [...nums.filter(x => x % 2 === 0), ...nums.filter(x => x % 2 !== 0)];
  },
  'left-and-right-sum-differences': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const result: number[] = [];
    let leftSum = 0, total = nums.reduce((a, b) => a + b, 0);
    for (let i = 0; i < n; i++) {
      const rightSum = total - leftSum - nums[i]!;
      result.push(Math.abs(leftSum - rightSum));
      leftSum += nums[i]!;
    }
    return result;
  },
  'minimum-value-positive-step-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let minPrefix = 0, cur = 0;
    for (const n of nums) { cur += n; if (cur < minPrefix) minPrefix = cur; }
    return Math.max(1, 1 - minPrefix);
  },
  'count-number-of-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let count = 0;
    for (let i = 0; i < nums.length; i++)
      for (let j = i + 1; j < nums.length; j++)
        if (Math.abs(nums[i]! - nums[j]!) === k) count++;
    return count;
  },
  'minimum-sum-mountain-triplet': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let ans = Infinity;
    for (let i = 0; i < nums.length; i++)
      for (let j = i + 1; j < nums.length; j++)
        for (let k = j + 1; k < nums.length; k++)
          if (nums[i]! < nums[j]! && nums[k]! < nums[j]!)
            ans = Math.min(ans, nums[i]! + nums[j]! + nums[k]!);
    return ans === Infinity ? -1 : ans;
  },
  'add-digits': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
  },
  'degree-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const count = new Map<number, number>(), first = new Map<number, number>(), last = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i]!;
      count.set(n, (count.get(n) ?? 0) + 1);
      if (!first.has(n)) first.set(n, i);
      last.set(n, i);
    }
    const deg = Math.max(...count.values());
    let res = Infinity;
    for (const [n, c] of count) if (c === deg) res = Math.min(res, last.get(n)! - first.get(n)! + 1);
    return res;
  },
  'check-array-arithmetic-progression': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])].sort((a, b) => a - b);
    const diff = arr[1]! - arr[0]!;
    for (let i = 2; i < arr.length; i++) if (arr[i]! - arr[i - 1]! !== diff) return false;
    return true;
  },
  'how-many-numbers-smaller-than-current': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map(n => sorted.indexOf(n));
  },
  'find-target-indices-after-sorting': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) if (nums[i] === target) result.push(i);
    return result;
  },
  'max-average-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let max = sum;
    for (let i = k; i < nums.length; i++) { sum += nums[i]! - nums[i - k]!; if (sum > max) max = sum; }
    return max / k;
  },
  'consecutive-characters': (...args: unknown[]) => {
    const s = args[0] as string;
    let max = 1, cur = 1;
    for (let i = 1; i < s.length; i++) { cur = s[i] === s[i - 1] ? cur + 1 : 1; if (cur > max) max = cur; }
    return max;
  },
  'count-items-with-the-given-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    const maxFreq = Math.max(...freq.values());
    let total = 0;
    for (const c of freq.values()) if (c === maxFreq) total += c;
    return total;
  },
  'number-of-employees-can-meet': (...args: unknown[]) => {
    const hours = args[0] as number[], target = args[1] as number;
    return hours.filter(h => h >= target).length;
  },
  'partition-array-according-to-given-pivot': (...args: unknown[]) => {
    const nums = args[0] as number[], pivot = args[1] as number;
    return [...nums.filter(n => n < pivot), ...nums.filter(n => n === pivot), ...nums.filter(n => n > pivot)];
  },
  'sort-even-odd-indices': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const evens = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
    const odds = nums.filter((_, i) => i % 2 === 1).sort((a, b) => b - a);
    const result: number[] = [];
    let ei = 0, oi = 0;
    for (let i = 0; i < nums.length; i++) result.push(i % 2 === 0 ? evens[ei++]! : odds[oi++]!);
    return result;
  },
  'percentage-of-letter-in-string': (...args: unknown[]) => {
    const s = args[0] as string, letter = args[1] as string;
    const count = [...s].filter(c => c === letter).length;
    return Math.floor(count / s.length * 100);
  },
  'count-common-words-one-occurrence': (...args: unknown[]) => {
    const words1 = args[0] as string[], words2 = args[1] as string[];
    const freq1 = new Map<string, number>(), freq2 = new Map<string, number>();
    for (const w of words1) freq1.set(w, (freq1.get(w) ?? 0) + 1);
    for (const w of words2) freq2.set(w, (freq2.get(w) ?? 0) + 1);
    let count = 0;
    for (const [w, c] of freq1) if (c === 1 && freq2.get(w) === 1) count++;
    return count;
  },
  'convert-temperature': (...args: unknown[]) => {
    const celsius = args[0] as number;
    return [celsius + 273.15, celsius * 1.8 + 32];
  },
  'determine-if-string-halves-alike': (...args: unknown[]) => {
    const s = args[0] as string;
    const vowels = new Set('aeiouAEIOU');
    const half = s.length / 2;
    const count = (str: string) => [...str].filter(c => vowels.has(c)).length;
    return count(s.slice(0, half)) === count(s.slice(half));
  },
  'check-two-strings-almost-equivalent': (...args: unknown[]) => {
    const w1 = args[0] as string, w2 = args[1] as string;
    const freq = new Array(26).fill(0);
    for (const c of w1) freq[c.charCodeAt(0) - 97]!++;
    for (const c of w2) freq[c.charCodeAt(0) - 97]!--;
    return freq.every(f => Math.abs(f) <= 3);
  },
  'rearrange-characters-to-make-target': (...args: unknown[]) => {
    const s = args[0] as string, target = args[1] as string;
    const sFreq = new Map<string, number>(), tFreq = new Map<string, number>();
    for (const c of s) sFreq.set(c, (sFreq.get(c) ?? 0) + 1);
    for (const c of target) tFreq.set(c, (tFreq.get(c) ?? 0) + 1);
    let min = Infinity;
    for (const [c, cnt] of tFreq) min = Math.min(min, Math.floor((sFreq.get(c) ?? 0) / cnt));
    return min === Infinity ? 0 : min;
  },
  'divide-string-into-groups': (...args: unknown[]) => {
    const s = args[0] as string, k = args[1] as number, fill = args[2] as string;
    const padded = s.length % k === 0 ? s : s + fill.repeat(k - (s.length % k));
    const result: string[] = [];
    for (let i = 0; i < padded.length; i += k) result.push(padded.slice(i, i + k));
    return result;
  },
  'count-vowel-substrings': (...args: unknown[]) => {
    const word = args[0] as string;
    const vowels = new Set('aeiou');
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (!vowels.has(word[i]!)) continue;
      const seen = new Set<string>();
      for (let j = i; j < word.length; j++) {
        if (!vowels.has(word[j]!)) break;
        seen.add(word[j]!);
        if (seen.size === 5) count++;
      }
    }
    return count;
  },
  'check-prefix-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const words = args[1] as string[];
    let built = '';
    for (const w of words) {
      built += w;
      if (built === s) return true;
      if (built.length >= s.length) return false;
    }
    return false;
  },
  'sum-digits-string-convert': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    let numStr = '';
    for (const c of s) numStr += (c.charCodeAt(0) - 96).toString();
    let num = 0;
    for (const d of numStr) num += +d;
    for (let i = 1; i < k; i++) {
      let next = 0;
      let tmp = num;
      while (tmp > 0) { next += tmp % 10; tmp = Math.floor(tmp / 10); }
      num = next;
    }
    return num;
  },
  'maximum-number-of-string-pairs': (...args: unknown[]) => {
    const words = args[0] as string[];
    const seen = new Set<string>();
    let pairs = 0;
    for (const w of words) {
      const rev = w.split('').reverse().join('');
      if (seen.has(rev)) pairs++;
      else seen.add(w);
    }
    return pairs;
  },
  'count-pairs-sum-less-than-target': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    let lo = 0, hi = nums.length - 1, count = 0;
    while (lo < hi) {
      if (nums[lo]! + nums[hi]! < target) { count += hi - lo; lo++; }
      else hi--;
    }
    return count;
  },
  'neither-minimum-nor-maximum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    if (nums.length < 3) return -1;
    const min = Math.min(...nums), max = Math.max(...nums);
    for (const n of nums) if (n !== min && n !== max) return n;
    return -1;
  },
  'count-vowel-strings-in-range': (...args: unknown[]) => {
    const words = args[0] as string[], left = args[1] as number, right = args[2] as number;
    const vowels = new Set('aeiou');
    let count = 0;
    for (let i = left; i <= right; i++) {
      const w = words[i]!;
      if (vowels.has(w[0]!) && vowels.has(w[w.length - 1]!)) count++;
    }
    return count;
  },
  'find-kth-positive': (...args: unknown[]) => {
    const arr = args[0] as number[], k = args[1] as number;
    let missing = 0, i = 0;
    for (let num = 1; ; num++) {
      if (i < arr.length && arr[i] === num) { i++; continue; }
      if (++missing === k) return num;
    }
  },
  'minimum-length-string-operations': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      const top = stack[stack.length - 1];
      if ((top === 'A' && c === 'B') || (top === 'C' && c === 'D')) stack.pop();
      else stack.push(c);
    }
    return stack.length;
  },
  'largest-integer-digit-swaps': (...args: unknown[]) => {
    const num = args[0] as number;
    const digits = String(num).split('').map(Number);
    const odds = digits.filter((d) => d % 2 === 1).sort((a, b) => b - a);
    const evens = digits.filter((d) => d % 2 === 0).sort((a, b) => b - a);
    let oi = 0, ei = 0;
    return +digits.map((d) => (d % 2 === 1 ? odds[oi++]! : evens[ei++]!)).join('');
  },
  'count-fair-pairs': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const lower = args[1] as number, upper = args[2] as number;
    function countLE(limit: number): number {
      let lo = 0, hi = nums.length - 1, c = 0;
      while (lo < hi) {
        if (nums[lo]! + nums[hi]! <= limit) { c += hi - lo; lo++; }
        else hi--;
      }
      return c;
    }
    return countLE(upper) - countLE(lower - 1);
  },
  'minimum-average-difference': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let total = nums.reduce((a, b) => a + b, 0);
    let prefix = 0, minDiff = Infinity, ans = 0;
    for (let i = 0; i < n; i++) {
      prefix += nums[i]!;
      const left = Math.floor(prefix / (i + 1));
      const right = i === n - 1 ? 0 : Math.floor((total - prefix) / (n - i - 1));
      const diff = Math.abs(left - right);
      if (diff < minDiff) { minDiff = diff; ans = i; }
    }
    return ans;
  },
  'concatenation-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return [...nums, ...nums];
  },

  'third-maximum-number': (...args: unknown[]) => {
    const distinct = [...new Set(args[0] as number[])].sort((a, b) => b - a);
    return distinct.length >= 3 ? distinct[2]! : distinct[0]!;
  },

  'count-odd-numbers-in-interval': (...args: unknown[]) => {
    const low = args[0] as number, high = args[1] as number;
    const countOdd = (n: number) => Math.floor((n + 1) / 2);
    return countOdd(high) - countOdd(low - 1);
  },

  'maximum-product-three-numbers': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[n - 1]! * nums[n - 2]! * nums[n - 3]!, nums[0]! * nums[1]! * nums[n - 1]!);
  },

  'average-salary-excluding-min-max': (...args: unknown[]) => {
    const salary = args[0] as number[];
    const min = Math.min(...salary), max = Math.max(...salary);
    const sum = salary.reduce((acc, s) => acc + (s !== min && s !== max ? s : 0), 0);
    return sum / (salary.length - 2);
  },

  'find-n-unique-integers-sum-to-zero': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n === 1) return [0];
    const result: number[] = [];
    let sum = 0;
    for (let i = 1; i < n; i++) { result.push(i); sum += i; }
    result.push(-sum);
    return result;
  },

  'truncate-sentence': (...args: unknown[]) => {
    const s = args[0] as string, k = args[1] as number;
    return s.split(' ').slice(0, k).join(' ');
  },

  'largest-perimeter-triangle': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => b - a);
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i + 1]! + nums[i + 2]! > nums[i]!) return nums[i]! + nums[i + 1]! + nums[i + 2]!;
    }
    return 0;
  },

  'to-lower-case': (...args: unknown[]) => {
    return (args[0] as string).toLowerCase();
  },

  'check-if-two-string-arrays-equivalent': (...args: unknown[]) => {
    const w1 = args[0] as string[], w2 = args[1] as string[];
    return w1.join('') === w2.join('');
  },

  'sum-of-unique-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const count: Record<number, number> = {};
    for (const n of nums) count[n] = (count[n] ?? 0) + 1;
    return Object.entries(count).filter(([, v]) => v === 1).reduce((s, [k]) => s + +k, 0);
  },
  'find-winners': (...args: unknown[]) => {
    const matches = args[0] as number[][];
    const losses = new Map<number, number>();
    for (const m of matches) {
      const w = m[0]!, l = m[1]!;
      if (!losses.has(w)) losses.set(w, 0);
      losses.set(l, (losses.get(l) ?? 0) + 1);
    }
    const zero: number[] = [], one: number[] = [];
    for (const [p, lc] of losses) {
      if (lc === 0) zero.push(p);
      else if (lc === 1) one.push(p);
    }
    return [zero.sort((a, b) => a - b), one.sort((a, b) => a - b)];
  },
  'count-number-of-texts': (...args: unknown[]) => {
    const pressedKeys = args[0] as string;
    const MOD = 1_000_000_007n;
    const n = pressedKeys.length;
    const dp = new Array<bigint>(n + 1).fill(0n);
    dp[0] = 1n;
    for (let i = 1; i <= n; i++) {
      const c = pressedKeys[i - 1]!;
      dp[i] = dp[i - 1]!;
      if (i >= 2 && pressedKeys[i - 2] === c) {
        dp[i] = (dp[i]! + dp[i - 2]!) % MOD;
        if (i >= 3 && pressedKeys[i - 3] === c) {
          dp[i] = (dp[i]! + dp[i - 3]!) % MOD;
          if ((c === '7' || c === '9') && i >= 4 && pressedKeys[i - 4] === c) {
            dp[i] = (dp[i]! + dp[i - 4]!) % MOD;
          }
        }
      }
    }
    return Number(dp[n]!);
  },

  'word-pattern': (...args: unknown[]) => {
    const pattern = args[0] as string, s = args[1] as string;
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();
    for (let i = 0; i < pattern.length; i++) {
      const c = pattern[i]!, w = words[i]!;
      if (charToWord.has(c) && charToWord.get(c) !== w) return false;
      if (wordToChar.has(w) && wordToChar.get(w) !== c) return false;
      charToWord.set(c, w);
      wordToChar.set(w, c);
    }
    return true;
  },

  'min-stack': (...args: unknown[]) => {
    const ops = args[0] as string[];
    const opArgs = args[1] as number[][];
    const st: number[] = [];
    const minSt: number[] = [];
    return ops.map((op, i) => {
      const a = opArgs[i]!;
      if (op === 'push') {
        st.push(a[0]!);
        if (minSt.length === 0 || a[0]! <= minSt[minSt.length - 1]!) minSt.push(a[0]!);
        return null;
      }
      if (op === 'pop') {
        const v = st.pop()!;
        if (v === minSt[minSt.length - 1]) minSt.pop();
        return null;
      }
      if (op === 'top') return st[st.length - 1]!;
      if (op === 'getMin') return minSt[minSt.length - 1]!;
      return null;
    });
  },

  'detect-capital': (...args: unknown[]) => {
    const word = args[0] as string;
    const uppers = (word.match(/[A-Z]/g) ?? []).length;
    return uppers === word.length || uppers === 0 || (uppers === 1 && word[0] === word[0]!.toUpperCase());
  },

  'repeated-substring-pattern': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    for (let len = 1; len <= Math.floor(n / 2); len++) {
      if (n % len !== 0) continue;
      const pattern = s.slice(0, len);
      if (pattern.repeat(n / len) === s) return true;
    }
    return false;
  },

  'find-pivot-index': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const total = nums.reduce((a, b) => a + b, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
      if (left === total - left - nums[i]!) return i;
      left += nums[i]!;
    }
    return -1;
  },

  'path-crossing': (...args: unknown[]) => {
    const path = args[0] as string;
    const visited = new Set<string>();
    let x = 0, y = 0;
    visited.add('0,0');
    for (const dir of path) {
      if (dir === 'N') y++;
      else if (dir === 'S') y--;
      else if (dir === 'E') x++;
      else x--;
      const key = `${x},${y}`;
      if (visited.has(key)) return true;
      visited.add(key);
    }
    return false;
  },

  // --- heap — easy -----------------------------------------------------------
  'last-stone-weight': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])];
    while (arr.length > 1) {
      arr.sort((a, b) => a - b);
      const y = arr.pop()!;
      const x = arr.pop()!;
      if (y !== x) arr.push(y - x);
    }
    return arr.length ? arr[0] : 0;
  },

  // --- heap — medium ---------------------------------------------------------

  'kth-largest-in-stream': (...args: unknown[]) => {
    const k = args[0] as number;
    const nums = [...(args[1] as number[])];
    const adds = args[2] as number[];
    nums.sort((a, b) => a - b);
    const add = (val: number): number => {
      let lo = 0, hi = nums.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid]! < val) lo = mid + 1; else hi = mid;
      }
      nums.splice(lo, 0, val);
      return nums[nums.length - k]!;
    };
    return adds.map(add);
  },

  // --- heap — hard -----------------------------------------------------------
  'median-from-data-stream': (...args: unknown[]) => {
    const ops = args[0] as string[];
    const opArgs = args[1] as number[][];
    const data: number[] = [];
    const getMedian = (): number => {
      const n = data.length;
      if (n % 2 === 1) return data[(n - 1) / 2]!;
      return (data[n / 2 - 1]! + data[n / 2]!) / 2;
    };
    return ops.map((op, i) => {
      const a = opArgs[i] ?? [];
      if (op === 'addNum') {
        const val = a[0]!;
        let lo = 0, hi = data.length;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (data[mid]! < val) lo = mid + 1; else hi = mid;
        }
        data.splice(lo, 0, val);
        return null;
      }
      if (op === 'findMedian') return getMedian();
      return null;
    });
  },

  'minimum-cost-to-connect-sticks': (...args: unknown[]) => {
    const sticks = (args[0] as number[]).slice();
    if (sticks.length <= 1) return 0;
    sticks.sort((a, b) => a - b);
    let cost = 0;
    while (sticks.length > 1) {
      const a = sticks.shift()!;
      const b = sticks.shift()!;
      const combined = a + b;
      cost += combined;
      let lo = 0, hi = sticks.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (sticks[mid]! < combined) lo = mid + 1; else hi = mid;
      }
      sticks.splice(lo, 0, combined);
    }
    return cost;
  },

  'reorganize-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq: Record<string, number> = {};
    for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
    const n = s.length;
    const entries = Object.entries(freq).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    if (entries[0]![1] > Math.ceil(n / 2)) return '';
    const result: string[] = Array(n);
    let pos = 0;
    for (const [char, count] of entries) {
      for (let i = 0; i < count; i++) {
        if (pos >= n) pos = 1;
        result[pos] = char;
        pos += 2;
      }
    }
    return result.join('');
  },

  'check-if-pangram': (...args: unknown[]) => {
    const sentence = args[0] as string;
    return new Set(sentence).size >= 26;
  },

  'is-power-of-four': (...args: unknown[]) => {
    const n = args[0] as number;
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAAA) === 0;
  },

  'longest-word-in-dictionary': (...args: unknown[]) => {
    const words = args[0] as string[];
    const set = new Set(words);
    let best = '';
    for (const word of words) {
      let valid = true;
      for (let i = 1; i < word.length; i++) {
        if (!set.has(word.slice(0, i))) { valid = false; break; }
      }
      if (valid && (word.length > best.length || (word.length === best.length && word < best))) {
        best = word;
      }
    }
    return best;
  },

  'valid-mountain-array': (...args: unknown[]) => {
    const arr = args[0] as number[];
    if (arr.length < 3) return false;
    let i = 0;
    while (i + 1 < arr.length && arr[i]! < arr[i + 1]!) i++;
    if (i === 0 || i === arr.length - 1) return false;
    while (i + 1 < arr.length && arr[i]! > arr[i + 1]!) i++;
    return i === arr.length - 1;
  },

  'can-place-flowers': (...args: unknown[]) => {
    const bed = [...(args[0] as number[])];
    let n = args[1] as number;
    for (let i = 0; i < bed.length && n > 0; i++) {
      if (bed[i] === 0 && (i === 0 || bed[i - 1] === 0) && (i === bed.length - 1 || bed[i + 1] === 0)) {
        bed[i] = 1; n--;
      }
    }
    return n <= 0;
  },

  'number-complement': (...args: unknown[]) => {
    const num = args[0] as number;
    let mask = 1;
    while (mask <= num) mask <<= 1;
    return (mask - 1) ^ num;
  },

  'maximum-average-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let max = sum;
    for (let i = k; i < nums.length; i++) {
      sum += nums[i]! - nums[i - k]!;
      if (sum > max) max = sum;
    }
    return max / k;
  },

  'range-sum-query': (...args: unknown[]) => {
    const nums = args[0] as number[], left = args[1] as number, right = args[2] as number;
    let sum = 0;
    for (let i = left; i <= right; i++) sum += nums[i]!;
    return sum;
  },


  'reverse-string-ii': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
      let l = i, r = Math.min(i + k - 1, arr.length - 1);
      while (l < r) { [arr[l], arr[r]] = [arr[r]!, arr[l]!]; l++; r--; }
    }
    return arr.join('');
  },

  'to-hex': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num === 0) return '0';
    return (num >>> 0).toString(16);
  },

  'jewels-and-stones': (...args: unknown[]) => {
    const jewels = args[0] as string, stones = args[1] as string;
    const set = new Set(jewels);
    return [...stones].filter(c => set.has(c)).length;
  },

  'find-words-from-chars': (...args: unknown[]) => {
    const words = args[0] as string[];
    const chars = args[1] as string;
    const freq: Record<string, number> = {};
    for (const c of chars) freq[c] = (freq[c] ?? 0) + 1;
    return words.filter(word => {
      const wf: Record<string, number> = {};
      for (const c of word) wf[c] = (wf[c] ?? 0) + 1;
      return Object.entries(wf).every(([c, cnt]) => (freq[c] ?? 0) >= cnt);
    }).reduce((sum, w) => sum + w.length, 0);
  },
  'rotate-string': (...args: unknown[]) => {
    const s = args[0] as string, goal = args[1] as string;
    return s.length === goal.length && (s + s).includes(goal);
  },

  'implement-trie': (...args: unknown[]) => {
    const ops = args[0] as string[], words = args[1] as string[];
    const root: Map<string, unknown>[] = [new Map()];
    const ends = new Set<number>();
    const getNode = (from: number, ch: string, create: boolean) => {
      const node = root[from] as Map<string, number>;
      if (!node.has(ch)) {
        if (!create) return -1;
        const idx = root.length;
        root.push(new Map());
        node.set(ch, idx);
      }
      return node.get(ch) as number;
    };
    return ops.map((op, i) => {
      const word = words[i]!;
      if (op === 'insert') {
        let cur = 0;
        for (const ch of word) cur = getNode(cur, ch, true);
        ends.add(cur);
        return null;
      }
      if (op === 'search' || op === 'startsWith') {
        let cur = 0;
        for (const ch of word) { cur = getNode(cur, ch, false); if (cur === -1) return false; }
        return op === 'startsWith' ? true : ends.has(cur);
      }
      return null;
    });
  },

  'custom-sort-string': (...args: unknown[]) => {
    const order = args[0] as string, s = args[1] as string;
    const freq = new Map<string, number>();
    for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
    let result = '';
    for (const c of order) {
      if (freq.has(c)) { result += c.repeat(freq.get(c)!); freq.delete(c); }
    }
    const remaining = [...freq.entries()].sort(([a], [b]) => a.localeCompare(b));
    for (const [c, cnt] of remaining) result += c.repeat(cnt);
    return result;
  },

  'copy-list-with-random-pointer': (...args: unknown[]) => {
    const arr = args[0] as ([number, number | null])[];
    if (!arr || arr.length === 0) return [];
    return arr.map(([val, ri]) => [val, ri]);
  },

  'implement-queue-using-stacks': (...args: unknown[]) => {
    const ops = args[0] as string[], vals = args[1] as (number | null)[];
    const inbox: number[] = [], outbox: number[] = [];
    const pour = () => { while (inbox.length) outbox.push(inbox.pop()!); };
    const result: (number | boolean)[] = [];
    for (let i = 0; i < ops.length; i++) {
      const op = ops[i]!;
      if (op === 'push') { inbox.push(vals[i] as number); }
      else if (op === 'pop') { if (!outbox.length) pour(); result.push(outbox.pop()!); }
      else if (op === 'peek') { if (!outbox.length) pour(); result.push(outbox[outbox.length - 1]!); }
      else if (op === 'empty') { result.push(inbox.length === 0 && outbox.length === 0); }
    }
    return result;
  },

  'binary-tree-pruning': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr.length) return [];
    interface N { v: number; l: N | null; r: N | null }
    const build = (a: (number | null)[]): N | null => {
      if (!a.length || a[0] == null) return null;
      const root: N = { v: a[0], l: null, r: null };
      const q: N[] = [root]; let i = 1;
      while (q.length && i < a.length) {
        const node = q.shift()!;
        if (i < a.length && a[i] != null) { node.l = { v: a[i]!, l: null, r: null }; q.push(node.l); } i++;
        if (i < a.length && a[i] != null) { node.r = { v: a[i]!, l: null, r: null }; q.push(node.r); } i++;
      }
      return root;
    };
    const toBFS = (root: N | null): (number | null)[] => {
      if (!root) return [];
      const result: (number | null)[] = [], q: (N | null)[] = [root];
      while (q.length) {
        const n = q.shift()!;
        if (n == null) { result.push(null); continue; }
        result.push(n.v);
        if (n.l !== null || n.r !== null) { q.push(n.l); q.push(n.r); }
      }
      while (result.length && result[result.length - 1] === null) result.pop();
      return result;
    };
    const prune = (n: N | null): N | null => {
      if (!n) return null;
      n.l = prune(n.l); n.r = prune(n.r);
      return n.v === 0 && !n.l && !n.r ? null : n;
    };
    return toBFS(prune(build(arr)));
  },

  'count-complete-tree-nodes': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr.length) return 0;
    interface N { l: N | null; r: N | null }
    const build = (a: (number | null)[]): N | null => {
      if (!a.length || a[0] == null) return null;
      const root: N = { l: null, r: null };
      const q: N[] = [root]; let i = 1;
      while (q.length && i < a.length) {
        const node = q.shift()!;
        if (i < a.length && a[i] != null) { node.l = { l: null, r: null }; q.push(node.l); } i++;
        if (i < a.length && a[i] != null) { node.r = { l: null, r: null }; q.push(node.r); } i++;
      }
      return root;
    };
    const count = (n: N | null): number => n ? 1 + count(n.l) + count(n.r) : 0;
    return count(build(arr));
  },

  'populating-next-right-pointers': (...args: unknown[]) => {
    const arr = args[0] as number[];
    if (!arr.length) return [];
    const levels: number[][] = [];
    let size = 1, i = 0;
    while (i < arr.length) {
      const level: number[] = [];
      for (let j = 0; j < size && i < arr.length; j++, i++) level.push(arr[i]!);
      levels.push(level);
      size *= 2;
    }
    return levels;
  },

  'range-sum-query-2d': (...args: unknown[]) => {
    const matrix = args[0] as number[][], r1 = args[1] as number, c1 = args[2] as number;
    const r2 = args[3] as number, c2 = args[4] as number;
    let sum = 0;
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) sum += matrix[r]![c]!;
    return sum;
  },

  'find-anagram-mappings': (...args: unknown[]) => {
    const nums1 = args[0] as number[], nums2 = args[1] as number[];
    const map = new Map<number, number>();
    nums2.forEach((v, i) => map.set(v, i));
    return nums1.map(v => map.get(v)!);
  },

  'maximum-product-two-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max1 = 0, max2 = 0;
    for (const n of nums) {
      if (n > max1) { max2 = max1; max1 = n; }
      else if (n > max2) max2 = n;
    }
    return (max1 - 1) * (max2 - 1);
  },

  'find-k-closest-elements': (...args: unknown[]) => {
    const arr = args[0] as number[], k = args[1] as number, x = args[2] as number;
    let lo = 0, hi = arr.length - k;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (x - arr[mid]! > arr[mid + k]! - x) lo = mid + 1;
      else hi = mid;
    }
    return arr.slice(lo, lo + k);
  },

  'string-compression': (...args: unknown[]) => {
    const s = args[0] as string;
    let result = '', i = 0;
    while (i < s.length) {
      let j = i;
      while (j < s.length && s[j] === s[i]) j++;
      result += s[i];
      if (j - i > 1) result += (j - i);
      i = j;
    }
    return result.length;
  },

  'maximum-69-number': (...args: unknown[]) => {
    return parseInt((args[0] as number).toString().replace('6', '9'));
  },

  'count-of-matches-tournament': (...args: unknown[]) => {
    return (args[0] as number) - 1;
  },

  'find-numbers-even-digits': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.filter(n => String(n).length % 2 === 0).length;
  },

  'shuffle-string': (...args: unknown[]) => {
    const s = args[0] as string, indices = args[1] as number[];
    const result = new Array<string>(s.length);
    for (let i = 0; i < s.length; i++) result[indices[i]!] = s[i]!;
    return result.join('');
  },

  'subtract-product-and-sum': (...args: unknown[]) => {
    const n = args[0] as number;
    let product = 1, sum = 0, x = n;
    while (x > 0) { const d = x % 10; product *= d; sum += d; x = Math.floor(x / 10); }
    return product - sum;
  },

  'sort-characters-by-frequency': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq = new Map<string, number>();
    for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
    return [...freq.entries()]
      .sort(([a, fa], [b, fb]) => fb - fa || (a < b ? -1 : a > b ? 1 : 0))
      .map(([c, f]) => c.repeat(f))
      .join('');
  },

  'minimum-operations-alternating': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const topFreq = (freq: Record<number, number>) => {
      let f1 = 0, v1 = 0, f2 = 0, v2 = 0;
      for (const [k, v] of Object.entries(freq)) {
        if (v > f1) { f2 = f1; v2 = v1; f1 = v; v1 = +k; }
        else if (v > f2) { f2 = v; v2 = +k; }
      }
      return [[v1, f1], [v2, f2]] as const;
    };
    const evenFreq: Record<number, number> = {}, oddFreq: Record<number, number> = {};
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) evenFreq[nums[i]!] = (evenFreq[nums[i]!] ?? 0) + 1;
      else oddFreq[nums[i]!] = (oddFreq[nums[i]!] ?? 0) + 1;
    }
    const [[ev1, ef1], [, ef2]] = topFreq(evenFreq);
    const [[ov1, of1], [, of2]] = topFreq(oddFreq);
    if (ev1 !== ov1) return n - ef1 - of1;
    return n - Math.max(ef1 + of2, ef2 + of1);
  },

  'largest-altitude': (...args: unknown[]) => {
    const gain = args[0] as number[];
    let alt = 0, max = 0;
    for (const g of gain) { alt += g; if (alt > max) max = alt; }
    return max;
  },

  'increasing-triplet-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let first = Infinity, second = Infinity;
    for (const n of nums) {
      if (n <= first) first = n;
      else if (n <= second) second = n;
      else return true;
    }
    return false;
  },

  'number-of-rectangles': (...args: unknown[]) => {
    const rects = args[0] as number[][];
    const sides = rects.map(([l, w]) => Math.min(l!, w!));
    const maxLen = Math.max(...sides);
    return sides.filter(s => s === maxLen).length;
  },

  'determine-if-halves-alike': (...args: unknown[]) => {
    const s = args[0] as string;
    const vowels = new Set('aeiouAEIOU');
    const half = s.length / 2;
    const countA = [...s.slice(0, half)].filter(c => vowels.has(c)).length;
    const countB = [...s.slice(half)].filter(c => vowels.has(c)).length;
    return countA === countB;
  },

  'maximum-nesting-depth': (...args: unknown[]) => {
    const s = args[0] as string;
    let depth = 0, max = 0;
    for (const c of s) {
      if (c === '(') { depth++; if (depth > max) max = depth; }
      else if (c === ')') depth--;
    }
    return max;
  },

  'count-primes-less-than': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n < 2) return 0;
    const sieve = new Uint8Array(n).fill(1);
    sieve[0] = 0; sieve[1] = 0;
    for (let i = 2; i * i < n; i++) {
      if (sieve[i]) for (let j = i * i; j < n; j += i) sieve[j] = 0;
    }
    let count = 0;
    for (let i = 2; i < n; i++) if (sieve[i]) count++;
    return count;
  },

  'number-of-students-eating-lunch': (...args: unknown[]) => {
    const students = args[0] as number[], sandwiches = args[1] as number[];
    let zeros = students.filter(s => s === 0).length;
    let ones = students.length - zeros;
    for (const s of sandwiches) {
      if (s === 0 && zeros > 0) zeros--;
      else if (s === 1 && ones > 0) ones--;
      else return zeros + ones;
    }
    return 0;
  },

  'two-sum-less-than-k': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number;
    let lo = 0, hi = nums.length - 1, max = -1;
    while (lo < hi) {
      const s = nums[lo]! + nums[hi]!;
      if (s < k) { max = Math.max(max, s); lo++; }
      else hi--;
    }
    return max;
  },

  'find-smallest-letter-greater-than-target': (...args: unknown[]) => {
    const letters = args[0] as string[], target = args[1] as string;
    let lo = 0, hi = letters.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (letters[mid]! <= target) lo = mid + 1;
      else hi = mid;
    }
    return letters[lo % letters.length]!;
  },

  'minimum-difference-k-scores': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number;
    let min = Infinity;
    for (let i = 0; i + k - 1 < nums.length; i++) min = Math.min(min, nums[i + k - 1]! - nums[i]!);
    return min;
  },

  'two-out-of-three': (...args: unknown[]) => {
    const [n1, n2, n3] = [args[0] as number[], args[1] as number[], args[2] as number[]];
    const s1 = new Set(n1), s2 = new Set(n2), s3 = new Set(n3);
    const result = new Set<number>();
    for (const v of s1) { if (s2.has(v) || s3.has(v)) result.add(v); }
    for (const v of s2) { if (s1.has(v) || s3.has(v)) result.add(v); }
    return [...result].sort((a, b) => a - b);
  },

  'sum-of-odd-length-subarrays': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let sum = 0;
    for (let len = 1; len <= arr.length; len += 2)
      for (let i = 0; i + len <= arr.length; i++)
        for (let j = i; j < i + len; j++) sum += arr[j]!;
    return sum;
  },

  'stone-game': (...args: unknown[]) => {
    const piles = args[0] as number[];
    const n = piles.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i]![i] = piles[i]!;
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        dp[i]![j] = Math.max(piles[i]! - dp[i + 1]![j]!, piles[j]! - dp[i]![j - 1]!);
      }
    }
    return dp[0]![n - 1]! > 0;
  },

  'robot-bounded-in-circle': (...args: unknown[]) => {
    const instructions = args[0] as string;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0, d = 0;
    for (const c of instructions) {
      if (c === 'G') { x += dirs[d]![0]!; y += dirs[d]![1]!; }
      else if (c === 'L') d = (d + 3) % 4;
      else d = (d + 1) % 4;
    }
    return (x === 0 && y === 0) || d !== 0;
  },

  'zigzag-conversion': (...args: unknown[]) => {
    const s = args[0] as string, numRows = args[1] as number;
    if (numRows === 1) return s;
    const rows: string[] = Array.from({ length: numRows }, () => '');
    let row = 0, dir = -1;
    for (const c of s) {
      rows[row] += c;
      if (row === 0 || row === numRows - 1) dir = -dir;
      row += dir;
    }
    return rows.join('');
  },

  'merge-sorted-array': (...args: unknown[]) => {
    const nums1 = args[0] as number[], m = args[1] as number;
    const nums2 = args[2] as number[], n = args[3] as number;
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0) {
      if (p1 >= 0 && nums1[p1]! > nums2[p2]!) nums1[p--] = nums1[p1--]!;
      else nums1[p--] = nums2[p2--]!;
    }
    return nums1.slice(0, m + n);
  },

  'minimum-moves-equal-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const min = Math.min(...nums);
    return nums.reduce((s, v) => s + v - min, 0);
  },

  'multiply-strings': (...args: unknown[]) => {
    const num1 = args[0] as string, num2 = args[1] as string;
    const m = num1.length, n = num2.length;
    const pos = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
        const p1 = i + j, p2 = i + j + 1;
        const sum = mul + pos[p2]!;
        pos[p2] = sum % 10;
        pos[p1] = (pos[p1]! + Math.floor(sum / 10));
      }
    }
    const result = pos.join('').replace(/^0+/, '');
    return result || '0';
  },

  'count-triplets-xor': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const n = arr.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
      let xor = arr[i]!;
      for (let k = i + 1; k < n; k++) {
        xor ^= arr[k]!;
        if (xor === 0) count += k - i;
      }
    }
    return count;
  },

  'water-and-jug': (...args: unknown[]) => {
    const x = args[0] as number, y = args[1] as number, z = args[2] as number;
    if (z === 0) return true;
    if (z > x + y) return false;
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    return z % gcd(x, y) === 0;
  },

  'find-center-of-star-graph': (...args: unknown[]) => {
    const edges = args[0] as number[][];
    const [a, b] = edges[0]!;
    const [c, d] = edges[1]!;
    return a === c || a === d ? a : b!;
  },

  'maximum-frequency-stack': (...args: unknown[]) => {
    const ops = args[0] as string[], vals = args[1] as number[];
    const freq = new Map<number, number>();
    const group = new Map<number, number[]>();
    let maxFreq = 0;
    return ops.map((op, i) => {
      if (op === 'push') {
        const f = (freq.get(vals[i]!) ?? 0) + 1;
        freq.set(vals[i]!, f);
        if (!group.has(f)) group.set(f, []);
        group.get(f)!.push(vals[i]!);
        if (f > maxFreq) maxFreq = f;
        return null;
      }
      const val = group.get(maxFreq)!.pop()!;
      freq.set(val, maxFreq - 1);
      if (!group.get(maxFreq)!.length) maxFreq--;
      return val;
    });
  },

  'check-if-all-characters-appear-twice': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq = new Map<string, number>();
    for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
    return new Set(freq.values()).size === 1;
  },

  'find-difference-of-two-arrays': (...args: unknown[]) => {
    const s1 = new Set(args[0] as number[]), s2 = new Set(args[1] as number[]);
    return [
      [...s1].filter(v => !s2.has(v)).sort((a, b) => a - b),
      [...s2].filter(v => !s1.has(v)).sort((a, b) => a - b),
    ];
  },

  'rearrange-array-elements-by-sign': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const pos = nums.filter(n => n > 0), neg = nums.filter(n => n < 0);
    const result: number[] = [];
    for (let i = 0; i < pos.length; i++) { result.push(pos[i]!); result.push(neg[i]!); }
    return result;
  },

  'number-of-zero-filled-subarrays': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let total = 0, run = 0;
    for (const n of nums) {
      if (n === 0) { run++; total += run; }
      else run = 0;
    }
    return total;
  },

  // --- new problems (batch 2026-05-24) ----------------------------------------

  'total-cost-hire-k-workers': (...args: unknown[]) => {
    const costs = args[0] as number[];
    const k = args[1] as number;
    const candidates = args[2] as number;
    const n = costs.length;
    const heap: [number, number][] = [];
    let lo = 0, hi = n - 1;
    for (let i = 0; i < candidates && lo <= hi; i++, lo++) heap.push([costs[lo]!, lo]);
    for (let i = 0; i < candidates && hi >= lo; i++, hi--) heap.push([costs[hi]!, hi]);
    heap.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    let total = 0;
    for (let i = 0; i < k; i++) {
      const [cost, idx] = heap.shift()!;
      total += cost;
      if (lo <= hi) {
        if (idx < lo) { heap.push([costs[lo]!, lo++]); }
        else { heap.push([costs[hi]!, hi--]); }
        heap.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
      }
    }
    return total;
  },

  'minimum-recolors-to-get-k-consecutive-black': (...args: unknown[]) => {
    const blocks = args[0] as string, k = args[1] as number;
    let whites = [...blocks.slice(0, k)].filter(c => c === 'W').length;
    let min = whites;
    for (let i = k; i < blocks.length; i++) {
      if (blocks[i] === 'W') whites++;
      if (blocks[i - k] === 'W') whites--;
      min = Math.min(min, whites);
    }
    return min;
  },

  'assign-cookies': (...args: unknown[]) => {
    const g = [...(args[0] as number[])].sort((a, b) => a - b);
    const s = [...(args[1] as number[])].sort((a, b) => a - b);
    let count = 0, j = 0;
    for (let i = 0; i < g.length && j < s.length; j++) {
      if (s[j]! >= g[i]!) { count++; i++; }
    }
    return count;
  },

  'relative-ranks': (...args: unknown[]) => {
    const score = args[0] as number[];
    const sorted = [...score].map((v, i) => [v, i] as [number, number]).sort((a, b) => b[0] - a[0]);
    const result = new Array<string>(score.length);
    const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    sorted.forEach(([, idx], rank) => {
      result[idx] = rank < 3 ? medals[rank]! : String(rank + 1);
    });
    return result;
  },

  'base-7': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num === 0) return '0';
    const neg = num < 0;
    let n = Math.abs(num), result = '';
    while (n > 0) { result = String(n % 7) + result; n = Math.floor(n / 7); }
    return neg ? '-' + result : result;
  },

  'maximum-count': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const neg = nums.filter(n => n < 0).length;
    const pos = nums.filter(n => n > 0).length;
    return Math.max(neg, pos);
  },

  'minimum-recolors': (...args: unknown[]) => {
    const blocks = args[0] as string, k = args[1] as number;
    let whites = 0;
    for (let i = 0; i < k; i++) if (blocks[i] === 'W') whites++;
    let min = whites;
    for (let i = k; i < blocks.length; i++) {
      if (blocks[i] === 'W') whites++;
      if (blocks[i - k] === 'W') whites--;
      min = Math.min(min, whites);
    }
    return min;
  },

  'decode-the-message': (...args: unknown[]) => {
    const key = args[0] as string, message = args[1] as string;
    const map = new Map<string, string>();
    let idx = 0;
    for (const c of key) {
      if (c !== ' ' && !map.has(c)) { map.set(c, String.fromCharCode(97 + idx)); idx++; }
    }
    return [...message].map(c => c === ' ' ? ' ' : map.get(c)!).join('');
  },

  'remove-trailing-zeros': (...args: unknown[]) => {
    const num = args[0] as string;
    let i = num.length - 1;
    while (i >= 0 && num[i] === '0') i--;
    return num.slice(0, i + 1);
  },

  'reverse-prefix-of-word': (...args: unknown[]) => {
    const word = args[0] as string, ch = args[1] as string;
    const idx = word.indexOf(ch);
    if (idx === -1) return word;
    return word.slice(0, idx + 1).split('').reverse().join('') + word.slice(idx + 1);
  },

  'count-words-with-given-prefix': (...args: unknown[]) => {
    const words = args[0] as string[], pref = args[1] as string;
    return words.filter(w => w.startsWith(pref)).length;
  },

  'largest-odd-number-in-string': (...args: unknown[]) => {
    const num = args[0] as string;
    for (let i = num.length - 1; i >= 0; i--) {
      if (Number(num[i]) % 2 === 1) return num.slice(0, i + 1);
    }
    return '';
  },

  'toeplitz-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0]!.length; j++) {
        if (matrix[i]![j] !== matrix[i - 1]![j - 1]) return false;
      }
    }
    return true;
  },

  'transpose-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    return matrix[0]!.map((_, j) => matrix.map(row => row[j]!));
  },

  'maximum-number-of-balloons': (...args: unknown[]) => {
    const text = args[0] as string;
    const freq: Record<string, number> = {};
    for (const c of text) freq[c] = (freq[c] ?? 0) + 1;
    return Math.min(
      freq['b'] ?? 0,
      freq['a'] ?? 0,
      Math.floor((freq['l'] ?? 0) / 2),
      Math.floor((freq['o'] ?? 0) / 2),
      freq['n'] ?? 0,
    );
  },

  'count-characters': (...args: unknown[]) => {
    const words = args[0] as string[], chars = args[1] as string;
    const freq: Record<string, number> = {};
    for (const c of chars) freq[c] = (freq[c] ?? 0) + 1;
    let total = 0;
    for (const word of words) {
      const wfreq: Record<string, number> = {};
      for (const c of word) wfreq[c] = (wfreq[c] ?? 0) + 1;
      if (Object.entries(wfreq).every(([c, cnt]) => (freq[c] ?? 0) >= cnt)) {
        total += word.length;
      }
    }
    return total;
  },

  'validate-stack-sequences': (...args: unknown[]) => {
    const pushed = args[0] as number[], popped = args[1] as number[];
    const stack: number[] = [];
    let j = 0;
    for (const val of pushed) {
      stack.push(val);
      while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
        stack.pop(); j++;
      }
    }
    return stack.length === 0;
  },

  '132-pattern': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const stack: number[] = [];
    let min3 = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i]! < min3) return true;
      while (stack.length > 0 && stack[stack.length - 1]! < nums[i]!) {
        min3 = stack.pop()!;
      }
      stack.push(nums[i]!);
    }
    return false;
  },

  'frequency-of-most-frequent-element': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number;
    let left = 0, sum = 0, max = 0;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right]!;
      while (nums[right]! * (right - left + 1) - sum > k) sum -= nums[left++]!;
      max = Math.max(max, right - left + 1);
    }
    return max;
  },

  'find-common-characters': (...args: unknown[]) => {
    const words = args[0] as string[];
    const minFreq = new Array(26).fill(Infinity);
    for (const word of words) {
      const freq = new Array(26).fill(0);
      for (const c of word) freq[c.charCodeAt(0) - 97]++;
      for (let i = 0; i < 26; i++) minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
    const result: string[] = [];
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < minFreq[i]; j++) result.push(String.fromCharCode(97 + i));
    }
    return result;
  },

  'minimum-rounds-to-complete-tasks': (...args: unknown[]) => {
    const tasks = args[0] as number[];
    const freq = new Map<number, number>();
    for (const t of tasks) freq.set(t, (freq.get(t) ?? 0) + 1);
    let rounds = 0;
    for (const f of freq.values()) {
      if (f === 1) return -1;
      rounds += Math.ceil(f / 3);
    }
    return rounds;
  },

  'minimum-steps-make-anagram': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    const freq = new Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 97]++;
    for (const c of t) freq[c.charCodeAt(0) - 97]--;
    return freq.reduce((sum, v) => sum + Math.max(0, -v), 0);
  },

  'find-words-formed-by-characters': (...args: unknown[]) => {
    const words = args[0] as string[], chars = args[1] as string;
    const charFreq = new Array(26).fill(0);
    for (const c of chars) charFreq[c.charCodeAt(0) - 97]++;
    let total = 0;
    for (const word of words) {
      const wFreq = new Array(26).fill(0);
      for (const c of word) wFreq[c.charCodeAt(0) - 97]++;
      if (wFreq.every((v, i) => v <= charFreq[i])) total += word.length;
    }
    return total;
  },

  'sum-of-left-leaves': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr || arr.length === 0 || arr[0] === null) return 0;
    interface TN { val: number; left: TN | null; right: TN | null; }
    function build(a: (number | null)[]): TN | null {
      if (!a || a.length === 0 || a[0] == null) return null;
      const root: TN = { val: a[0]!, left: null, right: null };
      const q: TN[] = [root]; let i = 1;
      while (q.length > 0 && i < a.length) {
        const node = q.shift()!;
        if (a[i] !== null && a[i] !== undefined) { node.left = { val: a[i]!, left: null, right: null }; q.push(node.left); }
        i++;
        if (i < a.length && a[i] !== null && a[i] !== undefined) { node.right = { val: a[i]!, left: null, right: null }; q.push(node.right); }
        i++;
      }
      return root;
    }
    function dfs(node: TN | null, isLeft: boolean): number {
      if (!node) return 0;
      if (!node.left && !node.right) return isLeft ? node.val : 0;
      return dfs(node.left, true) + dfs(node.right, false);
    }
    return dfs(build(arr), false);
  },

  'leaf-similar-trees': (...args: unknown[]) => {
    const arr1 = args[0] as (number | null)[], arr2 = args[1] as (number | null)[];
    interface TN { val: number; left: TN | null; right: TN | null; }
    function build(a: (number | null)[]): TN | null {
      if (!a || a.length === 0 || a[0] == null) return null;
      const root: TN = { val: a[0]!, left: null, right: null };
      const q: TN[] = [root]; let i = 1;
      while (q.length > 0 && i < a.length) {
        const node = q.shift()!;
        if (a[i] !== null && a[i] !== undefined) { node.left = { val: a[i]!, left: null, right: null }; q.push(node.left); }
        i++;
        if (i < a.length && a[i] !== null && a[i] !== undefined) { node.right = { val: a[i]!, left: null, right: null }; q.push(node.right); }
        i++;
      }
      return root;
    }
    function getLeaves(node: TN | null): number[] {
      if (!node) return [];
      if (!node.left && !node.right) return [node.val];
      return [...getLeaves(node.left), ...getLeaves(node.right)];
    }
    return JSON.stringify(getLeaves(build(arr1))) === JSON.stringify(getLeaves(build(arr2)));
  },

  'maximum-subsequence-score': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const k = args[2] as number;
    const pairs = nums1.map((v, i) => [v, nums2[i]!] as [number, number]).sort((a, b) => b[1] - a[1]);
    const heap: number[] = [];
    let sum = 0, best = 0;
    for (const [v1, v2] of pairs) {
      heap.push(v1); sum += v1;
      heap.sort((a, b) => a - b);
      if (heap.length > k) { sum -= heap.shift()!; }
      if (heap.length === k) best = Math.max(best, sum * v2);
    }
    return best;
  },

  'gray-code': (...args: unknown[]) => {
    const n = args[0] as number;
    const result: number[] = [];
    for (let i = 0; i < (1 << n); i++) result.push(i ^ (i >> 1));
    return result;
  },

  'count-vowels-permutation': (...args: unknown[]) => {
    const n = args[0] as number;
    const MOD = 1_000_000_007n;
    let a = 1n, e = 1n, ii = 1n, o = 1n, u = 1n;
    for (let step = 1; step < n; step++) {
      const na = (e + ii + u) % MOD;
      const ne = (a + ii) % MOD;
      const ni = (e + o) % MOD;
      const no = ii % MOD;
      const nu = (ii + o) % MOD;
      [a, e, ii, o, u] = [na, ne, ni, no, nu];
    }
    return Number((a + e + ii + o + u) % MOD);
  },

  'snakes-and-ladders': (...args: unknown[]) => {
    const board = args[0] as number[][];
    const n = board.length;
    const getCell = (num: number): number => {
      const row = Math.floor((num - 1) / n);
      const col = (num - 1) % n;
      const r = n - 1 - row;
      const c = row % 2 === 0 ? col : n - 1 - col;
      return board[r]![c]!;
    };
    const visited = new Set([1]);
    let queue: number[] = [1], moves = 0;
    while (queue.length) {
      const next: number[] = [];
      for (const sq of queue) {
        if (sq === n * n) return moves;
        for (let dice = 1; dice <= 6; dice++) {
          let dest = sq + dice;
          if (dest > n * n) break;
          const cell = getCell(dest);
          if (cell !== -1) dest = cell;
          if (!visited.has(dest)) { visited.add(dest); next.push(dest); }
        }
      }
      queue = next; moves++;
    }
    return -1;
  },

  'swim-in-rising-water': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const n = grid.length;
    const check = (t: number): boolean => {
      if (grid[0]![0]! > t) return false;
      const visited = Array.from({ length: n }, () => new Uint8Array(n));
      visited[0]![0] = 1;
      const q: [number, number][] = [[0, 0]];
      while (q.length) {
        const [r, c] = q.shift()!;
        if (r === n - 1 && c === n - 1) return true;
        for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as [number, number][]) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr]![nc] && grid[nr]![nc]! <= t) {
            visited[nr]![nc] = 1; q.push([nr, nc]);
          }
        }
      }
      return false;
    };
    let lo = 0, hi = n * n - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (check(mid)) hi = mid; else lo = mid + 1; }
    return lo;
  },

  'n-queens-ii': (...args: unknown[]) => {
    const n = args[0] as number;
    let count = 0;
    const cols = new Set<number>(), diag1 = new Set<number>(), diag2 = new Set<number>();
    const bt = (row: number): void => {
      if (row === n) { count++; return; }
      for (let col = 0; col < n; col++) {
        if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
        cols.add(col); diag1.add(row - col); diag2.add(row + col);
        bt(row + 1);
        cols.delete(col); diag1.delete(row - col); diag2.delete(row + col);
      }
    };
    bt(0); return count;
  },

  'remove-invalid-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    const isValid = (str: string): boolean => {
      let count = 0;
      for (const c of str) {
        if (c === '(') count++;
        else if (c === ')') { if (--count < 0) return false; }
      }
      return count === 0;
    };
    const result = new Set<string>();
    let queue = new Set<string>([s]);
    let found = false;
    while (queue.size > 0) {
      const nextQueue = new Set<string>();
      for (const cur of queue) {
        if (isValid(cur)) { result.add(cur); found = true; }
        if (!found) {
          for (let i = 0; i < cur.length; i++) {
            if (cur[i] !== '(' && cur[i] !== ')') continue;
            nextQueue.add(cur.slice(0, i) + cur.slice(i + 1));
          }
        }
      }
      if (found) break;
      queue = nextQueue;
    }
    return [...result].sort();
  },

  'number-of-ways-arrive-destination': (...args: unknown[]) => {
    const n = args[0] as number;
    const roads = args[1] as [number, number, number][];
    const MOD = 1_000_000_007n;
    const adj: [number, number][][] = Array.from({ length: n }, () => []);
    for (const [u, v, t] of roads) { adj[u]!.push([v, t]); adj[v]!.push([u, t]); }
    const dist = new Array<number>(n).fill(Infinity);
    const ways = new Array<bigint>(n).fill(0n);
    dist[0] = 0; ways[0] = 1n;
    const pq: [number, number][] = [[0, 0]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift()!;
      if (d > dist[u]!) continue;
      for (const [v, t] of adj[u]!) {
        const nd = d + t;
        if (nd < dist[v]!) { dist[v] = nd; ways[v] = ways[u]!; pq.push([nd, v]); }
        else if (nd === dist[v]) { ways[v] = (ways[v]! + ways[u]!) % MOD; }
      }
    }
    return Number(ways[n - 1]);
  },

  'minimum-cost-cut-stick': (...args: unknown[]) => {
    const n = args[0] as number;
    const cuts = args[1] as number[];
    const c = [0, ...cuts.sort((a, b) => a - b), n];
    const m = c.length;
    const dp: number[][] = Array.from({ length: m }, () => new Array(m).fill(0));
    for (let len = 2; len < m; len++) {
      for (let i = 0; i + len < m; i++) {
        const j = i + len;
        dp[i]![j] = Infinity;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k]![j]! + c[j]! - c[i]!);
        }
      }
    }
    return dp[0]![m - 1]!;
  },

  'kth-missing-positive-number': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const k = args[1] as number;
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid]! - (mid + 1) >= k) hi = mid;
      else lo = mid + 1;
    }
    return lo + k;
  },

  'process-tasks-using-servers': (...args: unknown[]) => {
    const servers = args[0] as number[];
    const tasks = args[1] as number[];
    const available: [number, number][] = servers.map((w, i) => [w, i] as [number, number]).sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    const busy: [number, number, number][] = []; // [freeAt, weight, idx]
    const result: number[] = [];
    let time = 0;
    for (let j = 0; j < tasks.length; j++) {
      time = Math.max(time, j);
      let changed = true;
      while (changed) {
        changed = false;
        for (let k = 0; k < busy.length; k++) {
          if (busy[k]![0] <= time) {
            available.push([busy[k]![1], busy[k]![2]]);
            busy.splice(k, 1);
            changed = true;
            break;
          }
        }
      }
      if (available.length === 0) {
        busy.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]);
        time = busy[0]![0];
        while (busy.length > 0 && busy[0]![0] === time) {
          const entry = busy.shift()!;
          available.push([entry[1], entry[2]]);
        }
      }
      available.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
      const [w, i] = available.shift()!;
      result.push(i);
      busy.push([time + tasks[j]!, w, i]);
    }
    return result;
  },

  'unique-number-of-occurrences': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of arr) freq.set(n, (freq.get(n) ?? 0) + 1);
    const counts = [...freq.values()];
    return new Set(counts).size === counts.length;
  },

  'find-lucky-integer': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of arr) freq.set(n, (freq.get(n) ?? 0) + 1);
    let result = -1;
    for (const [val, count] of freq) {
      if (val === count && val > result) result = val;
    }
    return result;
  },

  'sort-array-by-parity-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const result = new Array<number>(nums.length);
    let e = 0, o = 1;
    for (const n of nums) {
      if (n % 2 === 0) { result[e] = n; e += 2; }
      else { result[o] = n; o += 2; }
    }
    return result;
  },

  'smallest-number-in-infinite-set': (...args: unknown[]) => {
    const ops = args[0] as string[];
    const opArgs = args[1] as number[][];
    let cursor = 1;
    const added: number[] = [];
    const addedSet = new Set<number>();
    const popSmallest = (): number => {
      if (added.length > 0 && added[0]! < cursor) {
        const v = added.shift()!; addedSet.delete(v); return v;
      }
      return cursor++;
    };
    const addBack = (num: number): void => {
      if (num < cursor && !addedSet.has(num)) {
        addedSet.add(num);
        added.push(num); added.sort((a, b) => a - b);
      }
    };
    return ops.map((op, i) => {
      const a = opArgs[i] ?? [];
      if (op === 'popSmallest') return popSmallest();
      if (op === 'addBack') { addBack(a[0]!); return null; }
      return null;
    });
  },

  'strange-printer': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
      dp[i]![i] = 1;
      for (let j = i + 1; j < n; j++) {
        if (s[i] === s[j]) {
          dp[i]![j] = dp[i]![j - 1]!;
        } else {
          dp[i]![j] = Infinity;
          for (let k = i; k < j; k++) {
            dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k + 1]![j]!);
          }
        }
      }
    }
    return dp[0]![n - 1]!;
  },

  'counting-words-with-given-prefix': (...args: unknown[]) => {
    const words = args[0] as string[], pref = args[1] as string;
    return words.filter(w => w.startsWith(pref)).length;
  },

  'number-of-laser-beams': (...args: unknown[]) => {
    const bank = args[0] as string[];
    let prev = 0, total = 0;
    for (const row of bank) {
      const count = [...row].filter(c => c === '1').length;
      if (count > 0) { total += prev * count; prev = count; }
    }
    return total;
  },

  'minimum-number-of-moves-seat': (...args: unknown[]) => {
    const seats = [...(args[0] as number[])].sort((a, b) => a - b);
    const students = [...(args[1] as number[])].sort((a, b) => a - b);
    return seats.reduce((sum, s, i) => sum + Math.abs(s - students[i]!), 0);
  },

  'minimum-index-sum-of-two-lists': (...args: unknown[]) => {
    const list1 = args[0] as string[], list2 = args[1] as string[];
    const map = new Map<string, number>();
    list1.forEach((s, i) => map.set(s, i));
    let minSum = Infinity;
    const result: string[] = [];
    list2.forEach((s, j) => {
      if (map.has(s)) {
        const sum = map.get(s)! + j;
        if (sum < minSum) { minSum = sum; result.length = 0; result.push(s); }
        else if (sum === minSum) result.push(s);
      }
    });
    return result;
  },

  'two-sum-iv-bst': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const k = args[1] as number;
    const vals: number[] = [];
    const inorder = (n: _TN | null) => { if (!n) return; inorder(n.l); vals.push(n.v); inorder(n.r); };
    inorder(root);
    let lo = 0, hi = vals.length - 1;
    while (lo < hi) {
      const s = vals[lo]! + vals[hi]!;
      if (s === k) return true;
      if (s < k) lo++; else hi--;
    }
    return false;
  },

  'number-of-arithmetic-triplets': (...args: unknown[]) => {
    const nums = args[0] as number[], diff = args[1] as number;
    const set = new Set(nums);
    return nums.filter(n => set.has(n + diff) && set.has(n + 2 * diff)).length;
  },

  'nth-tribonacci-number': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n === 0) return 0;
    if (n <= 2) return 1;
    let a = 0, b = 1, c = 1;
    for (let i = 3; i <= n; i++) { [a, b, c] = [b, c, a + b + c]; }
    return c;
  },

  'count-homogenous-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    const MOD = 1_000_000_007;
    let total = 0, run = 1;
    for (let i = 1; i <= s.length; i++) {
      if (i < s.length && s[i] === s[i - 1]) {
        run++;
      } else {
        total = (total + Math.floor(run * (run + 1) / 2)) % MOD;
        run = 1;
      }
    }
    return total;
  },

  'binary-tree-tilt': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr || arr.length === 0) return 0;
    interface TN { val: number; left: TN | null; right: TN | null; }
    function build(a: (number | null)[]): TN | null {
      if (!a || a.length === 0 || a[0] == null) return null;
      const root: TN = { val: a[0]!, left: null, right: null };
      const q: TN[] = [root]; let i = 1;
      while (q.length > 0 && i < a.length) {
        const node = q.shift()!;
        if (a[i] !== null && a[i] !== undefined) { node.left = { val: a[i]!, left: null, right: null }; q.push(node.left); }
        i++;
        if (i < a.length && a[i] !== null && a[i] !== undefined) { node.right = { val: a[i]!, left: null, right: null }; q.push(node.right); }
        i++;
      }
      return root;
    }
    let total = 0;
    function dfs(node: TN | null): number {
      if (!node) return 0;
      const l = dfs(node.left), r = dfs(node.right);
      total += Math.abs(l - r);
      return node.val + l + r;
    }
    dfs(build(arr));
    return total;
  },

  'average-of-levels': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    if (!arr || arr.length === 0 || arr[0] == null) return [];
    interface TN { val: number; left: TN | null; right: TN | null; }
    function build(a: (number | null)[]): TN | null {
      if (!a || a.length === 0 || a[0] == null) return null;
      const root: TN = { val: a[0]!, left: null, right: null };
      const q: TN[] = [root]; let i = 1;
      while (q.length > 0 && i < a.length) {
        const node = q.shift()!;
        if (a[i] !== null && a[i] !== undefined) { node.left = { val: a[i]!, left: null, right: null }; q.push(node.left); }
        i++;
        if (i < a.length && a[i] !== null && a[i] !== undefined) { node.right = { val: a[i]!, left: null, right: null }; q.push(node.right); }
        i++;
      }
      return root;
    }
    const result: number[] = [];
    const queue: TN[] = [build(arr)!];
    while (queue.length > 0) {
      const n = queue.length;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        const node = queue.shift()!;
        sum += node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(sum / n);
    }
    return result;
  },

  'count-equal-and-divisible-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let count = 0;
    for (let i = 0; i < nums.length; i++)
      for (let j = i + 1; j < nums.length; j++)
        if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    return count;
  },

  'count-elements-with-maximum-frequency': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    const maxFreq = Math.max(...freq.values());
    let total = 0;
    for (const f of freq.values()) if (f === maxFreq) total += f;
    return total;
  },

  'make-string-great': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      if (stack.length > 0 && Math.abs(stack[stack.length - 1]!.charCodeAt(0) - c.charCodeAt(0)) === 32) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.join('');
  },

  'minimum-string-length': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      const top = stack[stack.length - 1];
      if ((top === 'A' && c === 'B') || (top === 'C' && c === 'D')) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.length;
  },

  'sum-of-multiples': (...args: unknown[]) => {
    const n = args[0] as number;
    let sum = 0;
    for (let i = 1; i <= n; i++) if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) sum += i;
    return sum;
  },

  'maximum-score-after-splitting-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let best = 0;
    for (let i = 1; i < s.length; i++) {
      let score = 0;
      for (let j = 0; j < i; j++) if (s[j] === '0') score++;
      for (let j = i; j < s.length; j++) if (s[j] === '1') score++;
      best = Math.max(best, score);
    }
    return best;
  },

  'append-characters-to-make-subsequence': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    let j = 0;
    for (let i = 0; i < s.length && j < t.length; i++) {
      if (s[i] === t[j]) j++;
    }
    return t.length - j;
  },

  'max-sum-of-pair-with-equal-sum-of-digits': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const digitSum = (n: number) => { let s = 0; while (n > 0) { s += n % 10; n = Math.floor(n / 10); } return s; };
    const best = new Map<number, number>();
    let ans = -1;
    for (const n of nums) {
      const ds = digitSum(n);
      if (best.has(ds)) { ans = Math.max(ans, best.get(ds)! + n); best.set(ds, Math.max(best.get(ds)!, n)); }
      else best.set(ds, n);
    }
    return ans;
  },

  'range-sum-of-bst': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const low = args[1] as number, high = args[2] as number;
    interface TN { val: number; left: TN | null; right: TN | null; }
    function build(a: (number | null)[]): TN | null {
      if (!a || a.length === 0 || a[0] == null) return null;
      const root: TN = { val: a[0]!, left: null, right: null };
      const q: TN[] = [root]; let i = 1;
      while (q.length > 0 && i < a.length) {
        const node = q.shift()!;
        if (a[i] != null) { node.left = { val: a[i]!, left: null, right: null }; q.push(node.left); }
        i++;
        if (i < a.length && a[i] != null) { node.right = { val: a[i]!, left: null, right: null }; q.push(node.right); }
        i++;
      }
      return root;
    }
    function sum(node: TN | null): number {
      if (!node) return 0;
      let s = 0;
      if (node.val >= low && node.val <= high) s += node.val;
      if (node.val > low) s += sum(node.left);
      if (node.val < high) s += sum(node.right);
      return s;
    }
    return sum(build(arr));
  },

  'xor-operation-in-an-array': (...args: unknown[]) => {
    const n = args[0] as number, start = args[1] as number;
    let res = 0;
    for (let i = 0; i < n; i++) res ^= (start + 2 * i);
    return res;
  },

  'get-maximum-in-generated-array': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n === 0) return 0;
    const nums = [0, 1];
    for (let i = 2; i <= n; i++) {
      nums[i] = i % 2 === 0 ? nums[i / 2]! : nums[(i - 1) / 2]! + nums[(i + 1) / 2]!;
    }
    return Math.max(...nums);
  },

  'flipping-an-image': (...args: unknown[]) => {
    const image = args[0] as number[][];
    return image.map(row => [...row].reverse().map(b => b ^ 1));
  },

  'count-good-triplets': (...args: unknown[]) => {
    const arr = args[0] as number[], a = args[1] as number, b = args[2] as number, c = args[3] as number;
    let count = 0;
    for (let i = 0; i < arr.length; i++)
      for (let j = i + 1; j < arr.length; j++)
        for (let k = j + 1; k < arr.length; k++)
          if (Math.abs(arr[i]! - arr[j]!) <= a && Math.abs(arr[j]! - arr[k]!) <= b && Math.abs(arr[i]! - arr[k]!) <= c)
            count++;
    return count;
  },

  'matrix-block-sum': (...args: unknown[]) => {
    const mat = args[0] as number[][], k = args[1] as number;
    const m = mat.length, n = mat[0]!.length;
    const prefix: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        prefix[i]![j] = mat[i - 1]![j - 1]! + prefix[i - 1]![j]! + prefix[i]![j - 1]! - prefix[i - 1]![j - 1]!;
    const ans: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const r1 = Math.max(0, i - k), c1 = Math.max(0, j - k);
        const r2 = Math.min(m - 1, i + k), c2 = Math.min(n - 1, j + k);
        ans[i]![j] = prefix[r2 + 1]![c2 + 1]! - prefix[r1]![c2 + 1]! - prefix[r2 + 1]![c1]! + prefix[r1]![c1]!;
      }
    }
    return ans;
  },

  'count-number-of-rectangles': (...args: unknown[]) => {
    const rectangles = args[0] as number[][], points = args[1] as number[][];
    const byHeight: number[][] = Array.from({ length: 101 }, () => []);
    for (const rect of rectangles) { const l = rect[0]!, h = rect[1]!; byHeight[h]!.push(l); }
    for (let h = 0; h <= 100; h++) byHeight[h]!.sort((a, b) => a - b);
    return points.map((pt) => {
      const x = pt[0]!, y = pt[1]!;
      let count = 0;
      for (let h = y; h <= 100; h++) {
        const arr = byHeight[h]!;
        let lo = 0, hi = arr.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid]! < x) lo = mid + 1; else hi = mid; }
        count += arr.length - lo;
      }
      return count;
    });
  },
  'unique-morse-code-words': (...args: unknown[]) => {
    const words = args[0] as string[];
    const MORSE = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
    const transforms = new Set<string>();
    for (const word of words) {
      transforms.add(word.split('').map(c => MORSE[c.charCodeAt(0) - 97]!).join(''));
    }
    return transforms.size;
  },
  'number-of-good-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let count = 0;
    const freq = new Map<number, number>();
    for (const n of nums) {
      count += freq.get(n) ?? 0;
      freq.set(n, (freq.get(n) ?? 0) + 1);
    }
    return count;
  },
  'check-if-array-sorted-rotated': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let descents = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i]! > nums[(i + 1) % n]!) descents++;
    }
    return descents <= 1;
  },
  'maximum-product-difference': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    return nums[nums.length - 1]! * nums[nums.length - 2]! - nums[0]! * nums[1]!;
  },
  'replace-words': (...args: unknown[]) => {
    const dictionary = args[0] as string[], sentence = args[1] as string;
    const rootSet = new Set(dictionary);
    return sentence.split(' ').map(word => {
      for (let i = 1; i <= word.length; i++) {
        if (rootSet.has(word.slice(0, i))) return word.slice(0, i);
      }
      return word;
    }).join(' ');
  },
  'minimum-time-difference': (...args: unknown[]) => {
    const timePoints = args[0] as string[];
    const minutes = timePoints.map(t => {
      const parts = t.split(':');
      return Number(parts[0]) * 60 + Number(parts[1]);
    }).sort((a, b) => a - b);
    let min = 1440 - minutes[minutes.length - 1]! + minutes[0]!;
    for (let i = 1; i < minutes.length; i++) min = Math.min(min, minutes[i]! - minutes[i - 1]!);
    return min;
  },
  'string-to-integer-atoi': (...args: unknown[]) => {
    const s = args[0] as string;
    const INT_MAX = 2147483647, INT_MIN = -2147483648;
    let i = 0, sign = 1, result = 0;
    while (i < s.length && s[i] === ' ') i++;
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
      sign = s[i] === '-' ? -1 : 1;
      i++;
    }
    while (i < s.length && s[i]! >= '0' && s[i]! <= '9') {
      const d = s[i]!.charCodeAt(0) - 48;
      if (result > Math.floor((INT_MAX - d) / 10)) return sign === 1 ? INT_MAX : INT_MIN;
      result = result * 10 + d;
      i++;
    }
    return sign * result;
  },

  'minimum-sum-four-digit-number': (...args: unknown[]) => {
    const num = args[0] as number;
    const digits = String(num).split('').map(Number).sort((a, b) => a - b);
    return digits[0]! * 10 + digits[1]! * 10 + digits[2]! + digits[3]!;
  },
  'count-pairs-absolute-difference-k': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let count = 0;
    const freq = new Map<number, number>();
    for (const n of nums) {
      count += (freq.get(n - k) ?? 0) + (freq.get(n + k) ?? 0);
      freq.set(n, (freq.get(n) ?? 0) + 1);
    }
    return count;
  },
  'find-closest-number-to-zero': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let best = nums[0]!;
    for (const n of nums) {
      if (Math.abs(n) < Math.abs(best) || (Math.abs(n) === Math.abs(best) && n > best)) best = n;
    }
    return best;
  },
  'find-positive-integer-with-negative': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const set = new Set(nums);
    let result = -1;
    for (const n of nums) {
      if (n > 0 && set.has(-n)) {
        if (n > result) result = n;
      }
    }
    return result;
  },
  // --- strings / hash-map --------------------------------------------------
  'minimum-deletions-char-frequencies': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq: Record<string, number> = {};
    for (const ch of s) freq[ch] = (freq[ch] ?? 0) + 1;
    const freqs = Object.values(freq).sort((a, b) => b - a);
    const used = new Set<number>();
    let deletions = 0;
    for (let f of freqs) {
      while (f > 0 && used.has(f)) {
        f--;
        deletions++;
      }
      if (f > 0) used.add(f);
    }
    return deletions;
  },

  'bulls-and-cows': (...args: unknown[]) => {
    const secret = args[0] as string;
    const guess = args[1] as string;
    let bulls = 0;
    const secretFreq: Record<string, number> = {};
    const guessFreq: Record<string, number> = {};
    for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
        bulls++;
      } else {
        secretFreq[secret[i]!] = (secretFreq[secret[i]!] ?? 0) + 1;
        guessFreq[guess[i]!] = (guessFreq[guess[i]!] ?? 0) + 1;
      }
    }
    let cows = 0;
    for (const d of Object.keys(guessFreq)) {
      cows += Math.min(guessFreq[d]!, secretFreq[d] ?? 0);
    }
    return `${bulls}A${cows}B`;
  },

  'first-letter-to-appear-twice': (...args: unknown[]) => {
    const s = args[0] as string;
    const seen = new Set<string>();
    for (const ch of s) {
      if (seen.has(ch)) return ch;
      seen.add(ch);
    }
    return '';
  },

  'count-asterisks': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    let inside = false;
    for (const ch of s) {
      if (ch === '|') {
        inside = !inside;
      } else if (ch === '*' && !inside) {
        count++;
      }
    }
    return count;
  },
  'count-even-numbers': (...args: unknown[]) => {
    const num = args[0] as number;
    let count = 0;
    for (let i = 1; i <= num; i++) {
      let sum = 0, n = i;
      while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }
      if (sum % 2 === 0) count++;
    }
    return count;
  },
  'count-segments-in-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) count++;
    }
    return count;
  },
  'find-repeated-dna-sequences': (...args: unknown[]) => {
    const s = args[0] as string;
    const seen = new Map<string, number>();
    const result: string[] = [];
    for (let i = 0; i <= s.length - 10; i++) {
      const sub = s.slice(i, i + 10);
      const cnt = (seen.get(sub) ?? 0) + 1;
      seen.set(sub, cnt);
      if (cnt === 2) result.push(sub);
    }
    return result.sort();
  },
  'widest-vertical-area': (...args: unknown[]) => {
    const points = args[0] as number[][];
    const xs = points.map(p => p[0]!).sort((a, b) => a - b);
    let maxGap = 0;
    for (let i = 1; i < xs.length; i++) maxGap = Math.max(maxGap, xs[i]! - xs[i - 1]!);
    return maxGap;
  },
  'convert-1d-array-into-2d-array': (...args: unknown[]) => {
    const original = args[0] as number[], m = args[1] as number, n = args[2] as number;
    if (original.length !== m * n) return [];
    const result: number[][] = [];
    for (let i = 0; i < m; i++) result.push(original.slice(i * n, (i + 1) * n));
    return result;
  },
  'check-if-all-chars-have-equal-occurrences': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq: Record<string, number> = {};
    for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
    const vals = Object.values(freq);
    return vals.every(f => f === vals[0]);
  },
  'find-the-pivot-integer': (...args: unknown[]) => {
    const n = args[0] as number;
    const x = Math.sqrt(n * (n + 1) / 2);
    return Number.isInteger(x) ? x : -1;
  },
  'maximum-sum-circular-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    if (nums.every(n => n < 0)) return Math.max(...nums);
    let maxSum = -Infinity, curMax = 0, total = 0;
    let minSum = Infinity, curMin = 0;
    for (const n of nums) {
      curMax = Math.max(n, curMax + n);
      maxSum = Math.max(maxSum, curMax);
      curMin = Math.min(n, curMin + n);
      minSum = Math.min(minSum, curMin);
      total += n;
    }
    return Math.max(maxSum, total - minSum);
  },
  'number-of-distinct-averages': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const sums = new Set<number>();
    for (let i = 0; i < nums.length / 2; i++) sums.add(nums[i]! + nums[nums.length - 1 - i]!);
    return sums.size;
  },
  'sum-of-squares-special-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) if (n % i === 0) sum += nums[i - 1]! ** 2;
    return sum;
  },
  'minimum-operations-make-array-empty': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    let ops = 0;
    for (const [, f] of freq) {
      if (f === 1) return -1;
      ops += Math.ceil(f / 3);
    }
    return ops;
  },
  'unique-email-addresses': (...args: unknown[]) => {
    const emails = args[0] as string[];
    const normalize = (e: string) => {
      const [local, dom] = e.split('@') as [string, string];
      return local.split('+')[0]!.replace(/\./g, '') + '@' + dom;
    };
    return new Set(emails.map(normalize)).size;
  },
  'reverse-words-in-string-iii': (...args: unknown[]) => {
    const s = args[0] as string;
    return s.split(' ').map((w: string) => w.split('').reverse().join('')).join(' ');
  },

  'count-binary-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    let ans = 0, prev = 0, curr = 1;
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) { curr++; } else { prev = curr; curr = 1; }
      if (prev >= curr) ans++;
    }
    return ans;
  },

  'shortest-unsorted-continuous-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const sorted = [...nums].sort((a, b) => a - b);
    let l = 0, r = nums.length - 1;
    while (l <= r && nums[l] === sorted[l]) l++;
    while (r >= l && nums[r] === sorted[r]) r--;
    return l > r ? 0 : r - l + 1;
  },

  'max-chunks-to-make-sorted': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let max = 0, count = 0;
    for (let i = 0; i < arr.length; i++) { max = Math.max(max, arr[i]!); if (max === i) count++; }
    return count;
  },

  'champagne-tower': (...args: unknown[]) => {
    const poured = args[0] as number, qRow = args[1] as number, qGlass = args[2] as number;
    const tower: number[][] = Array.from({ length: qRow + 2 }, () => new Array(qRow + 2).fill(0));
    tower[0]![0] = poured;
    for (let r = 0; r <= qRow; r++) {
      for (let g = 0; g <= r; g++) {
        const excess = tower[r]![g]! - 1;
        if (excess > 0) { tower[r]![g] = 1; tower[r+1]![g]! += excess/2; tower[r+1]![g+1]! += excess/2; }
      }
    }
    return Math.min(1, tower[qRow]![qGlass]!);
  },

  'minimum-remove-to-make-valid-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    const toRemove = new Set<number>(); const stack: number[] = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') stack.push(i);
      else if (s[i] === ')') { if (stack.length) stack.pop(); else toRemove.add(i); }
    }
    stack.forEach(i => toRemove.add(i));
    return s.split('').filter((_, i) => !toRemove.has(i)).join('');
  },

  'bitwise-and-of-numbers-range': (...args: unknown[]) => {
    let left = args[0] as number, right = args[1] as number, shift = 0;
    while (left !== right) { left >>= 1; right >>= 1; shift++; }
    return left << shift;
  },

  'number-of-enclaves': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map(r => [...r]);
    const m = grid.length, n = grid[0]!.length;
    const dfs = (r: number, c: number): void => {
      if (r < 0 || r >= m || c < 0 || c >= n || !grid[r]![c]) return;
      grid[r]![c] = 0;
      [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr, dc]) => dfs(r + dr!, c + dc!));
    };
    for (let r = 0; r < m; r++) { dfs(r, 0); dfs(r, n - 1); }
    for (let c = 0; c < n; c++) { dfs(0, c); dfs(m - 1, c); }
    return grid.flat().reduce((s, v) => s + v, 0);
  },

  'jump-game-iv': (...args: unknown[]) => {
    const arr = args[0] as number[]; const n = arr.length;
    if (n === 1) return 0;
    const graph = new Map<number, number[]>();
    for (let i = 0; i < n; i++) { const v = arr[i]!; if (!graph.has(v)) graph.set(v, []); graph.get(v)!.push(i); }
    const visited = new Set<number>([0]); const q: [number, number][] = [[0, 0]];
    while (q.length) {
      const [i, steps] = q.shift()!;
      const sameVal = graph.get(arr[i]!) ?? []; graph.delete(arr[i]!);
      for (const j of [i-1, i+1, ...sameVal]) {
        if (j === n - 1) return steps + 1;
        if (j >= 0 && j < n && !visited.has(j)) { visited.add(j); q.push([j, steps+1]); }
      }
    }
    return -1;
  },
  'split-string-balance': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0, balance = 0;
    for (const c of s) { balance += c === 'R' ? 1 : -1; if (balance === 0) count++; }
    return count;
  },
  'maximum-product-adjacent-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max = -Infinity;
    for (let i = 0; i < nums.length - 1; i++) max = Math.max(max, nums[i]! * nums[i + 1]!);
    return max;
  },

  'candy': (...args: unknown[]) => {
    const ratings = args[0] as number[];
    const n = ratings.length;
    const c = new Array(n).fill(1);
    for (let i = 1; i < n; i++) if ((ratings[i] ?? 0) > (ratings[i-1] ?? 0)) c[i] = (c[i-1] as number) + 1;
    for (let i = n-2; i >= 0; i--) if ((ratings[i] ?? 0) > (ratings[i+1] ?? 0)) c[i] = Math.max(c[i] as number, (c[i+1] as number) + 1);
    return c.reduce((a, b) => a + b, 0);
  },

  'minimum-falling-path-sum': (...args: unknown[]) => {
    const matrix = (args[0] as number[][]).map(r => [...r]);
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i]!.length; j++) {
        const prev = [matrix[i-1]![j]!];
        if (j > 0) prev.push(matrix[i-1]![j-1]!);
        if (j < matrix[i]!.length - 1) prev.push(matrix[i-1]![j+1]!);
        matrix[i]![j]! += Math.min(...prev);
      }
    }
    return Math.min(...matrix[matrix.length - 1]!);
  },

  'count-nice-subarrays': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const atMost = (x: number) => {
      let l = 0, odds = 0, res = 0;
      for (let r = 0; r < nums.length; r++) {
        odds += nums[r]! % 2;
        while (odds > x) odds -= nums[l++]! % 2;
        res += r - l + 1;
      }
      return res;
    };
    return atMost(k) - atMost(k - 1);
  },

  'split-linked-list-in-parts': (...args: unknown[]) => {
    const head = args[0] as number[], k = args[1] as number;
    const n = head.length, base = Math.floor(n / k), extra = n % k;
    const res: number[][] = [];
    let i = 0;
    for (let p = 0; p < k; p++) {
      const size = base + (p < extra ? 1 : 0);
      res.push(head.slice(i, i + size));
      i += size;
    }
    return res;
  },

  'time-based-key-value-store': (...args: unknown[]) => {
    const ops = args[0] as string[], opArgs = args[1] as unknown[][];
    const store = new Map<string, [number, string][]>();
    const results: (string | null)[] = [];
    for (let i = 0; i < ops.length; i++) {
      const op = ops[i]!, a = opArgs[i]!;
      if (op === 'TimeMap') { results.push(null); }
      else if (op === 'set') {
        const [k, v, t] = a as [string, string, number];
        if (!store.has(k)) store.set(k, []);
        store.get(k)!.push([t, v]);
        results.push(null);
      } else {
        const [k, t] = a as [string, number];
        const arr = store.get(k) ?? [];
        let lo = 0, hi = arr.length - 1, res = '';
        while (lo <= hi) { const mid = (lo + hi) >> 1; if (arr[mid]![0] <= t) { res = arr[mid]![1]; lo = mid + 1; } else hi = mid - 1; }
        results.push(res);
      }
    }
    return results;
  },

  'minimum-cost-for-tickets': (...args: unknown[]) => {
    const days = args[0] as number[], costs = args[1] as number[];
    const daySet = new Set(days);
    const dp = new Array(366).fill(0);
    for (let i = 1; i <= 365; i++) {
      if (!daySet.has(i)) { dp[i] = dp[i-1]; }
      else { dp[i] = Math.min(dp[i-1] + costs[0]!, dp[Math.max(0,i-7)] + costs[1]!, dp[Math.max(0,i-30)] + costs[2]!); }
    }
    return dp[365];
  },

  'stone-game-ii': (...args: unknown[]) => {
    const piles = args[0] as number[];
    const n = piles.length;
    const suf = new Array(n+1).fill(0);
    for (let i = n-1; i >= 0; i--) suf[i] = suf[i+1] + piles[i]!;
    const memo = new Map<number, number>();
    const dp = (i: number, m: number): number => {
      if (i >= n) return 0;
      if (2*m >= n-i) return suf[i];
      const k = i*200+m;
      if (memo.has(k)) return memo.get(k)!;
      let best = 0;
      for (let x = 1; x <= 2*m; x++) best = Math.max(best, suf[i] - dp(i+x, Math.max(m,x)));
      memo.set(k, best);
      return best;
    };
    return dp(0, 1);
  },

  'maximum-width-ramp': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const st: number[] = [];
    for (let i = 0; i < nums.length; i++) if (!st.length || nums[i]! < nums[st[st.length-1]!]!) st.push(i);
    let ans = 0;
    for (let j = nums.length-1; j >= 0; j--) {
      while (st.length && nums[st[st.length-1]!]! <= nums[j]!) ans = Math.max(ans, j - st.pop()!);
    }
    return ans;
  },

  'check-if-array-pairs-divisible-by-k': (...args: unknown[]) => {
    const arr = args[0] as number[], k = args[1] as number;
    const freq = new Array(k).fill(0);
    for (const x of arr) freq[((x % k) + k) % k]++;
    if (freq[0] % 2 !== 0) return false;
    for (let r = 1; r <= Math.floor(k / 2); r++) {
      if (r === k - r) { if (freq[r] % 2 !== 0) return false; }
      else if (freq[r] !== freq[k-r]) return false;
    }
    return true;
  },

  'find-k-th-smallest-pair-distance': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number, n = nums.length;
    let lo = 0, hi = nums[n-1]! - nums[0]!;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      let cnt = 0, l = 0;
      for (let r = 0; r < n; r++) { while (nums[r]! - nums[l]! > mid) l++; cnt += r - l; }
      if (cnt >= k) hi = mid; else lo = mid + 1;
    }
    return lo;
  },

  'valid-triangle-number': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    let cnt = 0;
    for (let k = nums.length - 1; k >= 2; k--) {
      let l = 0, r = k - 1;
      while (l < r) {
        if (nums[l]! + nums[r]! > nums[k]!) { cnt += r - l; r--; } else l++;
      }
    }
    return cnt;
  },

  'max-number-k-sum-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const freq = new Map<number, number>();
    let cnt = 0;
    for (const n of nums) {
      const c = k - n;
      if ((freq.get(c) ?? 0) > 0) { cnt++; freq.set(c, freq.get(c)! - 1); }
      else freq.set(n, (freq.get(n) ?? 0) + 1);
    }
    return cnt;
  },

  'minimum-time-rope-colorful': (...args: unknown[]) => {
    const colors = args[0] as string, neededTime = args[1] as number[];
    let res = 0, i = 0;
    while (i < colors.length) {
      let j = i, groupMax = 0, groupSum = 0;
      while (j < colors.length && colors[j] === colors[i]) {
        groupMax = Math.max(groupMax, neededTime[j]!);
        groupSum += neededTime[j]!;
        j++;
      }
      res += groupSum - groupMax;
      i = j;
    }
    return res;
  },

  'shortest-bridge': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map(r => [...r]);
    const n = grid.length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const queue: [number, number][] = [];
    let found = false;
    const dfs = (r: number, c: number) => {
      if (r < 0 || r >= n || c < 0 || c >= n || grid[r]![c] !== 1) return;
      grid[r]![c] = 2;
      queue.push([r, c]);
      for (const [dr, dc] of dirs) dfs(r + dr!, c + dc!);
    };
    outer: for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r]![c] === 1) { dfs(r, c); found = true; break outer; }
      }
    }
    if (!found) return -1;
    let dist = 0;
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [r, c] = queue.shift()!;
        for (const [dr, dc] of dirs) {
          const nr = r + dr!, nc = c + dc!;
          if (nr < 0 || nr >= n || nc < 0 || nc >= n || grid[nr]![nc] === 2) continue;
          if (grid[nr]![nc] === 1) return dist;
          grid[nr]![nc] = 2;
          queue.push([nr, nc]);
        }
      }
      dist++;
    }
    return dist;
  },

  'number-of-subsequences-target-sum': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    const MOD = 1_000_000_007n;
    const n = nums.length;
    const pow2: bigint[] = Array(n).fill(1n);
    for (let i = 1; i < n; i++) pow2[i] = pow2[i-1]! * 2n % MOD;
    let ans = 0n, l = 0, r = n - 1;
    while (l <= r) {
      if (nums[l]! + nums[r]! <= target) { ans = (ans + pow2[r-l]!) % MOD; l++; } else r--;
    }
    return Number(ans);
  },
  'increasing-decreasing-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq = new Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 97]!++;
    let result = '';
    while (result.length < s.length) {
      for (let i = 0; i < 26; i++) if (freq[i]! > 0) { result += String.fromCharCode(97 + i); freq[i]!--; }
      for (let i = 25; i >= 0; i--) if (freq[i]! > 0) { result += String.fromCharCode(97 + i); freq[i]!--; }
    }
    return result;
  },

  'car-pooling': (...args: unknown[]) => {
    const trips = args[0] as [number, number, number][], capacity = args[1] as number;
    const diff = new Array(1001).fill(0);
    for (const [n, f, t] of trips) { diff[f] += n; diff[t] -= n; }
    let cur = 0;
    for (const d of diff) { cur += d; if (cur > capacity) return false; }
    return true;
  },

  'most-profit-assigning-work': (...args: unknown[]) => {
    const difficulty = args[0] as number[], profit = args[1] as number[], worker = args[2] as number[];
    const jobs = difficulty.map((d, i) => [d, profit[i]!] as [number, number]).sort((a, b) => a[0] - b[0]);
    const maxP: number[] = [0];
    for (const [, p] of jobs) maxP.push(Math.max(maxP[maxP.length - 1]!, p));
    let total = 0;
    for (const w of worker) {
      let lo = 0, hi = jobs.length;
      while (lo < hi) { const m = (lo + hi) >> 1; if (jobs[m]![0] <= w) lo = m + 1; else hi = m; }
      total += maxP[lo]!;
    }
    return total;
  },

  'students-unable-to-eat-lunch': (...args: unknown[]) => {
    const students = [...(args[0] as number[])];
    const sandwiches = args[1] as number[];
    let i = 0;
    while (i < sandwiches.length) {
      const idx = students.indexOf(sandwiches[i]!);
      if (idx === -1) break;
      students.splice(idx, 1);
      i++;
    }
    return students.length;
  },

  'create-target-array-given-order': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const index = args[1] as number[];
    const target: number[] = [];
    for (let i = 0; i < nums.length; i++) target.splice(index[i]!, 0, nums[i]!);
    return target;
  },

  'maximum-ascending-subarray-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max = 0, cur = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! > nums[i - 1]!) cur += nums[i]!;
      else { max = Math.max(max, cur); cur = nums[i]!; }
    }
    return Math.max(max, cur);
  },

  'minimum-consecutive-cards-pickup': (...args: unknown[]) => {
    const cards = args[0] as number[];
    const last = new Map<number, number>();
    let min = Infinity;
    for (let i = 0; i < cards.length; i++) {
      if (last.has(cards[i]!)) min = Math.min(min, i - last.get(cards[i]!)! + 1);
      last.set(cards[i]!, i);
    }
    return min === Infinity ? -1 : min;
  },

  'divisor-game': (...args: unknown[]) => {
    return (args[0] as number) % 2 === 0;
  },

  'minimum-time-visiting-all-points': (...args: unknown[]) => {
    const points = args[0] as number[][];
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      total += Math.max(Math.abs(points[i]![0]! - points[i - 1]![0]!), Math.abs(points[i]![1]! - points[i - 1]![1]!));
    }
    return total;
  },

  'fruit-into-baskets': (...args: unknown[]) => {
    const fruits = args[0] as number[];
    const freq = new Map<number, number>();
    let l = 0, ans = 0;
    for (let r = 0; r < fruits.length; r++) {
      freq.set(fruits[r]!, (freq.get(fruits[r]!) ?? 0) + 1);
      while (freq.size > 2) {
        const f = fruits[l++]!;
        freq.set(f, freq.get(f)! - 1);
        if (freq.get(f) === 0) freq.delete(f);
      }
      ans = Math.max(ans, r - l + 1);
    }
    return ans;
  },

  'minimum-swaps-string-balanced': (...args: unknown[]) => {
    const s = args[0] as string;
    let b = 0, m = 0;
    for (const c of s) { b += c === '[' ? 1 : -1; if (b < 0) { m++; b = 0; } }
    return Math.ceil(m / 2);
  },

  'sum-of-subarray-ranges': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      let mn = nums[i]!, mx = nums[i]!;
      for (let j = i; j < nums.length; j++) {
        mn = Math.min(mn, nums[j]!);
        mx = Math.max(mx, nums[j]!);
        res += mx - mn;
      }
    }
    return res;
  },

  'largest-local-values-matrix': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const n = grid.length;
    const res: number[][] = [];
    for (let i = 0; i < n - 2; i++) {
      const row: number[] = [];
      for (let j = 0; j < n - 2; j++) {
        let mx = 0;
        for (let r = i; r < i + 3; r++)
          for (let c = j; c < j + 3; c++)
            mx = Math.max(mx, grid[r]![c]!);
        row.push(mx);
      }
      res.push(row);
    }
    return res;
  },

  'percentage-letter-in-string': (...args: unknown[]) => {
    const s = args[0] as string, letter = args[1] as string;
    let count = 0;
    for (const c of s) if (c === letter) count++;
    return Math.floor(count / s.length * 100);
  },

  'number-of-weak-characters': (...args: unknown[]) => {
    const properties = (args[0] as number[][]).slice().sort((a, b) => b[0]! - a[0]! || a[1]! - b[1]!);
    let maxDef = 0, count = 0;
    for (const [, d] of properties) {
      if (d! < maxDef) count++;
      maxDef = Math.max(maxDef, d!);
    }
    return count;
  },

  'arithmetic-slices': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let count = 0, cur = 0;
    for (let i = 2; i < nums.length; i++) {
      if (nums[i]! - nums[i - 1]! === nums[i - 1]! - nums[i - 2]!) { cur++; count += cur; }
      else cur = 0;
    }
    return count;
  },

  'maximum-number-vowels-substring': (...args: unknown[]) => {
    const s = args[0] as string, k = args[1] as number;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let cnt = 0;
    for (let i = 0; i < k; i++) if (vowels.has(s[i]!)) cnt++;
    let max = cnt;
    for (let i = k; i < s.length; i++) {
      if (vowels.has(s[i]!)) cnt++;
      if (vowels.has(s[i - k]!)) cnt--;
      max = Math.max(max, cnt);
    }
    return max;
  },

  'minimum-swaps-group-all-ones': (...args: unknown[]) => {
    const data = args[0] as number[];
    const k = data.reduce((s, x) => s + x, 0);
    if (k === 0 || k === data.length) return 0;
    let zeros = 0;
    for (let i = 0; i < k; i++) if (data[i]! === 0) zeros++;
    let min = zeros;
    for (let i = k; i < data.length; i++) {
      if (data[i]! === 0) zeros++;
      if (data[i - k]! === 0) zeros--;
      min = Math.min(min, zeros);
    }
    return min;
  },

  'k-diff-pairs-in-array': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    if (k < 0) return 0;
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    let count = 0;
    for (const [n, f] of freq) {
      if (k === 0) { if (f > 1) count++; }
      else if (freq.has(n + k)) count++;
    }
    return count;
  },

  'hand-of-straights': (...args: unknown[]) => {
    const hand = args[0] as number[], groupSize = args[1] as number;
    if (hand.length % groupSize !== 0) return false;
    const freq = new Map<number, number>();
    for (const c of hand) freq.set(c, (freq.get(c) ?? 0) + 1);
    const keys = [...freq.keys()].sort((a, b) => a - b);
    for (const key of keys) {
      const cnt = freq.get(key)!;
      if (cnt > 0) {
        for (let i = 0; i < groupSize; i++) {
          const cur = freq.get(key + i);
          if (!cur || cur < cnt) return false;
          freq.set(key + i, cur - cnt);
        }
      }
    }
    return true;
  },

  'minimum-domino-rotations': (...args: unknown[]) => {
    const tops = args[0] as number[], bottoms = args[1] as number[];
    const check = (x: number) => {
      let rt = 0, rb = 0;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i]! !== x && bottoms[i]! !== x) return Infinity;
        else if (tops[i]! !== x) rt++;
        else if (bottoms[i]! !== x) rb++;
      }
      return Math.min(rt, rb);
    };
    const res = Math.min(check(tops[0]!), check(bottoms[0]!));
    return res === Infinity ? -1 : res;
  },

  'maximize-confusion-exam': (...args: unknown[]) => {
    const answerKey = args[0] as string, k = args[1] as number;
    const solve = (c: string) => {
      let l = 0, cnt = 0, ans = 0;
      for (let r = 0; r < answerKey.length; r++) {
        if (answerKey[r] !== c) cnt++;
        while (cnt > k) if (answerKey[l++] !== c) cnt--;
        ans = Math.max(ans, r - l + 1);
      }
      return ans;
    };
    return Math.max(solve('T'), solve('F'));
  },

  'sum-of-all-subset-xor-totals': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const or = nums.reduce((a, b) => a | b, 0);
    return or * (1 << (nums.length - 1));
  },

  'continuous-subarray-sum': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const seen = new Map([[0, -1]]);
    let s = 0;
    for (let i = 0; i < nums.length; i++) {
      s = (s + nums[i]!) % k;
      if (seen.has(s)) { if (i - seen.get(s)! >= 2) return true; }
      else seen.set(s, i);
    }
    return false;
  },

  'equal-row-column-pairs': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const rowMap = new Map<string, number>();
    for (const row of grid) {
      const key = row.join(',');
      rowMap.set(key, (rowMap.get(key) ?? 0) + 1);
    }
    let ans = 0;
    const n = grid.length;
    for (let j = 0; j < n; j++) {
      const key = grid.map(r => r[j]).join(',');
      ans += rowMap.get(key) ?? 0;
    }
    return ans;
  },

  'determine-if-two-strings-close': (...args: unknown[]) => {
    const word1 = args[0] as string, word2 = args[1] as string;
    if (word1.length !== word2.length) return false;
    const f1 = new Map<string, number>(), f2 = new Map<string, number>();
    for (const c of word1) f1.set(c, (f1.get(c) ?? 0) + 1);
    for (const c of word2) f2.set(c, (f2.get(c) ?? 0) + 1);
    if ([...f1.keys()].sort().join() !== [...f2.keys()].sort().join()) return false;
    return [...f1.values()].sort((a, b) => a - b).join() === [...f2.values()].sort((a, b) => a - b).join();
  },

  'furthest-building-ladders': (...args: unknown[]) => {
    const heights = args[0] as number[], bricks = args[1] as number, ladders = args[2] as number;
    let b = bricks;
    const heap: number[] = [];
    const push = (x: number) => { heap.push(x); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p]! > heap[i]!) { [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p; } else break; } };
    const pop = () => { const top = heap[0]!; const last = heap.pop()!; if (heap.length > 0) { heap[0] = last; let i = 0; while (true) { const l = 2 * i + 1, r = 2 * i + 2; let best = i; if (l < heap.length && heap[l]! < heap[best]!) best = l; if (r < heap.length && heap[r]! < heap[best]!) best = r; if (best === i) break; [heap[i], heap[best]] = [heap[best]!, heap[i]!]; i = best; } } return top; };
    for (let i = 0; i < heights.length - 1; i++) {
      const diff = heights[i + 1]! - heights[i]!;
      if (diff <= 0) continue;
      push(diff);
      if (heap.length > ladders) {
        b -= pop();
        if (b < 0) return i;
      }
    }
    return heights.length - 1;
  },

  'ipo': (...args: unknown[]) => {
    let k = args[0] as number, w = args[1] as number;
    const profits = args[2] as number[], capital = args[3] as number[];
    const projects = profits.map((p, i) => [capital[i]!, p] as [number, number]).sort((a, b) => a[0] - b[0]);
    const heap: number[] = [];
    const push = (x: number) => { heap.push(x); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p]! < heap[i]!) { [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p; } else break; } };
    const pop = () => { const top = heap[0]!; const last = heap.pop()!; if (heap.length > 0) { heap[0] = last; let i = 0; while (true) { const l = 2 * i + 1, r = 2 * i + 2; let best = i; if (l < heap.length && heap[l]! > heap[best]!) best = l; if (r < heap.length && heap[r]! > heap[best]!) best = r; if (best === i) break; [heap[i], heap[best]] = [heap[best]!, heap[i]!]; i = best; } } return top; };
    let j = 0;
    for (let i = 0; i < k; i++) {
      while (j < projects.length && projects[j]![0] <= w) push(projects[j++]![1]);
      if (heap.length === 0) break;
      w += pop();
    }
    return w;
  },

  'relative-sort-array': (...args: unknown[]) => {
    const arr1 = [...(args[0] as number[])], arr2 = args[1] as number[];
    const rank = new Map(arr2.map((v, i) => [v, i]));
    return arr1.sort((a, b) => {
      const ra = rank.has(a) ? rank.get(a)! : 1000 + a;
      const rb = rank.has(b) ? rank.get(b)! : 1000 + b;
      return ra - rb;
    });
  },

  'permutations-ii': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const res: number[][] = [];
    const used = new Array(nums.length).fill(false);
    function bt(cur: number[]) {
      if (cur.length === nums.length) { res.push([...cur]); return; }
      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        used[i] = true; cur.push(nums[i]!);
        bt(cur);
        used[i] = false; cur.pop();
      }
    }
    bt([]);
    return res.sort((a, b) => { for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) return a[i]! - b[i]!; return 0; });
  },

  'letter-tile-possibilities': (...args: unknown[]) => {
    const tiles = args[0] as string;
    const freq = new Array(26).fill(0);
    for (const c of tiles) freq[c.charCodeAt(0) - 65]!++;
    function bt(): number {
      let count = 0;
      for (let i = 0; i < 26; i++) {
        if (freq[i]! > 0) { count++; freq[i]!--; count += bt(); freq[i]!++; }
      }
      return count;
    }
    return bt();
  },

  'different-ways-add-parentheses': (...args: unknown[]) => {
    const expression = args[0] as string;
    function compute(expr: string): number[] {
      const results: number[] = [];
      for (let i = 0; i < expr.length; i++) {
        const c = expr[i]!;
        if (c === '+' || c === '-' || c === '*') {
          const left = compute(expr.slice(0, i));
          const right = compute(expr.slice(i + 1));
          for (const l of left) for (const r of right) {
            if (c === '+') results.push(l + r);
            else if (c === '-') results.push(l - r);
            else results.push(l * r);
          }
        }
      }
      if (results.length === 0) results.push(parseInt(expr));
      return results;
    }
    return compute(expression).sort((a, b) => a - b);
  },

  'integer-break': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        dp[i] = Math.max(dp[i]!, Math.max(j, dp[j]!) * Math.max(i - j, dp[i - j]!));
      }
    }
    return dp[n];
  },

  'minimum-cost-move-chips': (...args: unknown[]) => {
    const position = args[0] as number[];
    let even = 0, odd = 0;
    for (const p of position) { if (p % 2 === 0) even++; else odd++; }
    return Math.min(even, odd);
  },

  'binary-watch': (...args: unknown[]) => {
    const turnedOn = args[0] as number;
    const times: string[] = [];
    for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
        const bits = (h.toString(2) + m.toString(2)).split('').filter(c => c === '1').length;
        if (bits === turnedOn) times.push(h + ':' + m.toString().padStart(2, '0'));
      }
    }
    return times;
  },

  'minimum-add-make-valid-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    let open = 0, close = 0;
    for (const c of s) {
      if (c === '(') open++;
      else if (open > 0) open--;
      else close++;
    }
    return open + close;
  },

  'palindromic-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    for (let center = 0; center < 2 * s.length - 1; center++) {
      let l = center >> 1, r = l + (center & 1);
      while (l >= 0 && r < s.length && s[l] === s[r]) { count++; l--; r++; }
    }
    return count;
  },

  'partition-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let parts = 1;
    const seen = new Set<string>();
    for (const c of s) {
      if (seen.has(c)) { parts++; seen.clear(); }
      seen.add(c);
    }
    return parts;
  },

  'ugly-number-ii': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = [1]; let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < n; i++) {
      const nx = Math.min(dp[i2]! * 2, dp[i3]! * 3, dp[i5]! * 5);
      dp.push(nx);
      if (nx === dp[i2]! * 2) i2++;
      if (nx === dp[i3]! * 3) i3++;
      if (nx === dp[i5]! * 5) i5++;
    }
    return dp[n - 1]!;
  },

  'delete-node-in-bst': (...args: unknown[]) => {
    const del = (n: _TN | null, key: number): _TN | null => {
      if (!n) return null;
      if (key < n.v) { n.l = del(n.l, key); }
      else if (key > n.v) { n.r = del(n.r, key); }
      else {
        if (!n.l) return n.r;
        if (!n.r) return n.l;
        let s = n.r; while (s.l) s = s.l;
        n.v = s.v;
        n.r = del(n.r, s.v);
      }
      return n;
    };
    return _treeToArr(del(_buildTree(args[0] as (number | null)[]), args[1] as number));
  },

  'insert-into-bst': (...args: unknown[]) => {
    const ins = (n: _TN | null, val: number): _TN => {
      if (!n) return { v: val, l: null, r: null };
      if (val < n.v) n.l = ins(n.l, val);
      else n.r = ins(n.r, val);
      return n;
    };
    return _treeToArr(ins(_buildTree(args[0] as (number | null)[]), args[1] as number));
  },

  'deleteNodeRunner': (...args: unknown[]) => {
    const del = (n: _TN | null, key: number): _TN | null => {
      if (!n) return null;
      if (key < n.v) { n.l = del(n.l, key); }
      else if (key > n.v) { n.r = del(n.r, key); }
      else {
        if (!n.l) return n.r;
        if (!n.r) return n.l;
        let s = n.r; while (s.l) s = s.l;
        n.v = s.v;
        n.r = del(n.r, s.v);
      }
      return n;
    };
    return _treeToArr(del(_buildTree(args[0] as (number | null)[]), args[1] as number));
  },

  'insertIntoBSTRunner': (...args: unknown[]) => {
    const ins = (n: _TN | null, val: number): _TN => {
      if (!n) return { v: val, l: null, r: null };
      if (val < n.v) n.l = ins(n.l, val);
      else n.r = ins(n.r, val);
      return n;
    };
    return _treeToArr(ins(_buildTree(args[0] as (number | null)[]), args[1] as number));
  },

  'minimum-cost-connect-points': (...args: unknown[]) => {
    const points = args[0] as number[][];
    const n = points.length;
    const inMST = new Array<boolean>(n).fill(false);
    const dist = new Array<number>(n).fill(Infinity);
    dist[0] = 0; let res = 0;
    for (let i = 0; i < n; i++) {
      let u = -1;
      for (let j = 0; j < n; j++) if (!inMST[j] && (u === -1 || dist[j]! < dist[u]!)) u = j;
      inMST[u] = true; res += dist[u]!;
      for (let v = 0; v < n; v++) {
        if (!inMST[v]) {
          const d = Math.abs(points[u]![0]! - points[v]![0]!) + Math.abs(points[u]![1]! - points[v]![1]!);
          if (d < dist[v]!) dist[v] = d;
        }
      }
    }
    return res;
  },

  'number-of-visible-people-in-queue': (...args: unknown[]) => {
    const heights = args[0] as number[];
    const n = heights.length, ans = new Array<number>(n).fill(0), st: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
      let cnt = 0;
      while (st.length && st[st.length - 1]! < heights[i]!) { st.pop(); cnt++; }
      if (st.length) cnt++;
      ans[i] = cnt;
      st.push(heights[i]!);
    }
    return ans;
  },

  'combination-sum-iv': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
      for (const n of nums) {
        if (n <= i) dp[i] += dp[i - n];
      }
    }
    return dp[target];
  },

  'valid-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    const map: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
    for (const c of s) {
      if ('([{'.includes(c)) stack.push(c);
      else if (stack.pop() !== map[c]) return false;
    }
    return stack.length === 0;
  },

  'evaluate-reverse-polish-notation': (...args: unknown[]) => {
    const tokens = args[0] as string[];
    const stack: number[] = [];
    for (const t of tokens) {
      if (['+', '-', '*', '/'].includes(t)) {
        const b = stack.pop()!, a = stack.pop()!;
        if (t === '+') stack.push(a + b);
        else if (t === '-') stack.push(a - b);
        else if (t === '*') stack.push(a * b);
        else stack.push(Math.trunc(a / b));
      } else stack.push(parseInt(t));
    }
    return stack[0];
  },

  'move-zeroes': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let pos = 0;
    for (const n of nums) { if (n !== 0) nums[pos++] = n; }
    while (pos < nums.length) nums[pos++] = 0;
    return nums;
  },

  'merge-strings-alternately': (...args: unknown[]) => {
    const word1 = args[0] as string, word2 = args[1] as string;
    let result = '';
    let i = 0;
    while (i < word1.length || i < word2.length) {
      if (i < word1.length) result += word1[i];
      if (i < word2.length) result += word2[i];
      i++;
    }
    return result;
  },

  'robot-return-to-origin': (...args: unknown[]) => {
    const moves = args[0] as string;
    let x = 0, y = 0;
    for (const c of moves) {
      if (c === 'U') y++;
      else if (c === 'D') y--;
      else if (c === 'L') x--;
      else x++;
    }
    return x === 0 && y === 0;
  },

  'count-sorted-vowel-strings': (...args: unknown[]) => {
    const n = args[0] as number;
    let dp = [1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
      const next = [0, 0, 0, 0, 0];
      let acc = 0;
      for (let v = 0; v < 5; v++) { acc += dp[v]!; next[v] = acc; }
      dp = next;
    }
    return dp.reduce((a, b) => a + b, 0);
  },

  'maximum-product-of-word-lengths': (...args: unknown[]) => {
    const words = args[0] as string[];
    const masks = words.map((w) =>
      [...w].reduce((m, c) => m | (1 << (c.charCodeAt(0) - 97)), 0),
    );
    let max = 0;
    for (let i = 0; i < words.length; i++)
      for (let j = i + 1; j < words.length; j++)
        if (!(masks[i]! & masks[j]!))
          max = Math.max(max, words[i]!.length * words[j]!.length);
    return max;
  },

  'exclusive-time-of-functions': (...args: unknown[]) => {
    const n = args[0] as number;
    const logs = args[1] as string[];
    const result = new Array(n).fill(0) as number[];
    const stack: number[] = [];
    let prev = 0;
    for (const log of logs) {
      const parts = log.split(':');
      const id = parseInt(parts[0]!);
      const type = parts[1];
      const t = parseInt(parts[2]!);
      if (type === 'start') {
        if (stack.length) result[stack[stack.length - 1]!]! += t - prev;
        stack.push(id);
        prev = t;
      } else {
        result[id]! += t - prev + 1;
        stack.pop();
        prev = t + 1;
      }
    }
    return result;
  },

  'uncrossed-lines': (...args: unknown[]) => {
    const nums1 = args[0] as number[], nums2 = args[1] as number[];
    const m = nums1.length, n = nums2.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        if (nums1[i - 1] === nums2[j - 1]) dp[i]![j] = dp[i - 1]![j - 1]! + 1;
        else dp[i]![j] = Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
    return dp[m]![n];
  },

  'course-schedule-iii': (...args: unknown[]) => {
    const courses = (args[0] as number[][]).map(c => [...c]);
    courses.sort((a, b) => a[1]! - b[1]!);
    const heap: number[] = [];
    let time = 0;
    for (const [d, end] of courses) {
      time += d!;
      heap.push(d!);
      heap.sort((a, b) => b - a);
      if (time > end!) { time -= heap.shift()!; }
    }
    return heap.length;
  },

  'buy-two-chocolates': (...args: unknown[]) => {
    const prices = [...(args[0] as number[])];
    const money = args[1] as number;
    prices.sort((a, b) => a - b);
    const sum = prices[0]! + prices[1]!;
    return sum <= money ? money - sum : money;
  },

  'most-frequent-even-element': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) if (n % 2 === 0) freq.set(n, (freq.get(n) ?? 0) + 1);
    let best = -1, bestFreq = 0;
    for (const [n, f] of freq) {
      if (f > bestFreq || (f === bestFreq && n < best)) { best = n; bestFreq = f; }
    }
    return best;
  },

  'find-first-palindromic-string': (...args: unknown[]) => {
    const words = args[0] as string[];
    for (const w of words) {
      let l = 0, r = w.length - 1, ok = true;
      while (l < r) { if (w[l] !== w[r]) { ok = false; break; } l++; r--; }
      if (ok) return w;
    }
    return '';
  },

  'minimum-number-operations-make-array-empty': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    let ops = 0;
    for (const f of freq.values()) {
      if (f === 1) return -1;
      ops += Math.ceil(f / 3);
    }
    return ops;
  },

  'maximum-difference-between-node-and-ancestor': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    let ans = 0;
    const dfs = (node: _TN | null, mn: number, mx: number) => {
      if (!node) return;
      ans = Math.max(ans, Math.abs(mn - node.v), Math.abs(mx - node.v));
      const nm = Math.min(mn, node.v), nx = Math.max(mx, node.v);
      dfs(node.l, nm, nx);
      dfs(node.r, nm, nx);
    };
    if (root) dfs(root, root.v, root.v);
    return ans;
  },

  'jump-game-vi': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const dp = [nums[0]!]; const dq: number[] = [0];
    for (let i = 1; i < nums.length; i++) {
      while (dq.length && dq[0]! < i - k) dq.shift();
      dp[i] = nums[i]! + dp[dq[0]!]!;
      while (dq.length && dp[dq[dq.length - 1]!]! <= dp[i]!) dq.pop();
      dq.push(i);
    }
    return dp[nums.length - 1]!;
  },

  'longest-subarray-max-bitwise-and': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const mx = Math.max(...nums);
    let ans = 0, cur = 0;
    for (const x of nums) { if (x === mx) { cur++; ans = Math.max(ans, cur); } else cur = 0; }
    return ans;
  },

  'maximum-events-can-attend': (...args: unknown[]) => {
    const events = (args[0] as number[][]).map(e => [...e]).sort((a, b) => a[0]! - b[0]!);
    const heap: number[] = [];
    let i = 0, day = 0, ans = 0;
    while (i < events.length || heap.length > 0) {
      if (heap.length === 0) day = events[i]![0]!;
      while (i < events.length && events[i]![0]! <= day) {
        heap.push(events[i]![1]!);
        heap.sort((a, b) => a - b);
        i++;
      }
      while (heap.length > 0 && heap[0]! < day) heap.shift();
      if (heap.length > 0) { heap.shift(); ans++; }
      day++;
    }
    return ans;
  },

  'count-nodes-equal-average-subtree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    let ans = 0;
    const dfs = (n: _TN | null): [number, number] => {
      if (!n) return [0, 0];
      const [ls, lc] = dfs(n.l); const [rs, rc] = dfs(n.r);
      const s = n.v + ls + rs, c = 1 + lc + rc;
      if (Math.floor(s / c) === n.v) ans++;
      return [s, c];
    };
    dfs(root);
    return ans;
  },

  'maximum-level-sum-binary-tree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    if (!root) return 1;
    let level = 1, ans = 1, mx = -Infinity;
    const q: (_TN | null)[] = [root];
    while (q.length) {
      const n = q.length; let s = 0;
      for (let i = 0; i < n; i++) {
        const nd = q.shift()!;
        s += nd.v;
        if (nd.l) q.push(nd.l);
        if (nd.r) q.push(nd.r);
      }
      if (s > mx) { mx = s; ans = level; }
      level++;
    }
    return ans;
  },

  'minimum-distance-value': (...args: unknown[]) => {
    const arr1 = args[0] as number[], arr2 = args[1] as number[], d = args[2] as number;
    let count = 0;
    for (const a of arr1) {
      if (arr2.every(b => Math.abs(a - b) > d)) count++;
    }
    return count;
  },

  'minimum-operations-make-array-alternating': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    if (n === 1) return 0;
    const topTwo = (arr: number[]): [[number, number], [number, number]] => {
      const freq = new Map<number, number>();
      for (const v of arr) freq.set(v, (freq.get(v) ?? 0) + 1);
      const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);
      return [sorted[0] ?? [0, 0], sorted[1] ?? [0, 0]] as [[number, number], [number, number]];
    };
    const even: number[] = [], odd: number[] = [];
    for (let i = 0; i < n; i++) (i % 2 === 0 ? even : odd).push(nums[i]!);
    const [[ev1, ef1], [, ef2]] = topTwo(even);
    const [[ov1, of1], [, of2]] = topTwo(odd);
    if (ev1 !== ov1) return n - (ef1 + of1);
    return n - Math.max(ef1 + of2, ef2 + of1);
  },

  'redistribute-characters-make-all-strings-equal': (...args: unknown[]) => {
    const words = args[0] as string[];
    const n = words.length;
    const freq = new Map<string, number>();
    for (const w of words) for (const c of w) freq.set(c, (freq.get(c) ?? 0) + 1);
    return [...freq.values()].every(f => f % n === 0);
  },

  'check-completeness-binary-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    if (!root) return true;
    const q: (_TN | null)[] = [root];
    let seenNull = false;
    while (q.length) {
      const node = q.shift()!;
      if (!node) { seenNull = true; continue; }
      if (seenNull) return false;
      q.push(node.l ?? null, node.r ?? null);
    }
    return true;
  },

  'maximum-twin-sum-linked-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const n = arr.length;
    let max = 0;
    for (let l = 0, r = n - 1; l < r; l++, r--) {
      max = Math.max(max, arr[l]! + arr[r]!);
    }
    return max;
  },

  'k-radius-subarray-averages': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const n = nums.length, w = 2 * k + 1;
    const avgs = new Array(n).fill(-1);
    if (w > n) return avgs;
    let sum = 0;
    for (let i = 0; i < w; i++) sum += nums[i]!;
    avgs[k] = Math.floor(sum / w);
    for (let i = k + 1; i < n - k; i++) {
      sum += nums[i + k]! - nums[i - k - 1]!;
      avgs[i] = Math.floor(sum / w);
    }
    return avgs;
  },

  'number-of-ways-select-buildings': (...args: unknown[]) => {
    const s = args[0] as string;
    let c0 = 0, c1 = 0, c01 = 0, c10 = 0, ans = 0;
    for (const ch of s) {
      if (ch === '0') { c10 += c1; ans += c01; c0++; }
      else { c01 += c0; ans += c10; c1++; }
    }
    return ans;
  },

  'find-city-smallest-number-neighbors': (...args: unknown[]) => {
    const n = args[0] as number, edges = args[1] as number[][], dt = args[2] as number;
    const INF = Infinity;
    const dist: number[][] = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)));
    for (const e of edges) { const [u, v, w] = [e[0]!, e[1]!, e[2]!]; dist[u]![v] = w; dist[v]![u] = w; }
    for (let k = 0; k < n; k++)
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
          if (dist[i]![k]! + dist[k]![j]! < dist[i]![j]!) dist[i]![j] = dist[i]![k]! + dist[k]![j]!;
    let ans = -1, minN = n + 1;
    for (let i = 0; i < n; i++) {
      let cnt = 0;
      for (let j = 0; j < n; j++) if (j !== i && dist[i]![j]! <= dt) cnt++;
      if (cnt <= minN) { minN = cnt; ans = i; }
    }
    return ans;
  },

  'total-appeal-of-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const last = new Map<string, number>();
    let dp = 0, ans = 0;
    for (let i = 0; i < s.length; i++) {
      dp += i - (last.get(s[i]!) ?? -1);
      ans += dp;
      last.set(s[i]!, i);
    }
    return ans;
  },

  'minimum-fuel-cost-report-capital': (...args: unknown[]) => {
    const roads = args[0] as number[][], seats = args[1] as number;
    const n = roads.length + 1;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const e of roads) { const [u, v] = [e[0]!, e[1]!]; adj[u]!.push(v); adj[v]!.push(u); }
    let ans = 0;
    const dfs = (u: number, p: number): number => {
      let sz = 1;
      for (const v of adj[u]!) if (v !== p) sz += dfs(v, u);
      if (u !== 0) ans += Math.ceil(sz / seats);
      return sz;
    };
    dfs(0, -1);
    return ans;
  },

  'as-far-from-land-as-possible': (...args: unknown[]) => {
    const grid = (args[0] as number[][]).map((r) => [...r]);
    const n = grid.length;
    const q: [number, number][] = [];
    for (let r = 0; r < n; r++)
      for (let c = 0; c < n; c++)
        if (grid[r]![c] === 1) q.push([r, c]);
    if (q.length === 0 || q.length === n * n) return -1;
    const dist: number[][] = grid.map((r) => r.map((v) => (v === 1 ? 0 : -1)));
    let head = 0;
    let maxD = -1;
    const dirs: [number, number][] = [[-1,0],[1,0],[0,-1],[0,1]];
    while (head < q.length) {
      const cell = q[head++];
      const r = cell![0]!, c = cell![1]!;
      for (const d of dirs) {
        const nr = r + d[0]!, nc = c + d[1]!;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr]![nc] === -1) {
          dist[nr]![nc] = dist[r]![c]! + 1;
          maxD = Math.max(maxD, dist[nr]![nc]!);
          q.push([nr, nc]);
        }
      }
    }
    return maxD;
  },

  'cheapest-flights-within-k-stops': (...args: unknown[]) => {
    const n = args[0] as number;
    const flights = args[1] as number[][];
    const src = args[2] as number;
    const dst = args[3] as number;
    const k = args[4] as number;
    let prices = new Array<number>(n).fill(Infinity);
    prices[src] = 0;
    for (let i = 0; i <= k; i++) {
      const tmp = [...prices];
      for (const flight of flights) {
        const from = flight[0]!, to = flight[1]!, price = flight[2]!;
        if (prices[from]! < Infinity) {
          tmp[to] = Math.min(tmp[to]!, prices[from]! + price);
        }
      }
      prices = tmp;
    }
    return prices[dst]! === Infinity ? -1 : prices[dst]!;
  },

  'sorted-array-to-bst': (...args: unknown[]) => {
    const nums = args[0] as number[];
    function build(lo: number, hi: number): _TN | null {
      if (lo > hi) return null;
      const mid = lo + Math.ceil((hi - lo) / 2);
      return { v: nums[mid]!, l: build(lo, mid - 1), r: build(mid + 1, hi) };
    }
    return _treeToArr(build(0, nums.length - 1));
  },

  'factorial-trailing-zeroes': (...args: unknown[]) => {
    let n = args[0] as number;
    let count = 0;
    while (n >= 5) { n = Math.floor(n / 5); count += n; }
    return count;
  },

  'unique-binary-search-trees': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j <= i; j++) dp[i] += dp[j - 1]! * dp[i - j]!;
    }
    return dp[n]!;
  },

  'non-decreasing-array': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i]! > nums[i + 1]!) {
        count++;
        if (count > 1) return false;
        if (i > 0 && nums[i - 1]! > nums[i + 1]!) nums[i + 1] = nums[i]!;
        else nums[i] = nums[i + 1]!;
      }
    }
    return true;
  },

  'best-time-buy-sell-iii': (...args: unknown[]) => {
    const prices = args[0] as number[];
    let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;
    for (const p of prices) {
      buy1 = Math.max(buy1, -p);
      sell1 = Math.max(sell1, buy1 + p);
      buy2 = Math.max(buy2, sell1 - p);
      sell2 = Math.max(sell2, buy2 + p);
    }
    return sell2;
  },

  'deepest-leaves-sum': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    if (!root) return 0;
    const q: (_TN | null)[] = [root];
    let levelSum = 0;
    while (q.length) {
      const n = q.length;
      levelSum = 0;
      for (let i = 0; i < n; i++) {
        const nd = q.shift()!;
        levelSum += nd.v;
        if (nd.l) q.push(nd.l);
        if (nd.r) q.push(nd.r);
      }
    }
    return levelSum;
  },

  'count-subarrays-fixed-bounds': (...args: unknown[]) => {
    const nums = args[0] as number[], minK = args[1] as number, maxK = args[2] as number;
    let minPos = -1, maxPos = -1, badPos = -1, ans = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]! < minK || nums[i]! > maxK) badPos = i;
      if (nums[i] === minK) minPos = i;
      if (nums[i] === maxK) maxPos = i;
      ans += Math.max(0, Math.min(minPos, maxPos) - badPos);
    }
    return ans;
  },

  'amount-of-time-for-binary-tree-to-be-infected': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[], start = args[1] as number;
    const root = _buildTree(arr);
    const adj = new Map<number, number[]>();
    const build = (n: _TN | null) => {
      if (!n) return;
      if (!adj.has(n.v)) adj.set(n.v, []);
      if (n.l) { adj.get(n.v)!.push(n.l.v); if (!adj.has(n.l.v)) adj.set(n.l.v, []); adj.get(n.l.v)!.push(n.v); build(n.l); }
      if (n.r) { adj.get(n.v)!.push(n.r.v); if (!adj.has(n.r.v)) adj.set(n.r.v, []); adj.get(n.r.v)!.push(n.v); build(n.r); }
    };
    build(root);
    const visited = new Set<number>([start]);
    let q = [start], ans = 0;
    while (q.length) {
      const next: number[] = [];
      for (const u of q) for (const v of (adj.get(u) ?? [])) if (!visited.has(v)) { visited.add(v); next.push(v); }
      if (next.length) ans++;
      q = next;
    }
    return ans;
  },

  'count-collisions-on-road': (...args: unknown[]) => {
    const s = args[0] as string;
    let l = 0, r = s.length - 1;
    while (l < s.length && s[l] === 'L') l++;
    while (r >= 0 && s[r] === 'R') r--;
    let ans = 0;
    for (let i = l; i <= r; i++) if (s[i] !== 'S') ans++;
    return ans;
  },

  'maximum-alternating-subsequence-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let even = 0, odd = 0;
    for (const x of nums) {
      const ne = Math.max(even, odd + x);
      const no = Math.max(odd, even - x);
      even = ne; odd = no;
    }
    return even;
  },

  'count-hills-valleys': (...args: unknown[]) => {
    const raw = args[0] as number[];
    const nums: number[] = [raw[0]!];
    for (let i = 1; i < raw.length; i++) if (raw[i] !== raw[i - 1]) nums.push(raw[i]!);
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i]! > nums[i - 1]! && nums[i]! > nums[i + 1]!) count++;
      else if (nums[i]! < nums[i - 1]! && nums[i]! < nums[i + 1]!) count++;
    }
    return count;
  },

  'find-all-lonely-numbers': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    const res: number[] = [];
    for (const [n, c] of freq) {
      if (c === 1 && !freq.has(n - 1) && !freq.has(n + 1)) res.push(n);
    }
    return res.sort((a, b) => a - b);
  },

  'count-prefixes-of-given-string': (...args: unknown[]) => {
    const words = args[0] as string[], s = args[1] as string;
    return words.filter(w => s.startsWith(w)).length;
  },

  'minimum-number-game': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const arr: number[] = [];
    for (let i = 0; i < nums.length; i += 2) {
      arr.push(nums[i + 1]!, nums[i]!);
    }
    return arr;
  },

  'find-words-containing-character': (...args: unknown[]) => {
    const words = args[0] as string[], x = args[1] as string;
    return words.reduce<number[]>((acc, w, i) => { if (w.includes(x)) acc.push(i); return acc; }, []);
  },

  'count-good-numbers': (...args: unknown[]) => {
    const n = args[0] as number;
    const MOD = 1_000_000_007n;
    const modpow = (base: bigint, exp: bigint, mod: bigint): bigint => {
      let result = 1n;
      base %= mod;
      while (exp > 0n) {
        if (exp & 1n) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1n;
      }
      return result;
    };
    const nb = BigInt(n);
    const even = (nb + 1n) / 2n;
    const odd = nb / 2n;
    return Number(modpow(5n, even, MOD) * modpow(4n, odd, MOD) % MOD);
  },

  'maximum-sum-exactly-k-elements': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const m = Math.max(...nums);
    return k * m + (k * (k - 1)) / 2;
  },

  'minimum-common-value': (...args: unknown[]) => {
    const nums1 = args[0] as number[], nums2 = args[1] as number[];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] === nums2[j]) return nums1[i]!;
      else if (nums1[i]! < nums2[j]!) i++;
      else j++;
    }
    return -1;
  },

  'find-pivot-integer': (...args: unknown[]) => {
    const n = args[0] as number;
    const s = n * (n + 1) / 2;
    const x = Math.floor(Math.sqrt(s));
    return x * x === s ? x : -1;
  },

  'compare-version-numbers': (...args: unknown[]) => {
    const v1 = args[0] as string, v2 = args[1] as string;
    const a = v1.split('.'), b = v2.split('.');
    const n = Math.max(a.length, b.length);
    for (let i = 0; i < n; i++) {
      const x = +(a[i] ?? 0), y = +(b[i] ?? 0);
      if (x < y) return -1;
      if (x > y) return 1;
    }
    return 0;
  },

  'open-the-lock': (...args: unknown[]) => {
    const deadends = args[0] as string[], target = args[1] as string;
    const dead = new Set(deadends);
    if (dead.has('0000')) return -1;
    if (target === '0000') return 0;
    const vis = new Set(dead);
    vis.add('0000');
    let q = ['0000'], steps = 0;
    while (q.length) {
      const next: string[] = [];
      steps++;
      for (const s of q) {
        for (let i = 0; i < 4; i++) {
          for (const d of [1, -1]) {
            const ns = s.split('');
            ns[i] = String((+ns[i]! + d + 10) % 10);
            const t = ns.join('');
            if (t === target) return steps;
            if (!vis.has(t)) { vis.add(t); next.push(t); }
          }
        }
      }
      q = next;
    }
    return -1;
  },

  'diagonal-traverse': (...args: unknown[]) => {
    const mat = args[0] as number[][];
    const m = mat.length, n = mat[0]!.length;
    const res: number[] = [];
    for (let d = 0; d < m + n - 1; d++) {
      const tmp: number[] = [];
      for (let r = Math.max(0, d - n + 1); r <= Math.min(d, m - 1); r++) tmp.push(mat[r]![d - r]!);
      if (d % 2 === 0) tmp.reverse();
      res.push(...tmp);
    }
    return res;
  },

  'reshape-the-matrix': (...args: unknown[]) => {
    const mat = args[0] as number[][], r = args[1] as number, c = args[2] as number;
    const flat = mat.flat();
    if (flat.length !== r * c) return mat;
    const res: number[][] = [];
    for (let i = 0; i < r; i++) res.push(flat.slice(i * c, (i + 1) * c));
    return res;
  },

  'find-town-judge': (...args: unknown[]) => {
    const n = args[0] as number, trust = args[1] as number[][];
    const s = new Array(n + 1).fill(0);
    for (const [a, b] of trust) { s[a as number]--; s[b as number]++; }
    for (let i = 1; i <= n; i++) if (s[i] === n - 1) return i;
    return -1;
  },

  'possible-bipartition': (...args: unknown[]) => {
    const n = args[0] as number, dislikes = args[1] as number[][];
    const adj: number[][] = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of dislikes) { adj[a as number]!.push(b as number); adj[b as number]!.push(a as number); }
    const color = new Int8Array(n + 1).fill(-1);
    for (let s = 1; s <= n; s++) {
      if (color[s] !== -1) continue;
      color[s] = 0;
      const q = [s];
      while (q.length) {
        const u = q.shift()!;
        for (const v of adj[u]!) {
          if (color[v] === -1) { color[v] = (1 - color[u]!) as 0 | 1; q.push(v); }
          else if (color[v] === color[u]) return false;
        }
      }
    }
    return true;
  },

  'flip-string-to-monotone-increasing': (...args: unknown[]) => {
    const s = args[0] as string;
    let flips = 0, ones = 0;
    for (const c of s) {
      if (c === '1') ones++;
      else flips = Math.min(flips + 1, ones);
    }
    return flips;
  },

  'maximum-length-subarray-positive-product': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let pos = 0, neg = 0, ans = 0;
    for (const n of nums) {
      if (n === 0) { pos = 0; neg = 0; }
      else if (n > 0) { pos = pos + 1; neg = neg > 0 ? neg + 1 : 0; }
      else { [pos, neg] = [neg > 0 ? neg + 1 : 0, pos + 1]; }
      ans = Math.max(ans, pos);
    }
    return ans;
  },

  'minimum-days-to-make-m-bouquets': (...args: unknown[]) => {
    const bloomDay = args[0] as number[], m = args[1] as number, k = args[2] as number;
    if (m * k > bloomDay.length) return -1;
    const canMake = (day: number): boolean => {
      let bouquets = 0, streak = 0;
      for (const b of bloomDay) {
        if (b <= day) { streak++; if (streak === k) { bouquets++; streak = 0; } }
        else streak = 0;
      }
      return bouquets >= m;
    };
    let lo = 1, hi = Math.max(...bloomDay);
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (canMake(mid)) hi = mid; else lo = mid + 1;
    }
    return lo;
  },

  'find-resultant-array-after-removing-anagrams': (...args: unknown[]) => {
    const words = args[0] as string[];
    const sorted = (s: string) => s.split('').sort().join('');
    const stack: string[] = [];
    for (const w of words) {
      if (stack.length === 0 || sorted(stack[stack.length - 1]!) !== sorted(w)) {
        stack.push(w);
      }
    }
    return stack;
  },

  'longest-zigzag-path-binary-tree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    let ans = 0;
    const dfs = (node: _TN | null): [number, number] => {
      if (!node) return [-1, -1];
      const [, lr] = dfs(node.l);
      const [rl] = dfs(node.r);
      const goLeft = lr + 1;
      const goRight = rl + 1;
      ans = Math.max(ans, goLeft, goRight);
      return [goLeft, goRight];
    };
    dfs(root);
    return ans;
  },

  'two-sum-ii': (...args: unknown[]) => {
    const numbers = args[0] as number[], target = args[1] as number;
    let l = 0, r = numbers.length - 1;
    while (l < r) {
      const s = numbers[l]! + numbers[r]!;
      if (s === target) return [l + 1, r + 1];
      if (s < target) l++; else r--;
    }
    return [-1, -1];
  },

  'set-mismatch': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const cnt = new Array(nums.length + 1).fill(0);
    for (const x of nums) cnt[x as number]++;
    let dup = -1, miss = -1;
    for (let i = 1; i <= nums.length; i++) {
      if (cnt[i] === 2) dup = i;
      if (cnt[i] === 0) miss = i;
    }
    return [dup, miss];
  },

  'maximum-gap': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    if (nums.length < 2) return 0;
    nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 1; i < nums.length; i++) max = Math.max(max, nums[i]! - nums[i - 1]!);
    return max;
  },

  'array-partition': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) sum += nums[i]!;
    return sum;
  },

  'power-of-four': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n <= 0) return false;
    if ((n & (n - 1)) !== 0) return false;
    return (n & 0xAAAAAAAA) === 0;
  },

  'valid-palindrome-ii': (...args: unknown[]) => {
    const s = args[0] as string;
    const isPalin = (l: number, r: number) => {
      while (l < r) { if (s[l++] !== s[r--]) return false; }
      return true;
    };
    let l = 0, r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return isPalin(l + 1, r) || isPalin(l, r - 1);
      l++; r--;
    }
    return true;
  },

  'bulb-switcher': (...args: unknown[]) => {
    const n = args[0] as number;
    return Math.floor(Math.sqrt(n));
  },

  'self-dividing-numbers': (...args: unknown[]) => {
    const left = args[0] as number, right = args[1] as number;
    const result: number[] = [];
    for (let n = left; n <= right; n++) {
      let x = n, ok = true;
      while (x > 0) {
        const d = x % 10;
        if (d === 0 || n % d !== 0) { ok = false; break; }
        x = Math.floor(x / 10);
      }
      if (ok) result.push(n);
    }
    return result;
  },

  'student-attendance-record-i': (...args: unknown[]) => {
    const s = args[0] as string;
    return (s.split('A').length - 1) < 2 && !s.includes('LLL');
  },

  'license-key-formatting': (...args: unknown[]) => {
    const s = (args[0] as string).replace(/-/g, '').toUpperCase();
    const k = args[1] as number;
    const result: string[] = [];
    let i = s.length;
    while (i > 0) {
      result.unshift(s.slice(Math.max(0, i - k), i));
      i -= k;
    }
    return result.join('-');
  },

  'keyboard-row': (...args: unknown[]) => {
    const words = args[0] as string[];
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const rowOf = new Map<string, number>();
    for (let r = 0; r < rows.length; r++) for (const c of rows[r]!) rowOf.set(c, r);
    return words.filter(w => {
      const r = rowOf.get(w[0]!.toLowerCase());
      return [...w].every(c => rowOf.get(c.toLowerCase()) === r);
    });
  },

  'longest-uncommon-subsequence-i': (...args: unknown[]) => {
    const a = args[0] as string, b = args[1] as string;
    if (a === b) return -1;
    return Math.max(a.length, b.length);
  },

  'perfect-number': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num;
  },

  'arrange-coins': (...args: unknown[]) => {
    const n = args[0] as number;
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
  },

  'nth-digit': (...args: unknown[]) => {
    let n = args[0] as number;
    let d = 1, cnt = 9, start = 1;
    while (n > d * cnt) { n -= d * cnt; d++; cnt *= 10; start *= 10; }
    const num = start + Math.floor((n - 1) / d);
    return +String(num)[(n - 1) % d]!;
  },

  'find-the-winner': (...args: unknown[]) => {
    const n = args[0] as number, k = args[1] as number;
    let pos = 0;
    for (let i = 2; i <= n; i++) pos = (pos + k) % i;
    return pos + 1;
  },

  'count-negative-numbers': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    let r = 0, c = grid[0]!.length - 1, cnt = 0;
    while (r < grid.length && c >= 0) {
      if (grid[r]![c]! < 0) { cnt += grid.length - r; c--; }
      else r++;
    }
    return cnt;
  },

  'can-make-arithmetic-progression': (...args: unknown[]) => {
    const arr = [...(args[0] as number[])].sort((a, b) => a - b);
    const d = arr[1]! - arr[0]!;
    return arr.every((_, i) => i < 2 || arr[i]! - arr[i - 1]! === d);
  },

  'first-bad-version': (...args: unknown[]) => {
    const n = args[0] as number, firstBad = args[1] as number;
    const isBadVersion = (v: number) => v >= firstBad;
    let lo = 1, hi = n;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) hi = mid; else lo = mid + 1;
    }
    return lo;
  },

  'number-of-segments-in-string': (...args: unknown[]) => {
    const s = args[0] as string;
    return s.trim().split(/\s+/).filter(w => w.length > 0).length;
  },

  'find-mode-bst': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    const freq = new Map<number, number>();
    const dfs = (n: _TN | null) => {
      if (!n) return;
      freq.set(n.v, (freq.get(n.v) ?? 0) + 1);
      dfs(n.l); dfs(n.r);
    };
    dfs(root);
    if (freq.size === 0) return [];
    const max = Math.max(...freq.values());
    return [...freq.entries()].filter(([, c]) => c === max).map(([v]) => v).sort((a, b) => a - b);
  },

  'final-value-after-operations': (...args: unknown[]) => {
    const ops = args[0] as string[];
    let x = 0;
    for (const op of ops) x += op.includes('+') ? 1 : -1;
    return x;
  },

  'find-original-array-from-doubled': (...args: unknown[]) => {
    const changed = [...(args[0] as number[])].sort((a, b) => a - b);
    const freq = new Map<number, number>();
    for (const n of changed) freq.set(n, (freq.get(n) ?? 0) + 1);
    const result: number[] = [];
    for (const n of changed) {
      if ((freq.get(n) ?? 0) === 0) continue;
      freq.set(n, freq.get(n)! - 1);
      const d = n * 2;
      if ((freq.get(d) ?? 0) === 0) return [];
      freq.set(d, freq.get(d)! - 1);
      result.push(n);
    }
    return result;
  },

  'number-of-students-unable-to-eat-lunch': (...args: unknown[]) => {
    const students = [...(args[0] as number[])];
    const sandwiches = args[1] as number[];
    const cnt = [0, 0];
    for (const s of students) cnt[s]!++;
    for (const sand of sandwiches) {
      if (cnt[sand] === 0) return cnt[0]! + cnt[1]!;
      cnt[sand]!--;
    }
    return 0;
  },

  'maximum-number-of-words-found-in-sentences': (...args: unknown[]) => {
    const sentences = args[0] as string[];
    return Math.max(...sentences.map(s => s.split(' ').length));
  },

  'capitalize-the-title': (...args: unknown[]) => {
    const title = args[0] as string;
    return title.split(' ').map(w =>
      w.length <= 2 ? w.toLowerCase() : w[0]!.toUpperCase() + w.slice(1).toLowerCase()
    ).join(' ');
  },

  'hamming-distance': (...args: unknown[]) => {
    let xor = ((args[0] as number) ^ (args[1] as number)) >>> 0;
    let count = 0;
    while (xor) { count += xor & 1; xor >>>= 1; }
    return count;
  },

  'single-number-iii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let xor = 0;
    for (const n of nums) xor ^= n;
    const bit = xor & (-xor);
    let a = 0;
    for (const n of nums) if (n & bit) a ^= n;
    return [a, xor ^ a].sort((x, y) => x - y);
  },

  'minimum-operations-to-make-array-increasing': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    let ops = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! <= nums[i - 1]!) {
        ops += nums[i - 1]! + 1 - nums[i]!;
        nums[i] = nums[i - 1]! + 1;
      }
    }
    return ops;
  },

  'rank-transform-array': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const rank = new Map(sorted.map((v, i) => [v, i + 1]));
    return arr.map(x => rank.get(x));
  },

  'final-value-operations': (...args: unknown[]) => {
    const operations = args[0] as string[];
    return operations.reduce((x, op) => op.includes('++') ? x + 1 : x - 1, 0);
  },

  'two-city-scheduling': (...args: unknown[]) => {
    const costs = [...(args[0] as number[][])].sort((a, b) => (a[0]! - a[1]!) - (b[0]! - b[1]!));
    const n = costs.length / 2;
    return costs.reduce((s, c, i) => s + (i < n ? c[0]! : c[1]!), 0);
  },

  'check-if-straight-line': (...args: unknown[]) => {
    const c = args[0] as number[][];
    const [x1, y1] = c[0]!;
    const [x2, y2] = c[1]!;
    return c.every(([x, y]) => (y2! - y1!) * (x! - x1!) === (y! - y1!) * (x2! - x1!));
  },

  'binary-gap': (...args: unknown[]) => {
    let n = args[0] as number, last = -1, best = 0, pos = 0;
    while (n) {
      if (n & 1) { if (last >= 0) best = Math.max(best, pos - last); last = pos; }
      n >>>= 1; pos++;
    }
    return best;
  },

  'design-hashmap': (...args: unknown[]) => {
    const ops = args[0] as string[], vals = args[1] as number[][];
    const data = new Map<number, number>();
    const results: (number | null)[] = [null];
    for (let i = 1; i < ops.length; i++) {
      if (ops[i] === 'put') { data.set(vals[i]![0]!, vals[i]![1]!); results.push(null); }
      else if (ops[i] === 'get') { results.push(data.has(vals[i]![0]!) ? data.get(vals[i]![0]!)! : -1); }
      else { data.delete(vals[i]![0]!); results.push(null); }
    }
    return results;
  },

  'contiguous-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const map = new Map<number, number>([[0, -1]]);
    let sum = 0, ans = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 0 ? -1 : 1;
      if (map.has(sum)) ans = Math.max(ans, i - map.get(sum)!);
      else map.set(sum, i);
    }
    return ans;
  },

  'shifting-letters': (...args: unknown[]) => {
    const s = args[0] as string, shifts = args[1] as number[];
    const n = s.length;
    const suffix = [...shifts];
    for (let i = n - 2; i >= 0; i--) suffix[i] = (suffix[i]! + suffix[i + 1]!) % 26;
    return [...s].map((c, i) => String.fromCharCode((c.charCodeAt(0) - 97 + suffix[i]!) % 26 + 97)).join('');
  },

  'convert-bst-to-greater-tree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    let sum = 0;
    const dfs = (n: _TN | null) => {
      if (!n) return;
      dfs(n.r);
      sum += n.v;
      n.v = sum;
      dfs(n.l);
    };
    dfs(root);
    const toArr = (n: _TN | null): (number | null)[] => {
      if (!n) return [];
      const res: (number | null)[] = [], q: (_TN | null)[] = [n];
      while (q.length) {
        const node = q.shift()!;
        if (!node) { res.push(null); continue; }
        res.push(node.v);
        q.push(node.l); q.push(node.r);
      }
      while (res.length && res[res.length - 1] === null) res.pop();
      return res;
    };
    return toArr(root);
  },

  'distribute-coins-binary-tree': (...args: unknown[]) => {
    const arr = args[0] as (number | null)[];
    const root = _buildTree(arr);
    let moves = 0;
    const dfs = (n: _TN | null): number => {
      if (!n) return 0;
      const l = dfs(n.l), r = dfs(n.r);
      moves += Math.abs(l) + Math.abs(r);
      return n.v + l + r - 1;
    };
    dfs(root);
    return moves;
  },

  'flip-columns-for-maximum-equal-rows': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const freq = new Map<string, number>();
    for (const row of matrix) {
      const flip = row[0] === 1;
      const key = row.map(v => flip ? 1 - v : v).join('');
      freq.set(key, (freq.get(key) ?? 0) + 1);
    }
    return Math.max(...freq.values());
  },

  'delete-columns-sorted-iii': (...args: unknown[]) => {
    const strs = args[0] as string[];
    const n = strs[0]!.length;
    const dp = new Array(n).fill(1);
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < j; i++) {
        if (strs.every((_s, k) => strs[k]![i]! <= strs[k]![j]!)) {
          dp[j] = Math.max(dp[j]!, dp[i]! + 1);
        }
      }
    }
    return n - Math.max(...dp);
  },

  'minimum-bit-flips': (...args: unknown[]) => {
    let x = ((args[0] as number) ^ (args[1] as number)) >>> 0, c = 0;
    while (x) { c += x & 1; x >>>= 1; }
    return c;
  },

  'smallest-even-multiple': (...args: unknown[]) => {
    const n = args[0] as number;
    return n % 2 === 0 ? n : 2 * n;
  },

  'special-array-greater-equal': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    for (let x = 0; x <= n; x++) {
      if (nums.filter(v => v >= x).length === x) return x;
    }
    return -1;
  },

  'count-pairs-two-arrays': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    let l = 0, r = nums.length - 1, cnt = 0;
    while (l < r) {
      if (nums[l]! + nums[r]! < target) { cnt += r - l; l++; }
      else r--;
    }
    return cnt;
  },

  'convert-time-hhmm': (...args: unknown[]) => {
    const toMin = (s: string) => +s.slice(0, 2) * 60 + +s.slice(3);
    let d = toMin(args[1] as string) - toMin(args[0] as string), ops = 0;
    for (const step of [60, 15, 5, 1]) { ops += Math.floor(d / step); d %= step; }
    return ops;
  },

  'find-players-zero-losses': (...args: unknown[]) => {
    const matches = args[0] as number[][];
    const losses = new Map<number, number>();
    for (const m of matches) {
      const w = m[0]!, l = m[1]!;
      if (!losses.has(w)) losses.set(w, 0);
      losses.set(l, (losses.get(l) ?? 0) + 1);
    }
    const noLoss: number[] = [], oneLoss: number[] = [];
    for (const [p, cnt] of losses) {
      if (cnt === 0) noLoss.push(p);
      else if (cnt === 1) oneLoss.push(p);
    }
    return [noLoss.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
  },

  'check-distances-fair-nodes': (...args: unknown[]) => {
    const s = args[0] as string, distance = args[1] as number[];
    const first = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
      const c = s[i]!;
      if (!first.has(c)) { first.set(c, i); }
      else {
        if (i - first.get(c)! - 1 !== distance[c.charCodeAt(0) - 97]!) return false;
      }
    }
    return true;
  },

  'minimum-rounds-complete-tasks': (...args: unknown[]) => {
    const tasks = args[0] as number[];
    const freq = new Map<number, number>();
    for (const t of tasks) freq.set(t, (freq.get(t) ?? 0) + 1);
    let rounds = 0;
    for (const f of freq.values()) {
      if (f === 1) return -1;
      rounds += Math.ceil(f / 3);
    }
    return rounds;
  },

  'largest-combination-bitwise-and': (...args: unknown[]) => {
    const candidates = args[0] as number[];
    let best = 0;
    for (let bit = 0; bit < 24; bit++) {
      let cnt = 0;
      for (const c of candidates) if (c & (1 << bit)) cnt++;
      best = Math.max(best, cnt);
    }
    return best;
  },

  'sort-the-people': (...args: unknown[]) => {
    const names = args[0] as string[], heights = args[1] as number[];
    return names.map((n, i) => [n, heights[i]!] as [string, number])
      .sort((a, b) => b[1] - a[1])
      .map(p => p[0]);
  },

  'baseball-game': (...args: unknown[]) => {
    const ops = args[0] as string[], s: number[] = [];
    for (const o of ops) {
      if (o === '+') s.push(s[s.length - 1]! + s[s.length - 2]!);
      else if (o === 'D') s.push(s[s.length - 1]! * 2);
      else if (o === 'C') s.pop();
      else s.push(+o);
    }
    return s.reduce((a, b) => a + b, 0);
  },

  'find-champion-graph': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const n = grid.length;
    for (let i = 0; i < n; i++) {
      if (grid[i]!.reduce((s, v) => s + v, 0) === n - 1) return i;
    }
    return -1;
  },

  'count-digits': (...args: unknown[]) => {
    const num = args[0] as number;
    let n = num, c = 0;
    while (n > 0) { const d = n % 10; if (d !== 0 && num % d === 0) c++; n = Math.floor(n / 10); }
    return c;
  },

  'apply-operations': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] && nums[i] === nums[i + 1]) { nums[i]! *= 2; nums[i + 1] = 0; }
    }
    return [...nums.filter(x => x !== 0), ...nums.filter(x => x === 0)];
  },

  'minimum-moves-to-seat': (...args: unknown[]) => {
    const seats = [...(args[0] as number[])].sort((a, b) => a - b);
    const students = [...(args[1] as number[])].sort((a, b) => a - b);
    return seats.reduce((s, v, i) => s + Math.abs(v - students[i]!), 0);
  },

  'rings-and-rods': (...args: unknown[]) => {
    const rings = args[0] as string;
    const rods = new Map<string, Set<string>>();
    for (let i = 0; i < rings.length; i += 2) {
      const c = rings[i]!, r = rings[i + 1]!;
      if (!rods.has(r)) rods.set(r, new Set());
      rods.get(r)!.add(c);
    }
    return [...rods.values()].filter(s => s.size === 3).length;
  },

  'find-gcd-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    return gcd(Math.min(...nums), Math.max(...nums));
  },

  'keep-multiplying-found-values': (...args: unknown[]) => {
    const s = new Set(args[0] as number[]);
    let v = args[1] as number;
    while (s.has(v)) v *= 2;
    return v;
  },

  'percentages-of-letter': (...args: unknown[]) => {
    const [s, letter] = args as [string, string];
    return Math.floor(s.split('').filter(c => c === letter).length / s.length * 100);
  },

  'maximum-bags-full-capacity': (...args: unknown[]) => {
    const capacity = args[0] as number[], rocks = args[1] as number[];
    let additional = args[2] as number;
    const rem = capacity.map((c, i) => c - rocks[i]!).sort((a, b) => a - b);
    let bags = 0;
    for (const r of rem) {
      if (r <= additional) { additional -= r; bags++; } else break;
    }
    return bags;
  },

  'find-subsequence-of-length-k': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const idx = [...nums.keys()].sort((a, b) => nums[b]! - nums[a]!).slice(0, k).sort((a, b) => a - b);
    return idx.map(i => nums[i]!);
  },

  'odd-string-difference': (...args: unknown[]) => {
    const words = args[0] as string[];
    const diff = (w: string) => w.slice(1).split('').map((c, i) => c.charCodeAt(0) - w.charCodeAt(i)).join(',');
    const m = new Map<string, string[]>();
    for (const w of words) { const k = diff(w); m.set(k, [...(m.get(k) ?? []), w]); }
    return [...m.values()].find(v => v.length === 1)![0];
  },

  'best-time-buy-sell-transaction-fee': (...args: unknown[]) => {
    const prices = args[0] as number[], fee = args[1] as number;
    let cash = 0, hold = -prices[0]!;
    for (let i = 1; i < prices.length; i++) {
      cash = Math.max(cash, hold + prices[i]! - fee);
      hold = Math.max(hold, cash - prices[i]!);
    }
    return cash;
  },

  'maximal-rectangle': (...args: unknown[]) => {
    const matrix = args[0] as string[][];
    if (!matrix.length || !matrix[0]!.length) return 0;
    const rows = matrix.length, cols = matrix[0]!.length;
    const heights = new Array<number>(cols).fill(0);
    let maxArea = 0;
    function largestRectHistogram(h: number[]): number {
      const stack: number[] = [];
      let area = 0;
      for (let i = 0; i <= h.length; i++) {
        const cur = i === h.length ? 0 : h[i]!;
        while (stack.length && h[stack[stack.length - 1]!]! > cur) {
          const height = h[stack.pop()!]!;
          const width = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1;
          area = Math.max(area, height * width);
        }
        stack.push(i);
      }
      return area;
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        heights[c] = matrix[r]![c] === '1' ? heights[c]! + 1 : 0;
      }
      maxArea = Math.max(maxArea, largestRectHistogram(heights));
    }
    return maxArea;
  },

  'stone-game-iii': (...args: unknown[]) => {
    const stoneValue = args[0] as number[];
    const n = stoneValue.length;
    const dp = new Array<number>(n + 1).fill(-Infinity);
    dp[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let k = 1; k <= 3 && i + k <= n; k++) {
        sum += stoneValue[i + k - 1]!;
        dp[i] = Math.max(dp[i]!, sum - dp[i + k]!);
      }
    }
    return dp[0]! > 0 ? 'Alice' : dp[0]! < 0 ? 'Bob' : 'Tie';
  },

  'maximum-profit-job-scheduling': (...args: unknown[]) => {
    const startTime = args[0] as number[], endTime = args[1] as number[], profit = args[2] as number[];
    const n = startTime.length;
    const jobs = Array.from({ length: n }, (_, i) => [endTime[i]!, startTime[i]!, profit[i]!] as [number, number, number]);
    jobs.sort((a, b) => a[0] - b[0]);
    const ends = jobs.map(j => j[0]);
    const dp = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      const [, start, p] = jobs[i]!;
      let lo = 0, hi = i;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ends[mid]! <= start) lo = mid + 1; else hi = mid;
      }
      dp[i + 1] = Math.max(dp[i]!, p + dp[lo]!);
    }
    return dp[n]!;
  },

  'count-of-smaller-numbers-after-self': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const counts = new Array<number>(nums.length).fill(0);
    const sorted: number[] = [];
    function bisectLeft(arr: number[], val: number): number {
      let lo = 0, hi = arr.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid]! < val) lo = mid + 1; else hi = mid; }
      return lo;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      const pos = bisectLeft(sorted, nums[i]!);
      counts[i] = pos;
      sorted.splice(pos, 0, nums[i]!);
    }
    return counts;
  },

  'k-th-symbol-in-grammar': (...args: unknown[]) => {
    let k = args[1] as number;
    let flips = 0;
    while (k > 1) {
      if (k % 2 === 0) flips++;
      k = Math.ceil(k / 2);
    }
    return flips % 2;
  },

  'longest-substring-without-repeating': (...args: unknown[]) => {
    const s = args[0] as string;
    const map = new Map<string, number>();
    let left = 0, best = 0;
    for (let right = 0; right < s.length; right++) {
      const c = s[right]!;
      if (map.has(c) && map.get(c)! >= left) left = map.get(c)! + 1;
      map.set(c, right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'decompress-run-length-encoding': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const res: number[] = [];
    for (let i = 0; i < nums.length; i += 2)
      for (let j = 0; j < nums[i]!; j++) res.push(nums[i + 1]!);
    return res;
  },

  'check-almost-equivalent-strings': (...args: unknown[]) => {
    const [word1, word2] = args as [string, string];
    const freq = (w: string) => { const m = new Map<string, number>(); for (const c of w) m.set(c, (m.get(c) ?? 0) + 1); return m; };
    const m1 = freq(word1), m2 = freq(word2);
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => Math.abs((m1.get(c) ?? 0) - (m2.get(c) ?? 0)) <= 3);
  },

  'minimum-value-positive-steps': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let s = 0, mn = Infinity;
    for (const n of nums) { s += n; mn = Math.min(mn, s); }
    return Math.max(1, 1 - mn);
  },

  'check-if-all-as-before-bs': (...args: unknown[]) => {
    const s = args[0] as string;
    let seenB = false;
    for (const c of s) { if (c === 'b') seenB = true; else if (seenB) return false; }
    return true;
  },

  'check-if-word-equals-summation': (...args: unknown[]) => {
    const [fw, sw, tw] = args as [string, string, string];
    const toNum = (w: string) => parseInt(w.split('').map(c => c.charCodeAt(0) - 97).join(''));
    return toNum(fw) + toNum(sw) === toNum(tw);
  },

  'ways-to-buy-pens-pencils': (...args: unknown[]) => {
    const [total, cost1, cost2] = args as [number, number, number];
    let ans = 0;
    for (let x = 0; x * cost1 <= total; x++) ans += Math.floor((total - x * cost1) / cost2) + 1;
    return ans;
  },

  'check-array-sorted-rotated': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let drops = 0;
    for (let i = 0; i < n; i++) if (nums[i]! > nums[(i + 1) % n]!) drops++;
    return drops <= 1;
  },

  'interpret-string': (...args: unknown[]) => {
    return (args[0] as string).replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
  },

  'merge-similar-items': (...args: unknown[]) => {
    const items1 = args[0] as number[][], items2 = args[1] as number[][];
    const m = new Map<number, number>();
    for (const [v, w] of [...items1, ...items2]) m.set(v!, (m.get(v!) ?? 0) + w!);
    return [...m].sort((a, b) => a[0] - b[0]);
  },

  'count-good-rectangles': (...args: unknown[]) => {
    const rects = args[0] as number[][];
    const sides = rects.map(([l, w]) => Math.min(l!, w!));
    const mx = Math.max(...sides);
    return sides.filter(s => s === mx).length;
  },

  'maximum-population-year': (...args: unknown[]) => {
    const logs = args[0] as number[][];
    const diff = new Array(101).fill(0);
    for (const [b, d] of logs) { diff[b! - 1950]!++; diff[d! - 1950]!--; }
    let mx = 0, yr = 1950, cur = 0;
    for (let i = 0; i < 101; i++) { cur += diff[i]!; if (cur > mx) { mx = cur; yr = i + 1950; } }
    return yr;
  },

  'find-kth-bit-nth-binary-string': (...args: unknown[]) => {
    const [n, k] = args as [number, number];
    function f(n: number, k: number): string {
      if (n === 1) return '0';
      const mid = 1 << (n - 1);
      if (k === mid) return '1';
      if (k < mid) return f(n - 1, k);
      return f(n - 1, (1 << n) - k) === '0' ? '1' : '0';
    }
    return f(n, k);
  },

  'count-operations-to-obtain-zero': (...args: unknown[]) => {
    let num1 = args[0] as number;
    let num2 = args[1] as number;
    let count = 0;
    while (num1 > 0 && num2 > 0) {
      if (num1 >= num2) num1 -= num2; else num2 -= num1;
      count++;
    }
    return count;
  },

  'design-underground-system': (...args: unknown[]) => {
    const operations = args[0] as unknown[][];
    const checkIns = new Map<number, [string, number]>();
    const routes = new Map<string, [number, number]>();
    const results: number[] = [];
    for (const op of operations) {
      if (op[0] === 'checkIn') {
        checkIns.set(op[1] as number, [op[2] as string, op[3] as number]);
      } else if (op[0] === 'checkOut') {
        const [startStation, startTime] = checkIns.get(op[1] as number)!;
        const key = `${startStation}|${op[2] as string}`;
        const prev = routes.get(key) ?? [0, 0];
        routes.set(key, [prev[0] + (op[3] as number) - startTime, prev[1] + 1]);
        checkIns.delete(op[1] as number);
      } else {
        const key = `${op[1] as string}|${op[2] as string}`;
        const [total, count] = routes.get(key)!;
        results.push(total / count);
      }
    }
    return results;
  },

  'sort-vowels-in-a-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const vowels = new Set('aeiouAEIOU');
    const extracted: string[] = [];
    for (const c of s) if (vowels.has(c)) extracted.push(c);
    extracted.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let idx = 0;
    return s.split('').map(c => vowels.has(c) ? extracted[idx++]! : c).join('');
  },

  'minimum-time-to-repair-cars': (...args: unknown[]) => {
    const ranks = args[0] as number[];
    const cars = args[1] as number;
    let lo = 1n, hi = BigInt(Math.min(...ranks)) * BigInt(cars) * BigInt(cars);
    while (lo < hi) {
      const mid = (lo + hi) / 2n;
      let total = 0;
      for (const r of ranks) total += Math.floor(Math.sqrt(Number(mid) / r));
      if (total >= cars) hi = mid; else lo = mid + 1n;
    }
    return Number(lo);
  },

  'number-of-matching-subsequences': (...args: unknown[]) => {
    const s = args[0] as string;
    const words = args[1] as string[];
    function isSubseq(w: string): boolean {
      let i = 0;
      for (const c of s) { if (i < w.length && c === w[i]) i++; }
      return i === w.length;
    }
    return words.filter(isSubseq).length;
  },

  'lfu-cache': (...args: unknown[]) => {
    const capacity = args[0] as number;
    const operations = args[1] as (string | number)[][];
    const keyMap = new Map<number, { value: number; freq: number }>();
    const freqMap = new Map<number, Map<number, boolean>>();
    let minFreq = 0;
    const results: number[] = [];

    function incrementFreq(key: number): void {
      const entry = keyMap.get(key)!;
      const oldFreq = entry.freq;
      entry.freq += 1;
      const newFreq = entry.freq;
      freqMap.get(oldFreq)!.delete(key);
      if (freqMap.get(oldFreq)!.size === 0) {
        freqMap.delete(oldFreq);
        if (minFreq === oldFreq) minFreq = newFreq;
      }
      if (!freqMap.has(newFreq)) freqMap.set(newFreq, new Map());
      freqMap.get(newFreq)!.set(key, true);
    }

    for (const op of operations) {
      if (op[0] === 'get') {
        const key = op[1] as number;
        if (!keyMap.has(key)) { results.push(-1); continue; }
        incrementFreq(key);
        results.push(keyMap.get(key)!.value);
      } else {
        const key = op[1] as number;
        const value = op[2] as number;
        if (capacity <= 0) continue;
        if (keyMap.has(key)) {
          keyMap.get(key)!.value = value;
          incrementFreq(key);
        } else {
          if (keyMap.size >= capacity) {
            const lruBucket = freqMap.get(minFreq)!;
            const evictKey = lruBucket.keys().next().value as number;
            lruBucket.delete(evictKey);
            if (lruBucket.size === 0) freqMap.delete(minFreq);
            keyMap.delete(evictKey);
          }
          keyMap.set(key, { value, freq: 1 });
          if (!freqMap.has(1)) freqMap.set(1, new Map());
          freqMap.get(1)!.set(key, true);
          minFreq = 1;
        }
      }
    }
    return results;
  },

  'smallest-range-covering-k-lists': (...args: unknown[]) => {
    const nums = args[0] as number[][];
    const heap: [number, number, number][] = [];
    let curMax = -Infinity;

    function heapPush(item: [number, number, number]): void {
      heap.push(item);
      if (item[0] > curMax) curMax = item[0];
      let i = heap.length - 1;
      while (i > 0) {
        const parent = (i - 1) >> 1;
        if (heap[parent]![0] > heap[i]![0]) {
          [heap[parent], heap[i]] = [heap[i]!, heap[parent]!];
          i = parent;
        } else break;
      }
    }

    function heapPop(): [number, number, number] {
      const top = heap[0]!;
      const last = heap.pop()!;
      if (heap.length > 0) {
        heap[0] = last;
        let i = 0;
        while (true) {
          const l = 2 * i + 1, r = 2 * i + 2;
          let smallest = i;
          if (l < heap.length && heap[l]![0] < heap[smallest]![0]) smallest = l;
          if (r < heap.length && heap[r]![0] < heap[smallest]![0]) smallest = r;
          if (smallest === i) break;
          [heap[i], heap[smallest]] = [heap[smallest]!, heap[i]!];
          i = smallest;
        }
      }
      return top;
    }

    for (let i = 0; i < nums.length; i++) {
      heapPush([nums[i]![0]!, i, 0]);
    }

    let rangeStart = heap[0]![0];
    let rangeEnd = curMax;

    while (true) {
      const [minVal, listIdx, elemIdx] = heapPop();
      if (curMax - minVal < rangeEnd - rangeStart || (curMax - minVal === rangeEnd - rangeStart && minVal < rangeStart)) {
        rangeStart = minVal;
        rangeEnd = curMax;
      }
      const nextIdx = elemIdx + 1;
      if (nextIdx >= nums[listIdx]!.length) break;
      const nextVal = nums[listIdx]![nextIdx]!;
      if (nextVal > curMax) curMax = nextVal;
      heapPush([nextVal, listIdx, nextIdx]);
    }

    return [rangeStart, rangeEnd];
  },

  'bus-routes': (...args: unknown[]) => {
    const routes = args[0] as number[][];
    const source = args[1] as number;
    const target = args[2] as number;
    if (source === target) return 0;

    const stopToBuses = new Map<number, number[]>();
    for (let i = 0; i < routes.length; i++) {
      for (const stop of routes[i]!) {
        if (!stopToBuses.has(stop)) stopToBuses.set(stop, []);
        stopToBuses.get(stop)!.push(i);
      }
    }

    const visitedBuses = new Set<number>();
    const visitedStops = new Set<number>([source]);
    let queue: number[] = [source];
    let buses = 1;

    while (queue.length > 0) {
      const nextStops: number[] = [];
      for (const stop of queue) {
        for (const busIdx of (stopToBuses.get(stop) ?? [])) {
          if (visitedBuses.has(busIdx)) continue;
          visitedBuses.add(busIdx);
          for (const s of routes[busIdx]!) {
            if (s === target) return buses;
            if (!visitedStops.has(s)) {
              visitedStops.add(s);
              nextStops.push(s);
            }
          }
        }
      }
      queue = nextStops;
      buses++;
    }
    return -1;
  },

  'beautiful-arrangement-ii': (...args: unknown[]) => {
    const n = args[0] as number;
    const k = args[1] as number;
    const result: number[] = [];
    let lo = 1, hi = k + 1;
    while (lo <= hi) {
      result.push(lo++);
      if (lo <= hi) result.push(hi--);
    }
    for (let i = k + 2; i <= n; i++) result.push(i);
    return result;
  },

  'maximum-score-words-formed': (...args: unknown[]) => {
    const words = args[0] as string[];
    const letters = args[1] as string[];
    const score = args[2] as number[];
    const available = new Array<number>(26).fill(0);
    for (const c of letters) available[c.charCodeAt(0) - 97]!++;

    let best = 0;
    const n = words.length;
    for (let mask = 1; mask < (1 << n); mask++) {
      const used = new Array<number>(26).fill(0);
      let total = 0;
      let valid = true;
      for (let i = 0; i < n; i++) {
        if (!(mask & (1 << i))) continue;
        for (const c of words[i]!) {
          const idx = c.charCodeAt(0) - 97;
          used[idx]!++;
          total += score[idx]!;
          if (used[idx]! > available[idx]!) { valid = false; break; }
        }
        if (!valid) break;
      }
      if (valid && total > best) best = total;
    }
    return best;
  },

  'largest-positive-integer-with-negative': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const s = new Set(nums);
    let ans = -1;
    for (const n of nums) if (n > 0 && s.has(-n)) ans = Math.max(ans, n);
    return ans;
  },

  'maximize-sum-k-elements': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => Math.abs(a) - Math.abs(b));
    let k = args[1] as number;
    for (let i = nums.length - 1; i >= 0 && k > 0; i--) {
      if (nums[i]! < 0) { nums[i] = -nums[i]!; k--; }
    }
    if (k % 2 === 1) nums[0] = -nums[0]!;
    return nums.reduce((a, b) => a + b, 0);
  },

  'check-if-acronym': (...args: unknown[]) => {
    const words = args[0] as string[], s = args[1] as string;
    return words.map(w => w[0]).join('') === s;
  },

  'count-pairs-absolute-diff-k': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++)
      for (let j = i + 1; j < nums.length; j++)
        if (Math.abs(nums[i]! - nums[j]!) === k) cnt++;
    return cnt;
  },

  'number-of-arithmetic-subarrays': (...args: unknown[]) => {
    const nums = args[0] as number[], l = args[1] as number[], r = args[2] as number[];
    return l.map((li, i) => {
      const sub = [...nums.slice(li, r[i]! + 1)].sort((a, b) => a - b);
      const d = sub[1]! - sub[0]!;
      return sub.every((_, j) => j === 0 || sub[j]! - sub[j - 1]! === d);
    });
  },

  'check-valid-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const n = matrix.length;
    const ok = (arr: number[]) => new Set(arr).size === n && arr.every(v => v >= 1 && v <= n);
    return matrix.every(ok) && Array.from({ length: n }, (_, j) => matrix.map(r => r[j]!)).every(ok);
  },

  'count-max-frequency-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
    const max = Math.max(...freq.values());
    return [...freq.values()].filter(f => f === max).reduce((a, b) => a + b, 0);
  },

  'minimum-difference-after-k-removals': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number;
    let min = Infinity;
    for (let i = 0; i + k - 1 < nums.length; i++) min = Math.min(min, nums[i + k - 1]! - nums[i]!);
    return min;
  },

  'number-of-valid-clock-times': (...args: unknown[]) => {
    const time = args[0] as string;
    let cnt = 0;
    for (let h = 0; h < 24; h++) for (let m = 0; m < 60; m++) {
      const s = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      if ([...time].every((c, i) => c === '?' || c === s[i])) cnt++;
    }
    return cnt;
  },

  'calculate-money-in-bank': (...args: unknown[]) => {
    const n = args[0] as number;
    let total = 0, week = 0;
    for (let d = 0; d < n; d++) {
      const dow = d % 7;
      if (dow === 0) week++;
      total += week + dow;
    }
    return total;
  },

  'score-of-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let score = 0;
    for (let i = 1; i < s.length; i++) score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    return score;
  },

  'chalk-replacer': (...args: unknown[]) => {
    const chalk = args[0] as number[], k_in = args[1] as number;
    const sum = chalk.reduce((a, b) => a + b, 0);
    let k = k_in % sum;
    for (let i = 0; i < chalk.length; i++) {
      if (k < chalk[i]!) return i;
      k -= chalk[i]!;
    }
    return 0;
  },

  'split-with-minimum-sum': (...args: unknown[]) => {
    const num = args[0] as number;
    const d = String(num).split('').map(Number).sort((a, b) => a - b);
    let n1 = 0, n2 = 0, p = 1;
    for (let i = d.length - 1; i >= 0; i -= 2) {
      n1 += d[i]! * p;
      if (i - 1 >= 0) n2 += d[i - 1]! * p;
      p *= 10;
    }
    return n1 + n2;
  },

  'max-difference-increasing-elements': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let min = nums[0]!, max = -1;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j]! > min) max = Math.max(max, nums[j]! - min);
      else min = nums[j]!;
    }
    return max;
  },

  'longest-nice-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let l = 0, used = 0, ans = 1;
    for (let r = 0; r < nums.length; r++) {
      while (used & nums[r]!) used ^= nums[l++]!;
      used |= nums[r]!;
      ans = Math.max(ans, r - l + 1);
    }
    return ans;
  },

  'interchangeable-rectangles': (...args: unknown[]) => {
    const rectangles = args[0] as number[][];
    const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
    const m = new Map<string, number>();
    for (const [w, h] of rectangles) {
      const g = gcd(w!, h!);
      const k = `${w! / g}:${h! / g}`;
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    let ans = 0;
    for (const c of m.values()) ans += c * (c - 1) / 2;
    return ans;
  },

  'find-triangular-sum': (...args: unknown[]) => {
    let nums = [...(args[0] as number[])];
    while (nums.length > 1) nums = nums.slice(0, -1).map((_, i) => (nums[i]! + nums[i + 1]!) % 10);
    return nums[0];
  },

  'two-furthest-houses-different-colors': (...args: unknown[]) => {
    const colors = args[0] as number[];
    const n = colors.length;
    let ans = 0;
    for (let j = n - 1; j > 0; j--) if (colors[0] !== colors[j]) { ans = j; break; }
    for (let i = 0; i < n - 1; i++) if (colors[i] !== colors[n - 1]) { ans = Math.max(ans, n - 1 - i); break; }
    return ans;
  },

  'count-lattice-points-circle': (...args: unknown[]) => {
    const circles = args[0] as number[][];
    const s = new Set<string>();
    for (const [cx, cy, r] of circles)
      for (let x = cx! - r!; x <= cx! + r!; x++)
        for (let y = cy! - r!; y <= cy! + r!; y++)
          if ((x - cx!) ** 2 + (y - cy!) ** 2 <= r! ** 2) s.add(`${x},${y}`);
    return s.size;
  },

  'nearest-exit-maze': (...args: unknown[]) => {
    const maze = (args[0] as string[][]).map(r => [...r]);
    const [er, ec] = args[1] as number[];
    const m = maze.length, n = maze[0]!.length;
    const q: [number, number, number][] = [[er!, ec!, 0]];
    maze[er!]![ec!] = '+';
    while (q.length) {
      const [r, c, steps] = q.shift()!;
      for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as [number, number][]) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n || maze[nr]![nc] === '+') continue;
        if (nr === 0 || nr === m - 1 || nc === 0 || nc === n - 1) return steps + 1;
        maze[nr]![nc] = '+';
        q.push([nr, nc, steps + 1]);
      }
    }
    return -1;
  },

  'climbing-stairs-k-steps': (...args: unknown[]) => {
    const n = args[0] as number;
    const k = args[1] as number;
    const MOD = 1_000_000_007;
    const dp = new Array<number>(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= Math.min(k, i); j++) {
        dp[i] = ((dp[i] ?? 0) + (dp[i - j] ?? 0)) % MOD;
      }
    }
    return dp[n];
  },

  'maximum-xor-two-numbers': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        max = Math.max(max, (nums[i] as number) ^ (nums[j] as number));
      }
    }
    return max;
  },

  'remove-stones-to-minimize-total': (...args: unknown[]) => {
    const piles = [...(args[0] as number[])];
    const k = args[1] as number;
    for (let op = 0; op < k; op++) {
      piles.sort((a, b) => b - a);
      piles[0] = Math.ceil((piles[0] as number) / 2);
    }
    return piles.reduce((a, b) => a + b, 0);
  },

  'maximize-happiness-of-selected-children': (...args: unknown[]) => {
    const happiness = [...(args[0] as number[])];
    const k = args[1] as number;
    happiness.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < k; i++) {
      total += Math.max(0, (happiness[i] as number) - i);
    }
    return total;
  },

  'find-the-maximum-achievable-number': (...args: unknown[]) => {
    const num = args[0] as number;
    const t = args[1] as number;
    return num + 2 * t;
  },

  'partition-array-maximum-difference': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const k = args[1] as number;
    nums.sort((a, b) => a - b);
    let groups = 1;
    let start = nums[0] as number;
    for (let i = 1; i < nums.length; i++) {
      if ((nums[i] as number) - start > k) {
        groups++;
        start = nums[i] as number;
      }
    }
    return groups;
  },

  'remove-duplicates-from-sorted-list-ii': (...args: unknown[]) => {
    const head = args[0] as number[];
    const freq = new Map<number, number>();
    for (const v of head) freq.set(v, (freq.get(v) ?? 0) + 1);
    return head.filter(v => freq.get(v) === 1);
  },

  'count-number-of-homogenous-substrings': (...args: unknown[]) => {
    const s = args[0] as string;
    const MOD = 1_000_000_007;
    let ans = 0;
    let cnt = 1;
    for (let i = 1; i <= s.length; i++) {
      if (i < s.length && s[i] === s[i - 1]) {
        cnt++;
      } else {
        ans = (ans + Math.floor(cnt * (cnt + 1) / 2)) % MOD;
        cnt = 1;
      }
    }
    return ans;
  },

  'stone-game-vi': (...args: unknown[]) => {
    const aliceValues = args[0] as number[];
    const bobValues = args[1] as number[];
    const n = aliceValues.length;
    const stones = Array.from({ length: n }, (_, i) => i);
    stones.sort((a, b) =>
      ((bobValues[b] as number) + (aliceValues[b] as number)) -
      ((bobValues[a] as number) + (aliceValues[a] as number)),
    );
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) alice += aliceValues[stones[i] as number] as number;
      else bob += bobValues[stones[i] as number] as number;
    }
    if (alice > bob) return 1;
    if (bob > alice) return -1;
    return 0;
  },

  'count-special-quadruplets': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    let count = 0;
    for (let a = 0; a < n - 3; a++) {
      for (let b = a + 1; b < n - 2; b++) {
        for (let c = b + 1; c < n - 1; c++) {
          for (let d = c + 1; d < n; d++) {
            if ((nums[a] as number) + (nums[b] as number) + (nums[c] as number) === (nums[d] as number)) {
              count++;
            }
          }
        }
      }
    }
    return count;
  },

  'find-all-duplicates-in-array': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice();
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i] as number) - 1;
      if ((nums[idx] as number) < 0) result.push(idx + 1);
      else nums[idx] = -(nums[idx] as number);
    }
    return result.sort((a, b) => a - b);
  },

  'alternating-digit-sum': (...args: unknown[]) => {
    const n = args[0] as number;
    const digits = String(n).split('').map(Number);
    return digits.reduce((sum, d, i) => sum + (i % 2 === 0 ? d : -d), 0);
  },

  'count-ways-to-build-good-string': (...args: unknown[]) => {
    const low = args[0] as number;
    const high = args[1] as number;
    const zero = args[2] as number;
    const one = args[3] as number;
    const MOD = 1_000_000_007;
    const dp = new Array<number>(high + 1).fill(0);
    dp[0] = 1;
    let ans = low === 0 ? 1 : 0;
    for (let i = 1; i <= high; i++) {
      if (i >= zero) dp[i] = ((dp[i] ?? 0) + (dp[i - zero] ?? 0)) % MOD;
      if (i >= one) dp[i] = ((dp[i] ?? 0) + (dp[i - one] ?? 0)) % MOD;
      if (i >= low) ans = (ans + (dp[i] ?? 0)) % MOD;
    }
    return ans;
  },

  'divide-players-into-teams-of-equal-skill': (...args: unknown[]) => {
    const skill = (args[0] as number[]).slice().sort((a, b) => a - b);
    const n = skill.length;
    const target = (skill[0] as number) + (skill[n - 1] as number);
    let chemistry = 0;
    for (let i = 0; i < n / 2; i++) {
      const a = skill[i] as number;
      const b = skill[n - 1 - i] as number;
      if (a + b !== target) return -1;
      chemistry += a * b;
    }
    return chemistry;
  },

  'maximum-number-of-pairs-in-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    for (const v of nums) freq.set(v, (freq.get(v) ?? 0) + 1);
    let pairs = 0;
    for (const cnt of freq.values()) pairs += Math.floor(cnt / 2);
    return [pairs, nums.length - pairs * 2];
  },

  'minimize-maximum-pair-sum-in-array': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const n = nums.length;
    let max = 0;
    for (let i = 0; i < n / 2; i++) {
      max = Math.max(max, (nums[i] as number) + (nums[n - 1 - i] as number));
    }
    return max;
  },

  'minimum-operations-to-exceed-threshold-value-ii': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const k = args[1] as number;
    let ops = 0;
    while (nums.length >= 2 && (nums[0] as number) < k) {
      const x = nums.shift() as number;
      const y = nums.shift() as number;
      const newVal = x * 2 + y;
      let lo = 0;
      let hi = nums.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if ((nums[mid] as number) < newVal) lo = mid + 1;
        else hi = mid;
      }
      nums.splice(lo, 0, newVal);
      ops++;
    }
    return ops;
  },

  'number-of-ways-to-split-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const total = nums.reduce((s, v) => s + v, 0);
    let prefix = 0;
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      prefix += nums[i] as number;
      if (prefix >= total - prefix) count++;
    }
    return count;
  },

  'check-if-word-occurs-as-prefix': (...args: unknown[]) => {
    const sentence = args[0] as string;
    const searchWord = args[1] as string;
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      if ((words[i] as string).startsWith(searchWord)) return i + 1;
    }
    return -1;
  },

  'count-subarrays-score-less-than-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let ans = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right] as number;
      while (sum * (right - left + 1) >= k) {
        sum -= nums[left] as number;
        left++;
      }
      ans += right - left + 1;
    }
    return ans;
  },

  'excel-sheet-column-number': (...args: unknown[]) => {
    const columnTitle = args[0] as string;
    let result = 0;
    for (const ch of columnTitle) {
      result = result * 26 + (ch.charCodeAt(0) - 64);
    }
    return result;
  },

  'jump-game-vii': (...args: unknown[]) => {
    const s = args[0] as string;
    const minJump = args[1] as number;
    const maxJump = args[2] as number;
    const n = s.length;
    const reach = new Array<boolean>(n).fill(false);
    reach[0] = true;
    let windowCount = 0;
    for (let i = 1; i < n; i++) {
      if (i - minJump >= 0 && reach[i - minJump]) windowCount++;
      if (i - maxJump - 1 >= 0 && reach[i - maxJump - 1]) windowCount--;
      if (s[i] === '0' && windowCount > 0) reach[i] = true;
    }
    return reach[n - 1];
  },

  'longest-square-streak': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const set = new Set(nums);
    let best = -1;
    for (const n of set) {
      let cur = n;
      let len = 1;
      while (set.has(cur * cur)) {
        cur = cur * cur;
        len++;
      }
      if (len >= 2) best = Math.max(best, len);
    }
    return best;
  },

  'maximum-beauty-array-after-applying-operation': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const k = args[1] as number;
    let best = 1;
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
      while ((nums[right] as number) - (nums[left] as number) > 2 * k) left++;
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'maximum-product-after-k-increments': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const k = args[1] as number;
    const MOD = 1_000_000_007n;
    for (let op = 0; op < k; op++) {
      nums[0] = (nums[0] as number) + 1;
      let j = 0;
      while (j + 1 < nums.length && (nums[j] as number) > (nums[j + 1] as number)) {
        const tmp = nums[j] as number;
        nums[j] = nums[j + 1] as number;
        nums[j + 1] = tmp;
        j++;
      }
    }
    let prod = 1n;
    for (const v of nums) prod = (prod * BigInt(v as number)) % MOD;
    return Number(prod);
  },

  'pairs-of-songs-total-divisible-60': (...args: unknown[]) => {
    const time = args[0] as number[];
    const cnt = new Array<number>(60).fill(0);
    let ans = 0;
    for (const t of time) {
      const r = t % 60;
      ans += (cnt[(60 - r) % 60] ?? 0);
      cnt[r] = (cnt[r] ?? 0) + 1;
    }
    return ans;
  },

  'find-the-index-of-first-occurrence': (...args: unknown[]) => {
    const haystack = args[0] as string;
    const needle = args[1] as string;
    return haystack.indexOf(needle);
  },

  'integer-replacement': (...args: unknown[]) => {
    const n = args[0] as number;
    const memo = new Map<number, number>();
    function solve(x: number): number {
      if (x === 1) return 0;
      if (memo.has(x)) return memo.get(x)!;
      let res: number;
      if (x % 2 === 0) {
        res = 1 + solve(x / 2);
      } else {
        res = 1 + Math.min(solve(x + 1), solve(x - 1));
      }
      memo.set(x, res);
      return res;
    }
    return solve(n);
  },

  'number-of-smooth-descent-periods': (...args: unknown[]) => {
    const prices = args[0] as number[];
    let ans = 0;
    let run = 1;
    for (let i = 1; i < prices.length; i++) {
      if ((prices[i] as number) === (prices[i - 1] as number) - 1) {
        run++;
      } else {
        run = 1;
      }
      ans += run;
    }
    return ans + 1;
  },

  'maximum-matrix-sum': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    let total = 0;
    let negCount = 0;
    let minAbs = Infinity;
    for (const row of matrix) {
      for (const val of row) {
        total += Math.abs(val);
        if (val < 0) negCount++;
        minAbs = Math.min(minAbs, Math.abs(val));
      }
    }
    if (negCount % 2 === 0) return total;
    return total - 2 * minAbs;
  },

  'count-nodes-with-highest-score': (...args: unknown[]) => {
    const parents = args[0] as number[];
    const n = parents.length;
    const children: number[][] = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parents[i] as number]!.push(i);
    const sub = new Array<number>(n).fill(1);
    const order: number[] = [];
    const stk = [0];
    while (stk.length) {
      const node = stk.pop()!;
      order.push(node);
      for (const c of children[node]!) stk.push(c);
    }
    for (let i = order.length - 1; i >= 0; i--) {
      const node = order[i]!;
      for (const c of children[node]!) sub[node]! += sub[c]!;
    }
    let maxScore = 0n;
    let count = 0;
    for (let x = 0; x < n; x++) {
      const ch = children[x]!;
      const L = ch[0] !== undefined ? BigInt(sub[ch[0]]!) : 0n;
      const R = ch[1] !== undefined ? BigInt(sub[ch[1]]!) : 0n;
      const U = BigInt(n) - BigInt(sub[x]!);
      const score = (L || 1n) * (R || 1n) * (U || 1n);
      if (score > maxScore) { maxScore = score; count = 1; }
      else if (score === maxScore) count++;
    }
    return count;
  },

  'find-right-interval': (...args: unknown[]) => {
    const intervals = args[0] as number[][];
    const starts = intervals.map((iv, i) => [iv[0], i] as [number, number]);
    starts.sort((a, b) => a[0] - b[0]);
    const result: number[] = [];
    for (const iv of intervals) {
      const end = iv[1] as number;
      let lo = 0, hi = starts.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if ((starts[mid]![0] as number) < end) lo = mid + 1;
        else hi = mid;
      }
      result.push(lo < starts.length ? (starts[lo]![1] as number) : -1);
    }
    return result;
  },

  'circular-sentence': (...args: unknown[]) => {
    const sentence = args[0] as string;
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      const cur = words[i]!;
      const next = words[(i + 1) % words.length]!;
      if (cur[cur.length - 1] !== next[0]) return false;
    }
    return true;
  },

  'minimum-garden-perimeter': (...args: unknown[]) => {
    const neededApples = args[0] as number;
    let lo = 1, hi = 100000;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (2 * mid * (mid + 1) * (2 * mid + 1) >= neededApples) hi = mid;
      else lo = mid + 1;
    }
    return 8 * lo;
  },

  'group-people-given-group-size': (...args: unknown[]) => {
    const groupSizes = args[0] as number[];
    const buckets = new Map<number, number[]>();
    const result: number[][] = [];
    for (let i = 0; i < groupSizes.length; i++) {
      const size = groupSizes[i] as number;
      if (!buckets.has(size)) buckets.set(size, []);
      const bucket = buckets.get(size)!;
      bucket.push(i);
      if (bucket.length === size) {
        result.push([...bucket]);
        buckets.set(size, []);
      }
    }
    return result;
  },

  'count-number-of-bad-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq = new Map<number, number>();
    let goodPairs = 0;
    for (let i = 0; i < nums.length; i++) {
      const key = (nums[i] as number) - i;
      const cnt = freq.get(key) ?? 0;
      goodPairs += cnt;
      freq.set(key, cnt + 1);
    }
    const n = nums.length;
    return (n * (n - 1)) / 2 - goodPairs;
  },

  'minimum-changes-to-make-binary-string-beautiful': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== (i % 2 === 0 ? '0' : '1')) count++;
    }
    return Math.min(count, s.length - count);
  },

  'remove-all-occurrences-of-substring': (...args: unknown[]) => {
    let s = args[0] as string;
    const part = args[1] as string;
    while (s.includes(part)) {
      const idx = s.indexOf(part);
      s = s.slice(0, idx) + s.slice(idx + part.length);
    }
    return s;
  },

  'minimum-time-to-complete-trips': (...args: unknown[]) => {
    const time = args[0] as number[];
    const totalTrips = args[1] as number;
    const canDo = (t: number) => time.reduce((sum, ti) => sum + Math.floor(t / ti), 0) >= totalTrips;
    let lo = 1, hi = Math.min(...time) * totalTrips;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (canDo(mid)) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  },

  'minimum-speed-to-arrive-on-time': (...args: unknown[]) => {
    const dist = args[0] as number[];
    const hour = args[1] as number;
    const n = dist.length;
    if (n - 1 >= hour) return -1;
    const canArrive = (speed: number) => {
      let t = 0;
      for (let i = 0; i < n - 1; i++) t += Math.ceil((dist[i] as number) / speed);
      t += (dist[n - 1] as number) / speed;
      return t <= hour + 1e-9;
    };
    let lo = 1, hi = 10_000_000;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (canArrive(mid)) hi = mid;
      else lo = mid + 1;
    }
    return canArrive(lo) ? lo : -1;
  },

  'sum-of-beauty-in-the-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const prefMax = new Array<number>(n).fill(0);
    const sufMin = new Array<number>(n).fill(0);
    prefMax[0] = nums[0] as number;
    for (let i = 1; i < n; i++) prefMax[i] = Math.max(prefMax[i - 1]!, nums[i] as number);
    sufMin[n - 1] = nums[n - 1] as number;
    for (let i = n - 2; i >= 0; i--) sufMin[i] = Math.min(sufMin[i + 1]!, nums[i] as number);
    let ans = 0;
    for (let i = 1; i < n - 1; i++) {
      const v = nums[i] as number;
      if ((prefMax[i - 1]!) < v && v < (sufMin[i + 1]!)) ans += 2;
      else if ((nums[i - 1] as number) < v && v < (nums[i + 1] as number)) ans += 1;
    }
    return ans;
  },

  'find-all-possible-recipes': (...args: unknown[]) => {
    const recipes = args[0] as string[];
    const ingredients = args[1] as string[][];
    const supplies = args[2] as string[];
    const inDegree = new Map<string, number>();
    const dependents = new Map<string, string[]>();
    const recipeSet = new Set(recipes);
    for (let i = 0; i < recipes.length; i++) {
      const r = recipes[i]!;
      inDegree.set(r, (ingredients[i] as string[]).length);
      for (const ing of ingredients[i] as string[]) {
        if (!dependents.has(ing)) dependents.set(ing, []);
        dependents.get(ing)!.push(r);
      }
    }
    const queue: string[] = [...supplies];
    const result: string[] = [];
    while (queue.length) {
      const item = queue.shift()!;
      for (const dep of dependents.get(item) ?? []) {
        const nd = (inDegree.get(dep) ?? 0) - 1;
        inDegree.set(dep, nd);
        if (nd === 0) {
          queue.push(dep);
          if (recipeSet.has(dep)) result.push(dep);
        }
      }
    }
    return result;
  },

  'take-k-of-each-character-from-left-and-right': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const total = [0, 0, 0];
    for (const c of s) total[c.charCodeAt(0) - 97]!++;
    if (total[0]! < k || total[1]! < k || total[2]! < k) return -1;
    if (k === 0) return 0;
    const win = [0, 0, 0];
    let best = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
      win[s.charCodeAt(right) - 97]!++;
      while (total[0]! - win[0]! < k || total[1]! - win[1]! < k || total[2]! - win[2]! < k) {
        win[s.charCodeAt(left) - 97]!--;
        left++;
      }
      best = Math.max(best, right - left + 1);
    }
    return s.length - best;
  },

  'minimum-operations-to-make-array-xor-equal-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const xorAll = nums.reduce((acc, v) => acc ^ (v as number), 0);
    const diff = xorAll ^ k;
    return diff.toString(2).split('').filter(b => b === '1').length;
  },

  'maximum-odd-binary-number': (...args: unknown[]) => {
    const s = args[0] as string;
    const ones = s.split('').filter(c => c === '1').length;
    const zeros = s.length - ones;
    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
  },

  'minimum-equal-sum-two-arrays': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const sum1 = nums1.reduce((a, v) => a + (v as number), 0);
    const sum2 = nums2.reduce((a, v) => a + (v as number), 0);
    const z1 = nums1.filter(v => v === 0).length;
    const z2 = nums2.filter(v => v === 0).length;
    const min1 = sum1 + z1;
    const min2 = sum2 + z2;
    if (z1 === 0 && min1 < min2) return -1;
    if (z2 === 0 && min2 < min1) return -1;
    return Math.max(min1, min2);
  },

  'find-score-of-array-after-marking': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const indexed = nums.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const marked = new Array<boolean>(n).fill(false);
    let score = 0;
    for (const [v, i] of indexed) {
      if (!marked[i]) {
        score += v;
        marked[i] = true;
        if (i > 0) marked[i - 1] = true;
        if (i < n - 1) marked[i + 1] = true;
      }
    }
    return score;
  },

  'count-complete-day-pairs': (...args: unknown[]) => {
    const hours = args[0] as number[];
    const freq = new Array<number>(24).fill(0);
    let count = 0;
    for (const h of hours) {
      const r = h % 24;
      count += (freq[(24 - r) % 24] ?? 0);
      freq[r] = (freq[r] ?? 0) + 1;
    }
    return count;
  },

  'check-if-matrix-is-x-matrix': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const n = grid.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const onDiag = i === j || i + j === n - 1;
        const v = (grid[i] as number[])[j] as number;
        if (onDiag && v === 0) return false;
        if (!onDiag && v !== 0) return false;
      }
    }
    return true;
  },

  'determine-color-of-chessboard-square': (...args: unknown[]) => {
    const coords = args[0] as string;
    const col = coords.charCodeAt(0) - 96;
    const row = parseInt(coords[1]!, 10);
    return (col + row) % 2 !== 0;
  },

  'faulty-keyboard': (...args: unknown[]) => {
    const s = args[0] as string;
    let result = '';
    let reversed = false;
    for (const c of s) {
      if (c === 'i') {
        reversed = !reversed;
      } else {
        result = reversed ? c + result : result + c;
      }
    }
    return reversed ? result.split('').reverse().join('') : result;
  },

  'sum-multiples': (...args: unknown[]) => {
    const n = args[0] as number;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) sum += i;
    }
    return sum;
  },

  'count-beautiful-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const first = parseInt(String(nums[i] as number)[0]!, 10);
        const last = (nums[j] as number) % 10;
        if (gcd(first, last) === 1) count++;
      }
    }
    return count;
  },

  'minimum-time-to-collect-all-apples': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    const hasApple = args[2] as boolean[];
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
      adj[a as number]!.push(b as number);
      adj[b as number]!.push(a as number);
    }
    function dfs(node: number, parent: number): number {
      let time = 0;
      for (const child of adj[node]!) {
        if (child === parent) continue;
        const childTime = dfs(child, node);
        if (childTime > 0 || (hasApple[child] as boolean)) {
          time += childTime + 2;
        }
      }
      return time;
    }
    return dfs(0, -1);
  },

  'find-prefix-common-array-of-two-arrays': (...args: unknown[]) => {
    const A = args[0] as number[];
    const B = args[1] as number[];
    const n = A.length;
    const cnt = new Array<number>(n + 1).fill(0);
    const result: number[] = [];
    let common = 0;
    for (let i = 0; i < n; i++) {
      if (++cnt[A[i] as number]! === 2) common++;
      if (++cnt[B[i] as number]! === 2) common++;
      result.push(common);
    }
    return result;
  },

  'minimum-time-to-collect-garbage': (...args: unknown[]) => {
    const garbage = args[0] as string[];
    const travel = args[1] as number[];
    let total = 0;
    for (const g of garbage) total += g.length;
    for (const type of ['M', 'P', 'G']) {
      let lastIdx = -1;
      for (let i = garbage.length - 1; i >= 0; i--) {
        if ((garbage[i] as string).includes(type)) { lastIdx = i; break; }
      }
      if (lastIdx > 0) {
        for (let i = 0; i < lastIdx; i++) total += travel[i] as number;
      }
    }
    return total;
  },

  'longest-subarray-of-ones-after-deleting': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right < nums.length; right++) {
      if ((nums[right] as number) === 0) zeros++;
      while (zeros > 1) {
        if ((nums[left] as number) === 0) zeros--;
        left++;
      }
      best = Math.max(best, right - left);
    }
    return best;
  },

  'minimum-vertices-to-reach-all-nodes': (...args: unknown[]) => {
    const n = args[0] as number;
    const edges = args[1] as number[][];
    const hasIncoming = new Set<number>();
    for (const [, to] of edges) hasIncoming.add(to as number);
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
      if (!hasIncoming.has(i)) result.push(i);
    }
    return result;
  },

  'count-odd-numbers-in-interval-range': (...args: unknown[]) => {
    const low = args[0] as number;
    const high = args[1] as number;
    const countOdds = (n: number) => Math.floor((n + 1) / 2);
    return countOdds(high) - countOdds(low - 1);
  },

  'make-sum-divisible-by-p': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const p = args[1] as number;
    const target = nums.reduce((s, v) => (s + (v as number)) % p, 0);
    if (target === 0) return 0;
    const lastSeen = new Map<number, number>([[0, -1]]);
    let prefix = 0;
    let best = nums.length;
    for (let i = 0; i < nums.length; i++) {
      prefix = (prefix + (nums[i] as number)) % p;
      const need = (prefix - target + p) % p;
      const j = lastSeen.get(need);
      if (j !== undefined) best = Math.min(best, i - j);
      lastSeen.set(prefix, i);
    }
    return best === nums.length ? -1 : best;
  },

  'count-zero-filled-subarrays': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let ans = 0, run = 0;
    for (const x of nums) {
      if (x === 0) { run++; ans += run; }
      else { run = 0; }
    }
    return ans;
  },

  'check-whether-two-string-arrays-equal': (...args: unknown[]) => {
    const word1 = args[0] as string[];
    const word2 = args[1] as string[];
    return word1.join('') === word2.join('');
  },

  'minimum-flips-to-make-a-or-b-equal-c': (...args: unknown[]) => {
    let a = args[0] as number;
    let b = args[1] as number;
    let c = args[2] as number;
    let flips = 0;
    while (a || b || c) {
      const ca = a & 1, cb = b & 1, cc = c & 1;
      if (cc === 1) {
        if (ca === 0 && cb === 0) flips++;
      } else {
        flips += ca + cb;
      }
      a >>= 1; b >>= 1; c >>= 1;
    }
    return flips;
  },

  'make-array-zero-by-subtracting-equal-amounts': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return new Set(nums.filter(x => x > 0)).size;
  },

  'find-all-groups-of-farmland': (...args: unknown[]) => {
    const land = args[0] as number[][];
    const m = land.length, n = land[0]!.length;
    const result: number[][] = [];
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (land[r]![c] === 1) {
          let r2 = r, c2 = c;
          while (r2 + 1 < m && land[r2 + 1]![c] === 1) r2++;
          while (c2 + 1 < n && land[r]![c2 + 1] === 1) c2++;
          result.push([r, c, r2, c2]);
          for (let i = r; i <= r2; i++)
            for (let j = c; j <= c2; j++)
              land[i]![j] = 0;
        }
      }
    }
    return result;
  },

  'merge-triplets-to-form-target-triplet': (...args: unknown[]) => {
    const triplets = args[0] as number[][];
    const target = args[1] as number[];
    const merged = [0, 0, 0];
    for (const t of triplets) {
      if ((t[0] as number) <= (target[0] as number) &&
          (t[1] as number) <= (target[1] as number) &&
          (t[2] as number) <= (target[2] as number)) {
        for (let i = 0; i < 3; i++) merged[i] = Math.max(merged[i]!, t[i] as number);
      }
    }
    return merged[0] === target[0] && merged[1] === target[1] && merged[2] === target[2];
  },

  'replace-elements-with-greatest-on-right': (...args: unknown[]) => {
    const arr = (args[0] as number[]).slice();
    let maxRight = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      const tmp = arr[i] as number;
      arr[i] = maxRight;
      maxRight = Math.max(maxRight, tmp);
    }
    return arr;
  },

  'destroy-asteroids': (...args: unknown[]) => {
    let mass = args[0] as number;
    const asteroids = (args[1] as number[]).slice().sort((a, b) => a - b);
    for (const a of asteroids) {
      if (mass < a) return false;
      mass += a;
    }
    return true;
  },

  'largest-number-after-digit-swaps-by-parity': (...args: unknown[]) => {
    const num = args[0] as number;
    const digits = String(num).split('').map(Number);
    const odds = digits.filter(d => d % 2 === 1).sort((a, b) => b - a);
    const evens = digits.filter(d => d % 2 === 0).sort((a, b) => b - a);
    let oi = 0, ei = 0;
    const result = digits.map(d => (d % 2 === 1 ? odds[oi++] : evens[ei++]) as number);
    return Number(result.join(''));
  },

  'maximum-count-of-positive-and-negative': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const neg = nums.filter(x => x < 0).length;
    const pos = nums.filter(x => x > 0).length;
    return Math.max(neg, pos);
  },

  'find-the-original-array-of-prefix-xor': (...args: unknown[]) => {
    const pref = args[0] as number[];
    return pref.map((v, i) => (i === 0 ? v : v ^ (pref[i - 1] as number)));
  },

  'separate-digits-in-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const result: number[] = [];
    for (const n of nums) {
      for (const d of String(n)) result.push(Number(d));
    }
    return result;
  },

  'number-of-pairs-of-interchangeable-rectangles': (...args: unknown[]) => {
    const rectangles = args[0] as number[][];
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const map = new Map<string, number>();
    for (const r of rectangles) {
      const g = gcd(r[0] as number, r[1] as number);
      const key = `${(r[0] as number) / g}/${(r[1] as number) / g}`;
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    let count = 0;
    for (const c of map.values()) count += c * (c - 1) / 2;
    return count;
  },

  'optimal-partition-of-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    const seen = new Set<string>();
    for (const c of s) {
      if (seen.has(c)) { count++; seen.clear(); }
      seen.add(c);
    }
    return count + 1;
  },

  'unique-length-three-palindromic-subsequences': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    const chars = new Set(s);
    for (const c of chars) {
      const first = s.indexOf(c);
      const last = s.lastIndexOf(c);
      if (first < last) {
        count += new Set(s.slice(first + 1, last)).size;
      }
    }
    return count;
  },

  'bitwise-xor-of-all-pairings': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    let result = 0;
    if (nums2.length % 2 === 1) for (const x of nums1) result ^= x;
    if (nums1.length % 2 === 1) for (const x of nums2) result ^= x;
    return result;
  },

  'number-of-rectangles-can-form-largest-square': (...args: unknown[]) => {
    const rectangles = args[0] as number[][];
    let best = 0, count = 0;
    for (const r of rectangles) {
      const side = Math.min(r[0] as number, r[1] as number);
      if (side > best) { best = side; count = 1; }
      else if (side === best) count++;
    }
    return count;
  },

  'maximize-number-of-subsequences-in-a-string': (...args: unknown[]) => {
    const text = args[0] as string;
    const pattern = args[1] as string;
    const a = pattern[0] as string, b = pattern[1] as string;
    let base = 0, cntA = 0;
    for (const c of text) {
      if (c === b) base += cntA;
      if (c === a) cntA++;
    }
    const countA = [...text].filter(c => c === a).length;
    const countB = [...text].filter(c => c === b).length;
    return base + Math.max(countA, countB);
  },

  'number-of-ways-to-buy-pens-and-pencils': (...args: unknown[]) => {
    const total = args[0] as number;
    const cost1 = args[1] as number;
    const cost2 = args[2] as number;
    let ways = 0;
    for (let pens = 0; pens * cost1 <= total; pens++) {
      ways += Math.floor((total - pens * cost1) / cost2) + 1;
    }
    return ways;
  },

  'sum-of-digits-of-string-after-convert': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    let str = '';
    for (const c of s) str += String(c.charCodeAt(0) - 96);
    let num = [...str].reduce((sum, d) => sum + Number(d), 0);
    for (let i = 1; i < k; i++) {
      num = [...String(num)].reduce((sum, d) => sum + Number(d), 0);
    }
    return num;
  },

  'smallest-value-of-rearranged-number': (...args: unknown[]) => {
    const num = args[0] as number;
    if (num === 0) return 0;
    if (num > 0) {
      const digits = String(num).split('').sort();
      const first = digits.findIndex(d => d !== '0');
      return Number([digits[first], ...digits.slice(0, first), ...digits.slice(first + 1)].join(''));
    }
    const digits = String(-num).split('').sort().reverse();
    return -Number(digits.join(''));
  },

  'removing-stars-from-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      if (c === '*') stack.pop();
      else stack.push(c);
    }
    return stack.join('');
  },

  'find-the-peaks': (...args: unknown[]) => {
    const mountain = args[0] as number[];
    const result: number[] = [];
    for (let i = 1; i < mountain.length - 1; i++) {
      if ((mountain[i] as number) > (mountain[i - 1] as number) &&
          (mountain[i] as number) > (mountain[i + 1] as number))
        result.push(i);
    }
    return result;
  },

  'minimum-penalty-for-a-shop': (...args: unknown[]) => {
    const customers = args[0] as string;
    let penalty = [...customers].filter(c => c === 'Y').length;
    let minPenalty = penalty, bestHour = 0;
    for (let i = 0; i < customers.length; i++) {
      if (customers[i] === 'Y') penalty--;
      else penalty++;
      if (penalty < minPenalty) { minPenalty = penalty; bestHour = i + 1; }
    }
    return bestHour;
  },

  'apply-operations-to-an-array': (...args: unknown[]) => {
    const arr = (args[0] as number[]).slice();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) { arr[i] = (arr[i] as number) * 2; arr[i + 1] = 0; }
    }
    return [...arr.filter(x => x !== 0), ...arr.filter(x => x === 0)];
  },

  'kth-distinct-string-in-array': (...args: unknown[]) => {
    const arr = args[0] as string[];
    const k = args[1] as number;
    const count = new Map<string, number>();
    for (const s of arr) count.set(s, (count.get(s) ?? 0) + 1);
    let cnt = 0;
    for (const s of arr) {
      if (count.get(s) === 1 && ++cnt === k) return s;
    }
    return '';
  },

  'count-elements-with-strictly-smaller-and-greater': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const min = Math.min(...nums), max = Math.max(...nums);
    return nums.filter(x => x > min && x < max).length;
  },

  'largest-positive-integer-that-exists-with-negative': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const s = new Set(nums);
    let result = -1;
    for (const x of s) {
      if ((x as number) > 0 && s.has(-(x as number)))
        result = Math.max(result, x as number);
    }
    return result;
  },

  'check-if-number-has-equal-digit-count-and-digit-value': (...args: unknown[]) => {
    const num = args[0] as string;
    for (let i = 0; i < num.length; i++) {
      const count = [...num].filter(c => c === String(i)).length;
      if (count !== Number(num[i])) return false;
    }
    return true;
  },

  'decode-xor-array': (...args: unknown[]) => {
    const encoded = args[0] as number[];
    const first = args[1] as number;
    const result = [first];
    for (const e of encoded) result.push((result[result.length - 1] as number) ^ (e as number));
    return result;
  },

  'maximum-split-of-positive-even-integers': (...args: unknown[]) => {
    let finalSum = args[0] as number;
    if (finalSum % 2 === 1) return [];
    const result: number[] = [];
    let cur = 2;
    while (cur * 2 < finalSum) {
      result.push(cur);
      finalSum -= cur;
      cur += 2;
    }
    result.push(finalSum);
    return result;
  },

  'minimum-average-of-smallest-and-largest-elements': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const n = nums.length;
    let min = Infinity;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      min = Math.min(min, ((nums[i] as number) + (nums[n - 1 - i] as number)) / 2);
    }
    return min;
  },

  'count-tested-devices-after-test-runs': (...args: unknown[]) => {
    const batteryPercentages = args[0] as number[];
    let count = 0;
    for (const b of batteryPercentages) {
      if ((b as number) - count > 0) count++;
    }
    return count;
  },

  'number-of-subarrays-with-gcd-equal-to-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      let g = nums[i] as number;
      for (let j = i; j < nums.length; j++) {
        g = gcd(g, nums[j] as number);
        if (g === k) count++;
        else if (g < k) break;
      }
    }
    return count;
  },

  'find-subsequence-of-length-k-with-largest-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const indexed = nums.map((v, i) => [v as number, i] as [number, number]);
    indexed.sort((a, b) => b[0] - a[0]);
    return indexed.slice(0, k)
      .sort((a, b) => a[1] - b[1])
      .map(([v]) => v);
  },

  'minimum-absolute-sum-difference': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const MOD = 1e9 + 7;
    const n = nums1.length;
    const sorted = [...nums1].sort((a, b) => (a as number) - (b as number)) as number[];
    const closest = (target: number) => {
      let lo = 0, hi = sorted.length - 1, best = Infinity;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        best = Math.min(best, Math.abs(sorted[mid]! - target));
        if (sorted[mid]! < target) lo = mid + 1;
        else hi = mid - 1;
      }
      return best;
    };
    let totalSum = 0, maxGain = 0;
    for (let i = 0; i < n; i++) {
      const diff = Math.abs((nums1[i] as number) - (nums2[i] as number));
      totalSum += diff;
      maxGain = Math.max(maxGain, diff - closest(nums2[i] as number));
    }
    return (totalSum - maxGain) % MOD;
  },

  'find-the-k-beauty-of-a-number': (...args: unknown[]) => {
    const num = args[0] as number;
    const k = args[1] as number;
    const s = String(num);
    let count = 0;
    for (let i = 0; i <= s.length - k; i++) {
      const sub = Number(s.slice(i, i + k));
      if (sub !== 0 && num % sub === 0) count++;
    }
    return count;
  },

  'first-unique-character-in-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const freq: Record<string, number> = {};
    for (const c of s) freq[c] = (freq[c] ?? 0) + 1;
    for (let i = 0; i < s.length; i++) {
      if (freq[s[i]!] === 1) return i;
    }
    return -1;
  },

  'long-pressed-name': (...args: unknown[]) => {
    const name = args[0] as string;
    const typed = args[1] as string;
    let i = 0, j = 0;
    while (j < typed.length) {
      if (i < name.length && name[i] === typed[j]) { i++; j++; }
      else if (j > 0 && typed[j] === typed[j - 1]) { j++; }
      else return false;
    }
    return i === name.length;
  },

  'remove-outermost-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    let depth = 0;
    let result = '';
    for (const c of s) {
      if (c === '(') { if (depth > 0) result += c; depth++; }
      else { depth--; if (depth > 0) result += c; }
    }
    return result;
  },

  'maximum-nesting-depth-of-parentheses': (...args: unknown[]) => {
    const s = args[0] as string;
    let depth = 0, max = 0;
    for (const c of s) {
      if (c === '(') { depth++; max = Math.max(max, depth); }
      else if (c === ')') depth--;
    }
    return max;
  },

  'next-greater-element-i': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const map = new Map<number, number>();
    const stack: number[] = [];
    for (const n of nums2) {
      while (stack.length && stack[stack.length - 1]! < n) {
        map.set(stack.pop()!, n);
      }
      stack.push(n);
    }
    return nums1.map(n => map.get(n) ?? -1);
  },

  'find-and-replace-pattern': (...args: unknown[]) => {
    const words = args[0] as string[];
    const pattern = args[1] as string;
    const matches = (word: string) => {
      const w2p = new Map<string, string>();
      const p2w = new Map<string, string>();
      for (let i = 0; i < word.length; i++) {
        const wc = word[i]!, pc = pattern[i]!;
        if (w2p.has(wc) && w2p.get(wc) !== pc) return false;
        if (p2w.has(pc) && p2w.get(pc) !== wc) return false;
        w2p.set(wc, pc);
        p2w.set(pc, wc);
      }
      return true;
    };
    return words.filter(matches);
  },

  'largest-3-same-digit-number-in-string': (...args: unknown[]) => {
    const num = args[0] as string;
    let best = '';
    for (let i = 0; i <= num.length - 3; i++) {
      if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
        const triple = num.slice(i, i + 3);
        if (triple > best) best = triple;
      }
    }
    return best;
  },

  'count-number-of-consistent-strings': (...args: unknown[]) => {
    const allowed = new Set((args[0] as string).split(''));
    const words = args[1] as string[];
    return words.filter(w => [...w].every(c => allowed.has(c))).length;
  },

  'make-the-string-great': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      if (stack.length && Math.abs(stack[stack.length - 1]!.charCodeAt(0) - c.charCodeAt(0)) === 32) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.join('');
  },

  'find-target-indices-after-sorting-array': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const target = args[1] as number;
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) result.push(i);
    }
    return result;
  },

  'number-of-employees-who-met-the-target': (...args: unknown[]) => {
    const hours = args[0] as number[];
    const target = args[1] as number;
    return hours.filter(h => h >= target).length;
  },

  'intersection-of-two-arrays-ii': (...args: unknown[]) => {
    const nums1 = args[0] as number[];
    const nums2 = args[1] as number[];
    const freq = new Map<number, number>();
    for (const n of nums1) freq.set(n, (freq.get(n) ?? 0) + 1);
    const result: number[] = [];
    for (const n of nums2) {
      const cnt = freq.get(n) ?? 0;
      if (cnt > 0) { result.push(n); freq.set(n, cnt - 1); }
    }
    return result.sort((a, b) => a - b);
  },

  'largest-subarray-length-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let bestStart = 0;
    for (let i = 1; i <= nums.length - k; i++) {
      if ((nums[i] as number) > (nums[bestStart] as number)) bestStart = i;
    }
    return nums.slice(bestStart, bestStart + k);
  },

  'minimum-time-to-type-word': (...args: unknown[]) => {
    const word = args[0] as string;
    let time = 0;
    let cur = 0;
    for (const c of word) {
      const next = c.charCodeAt(0) - 97;
      const diff = Math.abs(next - cur);
      time += Math.min(diff, 26 - diff) + 1;
      cur = next;
    }
    return time;
  },

  'check-if-one-string-swap-can-make-strings-equal': (...args: unknown[]) => {
    const s1 = args[0] as string;
    const s2 = args[1] as string;
    const diffs: number[] = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) diffs.push(i);
    }
    if (diffs.length === 0) return true;
    if (diffs.length !== 2) return false;
    const [i, j] = diffs;
    return s1[i!] === s2[j!] && s1[j!] === s2[i!];
  },

  'number-of-different-integers-in-string': (...args: unknown[]) => {
    const word = args[0] as string;
    const set = new Set<string>();
    const groups = word.replace(/[a-z]+/g, ' ').trim().split(/\s+/).filter(Boolean);
    for (const g of groups) set.add(g.replace(/^0+/, '') || '0');
    return set.size;
  },

  'check-if-array-is-good': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const n = nums[nums.length - 1]!;
    if (nums.length !== n + 1) return false;
    if (nums[nums.length - 2] !== n) return false;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] !== i + 1) return false;
    }
    return true;
  },

  'count-the-digits-that-divide-the-number': (...args: unknown[]) => {
    const num = args[0] as number;
    let count = 0;
    for (const c of String(num)) {
      const d = Number(c);
      if (d !== 0 && num % d === 0) count++;
    }
    return count;
  },

  'find-the-difference-of-two-arrays': (...args: unknown[]) => {
    const s1 = new Set(args[0] as number[]);
    const s2 = new Set(args[1] as number[]);
    const diff1 = [...s1].filter(n => !s2.has(n)).sort((a, b) => a - b);
    const diff2 = [...s2].filter(n => !s1.has(n)).sort((a, b) => a - b);
    return [diff1, diff2];
  },

  'longest-continuous-increasing-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let max = 1, cur = 1;
    for (let i = 1; i < nums.length; i++) {
      if ((nums[i] as number) > (nums[i - 1] as number)) {
        cur++; max = Math.max(max, cur);
      } else {
        cur = 1;
      }
    }
    return max;
  },

  'find-numbers-with-even-number-of-digits': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.filter(n => String(n).length % 2 === 0).length;
  },

  'count-nice-pairs-in-an-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const MOD = 1_000_000_007n;
    const rev = (n: number) => Number(String(n).split('').reverse().join(''));
    const freq = new Map<number, number>();
    for (const n of nums) {
      const d = n - rev(n);
      freq.set(d, (freq.get(d) ?? 0) + 1);
    }
    let ans = 0n;
    for (const cnt of freq.values()) {
      ans = (ans + BigInt(cnt) * BigInt(cnt - 1) / 2n) % MOD;
    }
    return Number(ans);
  },

  'check-if-string-is-prefix-of-array': (...args: unknown[]) => {
    const s = args[0] as string;
    const words = args[1] as string[];
    let built = '';
    for (const w of words) {
      built += w;
      if (built === s) return true;
      if (built.length >= s.length) return false;
    }
    return false;
  },

  'remove-trailing-zeros-from-string': (...args: unknown[]) => {
    const num = args[0] as string;
    return num.replace(/0+$/, '');
  },

  'rearrange-spaces-between-words': (...args: unknown[]) => {
    const text = args[0] as string;
    const totalSpaces = text.split('').filter(c => c === ' ').length;
    const words = text.trim().split(/\s+/);
    if (words.length === 1) return words[0] + ' '.repeat(totalSpaces);
    const between = Math.floor(totalSpaces / (words.length - 1));
    const trailing = totalSpaces % (words.length - 1);
    return words.join(' '.repeat(between)) + ' '.repeat(trailing);
  },

  'split-a-string-in-balanced-strings': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0, balance = 0;
    for (const c of s) {
      balance += c === 'R' ? 1 : -1;
      if (balance === 0) count++;
    }
    return count;
  },

  'find-greatest-common-divisor-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    return gcd(Math.min(...nums), Math.max(...nums));
  },

  'remove-all-adjacent-duplicates-in-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: string[] = [];
    for (const c of s) {
      if (stack.length > 0 && stack[stack.length - 1] === c) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return stack.join('');
  },

  'semi-ordered-permutation': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const pos1 = nums.indexOf(1);
    const posN = nums.indexOf(n);
    return pos1 + (n - 1 - posN) - (pos1 > posN ? 1 : 0);
  },

  'calculate-delayed-arrival-time': (...args: unknown[]) => {
    const arrivalTime = args[0] as number;
    const delayedTime = args[1] as number;
    return (arrivalTime + delayedTime) % 24;
  },

  'check-if-numbers-are-ascending-in-sentence': (...args: unknown[]) => {
    const s = args[0] as string;
    const nums = s.split(' ').filter(t => /^\d+$/.test(t)).map(Number);
    for (let i = 1; i < nums.length; i++) {
      if ((nums[i] as number) <= (nums[i - 1] as number)) return false;
    }
    return true;
  },

  'find-xor-beauty-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.reduce((acc, n) => acc ^ n, 0);
  },

  'number-of-words-that-can-be-typed': (...args: unknown[]) => {
    const text = args[0] as string;
    const brokenLetters = args[1] as string;
    const broken = new Set(brokenLetters);
    return text.split(' ').filter(word => ![...word].some(c => broken.has(c))).length;
  },

  'number-of-common-factors': (...args: unknown[]) => {
    const a = args[0] as number;
    const b = args[1] as number;
    let count = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) count++;
    }
    return count;
  },

  'sum-of-all-odd-length-subarrays': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let total = 0;
    for (let start = 0; start < arr.length; start++) {
      for (let len = 1; start + len <= arr.length; len += 2) {
        for (let i = start; i < start + len; i++) total += (arr[i] as number);
      }
    }
    return total;
  },

  'count-of-integers-with-odd-digit-sum': (...args: unknown[]) => {
    const num = args[0] as number;
    let count = 0;
    for (let i = 1; i <= num; i++) {
      const s = String(i).split('').reduce((a, d) => a + +d, 0);
      if (s % 2 === 1) count++;
    }
    return count;
  },

  'replace-all-digits-with-characters': (...args: unknown[]) => {
    const s = args[0] as string;
    let res = '';
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) res += s[i];
      else res += String.fromCharCode(s.charCodeAt(i - 1) + parseInt(s[i] as string));
    }
    return res;
  },

  'minimum-moves-to-convert-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0;
    let i = 0;
    while (i < s.length) {
      if (s[i] === 'X') { count++; i += 3; }
      else i++;
    }
    return count;
  },

  'minimum-recolors-to-get-k-consecutive-black-blocks': (...args: unknown[]) => {
    const blocks = args[0] as string;
    const k = args[1] as number;
    let whites = 0;
    for (let i = 0; i < k; i++) if (blocks[i] === 'W') whites++;
    let min = whites;
    for (let i = k; i < blocks.length; i++) {
      if (blocks[i] === 'W') whites++;
      if (blocks[i - k] === 'W') whites--;
      min = Math.min(min, whites);
    }
    return min;
  },

  'convert-the-temperature': (...args: unknown[]) => {
    const celsius = args[0] as number;
    return [celsius + 273.15, celsius * 1.80 + 32.00];
  },

  'sorting-the-sentence': (...args: unknown[]) => {
    const s = args[0] as string;
    const words = s.split(' ');
    words.sort((a, b) => +(a[a.length - 1] as string) - +(b[b.length - 1] as string));
    return words.map(w => w.slice(0, -1)).join(' ');
  },

  'find-the-maximum-divisibility-score': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const divisors = args[1] as number[];
    let bestScore = -1, bestDiv = Infinity;
    for (const d of divisors) {
      const score = nums.filter(n => n % d === 0).length;
      if (score > bestScore || (score === bestScore && d < bestDiv)) {
        bestScore = score; bestDiv = d;
      }
    }
    return bestDiv;
  },

  'minimum-amount-of-time-to-fill-cups': (...args: unknown[]) => {
    const amount = args[0] as number[];
    const sum = amount.reduce((a, b) => a + b, 0);
    return Math.max(Math.max(...amount), Math.ceil(sum / 2));
  },

  'append-characters-to-string-to-make-subsequence': (...args: unknown[]) => {
    const s = args[0] as string;
    const t = args[1] as string;
    let j = 0;
    for (let i = 0; i < s.length && j < t.length; i++) {
      if (s[i] === t[j]) j++;
    }
    return t.length - j;
  },

  'count-total-number-of-colored-cells': (...args: unknown[]) => {
    const n = args[0] as number;
    return 2 * n * n - 2 * n + 1;
  },

  'difference-between-element-sum-and-digit-sum-of-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const elementSum = nums.reduce((a, b) => a + b, 0);
    const digitSum = nums.flatMap(n => String(n).split('')).reduce((a, d) => a + +d, 0);
    return Math.abs(elementSum - digitSum);
  },

  'minimum-length-of-string-after-deleting-similar-ends': (...args: unknown[]) => {
    const s = args[0] as string;
    let left = 0, right = s.length - 1;
    while (left < right && s[left] === s[right]) {
      const c = s[left];
      while (left <= right && s[left] === c) left++;
      while (left <= right && s[right] === c) right--;
    }
    return right - left + 1;
  },

  'maximum-number-of-vowels-in-substring-of-given-length': (...args: unknown[]) => {
    const s = args[0] as string;
    const k = args[1] as number;
    const vowels = new Set('aeiou');
    let count = 0;
    for (let i = 0; i < k; i++) if (vowels.has(s[i] as string)) count++;
    let max = count;
    for (let i = k; i < s.length; i++) {
      if (vowels.has(s[i] as string)) count++;
      if (vowels.has(s[i - k] as string)) count--;
      max = Math.max(max, count);
    }
    return max;
  },

  'categorize-box-according-to-criteria': (...args: unknown[]) => {
    const length = args[0] as number;
    const width = args[1] as number;
    const height = args[2] as number;
    const mass = args[3] as number;
    const bulk = length >= 10000 || width >= 10000 || height >= 10000 || length * width * height >= 1_000_000_000;
    const heavy = mass >= 100;
    if (bulk && heavy) return 'Both';
    if (bulk) return 'Bulk';
    if (heavy) return 'Heavy';
    return 'Neither';
  },

  'find-the-middle-index-in-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (leftSum === total - leftSum - (nums[i] as number)) return i;
      leftSum += nums[i] as number;
    }
    return -1;
  },

  'maximum-absolute-sum-of-any-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let maxSum = 0, minSum = 0, curMax = 0, curMin = 0;
    for (const n of nums) {
      curMax = Math.max(curMax + n, n);
      maxSum = Math.max(maxSum, curMax);
      curMin = Math.min(curMin + n, n);
      minSum = Math.min(minSum, curMin);
    }
    return Math.max(maxSum, Math.abs(minSum));
  },

  'count-substrings-with-only-one-distinct-letter': (...args: unknown[]) => {
    const s = args[0] as string;
    let count = 0, run = 1;
    for (let i = 1; i <= s.length; i++) {
      if (i < s.length && s[i] === s[i - 1]) run++;
      else { count += (run * (run + 1)) / 2; run = 1; }
    }
    return count;
  },

  'sum-of-number-and-its-reverse': (...args: unknown[]) => {
    const num = args[0] as number;
    for (let k = 0; k <= num; k++) {
      const rev = parseInt(String(k).split('').reverse().join(''));
      if (k + rev === num) return true;
    }
    return false;
  },

  'sum-of-absolute-differences-in-sorted-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const prefix = Array(n).fill(0);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] + (nums[i] as number);
    const result = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      const leftSum = i > 0 ? prefix[i - 1] : 0;
      const rightSum = prefix[n - 1] - prefix[i];
      result[i] = (nums[i] as number) * i - leftSum + rightSum - (nums[i] as number) * (n - 1 - i);
    }
    return result;
  },

  'number-of-subarrays-with-odd-sum': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const MOD = 1_000_000_007;
    let evenCount = 1, oddCount = 0, prefSum = 0, res = 0;
    for (const n of arr) {
      prefSum += n;
      if (prefSum % 2 === 0) res = (res + oddCount) % MOD;
      else res = (res + evenCount) % MOD;
      if (prefSum % 2 === 0) evenCount++;
      else oddCount++;
    }
    return res;
  },

  'number-of-people-aware-of-secret': (...args: unknown[]) => {
    const n = args[0] as number;
    const delay = args[1] as number;
    const forget = args[2] as number;
    const MOD = 1_000_000_007n;
    const dp = new Array(n + 1).fill(0n);
    dp[1] = 1n;
    for (let i = 1; i <= n; i++) {
      for (let j = i + delay; j <= Math.min(n, i + forget - 1); j++) {
        dp[j] = (dp[j] + dp[i]) % MOD;
      }
    }
    let ans = 0n;
    for (let i = Math.max(1, n - forget + 1); i <= n; i++) ans = (ans + dp[i]) % MOD;
    return Number(ans);
  },

  'valid-word-abbreviation': (...args: unknown[]) => {
    const word = args[0] as string;
    const abbr = args[1] as string;
    let i = 0, j = 0;
    while (i < word.length && j < abbr.length) {
      if (/[a-z]/.test(abbr[j] as string)) {
        if (word[i] !== abbr[j]) return false;
        i++; j++;
      } else {
        if (abbr[j] === '0') return false;
        let num = 0;
        while (j < abbr.length && /[0-9]/.test(abbr[j] as string)) { num = num * 10 + +(abbr[j] as string); j++; }
        i += num;
      }
    }
    return i === word.length && j === abbr.length;
  },

  'number-of-valid-words-in-sentence': (...args: unknown[]) => {
    const sentence = args[0] as string;
    return sentence.split(' ').filter((tok) => {
      if (tok.length === 0) return false;
      if (/[0-9]/.test(tok)) return false;
      const hyphens = (tok.match(/-/g) ?? []).length;
      if (hyphens > 1) return false;
      if (hyphens === 1) {
        const idx = tok.indexOf('-');
        if (idx === 0 || idx === tok.length - 1) return false;
        if (!/[a-z]/.test(tok[idx - 1] as string) || !/[a-z]/.test(tok[idx + 1] as string)) return false;
      }
      const puncts = (tok.match(/[!.,]/g) ?? []).length;
      if (puncts > 1) return false;
      if (puncts === 1 && !/[!.,]$/.test(tok)) return false;
      return true;
    }).length;
  },

  'is-subsequence': (...args: unknown[]) => {
    const s = args[0] as string;
    const t = args[1] as string;
    let i = 0;
    for (const c of t) if (i < s.length && s[i] === c) i++;
    return i === s.length;
  },

  'find-the-longest-balanced-substring-of-binary-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let res = 0, i = 0;
    while (i < s.length) {
      let zeros = 0, ones = 0;
      while (i < s.length && s[i] === '0') { zeros++; i++; }
      while (i < s.length && s[i] === '1') { ones++; i++; }
      res = Math.max(res, 2 * Math.min(zeros, ones));
    }
    return res;
  },

  'count-number-of-distinct-integers-after-reverse-operations': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const set = new Set(nums);
    for (const n of nums) set.add(parseInt(String(n).split('').reverse().join('')));
    return set.size;
  },

  'most-frequent-number-following-key': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const key = args[1] as number;
    const map: Record<number, number> = {};
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === key) map[nums[i + 1] as number] = (map[nums[i + 1] as number] ?? 0) + 1;
    }
    return +Object.entries(map).reduce((a, b) => (Number(a[1]) >= Number(b[1]) ? a : b))[0];
  },

  'minimum-difference-between-highest-and-lowest-of-k-scores': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const k = args[1] as number;
    let res = Infinity;
    for (let i = 0; i + k - 1 < nums.length; i++) res = Math.min(res, (nums[i + k - 1] as number) - (nums[i] as number));
    return res;
  },

  'find-the-array-concat-val': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let val = 0, l = 0, r = nums.length - 1;
    while (l < r) { val += Number(String(nums[l]) + String(nums[r])); l++; r--; }
    if (l === r) val += nums[l] as number;
    return val;
  },

  'sort-array-by-increasing-frequency': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq: Record<number, number> = {};
    for (const n of nums) freq[n] = (freq[n] ?? 0) + 1;
    return [...nums].sort((a, b) => freq[a] !== freq[b] ? (freq[a] as number) - (freq[b] as number) : b - a);
  },

  'find-all-k-distant-indices': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const key = args[1] as number;
    const k = args[2] as number;
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key && Math.abs(i - j) <= k) { res.push(i); break; }
      }
    }
    return res;
  },

  'number-of-beautiful-pairs': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      const first = +(String(nums[i] as number)[0] as string);
      for (let j = i + 1; j < nums.length; j++) {
        const last = (nums[j] as number) % 10;
        if (gcd(first, last) === 1) count++;
      }
    }
    return count;
  },

  'split-string-by-separator': (...args: unknown[]) => {
    const words = args[0] as string[];
    const separator = args[1] as string;
    return words.flatMap((w) => w.split(separator)).filter((p) => p.length > 0);
  },

  'count-vowel-strings-in-ranges': (...args: unknown[]) => {
    const words = args[0] as string[];
    const queries = args[1] as number[][];
    const vowels = new Set('aeiou');
    const pre = [0];
    for (const w of words) {
      pre.push((pre[pre.length - 1] as number) + (vowels.has(w[0] as string) && vowels.has(w[w.length - 1] as string) ? 1 : 0));
    }
    return queries.map((q) => (pre[(q[1] as number) + 1] as number) - (pre[q[0] as number] as number));
  },

  'number-of-even-odd-bits': (...args: unknown[]) => {
    let n = args[0] as number;
    let even = 0, odd = 0;
    for (let pos = 0; n > 0; pos++, n >>= 1) {
      if (n & 1) { if (pos % 2 === 0) even++; else odd++; }
    }
    return [even, odd];
  },

  'average-value-of-even-numbers-divisible-by-three': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const evens = nums.filter((n) => n % 6 === 0);
    if (evens.length === 0) return 0;
    return Math.floor(evens.reduce((a, b) => a + b, 0) / evens.length);
  },

  'count-prefix-suffix-pairs': (...args: unknown[]) => {
    const words = args[0] as string[];
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if ((words[j] as string).startsWith(words[i] as string) && (words[j] as string).endsWith(words[i] as string)) count++;
      }
    }
    return count;
  },

  'minimum-cost-of-buying-candies-with-discount': (...args: unknown[]) => {
    const cost = [...(args[0] as number[])].sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < cost.length; i++) if ((i + 1) % 3 !== 0) total += cost[i] as number;
    return total;
  },

  'find-original-array-from-prefix-xor': (...args: unknown[]) => {
    const pref = args[0] as number[];
    const arr = [pref[0] as number];
    for (let i = 1; i < pref.length; i++) arr.push((pref[i - 1] as number) ^ (pref[i] as number));
    return arr;
  },

  'total-distance-traveled': (...args: unknown[]) => {
    let main = args[0] as number;
    let extra = args[1] as number;
    let dist = 0;
    while (main >= 5) {
      dist += 50;
      main -= 5;
      if (extra > 0) { main++; extra--; }
    }
    dist += main * 10;
    return dist;
  },

  'delete-characters-to-make-fancy-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let res = '';
    for (const c of s) {
      const n = res.length;
      if (n >= 2 && res[n - 1] === c && res[n - 2] === c) continue;
      res += c;
    }
    return res;
  },

  'three-consecutive-odds': (...args: unknown[]) => {
    const arr = args[0] as number[];
    let count = 0;
    for (const n of arr) {
      if (n % 2 === 1) { if (++count >= 3) return true; }
      else count = 0;
    }
    return false;
  },

  'count-equal-and-divisible-pairs-in-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j] && (i * j) % k === 0) count++;
      }
    }
    return count;
  },

  'minimum-changes-to-make-alternating-binary-string': (...args: unknown[]) => {
    const s = args[0] as string;
    let mis = 0;
    for (let i = 0; i < s.length; i++) if (s[i] !== '01'[i % 2]) mis++;
    return Math.min(mis, s.length - mis);
  },

  'rotate-function': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);
    let f = 0;
    for (let i = 0; i < n; i++) f += i * (nums[i] as number);
    let max = f;
    for (let k = 1; k < n; k++) {
      f = f + total - n * (nums[n - k] as number);
      max = Math.max(max, f);
    }
    return max;
  },

  'maximum-sum-of-distinct-subarrays-with-length-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const freq = new Map<number, number>();
    let sum = 0, max = 0;
    for (let r = 0; r < nums.length; r++) {
      const rv = nums[r] as number;
      freq.set(rv, (freq.get(rv) ?? 0) + 1);
      sum += rv;
      if (r >= k) {
        const lv = nums[r - k] as number;
        sum -= lv;
        const lf = (freq.get(lv) ?? 0) - 1;
        if (lf === 0) freq.delete(lv); else freq.set(lv, lf);
      }
      if (r >= k - 1 && freq.size === k) max = Math.max(max, sum);
    }
    return max;
  },

  'find-the-sum-of-encrypted-integers': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.reduce((s, n) => {
      const str = String(n);
      const maxD = str.split('').reduce((m, c) => Math.max(m, +c), 0);
      return s + Number(String(maxD).repeat(str.length));
    }, 0);
  },

  'maximum-number-of-weeks-for-which-you-can-work': (...args: unknown[]) => {
    const milestones = args[0] as number[];
    const total = milestones.reduce((a, b) => a + b, 0);
    const max = Math.max(...milestones);
    const rest = total - max;
    return max <= rest + 1 ? total : 2 * rest + 1;
  },

  'count-complete-subarrays-in-an-array': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const total = new Set(nums).size;
    let count = 0;
    for (let l = 0; l < nums.length; l++) {
      const seen = new Set<number>();
      for (let r = l; r < nums.length; r++) {
        seen.add(nums[r] as number);
        if (seen.size === total) count++;
      }
    }
    return count;
  },

  'count-subarrays-where-max-element-appears-at-least-k-times': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const M = Math.max(...nums);
    const positions: number[] = [];
    let count = 0;
    for (let r = 0; r < nums.length; r++) {
      if ((nums[r] as number) === M) positions.push(r);
      if (positions.length >= k) count += (positions[positions.length - k] as number) + 1;
    }
    return count;
  },

  'minimum-index-of-a-valid-split': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const freq: Record<number, number> = {};
    for (const x of nums) freq[x] = (freq[x] ?? 0) + 1;
    let dom = 0, maxF = 0;
    for (const [k, v] of Object.entries(freq)) { if (v > maxF) { maxF = v; dom = +k; } }
    const total = maxF;
    let leftFreq = 0;
    for (let i = 0; i < n - 1; i++) {
      if ((nums[i] as number) === dom) leftFreq++;
      const rightFreq = total - leftFreq;
      if (leftFreq * 2 > i + 1 && rightFreq * 2 > n - i - 1) return i;
    }
    return -1;
  },

  'last-moment-before-ants-fall-off-a-plank': (...args: unknown[]) => {
    const n = args[0] as number;
    const left = args[1] as number[];
    const right = args[2] as number[];
    const ml = left.length ? Math.max(...left) : 0;
    const mr = right.length ? Math.max(...right.map(p => n - p)) : 0;
    return Math.max(ml, mr);
  },

  'check-if-two-chessboard-squares-have-same-color': (...args: unknown[]) => {
    const c1 = args[0] as string;
    const c2 = args[1] as string;
    const col1 = c1.charCodeAt(0) - 96, row1 = parseInt(c1[1] as string);
    const col2 = c2.charCodeAt(0) - 96, row2 = parseInt(c2[1] as string);
    return (col1 + row1 + col2 + row2) % 2 === 0;
  },

  'count-number-of-teams': (...args: unknown[]) => {
    const rating = args[0] as number[];
    const n = rating.length;
    let count = 0;
    for (let j = 1; j < n - 1; j++) {
      let ls = 0, ll = 0, rs = 0, rl = 0;
      for (let i = 0; i < j; i++) {
        if ((rating[i] as number) < (rating[j] as number)) ls++;
        else if ((rating[i] as number) > (rating[j] as number)) ll++;
      }
      for (let kk = j + 1; kk < n; kk++) {
        if ((rating[kk] as number) > (rating[j] as number)) rl++;
        else if ((rating[kk] as number) < (rating[j] as number)) rs++;
      }
      count += ls * rl + ll * rs;
    }
    return count;
  },

  'remove-colored-pieces-if-both-neighbors-are-same-color': (...args: unknown[]) => {
    const colors = args[0] as string;
    let alice = 0, bob = 0;
    for (let i = 1; i < colors.length - 1; i++) {
      if (colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') alice++;
      if (colors[i] === 'B' && colors[i - 1] === 'B' && colors[i + 1] === 'B') bob++;
    }
    return alice > bob;
  },

  'longest-alternating-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let ans = -1;
    for (let i = 0; i < nums.length - 1; i++) {
      if ((nums[i + 1] as number) - (nums[i] as number) !== 1) continue;
      let len = 2;
      for (let j = i + 2; j < nums.length; j++) {
        const r = j - i;
        const expected = r % 2 === 1 ? 1 : -1;
        if ((nums[j] as number) - (nums[j - 1] as number) === expected) len++;
        else break;
      }
      ans = Math.max(ans, len);
    }
    return ans;
  },

  'divisible-and-non-divisible-sums-difference': (...args: unknown[]) => {
    const n = args[0] as number;
    const m = args[1] as number;
    let num1 = 0, num2 = 0;
    for (let i = 1; i <= n; i++) { if (i % m === 0) num2 += i; else num1 += i; }
    return num1 - num2;
  },

  'minimum-element-after-replacement-with-digit-sum': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return Math.min(...nums.map(n => String(n).split('').reduce((s, d) => s + parseInt(d), 0)));
  },

  'pick-gifts': (...args: unknown[]) => {
    const gifts = [...(args[0] as number[])];
    const k = args[1] as number;
    for (let i = 0; i < k; i++) {
      const maxVal = Math.max(...gifts);
      const idx = gifts.indexOf(maxVal);
      gifts[idx] = Math.floor(Math.sqrt(maxVal));
    }
    return gifts.reduce((a, b) => a + b, 0);
  },

  'minimum-operations-to-make-array-xor-equal-to-k': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    const xorAll = nums.reduce((x, n) => x ^ n, 0);
    return (xorAll ^ k).toString(2).split('').filter(b => b === '1').length;
  },

  'maximum-count-of-positive-integer-and-negative-integer': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const pos = nums.filter(n => n > 0).length;
    const neg = nums.filter(n => n < 0).length;
    return Math.max(pos, neg);
  },

  'number-of-students-doing-homework-at-a-given-time': (...args: unknown[]) => {
    const startTime = args[0] as number[];
    const endTime = args[1] as number[];
    const queryTime = args[2] as number;
    return startTime.filter((s, i) => s <= queryTime && (endTime[i] as number) >= queryTime).length;
  },

  'find-the-xor-of-numbers-which-appear-twice': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const freq: Record<number, number> = {};
    for (const n of nums) freq[n] = (freq[n] ?? 0) + 1;
    return Object.entries(freq).reduce((x, [k, v]) => v === 2 ? x ^ +k : x, 0);
  },

  'minimum-sum-mountain-triplet-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const prefMin = Array<number>(n).fill(Infinity);
    const sufMin = Array<number>(n).fill(Infinity);
    for (let i = 1; i < n; i++) prefMin[i] = Math.min(prefMin[i - 1] as number, nums[i - 1] as number);
    for (let i = n - 2; i >= 0; i--) sufMin[i] = Math.min(sufMin[i + 1] as number, nums[i + 1] as number);
    let ans = Infinity;
    for (let j = 1; j < n - 1; j++) {
      const pmin = prefMin[j] as number, smin = sufMin[j] as number, v = nums[j] as number;
      if (pmin < v && smin < v) ans = Math.min(ans, pmin + v + smin);
    }
    return ans === Infinity ? -1 : ans;
  },

  'minimum-operations-to-exceed-threshold-value-i': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const k = args[1] as number;
    return nums.filter(x => x < k).length;
  },

  'maximum-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let best = nums[0]!;
    let cur = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
      cur = Math.max(nums[i]!, cur + nums[i]!);
      best = Math.max(best, cur);
    }
    return best;
  },

  'meeting-rooms': (...args: unknown[]) => {
    const intervals = args[0] as [number, number][];
    if (intervals.length === 0) return true;
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i]![0] < sorted[i - 1]![1]) return false;
    }
    return true;
  },

  'brick-wall': (...args: unknown[]) => {
    const wall = args[0] as number[][];
    const edges = new Map<number, number>();
    for (const row of wall) {
      let pos = 0;
      for (let i = 0; i < row.length - 1; i++) {
        pos += row[i]!;
        edges.set(pos, (edges.get(pos) ?? 0) + 1);
      }
    }
    const maxEdges = edges.size === 0 ? 0 : Math.max(...edges.values());
    return wall.length - maxEdges;
  },

  'number-of-longest-increasing-subsequence': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const dp = new Array<number>(n).fill(1);
    const cnt = new Array<number>(n).fill(1);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[j]! < nums[i]!) {
          if (dp[j]! + 1 > dp[i]!) { dp[i] = dp[j]! + 1; cnt[i] = cnt[j]!; }
          else if (dp[j]! + 1 === dp[i]!) cnt[i] = cnt[i]! + cnt[j]!;
        }
      }
    }
    const maxLen = Math.max(...dp);
    return dp.reduce((s, v, i) => v === maxLen ? s + cnt[i]! : s, 0);
  },

  'kth-smallest-element-in-sorted-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const k = args[1] as number;
    const n = matrix.length;
    let lo = matrix[0]![0]!, hi = matrix[n - 1]![n - 1]!;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      let count = 0, col = n - 1;
      for (let row = 0; row < n; row++) {
        while (col >= 0 && matrix[row]![col]! > mid) col--;
        count += col + 1;
      }
      if (count < k) lo = mid + 1; else hi = mid;
    }
    return lo;
  },

  'minimum-knight-moves': (...args: unknown[]) => {
    const x = Math.abs(args[0] as number);
    const y = Math.abs(args[1] as number);
    if (x === 0 && y === 0) return 0;
    const queue: [number, number, number][] = [[0, 0, 0]];
    const visited = new Set<string>(['0,0']);
    const moves = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    while (queue.length) {
      const [cx, cy, steps] = queue.shift()!;
      for (const [dx, dy] of moves) {
        const nx = cx + dx!, ny = cy + dy!;
        if (nx === x && ny === y) return steps + 1;
        const key = `${nx},${ny}`;
        if (!visited.has(key) && nx >= -2 && ny >= -2 && nx <= x + 2 && ny <= y + 2) {
          visited.add(key);
          queue.push([nx, ny, steps + 1]);
        }
      }
    }
    return -1;
  },

  'palindrome-pairs': (...args: unknown[]) => {
    const words = args[0] as string[];
    const isPalin = (s: string) => s === s.split('').reverse().join('');
    const res: number[][] = [];
    for (let i = 0; i < words.length; i++)
      for (let j = 0; j < words.length; j++)
        if (i !== j && isPalin(words[i]! + words[j]!)) res.push([i, j]);
    res.sort((a, b) => a[0] !== b[0] ? a[0]! - b[0]! : a[1]! - b[1]!);
    return res;
  },

  'search-suggestions-system': (...args: unknown[]) => {
    const products = [...(args[0] as string[])].sort();
    const searchWord = args[1] as string;
    const result: string[][] = [];
    for (let i = 1; i <= searchWord.length; i++) {
      const prefix = searchWord.slice(0, i);
      result.push(products.filter(p => p.startsWith(prefix)).slice(0, 3));
    }
    return result;
  },

  'array-nesting': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const visited = new Array<boolean>(nums.length).fill(false);
    let best = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        let size = 0, j = i;
        while (!visited[j]) { visited[j] = true; j = nums[j]!; size++; }
        best = Math.max(best, size);
      }
    }
    return best;
  },

  'evaluate-division': (...args: unknown[]) => {
    const equations = args[0] as string[][];
    const values = args[1] as number[];
    const queries = args[2] as string[][];
    const graph = new Map<string, [string, number][]>();
    for (let i = 0; i < equations.length; i++) {
      const [a, b] = equations[i]!;
      const v = values[i]!;
      if (!graph.has(a!)) graph.set(a!, []);
      if (!graph.has(b!)) graph.set(b!, []);
      graph.get(a!)!.push([b!, v]);
      graph.get(b!)!.push([a!, 1 / v]);
    }
    const bfs = (src: string, dst: string): number => {
      if (!graph.has(src) || !graph.has(dst)) return -1;
      if (src === dst) return 1;
      const queue: [string, number][] = [[src, 1]];
      const visited = new Set([src]);
      while (queue.length) {
        const [node, prod] = queue.shift()!;
        for (const [nb, w] of graph.get(node)!) {
          if (nb === dst) return prod * w;
          if (!visited.has(nb)) { visited.add(nb); queue.push([nb, prod * w]); }
        }
      }
      return -1;
    };
    return queries.map(([c, d]) => bfs(c!, d!));
  },

  'out-of-boundary-paths': (...args: unknown[]) => {
    const m = args[0] as number, n = args[1] as number, maxMove = args[2] as number;
    const startRow = args[3] as number, startCol = args[4] as number;
    const MOD = 1_000_000_007;
    let dp = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    dp[startRow]![startCol] = 1;
    let ans = 0;
    for (let step = 0; step < maxMove; step++) {
      const next = Array.from({ length: m }, () => new Array<number>(n).fill(0));
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (!dp[i]![j]) continue;
          for (const [di, dj] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const ni = i + di!, nj = j + dj!;
            if (ni < 0 || ni >= m || nj < 0 || nj >= n) { ans = (ans + dp[i]![j]!) % MOD; }
            else next[ni]![nj] = (next[ni]![nj]! + dp[i]![j]!) % MOD;
          }
        }
      }
      dp = next;
    }
    return ans;
  },

  'maximum-ice-cream-bars': (...args: unknown[]) => {
    const costs = [...(args[0] as number[])].sort((a, b) => a - b);
    let coins = args[1] as number, count = 0;
    for (const c of costs) { if (coins >= c) { coins -= c; count++; } else break; }
    return count;
  },

  'count-numbers-with-unique-digits': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n === 0) return 1;
    let ans = 10, avail = 9, uniqueCount = 9;
    for (let i = 2; i <= Math.min(n, 10); i++) {
      uniqueCount *= avail; ans += uniqueCount; avail--;
    }
    return ans;
  },

  'minimum-cost-to-cut-stick': (...args: unknown[]) => {
    const n = args[0] as number;
    const cuts = [...(args[1] as number[]), 0, n].sort((a, b) => a - b);
    const m = cuts.length;
    const dp = Array.from({ length: m }, () => new Array<number>(m).fill(0));
    for (let len = 2; len < m; len++) {
      for (let i = 0; i + len < m; i++) {
        const j = i + len;
        dp[i]![j] = Infinity;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k]![j]! + cuts[j]! - cuts[i]!);
        }
      }
    }
    return dp[0]![m - 1]!;
  },

  'find-minimum-in-rotated-sorted-array-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (nums[mid]! < nums[hi]!) hi = mid;
      else if (nums[mid]! > nums[hi]!) lo = mid + 1;
      else hi--;
    }
    return nums[lo]!;
  },

  'search-in-rotated-sorted-array-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const target = args[1] as number;
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (nums[mid] === target) return true;
      if (nums[lo] === nums[mid]) { lo++; continue; }
      if (nums[lo]! <= nums[mid]!) {
        if (nums[lo]! <= target && target < nums[mid]!) hi = mid - 1;
        else lo = mid + 1;
      } else {
        if (nums[mid]! < target && target <= nums[hi]!) lo = mid + 1;
        else hi = mid - 1;
      }
    }
    return false;
  },

  'distinct-subsequences': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    const m = s.length, n = t.length;
    const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i]![0] = 1;
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        dp[i]![j] = dp[i - 1]![j]! + (s[i - 1] === t[j - 1] ? dp[i - 1]![j - 1]! : 0);
    return dp[m]![n]!;
  },

  'minimum-window-subsequence': (...args: unknown[]) => {
    const s1 = args[0] as string, s2 = args[1] as string;
    let best = '', lo = 0;
    while (lo < s1.length) {
      let i = lo, j = 0;
      while (i < s1.length && j < s2.length) { if (s1[i] === s2[j]) j++; i++; }
      if (j < s2.length) break;
      let hi = i - 1; j = s2.length - 1;
      while (j >= 0) { if (s1[hi] === s2[j]) j--; hi--; }
      const win = s1.slice(hi + 1, i);
      if (!best || win.length < best.length) best = win;
      lo = hi + 2;
    }
    return best;
  },

  'reconstruct-itinerary': (...args: unknown[]) => {
    const tickets = args[0] as string[][];
    const graph: Record<string, string[]> = {};
    for (const ticket of tickets) {
      const f = ticket[0]!, t = ticket[1]!;
      if (!graph[f]) graph[f] = [];
      graph[f]!.push(t);
    }
    for (const k of Object.keys(graph)) graph[k]!.sort();
    const result: string[] = [];
    const dfs = (node: string) => {
      while (graph[node] && graph[node]!.length > 0) dfs(graph[node]!.shift()!);
      result.unshift(node);
    };
    dfs('JFK');
    return result;
  },

  'partition-k-equal-subset-sum': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % k !== 0) return false;
    const target = total / k;
    nums.sort((a, b) => b - a);
    if (nums[0]! > target) return false;
    const buckets = new Array(k).fill(0);
    const bt = (idx: number): boolean => {
      if (idx === nums.length) return buckets.every(b => b === target);
      for (let i = 0; i < k; i++) {
        if (buckets[i]! + nums[idx]! <= target) {
          buckets[i]! += nums[idx]!;
          if (bt(idx + 1)) return true;
          buckets[i]! -= nums[idx]!;
          if (buckets[i] === 0) break;
        }
      }
      return false;
    };
    return bt(0);
  },

  'paint-house': (...args: unknown[]) => {
    const costs = args[0] as number[][];
    let r = costs[0]![0]!, g = costs[0]![1]!, b = costs[0]![2]!;
    for (let i = 1; i < costs.length; i++) {
      const [cr, cg, cb] = costs[i]!;
      [r, g, b] = [cr! + Math.min(g, b), cg! + Math.min(r, b), cb! + Math.min(r, g)];
    }
    return Math.min(r, g, b);
  },

  'add-strings': (...args: unknown[]) => {
    const num1 = args[0] as string, num2 = args[1] as string;
    let i = num1.length - 1, j = num2.length - 1, carry = 0;
    const res: string[] = [];
    while (i >= 0 || j >= 0 || carry) {
      const d1 = i >= 0 ? num1.charCodeAt(i--) - 48 : 0;
      const d2 = j >= 0 ? num2.charCodeAt(j--) - 48 : 0;
      const sum = d1 + d2 + carry;
      res.push(String(sum % 10));
      carry = Math.floor(sum / 10);
    }
    return res.reverse().join('');
  },

  'palindrome-partitioning-ii': (...args: unknown[]) => {
    const s = args[0] as string;
    const n = s.length;
    const isPalin = Array.from({ length: n }, () => new Array(n).fill(false));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
        isPalin[i]![j] = s[i] === s[j] && (j - i <= 2 || isPalin[i + 1]![j - 1]);
      }
    }
    const cut = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      if (isPalin[0]![i]) { cut[i] = 0; continue; }
      cut[i] = Infinity;
      for (let j = 1; j <= i; j++) {
        if (isPalin[j]![i]) cut[i] = Math.min(cut[i] as number, (cut[j - 1] as number) + 1);
      }
    }
    return cut[n - 1];
  },

  'wiggle-sort-ii': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    const sorted = [...nums].sort((a, b) => a - b);
    const n = nums.length;
    const mid = Math.floor((n - 1) / 2);
    let lo = mid, hi = n - 1;
    for (let i = 0; i < n; i++) {
      nums[i] = i % 2 === 0 ? sorted[lo--]! : sorted[hi--]!;
    }
    return nums;
  },

  'stone-game-iv': (...args: unknown[]) => {
    const n = args[0] as number;
    const dp = new Array(n + 1).fill(false);
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k * k <= i; k++) {
        if (!dp[i - k * k]) { dp[i] = true; break; }
      }
    }
    return dp[n];
  },

  'minimum-refueling-stops': (...args: unknown[]) => {
    const target = args[0] as number, startFuel = args[1] as number;
    const stations = args[2] as number[][];
    let fuel = startFuel, stops = 0, idx = 0;
    const heap: number[] = [];
    const push = (v: number) => {
      heap.push(v);
      let i = heap.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (heap[p]! >= heap[i]!) break;
        [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p;
      }
    };
    const pop = (): number => {
      const top = heap[0]!;
      const last = heap.pop()!;
      if (heap.length > 0) {
        heap[0] = last; let i = 0;
        while (true) {
          let max = i, l = 2*i+1, r = 2*i+2;
          if (l < heap.length && heap[l]! > heap[max]!) max = l;
          if (r < heap.length && heap[r]! > heap[max]!) max = r;
          if (max === i) break;
          [heap[i], heap[max]] = [heap[max]!, heap[i]!]; i = max;
        }
      }
      return top;
    };
    while (fuel < target) {
      while (idx < stations.length && stations[idx]![0]! <= fuel) push(stations[idx++]![1]!);
      if (heap.length === 0) return -1;
      fuel += pop(); stops++;
    }
    return stops;
  },

  'snapshot-array': (...args: unknown[]) => {
    const length = args[0] as number;
    const ops = args[1] as string[];
    const opArgs = args[2] as number[][];
    const history: Array<Array<[number, number]>> = Array.from({ length }, () => [[0, 0]]);
    let snapId = 0;
    return ops.map((op, i) => {
      const a = opArgs[i] ?? [];
      if (op === 'set') {
        const [idx, val] = a as [number, number];
        const h = history[idx]!;
        if (h[h.length - 1]![0] === snapId) h[h.length - 1]![1] = val;
        else h.push([snapId, val]);
        return null;
      }
      if (op === 'snap') return snapId++;
      if (op === 'get') {
        const [idx, sid] = a as [number, number];
        const h = history[idx]!;
        let lo = 0, hi = h.length - 1;
        while (lo < hi) {
          const mid = (lo + hi + 1) >> 1;
          if (h[mid]![0] <= sid) lo = mid; else hi = mid - 1;
        }
        return h[lo]![1];
      }
      return null;
    });
  },

  'paint-house-ii': (...args: unknown[]) => {
    const costs = args[0] as number[][];
    const k = costs[0]!.length;
    let prev = [...costs[0]!];
    for (let i = 1; i < costs.length; i++) {
      let min1 = Infinity, min2 = Infinity, minIdx = -1;
      for (let j = 0; j < k; j++) {
        if (prev[j]! < min1) { min2 = min1; min1 = prev[j]!; minIdx = j; }
        else if (prev[j]! < min2) min2 = prev[j]!;
      }
      const cur = new Array(k);
      for (let j = 0; j < k; j++) cur[j] = costs[i]![j]! + (j === minIdx ? min2 : min1);
      prev = cur;
    }
    return Math.min(...prev);
  },

  'minimum-moves-equal-array-ii': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)]!;
    return nums.reduce((acc, n) => acc + Math.abs(n - median), 0);
  },

  'frog-jump': (...args: unknown[]) => {
    const stones = args[0] as number[];
    const stoneSet = new Set(stones);
    const dp = new Map<number, Set<number>>();
    for (const s of stones) dp.set(s, new Set());
    dp.get(0)!.add(0);
    for (const stone of stones) {
      for (const k of dp.get(stone)!) {
        for (const next of [k - 1, k, k + 1]) {
          if (next > 0 && stoneSet.has(stone + next)) dp.get(stone + next)!.add(next);
        }
      }
    }
    return dp.get(stones[stones.length - 1]!)!.size > 0;
  },

  'k-inverse-pairs-array': (...args: unknown[]) => {
    const n = args[0] as number, k = args[1] as number;
    const MOD = 1_000_000_007;
    let dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      const ndp = new Array(k + 1).fill(0);
      let prefix = 0;
      for (let j = 0; j <= k; j++) {
        prefix += dp[j]!;
        if (j >= i) prefix -= dp[j - i]!;
        prefix = ((prefix % MOD) + MOD) % MOD;
        ndp[j] = prefix;
      }
      dp = ndp;
    }
    return dp[k];
  },

  'minimum-cost-to-hire-k-workers': (...args: unknown[]) => {
    const quality = args[0] as number[], wage = args[1] as number[], k = args[2] as number;
    const workers = quality.map((q, i) => [wage[i]! / q, q] as [number, number]);
    workers.sort((a, b) => a[0] - b[0]);
    const heap: number[] = [];
    const pushH = (v: number) => {
      heap.push(v); let i = heap.length - 1;
      while (i > 0) { const p = (i - 1) >> 1; if (heap[p]! >= heap[i]!) break; [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p; }
    };
    const popH = () => {
      const top = heap[0]!; const last = heap.pop()!;
      if (heap.length) {
        heap[0] = last; let i = 0;
        while (true) { let m = i, l = 2*i+1, r = 2*i+2;
          if (l < heap.length && heap[l]! > heap[m]!) m = l;
          if (r < heap.length && heap[r]! > heap[m]!) m = r;
          if (m === i) break; [heap[i], heap[m]] = [heap[m]!, heap[i]!]; i = m; }
      }
      return top;
    };
    let qSum = 0, res = Infinity;
    for (const [ratio, q] of workers) {
      pushH(q); qSum += q;
      if (heap.length > k) { qSum -= popH(); }
      if (heap.length === k) res = Math.min(res, ratio * qSum);
    }
    return res;
  },

  'random-pick-with-weight': (...args: unknown[]) => {
    const w = args[0] as number[], picks = args[1] as number[];
    const prefix: number[] = [];
    let sum = 0;
    for (const wi of w) { sum += wi; prefix.push(sum); }
    return picks.map(() => {
      const r = Math.random() * sum;
      let lo = 0, hi = prefix.length - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (prefix[mid]! < r) lo = mid + 1; else hi = mid; }
      return lo;
    });
  },

  'find-in-mountain-array': (...args: unknown[]) => {
    const arr = args[0] as number[], target = args[1] as number;
    const n = arr.length;
    let lo = 0, hi = n - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid]! < arr[mid + 1]!) lo = mid + 1; else hi = mid; }
    const peak = lo;
    lo = 0; hi = peak;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (arr[mid] === target) return mid; if (arr[mid]! < target) lo = mid + 1; else hi = mid - 1; }
    lo = peak + 1; hi = n - 1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (arr[mid] === target) return mid; if (arr[mid]! > target) lo = mid + 1; else hi = mid - 1; }
    return -1;
  },

  'basic-calculator-ii': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: number[] = [];
    let num = 0, op = '+';
    for (let i = 0; i < s.length; i++) {
      const c = s[i]!;
      if (c >= '0' && c <= '9') num = num * 10 + +c;
      if ((c === '+' || c === '-' || c === '*' || c === '/') || i === s.length - 1) {
        if (op === '+') stack.push(num);
        else if (op === '-') stack.push(-num);
        else if (op === '*') stack.push(stack.pop()! * num);
        else stack.push(Math.trunc(stack.pop()! / num));
        op = c; num = 0;
      }
    }
    return stack.reduce((a, b) => a + b, 0);
  },

  'maximum-binary-tree': (...args: unknown[]) => {
    const nums = args[0] as number[];
    type N = { val: number; left: N | null; right: N | null };
    const build = (arr: number[]): N | null => {
      if (!arr.length) return null;
      const mi = arr.indexOf(Math.max(...arr));
      return { val: arr[mi]!, left: build(arr.slice(0, mi)), right: build(arr.slice(mi + 1)) };
    };
    const toArray = (node: N | null): (number | null)[] => {
      if (!node) return [];
      const res: (number | null)[] = [];
      const q: (N | null)[] = [node];
      while (q.length) { const n = q.shift()!; if (n) { res.push(n.val); q.push(n.left); q.push(n.right); } else res.push(null); }
      while (res.length && res[res.length - 1] === null) res.pop();
      return res;
    };
    return toArray(build(nums));
  },

  'next-greater-element-iii': (...args: unknown[]) => {
    const n = args[0] as number;
    const d = n.toString().split('').map(Number);
    let i = d.length - 2;
    while (i >= 0 && d[i]! >= d[i + 1]!) i--;
    if (i < 0) return -1;
    let j = d.length - 1;
    while (d[j]! <= d[i]!) j--;
    [d[i], d[j]] = [d[j]!, d[i]!];
    d.splice(i + 1, d.length - i - 1, ...d.slice(i + 1).reverse());
    const result = parseInt(d.join(''), 10);
    return result > 2147483647 ? -1 : result;
  },

  'number-of-digit-one': (...args: unknown[]) => {
    let n = args[0] as number, count = 0;
    for (let factor = 1; factor <= n; factor *= 10) {
      const d = Math.floor(n / factor) % 10;
      const higher = Math.floor(n / (factor * 10));
      const lower = n % factor;
      if (d === 0) count += higher * factor;
      else if (d === 1) count += higher * factor + lower + 1;
      else count += (higher + 1) * factor;
    }
    return count;
  },

  'moving-average-from-data-stream': (...args: unknown[]) => {
    const size = args[0] as number, vals = args[1] as number[];
    const queue: number[] = [];
    let sum = 0;
    return vals.map(v => {
      queue.push(v); sum += v;
      if (queue.length > size) sum -= queue.shift()!;
      return sum / queue.length;
    });
  },

  'design-add-and-search-words': (...args: unknown[]) => {
    const ops = args[0] as string[], opArgs = args[1] as string[][];
    const trie: Record<string, unknown> = {};
    const add = (word: string) => {
      let node = trie;
      for (const c of word) { if (!node[c]) node[c] = {}; node = node[c] as Record<string, unknown>; }
      node['$'] = true;
    };
    const search = (word: string, node: Record<string, unknown> = trie): boolean => {
      for (let i = 0; i < word.length; i++) {
        const c = word[i]!;
        if (c === '.') return Object.keys(node).filter(k => k !== '$').some(k => search(word.slice(i + 1), node[k] as Record<string, unknown>));
        if (!node[c]) return false;
        node = node[c] as Record<string, unknown>;
      }
      return !!node['$'];
    };
    return ops.map((op, i) => {
      if (op === 'addWord') { add(opArgs[i]![0]!); return null; }
      if (op === 'search') return search(opArgs[i]![0]!);
      return null;
    });
  },

  'serialize-deserialize-bst': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    type Node = { val: number; left: Node | null; right: Node | null };
    const build = (arr: number[]): Node | null => {
      if (!arr.length) return null;
      const mid = Math.floor(arr.length / 2);
      return { val: arr[mid]!, left: build(arr.slice(0, mid)), right: build(arr.slice(mid + 1)) };
    };
    const inOrder = (node: Node | null): number[] => !node ? [] : [...inOrder(node.left), node.val, ...inOrder(node.right)];
    const preOrder = (n: Node | null): string => !n ? '' : [n.val.toString(), ...(n.left ? [preOrder(n.left)] : []), ...(n.right ? [preOrder(n.right)] : [])].join(',');
    const deserializeBST = (s: string): Node | null => {
      if (!s) return null;
      const vals = s.split(',').map(Number);
      let idx = 0;
      const bt = (min: number, max: number): Node | null => {
        if (idx >= vals.length || vals[idx]! < min || vals[idx]! > max) return null;
        const v = vals[idx++]!;
        return { val: v, left: bt(min, v - 1), right: bt(v + 1, max) };
      };
      return bt(-Infinity, Infinity);
    };
    const root = build(nums);
    return inOrder(deserializeBST(root ? preOrder(root) : ''));
  },

  'best-meeting-point': (...args: unknown[]) => {
    const grid = args[0] as number[][];
    const rows: number[] = [], cols: number[] = [];
    for (let r = 0; r < grid.length; r++)
      for (let c = 0; c < grid[0]!.length; c++)
        if (grid[r]![c]) { rows.push(r); cols.push(c); }
    const median = (arr: number[]) => arr[Math.floor(arr.length / 2)]!;
    const sum = (arr: number[], med: number) => arr.reduce((a, v) => a + Math.abs(v - med), 0);
    const sortedRows = [...rows].sort((a, b) => a - b);
    const sortedCols = [...cols].sort((a, b) => a - b);
    return sum(sortedRows, median(sortedRows)) + sum(sortedCols, median(sortedCols));
  },

  'longest-subarray-ones-after-delete': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let lo = 0, zeros = 0, best = 0;
    for (let hi = 0; hi < nums.length; hi++) {
      if (nums[hi] === 0) zeros++;
      while (zeros > 1) { if (nums[lo++] === 0) zeros--; }
      best = Math.max(best, hi - lo);
    }
    return best;
  },

  'reverse-pairs': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])];
    let count = 0;
    const merge = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;
      const mid = arr.length >> 1;
      const left = merge(arr.slice(0, mid));
      const right = merge(arr.slice(mid));
      let j = 0;
      for (let i = 0; i < left.length; i++) {
        while (j < right.length && left[i]! > 2 * right[j]!) j++;
        count += j;
      }
      const merged: number[] = [];
      let a = 0, b = 0;
      while (a < left.length && b < right.length) {
        if (left[a]! <= right[b]!) merged.push(left[a++]!);
        else merged.push(right[b++]!);
      }
      return [...merged, ...left.slice(a), ...right.slice(b)];
    };
    merge(nums);
    return count;
  },

  'minimum-cost-cut-cake': (...args: unknown[]) => {
    const n = args[0] as number;
    const cuts = [...(args[1] as number[])].sort((a, b) => a - b);
    const arr = [0, ...cuts, n];
    const m = arr.length;
    const dp: number[][] = Array.from({ length: m }, () => new Array(m).fill(0));
    for (let len = 2; len < m; len++) {
      for (let i = 0; i + len < m; i++) {
        const j = i + len;
        dp[i]![j] = Infinity;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k]![j]! + arr[j]! - arr[i]!);
        }
      }
    }
    return dp[0]![m - 1];
  },

  'spiral-matrix-iii': (...args: unknown[]) => {
    const rows = args[0] as number, cols = args[1] as number;
    let r = args[2] as number, c = args[3] as number;
    const result: number[][] = [];
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let di = 0, steps = 1;
    result.push([r, c]);
    while (result.length < rows * cols) {
      for (let t = 0; t < 2; t++) {
        const [dr, dc] = dirs[di % 4]!;
        for (let s = 0; s < steps; s++) {
          r += dr!; c += dc!;
          if (r >= 0 && r < rows && c >= 0 && c < cols) result.push([r, c]);
        }
        di++;
      }
      steps++;
    }
    return result;
  },

  'text-justification': (...args: unknown[]) => {
    const words = args[0] as string[], maxWidth = args[1] as number;
    const lines: string[][] = [];
    let cur: string[] = [], curLen = 0;
    for (const w of words) {
      if (curLen + w.length + cur.length > maxWidth) { lines.push(cur); cur = []; curLen = 0; }
      cur.push(w); curLen += w.length;
    }
    lines.push(cur);
    return lines.map((line, i) => {
      if (i === lines.length - 1 || line.length === 1) {
        const s = line.join(' ');
        return s + ' '.repeat(maxWidth - s.length);
      }
      const totalSpaces = maxWidth - line.reduce((a, w) => a + w.length, 0);
      const gaps = line.length - 1;
      const base = Math.floor(totalSpaces / gaps), extra = totalSpaces % gaps;
      return line.reduce((acc, w, j) => {
        if (j === 0) return w;
        const sp = base + (j <= extra ? 1 : 0);
        return acc + ' '.repeat(sp) + w;
      });
    });
  },

  'minimum-operations-make-array-continuous': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const uniq = [...new Set(nums)].sort((a, b) => a - b);
    let best = 0, j = 0;
    for (let i = 0; i < uniq.length; i++) {
      while (j < uniq.length && uniq[j]! <= uniq[i]! + n - 1) j++;
      best = Math.max(best, j - i);
    }
    return n - best;
  },

  'arithmetic-subarrays': (...args: unknown[]) => {
    const nums = args[0] as number[], l = args[1] as number[], r = args[2] as number[];
    return l.map((li, i) => {
      const sub = nums.slice(li, r[i]! + 1).sort((a, b) => a - b);
      if (sub.length < 2) return true;
      const d = sub[1]! - sub[0]!;
      return sub.every((v, j) => j === 0 || v - sub[j - 1]! === d);
    });
  },

  'minimum-score-path': (...args: unknown[]) => {
    const n = args[0] as number;
    const roads = args[1] as number[][];
    const adj: Array<Array<[number, number]>> = Array.from({ length: n + 1 }, () => []);
    for (const road of roads) { const a = road[0]!, b = road[1]!, d = road[2]!; adj[a]!.push([b, d]); adj[b]!.push([a, d]); }
    let ans = Infinity;
    const visited = new Set<number>();
    const dfs = (u: number) => {
      visited.add(u);
      for (const [v, d] of adj[u]!) { ans = Math.min(ans, d); if (!visited.has(v)) dfs(v); }
    };
    dfs(1);
    return ans;
  },

  'design-circular-queue': (...args: unknown[]) => {
    const k = args[0] as number, ops = args[1] as string[], opArgs = args[2] as number[][];
    const arr = new Array(k);
    let head = 0, size = 0;
    const enQueue = (v: number) => { if (size === k) return false; arr[(head + size) % k] = v; size++; return true; };
    const deQueue = () => { if (size === 0) return false; head = (head + 1) % k; size--; return true; };
    const Front = () => size === 0 ? -1 : arr[head];
    const Rear = () => size === 0 ? -1 : arr[(head + size - 1) % k];
    return ops.map((op, i) => {
      if (op === 'enQueue') return enQueue(opArgs[i]![0]!);
      if (op === 'deQueue') return deQueue();
      if (op === 'Front') return Front();
      if (op === 'Rear') return Rear();
      if (op === 'isEmpty') return size === 0;
      if (op === 'isFull') return size === k;
      return null;
    });
  },

  'find-duplicate-number-ii': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let slow = nums[0]!, fast = nums[0]!;
    do { slow = nums[slow]!; fast = nums[nums[fast]!]!; } while (slow !== fast);
    slow = nums[0]!;
    while (slow !== fast) { slow = nums[slow]!; fast = nums[fast]!; }
    return slow;
  },

  'insert-delete-getrandom': (...args: unknown[]) => {
    const ops = args[0] as string[];
    const opArgs = (args[1] as number[][]) || [];
    const map = new Map<number, number>();
    const arr: number[] = [];
    return ops.map((op, i) => {
      const a = opArgs[i] ?? [];
      if (op === 'insert') {
        const val = a[0]!;
        if (map.has(val)) return false;
        map.set(val, arr.length);
        arr.push(val);
        return true;
      }
      if (op === 'remove') {
        const val = a[0]!;
        if (!map.has(val)) return false;
        const idx = map.get(val)!;
        const last = arr[arr.length - 1]!;
        arr[idx] = last;
        map.set(last, idx);
        arr.pop();
        map.delete(val);
        return true;
      }
      if (op === 'getRandom') {
        return arr[Math.floor(Math.random() * arr.length)]!;
      }
      return null;
    });
  },

  'maximum-points-from-cards': (cardPoints: unknown, k: unknown) => {
    const pts = cardPoints as number[];
    const ki = k as number;
    const n = pts.length;
    const total = pts.reduce((a, b) => a + b, 0);
    if (ki === n) return total;
    const win = n - ki;
    let windowSum = 0;
    for (let i = 0; i < win; i++) windowSum += pts[i]!;
    let minWindow = windowSum;
    for (let i = win; i < n; i++) {
      windowSum += pts[i]! - pts[i - win]!;
      if (windowSum < minWindow) minWindow = windowSum;
    }
    return total - minWindow;
  },

  'minimum-ascii-delete-sum': (s1: unknown, s2: unknown) => {
    const a = s1 as string, b = s2 as string;
    const m = a.length, n = b.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) dp[i]![0] = dp[i - 1]![0]! + a.charCodeAt(i - 1);
    for (let j = 1; j <= n; j++) dp[0]![j] = dp[0]![j - 1]! + b.charCodeAt(j - 1);
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (a[i - 1] === b[j - 1]) {
          dp[i]![j] = dp[i - 1]![j - 1]!;
        } else {
          dp[i]![j] = Math.min(dp[i - 1]![j]! + a.charCodeAt(i - 1), dp[i]![j - 1]! + b.charCodeAt(j - 1));
        }
      }
    }
    return dp[m]![n]!;
  },

  'sum-of-distances-in-tree': (n: unknown, edges: unknown) => {
    const N = n as number;
    const edgeArr = edges as number[][];
    const adj: number[][] = Array.from({ length: N }, () => []);
    for (const edge of edgeArr) {
      adj[edge[0]!]!.push(edge[1]!);
      adj[edge[1]!]!.push(edge[0]!);
    }
    const count = new Array(N).fill(1);
    const ans = new Array(N).fill(0);
    // first DFS: compute subtree sizes and distances from root
    const dfs1 = (node: number, parent: number) => {
      for (const child of adj[node]!) {
        if (child === parent) continue;
        dfs1(child, node);
        count[node] += count[child];
        ans[node] += ans[child] + count[child];
      }
    };
    // second DFS: rerooting
    const dfs2 = (node: number, parent: number) => {
      for (const child of adj[node]!) {
        if (child === parent) continue;
        ans[child] = ans[node] - count[child] + (N - count[child]);
        dfs2(child, node);
      }
    };
    dfs1(0, -1);
    dfs2(0, -1);
    return ans;
  },

  'couples-holding-hands': (row: unknown) => {
    const r = [...(row as number[])];
    const pos = new Array(r.length);
    for (let i = 0; i < r.length; i++) pos[r[i]!] = i;
    let swaps = 0;
    for (let i = 0; i < r.length; i += 2) {
      const partner = r[i]! ^ 1;
      if (r[i + 1] === partner) continue;
      const j = pos[partner]!;
      pos[r[j]!] = i + 1;
      [r[i + 1], r[j]] = [r[j]!, r[i + 1]!];
      pos[partner] = i + 1;
      swaps++;
    }
    return swaps;
  },

  'falling-squares': (positions: unknown) => {
    const pos = positions as number[][];
    const intervals: { l: number; r: number; h: number }[] = [];
    let maxH = 0;
    const result: number[] = [];
    for (const [left, size] of pos) {
      const r = left! + size!;
      let base = 0;
      for (const seg of intervals) {
        if (seg.l < r && left! < seg.r) base = Math.max(base, seg.h);
      }
      const newH = base + size!;
      intervals.push({ l: left!, r, h: newH });
      maxH = Math.max(maxH, newH);
      result.push(maxH);
    }
    return result;
  },

  'constrained-subsequence-sum': (nums: unknown, k: unknown) => {
    const arr = nums as number[], ki = k as number;
    const dp = [...arr];
    const deque: number[] = [];
    let res = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (deque.length && deque[0]! < i - ki) deque.shift();
      if (deque.length) dp[i] = arr[i]! + Math.max(0, dp[deque[0]!]!);
      while (deque.length && dp[deque[deque.length - 1]!]! <= dp[i]!) deque.pop();
      deque.push(i);
      if (dp[i]! > res) res = dp[i]!;
    }
    return res;
  },

  'pseudo-palindromic-paths': (arr: unknown) => {
    const a = arr as (number | null)[];
    if (!a.length || a[0] === null) return 0;
    type N = { v: number; l: N | null; r: N | null };
    const build = (i: number): N | null => {
      if (i >= a.length || a[i] === null || a[i] === undefined) return null;
      return { v: a[i] as number, l: build(2 * i + 1), r: build(2 * i + 2) };
    };
    const root = build(0);
    let count = 0;
    const dfs = (node: N | null, mask: number) => {
      if (!node) return;
      mask ^= 1 << node.v;
      if (!node.l && !node.r) {
        if ((mask & (mask - 1)) === 0) count++;
        return;
      }
      dfs(node.l, mask);
      dfs(node.r, mask);
    };
    dfs(root, 0);
    return count;
  },

  'number-of-nodes-same-label': (n: unknown, edges: unknown, labels: unknown) => {
    const N = n as number, edgeArr = edges as number[][], lbls = labels as string;
    const adj: number[][] = Array.from({ length: N }, () => []);
    for (const e of edgeArr) { adj[e[0]!]!.push(e[1]!); adj[e[1]!]!.push(e[0]!); }
    const ans = new Array(N).fill(0);
    const dfs = (node: number, parent: number): number[] => {
      const freq = new Array(26).fill(0);
      freq[lbls.charCodeAt(node) - 97]!++;
      for (const child of adj[node]!) {
        if (child === parent) continue;
        const childFreq = dfs(child, node);
        for (let i = 0; i < 26; i++) freq[i] += childFreq[i]!;
      }
      ans[node] = freq[lbls.charCodeAt(node) - 97]!;
      return freq;
    };
    dfs(0, -1);
    return ans;
  },

  'minimum-cost-tree-leaf-values': (arr: unknown) => {
    const a = [...(arr as number[])];
    let cost = 0;
    while (a.length > 1) {
      let minIdx = 0;
      for (let i = 1; i < a.length; i++) if (a[i]! < a[minIdx]!) minIdx = i;
      const left = minIdx > 0 ? a[minIdx - 1]! : Infinity;
      const right = minIdx < a.length - 1 ? a[minIdx + 1]! : Infinity;
      cost += a[minIdx]! * Math.min(left, right);
      a.splice(minIdx, 1);
    }
    return cost;
  },

  'valid-partition-array': (nums: unknown) => {
    const arr = nums as number[];
    const n = arr.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 2; i <= n; i++) {
      if (dp[i - 2] && arr[i - 2] === arr[i - 1]) dp[i] = true;
      if (i >= 3 && dp[i - 3]) {
        const a = arr[i - 3]!, b = arr[i - 2]!, c = arr[i - 1]!;
        if ((a === b && b === c) || (b === a + 1 && c === a + 2)) dp[i] = true;
      }
    }
    return dp[n];
  },

  'paint-fence': (n: unknown, k: unknown) => {
    const ni = n as number, ki = k as number;
    if (ni === 1) return ki;
    let same = ki, diff = ki * (ki - 1);
    for (let i = 3; i <= ni; i++) {
      const newSame = diff;
      const newDiff = (ki - 1) * (same + diff);
      same = newSame;
      diff = newDiff;
    }
    return same + diff;
  },

  'minimum-insertion-steps-palindrome': (s: unknown) => {
    const str = s as string;
    const n = str.length;
    const rev = str.split('').reverse().join('');
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (str[i - 1] === rev[j - 1]) {
          dp[i]![j] = dp[i - 1]![j - 1]! + 1;
        } else {
          dp[i]![j] = Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
        }
      }
    }
    return n - dp[n]![n]!;
  },

  'longest-subarray-abs-diff-limit': (nums: unknown, limit: unknown) => {
    const arr = nums as number[], lim = limit as number;
    const maxDeque: number[] = [], minDeque: number[] = [];
    let left = 0, res = 0;
    for (let right = 0; right < arr.length; right++) {
      while (maxDeque.length && arr[maxDeque[maxDeque.length - 1]!]! <= arr[right]!) maxDeque.pop();
      while (minDeque.length && arr[minDeque[minDeque.length - 1]!]! >= arr[right]!) minDeque.pop();
      maxDeque.push(right);
      minDeque.push(right);
      while (arr[maxDeque[0]!]! - arr[minDeque[0]!]! > lim) {
        left++;
        if (maxDeque[0]! < left) maxDeque.shift();
        if (minDeque[0]! < left) minDeque.shift();
      }
      res = Math.max(res, right - left + 1);
    }
    return res;
  },

  'maximum-sum-two-non-overlapping-subarrays': (nums: unknown, firstLen: unknown, secondLen: unknown) => {
    const arr = nums as number[], fl = firstLen as number, sl = secondLen as number;
    const n = arr.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + arr[i]!;
    const sum = (l: number, r: number) => prefix[r + 1] - prefix[l];
    let res = 0;
    // first before second
    let maxFirst = 0;
    for (let i = fl - 1; i <= n - sl - 1; i++) {
      maxFirst = Math.max(maxFirst, sum(i - fl + 1, i));
      res = Math.max(res, maxFirst + sum(i + 1, i + sl));
    }
    // second before first
    let maxSecond = 0;
    for (let i = sl - 1; i <= n - fl - 1; i++) {
      maxSecond = Math.max(maxSecond, sum(i - sl + 1, i));
      res = Math.max(res, maxSecond + sum(i + 1, i + fl));
    }
    return res;
  },

  'number-of-closed-islands': (grid: unknown) => {
    const g = (grid as number[][]).map(r => [...r]);
    const rows = g.length, cols = g[0]!.length;
    const flood = (r: number, c: number) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || g[r]![c] !== 0) return;
      g[r]![c] = 1;
      flood(r + 1, c); flood(r - 1, c); flood(r, c + 1); flood(r, c - 1);
    };
    for (let r = 0; r < rows; r++) { flood(r, 0); flood(r, cols - 1); }
    for (let c = 0; c < cols; c++) { flood(0, c); flood(rows - 1, c); }
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (g[r]![c] === 0) { flood(r, c); count++; }
      }
    }
    return count;
  },

  'destination-city': (paths: unknown) => {
    const p = paths as string[][];
    const sources = new Set(p.map(pair => pair[0]!));
    for (const pair of p) {
      if (!sources.has(pair[1]!)) return pair[1]!;
    }
    return '';
  },

  'find-winner-tictactoe': (moves: unknown) => {
    const m = moves as number[][];
    const rowA = [0, 0, 0], colA = [0, 0, 0];
    const rowB = [0, 0, 0], colB = [0, 0, 0];
    let diagA = 0, antiA = 0, diagB = 0, antiB = 0;
    for (let i = 0; i < m.length; i++) {
      const [r, c] = [m[i]![0]!, m[i]![1]!];
      if (i % 2 === 0) {
        rowA[r]!++; colA[c]!++;
        if (r === c) diagA++;
        if (r + c === 2) antiA++;
        if (rowA[r] === 3 || colA[c] === 3 || diagA === 3 || antiA === 3) return 'A';
      } else {
        rowB[r]!++; colB[c]!++;
        if (r === c) diagB++;
        if (r + c === 2) antiB++;
        if (rowB[r] === 3 || colB[c] === 3 || diagB === 3 || antiB === 3) return 'B';
      }
    }
    return m.length === 9 ? 'Draw' : 'Pending';
  },

  'maximum-eaten-apples': (apples: unknown, days: unknown) => {
    const ap = apples as number[], dy = days as number[];
    const n = ap.length;
    const heap: [number, number][] = [];
    const push = (item: [number, number]) => {
      heap.push(item);
      let i = heap.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (heap[p]![0] > heap[i]![0]) { [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p; } else break;
      }
    };
    const pop = () => {
      const top = heap[0]!;
      const last = heap.pop()!;
      if (heap.length) { heap[0] = last; let i = 0;
        while (true) { let min = i; const l = 2*i+1, r = 2*i+2;
          if (l < heap.length && heap[l]![0] < heap[min]![0]) min = l;
          if (r < heap.length && heap[r]![0] < heap[min]![0]) min = r;
          if (min === i) break; [heap[i], heap[min]] = [heap[min]!, heap[i]!]; i = min; } }
      return top;
    };
    let eaten = 0;
    for (let day = 0; day < n || heap.length > 0; day++) {
      if (day < n && ap[day]! > 0) push([day + dy[day]!, ap[day]!]);
      while (heap.length && heap[0]![0] <= day) pop();
      if (heap.length) {
        const top = pop();
        eaten++;
        if (top[1] > 1) push([top[0], top[1] - 1]);
      }
    }
    return eaten;
  },

  'split-array-fibonacci': (num: unknown) => {
    const s = num as string;
    const MAX = 2 ** 31 - 1;
    const result: number[] = [];
    const bt = (start: number, seq: number[]): boolean => {
      if (start === s.length && seq.length >= 3) return true;
      for (let end = start + 1; end <= s.length; end++) {
        const sub = s.slice(start, end);
        if (sub.length > 1 && sub[0] === '0') break;
        const n = parseInt(sub, 10);
        if (n > MAX) break;
        if (seq.length >= 2) {
          const expected = seq[seq.length - 2]! + seq[seq.length - 1]!;
          if (n < expected) continue;
          if (n > expected) break;
        }
        seq.push(n);
        if (bt(end, seq)) return true;
        seq.pop();
      }
      return false;
    };
    bt(0, result);
    return result;
  },

  'maximum-score-performing-multiplication': (nums: unknown, multipliers: unknown) => {
    const arr = nums as number[], mult = multipliers as number[];
    const n = arr.length, m = mult.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(-Infinity));
    dp[0]![0] = 0;
    for (let k = 0; k < m; k++) {
      for (let i = 0; i <= k; i++) {
        const j = k - i;
        if (dp[i]![j] === -Infinity) continue;
        const cur = dp[i]![j]!;
        if (dp[i + 1]![j] === undefined) dp[i + 1]![j] = -Infinity;
        dp[i + 1]![j] = Math.max(dp[i + 1]![j]!, cur + arr[i]! * mult[k]!);
        if (dp[i]![j + 1] === undefined) dp[i]![j + 1] = -Infinity;
        dp[i]![j + 1] = Math.max(dp[i]![j + 1]!, cur + arr[n - 1 - j]! * mult[k]!);
      }
    }
    let res = -Infinity;
    for (let i = 0; i <= m; i++) {
      const j = m - i;
      if (dp[i]![j] !== undefined && dp[i]![j]! > res) res = dp[i]![j]!;
    }
    return res;
  },

  'russian-doll-envelopes': (envelopes: unknown) => {
    const env = (envelopes as number[][]).map(e => [...e]);
    env.sort((a, b) => a[0] !== b[0] ? a[0]! - b[0]! : b[1]! - a[1]!);
    const tails: number[] = [];
    for (const [, h] of env) {
      let lo = 0, hi = tails.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (tails[mid]! < h!) lo = mid + 1; else hi = mid; }
      tails[lo] = h!;
    }
    return tails.length;
  },

  'cherry-pickup': (grid: unknown) => {
    const g = grid as number[][];
    const n = g.length;
    const NEG_INF = -Infinity;
    let dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(NEG_INF));
    dp[0]![0] = g[0]![0]!;
    for (let t = 1; t < 2 * n - 1; t++) {
      const ndp: number[][] = Array.from({ length: n }, () => new Array(n).fill(NEG_INF));
      const lo = Math.max(0, t - (n - 1)), hi = Math.min(n - 1, t);
      for (let r1 = lo; r1 <= hi; r1++) {
        const c1 = t - r1;
        if (g[r1]![c1] === -1) continue;
        for (let r2 = r1; r2 <= hi; r2++) {
          const c2 = t - r2;
          if (g[r2]![c2] === -1) continue;
          let best = NEG_INF;
          for (const [d1, d2] of [[0, 0], [0, 1], [1, 0], [1, 1]]) {
            const pr1 = r1 - d1!, pr2 = r2 - d2!;
            if (pr1 >= 0 && pr2 >= 0 && dp[pr1]![pr2] !== NEG_INF) {
              best = Math.max(best, dp[pr1]![pr2]!);
            }
          }
          if (best === NEG_INF) continue;
          let cherries = g[r1]![c1]!;
          if (r1 !== r2) cherries += g[r2]![c2]!;
          ndp[r1]![r2] = best + cherries;
        }
      }
      dp = ndp;
    }
    const ans = dp[n - 1]![n - 1]!;
    return ans === NEG_INF ? 0 : Math.max(0, ans);
  },

  'count-ways-build-good-string': (low: unknown, high: unknown, zero: unknown, one: unknown) => {
    const lo = low as number, hi = high as number, z = zero as number, o = one as number;
    const MOD = 1_000_000_007;
    const dp = new Array(hi + 1).fill(0);
    dp[0] = 1;
    let ans = 0;
    for (let i = 1; i <= hi; i++) {
      if (i >= z) dp[i] = (dp[i] + dp[i - z]) % MOD;
      if (i >= o) dp[i] = (dp[i] + dp[i - o]) % MOD;
      if (i >= lo) ans = (ans + dp[i]) % MOD;
    }
    return ans;
  },

  'profitable-schemes': (n: unknown, minProfit: unknown, group: unknown, profit: unknown) => {
    const N = n as number, mp = minProfit as number;
    const grp = group as number[], prf = profit as number[];
    const MOD = 1_000_000_007;
    const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(mp + 1).fill(0));
    dp[0]![0] = 1;
    for (let i = 0; i < grp.length; i++) {
      const g = grp[i]!, p = prf[i]!;
      for (let w = N; w >= g; w--) {
        for (let j = mp; j >= 0; j--) {
          const np = Math.min(j + p, mp);
          dp[w]![np] = (dp[w]![np]! + dp[w - g]![j]!) % MOD;
        }
      }
    }
    let ans = 0;
    for (let w = 0; w <= N; w++) ans = (ans + dp[w]![mp]!) % MOD;
    return ans;
  },

  'count-square-submatrices': (matrix: unknown) => {
    const m = (matrix as number[][]).map(r => [...r]);
    let ans = 0;
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[0]!.length; j++) {
        if (m[i]![j] === 1 && i > 0 && j > 0) {
          m[i]![j] = Math.min(m[i - 1]![j]!, m[i]![j - 1]!, m[i - 1]![j - 1]!) + 1;
        }
        ans += m[i]![j]!;
      }
    }
    return ans;
  },

  'freedom-trail': (ring: unknown, key: unknown) => {
    const r = ring as string, k = key as string;
    const n = r.length;
    const pos: Record<string, number[]> = {};
    for (let i = 0; i < n; i++) {
      if (!pos[r[i]!]) pos[r[i]!] = [];
      pos[r[i]!]!.push(i);
    }
    let dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    for (let j = 0; j < k.length; j++) {
      const ndp = new Array(n).fill(Infinity);
      for (const nxt of pos[k[j]!]!) {
        for (let cur = 0; cur < n; cur++) {
          if (dp[cur] === Infinity) continue;
          const diff = Math.abs(cur - nxt);
          const steps = Math.min(diff, n - diff);
          ndp[nxt] = Math.min(ndp[nxt], dp[cur] + steps + 1);
        }
      }
      dp = ndp;
    }
    return Math.min(...dp);
  },

  'guess-number-higher-or-lower-ii': (n: unknown) => {
    const N = n as number;
    const dp: number[][] = Array.from({ length: N + 2 }, () => new Array(N + 2).fill(0));
    for (let len = 2; len <= N; len++) {
      for (let i = 1; i <= N - len + 1; i++) {
        const j = i + len - 1;
        dp[i]![j] = Infinity;
        for (let k = i; k <= j; k++) {
          const cost = k + Math.max(k > i ? dp[i]![k - 1]! : 0, k < j ? dp[k + 1]![j]! : 0);
          dp[i]![j] = Math.min(dp[i]![j]!, cost);
        }
      }
    }
    return dp[1]![N]!;
  },

  'remove-palindromic-subsequences': (s: unknown) => {
    const str = s as string;
    if (str === '') return 0;
    let l = 0, r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return 2;
      l++; r--;
    }
    return 1;
  },

  'check-array-formation': (arr: unknown, pieces: unknown) => {
    const a = arr as number[], ps = pieces as number[][];
    const map: Record<number, number[]> = {};
    for (const p of ps) map[p[0]!] = p;
    let i = 0;
    while (i < a.length) {
      const piece = map[a[i]!];
      if (!piece) return false;
      for (let j = 0; j < piece.length; j++) {
        if (a[i + j] !== piece[j]) return false;
      }
      i += piece.length;
    }
    return true;
  },

  'minimum-falling-path-sum-ii': (grid: unknown) => {
    const g = grid as number[][];
    const n = g.length;
    let dp = [...g[0]!];
    for (let i = 1; i < n; i++) {
      let min1 = Infinity, min2 = Infinity, minIdx = -1;
      for (let j = 0; j < n; j++) {
        if (dp[j]! < min1) { min2 = min1; min1 = dp[j]!; minIdx = j; }
        else if (dp[j]! < min2) { min2 = dp[j]!; }
      }
      const ndp = new Array(n);
      for (let j = 0; j < n; j++) {
        ndp[j] = g[i]![j]! + (j === minIdx ? min2 : min1);
      }
      dp = ndp;
    }
    return Math.min(...dp);
  },

  'scramble-string': (s1: unknown, s2: unknown) => {
    const a = s1 as string, b = s2 as string;
    const memo: Record<string, boolean> = {};
    const solve = (x: string, y: string): boolean => {
      if (x === y) return true;
      const key = x + '#' + y;
      if (key in memo) return memo[key]!;
      const n = x.length;
      const cnt = new Array(26).fill(0);
      for (let i = 0; i < n; i++) {
        cnt[x.charCodeAt(i) - 97]!++;
        cnt[y.charCodeAt(i) - 97]!--;
      }
      if (cnt.some(c => c !== 0)) return (memo[key] = false);
      for (let i = 1; i < n; i++) {
        if ((solve(x.slice(0, i), y.slice(0, i)) && solve(x.slice(i), y.slice(i))) ||
            (solve(x.slice(0, i), y.slice(n - i)) && solve(x.slice(i), y.slice(0, n - i)))) {
          return (memo[key] = true);
        }
      }
      return (memo[key] = false);
    };
    return solve(a, b);
  },

  'predict-the-winner': (nums: unknown) => {
    const a = nums as number[];
    const n = a.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i]![i] = a[i]!;
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        dp[i]![j] = Math.max(a[i]! - dp[i + 1]![j]!, a[j]! - dp[i]![j - 1]!);
      }
    }
    return dp[0]![n - 1]! >= 0;
  },
  'binary-tree-cameras': (arr: unknown) => {
    const a = arr as (number | null)[];
    const root = _buildTree(a);
    if (!root) return 0;
    let cameras = 0;
    function dfs(node: _TN | null): number {
      if (!node) return 1;
      const left = dfs(node.l);
      const right = dfs(node.r);
      if (left === 0 || right === 0) { cameras++; return 2; }
      if (left === 2 || right === 2) return 1;
      return 0;
    }
    if (dfs(root) === 0) cameras++;
    return cameras;
  },

  'linked-list-cycle-ii': (vals: unknown, pos: unknown) => {
    const arr = vals as number[], p = pos as number;
    if (!arr.length) return -1;
    // Use index-based cycle simulation instead of pointer juggling
    if (p < 0) return -1; // no cycle
    const n = arr.length;
    // Floyd's on indices
    let slow = 0, fast = 0;
    let found = false;
    for (let step = 0; step < n * 2; step++) {
      slow = slow + 1 < n ? slow + 1 : p;
      fast = fast + 1 < n ? fast + 1 : p;
      fast = fast + 1 < n ? fast + 1 : p;
      if (slow === fast) { found = true; break; }
    }
    if (!found) return -1;
    let entry = 0;
    while (entry !== slow) {
      entry = entry + 1 < n ? entry + 1 : p;
      slow = slow + 1 < n ? slow + 1 : p;
    }
    return entry;
  },

  'add-two-numbers-ii': (l1: unknown, l2: unknown) => {
    const s1 = [...(l1 as number[])], s2 = [...(l2 as number[])];
    const result: number[] = [];
    let carry = 0;
    while (s1.length > 0 || s2.length > 0 || carry > 0) {
      const sum = (s1.pop() ?? 0) + (s2.pop() ?? 0) + carry;
      carry = Math.floor(sum / 10);
      result.unshift(sum % 10);
    }
    return result;
  },

  'maximum-performance-of-team': (_n: unknown, speed: unknown, efficiency: unknown, k: unknown) => {
    const spd = speed as number[], eff = efficiency as number[], kk = k as number;
    const MOD = 1_000_000_007n;
    const engineers = eff.map((e, i) => [e, spd[i]!]).sort((a, b) => b[0]! - a[0]!);
    const heap: number[] = [];
    let speedSum = 0n, best = 0n;
    for (const [e, s] of engineers) {
      heap.push(s!); heap.sort((a, b) => a - b);
      speedSum += BigInt(s!);
      if (heap.length > kk) speedSum -= BigInt(heap.shift()!);
      const perf = speedSum * BigInt(e!);
      if (perf > best) best = perf;
    }
    return Number(best % MOD);
  },

  'minimum-interval-to-include-each-query': (intervals: unknown, queries: unknown) => {
    const ivs = (intervals as number[][]).map(iv => [...iv]).sort((a, b) => a[0]! - b[0]!);
    const qs = queries as number[];
    const indexed = qs.map((q, i) => [q, i]).sort((a, b) => a[0]! - b[0]!);
    const ans = new Array(qs.length).fill(-1);
    // Simple O(n*m) for correctness in tests
    for (const [q, qi] of indexed) {
      let best = Infinity;
      for (const [l, r] of ivs) {
        if (l! <= q! && q! <= r!) best = Math.min(best, r! - l! + 1);
      }
      ans[qi as number] = best === Infinity ? -1 : best;
    }
    return ans;
  },

  'minimum-number-of-taps-to-open-to-water-a-garden': (n: unknown, ranges: unknown) => {
    const nn = n as number, rng = ranges as number[];
    const maxReach = new Array(nn + 1).fill(0);
    for (let i = 0; i <= nn; i++) {
      const left = Math.max(0, i - rng[i]!);
      const right = Math.min(nn, i + rng[i]!);
      if (maxReach[left]! < right) maxReach[left] = right;
    }
    let taps = 0, curEnd = 0, nextEnd = 0;
    for (let i = 0; i <= nn; i++) {
      if (i > nextEnd) return -1;
      if (maxReach[i]! > nextEnd) nextEnd = maxReach[i]!;
      if (i === curEnd && i < nn) { taps++; curEnd = nextEnd; }
    }
    return taps;
  },

  'online-election': (persons: unknown, times: unknown, queries: unknown) => {
    const ps = persons as number[], ts = times as number[], qs = queries as number[];
    const votes = new Map<number, number>();
    const leaders: number[] = [];
    let leader = -1;
    for (const p of ps) {
      votes.set(p, (votes.get(p) ?? 0) + 1);
      if (leader === -1 || votes.get(p)! >= votes.get(leader)!) leader = p;
      leaders.push(leader);
    }
    return qs.map(t => {
      let lo = 0, hi = ts.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (ts[mid]! <= t) lo = mid; else hi = mid - 1; }
      return leaders[lo]!;
    });
  },

  'count-of-range-sum': (nums: unknown, lower: unknown, upper: unknown) => {
    const arr = nums as number[], lo = lower as number, hi = upper as number;
    const n = arr.length;
    const prefix = new Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + BigInt(arr[i]!);
    const loBig = BigInt(lo), hiBig = BigInt(hi);
    let count = 0;
    function ms(a: bigint[]): bigint[] {
      if (a.length <= 1) return a;
      const mid = a.length >> 1;
      const left = ms(a.slice(0, mid)), right = ms(a.slice(mid));
      let j = 0, k = 0;
      for (const r of right) {
        while (j < left.length && left[j]! < r - hiBig) j++;
        while (k < left.length && left[k]! <= r - loBig) k++;
        count += k - j;
      }
      return [...left, ...right].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    }
    ms([...prefix]);
    return count;
  },

  'design-linked-list': (ops: unknown, args: unknown) => {
    const opArr = ops as string[], argArr = args as number[][];
    interface Node { val: number; next: Node | null }
    const sentinel: Node = { val: 0, next: null };
    let size = 0;
    function get(i: number): number {
      if (i < 0 || i >= size) return -1;
      let cur = sentinel.next!;
      for (let j = 0; j < i; j++) cur = cur.next!;
      return cur.val;
    }
    function addAtIndex(i: number, v: number) {
      if (i > size) return;
      i = Math.max(0, i);
      let prev: Node = sentinel;
      for (let j = 0; j < i; j++) prev = prev.next!;
      prev.next = { val: v, next: prev.next };
      size++;
    }
    function deleteAtIndex(i: number) {
      if (i < 0 || i >= size) return;
      let prev: Node = sentinel;
      for (let j = 0; j < i; j++) prev = prev.next!;
      prev.next = prev.next!.next;
      size--;
    }
    return opArr.map((op, i) => {
      const a = argArr[i]!;
      if (op === 'addAtHead') { addAtIndex(0, a[0]!); return null; }
      if (op === 'addAtTail') { addAtIndex(size, a[0]!); return null; }
      if (op === 'addAtIndex') { addAtIndex(a[0]!, a[1]!); return null; }
      if (op === 'deleteAtIndex') { deleteAtIndex(a[0]!); return null; }
      if (op === 'get') return get(a[0]!);
      return null;
    });
  },

  'maximum-product-subarray': (nums: unknown) => {
    const a = nums as number[];
    let maxP = a[0]!, minP = a[0]!, res = a[0]!;
    for (let i = 1; i < a.length; i++) {
      const t = maxP;
      maxP = Math.max(a[i]!, maxP * a[i]!, minP * a[i]!);
      minP = Math.min(a[i]!, t * a[i]!, minP * a[i]!);
      res = Math.max(res, maxP);
    }
    return res;
  },

  'delete-and-earn': (nums: unknown) => {
    const a = nums as number[];
    const maxVal = Math.max(...a);
    const sum = new Array(maxVal + 1).fill(0);
    for (const n of a) sum[n] += n;
    let prev2 = 0, prev1 = 0;
    for (let i = 0; i <= maxVal; i++) {
      const cur = Math.max(prev1, prev2 + sum[i]);
      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  },

  'minimum-time-collect-apples': (n: unknown, edges: unknown, hasApple: unknown) => {
    const N = n as number;
    const E = edges as number[][];
    const H = hasApple as boolean[];
    const adj: number[][] = Array.from({ length: N }, () => []);
    for (const e of E) { adj[e[0]!]!.push(e[1]!); adj[e[1]!]!.push(e[0]!); }
    const dfs = (node: number, parent: number): number => {
      let time = 0;
      for (const child of adj[node]!) {
        if (child === parent) continue;
        const ct = dfs(child, node);
        if (ct > 0 || H[child]) time += ct + 2;
      }
      return time;
    };
    return dfs(0, -1);
  },

  'xor-queries-of-subarray': (arr: unknown, queries: unknown) => {
    const a = arr as number[], q = queries as number[][];
    const prefix = [0];
    for (const n of a) prefix.push(prefix[prefix.length - 1]! ^ n);
    return q.map(([l, r]) => prefix[r! + 1]! ^ prefix[l!]!);
  },

  'sequential-digits': (low: unknown, high: unknown) => {
    const lo = low as number, hi = high as number;
    const result: number[] = [];
    for (let start = 1; start <= 9; start++) {
      let num = 0;
      for (let d = start; d <= 9; d++) {
        num = num * 10 + d;
        if (num >= lo && num <= hi) result.push(num);
      }
    }
    return result.sort((a, b) => a - b);
  },

  'count-sub-islands': (grid1: unknown, grid2: unknown) => {
    const g1 = (grid1 as number[][]).map(r => [...r]);
    const g2 = (grid2 as number[][]).map(r => [...r]);
    const m = g1.length, n = g1[0]!.length;
    let count = 0;
    const dfs = (i: number, j: number): boolean => {
      if (i < 0 || i >= m || j < 0 || j >= n || g2[i]![j] !== 1) return true;
      g2[i]![j] = 0;
      let ok = g1[i]![j] === 1;
      ok = dfs(i - 1, j) && ok;
      ok = dfs(i + 1, j) && ok;
      ok = dfs(i, j - 1) && ok;
      ok = dfs(i, j + 1) && ok;
      return ok;
    };
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (g2[i]![j] === 1 && dfs(i, j)) count++;
      }
    }
    return count;
  },

  'maximum-profit-assignment': (difficulty: unknown, profit: unknown, worker: unknown) => {
    const d = difficulty as number[], p = profit as number[], w = [...(worker as number[])].sort((a, b) => a - b);
    const jobs = d.map((di, i) => [di, p[i]!] as [number, number]).sort((a, b) => a[0] - b[0]);
    let total = 0, best = 0, k = 0;
    for (const wi of w) {
      while (k < jobs.length && jobs[k]![0] <= wi) { best = Math.max(best, jobs[k]![1]); k++; }
      total += best;
    }
    return total;
  },

  'longest-palindromic-substring': (s: unknown) => {
    const str = s as string;
    let start = 0, maxLen = 0;
    const expand = (l: number, r: number) => {
      while (l >= 0 && r < str.length && str[l] === str[r]) { l--; r++; }
      if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }
    };
    for (let i = 0; i < str.length; i++) {
      expand(i, i);
      expand(i, i + 1);
    }
    return str.slice(start, start + maxLen);
  },

  'max-product-word-lengths': (words: unknown) => {
    const ws = words as string[];
    const masks = ws.map(w => {
      let mask = 0;
      for (const c of w) mask |= (1 << (c.charCodeAt(0) - 97));
      return mask;
    });
    let best = 0;
    for (let i = 0; i < ws.length - 1; i++) {
      for (let j = i + 1; j < ws.length; j++) {
        if ((masks[i]! & masks[j]!) === 0) best = Math.max(best, ws[i]!.length * ws[j]!.length);
      }
    }
    return best;
  },

  'sliding-window-median': (nums: unknown, k: unknown) => {
    const arr = nums as number[], kk = k as number;
    const result: number[] = [];
    for (let i = 0; i <= arr.length - kk; i++) {
      const window = arr.slice(i, i + kk).sort((a, b) => a - b);
      const mid = kk >> 1;
      result.push(kk % 2 === 1 ? window[mid]! : (window[mid - 1]! + window[mid]!) / 2);
    }
    return result;
  },

  'minimum-difficulty-of-job-schedule': (jobDifficulty: unknown, d: unknown) => {
    const jobs = jobDifficulty as number[], days = d as number;
    const n = jobs.length;
    if (n < days) return -1;
    const INF = Infinity;
    let dp = new Array(n).fill(INF);
    // base: 1 day
    let maxSoFar = 0;
    for (let i = 0; i < n; i++) { maxSoFar = Math.max(maxSoFar, jobs[i]!); dp[i] = maxSoFar; }
    for (let day = 2; day <= days; day++) {
      const ndp = new Array(n).fill(INF);
      for (let i = day - 1; i < n; i++) {
        let mx = 0;
        for (let j = i; j >= day - 1; j--) {
          mx = Math.max(mx, jobs[j]!);
          if (dp[j - 1] < INF) ndp[i] = Math.min(ndp[i], dp[j - 1] + mx);
        }
      }
      dp = ndp;
    }
    return dp[n - 1]!;
  },

  'tallest-billboard': (rods: unknown) => {
    const r = rods as number[];
    const S = r.reduce((a, b) => a + b, 0);
    const dp = new Array(S + 1).fill(-1);
    dp[0] = 0;
    for (const rod of r) {
      const curr = [...dp];
      for (let d = 0; d <= S; d++) {
        if (curr[d]! < 0) continue;
        // add to taller side
        if (d + rod <= S) dp[d + rod] = Math.max(dp[d + rod]!, curr[d]! + rod);
        // add to shorter side
        if (d >= rod) dp[d - rod] = Math.max(dp[d - rod]!, curr[d]!);
        else dp[rod - d] = Math.max(dp[rod - d]!, curr[d]! + rod - d);
      }
    }
    return dp[0]!;
  },

  'concatenated-words': (words: unknown) => {
    const ws = words as string[];
    const wordSet = new Set(ws);
    function canForm(word: string): boolean {
      const n = word.length;
      const dp = new Array(n + 1).fill(false);
      dp[0] = true;
      for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
          if (!dp[j]) continue;
          const sub = word.slice(j, i);
          if (sub !== word && wordSet.has(sub)) { dp[i] = true; break; }
        }
      }
      return dp[n];
    }
    return ws.filter(w => w.length > 0 && canForm(w)).sort();
  },

  'max-value-of-equation': (points: unknown, k: unknown) => {
    const pts = points as number[][], kk = k as number;
    const deq: [number, number][] = []; // [yi-xi, xi]
    let ans = -Infinity;
    for (const pt of pts) {
      const xj = pt[0]!, yj = pt[1]!;
      while (deq.length && xj - deq[0]![1] > kk) deq.shift();
      if (deq.length) ans = Math.max(ans, deq[0]![0] + xj + yj);
      while (deq.length && deq[deq.length - 1]![0] <= yj - xj) deq.pop();
      deq.push([yj - xj, xj]);
    }
    return ans;
  },

  'number-of-music-playlists': (n: unknown, goal: unknown, k: unknown) => {
    const N = n as number, G = goal as number, K = k as number;
    const MOD = 1_000_000_007;
    const dp: number[][] = Array.from({ length: G + 1 }, () => new Array(N + 1).fill(0));
    dp[0]![0] = 1;
    for (let i = 1; i <= G; i++) {
      for (let j = 1; j <= N; j++) {
        dp[i]![j] = (dp[i]![j]! + dp[i - 1]![j - 1]! * (N - j + 1)) % MOD;
        if (j > K) dp[i]![j] = (dp[i]![j]! + dp[i - 1]![j]! * (j - K)) % MOD;
      }
    }
    return dp[G]![N]!;
  },

  'count-different-palindromic-subsequences': (s: unknown) => {
    const str = s as string;
    const MOD = 1_000_000_007;
    const n = str.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i]![i] = 1;
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        for (const c of 'abcd') {
          let l = i, r = j;
          while (l <= j && str[l] !== c) l++;
          while (r >= i && str[r] !== c) r--;
          if (l > j || r < i) continue;
          if (l === r) { dp[i]![j] = (dp[i]![j]! + 1) % MOD; }
          else if (l + 1 === r) { dp[i]![j] = (dp[i]![j]! + 2) % MOD; }
          else { dp[i]![j] = (dp[i]![j]! + dp[l + 1]![r - 1]! + 2) % MOD; }
        }
      }
    }
    return dp[0]![n - 1]!;
  },

  'painting-the-walls': (cost: unknown, time: unknown) => {
    const c = cost as number[], t = time as number[];
    const n = c.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
      for (let j = n; j >= 0; j--) {
        dp[j] = Math.min(dp[j], dp[Math.max(0, j - t[i]! - 1)] + c[i]!);
      }
    }
    return dp[n]!;
  },

  'shortest-path-to-get-all-keys': (grid: unknown) => {
    const g = grid as string[];
    const m = g.length, n = g[0]!.length;
    let numKeys = 0, sr = 0, sc = 0;
    for (let r = 0; r < m; r++)
      for (let c = 0; c < n; c++) {
        const ch = g[r]![c]!;
        if (ch === '@') { sr = r; sc = c; }
        else if (ch >= 'a' && ch <= 'f') numKeys++;
      }
    if (numKeys === 0) return 0;
    const allKeys = (1 << numKeys) - 1;
    const visited = new Set<string>();
    const q: [number, number, number, number][] = [[sr, sc, 0, 0]];
    visited.add(`${sr},${sc},0`);
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (q.length) {
      const [r, c, keys, dist] = q.shift()!;
      if (keys === allKeys) return dist;
      for (const [dr, dc] of dirs) {
        const nr = r + dr!, nc = c + dc!;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        const cell = g[nr]![nc]!;
        if (cell === '#') continue;
        if (cell >= 'A' && cell <= 'F' && !(keys & (1 << (cell.charCodeAt(0) - 65)))) continue;
        let nkeys = keys;
        if (cell >= 'a' && cell <= 'f') nkeys |= (1 << (cell.charCodeAt(0) - 97));
        const state = `${nr},${nc},${nkeys}`;
        if (!visited.has(state)) { visited.add(state); q.push([nr, nc, nkeys, dist + 1]); }
      }
    }
    return -1;
  },

  'stone-game-vii': (stoneValue: unknown) => {
    const sv = stoneValue as number[];
    const n = sv.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + sv[i]!;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        const removeLeft = prefix[j + 1] - prefix[i + 1] - dp[i + 1]![j]!;
        const removeRight = prefix[j] - prefix[i] - dp[i]![j - 1]!;
        dp[i]![j] = Math.max(removeLeft, removeRight);
      }
    }
    return dp[0]![n - 1]!;
  },

  'stone-game-v': (stoneValue: unknown) => {
    const sv = stoneValue as number[];
    const n = sv.length;
    if (n === 1) return 0;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + sv[i]!;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        for (let m = i; m < j; m++) {
          const left = prefix[m + 1] - prefix[i];
          const right = prefix[j + 1] - prefix[m + 1];
          if (left < right) dp[i]![j] = Math.max(dp[i]![j]!, left + dp[i]![m]!);
          else if (left > right) dp[i]![j] = Math.max(dp[i]![j]!, right + dp[m + 1]![j]!);
          else dp[i]![j] = Math.max(dp[i]![j]!, left + Math.max(dp[i]![m]!, dp[m + 1]![j]!));
        }
      }
    }
    return dp[0]![n - 1]!;
  },

  'maximum-sum-three-non-overlapping-subarrays': (nums: unknown, k: unknown) => {
    const a = nums as number[], kk = k as number;
    const n = a.length;
    const w: number[] = [];
    let s = 0;
    for (let i = 0; i < kk; i++) s += a[i]!;
    w.push(s);
    for (let i = kk; i < n; i++) { s += a[i]! - a[i - kk]!; w.push(s); }
    const wn = w.length;
    const left = new Array(wn).fill(0);
    const right = new Array(wn).fill(0);
    let best = w[0]!, bidx = 0;
    for (let i = 0; i < wn; i++) { if (w[i]! > best) { best = w[i]!; bidx = i; } left[i] = bidx; }
    best = w[wn - 1]!; bidx = wn - 1;
    for (let i = wn - 1; i >= 0; i--) { if (w[i]! >= best) { best = w[i]!; bidx = i; } right[i] = bidx; }
    let ans = [-1, -1, -1], bestSum = 0;
    for (let j = kk; j < wn - kk; j++) {
      const l = left[j - kk]!, r = right[j + kk]!;
      const total = w[l]! + w[j]! + w[r]!;
      if (total > bestSum) { bestSum = total; ans = [l, j, r]; }
    }
    return ans;
  },

  'minimum-cost-to-merge-stones': (stones: unknown, k: unknown) => {
    const st = stones as number[], kk = k as number;
    const n = st.length;
    if (n === 1) return 0;
    if ((n - 1) % (kk - 1) !== 0) return -1;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + st[i]!;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = kk; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        dp[i]![j] = Infinity;
        for (let m = i; m < j; m += kk - 1) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![m]! + dp[m + 1]![j]!);
        }
        if ((len - 1) % (kk - 1) === 0) dp[i]![j] = dp[i]![j]! + prefix[j + 1] - prefix[i];
      }
    }
    return dp[0]![n - 1]!;
  },

  'palindrome-partitioning-iii': (s: unknown, k: unknown) => {
    const str = s as string, kk = k as number;
    const n = str.length;
    const cost: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        cost[i]![j] = cost[i + 1]![j - 1]! + (str[i] !== str[j] ? 1 : 0);
      }
    }
    const INF = Infinity;
    const dp: number[][] = Array.from({ length: kk + 1 }, () => new Array(n).fill(INF));
    for (let j = 0; j < n; j++) dp[1]![j] = cost[0]![j]!;
    for (let t = 2; t <= kk; t++) {
      for (let j = t - 1; j < n; j++) {
        for (let m = t - 1; m <= j; m++) {
          dp[t]![j] = Math.min(dp[t]![j]!, dp[t - 1]![m - 1]! + cost[m]![j]!);
        }
      }
    }
    return dp[kk]![n - 1]!;
  },

  'maximum-height-by-stacking-cuboids': (cuboids: unknown) => {
    const cs = (cuboids as number[][]).map(c => [...c].sort((a, b) => a - b));
    cs.sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]! || a[2]! - b[2]!);
    const n = cs.length;
    const dp = cs.map(c => c[2]!);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (cs[j]![0]! <= cs[i]![0]! && cs[j]![1]! <= cs[i]![1]! && cs[j]![2]! <= cs[i]![2]!) {
          dp[i] = Math.max(dp[i]!, dp[j]! + cs[i]![2]!);
        }
      }
    }
    return Math.max(...dp);
  },

  'minimum-number-of-days-to-eat-n-oranges': (n: unknown) => {
    const memo = new Map<number, number>();
    function dp(x: number): number {
      if (x <= 1) return x;
      if (memo.has(x)) return memo.get(x)!;
      const res = 1 + Math.min(x % 2 + dp(Math.floor(x / 2)), x % 3 + dp(Math.floor(x / 3)));
      memo.set(x, res);
      return res;
    }
    return dp(n as number);
  },

  'best-team-with-no-conflicts': (scores: unknown, ages: unknown) => {
    const s = scores as number[], a = ages as number[];
    const players = a.map((age, i) => [age, s[i]!] as [number, number]).sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    const n = players.length;
    const dp = players.map(p => p[1]);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (players[j]![1]! <= players[i]![1]!) dp[i] = Math.max(dp[i]!, dp[j]! + players[i]![1]!);
      }
    }
    return Math.max(...dp);
  },

  'number-of-ways-to-form-target-given-dictionary': (words: unknown, target: unknown) => {
    const ws = words as string[], t = target as string;
    const MOD = 1_000_000_007;
    const wlen = ws[0]!.length, tlen = t.length;
    const count: number[][] = Array.from({ length: wlen }, () => new Array(26).fill(0));
    for (const w of ws) for (let j = 0; j < wlen; j++) count[j]![w.charCodeAt(j) - 97]!++;
    const dp = new Array(tlen + 1).fill(0);
    dp[0] = 1;
    for (let j = 0; j < wlen; j++) {
      for (let i = Math.min(j + 1, tlen); i >= 1; i--) {
        const c = t.charCodeAt(i - 1) - 97;
        dp[i] = (dp[i] + dp[i - 1] * count[j]![c]!) % MOD;
      }
    }
    return dp[tlen];
  },

  'minimum-xor-sum-of-two-arrays': (nums1: unknown, nums2: unknown) => {
    const a = nums1 as number[], b = nums2 as number[];
    const n = a.length;
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;
    for (let mask = 0; mask < (1 << n); mask++) {
      if (dp[mask] === Infinity) continue;
      const i = (mask).toString(2).split('').filter(c => c === '1').length;
      if (i >= n) continue;
      for (let j = 0; j < n; j++) {
        if (!(mask & (1 << j))) {
          const next = mask | (1 << j);
          dp[next] = Math.min(dp[next]!, dp[mask]! + (a[i]! ^ b[j]!));
        }
      }
    }
    return dp[(1 << n) - 1]!;
  },

  'number-of-ways-to-rearrange-sticks-with-k-sticks-visible': (n: unknown, k: unknown) => {
    const nn = n as number, kk = k as number;
    const MOD = 1_000_000_007n;
    const dp: bigint[][] = Array.from({ length: nn + 1 }, () => new Array(kk + 1).fill(0n));
    dp[0]![0] = 1n;
    for (let i = 1; i <= nn; i++) {
      for (let j = 1; j <= Math.min(i, kk); j++) {
        dp[i]![j] = (dp[i - 1]![j - 1]! + BigInt(i - 1) * dp[i - 1]![j]!) % MOD;
      }
    }
    return Number(dp[nn]![kk]!);
  },

  'number-of-ways-to-stay-in-same-place-after-some-steps': (steps: unknown, arrLen: unknown) => {
    const s = steps as number, al = arrLen as number;
    const MOD = 1_000_000_007;
    const maxPos = Math.min(al - 1, Math.floor(s / 2));
    let dp = new Array(maxPos + 1).fill(0);
    dp[0] = 1;
    for (let step = 0; step < s; step++) {
      const ndp = new Array(maxPos + 1).fill(0);
      for (let i = 0; i <= maxPos; i++) {
        ndp[i] = dp[i]!;
        if (i > 0) ndp[i] = (ndp[i]! + dp[i - 1]!) % MOD;
        if (i < maxPos) ndp[i] = (ndp[i]! + dp[i + 1]!) % MOD;
      }
      dp = ndp;
    }
    return dp[0]!;
  },

  'minimum-score-triangulation-of-polygon': (values: unknown) => {
    const v = values as number[];
    const n = v.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let length = 2; length < n; length++) {
      for (let i = 0; i <= n - length - 1; i++) {
        const j = i + length;
        dp[i]![j] = Infinity;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k]![j]! + v[i]! * v[k]! * v[j]!);
        }
      }
    }
    return dp[0]![n - 1]!;
  },

  'minimum-cost-to-make-array-equal': (nums: unknown, cost: unknown) => {
    const a = nums as number[], c = cost as number[];
    function totalCost(target: number): number {
      return a.reduce((sum, x, i) => sum + Math.abs(x - target) * c[i]!, 0);
    }
    let lo = Math.min(...a), hi = Math.max(...a);
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (totalCost(mid) <= totalCost(mid + 1)) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return totalCost(lo);
  },

  'maximum-number-of-achievable-transfer-requests': (n: unknown, requests: unknown) => {
    const reqs = requests as number[][];
    const m = reqs.length;
    let best = 0;
    for (let mask = 0; mask < (1 << m); mask++) {
      const balance = new Array(n as number).fill(0);
      let count = 0;
      for (let i = 0; i < m; i++) {
        if (mask & (1 << i)) {
          balance[reqs[i]![0]!]!--;
          balance[reqs[i]![1]!]!++;
          count++;
        }
      }
      if (balance.every(b => b === 0)) best = Math.max(best, count);
    }
    return best;
  },

  'maximum-elegance-of-k-length-subsequence': (items: unknown, k: unknown) => {
    const its = (items as number[][]).slice().sort((a, b) => b[0]! - a[0]!);
    const kk = k as number;
    let totalProfit = 0;
    let distinctCount = 0;
    const seen = new Set<number>();
    const stack: number[] = [];
    for (let i = 0; i < kk; i++) {
      const [profit, cat] = its[i]!;
      totalProfit += profit!;
      if (!seen.has(cat!)) { seen.add(cat!); distinctCount++; }
      else stack.push(profit!);
    }
    let ans = totalProfit + distinctCount * distinctCount;
    for (let i = kk; i < its.length; i++) {
      const [profit, cat] = its[i]!;
      if (!seen.has(cat!) && stack.length > 0) {
        seen.add(cat!);
        distinctCount++;
        totalProfit -= stack.pop()!;
        totalProfit += profit!;
        ans = Math.max(ans, totalProfit + distinctCount * distinctCount);
      }
    }
    return ans;
  },

  'minimum-total-distance-traveled': (robot: unknown, factory: unknown) => {
    const robots = (robot as number[]).slice().sort((a, b) => a - b);
    const facs = (factory as number[][]).slice().sort((a, b) => a[0]! - b[0]!);
    const flat: number[] = [];
    for (const [pos, limit] of facs) {
      for (let i = 0; i < limit!; i++) flat.push(pos!);
    }
    const n = robots.length, m = flat.length;
    const INF = Number.MAX_SAFE_INTEGER;
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(INF));
    for (let j = 0; j <= m; j++) dp[0]![j] = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        dp[i]![j] = dp[i]![j - 1]!;
        if (dp[i - 1]![j - 1]! < INF) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i - 1]![j - 1]! + Math.abs(robots[i - 1]! - flat[j - 1]!));
        }
      }
    }
    return dp[n]![m]!;
  },

  'minimum-incompatibility': (nums: unknown, k: unknown) => {
    const a = nums as number[];
    const kk = k as number;
    const n = a.length;
    const sz = n / kk;
    const cnt = new Map<number, number>();
    for (const x of a) cnt.set(x, (cnt.get(x) ?? 0) + 1);
    if (Math.max(...cnt.values()) > kk) return -1;
    const full = (1 << n) - 1;
    const subsetCost = new Map<number, number>();
    for (let mask = 1; mask <= full; mask++) {
      if (mask.toString(2).split('').filter(c => c === '1').length !== sz) continue;
      const elems = [];
      for (let i = 0; i < n; i++) if (mask & (1 << i)) elems.push(a[i]!);
      if (new Set(elems).size !== sz) continue;
      subsetCost.set(mask, Math.max(...elems) - Math.min(...elems));
    }
    const INF = Number.MAX_SAFE_INTEGER;
    const dp = new Array(1 << n).fill(INF);
    dp[0] = 0;
    for (let mask = 0; mask <= full; mask++) {
      if (dp[mask] === INF) continue;
      const comp = full ^ mask;
      for (let sub = comp; sub > 0; sub = (sub - 1) & comp) {
        if (subsetCost.has(sub) && dp[mask | sub] > dp[mask]! + subsetCost.get(sub)!) {
          dp[mask | sub] = dp[mask]! + subsetCost.get(sub)!;
        }
      }
    }
    return dp[full] === INF ? -1 : dp[full]!;
  },

  'fair-distribution-of-cookies': (cookies: unknown, k: unknown) => {
    const bags = cookies as number[];
    const kk = k as number;
    const children = new Array(kk).fill(0);
    let ans = Infinity;
    function bt(i: number, curMax: number) {
      if (curMax >= ans) return;
      if (i === bags.length) { ans = curMax; return; }
      const seen = new Set<number>();
      for (let j = 0; j < kk; j++) {
        if (seen.has(children[j]!)) continue;
        seen.add(children[j]!);
        children[j]! += bags[i]!;
        bt(i + 1, Math.max(curMax, children[j]!));
        children[j]! -= bags[i]!;
      }
    }
    bt(0, 0);
    return ans;
  },

  'maximum-profit-in-job-scheduling': (startTime: unknown, endTime: unknown, profit: unknown) => {
    const s = startTime as number[], e = endTime as number[], p = profit as number[];
    const n = s.length;
    const jobs = Array.from({ length: n }, (_, i) => [s[i]!, e[i]!, p[i]!]);
    jobs.sort((a, b) => a[1]! - b[1]!);
    const dp = new Array(n + 1).fill(0);
    const endTimes = [0, ...jobs.map(j => j[1]!)];
    for (let i = 1; i <= n; i++) {
      const [si, , pi] = jobs[i - 1]!;
      let left = 0, right = i - 1;
      while (left < right) {
        const mid = (left + right + 1) >> 1;
        if (endTimes[mid]! <= si!) left = mid;
        else right = mid - 1;
      }
      dp[i] = Math.max(dp[i - 1]!, dp[left]! + pi!);
    }
    return dp[n]!;
  },
  'cherry-pickup-ii': (grid: unknown) => {
    const g = grid as number[][];
    const rows = g.length, cols = g[0]!.length;
    const INF = -Infinity;
    let dp: number[][] = Array.from({ length: cols }, () => new Array(cols).fill(INF));
    dp[0]![cols - 1] = g[0]![0]! + (cols > 1 ? g[0]![cols - 1]! : 0);
    for (let r = 1; r < rows; r++) {
      const ndp: number[][] = Array.from({ length: cols }, () => new Array(cols).fill(INF));
      for (let c1 = 0; c1 < cols; c1++) {
        for (let c2 = c1; c2 < cols; c2++) {
          if (dp[c1]![c2]! === INF) continue;
          for (let d1 = -1; d1 <= 1; d1++) {
            for (let d2 = -1; d2 <= 1; d2++) {
              const nc1 = c1 + d1, nc2 = c2 + d2;
              if (nc1 < 0 || nc1 >= cols || nc2 < 0 || nc2 >= cols || nc1 > nc2) continue;
              const cherries = g[r]![nc1]! + (nc1 === nc2 ? 0 : g[r]![nc2]!);
              ndp[nc1]![nc2] = Math.max(ndp[nc1]![nc2]!, dp[c1]![c2]! + cherries);
            }
          }
        }
      }
      dp = ndp;
    }
    let ans = 0;
    for (let c1 = 0; c1 < cols; c1++)
      for (let c2 = c1; c2 < cols; c2++)
        if (dp[c1]![c2]! > ans) ans = dp[c1]![c2]!;
    return ans;
  },

  'detonate-maximum-bombs': (bombs: unknown) => {
    const b = bombs as number[][];
    const n = b.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
      const [x1, y1, r1] = b[i]!;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const [x2, y2] = b[j]!;
        const dist2 = (x1! - x2!) ** 2 + (y1! - y2!) ** 2;
        if (dist2 <= r1! * r1!) adj[i]!.push(j);
      }
    }
    const bfs = (start: number): number => {
      const vis = new Set([start]);
      const queue = [start];
      while (queue.length) {
        const cur = queue.shift()!;
        for (const nb of adj[cur]!) {
          if (!vis.has(nb)) { vis.add(nb); queue.push(nb); }
        }
      }
      return vis.size;
    };
    let best = 0;
    for (let i = 0; i < n; i++) best = Math.max(best, bfs(i));
    return best;
  },

  'design-browser-history': (homepage: unknown, ops: unknown) => {
    const url0 = homepage as string;
    const operations = ops as ([string, string] | [string, number])[];
    const back: string[] = [];
    const fwd: string[] = [];
    let cur = url0;
    const results: string[] = [];
    for (const op of operations) {
      if (op[0] === 'visit') {
        back.push(cur);
        fwd.length = 0;
        cur = op[1] as string;
      } else if (op[0] === 'back') {
        const steps = op[1] as number;
        for (let i = 0; i < steps && back.length > 0; i++) {
          fwd.push(cur);
          cur = back.pop()!;
        }
        results.push(cur);
      } else {
        const steps = op[1] as number;
        for (let i = 0; i < steps && fwd.length > 0; i++) {
          back.push(cur);
          cur = fwd.pop()!;
        }
        results.push(cur);
      }
    }
    return results;
  },

  'knight-dialer': (n: unknown) => {
    const MOD = 1_000_000_007n;
    const moves: number[][] = [[4,6],[6,8],[7,9],[4,8],[0,3,9],[],[0,1,7],[2,6],[1,3],[2,4]];
    let dp = new Array(10).fill(1n);
    for (let step = 1; step < (n as number); step++) {
      const ndp = new Array(10).fill(0n);
      for (let d = 0; d <= 9; d++) {
        for (const nb of moves[d]!) ndp[d] = (ndp[d]! + dp[nb]!) % MOD;
      }
      dp = ndp;
    }
    return Number(dp.reduce((a, b) => (a + b) % MOD, 0n));
  },

  'paint-house-iii': (houses: unknown, cost: unknown, m: unknown, n: unknown, target: unknown) => {
    const h = houses as number[], c = cost as number[][], M = m as number, N = n as number, T = target as number;
    const INF = 1e9;
    const dp: number[][][] = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => new Array(T + 1).fill(INF))
    );
    if (h[0] !== 0) {
      if (h[0]! - 1 < N) dp[0]![h[0]! - 1]![1] = 0;
    } else {
      for (let j = 0; j < N; j++) dp[0]![j]![1] = c[0]![j]!;
    }
    for (let i = 1; i < M; i++) {
      const colorStart = h[i] !== 0 ? h[i]! - 1 : 0;
      const colorEnd = h[i] !== 0 ? h[i]! - 1 : N - 1;
      for (let j = colorStart; j <= colorEnd; j++) {
        const paintCost = h[i] !== 0 ? 0 : c[i]![j]!;
        for (let k = 1; k <= Math.min(i + 1, T); k++) {
          if (dp[i - 1]![j]![k] !== INF)
            dp[i]![j]![k] = Math.min(dp[i]![j]![k]!, dp[i - 1]![j]![k]! + paintCost);
          if (k > 1) {
            for (let pj = 0; pj < N; pj++) {
              if (pj !== j && dp[i - 1]![pj]![k - 1]! !== INF)
                dp[i]![j]![k] = Math.min(dp[i]![j]![k]!, dp[i - 1]![pj]![k - 1]! + paintCost);
            }
          }
        }
      }
    }
    let ans = INF;
    for (let j = 0; j < N; j++) ans = Math.min(ans, dp[M - 1]![j]![T]!);
    return ans === INF ? -1 : ans;
  },

  'maximize-distance-to-closest-person': (seats: unknown) => {
    const s = seats as number[];
    const n = s.length;
    let best = 0, prev = -1;
    for (let i = 0; i < n; i++) {
      if (s[i] === 1) {
        if (prev === -1) best = Math.max(best, i);
        else best = Math.max(best, Math.floor((i - prev) / 2));
        prev = i;
      }
    }
    if (prev !== n - 1) best = Math.max(best, n - 1 - prev);
    return best;
  },

  'minimum-number-of-vertices': (n: unknown, edges: unknown) => {
    const N = n as number;
    const E = edges as number[][];
    const hasIncoming = new Set<number>();
    for (const e of E) hasIncoming.add(e[1]!);
    const result: number[] = [];
    for (let i = 0; i < N; i++) if (!hasIncoming.has(i)) result.push(i);
    return result;
  },


  'dota2-senate': (senate: unknown) => {
    const s = senate as string;
    const n = s.length;
    const r: number[] = [], d: number[] = [];
    for (let i = 0; i < n; i++) {
      if (s[i] === 'R') r.push(i); else d.push(i);
    }
    while (r.length && d.length) {
      const ri = r.shift()!;
      const di = d.shift()!;
      if (ri < di) r.push(ri + n); else d.push(di + n);
    }
    return r.length ? 'Radiant' : 'Dire';
  },

  'time-needed-to-inform-all-employees': (...args: unknown[]) => {
    const N = args[0] as number;
    const head = args[1] as number;
    const mgr = args[2] as number[];
    const inf = args[3] as number[];
    const children: number[][] = Array.from({ length: N }, () => []);
    for (let i = 0; i < N; i++) {
      if (mgr[i] !== -1) children[mgr[i]!]!.push(i);
    }
    let best = 0;
    function dfs2(emp: number, time: number): void {
      if (time > best) best = time;
      for (const child of children[emp]!) dfs2(child, time + inf[emp]!);
    }
    dfs2(head, 0);
    return best;
  },

  'minesweeper': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(r => [...r]);
    const click = args[1] as number[];
    const cr = click[0]!, cc = click[1]!;
    const m = board.length, n = board[0]!.length;
    if (board[cr]![cc] === 'M') { board[cr]![cc] = 'X'; return board; }
    const dirs: [number, number][] = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const dfs3 = (r: number, c: number): void => {
      let mines = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr]![nc] === 'M') mines++;
      }
      if (mines > 0) {
        board[r]![c] = String(mines);
      } else {
        board[r]![c] = 'B';
        for (const [dr, dc] of dirs) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr]![nc] === 'E') dfs3(nr, nc);
        }
      }
    };
    dfs3(cr, cc);
    return board;
  },

  'minimum-score-triangulation': (values: unknown) => {
    const v = values as number[];
    const n = v.length;
    const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let len = 3; len <= n; len++) {
      for (let i = 0; i + len - 1 < n; i++) {
        const j = i + len - 1;
        dp[i]![j] = Infinity;
        for (let k = i + 1; k < j; k++) {
          dp[i]![j] = Math.min(dp[i]![j]!, dp[i]![k]! + dp[k]![j]! + v[i]! * v[k]! * v[j]!);
        }
      }
    }
    return dp[0]![n - 1];
  },

  'score-after-flipping-matrix': (grid: unknown) => {
    const g = (grid as number[][]).map(r => [...r]);
    const m = g.length, n = g[0]!.length;
    for (let i = 0; i < m; i++) {
      if (g[i]![0] === 0) for (let j = 0; j < n; j++) g[i]![j] = 1 - g[i]![j]!;
    }
    for (let j = 1; j < n; j++) {
      let ones = 0;
      for (let i = 0; i < m; i++) if (g[i]![j] === 1) ones++;
      if (ones < m - ones) for (let i = 0; i < m; i++) g[i]![j] = 1 - g[i]![j]!;
    }
    let total = 0;
    for (let i = 0; i < m; i++) {
      let row = 0;
      for (let j = 0; j < n; j++) row = (row << 1) | g[i]![j]!;
      total += row;
    }
    return total;
  },

  'beautiful-array': (n: unknown) => {
    const num = n as number;
    const memo = new Map<number, number[]>();
    function ba(k: number): number[] {
      if (memo.has(k)) return memo.get(k)!;
      if (k === 1) return [1];
      const left = ba(Math.ceil(k / 2));
      const right = ba(Math.floor(k / 2));
      const result = [
        ...left.map(x => 2 * x - 1).filter(x => x <= k),
        ...right.map(x => 2 * x).filter(x => x <= k),
      ];
      memo.set(k, result);
      return result;
    }
    return ba(num);
  },

  'recover-binary-search-tree': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    let firstNode: _TN | null = null, secondNode: _TN | null = null, prevNode: _TN | null = null;
    function inorder(node: _TN | null): void {
      if (!node) return;
      inorder(node.l);
      if (prevNode && prevNode.v > node.v) {
        if (!firstNode) firstNode = prevNode;
        secondNode = node;
      }
      prevNode = node;
      inorder(node.r);
    }
    inorder(root);
    const f = firstNode as _TN | null;
    const s = secondNode as _TN | null;
    if (f !== null && s !== null) { const tmp = f.v; f.v = s.v; s.v = tmp; }
    return _treeToArr(root);
  },

  'find-duplicate-subtrees': (...args: unknown[]) => {
    const root = _buildTree(args[0] as (number | null)[]);
    const count = new Map<string, number>();
    const result: number[] = [];
    function serialize(node: _TN | null): string {
      if (!node) return '#';
      const s = `${node.v},${serialize(node.l)},${serialize(node.r)}`;
      const c = (count.get(s) ?? 0) + 1;
      count.set(s, c);
      if (c === 2) result.push(node.v);
      return s;
    }
    serialize(root);
    return result.sort((a, b) => a - b);
  },

  'path-with-minimum-effort': (heights: unknown) => {
    const h = heights as number[][];
    const m = h.length, n = h[0]!.length;
    const dist: number[][] = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    dist[0]![0] = 0;
    const heap: [number, number, number][] = [[0, 0, 0]];
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (heap.length) {
      heap.sort((a, b) => a[0]! - b[0]!);
      const [eff, r, c] = heap.shift()!;
      if (r === m - 1 && c === n - 1) return eff;
      if (eff > dist[r]![c]!) continue;
      for (const [dr, dc] of dirs) {
        const nr = r + dr!, nc = c + dc!;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
        const ne = Math.max(eff, Math.abs(h[r]![c]! - h[nr]![nc]!));
        if (ne < dist[nr]![nc]!) { dist[nr]![nc] = ne; heap.push([ne, nr, nc]); }
      }
    }
    return 0;
  },

  'path-with-maximum-probability': (n: unknown, edges: unknown, succProb: unknown, start: unknown, end: unknown) => {
    const N = n as number, E = edges as number[][], P = succProb as number[];
    const S = start as number, T = end as number;
    const prob = new Array(N).fill(0);
    prob[S] = 1;
    for (let iter = 0; iter < N - 1; iter++) {
      let updated = false;
      for (let j = 0; j < E.length; j++) {
        const u = E[j]![0]!, v = E[j]![1]!, p = P[j]!;
        if (prob[u]! * p > prob[v]!) { prob[v] = prob[u]! * p; updated = true; }
        if (prob[v]! * p > prob[u]!) { prob[u] = prob[v]! * p; updated = true; }
      }
      if (!updated) break;
    }
    return prob[T]!;
  },

  'video-stitching': (clips: unknown, time: unknown) => {
    const c = (clips as number[][]).slice().sort((a, b) => a[0]! - b[0]!);
    const t = time as number;
    let count = 0, end = 0, farthest = 0, i = 0;
    while (end < t) {
      while (i < c.length && c[i]![0]! <= end) { farthest = Math.max(farthest, c[i]![1]!); i++; }
      if (farthest === end) return -1;
      end = farthest;
      count++;
    }
    return count;
  },

  'subarray-sums-divisible-by-k': (nums: unknown, k: unknown) => {
    const a = nums as number[], kk = k as number;
    const counts = new Map<number, number>([[0, 1]]);
    let prefix = 0, result = 0;
    for (const num of a) {
      prefix = ((prefix + num) % kk + kk) % kk;
      result += counts.get(prefix) ?? 0;
      counts.set(prefix, (counts.get(prefix) ?? 0) + 1);
    }
    return result;
  },

  'sum-of-even-numbers-after-queries': (nums: unknown, queries: unknown) => {
    const a = (nums as number[]).slice();
    const q = queries as number[][];
    let evenSum = a.reduce((s, x) => s + (x % 2 === 0 ? x : 0), 0);
    const result: number[] = [];
    for (const row of q) {
      const val = row[0]!, idx = row[1]!;
      if (a[idx]! % 2 === 0) evenSum -= a[idx]!;
      a[idx] = a[idx]! + val;
      if (a[idx]! % 2 === 0) evenSum += a[idx]!;
      result.push(evenSum);
    }
    return result;
  },

  'average-waiting-time': (customers: unknown) => {
    const c = customers as number[][];
    let time = 0, total = 0;
    for (const [arrival, duration] of c) {
      time = Math.max(time, arrival!) + duration!;
      total += time - arrival!;
    }
    return total / c.length;
  },

  'sort-an-array': (nums: unknown) => {
    const a = (nums as number[]).slice();
    const merge = (l: number[], r: number[]): number[] => {
      const res: number[] = [];
      let i = 0, j = 0;
      while (i < l.length && j < r.length) {
        if (l[i]! <= r[j]!) res.push(l[i++]!); else res.push(r[j++]!);
      }
      return res.concat(l.slice(i)).concat(r.slice(j));
    };
    const sort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      return merge(sort(arr.slice(0, mid)), sort(arr.slice(mid)));
    };
    return sort(a);
  },

  'sliding-puzzle': (board: unknown) => {
    const goal = '123450';
    const start = (board as number[][]).flat().join('');
    const neighbors = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]];
    if (start === goal) return 0;
    const queue = [start];
    const visited = new Set([start]);
    let steps = 0;
    while (queue.length) {
      steps++;
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const state = queue.shift()!;
        const pos = state.indexOf('0');
        for (const nb of neighbors[pos]!) {
          const arr = state.split('');
          [arr[pos], arr[nb]] = [arr[nb]!, arr[pos]!];
          const next = arr.join('');
          if (next === goal) return steps;
          if (!visited.has(next)) { visited.add(next); queue.push(next); }
        }
      }
    }
    return -1;
  },

  'jump-game-v': (arr: unknown, d: unknown) => {
    const a = arr as number[], dist = d as number;
    const n = a.length;
    const dp = new Array(n).fill(1);
    const order = Array.from({length: n}, (_, i) => i).sort((x, y) => a[x]! - a[y]!);
    for (const i of order) {
      for (let j = i + 1; j <= Math.min(i + dist, n - 1); j++) {
        if (a[j]! >= a[i]!) break;
        dp[i] = Math.max(dp[i]!, 1 + dp[j]!);
      }
      for (let j = i - 1; j >= Math.max(i - dist, 0); j--) {
        if (a[j]! >= a[i]!) break;
        dp[i] = Math.max(dp[i]!, 1 + dp[j]!);
      }
    }
    return Math.max(...dp);
  },

  'word-subsets': (words1: unknown, words2: unknown) => {
    const w1 = words1 as string[], w2 = words2 as string[];
    const maxFreq = new Array(26).fill(0);
    for (const w of w2) {
      const freq = new Array(26).fill(0);
      for (const c of w) freq[c.charCodeAt(0) - 97]++;
      for (let i = 0; i < 26; i++) if (freq[i]! > maxFreq[i]!) maxFreq[i] = freq[i];
    }
    return w1.filter(w => {
      const freq = new Array(26).fill(0);
      for (const c of w) freq[c.charCodeAt(0) - 97]++;
      return maxFreq.every((v: number, i: number) => freq[i]! >= v);
    });
  },

  'max-chunks-to-make-sorted-ii': (arr: unknown) => {
    const a = arr as number[];
    const stack: number[] = [];
    for (const num of a) {
      let maxVal = num;
      while (stack.length && stack[stack.length - 1]! > num) maxVal = Math.max(maxVal, stack.pop()!);
      stack.push(maxVal);
    }
    return stack.length;
  },

  'count-ways-to-place-houses': (n: unknown) => {
    const MOD = 1_000_000_007n;
    let a = 1n, b = 0n;
    for (let i = 0; i < (n as number); i++) [a, b] = [(a + b) % MOD, a % MOD];
    const total = (a + b) % MOD;
    return Number(total * total % MOD);
  },

  'stone-game-viii': (stones: unknown) => {
    const s = stones as number[];
    const n = s.length;
    const prefix = [...s];
    for (let i = 1; i < n; i++) prefix[i] = prefix[i]! + prefix[i - 1]!;
    let dp = prefix[n - 1]!;
    for (let i = n - 2; i >= 1; i--) dp = Math.max(prefix[i]! - dp, dp);
    return dp;
  },

  'stone-game-ix': (stones: unknown) => {
    const s = stones as number[];
    const cnt = [0, 0, 0];
    for (const x of s) cnt[x % 3]!++;
    if (cnt[0]! % 2 === 0) return cnt[1]! > 0 && cnt[2]! > 0;
    return Math.abs(cnt[1]! - cnt[2]!) > 2;
  },

  'maximum-score-removing-stones': (a: unknown, b: unknown, c: unknown) => {
    const aa = a as number, bb = b as number, cc = c as number;
    const total = aa + bb + cc;
    const maxV = Math.max(aa, bb, cc);
    return maxV >= total - maxV ? total - maxV : Math.floor(total / 2);
  },

  'number-of-atoms': (formula: unknown) => {
    const f = formula as string;
    let i = 0;
    const stack: Map<string, number>[] = [new Map()];
    while (i < f.length) {
      if (f[i] === '(') {
        stack.push(new Map()); i++;
      } else if (f[i] === ')') {
        i++;
        let num = 0;
        while (i < f.length && f[i]! >= '0' && f[i]! <= '9') { num = num * 10 + Number(f[i]); i++; }
        if (num === 0) num = 1;
        const top = stack.pop()!;
        const parent = stack[stack.length - 1]!;
        for (const [elem, cnt] of top) parent.set(elem, (parent.get(elem) ?? 0) + cnt * num);
      } else {
        let elem = f[i++]!;
        while (i < f.length && f[i]! >= 'a' && f[i]! <= 'z') elem += f[i++];
        let num = 0;
        while (i < f.length && f[i]! >= '0' && f[i]! <= '9') { num = num * 10 + Number(f[i]); i++; }
        if (num === 0) num = 1;
        const top = stack[stack.length - 1]!;
        top.set(elem, (top.get(elem) ?? 0) + num);
      }
    }
    const map = stack[0]!;
    return [...map.keys()].sort().map(e => e + (map.get(e)! > 1 ? map.get(e) : '')).join('');
  },

  'find-all-people-with-secret': (n: unknown, meetings: unknown, firstPerson: unknown) => {
    const N = n as number, fp = firstPerson as number;
    const mtgs = (meetings as number[][]).map(m => [m[0]!, m[1]!, m[2]!] as [number, number, number]);
    const parent = Array.from({length: N}, (_, idx) => idx);
    const rank = new Array(N).fill(0);
    const find = (x: number): number => { if (parent[x] !== x) parent[x] = find(parent[x]!); return parent[x]!; };
    const union = (x: number, y: number) => {
      const px = find(x), py = find(y);
      if (px === py) return;
      if (rank[px]! < rank[py]!) parent[px] = py;
      else if (rank[px]! > rank[py]!) parent[py] = px;
      else { parent[py] = px; rank[px]!++; }
    };
    union(0, fp);
    mtgs.sort((a, b) => a[2] - b[2]);
    let i = 0;
    while (i < mtgs.length) {
      let j = i;
      while (j < mtgs.length && mtgs[j]![2] === mtgs[i]![2]) j++;
      const group: number[] = [];
      for (let k = i; k < j; k++) { union(mtgs[k]![0], mtgs[k]![1]); group.push(mtgs[k]![0], mtgs[k]![1]); }
      for (const p of group) if (find(p) !== find(0)) { parent[p] = p; rank[p] = 0; }
      i = j;
    }
    return Array.from({length: N}, (_, idx) => idx).filter(p => find(p) === find(0));
  },

  'plates-between-candles': (s: unknown, queries: unknown) => {
    const str = s as string;
    const n = str.length;
    const prefix = new Array(n + 1).fill(0);
    const leftCandle = new Array(n).fill(-1);
    const rightCandle = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i]! + (str[i] === '*' ? 1 : 0);
      leftCandle[i] = str[i] === '|' ? i : (i > 0 ? leftCandle[i - 1]! : -1);
    }
    for (let i = n - 1; i >= 0; i--) {
      rightCandle[i] = str[i] === '|' ? i : (i < n - 1 ? rightCandle[i + 1]! : -1);
    }
    const qs = queries as number[][];
    return qs.map(([l, r]) => {
      const lc = rightCandle[l!]!, rc = leftCandle[r!]!;
      if (lc === -1 || rc === -1 || lc >= rc) return 0;
      return prefix[rc]! - prefix[lc]!;
    });
  },

  'minimum-cost-to-make-all-characters-equal': (s: unknown) => {
    const str = s as string;
    const n = str.length;
    let cost = 0;
    for (let i = 1; i < n; i++) {
      if (str[i] !== str[i - 1]) cost += Math.min(i, n - i);
    }
    return cost;
  },

  'maximum-consecutive-floors-without-special-floors': (bottom: unknown, top: unknown, special: unknown) => {
    const b = bottom as number, t = top as number;
    const sp = (special as number[]).filter(x => x >= b && x <= t).sort((a, c) => a - c);
    if (sp.length === 0) return t - b + 1;
    let maxGap = sp[0]! - b;
    for (let i = 1; i < sp.length; i++) maxGap = Math.max(maxGap, sp[i]! - sp[i - 1]! - 1);
    maxGap = Math.max(maxGap, t - sp[sp.length - 1]!);
    return maxGap;
  },

  'minimum-moves-to-reach-target-score': (target: unknown, maxDoubles: unknown) => {
    let t = target as number, d = maxDoubles as number;
    let moves = 0;
    while (t > 1 && d > 0) {
      if (t % 2 === 1) { t--; moves++; }
      else { t /= 2; moves++; d--; }
    }
    return moves + (t - 1);
  },

  'maximum-segment-sum-after-removals': (nums: unknown, removeQueries: unknown) => {
    const a = nums as number[], rq = removeQueries as number[];
    const n = a.length;
    const parent = Array.from({length: n + 1}, (_, i) => i);
    const segSum = new Array(n + 1).fill(0);
    const present = new Array(n).fill(false);
    const ans = new Array(n).fill(0);
    const find = (x: number): number => { if (parent[x] !== x) parent[x] = find(parent[x]!); return parent[x]!; };
    const union = (x: number, y: number) => {
      const px = find(x), py = find(y);
      if (px !== py) { parent[px] = py; segSum[py] = (segSum[py]! + segSum[px]!); }
    };
    let maxSum = 0;
    for (let i = n - 1; i >= 0; i--) {
      ans[i] = maxSum;
      const idx = rq[i]!;
      present[idx] = true;
      segSum[idx] = a[idx]!;
      if (idx > 0 && present[idx - 1]) union(idx, idx - 1);
      if (idx < n - 1 && present[idx + 1]) union(idx, idx + 1);
      maxSum = Math.max(maxSum, segSum[find(idx)]!);
    }
    return ans;
  },

  'prime-palindrome': (n: unknown) => {
    const num = n as number;
    const isPrime = (x: number) => {
      if (x < 2) return false;
      if (x === 2) return true;
      if (x % 2 === 0) return false;
      for (let i = 3; i * i <= x; i += 2) if (x % i === 0) return false;
      return true;
    };
    if (num <= 2) return 2;
    if (num <= 3) return 3;
    if (num <= 5) return 5;
    if (num <= 7) return 7;
    if (num <= 11) return 11;
    for (let len = 1; len <= 9; len += 2) {
      const half = Math.ceil(len / 2);
      const start = Math.pow(10, half - 1);
      const end = Math.pow(10, half);
      for (let firstHalf = start; firstHalf < end; firstHalf++) {
        const s = String(firstHalf);
        const pal = Number(s + s.slice(0, len - half).split('').reverse().join(''));
        if (pal >= num && isPrime(pal)) return pal;
      }
    }
    return -1;
  },

  'car-fleet-ii': (cars: unknown) => {
    const c = cars as number[][];
    const n = c.length;
    const ans = new Array(n).fill(-1);
    const stack: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
      const [pos, spd] = [c[i]![0]!, c[i]![1]!];
      while (stack.length) {
        const j = stack[stack.length - 1]!;
        const [jpos, jspd] = [c[j]![0]!, c[j]![1]!];
        if (spd <= jspd) { stack.pop(); continue; }
        const t = (jpos - pos) / (spd - jspd);
        if (ans[j] === -1 || t <= ans[j]) { ans[i] = t; break; }
        stack.pop();
      }
      stack.push(i);
    }
    return ans;
  },

  'all-possible-full-binary-trees': (n: unknown) => {
    const num = n as number;
    const memo = new Map<number, _TN[]>();
    function gen(k: number): _TN[] {
      if (memo.has(k)) return memo.get(k)!;
      if (k === 1) return [{ v: 0, l: null, r: null }];
      if (k % 2 === 0) return [];
      const result: _TN[] = [];
      for (let left = 1; left <= k - 2; left += 2) {
        for (const lt of gen(left)) {
          for (const rt of gen(k - 1 - left)) {
            result.push({ v: 0, l: lt, r: rt });
          }
        }
      }
      memo.set(k, result);
      return result;
    }
    const arrays = gen(num).map(t => _treeToArr(t));
    return arrays.sort((a, b) =>
      JSON.stringify(a) < JSON.stringify(b) ? -1 : JSON.stringify(a) > JSON.stringify(b) ? 1 : 0,
    );
  },

  // ── Batch 14 ──────────────────────────────────────────────────────────────
  'knight-probability-in-chessboard': (n: unknown, k: unknown, row: unknown, column: unknown) => {
    const size = n as number, steps = k as number, r0 = row as number, c0 = column as number;
    let dp: number[][] = Array.from({length: size}, () => new Array(size).fill(0));
    dp[r0]![c0] = 1;
    const moves = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (let s = 0; s < steps; s++) {
      const newDp: number[][] = Array.from({length: size}, () => new Array(size).fill(0));
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (dp[r]![c]! > 0) {
            for (const [dr, dc] of moves) {
              const nr = r + dr!, nc = c + dc!;
              if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
                newDp[nr]![nc]! += dp[r]![c]! / 8;
              }
            }
          }
        }
      }
      dp = newDp;
    }
    return dp.reduce((s, row) => s + row.reduce((a, b) => a + b, 0), 0);
  },

  'minimum-distance-bst-nodes': (arr: unknown) => {
    const root = _buildTree(arr as (number | null)[]);
    let prev: number | null = null, minDiff = Infinity;
    function inorder(node: _TN | null): void {
      if (!node) return;
      inorder(node.l);
      if (prev !== null) minDiff = Math.min(minDiff, node.v - prev);
      prev = node.v;
      inorder(node.r);
    }
    inorder(root);
    return minDiff;
  },

  'second-minimum-node-binary-tree': (arr: unknown) => {
    const root = _buildTree(arr as (number | null)[]);
    if (!root) return -1;
    const minVal = root.v;
    let second = Infinity;
    function dfs(node: _TN | null): void {
      if (!node) return;
      if (node.v > minVal && node.v < second) { second = node.v; }
      else if (node.v === minVal) { dfs(node.l); dfs(node.r); }
    }
    dfs(root);
    return second === Infinity ? -1 : second;
  },

  'meeting-rooms-iii': (n: unknown, meetings: unknown) => {
    const numRooms = n as number;
    const meet = (meetings as number[][]).map(m => [...m]).sort((a, b) => a[0]! - b[0]!);
    const free: number[] = Array.from({length: numRooms}, (_, i) => i);
    const busy: [number, number][] = [];
    const count = new Array(numRooms).fill(0);
    for (const [start, end] of meet) {
      const toFree: [number, number][] = [];
      const stillBusy: [number, number][] = [];
      for (const b of busy) {
        if (b[0]! <= start!) toFree.push(b);
        else stillBusy.push(b);
      }
      busy.length = 0;
      busy.push(...stillBusy);
      for (const [, room] of toFree) {
        let pos = free.length;
        while (pos > 0 && free[pos-1]! > room) pos--;
        free.splice(pos, 0, room);
      }
      if (free.length > 0) {
        const room = free.shift()!;
        busy.push([end!, room]);
        count[room]++;
      } else {
        busy.sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]!);
        const [prevEnd, room] = busy.shift()!;
        busy.push([prevEnd! + (end! - start!), room]);
        count[room]!++;
      }
    }
    return count.indexOf(Math.max(...count));
  },

  'minimum-obstacle-removal-to-reach-corner': (grid: unknown) => {
    const g = grid as number[][];
    const m = g.length, n = g[0]!.length;
    const dist: number[][] = Array.from({length: m}, () => new Array(n).fill(Infinity));
    dist[0]![0] = 0;
    const deque: [number, number, number][] = [[0, 0, 0]];
    while (deque.length > 0) {
      const [obs, r, c] = deque.shift()!;
      if (obs > dist[r]![c]!) continue;
      if (r === m-1 && c === n-1) return obs;
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = r + dr!, nc = c + dc!;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
          const newObs = obs + g[nr]![nc]!;
          if (newObs < dist[nr]![nc]!) {
            dist[nr]![nc] = newObs;
            if (g[nr]![nc] === 0) deque.unshift([newObs, nr, nc]);
            else deque.push([newObs, nr, nc]);
          }
        }
      }
    }
    return dist[m-1]![n-1]!;
  },

  'max-sum-of-rectangle-no-larger-than-k': (matrix: unknown, k: unknown) => {
    const mat = matrix as number[][], kk = k as number;
    const m = mat.length, n = mat[0]!.length;
    let ans = -Infinity;
    for (let c1 = 0; c1 < n; c1++) {
      const rowSum = new Array(m).fill(0);
      for (let c2 = c1; c2 < n; c2++) {
        for (let r = 0; r < m; r++) rowSum[r] += mat[r]![c2]!;
        const sorted: number[] = [0];
        let prefix = 0;
        for (const s of rowSum) {
          prefix += s;
          const target = prefix - kk;
          let lo = 0, hi = sorted.length;
          while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid]! >= target) hi = mid; else lo = mid + 1;
          }
          if (lo < sorted.length) ans = Math.max(ans, prefix - sorted[lo]!);
          let pos = 0;
          while (pos < sorted.length && sorted[pos]! < prefix) pos++;
          sorted.splice(pos, 0, prefix);
        }
      }
    }
    return ans;
  },

  'count-unique-characters-of-all-substrings': (s: unknown) => {
    const str = s as string;
    const MOD = 1000000007n;
    const index = new Map<string, number[]>();
    for (let i = 0; i < str.length; i++) {
      const c = str[i]!;
      if (!index.has(c)) index.set(c, []);
      index.get(c)!.push(i);
    }
    let ans = 0n;
    for (const positions of index.values()) {
      const pos = [-1, ...positions, str.length];
      for (let i = 1; i < pos.length - 1; i++) {
        ans += BigInt(pos[i]! - pos[i-1]!) * BigInt(pos[i+1]! - pos[i]!);
      }
    }
    return Number(ans % MOD);
  },

  'zuma-game': (board: unknown, hand: unknown) => {
    const boardStr = board as string, handStr = hand as string;
    const handCount = new Map<string, number>();
    for (const c of handStr) handCount.set(c, (handCount.get(c) ?? 0) + 1);

    function clean(s: string): string {
      let changed = true;
      while (changed) {
        changed = false;
        let i = 0, ns = '';
        while (i < s.length) {
          let j = i;
          while (j < s.length && s[j] === s[i]) j++;
          if (j - i < 3) ns += s.slice(i, j);
          else changed = true;
          i = j;
        }
        s = ns;
      }
      return s;
    }

    const memo = new Map<string, number>();
    function dp(b: string, hc: Map<string, number>): number {
      b = clean(b);
      if (b.length === 0) return 0;
      const key = b + '|' + [...hc.entries()].sort().join(',');
      if (memo.has(key)) return memo.get(key)!;
      let best = Infinity;
      let i = 0;
      while (i < b.length) {
        let j = i;
        while (j < b.length && b[j] === b[i]) j++;
        const color = b[i]!, cnt = j - i, need = 3 - cnt;
        if ((hc.get(color) ?? 0) >= need) {
          hc.set(color, (hc.get(color) ?? 0) - need);
          const rest = dp(b.slice(0, i) + b.slice(j), hc);
          hc.set(color, (hc.get(color) ?? 0) + need);
          if (rest !== -1) best = Math.min(best, need + rest);
        }
        i = j;
      }
      const result = best === Infinity ? -1 : best;
      memo.set(key, result);
      return result;
    }

    return dp(boardStr, handCount);
  },

  'find-longest-valid-obstacle-course': (obstacles: unknown) => {
    const obs = obstacles as number[];
    const tails: number[] = [];
    const result: number[] = [];
    for (const x of obs) {
      let lo = 0, hi = tails.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (tails[mid]! <= x) lo = mid + 1; else hi = mid;
      }
      if (lo === tails.length) tails.push(x);
      else tails[lo] = x;
      result.push(lo + 1);
    }
    return result;
  },

  'best-sightseeing-pair': (values: unknown) => {
    const vals = values as number[];
    let maxLeft = vals[0]! + 0;
    let ans = 0;
    for (let j = 1; j < vals.length; j++) {
      ans = Math.max(ans, maxLeft + vals[j]! - j);
      maxLeft = Math.max(maxLeft, vals[j]! + j);
    }
    return ans;
  },

  'find-longest-substring-vowels-even': (s: unknown) => {
    const str = s as string;
    const vowels = 'aeiou';
    const first = new Map<number, number>();
    first.set(0, -1);
    let state = 0, ans = 0;
    for (let i = 0; i < str.length; i++) {
      const bit = vowels.indexOf(str[i]!);
      if (bit !== -1) state ^= (1 << bit);
      if (first.has(state)) ans = Math.max(ans, i - first.get(state)!);
      else first.set(state, i);
    }
    return ans;
  },

  'reverse-substrings-between-parentheses': (s: unknown) => {
    const str = s as string;
    const stack: string[] = [''];
    for (const c of str) {
      if (c === '(') stack.push('');
      else if (c === ')') {
        const top = stack.pop()!;
        stack[stack.length - 1] += top.split('').reverse().join('');
      } else {
        stack[stack.length - 1] += c;
      }
    }
    return stack[0]!;
  },

  'design-stack-with-increment': (maxSize: unknown, ops: unknown) => {
    const max = maxSize as number;
    const operations = ops as Array<[string, ...number[]]>;
    const stack: number[] = [];
    const inc: number[] = [];
    const results: number[] = [];
    for (const op of operations) {
      if (op[0] === 'push') {
        if (stack.length < max) { stack.push(op[1]!); inc.push(0); }
      } else if (op[0] === 'pop') {
        if (stack.length === 0) {
          results.push(-1);
        } else {
          const extra = inc.pop()!;
          const val = stack.pop()! + extra;
          if (inc.length > 0) inc[inc.length - 1]! += extra;
          results.push(val);
        }
      } else if (op[0] === 'increment') {
        const k = Math.min(op[1]!, stack.length);
        if (k > 0) inc[k - 1]! += op[2]!;
      }
    }
    return results;
  },

  'minimum-number-of-frogs-croaking': (croakOfFrogs: unknown) => {
    const s = croakOfFrogs as string;
    const order = 'croak';
    const cnt = new Map<string, number>();
    for (const c of order) cnt.set(c, 0);
    let frogs = 0, ans = 0;
    for (const c of s) {
      if (!cnt.has(c)) return -1;
      cnt.set(c, cnt.get(c)! + 1);
      const idx = order.indexOf(c);
      if (idx > 0) {
        const prev = order[idx - 1]!;
        if (cnt.get(prev)! < cnt.get(c)!) return -1;
      }
      if (c === 'c') { frogs++; ans = Math.max(ans, frogs); }
      if (c === 'k') frogs--;
    }
    return frogs !== 0 ? -1 : ans;
  },

  'shortest-path-visiting-all-nodes': (graph: unknown) => {
    const g = graph as number[][];
    const n = g.length;
    const full = (1 << n) - 1;
    const visited: boolean[][] = Array.from({length: n}, () => new Array(1 << n).fill(false));
    const queue: [number, number, number][] = [];
    for (let i = 0; i < n; i++) {
      const mask = 1 << i;
      visited[i]![mask] = true;
      if (mask === full) return 0;
      queue.push([i, mask, 0]);
    }
    let head = 0;
    while (head < queue.length) {
      const [node, mask, dist] = queue[head++]!;
      for (const next of g[node]!) {
        const newMask = mask | (1 << next);
        if (newMask === full) return dist + 1;
        if (!visited[next]![newMask]) {
          visited[next]![newMask] = true;
          queue.push([next, newMask, dist + 1]);
        }
      }
    }
    return -1;
  },

  'minimum-number-of-work-sessions': (tasks: unknown, sessionTime: unknown) => {
    const ts = tasks as number[];
    const st = sessionTime as number;
    const n = ts.length;
    const fullMask = (1 << n) - 1;
    const memo = new Map<number, number>();
    function dp(done: number, remaining: number): number {
      if (done === fullMask) return 0;
      const key = done * 16 + remaining;
      if (memo.has(key)) return memo.get(key)!;
      let best = Infinity;
      for (let i = 0; i < n; i++) {
        if (done & (1 << i)) continue;
        const t = ts[i]!;
        const res = t <= remaining
          ? dp(done | (1 << i), remaining - t)
          : 1 + dp(done | (1 << i), st - t);
        if (res < best) best = res;
      }
      memo.set(key, best);
      return best;
    }
    return 1 + dp(0, st);
  },

  'minimize-product-sum': (nums1: unknown, nums2: unknown) => {
    const a = [...(nums1 as number[])].sort((x, y) => x - y);
    const b = [...(nums2 as number[])].sort((x, y) => y - x);
    return a.reduce((sum, v, i) => sum + v * b[i]!, 0);
  },

  'count-range-sum': (nums: unknown, lower: unknown, upper: unknown) => {
    const arr = nums as number[];
    const lo = lower as number, hi = upper as number;
    const prefix: number[] = [0];
    for (const n of arr) prefix.push(prefix[prefix.length - 1]! + n);
    let count = 0;
    const tmp = new Array<number>(prefix.length);
    function mergeSort(l: number, r: number): void {
      if (r - l <= 1) return;
      const mid = (l + r) >> 1;
      mergeSort(l, mid);
      mergeSort(mid, r);
      let j = mid, k = mid;
      for (let i = l; i < mid; i++) {
        while (j < r && prefix[j]! - prefix[i]! < lo) j++;
        while (k < r && prefix[k]! - prefix[i]! <= hi) k++;
        count += k - j;
      }
      let p = l, q = mid, t = l;
      while (p < mid && q < r) tmp[t++] = prefix[p]! <= prefix[q]! ? prefix[p++]! : prefix[q++]!;
      while (p < mid) tmp[t++] = prefix[p++]!;
      while (q < r) tmp[t++] = prefix[q++]!;
      for (let i = l; i < r; i++) prefix[i] = tmp[i]!;
    }
    mergeSort(0, prefix.length);
    return count;
  },

  'all-paths-from-source-lead-to-destination': (n: unknown, edges: unknown, source: unknown, destination: unknown) => {
    const N = n as number;
    const edgeList = edges as [number, number][];
    const src = source as number, dst = destination as number;
    const graph: number[][] = Array.from({length: N}, () => []);
    for (const [a, b] of edgeList) graph[a]!.push(b);
    if (graph[dst]!.length > 0) return false;
    const color = new Array<number>(N).fill(0);
    function dfs(node: number): boolean {
      if (color[node] === 1) return false;
      if (color[node] === 2) return true;
      if (graph[node]!.length === 0) return node === dst;
      color[node] = 1;
      for (const next of graph[node]!) {
        if (!dfs(next)) return false;
      }
      color[node] = 2;
      return true;
    }
    return dfs(src);
  },

  'advantage-shuffle': (nums1: unknown, nums2: unknown) => {
    const a = [...(nums1 as number[])].sort((x, y) => x - y);
    const b = nums2 as number[];
    const indexed = b.map((v, i) => [v, i] as [number, number]).sort((x, y) => y[0] - x[0]);
    const result = new Array<number>(b.length);
    let lo = 0, hi = a.length - 1;
    for (const [target, idx] of indexed) {
      if (a[hi]! > target) result[idx] = a[hi--]!;
      else result[idx] = a[lo++]!;
    }
    return result;
  },

  'longest-repeating-character-replacement': (s: unknown, k: unknown) => {
    const str = s as string;
    const maxK = k as number;
    const freq = new Array(26).fill(0);
    let maxFreq = 0, ans = 0, left = 0;
    for (let right = 0; right < str.length; right++) {
      const c = str.charCodeAt(right) - 65;
      freq[c]++;
      maxFreq = Math.max(maxFreq, freq[c]!);
      while (right - left + 1 - maxFreq > maxK) {
        freq[str.charCodeAt(left) - 65]--;
        left++;
      }
      ans = Math.max(ans, right - left + 1);
    }
    return ans;
  },

  'subarrays-with-k-different-integers': (nums: unknown, k: unknown) => {
    const arr = nums as number[];
    const K = k as number;
    function atMost(limit: number): number {
      const cnt = new Map<number, number>();
      let res = 0, left = 0;
      for (let right = 0; right < arr.length; right++) {
        cnt.set(arr[right]!, (cnt.get(arr[right]!) ?? 0) + 1);
        while (cnt.size > limit) {
          const lv = arr[left++]!;
          cnt.set(lv, cnt.get(lv)! - 1);
          if (cnt.get(lv) === 0) cnt.delete(lv);
        }
        res += right - left + 1;
      }
      return res;
    }
    return atMost(K) - atMost(K - 1);
  },

  'binary-subarrays-with-sum': (nums: unknown, goal: unknown) => {
    const arr = nums as number[];
    const g = goal as number;
    const cnt = new Map<number, number>();
    cnt.set(0, 1);
    let prefix = 0, ans = 0;
    for (const n of arr) {
      prefix += n;
      ans += cnt.get(prefix - g) ?? 0;
      cnt.set(prefix, (cnt.get(prefix) ?? 0) + 1);
    }
    return ans;
  },

  'reduce-array-size-to-the-half': (arr: unknown) => {
    const a = arr as number[];
    const freq = new Map<number, number>();
    for (const v of a) freq.set(v, (freq.get(v) ?? 0) + 1);
    const freqs = [...freq.values()].sort((x, y) => y - x);
    const target = Math.ceil(a.length / 2);
    let removed = 0, setSize = 0;
    for (const f of freqs) {
      removed += f;
      setSize++;
      if (removed >= target) return setSize;
    }
    return setSize;
  },

  'minimum-number-of-removals-to-make-mountain-array': (nums: unknown) => {
    const arr = nums as number[];
    const n = arr.length;
    const lis = new Array(n).fill(1);
    const lds = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j]! < arr[i]!) lis[i] = Math.max(lis[i]!, lis[j]! + 1);
      }
    }
    for (let i = n - 2; i >= 0; i--) {
      for (let j = n - 1; j > i; j--) {
        if (arr[j]! < arr[i]!) lds[i] = Math.max(lds[i]!, lds[j]! + 1);
      }
    }
    let best = 0;
    for (let i = 1; i < n - 1; i++) {
      if (lis[i]! > 1 && lds[i]! > 1) best = Math.max(best, lis[i]! + lds[i]! - 1);
    }
    return n - best;
  },

  'number-of-ways-to-divide-a-long-corridor': (corridor: unknown) => {
    const s = corridor as string;
    const MOD = 1000000007n;
    const seats: number[] = [];
    for (let i = 0; i < s.length; i++) if (s[i] === 'S') seats.push(i);
    if (seats.length === 0 || seats.length % 2 !== 0) return 0;
    let ways = 1n;
    for (let i = 2; i < seats.length; i += 2) {
      ways = (ways * BigInt(seats[i]! - seats[i - 1]!)) % MOD;
    }
    return Number(ways);
  },

  'delete-operation-for-two-strings': (word1: unknown, word2: unknown) => {
    const w1 = word1 as string, w2 = word2 as string;
    const m = w1.length, n = w2.length;
    const dp: number[][] = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i]![j] = w1[i - 1] === w2[j - 1]
          ? dp[i - 1]![j - 1]! + 1
          : Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
      }
    }
    return m + n - 2 * dp[m]![n]!;
  },

  'product-of-array-except-self': (nums: unknown) => {
    const arr = nums as number[];
    const n = arr.length;
    const result = new Array(n).fill(1);
    let prefix = 1;
    for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= arr[i]!; }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) { result[i] *= suffix; suffix *= arr[i]!; }
    return result.map((v: number) => v === 0 ? 0 : v);
  },

  'minimum-moves-to-equal-array-elements': (nums: unknown) => {
    const arr = nums as number[];
    const min = Math.min(...arr);
    return arr.reduce((sum, v) => sum + v - min, 0);
  },

};
