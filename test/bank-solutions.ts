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

  // --- math -----------------------------------------------------------------

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

  // --- dynamic-programming — hard --------------------------------------------
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

  'partition-list': (...args: unknown[]) => {
    const arr = args[0] as number[];
    const x = args[1] as number;
    return [...arr.filter((v) => v < x), ...arr.filter((v) => v >= x)];
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

  'sudoku-solver': (...args: unknown[]) => {
    const board = (args[0] as string[][]).map(row => [...row]);
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const v = board[r]![c]!;
        if (v !== '.') {
          const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
          rows[r]!.add(v); cols[c]!.add(v); boxes[b]!.add(v);
        }
      }
    }
    function bt(): boolean {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (board[r]![c] !== '.') continue;
          const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
          for (let d = 1; d <= 9; d++) {
            const s = String(d);
            if (rows[r]!.has(s) || cols[c]!.has(s) || boxes[b]!.has(s)) continue;
            board[r]![c] = s; rows[r]!.add(s); cols[c]!.add(s); boxes[b]!.add(s);
            if (bt()) return true;
            board[r]![c] = '.'; rows[r]!.delete(s); cols[c]!.delete(s); boxes[b]!.delete(s);
          }
          return false;
        }
      }
      return true;
    }
    bt();
    return board;
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

  'subsets-ii': (...args: unknown[]) => {
    const nums = (args[0] as number[]).slice().sort((a, b) => a - b);
    const result: number[][] = [];
    function bt(start: number, cur: number[]): void {
      result.push(cur.slice());
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        cur.push(nums[i]!);
        bt(i + 1, cur);
        cur.pop();
      }
    }
    bt(0, []);
    return result
      .map(s => s.slice().sort((a, b) => a - b))
      .sort((a, b) => {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) { if (a[i] !== b[i]) return a[i]! - b[i]!; }
        return a.length - b.length;
      });
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

};
