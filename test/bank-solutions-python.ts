// Python reference solutions, keyed by problem id. Test-only — never imported
// from application code so the strings don't ship in the extension bundle.
//
// Each value is the FULL Python source for the problem's function. It must
// satisfy the structural contract `functionName(...params)` — the Python test
// suite (`test/problem-bank-python.test.ts`) executes the source in a fresh
// Pyodide namespace and calls the function by name against every visible and
// hidden test case for that problem.

export const pythonSolutions: Record<string, string> = {
  'two-sum-indices': `def pairSumIndices(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        complement = target - v
        if complement in seen:
            return [seen[complement], i]
        seen[v] = i
    return []
`,
  'first-unique-char': `def firstUniqueChar(text):
    counts = {}
    for ch in text:
        counts[ch] = counts.get(ch, 0) + 1
    for i, ch in enumerate(text):
        if counts[ch] == 1:
            return i
    return -1
`,
  'most-frequent-value': `def mostFrequentValue(nums):
    counts = {}
    for v in nums:
        counts[v] = counts.get(v, 0) + 1
    best_value = None
    best_count = -1
    for v, c in counts.items():
        if c > best_count or (c == best_count and v < best_value):
            best_value = v
            best_count = c
    return best_value
`,
  'running-sum': `def runningSum(nums):
    out = []
    total = 0
    for v in nums:
        total += v
        out.append(total)
    return out
`,
  'peak-element-count': `def countInteriorPeaks(nums):
    count = 0
    for i in range(1, len(nums) - 1):
        if nums[i] > nums[i - 1] and nums[i] > nums[i + 1]:
            count += 1
    return count
`,
  'rotate-left-one': `def shiftLeftByOne(nums):
    if len(nums) <= 1:
        return list(nums)
    return list(nums[1:]) + [nums[0]]
`,
  'is-palindrome-clean': `def isLetterPalindrome(text):
    cleaned = ''.join(ch.lower() for ch in text if ch.isalpha())
    return cleaned == cleaned[::-1]
`,
  'reverse-words-order': `def reverseWordOrder(sentence):
    return ' '.join(sentence.split(' ')[::-1])
`,
  'vowel-tally': `def vowelTally(text):
    vowels = set('aeiou')
    return sum(1 for ch in text if ch.lower() in vowels)
`,
  'merge-sorted-lists': `def mergeSortedArrays(a, b):
    out = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            out.append(a[i])
            i += 1
        else:
            out.append(b[j])
            j += 1
    out.extend(a[i:])
    out.extend(b[j:])
    return out
`,
  'reverse-array-inplace': `def reverseArray(nums):
    return list(nums)[::-1]
`,
  'sorted-pair-exists': `def sortedPairExists(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return True
        if total < target:
            left += 1
        else:
            right -= 1
    return False
`,
  'longest-equal-run': `def longestEqualRun(text):
    if not text:
        return 0
    best = 1
    current = 1
    for i in range(1, len(text)):
        if text[i] == text[i - 1]:
            current += 1
            if current > best:
                best = current
        else:
            current = 1
    return best
`,
  'max-window-sum': `def maxWindowSum(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        if window > best:
            best = window
    return best
`,
  'min-window-average': `def minWindowSum(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        if window < best:
            best = window
    return best
`,
  'find-target-index': `def findTargetIndex(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
`,
  'first-not-smaller': `def firstNotSmaller(nums, target):
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo
`,
  'integer-square-root': `def integerSquareRoot(n):
    lo, hi = 0, n
    best = 0
    while lo <= hi:
        mid = (lo + hi) // 2
        if mid * mid <= n:
            best = mid
            lo = mid + 1
        else:
            hi = mid - 1
    return best
`,
  'balanced-brackets': `def balancedBrackets(text):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in text:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
    return not stack
`,
  'next-greater-element': `def nextGreaterElement(nums):
    result = [-1] * len(nums)
    stack = []
    for i, v in enumerate(nums):
        while stack and nums[stack[-1]] < v:
            result[stack.pop()] = v
        stack.append(i)
    return result
`,
  'remove-adjacent-dupes': `def collapseAdjacentDuplicates(text):
    stack = []
    for ch in text:
        if stack and stack[-1] == ch:
            stack.pop()
        else:
            stack.append(ch)
    return ''.join(stack)
`,
  'digit-sum': `def digitSum(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total
`,
  'greatest-common-divisor': `def greatestCommonDivisor(a, b):
    while b != 0:
        a, b = b, a % b
    return a
`,
  'is-prime-number': `def isPrime(n):
    if n < 2:
        return False
    if n < 4:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True
`,

  'missing-ranges': `def findMissingRanges(nums, lower, upper):
    result = []
    def fmt(a, b):
        return str(a) if a == b else f"{a}->{b}"
    prev = lower - 1
    for i in range(len(nums) + 1):
        curr = nums[i] if i < len(nums) else upper + 1
        if curr - prev >= 2:
            result.append(fmt(prev + 1, curr - 1))
        prev = curr
    return result
`,

  'product-except-self': `def productExceptSelf(nums):
    n = len(nums)
    out = [1] * n
    prefix = 1
    for i in range(n):
        out[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        out[i] *= suffix
        suffix *= nums[i]
    # Normalize -0.0 to 0 for consistent comparison
    return [0 if v == 0 else v for v in out]
`,

  'rotate-matrix': `def rotateMatrix(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
    return matrix
`,

  'group-anagrams': `def groupAnagrams(strs):
    from collections import defaultdict
    d = defaultdict(list)
    for s in strs:
        d[tuple(sorted(s))].append(s)
    return sorted([sorted(g) for g in d.values()], key=lambda g: g[0])
`,

  'longest-substring-no-repeat': `def lengthOfLongestSubstring(s):
    last = {}
    left = 0
    best = 0
    for right, c in enumerate(s):
        if c in last and last[c] >= left:
            left = last[c] + 1
        last[c] = right
        best = max(best, right - left + 1)
    return best
`,

  'isomorphic-strings': `def isIsomorphic(s, t):
    st, ts = {}, {}
    for a, b in zip(s, t):
        if st.get(a, b) != b or ts.get(b, a) != a:
            return False
        st[a] = b
        ts[b] = a
    return True
`,

  'subarray-sum-k': `def subarraySum(nums, k):
    from collections import defaultdict
    freq = defaultdict(int)
    freq[0] = 1
    total = count = 0
    for n in nums:
        total += n
        count += freq[total - k]
        freq[total] += 1
    return count
`,

  'three-sum': `def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                result.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return result
`,

  'container-with-most-water': `def maxWater(height):
    l, r, best = 0, len(height) - 1, 0
    while l < r:
        best = max(best, min(height[l], height[r]) * (r - l))
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return best
`,

  'remove-duplicates-sorted': `def removeDuplicates(nums):
    k = 0
    for n in nums:
        if k == 0 or n != nums[k - 1]:
            nums[k] = n
            k += 1
    return [k, nums[:k]]
`,

  'flip-k-zeros': `def longestOnes(nums, k):
    left = zeros = best = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > k:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        best = max(best, right - left + 1)
    return best
`,

  'max-sum-k-subarray': `def maxSumKSubarray(nums, k):
    s = sum(nums[:k])
    best = s
    for i in range(k, len(nums)):
        s += nums[i] - nums[i - k]
        best = max(best, s)
    return best
`,

  'search-rotated-sorted': `def searchRotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1
`,

  'find-first-last-pos': `def searchRange(nums, target):
    def bisect(left):
        lo, hi, ans = 0, len(nums) - 1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                ans = mid
                if left: hi = mid - 1
                else: lo = mid + 1
            elif nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid - 1
        return ans
    return [bisect(True), bisect(False)]
`,

  'koko-eating-bananas': `def minEatingSpeed(piles, h):
    import math
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        if sum(math.ceil(p / mid) for p in piles) <= h:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'daily-temperatures': `def dailyTemperatures(temperatures):
    ans = [0] * len(temperatures)
    stack = []
    for i, t in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < t:
            idx = stack.pop()
            ans[idx] = i - idx
        stack.append(i)
    return ans
`,

  'decode-string': `def decodeString(s):
    stack = []
    cur = ''
    num = 0
    for c in s:
        if c.isdigit():
            num = num * 10 + int(c)
        elif c == '[':
            stack.append((cur, num))
            cur, num = '', 0
        elif c == ']':
            prev, k = stack.pop()
            cur = prev + cur * k
        else:
            cur += c
    return cur
`,

  'min-stack': `def runMinStack(ops):
    main_s, min_s, results = [], [], []
    for op in ops:
        t, val = op[0], op[1]
        if t == 'push':
            main_s.append(val)
            min_s.append(min(val, min_s[-1] if min_s else val))
        elif t == 'pop':
            main_s.pop(); min_s.pop()
        elif t == 'top':
            results.append(main_s[-1])
        elif t == 'min':
            results.append(min_s[-1])
    return results
`,

  'power-function': `def myPow(x, n):
    if n < 0:
        x, n = 1 / x, -n
    result = 1
    while n:
        if n & 1:
            result *= x
        x *= x
        n >>= 1
    return result
`,

  'count-primes-sieve': `def countPrimes(n):
    if n < 2:
        return 0
    sieve = [True] * n
    sieve[0] = sieve[1] = False
    i = 2
    while i * i < n:
        if sieve[i]:
            for j in range(i * i, n, i):
                sieve[j] = False
        i += 1
    return sum(sieve)
`,

  'excel-column-number': `def titleToNumber(columnTitle):
    result = 0
    for c in columnTitle:
        result = result * 26 + (ord(c) - 64)
    return result
`,

  'fizz-buzz': `def fizzBuzz(n):
    out = []
    for i in range(1, n + 1):
        if i % 15 == 0: out.append('FizzBuzz')
        elif i % 3 == 0: out.append('Fizz')
        elif i % 5 == 0: out.append('Buzz')
        else: out.append(str(i))
    return out
`,

  'reverse-integer': `def reverseInteger(x):
    sign = -1 if x < 0 else 1
    x = abs(x)
    result = 0
    MAX = 2147483647
    while x:
        digit = x % 10
        x //= 10
        if result > (MAX - digit) // 10:
            return 0
        result = result * 10 + digit
    return sign * result
`,

  'valid-anagram': `def isAnagram(s, t):
    from collections import Counter
    return Counter(s) == Counter(t)
`,

  'zigzag-conversion': `def convert(s, numRows):
    if numRows == 1 or numRows >= len(s):
        return s
    rows = [''] * numRows
    row, direction = 0, 1
    for c in s:
        rows[row] += c
        if row == 0: direction = 1
        elif row == numRows - 1: direction = -1
        row += direction
    return ''.join(rows)
`,

  'max-subarray-kadane': `def maxSubArray(nums):
    cur = best = nums[0]
    for n in nums[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best
`,

  'climbing-stairs': `def climbStairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b
`,

  'contains-duplicate': `def containsDuplicate(nums):
    return len(set(nums)) < len(nums)
`,

  'valid-palindrome': `def isPalindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]
`,

  'best-time-buy-sell': `def maxProfit(prices):
    min_p = prices[0]
    best = 0
    for p in prices:
        min_p = min(min_p, p)
        best = max(best, p - min_p)
    return best
`,

  'missing-number': `def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
`,

  'move-zeroes': `def moveZeroes(nums):
    k = 0
    for n in nums:
        if n != 0:
            nums[k] = n
            k += 1
    while k < len(nums):
        nums[k] = 0
        k += 1
    return nums
`,

  'binary-search': `def binarySearch(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1
`,

  'single-number': `def singleNumber(nums):
    result = 0
    for n in nums:
        result ^= n
    return result
`,

  'majority-element': `def majorityElement(nums):
    candidate, count = nums[0], 1
    for n in nums[1:]:
        if count == 0:
            candidate, count = n, 1
        elif n == candidate:
            count += 1
        else:
            count -= 1
    return candidate
`,
};
