import type { Problem } from '../types';

// arrays — easy
import { problem as runningSum } from './running-sum';
import { problem as peakElementCount } from './peak-element-count';
import { problem as rotateLeftOne } from './rotate-left-one';
import { problem as maxSubarray } from './max-subarray';
import { problem as missingNumber } from './missing-number';
import { problem as containsDuplicate } from './contains-duplicate';
import { problem as findMaxMin } from './find-max-min';
import { problem as maxConsecutiveOnes } from './max-consecutive-ones';
import { problem as plusOne } from './plus-one';
// arrays — medium
import { problem as rotateArray } from './rotate-array';
import { problem as maxProductSubarray } from './max-product-subarray';
import { problem as productExceptSelf } from './product-except-self';
import { problem as sortColors } from './sort-colors';
import { problem as trapRainWater } from './trap-rain-water';
import { problem as containerWithMostWater } from './container-with-most-water';
import { problem as threeSumZero } from './three-sum-zero';
import { problem as jumpGame } from './jump-game';
import { problem as bestTimeBuySellTwo } from './best-time-buy-sell-two';
import { problem as majorityElement } from './majority-element';
import { problem as kthLargestElement } from './kth-largest-element';
import { problem as findAllDuplicates } from './find-all-duplicates';
import { problem as longestSubarrayOfOnes } from './longest-subarray-of-ones';
import { problem as spiralMatrix } from './spiral-matrix';
import { problem as rotateImage } from './rotate-image';
import { problem as maximalSquare } from './maximal-square';
import { problem as validSudoku } from './valid-sudoku';

// strings — easy
import { problem as vowelTally } from './vowel-tally';
import { problem as reverseWordsOrder } from './reverse-words-order';
import { problem as isPalindromeClean } from './is-palindrome-clean';
import { problem as compressString } from './compress-string';
import { problem as longestCommonPrefix } from './longest-common-prefix';
import { problem as reverseString } from './reverse-string';
import { problem as capitalizeWords } from './capitalize-words';
import { problem as lengthOfLastWord } from './length-of-last-word';
// strings — medium
import { problem as longestPalindromicString } from './longest-palindromic-string';
import { problem as countPalindromicSubstrings } from './count-palindromic-substrings';
import { problem as decodeString } from './decode-string';
import { problem as minimumRemoveToMakeValid } from './minimum-remove-to-make-valid';
import { problem as reverseStringWords } from './reverse-string-words';
import { problem as stringMultiply } from './string-multiply';
import { problem as isSubsequenceMedium } from './is-subsequence-medium';
import { problem as characterReplacement } from './character-replacement';

// hash-map — easy
import { problem as firstUniqueChar } from './first-unique-char';
import { problem as twoSumIndices } from './two-sum-indices';
import { problem as mostFrequentValue } from './most-frequent-value';
import { problem as anagramCheck } from './anagram-check';
import { problem as wordFrequency } from './word-frequency';
import { problem as countGoodPairs } from './count-good-pairs';
import { problem as intersectionTwoArrays } from './intersection-two-arrays';
import { problem as subarraySumEqualsK } from './subarray-sum-equals-k';
import { problem as ransomNote } from './ransom-note';
import { problem as isomorphicStrings } from './isomorphic-strings';
// hash-map — medium
import { problem as groupAnagrams } from './group-anagrams';
import { problem as topKFrequentElements } from './top-k-frequent-elements';
import { problem as longestConsecutiveSequence } from './longest-consecutive-sequence';
import { problem as findAllAnagramsInString } from './find-all-anagrams-in-string';
import { problem as maximumErasureValue } from './maximum-erasure-value';
// hash-map — hard
import { problem as fourSumII } from './four-sum-ii';
import { problem as maxPointsOnLine } from './max-points-on-line';

