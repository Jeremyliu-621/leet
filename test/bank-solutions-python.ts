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

  'binary-tree-zigzag-traversal': `def zigzagLevelOrder(root):
    if not root:
        return []
    result = []
    queue = [root]
    left_to_right = True
    while queue:
        level = []
        for _ in range(len(queue)):
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

  'sum-root-to-leaf-numbers': `def sumNumbers(root):
    def dfs(node, cur):
        if not node:
            return 0
        cur = cur * 10 + node.val
        if not node.left and not node.right:
            return cur
        return dfs(node.left, cur) + dfs(node.right, cur)
    return dfs(root, 0)
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
};
