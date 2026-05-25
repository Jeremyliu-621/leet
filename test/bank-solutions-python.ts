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
  'next-greater-element-ii': `def nextGreaterElements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []
    for i in range(2 * n):
        val = nums[i % n]
        while stack and nums[stack[-1]] < val:
            idx = stack.pop()
            res[idx] = val
        if i < n:
            stack.append(i)
    return res
`,

  'hamming-weight': `def hammingWeight(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count
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
  'max-subarray': `def maxSubarraySum(nums):
    cur = nums[0]
    best = cur
    for n in nums[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best
`,
  'anagram-check': `def areAnagrams(s, t):
    if len(s) != len(t):
        return False
    from collections import Counter
    return Counter(s) == Counter(t)
`,
  'move-zeros': `def moveZeros(nums):
    non_zero = [n for n in nums if n != 0]
    return non_zero + [0] * (len(nums) - len(non_zero))
`,
  'compress-string': `def compressString(s):
    if not s:
        return ''
    out = []
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]:
            j += 1
        out.append(s[i] + str(j - i))
        i = j
    return ''.join(out)
`,
  'longest-unique-window': `def longestUniqueWindow(s):
    seen = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        best = max(best, right - left + 1)
    return best
`,
  'count-divisors': `def countDivisors(n):
    count = 0
    d = 1
    while d * d <= n:
        if n % d == 0:
            count += 1 if d * d == n else 2
        d += 1
    return count
`,
  'valid-subsequence': `def isSubsequence(seq, arr):
    i = 0
    for val in arr:
        if i < len(seq) and val == seq[i]:
            i += 1
    return i == len(seq)
`,
  'binary-search-range': `def countOccurrences(nums, target):
    def lower_bound(t):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] >= t:
                hi = mid
            else:
                lo = mid + 1
        return lo
    return lower_bound(target + 1) - lower_bound(target)
`,
  'daily-temperatures': `def daysUntilWarmer(temps):
    stack = []
    answer = [0] * len(temps)
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            answer[j] = i - j
        stack.append(i)
    return answer
`,
  'letter-combinations-phone': `def letterCombinations(digits):
    if not digits:
        return []
    mapping = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
               '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    result = []
    def bt(idx, cur):
        if idx == len(digits):
            result.append(cur)
            return
        for ch in mapping[digits[idx]]:
            bt(idx + 1, cur + ch)
    bt(0, '')
    return result
`,

  'subsets': `def subsets(nums):
    nums = sorted(nums)
    result = []
    def bt(start, cur):
        result.append(list(cur))
        for i in range(start, len(nums)):
            cur.append(nums[i])
            bt(i + 1, cur)
            cur.pop()
    bt(0, [])
    return sorted(result)
`,

  'subsets-ii': `def subsetsII(nums):
    nums = sorted(nums)
    result = []
    def bt(start, cur):
        result.append(list(cur))
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i - 1]:
                continue
            cur.append(nums[i])
            bt(i + 1, cur)
            cur.pop()
    bt(0, [])
    return sorted([sorted(s) for s in result])
`,

  'combination-sum': `def combinationSum(candidates, target):
    candidates = sorted(candidates)
    result = []
    def bt(start, rem, cur):
        if rem == 0:
            result.append(list(cur))
            return
        for i in range(start, len(candidates)):
            if candidates[i] > rem:
                break
            cur.append(candidates[i])
            bt(i, rem - candidates[i], cur)
            cur.pop()
    bt(0, target, [])
    return result
`,

  'meeting-rooms-ii': `def minMeetingRooms(intervals):
    starts = sorted(iv[0] for iv in intervals)
    ends = sorted(iv[1] for iv in intervals)
    j, max_rooms = 0, 0
    for i in range(len(starts)):
        if starts[i] >= ends[j]:
            j += 1
        max_rooms = max(max_rooms, i - j + 1)
    return max_rooms
`,

  'h-index': `def hIndex(citations):
    citations = sorted(citations, reverse=True)
    h = 0
    for i, c in enumerate(citations):
        if c >= i + 1:
            h = i + 1
        else:
            break
    return h
`,

  'merge-intervals': `def merge(intervals):
    intervals = sorted(intervals, key=lambda x: x[0])
    result = []
    for iv in intervals:
        if result and iv[0] <= result[-1][1]:
            result[-1][1] = max(result[-1][1], iv[1])
        else:
            result.append(list(iv))
    return result
`,

  'non-overlapping-intervals': `def eraseOverlapIntervals(intervals):
    intervals = sorted(intervals, key=lambda x: x[1])
    removed = 0
    end = float('-inf')
    for iv in intervals:
        if iv[0] >= end:
            end = iv[1]
        else:
            removed += 1
    return removed