// two-pointers — hard
import { problem as trappingRainWater } from './trapping-rain-water';
import { problem as fourSum } from './four-sum';
import { problem as sortList } from './sort-list';
import { problem as subarraysKDistinct } from './subarrays-k-distinct';
// two-pointers — medium
import { problem as threeSumClosest } from './three-sum-closest';
import { problem as boatsToSavePeople } from './boats-to-save-people';
import { problem as partitionLabels } from './partition-labels';
import { problem as nextPermutation } from './next-permutation';
import { problem as intervalListIntersections } from './interval-list-intersections';
import { problem as longestMountainInArray } from './longest-mountain-in-array';
// two-pointers — easy
import { problem as reverseArrayInplace } from './reverse-array-inplace';
import { problem as sortedPairExists } from './sorted-pair-exists';
import { problem as mergeSortedLists } from './merge-sorted-lists';
import { problem as moveZeros } from './move-zeros';
import { problem as validSubsequence } from './valid-subsequence';
import { problem as removeDuplicatesSorted } from './remove-duplicates-sorted';

// sliding-window — hard
import { problem as maxConsecutiveFlips } from './max-consecutive-flips';
import { problem as countSubarraysBoundedMax } from './count-subarrays-bounded-max';

// sliding-window — medium
import { problem as atMostKDistinct } from './at-most-k-distinct';
import { problem as permutationInString } from './permutation-in-string';
import { problem as subarrayProductLessThanK } from './subarray-product-less-than-k';
import { problem as minimumOperationsReduceX } from './minimum-operations-reduce-x';

// sliding-window — easy
import { problem as maxWindowSum } from './max-window-sum';
import { problem as longestEqualRun } from './longest-equal-run';
import { problem as minWindowAverage } from './min-window-average';
import { problem as longestUniqueWindow } from './longest-unique-window';
import { problem as minSubarrayLength } from './min-subarray-length';

// binary-search — easy
import { problem as findTargetIndex } from './find-target-index';
import { problem as integerSquareRoot } from './integer-square-root';
import { problem as firstNotSmaller } from './first-not-smaller';
import { problem as binarySearchRange } from './binary-search-range';
import { problem as isPerfectSquare } from './is-perfect-square';
import { problem as searchInsertPosition } from './search-insert-position';
// binary-search — medium
import { problem as searchRotatedSorted } from './search-rotated-sorted';
import { problem as findMinimumRotated } from './find-minimum-rotated';
import { problem as singleElementSorted } from './single-element-sorted';
import { problem as findFirstAndLastPosition } from './find-first-and-last-position';
import { problem as search2dMatrix } from './search-2d-matrix';
import { problem as kokoEatingBananas } from './koko-eating-bananas';
import { problem as findPeakElement } from './find-peak-element';
// binary-search — hard
import { problem as medianTwoSortedArrays } from './median-two-sorted-arrays';
import { problem as splitArrayLargestSum } from './split-array-largest-sum';
import { problem as capacityToShip } from './capacity-to-ship';

// stack — easy
import { problem as balancedBrackets } from './balanced-brackets';
import { problem as removeAdjacentDupes } from './remove-adjacent-dupes';
import { problem as nextGreaterElement } from './next-greater-element';
import { problem as dailyTemperatures } from './daily-temperatures';
import { problem as evaluateRpn } from './evaluate-rpn';
// stack — medium
import { problem as asteroidCollision } from './asteroid-collision';
import { problem as scoreOfParentheses } from './score-of-parentheses';
import { problem as validParenthesisString } from './valid-parenthesis-string';
import { problem as carFleet } from './car-fleet';
// stack — hard
import { problem as basicCalculator } from './basic-calculator';
import { problem as sumSubarrayMinimums } from './sum-subarray-minimums';
import { problem as removeKDigits } from './remove-k-digits';

