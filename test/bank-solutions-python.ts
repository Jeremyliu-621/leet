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
};