`,

  'permutations': `def permute(nums):
    result = []
    nums = list(nums)
    def bt(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            bt(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    bt(0)
    return sorted(result)
`,

  'generate-parentheses': `def generateParentheses(n):
    result = []
    def bt(cur, open_count, close_count):
        if len(cur) == 2 * n:
            result.append(cur)
            return
        if open_count < n:
            bt(cur + '(', open_count + 1, close_count)
        if close_count < open_count:
            bt(cur + ')', open_count, close_count + 1)
    bt('', 0, 0)
    return sorted(result)
`,

  'palindrome-partitioning': `def partition(s):
    result = []
    def is_palindrome(l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True
    def bt(start, cur):
        if start == len(s):
            result.append(list(cur))
            return
        for end in range(start + 1, len(s) + 1):
            if is_palindrome(start, end - 1):
                cur.append(s[start:end])
                bt(end, cur)
                cur.pop()
    bt(0, [])
    return result
`,

  'rotate-array': `def rotateArray(nums, k):
    n = len(nums)
    steps = k % n
    return nums[-steps:] + nums[:-steps] if steps else list(nums)
`,
  'max-product-subarray': `def maxProductSubarray(nums):
    cur_max = cur_min = best = nums[0]
    for v in nums[1:]:
        new_max = max(v, cur_max * v, cur_min * v)
        cur_min = min(v, cur_max * v, cur_min * v)
        cur_max = new_max
        if cur_max > best:
            best = cur_max
    return best
`,
  'longest-palindromic-string': `def longestPalindrome(s):
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]
    best = ''
    for i in range(len(s)):
        a = expand(i, i)
        b = expand(i, i + 1)
        if len(a) > len(best):
            best = a
        if len(b) > len(best):
            best = b
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
  'max-consecutive-ones': `def maxConsecutiveOnes(nums):
    best = 0
    current = 0
    for n in nums:
        current = current + 1 if n == 1 else 0
        if current > best:
            best = current
    return best
`,
  'capitalize-words': `def capitalizeWords(sentence):
    return ' '.join(w[0].upper() + w[1:] for w in sentence.split(' '))
`,
  'intersection-two-arrays': `def intersectionTwoArrays(nums1, nums2):
    set1 = set(nums1)
    return list(dict.fromkeys(n for n in nums2 if n in set1))
`,
  'subarray-sum-equals-k': `def subarraySumEqualsK(nums, k):
    freq = {0: 1}
    total = 0
    count = 0
    for n in nums:
        total += n
        count += freq.get(total - k, 0)
        freq[total] = freq.get(total, 0) + 1
    return count
`,
  'is-perfect-square': `def isPerfectSquare(n):
    lo, hi = 1, n
    while lo <= hi:
        mid = (lo + hi) // 2
        sq = mid * mid
        if sq == n:
            return True
        if sq < n:
            lo = mid + 1
        else:
            hi = mid - 1
    return False
`,
  'sum-of-squares': `def sumOfSquares(n):
    if n == 0:
        return 0
    total = 0
    while n > 0:
        d = n % 10
        total += d * d
        n //= 10
    return total
`,
  'find-max-min': `def findMaxMin(nums):
    max_v = min_v = nums[0]
    for v in nums[1:]:
        if v > max_v:
            max_v = v
        if v < min_v:
            min_v = v
    return [max_v, min_v]
`,
  'reverse-string': `def reverseString(s):
    return s[::-1]
`,
  'count-good-pairs': `def countGoodPairs(nums):
    from collections import defaultdict
    freq = defaultdict(int)
    count = 0
    for n in nums:
        count += freq[n]
        freq[n] += 1
    return count
`,
  'remove-duplicates-sorted': `def removeDuplicatesSorted(nums):
    out = []
    for i, v in enumerate(nums):
        if i == 0 or v != nums[i - 1]:
            out.append(v)
    return out
`,
  'min-subarray-length': `def minSubarrayLength(nums, target):
    left = 0
    total = 0
    best = float('inf')
    for right in range(len(nums)):
        total += nums[right]
        while total >= target:
            best = min(best, right - left + 1)
            total -= nums[left]
            left += 1
    return 0 if best == float('inf') else best
`,
  'minimum-size-subarray-sum': `def minSubArrayLen(target, nums):
    left = 0
    total = 0
    best = float('inf')
    for right in range(len(nums)):
        total += nums[right]
        while total >= target:
            best = min(best, right - left + 1)
            total -= nums[left]
            left += 1
    return 0 if best == float('inf') else best
`,

  'evaluate-rpn': `def evalRPN(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/' and len(t) == 1:
            b, a = stack.pop(), stack.pop()
            if t == '+':
                stack.append(a + b)
            elif t == '-':
                stack.append(a - b)
            elif t == '*':
                stack.append(a * b)
            else:
                stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]
`,
  'missing-number': `def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
`,
  'contains-duplicate': `def containsDuplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False
`,
  'longest-common-prefix': `def longestCommonPrefix(strs):
    prefix = strs[0]
    for s in strs:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ''
    return prefix
`,
  'word-frequency': `def wordFrequency(text):
    freq = {}
    for w in text.split(' '):
        freq[w] = freq.get(w, 0) + 1
    return freq
`,
  'power-of-two': `def isPowerOfTwo(n):
    if n <= 0:
        return False
    return (n & (n - 1)) == 0
`,
  'fibonacci-number': `def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
`,

  // ---------------------------------------------------------------------------
  // Medium-difficulty problems (batch expansion)
  // ---------------------------------------------------------------------------

  'product-except-self': `def productExceptSelf(nums):
    n = len(nums)
    out = [1] * n
    p = 1
    for i in range(n):
        out[i] = p
        p *= nums[i]
    p = 1
    for i in range(n - 1, -1, -1):
        out[i] *= p
        p *= nums[i]
    return out
`,

  'sort-colors': `def sortColors(nums):
    lo, mid, hi = 0, 0, len(nums) - 1
    while mid <= hi:
        if nums[mid] == 0:
            nums[lo], nums[mid] = nums[mid], nums[lo]
            lo += 1
            mid += 1
        elif nums[mid] == 2:
            nums[hi], nums[mid] = nums[mid], nums[hi]
            hi -= 1
        else:
            mid += 1
    return nums
`,

  'trap-rain-water': `def trapRainWater(height):
    n = len(height)
    if n == 0:
        return 0
    left_max = [0] * n
    right_max = [0] * n
    left_max[0] = height[0]
    for i in range(1, n):
        left_max[i] = max(left_max[i - 1], height[i])
    right_max[n - 1] = height[n - 1]
    for i in range(n - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], height[i])
    water = 0
    for i in range(n):
        water += max(0, min(left_max[i], right_max[i]) - height[i])
    return water
`,

  'container-with-most-water': `def containerWithMostWater(height):
    left, right = 0, len(height) - 1
    best = 0
    while left < right:
        best = max(best, min(height[left], height[right]) * (right - left))
        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1
    return best
`,

  'three-sum-zero': `def threeSumZero(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif s < 0:
                left += 1
            else:
                right -= 1
    return result
`,

  'jump-game': `def canJump(nums):
    max_reach = 0
    for i, v in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + v)
    return True
`,

  'best-time-buy-sell-two': `def maxProfitMultiple(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]
    return profit
`,

  'majority-element': `def majorityElement(nums):
    count = 0
    candidate = None
    for n in nums:
        if count == 0:
            candidate = n
        count += 1 if n == candidate else -1
    return candidate
`,

  'kth-largest-element': `def kthLargest(nums, k):
    sorted_nums = sorted(list(nums))
    return sorted_nums[len(sorted_nums) - k]
`,

  'find-all-duplicates': `def findAllDuplicates(nums):
    result = []
    for v in nums:
        idx = abs(v) - 1
        if nums[idx] < 0:
            result.append(abs(v))
        else:
            nums[idx] = -nums[idx]
    return sorted(result)
`,

  'longest-subarray-of-ones': `def longestSubarrayOfOnes(nums):
    left = 0
    zeros = 0
    best = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > 1:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        best = max(best, right - left)
    return best
`,

  // ---------------------------------------------------------------------------
  // Medium-difficulty problems — batch 2 (strings + hash-map)
  // ---------------------------------------------------------------------------,

  'count-palindromic-substrings': `def countPalindromicSubstrings(s):
    count = 0
    n = len(s)
    for i in range(n):
        l, r = i, i
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
        l, r = i, i + 1
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    return count
`,

  'decode-string': `def decodeString(s):
    stack = []
    cur = ''
    num = 0
    for ch in s:
        if ch.isdigit():
            num = num * 10 + int(ch)
        elif ch == '[':
            stack.append((cur, num))
            cur = ''
            num = 0
        elif ch == ']':
            prev, k = stack.pop()
            cur = prev + cur * k
        else:
            cur += ch
    return cur
`,

  'minimum-remove-to-make-valid': `def minRemoveForValid(s):
    open_count = 0
    s1 = []
    for c in s:
        if c == '(':
            open_count += 1
            s1.append(c)
        elif c == ')':
            if open_count > 0:
                open_count -= 1
                s1.append(c)
        else:
            s1.append(c)
    close_count = 0
    s2 = []
    for c in reversed(s1):
        if c == ')':
            close_count += 1
            s2.append(c)
        elif c == '(':
            if close_count > 0:
                close_count -= 1
                s2.append(c)
        else:
            s2.append(c)
    return ''.join(reversed(s2))
`,

  'reverse-string-words': `def reverseWordsInSentence(s):
    return ' '.join(s.split()[::-1])
`,

  'string-multiply': `def multiplyStrings(num1, num2):
    m, n = len(num1), len(num2)
    res = [0] * (m + n)
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            mul = (ord(num1[i]) - 48) * (ord(num2[j]) - 48)
            p1, p2 = i + j, i + j + 1
            total = mul + res[p2]
            res[p2] = total % 10
            res[p1] += total // 10
    s = ''.join(map(str, res)).lstrip('0')
    return s if s else '0'
`,

  'is-subsequence-medium': `def countSubsequenceOccurrences(s, t):
    MOD = 10 ** 9 + 7
    m, n = len(s), len(t)
    prev = [1] * (n + 1)
    for i in range(1, m + 1):
        curr = [0] * (n + 1)
        for j in range(1, n + 1):
            curr[j] = curr[j - 1]
            if s[i - 1] == t[j - 1]:
                curr[j] = (curr[j] + prev[j - 1]) % MOD
        prev = curr
    return prev[n]
`,

  'character-replacement': `def characterReplacement(s, k):
    freq = [0] * 26
    left = 0
    max_count = 0
    best = 0
    for right in range(len(s)):
        freq[ord(s[right]) - 65] += 1
        max_count = max(max_count, freq[ord(s[right]) - 65])
        while right - left + 1 - max_count > k:
            freq[ord(s[left]) - 65] -= 1
            left += 1
        best = max(best, right - left + 1)
    return best
`,

  'group-anagrams': `def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    result = [sorted(g) for g in groups.values()]
    result.sort(key=lambda g: g[0] if g else '')
    return result
`,

  'top-k-frequent-elements': `def topKFrequent(nums, k):
    from collections import Counter
    freq = Counter(nums)
    return sorted(sorted(freq.keys(), key=lambda x: (-freq[x], x))[:k])
`,

  'longest-consecutive-sequence': `def longestConsecutive(nums):
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best
`,

  'find-all-anagrams-in-string': `def findAnagrams(s, p):
    from collections import Counter
    p_freq = Counter(p)
    w_freq = Counter()
    result = []
    p_len = len(p)
    for i in range(len(s)):
        w_freq[s[i]] += 1
        if i >= p_len:
            out = s[i - p_len]
            w_freq[out] -= 1
            if w_freq[out] == 0:
                del w_freq[out]
        if i >= p_len - 1 and w_freq == p_freq:
            result.append(i - p_len + 1)
    return result
`,

  'maximum-erasure-value': `def maximumUniqueSum(nums):
    seen = {}
    left = 0
    current_sum = 0
    best = 0
    for right in range(len(nums)):
        v = nums[right]
        if v in seen and seen[v] >= left:
            while left <= seen[v]:
                current_sum -= nums[left]
                left += 1
        seen[v] = right
        current_sum += v
        best = max(best, current_sum)
    return best
`,

  // ---------------------------------------------------------------------------
  // Medium-difficulty problems — batch 3 (binary-search + stack + math)
  // ---------------------------------------------------------------------------,

  'find-k-pairs-smallest-sums': `def findKPairsRunner(nums1, nums2, k):
    import heapq
    result = []
    if not nums1 or not nums2:
        return result
    heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(len(nums1), k))]
    heapq.heapify(heap)
    while heap and len(result) < k:
        _, i, j = heapq.heappop(heap)
        result.append([nums1[i], nums2[j]])
        if j + 1 < len(nums2):
            heapq.heappush(heap, (nums1[i] + nums2[j+1], i, j+1))
    return sorted(result, key=lambda p: (p[0], p[1]))
`,

  'search-rotated-sorted': `def searchRotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
`,

  'find-minimum-rotated': `def findMinRotated(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]
`,

  'single-element-sorted': `def singleNonDuplicate(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if mid % 2 == 1:
            mid -= 1
        if nums[mid] == nums[mid + 1]:
            left = mid + 2
        else:
            right = mid
    return nums[left]
`,

  'asteroid-collision': `def asteroidCollision(asteroids):
    stack = []
    for a in asteroids:
        survived = True
        while survived and a < 0 and stack and stack[-1] > 0:
            if stack[-1] < -a:
                stack.pop()
            elif stack[-1] == -a:
                stack.pop()
                survived = False
            else:
                survived = False
        if survived:
            stack.append(a)
    return stack
`,

  'score-of-parentheses': `def scoreOfParentheses(s):
    stack = [0]
    for c in s:
        if c == '(':
            stack.append(0)
        else:
            v = stack.pop()
            stack[-1] += max(2 * v, 1)
    return stack[0]
`,

  'valid-parenthesis-string': `def validParenthesisString(s):
    min_open = 0
    max_open = 0
    for c in s:
        if c == '(':
            min_open += 1
            max_open += 1
        elif c == ')':
            min_open -= 1
            max_open -= 1
        else:
            min_open -= 1
            max_open += 1
        if max_open < 0:
            return False
        if min_open < 0:
            min_open = 0
    return min_open == 0
`,

  'simplify-path': `def simplifyPath(path):
    stack = []
    for part in path.split('/'):
        if part == '' or part == '.':
            continue
        elif part == '..':
            if stack:
                stack.pop()
        else:
            stack.append(part)
    return '/' + '/'.join(stack)
`,

  'add-binary': `def addBinary(a, b):
    i, j, carry, result = len(a) - 1, len(b) - 1, 0, ''
    while i >= 0 or j >= 0 or carry:
        s = (int(a[i]) if i >= 0 else 0) + (int(b[j]) if j >= 0 else 0) + carry
        result = str(s % 2) + result
        carry = s // 2
        i -= 1
        j -= 1
    return result or '0'
`,

  'integer-to-roman': `def intToRoman(num):
    table = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),(100,'C'),(90,'XC'),
             (50,'L'),(40,'XL'),(10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    result = ''
    for val, sym in table:
        while num >= val:
            result += sym
            num -= val
    return result
`,

  'task-scheduler': `def leastInterval(tasks, n):
    from collections import Counter
    freq = Counter(tasks)
    max_freq = max(freq.values())
    max_count = sum(1 for v in freq.values() if v == max_freq)
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)
`,

  'count-primes-sieve': `def countPrimesUpTo(n):
    if n < 2:
        return 0
    is_prime = [True] * n
    is_prime[0] = is_prime[1] = False
    i = 2
    while i * i < n:
        if is_prime[i]:
            for j in range(i * i, n, i):
                is_prime[j] = False
        i += 1
    return sum(is_prime)
`,

  'pow-x-n': `def fastPow(x, n):
    def helper(base, exp):
        if exp == 0:
            return 1.0
        half = helper(base, exp // 2)
        return half * half if exp % 2 == 0 else base * half * half
    if n < 0:
        return helper(1.0 / x, -n)
    return helper(x, n)
`,

  'reverse-integer': `def reverseInteger(x):
    sign = -1 if x < 0 else 1
    rev = int(str(abs(x))[::-1]) * sign
    if rev > 2**31 - 1 or rev < -(2**31):
        return 0
    return rev
`,

  'happy-number': `def isHappyNumber(n):
    def digit_square_sum(num):
        total = 0
        while num > 0:
            d = num % 10
            total += d * d
            num //= 10
        return total
    seen = set()
    cur = n
    while cur != 1:
        if cur in seen:
            return False
        seen.add(cur)
        cur = digit_square_sum(cur)
    return True
`,

  'n-queens': `def solveNQueens(n):
    result = []
    cols = set()
    diag1 = set()
    diag2 = set()
    queens = []
    def bt(row):
        if row == n:
            board = ['.' * c + 'Q' + '.' * (n - c - 1) for c in queens]
            result.append(board)
            return
        for c in range(n):
            if c in cols or (row - c) in diag1 or (row + c) in diag2:
                continue
            cols.add(c); diag1.add(row - c); diag2.add(row + c); queens.append(c)
            bt(row + 1)
            cols.discard(c); diag1.discard(row - c); diag2.discard(row + c); queens.pop()
    bt(0)
    return result
`,

  'sudoku-solver': `def solveSudoku(board):
    def is_valid(r, c, d):
        for i in range(9):
            if board[r][i] == d or board[i][c] == d:
                return False
            br = 3 * (r // 3) + i // 3
            bc = 3 * (c // 3) + i % 3
            if board[br][bc] == d:
                return False
        return True
    def solve():
        for r in range(9):
            for c in range(9):
                if board[r][c] == '.':
                    for d in '123456789':
                        if is_valid(r, c, d):
                            board[r][c] = d
                            if solve():
                                return True
                            board[r][c] = '.'
                    return False
        return True
    solve()
`,

  'first-missing-positive': `def firstMissingPositive(nums):
    n = len(nums)
    i = 0
    while i < n:
        j = nums[i] - 1
        if 1 <= nums[i] <= n and nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1
`,

  'jump-game-ii': `def minJumps(nums):
    jumps = 0
    cur_end = 0
    farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps
`,

  'largest-rectangle-histogram': `def largestRectangleArea(heights):
    stack = []
    max_area = 0
    h = heights + [0]
    for i, height in enumerate(h):
        while stack and h[stack[-1]] > height:
            ht = h[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, ht * width)
        stack.append(i)
    return max_area
`,

  'sliding-window-maximum': `def maxSlidingWindow(nums, k):
    from collections import deque
    dq = deque()
    result = []
    for i, val in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < val:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result
`,

  'largest-number': `def largestNumber(nums):
    from functools import cmp_to_key
    strs = list(map(str, nums))
    def compare(a, b):
        if a + b > b + a:
            return -1
        elif a + b < b + a:
            return 1
        return 0
    strs.sort(key=cmp_to_key(compare))
    if strs[0] == '0':
        return '0'
    return ''.join(strs)
`,

  'longest-increasing-subsequence': `def lengthOfLIS(nums):
    import bisect
    tails = []
    for n in nums:
        pos = bisect.bisect_left(tails, n)
        if pos == len(tails):
            tails.append(n)
        else:
            tails[pos] = n
    return len(tails)
`,

  'minimum-window-substring': `def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    have = 0
    required = len(need)
    window = {}
    left = 0
    min_len = float('inf')
    min_left = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            lc = s[left]
            window[lc] -= 1
            if lc in need and window[lc] < need[lc]:
                have -= 1
            left += 1
    return '' if min_len == float('inf') else s[min_left:min_left + min_len]
`,

  'longest-valid-parentheses': `def longestValidParentheses(s):
    stack = [-1]
    max_len = 0
    for i, c in enumerate(s):
        if c == '(':
            stack.append(i)
        else:
            stack.pop()
            if not stack:
                stack.append(i)
            else:
                max_len = max(max_len, i - stack[-1])
    return max_len
`,

  'edit-distance': `def editDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]
`,

  'word-break': `def wordBreak(s, wordDict):
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[len(s)]
`,

  'three-sum-closest': `def threeSumClosest(nums, target):
    nums = sorted(nums)
    closest = nums[0] + nums[1] + nums[2]
    for i in range(len(nums) - 2):
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(closest - target):
                closest = s
            if s == target:
                return s
            elif s < target:
                l += 1
            else:
                r -= 1
    return closest
`,

  'boats-to-save-people': `def numRescueBoats(people, limit):
    people = sorted(people)
    left, right, boats = 0, len(people) - 1, 0
    while left <= right:
        if people[left] + people[right] <= limit:
            left += 1
        right -= 1
        boats += 1
    return boats
`,

  'partition-labels': `def partitionLabels(s):
    last = {ch: i for i, ch in enumerate(s)}
    parts = []
    start = end = 0
    for i, ch in enumerate(s):
        end = max(end, last[ch])
        if i == end:
            parts.append(end - start + 1)
            start = i + 1
    return parts
`,

  'basic-calculator': `def calculate(s):
    result, num, sign = 0, 0, 1
    stack = []
    for ch in s:
        if ch.isdigit():
            num = num * 10 + int(ch)
        elif ch == '+':
            result += sign * num
            num, sign = 0, 1
        elif ch == '-':
            result += sign * num
            num, sign = 0, -1
        elif ch == '(':
            stack.append(result)
            stack.append(sign)
            result, sign = 0, 1
        elif ch == ')':
            result += sign * num
            num = 0
            saved_sign = stack.pop()
            saved_result = stack.pop()
            result = saved_result + saved_sign * result
    return result + sign * num
`,
  'sum-subarray-minimums': `def sumSubarrayMins(arr: list[int]) -> int:
    MOD = 10**9 + 7
    n = len(arr)
    left = [0] * n
    right = [0] * n
    stk = []
    for i in range(n):
        while stk and arr[stk[-1]] >= arr[i]:
            stk.pop()
        left[i] = i - stk[-1] if stk else i + 1
        stk.append(i)
    stk = []
    for i in range(n - 1, -1, -1):
        while stk and arr[stk[-1]] > arr[i]:
            stk.pop()
        right[i] = stk[-1] - i if stk else n - i
        stk.append(i)
    ans = 0
    for i in range(n):
        ans = (ans + arr[i] * left[i] * right[i]) % MOD
    return ans
`,
  'remove-k-digits': `def removeKdigits(num: str, k: int) -> str:
    stk = []
    rem = k
    for d in num:
        while rem > 0 and stk and stk[-1] > d:
            stk.pop()
            rem -= 1
        stk.append(d)
    while rem > 0:
        stk.pop()
        rem -= 1
    result = ''.join(stk).lstrip('0')
    return result if result else '0'
`,

  'median-two-sorted-arrays': `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    half = (m + n + 1) // 2
    lo, hi = 0, m
    while lo <= hi:
        i = (lo + hi) // 2
        j = half - i
        ln1 = float('-inf') if i == 0 else nums1[i - 1]
        rn1 = float('inf') if i == m else nums1[i]
        ln2 = float('-inf') if j == 0 else nums2[j - 1]
        rn2 = float('inf') if j == n else nums2[j]
        if ln1 <= rn2 and ln2 <= rn1:
            max_left = max(ln1, ln2)
            if (m + n) % 2 == 1:
                return float(max_left)
            return (max_left + min(rn1, rn2)) / 2.0
        elif ln1 > rn2:
            hi = i - 1
        else:
            lo = i + 1
    return 0.0
`,
  'split-array-largest-sum': `def splitArrayLargest(nums, k):
    lo, hi = max(nums), sum(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        parts, curr = 1, 0
        for n in nums:
            if curr + n > mid:
                parts += 1
                curr = 0
            curr += n
        if parts <= k:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,
  'capacity-to-ship': `def shipWithinDays(weights, days):
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        d, curr = 1, 0
        for w in weights:
            if curr + w > mid:
                d += 1
                curr = 0
            curr += w
        if d <= days:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,
  'max-consecutive-flips': `def longestOnes(nums, k):
    left = zeros = best = 0
    for right, v in enumerate(nums):
        if v == 0:
            zeros += 1
        while zeros > k:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        best = max(best, right - left + 1)
    return best
`,
  'count-subarrays-bounded-max': `def numSubarrayBoundedMax(nums, left, right):
    def count_at_most(bound):
        res = curr = 0
        for n in nums:
            curr = curr + 1 if n <= bound else 0
            res += curr
        return res
    return count_at_most(right) - count_at_most(left - 1)
`,
  'trapping-rain-water': `def trap(height):
    if not height:
        return 0
    l, r = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while l < r:
        if height[l] <= height[r]:
            left_max = max(left_max, height[l])
            water += left_max - height[l]
            l += 1
        else:
            right_max = max(right_max, height[r])
            water += right_max - height[r]
            r -= 1
    return water
`,
  'four-sum': `def fourSum(nums, target):
    nums = sorted(nums)
    n = len(nums)
    result = []
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            l, r = j + 1, n - 1
            while l < r:
                s = nums[i] + nums[j] + nums[l] + nums[r]
                if s == target:
                    result.append([nums[i], nums[j], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1
                    l += 1
                    r -= 1
                elif s < target:
                    l += 1
                else:
                    r -= 1
    return result
`,
  'fraction-to-recurring-decimal': `def fractionToDecimal(numerator, denominator):
    if numerator == 0:
        return '0'
    result = ''
    if (numerator < 0) != (denominator < 0):
        result += '-'
    numerator, denominator = abs(numerator), abs(denominator)
    result += str(numerator // denominator)
    remainder = numerator % denominator
    if remainder == 0:
        return result
    result += '.'
    seen = {}
    frac_chars = []
    while remainder != 0:
        if remainder in seen:
            pos = seen[remainder]
            frac_chars.insert(pos, '(')
            frac_chars.append(')')
            break
        seen[remainder] = len(frac_chars)
        remainder *= 10
        frac_chars.append(str(remainder // denominator))
        remainder = remainder % denominator
    return result + ''.join(frac_chars)
`,
  'integer-to-english-words': `def numberToWords(num):
    if num == 0:
        return 'Zero'
    ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
            'Seventeen', 'Eighteen', 'Nineteen']
    tens_words = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    def helper(n):
        if n == 0:
            return ''
        if n < 20:
            return ones[n] + ' '
        if n < 100:
            return tens_words[n // 10] + ' ' + helper(n % 10)
        return ones[n // 100] + ' Hundred ' + helper(n % 100)
    scales = [(1_000_000_000, 'Billion'), (1_000_000, 'Million'), (1_000, 'Thousand'), (1, '')]
    result = ''
    remaining = num
    for scale, label in scales:
        if remaining >= scale:
            result += helper(remaining // scale) + (label + ' ' if label else '')
            remaining = remaining % scale
    return result.strip()
`,
  'at-most-k-distinct': `def atMostKDistinct(s, k):
    from collections import defaultdict
    freq = defaultdict(int)
    l = 0
    best = 0
    for r in range(len(s)):
        freq[s[r]] += 1
        while len(freq) > k:
            freq[s[l]] -= 1
            if freq[s[l]] == 0:
                del freq[s[l]]
            l += 1
        best = max(best, r - l + 1)
    return best
`,
  'permutation-in-string': `def permutationInString(s1, s2):
    if len(s1) > len(s2):
        return False
    count = [0] * 26
    window = [0] * 26
    for c in s1:
        count[ord(c) - ord('a')] += 1
    n = len(s1)
    for r in range(len(s2)):
        window[ord(s2[r]) - ord('a')] += 1
        if r >= n:
            window[ord(s2[r - n]) - ord('a')] -= 1
        if r >= n - 1 and window == count:
            return True
    return False
`,
  'subarray-product-less-than-k': `def subarrayProductLessThanK(nums, k):
    if k <= 1:
        return 0
    l = 0
    product = 1
    count = 0
    for r in range(len(nums)):
        product *= nums[r]
        while product >= k:
            product //= nums[l]
            l += 1
        count += r - l + 1
    return count
`,
  'longest-string-chain': `def longestStrChain(words):
    words = sorted(list(words), key=len)
    dp = {}
    best = 1
    for word in words:
        max_chain = 0
        for i in range(len(word)):
            pred = word[:i] + word[i+1:]
            if pred in dp:
                max_chain = max(max_chain, dp[pred])
        dp[word] = max_chain + 1
        best = max(best, dp[word])
    return best
`,

  'house-robber': `def rob(nums: list[int]) -> int:
    prev2 = 0
    prev1 = 0
    for n in nums:
        curr = max(prev1, prev2 + n)
        prev2 = prev1
        prev1 = curr
    return prev1
`,
  'coin-change': `def coinChange(coins: list[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if i >= c:
                dp[i] = min(dp[i], dp[i - c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
`,
  'longest-common-subsequence': `def longestCommonSubsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]
`,
  'minimum-path-sum': `def minPathSum(grid: list[list[int]]) -> int:
    m, n = len(grid), len(grid[0])
    dp = [row[:] for row in grid]
    for j in range(1, n):
        dp[0][j] += dp[0][j - 1]
    for i in range(1, m):
        dp[i][0] += dp[i - 1][0]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] += min(dp[i - 1][j], dp[i][j - 1])
    return dp[m - 1][n - 1]
`,
  'decode-ways': `def numDecodings(s: str) -> int:
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1 if s[0] != '0' else 0
    for i in range(2, n + 1):
        if s[i - 1] != '0':
            dp[i] += dp[i - 1]
        two = int(s[i - 2:i])
        if 10 <= two <= 26:
            dp[i] += dp[i - 2]
    return dp[n]
`,
  'unique-paths': `def uniquePaths(m: int, n: int) -> int:
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    return dp[m - 1][n - 1]
`,
  'four-sum-ii': `def fourSumII(nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:
    from collections import defaultdict
    sum_map = defaultdict(int)
    for a in nums1:
        for b in nums2:
            sum_map[a + b] += 1
    count = 0
    for c in nums3:
        for d in nums4:
            count += sum_map[-(c + d)]
    return count
`,
  'max-points-on-line': `def maxPoints(points: list[list[int]]) -> int:
    from math import gcd
    n = len(points)
    if n <= 2:
        return n
    result = 1
    for i in range(n):
        counts = {}
        local_max = 0
        for j in range(i + 1, n):
            dy = points[j][1] - points[i][1]
            dx = points[j][0] - points[i][0]
            g = gcd(abs(dy), abs(dx))
            dy //= g
            dx //= g
            if dx < 0 or (dx == 0 and dy < 0):
                dy, dx = -dy, -dx
            key = (dy, dx)
            counts[key] = counts.get(key, 0) + 1
            local_max = max(local_max, counts[key])
        result = max(result, local_max + 1)
    return result
`,

  'lru-cache': `def lruCacheRunner(capacity, ops, args):
    from collections import OrderedDict
    class LRUCache:
        def __init__(self, cap):
            self.cap = cap
            self.cache = OrderedDict()
        def get(self, key):
            if key not in self.cache:
                return -1
            self.cache.move_to_end(key)
            return self.cache[key]
        def put(self, key, value):
            if key in self.cache:
                self.cache.move_to_end(key)
                self.cache[key] = value
            else:
                if len(self.cache) >= self.cap:
                    self.cache.popitem(last=False)
                self.cache[key] = value
    cache = LRUCache(int(capacity))
    result = []
    for op, a in zip(ops, args):
        if op == 'get':
            result.append(cache.get(a[0]))
        elif op == 'put':
            cache.put(a[0], a[1])
            result.append(None)
        else:
            result.append(None)
    return result
`,

  'roman-to-integer': `def romanToInt(s: str) -> int:
    val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    res = 0
    for i in range(len(s)):
        cur = val[s[i]]
        nxt = val[s[i + 1]] if i + 1 < len(s) else 0
        res += -cur if cur < nxt else cur
    return res
`,

  'perfect-squares': `def numSquares(n: int) -> int:
    import math
    dp = [float('inf')] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        j = 1
        while j * j <= i:
            dp[i] = min(dp[i], dp[i - j * j] + 1)
            j += 1
    return dp[n]
`,

  'valid-sudoku': `def isValidSudoku(board: list[list[str]]) -> bool:
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]
    for i in range(9):
        for j in range(9):
            v = board[i][j]
            if v == '.':
                continue
            b = (i // 3) * 3 + (j // 3)
            if v in rows[i] or v in cols[j] or v in boxes[b]:
                return False
            rows[i].add(v)
            cols[j].add(v)
            boxes[b].add(v)
    return True
`,

  'find-first-and-last-position': `def searchRange(nums: list[int], target: int) -> list[int]:
    def search(find_first: bool) -> int:
        lo, hi, res = 0, len(nums) - 1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                res = mid
                if find_first:
                    hi = mid - 1
                else:
                    lo = mid + 1
            elif nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid - 1
        return res
    return [search(True), search(False)]
`,

  'search-2d-matrix': `def searchMatrix(matrix: list[list[int]], target: int) -> bool:
    m, n = len(matrix), len(matrix[0])
    lo, hi = 0, m * n - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        elif val < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return False
`,

  'search-2d-matrix-ii': `def searchMatrix(matrix, target):
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        val = matrix[row][col]
        if val == target:
            return True
        elif val > target:
            col -= 1
        else:
            row += 1
    return False
`,

  'spiral-matrix': `def spiralOrder(matrix: list[list[int]]) -> list[int]:
    m, n = len(matrix), len(matrix[0])
    top, bottom, left, right = 0, m - 1, 0, n - 1
    res = []
    while top <= bottom and left <= right:
        for c in range(left, right + 1):
            res.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1):
            res.append(matrix[r][right])
        right -= 1
        if top <= bottom:
            for c in range(right, left - 1, -1):
                res.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:
            for r in range(bottom, top - 1, -1):
                res.append(matrix[r][left])
            left += 1
    return res
`,

  'rotate-image': `def rotate(matrix: list[list[int]]) -> list[list[int]]:
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
    return matrix
`,

  'maximal-square': `def maximalSquare(matrix: list[list[str]]) -> int:
    m, n = len(matrix), len(matrix[0])
    dp = [[0] * n for _ in range(m)]
    best = 0
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == '1':
                if i > 0 and j > 0:
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                else:
                    dp[i][j] = 1
                best = max(best, dp[i][j])
    return best * best
`,

  'queue-reconstruction-by-height': `def reconstructQueue(people):
    people = [list(p) for p in people]
    people.sort(key=lambda x: (-x[0], x[1]))
    result = []
    for p in people:
        result.insert(p[1], p)
    return result
`,

  'remove-duplicates-sorted-array-ii': `def removeDuplicatesIIRunner(nums):
    nums = list(nums)
    k = 0
    for num in nums:
        if k < 2 or nums[k-2] != num:
            nums[k] = num
            k += 1
    return nums[:k]
`,

  'set-matrix-zeroes': `def setZeroes(matrix):
    matrix = [list(row) for row in matrix]
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0
    return matrix
`,

  'minimum-arrows-burst-balloons': `def findMinArrowShots(points):
    points = sorted(points, key=lambda x: x[1])
    arrows, arrow_pos = 1, points[0][1]
    for i in range(1, len(points)):
        if points[i][0] > arrow_pos:
            arrows += 1
            arrow_pos = points[i][1]
    return arrows
`,

  'word-break-ii': `def wordBreak(s, wordDict):
    from functools import lru_cache
    word_set = set(wordDict)
    @lru_cache(maxsize=None)
    def bt(start):
        if start == len(s):
            return ['']
        results = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in word_set:
                for rest in bt(end):
                    results.append(word if rest == '' else word + ' ' + rest)
        return results
    return sorted(bt(0))
`,

  'decode-ways-ii': `def numDecodings(s):
    MOD = 10**9 + 7
    prev2 = 1
    prev1 = 9 if s[0] == '*' else (0 if s[0] == '0' else 1)
    for i in range(1, len(s)):
        cur, pre = s[i], s[i-1]
        single = 9 if cur == '*' else (0 if cur == '0' else 1)
        two = 0
        if pre == '*':
            if cur == '*':
                two = 15
            elif int(cur) <= 6:
                two = 2
            else:
                two = 1
        elif pre == '1':
            two = 9 if cur == '*' else 1
        elif pre == '2':
            if cur == '*':
                two = 6
            elif int(cur) <= 6:
                two = 1
        prev2, prev1 = prev1, (single * prev1 + two * prev2) % MOD
    return prev1
`,

  'longest-palindromic-subsequence': `def longestPalindromeSubseq(s: str) -> int:
    n = len(s)
    dp = [[0] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = 1
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j]:
                dp[i][j] = 2 if length == 2 else dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
    return dp[0][n - 1]
`,

  'palindrome-partitioning-min-cuts': `def minCut(s: str) -> int:
    n = len(s)
    is_palin = [[False] * n for _ in range(n)]
    for i in range(n):
        d = 0
        while i - d >= 0 and i + d < n:
            if s[i - d] == s[i + d]:
                is_palin[i - d][i + d] = True
                d += 1
            else:
                break
        d = 0
        while i - d >= 0 and i + d + 1 < n:
            if s[i - d] == s[i + d + 1]:
                is_palin[i - d][i + d + 1] = True
                d += 1
            else:
                break
    cuts = list(range(n))
    for i in range(1, n):
        if is_palin[0][i]:
            cuts[i] = 0
            continue
        for j in range(1, i + 1):
            if is_palin[j][i]:
                cuts[i] = min(cuts[i], cuts[j - 1] + 1)
    return cuts[n - 1]
`,

  'maximum-product-cutting': `def integerBreak(n: int) -> int:
    dp = [0] * (n + 1)
    for i in range(2, n + 1):
        for j in range(1, i):
            dp[i] = max(dp[i], j * max(i - j, dp[i - j]))
    return dp[n]
`,

  'next-permutation': `def nextPermutation(nums: list[int]) -> list[int]:
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    l, r = i + 1, len(nums) - 1
    while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l += 1
        r -= 1
    return nums
`,

  'interval-list-intersections': `def intervalIntersection(firstList: list[list[int]], secondList: list[list[int]]) -> list[list[int]]:
    res = []
    i, j = 0, 0
    while i < len(firstList) and j < len(secondList):
        lo = max(firstList[i][0], secondList[j][0])
        hi = min(firstList[i][1], secondList[j][1])
        if lo <= hi:
            res.append([lo, hi])
        if firstList[i][1] < secondList[j][1]:
            i += 1
        else:
            j += 1
    return res
`,

  'longest-mountain-in-array': `def longestMountain(arr: list[int]) -> int:
    best = 0
    for k in range(1, len(arr) - 1):
        if arr[k - 1] < arr[k] > arr[k + 1]:
            l, r = k - 1, k + 1
            while l > 0 and arr[l - 1] < arr[l]:
                l -= 1
            while r < len(arr) - 1 and arr[r] > arr[r + 1]:
                r += 1
            best = max(best, r - l + 1)
    return best
`,

  // --- dynamic-programming — hard -------------------------------------------
  'regular-expression-matching': `def isMatch(s: str, p: str) -> bool:
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] in ('.', s[i - 1]):
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
            elif p[j - 1] in ('.', s[i - 1]):
                dp[i][j] = dp[i - 1][j - 1]
    return dp[m][n]
`,
  'partition-equal-subset-sum': `def canPartition(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for j in range(target, num - 1, -1):
            dp[j] = dp[j] or dp[j - num]
    return dp[target]
`,
  'target-sum': `def findTargetSumWays(nums: list[int], target: int) -> int:
    dp = {0: 1}
    for num in nums:
        next_dp: dict[int, int] = {}
        for s, c in dp.items():
            next_dp[s + num] = next_dp.get(s + num, 0) + c
            next_dp[s - num] = next_dp.get(s - num, 0) + c
        dp = next_dp
    return dp.get(target, 0)
`,
  'burst-balloons': `def maxCoins(nums: list[int]) -> int:
    a = [1] + list(nums) + [1]
    n = len(a)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            for k in range(i + 1, j):
                dp[i][j] = max(dp[i][j], dp[i][k] + a[i] * a[k] * a[j] + dp[k][j])
    return dp[0][n - 1]
`,
  'wildcard-matching': `def isMatch(s: str, p: str) -> bool:
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 1]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[i][j] = dp[i - 1][j] or dp[i][j - 1]
            elif p[j - 1] == '?' or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
    return dp[m][n]
`,
  'dungeon-game': `def calculateMinimumHP(dungeon: list[list[int]]) -> int:
    dungeon = [list(row) for row in dungeon]
    m, n = len(dungeon), len(dungeon[0])
    dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]
    dp[m][n - 1] = 1
    dp[m - 1][n] = 1
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            need = min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
            dp[i][j] = max(1, int(need))
    return dp[0][0]
`,

  // --- dynamic-programming — easy -------------------------------------------
  'min-cost-climbing-stairs': `def minCostClimbingStairs(cost):
    n = len(cost)
    dp = list(cost)
    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    return min(dp[n-1], dp[n-2])
`,

  'counting-bits': `def countBits(n):
    ans = [0] * (n + 1)
    for i in range(1, n + 1):
        ans[i] = ans[i >> 1] + (i & 1)
    return ans
`,

  'best-time-buy-sell': `def maxProfit(prices):
    min_price = float('inf')
    profit = 0
    for p in prices:
        min_price = min(min_price, p)
        profit = max(profit, p - min_price)
    return profit
`,

  'search-insert-position': `def searchInsert(nums, target):
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo
`,
  'car-fleet': `def carFleet(target, position, speed):
    pairs = sorted(zip(position, speed), reverse=True)
    stack = []
    for p, s in pairs:
        t = (target - p) / s
        if not stack or t > stack[-1]:
            stack.append(t)
    return len(stack)
`,

  'online-stock-span': `def stockSpannerRunner(prices):
    stack = []
    result = []
    for price in prices:
        span = 1
        while stack and stack[-1][0] <= price:
            span += stack.pop()[1]
        stack.append((price, span))
        result.append(span)
    return result
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
  'find-peak-element': `def findPeakElement(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < nums[mid + 1]:
            lo = mid + 1
        else:
            hi = mid
    return lo
`,
  'minimum-operations-reduce-x': `def minOperations(nums, x):
    target = sum(nums) - x
    if target < 0:
        return -1
    lo = 0
    total = 0
    best = -1
    for hi in range(len(nums)):
        total += nums[hi]
        while total > target:
            total -= nums[lo]
            lo += 1
        if total == target:
            best = max(best, hi - lo + 1)
    return -1 if best == -1 else len(nums) - best
`,
  'sort-list': `def sortArray(nums):
    if len(nums) <= 1:
        return list(nums)
    mid = len(nums) // 2
    left = sortArray(nums[:mid])
    right = sortArray(nums[mid:])
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
`,
  'subarrays-k-distinct': `def subarraysWithKDistinct(nums, k):
    from collections import defaultdict
    def at_most(limit):
        freq = defaultdict(int)
        lo = cnt = 0
        for hi, v in enumerate(nums):
            freq[v] += 1
            while len(freq) > limit:
                freq[nums[lo]] -= 1
                if freq[nums[lo]] == 0:
                    del freq[nums[lo]]
                lo += 1
            cnt += hi - lo + 1
        return cnt
    return at_most(k) - at_most(k - 1)
`,
  'ransom-note': `def canConstruct(ransomNote, magazine):
    from collections import Counter
    m = Counter(magazine)
    for c in ransomNote:
        if m[c] <= 0:
            return False
        m[c] -= 1
    return True
`,
  'isomorphic-strings': `def isIsomorphic(s, t):
    s_to_t = {}
    t_to_s = {}
    for sc, tc in zip(s, t):
        if (sc in s_to_t and s_to_t[sc] != tc) or (tc in t_to_s and t_to_s[tc] != sc):
            return False
        s_to_t[sc] = tc
        t_to_s[tc] = sc
    return True
`,
  'nth-ugly-number': `def nthUglyNumber(n):
    dp = [0] * n
    dp[0] = 1
    i2 = i3 = i5 = 0
    for i in range(1, n):
        nxt = min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5)
        dp[i] = nxt
        if nxt == dp[i2] * 2: i2 += 1
        if nxt == dp[i3] * 3: i3 += 1
        if nxt == dp[i5] * 5: i5 += 1
    return dp[n - 1]
`,
  'maximum-swap': `def maximumSwap(num):
    digits = list(str(num))
    last = {int(d): i for i, d in enumerate(digits)}
    for i, d in enumerate(digits):
        for c in range(9, int(d), -1):
            if last.get(c, -1) > i:
                digits[i], digits[last[c]] = digits[last[c]], digits[i]
                return int(''.join(digits))
    return num
`,
  // --- linked-list -----------------------------------------------------------
  'delete-node-in-linked-list': `def deleteNode(node):
    node.val = node.next.val
    node.next = node.next.next
`,

  'reverse-linked-list': `def reverseList(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
`,
  'linked-list-cycle': `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
`,
  'merge-two-sorted-linked-lists': `def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    curr = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
    curr.next = list1 if list1 else list2
    return dummy.next
`,
  'middle-of-linked-list': `def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
`,
  'palindrome-linked-list': `def isPalindrome(head):
    vals = []
    cur = head
    while cur:
        vals.append(cur.val)
        cur = cur.next
    return vals == vals[::-1]
`,
  'remove-nth-from-end': `def removeNthFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    slow = dummy
    fast = head
    for _ in range(n):
        fast = fast.next
    while fast:
        slow = slow.next
        fast = fast.next
    slow.next = slow.next.next
    return dummy.next
`,
  'odd-even-linked-list': `def oddEvenList(head):
    if not head:
        return head
    odd = head
    even = head.next
    even_head = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    odd.next = even_head
    return head
`,
  'intersection-two-linked-lists': `def getIntersectionNode(headA, headB):
    a, b = headA, headB
    while a is not b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a
`,
  'plus-one': `def plusOne(digits):
    digits = list(digits)
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits
`,
  'length-of-last-word': `def lengthOfLastWord(s):
    s = s.rstrip()
    return len(s) - s.rfind(' ') - 1
`,
  'palindrome-number': `def isPalindrome(x):
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    rev = 0
    while x > rev:
        rev = rev * 10 + x % 10
        x //= 10
    return x == rev or x == rev // 10
`,
  'excel-column-number': `def titleToNumber(columnTitle):
    r = 0
    for c in columnTitle:
        r = r * 26 + (ord(c) - 64)
    return r
`,

  'reorder-list': `def reorderList(head):
    if not head:
        return
    slow, fast = head, head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    prev, curr = None, slow.next
    slow.next = None
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2
`,

  'add-two-numbers': `def addTwoNumbers(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        v1 = l1.val if l1 else 0
        v2 = l2.val if l2 else 0
        total = v1 + v2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    return dummy.next
`,

  'merge-k-sorted-lists': `def mergeKLists(lists):
    import heapq
    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    dummy = ListNode(0)
    curr = dummy
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next
`,

  'swap-nodes-in-pairs': `def swapPairs(head):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    while prev.next and prev.next.next:
        a = prev.next
        b = a.next
        prev.next = b
        a.next = b.next
        b.next = a
        prev = a
    return dummy.next
`,

  'reverse-linked-list-ii': `def reverseBetween(head, left, right):
    dummy = ListNode(0)
    dummy.next = head
    pre = dummy
    for _ in range(left - 1):
        pre = pre.next
    cur = pre.next
    for _ in range(right - left):
        nxt = cur.next
        cur.next = nxt.next
        nxt.next = pre.next
        pre.next = nxt
    return dummy.next
`,

  'rotate-list': `def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head
    n, tail = 1, head
    while tail.next:
        tail = tail.next
        n += 1
    tail.next = head
    step = k % n
    new_tail = head
    for _ in range(n - step - 1):
        new_tail = new_tail.next
    new_head = new_tail.next
    new_tail.next = None
    return new_head
`,

  'remove-linked-list-elements': `def removeElements(head, val):
    dummy = ListNode(0)
    dummy.next = head
    cur = dummy
    while cur.next:
        if cur.next.val == val:
            cur.next = cur.next.next
        else:
            cur = cur.next
    return dummy.next
`,

  'partition-list': `def partition(head, x):
    less_dummy = ListNode(0)
    greater_dummy = ListNode(0)
    less = less_dummy
    greater = greater_dummy
    cur = head
    while cur:
        if cur.val < x:
            less.next = cur
            less = less.next
        else:
            greater.next = cur
            greater = greater.next
        cur = cur.next
    greater.next = None
    less.next = greater_dummy.next
    return less_dummy.next
`,

  '01-matrix': `def updateMatrix(mat):
    from collections import deque
    m, n = len(mat), len(mat[0])
    dist = [[0 if mat[r][c] == 0 else float('inf') for c in range(n)] for r in range(m)]
    queue = deque((r, c) for r in range(m) for c in range(n) if mat[r][c] == 0)
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    while queue:
        r, c = queue.popleft()
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and dist[nr][nc] > dist[r][c] + 1:
                dist[nr][nc] = dist[r][c] + 1
                queue.append((nr, nc))
    return dist
`,

  'flood-fill': `def floodFill(image, sr, sc, color):
    orig = image[sr][sc]
    if orig == color:
        return image
    def dfs(r, c):
        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]):
            return
        if image[r][c] != orig:
            return
        image[r][c] = color
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
    dfs(sr, sc)
    return image
`,

  'number-of-islands': `def numIslands(grid):
    count = 0
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count
`,

  'course-schedule': `def canFinish(numCourses, prerequisites):
    from collections import defaultdict
    adj = defaultdict(list)
    for a, b in prerequisites:
        adj[b].append(a)
    state = [0] * numCourses
    def dfs(node):
        if state[node] == 1:
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for nb in adj[node]:
            if not dfs(nb):
                return False
        state[node] = 2
        return True
    return all(dfs(i) for i in range(numCourses))
`,

  'binary-tree-level-order-bottom': `def levelOrderBottom(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.insert(0, level)
    return result
`,

  'find-duplicate-number': `def findDuplicate(nums):
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow
`,

  'shortest-path-binary-matrix': `def shortestPathBinaryMatrix(grid):
    from collections import deque
    grid = [list(row) for row in grid]
    n = len(grid)
    if grid[0][0] or grid[n-1][n-1]:
        return -1
    if n == 1:
        return 1
    q = deque([(0, 0, 1)])
    grid[0][0] = 1
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    while q:
        r, c, d = q.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                if nr == n-1 and nc == n-1:
                    return d+1
                grid[nr][nc] = 1
                q.append((nr, nc, d+1))
    return -1
`,

  'accounts-merge': `def accountsMerge(accounts):
    parent = {}
    def find(x):
        parent.setdefault(x, x)
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    def union(a, b):
        parent[find(a)] = find(b)
    email_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_name[email] = name
            union(acc[1], email)
    from collections import defaultdict
    groups = defaultdict(list)
    for email in email_name:
        groups[find(email)].append(email)
    result = []
    for root, emails in groups.items():
        result.append([email_name[root]] + sorted(emails))
    return sorted([[a[0]] + sorted(a[1:]) for a in result], key=lambda a: (a[0], a[1] if len(a) > 1 else ''))
`,

  'graph-valid-tree': `def validTree(n, edges):
    if len(edges) != n - 1:
        return False
    parent = list(range(n))
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra == rb:
            return False
        parent[ra] = rb
    return True
`,

  // --- tree -------------------------------------------------------------------
  'balanced-binary-tree': `def isBalanced(root):
    def height(node):
        if not node:
            return 0
        l = height(node.left)
        if l == -1:
            return -1
        r = height(node.right)
        if r == -1:
            return -1
        if abs(l - r) > 1:
            return -1
        return 1 + max(l, r)
    return height(root) != -1
`,

  'minimum-depth-binary-tree': `def minDepth(root):
    if not root:
        return 0
    if not root.left and not root.right:
        return 1
    if not root.left:
        return 1 + minDepth(root.right)
    if not root.right:
        return 1 + minDepth(root.left)
    return 1 + min(minDepth(root.left), minDepth(root.right))
`,

  'max-depth-binary-tree': `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
`,
  'symmetric-tree': `def isSymmetric(root):
    def mirror(a, b):
        if not a and not b:
            return True
        if not a or not b or a.val != b.val:
            return False
        return mirror(a.left, b.right) and mirror(a.right, b.left)
    return not root or mirror(root.left, root.right)
`,
  'invert-binary-tree': `def invertTree(root):
    if not root:
        return None
    root.left, root.right = invertTree(root.right), invertTree(root.left)
    return root
`,

  'binary-tree-paths': `def binaryTreePaths(root):
    paths = []
    def dfs(node, path):
        if not node:
            return
        p = path + '->' + str(node.val) if path else str(node.val)
        if not node.left and not node.right:
            paths.append(p)
            return
        dfs(node.left, p)
        dfs(node.right, p)
    dfs(root, '')
    return paths
`,

  'path-sum': `def hasPathSum(root, targetSum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == targetSum
    return hasPathSum(root.left, targetSum - root.val) or hasPathSum(root.right, targetSum - root.val)
`,

  'same-tree': `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
`,

  'validate-bst': `def isValidBST(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        if node.val <= min_val or node.val >= max_val:
            return False
        return validate(node.left, min_val, node.val) and validate(node.right, node.val, max_val)
    return validate(root, float('-inf'), float('inf'))
`,

  'level-order-traversal': `def levelOrder(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result
`,

  'diameter-of-binary-tree': `def diameterOfBinaryTree(root):
    best = [0]
    def depth(node):
        if not node:
            return 0
        l = depth(node.left)
        r = depth(node.right)
        if l + r > best[0]:
            best[0] = l + r
        return 1 + max(l, r)
    depth(root)
    return best[0]
`,

  'lowest-common-ancestor-bst': `def lowestCommonAncestor(root, p, q):
    if p < root.val and q < root.val:
        return lowestCommonAncestor(root.left, p, q)
    if p > root.val and q > root.val:
        return lowestCommonAncestor(root.right, p, q)
    return root
`,

  'binary-tree-max-path-sum': `def maxPathSum(root):
    best = [float('-inf')]
    def gain(node):
        if not node:
            return 0
        l = max(0, gain(node.left))
        r = max(0, gain(node.right))
        if node.val + l + r > best[0]:
            best[0] = node.val + l + r
        return node.val + max(l, r)
    gain(root)
    return best[0]
`,

  'word-search': `def exist(board, word):
    board = [list(row) for row in board]
    m, n = len(board), len(board[0])
    def dfs(r, c, idx):
        if idx == len(word):
            return True
        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[idx]:
            return False
        ch = board[r][c]
        board[r][c] = '#'
        found = dfs(r+1,c,idx+1) or dfs(r-1,c,idx+1) or dfs(r,c+1,idx+1) or dfs(r,c-1,idx+1)
        board[r][c] = ch
        return found
    for r in range(m):
        for c in range(n):
            if dfs(r, c, 0):
                return True
    return False
`,

  'surrounded-regions': `def solve(board):
    if not board:
        return board
    board = [list(row) for row in board]
    m, n = len(board), len(board[0])
    def mark(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != 'O':
            return
        board[r][c] = 'S'
        mark(r+1, c); mark(r-1, c); mark(r, c+1); mark(r, c-1)
    for r in range(m):
        mark(r, 0); mark(r, n-1)
    for c in range(n):
        mark(0, c); mark(m-1, c)
    for r in range(m):
        for c in range(n):
            if board[r][c] == 'O':
                board[r][c] = 'X'
            elif board[r][c] == 'S':
                board[r][c] = 'O'
    return board
`,

  'find-the-town-judge': `def findJudge(n, trust):
    in_deg = [0] * (n + 1)
    out_deg = [0] * (n + 1)
    for a, b in trust:
        out_deg[a] += 1
        in_deg[b] += 1
    for i in range(1, n + 1):
        if in_deg[i] == n - 1 and out_deg[i] == 0:
            return i
    return -1
`,

  'find-if-path-exists': `def validPath(n, edges, source, destination):
    if source == destination:
        return True
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    visited = set([source])
    queue = [source]
    while queue:
        cur = queue.pop(0)
        for nb in adj[cur]:
            if nb == destination:
                return True
            if nb not in visited:
                visited.add(nb)
                queue.append(nb)
    return False
`,

  'max-area-of-island': `def maxAreaOfIsland(grid):
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 1:
            return 0
        grid[r][c] = 0
        return 1 + dfs(r-1,c) + dfs(r+1,c) + dfs(r,c-1) + dfs(r,c+1)
    best = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                area = dfs(r, c)
                if area > best:
                    best = area
    return best
`,

  'rotting-oranges': `def orangesRotting(grid):
    from collections import deque
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
    minutes = 0
    dirs = [(-1,0),(1,0),(0,-1),(0,1)]
    while queue and fresh > 0:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
        minutes += 1
    return minutes if fresh == 0 else -1
`,

  'keys-and-rooms': `def canVisitAllRooms(rooms):
    visited = {0}
    stack = [0]
    while stack:
        room = stack.pop()
        for key in rooms[room]:
            if key not in visited:
                visited.add(key)
                stack.append(key)
    return len(visited) == len(rooms)
`,

  'network-delay-time': `def networkDelayTime(times, n, k):
    import heapq
    adj = [[] for _ in range(n + 1)]
    for u, v, w in times:
        adj[u].append((v, w))
    dist = [float('inf')] * (n + 1)
    dist[k] = 0
    heap = [(0, k)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(heap, (dist[v], v))
    max_dist = max(dist[1:])
    return max_dist if max_dist < float('inf') else -1
`,

  'word-ladder': `def ladderLength(beginWord, endWord, wordList):
    word_set = set(wordList)
    if endWord not in word_set:
        return 0
    from collections import deque
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    while queue:
        word, length = queue.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i+1:]
                if next_word == endWord:
                    return length + 1
                if next_word in word_set and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, length + 1))
    return 0
`,

  'count-good-nodes': `def goodNodes(root):
    count = [0]
    def dfs(node, max_so_far):
        if not node:
            return
        if node.val >= max_so_far:
            count[0] += 1
        new_max = max(max_so_far, node.val)
        dfs(node.left, new_max)
        dfs(node.right, new_max)
    dfs(root, float('-inf'))
    return count[0]
`,

  'binary-tree-right-side-view': `def rightSideView(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        size = len(queue)
        for i in range(size):
            node = queue.pop(0)
            if i == size - 1:
                result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return result
`,

  'number-of-connected-components': `def countComponents(n, edges):
    parent = list(range(n))
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    components = n
    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra != rb:
            parent[ra] = rb
            components -= 1
    return components
`,

  'clone-graph': `def cloneGraph(node):
    if not node:
        return None
    cloned = {}
    def dfs(n):
        if n.val in cloned:
            return cloned[n.val]
        copy = Node(n.val)
        cloned[n.val] = copy
        copy.neighbors = [dfs(nb) for nb in n.neighbors]
        return copy
    return dfs(node)
`,

  'serialize-binary-tree': `def serialize(root):
    tokens = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            tokens.append('#')
        else:
            tokens.append(str(node.val))
            queue.append(node.left)
            queue.append(node.right)
    return ','.join(tokens)

def deserialize(data):
    parts = data.split(',')
    if not parts or parts[0] == '#':
        return None
    root = TreeNode(int(parts[0]))
    queue = [root]
    i = 1
    while queue and i < len(parts):
        node = queue.pop(0)
        if i < len(parts) and parts[i] != '#':
            node.left = TreeNode(int(parts[i]))
            queue.append(node.left)
        i += 1
        if i < len(parts) and parts[i] != '#':
            node.right = TreeNode(int(parts[i]))
            queue.append(node.right)
        i += 1
    return root
`,

  'flatten-binary-tree': `def flatten(root):
    if not root:
        return
    stack = [root]
    while stack:
        node = stack.pop()
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
        node.left = None
        node.right = stack[-1] if stack else None
`,

  'pacific-atlantic': `def pacificAtlantic(heights):
    rows, cols = len(heights), len(heights[0])
    dirs = [(-1,0),(1,0),(0,-1),(0,1)]
    def bfs(starts):
        reach = [[False]*cols for _ in range(rows)]
        queue = list(starts)
        for r, c in starts:
            reach[r][c] = True
        while queue:
            r, c = queue.pop(0)
            for dr, dc in dirs:
                nr, nc = r+dr, c+dc
                if 0 <= nr < rows and 0 <= nc < cols and not reach[nr][nc] and heights[nr][nc] >= heights[r][c]:
                    reach[nr][nc] = True
                    queue.append((nr, nc))
        return reach
    p_starts = [(r, 0) for r in range(rows)] + [(0, c) for c in range(cols)]
    a_starts = [(r, cols-1) for r in range(rows)] + [(rows-1, c) for c in range(cols)]
    pr = bfs(p_starts)
    ar = bfs(a_starts)
    return [[r, c] for r in range(rows) for c in range(cols) if pr[r][c] and ar[r][c]]
`,

  'kth-smallest-bst': `def kthSmallest(root, k):
    vals = []
    def inorder(node):
        if not node:
            return
        inorder(node.left)
        vals.append(node.val)
        inorder(node.right)
    inorder(root)
    return vals[k - 1]
`,

  'course-schedule-ii': `def findOrder(numCourses, prerequisites):
    from collections import deque
    in_deg = [0] * numCourses
    adj = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        adj[b].append(a)
        in_deg[a] += 1
    queue = deque(i for i in range(numCourses) if in_deg[i] == 0)
    order = []
    while queue:
        cur = queue.popleft()
        order.append(cur)
        for nb in adj[cur]:
            in_deg[nb] -= 1
            if in_deg[nb] == 0:
                queue.append(nb)
    return order if len(order) == numCourses else []
`,

  'construct-binary-tree': `def buildTree(preorder, inorder):
    if not preorder:
        return None
    index_map = {v: i for i, v in enumerate(inorder)}
    pi = [0]
    def build(lo, hi):
        if lo > hi:
            return None
        root_val = preorder[pi[0]]
        pi[0] += 1
        mid = index_map[root_val]
        node = TreeNode(root_val)
        node.left = build(lo, mid - 1)
        node.right = build(mid + 1, hi)
        return node
    return build(0, len(inorder) - 1)
`,

  'zigzag-level-order': `def zigzagLevelOrder(root):
    if not root:
        return []
    result = []
    queue = [root]
    left_to_right = True
    while queue:
        size = len(queue)
        level = []
        for _ in range(size):
            node = queue.pop(0)
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level if left_to_right else level[::-1])
        left_to_right = not left_to_right
    return result
`,

  'sum-root-to-leaf': `def sumNumbers(root):
    def dfs(node, cur):
        if not node:
            return 0
        n = cur * 10 + node.val
        if not node.left and not node.right:
            return n
        return dfs(node.left, n) + dfs(node.right, n)
    return dfs(root, 0)
`,

  'number-of-provinces': `def findCircleNum(isConnected):
    n = len(isConnected)
    visited = [False] * n
    def dfs(i):
        visited[i] = True
        for j in range(n):
            if isConnected[i][j] == 1 and not visited[j]:
                dfs(j)
    provinces = 0
    for i in range(n):
        if not visited[i]:
            dfs(i)
            provinces += 1
    return provinces
`,

  'path-sum-iii': `def pathSum(root, targetSum):
    from collections import defaultdict
    prefix_count = defaultdict(int)
    prefix_count[0] = 1
    count = [0]
    def dfs(node, cur_sum):
        if not node:
            return
        cur_sum += node.val
        count[0] += prefix_count[cur_sum - targetSum]
        prefix_count[cur_sum] += 1
        dfs(node.left, cur_sum)
        dfs(node.right, cur_sum)
        prefix_count[cur_sum] -= 1
    dfs(root, 0)
    return count[0]
`,

  'reverse-nodes-in-k-group': `def reverseKGroup(head, k):
    def count_nodes(node):
        count = 0
        while node and count < k:
            node = node.next
            count += 1
        return count
    if count_nodes(head) < k:
        return head
    prev = None
    cur = head
    for _ in range(k):
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    head.next = reverseKGroup(cur, k)
    return prev
`,

  'redundant-connection': `def findRedundantConnection(edges):
    n = len(edges)
    parent = list(range(n + 1))
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    for u, v in edges:
        pu, pv = find(u), find(v)
        if pu == pv:
            return [u, v]
        parent[pu] = pv
    return []
`,

  'is-graph-bipartite': `def isBipartite(graph):
    from collections import deque
    n = len(graph)
    color = [-1] * n
    for start in range(n):
        if color[start] != -1:
            continue
        color[start] = 0
        queue = deque([start])
        while queue:
            u = queue.popleft()
            for v in graph[u]:
                if color[v] == -1:
                    color[v] = 1 - color[u]
                    queue.append(v)
                elif color[v] == color[u]:
                    return False
    return True
`,

  'all-paths-source-target': `def allPathsSourceTarget(graph):
    n = len(graph)
    result = []
    def dfs(node, path):
        if node == n - 1:
            result.append(list(path))
            return
        for nb in graph[node]:
            path.append(nb)
            dfs(nb, path)
            path.pop()
    dfs(0, [0])
    return result
`,

  'house-robber-iii': `def rob(root):
    def dp(node):
        if not node:
            return (0, 0)
        ll, ls = dp(node.left)
        rl, rs = dp(node.right)
        return (node.val + ls + rs, max(ll, ls) + max(rl, rs))
    r, s = dp(root)
    return max(r, s)
`,

  'maximum-width-binary-tree': `def widthOfBinaryTree(root):
    if not root:
        return 0
    max_width = 0
    queue = [(root, 0)]
    while queue:
        left_idx = queue[0][1]
        right_idx = left_idx
        next_queue = []
        for node, idx in queue:
            right_idx = idx
            norm = idx - left_idx
            if node.left:
                next_queue.append((node.left, 2 * norm))
            if node.right:
                next_queue.append((node.right, 2 * norm + 1))
        max_width = max(max_width, right_idx - left_idx + 1)
        queue = next_queue
    return max_width
`,

  'minimum-height-trees': `def findMinHeightTrees(n, edges):
    if n == 1:
        return [0]
    from collections import defaultdict, deque
    adj = defaultdict(set)
    deg = [0] * n
    for a, b in edges:
        adj[a].add(b)
        adj[b].add(a)
        deg[a] += 1
        deg[b] += 1
    leaves = deque(i for i in range(n) if deg[i] == 1)
    remaining = n
    while remaining > 2:
        remaining -= len(leaves)
        next_leaves = deque()
        for _ in range(len(leaves)):
            l = leaves.popleft()
            for nb in adj[l]:
                adj[nb].discard(l)
                deg[nb] -= 1
                if deg[nb] == 1:
                    next_leaves.append(nb)
        leaves = next_leaves
    return sorted(leaves)
`,

  'triangle': `def minimumTotal(triangle):
    dp = list(triangle[-1])
    for i in range(len(triangle) - 2, -1, -1):
        for j in range(i + 1):
            dp[j] = triangle[i][j] + min(dp[j], dp[j + 1])
    return dp[0]
`,

  'interleaving-string': `def isInterleave(s1, s2, s3):
    if len(s1) + len(s2) != len(s3):
        return False
    dp = [[False] * (len(s2) + 1) for _ in range(len(s1) + 1)]
    dp[0][0] = True
    for i in range(1, len(s1) + 1):
        dp[i][0] = dp[i-1][0] and s1[i-1] == s3[i-1]
    for j in range(1, len(s2) + 1):
        dp[0][j] = dp[0][j-1] and s2[j-1] == s3[j-1]
    for i in range(1, len(s1) + 1):
        for j in range(1, len(s2) + 1):
            dp[i][j] = (s1[i-1] == s3[i+j-1] and dp[i-1][j]) or (s2[j-1] == s3[i+j-1] and dp[i][j-1])
    return dp[len(s1)][len(s2)]
`,

  'find-eventual-safe-states': `def eventualSafeNodes(graph):
    n = len(graph)
    state = [0] * n  # 0=unvisited, 1=in-progress, 2=safe
    def dfs(node):
        if state[node] == 1:
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for nb in graph[node]:
            if not dfs(nb):
                state[node] = 1
                return False
        state[node] = 2
        return True
    return [i for i in range(n) if dfs(i)]
`,

  'lowest-common-ancestor-binary-tree': `def lowestCommonAncestor(root, p, q):
    if not root:
        return None
    if root is p or root is q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right
`,

  'reverse-vowels': `def reverseVowels(s):
    vowels = set('aeiouAEIOU')
    arr = list(s)
    l, r = 0, len(arr) - 1
    while l < r:
        while l < r and arr[l] not in vowels:
            l += 1
        while l < r and arr[r] not in vowels:
            r -= 1
        if l < r:
            arr[l], arr[r] = arr[r], arr[l]
            l += 1
            r -= 1
    return ''.join(arr)
`,

  'fizz-buzz': `def fizzBuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append('FizzBuzz')
        elif i % 3 == 0:
            result.append('Fizz')
        elif i % 5 == 0:
            result.append('Buzz')
        else:
            result.append(str(i))
    return result
`,

  'lucky-numbers-in-matrix': `def luckyNumbers(matrix):
    matrix = [list(row) for row in matrix]
    m, n = len(matrix), len(matrix[0])
    result = []
    for i in range(m):
        min_val = min(matrix[i])
        min_col = matrix[i].index(min_val)
        if max(matrix[k][min_col] for k in range(m)) == min_val:
            result.append(min_val)
    return result
`,

  'check-sorted-rotated': `def check(nums):
    nums = list(nums)
    n = len(nums)
    count = sum(1 for i in range(n) if nums[i] > nums[(i + 1) % n])
    return count <= 1
`,

  'maximum-vowels': `def maxVowels(s, k):
    vowels = set('aeiou')
    count = best = 0
    for i in range(len(s)):
        if s[i] in vowels:
            count += 1
        if i >= k and s[i - k] in vowels:
            count -= 1
        best = max(best, count)
    return best
`,

  'longest-subarray-after-deleting': `def longestSubarray(nums):
    nums = list(nums)
    left = zeros = best = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > 1:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        best = max(best, right - left)
    return best
`,

  'gas-station': `def canCompleteCircuit(gas, cost):
    gas = list(gas)
    cost = list(cost)
    total = tank = start = 0
    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        total += diff
        tank += diff
        if tank < 0:
            start = i + 1
            tank = 0
    return start if total >= 0 else -1
`,

  'minimum-cost-tickets': `def mincostTickets(days, costs):
    day_set = set(days)
    dp = [0] * 366
    for i in range(1, 366):
        if i not in day_set:
            dp[i] = dp[i - 1]
        else:
            dp[i] = min(dp[i-1] + costs[0], dp[max(0,i-7)] + costs[1], dp[max(0,i-30)] + costs[2])
    return dp[365]
`,

  'max-subarray-circular': `def maxSubarraySumCircular(nums):
    nums = list(nums)
    total_sum = 0
    max_sum = nums[0]
    min_sum = nums[0]
    cur_max = 0
    cur_min = 0
    for n in nums:
        cur_max = max(cur_max + n, n)
        max_sum = max(max_sum, cur_max)
        cur_min = min(cur_min + n, n)
        min_sum = min(min_sum, cur_min)
        total_sum += n
    return max(max_sum, total_sum - min_sum) if max_sum > 0 else max_sum
`,

  'squares-of-sorted-array': `def sortedSquares(nums):
    nums = list(nums)
    left, right = 0, len(nums) - 1
    result = [0] * len(nums)
    pos = len(nums) - 1
    while left <= right:
        lsq, rsq = nums[left] ** 2, nums[right] ** 2
        if lsq > rsq:
            result[pos] = lsq
            left += 1
        else:
            result[pos] = rsq
            right -= 1
        pos -= 1
    return result
`,

  'minimum-absolute-difference': `def minimumAbsDifference(arr):
    arr = sorted(arr)
    best = float('inf')
    for i in range(1, len(arr)):
        best = min(best, arr[i] - arr[i-1])
    return [[arr[i-1], arr[i]] for i in range(1, len(arr)) if arr[i] - arr[i-1] == best]
`,

  'count-negatives-in-sorted-matrix': `def countNegatives(grid):
    count = 0
    for row in grid:
        l, r = 0, len(row)
        while l < r:
            m = (l + r) // 2
            if row[m] < 0:
                r = m
            else:
                l = m + 1
        count += len(row) - l
    return count
`,

  'k-closest-points': `def kClosestRunner(points, k):
    pts = [list(p) for p in points]
    return sorted(pts, key=lambda p: (p[0]*p[0]+p[1]*p[1], p[0], p[1]))[:k]
`,

  'top-k-frequent-words': `def topKFrequent(words, k):
    from collections import Counter
    freq = Counter(words)
    return sorted(freq.keys(), key=lambda w: (-freq[w], w))[:k]
`,

  'find-disappeared-numbers': `def findDisappearedNumbers(nums):
    nums = list(nums)
    for n in nums:
        idx = abs(n) - 1
        if nums[idx] > 0:
            nums[idx] = -nums[idx]
    return [i + 1 for i in range(len(nums)) if nums[i] > 0]
`,

  'spiral-matrix-ii': `def generateMatrix(n):
    mat = [[0] * n for _ in range(n)]
    top, bottom, left, right, num = 0, n - 1, 0, n - 1, 1
    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            mat[top][i] = num
            num += 1
        top += 1
        for i in range(top, bottom + 1):
            mat[i][right] = num
            num += 1
        right -= 1
        if top <= bottom:
            for i in range(right, left - 1, -1):
                mat[bottom][i] = num
                num += 1
            bottom -= 1
        if left <= right:
            for i in range(bottom, top - 1, -1):
                mat[i][left] = num
                num += 1
            left += 1
    return mat
`,

  'max-consecutive-ones-iii': `def longestOnes(nums, k):
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

  'jump-game-iii': `def canReach(arr, start):
    from collections import deque
    n = len(arr)
    visited = [False] * n
    queue = deque([start])
    visited[start] = True
    while queue:
        i = queue.popleft()
        if arr[i] == 0:
            return True
        for nxt in [i - arr[i], i + arr[i]]:
            if 0 <= nxt < n and not visited[nxt]:
                visited[nxt] = True
                queue.append(nxt)
    return False
`,

  'coin-change-ii': `def change(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    return dp[amount]
`,

  'best-time-buy-sell-cooldown': `def maxProfit(prices):
    if len(prices) <= 1:
        return 0
    held = -prices[0]
    sold = 0
    rest = 0
    for i in range(1, len(prices)):
        ph, ps, pr = held, sold, rest
        held = max(ph, pr - prices[i])
        sold = ph + prices[i]
        rest = max(pr, ps)
    return max(sold, rest)
`,

  'longest-arithmetic-subsequence': `def longestArithSeqLength(nums):
    n = len(nums)
    dp = [{} for _ in range(n)]
    best = 2
    for i in range(1, n):
        for j in range(i):
            diff = nums[i] - nums[j]
            prev = dp[j].get(diff, 1)
            cur = prev + 1
            dp[i][diff] = max(dp[i].get(diff, 0), cur)
            best = max(best, cur)
    return best
`,

  'combination-sum-ii': `def combinationSum2(candidates, target):
    candidates = sorted(candidates)
    result = []
    def bt(start, rem, cur):
        if rem == 0:
            result.append(list(cur))
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i-1]:
                continue
            if candidates[i] > rem:
                break
            cur.append(candidates[i])
            bt(i + 1, rem - candidates[i], cur)
            cur.pop()
    bt(0, target, [])
    return result
`,

  'combination-sum-iii': `def combinationSumIII(k, n):
    result = []
    def bt(start, rem, cur):
        if len(cur) == k and rem == 0:
            result.append(cur[:])
            return
        if len(cur) == k or rem <= 0:
            return
        for d in range(start, 10):
            cur.append(d)
            bt(d + 1, rem - d, cur)
            cur.pop()
    bt(1, n, [])
    return sorted([sorted(c) for c in result])
`,

  'number-of-dice-rolls': `def numRollsToTarget(n, k, target):
    MOD = 10**9 + 7
    dp = [0] * (target + 1)
    dp[0] = 1
    for _ in range(n):
        nxt = [0] * (target + 1)
        for t in range(target + 1):
            if not dp[t]:
                continue
            for face in range(1, k + 1):
                if t + face <= target:
                    nxt[t + face] = (nxt[t + face] + dp[t]) % MOD
        dp = nxt
    return dp[target]
`,

  'unique-paths-ii': `def uniquePathsWithObstacles(obstacleGrid):
    m, n = len(obstacleGrid), len(obstacleGrid[0])
    dp = [[0] * n for _ in range(m)]
    for i in range(m):
        if obstacleGrid[i][0] == 1:
            break
        dp[i][0] = 1
    for j in range(n):
        if obstacleGrid[0][j] == 1:
            break
        dp[0][j] = 1
    for i in range(1, m):
        for j in range(1, n):
            if obstacleGrid[i][j] == 0:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]
`,

  'word-search-ii': `def findWords(board, words):
    trie = {}
    for word in words:
        node = trie
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node['$'] = word
    result = []
    m, n = len(board), len(board[0])
    def dfs(r, c, node):
        ch = board[r][c]
        if ch not in node:
            return
        nxt = node[ch]
        if '$' in nxt:
            result.append(nxt['$'])
            del nxt['$']
        board[r][c] = '#'
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc2 = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc2 < n and board[nr][nc2] != '#':
                dfs(nr, nc2, nxt)
        board[r][c] = ch
    for r in range(m):
        for c in range(n):
            dfs(r, c, trie)
    return sorted(result)
`,

  'letter-case-permutation': `def letterCasePermutation(s):
    result = []
    def bt(i, cur):
        if i == len(s):
            result.append(''.join(cur))
            return
        ch = s[i]
        if ch.isdigit():
            cur.append(ch)
            bt(i + 1, cur)
            cur.pop()
        else:
            cur.append(ch.lower())
            bt(i + 1, cur)
            cur.pop()
            cur.append(ch.upper())
            bt(i + 1, cur)
            cur.pop()
    bt(0, [])
    return sorted(result)
`,


  'combinations': `def combine(n, k):
    result = []
    def bt(start, cur):
        if len(cur) == k:
            result.append(cur[:])
            return
        for i in range(start, n - (k - len(cur)) + 2):
            cur.append(i)
            bt(i + 1, cur)
            cur.pop()
    bt(1, [])
    return result
`,

  'alien-dictionary': `def alienOrder(words):
    from collections import defaultdict, deque
    chars = set(c for w in words for c in w)
    adj = defaultdict(set)
    indeg = {c: 0 for c in chars}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        if len(w1) > len(w2) and w1.startswith(w2):
            return ''
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                if c2 not in adj[c1]:
                    adj[c1].add(c2)
                    indeg[c2] += 1
                break
    queue = deque(sorted(c for c in chars if indeg[c] == 0))
    result = []
    while queue:
        c = queue.popleft()
        result.append(c)
        for nb in sorted(adj[c]):
            indeg[nb] -= 1
            if indeg[nb] == 0:
                queue.append(nb)
        queue = deque(sorted(queue))
    return ''.join(result) if len(result) == len(chars) else ''
`,

  'critical-connections': `def criticalConnections(n, connections):
    from collections import defaultdict
    adj = defaultdict(list)
    for u, v in connections:
        adj[u].append(v)
        adj[v].append(u)
    disc = [-1] * n
    low = [0] * n
    bridges = []
    timer = [0]
    def dfs(u, parent):
        disc[u] = low[u] = timer[0]
        timer[0] += 1
        for v in adj[u]:
            if v == parent:
                continue
            if disc[v] == -1:
                dfs(v, u)
                low[u] = min(low[u], low[v])
                if low[v] > disc[u]:
                    bridges.append([min(u, v), max(u, v)])
            else:
                low[u] = min(low[u], disc[v])
    for i in range(n):
        if disc[i] == -1:
            dfs(i, -1)
    return sorted(bridges)
`,

  'vertical-order-traversal': `def verticalTraversal(root):
    if root is None:
        return []
    nodes = []
    def dfs(node, row, col):
        if node is None:
            return
        nodes.append((col, row, node.val))
        dfs(node.left, row + 1, col - 1)
        dfs(node.right, row + 1, col + 1)
    dfs(root, 0, 0)
    nodes.sort()
    from collections import defaultdict
    col_map = defaultdict(list)
    for col, row, val in nodes:
        col_map[col].append(val)
    return [col_map[c] for c in sorted(col_map)]
`,

  'longest-increasing-path-matrix': `def longestIncreasingPath(matrix):
    m, n = len(matrix), len(matrix[0])
    memo = [[0] * n for _ in range(m)]
    def dfs(i, j):
        if memo[i][j]:
            return memo[i][j]
        best = 1
        for di, dj in [(-1,0),(1,0),(0,-1),(0,1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and matrix[ni][nj] > matrix[i][j]:
                best = max(best, 1 + dfs(ni, nj))
        memo[i][j] = best
        return best
    return max(dfs(i, j) for i in range(m) for j in range(n))
`,

  'find-min-rotated-ii': `def findMin(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        elif nums[mid] < nums[hi]:
            hi = mid
        else:
            hi -= 1
    return nums[lo]
`,

  'number-of-substrings': `def numberOfSubstrings(s):
    count = [0, 0, 0]
    left = 0
    result = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('a')] += 1
        while count[0] > 0 and count[1] > 0 and count[2] > 0:
            result += len(s) - right
            count[ord(s[left]) - ord('a')] -= 1
            left += 1
    return result
`,

  'single-number': `def singleNumber(nums):
    result = 0
    for n in nums:
        result ^= n
    return result
`,

  'house-robber-ii': `def rob(nums):
    if len(nums) == 1:
        return nums[0]
    def rob_range(lo, hi):
        prev2, prev1 = 0, 0
        for i in range(lo, hi + 1):
            cur = max(prev1, prev2 + nums[i])
            prev2, prev1 = prev1, cur
        return prev1
    return max(rob_range(0, len(nums) - 2), rob_range(1, len(nums) - 1))
`,

  'wiggle-subsequence': `def wiggleMaxLength(nums):
    if len(nums) < 2:
        return len(nums)
    up = down = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            up = down + 1
        elif nums[i] < nums[i - 1]:
            down = up + 1
    return max(up, down)
`,

  'missing-ranges': `def findMissingRanges(nums, lower, upper):
    result = []
    prev = lower - 1
    for i in range(len(nums) + 1):
        cur = nums[i] if i < len(nums) else upper + 1
        if cur - prev >= 2:
            if cur - prev == 2:
                result.append(str(prev + 1))
            else:
                result.append(f'{prev + 1}->{cur - 1}')
        prev = cur
    return result
`,

  'excel-sheet-column-title': `def convertToTitle(columnNumber):
    result = ''
    n = columnNumber
    while n > 0:
        n -= 1
        result = chr(65 + n % 26) + result
        n //= 26
    return result
`,

  'number-of-1-bits': `def hammingWeight(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count
`,

  'longest-palindrome-build': `def longestPalindrome(s):
    from collections import Counter
    freq = Counter(s)
    length = sum(c // 2 * 2 for c in freq.values())
    has_odd = any(c % 2 == 1 for c in freq.values())
    return length + (1 if has_odd else 0)
`,

  'power-of-three': `def isPowerOfThree(n):
    if n <= 0:
        return False
    while n % 3 == 0:
        n //= 3
    return n == 1
`,

  'reverse-bits': `def reverseBits(n):
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result
`,

  'game-of-life': `def gameOfLife(board):
    board = [[int(board[r][c]) for c in range(len(board[r]))] for r in range(len(board))]
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    snapshot = [row[:] for row in board]
    for r in range(m):
        for c in range(n):
            live = sum(
                1 for dr, dc in dirs
                if 0 <= r+dr < m and 0 <= c+dc < n and snapshot[r+dr][c+dc] == 1
            )
            if snapshot[r][c] == 1:
                board[r][c] = 1 if live in (2, 3) else 0
            else:
                board[r][c] = 1 if live == 3 else 0
    return board
`,

  'count-and-say': `def countAndSay(n):
    s = '1'
    for _ in range(n - 1):
        next_s = ''
        j = 0
        while j < len(s):
            count = 1
            while j + count < len(s) and s[j + count] == s[j]:
                count += 1
            next_s += str(count) + s[j]
            j += count
        s = next_s
    return s
`,

  'beautiful-arrangement': `def countArrangement(n):
    visited = [False] * (n + 1)
    count = [0]
    def bt(pos):
        if pos > n:
            count[0] += 1
            return
        for k in range(1, n + 1):
            if not visited[k] and (k % pos == 0 or pos % k == 0):
                visited[k] = True
                bt(pos + 1)
                visited[k] = False
    bt(1)
    return count[0]
`,

  'expression-add-operators': `def addOperators(num, target):
    result = []
    def bt(start, expr, val, last_mul):
        if start == len(num):
            if val == target:
                result.append(expr)
            return
        for length in range(1, len(num) - start + 1):
            s = num[start:start + length]
            if len(s) > 1 and s[0] == '0':
                break
            cur = int(s)
            if start == 0:
                bt(length, s, cur, cur)
            else:
                bt(start + length, expr + '+' + s, val + cur, cur)
                bt(start + length, expr + '-' + s, val - cur, -cur)
                bt(start + length, expr + '*' + s, val - last_mul + last_mul * cur, last_mul * cur)
    bt(0, '', 0, 0)
    return result
`,

  'insert-interval': `def insert(intervals, newInterval):
    result = []
    start, end = newInterval
    i = 0
    while i < len(intervals) and intervals[i][1] < start:
        result.append(intervals[i])
        i += 1
    while i < len(intervals) and intervals[i][0] <= end:
        start = min(start, intervals[i][0])
        end = max(end, intervals[i][1])
        i += 1
    result.append([start, end])
    result.extend(intervals[i:])
    return result
`,

  'sum-of-two-integers': `def getSum(a, b):
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    return a if b == 0 else a & mask | -(~(a & mask) + 1) & ~mask
`,

  'majority-element-ii': `def majorityElementII(nums):
    c1, c2, cnt1, cnt2 = 0, 1, 0, 0
    for n in nums:
        if n == c1:
            cnt1 += 1
        elif n == c2:
            cnt2 += 1
        elif cnt1 == 0:
            c1, cnt1 = n, 1
        elif cnt2 == 0:
            c2, cnt2 = n, 1
        else:
            cnt1 -= 1
            cnt2 -= 1
    cnt1 = cnt2 = 0
    for n in nums:
        if n == c1:
            cnt1 += 1
        elif n == c2:
            cnt2 += 1
    result = []
    threshold = len(nums) / 3
    if cnt1 > threshold:
        result.append(c1)
    if cnt2 > threshold:
        result.append(c2)
    return sorted(result)
`,

  'contains-duplicate-ii': `def containsNearbyDuplicate(nums, k):
    seen = set()
    for i, n in enumerate(nums):
        if n in seen:
            return True
        seen.add(n)
        if len(seen) > k:
            seen.discard(nums[i - k])
    return False
`,

  'pascals-triangle': `def generate(numRows):
    result = []
    for i in range(numRows):
        row = [1]
        for j in range(1, i):
            row.append(result[i-1][j-1] + result[i-1][j])
        if i > 0:
            row.append(1)
        result.append(row)
    return result
`,

  'single-number-ii': `def singleNumber(nums):
    ones, twos = 0, 0
    for n in nums:
        ones = (ones ^ n) & ~twos
        twos = (twos ^ n) & ~ones
    return ones
`,

  'goal-parser': `def interpret(command):
    return command.replace('()', 'o').replace('(al)', 'al')
`,

  'shuffle-the-array': `def shuffle(nums, n):
    result = []
    for i in range(n):
        result.append(nums[i])
        result.append(nums[i + n])
    return result
`,

  'count-items-matching-rule': `def countMatches(items, ruleKey, ruleValue):
    idx = {'type': 0, 'color': 1, 'name': 2}[ruleKey]
    return sum(1 for item in items if item[idx] == ruleValue)
`,

  'richest-customer-wealth': `def maximumWealth(accounts):
    return max(sum(row) for row in accounts)
`,

  'maximum-units-on-truck': `def maximumUnits(boxTypes, truckSize):
    boxTypes = sorted([list(b) for b in boxTypes], key=lambda x: -x[1])
    total = 0
    for count, units in boxTypes:
        take = min(count, truckSize)
        total += take * units
        truckSize -= take
        if truckSize == 0:
            break
    return total
`,

  'find-the-difference': `def findTheDifference(s, t):
    c = 0
    for ch in s:
        c ^= ord(ch)
    for ch in t:
        c ^= ord(ch)
    return chr(c)
`,

  'reverse-only-letters': `def reverseOnlyLetters(s):
    arr = list(s)
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        while lo < hi and not arr[lo].isalpha():
            lo += 1
        while lo < hi and not arr[hi].isalpha():
            hi -= 1
        if lo < hi:
            arr[lo], arr[hi] = arr[hi], arr[lo]
            lo += 1
            hi -= 1
    return ''.join(arr)
`,

  'backspace-string-compare': `def backspaceCompare(s, t):
    def build(st):
        stack = []
        for c in st:
            if c == '#':
                if stack:
                    stack.pop()
            else:
                stack.append(c)
        return ''.join(stack)
    return build(s) == build(t)
`,

  'number-of-steps': `def numberOfSteps(num):
    steps = 0
    while num > 0:
        if num % 2 == 0:
            num >>= 1
        else:
            num -= 1
        steps += 1
    return steps
`,

  'summary-ranges': `def summaryRanges(nums):
    result = []
    i = 0
    while i < len(nums):
        start = nums[i]
        while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:
            i += 1
        if nums[i] == start:
            result.append(str(start))
        else:
            result.append(f'{start}->{nums[i]}')
        i += 1
    return result
`,

  'longest-turbulent-subarray': `def maxTurbulenceSize(arr):
    if len(arr) < 2:
        return len(arr)
    ans = inc = dec = 1
    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            inc = dec + 1
            dec = 1
        elif arr[i] < arr[i - 1]:
            dec = inc + 1
            inc = 1
        else:
            inc = dec = 1
        ans = max(ans, inc, dec)
    return ans
`,

  'minimum-genetic-mutation': `def minMutation(startGene, endGene, bank):
    from collections import deque
    bank_set = set(bank)
    queue = deque([(startGene, 0)])
    visited = {startGene}
    while queue:
        gene, steps = queue.popleft()
        if gene == endGene:
            return steps
        for i in range(8):
            for c in 'ACGT':
                if c == gene[i]:
                    continue
                nxt = gene[:i] + c + gene[i+1:]
                if nxt in bank_set and nxt not in visited:
                    visited.add(nxt)
                    queue.append((nxt, steps + 1))
    return -1
`,

  'largest-divisible-subset': `def largestDivisibleSubset(nums):
    nums = sorted(nums)
    n = len(nums)
    dp = [1] * n
    parent = [-1] * n
    max_len, max_idx = 1, 0
    for i in range(1, n):
        for j in range(i):
            if nums[i] % nums[j] == 0 and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j
        if dp[i] > max_len:
            max_len = dp[i]
            max_idx = i
    result = []
    idx = max_idx
    while idx != -1:
        result.append(nums[idx])
        idx = parent[idx]
    return sorted(result)
`,

  'min-stack': `def minStackRunner(ops, args):
    st, min_st = [], []
    result = []
    for op, a in zip(ops, args):
        if op == 'push':
            v = a[0]
            st.append(v)
            if not min_st or v <= min_st[-1]:
                min_st.append(v)
            result.append(None)
        elif op == 'pop':
            v = st.pop()
            if v == min_st[-1]:
                min_st.pop()
            result.append(None)
        elif op == 'top':
            result.append(st[-1])
        elif op == 'getMin':
            result.append(min_st[-1])
        else:
            result.append(None)
    return result
`,

  'restore-ip-addresses': `def restoreIpAddresses(s):
    result = []
    def bt(start, parts):
        if len(parts) == 4 and start == len(s):
            result.append('.'.join(parts))
            return
        if len(parts) == 4 or start == len(s):
            return
        remaining = len(s) - start
        parts_left = 4 - len(parts)
        if remaining < parts_left or remaining > parts_left * 3:
            return
        for length in range(1, 4):
            if start + length > len(s):
                break
            part = s[start:start + length]
            if length > 1 and part[0] == '0':
                break
            if int(part) > 255:
                break
            parts.append(part)
            bt(start + length, parts)
            parts.pop()
    bt(0, [])
    return result
`,

  'valid-anagram': `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    from collections import Counter
    return Counter(s) == Counter(t)
`,

  'defanging-ip-address': `def defangIPaddr(address):
    return address.replace('.', '[.]')
`,

  'kids-with-candies': `def kidsWithCandies(candies, extraCandies):
    max_c = max(candies)
    return [c + extraCandies >= max_c for c in candies]
`,

  'monotonic-array': `def isMonotonic(nums):
    inc = dec = True
    for i in range(1, len(nums)):
        if nums[i] > nums[i-1]: dec = False
        if nums[i] < nums[i-1]: inc = False
    return inc or dec
`,

  'build-array-from-permutation': `def buildArray(nums):
    return [nums[nums[i]] for i in range(len(nums))]
`,

  'decode-xored-array': `def decode(encoded, first):
    arr = [first]
    for e in encoded:
        arr.append(arr[-1] ^ e)
    return arr
`,

  'replace-elements-with-greatest': `def replaceElements(arr):
    arr = list(arr)
    max_val = -1
    for i in range(len(arr) - 1, -1, -1):
        cur = arr[i]
        arr[i] = max_val
        if cur > max_val:
            max_val = cur
    return arr
`,

  'highest-altitude': `def largestAltitude(gain):
    max_alt, cur = 0, 0
    for g in gain:
        cur += g
        max_alt = max(max_alt, cur)
    return max_alt
`,

  'sign-of-product-array': `def arraySign(nums):
    neg = 0
    for n in nums:
        if n == 0: return 0
        if n < 0: neg += 1
    return 1 if neg % 2 == 0 else -1
`,

  'maximum-difference-increasing-elements': `def maximumDifference(nums):
    min_val, ans = nums[0], -1
    for i in range(1, len(nums)):
        if nums[i] > min_val:
            ans = max(ans, nums[i] - min_val)
        else:
            min_val = nums[i]
    return ans
`,

  'cells-in-range': `def cellsInRange(s):
    c1, r1, c2, r2 = ord(s[0]), int(s[1]), ord(s[3]), int(s[4])
    result = []
    for c in range(c1, c2 + 1):
        for r in range(r1, r2 + 1):
            result.append(chr(c) + str(r))
    return result
`,

  'find-all-numbers-disappeared': `def findDisappearedNumbers(nums):
    n = len(nums)
    seen = set(nums)
    return [i for i in range(1, n + 1) if i not in seen]
`,

  'check-if-n-and-double-exist': `def checkIfExist(arr):
    seen = set()
    for x in arr:
        if x * 2 in seen or (x % 2 == 0 and x // 2 in seen):
            return True
        seen.add(x)
    return False
`,

  'largest-number-at-least-twice': `def dominantIndex(nums):
    max_idx = nums.index(max(nums))
    for i, v in enumerate(nums):
        if i != max_idx and nums[max_idx] < 2 * v:
            return -1
    return max_idx
`,

  'special-positions-binary-matrix': `def numSpecial(mat):
    count = 0
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            if mat[i][j] == 1:
                if sum(mat[i]) == 1 and sum(row[j] for row in mat) == 1:
                    count += 1
    return count
`,

  'matrix-diagonal-sum': `def diagonalSum(mat):
    n = len(mat)
    total = sum(mat[i][i] + mat[i][n - 1 - i] for i in range(n))
    if n % 2 == 1:
        total -= mat[n // 2][n // 2]
    return total
`,

  'sort-array-by-parity': `def sortArrayByParity(nums):
    return [x for x in nums if x % 2 == 0] + [x for x in nums if x % 2 != 0]
`,

  'left-and-right-sum-differences': `def leftRigthDifference(nums):
    total = sum(nums)
    result = []
    left = 0
    for x in nums:
        right = total - left - x
        result.append(abs(left - right))
        left += x
    return result
`,

  'minimum-value-positive-step-sum': `def minStartValue(nums):
    min_prefix = 0
    cur = 0
    for n in nums:
        cur += n
        if cur < min_prefix:
            min_prefix = cur
    return max(1, 1 - min_prefix)
`,

  'count-number-of-pairs': `def countKDifference(nums, k):
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if abs(nums[i] - nums[j]) == k:
                count += 1
    return count
`,

  'minimum-sum-mountain-triplet': `def minimumSum(nums):
    ans = float('inf')
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                if nums[i] < nums[j] and nums[k] < nums[j]:
                    ans = min(ans, nums[i] + nums[j] + nums[k])
    return ans if ans != float('inf') else -1
`,

  'add-digits': `def addDigits(num):
    if num == 0:
        return 0
    return 9 if num % 9 == 0 else num % 9
`,

  'degree-of-array': `def findShortestSubArray(nums):
    count, first, last = {}, {}, {}
    for i, n in enumerate(nums):
        count[n] = count.get(n, 0) + 1
        if n not in first:
            first[n] = i
        last[n] = i
    deg = max(count.values())
    return min(last[n] - first[n] + 1 for n, c in count.items() if c == deg)
`,

  'check-array-arithmetic-progression': `def canMakeArithmeticProgression(arr):
    arr.sort()
    diff = arr[1] - arr[0]
    return all(arr[i] - arr[i-1] == diff for i in range(2, len(arr)))
`,

  'how-many-numbers-smaller-than-current': `def smallerNumbersThanCurrent(nums):
    sorted_nums = sorted(nums)
    return [sorted_nums.index(n) for n in nums]
`,

  'find-target-indices-after-sorting': `def targetIndices(nums, target):
    nums_sorted = sorted(nums)
    return [i for i, n in enumerate(nums_sorted) if n == target]
`,

  'max-average-subarray': `def findMaxAverage(nums, k):
    window = sum(nums[:k])
    max_sum = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        if window > max_sum:
            max_sum = window
    return max_sum / k
`,

  'consecutive-characters': `def maxPower(s):
    max_p = cur = 1
    for i in range(1, len(s)):
        cur = cur + 1 if s[i] == s[i-1] else 1
        if cur > max_p:
            max_p = cur
    return max_p
`,

  'count-items-with-the-given-sum': `def maxFrequencyElements(nums):
    from collections import Counter
    freq = Counter(nums)
    max_f = max(freq.values())
    return sum(c for c in freq.values() if c == max_f)
`,

  'number-of-employees-can-meet': `def numberOfEmployeesWhoMetTarget(hours, target):
    return sum(1 for h in hours if h >= target)
`,

  'partition-array-according-to-given-pivot': `def pivotArray(nums, pivot):
    return [x for x in nums if x < pivot] + [x for x in nums if x == pivot] + [x for x in nums if x > pivot]
`,

  'sort-even-odd-indices': `def sortEvenOdd(nums):
    evens = sorted(nums[::2])
    odds = sorted(nums[1::2], reverse=True)
    result = []
    ei = oi = 0
    for i in range(len(nums)):
        if i % 2 == 0:
            result.append(evens[ei]); ei += 1
        else:
            result.append(odds[oi]); oi += 1
    return result
`,

  'percentage-of-letter-in-string': `def percentageLetter(s, letter):
    return int(s.count(letter) / len(s) * 100)
`,

  'count-common-words-one-occurrence': `def countWords(words1, words2):
    from collections import Counter
    c1 = Counter(list(words1))
    c2 = Counter(list(words2))
    return sum(1 for w, cnt in c1.items() if cnt == 1 and c2[w] == 1)
`,

  'convert-temperature': `def convertTemperature(celsius):
    return [celsius + 273.15, celsius * 1.8 + 32]
`,

  'determine-if-string-halves-alike': `def halvesAreAlike(s):
    vowels = set('aeiouAEIOU')
    half = len(s) // 2
    return sum(1 for c in s[:half] if c in vowels) == sum(1 for c in s[half:] if c in vowels)
`,

  'check-two-strings-almost-equivalent': `def checkAlmostEquivalent(word1, word2):
    from collections import Counter
    c1 = Counter(word1)
    c2 = Counter(word2)
    for ch in 'abcdefghijklmnopqrstuvwxyz':
        if abs(c1[ch] - c2[ch]) > 3:
            return False
    return True
`,

  'rearrange-characters-to-make-target': `def rearrangeCharacters(s, target):
    from collections import Counter
    sc = Counter(s)
    tc = Counter(target)
    return min(sc[c] // cnt for c, cnt in tc.items())
`,

  'divide-string-into-groups': `def divideString(s, k, fill):
    remainder = len(s) % k
    if remainder:
        s = s + fill * (k - remainder)
    return [s[i:i+k] for i in range(0, len(s), k)]
`,

  'count-vowel-substrings': `def countVowelSubstrings(word):
    vowels = set('aeiou')
    count = 0
    for i in range(len(word)):
        if word[i] not in vowels:
            continue
        seen = set()
        for j in range(i, len(word)):
            if word[j] not in vowels:
                break
            seen.add(word[j])
            if len(seen) == 5:
                count += 1
    return count
`,

  'check-prefix-string': `def isPrefixString(s, words):
    built = ''
    for w in words:
        built += w
        if built == s:
            return True
        if len(built) >= len(s):
            return False
    return False
`,

  'sum-digits-string-convert': `def getLucky(s, k):
    num_str = ''.join(str(ord(c) - 96) for c in s)
    total = sum(int(d) for d in num_str)
    for _ in range(k - 1):
        total = sum(int(d) for d in str(total))
    return total
`,

  'maximum-number-of-string-pairs': `def maximumNumberOfStringPairs(words):
    seen = set()
    pairs = 0
    for w in words:
        rev = w[::-1]
        if rev in seen:
            pairs += 1
        else:
            seen.add(w)
    return pairs
`,

  'count-pairs-sum-less-than-target': `def countPairs(nums, target):
    nums = sorted(nums)
    lo, hi, count = 0, len(nums) - 1, 0
    while lo < hi:
        if nums[lo] + nums[hi] < target:
            count += hi - lo
            lo += 1
        else:
            hi -= 1
    return count
`,

  'neither-minimum-nor-maximum': `def findNonMinOrMax(nums):
    if len(nums) < 3:
        return -1
    mn, mx = min(nums), max(nums)
    for n in nums:
        if n != mn and n != mx:
            return n
    return -1
`,

  'count-vowel-strings-in-range': `def vowelStringsInRange(words, left, right):
    vowels = set('aeiou')
    count = 0
    for i in range(left, right + 1):
        w = words[i]
        if w[0] in vowels and w[-1] in vowels:
            count += 1
    return count
`,

  'find-kth-positive': `def findKthPositive(arr, k):
    missing = 0
    i = 0
    num = 1
    while True:
        if i < len(arr) and arr[i] == num:
            i += 1
        else:
            missing += 1
            if missing == k:
                return num
        num += 1
`,

  'minimum-length-string-operations': `def minLength(s):
    stack = []
    for c in s:
        if stack and ((stack[-1] == 'A' and c == 'B') or (stack[-1] == 'C' and c == 'D')):
            stack.pop()
        else:
            stack.append(c)
    return len(stack)
`,

  'largest-integer-digit-swaps': `def largestInteger(num):
    digits = [int(d) for d in str(num)]
    odds = sorted((d for d in digits if d % 2 == 1), reverse=True)
    evens = sorted((d for d in digits if d % 2 == 0), reverse=True)
    oi = ei = 0
    result = []
    for d in digits:
        if d % 2 == 1:
            result.append(odds[oi])
            oi += 1
        else:
            result.append(evens[ei])
            ei += 1
    return int(''.join(map(str, result)))
`,

  'count-fair-pairs': `def countFairPairs(nums, lower, upper):
    nums = sorted(nums)
    def count_le(limit):
        lo, hi, c = 0, len(nums) - 1, 0
        while lo < hi:
            if nums[lo] + nums[hi] <= limit:
                c += hi - lo
                lo += 1
            else:
                hi -= 1
        return c
    return count_le(upper) - count_le(lower - 1)
`,

  'minimum-average-difference': `def minimumAverageDifference(nums):
    n = len(nums)
    total = sum(nums)
    prefix = 0
    min_diff = float('inf')
    ans = 0
    for i in range(n):
        prefix += nums[i]
        left = prefix // (i + 1)
        right = (total - prefix) // (n - i - 1) if i < n - 1 else 0
        diff = abs(left - right)
        if diff < min_diff:
            min_diff = diff
            ans = i
    return ans
`,

  'concatenation-of-array': `def getConcatenation(nums):
    return list(nums) + list(nums)
`,

  'third-maximum-number': `def thirdMax(nums):
    distinct = sorted(set(nums), reverse=True)
    return distinct[2] if len(distinct) >= 3 else distinct[0]
`,

  'count-odd-numbers-in-interval': `def countOdds(low, high):
    def count_odd(n):
        return (n + 1) // 2
    return count_odd(high) - count_odd(low - 1)
`,

  'maximum-product-three-numbers': `def maximumProduct(nums):
    nums = sorted(nums)
    n = len(nums)
    return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])
`,

  'average-salary-excluding-min-max': `def average(salary):
    salary = list(salary)
    return (sum(salary) - min(salary) - max(salary)) / (len(salary) - 2)
`,

  'find-n-unique-integers-sum-to-zero': `def sumZero(n):
    result = list(range(1, n))
    result.append(-sum(result))
    return result
`,

  'truncate-sentence': `def truncateSentence(s, k):
    return ' '.join(s.split()[:k])
`,

  'largest-perimeter-triangle': `def largestPerimeter(nums):
    nums = sorted(list(nums), reverse=True)
    for i in range(len(nums) - 2):
        if nums[i+1] + nums[i+2] > nums[i]:
            return nums[i] + nums[i+1] + nums[i+2]
    return 0
`,

  'to-lower-case': `def toLowerCase(s):
    return s.lower()
`,

  'check-if-two-string-arrays-equivalent': `def arrayStringsAreEqual(word1, word2):
    return ''.join(word1) == ''.join(word2)
`,

  'sum-of-unique-elements': `def sumOfUnique(nums):
    from collections import Counter
    c = Counter(nums)
    return sum(k for k, v in c.items() if v == 1)
`,

  'find-winners': `def findWinners(matches):
    from collections import defaultdict
    losses = defaultdict(int)
    for w, l in matches:
        if w not in losses:
            losses[w] = 0
        losses[l] += 1
    zero = sorted(p for p, lc in losses.items() if lc == 0)
    one = sorted(p for p, lc in losses.items() if lc == 1)
    return [zero, one]
`,

  'count-number-of-texts': `def countTexts(pressedKeys):
    MOD = 10**9 + 7
    n = len(pressedKeys)
    dp = [0] * (n + 1)
    dp[0] = 1
    for i in range(1, n + 1):
        c = pressedKeys[i - 1]
        dp[i] = dp[i - 1]
        if i >= 2 and pressedKeys[i - 2] == c:
            dp[i] = (dp[i] + dp[i - 2]) % MOD
            if i >= 3 and pressedKeys[i - 3] == c:
                dp[i] = (dp[i] + dp[i - 3]) % MOD
                if c in '79' and i >= 4 and pressedKeys[i - 4] == c:
                    dp[i] = (dp[i] + dp[i - 4]) % MOD
    return dp[n]
`,

  'word-pattern': `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words):
        return False
    char_to_word, word_to_char = {}, {}
    for c, w in zip(pattern, words):
        if char_to_word.get(c, w) != w or word_to_char.get(w, c) != c:
            return False
        char_to_word[c] = w
        word_to_char[w] = c
    return True
`,

  'maximum-product-word-lengths': `def maxProduct(words):
    masks = []
    for w in words:
        m = 0
        for c in w:
            m |= 1 << (ord(c) - ord('a'))
        masks.append(m)
    best = 0
    for i in range(len(words)):
        for j in range(i + 1, len(words)):
            if (masks[i] & masks[j]) == 0:
                best = max(best, len(words[i]) * len(words[j]))
    return best
`,

  'detect-capital': `def detectCapitalUse(word):
    uppers = sum(1 for c in word if c.isupper())
    return uppers == len(word) or uppers == 0 or (uppers == 1 and word[0].isupper())
`,

  'repeated-substring-pattern': `def repeatedSubstringPattern(s):
    n = len(s)
    for length in range(1, n // 2 + 1):
        if n % length != 0:
            continue
        pattern = s[:length]
        if pattern * (n // length) == s:
            return True
    return False
`,

  'find-pivot-index': `def pivotIndex(nums):
    total = sum(nums)
    left = 0
    for i, v in enumerate(nums):
        if left == total - left - v:
            return i
        left += v
    return -1
`,

  'path-crossing': `def isPathCrossing(path):
    visited = {(0, 0)}
    x, y = 0, 0
    for d in path:
        if d == 'N': y += 1
        elif d == 'S': y -= 1
        elif d == 'E': x += 1
        else: x -= 1
        if (x, y) in visited:
            return True
        visited.add((x, y))
    return False
`,

  // --- heap — easy -----------------------------------------------------------
  'last-stone-weight': `def lastStoneWeight(stones):
    import heapq
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        y = -heapq.heappop(heap)
        x = -heapq.heappop(heap)
        if y != x:
            heapq.heappush(heap, -(y - x))
    return -heap[0] if heap else 0
`,

  // --- heap — medium ---------------------------------------------------------

  'kth-largest-in-stream': `def kthLargestRunner(k, nums, adds):
    import heapq
    heap = list(nums)
    heapq.heapify(heap)
    while len(heap) > k:
        heapq.heappop(heap)
    result = []
    for val in adds:
        heapq.heappush(heap, val)
        if len(heap) > k:
            heapq.heappop(heap)
        result.append(heap[0])
    return result
`,

  // --- heap — hard -----------------------------------------------------------
  'median-from-data-stream': `def medianFinderRunner(ops, args):
    import heapq
    lo = []  # max-heap (negated)
    hi = []  # min-heap
    def add_num(num):
        heapq.heappush(lo, -num)
        if hi and -lo[0] > hi[0]:
            heapq.heappush(hi, -heapq.heappop(lo))
        if len(lo) > len(hi) + 1:
            heapq.heappush(hi, -heapq.heappop(lo))
        elif len(hi) > len(lo):
            heapq.heappush(lo, -heapq.heappop(hi))
    def find_median():
        if len(lo) == len(hi):
            return (-lo[0] + hi[0]) / 2
        return float(-lo[0])
    result = []
    for op, a in zip(ops, args):
        if op == 'addNum':
            add_num(a[0])
            result.append(None)
        elif op == 'findMedian':
            result.append(find_median())
        else:
            result.append(None)
    return result
`,

  'minimum-cost-to-connect-sticks': `def connectSticks(sticks):
    import heapq
    heap = [int(x) for x in sticks]
    heapq.heapify(heap)
    cost = 0
    while len(heap) > 1:
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        combined = a + b
        cost += combined
        heapq.heappush(heap, combined)
    return cost
`,

  'reorganize-string': `def reorganizeString(s):
    from collections import Counter
    freq = Counter(s)
    n = len(s)
    entries = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    if entries[0][1] > (n + 1) // 2:
        return ''
    result = [''] * n
    pos = 0
    for char, count in entries:
        for _ in range(count):
            if pos >= n:
                pos = 1
            result[pos] = char
            pos += 2
    return ''.join(result)
`,

  'check-if-pangram': `def checkIfPangram(sentence):
    return len(set(sentence)) >= 26
`,

  'is-power-of-four': `def isPowerOfFour(n):
    return n > 0 and (n & (n - 1)) == 0 and (n & 0xAAAAAAAA) == 0
`,

  'longest-word-in-dictionary': `def longestWord(words):
    word_set = set(words)
    best = ''
    for word in words:
        valid = all(word[:i] in word_set for i in range(1, len(word)))
        if valid:
            if len(word) > len(best) or (len(word) == len(best) and word < best):
                best = word
    return best
`,

  'valid-mountain-array': `def validMountainArray(arr):
    n = len(arr)
    if n < 3:
        return False
    i = 0
    while i + 1 < n and arr[i] < arr[i + 1]:
        i += 1
    if i == 0 or i == n - 1:
        return False
    while i + 1 < n and arr[i] > arr[i + 1]:
        i += 1
    return i == n - 1
`,

  'can-place-flowers': `def canPlaceFlowers(flowerbed, n):
    bed = flowerbed[:]
    for i in range(len(bed)):
        if bed[i] == 0 and (i == 0 or bed[i-1] == 0) and (i == len(bed)-1 or bed[i+1] == 0):
            bed[i] = 1
            n -= 1
    return n <= 0
`,

  'number-complement': `def findComplement(num):
    mask = 1
    while mask <= num:
        mask <<= 1
    return (mask - 1) ^ num
`,

  'maximum-average-subarray': `def findMaxAverage(nums, k):
    total = sum(nums[:k])
    best = total
    for i in range(k, len(nums)):
        total += nums[i] - nums[i - k]
        if total > best:
            best = total
    return best / k
`,

  'range-sum-query': `
def sumRange(nums, left, right):
    return sum(nums[left:right+1])
`,


  'reverse-string-ii': `def reverseStr(s, k):
    arr = list(s)
    for i in range(0, len(arr), 2 * k):
        arr[i:i+k] = arr[i:i+k][::-1]
    return ''.join(arr)
`,

  'to-hex': `def toHex(num):
    if num == 0:
        return '0'
    return format(num & 0xFFFFFFFF, 'x')
`,

  'jewels-and-stones': `def numJewelsInStones(jewels, stones):
    jewel_set = set(jewels)
    return sum(1 for s in stones if s in jewel_set)
`,

  'find-words-from-chars': `def countCharacters(words, chars):
    from collections import Counter
    freq = Counter(chars)
    total = 0
    for word in words:
        wf = Counter(word)
        if all(wf[c] <= freq[c] for c in wf):
            total += len(word)
    return total
`,
  'rotate-string': `
def rotateString(s, goal):
    return len(s) == len(goal) and goal in s + s
`,

  'implement-trie': `def trieRunner(ops, words):
    trie = Trie()
    result = []
    for op, word in zip(ops, words):
        if op == 'insert':
            trie.insert(word)
            result.append(None)
        elif op == 'search':
            result.append(trie.search(word))
        elif op == 'startsWith':
            result.append(trie.startsWith(word))
        else:
            result.append(None)
    return result

class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node['#'] = True
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node: return False
            node = node[ch]
        return '#' in node
    def startsWith(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node: return False
            node = node[ch]
        return True
`,

  'custom-sort-string': `
def customSortString(order, s):
    from collections import Counter
    freq = Counter(s)
    result = []
    for c in order:
        if c in freq:
            result.append(c * freq[c])
            del freq[c]
    for c in sorted(freq):
        result.append(c * freq[c])
    return ''.join(result)
`,

  'copy-list-with-random-pointer': `
def copyRandomListRunner(arr):
    if not arr:
        return []
    return [[val, ri] for val, ri in arr]
`,

  'implement-queue-using-stacks': `
def queueOps(operations, values):
    inbox, outbox = [], []
    def pour():
        while inbox:
            outbox.append(inbox.pop())
    result = []
    for op, val in zip(operations, values):
        if op == 'push':
            inbox.append(int(val))
        elif op == 'pop':
            if not outbox: pour()
            result.append(outbox.pop())
        elif op == 'peek':
            if not outbox: pour()
            result.append(outbox[-1])
        elif op == 'empty':
            result.append(len(inbox) == 0 and len(outbox) == 0)
    return result
`,

  'binary-tree-pruning': `
def pruneTreeRunner(arr):
    a = list(arr)
    if not a: return []
    def _safe_int(v):
        try: return int(v)
        except: return None
    # Build tree as list of [val, left_idx, right_idx], using compact BFS parsing
    n = len(a)
    vals = [_safe_int(v) for v in a]
    left_c = [None] * n
    right_c = [None] * n
    bfs = [0]; ptr = 1
    for ni in bfs:
        if ptr < n:
            if vals[ptr] is not None:
                left_c[ni] = ptr; bfs.append(ptr)
            ptr += 1
        if ptr < n:
            if vals[ptr] is not None:
                right_c[ni] = ptr; bfs.append(ptr)
            ptr += 1
    def contains_one(i):
        if i is None: return False
        return vals[i] == 1 or contains_one(left_c[i]) or contains_one(right_c[i])
    def prune(i):
        if i is None: return None
        left_c[i] = prune(left_c[i])
        right_c[i] = prune(right_c[i])
        if vals[i] == 0 and left_c[i] is None and right_c[i] is None:
            return None
        return i
    root = prune(0)
    if root is None: return []
    result = []; out_q = [0]
    while out_q:
        i = out_q.pop(0)
        if i is None: result.append(None); continue
        result.append(vals[i])
        l, r = left_c[i], right_c[i]
        if l is not None or r is not None:
            out_q.append(l); out_q.append(r)
    while result and result[-1] is None: result.pop()
    return result
`,

  'count-complete-tree-nodes': `
def countNodesRunner(arr):
    a = list(arr)
    if not a: return 0
    def _ok(v):
        try: int(v); return True
        except: return False
    return sum(1 for v in a if _ok(v))
`,

  'populating-next-right-pointers': `
def connectTree(arr):
    a = list(arr)
    if not a: return []
    result = []
    size = 1; i = 0
    while i < len(a):
        level = []
        for _ in range(size):
            if i < len(a):
                level.append(a[i]); i += 1
        if level: result.append(level)
        size *= 2
    return result
`,

  'range-sum-query-2d': `
def sumRegion(matrix, row1, col1, row2, col2):
    total = 0
    for r in range(row1, row2 + 1):
        for c in range(col1, col2 + 1):
            total += matrix[r][c]
    return total
`,

  'find-anagram-mappings': `
def anagramMappings(nums1, nums2):
    nums2_list = list(nums2)
    idx = {v: i for i, v in enumerate(nums2_list)}
    return [idx[v] for v in nums1]
`,

  'maximum-product-two-elements': `
def maxProduct(nums):
    a = sorted(nums, reverse=True)
    return (a[0]-1)*(a[1]-1)
`,

  'find-k-closest-elements': `
def findClosestElements(arr, k, x):
    a = list(arr)
    lo, hi = 0, len(a) - k
    while lo < hi:
        mid = (lo + hi) // 2
        if x - a[mid] > a[mid+k] - x:
            lo = mid + 1
        else:
            hi = mid
    return a[lo:lo+k]
`,

  'string-compression': `
def compress(s):
    result = ''
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]:
            j += 1
        result += s[i]
        if j - i > 1:
            result += str(j - i)
        i = j
    return len(result)
`,

  'maximum-69-number': `
def maximum69Number(num):
    return int(str(num).replace('6', '9', 1))
`,

  'count-of-matches-tournament': `
def numberOfMatches(n):
    return n - 1
`,

  'sort-characters-by-frequency': `
def frequencySort(s):
    from collections import Counter
    freq = Counter(s)
    chars = sorted(freq.keys(), key=lambda c: (-freq[c], c))
    return ''.join(c * freq[c] for c in chars)
`,

  'minimum-operations-alternating': `def minimumOperations(nums):
    from collections import Counter
    n = len(nums)
    even_freq = Counter(nums[i] for i in range(0, n, 2))
    odd_freq = Counter(nums[i] for i in range(1, n, 2))
    def top2(freq):
        items = sorted(freq.items(), key=lambda x: -x[1])
        first = items[0] if items else (None, 0)
        second = items[1] if len(items) > 1 else (None, 0)
        return first, second
    (ev1, ef1), (_, ef2) = top2(even_freq)
    (ov1, of1), (_, of2) = top2(odd_freq)
    if ev1 != ov1:
        return n - ef1 - of1
    return n - max(ef1 + of2, ef2 + of1)
`,

  'largest-altitude': `def largestAltitude(gain):
    alt = max_alt = 0
    for g in gain:
        alt += g
        max_alt = max(max_alt, alt)
    return max_alt
`,

  'increasing-triplet-subsequence': `def increasingTriplet(nums):
    first = second = float('inf')
    for n in nums:
        if n <= first:
            first = n
        elif n <= second:
            second = n
        else:
            return True
    return False
`,

  'number-of-rectangles': `def countGoodRectangles(rectangles):
    sides = [min(l, w) for l, w in rectangles]
    max_len = max(sides)
    return sum(1 for s in sides if s == max_len)
`,

  'determine-if-halves-alike': `def halvesAreAlike(s):
    vowels = set('aeiouAEIOU')
    half = len(s) // 2
    return sum(1 for c in s[:half] if c in vowels) == sum(1 for c in s[half:] if c in vowels)
`,

  'maximum-nesting-depth': `def maxDepth(s):
    depth = max_depth = 0
    for c in s:
        if c == '(':
            depth += 1
            max_depth = max(max_depth, depth)
        elif c == ')':
            depth -= 1
    return max_depth
`,

  'count-primes-less-than': `def countPrimes(n):
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

  'number-of-students-eating-lunch': `
def countStudents(students, sandwiches):
    s = list(students)
    w = list(sandwiches)
    zeros = sum(1 for x in s if x == 0)
    ones = len(s) - zeros
    for sandwich in w:
        if sandwich == 0 and zeros > 0:
            zeros -= 1
        elif sandwich == 1 and ones > 0:
            ones -= 1
        else:
            return zeros + ones
    return 0
`,

  'two-sum-less-than-k': `
def twoSumLessThanK(nums, k):
    a = sorted(nums)
    lo, hi, best = 0, len(a)-1, -1
    while lo < hi:
        s = a[lo] + a[hi]
        if s < k:
            best = max(best, s)
            lo += 1
        else:
            hi -= 1
    return best
`,

  'find-smallest-letter-greater-than-target': `
def nextGreatestLetter(letters, target):
    a = list(letters)
    lo, hi = 0, len(a)
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] <= target:
            lo = mid + 1
        else:
            hi = mid
    return a[lo % len(a)]
`,

  'minimum-difference-k-scores': `
def minimumDifference(nums, k):
    a = sorted(nums)
    return min(a[i+k-1] - a[i] for i in range(len(a)-k+1))
`,

  'two-out-of-three': `
def twoOutOfThree(nums1, nums2, nums3):
    s1, s2, s3 = set(nums1), set(nums2), set(nums3)
    result = set()
    for v in s1:
        if v in s2 or v in s3: result.add(v)
    for v in s2:
        if v in s1 or v in s3: result.add(v)
    return sorted(result)
`,

  'sum-of-odd-length-subarrays': `
def sumOddLengthSubarrays(arr):
    a = list(arr)
    total = 0
    length = len(a)
    for l in range(1, length+1, 2):
        for i in range(length - l + 1):
            total += sum(a[i:i+l])
    return total
`,

  'stone-game': `
def stoneGame(piles):
    piles = list(piles)
    n = len(piles)
    dp = [[0] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = piles[i]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])
    return dp[0][n-1] > 0
`,

  'robot-bounded-in-circle': `
def isRobotBounded(instructions):
    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    x, y, d = 0, 0, 0
    for c in instructions:
        if c == 'G':
            x += dirs[d][0]; y += dirs[d][1]
        elif c == 'L':
            d = (d + 3) % 4
        else:
            d = (d + 1) % 4
    return (x == 0 and y == 0) or d != 0
`,

  'zigzag-conversion': `
def convert(s, numRows):
    if numRows == 1:
        return s
    rows = [''] * numRows
    row, direction = 0, -1
    for c in s:
        rows[row] += c
        if row == 0 or row == numRows - 1:
            direction = -direction
        row += direction
    return ''.join(rows)
`,

  'merge-sorted-array': `
def mergeSortedRunner(nums1, m, nums2, n):
    a = list(nums1[:m]) + [0] * n
    b = list(nums2[:n])
    p1, p2, p = m - 1, n - 1, m + n - 1
    while p2 >= 0:
        if p1 >= 0 and a[p1] > b[p2]:
            a[p] = a[p1]; p1 -= 1
        else:
            a[p] = b[p2]; p2 -= 1
        p -= 1
    return a
`,

  'minimum-moves-equal-array': `
def minMoves(nums):
    nums = list(nums)
    return sum(nums) - min(nums) * len(nums)
`,

  'multiply-strings': `
def multiply(num1, num2):
    m, n = len(num1), len(num2)
    pos = [0] * (m + n)
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            p1, p2 = i + j, i + j + 1
            s = mul + pos[p2]
            pos[p2] = s % 10
            pos[p1] += s // 10
    result = ''.join(map(str, pos)).lstrip('0')
    return result or '0'
`,

  'count-triplets-xor': `
def countTriplets(arr):
    arr = list(arr)
    n = len(arr)
    count = 0
    for i in range(n - 1):
        xor = arr[i]
        for k in range(i + 1, n):
            xor ^= arr[k]
            if xor == 0:
                count += k - i
    return count
`,

  'water-and-jug': `
def canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity):
    from math import gcd
    if targetCapacity == 0:
        return True
    if targetCapacity > jug1Capacity + jug2Capacity:
        return False
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0
`,

  'find-center-of-star-graph': `
def findCenter(edges):
    edges = [list(e) for e in edges]
    a, b = edges[0]
    c, d = edges[1]
    return a if a == c or a == d else b
`,

  'maximum-frequency-stack': `
def freqStackRunner(ops, vals):
    freq = {}
    group = {}
    max_freq = 0
    result = []
    ops_list = list(ops)
    vals_list = list(vals)
    for op, val in zip(ops_list, vals_list):
        if op == 'push':
            f = freq.get(val, 0) + 1
            freq[val] = f
            if f not in group:
                group[f] = []
            group[f].append(val)
            if f > max_freq:
                max_freq = f
            result.append(None)
        else:
            val = group[max_freq].pop()
            freq[val] -= 1
            if not group[max_freq]:
                max_freq -= 1
            result.append(val)
    return result
`,

  'shuffle-string': `def restoreString(s, indices):
    result = [''] * len(s)
    for i, c in enumerate(s):
        result[indices[i]] = c
    return ''.join(result)
`,

  'subtract-product-and-sum': `def subtractProductAndSum(n):
    product, total = 1, 0
    while n > 0:
        d = n % 10
        product *= d
        total += d
        n //= 10
    return product - total
`,

  'find-numbers-even-digits': `def findNumbers(nums):
    return sum(1 for n in nums if len(str(n)) % 2 == 0)
`,

  'check-if-all-characters-appear-twice': `
def areOccurrencesEqual(s):
    from collections import Counter
    counts = Counter(s)
    return len(set(counts.values())) == 1
`,

  'find-difference-of-two-arrays': `
def findDifference(nums1, nums2):
    s1, s2 = set(nums1), set(nums2)
    return [sorted(v for v in s1 if v not in s2), sorted(v for v in s2 if v not in s1)]
`,

  'rearrange-array-elements-by-sign': `
def rearrangeArray(nums):
    a = list(nums)
    pos = [x for x in a if x > 0]
    neg = [x for x in a if x < 0]
    result = []
    for i in range(len(pos)):
        result.append(pos[i])
        result.append(neg[i])
    return result
`,

  'number-of-zero-filled-subarrays': `
def zeroFilledSubarray(nums):
    a = list(nums)
    total = run = 0
    for n in a:
        if n == 0:
            run += 1
            total += run
        else:
            run = 0
    return total
`,

  'minimum-recolors-to-get-k-consecutive-black': `
def minimumRecolors(blocks, k):
    whites = blocks[:k].count('W')
    min_w = whites
    for i in range(k, len(blocks)):
        if blocks[i] == 'W': whites += 1
        if blocks[i-k] == 'W': whites -= 1
        min_w = min(min_w, whites)
    return min_w
`,

  'assign-cookies': `def findContentChildren(g, s):
    g_s = sorted(g)
    s_s = sorted(s)
    count = j = 0
    for greed in g_s:
        while j < len(s_s) and s_s[j] < greed:
            j += 1
        if j < len(s_s):
            count += 1
            j += 1
    return count
`,

  'relative-ranks': `def findRelativeRanks(score):
    sorted_idx = sorted(range(len(score)), key=lambda i: -score[i])
    medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    result = [''] * len(score)
    for rank, idx in enumerate(sorted_idx):
        result[idx] = medals[rank] if rank < 3 else str(rank + 1)
    return result
`,

  'base-7': `def convertToBase7(num):
    if num == 0:
        return '0'
    neg = num < 0
    n, result = abs(num), ''
    while n > 0:
        result = str(n % 7) + result
        n //= 7
    return ('-' + result) if neg else result
`,

  'maximum-count': `def maximumCount(nums):
    neg = sum(1 for n in nums if n < 0)
    pos = sum(1 for n in nums if n > 0)
    return max(neg, pos)
`,

  'minimum-recolors': `def minimumRecolors(blocks, k):
    whites = blocks[:k].count('W')
    min_w = whites
    for i in range(k, len(blocks)):
        whites += (blocks[i] == 'W') - (blocks[i - k] == 'W')
        min_w = min(min_w, whites)
    return min_w
`,

  'decode-the-message': `def decodeMessage(key, message):
    mapping = {}
    idx = 0
    for c in key:
        if c != ' ' and c not in mapping:
            mapping[c] = chr(ord('a') + idx)
            idx += 1
    return ''.join(mapping.get(c, ' ') for c in message)
`,

  'remove-trailing-zeros': `def removeTrailingZeros(num):
    return num.rstrip('0')
`,

  'reverse-prefix-of-word': `def reversePrefix(word, ch):
    idx = word.find(ch)
    if idx == -1:
        return word
    return word[:idx+1][::-1] + word[idx+1:]
`,

  'count-words-with-given-prefix': `def prefixCount(words, pref):
    return sum(1 for w in words if w.startswith(pref))
`,

  'largest-odd-number-in-string': `def largestOddNumber(num):
    for i in range(len(num) - 1, -1, -1):
        if int(num[i]) % 2 == 1:
            return num[:i+1]
    return ''
`,

  'toeplitz-matrix': `
def isToeplitzMatrix(matrix):
    if hasattr(matrix, 'to_py'):
        matrix = matrix.to_py()
    rows = [list(r.to_py()) if hasattr(r, 'to_py') else list(r) for r in matrix]
    for i in range(1, len(rows)):
        for j in range(1, len(rows[0])):
            if rows[i][j] != rows[i-1][j-1]:
                return False
    return True
`,

  'transpose-matrix': `
def transpose(matrix):
    if hasattr(matrix, 'to_py'):
        matrix = matrix.to_py()
    rows = [list(r.to_py()) if hasattr(r, 'to_py') else list(r) for r in matrix]
    m, n = len(rows), len(rows[0])
    return [[rows[i][j] for i in range(m)] for j in range(n)]
`,

  'maximum-number-of-balloons': `
def maxNumberOfBalloons(text):
    from collections import Counter
    freq = Counter(text)
    return min(freq['b'], freq['a'], freq['l']//2, freq['o']//2, freq['n'])
`,

  'count-characters': `
def countCharacters(words, chars):
    if hasattr(words, 'to_py'):
        words = words.to_py()
    if hasattr(chars, 'to_py'):
        chars = chars.to_py()
    words = [str(w) for w in words]
    chars = str(chars)
    from collections import Counter
    freq = Counter(chars)
    total = 0
    for word in words:
        wfreq = Counter(word)
        if all(wfreq[c] <= freq[c] for c in wfreq):
            total += len(word)
    return total
`,

  'validate-stack-sequences': `
def validateStackSequences(pushed, popped):
    pushed = list(pushed)
    popped = list(popped)
    stack = []
    j = 0
    for val in pushed:
        stack.append(val)
        while stack and stack[-1] == popped[j]:
            stack.pop()
            j += 1
    return len(stack) == 0
`,

  '132-pattern': `
def find132pattern(nums):
    nums = list(nums)
    stack = []
    min3 = float('-inf')
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] < min3:
            return True
        while stack and stack[-1] < nums[i]:
            min3 = stack.pop()
        stack.append(nums[i])
    return False
`,

  'frequency-of-most-frequent-element': `
def maxFrequency(nums, k):
    nums = sorted(nums)
    left = 0
    total = 0
    result = 0
    for right in range(len(nums)):
        total += nums[right]
        while nums[right] * (right - left + 1) - total > k:
            total -= nums[left]
            left += 1
        result = max(result, right - left + 1)
    return result
`,

  'find-common-characters': `
def commonChars(words):
    words = list(words)
    min_freq = [float('inf')] * 26
    for word in words:
        freq = [0] * 26
        for c in word:
            freq[ord(c) - 97] += 1
        for i in range(26):
            min_freq[i] = min(min_freq[i], freq[i])
    result = []
    for i in range(26):
        result.extend([chr(97 + i)] * int(min_freq[i]))
    return result
`,

  'minimum-rounds-to-complete-tasks': `
def minimumRounds(tasks):
    from collections import Counter
    freq = Counter(list(tasks))
    rounds = 0
    for f in freq.values():
        if f == 1:
            return -1
        rounds += (f + 2) // 3
    return rounds
`,

  'minimum-steps-make-anagram': `
def minSteps(s, t):
    freq = [0] * 26
    for c in s:
        freq[ord(c) - 97] += 1
    for c in t:
        freq[ord(c) - 97] -= 1
    return sum(-v for v in freq if v < 0)
`,

  'find-words-formed-by-characters': `
def countCharacters(words, chars):
    words = list(words)
    char_freq = [0] * 26
    for c in chars:
        char_freq[ord(c) - 97] += 1
    total = 0
    for word in words:
        w_freq = [0] * 26
        for c in word:
            w_freq[ord(c) - 97] += 1
        if all(w_freq[i] <= char_freq[i] for i in range(26)):
            total += len(word)
    return total
`,

  'sum-of-left-leaves': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def sumOfLeftLeavesRunner(arr):
    return sumOfLeftLeaves(__from_array__(arr))

def sumOfLeftLeaves(root):
    def dfs(node, is_left):
        if not node:
            return 0
        if not node.left and not node.right:
            return node.val if is_left else 0
        return dfs(node.left, True) + dfs(node.right, False)
    return dfs(root, False)
`,

  'leaf-similar-trees': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def leafSimilarRunner(arr1, arr2):
    return leafSimilar(__from_array__(arr1), __from_array__(arr2))

def leafSimilar(root1, root2):
    def get_leaves(node):
        if not node:
            return []
        if not node.left and not node.right:
            return [node.val]
        return get_leaves(node.left) + get_leaves(node.right)
    return get_leaves(root1) == get_leaves(root2)
`,

  'total-cost-hire-k-workers': `def totalCost(costs, k, candidates):
    import heapq
    n = len(costs)
    heap = []
    lo, hi = 0, n - 1
    for i in range(candidates):
        if lo <= hi:
            heapq.heappush(heap, (costs[lo], lo))
            lo += 1
    for i in range(candidates):
        if hi >= lo:
            heapq.heappush(heap, (costs[hi], hi))
            hi -= 1
    total = 0
    for _ in range(k):
        cost, idx = heapq.heappop(heap)
        total += cost
        if lo <= hi:
            if idx < lo:
                heapq.heappush(heap, (costs[lo], lo))
                lo += 1
            else:
                heapq.heappush(heap, (costs[hi], hi))
                hi -= 1
    return total
`,

  'maximum-subsequence-score': `def maxScore(nums1, nums2, k):
    import heapq
    pairs = sorted(zip(nums1, nums2), key=lambda x: -x[1])
    heap = []
    s = 0
    best = 0
    for v1, v2 in pairs:
        heapq.heappush(heap, v1)
        s += v1
        if len(heap) > k:
            s -= heapq.heappop(heap)
        if len(heap) == k:
            best = max(best, s * v2)
    return best
`,

  'gray-code': `def grayCode(n):
    return [i ^ (i >> 1) for i in range(1 << n)]
`,

  'count-vowels-permutation': `def countVowelPermutation(n):
    MOD = 10**9 + 7
    a = e = i = o = u = 1
    for _ in range(n - 1):
        na = (e + i + u) % MOD
        ne = (a + i) % MOD
        ni = (e + o) % MOD
        no = i % MOD
        nu = (i + o) % MOD
        a, e, i, o, u = na, ne, ni, no, nu
    return (a + e + i + o + u) % MOD
`,

  'snakes-and-ladders': `def snakesAndLadders(board):
    from collections import deque
    n = len(board)
    def get_cell(num):
        row = (num - 1) // n
        col = (num - 1) % n
        r = n - 1 - row
        c = col if row % 2 == 0 else n - 1 - col
        return board[r][c]
    visited = {1}
    queue = deque([1])
    moves = 0
    while queue:
        for _ in range(len(queue)):
            sq = queue.popleft()
            if sq == n * n:
                return moves
            for dice in range(1, 7):
                dest = sq + dice
                if dest > n * n:
                    break
                cell = get_cell(dest)
                if cell != -1:
                    dest = cell
                if dest not in visited:
                    visited.add(dest)
                    queue.append(dest)
        moves += 1
    return -1
`,

  'swim-in-rising-water': `def swimInWater(grid):
    import heapq
    n = len(grid)
    heap = [(grid[0][0], 0, 0)]
    visited = [[False]*n for _ in range(n)]
    visited[0][0] = True
    while heap:
        t, r, c = heapq.heappop(heap)
        if r == n-1 and c == n-1:
            return t
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < n and 0 <= nc < n and not visited[nr][nc]:
                visited[nr][nc] = True
                heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))
    return -1
