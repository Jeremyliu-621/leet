// Reference solutions — test-only, never imported by application code.
// Each function is the source of truth that proves every test case's
// `expected` value in the matching problem definition.

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

  // --- new medium/easy problems ---

  'missing-ranges': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const lower = args[1] as number;
    const upper = args[2] as number;
    const result: string[] = [];
    const fmt = (a: number, b: number) => (a === b ? String(a) : `${a}->${b}`);
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
      const curr = i < nums.length ? nums[i]! : upper + 1;
      if (curr - prev >= 2) result.push(fmt(prev + 1, curr - 1));
      prev = curr;
    }
    return result;
  },

  'product-except-self': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    const out = new Array(n).fill(1) as number[];
    let prefix = 1;
    for (let i = 0; i < n; i++) { out[i] = prefix; prefix *= nums[i]!; }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) { out[i]! *= suffix; suffix *= nums[i]!; }
    // Normalize -0 to 0 for consistent comparison
    return out.map((v) => v === 0 ? 0 : v);
  },

  'rotate-matrix': (...args: unknown[]) => {
    const matrix = args[0] as number[][];
    const n = matrix.length;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      const tmp = matrix[i]![j]!; matrix[i]![j] = matrix[j]![i]!; matrix[j]![i] = tmp;
    }
    for (const row of matrix) row.reverse();
    return matrix;
  },

  'group-anagrams': (...args: unknown[]) => {
    const strs = args[0] as string[];
    const map = new Map<string, string[]>();
    for (const s of strs) {
      const key = s.split('').sort().join('');
      const group = map.get(key) ?? [];
      group.push(s);
      map.set(key, group);
    }
    return [...map.values()].map(g => g.sort()).sort((a, b) => a[0]!.localeCompare(b[0]!));
  },

  'longest-substring-no-repeat': (...args: unknown[]) => {
    const s = args[0] as string;
    const last = new Map<string, number>();
    let left = 0, best = 0;
    for (let right = 0; right < s.length; right++) {
      const c = s[right]!;
      if (last.has(c) && last.get(c)! >= left) left = last.get(c)! + 1;
      last.set(c, right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'isomorphic-strings': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    const st = new Map<string, string>(), ts = new Map<string, string>();
    for (let i = 0; i < s.length; i++) {
      const a = s[i]!, b = t[i]!;
      if (st.has(a) && st.get(a) !== b) return false;
      if (ts.has(b) && ts.get(b) !== a) return false;
      st.set(a, b); ts.set(b, a);
    }
    return true;
  },

  'subarray-sum-k': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    const freq = new Map([[0, 1]]);
    let sum = 0, count = 0;
    for (const n of nums) {
      sum += n;
      count += freq.get(sum - k) ?? 0;
      freq.set(sum, (freq.get(sum) ?? 0) + 1);
    }
    return count;
  },

  'three-sum': (...args: unknown[]) => {
    const nums = [...(args[0] as number[])].sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
        const s = nums[i]! + nums[l]! + nums[r]!;
        if (s === 0) {
          result.push([nums[i]!, nums[l]!, nums[r]!]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++; r--;
        } else if (s < 0) l++; else r--;
      }
    }
    return result;
  },

  'container-with-most-water': (...args: unknown[]) => {
    const h = args[0] as number[];
    let l = 0, r = h.length - 1, best = 0;
    while (l < r) {
      best = Math.max(best, Math.min(h[l]!, h[r]!) * (r - l));
      if (h[l]! < h[r]!) l++; else r--;
    }
    return best;
  },

  'remove-duplicates-sorted': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (k === 0 || nums[i] !== nums[k - 1]) nums[k++] = nums[i]!;
    }
    return [k, nums.slice(0, k)];
  },

  'flip-k-zeros': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] === 0) zeros++;
      while (zeros > k) { if (nums[left++] === 0) zeros--; }
      best = Math.max(best, right - left + 1);
    }
    return best;
  },

  'max-sum-k-subarray': (...args: unknown[]) => {
    const nums = args[0] as number[], k = args[1] as number;
    let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
    let best = sum;
    for (let i = k; i < nums.length; i++) {
      sum += nums[i]! - nums[i - k]!;
      best = Math.max(best, sum);
    }
    return best;
  },

  'search-rotated-sorted': (...args: unknown[]) => {
    const nums = args[0] as number[], target = args[1] as number;
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) return mid;
      if (nums[lo]! <= nums[mid]!) {
        if (nums[lo]! <= target && target < nums[mid]!) hi = mid - 1; else lo = mid + 1;
      } else {
        if (nums[mid]! < target && target <= nums[hi]!) lo = mid + 1; else hi = mid - 1;
      }
    }
    return -1;
  },

  'find-first-last-pos': (...args: unknown[]) => {
    const nums = args[0] as number[], target = args[1] as number;
    const bisect = (left: boolean) => {
      let lo = 0, hi = nums.length - 1, ans = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (nums[mid] === target) { ans = mid; if (left) hi = mid - 1; else lo = mid + 1; }
        else if (nums[mid]! < target) lo = mid + 1; else hi = mid - 1;
      }
      return ans;
    };
    return [bisect(true), bisect(false)];
  },

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

  'daily-temperatures': (...args: unknown[]) => {
    const temps = args[0] as number[];
    const ans = new Array(temps.length).fill(0) as number[];
    const stack: number[] = [];
    for (let i = 0; i < temps.length; i++) {
      while (stack.length > 0 && temps[stack[stack.length - 1]!]! < temps[i]!) {
        const idx = stack.pop()!;
        ans[idx] = i - idx;
      }
      stack.push(i);
    }
    return ans;
  },

  'decode-string': (...args: unknown[]) => {
    const s = args[0] as string;
    const stack: [string, number][] = [];
    let cur = '', num = 0;
    for (const c of s) {
      if (c >= '0' && c <= '9') { num = num * 10 + Number(c); }
      else if (c === '[') { stack.push([cur, num]); cur = ''; num = 0; }
      else if (c === ']') { const [prev, k] = stack.pop()!; cur = prev + cur.repeat(k); }
      else cur += c;
    }
    return cur;
  },

  'min-stack': (...args: unknown[]) => {
    const ops = args[0] as [string, number][];
    const main: number[] = [], minS: number[] = [];
    const results: number[] = [];
    for (const [op, val] of ops) {
      if (op === 'push') {
        main.push(val);
        minS.push(Math.min(val, minS.length > 0 ? minS[minS.length - 1]! : val));
      } else if (op === 'pop') {
        main.pop(); minS.pop();
      } else if (op === 'top') {
        results.push(main[main.length - 1]!);
      } else if (op === 'min') {
        results.push(minS[minS.length - 1]!);
      }
    }
    return results;
  },

  'power-function': (...args: unknown[]) => {
    let x = args[0] as number, n = args[1] as number;
    if (n < 0) { x = 1 / x; n = -n; }
    let result = 1;
    while (n > 0) {
      if (n & 1) result *= x;
      x *= x; n >>= 1;
    }
    return result;
  },

  'count-primes-sieve': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n < 2) return 0;
    const sieve = new Uint8Array(n).fill(1);
    sieve[0] = sieve[1] = 0;
    for (let i = 2; i * i < n; i++) {
      if (sieve[i]) for (let j = i * i; j < n; j += i) sieve[j] = 0;
    }
    return sieve.reduce((s, v) => s + v, 0);
  },

  'excel-column-number': (...args: unknown[]) => {
    const col = args[0] as string;
    let result = 0;
    for (const c of col) result = result * 26 + (c.charCodeAt(0) - 64);
    return result;
  },

  'fizz-buzz': (...args: unknown[]) => {
    const n = args[0] as number;
    const out: string[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) out.push('FizzBuzz');
      else if (i % 3 === 0) out.push('Fizz');
      else if (i % 5 === 0) out.push('Buzz');
      else out.push(String(i));
    }
    return out;
  },

  'reverse-integer': (...args: unknown[]) => {
    let x = args[0] as number;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let result = 0;
    const MAX = 2147483647;
    while (x !== 0) {
      const digit = x % 10;
      x = Math.floor(x / 10);
      if (result > Math.floor((MAX - digit) / 10)) return 0;
      result = result * 10 + digit;
    }
    return sign * result;
  },

  'valid-anagram': (...args: unknown[]) => {
    const s = args[0] as string, t = args[1] as string;
    if (s.length !== t.length) return false;
    const freq = new Map<string, number>();
    for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
    for (const c of t) {
      const v = freq.get(c);
      if (!v) return false;
      freq.set(c, v - 1);
    }
    return true;
  },

  'zigzag-conversion': (...args: unknown[]) => {
    const s = args[0] as string, numRows = args[1] as number;
    if (numRows === 1 || numRows >= s.length) return s;
    const rows = Array.from({ length: numRows }, () => '');
    let row = 0, dir = 1;
    for (const c of s) {
      rows[row] += c;
      if (row === 0) dir = 1;
      else if (row === numRows - 1) dir = -1;
      row += dir;
    }
    return rows.join('');
  },

  'max-subarray-kadane': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let cur = nums[0]!, best = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
      cur = Math.max(nums[i]!, cur + nums[i]!);
      best = Math.max(best, cur);
    }
    return best;
  },

  'climbing-stairs': (...args: unknown[]) => {
    const n = args[0] as number;
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) { const c = a + b; a = b; b = c; }
    return b;
  },

  'contains-duplicate': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return new Set(nums).size < nums.length;
  },

  'valid-palindrome': (...args: unknown[]) => {
    const s = (args[0] as string).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l = 0, r = s.length - 1;
    while (l < r) { if (s[l++] !== s[r--]) return false; }
    return true;
  },

  'best-time-buy-sell': (...args: unknown[]) => {
    const prices = args[0] as number[];
    let minP = prices[0]!, best = 0;
    for (const p of prices) { minP = Math.min(minP, p); best = Math.max(best, p - minP); }
    return best;
  },

  'missing-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    const n = nums.length;
    return (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b, 0);
  },

  'move-zeroes': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let k = 0;
    for (const n of nums) { if (n !== 0) nums[k++] = n; }
    while (k < nums.length) nums[k++] = 0;
    return nums;
  },

  'binary-search': (...args: unknown[]) => {
    const nums = args[0] as number[], target = args[1] as number;
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) return mid;
      else if (nums[mid]! < target) lo = mid + 1; else hi = mid - 1;
    }
    return -1;
  },

  'single-number': (...args: unknown[]) => {
    const nums = args[0] as number[];
    return nums.reduce((a, b) => a ^ b, 0);
  },

  'majority-element': (...args: unknown[]) => {
    const nums = args[0] as number[];
    let candidate = nums[0]!, count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) { candidate = nums[i]!; count = 1; }
      else if (nums[i] === candidate) count++; else count--;
    }
    return candidate;
  },
};