// math — easy
import { problem as digitSum } from './digit-sum';
import { problem as isPrimeNumber } from './is-prime-number';
import { problem as greatestCommonDivisor } from './greatest-common-divisor';
import { problem as countDivisors } from './count-divisors';
import { problem as powerOfTwo } from './power-of-two';
import { problem as fibonacciNumber } from './fibonacci-number';
import { problem as sumOfSquares } from './sum-of-squares';
import { problem as climbingStairs } from './climbing-stairs';
import { problem as romanToInteger } from './roman-to-integer';
import { problem as palindromeNumber } from './palindrome-number';
import { problem as excelColumnNumber } from './excel-column-number';
// math — hard
import { problem as fractionToRecurringDecimal } from './fraction-to-recurring-decimal';
import { problem as integerToEnglishWords } from './integer-to-english-words';
// math — medium
import { problem as countPrimesSieve } from './count-primes-sieve';
import { problem as powXN } from './pow-x-n';
import { problem as reverseInteger } from './reverse-integer';
import { problem as happyNumber } from './happy-number';
import { problem as maximumSwap } from './maximum-swap';

// arrays — hard
import { problem as firstMissingPositive } from './first-missing-positive';
import { problem as jumpGameII } from './jump-game-ii';
import { problem as largestRectangleHistogram } from './largest-rectangle-histogram';
import { problem as slidingWindowMaximum } from './sliding-window-maximum';
import { problem as largestNumber } from './largest-number';
import { problem as longestIncreasingSubsequence } from './longest-increasing-subsequence';
// strings — hard
import { problem as minimumWindowSubstring } from './minimum-window-substring';
import { problem as longestValidParentheses } from './longest-valid-parentheses';
import { problem as editDistance } from './edit-distance';
import { problem as wordBreak } from './word-break';

// dynamic-programming — easy
import { problem as uniquePaths } from './unique-paths';
import { problem as minCostClimbingStairs } from './min-cost-climbing-stairs';
import { problem as countingBits } from './counting-bits';
import { problem as bestTimeBuySell } from './best-time-buy-sell';
// dynamic-programming — medium
import { problem as houseRobber } from './house-robber';
import { problem as coinChange } from './coin-change';
import { problem as longestCommonSubsequence } from './longest-common-subsequence';
import { problem as minimumPathSum } from './minimum-path-sum';
import { problem as decodeWays } from './decode-ways';
import { problem as partitionEqualSubsetSum } from './partition-equal-subset-sum';
import { problem as perfectSquares } from './perfect-squares';
import { problem as targetSum } from './target-sum';
import { problem as nthUglyNumber } from './nth-ugly-number';
// dynamic-programming — hard
import { problem as longestPalindromicSubsequence } from './longest-palindromic-subsequence';
import { problem as palindromePartitioningMinCuts } from './palindrome-partitioning-min-cuts';
import { problem as maximumProductCutting } from './maximum-product-cutting';
import { problem as regularExpressionMatching } from './regular-expression-matching';
import { problem as burstBalloons } from './burst-balloons';
import { problem as wildcardMatching } from './wildcard-matching';
import { problem as dungeonGame } from './dungeon-game';

// linked-list — easy
import { problem as reverseLinkedList } from './reverse-linked-list';
import { problem as linkedListCycle } from './linked-list-cycle';
import { problem as mergeTwoSortedLinkedLists } from './merge-two-sorted-linked-lists';
import { problem as middleOfLinkedList } from './middle-of-linked-list';