`,

  'n-queens-ii': `def totalNQueens(n):
    count = [0]
    cols = set()
    diag1 = set()
    diag2 = set()
    def bt(row):
        if row == n:
            count[0] += 1
            return
        for col in range(n):
            if col in cols or row-col in diag1 or row+col in diag2:
                continue
            cols.add(col); diag1.add(row-col); diag2.add(row+col)
            bt(row+1)
            cols.discard(col); diag1.discard(row-col); diag2.discard(row+col)
    bt(0)
    return count[0]
`,

  'remove-invalid-parentheses': `def removeInvalidParentheses(s):
    def is_valid(st):
        count = 0
        for c in st:
            if c == '(':
                count += 1
            elif c == ')':
                count -= 1
                if count < 0:
                    return False
        return count == 0
    result = set()
    queue = {s}
    found = False
    while queue:
        next_q = set()
        for cur in queue:
            if is_valid(cur):
                result.add(cur)
                found = True
            if not found:
                for i in range(len(cur)):
                    if cur[i] not in '()':
                        continue
                    next_q.add(cur[:i] + cur[i+1:])
        if found:
            break
        queue = next_q
    return sorted(result)
`,

  'number-of-ways-arrive-destination': `def countPaths(n, roads):
    import heapq
    MOD = 10**9 + 7
    adj = [[] for _ in range(n)]
    for u, v, t in roads:
        adj[u].append((v, t))
        adj[v].append((u, t))
    dist = [float('inf')] * n
    ways = [0] * n
    dist[0] = 0
    ways[0] = 1
    heap = [(0, 0)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue
        for v, t in adj[u]:
            nd = d + t
            if nd < dist[v]:
                dist[v] = nd
                ways[v] = ways[u]
                heapq.heappush(heap, (nd, v))
            elif nd == dist[v]:
                ways[v] = (ways[v] + ways[u]) % MOD
    return ways[n-1]
`,

  'minimum-cost-cut-stick': `def minCost(n, cuts):
    c = sorted([0] + list(cuts) + [n])
    m = len(c)
    dp = [[0]*m for _ in range(m)]
    for length in range(2, m):
        for i in range(m - length):
            j = i + length
            dp[i][j] = float('inf')
            for k in range(i+1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + c[j] - c[i])
    return dp[0][m-1]
`,

  'kth-missing-positive-number': `def findKthPositive(arr, k):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] - (mid + 1) >= k:
            hi = mid
        else:
            lo = mid + 1
    return lo + k
