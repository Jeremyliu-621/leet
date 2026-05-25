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

  'minimum-add-make-valid-parentheses': `
def minAddToMakeValid(s):
    open_count = close_count = 0
    for c in s:
        if c == '(':
            open_count += 1
        elif open_count > 0:
            open_count -= 1
        else:
            close_count += 1
    return open_count + close_count
`,

  'palindromic-substrings': `
def countSubstrings(s):
    count = 0
    for center in range(2 * len(s) - 1):
        l = center // 2
        r = l + (center % 2)
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    return count
`,

  'partition-string': `
def partitionString(s):
    parts = 1
    seen = set()
    for c in s:
        if c in seen:
            parts += 1
            seen = set()
        seen.add(c)
    return parts
`,

  'ugly-number-ii': `def nthUglyNumber(n):
    dp = [1]
    i2 = i3 = i5 = 0
    for _ in range(1, n):
        nx = min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5)
        dp.append(nx)
        if nx == dp[i2] * 2:
            i2 += 1
        if nx == dp[i3] * 3:
            i3 += 1
        if nx == dp[i5] * 5:
            i5 += 1
    return dp[n - 1]
`,

  'delete-node-in-bst': `def deleteNode(root, key):
    if root is None:
        return None
    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left
        s = root.right
        while s.left:
            s = s.left
        root.val = s.val
        root.right = deleteNode(root.right, s.val)
    return root
`,

  'insert-into-bst': `def insertIntoBST(root, val):
    if root is None:
        return TreeNode(val)
    if val < root.val:
        root.left = insertIntoBST(root.left, val)
    else:
        root.right = insertIntoBST(root.right, val)
    return root
`,

  'minimum-cost-connect-points': `def minCostConnectPoints(points):
    n = len(points)
    in_mst = [False] * n
    dist = [float('inf')] * n
    dist[0] = 0
    res = 0
    for _ in range(n):
        u = -1
        for j in range(n):
            if not in_mst[j] and (u == -1 or dist[j] < dist[u]):
                u = j
        in_mst[u] = True
        res += dist[u]
        for v in range(n):
            if not in_mst[v]:
                d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                if d < dist[v]:
                    dist[v] = d
    return res
`,

  'number-of-visible-people-in-queue': `def canSeePersonsCount(heights):
    heights = list(heights)
    n = len(heights)
    ans = [0] * n
    st = []
    for i in range(n - 1, -1, -1):
        cnt = 0
        while st and st[-1] < heights[i]:
            st.pop()
            cnt += 1
        if st:
            cnt += 1
        ans[i] = cnt
        st.append(heights[i])
    return ans
`,

  'combination-sum-iv': `
def combinationSum4(nums, target):
    nums = list(nums)
    dp = [0] * (target + 1)
    dp[0] = 1
    for i in range(1, target + 1):
        for n in nums:
            if n <= i:
                dp[i] += dp[i - n]
    return dp[target]
`,

  'valid-parentheses': `
def isValid(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack.pop() != mapping[c]:
            return False
    return len(stack) == 0
`,

  'evaluate-reverse-polish-notation': `
def evalRPN(tokens):
    stack = []
    tokens = list(tokens)
    for t in tokens:
        if t in ('+', '-', '*', '/'):
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]
`,

  'move-zeroes': `
def moveZeroes(nums):
    nums = list(nums)
    pos = 0
    for n in nums:
        if n != 0:
            nums[pos] = n
            pos += 1
    while pos < len(nums):
        nums[pos] = 0
        pos += 1
    return nums
`,

  'merge-strings-alternately': `
def mergeAlternately(word1, word2):
    result = []
    i = 0
    while i < len(word1) or i < len(word2):
        if i < len(word1):
            result.append(word1[i])
        if i < len(word2):
            result.append(word2[i])
        i += 1
    return ''.join(result)
`,

  'uncrossed-lines': `
def maxUncrossedLines(nums1, nums2):
    nums1, nums2 = list(nums1), list(nums2)
    m, n = len(nums1), len(nums2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if nums1[i-1] == nums2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
`,

  'course-schedule-iii': `
def scheduleCourse(courses):
    courses = sorted([[d, e] for d, e in courses], key=lambda x: x[1])
    heap = []
    time = 0
    for d, end in courses:
        time += d
        heap.append(d)
        heap.sort(reverse=True)
        if time > end:
            time -= heap.pop(0)
    return len(heap)
`,

  'buy-two-chocolates': `
def buyChoco(prices, money):
    prices = sorted(prices)
    s = prices[0] + prices[1]
    return money - s if s <= money else money
`,

  'most-frequent-even-element': `
def mostFrequentEven(nums):
    from collections import Counter
    freq = Counter(n for n in nums if n % 2 == 0)
    if not freq:
        return -1
    best_freq = max(freq.values())
    return min(n for n, f in freq.items() if f == best_freq)
`,

  'find-first-palindromic-string': `
def firstPalindrome(words):
    words = list(words)
    for w in words:
        if w == w[::-1]:
            return w
    return ''
`,

  'minimum-number-operations-make-array-empty': `
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

  'maximum-difference-between-node-and-ancestor': `
def maxAncestorDiff(root):
    ans = 0
    def dfs(node, mn, mx):
        nonlocal ans
        if node is None:
            return
        ans = max(ans, abs(mn - node.val), abs(mx - node.val))
        nm = min(mn, node.val)
        nx = max(mx, node.val)
        dfs(node.left, nm, nx)
        dfs(node.right, nm, nx)
    dfs(root, root.val, root.val)
    return ans
`,

  'jump-game-vi': `
from collections import deque
def maxResult(nums, k):
    nums = list(nums)
    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dq = deque([0])
    for i in range(1, n):
        while dq and dq[0] < i - k:
            dq.popleft()
        dp[i] = nums[i] + dp[dq[0]]
        while dq and dp[dq[-1]] <= dp[i]:
            dq.pop()
        dq.append(i)
    return dp[n - 1]
`,

  'longest-subarray-max-bitwise-and': `
def longestSubarray(nums):
    nums = list(nums)
    mx = max(nums)
    ans = cur = 0
    for x in nums:
        if x == mx:
            cur += 1
            ans = max(ans, cur)
        else:
            cur = 0
    return ans
`,

  'maximum-events-can-attend': `
import heapq
def maxEvents(events):
    events = sorted([list(e) for e in events], key=lambda x: x[0])
    heap = []
    i = 0
    n = len(events)
    day = 0
    ans = 0
    while i < n or heap:
        if not heap:
            day = events[i][0]
        while i < n and events[i][0] <= day:
            heapq.heappush(heap, events[i][1])
            i += 1
        while heap and heap[0] < day:
            heapq.heappop(heap)
        if heap:
            heapq.heappop(heap)
            ans += 1
        day += 1
    return ans
`,

  'count-nodes-equal-average-subtree': `
def averageOfSubtree(root):
    ans = [0]
    def dfs(node):
        if node is None:
            return 0, 0
        ls, lc = dfs(node.left)
        rs, rc = dfs(node.right)
        s = node.val + ls + rs
        c = 1 + lc + rc
        if s // c == node.val:
            ans[0] += 1
        return s, c
    dfs(root)
    return ans[0]
`,

  'maximum-level-sum-binary-tree': `
from collections import deque
def maxLevelSum(root):
    level = 1
    ans = 1
    mx = float('-inf')
    q = deque([root])
    while q:
        n = len(q)
        s = 0
        for _ in range(n):
            nd = q.popleft()
            s += nd.val
            if nd.left:
                q.append(nd.left)
            if nd.right:
                q.append(nd.right)
        if s > mx:
            mx = s
            ans = level
        level += 1
    return ans
`,

  'minimum-distance-value': `
def findTheDistanceValue(arr1, arr2, d):
    arr1, arr2 = list(arr1), list(arr2)
    count = 0
    for a in arr1:
        if all(abs(a - b) > d for b in arr2):
            count += 1
    return count
`,

  'minimum-operations-make-array-alternating': `
def minimumOperations(nums):
    from collections import Counter
    nums = list(nums)
    n = len(nums)
    if n == 1:
        return 0
    def top_two(arr):
        freq = Counter(arr)
        sorted_items = sorted(freq.items(), key=lambda x: -x[1])
        first = sorted_items[0] if sorted_items else (0, 0)
        second = sorted_items[1] if len(sorted_items) > 1 else (0, 0)
        return first, second
    even = [nums[i] for i in range(0, n, 2)]
    odd = [nums[i] for i in range(1, n, 2)]
    (ev1, ef1), (ev2, ef2) = top_two(even)
    (ov1, of1), (ov2, of2) = top_two(odd)
    if ev1 != ov1:
        return n - (ef1 + of1)
    return n - max(ef1 + of2, ef2 + of1)
`,

  'redistribute-characters-make-all-strings-equal': `
def makeEqual(words):
    from collections import Counter
    words = list(words)
    n = len(words)
    freq = Counter()
    for w in words:
        freq.update(w)
    return all(v % n == 0 for v in freq.values())
`,

  'check-completeness-binary-tree': `
def isCompleteTree(root):
    from collections import deque
    if not root:
        return True
    q = deque([root])
    seen_null = False
    while q:
        node = q.popleft()
        if node is None:
            seen_null = True
        else:
            if seen_null:
                return False
            q.append(node.left)
            q.append(node.right)
    return True
`,

  'maximum-twin-sum-linked-list': `
