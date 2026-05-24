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
    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
      const lh = height[left] as number;
      const rh = height[right] as number;
      if (lh < rh) {
        leftMax = Math.max(leftMax, lh);
        water += leftMax - lh;
        left++;
      } else {
        rightMax = Math.max(rightMax, rh);
        water += rightMax - rh;
        right--;
      }
    }
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

};