`,

  'process-tasks-using-servers': `def assignTasks(servers, tasks):
    import heapq
    available = sorted((w, i) for i, w in enumerate(servers))
    available = list(available)
    busy = []  # (freeAt, weight, idx)
    result = []
    time = 0
    for j, task in enumerate(tasks):
        time = max(time, j)
        while busy and busy[0][0] <= time:
            free_at, w, i = heapq.heappop(busy)
            heapq.heappush(available, (w, i))
        if not available:
            free_at, w, i = heapq.heappop(busy)
            time = free_at
            heapq.heappush(available, (w, i))
            while busy and busy[0][0] == time:
                free_at2, w2, i2 = heapq.heappop(busy)
                heapq.heappush(available, (w2, i2))
        w, i = heapq.heappop(available)
        result.append(i)
        heapq.heappush(busy, (time + task, w, i))
    return result
`,

  'smallest-number-in-infinite-set': `def smallestInfiniteSetRunner(ops, args):
    import heapq
    cursor = 1
    added = []
    added_set = set()
    result = []
    for op, a in zip(ops, args):
        if op == 'popSmallest':
            if added and added[0] < cursor:
                v = heapq.heappop(added)
                added_set.discard(v)
                result.append(v)
            else:
                result.append(cursor)
                cursor += 1
        elif op == 'addBack':
            num = a[0] if a else 0
            if num < cursor and num not in added_set:
                added_set.add(num)
                heapq.heappush(added, num)
            result.append(None)
        else:
            result.append(None)
    return result