def pairSum(head):
    vals = []
    cur = head
    while cur:
        vals.append(cur.val)
        cur = cur.next
    n = len(vals)
    return max(vals[i] + vals[n-1-i] for i in range(n // 2))
`,

  'k-radius-subarray-averages': `
def getAverages(nums, k):
    nums = list(nums)
    n = len(nums)
    w = 2 * k + 1
    avgs = [-1] * n
    if w > n:
        return avgs
    s = sum(nums[:w])
    avgs[k] = s // w
    for i in range(k + 1, n - k):
        s += nums[i + k] - nums[i - k - 1]
        avgs[i] = s // w
    return avgs
`,

  'number-of-ways-select-buildings': `
def numberOfWays(s):
    c0 = c1 = c01 = c10 = ans = 0
    for ch in s:
        if ch == '0':
            c10 += c1
            ans += c01
            c0 += 1
        else:
            c01 += c0
            ans += c10
            c1 += 1
    return ans
`,

  'find-city-smallest-number-neighbors': `
def findTheCity(n, edges, distanceThreshold):
    INF = float('inf')
    dist = [[INF] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in edges:
        dist[u][v] = w
        dist[v][u] = w
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    ans = -1
    min_n = n + 1
    for i in range(n):
        cnt = sum(1 for j in range(n) if j != i and dist[i][j] <= distanceThreshold)
        if cnt <= min_n:
            min_n = cnt
            ans = i
    return ans
`,

  'total-appeal-of-string': `
def appealSum(s):
    last = {}
    dp = ans = 0
    for i, c in enumerate(s):
        dp += i - last.get(c, -1)
        ans += dp
        last[c] = i
    return ans
`,

  'minimum-fuel-cost-report-capital': `
import sys
sys.setrecursionlimit(200000)
def minimumFuelCost(roads, seats):
    n = len(roads) + 1
    adj = [[] for _ in range(n)]
    for u, v in roads:
        adj[u].append(v)
        adj[v].append(u)
    ans = [0]
    def dfs(u, p):
        sz = 1
        for v in adj[u]:
            if v != p:
                sz += dfs(v, u)
        if u != 0:
            import math
            ans[0] += math.ceil(sz / seats)
        return sz
    dfs(0, -1)
    return ans[0]
`,

  'robot-return-to-origin': `
def judgeCircle(moves):
    x, y = 0, 0
    for c in moves:
        if c == 'U': y += 1
        elif c == 'D': y -= 1
        elif c == 'L': x -= 1
        else: x += 1
    return x == 0 and y == 0
`,

  'count-sorted-vowel-strings': `
def countVowelStrings(n):
    dp = [1, 1, 1, 1, 1]
    for _ in range(1, n):
        next_dp = [0] * 5
        acc = 0
        for v in range(5):
            acc += dp[v]
            next_dp[v] = acc
        dp = next_dp
    return sum(dp)
`,

  'maximum-product-of-word-lengths': `
def maxProduct(words):
    words = list(words)
    masks = []
    for w in words:
        m = 0
        for c in w:
            m |= (1 << (ord(c) - ord('a')))
        masks.append(m)
    max_val = 0
    for i in range(len(words)):
        for j in range(i + 1, len(words)):
            if not (masks[i] & masks[j]):
                max_val = max(max_val, len(words[i]) * len(words[j]))
    return max_val
`,

  'exclusive-time-of-functions': `
def exclusiveTime(n, logs):
    logs = list(logs)
    result = [0] * n
    stack = []
    prev = 0
    for log in logs:
        parts = log.split(':')
        fid = int(parts[0])
        typ = parts[1]
        t = int(parts[2])
        if typ == 'start':
            if stack:
                result[stack[-1]] += t - prev
            stack.append(fid)
            prev = t
        else:
            result[fid] += t - prev + 1
            stack.pop()
            prev = t + 1
    return result
`,

  'as-far-from-land-as-possible': `
def maxDistance(grid):
    grid = [list(row) for row in grid]
    n = len(grid)
    dist = [[0 if grid[r][c] == 1 else -1 for c in range(n)] for r in range(n)]
    q = [(r, c) for r in range(n) for c in range(n) if grid[r][c] == 1]
    if len(q) == 0 or len(q) == n * n:
        return -1
    head = 0
    max_d = -1
    while head < len(q):
        r, c = q[head]
        head += 1
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and dist[nr][nc] == -1:
                dist[nr][nc] = dist[r][c] + 1
                max_d = max(max_d, dist[nr][nc])
                q.append((nr, nc))
    return max_d
`,

  'cheapest-flights-within-k-stops': `
def findCheapestPrice(n, flights, src, dst, k):
    flights = [list(f) for f in flights]
    prices = [float('inf')] * n
    prices[src] = 0
    for _ in range(k + 1):
        tmp = prices[:]
        for frm, to, price in flights:
            if prices[frm] < float('inf'):
                tmp[to] = min(tmp[to], prices[frm] + price)
        prices = tmp
    return prices[dst] if prices[dst] < float('inf') else -1
`,

  'sorted-array-to-bst': `
def sortedArrayToBST(nums):
    import math
    def build(lo, hi):
        if lo > hi:
            return None
        mid = lo + math.ceil((hi - lo) / 2)
        node = TreeNode(nums[mid])
        node.left = build(lo, mid - 1)
        node.right = build(mid + 1, hi)
        return node
    return build(0, len(nums) - 1)
`,

  'factorial-trailing-zeroes': `
def trailingZeroes(n):
    count = 0
    while n >= 5:
        n //= 5
        count += n
    return count
`,

  'unique-binary-search-trees': `
def numTrees(n):
    dp = [0] * (n + 1)
    dp[0] = 1
    if n >= 1:
        dp[1] = 1
    for i in range(2, n + 1):
        for j in range(1, i + 1):
            dp[i] += dp[j - 1] * dp[i - j]
    return dp[n]
`,

  'non-decreasing-array': `
def checkPossibility(nums):
    nums = list(nums)
    count = 0
    for i in range(len(nums) - 1):
        if nums[i] > nums[i + 1]:
            count += 1
            if count > 1:
                return False
            if i > 0 and nums[i - 1] > nums[i + 1]:
                nums[i + 1] = nums[i]
            else:
                nums[i] = nums[i + 1]
    return True
`,

  'best-time-buy-sell-iii': `
def maxProfitIII(prices):
    prices = list(prices)
    buy1 = float('-inf')
    sell1 = 0
    buy2 = float('-inf')
    sell2 = 0
    for p in prices:
        buy1 = max(buy1, -p)
        sell1 = max(sell1, buy1 + p)
        buy2 = max(buy2, sell1 - p)
        sell2 = max(sell2, buy2 + p)
    return sell2
`,

  'deepest-leaves-sum': `
def deepestLeavesSum(root):
    from collections import deque
    if not root:
        return 0
    q = deque([root])
    level_sum = 0
    while q:
        n = len(q)
        level_sum = 0
        for _ in range(n):
            nd = q.popleft()
            level_sum += nd.val
            if nd.left:
                q.append(nd.left)
            if nd.right:
                q.append(nd.right)
    return level_sum
`,

  'count-subarrays-fixed-bounds': `
def countSubarrays(nums, minK, maxK):
    nums = list(nums)
    min_pos = max_pos = bad_pos = -1
    ans = 0
    for i, x in enumerate(nums):
        if x < minK or x > maxK:
            bad_pos = i
        if x == minK:
            min_pos = i
        if x == maxK:
            max_pos = i
        ans += max(0, min(min_pos, max_pos) - bad_pos)
    return ans
`,

  'amount-of-time-for-binary-tree-to-be-infected': `
from collections import defaultdict, deque
def amountOfTime(root, start):
    adj = defaultdict(list)
    def build(node):
        if not node:
            return
        if node.left:
            adj[node.val].append(node.left.val)
            adj[node.left.val].append(node.val)
            build(node.left)
        if node.right:
            adj[node.val].append(node.right.val)
            adj[node.right.val].append(node.val)
            build(node.right)
    build(root)
    visited = {start}
    q = deque([start])
    ans = 0
    while q:
        nxt = []
        for _ in range(len(q)):
            u = q.popleft()
            for v in adj[u]:
                if v not in visited:
                    visited.add(v)
                    nxt.append(v)
        if nxt:
            ans += 1
            q.extend(nxt)
    return ans
`,

  'count-collisions-on-road': `
def countCollisions(directions):
    s = list(directions)
    n = len(s)
    l = 0
    while l < n and s[l] == 'L':
        l += 1
    r = n - 1
    while r >= 0 and s[r] == 'R':
        r -= 1
    return sum(1 for c in s[l:r+1] if c != 'S')
`,

  'maximum-alternating-subsequence-sum': `
def maxAlternatingSum(nums):
    nums = list(nums)
    even = odd = 0
    for x in nums:
        ne = max(even, odd + x)
        no = max(odd, even - x)
        even, odd = ne, no
    return even
`,

  'count-hills-valleys': `
def countHillValley(nums):
    nums = list(nums)
    deduped = [nums[0]]
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            deduped.append(nums[i])
    count = 0
    for i in range(1, len(deduped) - 1):
        if deduped[i] > deduped[i - 1] and deduped[i] > deduped[i + 1]:
            count += 1
        elif deduped[i] < deduped[i - 1] and deduped[i] < deduped[i + 1]:
            count += 1
    return count
`,

  'find-all-lonely-numbers': `
def findLonely(nums):
    from collections import Counter
    freq = Counter(nums)
    res = []
    for n, c in freq.items():
        if c == 1 and (n - 1) not in freq and (n + 1) not in freq:
            res.append(n)
    return sorted(res)
`,

  'count-prefixes-of-given-string': `
def countPrefixes(words, s):
    words = list(words)
    return sum(1 for w in words if s.startswith(w))
`,

  'minimum-number-game': `
def numberGame(nums):
    nums = sorted(nums)
    arr = []
    for i in range(0, len(nums), 2):
        arr.append(nums[i + 1])
        arr.append(nums[i])
    return arr
`,

  'find-words-containing-character': `
def findWordsContaining(words, x):
    words = list(words)
    return [i for i, w in enumerate(words) if x in w]
`,

  'count-good-numbers': `
def countGoodNumbers(n):
    MOD = 10 ** 9 + 7
    even = (n + 1) // 2
    odd = n // 2
    return pow(5, even, MOD) * pow(4, odd, MOD) % MOD
`,

  'maximum-sum-exactly-k-elements': `
def maximizeSum(nums, k):
    nums = list(nums)
    m = max(nums)
    return k * m + k * (k - 1) // 2
`,

  'minimum-common-value': `
def getCommon(nums1, nums2):
    nums1, nums2 = list(nums1), list(nums2)
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] == nums2[j]:
            return nums1[i]
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            j += 1
    return -1
`,

  'find-pivot-integer': `
def findPivot(n):
    import math
    s = n * (n + 1) // 2
    x = int(math.isqrt(s))
    return x if x * x == s else -1
`,

  'compare-version-numbers': `
def compareVersion(version1, version2):
    a = version1.split('.')
    b = version2.split('.')
    n = max(len(a), len(b))
    for i in range(n):
        x = int(a[i]) if i < len(a) else 0
        y = int(b[i]) if i < len(b) else 0
        if x < y:
            return -1
        if x > y:
            return 1
    return 0
`,

  'open-the-lock': `
from collections import deque
def openLock(deadends, target):
    dead = set(deadends)
    if '0000' in dead:
        return -1
    if target == '0000':
        return 0
    vis = set(dead)
    vis.add('0000')
    q = deque(['0000'])
    steps = 0
    while q:
        steps += 1
        for _ in range(len(q)):
            s = q.popleft()
            for i in range(4):
                for d in (1, -1):
                    ns = list(s)
                    ns[i] = str((int(ns[i]) + d) % 10)
                    t = ''.join(ns)
                    if t == target:
                        return steps
                    if t not in vis:
                        vis.add(t)
                        q.append(t)
    return -1
`,

  'diagonal-traverse': `
def findDiagonalOrder(mat):
    mat = [list(row) for row in mat]
    m, n = len(mat), len(mat[0])
    res = []
    for d in range(m + n - 1):
        tmp = []
        r_min = max(0, d - n + 1)
        r_max = min(d, m - 1)
        for r in range(r_min, r_max + 1):
            tmp.append(mat[r][d - r])
        if d % 2 == 0:
            tmp.reverse()
        res.extend(tmp)
    return res
`,

  'reshape-the-matrix': `
def matrixReshape(mat, r, c):
    mat = [list(row) for row in mat]
    flat = [x for row in mat for x in row]
    if len(flat) != r * c:
        return mat
    return [[flat[i * c + j] for j in range(c)] for i in range(r)]
`,

  'find-town-judge': `
def findJudge(n, trust):
    trust = list(trust)
    s = [0] * (n + 1)
    for a, b in trust:
        s[a] -= 1
        s[b] += 1
    for i in range(1, n + 1):
        if s[i] == n - 1:
            return i
    return -1
`,

  'possible-bipartition': `
from collections import deque
def possibleBipartition(n, dislikes):
    dislikes = list(dislikes)
    adj = [[] for _ in range(n + 1)]
    for a, b in dislikes:
        adj[a].append(b)
        adj[b].append(a)
    color = [-1] * (n + 1)
    for s in range(1, n + 1):
        if color[s] != -1:
            continue
        color[s] = 0
        q = deque([s])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if color[v] == -1:
                    color[v] = 1 - color[u]
                    q.append(v)
                elif color[v] == color[u]:
                    return False
    return True
`,

  'flip-string-to-monotone-increasing': `
def minFlipsMonoIncr(s):
    flips = ones = 0
    for c in s:
        if c == '1':
            ones += 1
        else:
            flips = min(flips + 1, ones)
    return flips
`,

  'maximum-length-subarray-positive-product': `
def getMaxLen(nums):
    nums = list(nums)
    pos = neg = ans = 0
    for n in nums:
        if n == 0:
            pos = neg = 0
        elif n > 0:
            pos = pos + 1
            neg = neg + 1 if neg > 0 else 0
        else:
            pos, neg = (neg + 1 if neg > 0 else 0), pos + 1
        ans = max(ans, pos)
    return ans
`,

  'minimum-days-to-make-m-bouquets': `
def minDays(bloomDay, m, k):
    bloomDay = list(bloomDay)
    n = len(bloomDay)
    if m * k > n:
        return -1
    def can_make(day):
        bouquets = streak = 0
        for b in bloomDay:
            if b <= day:
                streak += 1
                if streak == k:
                    bouquets += 1
                    streak = 0
            else:
                streak = 0
        return bouquets >= m
    lo, hi = 1, max(bloomDay)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_make(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'find-resultant-array-after-removing-anagrams': `
def removeAnagrams(words):
    words = list(words)
    def sorted_word(w):
        return tuple(sorted(w))
    stack = []
    for w in words:
        if not stack or sorted_word(stack[-1]) != sorted_word(w):
            stack.append(w)
    return stack
`,

  'longest-zigzag-path-binary-tree': `
def longestZigZag(root):
    ans = [0]
    def dfs(node):
        if not node:
            return -1, -1
        ll, lr = dfs(node.left)
        rl, rr = dfs(node.right)
        go_left = lr + 1
        go_right = rl + 1
        ans[0] = max(ans[0], go_left, go_right)
        return go_left, go_right
    dfs(root)
    return ans[0]
`,

  'two-sum-ii': `
def twoSumII(numbers, target):
    numbers = list(numbers)
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target:
            return [l + 1, r + 1]
        elif s < target:
            l += 1
        else:
            r -= 1
    return [-1, -1]
`,

  'set-mismatch': `
def findErrorNums(nums):
    nums = list(nums)
    n = len(nums)
    cnt = [0] * (n + 1)
    for x in nums:
        cnt[x] += 1
    dup = miss = -1
    for i in range(1, n + 1):
        if cnt[i] == 2:
            dup = i
        if cnt[i] == 0:
            miss = i
    return [dup, miss]
`,

  'maximum-gap': `
def maximumGap(nums):
    nums = sorted(nums)
    if len(nums) < 2:
        return 0
    return max(nums[i] - nums[i - 1] for i in range(1, len(nums)))
`,

  'array-partition': `
def arrayPairSum(nums):
    nums = sorted(nums)
    return sum(nums[i] for i in range(0, len(nums), 2))
`,

  'power-of-four': `
def isPowerOfFour(n):
    if n <= 0:
        return False
    if n & (n - 1) != 0:
        return False
    return n & 0xAAAAAAAA == 0
`,

  'valid-palindrome-ii': `
def validPalindrome(s):
    def is_palin(l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1; r -= 1
        return True
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return is_palin(l + 1, r) or is_palin(l, r - 1)
        l += 1; r -= 1
    return True
`,

  'bulb-switcher': `
import math
def bulbSwitch(n):
    return int(math.isqrt(n))
`,

  'self-dividing-numbers': `
def selfDividingNumbers(left, right):
    result = []
    for n in range(left, right + 1):
        x = n
        ok = True
        while x > 0:
            d = x % 10
            if d == 0 or n % d != 0:
                ok = False
                break
            x //= 10
        if ok:
            result.append(n)
    return result
`,

  'student-attendance-record-i': `
def checkRecord(s):
    return s.count('A') < 2 and 'LLL' not in s
`,

  'license-key-formatting': `
def licenseKeyFormatting(s, k):
    s = s.replace('-', '').upper()
    result = []
    i = len(s)
    while i > 0:
        result.append(s[max(0, i - k):i])
        i -= k
    return '-'.join(reversed(result))
`,

  'keyboard-row': `
def findWords(words):
    words = list(words)
    rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    row_of = {}
    for r, row in enumerate(rows):
        for c in row:
            row_of[c] = r
    result = []
    for w in words:
        r = row_of[w[0].lower()]
        if all(row_of[c.lower()] == r for c in w):
            result.append(w)
    return result
`,

  'longest-uncommon-subsequence-i': `
def findLUSlength(a, b):
    if a == b:
        return -1
    return max(len(a), len(b))
`,

  'perfect-number': `
def checkPerfectNumber(num):
    if num <= 1:
        return False
    total = 1
    i = 2
    while i * i <= num:
        if num % i == 0:
            total += i
            if i != num // i:
                total += num // i
        i += 1
    return total == num
`,

  'arrange-coins': `
def arrangeCoins(n):
    import math
    return int((-1 + math.sqrt(1 + 8 * n)) / 2)
`,

  'nth-digit': `
def findNthDigit(n):
    d, cnt, start = 1, 9, 1
    while n > d * cnt:
        n -= d * cnt
        d += 1
        cnt *= 10
        start *= 10
    num = start + (n - 1) // d
    return int(str(num)[(n - 1) % d])
`,

  'find-the-winner': `
def findTheWinner(n, k):
    pos = 0
    for i in range(2, n + 1):
        pos = (pos + k) % i
    return pos + 1
`,

  'count-negative-numbers': `
def countNegatives(grid):
    grid = [list(row) for row in grid]
    r, c, cnt = 0, len(grid[0]) - 1, 0
    while r < len(grid) and c >= 0:
        if grid[r][c] < 0:
            cnt += len(grid) - r
            c -= 1
        else:
            r += 1
    return cnt
`,

  'can-make-arithmetic-progression': `
def canMakeArithmeticProgression(arr):
    arr = sorted(arr)
    d = arr[1] - arr[0]
    return all(arr[i] - arr[i - 1] == d for i in range(2, len(arr)))
`,

  'first-bad-version': `
def firstBadVersion(n, is_bad_version):
    lo, hi = 1, n
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if is_bad_version(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'number-of-segments-in-string': `
def countSegments(s):
    return len(s.split())
`,

  'find-mode-bst': `
from collections import Counter
def findMode(root):
    freq = Counter()
    def dfs(node):
        if not node:
            return
        freq[node.val] += 1
        dfs(node.left)
        dfs(node.right)
    dfs(root)
    if not freq:
        return []
    max_count = max(freq.values())
    return sorted(v for v, c in freq.items() if c == max_count)
`,

  'final-value-after-operations': `
def finalValueAfterOperations(ops):
    ops = list(ops)
    x = 0
    for op in ops:
        x += 1 if '+' in op else -1
    return x
`,

  'find-original-array-from-doubled': `
def findOriginalArray(changed):
    from collections import Counter
    changed = sorted(list(changed))
    freq = Counter(changed)
    result = []
    for n in changed:
        if freq[n] == 0:
            continue
        freq[n] -= 1
        d = n * 2
        if freq[d] == 0:
            return []
        freq[d] -= 1
        result.append(n)
    return result
`,

  'number-of-students-unable-to-eat-lunch': `
def countStudents(students, sandwiches):
    students = list(students)
    sandwiches = list(sandwiches)
    cnt = [students.count(0), students.count(1)]
    for sand in sandwiches:
        if cnt[sand] == 0:
            return cnt[0] + cnt[1]
        cnt[sand] -= 1
    return 0
`,

  'maximum-number-of-words-found-in-sentences': `
def mostWordsFound(sentences):
    sentences = list(sentences)
    return max(len(s.split()) for s in sentences)
`,

  'capitalize-the-title': `
def capitalizeTitle(title):
    result = []
    for w in title.split():
        if len(w) <= 2:
            result.append(w.lower())
        else:
            result.append(w[0].upper() + w[1:].lower())
    return ' '.join(result)
`,

  'hamming-distance': `
def hammingDistance(x, y):
    return bin(x ^ y).count('1')
`,

  'single-number-iii': `
def singleNumberIII(nums):
    nums = list(nums)
    xor = 0
    for n in nums:
        xor ^= n
    bit = xor & (-xor)
    a = 0
    for n in nums:
        if n & bit:
            a ^= n
    return sorted([a, xor ^ a])
`,

  'minimum-operations-to-make-array-increasing': `
def minOperations(nums):
    nums = list(nums)
    ops = 0
    for i in range(1, len(nums)):
        if nums[i] <= nums[i - 1]:
            ops += nums[i - 1] + 1 - nums[i]
            nums[i] = nums[i - 1] + 1
    return ops
`,

  'rank-transform-array': `
def arrayRankTransform(arr):
    sorted_unique = sorted(set(arr))
    rank = {v: i + 1 for i, v in enumerate(sorted_unique)}
    return [rank[x] for x in arr]
`,

  'final-value-operations': `
def finalValueAfterOperations(operations):
    return sum(1 if '++' in op else -1 for op in operations)
`,

  'two-city-scheduling': `
def twoCitySchedCost(costs):
    costs = sorted(list(costs), key=lambda c: c[0] - c[1])
    n = len(costs) // 2
    return sum(costs[i][0] if i < n else costs[i][1] for i in range(len(costs)))
`,

  'check-if-straight-line': `
def checkStraightLine(coordinates):
    coordinates = [list(p) for p in coordinates]
    x1, y1 = coordinates[0]
    x2, y2 = coordinates[1]
    return all((y2 - y1) * (p[0] - x1) == (p[1] - y1) * (x2 - x1) for p in coordinates)
`,

  'binary-gap': `
def binaryGap(n):
    last, best, pos = -1, 0, 0
    while n:
        if n & 1:
            if last >= 0:
                best = max(best, pos - last)
            last = pos
        n >>= 1
        pos += 1
    return best
`,

  'design-hashmap': `
def designHashMapRunner(ops, vals):
    ops = list(ops)
    vals = [list(v) for v in vals]
    data = {}
    results = [None]
    for i in range(1, len(ops)):
        if ops[i] == 'put':
            data[vals[i][0]] = vals[i][1]
            results.append(None)
        elif ops[i] == 'get':
            results.append(data.get(vals[i][0], -1))
        else:
            data.pop(vals[i][0], None)
            results.append(None)
    return results
`,

  'contiguous-array': `
def findMaxLength(nums):
    nums = list(nums)
    mp = {0: -1}
    total = ans = 0
    for i, n in enumerate(nums):
        total += -1 if n == 0 else 1
        if total in mp:
            ans = max(ans, i - mp[total])
        else:
            mp[total] = i
    return ans
`,

  'shifting-letters': `
def shiftingLetters(s, shifts):
    shifts = list(shifts)
    n = len(shifts)
    for i in range(n - 2, -1, -1):
        shifts[i] = (shifts[i] + shifts[i + 1]) % 26
    return ''.join(chr((ord(c) - ord('a') + shifts[i]) % 26 + ord('a')) for i, c in enumerate(s))
`,

  'convert-bst-to-greater-tree': `
def convertBST(root):
    total = [0]
    def dfs(node):
        if not node:
            return
        dfs(node.right)
        total[0] += node.val
        node.val = total[0]
        dfs(node.left)
    dfs(root)
    return root
`,

  'distribute-coins-binary-tree': `
def distributeCoins(root):
    moves = [0]
    def dfs(node):
        if not node:
            return 0
        l, r = dfs(node.left), dfs(node.right)
        moves[0] += abs(l) + abs(r)
        return node.val + l + r - 1
    dfs(root)
    return moves[0]
`,

  'flip-columns-for-maximum-equal-rows': `
def maxEqualRowsAfterFlips(matrix):
    matrix = [list(row) for row in matrix]
    from collections import Counter
    def normalize(row):
        if row[0] == 1:
            return tuple(1 - x for x in row)
        return tuple(row)
    return max(Counter(normalize(row) for row in matrix).values())
`,

  'delete-columns-sorted-iii': `
def minDeletionSize(strs):
    strs = list(strs)
    n = len(strs[0])
    dp = [1] * n
    for j in range(1, n):
        for i in range(j):
            if all(strs[k][i] <= strs[k][j] for k in range(len(strs))):
                dp[j] = max(dp[j], dp[i] + 1)
    return n - max(dp)
`,

  'minimum-bit-flips': `
def minBitFlips(start, goal):
    return bin(start ^ goal).count('1')
`,

  'smallest-even-multiple': `
def smallestEvenMultiple(n):
    return n if n % 2 == 0 else 2 * n
`,

  'special-array-greater-equal': `
def specialArray(nums):
    n = len(nums)
    for x in range(n + 1):
        if sum(1 for v in nums if v >= x) == x:
            return x
    return -1
`,

  'count-pairs-two-arrays': `
def countPairs(nums, target):
    nums = sorted(nums)
    l, r, cnt = 0, len(nums) - 1, 0
    while l < r:
        if nums[l] + nums[r] < target:
            cnt += r - l
            l += 1
        else:
            r -= 1
    return cnt
`,

  'convert-time-hhmm': `
def convertTime(current, correct):
    def to_min(s):
        return int(s[:2]) * 60 + int(s[3:])
    d = to_min(correct) - to_min(current)
    ops = 0
    for step in [60, 15, 5, 1]:
        ops += d // step
        d %= step
    return ops
`,

  'find-players-zero-losses': `
def findWinners(matches):
    matches = [list(m) for m in matches]
    from collections import defaultdict
    losses = defaultdict(int)
    for w, l in matches:
        if w not in losses:
            losses[w] = 0
        losses[l] += 1
    no_loss = sorted(p for p, cnt in losses.items() if cnt == 0)
    one_loss = sorted(p for p, cnt in losses.items() if cnt == 1)
    return [no_loss, one_loss]
`,

  'check-distances-fair-nodes': `
def checkDistances(s, distance):
    distance = list(distance)
    first = {}
    for i, c in enumerate(s):
        if c not in first:
            first[c] = i
        else:
            if i - first[c] - 1 != distance[ord(c) - ord('a')]:
                return False
    return True
`,

  'minimum-rounds-complete-tasks': `
def minimumRounds(tasks):
    tasks = list(tasks)
    from collections import Counter
    freq = Counter(tasks)
    rounds = 0
    for f in freq.values():
        if f == 1:
            return -1
        rounds += (f + 2) // 3
    return rounds
`,

  'largest-combination-bitwise-and': `
def largestCombination(candidates):
    candidates = list(candidates)
    best = 0
    for bit in range(24):
        cnt = sum(1 for c in candidates if c & (1 << bit))
        best = max(best, cnt)
    return best
`,

  'sort-the-people': `
def sortPeople(names, heights):
    names = list(names)
    heights = list(heights)
    paired = sorted(zip(heights, names), reverse=True)
    return [name for _, name in paired]
`,

  'baseball-game': `
def calPoints(ops):
    ops = list(ops)
    stack = []
    for o in ops:
        if o == '+':
            stack.append(stack[-1] + stack[-2])
        elif o == 'D':
            stack.append(stack[-1] * 2)
        elif o == 'C':
            stack.pop()
        else:
            stack.append(int(o))
    return sum(stack)
`,

  'find-champion-graph': `
def findChampion(grid):
    grid = [list(row) for row in grid]
    n = len(grid)
    for i in range(n):
        if sum(grid[i]) == n - 1:
            return i
    return -1
`,

  'count-digits': `
def countDigits(num):
    n, c = num, 0
    while n > 0:
        d = n % 10
        if d != 0 and num % d == 0:
            c += 1
        n //= 10
    return c
`,

  'apply-operations': `
def applyOperations(nums):
    nums = list(nums)
    n = len(nums)
    for i in range(n - 1):
        if nums[i] != 0 and nums[i] == nums[i + 1]:
            nums[i] *= 2
            nums[i + 1] = 0
    return [x for x in nums if x != 0] + [x for x in nums if x == 0]
`,

  'minimum-moves-to-seat': `
def minMovesToSeat(seats, students):
    seats = sorted(seats)
    students = sorted(students)
    return sum(abs(s - t) for s, t in zip(seats, students))
`,

  'rings-and-rods': `
def countPoints(rings):
    rods = {}
    for i in range(0, len(rings), 2):
        c, r = rings[i], rings[i+1]
        if r not in rods:
            rods[r] = set()
        rods[r].add(c)
    return sum(1 for s in rods.values() if len(s) == 3)
`,

  'find-gcd-of-array': `
def findGCD(nums):
    nums = list(nums)
    from math import gcd
    return gcd(min(nums), max(nums))
`,

  'keep-multiplying-found-values': `
def findFinalValue(nums, original):
    s = set(nums)
    while original in s:
        original *= 2
    return original
`,

  'percentages-of-letter': `
def percentageLetter(s, letter):
    return int(s.count(letter) / len(s) * 100)
`,

  'maximum-bags-full-capacity': `
def maximumBags(capacity, rocks, additionalRocks):
    capacity = list(capacity)
    rocks = list(rocks)
    rem = sorted(c - r for c, r in zip(capacity, rocks))
    bags = 0
    for r in rem:
        if r <= additionalRocks:
            additionalRocks -= r
            bags += 1
        else:
            break
    return bags
`,

  'find-subsequence-of-length-k': `
def maxSubsequence(nums, k):
    nums = list(nums)
    idx = sorted(range(len(nums)), key=lambda i: -nums[i])[:k]
    idx.sort()
    return [nums[i] for i in idx]
`,

  'odd-string-difference': `
def oddString(words):
    words = list(words)
    def diff(w):
        return tuple(ord(w[i+1]) - ord(w[i]) for i in range(len(w)-1))
    from collections import defaultdict
    m = defaultdict(list)
    for w in words:
        m[diff(w)].append(w)
    for v in m.values():
        if len(v) == 1:
            return v[0]
`,

  'best-time-buy-sell-transaction-fee': `
def maxProfit(prices, fee):
    prices = list(prices)
    cash, hold = 0, -prices[0]
    for p in prices[1:]:
        cash = max(cash, hold + p - fee)
        hold = max(hold, cash - p)
    return cash
`,

  'maximal-rectangle': `
def maximalRectangle(matrix):
    matrix = [list(row) for row in matrix]
    if not matrix or not matrix[0]:
        return 0
    cols = len(matrix[0])
    heights = [0] * cols
    max_area = 0
    def largest_rect(h):
        stack, area = [], 0
        for i in range(len(h) + 1):
            cur = 0 if i == len(h) else h[i]
            while stack and h[stack[-1]] > cur:
                height = h[stack.pop()]
                width = i if not stack else i - stack[-1] - 1
                area = max(area, height * width)
            stack.append(i)
        return area
    for row in matrix:
        for c in range(cols):
            heights[c] = heights[c] + 1 if row[c] == '1' else 0
        max_area = max(max_area, largest_rect(heights))
    return max_area
`,

  'stone-game-iii': `
def stoneGameIII(stoneValue):
    stoneValue = list(stoneValue)
    n = len(stoneValue)
    dp = [float('-inf')] * (n + 1)
    dp[n] = 0
    for i in range(n - 1, -1, -1):
        s = 0
        for k in range(1, 4):
            if i + k > n:
                break
            s += stoneValue[i + k - 1]
            dp[i] = max(dp[i], s - dp[i + k])
    if dp[0] > 0:
        return 'Alice'
    elif dp[0] < 0:
        return 'Bob'
    return 'Tie'
`,

  'maximum-profit-job-scheduling': `
def jobScheduling(startTime, endTime, profit):
    import bisect
    startTime = list(startTime)
    endTime = list(endTime)
    profit = list(profit)
    jobs = sorted(zip(endTime, startTime, profit))
    ends = [j[0] for j in jobs]
    dp = [0] * (len(jobs) + 1)
    for i, (end, start, p) in enumerate(jobs):
        j = bisect.bisect_right(ends, start)
        dp[i + 1] = max(dp[i], p + dp[j])
    return dp[len(jobs)]
`,

  'count-of-smaller-numbers-after-self': `
def countSmaller(nums):
    nums = list(nums)
    counts = [0] * len(nums)
    sorted_arr = []
    import bisect
    for i in range(len(nums) - 1, -1, -1):
        pos = bisect.bisect_left(sorted_arr, nums[i])
        counts[i] = pos
        sorted_arr.insert(pos, nums[i])
    return counts
`,

  'k-th-symbol-in-grammar': `
def kthGrammar(n, k):
    flips = 0
    while k > 1:
        if k % 2 == 0:
            flips += 1
        k = (k + 1) // 2
    return flips % 2
`,

  'longest-substring-without-repeating': `
def lengthOfLongestSubstring(s):
    last_seen = {}
    left = best = 0
    for right, c in enumerate(s):
        if c in last_seen and last_seen[c] >= left:
            left = last_seen[c] + 1
        last_seen[c] = right
        best = max(best, right - left + 1)
    return best
`,

  'decompress-run-length-encoding': `
def decompressRLElist(nums):
    nums = list(nums)
    res = []
    for i in range(0, len(nums), 2):
        res.extend([nums[i+1]] * nums[i])
    return res
`,

  'check-almost-equivalent-strings': `
def checkAlmostEquivalent(word1, word2):
    from collections import Counter
    c1, c2 = Counter(word1), Counter(word2)
    return all(abs(c1.get(c, 0) - c2.get(c, 0)) <= 3 for c in 'abcdefghijklmnopqrstuvwxyz')
`,

  'minimum-value-positive-steps': `
def minStartValue(nums):
    nums = list(nums)
    s, mn = 0, float('inf')
    for n in nums:
        s += n
        mn = min(mn, s)
    return max(1, 1 - mn)
`,

  'check-if-all-as-before-bs': `
def checkString(s):
    seen_b = False
    for c in s:
        if c == 'b':
            seen_b = True
        elif seen_b:
            return False
    return True
`,

  'check-if-word-equals-summation': `
def isSumEqual(firstWord, secondWord, targetWord):
    def to_num(w):
        return int(''.join(str(ord(c) - ord('a')) for c in w))
    return to_num(firstWord) + to_num(secondWord) == to_num(targetWord)
`,

  'ways-to-buy-pens-pencils': `
def waysToBuyPensPencils(total, cost1, cost2):
    ans = 0
    x = 0
    while x * cost1 <= total:
        ans += (total - x * cost1) // cost2 + 1
        x += 1
    return ans
`,

  'check-array-sorted-rotated': `
def check(nums):
    nums = list(nums)
    n = len(nums)
    drops = sum(1 for i in range(n) if nums[i] > nums[(i+1) % n])
    return drops <= 1
`,

  'interpret-string': `
def interpret(command):
    return command.replace('(al)', 'al').replace('()', 'o')
`,

  'merge-similar-items': `
def mergeSimilarItems(items1, items2):
    items1 = [list(x) for x in items1]
    items2 = [list(x) for x in items2]
    from collections import defaultdict
    m = defaultdict(int)
    for v, w in items1 + items2:
        m[v] += w
    return sorted([v, w] for v, w in m.items())
`,

  'count-good-rectangles': `
def countGoodRectangles(rectangles):
    rectangles = [list(r) for r in rectangles]
    sides = [min(l, w) for l, w in rectangles]
    mx = max(sides)
    return sum(1 for s in sides if s == mx)
`,

  'maximum-population-year': `
def maximumPopulation(logs):
    logs = [list(l) for l in logs]
    diff = [0] * 101
    for b, d in logs:
        diff[b - 1950] += 1
        diff[d - 1950] -= 1
    mx, yr, cur = 0, 1950, 0
    for i in range(101):
        cur += diff[i]
        if cur > mx:
            mx, yr = cur, i + 1950
    return yr
`,

  'find-kth-bit-nth-binary-string': `
def findKthBit(n, k):
    def f(n, k):
        if n == 1:
            return '0'
        mid = 1 << (n - 1)
        if k == mid:
            return '1'
        if k < mid:
            return f(n - 1, k)
        bit = f(n - 1, (1 << n) - k)
        return '1' if bit == '0' else '0'
    return f(n, k)
`,

  'count-operations-to-obtain-zero': `
def countOperations(num1, num2):
    count = 0
    while num1 > 0 and num2 > 0:
        if num1 >= num2:
            num1 -= num2
        else:
            num2 -= num1
        count += 1
    return count
`,

  'design-underground-system': `
def undergroundSystem(operations):
    check_ins = {}
    routes = {}
    results = []
    for op in operations:
        if op[0] == 'checkIn':
            check_ins[op[1]] = (op[2], op[3])
        elif op[0] == 'checkOut':
            start_station, start_time = check_ins.pop(op[1])
            key = (start_station, op[2])
            total, count = routes.get(key, (0, 0))
            routes[key] = (total + op[3] - start_time, count + 1)
        else:
            key = (op[1], op[2])
            total, count = routes[key]
            results.append(total / count)
    return results
`,

  'sort-vowels-in-a-string': `
def sortVowels(s):
    vowels = set('aeiouAEIOU')
    extracted = sorted(c for c in s if c in vowels)
    idx = 0
    result = []
    for c in s:
        if c in vowels:
            result.append(extracted[idx])
            idx += 1
        else:
            result.append(c)
    return ''.join(result)
`,

  'minimum-time-to-repair-cars': `
def repairCars(ranks, cars):
    import math
    lo, hi = 1, min(ranks) * cars * cars
    while lo < hi:
        mid = (lo + hi) // 2
        total = sum(int(math.sqrt(mid / r)) for r in ranks)
        if total >= cars:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'number-of-matching-subsequences': `
def numMatchingSubseq(s, words):
    def is_subseq(w):
        i = 0
        for c in s:
            if i < len(w) and c == w[i]:
                i += 1
        return i == len(w)
    return sum(1 for w in words if is_subseq(w))
`,

  'lfu-cache': `
def lfuCache(capacity, operations):
    from collections import OrderedDict
    key_map = {}
    freq_map = {}
    min_freq = 0
    results = []

    def increment_freq(key):
        nonlocal min_freq
        value, freq = key_map[key]
        key_map[key] = [value, freq + 1]
        freq_map[freq].pop(key)
        if not freq_map[freq]:
            del freq_map[freq]
            if min_freq == freq:
                min_freq = freq + 1
        freq_map.setdefault(freq + 1, OrderedDict())[key] = True

    for op in operations:
        if op[0] == 'get':
            key = op[1]
            if key not in key_map:
                results.append(-1)
                continue
            increment_freq(key)
            results.append(key_map[key][0])
        else:
            key, value = op[1], op[2]
            if capacity <= 0:
                continue
            if key in key_map:
                key_map[key][0] = value
                increment_freq(key)
            else:
                if len(key_map) >= capacity:
                    evict_key, _ = freq_map[min_freq].popitem(last=False)
                    if not freq_map[min_freq]:
                        del freq_map[min_freq]
                    del key_map[evict_key]
                key_map[key] = [value, 1]
                freq_map.setdefault(1, OrderedDict())[key] = True
                min_freq = 1
    return results
`,

  'smallest-range-covering-k-lists': `
def smallestRange(nums):
    import heapq
    heap = []
    cur_max = float('-inf')
    for i, lst in enumerate(nums):
        heapq.heappush(heap, (lst[0], i, 0))
        if lst[0] > cur_max:
            cur_max = lst[0]
    range_start = heap[0][0]
    range_end = cur_max
    while True:
        min_val, list_idx, elem_idx = heapq.heappop(heap)
        if cur_max - min_val < range_end - range_start or (cur_max - min_val == range_end - range_start and min_val < range_start):
            range_start = min_val
            range_end = cur_max
        next_idx = elem_idx + 1
        if next_idx >= len(nums[list_idx]):
            break
        next_val = nums[list_idx][next_idx]
        if next_val > cur_max:
            cur_max = next_val
        heapq.heappush(heap, (next_val, list_idx, next_idx))
    return [range_start, range_end]
`,

  'bus-routes': `
def numBusesToDestination(routes, source, target):
    from collections import defaultdict, deque
    if source == target:
        return 0
    stop_to_buses = defaultdict(list)
    for i, route in enumerate(routes):
        for stop in route:
            stop_to_buses[stop].append(i)
    visited_buses = set()
    visited_stops = {source}
    queue = deque([source])
    buses = 1
    while queue:
        next_stops = []
        for _ in range(len(queue)):
            stop = queue.popleft()
            for bus_idx in stop_to_buses[stop]:
                if bus_idx in visited_buses:
                    continue
                visited_buses.add(bus_idx)
                for s in routes[bus_idx]:
                    if s == target:
                        return buses
                    if s not in visited_stops:
                        visited_stops.add(s)
                        next_stops.append(s)
        queue = deque(next_stops)
        buses += 1
    return -1
`,

  'beautiful-arrangement-ii': `
def constructArray(n, k):
    result = []
    lo, hi = 1, k + 1
    while lo <= hi:
        result.append(lo)
        lo += 1
        if lo <= hi:
            result.append(hi)
            hi -= 1
    for i in range(k + 2, n + 1):
        result.append(i)
    return result
`,

  'maximum-score-words-formed': `
def maxScoreWords(words, letters, score):
    available = [0] * 26
    for c in letters:
        available[ord(c) - ord('a')] += 1
    best = 0
    n = len(words)
    for mask in range(1, 1 << n):
        used = [0] * 26
        total = 0
        valid = True
        for i in range(n):
            if not (mask & (1 << i)):
                continue
            for c in words[i]:
                idx = ord(c) - ord('a')
                used[idx] += 1
                total += score[idx]
                if used[idx] > available[idx]:
                    valid = False
                    break
            if not valid:
                break
        if valid and total > best:
            best = total
    return best
`,

  'largest-positive-integer-with-negative': `
def findMaxK(nums):
    nums = list(nums)
    s = set(nums)
    ans = -1
    for n in nums:
        if n > 0 and -n in s:
            ans = max(ans, n)
    return ans
`,

  'maximize-sum-k-elements': `
def largestSumAfterKNegations(nums, k):
    nums = sorted(nums, key=abs)
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] < 0 and k > 0:
            nums[i] = -nums[i]
            k -= 1
    if k % 2 == 1:
        nums[0] = -nums[0]
    return sum(nums)
`,

  'check-if-acronym': `
def isAcronym(words, s):
    words = list(words)
    return ''.join(w[0] for w in words) == s
`,

  'count-pairs-absolute-diff-k': `
def countKDifference(nums, k):
    nums = list(nums)
    cnt = 0
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if abs(nums[i] - nums[j]) == k:
                cnt += 1
    return cnt
`,

  'number-of-arithmetic-subarrays': `
def checkArithmeticSubarrays(nums, l, r):
    nums = list(nums)
    l = list(l)
    r = list(r)
    result = []
    for li, ri in zip(l, r):
        sub = sorted(nums[li:ri+1])
        d = sub[1] - sub[0]
        result.append(all(sub[j] - sub[j-1] == d for j in range(1, len(sub))))
    return result
`,


  'check-valid-matrix': `
def checkValid(matrix):
    n = len(matrix)
    def ok(arr):
        return len(set(arr)) == n and all(1 <= v <= n for v in arr)
    for row in matrix:
        if not ok(row): return False
    for j in range(n):
        if not ok([matrix[i][j] for i in range(n)]): return False
    return True
`,

  'count-max-frequency-elements': `
def maxFrequencyElements(nums):
    from collections import Counter
    freq = Counter(nums)
    max_f = max(freq.values())
    return sum(f for f in freq.values() if f == max_f)
`,

  'minimum-difference-after-k-removals': `
def minimumDifference(nums, k):
    nums = sorted(nums)
    return min(nums[i+k-1] - nums[i] for i in range(len(nums)-k+1))
`,

  'number-of-valid-clock-times': `
def countTime(time):
    cnt = 0
    for h in range(24):
        for m in range(60):
            s = f"{h:02d}:{m:02d}"
            if all(c == '?' or c == s[i] for i, c in enumerate(time)):
                cnt += 1
    return cnt
`,

  'calculate-money-in-bank': `
def totalMoney(n):
    total = 0
    week = 0
    for d in range(n):
        dow = d % 7
        if dow == 0:
            week += 1
        total += week + dow
    return total
`,

  'score-of-string': `
def scoreOfString(s):
    return sum(abs(ord(s[i]) - ord(s[i-1])) for i in range(1, len(s)))
`,

  'chalk-replacer': `
def chalkReplacer(chalk, k):
    chalk = list(chalk)
    total = sum(chalk)
    k %= total
    for i, c in enumerate(chalk):
        if k < c:
            return i
        k -= c
    return 0
`,

  'split-with-minimum-sum': `
def splitNum(num):
    d = sorted(int(c) for c in str(num))
    n1, n2, p = 0, 0, 1
    for i in range(len(d) - 1, -1, -2):
        n1 += d[i] * p
        if i - 1 >= 0:
            n2 += d[i-1] * p
        p *= 10
    return n1 + n2
`,

  'max-difference-increasing-elements': `
def maximumDifference(nums):
    min_val = nums[0]
    max_diff = -1
    for j in range(1, len(nums)):
        if nums[j] > min_val:
            max_diff = max(max_diff, nums[j] - min_val)
        else:
            min_val = nums[j]
    return max_diff
`,

  'longest-nice-subarray': `
def longestNiceSubarray(nums):
    l, used, ans = 0, 0, 1
    for r in range(len(nums)):
        while used & nums[r]:
            used ^= nums[l]
            l += 1
        used |= nums[r]
        ans = max(ans, r - l + 1)
    return ans
`,

  'interchangeable-rectangles': `
from math import gcd
def interchangeableRectangles(rectangles):
    from collections import Counter
    counts = Counter()
    for w, h in rectangles:
        g = gcd(w, h)
        counts[(w//g, h//g)] += 1
    return sum(c*(c-1)//2 for c in counts.values())
`,

  'find-triangular-sum': `
def triangularSum(nums):
    nums = list(nums)
    while len(nums) > 1:
        nums = [(nums[i] + nums[i+1]) % 10 for i in range(len(nums)-1)]
    return nums[0]
`,

  'two-furthest-houses-different-colors': `
def maxDistance(colors):
    n = len(colors)
    ans = 0
    for j in range(n-1, 0, -1):
        if colors[0] != colors[j]:
            ans = j
            break
    for i in range(n-1):
        if colors[i] != colors[n-1]:
            ans = max(ans, n-1-i)
            break
    return ans
`,

  'count-lattice-points-circle': `
def countLatticePoints(circles):
    points = set()
    for cx, cy, r in circles:
        for x in range(cx-r, cx+r+1):
            for y in range(cy-r, cy+r+1):
                if (x-cx)**2 + (y-cy)**2 <= r**2:
                    points.add((x, y))
    return len(points)
`,

  'nearest-exit-maze': `
from collections import deque
def nearestExit(maze, entrance):
    maze = [list(row) for row in maze]
    m, n = len(maze), len(maze[0])
    er, ec = entrance
    q = deque([(er, ec, 0)])
    maze[er][ec] = '+'
    while q:
        r, c, steps = q.popleft()
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r+dr, c+dc
            if nr < 0 or nr >= m or nc < 0 or nc >= n or maze[nr][nc] == '+':
                continue
            if nr == 0 or nr == m-1 or nc == 0 or nc == n-1:
                return steps+1
            maze[nr][nc] = '+'
            q.append((nr, nc, steps+1))
    return -1
`,

  'climbing-stairs-k-steps': `def climbStairsK(n: int, k: int) -> int:
    MOD = 10**9 + 7
    dp = [0] * (n + 1)
    dp[0] = 1
    for i in range(1, n + 1):
        for j in range(1, min(k, i) + 1):
            dp[i] = (dp[i] + dp[i - j]) % MOD
    return dp[n]
`,
  'maximum-xor-two-numbers': `def findMaximumXOR(nums: list[int]) -> int:
    max_xor = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            max_xor = max(max_xor, nums[i] ^ nums[j])
    return max_xor
`,
  'remove-stones-to-minimize-total': `def minStoneSum(piles: list[int], k: int) -> int:
    import heapq
    heap = [-p for p in piles]
    heapq.heapify(heap)
    for _ in range(k):
        largest = -heapq.heappop(heap)
        heapq.heappush(heap, -(largest - largest // 2))
    return -sum(heap)
`,
  'maximize-happiness-of-selected-children': `def maximumHappinessSum(happiness: list[int], k: int) -> int:
    happiness = sorted(happiness, reverse=True)
    total = 0
    for i in range(k):
        total += max(0, happiness[i] - i)
    return total
`,
  'find-the-maximum-achievable-number': `def theMaximumAchievableX(num: int, t: int) -> int:
    return num + 2 * t
`,
  'partition-array-maximum-difference': `def partitionArray(nums: list[int], k: int) -> int:
    nums = sorted(nums)
    groups = 1
    start = nums[0]
    for i in range(1, len(nums)):
        if nums[i] - start > k:
            groups += 1
            start = nums[i]
    return groups
`,
  'remove-duplicates-from-sorted-list-ii': `def deleteDuplicatesII(head: list[int]) -> list[int]:
    from collections import Counter
    freq = Counter(head)
    return [v for v in head if freq[v] == 1]
`,
  'count-number-of-homogenous-substrings': `def countHomogenous(s: str) -> int:
    MOD = 10**9 + 7
    ans = 0
    cnt = 1
    for i in range(1, len(s) + 1):
        if i < len(s) and s[i] == s[i - 1]:
            cnt += 1
        else:
            ans = (ans + cnt * (cnt + 1) // 2) % MOD
            cnt = 1
    return ans
`,
  'stone-game-vi': `def stoneGameVI(aliceValues: list[int], bobValues: list[int]) -> int:
    n = len(aliceValues)
    stones = sorted(range(n), key=lambda i: -(aliceValues[i] + bobValues[i]))
    alice = sum(aliceValues[stones[i]] for i in range(0, n, 2))
    bob = sum(bobValues[stones[i]] for i in range(1, n, 2))
    if alice > bob:
        return 1
    elif bob > alice:
        return -1
    return 0
`,
  'count-special-quadruplets': `def countQuadruplets(nums: list[int]) -> int:
    n = len(nums)
    count = 0
    for a in range(n - 3):
        for b in range(a + 1, n - 2):
            for c in range(b + 1, n - 1):
                for d in range(c + 1, n):
                    if nums[a] + nums[b] + nums[c] == nums[d]:
                        count += 1
    return count
`,
  'find-all-duplicates-in-array': `def findDuplicates(nums: list[int]) -> list[int]:
    nums = list(nums)
    result = []
    for i in range(len(nums)):
        idx = abs(nums[i]) - 1
        if nums[idx] < 0:
            result.append(idx + 1)
        else:
            nums[idx] = -nums[idx]
    return sorted(result)
`,
  'alternating-digit-sum': `def alternateDigitSum(n: int) -> int:
    digits = [int(c) for c in str(n)]
    return sum(d if i % 2 == 0 else -d for i, d in enumerate(digits))
`,
  'count-ways-to-build-good-string': `def countGoodStrings(low: int, high: int, zero: int, one: int) -> int:
    MOD = 10**9 + 7
    dp = [0] * (high + 1)
    dp[0] = 1
    ans = 1 if low == 0 else 0
    for i in range(1, high + 1):
        if i >= zero:
            dp[i] = (dp[i] + dp[i - zero]) % MOD
        if i >= one:
            dp[i] = (dp[i] + dp[i - one]) % MOD
        if i >= low:
            ans = (ans + dp[i]) % MOD
    return ans
`,
  'divide-players-into-teams-of-equal-skill': `def dividePlayers(skill: list[int]) -> int:
    skill = sorted(skill)
    n = len(skill)
    target = skill[0] + skill[-1]
    chemistry = 0
    for i in range(n // 2):
        if skill[i] + skill[n - 1 - i] != target:
            return -1
        chemistry += skill[i] * skill[n - 1 - i]
    return chemistry
`,
  'maximum-number-of-pairs-in-array': `def numberOfPairs(nums: list[int]) -> list[int]:
    from collections import Counter
    freq = Counter(nums)
    pairs = sum(c // 2 for c in freq.values())
    return [pairs, len(nums) - pairs * 2]
`,
  'minimize-maximum-pair-sum-in-array': `def minPairSum(nums: list[int]) -> int:
    nums = sorted(nums)
    n = len(nums)
    return max(nums[i] + nums[n - 1 - i] for i in range(n // 2))
`,
  'minimum-operations-to-exceed-threshold-value-ii': `def minOperations(nums: list[int], k: int) -> int:
    import heapq
    heap = list(nums)
    heapq.heapify(heap)
    ops = 0
    while heap[0] < k:
        x = heapq.heappop(heap)
        y = heapq.heappop(heap)
        heapq.heappush(heap, x * 2 + y)
        ops += 1
    return ops
`,
  'number-of-ways-to-split-array': `def waysToSplitArray(nums: list[int]) -> int:
    total = sum(nums)
    prefix = 0
    count = 0
    for i in range(len(nums) - 1):
        prefix += nums[i]
        if prefix >= total - prefix:
            count += 1
    return count
`,
  'check-if-word-occurs-as-prefix': `def isPrefixOfWord(sentence: str, searchWord: str) -> int:
    for i, word in enumerate(sentence.split(), 1):
        if word.startswith(searchWord):
            return i
    return -1
`,
  'count-subarrays-score-less-than-k': `def countSubarrays(nums: list[int], k: int) -> int:
    ans = left = 0
    total = 0
    for right in range(len(nums)):
        total += nums[right]
        while total * (right - left + 1) >= k:
            total -= nums[left]
            left += 1
        ans += right - left + 1
    return ans
`,
  'excel-sheet-column-number': `def titleToNumber(columnTitle: str) -> int:
    result = 0
    for ch in columnTitle:
        result = result * 26 + (ord(ch) - 64)
    return result
`,
  'jump-game-vii': `def canReach(s: str, minJump: int, maxJump: int) -> bool:
    n = len(s)
    reach = [False] * n
    reach[0] = True
    window_count = 0
    for i in range(1, n):
        if i - minJump >= 0 and reach[i - minJump]:
            window_count += 1
        if i - maxJump - 1 >= 0 and reach[i - maxJump - 1]:
            window_count -= 1
        if s[i] == '0' and window_count > 0:
            reach[i] = True
    return reach[n - 1]
`,
  'longest-square-streak': `def longestSquareStreak(nums: list[int]) -> int:
    num_set = set(nums)
    best = -1
    for n in num_set:
        cur, length = n, 1
        while cur * cur in num_set:
            cur = cur * cur
            length += 1
        if length >= 2:
            best = max(best, length)
    return best
`,
  'maximum-beauty-array-after-applying-operation': `def maximumBeauty(nums: list[int], k: int) -> int:
    nums = sorted(nums)
    best = 1
    left = 0
    for right in range(1, len(nums)):
        while nums[right] - nums[left] > 2 * k:
            left += 1
        best = max(best, right - left + 1)
    return best
`,
  'maximum-product-after-k-increments': `def maximumProduct(nums: list[int], k: int) -> int:
    import heapq
    MOD = 10**9 + 7
    heap = list(nums)
    heapq.heapify(heap)
    for _ in range(k):
        x = heapq.heappop(heap)
        heapq.heappush(heap, x + 1)
    result = 1
    for v in heap:
        result = (result * v) % MOD
    return result
`,
  'pairs-of-songs-total-divisible-60': `def numPairsDivisibleBy60(time: list[int]) -> int:
    cnt = [0] * 60
    ans = 0
    for t in time:
        r = t % 60
        ans += cnt[(60 - r) % 60]
        cnt[r] += 1
    return ans
`,

  'find-the-index-of-first-occurrence': `def strStr(haystack: str, needle: str) -> int:
    return haystack.find(needle)
`,

  'integer-replacement': `def integerReplacement(n: int) -> int:
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def solve(x):
        if x == 1:
            return 0
        if x % 2 == 0:
            return 1 + solve(x // 2)
        return 1 + min(solve(x + 1), solve(x - 1))
    return solve(n)
`,

  'number-of-smooth-descent-periods': `def getDescentPeriods(prices: list[int]) -> int:
    ans = 1
    run = 1
    for i in range(1, len(prices)):
        if prices[i] == prices[i - 1] - 1:
            run += 1
        else:
            run = 1
        ans += run
    return ans
`,

  'maximum-matrix-sum': `def maxMatrixSum(matrix: list[list[int]]) -> int:
    total = 0
    neg_count = 0
    min_abs = float('inf')
    for row in matrix:
        for val in row:
            total += abs(val)
            if val < 0:
                neg_count += 1
            min_abs = min(min_abs, abs(val))
    if neg_count % 2 == 0:
        return total
    return total - 2 * min_abs
`,

  'count-nodes-with-highest-score': `def countHighestScoreNodes(parents: list[int]) -> int:
    n = len(parents)
    children = [[] for _ in range(n)]
    for i in range(1, n):
        children[parents[i]].append(i)
    sub = [1] * n
    order = []
    stack = [0]
    while stack:
        node = stack.pop()
        order.append(node)
        for c in children[node]:
            stack.append(c)
    for node in reversed(order):
        for c in children[node]:
            sub[node] += sub[c]
    max_score = 0
    count = 0
    for x in range(n):
        ch = children[x]
        L = sub[ch[0]] if len(ch) > 0 else 0
        R = sub[ch[1]] if len(ch) > 1 else 0
        U = n - sub[x]
        score = (L or 1) * (R or 1) * (U or 1)
        if score > max_score:
            max_score = score
            count = 1
        elif score == max_score:
            count += 1
    return count
`,

  'find-right-interval': `def findRightInterval(intervals: list[list[int]]) -> list[int]:
    import bisect
    starts = sorted((iv[0], i) for i, iv in enumerate(intervals))
    starts_vals = [s[0] for s in starts]
    result = []
    for iv in intervals:
        end = iv[1]
        idx = bisect.bisect_left(starts_vals, end)
        result.append(starts[idx][1] if idx < len(starts) else -1)
    return result
`,

  'circular-sentence': `def isCircularSentence(sentence: str) -> bool:
    words = sentence.split()
    n = len(words)
    for i in range(n):
        if words[i][-1] != words[(i + 1) % n][0]:
            return False
    return True
`,

  'minimum-garden-perimeter': `def minimumPerimeter(neededApples: int) -> int:
    lo, hi = 1, 100000
    while lo < hi:
        mid = (lo + hi) // 2
        if 2 * mid * (mid + 1) * (2 * mid + 1) >= neededApples:
            hi = mid
        else:
            lo = mid + 1
    return 8 * lo
`,

  'group-people-given-group-size': `def groupThePeople(groupSizes: list[int]) -> list[list[int]]:
    from collections import defaultdict
    buckets = defaultdict(list)
    result = []
    for i, size in enumerate(groupSizes):
        buckets[size].append(i)
        if len(buckets[size]) == size:
            result.append(list(buckets[size]))
            buckets[size] = []
    return result
`,

  'count-number-of-bad-pairs': `def countBadPairs(nums: list[int]) -> int:
    from collections import Counter
    freq = Counter(v - i for i, v in enumerate(nums))
    good = sum(c * (c - 1) // 2 for c in freq.values())
    n = len(nums)
    return n * (n - 1) // 2 - good
`,

  'minimum-changes-to-make-binary-string-beautiful': `def minOperations(s: str) -> int:
    count = sum(1 for i, c in enumerate(s) if c != ('0' if i % 2 == 0 else '1'))
    return min(count, len(s) - count)
`,

  'remove-all-occurrences-of-substring': `def removeOccurrences(s: str, part: str) -> str:
    while part in s:
        s = s[:s.index(part)] + s[s.index(part) + len(part):]
    return s
`,

  'minimum-time-to-complete-trips': `def minimumTime(time: list[int], totalTrips: int) -> int:
    lo, hi = 1, min(time) * totalTrips
    while lo < hi:
        mid = (lo + hi) // 2
        if sum(mid // t for t in time) >= totalTrips:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'minimum-speed-to-arrive-on-time': `def minSpeedOnTime(dist: list[int], hour: float) -> int:
    import math
    n = len(dist)
    if n - 1 >= hour:
        return -1
    def can_arrive(speed):
        t = sum(math.ceil(d / speed) for d in dist[:-1])
        t += dist[-1] / speed
        return t <= hour + 1e-9
    lo, hi = 1, 10_000_000
    while lo < hi:
        mid = (lo + hi) // 2
        if can_arrive(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo if can_arrive(lo) else -1
`,

  'sum-of-beauty-in-the-array': `def sumOfBeauties(nums: list[int]) -> int:
    n = len(nums)
    pref_max = [0] * n
    suf_min = [0] * n
    pref_max[0] = nums[0]
    for i in range(1, n):
        pref_max[i] = max(pref_max[i-1], nums[i])
    suf_min[n-1] = nums[n-1]
    for i in range(n-2, -1, -1):
        suf_min[i] = min(suf_min[i+1], nums[i])
    ans = 0
    for i in range(1, n-1):
        if pref_max[i-1] < nums[i] < suf_min[i+1]:
            ans += 2
        elif nums[i-1] < nums[i] < nums[i+1]:
            ans += 1
    return ans
`,

  'find-all-possible-recipes': `def findAllRecipes(recipes: list[str], ingredients: list[list[str]], supplies: list[str]) -> list[str]:
    from collections import defaultdict, deque
    in_degree = {}
    dependents = defaultdict(list)
    recipe_set = set(recipes)
    for r, ings in zip(recipes, ingredients):
        in_degree[r] = len(ings)
        for ing in ings:
            dependents[ing].append(r)
    queue = deque(supplies)
    result = []
    while queue:
        item = queue.popleft()
        for dep in dependents[item]:
            in_degree[dep] -= 1
            if in_degree[dep] == 0:
                queue.append(dep)
                if dep in recipe_set:
                    result.append(dep)
    return result
`,

  'take-k-of-each-character-from-left-and-right': `def takeCharacters(s: str, k: int) -> int:
    total = [s.count(c) for c in 'abc']
    if any(t < k for t in total):
        return -1
    if k == 0:
        return 0
    win = [0, 0, 0]
    best = 0
    left = 0
    for right in range(len(s)):
        win[ord(s[right]) - ord('a')] += 1
        while any(total[i] - win[i] < k for i in range(3)):
            win[ord(s[left]) - ord('a')] -= 1
            left += 1
        best = max(best, right - left + 1)
    return len(s) - best
`,

  'minimum-operations-to-make-array-xor-equal-k': `def minOperations(nums: list[int], k: int) -> int:
    xor_all = 0
    for v in nums:
        xor_all ^= v
    return bin(xor_all ^ k).count('1')
`,

  'maximum-odd-binary-number': `def maximumOddBinaryNumber(s: str) -> str:
    ones = s.count('1')
    zeros = len(s) - ones
    return '1' * (ones - 1) + '0' * zeros + '1'
`,

  'minimum-equal-sum-two-arrays': `def minSum(nums1: list[int], nums2: list[int]) -> int:
    s1 = sum(nums1)
    s2 = sum(nums2)
    z1 = nums1.count(0)
    z2 = nums2.count(0)
    min1 = s1 + z1
    min2 = s2 + z2
    if z1 == 0 and min1 < min2:
        return -1
    if z2 == 0 and min2 < min1:
        return -1
    return max(min1, min2)
`,

  'find-score-of-array-after-marking': `def findScore(nums: list[int]) -> int:
    n = len(nums)
    indexed = sorted(range(n), key=lambda i: (nums[i], i))
    marked = [False] * n
    score = 0
    for i in indexed:
        if not marked[i]:
            score += nums[i]
            marked[i] = True
            if i > 0:
                marked[i - 1] = True
            if i < n - 1:
                marked[i + 1] = True
    return score
`,

  'count-complete-day-pairs': `def countCompleteDayPairs(hours: list[int]) -> int:
    freq = [0] * 24
    count = 0
    for h in hours:
        r = h % 24
        count += freq[(24 - r) % 24]
        freq[r] += 1
    return count
`,

  'check-if-matrix-is-x-matrix': `def checkXMatrix(grid: list[list[int]]) -> bool:
    n = len(grid)
    for i in range(n):
        for j in range(n):
            on_diag = (i == j) or (i + j == n - 1)
            if on_diag and grid[i][j] == 0:
                return False
            if not on_diag and grid[i][j] != 0:
                return False
    return True
`,

  'determine-color-of-chessboard-square': `def squareIsWhite(coordinates: str) -> bool:
    col = ord(coordinates[0]) - ord('a') + 1
    row = int(coordinates[1])
    return (col + row) % 2 != 0
`,

  'faulty-keyboard': `def finalString(s: str) -> str:
    result = []
    for c in s:
        if c == 'i':
            result.reverse()
        else:
            result.append(c)
    return ''.join(result)
`,

  'sum-multiples': `def sumOfMultiples(n: int) -> int:
    return sum(i for i in range(1, n + 1) if i % 3 == 0 or i % 5 == 0 or i % 7 == 0)
`,

  'count-beautiful-pairs': `def countBeautifulPairs(nums: list[int]) -> int:
    from math import gcd
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            first = int(str(nums[i])[0])
            last = nums[j] % 10
            if gcd(first, last) == 1:
                count += 1
    return count
`,

  'minimum-time-to-collect-all-apples': `def minTime(n: int, edges: list[list[int]], hasApple: list[bool]) -> int:
    from collections import defaultdict
    adj = defaultdict(list)
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)
    def dfs(node, parent):
        time = 0
        for child in adj[node]:
            if child == parent:
                continue
            child_time = dfs(child, node)
            if child_time > 0 or hasApple[child]:
                time += child_time + 2
        return time
    return dfs(0, -1)
`,

  'find-prefix-common-array-of-two-arrays': `def findThePrefixCommonArray(A: list[int], B: list[int]) -> list[int]:
    n = len(A)
    cnt = [0] * (n + 1)
    result = []
    common = 0
    for i in range(n):
        cnt[A[i]] += 1
        if cnt[A[i]] == 2:
            common += 1
        cnt[B[i]] += 1
        if cnt[B[i]] == 2:
            common += 1
        result.append(common)
    return result
`,

  'minimum-time-to-collect-garbage': `def garbageCollection(garbage: list[str], travel: list[int]) -> int:
    total = sum(len(g) for g in garbage)
    prefix = [0] * len(garbage)
    for i in range(1, len(garbage)):
        prefix[i] = prefix[i-1] + travel[i-1]
    for t in 'MPG':
        last = -1
        for i in range(len(garbage) - 1, -1, -1):
            if t in garbage[i]:
                last = i
                break
        if last > 0:
            total += prefix[last]
    return total
`,

  'longest-subarray-of-ones-after-deleting': `def longestSubarray(nums: list[int]) -> int:
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

  'minimum-vertices-to-reach-all-nodes': `def findSmallestSetOfVertices(n: int, edges: list[list[int]]) -> list[int]:
    has_incoming = set(to for _, to in edges)
    return [i for i in range(n) if i not in has_incoming]
`,

  'count-odd-numbers-in-interval-range': `def countOdds(low: int, high: int) -> int:
    def count_odds_up_to(n):
        return (n + 1) // 2
    return count_odds_up_to(high) - count_odds_up_to(low - 1)
`,

  'make-sum-divisible-by-p': `def minSubarray(nums: list[int], p: int) -> int:
    target = sum(nums) % p
    if target == 0:
        return 0
    last_seen = {0: -1}
    prefix = 0
    best = len(nums)
    for i, v in enumerate(nums):
        prefix = (prefix + v) % p
        need = (prefix - target + p) % p
        if need in last_seen:
            best = min(best, i - last_seen[need])
        last_seen[prefix] = i
    return best if best < len(nums) else -1
`,

  'count-zero-filled-subarrays': `
def zeroFilledSubarray(nums):
    ans = 0
    run = 0
    for x in nums:
        if x == 0:
            run += 1
            ans += run
        else:
            run = 0
    return ans
`,

  'check-whether-two-string-arrays-equal': `
def arrayStringsAreEqual(word1, word2):
    return ''.join(word1) == ''.join(word2)
`,

  'minimum-flips-to-make-a-or-b-equal-c': `
def minFlips(a, b, c):
    flips = 0
    while a or b or c:
        ca, cb, cc = a & 1, b & 1, c & 1
        if cc == 1:
            if ca == 0 and cb == 0:
                flips += 1
        else:
            flips += ca + cb
        a >>= 1
        b >>= 1
        c >>= 1
    return flips
`,

  'make-array-zero-by-subtracting-equal-amounts': `
def minimumOperations(nums):
    return len(set(x for x in nums if x > 0))
`,

  'find-all-groups-of-farmland': `
def findFarmland(land):
    m, n = len(land), len(land[0])
    result = []
    for r in range(m):
        for c in range(n):
            if land[r][c] == 1:
                r2, c2 = r, c
                while r2 + 1 < m and land[r2 + 1][c] == 1:
                    r2 += 1
                while c2 + 1 < n and land[r][c2 + 1] == 1:
                    c2 += 1
                result.append([r, c, r2, c2])
                for i in range(r, r2 + 1):
                    for j in range(c, c2 + 1):
                        land[i][j] = 0
    return result
`,

  'merge-triplets-to-form-target-triplet': `
def mergeTriplets(triplets, target):
    t0, t1, t2 = target[0], target[1], target[2]
    m0, m1, m2 = 0, 0, 0
    for t in triplets:
        if t[0] <= t0 and t[1] <= t1 and t[2] <= t2:
            m0 = max(m0, t[0])
            m1 = max(m1, t[1])
            m2 = max(m2, t[2])
    return m0 == t0 and m1 == t1 and m2 == t2
`,

  'replace-elements-with-greatest-on-right': `
def replaceElements(arr):
    max_right = -1
    for i in range(len(arr) - 1, -1, -1):
        arr[i], max_right = max_right, max(max_right, arr[i])
    return arr
`,

  'destroy-asteroids': `
def asteroidsDestroyed(mass, asteroids):
    for a in sorted(asteroids):
        if mass < a:
            return False
        mass += a
    return True
`,

  'largest-number-after-digit-swaps-by-parity': `
def largestInteger(num):
    digits = [int(d) for d in str(num)]
    odds = sorted([d for d in digits if d % 2 == 1], reverse=True)
    evens = sorted([d for d in digits if d % 2 == 0], reverse=True)
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

  'maximum-count-of-positive-and-negative': `
def maximumCount(nums):
    neg = sum(1 for x in nums if x < 0)
    pos = sum(1 for x in nums if x > 0)
    return max(neg, pos)
`,

  'find-the-original-array-of-prefix-xor': `
def findArray(pref):
    result = [pref[0]]
    for i in range(1, len(pref)):
        result.append(pref[i] ^ pref[i - 1])
    return result
`,

  'separate-digits-in-array': `
def separateDigits(nums):
    result = []
    for n in nums:
        for d in str(int(n)):
            result.append(int(d))
    return result
`,

  'number-of-pairs-of-interchangeable-rectangles': `
def interchangeableRectangles(rectangles):
    from math import gcd
    from collections import Counter
    ratios = Counter()
    for rect in rectangles:
        w, h = int(rect[0]), int(rect[1])
        g = gcd(w, h)
        ratios[(w // g, h // g)] += 1
    return sum(c * (c - 1) // 2 for c in ratios.values())
`,

  'optimal-partition-of-string': `
def partitionString(s):
    count = 0
    seen = set()
    for c in s:
        if c in seen:
            count += 1
            seen = {c}
        else:
            seen.add(c)
    return count + 1
`,

  'unique-length-three-palindromic-subsequences': `
def countPalindromicSubsequence(s):
    count = 0
    for c in set(s):
        first = s.index(c)
        last = len(s) - 1 - s[::-1].index(c)
        if first < last:
            count += len(set(s[first + 1:last]))
    return count
`,

  'bitwise-xor-of-all-pairings': `
def xorAllNums(nums1, nums2):
    n1, n2 = list(nums1), list(nums2)
    result = 0
    if len(n2) % 2 == 1:
        for x in n1:
            result ^= int(x)
    if len(n1) % 2 == 1:
        for x in n2:
            result ^= int(x)
    return result
`,

  'number-of-rectangles-can-form-largest-square': `
def countGoodRectangles(rectangles):
    best = 0
    count = 0
    for rect in rectangles:
        side = min(int(rect[0]), int(rect[1]))
        if side > best:
            best = side
            count = 1
        elif side == best:
            count += 1
    return count
`,

  'maximize-number-of-subsequences-in-a-string': `
def maximumSubsequenceCount(text, pattern):
    a, b = pattern[0], pattern[1]
    base = 0
    cnt_a = 0
    for c in text:
        if c == b:
            base += cnt_a
        if c == a:
            cnt_a += 1
    count_a = sum(1 for c in text if c == a)
    count_b = sum(1 for c in text if c == b)
    return base + max(count_a, count_b)
`,

  'number-of-ways-to-buy-pens-and-pencils': `
def waysToBuyPensPencils(total, cost1, cost2):
    ways = 0
    pens = 0
    while pens * cost1 <= total:
        ways += (total - pens * cost1) // cost2 + 1
        pens += 1
    return ways
`,

  'sum-of-digits-of-string-after-convert': `
def getLucky(s, k):
    num_str = ''.join(str(ord(c) - 96) for c in s)
    val = sum(int(d) for d in num_str)
    for _ in range(k - 1):
        val = sum(int(d) for d in str(val))
    return val
`,

  'smallest-value-of-rearranged-number': `
def smallestNumber(num):
    n = int(num)
    if n == 0:
        return 0
    if n > 0:
        digits = sorted(str(n))
        for i, d in enumerate(digits):
            if d != '0':
                return int(d + ''.join(digits[:i]) + ''.join(digits[i + 1:]))
    digits = sorted(str(-n), reverse=True)
    return -int(''.join(digits))
`,

  'removing-stars-from-string': `
def removeStars(s):
    stack = []
    for c in s:
        if c == '*':
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)
`,

  'find-the-peaks': `
def findPeaks(mountain):
    m = [int(x) for x in mountain]
    result = []
    for i in range(1, len(m) - 1):
        if m[i] > m[i-1] and m[i] > m[i+1]:
            result.append(i)
    return result
`,

  'minimum-penalty-for-a-shop': `
def bestClosingTime(customers):
    penalty = sum(1 for c in customers if c == 'Y')
    min_penalty = penalty
    best_hour = 0
    for i, c in enumerate(customers):
        if c == 'Y':
            penalty -= 1
        else:
            penalty += 1
        if penalty < min_penalty:
            min_penalty = penalty
            best_hour = i + 1
    return best_hour
`,

  'apply-operations-to-an-array': `
def applyOperations(nums):
    arr = [int(x) for x in nums]
    n = len(arr)
    for i in range(n - 1):
        if arr[i] == arr[i+1]:
            arr[i] *= 2
            arr[i+1] = 0
    result = [x for x in arr if x != 0]
    result += [0] * (n - len(result))
    return result
`,

  'kth-distinct-string-in-array': `
def kthDistinct(arr, k):
    from collections import Counter
    a = [str(x) for x in arr]
    count = Counter(a)
    cnt = 0
    for s in a:
        if count[s] == 1:
            cnt += 1
            if cnt == k:
                return s
    return ''
`,

  'count-elements-with-strictly-smaller-and-greater': `
def countElements(nums):
    m = [int(x) for x in nums]
    mn, mx = min(m), max(m)
    return sum(1 for x in m if mn < x < mx)
`,

  'largest-positive-integer-that-exists-with-negative': `
def findMaxK(nums):
    s = set(int(x) for x in nums)
    result = -1
    for x in s:
        if x > 0 and -x in s:
            result = max(result, x)
    return result
`,

  'check-if-number-has-equal-digit-count-and-digit-value': `
def digitCount(num):
    for i, c in enumerate(num):
        if num.count(str(i)) != int(c):
            return False
    return True
`,

  'decode-xor-array': `
def decode(encoded, first):
    result = [first]
    for e in encoded:
        result.append(result[-1] ^ int(e))
    return result
`,

  'maximum-split-of-positive-even-integers': `
def maximumEvenSplit(finalSum):
    n = int(finalSum)
    if n % 2 == 1:
        return []
    result = []
    cur = 2
    while cur * 2 < n:
        result.append(cur)
        n -= cur
        cur += 2
    result.append(n)
    return result
`,

  'minimum-average-of-smallest-and-largest-elements': `
def minimumAverage(nums):
    s = sorted(int(x) for x in nums)
    n = len(s)
    result = float('inf')
    for i in range(n // 2):
        result = min(result, (s[i] + s[n-1-i]) / 2)
    return result
`,

  'count-tested-devices-after-test-runs': `
def countTestedDevices(batteryPercentages):
    count = 0
    for b in batteryPercentages:
        if int(b) - count > 0:
            count += 1
    return count
`,

  'number-of-subarrays-with-gcd-equal-to-k': `
def subarrayGCD(nums, k):
    from math import gcd
    n_list = [int(x) for x in nums]
    n = len(n_list)
    count = 0
    for i in range(n):
        g = n_list[i]
        for j in range(i, n):
            g = gcd(g, n_list[j])
            if g == k:
                count += 1
            elif g < k:
                break
    return count
`,

  'find-subsequence-of-length-k-with-largest-sum': `
def maxSubsequence(nums, k):
    n_list = list(enumerate(int(x) for x in nums))
    n_list.sort(key=lambda x: -x[1])
    selected = sorted(n_list[:k], key=lambda x: x[0])
    return [v for _, v in selected]
`,

  'minimum-absolute-sum-difference': `
def minAbsoluteSumDiff(nums1, nums2):
    import bisect
    MOD = 10**9 + 7
    n1 = [int(x) for x in nums1]
    n2 = [int(x) for x in nums2]
    n = len(n1)
    sorted1 = sorted(n1)
    total = sum(abs(a - b) for a, b in zip(n1, n2))
    max_gain = 0
    for a, b in zip(n1, n2):
        diff = abs(a - b)
        idx = bisect.bisect_left(sorted1, b)
        for j in [idx - 1, idx]:
            if 0 <= j < n:
                best_diff = abs(sorted1[j] - b)
                max_gain = max(max_gain, diff - best_diff)
    return (total - max_gain) % MOD
`,

  'find-the-k-beauty-of-a-number': `
def divisorSubstrings(num, k):
    n = int(num)
    s = str(n)
    count = 0
    for i in range(len(s) - k + 1):
        sub = int(s[i:i+k])
        if sub != 0 and n % sub == 0:
            count += 1
    return count
`,

  'first-unique-character-in-string': `
def firstUniqChar(s):
    from collections import Counter
    freq = Counter(s)
    for i, c in enumerate(s):
        if freq[c] == 1:
            return i
    return -1
`,

  'long-pressed-name': `
def isLongPressedName(name, typed):
    i = 0
    j = 0
    while j < len(typed):
        if i < len(name) and name[i] == typed[j]:
            i += 1
            j += 1
        elif j > 0 and typed[j] == typed[j-1]:
            j += 1
        else:
            return False
    return i == len(name)
`,

  'remove-outermost-parentheses': `
def removeOuterParentheses(s):
    depth = 0
    result = []
    for c in s:
        if c == '(':
            if depth > 0:
                result.append(c)
            depth += 1
        else:
            depth -= 1
            if depth > 0:
                result.append(c)
    return ''.join(result)
`,

  'maximum-nesting-depth-of-parentheses': `
def maxDepth(s):
    depth = 0
    max_depth = 0
    for c in s:
        if c == '(':
            depth += 1
            max_depth = max(max_depth, depth)
        elif c == ')':
            depth -= 1
    return max_depth
`,

  'next-greater-element-i': `
def nextGreaterElement(nums1, nums2):
    n1 = [int(x) for x in nums1]
    n2 = [int(x) for x in nums2]
    nge = {}
    stack = []
    for n in n2:
        while stack and stack[-1] < n:
            nge[stack.pop()] = n
        stack.append(n)
    return [nge.get(x, -1) for x in n1]
`,

  'find-and-replace-pattern': `
def findAndReplacePattern(words, pattern):
    p = str(pattern)
    result = []
    for word in words:
        w = str(word)
        w2p = {}
        p2w = {}
        match = True
        for wc, pc in zip(w, p):
            if w2p.get(wc, pc) != pc or p2w.get(pc, wc) != wc:
                match = False
                break
            w2p[wc] = pc
            p2w[pc] = wc
        if match:
            result.append(w)
    return result
`,

  'largest-3-same-digit-number-in-string': `
def largestGoodInteger(num):
    best = ''
    for i in range(len(num) - 2):
        if num[i] == num[i+1] == num[i+2]:
            triple = num[i:i+3]
            if triple > best:
                best = triple
    return best
`,

  'count-number-of-consistent-strings': `
def countConsistentStrings(allowed, words):
    allowed_set = set(str(allowed))
    count = 0
    for word in words:
        if all(c in allowed_set for c in str(word)):
            count += 1
    return count
`,

  'make-the-string-great': `
def makeGood(s):
    stack = []
    for c in s:
        if stack and abs(ord(stack[-1]) - ord(c)) == 32:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)
`,

  'find-target-indices-after-sorting-array': `
def targetIndices(nums, target):
    t = int(target)
    arr = sorted(int(x) for x in nums)
    return [i for i, v in enumerate(arr) if v == t]
`,

  'number-of-employees-who-met-the-target': `
def numberOfEmployeesWhoMetTarget(hours, target):
    t = int(target)
    return sum(1 for h in hours if int(h) >= t)
`,

  'intersection-of-two-arrays-ii': `
def intersect(nums1, nums2):
    from collections import Counter
    n1 = Counter(int(x) for x in nums1)
    result = []
    for x in nums2:
        v = int(x)
        if n1.get(v, 0) > 0:
            result.append(v)
            n1[v] -= 1
    return sorted(result)
`,

  'largest-subarray-length-k': `
def largestSubarray(nums, k):
    k = int(k)
    n_list = [int(x) for x in nums]
    best = 0
    for i in range(1, len(n_list) - k + 1):
        if n_list[i] > n_list[best]:
            best = i
    return n_list[best:best+k]
`,

  'minimum-time-to-type-word': `
def minTimeToType(word):
    time = 0
    cur = 0
    for c in str(word):
        nxt = ord(c) - 97
        diff = abs(nxt - cur)
        time += min(diff, 26 - diff) + 1
        cur = nxt
    return time
`,

  'check-if-one-string-swap-can-make-strings-equal': `
def areAlmostEqual(s1, s2):
    diffs = [i for i in range(len(s1)) if s1[i] != s2[i]]
    if len(diffs) == 0:
        return True
    if len(diffs) != 2:
        return False
    i, j = diffs
    return s1[i] == s2[j] and s1[j] == s2[i]
`,

  'number-of-different-integers-in-string': `
def numDifferentIntegers(word):
    import re
    groups = re.findall(r'\\d+', word)
    return len(set(str(int(g)) for g in groups))
`,

  'check-if-array-is-good': `
def isGood(nums):
    arr = sorted(int(x) for x in nums)
    n = arr[-1]
    if len(arr) != n + 1:
        return False
    if arr[-2] != n:
        return False
    for i in range(n - 1):
        if arr[i] != i + 1:
            return False
    return True
`,

  'count-the-digits-that-divide-the-number': `
def countDigits(num):
    n = int(num)
    return sum(1 for c in str(n) if int(c) != 0 and n % int(c) == 0)
`,

  'find-the-difference-of-two-arrays': `
def findDifference(nums1, nums2):
    s1 = set(int(x) for x in nums1)
    s2 = set(int(x) for x in nums2)
    return [sorted(s1 - s2), sorted(s2 - s1)]
`,

  'longest-continuous-increasing-subsequence': `
def findLengthOfLCIS(nums):
    n_list = [int(x) for x in nums]
    max_len = 1
    cur = 1
    for i in range(1, len(n_list)):
        if n_list[i] > n_list[i-1]:
            cur += 1
            max_len = max(max_len, cur)
        else:
            cur = 1
    return max_len
`,

  'find-numbers-with-even-number-of-digits': `
def findNumbers(nums):
    return sum(1 for x in nums if len(str(int(x))) % 2 == 0)
`,

  'count-nice-pairs-in-an-array': `
def countNicePairs(nums):
    MOD = 10**9 + 7
    def rev(n):
        return int(str(int(n))[::-1])
    from collections import Counter
    freq = Counter(int(x) - rev(int(x)) for x in nums)
    ans = 0
    for cnt in freq.values():
        ans = (ans + cnt * (cnt - 1) // 2) % MOD
    return ans
`,

  'check-if-string-is-prefix-of-array': `
def isPrefixString(s, words):
    built = ''
    for w in words:
        built += str(w)
        if built == s:
            return True
        if len(built) >= len(s):
            return False
    return False
`,

  'remove-trailing-zeros-from-string': `
def removeTrailingZeros(num):
    return str(num).rstrip('0')
`,

  'rearrange-spaces-between-words': `
def reorderSpaces(text):
    total_spaces = text.count(' ')
    words = text.split()
    if len(words) == 1:
        return words[0] + ' ' * total_spaces
    between = total_spaces // (len(words) - 1)
    trailing = total_spaces % (len(words) - 1)
    return (' ' * between).join(words) + ' ' * trailing
`,

  'split-a-string-in-balanced-strings': `
def balancedStringSplit(s):
    count = 0
    balance = 0
    for c in s:
        balance += 1 if c == 'R' else -1
        if balance == 0:
            count += 1
    return count
`,

  'find-greatest-common-divisor-of-array': `
def findGCD(nums):
    from math import gcd
    nums_list = [int(x) for x in nums]
    return gcd(min(nums_list), max(nums_list))
`,

  'remove-all-adjacent-duplicates-in-string': `
def removeDuplicates(s):
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)
`,

  'semi-ordered-permutation': `
def semiOrderedPermutation(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    pos1 = nums_list.index(1)
    posN = nums_list.index(n)
    return pos1 + (n - 1 - posN) - (1 if pos1 > posN else 0)
`,

  'calculate-delayed-arrival-time': `
def findDelayedArrivalTime(arrivalTime, delayedTime):
    return (int(arrivalTime) + int(delayedTime)) % 24
`,

  'check-if-numbers-are-ascending-in-sentence': `
def areNumbersAscending(s):
    nums = [int(t) for t in s.split() if t.isdigit()]
    return all(nums[i] > nums[i-1] for i in range(1, len(nums)))
`,

  'find-xor-beauty-of-array': `
def xorBeauty(nums):
    result = 0
    for x in nums:
        result ^= int(x)
    return result
`,

  'number-of-words-that-can-be-typed': `
def canBeTypedWords(text, brokenLetters):
    broken = set(brokenLetters)
    count = 0
    for word in text.split():
        if not any(c in broken for c in word):
            count += 1
    return count
`,

  'number-of-common-factors': `
def commonFactors(a, b):
    a, b = int(a), int(b)
    return sum(1 for i in range(1, min(a, b) + 1) if a % i == 0 and b % i == 0)
`,

  'sum-of-all-odd-length-subarrays': `
def sumOddLengthSubarrays(arr):
    arr_list = [int(x) for x in arr]
    total = 0
    n = len(arr_list)
    for start in range(n):
        for length in range(1, n - start + 1, 2):
            total += sum(arr_list[start:start + length])
    return total
`,

  'count-of-integers-with-odd-digit-sum': `
def countOdd(num):
    count = 0
    for i in range(1, int(num) + 1):
        if sum(int(d) for d in str(i)) % 2 == 1:
            count += 1
    return count
`,

  'replace-all-digits-with-characters': `
def replaceDigits(s):
    res = []
    for i, c in enumerate(s):
        if i % 2 == 0:
            res.append(c)
        else:
            res.append(chr(ord(res[-1]) + int(c)))
    return ''.join(res)
`,

  'minimum-moves-to-convert-string': `
def minimumMoves(s):
    count = 0
    i = 0
    while i < len(s):
        if s[i] == 'X':
            count += 1
            i += 3
        else:
            i += 1
    return count
`,

  'minimum-recolors-to-get-k-consecutive-black-blocks': `
def minimumRecolors(blocks, k):
    k = int(k)
    whites = sum(1 for c in blocks[:k] if c == 'W')
    min_w = whites
    for i in range(k, len(blocks)):
        if blocks[i] == 'W':
            whites += 1
        if blocks[i - k] == 'W':
            whites -= 1
        min_w = min(min_w, whites)
    return min_w
`,

  'convert-the-temperature': `
def convertTemperature(celsius):
    celsius = float(celsius)
    return [celsius + 273.15, celsius * 1.80 + 32.00]
`,

  'sorting-the-sentence': `
def sortSentence(s):
    words = s.split()
    words.sort(key=lambda w: int(w[-1]))
    return ' '.join(w[:-1] for w in words)
`,

  'find-the-maximum-divisibility-score': `
def maxDivScore(nums, divisors):
    nums_list = [int(x) for x in nums]
    div_list = [int(x) for x in divisors]
    best_score = -1
    best_div = float('inf')
    for d in div_list:
        score = sum(1 for n in nums_list if n % d == 0)
        if score > best_score or (score == best_score and d < best_div):
            best_score = score
            best_div = d
    return best_div
`,

  'minimum-amount-of-time-to-fill-cups': `
def fillCups(amount):
    amount_list = [int(x) for x in amount]
    total = sum(amount_list)
    return max(max(amount_list), (total + 1) // 2)
`,

  'append-characters-to-string-to-make-subsequence': `
def appendCharacters(s, t):
    j = 0
    for i in range(len(s)):
        if j < len(t) and s[i] == t[j]:
            j += 1
    return len(t) - j
`,

  'count-total-number-of-colored-cells': `
def coloredCells(n):
    n = int(n)
    return 2 * n * n - 2 * n + 1
`,

  'difference-between-element-sum-and-digit-sum-of-array': `
def differenceOfSum(nums):
    nums_list = [int(x) for x in nums]
    element_sum = sum(nums_list)
    digit_sum = sum(int(d) for n in nums_list for d in str(n))
    return abs(element_sum - digit_sum)
`,

  'minimum-length-of-string-after-deleting-similar-ends': `
def minimumLength(s):
    left, right = 0, len(s) - 1
    while left < right and s[left] == s[right]:
        c = s[left]
        while left <= right and s[left] == c:
            left += 1
        while left <= right and s[right] == c:
            right -= 1
    return right - left + 1
`,

  'maximum-number-of-vowels-in-substring-of-given-length': `
def maxVowels(s, k):
    k = int(k)
    vowels = set('aeiou')
    count = sum(1 for c in s[:k] if c in vowels)
    max_count = count
    for i in range(k, len(s)):
        if s[i] in vowels:
            count += 1
        if s[i - k] in vowels:
            count -= 1
        max_count = max(max_count, count)
    return max_count
`,

  'categorize-box-according-to-criteria': `
def categorizeBox(length, width, height, mass):
    l, w, h, m = int(length), int(width), int(height), int(mass)
    bulk = l >= 10000 or w >= 10000 or h >= 10000 or l * w * h >= 10**9
    heavy = m >= 100
    if bulk and heavy:
        return 'Both'
    if bulk:
        return 'Bulk'
    if heavy:
        return 'Heavy'
    return 'Neither'
`,

  'find-the-middle-index-in-array': `
def findMiddleIndex(nums):
    nums_list = [int(x) for x in nums]
    total = sum(nums_list)
    left_sum = 0
    for i, n in enumerate(nums_list):
        if left_sum == total - left_sum - n:
            return i
        left_sum += n
    return -1
`,

  'maximum-absolute-sum-of-any-subarray': `
def maxAbsoluteSum(nums):
    nums_list = [int(x) for x in nums]
    max_sum = min_sum = cur_max = cur_min = 0
    for n in nums_list:
        cur_max = max(cur_max + n, n)
        max_sum = max(max_sum, cur_max)
        cur_min = min(cur_min + n, n)
        min_sum = min(min_sum, cur_min)
    return max(max_sum, abs(min_sum))
`,

  'count-substrings-with-only-one-distinct-letter': `
def countLetters(s):
    count = 0
    run = 1
    for i in range(1, len(s) + 1):
        if i < len(s) and s[i] == s[i - 1]:
            run += 1
        else:
            count += run * (run + 1) // 2
            run = 1
    return count
`,

  'sum-of-number-and-its-reverse': `
def sumOfNumberAndReverse(num):
    num = int(num)
    for k in range(num + 1):
        rev = int(str(k)[::-1])
        if k + rev == num:
            return True
    return False
`,

  'sum-of-absolute-differences-in-sorted-array': `
def getSumAbsoluteDifferences(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    prefix = [0] * n
    prefix[0] = nums_list[0]
    for i in range(1, n):
        prefix[i] = prefix[i - 1] + nums_list[i]
    result = []
    for i in range(n):
        left_sum = prefix[i - 1] if i > 0 else 0
        right_sum = prefix[n - 1] - prefix[i]
        result.append(nums_list[i] * i - left_sum + right_sum - nums_list[i] * (n - 1 - i))
    return result
`,

  'number-of-subarrays-with-odd-sum': `
def numOfSubarrays(arr):
    MOD = 10**9 + 7
    arr_list = [int(x) for x in arr]
    even_count, odd_count, pref_sum, res = 1, 0, 0, 0
    for n in arr_list:
        pref_sum += n
        if pref_sum % 2 == 0:
            res = (res + odd_count) % MOD
        else:
            res = (res + even_count) % MOD
        if pref_sum % 2 == 0:
            even_count += 1
        else:
            odd_count += 1
    return res
`,

  'number-of-people-aware-of-secret': `
def peopleAwareOfSecret(n, delay, forget):
    n, delay, forget = int(n), int(delay), int(forget)
    MOD = 10**9 + 7
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(1, n + 1):
        for j in range(i + delay, min(n, i + forget - 1) + 1):
            dp[j] = (dp[j] + dp[i]) % MOD
    ans = 0
    for i in range(max(1, n - forget + 1), n + 1):
        ans = (ans + dp[i]) % MOD
    return ans
`,

  'valid-word-abbreviation': `
def validWordAbbreviation(word, abbr):
    i, j = 0, 0
    while i < len(word) and j < len(abbr):
        if abbr[j].isalpha():
            if word[i] != abbr[j]:
                return False
            i += 1
            j += 1
        else:
            if abbr[j] == '0':
                return False
            num = 0
            while j < len(abbr) and abbr[j].isdigit():
                num = num * 10 + int(abbr[j])
                j += 1
            i += num
    return i == len(word) and j == len(abbr)
`,

  'number-of-valid-words-in-sentence': `
def countValidWords(sentence):
    count = 0
    for tok in sentence.split(' '):
        if not tok:
            continue
        if any(c.isdigit() for c in tok):
            continue
        hyphens = tok.count('-')
        if hyphens > 1:
            continue
        if hyphens == 1:
            idx = tok.index('-')
            if idx == 0 or idx == len(tok) - 1:
                continue
            if not tok[idx - 1].isalpha() or not tok[idx + 1].isalpha():
                continue
        puncts = sum(1 for c in tok if c in '!.,')
        if puncts > 1:
            continue
        if puncts == 1 and tok[-1] not in '!.,':
            continue
        count += 1
    return count
`,

  'is-subsequence': `
def isSubsequence(s, t):
    i = 0
    for c in t:
        if i < len(s) and s[i] == c:
            i += 1
    return i == len(s)
`,

  'find-the-longest-balanced-substring-of-binary-string': `
def findTheLongestBalancedSubstring(s):
    res, i = 0, 0
    while i < len(s):
        zeros = ones = 0
        while i < len(s) and s[i] == '0':
            zeros += 1
            i += 1
        while i < len(s) and s[i] == '1':
            ones += 1
            i += 1
        res = max(res, 2 * min(zeros, ones))
    return res
`,

  'count-number-of-distinct-integers-after-reverse-operations': `
def countDistinctIntegers(nums):
    nums_list = [int(x) for x in nums]
    s = set(nums_list)
    for n in nums_list:
        s.add(int(str(n)[::-1]))
    return len(s)
`,

  'most-frequent-number-following-key': `
def mostFrequent(nums, key):
    nums_list = [int(x) for x in nums]
    key = int(key)
    from collections import Counter
    c = Counter()
    for i in range(len(nums_list) - 1):
        if nums_list[i] == key:
            c[nums_list[i + 1]] += 1
    return c.most_common(1)[0][0]
`,

  'minimum-difference-between-highest-and-lowest-of-k-scores': `
def minimumDifference(nums, k):
    nums_list = sorted(int(x) for x in nums)
    k = int(k)
    res = float('inf')
    for i in range(len(nums_list) - k + 1):
        res = min(res, nums_list[i + k - 1] - nums_list[i])
    return res
`,

  'find-the-array-concat-val': `
def findTheArrayConcVal(nums):
    nums_list = [int(x) for x in nums]
    val, l, r = 0, 0, len(nums_list) - 1
    while l < r:
        val += int(str(nums_list[l]) + str(nums_list[r]))
        l += 1
        r -= 1
    if l == r:
        val += nums_list[l]
    return val
`,

  'sort-array-by-increasing-frequency': `
def frequencySort(nums):
    from collections import Counter
    nums_list = [int(x) for x in nums]
    freq = Counter(nums_list)
    return sorted(nums_list, key=lambda x: (freq[x], -x))
`,

  'find-all-k-distant-indices': `
def findKDistantIndices(nums, key, k):
    nums_list = [int(x) for x in nums]
    key, k = int(key), int(k)
    res = []
    for i in range(len(nums_list)):
        for j in range(len(nums_list)):
            if nums_list[j] == key and abs(i - j) <= k:
                res.append(i)
                break
    return res
`,

  'number-of-beautiful-pairs': `
def countBeautifulPairs(nums):
    from math import gcd
    nums_list = [int(x) for x in nums]
    count = 0
    for i in range(len(nums_list)):
        first = int(str(nums_list[i])[0])
        for j in range(i + 1, len(nums_list)):
            last = nums_list[j] % 10
            if gcd(first, last) == 1:
                count += 1
    return count
`,

  'split-string-by-separator': `
def splitWordsBySeparator(words, separator):
    words_list = list(words)
    result = []
    for w in words_list:
        for part in str(w).split(separator):
            if part:
                result.append(part)
    return result
`,

  'count-vowel-strings-in-ranges': `
def vowelStrings(words, queries):
    words_list = list(words)
    vowels = set('aeiou')
    pre = [0]
    for w in words_list:
        w = str(w)
        pre.append(pre[-1] + (1 if w[0] in vowels and w[-1] in vowels else 0))
    result = []
    for q in queries:
        q_list = [int(x) for x in q]
        result.append(pre[q_list[1] + 1] - pre[q_list[0]])
    return result
`,

  'number-of-even-odd-bits': `
def evenOddBit(n):
    n = int(n)
    even = odd = 0
    pos = 0
    while n > 0:
        if n & 1:
            if pos % 2 == 0:
                even += 1
            else:
                odd += 1
        n >>= 1
        pos += 1
    return [even, odd]
`,

  'average-value-of-even-numbers-divisible-by-three': `
def averageValue(nums):
    nums_list = [int(x) for x in nums]
    evens = [n for n in nums_list if n % 6 == 0]
    return sum(evens) // len(evens) if evens else 0
`,

  'count-prefix-suffix-pairs': `
def countPrefixSuffixPairs(words):
    words_list = [str(w) for w in words]
    count = 0
    for i in range(len(words_list)):
        for j in range(i + 1, len(words_list)):
            if words_list[j].startswith(words_list[i]) and words_list[j].endswith(words_list[i]):
                count += 1
    return count
`,

  'minimum-cost-of-buying-candies-with-discount': `
def minimumCost(cost):
    cost_list = sorted([int(x) for x in cost], reverse=True)
    return sum(v for i, v in enumerate(cost_list) if (i + 1) % 3 != 0)
`,

  'find-original-array-from-prefix-xor': `
def findArray(pref):
    pref_list = [int(x) for x in pref]
    arr = [pref_list[0]]
    for i in range(1, len(pref_list)):
        arr.append(pref_list[i - 1] ^ pref_list[i])
    return arr
`,

  'total-distance-traveled': `
def distanceTraveled(mainTank, additionalTank):
    main, extra = int(mainTank), int(additionalTank)
    dist = 0
    while main >= 5:
        dist += 50
        main -= 5
        if extra > 0:
            main += 1
            extra -= 1
    dist += main * 10
    return dist
`,

  'delete-characters-to-make-fancy-string': `
def makeFancyString(s):
    res = []
    for c in s:
        if len(res) >= 2 and res[-1] == c and res[-2] == c:
            continue
        res.append(c)
    return ''.join(res)
`,

  'three-consecutive-odds': `
def threeConsecutiveOdds(arr):
    arr_list = [int(x) for x in arr]
    count = 0
    for n in arr_list:
        if n % 2 == 1:
            count += 1
            if count >= 3:
                return True
        else:
            count = 0
    return False
`,

  'count-equal-and-divisible-pairs-in-array': `
def countPairs(nums, k):
    nums_list = [int(x) for x in nums]
    k = int(k)
    count = 0
    for i in range(len(nums_list)):
        for j in range(i + 1, len(nums_list)):
            if nums_list[i] == nums_list[j] and (i * j) % k == 0:
                count += 1
    return count
`,

  'minimum-changes-to-make-alternating-binary-string': `
def minOperations(s):
    mis = sum(1 for i, c in enumerate(s) if c != '01'[i % 2])
    return min(mis, len(s) - mis)
`,

  'rotate-function': `
def maxRotateFunction(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    total = sum(nums_list)
    f = sum(i * nums_list[i] for i in range(n))
    max_f = f
    for k in range(1, n):
        f = f + total - n * nums_list[n - k]
        max_f = max(max_f, f)
    return max_f
`,

  'maximum-sum-of-distinct-subarrays-with-length-k': `
def maximumSubarraySum(nums, k):
    nums_list = [int(x) for x in nums]
    k = int(k)
    from collections import defaultdict
    freq = defaultdict(int)
    s = 0
    max_s = 0
    for r in range(len(nums_list)):
        freq[nums_list[r]] += 1
        s += nums_list[r]
        if r >= k:
            l = nums_list[r - k]
            s -= l
            freq[l] -= 1
            if freq[l] == 0:
                del freq[l]
        if r >= k - 1 and len(freq) == k:
            max_s = max(max_s, s)
    return max_s
`,

  'find-the-sum-of-encrypted-integers': `
def sumOfEncryptedInt(nums):
    total = 0
    for n in nums:
        n = int(n)
        s = str(n)
        max_d = max(int(c) for c in s)
        total += int(str(max_d) * len(s))
    return total
`,

  'maximum-number-of-weeks-for-which-you-can-work': `
def numberOfWeeks(milestones):
    milestones = [int(x) for x in milestones]
    total = sum(milestones)
    mx = max(milestones)
    rest = total - mx
    return total if mx <= rest + 1 else 2 * rest + 1
`,

  'count-complete-subarrays-in-an-array': `
def countCompleteSubarrays(nums):
    nums_list = [int(x) for x in nums]
    total = len(set(nums_list))
    count = 0
    for l in range(len(nums_list)):
        seen = set()
        for r in range(l, len(nums_list)):
            seen.add(nums_list[r])
            if len(seen) == total:
                count += 1
    return count
`,

  'count-subarrays-where-max-element-appears-at-least-k-times': `
def countSubarrays(nums, k):
    nums_list = [int(x) for x in nums]
    k = int(k)
    M = max(nums_list)
    positions = []
    count = 0
    for r in range(len(nums_list)):
        if nums_list[r] == M:
            positions.append(r)
        if len(positions) >= k:
            count += positions[len(positions) - k] + 1
    return count
`,

  'minimum-index-of-a-valid-split': `
def minimumIndex(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    from collections import Counter
    freq = Counter(nums_list)
    dom, total = max(freq.items(), key=lambda x: x[1])
    left_freq = 0
    for i in range(n - 1):
        if nums_list[i] == dom:
            left_freq += 1
        right_freq = total - left_freq
        if left_freq * 2 > i + 1 and right_freq * 2 > n - i - 1:
            return i
    return -1
`,

  'last-moment-before-ants-fall-off-a-plank': `
def getLastMoment(n, left, right):
    n = int(n)
    left_list = [int(x) for x in left] if hasattr(left, '__iter__') else []
    right_list = [int(x) for x in right] if hasattr(right, '__iter__') else []
    ml = max(left_list) if left_list else 0
    mr = max(n - p for p in right_list) if right_list else 0
    return max(ml, mr)
`,

  'check-if-two-chessboard-squares-have-same-color': `
def checkTwoChessboards(coordinate1, coordinate2):
    col1 = ord(coordinate1[0]) - 96
    row1 = int(coordinate1[1])
    col2 = ord(coordinate2[0]) - 96
    row2 = int(coordinate2[1])
    return (col1 + row1 + col2 + row2) % 2 == 0
`,

  'count-number-of-teams': `
def numTeams(rating):
    rating = [int(x) for x in rating]
    n = len(rating)
    count = 0
    for j in range(1, n - 1):
        ls = ll = rs = rl = 0
        for i in range(j):
            if rating[i] < rating[j]: ls += 1
            elif rating[i] > rating[j]: ll += 1
        for k in range(j + 1, n):
            if rating[k] > rating[j]: rl += 1
            elif rating[k] < rating[j]: rs += 1
        count += ls * rl + ll * rs
    return count
`,

  'remove-colored-pieces-if-both-neighbors-are-same-color': `
def winnerOfGame(colors):
    alice = bob = 0
    for i in range(1, len(colors) - 1):
        if colors[i] == 'A' and colors[i-1] == 'A' and colors[i+1] == 'A':
            alice += 1
        if colors[i] == 'B' and colors[i-1] == 'B' and colors[i+1] == 'B':
            bob += 1
    return alice > bob
`,

  'longest-alternating-subarray': `
def alternatingSubarray(nums):
    nums_list = [int(x) for x in nums]
    ans = -1
    for i in range(len(nums_list) - 1):
        if nums_list[i+1] - nums_list[i] != 1:
            continue
        length = 2
        for j in range(i + 2, len(nums_list)):
            r = j - i
            expected = 1 if r % 2 == 1 else -1
            if nums_list[j] - nums_list[j-1] == expected:
                length += 1
            else:
                break
        ans = max(ans, length)
    return ans
`,

  'divisible-and-non-divisible-sums-difference': `
def differenceOfSums(n, m):
    n, m = int(n), int(m)
    num1 = num2 = 0
    for i in range(1, n + 1):
        if i % m == 0:
            num2 += i
        else:
            num1 += i
    return num1 - num2
`,

  'minimum-element-after-replacement-with-digit-sum': `
def minElement(nums):
    nums_list = [int(x) for x in nums]
    return min(sum(int(d) for d in str(n)) for n in nums_list)
`,

  'pick-gifts': `
def pickGifts(gifts, k):
    import math
    gifts = [int(x) for x in gifts]
    k = int(k)
    for _ in range(k):
        max_val = max(gifts)
        idx = gifts.index(max_val)
        gifts[idx] = int(math.floor(math.sqrt(max_val)))
    return sum(gifts)
`,

  'minimum-operations-to-make-array-xor-equal-to-k': `
def minOperations(nums, k):
    nums_list = [int(x) for x in nums]
    k = int(k)
    xor_all = 0
    for n in nums_list:
        xor_all ^= n
    return bin(xor_all ^ k).count('1')
`,

  'maximum-count-of-positive-integer-and-negative-integer': `
def maximumCount(nums):
    nums_list = [int(x) for x in nums]
    pos = sum(1 for n in nums_list if n > 0)
    neg = sum(1 for n in nums_list if n < 0)
    return max(pos, neg)
`,

  'number-of-students-doing-homework-at-a-given-time': `
def busyStudent(startTime, endTime, queryTime):
    start = [int(x) for x in startTime]
    end = [int(x) for x in endTime]
    q = int(queryTime)
    return sum(1 for i in range(len(start)) if start[i] <= q <= end[i])
`,

  'find-the-xor-of-numbers-which-appear-twice': `
def duplicateNumbersXOR(nums):
    nums_list = [int(x) for x in nums]
    from collections import Counter
    freq = Counter(nums_list)
    result = 0
    for n, c in freq.items():
        if c == 2:
            result ^= n
    return result
`,

  'minimum-sum-mountain-triplet-ii': `
def minimumSumMountainTriplet(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    pref_min = [float('inf')] * n
    suf_min = [float('inf')] * n
    for i in range(1, n):
        pref_min[i] = min(pref_min[i-1], nums_list[i-1])
    for i in range(n-2, -1, -1):
        suf_min[i] = min(suf_min[i+1], nums_list[i+1])
    ans = float('inf')
    for j in range(1, n-1):
        if pref_min[j] < nums_list[j] and suf_min[j] < nums_list[j]:
            ans = min(ans, pref_min[j] + nums_list[j] + suf_min[j])
    return ans if ans != float('inf') else -1
`,

  'minimum-operations-to-exceed-threshold-value-i': `
def minOperations(nums, k):
    nums_list = [int(x) for x in nums]
    k = int(k)
    return sum(1 for x in nums_list if x < k)
`,

  'maximum-subarray': `
def maxSubArray(nums):
    nums_list = [int(x) for x in nums]
    best = cur = nums_list[0]
    for n in nums_list[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best
`,

  'meeting-rooms': `
def canAttendMeetings(intervals):
    intervals_list = [list(iv) for iv in intervals]
    if not intervals_list:
        return True
    intervals_list.sort(key=lambda x: x[0])
    for i in range(1, len(intervals_list)):
        if intervals_list[i][0] < intervals_list[i-1][1]:
            return False
    return True
`,

  'brick-wall': `
def leastBricks(wall):
    wall_list = [list(row) for row in wall]
    from collections import defaultdict
    edges = defaultdict(int)
    for row in wall_list:
        pos = 0
        for brick in row[:-1]:
            pos += brick
            edges[pos] += 1
    if not edges:
        return len(wall_list)
    return len(wall_list) - max(edges.values())
`,

  'number-of-longest-increasing-subsequence': `
def findNumberOfLIS(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    dp = [1] * n
    cnt = [1] * n
    for i in range(n):
        for j in range(i):
            if nums_list[j] < nums_list[i]:
                if dp[j] + 1 > dp[i]:
                    dp[i] = dp[j] + 1
                    cnt[i] = cnt[j]
                elif dp[j] + 1 == dp[i]:
                    cnt[i] += cnt[j]
    max_len = max(dp)
    return sum(cnt[i] for i in range(n) if dp[i] == max_len)
`,

  'kth-smallest-element-in-sorted-matrix': `
def kthSmallest(matrix, k):
    matrix_list = [[int(x) for x in row] for row in matrix]
    k = int(k)
    n = len(matrix_list)
    lo, hi = matrix_list[0][0], matrix_list[n-1][n-1]
    while lo < hi:
        mid = (lo + hi) // 2
        count = 0
        col = n - 1
        for row in range(n):
            while col >= 0 and matrix_list[row][col] > mid:
                col -= 1
            count += col + 1
        if count < k:
            lo = mid + 1
        else:
            hi = mid
    return lo
`,

  'minimum-knight-moves': `
def minKnightMoves(x, y):
    x, y = abs(int(x)), abs(int(y))
    if x == 0 and y == 0:
        return 0
    from collections import deque
    queue = deque([(0, 0, 0)])
    visited = {(0, 0)}
    moves = [(1,2),(2,1),(2,-1),(1,-2),(-1,-2),(-2,-1),(-2,1),(-1,2)]
    while queue:
        cx, cy, steps = queue.popleft()
        for dx, dy in moves:
            nx, ny = cx + dx, cy + dy
            if nx == x and ny == y:
                return steps + 1
            if (nx, ny) not in visited and nx >= -2 and ny >= -2 and nx <= x + 2 and ny <= y + 2:
                visited.add((nx, ny))
                queue.append((nx, ny, steps + 1))
    return -1
`,

  'palindrome-pairs': `
def palindromePairs(words):
    words = list(words)
    def is_palin(s):
        return s == s[::-1]
    n = len(words)
    res = []
    for i in range(n):
        for j in range(n):
            if i != j and is_palin(words[i] + words[j]):
                res.append([i, j])
    res.sort()
    return res
`,

  'search-suggestions-system': `
def suggestedProducts(products, searchWord):
    products = sorted(products)
    searchWord = str(searchWord)
    result = []
    for i in range(1, len(searchWord) + 1):
        prefix = searchWord[:i]
        matches = [p for p in products if p.startswith(prefix)][:3]
        result.append(matches)
    return result
`,

  'array-nesting': `
def arrayNesting(nums):
    nums_list = [int(x) for x in nums]
    n = len(nums_list)
    visited = [False] * n
    best = 0
    for i in range(n):
        if not visited[i]:
            size, j = 0, i
            while not visited[j]:
                visited[j] = True
                j = nums_list[j]
                size += 1
            best = max(best, size)
    return best
`,

  'evaluate-division': `
def calcEquation(equations, values, queries):
    from collections import defaultdict, deque
    equations = [list(eq) for eq in equations]
    values = [float(v) for v in values]
    queries = [list(q) for q in queries]
    graph = defaultdict(list)
    for (a, b), v in zip(equations, values):
        graph[a].append((b, v))
        graph[b].append((a, 1.0 / v))
    def bfs(src, dst):
        if src not in graph or dst not in graph:
            return -1.0
        if src == dst:
            return 1.0
        q = deque([(src, 1.0)])
        visited = {src}
        while q:
            node, prod = q.popleft()
            for nb, w in graph[node]:
                if nb == dst:
                    return prod * w
                if nb not in visited:
                    visited.add(nb)
                    q.append((nb, prod * w))
        return -1.0
    return [bfs(c, d) for c, d in queries]
`,

  'out-of-boundary-paths': `
def findPaths(m, n, maxMove, startRow, startColumn):
    m, n, maxMove = int(m), int(n), int(maxMove)
    startRow, startColumn = int(startRow), int(startColumn)
    MOD = 10**9 + 7
    dp = [[0]*n for _ in range(m)]
    dp[startRow][startColumn] = 1
    ans = 0
    for _ in range(maxMove):
        nxt = [[0]*n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if dp[i][j] == 0:
                    continue
                for di, dj in [(-1,0),(1,0),(0,-1),(0,1)]:
                    ni, nj = i+di, j+dj
                    if ni < 0 or ni >= m or nj < 0 or nj >= n:
                        ans = (ans + dp[i][j]) % MOD
                    else:
                        nxt[ni][nj] = (nxt[ni][nj] + dp[i][j]) % MOD
        dp = nxt
    return ans
`,

  'maximum-ice-cream-bars': `
def maxIceCream(costs, coins):
    costs_list = sorted(int(x) for x in costs)
    coins = int(coins)
    count = 0
    for c in costs_list:
        if coins >= c:
            coins -= c
            count += 1
        else:
            break
    return count
`,

  'count-numbers-with-unique-digits': `
def countNumbersWithUniqueDigits(n):
    n = int(n)
    if n == 0:
        return 1
    ans, avail, unique_count = 10, 9, 9
    for i in range(2, min(n, 10) + 1):
        unique_count *= avail
        ans += unique_count
        avail -= 1
    return ans
`,

  'minimum-cost-to-cut-stick': `
def minCost(n, cuts):
    n = int(n)
    c = sorted([0] + [int(x) for x in cuts] + [n])
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

  'find-minimum-in-rotated-sorted-array-ii': `
def findMin(nums):
    nums_list = [int(x) for x in nums]
    lo, hi = 0, len(nums_list) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums_list[mid] < nums_list[hi]:
            hi = mid
        elif nums_list[mid] > nums_list[hi]:
            lo = mid + 1
        else:
            hi -= 1
    return nums_list[lo]
`,

  'search-in-rotated-sorted-array-ii': `
def search(nums, target):
    nums_list = [int(x) for x in nums]
    target = int(target)
    lo, hi = 0, len(nums_list) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums_list[mid] == target:
            return True
        if nums_list[lo] == nums_list[mid]:
            lo += 1
            continue
        if nums_list[lo] <= nums_list[mid]:
            if nums_list[lo] <= target < nums_list[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums_list[mid] < target <= nums_list[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return False
`,

  'distinct-subsequences': `
def numDistinct(s, t):
    s, t = str(s), str(t)
    m, n = len(s), len(t)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1):
        dp[i][0] = 1
    for i in range(1, m+1):
        for j in range(1, n+1):
            dp[i][j] = dp[i-1][j] + (dp[i-1][j-1] if s[i-1] == t[j-1] else 0)
    return dp[m][n]
`,

  'minimum-window-subsequence': `
def minWindow(s1, s2):
    s1, s2 = str(s1), str(s2)
    best = ''
    lo = 0
    while lo < len(s1):
        i, j = lo, 0
        while i < len(s1) and j < len(s2):
            if s1[i] == s2[j]:
                j += 1
            i += 1
        if j < len(s2):
            break
        hi = i - 1
        j = len(s2) - 1
        while j >= 0:
            if s1[hi] == s2[j]:
                j -= 1
            hi -= 1
        win = s1[hi+1:i]
        if not best or len(win) < len(best):
            best = win
        lo = hi + 2
    return best
`,

  'reconstruct-itinerary': `
from collections import defaultdict
def reconstructItinerary(tickets):
    graph = defaultdict(list)
    for f, t in tickets:
        graph[f].append(t)
    for k in graph:
        graph[k].sort()
    result = []
    def dfs(node):
        while graph[node]:
            dfs(graph[node].pop(0))
        result.append(node)
    dfs('JFK')
    return result[::-1]
`,

  'partition-k-equal-subset-sum': `
def canPartitionKSubsets(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    total = sum(nums)
    if total % k != 0:
        return False
    target = total // k
    nums.sort(reverse=True)
    if nums[0] > target:
        return False
    buckets = [0] * k
    def bt(idx):
        if idx == len(nums):
            return all(b == target for b in buckets)
        for i in range(k):
            if buckets[i] + nums[idx] <= target:
                buckets[i] += nums[idx]
                if bt(idx + 1):
                    return True
                buckets[i] -= nums[idx]
                if buckets[i] == 0:
                    break
        return False
    return bt(0)
`,

  'paint-house': `
def minCostPaintHouse(costs):
    r, g, b = costs[0]
    for i in range(1, len(costs)):
        cr, cg, cb = costs[i]
        r, g, b = cr + min(g, b), cg + min(r, b), cb + min(r, g)
    return min(r, g, b)
`,

  'add-strings': `
def addStrings(num1, num2):
    i, j, carry = len(num1)-1, len(num2)-1, 0
    res = []
    while i >= 0 or j >= 0 or carry:
        d1 = ord(num1[i]) - 48 if i >= 0 else 0
        d2 = ord(num2[j]) - 48 if j >= 0 else 0
        s = d1 + d2 + carry
        res.append(str(s % 10))
        carry = s // 10
        i -= 1; j -= 1
    return ''.join(reversed(res))
`,

  'palindrome-partitioning-ii': `
def minCutPalindrome(s):
    n = len(s)
    is_palin = [[False]*n for _ in range(n)]
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            is_palin[i][j] = s[i] == s[j] and (j - i <= 2 or is_palin[i+1][j-1])
    cut = [0] * n
    for i in range(n):
        if is_palin[0][i]:
            cut[i] = 0
            continue
        cut[i] = float('inf')
        for j in range(1, i+1):
            if is_palin[j][i]:
                cut[i] = min(cut[i], cut[j-1] + 1)
    return cut[n-1]
`,

  'wiggle-sort-ii': `
def wiggleSortII(nums):
    sorted_nums = sorted(nums)
    n = len(nums)
    mid = (n - 1) // 2
    lo, hi = mid, n - 1
    for i in range(n):
        if i % 2 == 0:
            nums[i] = sorted_nums[lo]; lo -= 1
        else:
            nums[i] = sorted_nums[hi]; hi -= 1
`,

  'stone-game-iv': `
def winnerSquareGame(n):
    dp = [False] * (n + 1)
    k = 1
    squares = []
    while k * k <= n:
        squares.append(k * k)
        k += 1
    for i in range(1, n + 1):
        for sq in squares:
            if sq > i:
                break
            if not dp[i - sq]:
                dp[i] = True
                break
    return dp[n]
`,

  'minimum-refueling-stops': `
import heapq
def minRefuelStops(target, startFuel, stations):
    fuel = startFuel
    stops = 0
    heap = []
    idx = 0
    while fuel < target:
        while idx < len(stations) and stations[idx][0] <= fuel:
            heapq.heappush(heap, -stations[idx][1])
            idx += 1
        if not heap:
            return -1
        fuel -= heapq.heappop(heap)
        stops += 1
    return stops
`,

  'snapshot-array': `
import bisect
def snapshotArrayRunner(length, ops, args):
    history = [[[0, 0]] for _ in range(int(length))]
    snap_id = 0
    result = []
    for op, a in zip(ops, args):
        if op == 'set':
            idx, val = a[0], a[1]
            if history[idx][-1][0] == snap_id:
                history[idx][-1][1] = val
            else:
                history[idx].append([snap_id, val])
            result.append(None)
        elif op == 'snap':
            result.append(snap_id)
            snap_id += 1
        elif op == 'get':
            idx, sid = a[0], a[1]
            h = history[idx]
            lo, hi = 0, len(h) - 1
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if h[mid][0] <= sid:
                    lo = mid
                else:
                    hi = mid - 1
            result.append(h[lo][1])
        else:
            result.append(None)
    return result
`,

  'paint-house-ii': `
def minCostII(costs):
    costs = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (costs.to_py() if hasattr(costs, 'to_py') else costs)]
    k = len(costs[0])
    prev = costs[0][:]
    for i in range(1, len(costs)):
        min1, min2, min_idx = float('inf'), float('inf'), -1
        for j in range(k):
            if prev[j] < min1:
                min2, min1, min_idx = min1, prev[j], j
            elif prev[j] < min2:
                min2 = prev[j]
        prev = [costs[i][j] + (min2 if j == min_idx else min1) for j in range(k)]
    return min(prev)
`,

  'minimum-moves-equal-array-ii': `
def minMoves2(nums):
    nums = sorted(nums.to_py() if hasattr(nums, 'to_py') else list(nums))
    median = nums[len(nums) // 2]
    return sum(abs(x - median) for x in nums)
`,

  'frog-jump': `
def canCross(stones):
    stones = list(stones.to_py()) if hasattr(stones, 'to_py') else list(stones)
    stone_set = set(stones)
    dp = {s: set() for s in stones}
    dp[0].add(0)
    for stone in stones:
        for k in dp[stone]:
            for nxt in [k-1, k, k+1]:
                if nxt > 0 and stone + nxt in stone_set:
                    dp[stone + nxt].add(nxt)
    return len(dp[stones[-1]]) > 0
`,

  'k-inverse-pairs-array': `
def kInversePairs(n, k):
    MOD = 10**9 + 7
    dp = [0] * (k + 1)
    dp[0] = 1
    for i in range(1, n + 1):
        ndp = [0] * (k + 1)
        prefix = 0
        for j in range(k + 1):
            prefix += dp[j]
            if j >= i:
                prefix -= dp[j - i]
            prefix %= MOD
            ndp[j] = prefix
        dp = ndp
    return dp[k]
`,

  'minimum-cost-to-hire-k-workers': `
import heapq
def mincostToHireWorkers(quality, wage, k):
    quality = list(quality.to_py()) if hasattr(quality, 'to_py') else list(quality)
    wage = list(wage.to_py()) if hasattr(wage, 'to_py') else list(wage)
    workers = sorted(zip(wage, quality), key=lambda x: x[0]/x[1])
    heap = []
    q_sum = 0
    res = float('inf')
    for w, q in workers:
        heapq.heappush(heap, -q)
        q_sum += q
        if len(heap) > k:
            q_sum += heapq.heappop(heap)
        if len(heap) == k:
            res = min(res, (w / q) * q_sum)
    return res
`,

  'random-pick-with-weight': `
import random, bisect
def randomPickWeightRunner(w, picks):
    w = list(w.to_py()) if hasattr(w, 'to_py') else list(w)
    picks = list(picks.to_py()) if hasattr(picks, 'to_py') else list(picks)
    prefix = []
    s = 0
    for wi in w:
        s += wi
        prefix.append(s)
    result = []
    for _ in picks:
        r = random.random() * s
        result.append(bisect.bisect_left(prefix, r))
    return result
`,

  'find-in-mountain-array': `
def findInMountainArray(mountainArr, target):
    arr = list(mountainArr.to_py()) if hasattr(mountainArr, 'to_py') else list(mountainArr)
    n = len(arr)
    lo, hi = 0, n - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < arr[mid+1]:
            lo = mid + 1
        else:
            hi = mid
    peak = lo
    lo, hi = 0, peak
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    lo, hi = peak + 1, n - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] > target: lo = mid + 1
        else: hi = mid - 1
    return -1
`,

  'basic-calculator-ii': `
def calculateII(s):
    stack = []
    num = 0
    op = '+'
    for i, c in enumerate(s):
        if c.isdigit():
            num = num * 10 + int(c)
        if c in '+-*/' or i == len(s) - 1:
            if op == '+': stack.append(num)
            elif op == '-': stack.append(-num)
            elif op == '*': stack.append(stack.pop() * num)
            elif op == '/': stack.append(int(stack.pop() / num))
            op = c
            num = 0
    return sum(stack)
`,

  'maximum-binary-tree': `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right
def constructMaximumBinaryTree(nums):
    if not nums: return None
    mi = nums.index(max(nums))
    node = TreeNode(nums[mi])
    node.left = constructMaximumBinaryTree(nums[:mi])
    node.right = constructMaximumBinaryTree(nums[mi+1:])
    return node
`,

  'next-greater-element-iii': `
def nextGreaterElementIII(n):
    d = list(str(n))
    i = len(d) - 2
    while i >= 0 and d[i] >= d[i+1]:
        i -= 1
    if i < 0: return -1
    j = len(d) - 1
    while d[j] <= d[i]:
        j -= 1
    d[i], d[j] = d[j], d[i]
    d[i+1:] = d[i+1:][::-1]
    result = int(''.join(d))
    return -1 if result > 2**31 - 1 else result
`,

  'number-of-digit-one': `
def countDigitOne(n):
    count = 0
    factor = 1
    while factor <= n:
        d = (n // factor) % 10
        higher = n // (factor * 10)
        lower = n % factor
        if d == 0: count += higher * factor
        elif d == 1: count += higher * factor + lower + 1
        else: count += (higher + 1) * factor
        factor *= 10
    return count
`,

  'moving-average-from-data-stream': `
from collections import deque
def movingAverageRunner(size, vals):
    vals = list(vals.to_py()) if hasattr(vals, 'to_py') else list(vals)
    q = deque()
    s = 0
    result = []
    for v in vals:
        q.append(v); s += v
        if len(q) > size: s -= q.popleft()
        result.append(s / len(q))
    return result
`,

  'design-add-and-search-words': `
def wordDictionaryRunner(ops, args):
    trie = {}
    def add(word):
        node = trie
        for c in word:
            if c not in node: node[c] = {}
            node = node[c]
        node['$'] = True
    def search(word, node=None):
        if node is None: node = trie
        for i, c in enumerate(word):
            if c == '.':
                return any(search(word[i+1:], node[k]) for k in node if k != '$')
            if c not in node: return False
            node = node[c]
        return '$' in node
    result = []
    for op, a in zip(ops, args):
        if op == 'addWord': add(a[0]); result.append(None)
        elif op == 'search': result.append(search(a[0]))
        else: result.append(None)
    return result
`,

  'serialize-deserialize-bst': `
def serialize(root):
    def pre(node):
        if not node: return []
        return [str(node.val)] + pre(node.left) + pre(node.right)
    return ','.join(pre(root))
def deserialize(data):
    if not data: return None
    vals = list(map(int, data.split(',')))
    idx = [0]
    def bt(mn, mx):
        if idx[0] >= len(vals) or vals[idx[0]] < mn or vals[idx[0]] > mx:
            return None
        v = vals[idx[0]]; idx[0] += 1
        node = TreeNode(v)
        node.left = bt(mn, v-1)
        node.right = bt(v+1, mx)
        return node
    return bt(float('-inf'), float('inf'))
`,

  'best-meeting-point': `
def minTotalDistance(grid):
    grid = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    rows, cols = [], []
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c]:
                rows.append(r); cols.append(c)
    def total(arr):
        arr = sorted(arr)
        med = arr[len(arr)//2]
        return sum(abs(x-med) for x in arr)
    return total(rows) + total(cols)
`,

  'longest-subarray-ones-after-delete': `
def longestSubarray(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    lo = zeros = best = 0
    for hi in range(len(nums)):
        if nums[hi] == 0: zeros += 1
        while zeros > 1:
            if nums[lo] == 0: zeros -= 1
            lo += 1
        best = max(best, hi - lo)
    return best
`,

  'reverse-pairs': `
def reversePairs(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    count = [0]
    def merge(arr):
        if len(arr) <= 1: return arr
        mid = len(arr)//2
        left = merge(arr[:mid])
        right = merge(arr[mid:])
        j = 0
        for x in left:
            while j < len(right) and x > 2*right[j]:
                j += 1
            count[0] += j
        merged = []
        a = b = 0
        while a < len(left) and b < len(right):
            if left[a] <= right[b]: merged.append(left[a]); a+=1
            else: merged.append(right[b]); b+=1
        return merged + left[a:] + right[b:]
    merge(nums)
    return count[0]
`,

  'minimum-cost-cut-cake': `
def minCostCutCake(n, cuts):
    cuts = sorted(list(cuts.to_py()) if hasattr(cuts, 'to_py') else list(cuts))
    arr = [0] + cuts + [n]
    m = len(arr)
    dp = [[0]*m for _ in range(m)]
    for length in range(2, m):
        for i in range(m - length):
            j = i + length
            dp[i][j] = float('inf')
            for k in range(i+1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i])
    return dp[0][m-1]
`,

  'spiral-matrix-iii': `
def spiralMatrixIII(rows, cols, rStart, cStart):
    result = []
    r, c = rStart, cStart
    dirs = [(0,1),(1,0),(0,-1),(-1,0)]
    di, steps = 0, 1
    result.append([r, c])
    while len(result) < rows * cols:
        for _ in range(2):
            dr, dc = dirs[di % 4]
            for _ in range(steps):
                r += dr; c += dc
                if 0 <= r < rows and 0 <= c < cols:
                    result.append([r, c])
            di += 1
        steps += 1
    return result
`,

  'text-justification': `
def fullJustify(words, maxWidth):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    lines = []
    cur, cur_len = [], 0
    for w in words:
        if cur_len + len(w) + len(cur) > maxWidth:
            lines.append(cur); cur, cur_len = [], 0
        cur.append(w); cur_len += len(w)
    lines.append(cur)
    result = []
    for i, line in enumerate(lines):
        if i == len(lines)-1 or len(line) == 1:
            s = ' '.join(line)
            result.append(s + ' '*(maxWidth-len(s)))
        else:
            total = maxWidth - sum(len(w) for w in line)
            gaps = len(line) - 1
            base, extra = divmod(total, gaps)
            s = line[0]
            for j in range(1, len(line)):
                s += ' '*(base + (1 if j <= extra else 0)) + line[j]
            result.append(s)
    return result
`,

  'minimum-operations-make-array-continuous': `
import bisect
def minOperations(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    uniq = sorted(set(nums))
    best = 0
    j = 0
    for i in range(len(uniq)):
        while j < len(uniq) and uniq[j] <= uniq[i] + n - 1:
            j += 1
        best = max(best, j - i)
    return n - best
`,

  'arithmetic-subarrays': `
def checkArithmeticSubarrays(nums, l, r):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    l = list(l.to_py()) if hasattr(l, 'to_py') else list(l)
    r = list(r.to_py()) if hasattr(r, 'to_py') else list(r)
    result = []
    for li, ri in zip(l, r):
        sub = sorted(nums[li:ri+1])
        if len(sub) < 2:
            result.append(True); continue
        d = sub[1] - sub[0]
        result.append(all(sub[j]-sub[j-1]==d for j in range(1, len(sub))))
    return result
`,

  'minimum-score-path': `
def minScore(n, roads):
    roads = [list(r) for r in (roads.to_py() if hasattr(roads, 'to_py') else roads)]
    from collections import defaultdict
    adj = defaultdict(list)
    for a, b, d in roads:
        adj[a].append((b, d))
        adj[b].append((a, d))
    ans = float('inf')
    visited = set()
    stack = [1]
    while stack:
        u = stack.pop()
        if u in visited: continue
        visited.add(u)
        for v, d in adj[u]:
            ans = min(ans, d)
            if v not in visited:
                stack.append(v)
    return ans
`,

  'design-circular-queue': `
def circularQueueRunner(k, ops, args):
    arr = [0] * int(k)
    head = size = 0
    k = int(k)
    def enQueue(v):
        nonlocal size
        if size == k: return False
        arr[(head + size) % k] = v; size += 1; return True
    def deQueue():
        nonlocal head, size
        if size == 0: return False
        head = (head + 1) % k; size -= 1; return True
    def Front(): return -1 if size == 0 else arr[head]
    def Rear(): return -1 if size == 0 else arr[(head + size - 1) % k]
    result = []
    for op, a in zip(ops, args):
        if op == 'enQueue': result.append(enQueue(a[0]))
        elif op == 'deQueue': result.append(deQueue())
        elif op == 'Front': result.append(Front())
        elif op == 'Rear': result.append(Rear())
        elif op == 'isEmpty': result.append(size == 0)
        elif op == 'isFull': result.append(size == k)
        else: result.append(None)
    return result
`,

  'find-duplicate-number-ii': `
def findDuplicateFloyd(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
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

  'insert-delete-getrandom': `
import random
def insertDeleteGetRandomRunner(ops, args):
    val_to_idx = {}
    arr = []
    result = []
    for op, a in zip(ops, args):
        if op == 'insert':
            val = a[0]
            if val in val_to_idx:
                result.append(False)
            else:
                val_to_idx[val] = len(arr)
                arr.append(val)
                result.append(True)
        elif op == 'remove':
            val = a[0]
            if val not in val_to_idx:
                result.append(False)
            else:
                idx = val_to_idx[val]
                last = arr[-1]
                arr[idx] = last
                val_to_idx[last] = idx
                arr.pop()
                del val_to_idx[val]
                result.append(True)
        elif op == 'getRandom':
            result.append(random.choice(arr))
        else:
            result.append(None)
    return result
`,

  'maximum-points-from-cards': `
def maxScore(cardPoints, k):
    pts = list(cardPoints.to_py()) if hasattr(cardPoints, 'to_py') else list(cardPoints)
    n = len(pts)
    total = sum(pts)
    if k == n:
        return total
    win = n - k
    window_sum = sum(pts[:win])
    min_window = window_sum
    for i in range(win, n):
        window_sum += pts[i] - pts[i - win]
        if window_sum < min_window:
            min_window = window_sum
    return total - min_window
`,

  'minimum-ascii-delete-sum': `
def minimumDeleteSum(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        dp[i][0] = dp[i-1][0] + ord(s1[i-1])
    for j in range(1, n + 1):
        dp[0][j] = dp[0][j-1] + ord(s2[j-1])
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(dp[i-1][j] + ord(s1[i-1]), dp[i][j-1] + ord(s2[j-1]))
    return dp[m][n]
`,

  'sum-of-distances-in-tree': `
import sys
sys.setrecursionlimit(50000)
def sumOfDistancesInTree(n, edges):
    edges_list = list(edges.to_py()) if hasattr(edges, 'to_py') else list(edges)
    adj = [[] for _ in range(n)]
    for e in edges_list:
        e = list(e.to_py()) if hasattr(e, 'to_py') else list(e)
        adj[e[0]].append(e[1])
        adj[e[1]].append(e[0])
    count = [1] * n
    ans = [0] * n
    def dfs1(node, parent):
        for child in adj[node]:
            if child == parent:
                continue
            dfs1(child, node)
            count[node] += count[child]
            ans[node] += ans[child] + count[child]
    def dfs2(node, parent):
        for child in adj[node]:
            if child == parent:
                continue
            ans[child] = ans[node] - count[child] + (n - count[child])
            dfs2(child, node)
    dfs1(0, -1)
    dfs2(0, -1)
    return ans
`,

  'couples-holding-hands': `
def minSwapsCouples(row):
    row = list(row.to_py()) if hasattr(row, 'to_py') else list(row)
    pos = [0] * len(row)
    for i, v in enumerate(row):
        pos[v] = i
    swaps = 0
    for i in range(0, len(row), 2):
        partner = row[i] ^ 1
        if row[i + 1] == partner:
            continue
        j = pos[partner]
        pos[row[j]] = i + 1
        row[i + 1], row[j] = row[j], row[i + 1]
        pos[partner] = i + 1
        swaps += 1
    return swaps
`,

  'falling-squares': `
def fallingSquares(positions):
    positions = list(positions.to_py()) if hasattr(positions, 'to_py') else list(positions)
    intervals = []
    max_h = 0
    result = []
    for pos in positions:
        pos = list(pos.to_py()) if hasattr(pos, 'to_py') else list(pos)
        left, size = pos[0], pos[1]
        r = left + size
        base = 0
        for seg in intervals:
            if seg[0] < r and left < seg[1]:
                base = max(base, seg[2])
        new_h = base + size
        intervals.append((left, r, new_h))
        max_h = max(max_h, new_h)
        result.append(max_h)
    return result
`,

  'constrained-subsequence-sum': `
from collections import deque
def constrainedSubsetSum(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    dp = nums[:]
    dq = deque()
    res = -float('inf')
    for i in range(len(nums)):
        if dq and dq[0] < i - k:
            dq.popleft()
        if dq:
            dp[i] = nums[i] + max(0, dp[dq[0]])
        while dq and dp[dq[-1]] <= dp[i]:
            dq.pop()
        dq.append(i)
        if dp[i] > res:
            res = dp[i]
    return res
`,

  'pseudo-palindromic-paths': `
def pseudoPalindromicPathsRunner(arr):
    raw_list = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    cleaned = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not cleaned or cleaned[0] is None:
        return 0
    class TreeNode:
        def __init__(self, v): self.v = v; self.l = None; self.r = None
    def build(i):
        if i >= len(cleaned) or cleaned[i] is None:
            return None
        node = TreeNode(cleaned[i])
        node.l = build(2 * i + 1)
        node.r = build(2 * i + 2)
        return node
    root = build(0)
    result = [0]
    def dfs(node, mask):
        if not node:
            return
        mask ^= (1 << node.v)
        if not node.l and not node.r:
            if (mask & (mask - 1)) == 0:
                result[0] += 1
            return
        dfs(node.l, mask)
        dfs(node.r, mask)
    dfs(root, 0)
    return result[0]
`,

  'number-of-nodes-same-label': `
import sys
sys.setrecursionlimit(200000)
def countSubTrees(n, edges, labels):
    edges_list = list(edges.to_py()) if hasattr(edges, 'to_py') else list(edges)
    adj = [[] for _ in range(n)]
    for e in edges_list:
        e = list(e.to_py()) if hasattr(e, 'to_py') else list(e)
        adj[e[0]].append(e[1])
        adj[e[1]].append(e[0])
    ans = [0] * n
    def dfs(node, parent):
        freq = [0] * 26
        freq[ord(labels[node]) - 97] += 1
        for child in adj[node]:
            if child == parent:
                continue
            child_freq = dfs(child, node)
            for i in range(26):
                freq[i] += child_freq[i]
        ans[node] = freq[ord(labels[node]) - 97]
        return freq
    dfs(0, -1)
    return ans
`,

  'minimum-cost-tree-leaf-values': `
def mctFromLeafValues(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    cost = 0
    while len(arr) > 1:
        min_idx = arr.index(min(arr))
        left = arr[min_idx - 1] if min_idx > 0 else float('inf')
        right = arr[min_idx + 1] if min_idx < len(arr) - 1 else float('inf')
        cost += arr[min_idx] * min(left, right)
        arr.pop(min_idx)
    return cost
`,

  'valid-partition-array': `
def validPartition(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(2, n + 1):
        if dp[i - 2] and nums[i - 2] == nums[i - 1]:
            dp[i] = True
        if i >= 3 and dp[i - 3]:
            a, b, c = nums[i - 3], nums[i - 2], nums[i - 1]
            if (a == b == c) or (b == a + 1 and c == a + 2):
                dp[i] = True
    return dp[n]
`,

  'paint-fence': `
def numWays(n, k):
    if n == 1:
        return k
    same = k
    diff = k * (k - 1)
    for _ in range(3, n + 1):
        same, diff = diff, (k - 1) * (same + diff)
    return same + diff
`,

  'minimum-insertion-steps-palindrome': `
def minInsertions(s):
    n = len(s)
    rev = s[::-1]
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if s[i-1] == rev[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return n - dp[n][n]
`,

  'longest-subarray-abs-diff-limit': `
from collections import deque
def longestSubarrayWithLimit(nums, limit):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    max_dq = deque()
    min_dq = deque()
    left = 0
    res = 0
    for right in range(len(nums)):
        while max_dq and nums[max_dq[-1]] <= nums[right]:
            max_dq.pop()
        while min_dq and nums[min_dq[-1]] >= nums[right]:
            min_dq.pop()
        max_dq.append(right)
        min_dq.append(right)
        while nums[max_dq[0]] - nums[min_dq[0]] > limit:
            left += 1
            if max_dq[0] < left: max_dq.popleft()
            if min_dq[0] < left: min_dq.popleft()
        res = max(res, right - left + 1)
    return res
`,

  'maximum-sum-two-non-overlapping-subarrays': `
def maxSumTwoNoOverlap(nums, firstLen, secondLen):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + nums[i]
    def s(l, r): return prefix[r+1] - prefix[l]
    res = 0
    max_first = 0
    for i in range(firstLen - 1, n - secondLen):
        max_first = max(max_first, s(i - firstLen + 1, i))
        res = max(res, max_first + s(i + 1, i + secondLen))
    max_second = 0
    for i in range(secondLen - 1, n - firstLen):
        max_second = max(max_second, s(i - secondLen + 1, i))
        res = max(res, max_second + s(i + 1, i + firstLen))
    return res
`,

  'number-of-closed-islands': `
def closedIsland(grid):
    grid = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    rows, cols = len(grid), len(grid[0])
    def flood(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 0:
            return
        grid[r][c] = 1
        flood(r+1,c); flood(r-1,c); flood(r,c+1); flood(r,c-1)
    for r in range(rows):
        flood(r, 0); flood(r, cols-1)
    for c in range(cols):
        flood(0, c); flood(rows-1, c)
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 0:
                flood(r, c)
                count += 1
    return count
`,

  'destination-city': `
def destCity(paths):
    paths = list(paths.to_py()) if hasattr(paths, 'to_py') else list(paths)
    sources = set()
    for p in paths:
        p = list(p.to_py()) if hasattr(p, 'to_py') else list(p)
        sources.add(p[0])
    for p in paths:
        p = list(p.to_py()) if hasattr(p, 'to_py') else list(p)
        if p[1] not in sources:
            return p[1]
    return ''
`,

  'find-winner-tictactoe': `
def tictactoe(moves):
    moves = list(moves.to_py()) if hasattr(moves, 'to_py') else list(moves)
    rowA = [0]*3; colA = [0]*3; diagA = 0; antiA = 0
    rowB = [0]*3; colB = [0]*3; diagB = 0; antiB = 0
    for i, m in enumerate(moves):
        m = list(m.to_py()) if hasattr(m, 'to_py') else list(m)
        r, c = m[0], m[1]
        if i % 2 == 0:
            rowA[r] += 1; colA[c] += 1
            if r == c: diagA += 1
            if r + c == 2: antiA += 1
            if 3 in (rowA[r], colA[c], diagA, antiA): return 'A'
        else:
            rowB[r] += 1; colB[c] += 1
            if r == c: diagB += 1
            if r + c == 2: antiB += 1
            if 3 in (rowB[r], colB[c], diagB, antiB): return 'B'
    return 'Draw' if len(moves) == 9 else 'Pending'
`,

  'maximum-eaten-apples': `
import heapq
def eatenApples(apples, days):
    apples = list(apples.to_py()) if hasattr(apples, 'to_py') else list(apples)
    days = list(days.to_py()) if hasattr(days, 'to_py') else list(days)
    n = len(apples)
    heap = []
    eaten = 0
    day = 0
    while day < n or heap:
        if day < n and apples[day] > 0:
            heapq.heappush(heap, (day + days[day], apples[day]))
        while heap and heap[0][0] <= day:
            heapq.heappop(heap)
        if heap:
            expiry, count = heapq.heappop(heap)
            eaten += 1
            if count > 1:
                heapq.heappush(heap, (expiry, count - 1))
        day += 1
    return eaten
`,

  'split-array-fibonacci': `
def splitIntoFibonacci(num):
    MAX = 2**31 - 1
    result = []
    def bt(start, seq):
        if start == len(num) and len(seq) >= 3:
            return True
        for end in range(start + 1, len(num) + 1):
            sub = num[start:end]
            if len(sub) > 1 and sub[0] == '0':
                break
            n = int(sub)
            if n > MAX:
                break
            if len(seq) >= 2:
                expected = seq[-2] + seq[-1]
                if n < expected:
                    continue
                if n > expected:
                    break
            seq.append(n)
            if bt(end, seq):
                return True
            seq.pop()
        return False
    bt(0, result)
    return result
`,

  'maximum-score-performing-multiplication': `
def maximumScore(nums, multipliers):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    multipliers = list(multipliers.to_py()) if hasattr(multipliers, 'to_py') else list(multipliers)
    n, m = len(nums), len(multipliers)
    dp = [[-float('inf')] * (m + 1) for _ in range(m + 1)]
    dp[0][0] = 0
    for k in range(m):
        for i in range(k + 1):
            j = k - i
            if dp[i][j] == -float('inf'):
                continue
            cur = dp[i][j]
            if dp[i+1][j] < cur + nums[i] * multipliers[k]:
                dp[i+1][j] = cur + nums[i] * multipliers[k]
            if dp[i][j+1] < cur + nums[n-1-j] * multipliers[k]:
                dp[i][j+1] = cur + nums[n-1-j] * multipliers[k]
    res = -float('inf')
    for i in range(m + 1):
        j = m - i
        if dp[i][j] > res:
            res = dp[i][j]
    return res
`,

  'cherry-pickup': `
def cherryPickup(grid):
    grid = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    n = len(grid)
    NEG_INF = float('-inf')
    dp = [[NEG_INF] * n for _ in range(n)]
    dp[0][0] = grid[0][0]
    for t in range(1, 2 * n - 1):
        ndp = [[NEG_INF] * n for _ in range(n)]
        lo = max(0, t - (n - 1))
        hi = min(n - 1, t)
        for r1 in range(lo, hi + 1):
            c1 = t - r1
            if grid[r1][c1] == -1:
                continue
            for r2 in range(r1, hi + 1):
                c2 = t - r2
                if grid[r2][c2] == -1:
                    continue
                best = NEG_INF
                for d1, d2 in [(0,0),(0,1),(1,0),(1,1)]:
                    pr1, pr2 = r1 - d1, r2 - d2
                    if pr1 >= 0 and pr2 >= 0 and dp[pr1][pr2] != NEG_INF:
                        best = max(best, dp[pr1][pr2])
                if best == NEG_INF:
                    continue
                cherries = grid[r1][c1]
                if r1 != r2:
                    cherries += grid[r2][c2]
                ndp[r1][r2] = best + cherries
        dp = ndp
    ans = dp[n-1][n-1]
    return max(0, ans) if ans != NEG_INF else 0
`,

  'count-ways-build-good-string': `
def countGoodStrings(low, high, zero, one):
    MOD = 10**9 + 7
    dp = [0] * (high + 1)
    dp[0] = 1
    ans = 0
    for i in range(1, high + 1):
        if i >= zero:
            dp[i] = (dp[i] + dp[i - zero]) % MOD
        if i >= one:
            dp[i] = (dp[i] + dp[i - one]) % MOD
        if i >= low:
            ans = (ans + dp[i]) % MOD
    return ans
`,

  'profitable-schemes': `
def profitableSchemes(n, minProfit, group, profit):
    group = list(group.to_py()) if hasattr(group, 'to_py') else list(group)
    profit = list(profit.to_py()) if hasattr(profit, 'to_py') else list(profit)
    MOD = 10**9 + 7
    dp = [[0] * (minProfit + 1) for _ in range(n + 1)]
    dp[0][0] = 1
    for i in range(len(group)):
        g, p = group[i], profit[i]
        for w in range(n, g - 1, -1):
            for j in range(minProfit, -1, -1):
                np_val = min(j + p, minProfit)
                dp[w][np_val] = (dp[w][np_val] + dp[w - g][j]) % MOD
    return sum(dp[w][minProfit] for w in range(n + 1)) % MOD
`,

  'count-square-submatrices': `
def countSquares(matrix):
    matrix = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (matrix.to_py() if hasattr(matrix, 'to_py') else matrix)]
    ans = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 1 and i > 0 and j > 0:
                matrix[i][j] = min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1
            ans += matrix[i][j]
    return ans
`,

  'freedom-trail': `
def findRotateSteps(ring, key):
    n = len(ring)
    pos = {}
    for i, c in enumerate(ring):
        pos.setdefault(c, []).append(i)
    dp = [float('inf')] * n
    dp[0] = 0
    for c in key:
        ndp = [float('inf')] * n
        for nxt in pos[c]:
            for cur in range(n):
                if dp[cur] == float('inf'):
                    continue
                diff = abs(cur - nxt)
                steps = min(diff, n - diff)
                ndp[nxt] = min(ndp[nxt], dp[cur] + steps + 1)
        dp = ndp
    return min(dp)
`,

  'guess-number-higher-or-lower-ii': `
def getMoneyAmount(n):
    dp = [[0] * (n + 2) for _ in range(n + 2)]
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j + 1):
                cost = k + max(dp[i][k-1] if k > i else 0, dp[k+1][j] if k < j else 0)
                dp[i][j] = min(dp[i][j], cost)
    return dp[1][n]
`,

  'remove-palindromic-subsequences': `
def removePalindromeSub(s):
    if not s:
        return 0
    if s == s[::-1]:
        return 1
    return 2
`,

  'check-array-formation': `
def canFormArray(arr, pieces):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    pieces = [list(p.to_py()) if hasattr(p, 'to_py') else list(p) for p in (pieces.to_py() if hasattr(pieces, 'to_py') else pieces)]
    mp = {p[0]: p for p in pieces}
    i = 0
    while i < len(arr):
        if arr[i] not in mp:
            return False
        piece = mp[arr[i]]
        for j in range(len(piece)):
            if arr[i + j] != piece[j]:
                return False
        i += len(piece)
    return True
`,

  'minimum-falling-path-sum-ii': `
def minFallingPathSumII(grid):
    grid = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    n = len(grid)
    dp = grid[0][:]
    for i in range(1, n):
        min1 = min2 = float('inf')
        min_idx = -1
        for j in range(n):
            if dp[j] < min1:
                min2 = min1
                min1 = dp[j]
                min_idx = j
            elif dp[j] < min2:
                min2 = dp[j]
        ndp = [0] * n
        for j in range(n):
            ndp[j] = grid[i][j] + (min2 if j == min_idx else min1)
        dp = ndp
    return min(dp)
`,

  'scramble-string': `
def isScramble(s1, s2):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def solve(a, b):
        if a == b:
            return True
        if sorted(a) != sorted(b):
            return False
        n = len(a)
        for i in range(1, n):
            if (solve(a[:i], b[:i]) and solve(a[i:], b[i:])) or \
               (solve(a[:i], b[n-i:]) and solve(a[i:], b[:n-i])):
                return True
        return False
    return solve(s1, s2)
`,

  'predict-the-winner': `
def predictTheWinner(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    dp = [[0] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = nums[i]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
    return dp[0][n-1] >= 0
`,

  'russian-doll-envelopes': `
import bisect
def maxEnvelopes(envelopes):
    envs = list(envelopes.to_py()) if hasattr(envelopes, 'to_py') else list(envelopes)
    envs = [list(e.to_py()) if hasattr(e, 'to_py') else list(e) for e in envs]
    envs.sort(key=lambda x: (x[0], -x[1]))
    tails = []
    for _, h in envs:
        pos = bisect.bisect_left(tails, h)
        if pos == len(tails):
            tails.append(h)
        else:
            tails[pos] = h
    return len(tails)
`,

  'binary-tree-cameras': `
def minCameraCover(root):
    cameras = 0
    def dfs(node):
        nonlocal cameras
        if node is None: return 1
        left = dfs(node.left); right = dfs(node.right)
        if left == 0 or right == 0: cameras += 1; return 2
        if left == 2 or right == 2: return 1
        return 0
    if dfs(root) == 0: cameras += 1
    return cameras
`,

  'linked-list-cycle-ii': `
def detectCycle(vals, pos):
    vals = list(vals.to_py()) if hasattr(vals, 'to_py') else list(vals)
    pos = int(pos)
    if not vals: return -1
    class Node:
        def __init__(self, v): self.val = v; self.next = None
    nodes = [Node(v) for v in vals]
    for i in range(len(nodes) - 1): nodes[i].next = nodes[i + 1]
    if 0 <= pos < len(nodes): nodes[-1].next = nodes[pos]
    slow = fast = nodes[0]
    while True:
        slow = slow.next
        if not fast.next or not fast.next.next: return -1
        fast = fast.next.next
        if slow is fast: break
    entry = nodes[0]
    while entry is not slow: entry = entry.next; slow = slow.next
    return nodes.index(entry)
`,

  'add-two-numbers-ii': `
def addTwoNumbers(l1, l2):
    s1 = list(l1.to_py()) if hasattr(l1, 'to_py') else list(l1)
    s2 = list(l2.to_py()) if hasattr(l2, 'to_py') else list(l2)
    result = []; carry = 0
    while s1 or s2 or carry:
        d1 = s1.pop() if s1 else 0
        d2 = s2.pop() if s2 else 0
        total = d1 + d2 + carry
        carry, digit = divmod(total, 10)
        result.insert(0, digit)
    return result
`,

  'maximum-performance-of-team': `
import heapq
def maxPerformance(n, speed, efficiency, k):
    speed = list(speed.to_py()) if hasattr(speed, 'to_py') else list(speed)
    efficiency = list(efficiency.to_py()) if hasattr(efficiency, 'to_py') else list(efficiency)
    k = int(k); MOD = 10**9 + 7
    engineers = sorted(zip(efficiency, speed), reverse=True)
    min_heap = []; speed_sum = 0; best = 0
    for eff, spd in engineers:
        heapq.heappush(min_heap, spd); speed_sum += spd
        if len(min_heap) > k: speed_sum -= heapq.heappop(min_heap)
        best = max(best, speed_sum * eff)
    return best % MOD
`,

  'minimum-interval-to-include-each-query': `
import heapq
def minInterval(intervals, queries):
    intervals = [list(iv.to_py()) if hasattr(iv, 'to_py') else list(iv) for iv in (intervals.to_py() if hasattr(intervals, 'to_py') else intervals)]
    queries = list(queries.to_py()) if hasattr(queries, 'to_py') else list(queries)
    intervals.sort()
    indexed = sorted(enumerate(queries), key=lambda x: x[1])
    ans = [-1] * len(queries)
    min_heap = []; j = 0
    for qi, q in indexed:
        while j < len(intervals) and intervals[j][0] <= q:
            l, r = intervals[j]; heapq.heappush(min_heap, (r - l + 1, r)); j += 1
        while min_heap and min_heap[0][1] < q: heapq.heappop(min_heap)
        if min_heap: ans[qi] = min_heap[0][0]
    return ans
`,

  'minimum-number-of-taps-to-open-to-water-a-garden': `
def minTaps(n, ranges):
    n = int(n)
    ranges = list(ranges.to_py()) if hasattr(ranges, 'to_py') else list(ranges)
    max_reach = [0] * (n + 1)
    for i in range(n + 1):
        left = max(0, i - ranges[i]); right = min(n, i + ranges[i])
        max_reach[left] = max(max_reach[left], right)
    taps = cur_end = next_end = 0
    for i in range(n + 1):
        if i > next_end: return -1
        next_end = max(next_end, max_reach[i])
        if i == cur_end and i < n: taps += 1; cur_end = next_end
    return taps
`,

  'online-election': `
import bisect
def topVotedCandidate(persons, times, queries):
    persons = list(persons.to_py()) if hasattr(persons, 'to_py') else list(persons)
    times = list(times.to_py()) if hasattr(times, 'to_py') else list(times)
    queries = list(queries.to_py()) if hasattr(queries, 'to_py') else list(queries)
    votes = {}; leaders = []; leader = -1
    for p in persons:
        votes[p] = votes.get(p, 0) + 1
        if leader == -1 or votes[p] >= votes[leader]: leader = p
        leaders.append(leader)
    result = []
    for t in queries:
        idx = bisect.bisect_right(times, t) - 1
        result.append(leaders[idx])
    return result
`,

  'count-of-range-sum': `
def countRangeSum(nums, lower, upper):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    lower = int(lower); upper = int(upper)
    prefix = [0] * (len(nums) + 1)
    for i, v in enumerate(nums): prefix[i+1] = prefix[i] + v
    count = 0
    def merge_sort(arr):
        nonlocal count
        if len(arr) <= 1: return arr
        mid = len(arr) // 2
        left = merge_sort(arr[:mid]); right = merge_sort(arr[mid:])
        j = k = 0
        for r in right:
            while j < len(left) and left[j] < r - upper: j += 1
            while k < len(left) and left[k] <= r - lower: k += 1
            count += k - j
        return sorted(left + right)
    merge_sort(prefix)
    return count
`,

  'design-linked-list': `
def simulateLinkedList(ops, args):
    ops = list(ops.to_py()) if hasattr(ops, 'to_py') else list(ops)
    args = [list(a.to_py()) if hasattr(a, 'to_py') else list(a) for a in (args.to_py() if hasattr(args, 'to_py') else args)]
    class Node:
        def __init__(self, v): self.val = v; self.next = None
    head = Node(0); size = 0
    def get(i):
        if i < 0 or i >= size: return -1
        cur = head.next
        for _ in range(i): cur = cur.next
        return cur.val
    def add_at_index(i, v):
        nonlocal size
        if i > size: return
        i = max(0, i); prev = head
        for _ in range(i): prev = prev.next
        node = Node(v); node.next = prev.next; prev.next = node; size += 1
    def delete_at_index(i):
        nonlocal size
        if i < 0 or i >= size: return
        prev = head
        for _ in range(i): prev = prev.next
        prev.next = prev.next.next; size -= 1
    result = []
    for op, a in zip(ops, args):
        if op == 'addAtHead': add_at_index(0, a[0]); result.append(None)
        elif op == 'addAtTail': add_at_index(size, a[0]); result.append(None)
        elif op == 'addAtIndex': add_at_index(a[0], a[1]); result.append(None)
        elif op == 'deleteAtIndex': delete_at_index(a[0]); result.append(None)
        elif op == 'get': result.append(get(a[0]))
    return result
`,
  'maximum-product-subarray': `
def maxProduct(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    max_p = min_p = res = nums[0]
    for n in nums[1:]:
        candidates = (n, max_p * n, min_p * n)
        max_p = max(candidates)
        min_p = min(candidates)
        res = max(res, max_p)
    return res
`,

  'delete-and-earn': `
def deleteAndEarn(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    max_val = max(nums)
    total = [0] * (max_val + 1)
    for n in nums:
        total[n] += n
    prev2 = prev1 = 0
    for i in range(max_val + 1):
        cur = max(prev1, prev2 + total[i])
        prev2 = prev1
        prev1 = cur
    return prev1
`,

  'minimum-time-collect-apples': `
def minTime(n, edges, hasApple):
    import sys
    sys.setrecursionlimit(200000)
    edges = [list(e.to_py()) if hasattr(e, 'to_py') else list(e) for e in (edges.to_py() if hasattr(edges, 'to_py') else edges)]
    hasApple = list(hasApple.to_py()) if hasattr(hasApple, 'to_py') else list(hasApple)
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    def dfs(node, parent):
        time = 0
        for child in adj[node]:
            if child == parent:
                continue
            ct = dfs(child, node)
            if ct > 0 or hasApple[child]:
                time += ct + 2
        return time
    return dfs(0, -1)
`,

  'xor-queries-of-subarray': `
def xorQueries(arr, queries):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    queries = [list(q.to_py()) if hasattr(q, 'to_py') else list(q) for q in (queries.to_py() if hasattr(queries, 'to_py') else queries)]
    prefix = [0]
    for n in arr:
        prefix.append(prefix[-1] ^ n)
    return [prefix[r + 1] ^ prefix[l] for l, r in queries]
`,

  'sequential-digits': `
def sequentialDigits(low, high):
    result = []
    for start in range(1, 10):
        num = 0
        for d in range(start, 10):
            num = num * 10 + d
            if low <= num <= high:
                result.append(num)
    return sorted(result)
`,

  'count-sub-islands': `
def countSubIslands(grid1, grid2):
    grid1 = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid1.to_py() if hasattr(grid1, 'to_py') else grid1)]
    grid2 = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid2.to_py() if hasattr(grid2, 'to_py') else grid2)]
    m, n = len(grid1), len(grid1[0])
    count = 0
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid2[i][j] != 1:
            return True
        grid2[i][j] = 0
        ok = grid1[i][j] == 1
        ok = dfs(i - 1, j) and ok
        ok = dfs(i + 1, j) and ok
        ok = dfs(i, j - 1) and ok
        ok = dfs(i, j + 1) and ok
        return ok
    for i in range(m):
        for j in range(n):
            if grid2[i][j] == 1 and dfs(i, j):
                count += 1
    return count
`,

  'maximum-profit-assignment': `
def maxProfitAssignment(difficulty, profit, worker):
    difficulty = list(difficulty.to_py()) if hasattr(difficulty, 'to_py') else list(difficulty)
    profit = list(profit.to_py()) if hasattr(profit, 'to_py') else list(profit)
    worker = list(worker.to_py()) if hasattr(worker, 'to_py') else list(worker)
    jobs = sorted(zip(difficulty, profit))
    worker.sort()
    total = best = k = 0
    for w in worker:
        while k < len(jobs) and jobs[k][0] <= w:
            best = max(best, jobs[k][1])
            k += 1
        total += best
    return total
`,

  'longest-palindromic-substring': `
def longestPalindrome(s):
    start, max_len = 0, 0
    def expand(l, r):
        nonlocal start, max_len
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        if r - l - 1 > max_len:
            max_len = r - l - 1
            start = l + 1
    for i in range(len(s)):
        expand(i, i)
        expand(i, i + 1)
    return s[start:start + max_len]
`,

  'max-product-word-lengths': `
def maxProductWordLengths(words):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    masks = []
    for w in words:
        mask = 0
        for c in w:
            mask |= (1 << (ord(c) - ord('a')))
        masks.append(mask)
    best = 0
    for i in range(len(words) - 1):
        for j in range(i + 1, len(words)):
            if masks[i] & masks[j] == 0:
                best = max(best, len(words[i]) * len(words[j]))
    return best
`,

  'cherry-pickup-ii': `
def cherryPickup(grid):
    grid = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    rows, cols = len(grid), len(grid[0])
    NEG_INF = float('-inf')
    dp = [[NEG_INF] * cols for _ in range(cols)]
    dp[0][cols - 1] = grid[0][0] + (grid[0][cols - 1] if cols > 1 else 0)
    for r in range(1, rows):
        ndp = [[NEG_INF] * cols for _ in range(cols)]
        for c1 in range(cols):
            for c2 in range(c1, cols):
                if dp[c1][c2] == NEG_INF:
                    continue
                for d1 in (-1, 0, 1):
                    for d2 in (-1, 0, 1):
                        nc1, nc2 = c1 + d1, c2 + d2
                        if nc1 < 0 or nc1 >= cols or nc2 < 0 or nc2 >= cols or nc1 > nc2:
                            continue
                        cherries = grid[r][nc1] + (0 if nc1 == nc2 else grid[r][nc2])
                        ndp[nc1][nc2] = max(ndp[nc1][nc2], dp[c1][c2] + cherries)
        dp = ndp
    ans = 0
    for c1 in range(cols):
        for c2 in range(c1, cols):
            if dp[c1][c2] > ans:
                ans = dp[c1][c2]
    return ans
`,

  'detonate-maximum-bombs': `
def maximumDetonation(bombs):
    bombs = [list(b.to_py()) if hasattr(b, 'to_py') else list(b) for b in (bombs.to_py() if hasattr(bombs, 'to_py') else bombs)]
    n = len(bombs)
    adj = [[] for _ in range(n)]
    for i in range(n):
        x1, y1, r1 = bombs[i]
        for j in range(n):
            if i == j:
                continue
            x2, y2, _ = bombs[j]
            if (x1 - x2) ** 2 + (y1 - y2) ** 2 <= r1 * r1:
                adj[i].append(j)
    def bfs(start):
        vis = {start}
        queue = [start]
        for cur in queue:
            for nb in adj[cur]:
                if nb not in vis:
                    vis.add(nb)
                    queue.append(nb)
        return len(vis)
    return max(bfs(i) for i in range(n))
`,

  'stone-game-vii': `
def stoneGameVII(stones):
    stones = list(stones.to_py()) if hasattr(stones, 'to_py') else list(stones)
    n = len(stones)
    prefix = [0] * (n + 1)
    for i, x in enumerate(stones):
        prefix[i + 1] = prefix[i] + x
    def rng(i, j):
        return prefix[j + 1] - prefix[i]
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = max(rng(i + 1, j) - dp[i + 1][j], rng(i, j - 1) - dp[i][j - 1])
    return dp[0][n - 1]
`,

  'design-browser-history': `
def browserHistory(homepage, ops):
    ops = list(ops.to_py()) if hasattr(ops, 'to_py') else list(ops)
    back_stack = []
    fwd_stack = []
    cur = str(homepage)
    results = []
    for op in ops:
        op = list(op.to_py()) if hasattr(op, 'to_py') else list(op)
        action = op[0]
        if action == 'visit':
            back_stack.append(cur)
            fwd_stack.clear()
            cur = op[1]
        elif action == 'back':
            steps = int(op[1])
            for _ in range(min(steps, len(back_stack))):
                fwd_stack.append(cur)
                cur = back_stack.pop()
            results.append(cur)
        else:  # forward
            steps = int(op[1])
            for _ in range(min(steps, len(fwd_stack))):
                back_stack.append(cur)
                cur = fwd_stack.pop()
            results.append(cur)
    return results
`,

  'knight-dialer': `
def knightDialer(n):
    MOD = 10 ** 9 + 7
    moves = [[4,6],[6,8],[7,9],[4,8],[0,3,9],[],[0,1,7],[2,6],[1,3],[2,4]]
    dp = [1] * 10
    for _ in range(n - 1):
        ndp = [0] * 10
        for d in range(10):
            for nb in moves[d]:
                ndp[d] = (ndp[d] + dp[nb]) % MOD
        dp = ndp
    return sum(dp) % MOD
`,

  'paint-house-iii': `
def minCost(houses, cost, m, n, target):
    houses = list(houses.to_py()) if hasattr(houses, 'to_py') else list(houses)
    cost = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (cost.to_py() if hasattr(cost, 'to_py') else cost)]
    INF = float('inf')
    dp = [[[INF] * (target + 1) for _ in range(n)] for _ in range(m)]
    if houses[0] != 0:
        dp[0][houses[0] - 1][1] = 0
    else:
        for j in range(n):
            dp[0][j][1] = cost[0][j]
    for i in range(1, m):
        color_range = [houses[i] - 1] if houses[i] != 0 else range(n)
        for j in color_range:
            paint = 0 if houses[i] != 0 else cost[i][j]
            for k in range(1, min(i + 2, target + 1)):
                if dp[i-1][j][k] != INF:
                    dp[i][j][k] = min(dp[i][j][k], dp[i-1][j][k] + paint)
                if k > 1:
                    for pj in range(n):
                        if pj != j and dp[i-1][pj][k-1] != INF:
                            dp[i][j][k] = min(dp[i][j][k], dp[i-1][pj][k-1] + paint)
    ans = min(dp[m-1][j][target] for j in range(n))
    return -1 if ans == INF else ans
`,

  'maximize-distance-to-closest-person': `
def maxDistToClosest(seats):
    seats = list(seats.to_py()) if hasattr(seats, 'to_py') else list(seats)
    n = len(seats)
    best = prev = -1
    for i in range(n):
        if seats[i] == 1:
            if prev == -1:
                best = max(best, i)
            else:
                best = max(best, (i - prev) // 2)
            prev = i
    if prev != n - 1:
        best = max(best, n - 1 - prev)
    return best
`,

  'minimum-number-of-vertices': `
def findSmallestSetOfVertices(n, edges):
    edges = [list(e.to_py()) if hasattr(e, 'to_py') else list(e) for e in (edges.to_py() if hasattr(edges, 'to_py') else edges)]
    has_incoming = set()
    for e in edges:
        has_incoming.add(e[1])
    return [i for i in range(n) if i not in has_incoming]
`,


  'sliding-window-median': `
def medianSlidingWindow(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    k = int(k)
    result = []
    for i in range(len(nums) - k + 1):
        window = sorted(nums[i:i+k])
        mid = k // 2
        if k % 2 == 1:
            result.append(window[mid])
        else:
            result.append((window[mid-1] + window[mid]) / 2)
    return result
`,

  'minimum-difficulty-of-job-schedule': `
def minDifficulty(jobDifficulty, d):
    jobDifficulty = list(jobDifficulty.to_py()) if hasattr(jobDifficulty, 'to_py') else list(jobDifficulty)
    d = int(d)
    n = len(jobDifficulty)
    if n < d: return -1
    INF = float('inf')
    dp = [INF] * n
    mx = 0
    for i in range(n): mx = max(mx, jobDifficulty[i]); dp[i] = mx
    for day in range(2, d + 1):
        ndp = [INF] * n
        for i in range(day - 1, n):
            mx = 0
            for j in range(i, day - 2, -1):
                mx = max(mx, jobDifficulty[j])
                if dp[j-1] < INF: ndp[i] = min(ndp[i], dp[j-1] + mx)
        dp = ndp
    return dp[n-1]
`,

  'tallest-billboard': `
def tallestBillboard(rods):
    rods = list(rods.to_py()) if hasattr(rods, 'to_py') else list(rods)
    S = sum(rods)
    dp = [-1] * (S + 1)
    dp[0] = 0
    for r in rods:
        curr = dp[:]
        for d in range(S + 1):
            if curr[d] < 0: continue
            if d + r <= S: dp[d + r] = max(dp[d + r], curr[d] + r)
            if d >= r: dp[d - r] = max(dp[d - r], curr[d])
            else: dp[r - d] = max(dp[r - d], curr[d] + r - d)
    return dp[0]
`,

  'concatenated-words': `
def findAllConcatenatedWordsInADict(words):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    word_set = set(words)
    def can_form(word):
        n = len(word)
        dp = [False] * (n + 1); dp[0] = True
        for i in range(1, n + 1):
            for j in range(i):
                if not dp[j]: continue
                sub = word[j:i]
                if sub != word and sub in word_set: dp[i] = True; break
        return dp[n]
    return sorted([w for w in words if w and can_form(w)])
`,

  'max-value-of-equation': `
from collections import deque
def findMaxValueOfEquation(points, k):
    points = [list(p.to_py()) if hasattr(p, 'to_py') else list(p) for p in (points.to_py() if hasattr(points, 'to_py') else points)]
    k = int(k)
    dq = deque()  # (yi-xi, xi)
    ans = float('-inf')
    for xj, yj in points:
        while dq and xj - dq[0][1] > k: dq.popleft()
        if dq: ans = max(ans, dq[0][0] + xj + yj)
        while dq and dq[-1][0] <= yj - xj: dq.pop()
        dq.append((yj - xj, xj))
    return ans
`,

  'number-of-music-playlists': `
def numMusicPlaylists(n, goal, k):
    n = int(n); goal = int(goal); k = int(k)
    MOD = 10**9 + 7
    dp = [[0] * (n + 1) for _ in range(goal + 1)]
    dp[0][0] = 1
    for i in range(1, goal + 1):
        for j in range(1, n + 1):
            dp[i][j] = (dp[i][j] + dp[i-1][j-1] * (n - j + 1)) % MOD
            if j > k: dp[i][j] = (dp[i][j] + dp[i-1][j] * (j - k)) % MOD
    return dp[goal][n]
`,

  'count-different-palindromic-subsequences': `
def countPalindromicSubsequences(s):
    MOD = 10**9 + 7
    n = len(s)
    dp = [[0] * n for _ in range(n)]
    for i in range(n): dp[i][i] = 1
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            for c in 'abcd':
                l, r = i, j
                while l <= j and s[l] != c: l += 1
                while r >= i and s[r] != c: r -= 1
                if l > j or r < i: continue
                if l == r: dp[i][j] = (dp[i][j] + 1) % MOD
                elif l + 1 == r: dp[i][j] = (dp[i][j] + 2) % MOD
                else: dp[i][j] = (dp[i][j] + dp[l+1][r-1] + 2) % MOD
    return dp[0][n-1]
`,

  'painting-the-walls': `
def paintWalls(cost, time):
    cost = list(cost.to_py()) if hasattr(cost, 'to_py') else list(cost)
    time = list(time.to_py()) if hasattr(time, 'to_py') else list(time)
    n = len(cost)
    dp = [float('inf')] * (n + 1); dp[0] = 0
    for i in range(n):
        for j in range(n, -1, -1):
            dp[j] = min(dp[j], dp[max(0, j - time[i] - 1)] + cost[i])
    return dp[n]
`,

  'shortest-path-to-get-all-keys': `
from collections import deque
def shortestPathAllKeys(grid):
    grid = list(grid.to_py()) if hasattr(grid, 'to_py') else list(grid)
    grid = [str(row) for row in grid]
    m, n = len(grid), len(grid[0])
    num_keys = 0; sr = sc = 0
    for r in range(m):
        for c in range(n):
            ch = grid[r][c]
            if ch == '@': sr, sc = r, c
            elif 'a' <= ch <= 'f': num_keys += 1
    if num_keys == 0: return 0
    all_keys = (1 << num_keys) - 1
    visited = set()
    q = deque([(sr, sc, 0, 0)])
    visited.add((sr, sc, 0))
    while q:
        r, c, keys, dist = q.popleft()
        if keys == all_keys: return dist
        for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
            nr, nc = r + dr, c + dc
            if not (0 <= nr < m and 0 <= nc < n): continue
            cell = grid[nr][nc]
            if cell == '#': continue
            if 'A' <= cell <= 'F' and not (keys & (1 << (ord(cell) - 65))): continue
            nkeys = keys | (1 << (ord(cell) - 97)) if 'a' <= cell <= 'f' else keys
            if (nr, nc, nkeys) not in visited:
                visited.add((nr, nc, nkeys))
                q.append((nr, nc, nkeys, dist + 1))
    return -1
`,

  'stone-game-v': `
def stoneGameV(stoneValue):
    stoneValue = list(stoneValue.to_py()) if hasattr(stoneValue, 'to_py') else list(stoneValue)
    n = len(stoneValue)
    if n == 1: return 0
    prefix = [0]*(n+1)
    for i in range(n): prefix[i+1] = prefix[i] + stoneValue[i]
    dp = [[0]*n for _ in range(n)]
    for length in range(2, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            for m in range(i, j):
                left = prefix[m+1] - prefix[i]
                right = prefix[j+1] - prefix[m+1]
                if left < right: dp[i][j] = max(dp[i][j], left + dp[i][m])
                elif left > right: dp[i][j] = max(dp[i][j], right + dp[m+1][j])
                else: dp[i][j] = max(dp[i][j], left + max(dp[i][m], dp[m+1][j]))
    return dp[0][n-1]
`,

  'maximum-sum-three-non-overlapping-subarrays': `
def maxSumOfThreeSubarrays(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    w = []
    s = sum(nums[:k]); w.append(s)
    for i in range(k, n): s += nums[i] - nums[i-k]; w.append(s)
    wn = len(w)
    left = [0]*wn; right = [0]*wn
    best = w[0]; bidx = 0
    for i in range(wn):
        if w[i] > best: best = w[i]; bidx = i
        left[i] = bidx
    best = w[-1]; bidx = wn-1
    for i in range(wn-1, -1, -1):
        if w[i] >= best: best = w[i]; bidx = i
        right[i] = bidx
    ans = [-1,-1,-1]; best_sum = 0
    for j in range(k, wn-k):
        l, r = left[j-k], right[j+k]
        if w[l]+w[j]+w[r] > best_sum:
            best_sum = w[l]+w[j]+w[r]; ans = [l,j,r]
    return ans
`,

  'minimum-cost-to-merge-stones': `
def mergeStones(stones, k):
    stones = list(stones.to_py()) if hasattr(stones, 'to_py') else list(stones)
    n = len(stones)
    if n == 1: return 0
    if (n - 1) % (k - 1) != 0: return -1
    prefix = [0]*(n+1)
    for i in range(n): prefix[i+1] = prefix[i] + stones[i]
    dp = [[0]*n for _ in range(n)]
    for length in range(k, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for m in range(i, j, k-1):
                dp[i][j] = min(dp[i][j], dp[i][m] + dp[m+1][j])
            if (length - 1) % (k - 1) == 0:
                dp[i][j] += prefix[j+1] - prefix[i]
    return dp[0][n-1]
`,

  'palindrome-partitioning-iii': `
def palindromePartition(s, k):
    n = len(s)
    cost = [[0]*n for _ in range(n)]
    for length in range(2, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            cost[i][j] = cost[i+1][j-1] + (0 if s[i] == s[j] else 1)
    INF = float('inf')
    dp = [[INF]*n for _ in range(k+1)]
    for j in range(n): dp[1][j] = cost[0][j]
    for t in range(2, k+1):
        for j in range(t-1, n):
            for m in range(t-1, j+1):
                dp[t][j] = min(dp[t][j], dp[t-1][m-1] + cost[m][j])
    return dp[k][n-1]
`,

  'maximum-height-by-stacking-cuboids': `
def maxHeight(cuboids):
    cuboids = [list(c.to_py()) if hasattr(c, 'to_py') else list(c) for c in (cuboids.to_py() if hasattr(cuboids, 'to_py') else cuboids)]
    for c in cuboids: c.sort()
    cuboids.sort()
    n = len(cuboids)
    dp = [c[2] for c in cuboids]
    for i in range(n):
        for j in range(i):
            if cuboids[j][0] <= cuboids[i][0] and cuboids[j][1] <= cuboids[i][1] and cuboids[j][2] <= cuboids[i][2]:
                dp[i] = max(dp[i], dp[j] + cuboids[i][2])
    return max(dp)
`,

  'minimum-number-of-days-to-eat-n-oranges': `
def minDays(n):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(x):
        if x <= 1: return x
        return 1 + min(x % 2 + dp(x // 2), x % 3 + dp(x // 3))
    return dp(n)
`,

  'best-team-with-no-conflicts': `
def bestTeamScore(scores, ages):
    scores = list(scores.to_py()) if hasattr(scores, 'to_py') else list(scores)
    ages = list(ages.to_py()) if hasattr(ages, 'to_py') else list(ages)
    players = sorted(zip(ages, scores))
    n = len(players)
    dp = [p[1] for p in players]
    for i in range(n):
        for j in range(i):
            if players[j][1] <= players[i][1]:
                dp[i] = max(dp[i], dp[j] + players[i][1])
    return max(dp)
`,

  'number-of-ways-to-form-target-given-dictionary': `
def numWays(words, target):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    words = [str(w) for w in words]
    MOD = 10**9 + 7
    wlen, tlen = len(words[0]), len(target)
    count = [[0]*26 for _ in range(wlen)]
    for w in words:
        for j, c in enumerate(w):
            count[j][ord(c)-ord('a')] += 1
    dp = [0]*(tlen+1); dp[0] = 1
    for j in range(wlen):
        for i in range(min(j+1,tlen), 0, -1):
            c = ord(target[i-1]) - ord('a')
            dp[i] = (dp[i] + dp[i-1] * count[j][c]) % MOD
    return dp[tlen]
`,

  'minimum-xor-sum-of-two-arrays': `
def minimumXORSum(nums1, nums2):
    nums1 = list(nums1.to_py()) if hasattr(nums1, 'to_py') else list(nums1)
    nums2 = list(nums2.to_py()) if hasattr(nums2, 'to_py') else list(nums2)
    n = len(nums1)
    INF = float('inf')
    dp = [INF] * (1 << n); dp[0] = 0
    for mask in range(1 << n):
        if dp[mask] == INF: continue
        i = bin(mask).count('1')
        if i >= n: continue
        for j in range(n):
            if not (mask & (1 << j)):
                nxt = mask | (1 << j)
                dp[nxt] = min(dp[nxt], dp[mask] + (nums1[i] ^ nums2[j]))
    return dp[(1 << n) - 1]
`,

  'number-of-ways-to-rearrange-sticks-with-k-sticks-visible': `
def rearrangeSticks(n, k):
    MOD = 10**9 + 7
    dp = [[0] * (k + 1) for _ in range(n + 1)]
    dp[0][0] = 1
    for i in range(1, n + 1):
        for j in range(1, min(i, k) + 1):
            dp[i][j] = (dp[i-1][j-1] + (i - 1) * dp[i-1][j]) % MOD
    return dp[n][k]
`,

  'number-of-ways-to-stay-in-same-place-after-some-steps': `
def numWays(steps, arrLen):
    MOD = 10**9 + 7
    max_pos = min(arrLen - 1, steps // 2)
    dp = [0] * (max_pos + 1)
    dp[0] = 1
    for _ in range(steps):
        ndp = [0] * (max_pos + 1)
        for i in range(max_pos + 1):
            ndp[i] = dp[i]
            if i > 0:
                ndp[i] = (ndp[i] + dp[i-1]) % MOD
            if i < max_pos:
                ndp[i] = (ndp[i] + dp[i+1]) % MOD
        dp = ndp
    return dp[0]
`,

  'minimum-score-triangulation-of-polygon': `
def minScoreTriangulation(values):
    values = list(values.to_py()) if hasattr(values, 'to_py') else list(values)
    n = len(values)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            dp[i][j] = float('inf')
            for k in range(i + 1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j])
    return dp[0][n-1]
`,

  'minimum-cost-to-make-array-equal': `
def minCost(nums, cost):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    cost = list(cost.to_py()) if hasattr(cost, 'to_py') else list(cost)
    def total(v):
        return sum(abs(nums[i] - v) * cost[i] for i in range(len(nums)))
    lo, hi = min(nums), max(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if total(mid) <= total(mid + 1):
            hi = mid
        else:
            lo = mid + 1
    return total(lo)
`,

  'maximum-number-of-achievable-transfer-requests': `
def maximumRequests(n, requests):
    requests = list(requests.to_py()) if hasattr(requests, 'to_py') else list(requests)
    requests = [[int(x) for x in r] for r in requests]
    m = len(requests)
    best = 0
    for mask in range(1 << m):
        balance = [0] * n
        count = 0
        for i in range(m):
            if mask & (1 << i):
                balance[requests[i][0]] -= 1
                balance[requests[i][1]] += 1
                count += 1
        if all(b == 0 for b in balance):
            best = max(best, count)
    return best
`,

  'maximum-elegance-of-k-length-subsequence': `
def findMaximumElegance(items, k):
    items = list(items.to_py()) if hasattr(items, 'to_py') else list(items)
    items = [[int(x) for x in row] for row in items]
    items.sort(key=lambda x: -x[0])
    total_profit = 0
    distinct_count = 0
    seen = set()
    stack = []
    for i in range(k):
        profit, cat = items[i]
        total_profit += profit
        if cat not in seen:
            seen.add(cat)
            distinct_count += 1
        else:
            stack.append(profit)
    ans = total_profit + distinct_count * distinct_count
    for i in range(k, len(items)):
        profit, cat = items[i]
        if cat not in seen and stack:
            seen.add(cat)
            distinct_count += 1
            total_profit -= stack.pop()
            total_profit += profit
            ans = max(ans, total_profit + distinct_count * distinct_count)
    return ans
`,

  'minimum-total-distance-traveled': `
def minimumTotalDistance(robot, factory):
    robot = list(robot.to_py()) if hasattr(robot, 'to_py') else list(robot)
    factory = list(factory.to_py()) if hasattr(factory, 'to_py') else list(factory)
    factory = [[int(x) for x in row] for row in factory]
    robot = sorted([int(x) for x in robot])
    factory.sort(key=lambda x: x[0])
    flat = []
    for pos, limit in factory:
        for _ in range(limit):
            flat.append(pos)
    n, m = len(robot), len(flat)
    INF = float('inf')
    dp = [[INF] * (m + 1) for _ in range(n + 1)]
    for j in range(m + 1):
        dp[0][j] = 0
    for i in range(1, n + 1):
        for j in range(i, m + 1):
            dp[i][j] = dp[i][j - 1]
            if dp[i - 1][j - 1] < INF:
                dp[i][j] = min(dp[i][j], dp[i - 1][j - 1] + abs(robot[i - 1] - flat[j - 1]))
    return dp[n][m]
`,

  'minimum-incompatibility': `
def minimumIncompatibility(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    nums = [int(x) for x in nums]
    n = len(nums)
    sz = n // k
    from collections import Counter
    cnt = Counter(nums)
    if max(cnt.values()) > k:
        return -1
    full = (1 << n) - 1
    subset_cost = {}
    for mask in range(1, 1 << n):
        if bin(mask).count('1') != sz:
            continue
        elems = [nums[i] for i in range(n) if mask & (1 << i)]
        if len(set(elems)) != sz:
            continue
        subset_cost[mask] = max(elems) - min(elems)
    INF = float('inf')
    dp = [INF] * (1 << n)
    dp[0] = 0
    for mask in range(0, 1 << n):
        if dp[mask] == INF:
            continue
        comp = full ^ mask
        sub = comp
        while sub > 0:
            if sub in subset_cost and dp[mask | sub] > dp[mask] + subset_cost[sub]:
                dp[mask | sub] = dp[mask] + subset_cost[sub]
            sub = (sub - 1) & comp
    return dp[full] if dp[full] != INF else -1
`,

  'fair-distribution-of-cookies': `
def distributeCookies(cookies, k):
    cookies = list(cookies.to_py()) if hasattr(cookies, 'to_py') else list(cookies)
    cookies = [int(x) for x in cookies]
    cookies.sort(reverse=True)
    children = [0] * k
    ans = [float('inf')]
    def bt(i, cur_max):
        if cur_max >= ans[0]:
            return
        if i == len(cookies):
            ans[0] = cur_max
            return
        seen = set()
        for j in range(k):
            if children[j] in seen:
                continue
            seen.add(children[j])
            children[j] += cookies[i]
            bt(i + 1, max(cur_max, children[j]))
            children[j] -= cookies[i]
    bt(0, 0)
    return ans[0]
`,

  'maximum-profit-in-job-scheduling': `
def jobScheduling(startTime, endTime, profit):
    startTime = list(startTime.to_py()) if hasattr(startTime, 'to_py') else list(startTime)
    endTime = list(endTime.to_py()) if hasattr(endTime, 'to_py') else list(endTime)
    profit = list(profit.to_py()) if hasattr(profit, 'to_py') else list(profit)
    startTime = [int(x) for x in startTime]
    endTime = [int(x) for x in endTime]
    profit = [int(x) for x in profit]
    import bisect
    n = len(startTime)
    jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])
    dp = [0] * (n + 1)
    end_times = [0] + [jobs[i][1] for i in range(n)]
    for i in range(1, n + 1):
        s, e, p = jobs[i - 1]
        idx = bisect.bisect_right(end_times, s, 0, i) - 1
        dp[i] = max(dp[i - 1], dp[idx] + p)
    return dp[n]
`,

  'dota2-senate': `
def predictPartyVictory(senate):
    from collections import deque
    n = len(senate)
    r = deque(i for i, s in enumerate(senate) if s == 'R')
    d = deque(i for i, s in enumerate(senate) if s == 'D')
    while r and d:
        ri, di = r.popleft(), d.popleft()
        if ri < di:
            r.append(ri + n)
        else:
            d.append(di + n)
    return 'Radiant' if r else 'Dire'
`,

  'time-needed-to-inform-all-employees': `
def numTimeToInform(n, headID, manager, informTime):
    children = [[] for _ in range(n)]
    for i in range(n):
        if manager[i] != -1:
            children[manager[i]].append(i)
    best = 0
    def dfs(emp, time):
        nonlocal best
        if time > best:
            best = time
        for child in children[emp]:
            dfs(child, time + informTime[emp])
    dfs(headID, 0)
    return best
`,

  'minesweeper': `
def updateBoard(board, click):
    if hasattr(board, 'to_py'):
        board = [list(row) for row in board.to_py()]
    else:
        board = [list(row) for row in board]
    if hasattr(click, 'to_py'):
        click = list(click.to_py())
    cr, cc = int(click[0]), int(click[1])
    m, n = len(board), len(board[0])
    if board[cr][cc] == 'M':
        board[cr][cc] = 'X'
        return board
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    def dfs(r, c):
        mines = sum(
            1 for dr, dc in dirs
            if 0 <= r+dr < m and 0 <= c+dc < n and board[r+dr][c+dc] == 'M'
        )
        if mines > 0:
            board[r][c] = str(mines)
        else:
            board[r][c] = 'B'
            for dr, dc in dirs:
                nr, nc = r+dr, c+dc
                if 0 <= nr < m and 0 <= nc < n and board[nr][nc] == 'E':
                    dfs(nr, nc)
    dfs(cr, cc)
    return board
`,

  'minimum-score-triangulation': `
def minScoreTriangulation(values):
    n = len(values)
    dp = [[0] * n for _ in range(n)]
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i + 1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j])
    return dp[0][n - 1]
`,

  'score-after-flipping-matrix': `
def matrixScore(grid):
    if hasattr(grid, 'to_py'):
        g = [list(row) for row in grid.to_py()]
    else:
        g = [list(row) for row in grid]
    m, n = len(g), len(g[0])
    for i in range(m):
        if g[i][0] == 0:
            g[i] = [1 - x for x in g[i]]
    for j in range(1, n):
        ones = sum(g[i][j] for i in range(m))
        if ones < m - ones:
            for i in range(m):
                g[i][j] = 1 - g[i][j]
    total = 0
    for i in range(m):
        row = 0
        for j in range(n):
            row = (row << 1) | g[i][j]
        total += row
    return total
`,

  'beautiful-array': `
def beautifulArray(n):
    from math import ceil, floor
    memo = {}
    def ba(k):
        if k in memo:
            return memo[k]
        if k == 1:
            return [1]
        left = ba(ceil(k / 2))
        right = ba(floor(k / 2))
        result = [2*x - 1 for x in left if 2*x - 1 <= k] + [2*x for x in right if 2*x <= k]
        memo[k] = result
        return result
    return ba(n)
`,

  'recover-binary-search-tree': `
def recoverTree(root):
    first = second = prev = None
    def inorder(node):
        nonlocal first, second, prev
        if not node:
            return
        inorder(node.left)
        if prev and prev.val > node.val:
            if not first:
                first = prev
            second = node
        prev = node
        inorder(node.right)
    inorder(root)
    if first and second:
        first.val, second.val = second.val, first.val
`,

  'find-duplicate-subtrees': `
def findDuplicateSubtrees(root):
    from collections import defaultdict
    count = defaultdict(int)
    result = []
    def serialize(node):
        if not node:
            return '#'
        s = f"{node.val},{serialize(node.left)},{serialize(node.right)}"
        count[s] += 1
        if count[s] == 2:
            result.append(node)
        return s
    serialize(root)
    return result
`,

  'path-with-minimum-effort': `
def minimumEffortPath(heights):
    heights = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (heights.to_py() if hasattr(heights, 'to_py') else heights)]
    import heapq
    m, n = len(heights), len(heights[0])
    dist = [[float('inf')] * n for _ in range(m)]
    dist[0][0] = 0
    heap = [(0, 0, 0)]
    while heap:
        eff, r, c = heapq.heappop(heap)
        if r == m - 1 and c == n - 1:
            return eff
        if eff > dist[r][c]:
            continue
        for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n:
                ne = max(eff, abs(heights[r][c] - heights[nr][nc]))
                if ne < dist[nr][nc]:
                    dist[nr][nc] = ne
                    heapq.heappush(heap, (ne, nr, nc))
    return 0
`,

  'path-with-maximum-probability': `
def maxProbability(n, edges, succProb, start, end):
    edges = list(edges.to_py()) if hasattr(edges, 'to_py') else list(edges)
    edges = [list(e.to_py()) if hasattr(e, 'to_py') else list(e) for e in edges]
    succProb = list(succProb.to_py()) if hasattr(succProb, 'to_py') else list(succProb)
    prob = [0.0] * n
    prob[start] = 1.0
    for _ in range(n - 1):
        updated = False
        for j, (u, v) in enumerate(edges):
            p = succProb[j]
            if prob[u] * p > prob[v]:
                prob[v] = prob[u] * p
                updated = True
            if prob[v] * p > prob[u]:
                prob[u] = prob[v] * p
                updated = True
        if not updated:
            break
    return prob[end]
`,

  'video-stitching': `
def videoStitching(clips, time):
    clips = [list(c.to_py()) if hasattr(c, 'to_py') else list(c) for c in (clips.to_py() if hasattr(clips, 'to_py') else clips)]
    clips.sort()
    count, end, farthest, i = 0, 0, 0, 0
    while end < time:
        while i < len(clips) and clips[i][0] <= end:
            farthest = max(farthest, clips[i][1])
            i += 1
        if farthest == end:
            return -1
        end = farthest
        count += 1
    return count
`,

  'subarray-sums-divisible-by-k': `
def subarraysDivByK(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    from collections import defaultdict
    counts = defaultdict(int)
    counts[0] = 1
    prefix = 0
    result = 0
    for num in nums:
        prefix = (prefix + num) % k
        result += counts[prefix]
        counts[prefix] += 1
    return result
`,

  'sum-of-even-numbers-after-queries': `
def sumEvenAfterQueries(nums, queries):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    queries = [list(q.to_py()) if hasattr(q, 'to_py') else list(q) for q in (queries.to_py() if hasattr(queries, 'to_py') else queries)]
    even_sum = sum(x for x in nums if x % 2 == 0)
    result = []
    for val, idx in queries:
        if nums[idx] % 2 == 0:
            even_sum -= nums[idx]
        nums[idx] += val
        if nums[idx] % 2 == 0:
            even_sum += nums[idx]
        result.append(even_sum)
    return result
`,

  'average-waiting-time': `
def averageWaitingTime(customers):
    customers = [list(c.to_py()) if hasattr(c, 'to_py') else list(c) for c in (customers.to_py() if hasattr(customers, 'to_py') else customers)]
    time = 0
    total = 0
    for arrival, duration in customers:
        time = max(time, arrival) + duration
        total += time - arrival
    return total / len(customers)
`,

  'sort-an-array': `
def sortArray(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    def merge(l, r):
        res = []
        i = j = 0
        while i < len(l) and j < len(r):
            if l[i] <= r[j]:
                res.append(l[i]); i += 1
            else:
                res.append(r[j]); j += 1
        return res + l[i:] + r[j:]
    def sort(arr):
        if len(arr) <= 1:
            return arr
        mid = len(arr) // 2
        return merge(sort(arr[:mid]), sort(arr[mid:]))
    return sort(nums)
`,

  'sliding-puzzle': `
def slidingPuzzle(board):
    board = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (board.to_py() if hasattr(board, 'to_py') else board)]
    goal = '123450'
    start = ''.join(str(x) for row in board for x in row)
    neighbors = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]]
    if start == goal:
        return 0
    from collections import deque
    queue = deque([(start, 0)])
    visited = {start}
    while queue:
        state, steps = queue.popleft()
        pos = state.index('0')
        for nb in neighbors[pos]:
            arr = list(state)
            arr[pos], arr[nb] = arr[nb], arr[pos]
            nxt = ''.join(arr)
            if nxt == goal:
                return steps + 1
            if nxt not in visited:
                visited.add(nxt)
                queue.append((nxt, steps + 1))
    return -1
`,

  'jump-game-v': `
def maxJumps(arr, d):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    n = len(arr)
    dp = [1] * n
    order = sorted(range(n), key=lambda i: arr[i])
    for i in order:
        j = i + 1
        while j <= min(i + d, n - 1):
            if arr[j] >= arr[i]:
                break
            dp[i] = max(dp[i], 1 + dp[j])
            j += 1
        j = i - 1
        while j >= max(i - d, 0):
            if arr[j] >= arr[i]:
                break
            dp[i] = max(dp[i], 1 + dp[j])
            j -= 1
    return max(dp)
`,

  'word-subsets': `
def wordSubsets(words1, words2):
    words1 = list(words1.to_py()) if hasattr(words1, 'to_py') else list(words1)
    words2 = list(words2.to_py()) if hasattr(words2, 'to_py') else list(words2)
    from collections import Counter
    max_freq = Counter()
    for w in words2:
        freq = Counter(w)
        for c, cnt in freq.items():
            if cnt > max_freq[c]:
                max_freq[c] = cnt
    result = []
    for w in words1:
        freq = Counter(w)
        if all(freq[c] >= cnt for c, cnt in max_freq.items()):
            result.append(w)
    return result
`,

  'max-chunks-to-make-sorted-ii': `
def maxChunksToSorted(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    stack = []
    for num in arr:
        max_val = num
        while stack and stack[-1] > num:
            max_val = max(max_val, stack.pop())
        stack.append(max_val)
    return len(stack)
`,

  'count-ways-to-place-houses': `
def countWays(n):
    MOD = 10**9 + 7
    a, b = 1, 0
    for _ in range(n):
        a, b = (a + b) % MOD, a % MOD
    total = (a + b) % MOD
    return total * total % MOD
`,

  'stone-game-viii': `
def stoneGameVIII(stones):
    stones = list(stones.to_py()) if hasattr(stones, 'to_py') else list(stones)
    n = len(stones)
    prefix = stones[:]
    for i in range(1, n):
        prefix[i] += prefix[i - 1]
    dp = prefix[-1]
    for i in range(n - 2, 0, -1):
        dp = max(prefix[i] - dp, dp)
    return dp
`,

  'stone-game-ix': `
def stoneGameIX(stones):
    stones = list(stones.to_py()) if hasattr(stones, 'to_py') else list(stones)
    cnt = [0, 0, 0]
    for x in stones:
        cnt[x % 3] += 1
    if cnt[0] % 2 == 0:
        return cnt[1] > 0 and cnt[2] > 0
    return abs(cnt[1] - cnt[2]) > 2
`,

  'maximum-score-removing-stones': `
def maximumScore(a, b, c):
    total = a + b + c
    max_v = max(a, b, c)
    if max_v >= total - max_v:
        return total - max_v
    return total // 2
`,

  'number-of-atoms': `
def countOfAtoms(formula):
    from collections import defaultdict
    stack = [defaultdict(int)]
    i, n = 0, len(formula)
    while i < n:
        if formula[i] == '(':
            stack.append(defaultdict(int))
            i += 1
        elif formula[i] == ')':
            i += 1
            num = 0
            while i < n and formula[i].isdigit():
                num = num * 10 + int(formula[i])
                i += 1
            if num == 0:
                num = 1
            top = stack.pop()
            for elem, cnt in top.items():
                stack[-1][elem] += cnt * num
        elif formula[i].isupper():
            elem = formula[i]
            i += 1
            while i < n and formula[i].islower():
                elem += formula[i]
                i += 1
            num = 0
            while i < n and formula[i].isdigit():
                num = num * 10 + int(formula[i])
                i += 1
            if num == 0:
                num = 1
            stack[-1][elem] += num
    result = []
    for elem in sorted(stack[0].keys()):
        cnt = stack[0][elem]
        result.append(elem + (str(cnt) if cnt > 1 else ''))
    return ''.join(result)
`,

  'find-all-people-with-secret': `
def findAllPeople(n, meetings, firstPerson):
    meetings = [list(m.to_py()) if hasattr(m, 'to_py') else list(m) for m in (meetings.to_py() if hasattr(meetings, 'to_py') else meetings)]
    parent = list(range(n))
    rank = [0] * n
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return
        if rank[px] < rank[py]:
            parent[px] = py
        elif rank[px] > rank[py]:
            parent[py] = px
        else:
            parent[py] = px
            rank[px] += 1
    union(0, firstPerson)
    meetings.sort(key=lambda m: m[2])
    i = 0
    while i < len(meetings):
        j = i
        while j < len(meetings) and meetings[j][2] == meetings[i][2]:
            j += 1
        group = []
        for k in range(i, j):
            union(meetings[k][0], meetings[k][1])
            group.append(meetings[k][0])
            group.append(meetings[k][1])
        for p in group:
            if find(p) != find(0):
                parent[p] = p
                rank[p] = 0
        i = j
    return [p for p in range(n) if find(p) == find(0)]
`,

  'plates-between-candles': `
def platesBetweenCandles(s, queries):
    queries = [list(q.to_py()) if hasattr(q, 'to_py') else list(q) for q in (queries.to_py() if hasattr(queries, 'to_py') else queries)]
    n = len(s)
    prefix = [0] * (n + 1)
    left_candle = [-1] * n
    right_candle = [-1] * n
    for i in range(n):
        prefix[i + 1] = prefix[i] + (1 if s[i] == '*' else 0)
        if s[i] == '|':
            left_candle[i] = i
        elif i > 0:
            left_candle[i] = left_candle[i - 1]
    for i in range(n - 1, -1, -1):
        if s[i] == '|':
            right_candle[i] = i
        elif i < n - 1:
            right_candle[i] = right_candle[i + 1]
    result = []
    for q in queries:
        l, r = q[0], q[1]
        lc = right_candle[l]
        rc = left_candle[r]
        if lc == -1 or rc == -1 or lc >= rc:
            result.append(0)
        else:
            result.append(prefix[rc] - prefix[lc])
    return result
`,

  'minimum-cost-to-make-all-characters-equal': `
def minimumCost(s):
    n = len(s)
    cost = 0
    for i in range(1, n):
        if s[i] != s[i - 1]:
            cost += min(i, n - i)
    return cost
`,

  'maximum-consecutive-floors-without-special-floors': `
def maxConsecutive(bottom, top, special):
    special = sorted(x for x in (list(special.to_py()) if hasattr(special, 'to_py') else list(special)) if bottom <= x <= top)
    if not special:
        return top - bottom + 1
    max_gap = special[0] - bottom
    for i in range(1, len(special)):
        max_gap = max(max_gap, special[i] - special[i - 1] - 1)
    max_gap = max(max_gap, top - special[-1])
    return max_gap
`,

  'minimum-moves-to-reach-target-score': `
def minMoves(target, maxDoubles):
    moves = 0
    while target > 1 and maxDoubles > 0:
        if target % 2 == 1:
            target -= 1
            moves += 1
        else:
            target //= 2
            moves += 1
            maxDoubles -= 1
    return moves + (target - 1)
`,

  'maximum-segment-sum-after-removals': `
def maximumSegmentSum(nums, removeQueries):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    removeQueries = list(removeQueries.to_py()) if hasattr(removeQueries, 'to_py') else list(removeQueries)
    n = len(nums)
    parent = list(range(n + 1))
    seg_sum = [0] * (n + 1)
    present = [False] * n
    ans = [0] * n
    max_sum = 0

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(x, y):
        px, py = find(x), find(y)
        if px != py:
            parent[px] = py
            seg_sum[py] += seg_sum[px]

    for i in range(n - 1, -1, -1):
        ans[i] = max_sum
        idx = removeQueries[i]
        present[idx] = True
        seg_sum[idx] = nums[idx]
        if idx > 0 and present[idx - 1]:
            union(idx, idx - 1)
        if idx < n - 1 and present[idx + 1]:
            union(idx, idx + 1)
        cur_sum = seg_sum[find(idx)]
        if cur_sum > max_sum:
            max_sum = cur_sum
    return ans
`,

  'prime-palindrome': `
def primePalindrome(n):
    def is_prime(x):
        if x < 2:
            return False
        if x == 2:
            return True
        if x % 2 == 0:
            return False
        i = 3
        while i * i <= x:
            if x % i == 0:
                return False
            i += 2
        return True

    def is_palin(x):
        s = str(x)
        return s == s[::-1]

    small = [2, 3, 5, 7, 11]
    for p in small:
        if p >= n:
            return p

    for length in range(1, 10, 2):
        half = (length + 1) // 2
        start = 10 ** (half - 1)
        end = 10 ** half
        for first_half in range(start, end):
            s = str(first_half)
            pal = int(s + s[:length - half][::-1])
            if pal >= n and is_prime(pal):
                return pal
    return -1
`,

  'car-fleet-ii': `
def getCollisionTimes(cars):
    cars = [list(c.to_py()) if hasattr(c, 'to_py') else list(c) for c in (cars.to_py() if hasattr(cars, 'to_py') else cars)]
    n = len(cars)
    ans = [-1.0] * n
    stack = []
    for i in range(n - 1, -1, -1):
        pos, spd = cars[i][0], cars[i][1]
        while stack:
            j = stack[-1]
            jpos, jspd = cars[j][0], cars[j][1]
            if spd <= jspd:
                stack.pop()
                continue
            t = (jpos - pos) / (spd - jspd)
            if ans[j] < 0 or t <= ans[j]:
                ans[i] = t
                break
            stack.pop()
        stack.append(i)
    return ans
`,

  'all-possible-full-binary-trees': `
def allPossibleFBT(n):
    memo = {}
    def gen(k):
        if k in memo:
            return memo[k]
        if k == 1:
            return [TreeNode(0)]
        if k % 2 == 0:
            return []
        result = []
        for left in range(1, k - 1, 2):
            for lt in gen(left):
                for rt in gen(k - 1 - left):
                    node = TreeNode(0)
                    node.left = lt
                    node.right = rt
                    result.append(node)
        memo[k] = result
        return result
    return gen(n)
`,

  // ── Batch 14 ──────────────────────────────────────────────────────────────
  'knight-probability-in-chessboard': `def knightProbability(n, k, row, column):
    n = int(n); k = int(k); row = int(row); column = int(column)
    dp = [[0.0]*n for _ in range(n)]
    dp[row][column] = 1.0
    moves = [(-2,-1),(-2,1),(-1,-2),(-1,2),(1,-2),(1,2),(2,-1),(2,1)]
    for _ in range(k):
        new_dp = [[0.0]*n for _ in range(n)]
        for r in range(n):
            for c in range(n):
                if dp[r][c] > 0:
                    for dr, dc in moves:
                        nr, nc = r+dr, c+dc
                        if 0 <= nr < n and 0 <= nc < n:
                            new_dp[nr][nc] += dp[r][c] / 8
        dp = new_dp
    return sum(dp[r][c] for r in range(n) for c in range(n))
`,

  'minimum-distance-bst-nodes': `def minDiffInBST(root):
    prev = [None]
    min_diff = [float('inf')]
    def inorder(node):
        if not node: return
        inorder(node.left)
        if prev[0] is not None:
            min_diff[0] = min(min_diff[0], node.val - prev[0])
        prev[0] = node.val
        inorder(node.right)
    inorder(root)
    return min_diff[0]
`,

  'second-minimum-node-binary-tree': `def findSecondMinimumValue(root):
    min_val = root.val
    second = [float('inf')]
    def dfs(node):
        if not node: return
        if node.val > min_val and node.val < second[0]:
            second[0] = node.val
        elif node.val == min_val:
            dfs(node.left)
            dfs(node.right)
    dfs(root)
    return second[0] if second[0] != float('inf') else -1
`,

  'meeting-rooms-iii': `def mostBooked(n, meetings):
    import heapq
    n = int(n)
    raw = meetings.to_py() if hasattr(meetings, 'to_py') else list(meetings)
    meet = [[int(x) for x in (m.to_py() if hasattr(m, 'to_py') else list(m))] for m in raw]
    meet.sort()
    free = list(range(n))
    heapq.heapify(free)
    busy = []
    count = [0] * n
    for start, end in meet:
        while busy and busy[0][0] <= start:
            end_time, room = heapq.heappop(busy)
            heapq.heappush(free, room)
        if free:
            room = heapq.heappop(free)
            heapq.heappush(busy, (end, room))
        else:
            prev_end, room = heapq.heappop(busy)
            heapq.heappush(busy, (prev_end + (end - start), room))
        count[room] += 1
    return count.index(max(count))
`,

  'minimum-obstacle-removal-to-reach-corner': `def minimumObstacles(grid):
    from collections import deque
    raw = grid.to_py() if hasattr(grid, 'to_py') else list(grid)
    g = [[int(v) for v in (row.to_py() if hasattr(row, 'to_py') else list(row))] for row in raw]
    m, n = len(g), len(g[0])
    dist = [[float('inf')]*n for _ in range(m)]
    dist[0][0] = 0
    dq = deque([(0, 0, 0)])
    while dq:
        obs, r, c = dq.popleft()
        if obs > dist[r][c]: continue
        if r == m-1 and c == n-1:
            return obs
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n:
                new_obs = obs + g[nr][nc]
                if new_obs < dist[nr][nc]:
                    dist[nr][nc] = new_obs
                    if g[nr][nc] == 0:
                        dq.appendleft((new_obs, nr, nc))
                    else:
                        dq.append((new_obs, nr, nc))
    return dist[m-1][n-1]
`,

  'smallest-divisor-given-threshold': `
def smallestDivisor(nums, threshold):
    lo, hi = 1, max(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if sum((n + mid - 1) // mid for n in nums) <= threshold:
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'additive-number': `
def isAdditiveNumber(num):
    n = len(num)
    for i in range(1, n):
        for j in range(i + 1, n):
            a_str, b_str = num[:i], num[i:j]
            if (len(a_str) > 1 and a_str[0] == '0') or (len(b_str) > 1 and b_str[0] == '0'):
                continue
            a, b = int(a_str), int(b_str)
            pos = j
            while pos < n:
                c = a + b
                c_str = str(c)
                if not num[pos:].startswith(c_str):
                    break
                pos += len(c_str)
                a, b = b, c
            if pos == n:
                return True
    return False
`,

  'unique-paths-iii': `
def uniquePathsIII(grid):
    m, n = len(grid), len(grid[0])
    total = sum(grid[r][c] != -1 for r in range(m) for c in range(n))
    sr, sc = next((r, c) for r in range(m) for c in range(n) if grid[r][c] == 1)
    def dfs(r, c, remaining):
        if grid[r][c] == 2:
            return 1 if remaining == 1 else 0
        orig = grid[r][c]
        grid[r][c] = -1
        res = 0
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] != -1:
                res += dfs(nr, nc, remaining - 1)
        grid[r][c] = orig
        return res
    return dfs(sr, sc, total)
`,

  'max-sum-of-rectangle-no-larger-than-k': `def maxSumSubmatrix(matrix, k):
    import bisect
    raw = matrix.to_py() if hasattr(matrix, 'to_py') else list(matrix)
    mat = [[int(v) for v in (row.to_py() if hasattr(row, 'to_py') else list(row))] for row in raw]
    k = int(k)
    m, n = len(mat), len(mat[0])
    ans = float('-inf')
    for c1 in range(n):
        row_sum = [0] * m
        for c2 in range(c1, n):
            for r in range(m):
                row_sum[r] += mat[r][c2]
            sorted_prefix = [0]
            prefix = 0
            for s in row_sum:
                prefix += s
                idx = bisect.bisect_left(sorted_prefix, prefix - k)
                if idx < len(sorted_prefix):
                    ans = max(ans, prefix - sorted_prefix[idx])
                bisect.insort(sorted_prefix, prefix)
    return ans
`,

  'count-unique-characters-of-all-substrings': `def uniqueLetterString(s):
    from collections import defaultdict
    s = str(s)
    MOD = 10**9 + 7
    index = defaultdict(list)
    for i, c in enumerate(s):
        index[c].append(i)
    ans = 0
    for positions in index.values():
        pos = [-1] + positions + [len(s)]
        for i in range(1, len(pos)-1):
            ans += (pos[i] - pos[i-1]) * (pos[i+1] - pos[i])
    return ans % MOD
`,

  'zuma-game': `def findMinStep(board, hand):
    from collections import Counter
    board = str(board)
    hand = str(hand)
    hand_count = Counter(hand)

    def clean(s):
        changed = True
        while changed:
            changed = False
            i = 0
            ns = ''
            while i < len(s):
                j = i
                while j < len(s) and s[j] == s[i]:
                    j += 1
                if j - i < 3:
                    ns += s[i:j]
                else:
                    changed = True
                i = j
            s = ns
        return s

    memo = {}
    def dp(b, hc_tuple):
        b = clean(b)
        if not b:
            return 0
        key = (b, hc_tuple)
        if key in memo:
            return memo[key]
        hc = dict(hc_tuple)
        best = float('inf')
        i = 0
        while i < len(b):
            j = i
            while j < len(b) and b[j] == b[i]:
                j += 1
            color = b[i]
            cnt = j - i
            need = 3 - cnt
            if hc.get(color, 0) >= need:
                hc[color] -= need
                rest = dp(b[:i] + b[j:], tuple(sorted(hc.items())))
                hc[color] += need
                if rest != -1:
                    best = min(best, need + rest)
            i = j
        res = best if best != float('inf') else -1
        memo[key] = res
        return res

    return dp(board, tuple(sorted(hand_count.items())))
`,

  'find-longest-valid-obstacle-course': `def longestObstacleCourseAtEachPosition(obstacles):
    import bisect
    raw = obstacles.to_py() if hasattr(obstacles, 'to_py') else list(obstacles)
    obs = [int(v) for v in raw]
    tails = []
    result = []
    for x in obs:
        pos = bisect.bisect_right(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x
        result.append(pos + 1)
    return result
`,

  'best-sightseeing-pair': `def maxScoreSightseeingPair(values):
    raw = values.to_py() if hasattr(values, 'to_py') else list(values)
    vals = [int(v) for v in raw]
    max_left = vals[0] + 0
    ans = 0
    for j in range(1, len(vals)):
        ans = max(ans, max_left + vals[j] - j)
        max_left = max(max_left, vals[j] + j)
    return ans
`,

  'find-longest-substring-vowels-even': `def findTheLongestSubstring(s):
    s = str(s)
    vowels = 'aeiou'
    first = {0: -1}
    state = 0
    ans = 0
    for i, c in enumerate(s):
        bit = vowels.find(c)
        if bit != -1:
            state ^= (1 << bit)
        if state in first:
            ans = max(ans, i - first[state])
        else:
            first[state] = i
    return ans
`,

  'reverse-substrings-between-parentheses': `def reverseParentheses(s):
    s = str(s)
    stack = ['']
    for c in s:
        if c == '(':
            stack.append('')
        elif c == ')':
            top = stack.pop()
            stack[-1] += top[::-1]
        else:
            stack[-1] += c
    return stack[0]
`,

  'design-stack-with-increment': `def customStackOps(maxSize, ops):
    max_size = int(maxSize)
    raw_ops = ops.to_py() if hasattr(ops, 'to_py') else list(ops)
    stack = []
    inc = []
    results = []
    for op in raw_ops:
        if op[0] == 'push':
            if len(stack) < max_size:
                stack.append(int(op[1]))
                inc.append(0)
        elif op[0] == 'pop':
            if not stack:
                results.append(-1)
            else:
                extra = inc.pop()
                val = stack.pop() + extra
                if inc:
                    inc[-1] += extra
                results.append(val)
        elif op[0] == 'increment':
            k = min(int(op[1]), len(stack))
            if k > 0:
                inc[k - 1] += int(op[2])
    return results
`,

  'minimum-number-of-frogs-croaking': `def minNumberOfFrogs(croakOfFrogs):
    s = str(croakOfFrogs)
    order = 'croak'
    cnt = {c: 0 for c in order}
    frogs = 0
    ans = 0
    for c in s:
        if c not in cnt:
            return -1
        cnt[c] += 1
        idx = order.index(c)
        if idx > 0:
            prev = order[idx - 1]
            if cnt[prev] < cnt[c]:
                return -1
        if c == 'c':
            frogs += 1
            ans = max(ans, frogs)
        if c == 'k':
            frogs -= 1
    return -1 if frogs != 0 else ans
`,

  'shortest-path-visiting-all-nodes': `def shortestPathLength(graph):
    from collections import deque
    raw = graph.to_py() if hasattr(graph, 'to_py') else [list(x) for x in graph]
    g = [list(row) for row in raw]
    n = len(g)
    full = (1 << n) - 1
    visited = [[False] * (1 << n) for _ in range(n)]
    queue = deque()
    for i in range(n):
        mask = 1 << i
        visited[i][mask] = True
        if mask == full:
            return 0
        queue.append((i, mask, 0))
    while queue:
        node, mask, dist = queue.popleft()
        for nxt in g[node]:
            new_mask = mask | (1 << nxt)
            if new_mask == full:
                return dist + 1
            if not visited[nxt][new_mask]:
                visited[nxt][new_mask] = True
                queue.append((nxt, new_mask, dist + 1))
    return -1
`,

  'minimum-number-of-work-sessions': `def minSessions(tasks, sessionTime):
    from functools import lru_cache
    raw = tasks.to_py() if hasattr(tasks, 'to_py') else list(tasks)
    ts = [int(v) for v in raw]
    st = int(sessionTime)
    n = len(ts)
    full_mask = (1 << n) - 1
    @lru_cache(maxsize=None)
    def dp(done, remaining):
        if done == full_mask:
            return 0
        best = float('inf')
        for i in range(n):
            if done & (1 << i):
                continue
            t = ts[i]
            if t <= remaining:
                res = dp(done | (1 << i), remaining - t)
            else:
                res = 1 + dp(done | (1 << i), st - t)
            best = min(best, res)
        return best
    return 1 + dp(0, st)
`,

  'minimize-product-sum': `def minProductSum(nums1, nums2):
    raw1 = nums1.to_py() if hasattr(nums1, 'to_py') else list(nums1)
    raw2 = nums2.to_py() if hasattr(nums2, 'to_py') else list(nums2)
    a = sorted([int(v) for v in raw1])
    b = sorted([int(v) for v in raw2], reverse=True)
    return sum(a[i] * b[i] for i in range(len(a)))
`,

  'count-range-sum': `def countRangeSum(nums, lower, upper):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    lo, hi = int(lower), int(upper)
    prefix = [0]
    for n in arr:
        prefix.append(prefix[-1] + n)
    count = [0]
    def merge_sort(l, r):
        if r - l <= 1:
            return
        mid = (l + r) // 2
        merge_sort(l, mid)
        merge_sort(mid, r)
        j = k = mid
        for i in range(l, mid):
            while j < r and prefix[j] - prefix[i] < lo:
                j += 1
            while k < r and prefix[k] - prefix[i] <= hi:
                k += 1
            count[0] += k - j
        prefix[l:r] = sorted(prefix[l:r])
    merge_sort(0, len(prefix))
    return count[0]
`,

  'advantage-shuffle': `def advantageCount(nums1, nums2):
    raw1 = nums1.to_py() if hasattr(nums1, 'to_py') else list(nums1)
    raw2 = nums2.to_py() if hasattr(nums2, 'to_py') else list(nums2)
    a = sorted([int(v) for v in raw1])
    b = [(int(v), i) for i, v in enumerate(raw2)]
    b.sort(key=lambda x: -x[0])
    result = [0] * len(a)
    lo, hi = 0, len(a) - 1
    for target, idx in b:
        if a[hi] > target:
            result[idx] = a[hi]
            hi -= 1
        else:
            result[idx] = a[lo]
            lo += 1
    return result
`,

  'longest-repeating-character-replacement': `def characterReplacement(s, k):
    s = str(s)
    k = int(k)
    freq = [0] * 26
    max_freq = 0
    ans = 0
    left = 0
    for right in range(len(s)):
        c = ord(s[right]) - ord('A')
        freq[c] += 1
        max_freq = max(max_freq, freq[c])
        while (right - left + 1 - max_freq) > k:
            freq[ord(s[left]) - ord('A')] -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans
`,

  'subarrays-with-k-different-integers': `def subarraysWithKDistinct(nums, k):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    k = int(k)
    from collections import defaultdict
    def at_most(limit):
        cnt = defaultdict(int)
        res = left = 0
        for right, v in enumerate(arr):
            cnt[v] += 1
            while len(cnt) > limit:
                cnt[arr[left]] -= 1
                if cnt[arr[left]] == 0:
                    del cnt[arr[left]]
                left += 1
            res += right - left + 1
        return res
    return at_most(k) - at_most(k - 1)
`,

  'binary-subarrays-with-sum': `def numSubarraysWithSum(nums, goal):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    g = int(goal)
    from collections import defaultdict
    cnt = defaultdict(int)
    cnt[0] = 1
    prefix = ans = 0
    for n in arr:
        prefix += n
        ans += cnt[prefix - g]
        cnt[prefix] += 1
    return ans
`,

  'reduce-array-size-to-the-half': `def minSetSize(arr):
    raw = arr.to_py() if hasattr(arr, 'to_py') else list(arr)
    a = [int(v) for v in raw]
    from collections import Counter
    freq = sorted(Counter(a).values(), reverse=True)
    target = (len(a) + 1) // 2
    removed = set_size = 0
    for f in freq:
        removed += f
        set_size += 1
        if removed >= target:
            return set_size
    return set_size
`,

  'minimum-number-of-removals-to-make-mountain-array': `def minimumMountainRemovals(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    n = len(arr)
    lis = [1] * n
    lds = [1] * n
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                lis[i] = max(lis[i], lis[j] + 1)
    for i in range(n - 2, -1, -1):
        for j in range(n - 1, i, -1):
            if arr[j] < arr[i]:
                lds[i] = max(lds[i], lds[j] + 1)
    best = 0
    for i in range(1, n - 1):
        if lis[i] > 1 and lds[i] > 1:
            best = max(best, lis[i] + lds[i] - 1)
    return n - best
`,

  'number-of-ways-to-divide-a-long-corridor': `def numberOfWays(corridor):
    s = str(corridor)
    MOD = 10**9 + 7
    seats = [i for i, c in enumerate(s) if c == 'S']
    if not seats or len(seats) % 2 != 0:
        return 0
    ways = 1
    for i in range(2, len(seats), 2):
        ways = (ways * (seats[i] - seats[i - 1])) % MOD
    return ways
`,

  'delete-operation-for-two-strings': `def minDistance(word1, word2):
    w1 = str(word1)
    w2 = str(word2)
    m, n = len(w1), len(w2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if w1[i-1] == w2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return m + n - 2 * dp[m][n]
`,

  'product-of-array-except-self': `def productExceptSelf(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    n = len(arr)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= arr[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= arr[i]
    return result
`,

  'minimum-moves-to-equal-array-elements': `def minMoves(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(v) for v in raw]
    mn = min(arr)
    return sum(v - mn for v in arr)
`,

  'all-paths-from-source-lead-to-destination': `def leadsToDestination(n, edges, source, destination):
    n = int(n)
    raw = edges.to_py() if hasattr(edges, 'to_py') else [list(e) for e in edges]
    edge_list = [[int(e[0]), int(e[1])] for e in raw]
    src = int(source)
    dst = int(destination)
    graph = [[] for _ in range(n)]
    for a, b in edge_list:
        graph[a].append(b)
    if graph[dst]:
        return False
    color = [0] * n
    def dfs(node):
        if color[node] == 1:
            return False
        if color[node] == 2:
            return True
        if not graph[node]:
            return node == dst
        color[node] = 1
        for nxt in graph[node]:
            if not dfs(nxt):
                return False
        color[node] = 2
        return True
    return dfs(src)
`,

  'race-car': `
def racecar(target):
    dp = [float('inf')] * (target + 1)
    dp[0] = 0
    for v in range(1, target + 1):
        k = 1
        while (1 << k) - 1 < 2 * v:
            reach = (1 << k) - 1
            if reach == v:
                dp[v] = min(dp[v], k)
            elif reach > v:
                dp[v] = min(dp[v], k + 1 + dp[reach - v])
            else:
                for j in range(k):
                    back = (1 << j) - 1
                    dp[v] = min(dp[v], k + 1 + j + 1 + dp[v - reach + back])
            k += 1
    return dp[target]
`,

  'minimum-cost-to-make-valid-parentheses': `
def minAddToMakeValid(s):
    open_count = 0
    close_count = 0
    for c in s:
        if c == '(':
            open_count += 1
        elif open_count > 0:
            open_count -= 1
        else:
            close_count += 1
    return open_count + close_count
`,

  'minimum-score-of-path': `
def minScore(n, roads):
    from collections import defaultdict, deque
    adj = defaultdict(list)
    for a, b, d in roads:
        adj[a].append((b, d))
        adj[b].append((a, d))
    visited = set()
    queue = deque([1])
    visited.add(1)
    min_dist = float('inf')
    while queue:
        node = queue.popleft()
        for neighbor, dist in adj[node]:
            min_dist = min(min_dist, dist)
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return min_dist
`,

  'count-operations-to-obtain-zero-ii': `
def minOperations(nums, x):
    total = sum(nums)
    target = total - x
    if target < 0:
        return -1
    if target == 0:
        return len(nums)
    max_len = -1
    cur_sum = 0
    l = 0
    for r in range(len(nums)):
        cur_sum += nums[r]
        while cur_sum > target and l <= r:
            cur_sum -= nums[l]
            l += 1
        if cur_sum == target:
            max_len = max(max_len, r - l + 1)
    return len(nums) - max_len if max_len != -1 else -1
`,

  'minimum-deletions-to-balance-parentheses': `
def minimumDeletions(s):
    b_count = 0
    deletions = 0
    for c in s:
        if c == 'b':
            b_count += 1
        elif b_count > 0:
            b_count -= 1
            deletions += 1
    return deletions
`,

  'minimum-path-cost-in-a-grid': `def minPathCost(grid, moveCost):
    g = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    mc = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (moveCost.to_py() if hasattr(moveCost, 'to_py') else moveCost)]
    m, n = len(g), len(g[0])
    dp = [v for v in g[0]]
    for r in range(m - 1):
        ndp = [float('inf')] * n
        for c in range(n):
            val = g[r][c]
            for c2 in range(n):
                cost = dp[c] + mc[val][c2] + g[r + 1][c2]
                if cost < ndp[c2]:
                    ndp[c2] = cost
        dp = ndp
    return min(dp)
`,

  'count-ways-group-overlapping-ranges': `def countWays(ranges):
    MOD = 10**9 + 7
    r = sorted([list(x.to_py() if hasattr(x, 'to_py') else x) for x in (ranges.to_py() if hasattr(ranges, 'to_py') else ranges)], key=lambda x: x[0])
    components = 0
    max_end = -1
    for s, e in r:
        if s > max_end:
            components += 1
            max_end = e
        elif e > max_end:
            max_end = e
    return pow(2, components, MOD)
`,

  'take-gifts-from-the-richest-pile': `def pickGifts(gifts, k):
    import math
    g = list(gifts.to_py() if hasattr(gifts, 'to_py') else gifts)
    k = int(k)
    for _ in range(k):
        max_idx = g.index(max(g))
        g[max_idx] = math.isqrt(g[max_idx])
    return sum(g)
`,

  'find-all-good-indices': `def goodIndices(nums, k):
    a = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    K = int(k)
    n = len(a)
    dec = [1] * n
    inc = [1] * n
    for i in range(1, n):
        if a[i] <= a[i-1]:
            dec[i] = dec[i-1] + 1
    for i in range(n-2, -1, -1):
        if a[i] <= a[i+1]:
            inc[i] = inc[i+1] + 1
    res = []
    for i in range(K, n - K):
        if dec[i-1] >= K and inc[i+1] >= K:
            res.append(i)
    return res
`,

  'partition-array-into-three-parts-with-equal-sum': `def canThreePartsEqualSum(arr):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    total = sum(arr)
    if total % 3 != 0:
        return False
    target = total // 3
    parts = 0
    cur = 0
    for v in arr:
        cur += v
        if cur == target:
            parts += 1
            cur = 0
    return parts >= 3
`,

  'second-largest-digit-in-string': `def secondHighest(s):
    digits = set()
    for c in str(s):
        if c.isdigit():
            digits.add(int(c))
    sorted_d = sorted(digits, reverse=True)
    return sorted_d[1] if len(sorted_d) >= 2 else -1
`,

  'number-of-operations-to-make-network-connected': `def makeConnected(n, connections):
    n = int(n)
    edges = [list(e.to_py() if hasattr(e, 'to_py') else e) for e in (connections.to_py() if hasattr(connections, 'to_py') else connections)]
    if len(edges) < n - 1:
        return -1
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    components = n
    for a, b in edges:
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
            components -= 1
    return components - 1
`,

  'maximize-number-of-tasks-you-can-assign': `def maxTaskAssign(tasks, workers, pills, strength):
    from collections import deque
    t = sorted(list(tasks.to_py() if hasattr(tasks, 'to_py') else tasks))
    w = sorted(list(workers.to_py() if hasattr(workers, 'to_py') else workers))
    P = int(pills)
    S = int(strength)
    m = len(w)
    def can_do(k):
        sub_t = t[:k]
        sub_w = w[m - k:]
        p = P
        dq = deque()
        wi = k - 1
        for i in range(k - 1, -1, -1):
            while wi >= 0 and sub_w[wi] + S >= sub_t[i]:
                dq.appendleft(sub_w[wi])
                wi -= 1
            if not dq:
                return False
            if dq[-1] >= sub_t[i]:
                dq.pop()
            else:
                if p == 0:
                    return False
                dq.popleft()
                p -= 1
        return True
    lo, hi = 0, min(len(t), m)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_do(mid):
            lo = mid
        else:
            hi = mid - 1
    return lo
`,

  'minimum-consecutive-cards-to-pick-up': `def minimumCardPickup(cards):
    cards = list(cards.to_py() if hasattr(cards, 'to_py') else cards)
    last = {}
    ans = float('inf')
    for i, v in enumerate(cards):
        if v in last:
            ans = min(ans, i - last[v] + 1)
        last[v] = i
    return ans if ans != float('inf') else -1
`,

  'lexicographically-smallest-palindrome': `def makeSmallestPalindrome(s):
    a = list(str(s))
    l, r = 0, len(a) - 1
    while l < r:
        if a[l] < a[r]:
            a[r] = a[l]
        else:
            a[l] = a[r]
        l += 1
        r -= 1
    return ''.join(a)
`,

  'minimum-operations-to-make-binary-array-elements-equal-to-one-ii': `def minOperations(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    flips = 0
    for v in nums:
        if (v + flips) % 2 == 0:
            flips += 1
    return flips
`,

  'closest-prime-numbers-in-range': `def closestPrimes(left, right):
    lo = int(left)
    hi = int(right)
    not_prime = bytearray(hi + 1)
    not_prime[0] = not_prime[1] = 1
    i = 2
    while i * i <= hi:
        if not not_prime[i]:
            j = i * i
            while j <= hi:
                not_prime[j] = 1
                j += i
        i += 1
    primes = [i for i in range(lo, hi + 1) if not not_prime[i]]
    if len(primes) < 2:
        return [-1, -1]
    best = [-1, -1]
    min_gap = float('inf')
    for i in range(1, len(primes)):
        gap = primes[i] - primes[i-1]
        if gap < min_gap:
            min_gap = gap
            best = [primes[i-1], primes[i]]
    return best
`,

  'sum-of-subarray-minimums': `def sumSubarrayMins(arr):
    MOD = 10**9 + 7
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    n = len(arr)
    stack = []
    left = [-1] * n
    right = [n] * n
    for i in range(n):
        while stack and arr[stack[-1]] >= arr[i]:
            right[stack.pop()] = i
        left[i] = stack[-1] if stack else -1
        stack.append(i)
    ans = 0
    for i in range(n):
        ans = (ans + (i - left[i]) * (right[i] - i) * arr[i]) % MOD
    return ans
`,

  'maximum-xor-for-each-query': `def getMaximumXor(nums, maximumBit):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    bits = int(maximumBit)
    n = len(nums)
    max_k = (1 << bits) - 1
    ans = [0] * n
    xor_sum = 0
    for v in nums:
        xor_sum ^= v
    for i in range(n):
        ans[i] = xor_sum ^ max_k
        xor_sum ^= nums[n - 1 - i]
    return ans
`,

  'count-ways-to-split-array': `def waysToSplitArray(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    total = sum(nums)
    prefix = 0
    ans = 0
    for i in range(len(nums) - 1):
        prefix += nums[i]
        if prefix >= total - prefix:
            ans += 1
    return ans
`,

  'maximum-subarray-sum-with-one-deletion': `def maximumSum(arr):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    n = len(arr)
    dp0 = [0] * n
    dp1 = [float('-inf')] * n
    dp0[0] = arr[0]
    for i in range(1, n):
        dp0[i] = max(arr[i], dp0[i-1] + arr[i])
        dp1[i] = max(dp0[i-1], dp1[i-1] + arr[i])
    return max(max(dp0), max(dp1))
`,

  'number-of-sub-arrays-size-k-average-threshold': `def numOfSubarrays(arr, k, threshold):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    K = int(k)
    T = int(threshold)
    window_sum = sum(arr[:K])
    count = 1 if window_sum >= K * T else 0
    for i in range(K, len(arr)):
        window_sum += arr[i] - arr[i - K]
        if window_sum >= K * T:
            count += 1
    return count
`,

  'grumpy-bookstore-owner': `def maxSatisfied(customers, grumpy, minutes):
    customers = list(customers.to_py() if hasattr(customers, 'to_py') else customers)
    grumpy = list(grumpy.to_py() if hasattr(grumpy, 'to_py') else grumpy)
    minutes = int(minutes)
    n = len(customers)
    base = sum(customers[i] for i in range(n) if not grumpy[i])
    extra = sum(customers[i] for i in range(minutes) if grumpy[i])
    max_extra = extra
    for i in range(minutes, n):
        if grumpy[i]:
            extra += customers[i]
        if grumpy[i - minutes]:
            extra -= customers[i - minutes]
        max_extra = max(max_extra, extra)
    return base + max_extra
`,

  'most-stones-removed-with-same-row-or-column': `def removeStones(stones):
    stones = [list(s.to_py() if hasattr(s, 'to_py') else s) for s in (stones.to_py() if hasattr(stones, 'to_py') else stones)]
    parent = {}
    def find(x):
        if x not in parent:
            parent[x] = x
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    def union(a, b):
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
    for r, c in stones:
        union(r, ~c)
    roots = set(find(r) for r, _ in stones)
    return len(stones) - len(roots)
`,

  'longest-subsequence-with-limited-sum': `def answerQueries(nums, queries):
    import bisect
    nums = sorted(list(nums.to_py() if hasattr(nums, 'to_py') else nums))
    queries = list(queries.to_py() if hasattr(queries, 'to_py') else queries)
    prefix = [0]
    for v in nums:
        prefix.append(prefix[-1] + v)
    result = []
    for q in queries:
        idx = bisect.bisect_right(prefix, q) - 1
        result.append(idx)
    return result
`,

  'minimum-number-of-arrows-to-burst-balloons': `def findMinArrowShots(points):
    pts = [list(p.to_py() if hasattr(p, 'to_py') else p) for p in (points.to_py() if hasattr(points, 'to_py') else points)]
    pts.sort(key=lambda x: x[1])
    arrows = 1
    end = pts[0][1]
    for i in range(1, len(pts)):
        if pts[i][0] > end:
            arrows += 1
            end = pts[i][1]
    return arrows
`,

  'find-largest-value-each-tree-row': `def largestValues(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        level_max = float('-inf')
        for _ in range(len(queue)):
            node = queue.pop(0)
            if node.val > level_max:
                level_max = node.val
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level_max)
    return result
`,

  'find-bottom-left-tree-value': `def findBottomLeftValue(root):
    ans = root.val
    queue = [root]
    while queue:
        ans = queue[0].val
        for _ in range(len(queue)):
            node = queue.pop(0)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return ans
`,

  'most-stones-removed-same-row-or-column': `def removeStones(stones):
    stones = [list(s.to_py() if hasattr(s, 'to_py') else s) for s in (stones.to_py() if hasattr(stones, 'to_py') else stones)]
    parent = {}
    def find(x):
        parent.setdefault(x, x)
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    def union(a, b):
        a, b = find(a), find(b)
        if a != b:
            parent[a] = b
    for r, c in stones:
        union(r, c + 10001)
    stone_roots = set(find(r) for r, _ in stones)
    return len(stones) - len(stone_roots)
`,

  'count-unreachable-pairs-of-nodes': `def countPairs(n, edges):
    n = int(n)
    adj = [[] for _ in range(n)]
    for a, b in (edges.to_py() if hasattr(edges, 'to_py') else edges):
        adj[int(a)].append(int(b))
        adj[int(b)].append(int(a))
    visited = [False] * n
    ans = 0
    remaining = n
    for i in range(n):
        if not visited[i]:
            size = 0
            stack = [i]
            visited[i] = True
            while stack:
                node = stack.pop()
                size += 1
                for nxt in adj[node]:
                    if not visited[nxt]:
                        visited[nxt] = True
                        stack.append(nxt)
            remaining -= size
            ans += size * remaining
    return ans
`,

  'my-calendar-i': `def myCalendarI(bookings):
    raw = bookings.to_py() if hasattr(bookings, 'to_py') else bookings
    bs = [list(b.to_py() if hasattr(b, 'to_py') else b) for b in raw]
    accepted = []
    result = []
    for s, e in bs:
        overlap = any(s < ae and a_s < e for a_s, ae in accepted)
        if not overlap:
            accepted.append([s, e])
            result.append(True)
        else:
            result.append(False)
    return result
`,

  'time-needed-to-buy-tickets': `def timeRequiredToBuy(tickets, k):
    tickets = list(tickets.to_py() if hasattr(tickets, 'to_py') else tickets)
    k = int(k)
    total = 0
    for i, v in enumerate(tickets):
        if i <= k:
            total += min(v, tickets[k])
        else:
            total += min(v, tickets[k] - 1)
    return total
`,

  'kth-smallest-element-in-bst': `def kthSmallestRunner(arr, k):
    raw = arr.to_py() if hasattr(arr, 'to_py') else list(arr)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
    k = int(k)
    class TreeNode:
        def __init__(self, val=0, left=None, right=None):
            self.val = val; self.left = left; self.right = right
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    result = [0]
    count = [0]
    def inorder(node):
        if not node:
            return
        inorder(node.left)
        count[0] += 1
        if count[0] == k:
            result[0] = node.val
        inorder(node.right)
    inorder(root)
    return result[0]
`,

  'find-minimum-in-rotated-sorted-array': `def findMin(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        else:
            hi = mid
    return nums[lo]
`,

  'search-in-rotated-sorted-array': `def search(nums, target):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    target = int(target)
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

  'minimum-number-of-days-to-make-m-bouquets': `def minDays(bloomDay, m, k):
    bloomDay = list(bloomDay.to_py() if hasattr(bloomDay, 'to_py') else bloomDay)
    m, k = int(m), int(k)
    if len(bloomDay) < m * k:
        return -1
    def can_make(day):
        bouquets = consecutive = 0
        for d in bloomDay:
            if d <= day:
                consecutive += 1
                if consecutive == k:
                    bouquets += 1
                    consecutive = 0
            else:
                consecutive = 0
        return bouquets >= m
    lo, hi = 1, max(bloomDay)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_make(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
`,

  'maximum-number-of-events-that-can-be-attended': `def maxEvents(events):
    import heapq
    evs = sorted([list(e.to_py() if hasattr(e, 'to_py') else e) for e in (events.to_py() if hasattr(events, 'to_py') else events)], key=lambda x: x[0])
    max_day = max(e[1] for e in evs)
    heap = []
    idx = 0
    count = 0
    for day in range(1, max_day + 1):
        while idx < len(evs) and evs[idx][0] <= day:
            heapq.heappush(heap, evs[idx][1])
            idx += 1
        while heap and heap[0] < day:
            heapq.heappop(heap)
        if heap:
            heapq.heappop(heap)
            count += 1
    return count
`,

  'median-of-two-sorted-arrays': `def findMedianSortedArrays(nums1, nums2):
    nums1 = list(nums1.to_py() if hasattr(nums1, 'to_py') else nums1)
    nums2 = list(nums2.to_py() if hasattr(nums2, 'to_py') else nums2)
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    half = (m + n + 1) // 2
    lo, hi = 0, m
    while lo <= hi:
        i = (lo + hi) // 2
        j = half - i
        l1 = nums1[i-1] if i > 0 else float('-inf')
        r1 = nums1[i] if i < m else float('inf')
        l2 = nums2[j-1] if j > 0 else float('-inf')
        r2 = nums2[j] if j < n else float('inf')
        if l1 <= r2 and l2 <= r1:
            if (m + n) % 2 == 1:
                return float(max(l1, l2))
            return (max(l1, l2) + min(r1, r2)) / 2
        elif l1 > r2:
            hi = i - 1
        else:
            lo = i + 1
    return 0.0
`,

  'number-of-subsequences-that-satisfy-the-given-sum-condition': `def numSubseq(nums, target):
    nums = sorted(list(nums.to_py() if hasattr(nums, 'to_py') else nums))
    target = int(target)
    MOD = 10**9 + 7
    n = len(nums)
    pow2 = [1] * n
    for i in range(1, n):
        pow2[i] = pow2[i-1] * 2 % MOD
    lo, hi = 0, n - 1
    ans = 0
    while lo <= hi:
        if nums[lo] + nums[hi] <= target:
            ans = (ans + pow2[hi - lo]) % MOD
            lo += 1
        else:
            hi -= 1
    return ans
`,

  'find-players-with-zero-or-one-losses': `def findWinners(matches):
    matches = [list(m.to_py() if hasattr(m, 'to_py') else m) for m in (matches.to_py() if hasattr(matches, 'to_py') else matches)]
    losses = {}
    for w, l in matches:
        if w not in losses:
            losses[w] = 0
        losses[l] = losses.get(l, 0) + 1
    zero = sorted(p for p, c in losses.items() if c == 0)
    one = sorted(p for p, c in losses.items() if c == 1)
    return [zero, one]
`,

  'count-unreachable-pairs-after-removing-vertices': `def countPairs(n, edges):
    edges = [list(e.to_py() if hasattr(e, 'to_py') else e) for e in (edges.to_py() if hasattr(edges, 'to_py') else edges)]
    parent = list(range(n))
    size = [1] * n
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    for a, b in edges:
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
            size[pb] += size[pa]
    ans = 0
    remaining = n
    for i in range(n):
        if find(i) == i:
            sz = size[i]
            ans += sz * (remaining - sz)
            remaining -= sz
    return ans
`,

  'maximum-value-at-given-index-in-bounded-array': `def maxValue(n, index, maxSum):
    def sum_at_peak(v, length):
        if length == 0:
            return 0
        if length >= v:
            return v * (v + 1) // 2 + (length - v)
        return v * length - length * (length - 1) // 2
    lo, hi = 1, maxSum
    while lo < hi:
        mid = (lo + hi + 1) // 2
        total = sum_at_peak(mid, index + 1) + sum_at_peak(mid, n - index) - mid
        if total <= maxSum:
            lo = mid
        else:
            hi = mid - 1
    return lo
`,

  'walls-and-gates': `
def wallsAndGates(rooms):
    rooms = [list(row) for row in rooms]
    INF = 2147483647
    m, n = len(rooms), len(rooms[0])
    from collections import deque
    q = deque()
    for i in range(m):
        for j in range(n):
            if rooms[i][j] == 0:
                q.append((i, j))
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while q:
        r, c = q.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n and rooms[nr][nc] == INF:
                rooms[nr][nc] = rooms[r][c] + 1
                q.append((nr, nc))
    return rooms
`,

  'making-a-large-island': `
def largestIsland(grid):
    grid = [list(row) for row in grid]
    n = len(grid)
    island_size = {}
    island_id = 2
    def dfs(r, c, iid):
        if r < 0 or r >= n or c < 0 or c >= n or grid[r][c] != 1:
            return 0
        grid[r][c] = iid
        return 1 + dfs(r+1,c,iid) + dfs(r-1,c,iid) + dfs(r,c+1,iid) + dfs(r,c-1,iid)
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1:
                island_size[island_id] = dfs(i, j, island_id)
                island_id += 1
    res = max(island_size.values(), default=0)
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 0:
                seen = set()
                size = 1
                for dr, dc in dirs:
                    nr, nc = i+dr, j+dc
                    if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] > 1:
                        iid = grid[nr][nc]
                        if iid not in seen:
                            seen.add(iid)
                            size += island_size.get(iid, 0)
                res = max(res, size)
    return res
`,

  'increasing-order-search-tree': `
def increasingBSTRunner(arr):
    converted = []
    for x in arr:
        if x is None or (hasattr(x, 'typeof') and x.typeof == 'object' and x == None):
            converted.append(None)
        else:
            try:
                converted.append(int(x))
            except Exception:
                converted.append(None)
    root = __from_array__(converted)
    vals = []
    def inorder(n):
        if not n: return
        inorder(n.left)
        vals.append(n.val)
        inorder(n.right)
    inorder(root)
    if not vals:
        return []
    dummy = TreeNode(0)
    cur = dummy
    for v in vals:
        cur.right = TreeNode(v)
        cur = cur.right
    return __to_array__(dummy.right)
`,

  'next-greater-node-in-linked-list': `
def nextLargerNodesRunner(arr):
    arr = list(arr)
    n = len(arr)
    result = [0] * n
    stack = []
    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            result[stack.pop()] = arr[i]
        stack.append(i)
    return result
`,

  'longest-cycle-in-graph': `
def longestCycle(edges):
    edges = list(edges)
    n = len(edges)
    visit_time = [-1] * n
    ans = -1
    global_time = 0
    for i in range(n):
        if visit_time[i] != -1:
            continue
        start_time = global_time
        cur = i
        while cur != -1 and visit_time[cur] == -1:
            visit_time[cur] = global_time
            global_time += 1
            cur = edges[cur]
        if cur != -1 and visit_time[cur] >= start_time:
            ans = max(ans, global_time - visit_time[cur])
    return ans
`,

  'maximum-subarray-min-product': `
def maxSumMinProduct(nums):
    MOD = 10**9 + 7
    nums = list(nums)
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + nums[i]
    left = [-1] * n
    right = [n] * n
    stack = []
    for i in range(n):
        while stack and nums[stack[-1]] >= nums[i]:
            stack.pop()
        left[i] = stack[-1] if stack else -1
        stack.append(i)
    stack = []
    for i in range(n-1, -1, -1):
        while stack and nums[stack[-1]] > nums[i]:
            stack.pop()
        right[i] = stack[-1] if stack else n
        stack.append(i)
    ans = 0
    for i in range(n):
        l, r = left[i] + 1, right[i]
        val = nums[i] * (prefix[r] - prefix[l])
        if val > ans:
            ans = val
    return ans % MOD
`,

  'steps-to-make-array-nondecreasing': `
def totalSteps(nums):
    nums = list(nums)
    n = len(nums)
    dp = [0] * n
    stack = []
    ans = 0
    for i in range(n):
        max_steps = 0
        while stack and nums[stack[-1]] <= nums[i]:
            max_steps = max(max_steps, dp[stack.pop()])
        if stack:
            dp[i] = max(max_steps + 1, 1)
            ans = max(ans, dp[i])
        stack.append(i)
    return ans
`,

  'count-substrings-that-differ-by-one-character': `
def countSubstrings(s, t):
    m, n = len(s), len(t)
    count = 0
    def along(si, ti):
        nonlocal count
        prev, cur = 0, 0
        while si < m and ti < n:
            if s[si] != t[ti]:
                prev = cur + 1
                cur = 0
            else:
                cur += 1
            count += prev
            si += 1
            ti += 1
    for i in range(m):
        along(i, 0)
    for j in range(1, n):
        along(0, j)
    return count
`,

  'minimum-operations-to-move-balls': `
def minOperations(boxes):
    n = len(boxes)
    result = [0] * n
    balls = ops = 0
    for i in range(n):
        result[i] += ops
        balls += int(boxes[i])
        ops += balls
    balls = ops = 0
    for i in range(n-1, -1, -1):
        result[i] += ops
        balls += int(boxes[i])
        ops += balls
    return result
`,

  'maximum-area-of-piece-of-cake': `
def maxArea(h, w, horizontalCuts, verticalCuts):
    MOD = 10**9 + 7
    hc = sorted(horizontalCuts)
    vc = sorted(verticalCuts)
    max_h = max(hc[0], h - hc[-1])
    for i in range(1, len(hc)):
        max_h = max(max_h, hc[i] - hc[i-1])
    max_w = max(vc[0], w - vc[-1])
    for i in range(1, len(vc)):
        max_w = max(max_w, vc[i] - vc[i-1])
    return (max_h * max_w) % MOD
`,

  'minimum-area-rectangle': `def minAreaRect(points):
    pts = [list(p.to_py() if hasattr(p, 'to_py') else p) for p in (points.to_py() if hasattr(points, 'to_py') else points)]
    point_set = set((p[0], p[1]) for p in pts)
    min_area = float('inf')
    n = len(pts)
    for i in range(n):
        for j in range(i + 1, n):
            x1, y1 = pts[i][0], pts[i][1]
            x2, y2 = pts[j][0], pts[j][1]
            if x1 != x2 and y1 != y2:
                if (x1, y2) in point_set and (x2, y1) in point_set:
                    area = abs(x2 - x1) * abs(y2 - y1)
                    if area < min_area:
                        min_area = area
    return 0 if min_area == float('inf') else min_area
`,

  'minimum-operations-to-halve-array-sum': `def halveArray(nums):
    import heapq
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    total = sum(nums)
    need = total / 2
    reduced = 0
    ops = 0
    heap = [-x for x in nums]
    heapq.heapify(heap)
    while reduced < need:
        val = -heapq.heappop(heap)
        half = val / 2
        reduced += half
        heapq.heappush(heap, -half)
        ops += 1
    return ops
`,

  'maximum-binary-string-after-change': `def maximumBinaryString(binary):
    first_zero = binary.find('0')
    if first_zero == -1:
        return binary
    zeros = binary.count('0')
    n = len(binary)
    return '1' * (first_zero + zeros - 1) + '0' + '1' * (n - first_zero - zeros)
`,

  'circular-array-loop': `def circularArrayLoop(nums):
    n = len(nums)
    def nxt(i):
        return (i + nums[i]) % n
    for i in range(n):
        s, f = i, i
        while nums[s] * nums[nxt(s)] > 0 and nums[f] * nums[nxt(nxt(f))] > 0:
            s = nxt(s)
            f = nxt(nxt(f))
            if s == f:
                return nxt(s) != s
    return False
`,

  'longest-arithmetic-subsequence-of-given-difference': `def longestSubsequence(arr, difference):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    d = int(difference)
    dp = {}
    ans = 1
    for x in arr:
        prev = dp.get(x - d, 0)
        dp[x] = prev + 1
        if dp[x] > ans:
            ans = dp[x]
    return ans
`,

  'number-of-subarrays-with-bounded-maximum': `def numSubarrayBoundedMax(nums, left, right):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    L = int(left)
    R = int(right)
    def at_most(b):
        count = cur = 0
        for v in nums:
            cur = cur + 1 if v <= b else 0
            count += cur
        return count
    return at_most(R) - at_most(L - 1)
`,

  'split-array-into-consecutive-subsequences': `def isPossible(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    freq = {}
    end = {}
    for v in nums:
        freq[v] = freq.get(v, 0) + 1
    for v in nums:
        if not freq.get(v):
            continue
        freq[v] -= 1
        if end.get(v):
            end[v] -= 1
            end[v + 1] = end.get(v + 1, 0) + 1
        elif freq.get(v + 1) and freq.get(v + 2):
            freq[v + 1] -= 1
            freq[v + 2] -= 1
            end[v + 3] = end.get(v + 3, 0) + 1
        else:
            return False
    return True
`,

  'restore-the-array-from-adjacent-pairs': `def restoreArray(adjacentPairs):
    pairs = [list(p.to_py() if hasattr(p, 'to_py') else p) for p in (adjacentPairs.to_py() if hasattr(adjacentPairs, 'to_py') else adjacentPairs)]
    adj = {}
    for a, b in pairs:
        adj.setdefault(a, []).append(b)
        adj.setdefault(b, []).append(a)
    start = next(k for k, v in adj.items() if len(v) == 1)
    n = len(pairs) + 1
    res = [start]
    for i in range(1, n):
        nbrs = adj[res[i - 1]]
        res.append(nbrs[0] if nbrs[0] != res[i - 2] else nbrs[1])
    return res
`,

  'monotone-increasing-digits': `def monotoneIncreasingDigits(n):
    d = list(str(n))
    mark = len(d)
    for i in range(len(d) - 1, 0, -1):
        if d[i - 1] > d[i]:
            mark = i
            d[i - 1] = str(int(d[i - 1]) - 1)
    for i in range(mark, len(d)):
        d[i] = '9'
    return int(''.join(d))
`,

  'construct-k-palindrome-strings': `def canConstruct(k, s):
    from collections import Counter
    k = int(k)
    freq = Counter(s)
    odds = sum(1 for v in freq.values() if v % 2 == 1)
    return odds <= k <= len(s)
`,


  'push-dominoes': `def pushDominoes(dominoes):
    n = len(dominoes)
    forces = [0] * n
    f = 0
    for i in range(n):
        if dominoes[i] == 'R': f = n
        elif dominoes[i] == 'L': f = 0
        else: f = max(f - 1, 0)
        forces[i] += f
    f = 0
    for i in range(n - 1, -1, -1):
        if dominoes[i] == 'L': f = n
        elif dominoes[i] == 'R': f = 0
        else: f = max(f - 1, 0)
        forces[i] -= f
    return ''.join('R' if x > 0 else 'L' if x < 0 else '.' for x in forces)
`,

  'largest-merge-of-two-strings': `def largestMerge(word1, word2):
    result = []
    i, j = 0, 0
    while i < len(word1) and j < len(word2):
        if word1[i:] >= word2[j:]:
            result.append(word1[i]); i += 1
        else:
            result.append(word2[j]); j += 1
    result.append(word1[i:])
    result.append(word2[j:])
    return ''.join(result)
`,

  'remove-covered-intervals': `def removeCoveredIntervals(intervals):
    raw = intervals.to_py() if hasattr(intervals, 'to_py') else list(intervals)
    arr = [list(x.to_py() if hasattr(x, 'to_py') else x) for x in raw]
    arr.sort(key=lambda x: (x[0], -x[1]))
    count, max_right = 0, 0
    for a, b in arr:
        if b > max_right:
            count += 1
            max_right = b
    return count
`,

  'minimize-array-value': `def minimizeArrayValue(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(x) for x in raw]
    prefix, ans = 0, 0
    for i, x in enumerate(arr):
        prefix += x
        ans = max(ans, (prefix + i) // (i + 1))
    return ans
`,

  'validate-ip-address': `def validIPAddress(queryIP):
    if '.' in queryIP:
        parts = queryIP.split('.')
        if len(parts) != 4:
            return 'Neither'
        for p in parts:
            if not p or len(p) > 3:
                return 'Neither'
            if len(p) > 1 and p[0] == '0':
                return 'Neither'
            if not p.isdigit():
                return 'Neither'
            if int(p) > 255:
                return 'Neither'
        return 'IPv4'
    elif ':' in queryIP:
        parts = queryIP.split(':')
        if len(parts) != 8:
            return 'Neither'
        valid_hex = set('0123456789abcdefABCDEF')
        for p in parts:
            if not 1 <= len(p) <= 4:
                return 'Neither'
            if not all(c in valid_hex for c in p):
                return 'Neither'
        return 'IPv6'
    return 'Neither'
`,

  'maximum-sum-hourglass': `def maxSum(grid):
    raw = grid.to_py() if hasattr(grid, 'to_py') else list(grid)
    g = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in raw]
    m, n = len(g), len(g[0])
    best = 0
    for r in range(1, m - 1):
        for c in range(1, n - 1):
            s = (g[r-1][c-1] + g[r-1][c] + g[r-1][c+1]
                 + g[r][c]
                 + g[r+1][c-1] + g[r+1][c] + g[r+1][c+1])
            best = max(best, s)
    return best
`,

  'reverse-odd-levels-binary-tree': `def reverseOddLevelsRunner(arr):
    root = __from_array__(arr)
    def dfs(left, right, level):
        if left is None or right is None:
            return
        if level % 2 == 1:
            left.val, right.val = right.val, left.val
        dfs(left.left, right.right, level + 1)
        dfs(left.right, right.left, level + 1)
    if root:
        dfs(root.left, root.right, 1)
    return __to_array__(root)
`,

  'number-of-flowers-in-full-bloom': `def fullBloomFlowers(flowers, people):
    import bisect
    raw_fl = flowers.to_py() if hasattr(flowers, 'to_py') else list(flowers)
    fl = [list(x.to_py() if hasattr(x, 'to_py') else x) for x in raw_fl]
    raw_pp = people.to_py() if hasattr(people, 'to_py') else list(people)
    pp = [int(x) for x in raw_pp]
    starts = sorted(int(f[0]) for f in fl)
    ends = sorted(int(f[1]) for f in fl)
    return [bisect.bisect_right(starts, t) - bisect.bisect_left(ends, t) for t in pp]
`,

  'most-beautiful-item-for-each-query': `def maximumBeauty(items, queries):
    import bisect
    raw_it = items.to_py() if hasattr(items, 'to_py') else list(items)
    its = [list(x.to_py() if hasattr(x, 'to_py') else x) for x in raw_it]
    its.sort(key=lambda x: x[0])
    for i in range(1, len(its)):
        its[i][1] = max(its[i][1], its[i-1][1])
    prices = [x[0] for x in its]
    raw_q = queries.to_py() if hasattr(queries, 'to_py') else list(queries)
    qq = [int(x) for x in raw_q]
    result = []
    for q in qq:
        idx = bisect.bisect_right(prices, q) - 1
        result.append(its[idx][1] if idx >= 0 else 0)
    return result
`,

  'remove-duplicate-letters': `def removeDuplicateLetters(s):
    last = {c: i for i, c in enumerate(s)}
    stack = []
    in_stack = set()
    for i, c in enumerate(s):
        if c in in_stack:
            continue
        while stack and stack[-1] > c and last[stack[-1]] > i:
            in_stack.discard(stack.pop())
        stack.append(c)
        in_stack.add(c)
    return ''.join(stack)
`,

  'best-time-to-buy-and-sell-stock-iv': `def maxProfit(k, prices):
    k = int(k)
    prices = list(prices.to_py() if hasattr(prices, 'to_py') else prices)
    n = len(prices)
    if n == 0 or k == 0:
        return 0
    if k >= n // 2:
        return sum(max(0, prices[i] - prices[i-1]) for i in range(1, n))
    buy = [-float('inf')] * (k + 1)
    sell = [0] * (k + 1)
    for p in prices:
        for j in range(k, 0, -1):
            buy[j] = max(buy[j], sell[j-1] - p)
            sell[j] = max(sell[j], buy[j] + p)
    return sell[k]
`,

  'shortest-path-with-alternating-colors': `def shortestAlternatingColors(n, redEdges, blueEdges):
    n = int(n)
    redEdges = [list(e.to_py() if hasattr(e, 'to_py') else e) for e in (redEdges.to_py() if hasattr(redEdges, 'to_py') else redEdges)]
    blueEdges = [list(e.to_py() if hasattr(e, 'to_py') else e) for e in (blueEdges.to_py() if hasattr(blueEdges, 'to_py') else blueEdges)]
    from collections import deque
    adj = [[[], []] for _ in range(n)]
    for u, v in redEdges:
        adj[u][0].append(v)
    for u, v in blueEdges:
        adj[u][1].append(v)
    dist = [-1] * n
    visited = [[False, False] for _ in range(n)]
    visited[0][0] = visited[0][1] = True
    dist[0] = 0
    q = deque([(0, 0), (0, 1)])
    step = 1
    while q:
        for _ in range(len(q)):
            node, color = q.popleft()
            nc = 1 - color
            for nxt in adj[node][nc]:
                if not visited[nxt][nc]:
                    visited[nxt][nc] = True
                    if dist[nxt] == -1:
                        dist[nxt] = step
                    q.append((nxt, nc))
        step += 1
    return dist
`,

  'minimum-swaps-to-make-sequences-increasing': `def minSwap(nums1, nums2):
    nums1 = list(nums1.to_py() if hasattr(nums1, 'to_py') else nums1)
    nums2 = list(nums2.to_py() if hasattr(nums2, 'to_py') else nums2)
    keep, swap = 0, 1
    for i in range(1, len(nums1)):
        nk = ns = float('inf')
        if nums1[i] > nums1[i-1] and nums2[i] > nums2[i-1]:
            nk = min(nk, keep)
            ns = min(ns, swap + 1)
        if nums1[i] > nums2[i-1] and nums2[i] > nums1[i-1]:
            nk = min(nk, swap)
            ns = min(ns, keep + 1)
        keep, swap = nk, ns
    return min(keep, swap)
`,

  'array-of-doubled-pairs': `def canReorderDoubled(changed):
    changed = list(changed.to_py() if hasattr(changed, 'to_py') else changed)
    from collections import Counter
    cnt = Counter(changed)
    for x in sorted(cnt, key=abs):
        if cnt[x] == 0:
            continue
        doubled = 2 * x
        if doubled == x:
            if cnt[x] % 2 != 0:
                return False
            cnt[x] = 0
            continue
        if cnt[doubled] < cnt[x]:
            return False
        cnt[doubled] -= cnt[x]
        cnt[x] = 0
    return True
`,

  'count-vowel-permutation': `def countVowelPermutation(n):
    MOD = 10**9 + 7
    n = int(n)
    a = e = i = o = u = 1
    for _ in range(n - 1):
        a, e, i, o, u = (e + i + u) % MOD, (a + i) % MOD, (e + o) % MOD, i % MOD, (i + o) % MOD
    return (a + e + i + o + u) % MOD
`,

  'longest-ideal-subsequence': `def longestIdealString(s, k):
    k = int(k)
    dp = [0] * 26
    for c in s:
        idx = ord(c) - ord('a')
        best = max(dp[max(0, idx - k):min(26, idx + k + 1)])
        dp[idx] = best + 1
    return max(dp)
`,

  'minimum-string-length-after-removing-substrings': `def minLength(s):
    stack = []
    for c in s:
        if stack and ((stack[-1] == 'A' and c == 'B') or (stack[-1] == 'C' and c == 'D')):
            stack.pop()
        else:
            stack.append(c)
    return len(stack)

`,

  'total-hamming-distance': `def totalHammingDistance(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    total = 0
    n = len(nums)
    for i in range(32):
        ones = sum((x >> i) & 1 for x in nums)
        total += ones * (n - ones)
    return total
`,

  'maximum-number-of-occurrences-of-a-substring': `def maxFreq(s, maxLetters, minSize, maxSize):
    s = str(s)
    maxLetters, minSize = int(maxLetters), int(minSize)
    from collections import defaultdict
    count = defaultdict(int)
    res = 0
    for i in range(len(s) - minSize + 1):
        sub = s[i:i+minSize]
        if len(set(sub)) <= maxLetters:
            count[sub] += 1
            res = max(res, count[sub])
    return res
`,

  'longest-happy-prefix': `def longestPrefix(s):
    n = len(s)
    lps = [0] * n
    length = 0
    i = 1
    while i < n:
        if s[i] == s[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return s[:lps[n-1]]
`,

  'reducing-dishes': `def maxSatisfaction(satisfaction):
    satisfaction = sorted(satisfaction.to_py() if hasattr(satisfaction, 'to_py') else satisfaction, reverse=True)
    total = curr = 0
    for s in satisfaction:
        curr += s
        if curr <= 0:
            break
        total += curr
    return total
`,

  'find-closest-node-to-given-two-nodes': `def closestMeetingNode(edges, node1, node2):
    edges = list(edges.to_py() if hasattr(edges, 'to_py') else edges)
    node1, node2 = int(node1), int(node2)
    n = len(edges)
    def get_dist(start):
        d = [-1] * n
        cur, step = start, 0
        while cur != -1 and d[cur] == -1:
            d[cur] = step
            step += 1
            cur = edges[cur]
        return d
    d1, d2 = get_dist(node1), get_dist(node2)
    res, best = -1, float('inf')
    for i in range(n):
        if d1[i] != -1 and d2[i] != -1:
            mx = max(d1[i], d2[i])
            if mx < best:
                best = mx
                res = i
    return res
`,

  'minimum-number-of-swaps-to-make-string-balanced': `def minimumSwaps(s):
    import math
    open_count = 0
    unmatched = 0
    for c in s:
        if c == '[':
            open_count += 1
        elif open_count > 0:
            open_count -= 1
        else:
            unmatched += 1
    return math.ceil(unmatched / 2)
`,

  'number-of-substrings-containing-all-three-characters': `def numberOfSubstrings(s):
    last = [-1, -1, -1]
    ans = 0
    for i, c in enumerate(s):
        last[ord(c) - ord('a')] = i
        ans += min(last) + 1
    return ans
`,

  'minimum-deletions-to-make-string-balanced': `def minimumDeletions(s):
    b_count = dp = 0
    for c in s:
        if c == 'b':
            b_count += 1
        else:
            dp = min(dp + 1, b_count)
    return dp
`,

  'minimum-difference-between-largest-and-smallest-value-in-three-moves': `def minDifference(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    n = len(nums)
    if n <= 4:
        return 0
    nums.sort()
    return min(nums[n - 1 - (3 - i)] - nums[i] for i in range(4))
`,

  'shortest-subarray-to-be-removed-to-make-array-sorted': `def findLengthOfShortestSubarray(arr):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    n = len(arr)
    right = n - 1
    while right > 0 and arr[right] >= arr[right - 1]:
        right -= 1
    if right == 0:
        return 0
    res = right
    left = 0
    while left < right and (left == 0 or arr[left] >= arr[left - 1]):
        while right < n and arr[right] < arr[left]:
            right += 1
        res = min(res, right - left - 1)
        left += 1
    return res
`,

  'maximum-score-from-removing-substrings': `def maximumGain(s, x, y):
    x, y = int(x), int(y)
    def remove(t, first, second, val):
        stack = []
        score = 0
        for c in t:
            if stack and stack[-1] == first and c == second:
                stack.pop()
                score += val
            else:
                stack.append(c)
        return ''.join(stack), score
    if x >= y:
        s, s1 = remove(s, 'a', 'b', x)
        s, s2 = remove(s, 'b', 'a', y)
    else:
        s, s1 = remove(s, 'b', 'a', y)
        s, s2 = remove(s, 'a', 'b', x)
    return s1 + s2
`,

  'minimum-health-to-beat-the-game': `def minimumHealth(damage, armor):
    damage = list(damage.to_py() if hasattr(damage, 'to_py') else damage)
    armor = int(armor)
    total = sum(damage)
    max_dmg = max(damage)
    savings = min(max_dmg - 1, armor)
    return total - savings + 1
`,

  'check-if-string-contains-all-binary-codes-of-size-k': `def hasAllCodes(s, k):
    k = int(k)
    required = 1 << k
    seen = set()
    for i in range(k, len(s) + 1):
        seen.add(s[i - k:i])
        if len(seen) == required:
            return True
    return False
`,

  'longest-nice-substring': `def longestNiceSubstring(s):
    def solve(t):
        if len(t) < 2:
            return ''
        for i, c in enumerate(t):
            if c.upper() not in t or c.lower() not in t:
                l = solve(t[:i])
                r = solve(t[i + 1:])
                return l if len(l) >= len(r) else r
        return t
    return solve(s)
`,

  'minimum-add-to-make-parentheses-valid': `def minAddToMakeValid(s):
    open_count = 0
    close_count = 0
    for c in s:
        if c == '(':
            open_count += 1
        elif open_count > 0:
            open_count -= 1
        else:
            close_count += 1
    return open_count + close_count
`,

  'predict-winner': `def predictTheWinner(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(x) for x in raw]
    n = len(arr)
    dp = [arr[:] for _ in range(n)]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = max(arr[i] - dp[i+1][j], arr[j] - dp[i][j-1])
    return dp[0][n-1] >= 0
`,

  'can-i-win': `def canIWin(maxChoosableInteger, desiredTotal):
    target = int(desiredTotal)
    max_i = int(maxChoosableInteger)
    if target <= 0:
        return True
    total_sum = max_i * (max_i + 1) // 2
    if total_sum < target:
        return False
    memo = {}
    def can_win(mask, total):
        if mask in memo:
            return memo[mask]
        for i in range(1, max_i + 1):
            if (mask >> i) & 1:
                continue
            if total + i >= target or not can_win(mask | (1 << i), total + i):
                memo[mask] = True
                return True
        memo[mask] = False
        return False
    return can_win(0, 0)
`,

  'optimal-division': `def optimalDivision(nums):
    raw = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    arr = [int(x) for x in raw]
    if len(arr) == 1:
        return str(arr[0])
    if len(arr) == 2:
        return f"{arr[0]}/{arr[1]}"
    inner = '/'.join(str(x) for x in arr[1:])
    return f"{arr[0]}/({inner})"
`,

  'minimum-insertions-to-balance-parentheses': `def minInsertions(s):
    open_count = 0
    res = 0
    i = 0
    while i < len(s):
        if s[i] == '(':
            open_count += 1
        else:
            if i + 1 < len(s) and s[i+1] == ')':
                i += 1
            else:
                res += 1
            if open_count > 0:
                open_count -= 1
            else:
                res += 1
        i += 1
    return res + 2 * open_count
`,

  'longest-subarray-of-1s-after-deleting-one-element': `def longestSubarray(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    left = 0
    zeros = 0
    ans = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > 1:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        ans = max(ans, right - left)
    return ans
`,

  'count-number-of-nice-subarrays': `def numberOfSubarrays(nums, k):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    k = int(k)
    def at_most(limit):
        left = count = result = 0
        for right in range(len(nums)):
            if nums[right] % 2 == 1:
                count += 1
            while count > limit:
                if nums[left] % 2 == 1:
                    count -= 1
                left += 1
            result += right - left + 1
        return result
    return at_most(k) - at_most(k - 1)
`,

  'number-of-ways-to-arrive-at-destination': `def countPaths(n, roads):
    import heapq
    n = int(n)
    MOD = 10**9 + 7
    edges = list(roads.to_py() if hasattr(roads, 'to_py') else roads)
    adj = [[] for _ in range(n)]
    for e in edges:
        u, v, t = int(e[0]), int(e[1]), int(e[2])
        adj[u].append((v, t))
        adj[v].append((u, t))
    dist = [float('inf')] * n
    ways = [0] * n
    dist[0] = 0
    ways[0] = 1
    pq = [(0, 0)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, t in adj[u]:
            nd = d + t
            if nd < dist[v]:
                dist[v] = nd
                ways[v] = ways[u]
                heapq.heappush(pq, (nd, v))
            elif nd == dist[v]:
                ways[v] = (ways[v] + ways[u]) % MOD
    return ways[n - 1]
`,

  'reorder-routes-to-make-all-paths-lead-to-city-zero': `def minReorder(n, connections):
    from collections import deque
    n = int(n)
    conns = list(connections.to_py() if hasattr(connections, 'to_py') else connections)
    adj = [[] for _ in range(n)]
    for e in conns:
        a, b = int(e[0]), int(e[1])
        adj[a].append((b, 1))
        adj[b].append((a, 0))
    visited = [False] * n
    q = deque([0])
    visited[0] = True
    count = 0
    while q:
        u = q.popleft()
        for v, cost in adj[u]:
            if not visited[v]:
                visited[v] = True
                count += cost
                q.append(v)
    return count
`,

  'maximum-length-of-pair-chain': `def findLongestChain(pairs):
    raw = pairs.to_py() if hasattr(pairs, 'to_py') else list(pairs)
    p = sorted([[int(x[0]), int(x[1])] for x in raw], key=lambda x: x[1])
    count = 1
    right = p[0][1]
    for i in range(1, len(p)):
        if p[i][0] > right:
            count += 1
            right = p[i][1]
    return count
`,

  'count-servers-that-communicate': `def countServers(grid):
    raw = grid.to_py() if hasattr(grid, 'to_py') else list(grid)
    g = [[int(x) for x in row] for row in raw]
    m, n = len(g), len(g[0])
    row_count = [sum(g[r]) for r in range(m)]
    col_count = [sum(g[r][c] for r in range(m)) for c in range(n)]
    ans = 0
    for r in range(m):
        for c in range(n):
            if g[r][c] == 1 and (row_count[r] > 1 or col_count[c] > 1):
                ans += 1
    return ans
`,

  'maximum-length-of-a-concatenated-string-with-unique-characters': `def maxLength(arr):
    arr = list(arr.to_py() if hasattr(arr, 'to_py') else arr)
    result = [0]
    def dfs(idx, mask, length):
        result[0] = max(result[0], length)
        for i in range(idx, len(arr)):
            m = 0
            valid = True
            for c in arr[i]:
                bit = 1 << (ord(c) - ord('a'))
                if m & bit:
                    valid = False
                    break
                m |= bit
            if valid and (mask & m) == 0:
                dfs(i + 1, mask | m, length + len(arr[i]))
    dfs(0, 0, 0)
    return result[0]
`,

  'nim-game': `def canWinNim(n):
    return int(n) % 4 != 0
`,

  'palindrome-permutation': `def canPermutePalindrome(s):
    from collections import Counter
    freq = Counter(s)
    odds = sum(1 for v in freq.values() if v % 2 == 1)
    return odds <= 1
`,

  'remove-element': `def removeElement(nums, val):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    val = int(val)
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k
`,

  'water-bottles': `def numWaterBottles(numBottles, numExchange):
    bottles = int(numBottles)
    exchange = int(numExchange)
    total = bottles
    while bottles >= exchange:
        new_bottles = bottles // exchange
        bottles = new_bottles + bottles % exchange
        total += new_bottles
    return total
`,

  'distribute-candies': `def distributeCandies(candyType):
    candy = list(candyType.to_py() if hasattr(candyType, 'to_py') else candyType)
    types = len(set(candy))
    half = len(candy) // 2
    return min(types, half)
`,

  'count-prime-set-bits': `def countPrimeSetBits(left, right):
    primes = {2, 3, 5, 7, 11, 13, 17, 19}
    count = 0
    for n in range(int(left), int(right) + 1):
        bits = bin(n).count('1')
        if bits in primes:
            count += 1
    return count
`,

  'verifying-alien-dictionary': `def isAlienSorted(words, order):
    words = list(words.to_py() if hasattr(words, 'to_py') else words)
    rank = {c: i for i, c in enumerate(order)}
    for i in range(len(words) - 1):
        a, b = words[i], words[i + 1]
        found = False
        for j in range(len(a)):
            if j >= len(b):
                return False
            if rank[a[j]] < rank[b[j]]:
                found = True
                break
            if rank[a[j]] > rank[b[j]]:
                return False
        if not found and len(a) > len(b):
            return False
    return True
`,

  'rectangle-area': `def computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2):
    ax1, ay1, ax2, ay2 = int(ax1), int(ay1), int(ax2), int(ay2)
    bx1, by1, bx2, by2 = int(bx1), int(by1), int(bx2), int(by2)
    A = (ax2 - ax1) * (ay2 - ay1)
    B = (bx2 - bx1) * (by2 - by1)
    overlap_w = max(0, min(ax2, bx2) - max(ax1, bx1))
    overlap_h = max(0, min(ay2, by2) - max(ay1, by1))
    return A + B - overlap_w * overlap_h
`,

  'encode-decode-strings': `def encodeDecodeStrings(strs):
    strs = list(strs.to_py() if hasattr(strs, 'to_py') else strs)
    encoded = ''
    for s in strs:
        encoded += str(len(s)) + '#' + s
    decoded = []
    i = 0
    while i < len(encoded):
        j = encoded.index('#', i)
        length = int(encoded[i:j])
        decoded.append(encoded[j + 1:j + 1 + length])
        i = j + 1 + length
    return decoded
`,

  'shortest-distance-to-character': `def shortestToChar(s, c):
    n = len(s)
    ans = [float('inf')] * n
    prev = float('-inf')
    for i in range(n):
        if s[i] == c:
            prev = i
        ans[i] = i - prev
    prev = float('inf')
    for i in range(n - 1, -1, -1):
        if s[i] == c:
            prev = i
        ans[i] = min(ans[i], prev - i)
    return ans
`,

  'utf-8-validation': `def validUtf8(data):
    data = list(data.to_py() if hasattr(data, 'to_py') else data)
    i = 0
    while i < len(data):
        b = data[i] & 0xFF
        if (b & 0x80) == 0:
            count = 0
        elif (b & 0xE0) == 0xC0:
            count = 1
        elif (b & 0xF0) == 0xE0:
            count = 2
        elif (b & 0xF8) == 0xF0:
            count = 3
        else:
            return False
        i += 1
        for _ in range(count):
            if i >= len(data) or (data[i] & 0xC0) != 0x80:
                return False
            i += 1
    return True
`,

  'range-addition': `def getModifiedArray(n, updates):
    n = int(n)
    updates = [list(u.to_py() if hasattr(u, 'to_py') else u) for u in (updates.to_py() if hasattr(updates, 'to_py') else updates)]
    diff = [0] * (n + 1)
    for start, end, inc in updates:
        diff[start] += inc
        diff[end + 1] -= inc
    res = []
    s = 0
    for i in range(n):
        s += diff[i]
        res.append(s)
    return res
`,

  'count-the-number-of-fair-pairs': `def countFairPairs(nums, lower, upper):
    nums = sorted(nums.to_py() if hasattr(nums, 'to_py') else list(nums))
    lower, upper = int(lower), int(upper)
    def count_at_most(limit):
        l, r, cnt = 0, len(nums) - 1, 0
        while l < r:
            if nums[l] + nums[r] <= limit:
                cnt += r - l
                l += 1
            else:
                r -= 1
        return cnt
    return count_at_most(upper) - count_at_most(lower - 1)
`,

  'find-if-array-can-be-sorted': `def canSortArray(nums):
    nums = list(nums.to_py() if hasattr(nums, 'to_py') else nums)
    prev_max = float('-inf')
    i = 0
    while i < len(nums):
        bits = bin(nums[i]).count('1')
        g_min = g_max = nums[i]
        j = i
        while j < len(nums) and bin(nums[j]).count('1') == bits:
            g_min = min(g_min, nums[j])
            g_max = max(g_max, nums[j])
            j += 1
        if g_min < prev_max:
            return False
        prev_max = g_max
        i = j
    return True
`,

  'construct-string-with-repeat-limit': `def repeatLimitedString(s, repeatLimit):
    limit = int(repeatLimit)
    from collections import Counter
    freq = [0] * 26
    for c in s:
        freq[ord(c) - ord('a')] += 1
    res = []
    i = 25
    while i >= 0:
        if freq[i] == 0:
            i -= 1
            continue
        take = min(freq[i], limit)
        res.append(chr(ord('a') + i) * take)
        freq[i] -= take
        if freq[i] > 0:
            j = i - 1
            while j >= 0 and freq[j] == 0:
                j -= 1
            if j < 0:
                break
            res.append(chr(ord('a') + j))
            freq[j] -= 1
    return ''.join(res)
`,

  'count-ways-to-select-buildings': `def countWays(s):
    n = len(s)
    ones = [0] * (n + 1)
    for i in range(n):
        ones[i + 1] = ones[i] + (1 if s[i] == '1' else 0)
    total_ones = ones[n]
    ans = 0
    for j in range(1, n - 1):
        ones_before = ones[j]
        zeros_before = j - ones_before
        ones_after = total_ones - ones[j + 1]
        zeros_after = (n - j - 1) - ones_after
        if s[j] == '1':
            ans += zeros_before * zeros_after
        else:
            ans += ones_before * ones_after
    return ans
`,

  'power-of-heroes': `def sumOfPower(nums):
    MOD = 10 ** 9 + 7
    arr = sorted(int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums))
    ans = 0
    s = 0
    for x in arr:
        ans = (ans + x * x * (s + x)) % MOD
        s = (2 * s + x) % MOD
    return ans
`,
};
