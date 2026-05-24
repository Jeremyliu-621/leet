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
};