`,

  'strange-printer': `def strangePrinter(s):
    n = len(s)
    dp = [[0]*n for _ in range(n)]
    for i in range(n-1, -1, -1):
        dp[i][i] = 1
        for j in range(i+1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i][j-1]
            else:
                dp[i][j] = float('inf')
                for k in range(i, j):
                    dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j])
    return dp[0][n-1]
`,

  'counting-words-with-given-prefix': `
def prefixCount(words, pref):
    words = list(words)
    return sum(1 for w in words if w.startswith(pref))
`,

  'number-of-laser-beams': `
def numberOfBeams(bank):
    bank = list(bank)
    prev = 0
    total = 0
    for row in bank:
        count = row.count('1')
        if count > 0:
            total += prev * count
            prev = count
    return total
`,

  'minimum-number-of-moves-seat': `
def minMovesToSeat(seats, students):
    seats = sorted(seats)
    students = sorted(students)
    return sum(abs(seats[i] - students[i]) for i in range(len(seats)))
`,

  'unique-number-of-occurrences': `def uniqueOccurrences(arr):
    from collections import Counter
    counts = list(Counter(arr).values())
    return len(set(counts)) == len(counts)
`,

  'find-lucky-integer': `def findLucky(arr):
    from collections import Counter
    freq = Counter(arr)
    result = -1
    for val, count in freq.items():
        if val == count:
            result = max(result, val)
    return result
