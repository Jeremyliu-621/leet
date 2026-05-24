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
    if not height:
        return 0
    left, right = 0, len(height) - 1
    max_left = max_right = water = 0
    while left < right:
        if height[left] <= height[right]:
            if height[left] >= max_left:
                max_left = height[left]
            else:
                water += max_left - height[left]
            left += 1
        else:
            if height[right] >= max_right:
                max_right = height[right]
            else:
                water += max_right - height[right]
            right -= 1
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

  'find-all-anagrams-in-string': `def findAllAnagrams(s, p):
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
};
