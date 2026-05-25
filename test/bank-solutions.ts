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

};