`,

  'minimum-index-sum-of-two-lists': `def findRestaurant(list1, list2):
    idx_map = {s: i for i, s in enumerate(list1)}
    min_sum = float('inf')
    result = []
    for j, s in enumerate(list2):
        if s in idx_map:
            total = idx_map[s] + j
            if total < min_sum:
                min_sum = total
                result = [s]
            elif total == min_sum:
                result.append(s)
    return result
`,

  'two-sum-iv-bst': `def findTarget(root, k):
    vals = set()
    for v in root:
        try:
            vals.add(int(v))
        except (TypeError, AttributeError):
            pass
    return any(k - v in vals and k - v != v for v in vals)
`,

  'sort-array-by-parity-ii': `
def sortArrayByParityII(nums):
    if hasattr(nums, 'to_py'):
        nums = list(nums.to_py())
    else:
        nums = list(nums)
    result = [0] * len(nums)
    e, o = 0, 1
    for n in nums:
        if n % 2 == 0:
            result[e] = n
            e += 2
        else:
            result[o] = n
            o += 2
    return result
`,

  'number-of-arithmetic-triplets': `
def arithmeticTriplets(nums, diff):
    if hasattr(nums, 'to_py'):
        nums = list(nums.to_py())
    else:
        nums = list(nums)
    s = set(nums)
    return sum(1 for n in nums if (n + diff) in s and (n + 2 * diff) in s)