export const problems: readonly Problem[] = [
  // arrays — easy
  runningSum,
  peakElementCount,
  rotateLeftOne,
  maxSubarray,
  missingNumber,
  containsDuplicate,
  findMaxMin,
  maxConsecutiveOnes,
  plusOne,
  // arrays — medium
  rotateArray,
  maxProductSubarray,
  productExceptSelf,
  sortColors,
  trapRainWater,
  containerWithMostWater,
  threeSumZero,
  jumpGame,
  bestTimeBuySellTwo,
  majorityElement,
  kthLargestElement,
  findAllDuplicates,
  longestSubarrayOfOnes,
  spiralMatrix,
  rotateImage,
  maximalSquare,
  validSudoku,
  // strings — easy
  vowelTally,
  reverseWordsOrder,
  isPalindromeClean,
  compressString,
  longestCommonPrefix,
  reverseString,
  capitalizeWords,
  lengthOfLastWord,
  // strings — medium
  longestPalindromicString,
  countPalindromicSubstrings,
  decodeString,
  minimumRemoveToMakeValid,
  reverseStringWords,
  stringMultiply,
  isSubsequenceMedium,
  characterReplacement,
  // hash-map — easy
  firstUniqueChar,
  twoSumIndices,
  mostFrequentValue,
  anagramCheck,
  wordFrequency,
  countGoodPairs,
  intersectionTwoArrays,
  subarraySumEqualsK,
  ransomNote,
  isomorphicStrings,
  // hash-map — medium
  groupAnagrams,
  topKFrequentElements,
  longestConsecutiveSequence,
  findAllAnagramsInString,
  maximumErasureValue,
  // hash-map — hard
  fourSumII,
  maxPointsOnLine,
  // two-pointers — hard
  trappingRainWater,
  fourSum,
  sortList,
  subarraysKDistinct,
  // two-pointers — medium
  threeSumClosest,
  boatsToSavePeople,
  partitionLabels,
  nextPermutation,
  intervalListIntersections,
  longestMountainInArray,
  // two-pointers — easy
  reverseArrayInplace,
  sortedPairExists,
  mergeSortedLists,
  moveZeros,
  validSubsequence,
  removeDuplicatesSorted,
  // sliding-window — hard
  maxConsecutiveFlips,
  countSubarraysBoundedMax,
  // sliding-window — medium
  atMostKDistinct,
  permutationInString,
  subarrayProductLessThanK,
  minimumOperationsReduceX,
  // sliding-window — easy
  maxWindowSum,
  longestEqualRun,
  minWindowAverage,
  longestUniqueWindow,
  minSubarrayLength,
  // binary-search — easy
  findTargetIndex,
  integerSquareRoot,
  firstNotSmaller,
  binarySearchRange,
  isPerfectSquare,
  searchInsertPosition,
  // binary-search — medium
  searchRotatedSorted,
  findMinimumRotated,
  singleElementSorted,
  findFirstAndLastPosition,
  search2dMatrix,
  kokoEatingBananas,
  findPeakElement,
  // binary-search — hard
  medianTwoSortedArrays,
  splitArrayLargestSum,
  capacityToShip,
  // stack — easy
  balancedBrackets,
  removeAdjacentDupes,
  nextGreaterElement,
  dailyTemperatures,
  evaluateRpn,
  // stack — medium
  asteroidCollision,
  scoreOfParentheses,
  validParenthesisString,
  carFleet,
  // stack — hard
  basicCalculator,
  sumSubarrayMinimums,
  removeKDigits,
  // math — easy
  digitSum,
  isPrimeNumber,
  greatestCommonDivisor,
  countDivisors,
  powerOfTwo,
  fibonacciNumber,
  sumOfSquares,
  climbingStairs,
  romanToInteger,
  palindromeNumber,
  excelColumnNumber,
  // math — hard
  fractionToRecurringDecimal,
  integerToEnglishWords,
  // math — medium
  countPrimesSieve,
  powXN,
  reverseInteger,
  happyNumber,
  maximumSwap,
  // arrays — hard
  firstMissingPositive,
  jumpGameII,
  largestRectangleHistogram,
  slidingWindowMaximum,
  largestNumber,
  longestIncreasingSubsequence,
  // strings — hard
  minimumWindowSubstring,
  longestValidParentheses,
  editDistance,
  wordBreak,
  // dynamic-programming — easy
  uniquePaths,
  minCostClimbingStairs,
  countingBits,
  bestTimeBuySell,
  // dynamic-programming — medium
  houseRobber,
  coinChange,
  longestCommonSubsequence,
  minimumPathSum,
  decodeWays,
  partitionEqualSubsetSum,
  perfectSquares,
  targetSum,
  nthUglyNumber,
  // dynamic-programming — hard
  longestPalindromicSubsequence,
  palindromePartitioningMinCuts,
  maximumProductCutting,
  regularExpressionMatching,
  burstBalloons,
  wildcardMatching,
  dungeonGame,
  // linked-list — easy
  reverseLinkedList,
  linkedListCycle,
  mergeTwoSortedLinkedLists,
  middleOfLinkedList,
];
