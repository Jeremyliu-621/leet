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
};