`,

  'nth-tribonacci-number': `
def tribonacci(n):
    if n == 0: return 0
    if n <= 2: return 1
    a, b, c = 0, 1, 1
    for _ in range(n - 2):
        a, b, c = b, c, a + b + c
    return c
`,

  'count-homogenous-substrings': `
def countHomogenous(s):
    MOD = 10**9 + 7
    total = 0
    run = 1
    for i in range(1, len(s) + 1):
        if i < len(s) and s[i] == s[i-1]:
            run += 1
        else:
            total = (total + run * (run + 1) // 2) % MOD
            run = 1
    return total
`,

  'binary-tree-tilt': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def findTiltRunner(arr):
    return findTilt(__from_array__(arr))

def findTilt(root):
    total = [0]
    def dfs(node):
        if not node:
            return 0
        l = dfs(node.left)
        r = dfs(node.right)
        total[0] += abs(l - r)
        return node.val + l + r
    dfs(root)
    return total[0]
`,

  'average-of-levels': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(arr):
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        raw = list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def averageOfLevelsRunner(arr):
    return averageOfLevels(__from_array__(arr))

def averageOfLevels(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        n = len(queue)
        level_sum = 0
        for _ in range(n):
            node = queue.pop(0)
            level_sum += node.val
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level_sum / n)
    return result
`,

  'count-equal-and-divisible-pairs': `
def countPairs(nums, k):
    nums = list(nums)
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j] and (i * j) % k == 0:
                count += 1
    return count
`,

  'count-elements-with-maximum-frequency': `
def maxFrequencyElements(nums):
    nums = list(nums)
    from collections import Counter
    freq = Counter(nums)
    max_freq = max(freq.values())
    return sum(f for f in freq.values() if f == max_freq)
`,

  'make-string-great': `
def makeGood(s):
    stack = []
    for c in s:
        if stack and abs(ord(stack[-1]) - ord(c)) == 32:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)
`,

  'minimum-string-length': `
def minLength(s):
    stack = []
    for c in s:
        if stack and ((stack[-1] == 'A' and c == 'B') or (stack[-1] == 'C' and c == 'D')):
            stack.pop()
        else:
            stack.append(c)
    return len(stack)
`,

  'sum-of-multiples': `
def sumOfMultiples(n):
    return sum(i for i in range(1, n + 1) if i % 3 == 0 or i % 5 == 0 or i % 7 == 0)
`,

  'maximum-score-after-splitting-string': `
def maxScore(s):
    best = 0
    for i in range(1, len(s)):
        score = s[:i].count('0') + s[i:].count('1')
        best = max(best, score)
    return best
`,

  'append-characters-to-make-subsequence': `
def appendCharacters(s, t):
    j = 0
    for i in range(len(s)):
        if j < len(t) and s[i] == t[j]:
            j += 1
    return len(t) - j
`,

  'max-sum-of-pair-with-equal-sum-of-digits': `
def maximumSum(nums):
    def digit_sum(n):
        s = 0
        while n > 0:
            s += n % 10
            n //= 10
        return s
    best = {}
    ans = -1
    for n in nums:
        ds = digit_sum(n)
        if ds in best:
            ans = max(ans, best[ds] + n)
            best[ds] = max(best[ds], n)
        else:
            best[ds] = n
    return ans
`,

  'count-number-of-rectangles': `
def countRectangles(rectangles, points):
    import bisect
    by_height = [[] for _ in range(101)]
    for l, h in rectangles:
        by_height[h].append(l)
    for h in range(101):
        by_height[h].sort()
    result = []
    for x, y in points:
        count = 0
        for h in range(y, 101):
            arr = by_height[h]
            lo = bisect.bisect_left(arr, x)
            count += len(arr) - lo
        result.append(count)
    return result
`,

  'range-sum-of-bst': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def rangeSumBSTRunner(arr, low, high):
    return rangeSumBST(__from_array__(arr), low, high)

def rangeSumBST(root, low, high):
    if not root:
        return 0
    s = root.val if low <= root.val <= high else 0
    if root.val > low:
        s += rangeSumBST(root.left, low, high)
    if root.val < high:
        s += rangeSumBST(root.right, low, high)
    return s
`,

  'xor-operation-in-an-array': `
def xorOperation(n, start):
    res = 0
    for i in range(n):
        res ^= (start + 2 * i)
    return res
`,

  'get-maximum-in-generated-array': `
def getMaximumGenerated(n):
    if n == 0:
        return 0
    nums = [0, 1]
    for i in range(2, n + 1):
        if i % 2 == 0:
            nums.append(nums[i // 2])
        else:
            nums.append(nums[i // 2] + nums[i // 2 + 1])
    return max(nums)
`,

  'flipping-an-image': `
def flipAndInvertImage(image):
    if hasattr(image, 'to_py'):
        rows = [list(row.to_py()) for row in image]
    else:
        rows = [list(row) for row in image]
    return [[(b ^ 1) for b in reversed(row)] for row in rows]
`,

  'count-good-triplets': `
def countGoodTriplets(arr, a, b, c):
    arr = list(arr)
    count = 0
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                if abs(arr[i]-arr[j]) <= a and abs(arr[j]-arr[k]) <= b and abs(arr[i]-arr[k]) <= c:
                    count += 1
    return count
`,

  'matrix-block-sum': `
def matrixBlockSum(mat, k):
    if hasattr(mat, 'to_py'):
        mat = [list(row.to_py()) for row in mat]
    else:
        mat = [list(row) for row in mat]
    m, n = len(mat), len(mat[0])
    prefix = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]
    ans = [[0]*n for _ in range(m)]
    for i in range(m):
        for j in range(n):
            r1, c1 = max(0, i-k), max(0, j-k)
            r2, c2 = min(m-1, i+k), min(n-1, j+k)
            ans[i][j] = prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]
    return ans
`,
  'unique-morse-code-words': `
def uniqueMorseRepresentations(words):
    MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    transforms = set()
    for word in words:
        transforms.add("".join(MORSE[ord(c) - ord('a')] for c in word))
    return len(transforms)
`,
  'number-of-good-pairs': `
def numIdenticalPairs(nums):
    count = 0
    freq = {}
    for n in nums:
        count += freq.get(n, 0)
        freq[n] = freq.get(n, 0) + 1
    return count
`,
  'check-if-array-sorted-rotated': `
def check(nums):
    n = len(nums)
    descents = 0
    for i in range(n):
        if nums[i] > nums[(i + 1) % n]:
            descents += 1
    return descents <= 1
`,
  'maximum-product-difference': `
def maxProductDifference(nums):
    nums = sorted(nums)
    return nums[-1] * nums[-2] - nums[0] * nums[1]
`,
  'replace-words': `
def replaceWords(dictionary, sentence):
    root_set = set(dictionary)
    def replace(word):
        for i in range(1, len(word) + 1):
            if word[:i] in root_set:
                return word[:i]
        return word
    return " ".join(replace(w) for w in sentence.split())
`,
  'minimum-time-difference': `
def findMinDifference(timePoints):
    minutes = sorted(int(t[:2]) * 60 + int(t[3:]) for t in timePoints)
    min_diff = 1440 - minutes[-1] + minutes[0]
    for i in range(1, len(minutes)):
        min_diff = min(min_diff, minutes[i] - minutes[i-1])
    return min_diff
`,
  'string-to-integer-atoi': `
def myAtoi(s):
    INT_MAX, INT_MIN = 2147483647, -2147483648
    i, sign, result = 0, 1, 0
    while i < len(s) and s[i] == ' ':
        i += 1
    if i < len(s) and s[i] in ('+', '-'):
        sign = -1 if s[i] == '-' else 1
        i += 1
    while i < len(s) and s[i].isdigit():
        d = int(s[i])
        if result > (INT_MAX - d) // 10:
            return INT_MAX if sign == 1 else INT_MIN
        result = result * 10 + d
        i += 1
    return sign * result
`,
  'minimum-sum-four-digit-number': `
def minimumSum(num):
    digits = sorted(int(d) for d in str(num))
    return digits[0] * 10 + digits[1] * 10 + digits[2] + digits[3]
`,
  'count-pairs-absolute-difference-k': `
def countKDifference(nums, k):
    count = 0
    freq = {}
    for n in nums:
        count += freq.get(n - k, 0) + freq.get(n + k, 0)
        freq[n] = freq.get(n, 0) + 1
    return count
`,
  'find-closest-number-to-zero': `
def findClosestNumber(nums):
    best = nums[0]
    for n in nums:
        if abs(n) < abs(best) or (abs(n) == abs(best) and n > best):
            best = n
    return best
`,
  'minimum-deletions-char-frequencies': `def minDeletions(s):
    from collections import Counter
    freq = sorted(Counter(s).values(), reverse=True)
    used = set()
    deletions = 0
    for f in freq:
        while f > 0 and f in used:
            f -= 1
            deletions += 1
        if f > 0:
            used.add(f)
    return deletions
`,
  'bulls-and-cows': `def getHint(secret, guess):
    bulls = 0
    secret_freq = {}
    guess_freq = {}
    for s, g in zip(secret, guess):
        if s == g:
            bulls += 1
        else:
            secret_freq[s] = secret_freq.get(s, 0) + 1
            guess_freq[g] = guess_freq.get(g, 0) + 1
    cows = sum(min(guess_freq.get(d, 0), secret_freq.get(d, 0)) for d in guess_freq)
    return f"{bulls}A{cows}B"
`,
  'first-letter-to-appear-twice': `def repeatedCharacter(s):
    seen = set()
    for ch in s:
        if ch in seen:
            return ch
        seen.add(ch)
    return ''
`,
  'count-asterisks': `def countAsterisks(s):
    count = 0
    inside = False
    for ch in s:
        if ch == '|':
            inside = not inside
        elif ch == '*' and not inside:
            count += 1
    return count
`,
  'count-even-numbers': `
def countEven(num):
    count = 0
    for i in range(1, num + 1):
        if sum(int(d) for d in str(i)) % 2 == 0:
            count += 1
    return count
`,
  'count-segments-in-string': `
def countSegments(s):
    return len(s.split())
`,
  'find-repeated-dna-sequences': `
def findRepeatedDnaSequences(s):
    from collections import Counter
    counts = Counter(s[i:i+10] for i in range(len(s) - 9))
    return sorted(k for k, v in counts.items() if v > 1)
`,
  'widest-vertical-area': `
def maxWidthOfVerticalArea(points):
    xs = sorted(int(p[0]) for p in points)
    return max(xs[i+1] - xs[i] for i in range(len(xs) - 1)) if len(xs) > 1 else 0
`,
  'convert-1d-array-into-2d-array': `
def construct2DArray(original, m, n):
    if hasattr(original, 'to_py'):
        original = list(original.to_py())
    else:
        original = list(original)
    if len(original) != m * n:
        return []
    return [original[i*n:(i+1)*n] for i in range(m)]
`,
  'check-if-all-chars-have-equal-occurrences': `
def areOccurrencesEqual(s):
    from collections import Counter
    freq = set(Counter(s).values())
    return len(freq) == 1
`,
  'find-the-pivot-integer': `
def pivotInteger(n):
    import math
    x = math.isqrt(n * (n + 1) // 2)
    return x if x * x == n * (n + 1) // 2 else -1
`,
  'maximum-sum-circular-subarray': `
def maxSubarraySumCircular(nums):
    nums = list(nums)
    if all(n < 0 for n in nums):
        return max(nums)
    max_sum = cur_max = float('-inf')
    min_sum = cur_min = float('inf')
    total = 0
    for n in nums:
        cur_max = max(n, cur_max + n)
        max_sum = max(max_sum, cur_max)
        cur_min = min(n, cur_min + n)
        min_sum = min(min_sum, cur_min)
        total += n
    return max(max_sum, total - min_sum)
`,
  'unique-email-addresses': `def numUniqueEmails(emails):
    def normalize(e):
        local, dom = e.split('@')
        local = local.split('+')[0].replace('.', '')
        return local + '@' + dom
    return len(set(normalize(e) for e in emails))
`,
  'reverse-words-in-string-iii': `def reverseWords(s):
    return ' '.join(w[::-1] for w in s.split(' '))
`,
  'count-binary-substrings': `def countBinarySubstrings(s):
    ans, prev, curr = 0, 0, 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            curr += 1
        else:
            prev = curr
            curr = 1
        if prev >= curr:
            ans += 1
    return ans
`,
  'shortest-unsorted-continuous-subarray': `def findUnsortedSubarray(nums):
    s = sorted(nums)
    l, r = 0, len(nums) - 1
    while l <= r and nums[l] == s[l]:
        l += 1
    while r >= l and nums[r] == s[r]:
        r -= 1
    return 0 if l > r else r - l + 1
`,
  'max-chunks-to-make-sorted': `def maxChunksToSorted(arr):
    max_so_far = count = 0
    for i, v in enumerate(arr):
        max_so_far = max(max_so_far, v)
        if max_so_far == i:
            count += 1
    return count
`,
  'champagne-tower': `def champagneTower(poured, query_row, query_glass):
    tower = [[0.0] * (query_row + 2) for _ in range(query_row + 2)]
    tower[0][0] = poured
    for r in range(query_row):
        for g in range(r + 1):
            excess = tower[r][g] - 1
            if excess > 0:
                tower[r][g] = 1
                tower[r+1][g] += excess / 2
                tower[r+1][g+1] += excess / 2
    return min(1.0, tower[query_row][query_glass])
`,
  'minimum-remove-to-make-valid-parentheses': `def minRemoveToMakeValid(s):
    to_remove = set()
    stack = []
    for i, ch in enumerate(s):
        if ch == '(':
            stack.append(i)
        elif ch == ')':
            if stack:
                stack.pop()
            else:
                to_remove.add(i)
    to_remove.update(stack)
    return ''.join(ch for i, ch in enumerate(s) if i not in to_remove)
`,
  'bitwise-and-of-numbers-range': `def rangeBitwiseAnd(left, right):
    shift = 0
    while left != right:
        left >>= 1
        right >>= 1
        shift += 1
    return left << shift
`,
  'number-of-enclaves': `def numEnclaves(grid):
    m, n = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or not grid[r][c]:
            return
        grid[r][c] = 0
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            dfs(r+dr, c+dc)
    for r in range(m):
        dfs(r, 0); dfs(r, n-1)
    for c in range(n):
        dfs(0, c); dfs(m-1, c)
    return sum(cell for row in grid for cell in row)
`,
  'jump-game-iv': `def minJumps(arr):
    from collections import defaultdict, deque
    n = len(arr)
    if n == 1:
        return 0
    graph = defaultdict(list)
    for i, v in enumerate(arr):
        graph[v].append(i)
    visited = {0}
    q = deque([(0, 0)])
    while q:
        i, steps = q.popleft()
        for j in [i-1, i+1] + graph.pop(arr[i], []):
            if j == n - 1:
                return steps + 1
            if 0 <= j < n and j not in visited:
                visited.add(j)
                q.append((j, steps+1))
    return -1
`,
  'number-of-distinct-averages': `
def distinctAverages(nums):
    nums = sorted(nums)
    sums = set()
    for i in range(len(nums) // 2):
        sums.add(nums[i] + nums[-(i+1)])
    return len(sums)
`,
  'find-positive-integer-with-negative': `
def findMaxK(nums):
    s = set(nums)
    result = -1
    for n in nums:
        if n > 0 and -n in s:
            if n > result:
                result = n
    return result
`,
  'sum-of-squares-special-elements': `
def sumOfSquares(nums):
    nums = list(nums)
    n = len(nums)
    return sum(nums[i-1] ** 2 for i in range(1, n+1) if n % i == 0)
`,
  'minimum-operations-make-array-empty': `
def minOperations(nums):
    from collections import Counter
    import math
    freq = Counter(nums)
    ops = 0
    for f in freq.values():
        if f == 1:
            return -1
        ops += math.ceil(f / 3)
    return ops
`,
  'split-string-balance': `
def balancedStringSplit(s):
    count = balance = 0
    for c in s:
        balance += 1 if c == 'R' else -1
        if balance == 0:
            count += 1
    return count
`,
  'maximum-product-adjacent-elements': `
def maxProduct(nums):
    nums = list(nums)
    return max(nums[i] * nums[i+1] for i in range(len(nums)-1))
`,
  'candy': `def candy(ratings):
    n = len(ratings)
    c = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i-1]:
            c[i] = c[i-1] + 1
    for i in range(n-2, -1, -1):
        if ratings[i] > ratings[i+1]:
            c[i] = max(c[i], c[i+1] + 1)
    return sum(c)
`,
  'minimum-falling-path-sum': `def minFallingPathSum(matrix):
    matrix = [row[:] for row in matrix]
    for i in range(1, len(matrix)):
        for j in range(len(matrix[i])):
            prev = [matrix[i-1][j]]
            if j > 0: prev.append(matrix[i-1][j-1])
            if j < len(matrix[i])-1: prev.append(matrix[i-1][j+1])
            matrix[i][j] += min(prev)
    return min(matrix[-1])
`,
  'count-nice-subarrays': `def numberOfSubarrays(nums, k):
    def at_most(x):
        l = odds = res = 0
        for r in range(len(nums)):
            odds += nums[r] % 2
            while odds > x:
                odds -= nums[l] % 2
                l += 1
            res += r - l + 1
        return res
    return at_most(k) - at_most(k - 1)
`,
  'split-linked-list-in-parts': `def splitListToParts(head, k):
    n = len(head)
    base, extra = divmod(n, k)
    res, i = [], 0
    for p in range(k):
        size = base + (1 if p < extra else 0)
        res.append(head[i:i+size])
        i += size
    return res
`,
  'time-based-key-value-store': `def timeMap(ops, args):
    import bisect
    store = {}
    results = []
    for op, a in zip(ops, args):
        if op == 'TimeMap':
            results.append(None)
        elif op == 'set':
            k, v, t = a
            if k not in store:
                store[k] = []
            store[k].append((t, v))
            results.append(None)
        else:
            k, t = a
            if k not in store:
                results.append('')
                continue
            arr = store[k]
            idx = bisect.bisect_right(arr, (t, chr(127))) - 1
            results.append(arr[idx][1] if idx >= 0 else '')
    return results
`,
  'minimum-cost-for-tickets': `def mincostTickets(days, costs):
    day_set = set(days)
    dp = [0] * 366
    for i in range(1, 366):
        if i not in day_set:
            dp[i] = dp[i-1]
        else:
            dp[i] = min(
                dp[i-1] + costs[0],
                dp[max(0, i-7)] + costs[1],
                dp[max(0, i-30)] + costs[2]
            )
    return dp[365]
`,
  'stone-game-ii': `def stoneGameII(piles):
    from functools import lru_cache
    n = len(piles)
    suf = [0] * (n + 1)
    for i in range(n-1, -1, -1):
        suf[i] = suf[i+1] + piles[i]
    @lru_cache(maxsize=None)
    def dp(i, m):
        if i >= n:
            return 0
        if 2*m >= n-i:
            return suf[i]
        return max(suf[i] - dp(i+x, max(m,x)) for x in range(1, 2*m+1))
    return dp(0, 1)
`,
  'maximum-width-ramp': `def maxWidthRamp(nums):
    st = []
    for i, v in enumerate(nums):
        if not st or v < nums[st[-1]]:
            st.append(i)
    ans = 0
    for j in range(len(nums)-1, -1, -1):
        while st and nums[st[-1]] <= nums[j]:
            ans = max(ans, j - st.pop())
    return ans
`,
  'check-if-array-pairs-divisible-by-k': `def canArrange(arr, k):
    freq = [0] * k
    for x in arr:
        freq[x % k % k] += 1
    if freq[0] % 2 != 0:
        return False
    for r in range(1, k // 2 + 1):
        if r == k - r:
            if freq[r] % 2 != 0:
                return False
        elif freq[r] != freq[k-r]:
            return False
    return True
`,
  'find-k-th-smallest-pair-distance': `def smallestDistancePair(nums, k):
    import bisect
    nums.sort()
    n = len(nums)
    lo, hi = 0, nums[-1] - nums[0]
    while lo < hi:
        mid = (lo + hi) // 2
        cnt = l = 0
        for r in range(n):
            while nums[r] - nums[l] > mid:
                l += 1
            cnt += r - l
        if cnt >= k:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'valid-triangle-number': `def triangleNumber(nums):
    nums.sort()
    cnt = 0
    for k in range(len(nums) - 1, 1, -1):
        l, r = 0, k - 1
        while l < r:
            if nums[l] + nums[r] > nums[k]:
                cnt += r - l
                r -= 1
            else:
                l += 1
    return cnt
`,

  'max-number-k-sum-pairs': `def maxOperations(nums, k):
    from collections import Counter
    freq = Counter()
    cnt = 0
    for n in nums:
        c = k - n
        if freq[c] > 0:
            cnt += 1
            freq[c] -= 1
        else:
            freq[n] += 1
    return cnt
`,

  'minimum-time-rope-colorful': `def minCost(colors, neededTime):
    res = i = 0
    while i < len(colors):
        j = i
        group_max = group_sum = 0
        while j < len(colors) and colors[j] == colors[i]:
            group_max = max(group_max, neededTime[j])
            group_sum += neededTime[j]
            j += 1
        res += group_sum - group_max
        i = j
    return res
`,

  'shortest-bridge': `def shortestBridge(grid):
    from collections import deque
    n = len(grid)
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    queue = deque()
    found = False

    def dfs(r, c):
        if r < 0 or r >= n or c < 0 or c >= n or grid[r][c] != 1:
            return
        grid[r][c] = 2
        queue.append((r, c))
        for dr, dc in dirs:
            dfs(r + dr, c + dc)

    for r in range(n):
        if found:
            break
        for c in range(n):
            if grid[r][c] == 1:
                dfs(r, c)
                found = True
                break

    dist = 0
    while queue:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if nr < 0 or nr >= n or nc < 0 or nc >= n or grid[nr][nc] == 2:
                    continue
                if grid[nr][nc] == 1:
                    return dist
                grid[nr][nc] = 2
                queue.append((nr, nc))
        dist += 1
    return dist
`,

  'number-of-subsequences-target-sum': `def numSubseq(nums, target):
    MOD = 10**9 + 7
    nums.sort()
    n = len(nums)
    pow2 = [1] * n
    for i in range(1, n):
        pow2[i] = pow2[i-1] * 2 % MOD
    ans = l = 0
    r = n - 1
    while l <= r:
        if nums[l] + nums[r] <= target:
            ans = (ans + pow2[r - l]) % MOD
            l += 1
        else:
            r -= 1
    return ans
`,
  'increasing-decreasing-string': `
def sortString(s):
    from collections import Counter
    freq = Counter(s)
    result = []
    while sum(freq.values()) > 0:
        for c in 'abcdefghijklmnopqrstuvwxyz':
            if freq[c] > 0:
                result.append(c)
                freq[c] -= 1
        for c in 'zyxwvutsrqponmlkjihgfedcba':
            if freq[c] > 0:
                result.append(c)
                freq[c] -= 1
    return ''.join(result)
`,

  'car-pooling': `def carPooling(trips, capacity):
    diff = [0] * 1001
    for n, f, t in trips:
        diff[f] += n
        diff[t] -= n
    cur = 0
    for d in diff:
        cur += d
        if cur > capacity:
            return False
    return True
`,

  'most-profit-assigning-work': `def maxProfitAssignment(difficulty, profit, worker):
    import bisect
    jobs = sorted(zip(difficulty, profit))
    max_profit = [0]
    for _, p in jobs:
        max_profit.append(max(max_profit[-1], p))
    total = 0
    for w in worker:
        idx = bisect.bisect_right(jobs, (w, float('inf')))
        total += max_profit[idx]
    return total
`,

  'fruit-into-baskets': `def totalFruit(fruits):
    from collections import defaultdict
    freq = defaultdict(int)
    l = ans = 0
    for r, f in enumerate(fruits):
        freq[f] += 1
        while len(freq) > 2:
            freq[fruits[l]] -= 1
            if freq[fruits[l]] == 0:
                del freq[fruits[l]]
            l += 1
        ans = max(ans, r - l + 1)
    return ans
`,

  'minimum-swaps-string-balanced': `def minSwaps(s):
    b = m = 0
    for c in s:
        b += 1 if c == '[' else -1
        if b < 0:
            m += 1
            b = 0
    return (m + 1) // 2
`,

  'sum-of-subarray-ranges': `def subArrayRanges(nums):
    res = 0
    n = len(nums)
    for i in range(n):
        mn = mx = nums[i]
        for j in range(i, n):
            mn = min(mn, nums[j])
            mx = max(mx, nums[j])
            res += mx - mn
    return res
`,

  'students-unable-to-eat-lunch': `
def countStudents(students, sandwiches):
    students = list(students)
    sandwiches = list(sandwiches)
    i = 0
    while i < len(sandwiches):
        if sandwiches[i] in students:
            students.remove(sandwiches[i])
            i += 1
        else:
            break
    return len(students)
`,

  'create-target-array-given-order': `
def createTargetArray(nums, index):
    nums = list(nums)
    index = list(index)
    target = []
    for i in range(len(nums)):
        target.insert(index[i], nums[i])
    return target
`,

  'maximum-ascending-subarray-sum': `
def maxAscendingSum(nums):
    nums = list(nums)
    max_sum = cur = nums[0]
    for i in range(1, len(nums)):
        if nums[i] > nums[i-1]:
            cur += nums[i]
        else:
            max_sum = max(max_sum, cur)
            cur = nums[i]
    return max(max_sum, cur)
`,

  'minimum-consecutive-cards-pickup': `
def minimumCardPickup(cards):
    cards = list(cards)
    last = {}
    min_len = float('inf')
    for i, c in enumerate(cards):
        if c in last:
            min_len = min(min_len, i - last[c] + 1)
        last[c] = i
    return min_len if min_len != float('inf') else -1
`,

  'divisor-game': `
def divisorGame(n):
    return n % 2 == 0
`,

  'minimum-time-visiting-all-points': `
def minTimeToVisitAllPoints(points):
    points = [list(p) for p in points]
    total = 0
    for i in range(1, len(points)):
        total += max(abs(points[i][0] - points[i-1][0]), abs(points[i][1] - points[i-1][1]))
    return total
`,

  'largest-local-values-matrix': `
def largestLocal(grid):
    grid = [list(row) for row in grid]
    n = len(grid)
    res = []
    for i in range(n - 2):
        row = []
        for j in range(n - 2):
            mx = 0
            for r in range(i, i + 3):
                for c in range(j, j + 3):
                    mx = max(mx, grid[r][c])
            row.append(mx)
        res.append(row)
    return res
`,

  'percentage-letter-in-string': `
def percentageLetter(s, letter):
    return s.count(letter) * 100 // len(s)
`,

  'number-of-weak-characters': `
def numberOfWeakCharacters(properties):
    properties = sorted(properties, key=lambda x: (-x[0], x[1]))
    max_def = count = 0
    for _, d in properties:
        if d < max_def:
            count += 1
        max_def = max(max_def, d)
    return count
`,

  'arithmetic-slices': `
def numberOfArithmeticSlices(nums):
    nums = list(nums)
    count = cur = 0
    for i in range(2, len(nums)):
        if nums[i] - nums[i-1] == nums[i-1] - nums[i-2]:
            cur += 1
            count += cur
        else:
            cur = 0
    return count
`,

  'maximum-number-vowels-substring': `
def maxVowels(s, k):
    vowels = set('aeiou')
    cnt = sum(1 for c in s[:k] if c in vowels)
    max_cnt = cnt
    for i in range(k, len(s)):
        if s[i] in vowels:
            cnt += 1
        if s[i - k] in vowels:
            cnt -= 1
        max_cnt = max(max_cnt, cnt)
    return max_cnt
`,

  'minimum-swaps-group-all-ones': `
def minSwaps(data):
    data = list(data)
    k = sum(data)
    if k == 0 or k == len(data):
        return 0
    zeros = data[:k].count(0)
    min_zeros = zeros
    for i in range(k, len(data)):
        if data[i] == 0:
            zeros += 1
        if data[i - k] == 0:
            zeros -= 1
        min_zeros = min(min_zeros, zeros)
    return min_zeros
`,

  'k-diff-pairs-in-array': `
def findPairs(nums, k):
    if k < 0:
        return 0
    from collections import Counter
    freq = Counter(nums)
    count = 0
    for n, f in freq.items():
        if k == 0:
            if f > 1:
                count += 1
        elif n + k in freq:
            count += 1
    return count
`,

  'hand-of-straights': `
def isNStraightHand(hand, groupSize):
    from collections import Counter
    if len(hand) % groupSize != 0:
        return False
    freq = Counter(hand)
    for k in sorted(freq):
        cnt = freq[k]
        if cnt > 0:
            for i in range(groupSize):
                if freq[k + i] < cnt:
                    return False
                freq[k + i] -= cnt
    return True
`,

  'minimum-domino-rotations': `
def minDominoRotations(tops, bottoms):
    tops = list(tops)
    bottoms = list(bottoms)
    def check(x):
        rt = rb = 0
        for i in range(len(tops)):
            if tops[i] != x and bottoms[i] != x:
                return float('inf')
            elif tops[i] != x:
                rt += 1
            elif bottoms[i] != x:
                rb += 1
        return min(rt, rb)
    res = min(check(tops[0]), check(bottoms[0]))
    return res if res != float('inf') else -1
`,

  'maximize-confusion-exam': `def maxConsecutiveAnswers(answerKey, k):
    def solve(c):
        l = cnt = ans = 0
        for r in range(len(answerKey)):
            if answerKey[r] != c:
                cnt += 1
            while cnt > k:
                if answerKey[l] != c:
                    cnt -= 1
                l += 1
            ans = max(ans, r - l + 1)
        return ans
    return max(solve('T'), solve('F'))
`,

  'sum-of-all-subset-xor-totals': `def subsetXORSum(nums):
    from functools import reduce
    from operator import or_
    total_or = reduce(or_, nums, 0)
    return total_or * (1 << (len(nums) - 1))
`,

  'continuous-subarray-sum': `def checkSubarraySum(nums, k):
    seen = {0: -1}
    s = 0
    for i, n in enumerate(nums):
        s = (s + n) % k
        if s in seen:
            if i - seen[s] >= 2:
                return True
        else:
            seen[s] = i
    return False
`,

  'equal-row-column-pairs': `def equalPairs(grid):
    from collections import Counter
    n = len(grid)
    row_counts = Counter(tuple(row) for row in grid)
    ans = 0
    for j in range(n):
        col = tuple(grid[i][j] for i in range(n))
        ans += row_counts[col]
    return ans
`,

  'determine-if-two-strings-close': `def closeStrings(word1, word2):
    from collections import Counter
    if len(word1) != len(word2):
        return False
    c1, c2 = Counter(word1), Counter(word2)
    return set(c1.keys()) == set(c2.keys()) and sorted(c1.values()) == sorted(c2.values())
`,

  'furthest-building-ladders': `
def furthestBuilding(heights, bricks, ladders):
    import heapq
    heights = list(heights)
    heap = []
    b = bricks
    for i in range(len(heights) - 1):
        diff = heights[i+1] - heights[i]
        if diff <= 0:
            continue
        heapq.heappush(heap, diff)
        if len(heap) > ladders:
            b -= heapq.heappop(heap)
            if b < 0:
                return i
    return len(heights) - 1
`,

  'ipo': `
def findMaximizedCapital(k, w, profits, capital):
    import heapq
    profits = list(profits)
    capital = list(capital)
    projects = sorted(zip(capital, profits))
    max_heap = []
    j = 0
    for _ in range(k):
        while j < len(projects) and projects[j][0] <= w:
            heapq.heappush(max_heap, -projects[j][1])
            j += 1
        if not max_heap:
            break
        w += -heapq.heappop(max_heap)
    return w
`,

  'relative-sort-array': `
def relativeSortArray(arr1, arr2):
    arr1 = list(arr1)
    arr2 = list(arr2)
    rank = {v: i for i, v in enumerate(arr2)}
    return sorted(arr1, key=lambda x: rank[x] if x in rank else 1000 + x)
`,

  'permutations-ii': `
def permuteUniqueRunner(arr):
    arr = list(arr)
    def permuteUnique(nums):
        nums = sorted(nums)
        result = []
        used = [False] * len(nums)
        def bt(cur):
            if len(cur) == len(nums):
                result.append(cur[:])
                return
            for i in range(len(nums)):
                if used[i]:
                    continue
                if i > 0 and nums[i] == nums[i-1] and not used[i-1]:
                    continue
                used[i] = True
                cur.append(nums[i])
                bt(cur)
                used[i] = False
                cur.pop()
        bt([])
        return result
    return sorted(permuteUnique(arr))
`,

  'letter-tile-possibilities': `
def numTilePossibilities(tiles):
    freq = [0] * 26
    for c in tiles:
        freq[ord(c) - 65] += 1
    def bt():
        count = 0
        for i in range(26):
            if freq[i] > 0:
                count += 1
                freq[i] -= 1
                count += bt()
                freq[i] += 1
        return count
    return bt()
`,

  'different-ways-add-parentheses': `
def diffWaysToComputeRunner(expr):
    def compute(e):
        results = []
        for i, c in enumerate(e):
            if c in '+-*':
                for l in compute(e[:i]):
                    for r in compute(e[i+1:]):
                        if c == '+': results.append(l + r)
                        elif c == '-': results.append(l - r)
                        else: results.append(l * r)
        if not results:
            results.append(int(e))
        return results
    return sorted(compute(expr))
`,

  'integer-break': `
def integerBreak(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        for j in range(1, i):
            dp[i] = max(dp[i], max(j, dp[j]) * max(i - j, dp[i - j]))
    return dp[n]
`,

  'minimum-cost-move-chips': `
def minCostToMoveChips(position):
    position = list(position)
    even = sum(1 for p in position if p % 2 == 0)
    odd = sum(1 for p in position if p % 2 != 0)
    return min(even, odd)
`,

  'binary-watch': `
def readBinaryWatch(turnedOn):
    times = []
    for h in range(12):
        for m in range(60):
            bits = bin(h).count('1') + bin(m).count('1')
            if bits == turnedOn:
                times.append(f'{h}:{m:02d}')
    return times
`,
};
