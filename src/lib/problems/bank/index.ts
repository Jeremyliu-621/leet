import type { Problem } from '../types';

// arrays — easy
import { problem as runningSum } from './running-sum';
import { problem as peakElementCount } from './peak-element-count';
import { problem as rotateLeftOne } from './rotate-left-one';
import { problem as maxSubarray } from './max-subarray';
import { problem as missingNumber } from './missing-number';
import { problem as containsDuplicate } from './contains-duplicate';
import { problem as containsDuplicateII } from './contains-duplicate-ii';
import { problem as pascalsTriangle } from './pascals-triangle';
import { problem as richestCustomerWealth } from './richest-customer-wealth';
import { problem as maximumUnitsOnTruck } from './maximum-units-on-truck';
import { problem as shuffleTheArray } from './shuffle-the-array';
import { problem as countItemsMatchingRule } from './count-items-matching-rule';
import { problem as summaryRanges } from './summary-ranges';
import { problem as findMaxMin } from './find-max-min';
import { problem as findPositiveIntegerWithNegative } from './find-positive-integer-with-negative';
import { problem as findPivotIndex } from './find-pivot-index';
import { problem as maxConsecutiveOnes } from './max-consecutive-ones';
import { problem as plusOne } from './plus-one';
import { problem as kidsWithCandies } from './kids-with-candies';
import { problem as monotonicArray } from './monotonic-array';
import { problem as buildArrayFromPermutation } from './build-array-from-permutation';
import { problem as concatenationOfArray } from './concatenation-of-array';
import { problem as thirdMaximumNumber } from './third-maximum-number';
import { problem as replaceElementsWithGreatest } from './replace-elements-with-greatest';
import { problem as highestAltitude } from './highest-altitude';
import { problem as maximumDifferenceIncreasingElements } from './maximum-difference-increasing-elements';
import { problem as rangeSum } from './range-sum-query';
import { problem as findAllNumbersDisappeared } from './find-all-numbers-disappeared';
import { problem as checkIfNAndDoubleExist } from './check-if-n-and-double-exist';
import { problem as largestNumberAtLeastTwice } from './largest-number-at-least-twice';
import { problem as specialPositionsBinaryMatrix } from './special-positions-binary-matrix';
import { problem as matrixDiagonalSum } from './matrix-diagonal-sum';
import { problem as sortArrayByParity } from './sort-array-by-parity';
import { problem as leftAndRightSumDifferences } from './left-and-right-sum-differences';
import { problem as minimumValuePositiveStepSum } from './minimum-value-positive-step-sum';
import { problem as countNumberOfPairs } from './count-number-of-pairs';
import { problem as validMountainArray } from './valid-mountain-array';
import { problem as canPlaceFlowers } from './can-place-flowers';
import { problem as maximumProductTwoElements } from './maximum-product-two-elements';
import { problem as increasingTripletSubsequence } from './increasing-triplet-subsequence';
import { problem as numberOfRectangles } from './number-of-rectangles';
import { problem as largestAltitude } from './largest-altitude';
import { problem as sumOfOddLengthSubarrays } from './sum-of-odd-length-subarrays';
import { problem as minimumSumMountainTriplet } from './minimum-sum-mountain-triplet';
import { problem as findNumbersEvenDigits } from './find-numbers-even-digits';
import { problem as rearrangeArrayElementsBySign } from './rearrange-array-elements-by-sign';
import { problem as numberOfZeroFilledSubarrays } from './number-of-zero-filled-subarrays';
// arrays — easy (additional)
import { problem as mergeSortedArray } from './merge-sorted-array';
import { problem as assignCookies } from './assign-cookies';
import { problem as relativeRanks } from './relative-ranks';
import { problem as maximumCount } from './maximum-count';
import { problem as addDigits } from './add-digits';
import { problem as degreeOfArray } from './degree-of-array';
import { problem as checkArrayArithmeticProgression } from './check-array-arithmetic-progression';
import { problem as howManyNumbersSmallerThanCurrent } from './how-many-numbers-smaller-than-current';
import { problem as findTargetIndicesAfterSorting } from './find-target-indices-after-sorting';
import { problem as toeplitzMatrix } from './toeplitz-matrix';
import { problem as transposeMatrix } from './transpose-matrix';
import { problem as minimumNumberOfMovesSeat } from './minimum-number-of-moves-seat';
import { problem as numberOfLaserBeams } from './number-of-laser-beams';
import { problem as maxAverageSubarray } from './max-average-subarray';
import { problem as consecutiveCharacters } from './consecutive-characters';
import { problem as countItemsWithTheGivenSum } from './count-items-with-the-given-sum';
import { problem as numberOfEmployeesCanMeet } from './number-of-employees-can-meet';
import { problem as partitionArrayAccordingToGivenPivot } from './partition-array-according-to-given-pivot';
import { problem as sortEvenOddIndices } from './sort-even-odd-indices';
import { problem as sortArrayByParityII } from './sort-array-by-parity-ii';
import { problem as numberOfArithmeticTriplets } from './number-of-arithmetic-triplets';
import { problem as countEqualAndDivisiblePairs } from './count-equal-and-divisible-pairs';
import { problem as countElementsWithMaximumFrequency } from './count-elements-with-maximum-frequency';
import { problem as xorOperationInAnArray } from './xor-operation-in-an-array';
import { problem as getMaximumInGeneratedArray } from './get-maximum-in-generated-array';
import { problem as flippingAnImage } from './flipping-an-image';
import { problem as countGoodTriplets } from './count-good-triplets';
import { problem as matrixBlockSum } from './matrix-block-sum';
// arrays — medium
import { problem as countFairPairs } from './count-fair-pairs';
import { problem as minimumAverageDifference } from './minimum-average-difference';
import { problem as rangeSumQuery2D } from './range-sum-query-2d';
import { problem as minimumArrowsBurstBalloons } from './minimum-arrows-burst-balloons';
import { problem as setMatrixZeroes } from './set-matrix-zeroes';
import { problem as removeDuplicatesSortedArrayII } from './remove-duplicates-sorted-array-ii';
import { problem as meetingRoomsII } from './meeting-rooms-ii';
import { problem as hIndex } from './h-index';
import { problem as mergeIntervals } from './merge-intervals';
import { problem as nonOverlappingIntervals } from './non-overlapping-intervals';
import { problem as subsets } from './subsets';
import { problem as subsetsII } from './subsets-ii';
import { problem as combinationSum } from './combination-sum';
import { problem as combinationSumIII } from './combination-sum-iii';
import { problem as combinationSumII } from './combination-sum-ii';
import { problem as permutations } from './permutations';
// strings — medium (additional)
import { problem as generateParentheses } from './generate-parentheses';
import { problem as palindromePartitioning } from './palindrome-partitioning';
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
import { problem as gameOfLife } from './game-of-life';
import { problem as missingRanges } from './missing-ranges';
import { problem as queueReconstructionByHeight } from './queue-reconstruction-by-height';

// strings — easy
import { problem as reverseWordsInStringIII } from './reverse-words-in-string-iii';
import { problem as makeStringGreat } from './make-string-great';
import { problem as minimumStringLength } from './minimum-string-length';
import { problem as maximumScoreAfterSplittingString } from './maximum-score-after-splitting-string';
import { problem as findCommonCharacters } from './find-common-characters';
import { problem as countingWordsWithGivenPrefix } from './counting-words-with-given-prefix';
import { problem as addBinary } from './add-binary';
import { problem as goalParser } from './goal-parser';
import { problem as designGoalParser } from './design-goal-parser';
import { problem as detectCapital } from './detect-capital';
import { problem as repeatedSubstringPattern } from './repeated-substring-pattern';
import { problem as checkIfPangram } from './check-if-pangram';
import { problem as truncateSentence } from './truncate-sentence';
import { problem as reverseStringII } from './reverse-string-ii';
import { problem as determineIfHalvesAlike } from './determine-if-halves-alike';
import { problem as shuffleString } from './shuffle-string';
import { problem as decodeTheMessage } from './decode-the-message';
import { problem as removeTrailingZeros } from './remove-trailing-zeros';
import { problem as reversePrefixOfWord } from './reverse-prefix-of-word';
import { problem as countWordsWithGivenPrefix } from './count-words-with-given-prefix';
import { problem as largestOddNumberInString } from './largest-odd-number-in-string';
import { problem as firstLetterToAppearTwice } from './first-letter-to-appear-twice';
import { problem as countAsterisks } from './count-asterisks';
import { problem as uniqueEmailAddresses } from './unique-email-addresses';
import { problem as countBinarySubstrings } from './count-binary-substrings';
import { problem as splitStringBalance } from './split-string-balance';
// arrays — hard (additional)
import { problem as candy } from './candy';
import { problem as maximumWidthRamp } from './maximum-width-ramp';
// arrays — medium (additional)
import { problem as checkIfArrayPairsDivisibleByK } from './check-if-array-pairs-divisible-by-k';
import { problem as validTriangleNumber } from './valid-triangle-number';
import { problem as maxNumberKSumPairs } from './max-number-k-sum-pairs';
import { problem as minimumTimeRopeColorful } from './minimum-time-rope-colorful';
import { problem as numberOfSubsequencesTargetSum } from './number-of-subsequences-target-sum';
import { problem as carPooling } from './car-pooling';
import { problem as mostProfitAssigningWork } from './most-profit-assigning-work';
import { problem as fruitIntoBaskets } from './fruit-into-baskets';
import { problem as minimumSwapsStringBalanced } from './minimum-swaps-string-balanced';
import { problem as sumOfSubarrayRanges } from './sum-of-subarray-ranges';
import { problem as maximizeConfusionExam } from './maximize-confusion-exam';
import { problem as sumOfAllSubsetXorTotals } from './sum-of-all-subset-xor-totals';
import { problem as continuousSubarraySum } from './continuous-subarray-sum';
import { problem as equalRowColumnPairs } from './equal-row-column-pairs';
import { problem as determineIfTwoStringsClose } from './determine-if-two-strings-close';
// arrays — medium (additional)
import { problem as shortestUnsortedContinuousSubarray } from './shortest-unsorted-continuous-subarray';
import { problem as maxChunksToMakeSorted } from './max-chunks-to-make-sorted';
// strings — medium (additional)
import { problem as integerToRoman } from './integer-to-roman';
import { problem as reverseOnlyLetters } from './reverse-only-letters';
import { problem as backspaceStringCompare } from './backspace-string-compare';
import { problem as vowelTally } from './vowel-tally';
import { problem as reverseWordsOrder } from './reverse-words-order';
import { problem as isPalindromeClean } from './is-palindrome-clean';
import { problem as compressString } from './compress-string';
import { problem as longestCommonPrefix } from './longest-common-prefix';
import { problem as reverseString } from './reverse-string';
import { problem as capitalizeWords } from './capitalize-words';
import { problem as lengthOfLastWord } from './length-of-last-word';
import { problem as defangingIpAddress } from './defanging-ip-address';
import { problem as toLowerCase } from './to-lower-case';
import { problem as checkIfTwoStringArraysEquivalent } from './check-if-two-string-arrays-equivalent';
import { problem as cellsInRange } from './cells-in-range';
import { problem as rotateString } from './rotate-string';
import { problem as percentageOfLetterInString } from './percentage-of-letter-in-string';
import { problem as countCommonWordsOneOccurrence } from './count-common-words-one-occurrence';
import { problem as checkTwoStringsAlmostEquivalent } from './check-two-strings-almost-equivalent';
import { problem as rearrangeCharactersToMakeTarget } from './rearrange-characters-to-make-target';
import { problem as divideStringIntoGroups } from './divide-string-into-groups';
import { problem as countVowelSubstrings } from './count-vowel-substrings';
import { problem as checkPrefixString } from './check-prefix-string';
import { problem as sumDigitsStringConvert } from './sum-digits-string-convert';
import { problem as maximumNumberOfStringPairs } from './maximum-number-of-string-pairs';
import { problem as countPairsSumLessThanTarget } from './count-pairs-sum-less-than-target';
import { problem as neitherMinimumNorMaximum } from './neither-minimum-nor-maximum';
import { problem as countVowelStringsInRange } from './count-vowel-strings-in-range';
import { problem as findKthPositive } from './find-kth-positive';
import { problem as minimumLengthStringOperations } from './minimum-length-string-operations';
import { problem as largestIntegerDigitSwaps } from './largest-integer-digit-swaps';
import { problem as uniqueMorseCodeWords } from './unique-morse-code-words';
import { problem as increasingDecreasingString } from './increasing-decreasing-string';
import { problem as numberOfGoodPairs } from './number-of-good-pairs';
import { problem as checkIfArraySortedRotated } from './check-if-array-sorted-rotated';
import { problem as maximumProductDifference } from './maximum-product-difference';
import { problem as maximumProductAdjacentElements } from './maximum-product-adjacent-elements';
import { problem as replaceWords } from './replace-words';
import { problem as minimumTimeDifference } from './minimum-time-difference';
import { problem as stringToIntegerAtoi } from './string-to-integer-atoi';
import { problem as minimumDeletionsCharFrequencies } from './minimum-deletions-char-frequencies';
import { problem as bullsAndCows } from './bulls-and-cows';
import { problem as minimumSumFourDigitNumber } from './minimum-sum-four-digit-number';
import { problem as countPairsAbsoluteDifferenceK } from './count-pairs-absolute-difference-k';
import { problem as findClosestNumberToZero } from './find-closest-number-to-zero';
import { problem as checkIfAllCharsHaveEqualOccurrences } from './check-if-all-chars-have-equal-occurrences';
import { problem as countEvenNumbers } from './count-even-numbers';
import { problem as countSegmentsInString } from './count-segments-in-string';
import { problem as findRepeatedDnaSequences } from './find-repeated-dna-sequences';
import { problem as widestVerticalArea } from './widest-vertical-area';
import { problem as convert1dArrayInto2dArray } from './convert-1d-array-into-2d-array';
import { problem as findThePivotInteger } from './find-the-pivot-integer';
import { problem as maximumSumCircularSubarray } from './maximum-sum-circular-subarray';
import { problem as numberOfDistinctAverages } from './number-of-distinct-averages';
// strings — medium
import { problem as zigzagConversion } from './zigzag-conversion';
import { problem as implementTrie } from './implement-trie';
import { problem as customSortString } from './custom-sort-string';
import { problem as longestPalindromicString } from './longest-palindromic-string';
import { problem as countPalindromicSubstrings } from './count-palindromic-substrings';
import { problem as decodeString } from './decode-string';
import { problem as minimumRemoveToMakeValid } from './minimum-remove-to-make-valid';
import { problem as reverseStringWords } from './reverse-string-words';
import { problem as stringMultiply } from './string-multiply';
import { problem as isSubsequenceMedium } from './is-subsequence-medium';
import { problem as characterReplacement } from './character-replacement';
import { problem as stringCompression } from './string-compression';
import { problem as restoreIpAddresses } from './restore-ip-addresses';
import { problem as countHomogenousSubstrings } from './count-homogenous-substrings';
import { problem as appendCharactersToMakeSubsequence } from './append-characters-to-make-subsequence';
// hash-map — easy
import { problem as findWordsFormedByCharacters } from './find-words-formed-by-characters';
import { problem as twoOutOfThree } from './two-out-of-three';
import { problem as checkIfAllCharactersAppearTwice } from './check-if-all-characters-appear-twice';
import { problem as findDifferenceOfTwoArrays } from './find-difference-of-two-arrays';
import { problem as findAnagramMappings } from './find-anagram-mappings';
import { problem as validAnagram } from './valid-anagram';
import { problem as pathCrossing } from './path-crossing';
import { problem as firstUniqueChar } from './first-unique-char';
import { problem as findWordsFromChars } from './word-pattern-ii';
import { problem as jewelsAndStones } from './jewels-and-stones';
import { problem as minimumOperationsAlternating } from './minimum-operations-alternating';
import { problem as minimumOperationsMakeArrayEmpty } from './minimum-operations-make-array-empty';
import { problem as maximumNumberOfBalloons } from './maximum-number-of-balloons';
import { problem as countCharacters } from './count-characters';
import { problem as uniqueNumberOfOccurrences } from './unique-number-of-occurrences';
import { problem as findLuckyInteger } from './find-lucky-integer';
import { problem as minimumIndexSumOfTwoLists } from './minimum-index-sum-of-two-lists';
// hash-map — medium (additional)
import { problem as minimumRoundsToCompleteTasks } from './minimum-rounds-to-complete-tasks';
import { problem as minimumStepsMakeAnagram } from './minimum-steps-make-anagram';
import { problem as longestWordInDictionary } from './longest-word-in-dictionary';
import { problem as twoSumIndices } from './two-sum-indices';
import { problem as mostFrequentValue } from './most-frequent-value';
import { problem as anagramCheck } from './anagram-check';
import { problem as wordFrequency } from './word-frequency';
import { problem as countGoodPairs } from './count-good-pairs';
import { problem as intersectionTwoArrays } from './intersection-two-arrays';
import { problem as subarraySumEqualsK } from './subarray-sum-equals-k';
import { problem as ransomNote } from './ransom-note';
import { problem as isomorphicStrings } from './isomorphic-strings';
import { problem as wordPattern } from './word-pattern';
import { problem as sumOfUniqueElements } from './sum-of-unique-elements';
import { problem as findWinners } from './find-winners';
// hash-map — medium
import { problem as groupAnagrams } from './group-anagrams';
import { problem as topKFrequentElements } from './top-k-frequent-elements';
import { problem as longestConsecutiveSequence } from './longest-consecutive-sequence';
import { problem as findAllAnagramsInString } from './find-all-anagrams-in-string';
import { problem as maximumErasureValue } from './maximum-erasure-value';
import { problem as maxSumPairEqualDigits } from './max-sum-of-pair-with-equal-sum-of-digits';
// hash-map — medium (binary-search)
import { problem as timeBasedKeyValueStore } from './time-based-key-value-store';
// hash-map — hard
import { problem as fourSumII } from './four-sum-ii';
import { problem as maxPointsOnLine } from './max-points-on-line';
import { problem as lruCache } from './lru-cache';
import { problem as lfuCache } from './lfu-cache';

// two-pointers — hard
import { problem as trappingRainWater } from './trapping-rain-water';
import { problem as fourSum } from './four-sum';
import { problem as sortList } from './sort-list';
import { problem as subarraysKDistinct } from './subarrays-k-distinct';
// two-pointers — medium
import { problem as findDuplicateNumber } from './find-duplicate-number';
import { problem as threeSumClosest } from './three-sum-closest';
import { problem as boatsToSavePeople } from './boats-to-save-people';
import { problem as partitionLabels } from './partition-labels';
import { problem as nextPermutation } from './next-permutation';
import { problem as intervalListIntersections } from './interval-list-intersections';
import { problem as longestMountainInArray } from './longest-mountain-in-array';
// two-pointers — easy
import { problem as twoSumLessThanK } from './two-sum-less-than-k';
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
import { problem as countNiceSubarrays } from './count-nice-subarrays';
import { problem as frequencyOfMostFrequentElement } from './frequency-of-most-frequent-element';
import { problem as minimumSizeSubarraySum } from './minimum-size-subarray-sum';
import { problem as atMostKDistinct } from './at-most-k-distinct';
import { problem as permutationInString } from './permutation-in-string';
import { problem as subarrayProductLessThanK } from './subarray-product-less-than-k';
import { problem as minimumOperationsReduceX } from './minimum-operations-reduce-x';

import { problem as numberOfSubstrings } from './number-of-substrings';
import { problem as longestTurbulentSubarray } from './longest-turbulent-subarray';
// sliding-window — easy
import { problem as minimumRecolorsToGetKConsecutiveBlack } from './minimum-recolors-to-get-k-consecutive-black';
import { problem as minimumDifferenceKScores } from './minimum-difference-k-scores';
import { problem as maxWindowSum } from './max-window-sum';
import { problem as maximumAverageSubarray } from './maximum-average-subarray';
import { problem as minimumRecolors } from './minimum-recolors';
import { problem as longestEqualRun } from './longest-equal-run';
import { problem as minWindowAverage } from './min-window-average';
import { problem as longestUniqueWindow } from './longest-unique-window';
import { problem as minSubarrayLength } from './min-subarray-length';

// binary-search — easy
import { problem as findSmallestLetterGreaterThanTarget } from './find-smallest-letter-greater-than-target';
import { problem as findTargetIndex } from './find-target-index';
import { problem as integerSquareRoot } from './integer-square-root';
import { problem as firstNotSmaller } from './first-not-smaller';
import { problem as binarySearchRange } from './binary-search-range';
import { problem as isPerfectSquare } from './is-perfect-square';
import { problem as searchInsertPosition } from './search-insert-position';
// binary-search — medium
import { problem as findKClosestElements } from './find-k-closest-elements';
import { problem as search2dMatrixII } from './search-2d-matrix-ii';
import { problem as findKPairsSmallestSums } from './find-k-pairs-smallest-sums';
import { problem as searchRotatedSorted } from './search-rotated-sorted';
import { problem as findMinimumRotated } from './find-minimum-rotated';
import { problem as singleElementSorted } from './single-element-sorted';
import { problem as findFirstAndLastPosition } from './find-first-and-last-position';
import { problem as search2dMatrix } from './search-2d-matrix';
import { problem as kokoEatingBananas } from './koko-eating-bananas';
import { problem as findPeakElement } from './find-peak-element';
import { problem as countRectanglesContainingPoint } from './count-number-of-rectangles';
// binary-search — hard
import { problem as findKthSmallestPairDistance } from './find-k-th-smallest-pair-distance';
import { problem as findMinRotatedII } from './find-min-rotated-ii';
import { problem as medianTwoSortedArrays } from './median-two-sorted-arrays';
import { problem as splitArrayLargestSum } from './split-array-largest-sum';
import { problem as capacityToShip } from './capacity-to-ship';

// stack — easy
import { problem as numberOfStudentsEatingLunch } from './number-of-students-eating-lunch';
import { problem as implementQueueUsingStacks } from './implement-queue-using-stacks';
import { problem as balancedBrackets } from './balanced-brackets';
import { problem as removeAdjacentDupes } from './remove-adjacent-dupes';
import { problem as nextGreaterElement } from './next-greater-element';
import { problem as dailyTemperatures } from './daily-temperatures';
import { problem as evaluateRpn } from './evaluate-rpn';
import { problem as minStack } from './min-stack';
import { problem as maximumNestingDepth } from './maximum-nesting-depth';
// stack — medium
import { problem as minimumRemoveToMakeValidParentheses } from './minimum-remove-to-make-valid-parentheses';
import { problem as onlineStockSpan } from './online-stock-span';
import { problem as simplifyPath } from './simplify-path';
import { problem as nextGreaterElementII } from './next-greater-element-ii';
import { problem as asteroidCollision } from './asteroid-collision';
import { problem as scoreOfParentheses } from './score-of-parentheses';
import { problem as validParenthesisString } from './valid-parenthesis-string';
import { problem as carFleet } from './car-fleet';
import { problem as validateStackSequences } from './validate-stack-sequences';
import { problem as pattern132 } from './132-pattern';
// stack — hard
import { problem as basicCalculator } from './basic-calculator';
import { problem as sumSubarrayMinimums } from './sum-subarray-minimums';
import { problem as removeKDigits } from './remove-k-digits';

// math — easy
import { problem as sumOfMultiples } from './sum-of-multiples';
import { problem as numberOfSteps } from './number-of-steps';
import { problem as findTheDifference } from './find-the-difference';
import { problem as hammingWeight } from './hamming-weight';
import { problem as digitSum } from './digit-sum';
import { problem as isPrimeNumber } from './is-prime-number';
import { problem as greatestCommonDivisor } from './greatest-common-divisor';
import { problem as countDivisors } from './count-divisors';
import { problem as powerOfTwo } from './power-of-two';
import { problem as excelSheetColumnTitle } from './excel-sheet-column-title';
import { problem as longestPalindromeBuild } from './longest-palindrome-build';
import { problem as numberOfOneBits } from './number-of-1-bits';
import { problem as singleNumberII } from './single-number-ii';
import { problem as powerOfThree } from './power-of-three';
import { problem as isPowerOfFour } from './is-power-of-four';
import { problem as toHex } from './to-hex';
import { problem as numberComplement } from './number-complement';
import { problem as subtractProductAndSum } from './subtract-product-and-sum';
import { problem as base7 } from './base-7';
import { problem as reverseBits } from './reverse-bits';
import { problem as countAndSay } from './count-and-say';
import { problem as fibonacciNumber } from './fibonacci-number';
import { problem as sumOfSquares } from './sum-of-squares';
import { problem as sumOfSquaresSpecialElements } from './sum-of-squares-special-elements';
import { problem as climbingStairs } from './climbing-stairs';
import { problem as romanToInteger } from './roman-to-integer';
import { problem as palindromeNumber } from './palindrome-number';
import { problem as excelColumnNumber } from './excel-column-number';
import { problem as sumOfTwoIntegers } from './sum-of-two-integers';
import { problem as largestPerimeterTriangle } from './largest-perimeter-triangle';
import { problem as countOddNumbersInInterval } from './count-odd-numbers-in-interval';
import { problem as maximumProductThreeNumbers } from './maximum-product-three-numbers';
import { problem as averageSalaryExcludingMinMax } from './average-salary-excluding-min-max';
import { problem as findNUniqueIntegersSumToZero } from './find-n-unique-integers-sum-to-zero';
import { problem as decodeXoredArray } from './decode-xored-array';
import { problem as signOfProductArray } from './sign-of-product-array';
import { problem as convertTemperature } from './convert-temperature';
import { problem as maximum69Number } from './maximum-69-number';
import { problem as countOfMatchesTournament } from './count-of-matches-tournament';
import { problem as nthTribonacciNumber } from './nth-tribonacci-number';
// math — hard
import { problem as fractionToRecurringDecimal } from './fraction-to-recurring-decimal';
import { problem as integerToEnglishWords } from './integer-to-english-words';
// math — medium
import { problem as bitwiseAndOfNumbersRange } from './bitwise-and-of-numbers-range';
import { problem as minimumMovesEqualArray } from './minimum-moves-equal-array';
import { problem as multiplyStrings } from './multiply-strings';
import { problem as waterAndJug } from './water-and-jug';
import { problem as countTripletsXor } from './count-triplets-xor';
import { problem as taskScheduler } from './task-scheduler';
import { problem as countPrimesLessThan } from './count-primes-less-than';
import { problem as countPrimesSieve } from './count-primes-sieve';
import { problem as powXN } from './pow-x-n';
import { problem as reverseInteger } from './reverse-integer';
import { problem as happyNumber } from './happy-number';
import { problem as maximumSwap } from './maximum-swap';
import { problem as robotBoundedInCircle } from './robot-bounded-in-circle';

import { problem as singleNumber } from './single-number';
import { problem as majorityElementII } from './majority-element-ii';
import { problem as maximumProductWordLengths } from './maximum-product-word-lengths';
import { problem as insertInterval } from './insert-interval';
// arrays — hard
import { problem as nQueens } from './n-queens';
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
import { problem as minimumCostForTickets } from './minimum-cost-for-tickets';
import { problem as stoneGameII } from './stone-game-ii';
import { problem as minimumFallingPathSum } from './minimum-falling-path-sum';
import { problem as champagneTower } from './champagne-tower';
import { problem as stoneGame } from './stone-game';
import { problem as longestStringChain } from './longest-string-chain';
import { problem as houseRobber } from './house-robber';
import { problem as houseRobberII } from './house-robber-ii';
import { problem as wiggleSubsequence } from './wiggle-subsequence';
import { problem as largestDivisibleSubset } from './largest-divisible-subset';
import { problem as coinChange } from './coin-change';
import { problem as longestCommonSubsequence } from './longest-common-subsequence';
import { problem as minimumPathSum } from './minimum-path-sum';
import { problem as decodeWays } from './decode-ways';
import { problem as partitionEqualSubsetSum } from './partition-equal-subset-sum';
import { problem as perfectSquares } from './perfect-squares';
import { problem as targetSum } from './target-sum';
import { problem as nthUglyNumber } from './nth-ugly-number';
import { problem as triangle } from './triangle';
import { problem as interleavingString } from './interleaving-string';
import { problem as uniquePathsII } from './unique-paths-ii';
import { problem as numberOfDiceRolls } from './number-of-dice-rolls';
import { problem as coinChangeII } from './coin-change-ii';
import { problem as bestTimeBuySellCooldown } from './best-time-buy-sell-cooldown';
import { problem as longestArithmeticSubsequence } from './longest-arithmetic-subsequence';
import { problem as spiralMatrixII } from './spiral-matrix-ii';
import { problem as maxConsecutiveOnesIII } from './max-consecutive-ones-iii';
import { problem as jumpGameIII } from './jump-game-iii';
import { problem as kClosestPoints } from './k-closest-points';
import { problem as topKFrequentWords } from './top-k-frequent-words';
import { problem as findDisappearedNumbers } from './find-disappeared-numbers';
import { problem as squaresOfSortedArray } from './squares-of-sorted-array';
import { problem as minimumAbsoluteDifference } from './minimum-absolute-difference';
import { problem as countNegativesInSortedMatrix } from './count-negatives-in-sorted-matrix';
import { problem as gasStation } from './gas-station';
import { problem as minimumCostTickets } from './minimum-cost-tickets';
import { problem as maxSubarrayCircular } from './max-subarray-circular';
import { problem as checkSortedRotated } from './check-sorted-rotated';
import { problem as maximumVowels } from './maximum-vowels';
import { problem as longestSubarrayAfterDeleting } from './longest-subarray-after-deleting';
import { problem as reverseVowels } from './reverse-vowels';
import { problem as fizzBuzz } from './fizz-buzz';
import { problem as luckyNumbersInMatrix } from './lucky-numbers-in-matrix';
import { problem as countNumberOfTexts } from './count-number-of-texts';
// dynamic-programming — hard
import { problem as wordBreakII } from './word-break-ii';
import { problem as decodeWaysII } from './decode-ways-ii';
import { problem as longestPalindromicSubsequence } from './longest-palindromic-subsequence';
import { problem as palindromePartitioningMinCuts } from './palindrome-partitioning-min-cuts';
import { problem as maximumProductCutting } from './maximum-product-cutting';
import { problem as regularExpressionMatching } from './regular-expression-matching';
import { problem as burstBalloons } from './burst-balloons';
import { problem as wildcardMatching } from './wildcard-matching';
import { problem as dungeonGame } from './dungeon-game';

// linked-list — easy
import { problem as removeLinkedListElements } from './remove-linked-list-elements';
import { problem as deleteNodeInLinkedList } from './delete-node-in-linked-list';
import { problem as reverseLinkedList } from './reverse-linked-list';
import { problem as linkedListCycle } from './linked-list-cycle';
import { problem as mergeTwoSortedLinkedLists } from './merge-two-sorted-linked-lists';
import { problem as middleOfLinkedList } from './middle-of-linked-list';
import { problem as palindromeLinkedList } from './palindrome-linked-list';
import { problem as intersectionTwoLinkedLists } from './intersection-two-linked-lists';
// linked-list — medium
import { problem as splitLinkedListInParts } from './split-linked-list-in-parts';
import { problem as removeNthFromEnd } from './remove-nth-from-end';
import { problem as oddEvenLinkedList } from './odd-even-linked-list';
import { problem as addTwoNumbers } from './add-two-numbers';
import { problem as reorderList } from './reorder-list';
import { problem as swapNodesInPairs } from './swap-nodes-in-pairs';
import { problem as partitionList } from './partition-list';
import { problem as reverseLinkedListII } from './reverse-linked-list-ii';
import { problem as rotateList } from './rotate-list';
import { problem as copyListWithRandomPointer } from './copy-list-with-random-pointer';
// linked-list — hard
import { problem as mergeKSortedLists } from './merge-k-sorted-lists';
import { problem as reverseNodesInKGroup } from './reverse-nodes-in-k-group';

// graph — easy
import { problem as findCenterOfStarGraph } from './find-center-of-star-graph';
import { problem as floodFill } from './flood-fill';
import { problem as findTheTownJudge } from './find-the-town-judge';
import { problem as numberOfProvinces } from './number-of-provinces';
import { problem as findIfPathExists } from './find-if-path-exists';
// graph — medium (additional)
import { problem as shortestPathBinaryMatrix } from './shortest-path-binary-matrix';
import { problem as accountsMerge } from './accounts-merge';
import { problem as wordSearch } from './word-search';
import { problem as surroundedRegions } from './surrounded-regions';
import { problem as graphValidTree } from './graph-valid-tree';
import { problem as zeroOneMatrix } from './01-matrix';
// graph — medium
import { problem as numberOfEnclaves } from './number-of-enclaves';
import { problem as numberOfIslands } from './number-of-islands';
import { problem as courseSchedule } from './course-schedule';
import { problem as maxAreaOfIsland } from './max-area-of-island';
import { problem as rottingOranges } from './rotting-oranges';
import { problem as keysAndRooms } from './keys-and-rooms';
import { problem as cloneGraph } from './clone-graph';
import { problem as courseScheduleII } from './course-schedule-ii';
import { problem as pacificAtlantic } from './pacific-atlantic';
import { problem as networkDelayTime } from './network-delay-time';
import { problem as numberOfConnectedComponents } from './number-of-connected-components';
import { problem as redundantConnection } from './redundant-connection';
import { problem as isGraphBipartite } from './is-graph-bipartite';
import { problem as allPathsSourceTarget } from './all-paths-source-target';
import { problem as minimumHeightTrees } from './minimum-height-trees';
import { problem as findEventualSafeStates } from './find-eventual-safe-states';
// graph — hard
import { problem as shortestBridge } from './shortest-bridge';
import { problem as jumpGameIV } from './jump-game-iv';
import { problem as wordLadder } from './word-ladder';
import { problem as alienDictionary } from './alien-dictionary';
import { problem as criticalConnections } from './critical-connections';
import { problem as longestIncreasingPathMatrix } from './longest-increasing-path-matrix';
import { problem as minimumGeneticMutation } from './minimum-genetic-mutation';
import { problem as busRoutes } from './bus-routes';
import { problem as sudokuSolver } from './sudoku-solver';
import { problem as combinations } from './combinations';
import { problem as wordSearchII } from './word-search-ii';
import { problem as letterCasePermutation } from './letter-case-permutation';
import { problem as beautifulArrangement } from './beautiful-arrangement';
import { problem as beautifulArrangementII } from './beautiful-arrangement-ii';
import { problem as expressionAddOperators } from './expression-add-operators';
import { problem as maxScoreWordsFormed } from './maximum-score-words-formed';

// tree — easy (additional)
import { problem as balancedBinaryTree } from './balanced-binary-tree';
import { problem as minimumDepthBinaryTree } from './minimum-depth-binary-tree';
import { problem as binaryTreeLevelOrderBottom } from './binary-tree-level-order-bottom';
// tree — easy
import { problem as maxDepthBinaryTree } from './max-depth-binary-tree';
import { problem as symmetricTree } from './symmetric-tree';
import { problem as invertBinaryTree } from './invert-binary-tree';
import { problem as binaryTreePaths } from './binary-tree-paths';
import { problem as pathSum } from './path-sum';
import { problem as diameterOfBinaryTree } from './diameter-of-binary-tree';
import { problem as sameTree } from './same-tree';
import { problem as sumOfLeftLeaves } from './sum-of-left-leaves';
import { problem as leafSimilarTrees } from './leaf-similar-trees';
import { problem as twoSumIVBST } from './two-sum-iv-bst';
import { problem as binaryTreeTilt } from './binary-tree-tilt';
import { problem as averageOfLevels } from './average-of-levels';
import { problem as rangeSumOfBST } from './range-sum-of-bst';
// tree — medium
import { problem as binaryTreePruning } from './binary-tree-pruning';
import { problem as countCompleteTreeNodes } from './count-complete-tree-nodes';
import { problem as populatingNextRightPointers } from './populating-next-right-pointers';
import { problem as validateBst } from './validate-bst';
import { problem as levelOrderTraversal } from './level-order-traversal';
import { problem as binaryTreeRightSideView } from './binary-tree-right-side-view';
import { problem as lowestCommonAncestorBst } from './lowest-common-ancestor-bst';
import { problem as countGoodNodes } from './count-good-nodes';
import { problem as constructBinaryTree } from './construct-binary-tree';
import { problem as kthSmallestBst } from './kth-smallest-bst';
import { problem as zigzagLevelOrder } from './zigzag-level-order';
import { problem as flattenBinaryTree } from './flatten-binary-tree';
import { problem as lowestCommonAncestorBinaryTree } from './lowest-common-ancestor-binary-tree';
import { problem as sumRootToLeaf } from './sum-root-to-leaf';
import { problem as houseRobberIII } from './house-robber-iii';
import { problem as maximumWidthBinaryTree } from './maximum-width-binary-tree';
import { problem as pathSumIII } from './path-sum-iii';
// tree — hard
import { problem as binaryTreeMaxPathSum } from './binary-tree-max-path-sum';
import { problem as serializeBinaryTree } from './serialize-binary-tree';
import { problem as verticalOrderTraversal } from './vertical-order-traversal';

// heap
import { problem as lastStoneWeight } from './last-stone-weight';
import { problem as kthLargestInStream } from './kth-largest-in-stream';
import { problem as reorganizeString } from './reorganize-string';
import { problem as minimumCostToConnectSticks } from './minimum-cost-to-connect-sticks';
import { problem as medianFromDataStream } from './median-from-data-stream';
import { problem as sortCharactersByFrequency } from './sort-characters-by-frequency';
import { problem as maximumFrequencyStack } from './maximum-frequency-stack';
import { problem as totalCostHireKWorkers } from './total-cost-hire-k-workers';
import { problem as maximumSubsequenceScore } from './maximum-subsequence-score';
import { problem as processTasksUsingServers } from './process-tasks-using-servers';
import { problem as smallestNumberInInfiniteSet } from './smallest-number-in-infinite-set';
import { problem as grayCode } from './gray-code';
import { problem as countVowelsPermutation } from './count-vowels-permutation';
import { problem as snakesAndLadders } from './snakes-and-ladders';
import { problem as swimInRisingWater } from './swim-in-rising-water';
import { problem as nQueensII } from './n-queens-ii';
import { problem as removeInvalidParentheses } from './remove-invalid-parentheses';
import { problem as numberOfWaysArriveDestination } from './number-of-ways-arrive-destination';
import { problem as minimumCostCutStick } from './minimum-cost-cut-stick';
import { problem as kthMissingPositiveNumber } from './kth-missing-positive-number';
import { problem as strangePrinter } from './strange-printer';
import { problem as studentsUnableToEatLunch } from './students-unable-to-eat-lunch';
import { problem as createTargetArrayGivenOrder } from './create-target-array-given-order';
import { problem as maximumAscendingSubarraySum } from './maximum-ascending-subarray-sum';
import { problem as minimumConsecutiveCardsPickup } from './minimum-consecutive-cards-pickup';
import { problem as divisorGame } from './divisor-game';
import { problem as minimumTimeVisitingAllPoints } from './minimum-time-visiting-all-points';
import { problem as largestLocalValuesMatrix } from './largest-local-values-matrix';
import { problem as percentageLetterInString } from './percentage-letter-in-string';
import { problem as numberOfWeakCharacters } from './number-of-weak-characters';
import { problem as arithmeticSlices } from './arithmetic-slices';
import { problem as maximumNumberVowelsSubstring } from './maximum-number-vowels-substring';
import { problem as minimumSwapsGroupAllOnes } from './minimum-swaps-group-all-ones';
import { problem as kDiffPairsInArray } from './k-diff-pairs-in-array';
import { problem as handOfStraights } from './hand-of-straights';
import { problem as minimumDominoRotations } from './minimum-domino-rotations';
import { problem as furthestBuildingLadders } from './furthest-building-ladders';
import { problem as ipo } from './ipo';
import { problem as smallestRangeCoveringKLists } from './smallest-range-covering-k-lists';
import { problem as relativeSortArray } from './relative-sort-array';
import { problem as permutationsII } from './permutations-ii';
import { problem as letterTilePossibilities } from './letter-tile-possibilities';
import { problem as differentWaysAddParentheses } from './different-ways-add-parentheses';
import { problem as integerBreak } from './integer-break';
import { problem as minimumCostMoveChips } from './minimum-cost-move-chips';
import { problem as binaryWatch } from './binary-watch';
import { problem as minimumAddMakeValidParentheses } from './minimum-add-make-valid-parentheses';
import { problem as palindromicSubstrings } from './palindromic-substrings';
import { problem as partitionString } from './partition-string';
import { problem as uglyNumberII } from './ugly-number-ii';
import { problem as deleteNodeInBst } from './delete-node-in-bst';
import { problem as minimumCostConnectPoints } from './minimum-cost-connect-points';
import { problem as numberOfVisiblePeopleInQueue } from './number-of-visible-people-in-queue';
import { problem as insertIntoBst } from './insert-into-bst';
import { problem as combinationSumIv } from './combination-sum-iv';
import { problem as validParentheses } from './valid-parentheses';
import { problem as evaluateReversePolishNotation } from './evaluate-reverse-polish-notation';
import { problem as moveZeroes } from './move-zeroes';
import { problem as mergeStringsAlternately } from './merge-strings-alternately';
import { problem as uncrossedLines } from './uncrossed-lines';
import { problem as courseScheduleIII } from './course-schedule-iii';
import { problem as buyTwoChocolates } from './buy-two-chocolates';
import { problem as mostFrequentEvenElement } from './most-frequent-even-element';
import { problem as findFirstPalindromicString } from './find-first-palindromic-string';
import { problem as minimumNumberOperationsMakeArrayEmpty } from './minimum-number-operations-make-array-empty';
import { problem as maximumDifferenceBetweenNodeAndAncestor } from './maximum-difference-between-node-and-ancestor';
import { problem as jumpGameVI } from './jump-game-vi';
import { problem as longestSubarrayMaxBitwiseAnd } from './longest-subarray-max-bitwise-and';
import { problem as maximumEventsCanAttend } from './maximum-events-can-attend';
import { problem as countNodesEqualAverageSubtree } from './count-nodes-equal-average-subtree';
import { problem as maximumLevelSumBinaryTree } from './maximum-level-sum-binary-tree';
import { problem as minimumDistanceValue } from './minimum-distance-value';
import { problem as minimumOperationsMakeArrayAlternating } from './minimum-operations-make-array-alternating';
import { problem as redistributeCharactersMakeAllStringsEqual } from './redistribute-characters-make-all-strings-equal';
import { problem as checkCompletenessBinaryTree } from './check-completeness-binary-tree';
import { problem as maximumTwinSumLinkedList } from './maximum-twin-sum-of-a-linked-list';
import { problem as kRadiusSubarrayAverages } from './k-radius-subarray-averages';
import { problem as numberOfWaysSelectBuildings } from './number-of-ways-select-buildings';
import { problem as findCitySmallestNumberNeighbors } from './find-city-smallest-number-neighbors';
import { problem as totalAppealOfString } from './total-appeal-of-string';
import { problem as minimumFuelCostReportCapital } from './minimum-fuel-cost-report-capital';
import { problem as maximumProductOfWordLengths } from './maximum-product-of-word-lengths';
import { problem as asFarFromLandAsPossible } from './as-far-from-land-as-possible';
import { problem as cheapestFlightsWithinKStops } from './cheapest-flights-within-k-stops';
import { problem as sortedArrayToBst } from './sorted-array-to-bst';
import { problem as countSortedVowelStrings } from './count-sorted-vowel-strings';
import { problem as exclusiveTimeOfFunctions } from './exclusive-time-of-functions';
import { problem as robotReturnToOrigin } from './robot-return-to-origin';
import { problem as factorialTrailingZeroes } from './factorial-trailing-zeroes';
import { problem as uniqueBinarySearchTrees } from './unique-binary-search-trees';
import { problem as nonDecreasingArray } from './non-decreasing-array';
import { problem as bestTimeBuySellIII } from './best-time-buy-sell-iii';
import { problem as deepestLeavesSum } from './deepest-leaves-sum';
import { problem as countSubarraysFixedBounds } from './count-subarrays-fixed-bounds';
import { problem as amountOfTimeForBinaryTreeToBeInfected } from './amount-of-time-for-binary-tree-to-be-infected';
import { problem as countCollisionsOnRoad } from './count-collisions-on-road';
import { problem as maximumAlternatingSubsequenceSum } from './maximum-alternating-subsequence-sum';
import { problem as countHillsValleys } from './count-hills-valleys';
import { problem as findAllLonelyNumbers } from './find-all-lonely-numbers';
import { problem as countPrefixesOfGivenString } from './count-prefixes-of-given-string';
import { problem as minimumNumberGame } from './minimum-number-game';
import { problem as findWordsContainingCharacter } from './find-words-containing-character';
import { problem as countGoodNumbers } from './count-good-numbers';
import { problem as maximumSumExactlyKElements } from './maximum-sum-exactly-k-elements';
import { problem as minimumCommonValue } from './minimum-common-value';
import { problem as findPivotInteger } from './find-pivot-integer';
import { problem as compareVersionNumbers } from './compare-version-numbers';
import { problem as openTheLock } from './open-the-lock';
import { problem as diagonalTraverse } from './diagonal-traverse';
import { problem as reshapeTheMatrix } from './reshape-the-matrix';
import { problem as findTownJudge } from './find-town-judge';
import { problem as possibleBipartition } from './possible-bipartition';
import { problem as flipStringToMonotoneIncreasing } from './flip-string-to-monotone-increasing';
import { problem as maximumLengthSubarrayPositiveProduct } from './maximum-length-subarray-positive-product';
import { problem as minimumDaysToMakeMBouquets } from './minimum-days-to-make-m-bouquets';
import { problem as findResultantArrayAfterRemovingAnagrams } from './find-resultant-array-after-removing-anagrams';
import { problem as longestZigZagPathBinaryTree } from './longest-zigzag-path-binary-tree';
import { problem as twoSumII } from './two-sum-ii';
import { problem as setMismatch } from './set-mismatch';
import { problem as maximumGap } from './maximum-gap';
import { problem as arrayPartition } from './array-partition';
import { problem as powerOfFour } from './power-of-four';
import { problem as validPalindromeII } from './valid-palindrome-ii';
import { problem as bulbSwitcher } from './bulb-switcher';
import { problem as selfDividingNumbers } from './self-dividing-numbers';
import { problem as studentAttendanceRecordI } from './student-attendance-record-i';
import { problem as licenseKeyFormatting } from './license-key-formatting';
import { problem as keyboardRow } from './keyboard-row';
import { problem as longestUncommonSubsequenceI } from './longest-uncommon-subsequence-i';
import { problem as perfectNumber } from './perfect-number';
import { problem as arrangeCoins } from './arrange-coins';
import { problem as nthDigit } from './nth-digit';
import { problem as findTheWinner } from './find-the-winner-of-the-circular-game';
import { problem as countNegativeNumbers } from './count-negative-numbers';
import { problem as canMakeArithmeticProgression } from './can-make-arithmetic-progression';
import { problem as firstBadVersion } from './first-bad-version';
import { problem as numberOfSegmentsInString } from './number-of-segments-in-string';
import { problem as findModeBst } from './find-mode-bst';
import { problem as designHashmap } from './design-hashmap';
import { problem as contiguousArray } from './contiguous-array';
import { problem as shiftingLetters } from './shifting-letters';
import { problem as convertBstToGreaterTree } from './convert-bst-to-greater-tree';
import { problem as distributeCoinsBinaryTree } from './distribute-coins-binary-tree';
import { problem as flipColumnsForMaximumEqualRows } from './flip-columns-for-maximum-equal-rows';
import { problem as deleteColumnsSortedIII } from './delete-columns-sorted-iii';

import { problem as finalValueAfterOperations } from './final-value-after-operations';
import { problem as findOriginalArrayFromDoubled } from './find-original-array-from-doubled';
import { problem as numberOfStudentsUnableToEatLunch } from './number-of-students-unable-to-eat-lunch';
import { problem as maximumNumberOfWordsFoundInSentences } from './maximum-number-of-words-found-in-sentences';
import { problem as capitalizeTheTitle } from './capitalize-the-title';
import { problem as hammingDistance } from './hamming-distance';
import { problem as singleNumberIII } from './single-number-iii';
import { problem as minimumOperationsMakeArrayIncreasing } from './minimum-operations-to-make-array-increasing';
import { problem as rankTransformArray } from './rank-transform-array';
import { problem as finalValueOperations } from './final-value-operations';
import { problem as twoCityScheduling } from './two-city-scheduling';
import { problem as checkIfStraightLine } from './check-if-straight-line';
import { problem as binaryGap } from './binary-gap';
import { problem as minimumBitFlips } from './minimum-bit-flips';
import { problem as smallestEvenMultiple } from './smallest-even-multiple';
import { problem as specialArrayGreaterEqual } from './special-array-greater-equal';
import { problem as countPairsTwoArrays } from './count-pairs-two-arrays';
import { problem as convertTimeHhmm } from './convert-time-hhmm';
import { problem as findPlayersZeroLosses } from './find-players-zero-losses';
import { problem as checkDistancesFairNodes } from './check-distances-fair-nodes';
import { problem as minimumRoundsCompleteTasks } from './minimum-rounds-complete-tasks';
import { problem as largestCombinationBitwiseAnd } from './largest-combination-bitwise-and';
import { problem as sortThePeople } from './sort-the-people';
import { problem as baseballGame } from './baseball-game';
import { problem as findChampionGraph } from './find-champion-graph';
import { problem as countDigits } from './count-digits';
import { problem as applyOperations } from './apply-operations-to-array';
import { problem as minimumMovesToSeat } from './minimum-moves-to-seat';
import { problem as ringsAndRods } from './rings-and-rods';
import { problem as findGcdOfArray } from './find-gcd-of-array';
import { problem as keepMultiplyingFoundValues } from './keep-multiplying-found-values';
import { problem as percentagesOfLetter } from './percentages-of-letter';
import { problem as maximumBagsFullCapacity } from './maximum-bags-full-capacity';
import { problem as findSubsequenceOfLengthK } from './find-subsequence-of-length-k';
import { problem as oddStringDifference } from './odd-string-difference';
import { problem as bestTimeBuySellTransactionFee } from './best-time-buy-sell-transaction-fee';
import { problem as maximalRectangle } from './maximal-rectangle';
import { problem as stoneGameIII } from './stone-game-iii';
import { problem as maximumProfitJobScheduling } from './maximum-profit-job-scheduling';
import { problem as countOfSmallerNumbersAfterSelf } from './count-of-smaller-numbers-after-self';
import { problem as kThSymbolInGrammar } from './k-th-symbol-in-grammar';
import { problem as longestSubstringWithoutRepeating } from './longest-substring-without-repeating';
import { problem as decompressRunLengthEncoding } from './decompress-run-length-encoding';
import { problem as checkAlmostEquivalentStrings } from './check-almost-equivalent-strings';
import { problem as minimumValuePositiveSteps } from './minimum-value-positive-steps';
import { problem as checkIfAllAsBeforeBs } from './check-if-all-as-before-bs';
import { problem as checkIfWordEqualsSummation } from './check-if-word-equals-summation';
import { problem as waysToBuyPensPencils } from './ways-to-buy-pens-pencils';
import { problem as checkArraySortedRotated } from './check-array-sorted-rotated';
import { problem as interpretString } from './interpret-string';
import { problem as mergeSimilarItems } from './merge-similar-items';
import { problem as countGoodRectangles } from './count-good-rectangles';
import { problem as maximumPopulationYear } from './maximum-population-year';
import { problem as findKthBitNthBinaryString } from './find-kth-bit-nth-binary-string';
import { problem as countOperationsToObtainZero } from './count-operations-to-obtain-zero';
import { problem as designUndergroundSystem } from './design-underground-system';
import { problem as sortVowelsInAString } from './sort-vowels-in-a-string';
import { problem as minimumTimeToRepairCars } from './minimum-time-to-repair-cars';
import { problem as numberOfMatchingSubsequences } from './number-of-matching-subsequences';
import { problem as largestPositiveIntegerWithNegative } from './largest-positive-integer-with-negative';
import { problem as maximizeSumKElements } from './maximize-sum-k-elements';
import { problem as checkIfAcronym } from './check-if-acronym';
import { problem as countPairsAbsoluteDiffK } from './count-pairs-absolute-diff-k';
import { problem as numberOfArithmeticSubarrays } from './number-of-arithmetic-subarrays';
import { problem as checkValidMatrix } from './check-valid-matrix';
import { problem as countMaxFrequencyElements } from './count-max-frequency-elements';
import { problem as minimumDifferenceAfterKRemovals } from './minimum-difference-after-k-removals';
import { problem as numberOfValidClockTimes } from './number-of-valid-clock-times';
import { problem as calculateMoneyInBank } from './calculate-money-in-bank';
import { problem as scoreOfString } from './score-of-string';
import { problem as chalkReplacer } from './chalk-replacer';
import { problem as splitWithMinimumSum } from './split-with-minimum-sum';
import { problem as maxDifferenceIncreasingElements } from './max-difference-increasing-elements';
import { problem as longestNiceSubarray } from './longest-nice-subarray';
import { problem as interchangeableRectangles } from './interchangeable-rectangles';
import { problem as findTriangularSum } from './find-triangular-sum';
import { problem as twoFurthestHousesDifferentColors } from './two-furthest-houses-different-colors';
import { problem as countLatticePointsCircle } from './count-lattice-points-circle';
import { problem as nearestExitMaze } from './nearest-exit-maze';
import { problem as climbingStairsKSteps } from './climbing-stairs-k-steps';
import { problem as maximumXorTwoNumbers } from './maximum-xor-two-numbers';
import { problem as removeStonesToMinimizeTotal } from './remove-stones-to-minimize-total';
import { problem as maximizeHappinessOfSelectedChildren } from './maximize-happiness-of-selected-children';
import { problem as findTheMaximumAchievableNumber } from './find-the-maximum-achievable-number';
import { problem as partitionArrayMaximumDifference } from './partition-array-maximum-difference';
import { problem as removeDuplicatesFromSortedListII } from './remove-duplicates-from-sorted-list-ii';
import { problem as countNumberOfHomogenousSubstrings } from './count-number-of-homogenous-substrings';
import { problem as stoneGameVI } from './stone-game-vi';
import { problem as countSpecialQuadruplets } from './count-special-quadruplets';
import { problem as findAllDuplicatesInArray } from './find-all-duplicates-in-array';
import { problem as checkIfWordOccursAsPrefix } from './check-if-word-occurs-as-prefix';
import { problem as countSubarraysScoreLessThanK } from './count-subarrays-score-less-than-k';
import { problem as excelSheetColumnNumber } from './excel-sheet-column-number';
import { problem as jumpGameVII } from './jump-game-vii';
import { problem as longestSquareStreak } from './longest-square-streak';
import { problem as maximumBeautyArrayAfterApplyingOperation } from './maximum-beauty-array-after-applying-operation';
import { problem as maximumProductAfterKIncrements } from './maximum-product-after-k-increments';
import { problem as pairsOfSongsTotalDivisibleBy60 } from './pairs-of-songs-total-divisible-60';
import { problem as alternatingDigitSum } from './alternating-digit-sum';
import { problem as countWaysToBuildGoodString } from './count-ways-to-build-good-string';
import { problem as dividePlayersIntoTeamsOfEqualSkill } from './divide-players-into-teams-of-equal-skill';
import { problem as maximumNumberOfPairsInArray } from './maximum-number-of-pairs-in-array';
import { problem as minimizeMaximumPairSumInArray } from './minimize-maximum-pair-sum-in-array';
import { problem as minimumOperationsToExceedThresholdValueII } from './minimum-operations-to-exceed-threshold-value-ii';
import { problem as numberOfWaysToSplitArray } from './number-of-ways-to-split-array';
import { problem as findTheIndexOfFirstOccurrence } from './find-the-index-of-first-occurrence';
import { problem as integerReplacement } from './integer-replacement';
import { problem as numberOfSmoothDescentPeriods } from './number-of-smooth-descent-periods';
import { problem as maximumMatrixSum } from './maximum-matrix-sum';
import { problem as countNodesWithHighestScore } from './count-nodes-with-highest-score';
import { problem as findRightInterval } from './find-right-interval';
import { problem as circularSentence } from './circular-sentence';
import { problem as minimumGardenPerimeter } from './minimum-garden-perimeter';
import { problem as groupPeopleGivenGroupSize } from './group-people-given-group-size';
import { problem as countNumberOfBadPairs } from './count-number-of-bad-pairs';
import { problem as minimumChangesToMakeBinaryStringBeautiful } from './minimum-changes-to-make-binary-string-beautiful';
import { problem as removeAllOccurrencesOfSubstring } from './remove-all-occurrences-of-substring';
import { problem as minimumTimeToCompleteTrips } from './minimum-time-to-complete-trips';
import { problem as minimumSpeedToArriveOnTime } from './minimum-speed-to-arrive-on-time';
import { problem as sumOfBeautyInTheArray } from './sum-of-beauty-in-the-array';
import { problem as findAllPossibleRecipes } from './find-all-possible-recipes';
import { problem as takeKOfEachCharacterFromLeftAndRight } from './take-k-of-each-character-from-left-and-right';
import { problem as minimumOperationsToMakeArrayXorEqualK } from './minimum-operations-to-make-array-xor-equal-k';
import { problem as maximumOddBinaryNumber } from './maximum-odd-binary-number';
import { problem as minimumEqualSumTwoArrays } from './minimum-equal-sum-two-arrays';
import { problem as findScoreOfArrayAfterMarking } from './find-score-of-array-after-marking';
import { problem as countCompleteDayPairs } from './count-complete-day-pairs';
import { problem as checkIfMatrixIsXMatrix } from './check-if-matrix-is-x-matrix';
import { problem as determineColorOfChessboardSquare } from './determine-color-of-chessboard-square';
import { problem as faultyKeyboard } from './faulty-keyboard';
import { problem as sumMultiples } from './sum-multiples';
import { problem as countBeautifulPairs } from './count-beautiful-pairs';
import { problem as minimumTimeToCollectAllApples } from './minimum-time-to-collect-all-apples';
import { problem as findPrefixCommonArrayOfTwoArrays } from './find-prefix-common-array-of-two-arrays';
import { problem as minimumTimeToCollectGarbage } from './minimum-time-to-collect-garbage';
import { problem as longestSubarrayOfOnesAfterDeleting } from './longest-subarray-of-ones-after-deleting';
import { problem as minimumVerticesToReachAllNodes } from './minimum-vertices-to-reach-all-nodes';
import { problem as countOddNumbersInIntervalRange } from './count-odd-numbers-in-interval-range';
import { problem as makeSumDivisibleByP } from './make-sum-divisible-by-p';
import { problem as countZeroFilledSubarrays } from './count-zero-filled-subarrays';
import { problem as checkWhetherTwoStringArraysEqual } from './check-whether-two-string-arrays-equal';
import { problem as minimumFlipsToMakeAOrBEqualC } from './minimum-flips-to-make-a-or-b-equal-c';
import { problem as makeArrayZeroBySubtractingEqualAmounts } from './make-array-zero-by-subtracting-equal-amounts';
import { problem as findAllGroupsOfFarmland } from './find-all-groups-of-farmland';
import { problem as mergeTripletsToFormTargetTriplet } from './merge-triplets-to-form-target-triplet';
import { problem as replaceElementsWithGreatestOnRight } from './replace-elements-with-greatest-on-right';
import { problem as destroyAsteroids } from './destroy-asteroids';
import { problem as maximumCountOfPositiveAndNegative } from './maximum-count-of-positive-and-negative';
import { problem as findTheOriginalArrayOfPrefixXor } from './find-the-original-array-of-prefix-xor';
import { problem as separateDigitsInArray } from './separate-digits-in-array';
import { problem as numberOfPairsOfInterchangeableRectangles } from './number-of-pairs-of-interchangeable-rectangles';
import { problem as optimalPartitionOfString } from './optimal-partition-of-string';
import { problem as uniqueLengthThreePalindromicSubsequences } from './unique-length-three-palindromic-subsequences';
import { problem as bitwiseXorOfAllPairings } from './bitwise-xor-of-all-pairings';
import { problem as numberOfRectanglesCanFormLargestSquare } from './number-of-rectangles-can-form-largest-square';
import { problem as maximizeNumberOfSubsequencesInAString } from './maximize-number-of-subsequences-in-a-string';
import { problem as numberOfWaysToBuyPensAndPencils } from './number-of-ways-to-buy-pens-and-pencils';
import { problem as sumOfDigitsOfStringAfterConvert } from './sum-of-digits-of-string-after-convert';
import { problem as smallestValueOfRearrangedNumber } from './smallest-value-of-rearranged-number';
import { problem as removingStarsFromString } from './removing-stars-from-string';
import { problem as findThePeaks } from './find-the-peaks';
import { problem as minimumPenaltyForAShop } from './minimum-penalty-for-a-shop';
import { problem as kthDistinctStringInArray } from './kth-distinct-string-in-array';
import { problem as countElementsWithStrictlySmallerAndGreater } from './count-elements-with-strictly-smaller-and-greater';
import { problem as largestPositiveIntegerThatExistsWithNegative } from './largest-positive-integer-that-exists-with-negative';
import { problem as checkIfNumberHasEqualDigitCountAndDigitValue } from './check-if-number-has-equal-digit-count-and-digit-value';
import { problem as decodeXorArray } from './decode-xor-array';
import { problem as maximumSplitOfPositiveEvenIntegers } from './maximum-split-of-positive-even-integers';
import { problem as minimumAverageOfSmallestAndLargestElements } from './minimum-average-of-smallest-and-largest-elements';
import { problem as countTestedDevicesAfterTestRuns } from './count-tested-devices-after-test-runs';
import { problem as numberOfSubarraysWithGcdEqualToK } from './number-of-subarrays-with-gcd-equal-to-k';
import { problem as findSubsequenceOfLengthKWithLargestSum } from './find-subsequence-of-length-k-with-largest-sum';
import { problem as minimumAbsoluteSumDifference } from './minimum-absolute-sum-difference';
import { problem as findTheKBeautyOfANumber } from './find-the-k-beauty-of-a-number';
import { problem as firstUniqueCharacterInString } from './first-unique-character-in-string';
import { problem as longPressedName } from './long-pressed-name';
import { problem as removeOutermostParentheses } from './remove-outermost-parentheses';
import { problem as maximumNestingDepthOfParentheses } from './maximum-nesting-depth-of-parentheses';
import { problem as nextGreaterElementI } from './next-greater-element-i';
import { problem as findAndReplacePattern } from './find-and-replace-pattern';
import { problem as largest3SameDigitNumberInString } from './largest-3-same-digit-number-in-string';
import { problem as countNumberOfConsistentStrings } from './count-number-of-consistent-strings';
import { problem as makeTheStringGreat } from './make-the-string-great';
import { problem as findTargetIndicesAfterSortingArray } from './find-target-indices-after-sorting-array';
import { problem as numberOfEmployeesWhoMetTheTarget } from './number-of-employees-who-met-the-target';
import { problem as intersectionOfTwoArraysIi } from './intersection-of-two-arrays-ii';
import { problem as largestSubarrayLengthK } from './largest-subarray-length-k';
import { problem as minimumTimeToTypeWord } from './minimum-time-to-type-word-using-typewriter';
import { problem as checkIfOneStringSwapCanMakeStringsEqual } from './check-if-one-string-swap-can-make-strings-equal';
import { problem as numberOfDifferentIntegersInString } from './number-of-different-integers-in-string';
import { problem as checkIfArrayIsGood } from './check-if-array-is-good';
import { problem as countTheDigitsThatDivideTheNumber } from './count-the-digits-that-divide-the-number';
import { problem as findTheDifferenceOfTwoArrays } from './find-the-difference-of-two-arrays';
import { problem as longestContinuousIncreasingSubsequence } from './longest-continuous-increasing-subsequence';
import { problem as findNumbersWithEvenNumberOfDigits } from './find-numbers-with-even-number-of-digits';
import { problem as countNicePairsInAnArray } from './count-nice-pairs-in-an-array';
import { problem as checkIfStringIsPrefixOfArray } from './check-if-string-is-prefix-of-array';
import { problem as removeTrailingZerosFromString } from './remove-trailing-zeros-from-string';
import { problem as rearrangeSpacesBetweenWords } from './rearrange-spaces-between-words';
import { problem as splitAStringInBalancedStrings } from './split-a-string-in-balanced-strings';
import { problem as findGreatestCommonDivisorOfArray } from './find-greatest-common-divisor-of-array';
import { problem as removeAllAdjacentDuplicatesInString } from './remove-all-adjacent-duplicates-in-string';
import { problem as semiOrderedPermutation } from './semi-ordered-permutation';
import { problem as calculateDelayedArrivalTime } from './calculate-delayed-arrival-time';
import { problem as checkIfNumbersAreAscendingInSentence } from './check-if-numbers-are-ascending-in-sentence';
import { problem as findXorBeautyOfArray } from './find-xor-beauty-of-array';
import { problem as numberOfWordsThatCanBeTyped } from './number-of-words-that-can-be-typed';
import { problem as numberOfCommonFactors } from './number-of-common-factors';
import { problem as sumOfAllOddLengthSubarrays } from './sum-of-all-odd-length-subarrays';
import { problem as countOfIntegersWithOddDigitSum } from './count-of-integers-with-odd-digit-sum';
import { problem as replaceAllDigitsWithCharacters } from './replace-all-digits-with-characters';
import { problem as minimumMovesToConvertString } from './minimum-moves-to-convert-string';
import { problem as minimumRecolorsToGetKConsecutiveBlackBlocks } from './minimum-recolors-to-get-k-consecutive-black-blocks';
import { problem as convertTheTemperature } from './convert-the-temperature';
import { problem as sortingTheSentence } from './sorting-the-sentence';
import { problem as findTheMaximumDivisibilityScore } from './find-the-maximum-divisibility-score';
import { problem as minimumAmountOfTimeToFillCups } from './minimum-amount-of-time-to-fill-cups';
import { problem as appendCharactersToStringToMakeSubsequence } from './append-characters-to-string-to-make-subsequence';
import { problem as countTotalNumberOfColoredCells } from './count-total-number-of-colored-cells';
import { problem as differenceBetweenElementSumAndDigitSumOfArray } from './difference-between-element-sum-and-digit-sum-of-array';
import { problem as minimumLengthOfStringAfterDeletingSimilarEnds } from './minimum-length-of-string-after-deleting-similar-ends';
import { problem as maximumNumberOfVowelsInSubstringOfGivenLength } from './maximum-number-of-vowels-in-substring-of-given-length';
import { problem as categorizeBoxAccordingToCriteria } from './categorize-box-according-to-criteria';
import { problem as findTheMiddleIndexInArray } from './find-the-middle-index-in-array';
import { problem as maximumAbsoluteSumOfAnySubarray } from './maximum-absolute-sum-of-any-subarray';
import { problem as countSubstringsWithOnlyOneDistinctLetter } from './count-substrings-with-only-one-distinct-letter';
import { problem as sumOfNumberAndItsReverse } from './sum-of-number-and-its-reverse';
import { problem as sumOfAbsoluteDifferencesInSortedArray } from './sum-of-absolute-differences-in-sorted-array';
import { problem as numberOfSubarraysWithOddSum } from './number-of-subarrays-with-odd-sum';
import { problem as numberOfPeopleAwareOfSecret } from './number-of-people-aware-of-secret';
import { problem as validWordAbbreviation } from './valid-word-abbreviation';
import { problem as numberOfValidWordsInSentence } from './number-of-valid-words-in-sentence';
import { problem as isSubsequence } from './is-subsequence';
import { problem as findTheLongestBalancedSubstringOfBinaryString } from './find-the-longest-balanced-substring-of-binary-string';
import { problem as countNumberOfDistinctIntegersAfterReverseOperations } from './count-number-of-distinct-integers-after-reverse-operations';
import { problem as mostFrequentNumberFollowingKey } from './most-frequent-number-following-key';
import { problem as minimumDifferenceBetweenHighestAndLowestOfKScores } from './minimum-difference-between-highest-and-lowest-of-k-scores';
import { problem as findTheArrayConcVal } from './find-the-array-concat-val';
import { problem as sortArrayByIncreasingFrequency } from './sort-array-by-increasing-frequency';
import { problem as findAllKDistantIndices } from './find-all-k-distant-indices';
import { problem as numberOfBeautifulPairs } from './number-of-beautiful-pairs';
import { problem as splitStringBySeparator } from './split-string-by-separator';
import { problem as countVowelStringsInRanges } from './count-vowel-strings-in-ranges';
import { problem as numberOfEvenOddBits } from './number-of-even-odd-bits';
import { problem as averageValueOfEvenNumbersDivisibleByThree } from './average-value-of-even-numbers-divisible-by-three';
import { problem as countPrefixSuffixPairs } from './count-prefix-suffix-pairs';
import { problem as minimumCostOfBuyingCandiesWithDiscount } from './minimum-cost-of-buying-candies-with-discount';
import { problem as findOriginalArrayFromPrefixXor } from './find-original-array-from-prefix-xor';
import { problem as totalDistanceTraveled } from './total-distance-traveled';
import { problem as deleteCharactersToMakeFancyString } from './delete-characters-to-make-fancy-string';
import { problem as threeConsecutiveOdds } from './three-consecutive-odds';
import { problem as countEqualAndDivisiblePairsInArray } from './count-equal-and-divisible-pairs-in-array';
import { problem as minimumChangesToMakeAlternatingBinaryString } from './minimum-changes-to-make-alternating-binary-string';
import { problem as rotateFunction } from './rotate-function';
import { problem as maximumSumOfDistinctSubarraysWithLengthK } from './maximum-sum-of-distinct-subarrays-with-length-k';
import { problem as findTheSumOfEncryptedIntegers } from './find-the-sum-of-encrypted-integers';
import { problem as maximumNumberOfWeeksForWhichYouCanWork } from './maximum-number-of-weeks-for-which-you-can-work';
import { problem as countCompleteSubarraysInAnArray } from './count-complete-subarrays-in-an-array';
import { problem as countSubarraysWhereMaxElementAppearsAtLeastKTimes } from './count-subarrays-where-max-element-appears-at-least-k-times';
import { problem as minimumIndexOfAValidSplit } from './minimum-index-of-a-valid-split';
import { problem as lastMomentBeforeAntsFallOffAPlank } from './last-moment-before-ants-fall-off-a-plank';
import { problem as checkIfTwoChessboardSquaresHaveSameColor } from './check-if-two-chessboard-squares-have-same-color';
import { problem as countNumberOfTeams } from './count-number-of-teams';
import { problem as removeColoredPiecesIfBothNeighborsAreSameColor } from './remove-colored-pieces-if-both-neighbors-are-same-color';
import { problem as longestAlternatingSubarray } from './longest-alternating-subarray';
import { problem as divisibleAndNonDivisibleSumsDifference } from './divisible-and-non-divisible-sums-difference';
import { problem as minimumElementAfterReplacementWithDigitSum } from './minimum-element-after-replacement-with-digit-sum';
import { problem as pickGifts } from './pick-gifts';
import { problem as minimumOperationsToMakeArrayXorEqualToK } from './minimum-operations-to-make-array-xor-equal-to-k';
import { problem as maximumCountOfPositiveIntegerAndNegativeInteger } from './maximum-count-of-positive-integer-and-negative-integer';
import { problem as numberOfStudentsDoingHomeworkAtAGivenTime } from './number-of-students-doing-homework-at-a-given-time';
import { problem as findTheXorOfNumbersWhichAppearTwice } from './find-the-xor-of-numbers-which-appear-twice';
import { problem as minimumSumMountainTripletII } from './minimum-sum-mountain-triplet-ii';
import { problem as minimumOperationsToExceedThresholdValueI } from './minimum-operations-to-exceed-threshold-value-i';
import { problem as maximumSubarray } from './maximum-subarray';
import { problem as meetingRooms } from './meeting-rooms';
import { problem as brickWall } from './brick-wall';
import { problem as numberOfLongestIncreasingSubsequence } from './number-of-longest-increasing-subsequence';
import { problem as kthSmallestElementInSortedMatrix } from './kth-smallest-element-in-sorted-matrix';
import { problem as minimumKnightMoves } from './minimum-knight-moves';
import { problem as palindromePairs } from './palindrome-pairs';
import { problem as searchSuggestionsSystem } from './search-suggestions-system';
import { problem as arrayNesting } from './array-nesting';
import { problem as evaluateDivision } from './evaluate-division';
import { problem as outOfBoundaryPaths } from './out-of-boundary-paths';
import { problem as maximumIceCreamBars } from './maximum-ice-cream-bars';
import { problem as countNumbersWithUniqueDigits } from './count-numbers-with-unique-digits';
import { problem as minimumCostToCutStick } from './minimum-cost-to-cut-stick';
import { problem as findMinimumRotatedSortedArrayII } from './find-minimum-in-rotated-sorted-array-ii';
import { problem as searchRotatedSortedArrayII } from './search-in-rotated-sorted-array-ii';
import { problem as distinctSubsequences } from './distinct-subsequences';
import { problem as minimumWindowSubsequence } from './minimum-window-subsequence';
import { problem as reconstructItinerary } from './reconstruct-itinerary';
import { problem as partitionKEqualSubsetSum } from './partition-k-equal-subset-sum';
import { problem as paintHouse } from './paint-house';
import { problem as addStrings } from './add-strings';
import { problem as palindromePartitioningII } from './palindrome-partitioning-ii';
import { problem as wiggleSortII } from './wiggle-sort-ii';
import { problem as stoneGameIV } from './stone-game-iv';
import { problem as minimumRefuelingStops } from './minimum-refueling-stops';
import { problem as snapshotArray } from './snapshot-array';
import { problem as paintHouseII } from './paint-house-ii';
import { problem as minimumMovesEqualArrayII } from './minimum-moves-equal-array-ii';
import { problem as frogJump } from './frog-jump';
import { problem as kInversePairsArray } from './k-inverse-pairs-array';
import { problem as minimumCostHireKWorkers } from './minimum-cost-to-hire-k-workers';
import { problem as randomPickWithWeight } from './random-pick-with-weight';
import { problem as findInMountainArray } from './find-in-mountain-array';
import { problem as findDuplicateNumberII } from './find-duplicate-number-ii';
import { problem as basicCalculatorII } from './basic-calculator-ii';
import { problem as maximumBinaryTree } from './maximum-binary-tree';
import { problem as nextGreaterElementIII } from './next-greater-element-iii';
import { problem as numberOfDigitOne } from './number-of-digit-one';
import { problem as movingAverageFromDataStream } from './moving-average-from-data-stream';
import { problem as designAddAndSearchWords } from './design-add-and-search-words';
import { problem as serializeDeserializeBST } from './serialize-deserialize-bst';
import { problem as designCircularQueue } from './design-circular-queue';
import { problem as bestMeetingPoint } from './best-meeting-point';
import { problem as longestSubarrayOnesAfterDelete } from './longest-subarray-ones-after-delete';
import { problem as reversePairs } from './reverse-pairs';
import { problem as minimumCostCutCake } from './minimum-cost-cut-cake';
import { problem as spiralMatrixIII } from './spiral-matrix-iii';
import { problem as textJustification } from './text-justification';
import { problem as minimumOperationsMakeArrayContinuous } from './minimum-operations-make-array-continuous';
import { problem as arithmeticSubarrays } from './arithmetic-subarrays';
import { problem as minimumScorePath } from './minimum-score-path';
import { problem as maximumPointsFromCards } from './maximum-points-from-cards';
import { problem as minimumAsciiDeleteSum } from './minimum-ascii-delete-sum';
import { problem as sumOfDistancesInTree } from './sum-of-distances-in-tree';
import { problem as couplesHoldingHands } from './couples-holding-hands';
import { problem as fallingSquares } from './falling-squares';
import { problem as constrainedSubsequenceSum } from './constrained-subsequence-sum';
import { problem as pseudoPalindromicPaths } from './pseudo-palindromic-paths';
import { problem as numberOfNodesSameLabel } from './number-of-nodes-same-label';
import { problem as minimumCostTreeLeafValues } from './minimum-cost-tree-leaf-values';
import { problem as validPartitionArray } from './valid-partition-array';
import { problem as paintFence } from './paint-fence';
import { problem as minimumInsertionStepsPalindrome } from './minimum-insertion-steps-palindrome';
import { problem as longestSubarrayAbsDiffLimit } from './longest-subarray-abs-diff-limit';
import { problem as maximumSumTwoNonOverlappingSubarrays } from './maximum-sum-two-non-overlapping-subarrays';
import { problem as numberOfClosedIslands } from './number-of-closed-islands';
import { problem as destinationCity } from './destination-city';
import { problem as findWinnerTictactoe } from './find-winner-tictactoe';
import { problem as maximumEatenApples } from './maximum-eaten-apples';
import { problem as splitArrayFibonacci } from './split-array-fibonacci';
import { problem as maximumScorePerformingMultiplication } from './maximum-score-performing-multiplication';
import { problem as cherryPickup } from './cherry-pickup';
import { problem as countWaysBuildGoodString } from './count-ways-build-good-string';
import { problem as profitableSchemes } from './profitable-schemes';
import { problem as countSquareSubmatrices } from './count-square-submatrices';
import { problem as freedomTrail } from './freedom-trail';
import { problem as guessNumberHigherOrLowerII } from './guess-number-higher-or-lower-ii';
import { problem as removePalindromicSubsequences } from './remove-palindromic-subsequences';
import { problem as checkArrayFormation } from './check-array-formation';
import { problem as minimumFallingPathSumII } from './minimum-falling-path-sum-ii';
import { problem as scrambleString } from './scramble-string';
import { problem as predictTheWinner } from './predict-the-winner';
import { problem as russianDollEnvelopes } from './russian-doll-envelopes';
import { problem as binaryTreeCameras } from './binary-tree-cameras';
import { problem as linkedListCycleII } from './linked-list-cycle-ii';
import { problem as addTwoNumbersII } from './add-two-numbers-ii';
import { problem as maximumPerformanceOfTeam } from './maximum-performance-of-a-team';
import { problem as minimumIntervalToIncludeEachQuery } from './minimum-interval-to-include-each-query';
import { problem as minimumNumberOfTapsToWaterAGarden } from './minimum-number-of-taps-to-open-to-water-a-garden';
import { problem as onlineElection } from './online-election';
import { problem as countOfRangeSum } from './count-of-range-sum';
import { problem as designLinkedList } from './design-linked-list';
import { problem as maximumProductSubarray } from './maximum-product-subarray';
import { problem as deleteAndEarn } from './delete-and-earn';
import { problem as minimumTimeCollectApples } from './minimum-time-collect-apples';
import { problem as xorQueriesOfSubarray } from './xor-queries-of-subarray';
import { problem as sequentialDigits } from './sequential-digits';
import { problem as countSubIslands } from './count-sub-islands';
import { problem as maximumProfitAssignment } from './maximum-profit-assignment';
import { problem as longestPalindromicSubstring } from './longest-palindromic-substring';
import { problem as maxProductWordLengths } from './max-product-word-lengths';
import { problem as slidingWindowMedian } from './sliding-window-median';
import { problem as minimumDifficultyJobSchedule } from './minimum-difficulty-of-job-schedule';
import { problem as tallestBillboard } from './tallest-billboard';
import { problem as concatenatedWords } from './concatenated-words';
import { problem as maxValueOfEquation } from './max-value-of-equation';
import { problem as numberOfMusicPlaylists } from './number-of-music-playlists';
import { problem as minimumRemovals } from './minimum-number-of-removals-to-make-mountain-array';
import { problem as countDifferentPalindromicSubsequences } from './count-different-palindromic-subsequences';
import { problem as paintingTheWalls } from './painting-the-walls';
import { problem as shortestPathAllKeys } from './shortest-path-to-get-all-keys';
import { problem as stoneGameV } from './stone-game-v';
import { problem as maximumSumThreeNonOverlappingSubarrays } from './maximum-sum-three-non-overlapping-subarrays';
import { problem as minimumCostToMergeStones } from './minimum-cost-to-merge-stones';
import { problem as palindromePartitioningIii } from './palindrome-partitioning-iii';
import { problem as maximumHeightByStackingCuboids } from './maximum-height-by-stacking-cuboids';
import { problem as minimumDaysToEatOranges } from './minimum-number-of-days-to-eat-n-oranges';
import { problem as bestTeamWithNoConflicts } from './best-team-with-no-conflicts';
import { problem as numberOfWaysToFormTarget } from './number-of-ways-to-form-target-given-dictionary';
import { problem as minimumXorSumOfTwoArrays } from './minimum-xor-sum-of-two-arrays';
import { problem as numberOfWaysToRearrangeSticksWithKSticksVisible } from './number-of-ways-to-rearrange-sticks-with-k-sticks-visible';
import { problem as numberOfWaysToStayInSamePlaceAfterSomeSteps } from './number-of-ways-to-stay-in-same-place-after-some-steps';
import { problem as minimumScoreTriangulationOfPolygon } from './minimum-score-triangulation-of-polygon';
import { problem as minimumCostToMakeArrayEqual } from './minimum-cost-to-make-array-equal';
import { problem as maximumNumberOfAchievableTransferRequests } from './maximum-number-of-achievable-transfer-requests';
import { problem as maximumEleganceOfKLengthSubsequence } from './maximum-elegance-of-k-length-subsequence';
import { problem as minimumTotalDistanceTraveled } from './minimum-total-distance-traveled';
import { problem as minimumIncompatibility } from './minimum-incompatibility';
import { problem as fairDistributionOfCookies } from './fair-distribution-of-cookies';
import { problem as maximumProfitInJobScheduling } from './maximum-profit-in-job-scheduling';
import { problem as dota2Senate } from './dota2-senate';
import { problem as timeNeededToInformAllEmployees } from './time-needed-to-inform-all-employees';
import { problem as minesweeper } from './minesweeper';
import { problem as minimumScoreTriangulation } from './minimum-score-triangulation';
import { problem as scoreAfterFlippingMatrix } from './score-after-flipping-matrix';
import { problem as beautifulArray } from './beautiful-array';
import { problem as recoverBinarySearchTree } from './recover-binary-search-tree';
import { problem as findDuplicateSubtrees } from './find-duplicate-subtrees';
import { problem as allPossibleFullBinaryTrees } from './all-possible-full-binary-trees';
import { problem as cherryPickupII } from './cherry-pickup-ii';
import { problem as detonateMaximumBombs } from './detonate-maximum-bombs';
import { problem as stoneGameVII } from './stone-game-vii';
import { problem as designBrowserHistory } from './design-browser-history';
import { problem as knightDialer } from './knight-dialer';
import { problem as paintHouseIII } from './paint-house-iii';
import { problem as maximizeDistanceToClosestPerson } from './maximize-distance-to-closest-person';
import { problem as minimumNumberOfVertices } from './minimum-number-of-vertices';
import { problem as pathWithMinimumEffort } from './path-with-minimum-effort';
import { problem as pathWithMaximumProbability } from './path-with-maximum-probability';
import { problem as videoStitching } from './video-stitching';
import { problem as subarraysDivByK } from './subarray-sums-divisible-by-k';
import { problem as sumEvenAfterQueries } from './sum-of-even-numbers-after-queries';
import { problem as averageWaitingTime } from './average-waiting-time';
import { problem as sortAnArray } from './sort-an-array';
import { problem as slidingPuzzle } from './sliding-puzzle';
import { problem as knightProbabilityInChessboard } from './knight-probability-in-chessboard';
import { problem as minimumDistanceBstNodes } from './minimum-distance-bst-nodes';
import { problem as secondMinimumNodeBinaryTree } from './second-minimum-node-binary-tree';
import { problem as meetingRoomsIII } from './meeting-rooms-iii';
import { problem as minimumObstacleRemovalToReachCorner } from './minimum-obstacle-removal-to-reach-corner';
import { problem as maxSumOfRectangleNoLargerThanK } from './max-sum-of-rectangle-no-larger-than-k';
import { problem as countUniqueCharactersOfAllSubstrings } from './count-unique-characters-of-all-substrings';
import { problem as zumaGame } from './zuma-game';
import { problem as findLongestValidObstacleCourse } from './find-longest-valid-obstacle-course';
import { problem as bestSightseeingPair } from './best-sightseeing-pair';
import { problem as findLongestSubstringVowelsEven } from './find-longest-substring-vowels-even';
import { problem as reverseSubstringsBetweenParentheses } from './reverse-substrings-between-parentheses';
import { problem as designStackWithIncrement } from './design-stack-with-increment';
import { problem as minimumNumberOfFrogsCroaking } from './minimum-number-of-frogs-croaking';
import { problem as shortestPathVisitingAllNodes } from './shortest-path-visiting-all-nodes';
import { problem as minimumNumberOfWorkSessions } from './minimum-number-of-work-sessions';
import { problem as minimizeProductSum } from './minimize-product-sum';
import { problem as countRangeSum } from './count-range-sum';
import { problem as allPathsFromSourceLeadToDestination } from './all-paths-from-source-lead-to-destination';
import { problem as jumpGameV } from './jump-game-v';
import { problem as wordSubsets } from './word-subsets';
import { problem as maxChunksToMakeSortedII } from './max-chunks-to-make-sorted-ii';
import { problem as countWaysToPlaceHouses } from './count-ways-to-place-houses';
import { problem as stoneGameVIII } from './stone-game-viii';
import { problem as stoneGameIX } from './stone-game-ix';
import { problem as maximumScoreRemovingStones } from './maximum-score-removing-stones';
import { problem as numberOfAtoms } from './number-of-atoms';
import { problem as findAllPeopleWithSecret } from './find-all-people-with-secret';
import { problem as platesBetweenCandles } from './plates-between-candles';
import { problem as minimumCostToMakeAllCharactersEqual } from './minimum-cost-to-make-all-characters-equal';
import { problem as maximumConsecutiveFloorsWithoutSpecialFloors } from './maximum-consecutive-floors-without-special-floors';
import { problem as minimumMovesToReachTargetScore } from './minimum-moves-to-reach-target-score';
import { problem as maximumSegmentSumAfterRemovals } from './maximum-segment-sum-after-removals';
import { problem as primePalindrome } from './prime-palindrome';
import { problem as carFleetII } from './car-fleet-ii';
import { problem as advantageShuffle } from './advantage-shuffle';
import { problem as longestRepeatingCharacterReplacement } from './longest-repeating-character-replacement';
import { problem as subarraysWithKDifferentIntegers } from './subarrays-with-k-different-integers';
import { problem as binarySubarraysWithSum } from './binary-subarrays-with-sum';
import { problem as reduceArraySizeToTheHalf } from './reduce-array-size-to-the-half';
import { problem as numberOfWaysToDivideALongCorridor } from './number-of-ways-to-divide-a-long-corridor';
import { problem as deleteOperationForTwoStrings } from './delete-operation-for-two-strings';
import { problem as productOfArrayExceptSelf } from './product-of-array-except-self';
import { problem as minimumMovesToEqualArrayElements } from './minimum-moves-to-equal-array-elements';
import { problem as smallestDivisorGivenThreshold } from './smallest-divisor-given-threshold';
import { problem as additiveNumber } from './additive-number';
import { problem as uniquePathsIii } from './unique-paths-iii';
import { problem as raceCar } from './race-car';
import { problem as minimumCostToMakeValidParentheses } from './minimum-cost-to-make-valid-parentheses';
import { problem as minimumScoreOfPath } from './minimum-score-of-path';
import { problem as countOperationsToObtainZeroIi } from './count-operations-to-obtain-zero-ii';
import { problem as minimumDeletionsToBalanceParentheses } from './minimum-deletions-to-balance-parentheses';
import { problem as minimumPathCostInAGrid } from './minimum-path-cost-in-a-grid';
import { problem as countWaysGroupOverlappingRanges } from './count-ways-group-overlapping-ranges';
import { problem as takeGiftsFromTheRichestPile } from './take-gifts-from-the-richest-pile';
import { problem as findAllGoodIndices } from './find-all-good-indices';
import { problem as partitionArrayIntoThreePartsWithEqualSum } from './partition-array-into-three-parts-with-equal-sum';
import { problem as secondLargestDigitInString } from './second-largest-digit-in-string';
import { problem as numberOfOperationsToMakeNetworkConnected } from './number-of-operations-to-make-network-connected';
import { problem as maximizeNumberOfTasksYouCanAssign } from './maximize-number-of-tasks-you-can-assign';
import { problem as minimumConsecutiveCardsToPick } from './minimum-consecutive-cards-to-pick-up';
import { problem as lexicographicallySmallestPalindrome } from './lexicographically-smallest-palindrome';
import { problem as minimumOperationsBinaryArrayEqualToOneII } from './minimum-operations-to-make-binary-array-elements-equal-to-one-ii';
import { problem as closestPrimeNumbersInRange } from './closest-prime-numbers-in-range';
import { problem as sumOfSubarrayMinimums } from './sum-of-subarray-minimums';
import { problem as maximumXorForEachQuery } from './maximum-xor-for-each-query';
import { problem as countWaysToSplitArray } from './count-ways-to-split-array';
import { problem as maximumSubarraySumWithOneDeletion } from './maximum-subarray-sum-with-one-deletion';
import { problem as numberOfSubArraysSizeKAverageThreshold } from './number-of-sub-arrays-size-k-average-threshold';
import { problem as grumpyBookstoreOwner } from './grumpy-bookstore-owner';
import { problem as mostStonesRemovedWithSameRowOrColumn } from './most-stones-removed-with-same-row-or-column';
import { problem as longestSubsequenceWithLimitedSum } from './longest-subsequence-with-limited-sum';
import { problem as minimumNumberOfArrowsToBurstBalloons } from './minimum-number-of-arrows-to-burst-balloons';
import { problem as findLargestValueEachTreeRow } from './find-largest-value-each-tree-row';
import { problem as findBottomLeftTreeValue } from './find-bottom-left-tree-value';
import { problem as mostStonesRemovedSameRowOrColumn } from './most-stones-removed-same-row-or-column';
import { problem as countUnreachablePairsOfNodes } from './count-unreachable-pairs-of-nodes';
import { problem as myCalendarI } from './my-calendar-i';
import { problem as findPlayersWithZeroOrOneLosses } from './find-players-with-zero-or-one-losses';
import { problem as countUnreachablePairsAfterRemovingVertices } from './count-unreachable-pairs-after-removing-vertices';
import { problem as maximumValueAtGivenIndexInBoundedArray } from './maximum-value-at-given-index-in-bounded-array';
import { problem as wallsAndGates } from './walls-and-gates';
import { problem as makingALargeIsland } from './making-a-large-island';
import { problem as increasingOrderSearchTree } from './increasing-order-search-tree';
import { problem as nextGreaterNodeInLinkedList } from './next-greater-node-in-linked-list';
import { problem as longestCycleInGraph } from './longest-cycle-in-graph';
import { problem as maximumSubarrayMinProduct } from './maximum-subarray-min-product';
import { problem as stepsToMakeArrayNondecreasing } from './steps-to-make-array-nondecreasing';
import { problem as countSubstringsDifferByOne } from './count-substrings-that-differ-by-one-character';
import { problem as minimumOperationsToMoveBalls } from './minimum-operations-to-move-balls';
import { problem as maximumAreaOfPieceOfCake } from './maximum-area-of-piece-of-cake';
import { problem as minimumAreaRectangle } from './minimum-area-rectangle';
import { problem as minimumOperationsToHalveArraySum } from './minimum-operations-to-halve-array-sum';
import { problem as maximumBinaryStringAfterChange } from './maximum-binary-string-after-change';
import { problem as circularArrayLoop } from './circular-array-loop';
import { problem as longestArithmeticSubsequenceOfGivenDifference } from './longest-arithmetic-subsequence-of-given-difference';
import { problem as timeNeededToBuyTickets } from './time-needed-to-buy-tickets';
import { problem as numberOfSubarraysWithBoundedMaximum } from './number-of-subarrays-with-bounded-maximum';
import { problem as kthSmallestElementInBst } from './kth-smallest-element-in-bst';
import { problem as findMinimumInRotatedSortedArray } from './find-minimum-in-rotated-sorted-array';
import { problem as searchInRotatedSortedArray } from './search-in-rotated-sorted-array';
import { problem as minimumNumberOfDaysToMakeMBouquets } from './minimum-number-of-days-to-make-m-bouquets';
import { problem as splitArrayIntoConsecutiveSubsequences } from './split-array-into-consecutive-subsequences';
import { problem as restoreTheArrayFromAdjacentPairs } from './restore-the-array-from-adjacent-pairs';
import { problem as monotoneIncreasingDigits } from './monotone-increasing-digits';
import { problem as constructKPalindromeStrings } from './construct-k-palindrome-strings';
import { problem as pushDominoes } from './push-dominoes';
import { problem as largestMergeOfTwoStrings } from './largest-merge-of-two-strings';
import { problem as removeCoveredIntervals } from './remove-covered-intervals';
import { problem as minimizeArrayValue } from './minimize-array-value';
import { problem as validateIpAddress } from './validate-ip-address';
import { problem as maximumSumHourglass } from './maximum-sum-hourglass';
import { problem as reverseOddLevelsBinaryTree } from './reverse-odd-levels-binary-tree';
import { problem as findClosestNodeToGivenTwoNodes } from './find-closest-node-to-given-two-nodes';
import { problem as numberOfFlowersInFullBloom } from './number-of-flowers-in-full-bloom';
import { problem as mostBeautifulItemForEachQuery } from './most-beautiful-item-for-each-query';
import { problem as maximumNumberOfEventsThatCanBeAttended } from './maximum-number-of-events-that-can-be-attended';
import { problem as medianOfTwoSortedArrays } from './median-of-two-sorted-arrays';
import { problem as numberOfSubsequencesThatSatisfyTheGivenSumCondition } from './number-of-subsequences-that-satisfy-the-given-sum-condition';
import { problem as removeDuplicateLetters } from './remove-duplicate-letters';
import { problem as bestTimeToBuyAndSellStockIv } from './best-time-to-buy-and-sell-stock-iv';
import { problem as shortestPathWithAlternatingColors } from './shortest-path-with-alternating-colors';
import { problem as minimumSwapsToMakeSequencesIncreasing } from './minimum-swaps-to-make-sequences-increasing';
import { problem as arrayOfDoubledPairs } from './array-of-doubled-pairs';
import { problem as countVowelPermutation } from './count-vowel-permutation';
import { problem as longestIdealSubsequence } from './longest-ideal-subsequence';
import { problem as minimumStringLengthAfterRemovingSubstrings } from './minimum-string-length-after-removing-substrings';
import { problem as totalHammingDistance } from './total-hamming-distance';
import { problem as maximumNumberOfOccurrencesOfASubstring } from './maximum-number-of-occurrences-of-a-substring';
import { problem as longestHappyPrefix } from './longest-happy-prefix';
import { problem as reducingDishes } from './reducing-dishes';
import { problem as minimumNumberOfSwapsToMakeStringBalanced } from './minimum-number-of-swaps-to-make-string-balanced';
import { problem as numberOfSubstringsContainingAllThreeCharacters } from './number-of-substrings-containing-all-three-characters';
import { problem as maximumScoreFromRemovingSubstrings } from './maximum-score-from-removing-substrings';
import { problem as minimumDeletionsToMakeStringBalanced } from './minimum-deletions-to-make-string-balanced';
import { problem as minimumDifferenceBetweenLargestAndSmallestValueInThreeMoves } from './minimum-difference-between-largest-and-smallest-value-in-three-moves';
import { problem as shortestSubarrayToBeRemovedToMakeArraySorted } from './shortest-subarray-to-be-removed-to-make-array-sorted';
import { problem as minimumHealthToBeatTheGame } from './minimum-health-to-beat-the-game';
import { problem as checkIfStringContainsAllBinaryCodesOfSizeK } from './check-if-string-contains-all-binary-codes-of-size-k';
import { problem as longestNiceSubstring } from './longest-nice-substring';
import { problem as minimumAddToMakeParenthesesValid } from './minimum-add-to-make-parentheses-valid';
import { problem as predictWinner } from './predict-winner';
import { problem as canIWin } from './can-i-win';
import { problem as optimalDivision } from './optimal-division';
import { problem as minimumInsertionsToBalanceParentheses } from './minimum-insertions-to-balance-parentheses';
import { problem as longestSubarrayOf1sAfterDeletingOneElement } from './longest-subarray-of-1s-after-deleting-one-element';
import { problem as countNumberOfNiceSubarrays } from './count-number-of-nice-subarrays';
import { problem as maximumLengthOfAConcatenatedStringWithUniqueCharacters } from './maximum-length-of-a-concatenated-string-with-unique-characters';
import { problem as nimGame } from './nim-game';
import { problem as palindromePermutation } from './palindrome-permutation';
import { problem as removeElement } from './remove-element';
import { problem as waterBottles } from './water-bottles';
import { problem as distributeCandies } from './distribute-candies';
import { problem as countPrimeSetBits } from './count-prime-set-bits';
import { problem as verifyingAlienDictionary } from './verifying-alien-dictionary';
import { problem as rectangleArea } from './rectangle-area';
import { problem as encodeDecodeStrings } from './encode-decode-strings';
import { problem as shortestDistanceToCharacter } from './shortest-distance-to-character';
import { problem as utf8Validation } from './utf-8-validation';
import { problem as rangeAddition } from './range-addition';
import { problem as countTheNumberOfFairPairs } from './count-the-number-of-fair-pairs';
import { problem as findIfArrayCanBeSorted } from './find-if-array-can-be-sorted';
import { problem as constructStringWithRepeatLimit } from './construct-string-with-repeat-limit';
import { problem as countWaysToSelectBuildings } from './count-ways-to-select-buildings';
import { problem as powerOfHeroes } from './power-of-heroes';
import { problem as numberOfWaysToArriveAtDestination } from './number-of-ways-to-arrive-at-destination';
import { problem as reorderRoutesToMakeAllPathsLeadToCityZero } from './reorder-routes-to-make-all-paths-lead-to-city-zero';
import { problem as maximumLengthOfPairChain } from './maximum-length-of-pair-chain';
import { problem as countServersThatCommunicate } from './count-servers-that-communicate';
import { problem as validPalindrome } from './valid-palindrome';
import { problem as peakIndexInMountainArray } from './peak-index-in-mountain-array';
import { problem as twoKeysKeyboard } from './two-keys-keyboard';
import { problem as bagOfTokens } from './bag-of-tokens';
import { problem as findTheKWeakestRowsInAMatrix } from './find-the-k-weakest-rows-in-a-matrix';
import { problem as separateBlackAndWhiteBalls } from './separate-black-and-white-balls';
import { problem as minimumNumberOfStepsToMakeTwoStringsAnagram } from './minimum-number-of-steps-to-make-two-strings-anagram';
import { problem as findThePrefixCommonArrayOfTwoArrays } from './find-the-prefix-common-array-of-two-arrays';
import { problem as lastStoneWeightII } from './last-stone-weight-ii';
import { problem as divideTwoIntegers } from './divide-two-integers';
import { problem as longestHarmoniousSubsequence } from './longest-harmonious-subsequence';
import { problem as buddyStrings } from './buddy-strings';
import { problem as beautifulSubsets } from './beautiful-subsets';
import { problem as myCalendarIi } from './my-calendar-ii';
import { problem as taskSchedulerIi } from './task-scheduler-ii';
import { problem as swappingNodesInALinkedList } from './swapping-nodes-in-a-linked-list';
import { problem as movePiecesToObtainAString } from './move-pieces-to-obtain-a-string';
import { problem as greatestCommonDivisorOfStrings } from './greatest-common-divisor-of-strings';
import { problem as maximumDistanceInArrays } from './maximum-distance-in-arrays';
import { problem as pathWithMaximumGold } from './path-with-maximum-gold';
import { problem as convertSortedArrayToBST } from './convert-sorted-array-to-bst';
import { problem as trimABinarySearchTree } from './trim-a-binary-search-tree';
import { problem as findingUsersActiveMinutes } from './finding-users-active-minutes';
import { problem as dayOfTheYear } from './day-of-the-year';
import { problem as typeOfTriangle } from './type-of-triangle';
import { problem as maximumEnemyForts } from './maximum-enemy-forts-that-can-be-captured';
import { problem as minimumAmountTimeToCollectGarbage } from './minimum-amount-of-time-to-collect-garbage';
import { problem as checkIfArraySortedAndRotated } from './check-if-array-is-sorted-and-rotated';
import { problem as nodesBetweenCriticalPoints } from './nodes-between-critical-points';
import { problem as numberAfterDoubleReversal } from './number-after-a-double-reversal';
import { problem as dominoAndTrominoTiling } from './domino-and-tromino-tiling';
import { problem as numberOfLinesToWriteString } from './number-of-lines-to-write-string';
import { problem as findTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints } from './find-the-minimum-and-maximum-number-of-nodes-between-critical-points';
import { problem as binaryTreeInorderTraversal } from './binary-tree-inorder-traversal';
import { problem as binaryTreePreorderTraversal } from './binary-tree-preorder-traversal';
import { problem as binaryTreePostorderTraversal } from './binary-tree-postorder-traversal';
import { problem as minimumHoursOfTraining } from './minimum-hours-of-training';
import { problem as largestNumberAfterDigitSwapsByParity } from './largest-number-after-digit-swaps-by-parity';
import { problem as numberOfPairsOfStringsWithConcatenationEqualToTarget } from './number-of-pairs-of-strings-with-concatenation-equal-to-target';
import { problem as sumOfBeautyOfAllSubstrings } from './sum-of-beauty-of-all-substrings';
import { problem as maximumNumberOfWordsYouCanType } from './maximum-number-of-words-you-can-type';
import { problem as uglyNumber } from './ugly-number';
import { problem as lemonadeChange } from './lemonade-change';
import { problem as mostFrequentSubtreeSum } from './most-frequent-subtree-sum';
import { problem as implementStackUsingQueues } from './implement-stack-using-queues';
import { problem as sumOfNodesWithEvenValuedGrandparent } from './sum-of-nodes-with-even-valued-grandparent';
import { problem as flipEquivalentBinaryTrees } from './flip-equivalent-binary-trees';
import { problem as countVowelSubstringsOfAString } from './count-vowel-substrings-of-a-string';
import { problem as numberOfRectanglesThatCanFormTheLargestSquare } from './number-of-rectangles-that-can-form-the-largest-square';
import { problem as determineIfStringHalvesAreAlike } from './determine-if-string-halves-are-alike';
import { problem as divideAStringIntoGroupsOfSizeK } from './divide-a-string-into-groups-of-size-k';
import { problem as countIntegersWithEvenDigitSum } from './count-integers-with-even-digit-sum';
import { problem as designHashset } from './design-hashset';
import { problem as designParkingSystem } from './design-parking-system';
import { problem as defuseTheBomb } from './defuse-the-bomb';
import { problem as checkIfSentenceIsPangram } from './check-if-sentence-is-pangram';
import { problem as findTheStudentThatWillReplaceTheChalk } from './find-the-student-that-will-replace-the-chalk';
import { problem as greatestEnglishLetterInUpperAndLowerCase } from './greatest-english-letter-in-upper-and-lower-case';
import { problem as reformatTheString } from './reformat-the-string';
import { problem as findNUniqueIntegersSumUpToZero } from './find-n-unique-integers-sum-up-to-zero';
import { problem as checkArrayFormationThroughConcatenation } from './check-array-formation-through-concatenation';
import { problem as minimizeStringLength } from './minimize-string-length';
import { problem as findScoreOfArrayAfterMarkingElements } from './find-score-of-array-after-marking-elements';
import { problem as elementsAppearingMoreThan25Percent } from './elements-appearing-more-than-25-percent';
import { problem as makeStringASubsequenceUsingCyclicIncrements } from './make-string-a-subsequence-using-cyclic-increments';
import { problem as numberOfBeautifulIntegersInRange } from './number-of-beautiful-integers-in-range';
import { problem as maximumDepthBinaryTreeNew } from './maximum-depth-binary-tree';
import { problem as minimumAbsoluteDifferenceInBst } from './minimum-absolute-difference-in-bst';
import { problem as pascalsTriangleIi } from './pascals-triangle-ii';
import { problem as superEggDrop } from './super-egg-drop';
import { problem as maximumScoreSplicedArray } from './maximum-score-spliced-array';
import { problem as countIncreasingQuadruplets } from './count-increasing-quadruplets';
import { problem as waysToMakeFairArray } from './ways-to-make-fair-array';
import { problem as minimumInitialEnergyToFinishTasks } from './minimum-initial-energy-to-finish-tasks';
import { problem as constructTargetArrayWithMultipleSums } from './construct-target-array-with-multiple-sums';
import { problem as minimizeMaximumDifferenceOfPairs } from './minimize-maximum-difference-of-pairs';
import { problem as minimumNumberOfKeypresses } from './minimum-number-of-keypresses';
import { problem as longestSubarrayAtMostKFrequency } from './longest-subarray-at-most-k-frequency';
import { problem as minimumDeletionsToMakeStringKSpecial } from './minimum-deletions-to-make-string-k-special';
import { problem as cousinsInBinaryTree } from './cousins-in-binary-tree';
import { problem as allNodesDistanceKInBinaryTree } from './all-nodes-distance-k-in-binary-tree';
import { problem as openLock } from './open-lock';
import { problem as maximizeSumOfArrayAfterKNegations } from './maximize-sum-of-array-after-k-negations';
import { problem as removeDuplicatesFromSortedList } from './remove-duplicates-from-sorted-list';
import { problem as intersectionOfTwoArrays } from './intersection-of-two-arrays';
import { problem as climbingStairsMemo } from './climbing-stairs-memo';
import { problem as countVowelsInString } from './count-vowels-in-string';
import { problem as percentageOfLetter } from './percentage-of-letter';
import { problem as reverseWordsInString } from './reverse-words-in-string';
import { problem as dayOfTheWeek } from './day-of-the-week';
import { problem as guessNumberHigherOrLower } from './guess-number-higher-or-lower';
import { problem as largestTriangleArea } from './largest-triangle-area';
import { problem as minimumValueToGetPositiveStepSum } from './minimum-value-to-get-positive-step-sum';
import { problem as numberOfRectanglesThatCanFormLargestSquare } from './number-of-rectangles-that-can-form-largest-square';
import { problem as successfulPairsOfSpellsAndPotions } from './successful-pairs-of-spells-and-potions';
import { problem as minimumOperationsToReduceXToZero } from './minimum-operations-to-reduce-x-to-zero';
import { problem as largestSubmatrixWithRearrangements } from './largest-submatrix-with-rearrangements';
import { problem as subtreeOfAnotherTree } from './subtree-of-another-tree';
import { problem as maximumProductOfSplittedBinaryTree } from './maximum-product-of-splitted-binary-tree';
import { problem as wateringPlants } from './watering-plants';
import { problem as loggerRateLimiter } from './logger-rate-limiter';
import { problem as bstFromPreorder } from './bst-from-preorder';
import { problem as balanceABinarySearchTree } from './balance-a-binary-search-tree';
import { problem as maximumSumBstInBinaryTree } from './maximum-sum-bst-in-binary-tree';
import { problem as stockPriceFluctuation } from './stock-price-fluctuation';
import { problem as minimumReplacementsToSortArray } from './minimum-replacements-to-sort-array';
import { problem as largestColorValueInDirectedGraph } from './largest-color-value-in-directed-graph';
import { problem as stringWithoutAaaOrBbb } from './string-without-aaa-or-bbb';
import { problem as countTheHiddenSequences } from './count-the-hidden-sequences';
import { problem as myCalendarThree } from './my-calendar-iii';
import { problem as designTwitter } from './design-twitter';
import { problem as zigzagIterator } from './zigzag-iterator';
import { problem as secondMinimumTimeToReachDestination } from './second-minimum-time-to-reach-destination';
import { problem as pathSumII } from './path-sum-ii';
import { problem as constructBinaryTreeFromInorderAndPostorderTraversal } from './construct-binary-tree-from-inorder-and-postorder-traversal';
import { problem as constructBinaryTreeFromPreorderAndInorderTraversal } from './construct-binary-tree-from-preorder-and-inorder-traversal';
import { problem as maximumNumberOfRemovableCharacters } from './maximum-number-of-removable-characters';
import { problem as minimumSumOfSquaredDifference } from './minimum-sum-of-squared-difference';
import { problem as findTheKthLargestIntegerInArray } from './find-the-kth-largest-integer-in-array';
import { problem as trappingRainWaterII } from './trapping-rain-water-ii';
import { problem as minimumNumberOfPushesToTypeWordII } from './minimum-number-of-pushes-to-type-word-ii';
import { problem as maximizeWinFromTwoSegments } from './maximize-win-from-two-segments';
import { problem as minimumSwapsToGroupAllOnesTogether } from './minimum-swaps-to-group-all-ones-together-ii';
import { problem as longestUnivaluePath } from './longest-univalue-path';
import { problem as addOneRowToTree } from './add-one-row-to-tree';
import { problem as evenOddTree } from './even-odd-tree';
import { problem as sortIntegersByNumberOf1Bits } from './sort-integers-by-number-of-1-bits';
import { problem as minimumOperationsToMakeArrayEqual } from './minimum-operations-to-make-array-equal';
import { problem as convertSortedListToBinarySearchTree } from './convert-sorted-list-to-binary-search-tree';
import { problem as containsDuplicateIII } from './contains-duplicate-iii';
import { problem as makeArrayStrictlyIncreasing } from './make-array-strictly-increasing';
import { problem as encodeAndDecodeTinyurl } from './encode-and-decode-tinyurl';
import { problem as courseScheduleIV } from './course-schedule-iv';
// batch 52
import { problem as threeSumSmaller } from './three-sum-smaller';
import { problem as mostCommonWord } from './most-common-word';
import { problem as studentAttendanceRecordII } from './student-attendance-record-ii';
import { problem as permutationSequence } from './permutation-sequence';
import { problem as maximumSumObtainedOfAnyPermutation } from './maximum-sum-obtained-of-any-permutation';
import { problem as finalPricesWithASpecialDiscountInAShop } from './final-prices-with-a-special-discount-in-a-shop';
import { problem as buildingsWithAnOceanView } from './buildings-with-an-ocean-view';
import { problem as removeNodesFromLinkedList } from './remove-nodes-from-linked-list';
import { problem as findPolygonWithTheLargestPerimeter } from './find-polygon-with-the-largest-perimeter';
import { problem as minimumDeletionsToMakeCharacterFrequenciesUnique } from './minimum-deletions-to-make-character-frequencies-unique';
import { problem as matrixCellsInDistanceOrder } from './matrix-cells-in-distance-order';
import { problem as brokenCalculator } from './broken-calculator';
import { problem as countDaysWithoutMeetings } from './count-days-without-meetings';
import { problem as stringCompressionIII } from './string-compression-iii';
import { problem as strangePrinterII } from './strange-printer-ii';
import { problem as kthSmallestInSortedMatrix } from './kth-smallest-in-sorted-matrix';
import { problem as theSkylineProblem } from './the-skyline-problem';
import { problem as islandPerimeter } from './island-perimeter';
import { problem as matrixChainMultiplication } from './matrix-chain-multiplication';
import { problem as binarySearchTreeIterator } from './binary-search-tree-iterator';
import { problem as maximizeGreatnessOfAnArray } from './maximize-greatness-of-an-array';
import { problem as neighboringBitwiseXor } from './neighboring-bitwise-xor';
import { problem as minimizeXor } from './minimize-xor';
import { problem as findTheMaximumNumberOfMarkedIndices } from './find-the-maximum-number-of-marked-indices';
import { problem as minimizeMaximumOfArray } from './minimize-maximum-of-array';
import { problem as alternatingGroupsII } from './alternating-groups-ii';
import { problem as countOfConnectedComponents } from './count-of-connected-components';
import { problem as longestNonDecreasingSubarrayFromTwoArrays } from './longest-non-decreasing-subarray-from-two-arrays';
import { problem as reportSpamMessage } from './report-spam-message';
import { problem as distributeElementsIntoTwoArraysII } from './distribute-elements-into-two-arrays-ii';
import { problem as implementStrstr } from './implement-strstr';
import { problem as repeatedStringMatch } from './repeated-string-match';
import { problem as passThePillow } from './pass-the-pillow';
import { problem as numberOfChangingKeys } from './number-of-changing-keys';
import { problem as maximumRepeatingSubstring } from './maximum-repeating-substring';
import { problem as deleteGreatestValueInEachRow } from './delete-greatest-value-in-each-row';
import { problem as sortTheJumbledNumbers } from './sort-the-jumbled-numbers';
import { problem as minimumOperationsToMakeArrayAlternating } from './minimum-operations-to-make-array-alternating';
import { problem as maximumTotalImportanceOfRoads } from './maximum-total-importance-of-roads';
import { problem as smallestSubarraysWithMaximumBitwiseOr } from './smallest-subarrays-with-maximum-bitwise-or';
// batch 56
import { problem as arithmeticSlicesIISubsequence } from './arithmetic-slices-ii-subsequence';
import { problem as maxDotProductOfTwoSubsequences } from './max-dot-product-of-two-subsequences';
import { problem as numberOfSquarefulArrays } from './number-of-squareful-arrays';
import { problem as sellingPiecesOfWood } from './selling-pieces-of-wood';
import { problem as numberOfDiceRollsWithTargetSum } from './number-of-dice-rolls-with-target-sum';
// batch 58
import { problem as maximumTotalRewardUsingOperationsI } from './maximum-total-reward-using-operations-i';
import { problem as minimumArrayEnd } from './minimum-array-end';
import { problem as maximumNumberOfMovesInAGrid } from './maximum-number-of-moves-in-a-grid';
import { problem as minimumCostToConvertStringI } from './minimum-cost-to-convert-string-i';
import { problem as waysToSplitArrayIntoThreeSubarrays } from './ways-to-split-array-into-three-subarrays';
// batch 59
import { problem as nextClosestTime } from './next-closest-time';
import { problem as employeeFreeTime } from './employee-free-time';
import { problem as maximumSumOf3NonOverlappingSubarrays } from './maximum-sum-of-3-non-overlapping-subarrays';
import { problem as dominoTrominoTiling } from './domino-tromino-tiling';
import { problem as splitArrayWithSameAverage } from './split-array-with-same-average';
// batch 57
import { problem as convertBinaryLinkedList } from './convert-binary-linked-list';
import { problem as diagonalTraverseII } from './diagonal-traverse-ii';
import { problem as designCircularDeque } from './design-circular-deque';
import { problem as beautifulTowersI } from './beautiful-towers-i';
import { problem as maximumTastinessCandyBasket } from './maximum-tastiness-candy-basket';
import { problem as shortestSubarraySumAtLeastK } from './shortest-subarray-sum-at-least-k';
import { problem as substringWithConcatenationOfAllWords } from './substring-with-concatenation-of-all-words';
import { problem as minimumPeopleToTeach } from './minimum-people-to-teach';
import { problem as punishmentNumberOfInteger } from './punishment-number-of-integer';
import { problem as minimumCostToSeparateSentenceIntoRows } from './minimum-cost-to-separate-sentence-into-rows';
import { problem as maximumRunningTimeOfNComputers } from './maximum-running-time-of-n-computers';
import { problem as countStrictlyIncreasingSubarrays } from './count-strictly-increasing-subarrays';
import { problem as minimumScorePathBetweenTwoCities } from './minimum-score-path-between-two-cities';
import { problem as splitMessageBasedOnLimit } from './split-message-based-on-limit';
import { problem as longestWordInDictDeleting } from './longest-word-in-dict-deleting';
import { problem as countAllValidPickupAndDeliveryOptions } from './count-all-valid-pickup-and-delivery-options';
import { problem as maximumAverageSubarrayII } from './maximum-average-subarray-ii';
import { problem as longestEvenOddSubarrayWithThreshold } from './longest-even-odd-subarray-with-threshold';
import { problem as findTheValueOfThePartition } from './find-the-value-of-the-partition';
import { problem as clearDigits } from './clear-digits';
// batch 57 (remote)
import { problem as sumOfDigitsInBaseK } from './sum-of-digits-in-base-k';
import { problem as countSymmetricIntegers } from './count-symmetric-integers';
import { problem as minimumNumberOfPushesToTypeWordI } from './minimum-number-of-pushes-to-type-word-i';
import { problem as divideArrayIntoGroupsOfSizeK } from './divide-array-into-groups-of-size-k';
import { problem as countSubarraysOfLengthThreeWithACondition } from './count-subarrays-of-length-three-with-a-condition';
import { problem as minimumOperationsToMakeArrayDivisibleByThree } from './minimum-operations-to-make-array-divisible-by-three';
import { problem as findThePunishmentNumberOfIntegers } from './find-the-punishment-number-of-integers';
import { problem as minimumAdditionsToMakeValidString } from './minimum-additions-to-make-valid-string';
// batch 57 (local)
import { problem as minimumNumberOfMovesToSeat } from './minimum-number-of-moves-to-seat';
import { problem as numberOfSeniorCitizens } from './number-of-senior-citizens';
import { problem as maximumNumberOfGroupsWithIncreasingLength } from './maximum-number-of-groups-with-increasing-length';
import { problem as makeIntegerBeautiful } from './make-integer-beautiful';
// batch 58 (local)
import { problem as minimumTimeToBuyTickets } from './minimum-time-to-buy-tickets';
import { problem as vowelsOfAllSubstrings } from './vowels-of-all-substrings';
import { problem as removingMinimumNumberOfMagicBeans } from './removing-minimum-number-of-magic-beans';
import { problem as findTheLongestEqualSubarray } from './find-the-longest-equal-subarray';
import { problem as minimumEqualSumOfTwoArraysAfterReplacingZeros } from './minimum-equal-sum-of-two-arrays-after-replacing-zeros';
// batch 61 (local)
import { problem as checkIfEveryRowAndColumnContainsAllNumbers } from './check-if-every-row-and-column-contains-all-numbers';
import { problem as maximumStrongPairXorI } from './maximum-strong-pair-xor-i';
import { problem as extraCharactersInAString } from './extra-characters-in-a-string';
import { problem as kthLargestSumInABinaryTree } from './kth-largest-sum-in-a-binary-tree';
import { problem as sumOfMatrixAfterQueries } from './sum-of-matrix-after-queries';
// batch 67 (local)
import { problem as countSubarraysWithFixedBounds } from './count-subarrays-with-fixed-bounds';
import { problem as numberOfWaysToSelectBuildings } from './number-of-ways-to-select-buildings';
import { problem as maximumFruitsHarvestedAfterAtMostKSteps } from './maximum-fruits-harvested-after-at-most-k-steps';
import { problem as countUniqueCharsOfAllSubstrings } from './count-unique-chars-of-all-substrings';
import { problem as minimumMoneyRequiredBeforeTransactions } from './minimum-money-required-before-transactions';
// batch 66 (local)
import { problem as findIfPathExistsInGraph } from './find-if-path-exists-in-graph';
import { problem as longestSubarrayOfOnesAfterDeletingOneElement } from './longest-subarray-of-ones-after-deleting-one-element';
import { problem as checkIfArrayPairsAreDivisibleByK } from './check-if-array-pairs-are-divisible-by-k';
import { problem as maximumBeautyOfAnArrayAfterApplyingOperation } from './maximum-beauty-of-an-array-after-applying-operation';
import { problem as rearrangeCharactersToMakeTargetString } from './rearrange-characters-to-make-target-string';
// batch 65 (local)
import { problem as countPairsThatFormACompleteDayIi } from './count-pairs-that-form-a-complete-day-ii';
import { problem as kthLargestElementInAStream } from './kth-largest-element-in-a-stream';
import { problem as checkIfTheSentenceIsPangram } from './check-if-the-sentence-is-pangram';
import { problem as countNumberOfWaysToPlaceHouses } from './count-number-of-ways-to-place-houses';
import { problem as countWaysToGroupOverlappingRanges } from './count-ways-to-group-overlapping-ranges';
// batch 64 (local)
import { problem as numberOfWonderfulSubstrings } from './number-of-wonderful-substrings';
import { problem as designANumberContainerSystem } from './design-a-number-container-system';
import { problem as continuousSubarrays } from './continuous-subarrays';
import { problem as countPairsThatFormACompleteDayI } from './count-pairs-that-form-a-complete-day-i';
import { problem as substringWithLargestVariance } from './substring-with-largest-variance';
// batch 63 (local)
import { problem as twoBestNonOverlappingEvents } from './two-best-non-overlapping-events';
import { problem as minimumLinesToRepresentALineChart } from './minimum-lines-to-represent-a-line-chart';
import { problem as numberOfCommonDivisors } from './number-of-common-divisors';
import { problem as firstCompletelyPaintedRowOrColumn } from './first-completely-painted-row-or-column';
import { problem as maximumPrimeDifference } from './maximum-prime-difference';
// batch 62 (local)
import { problem as findTheMinimumNumberOfFibonacciNumbersWhoseSumIsK } from './find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k';
import { problem as countPairsOfSimilarStrings } from './count-pairs-of-similar-strings';
import { problem as numberOfBeautifulSubarrays } from './number-of-beautiful-subarrays';
import { problem as zeroArrayTransformationI } from './zero-array-transformation-i';
import { problem as maximumBuildingHeight } from './maximum-building-height';
import { problem as countNumberOfSpecialIntegers } from './count-number-of-special-integers';
import { problem as divideIntervalsIntoMinimumNumberOfGroups } from './divide-intervals-into-minimum-number-of-groups';
import { problem as minimumNumberOfMovesToMakePalindrome } from './minimum-number-of-moves-to-make-palindrome';
import { problem as nodeWithHighestEdgeScore } from './node-with-highest-edge-score';
import { problem as minimumNumberOfGroupsToCreateAValidAssignment } from './minimum-number-of-groups-to-create-a-valid-assignment';
import { problem as maximumDifferenceBetweenIncreasingElements } from './maximum-difference-between-increasing-elements';
import { problem as longestPathWithDifferentAdjacentCharacters } from './longest-path-with-different-adjacent-characters';
import { problem as incrementSubmatricesByOne } from './increment-submatrices-by-one';
// batch 59 (local)
import { problem as countSubstringsStartingAndEndingWithGivenCharacter } from './count-substrings-starting-and-ending-with-given-character';
import { problem as minimumNumberOfChangesToMakeBinaryStringBeautiful } from './minimum-number-of-changes-to-make-binary-string-beautiful';
import { problem as distributeMoneyToMaximumChildren } from './distribute-money-to-maximum-children';
import { problem as checkIfStringsCanBeMadeEqualWithOperations } from './check-if-strings-can-be-made-equal-with-operations';
import { problem as countDaysSpentTogether } from './count-days-spent-together';
// batch 60
import { problem as minimumNumberOfOperationsToMakeArrayContinuous } from './minimum-number-of-operations-to-make-array-continuous';
import { problem as pacificAtlanticWaterFlow } from './pacific-atlantic-water-flow';
import { problem as criticalConnectionsInANetwork } from './critical-connections-in-a-network';
import { problem as minimumCostToCutAStick } from './minimum-cost-to-cut-a-stick';
// batch 61
import { problem as kClosestPointsToOrigin } from './k-closest-points-to-origin';
import { problem as findAllAnagramsInAString } from './find-all-anagrams-in-a-string';
import { problem as longestPalindrome } from './longest-palindrome';
import { problem as reverseWordsInAString } from './reverse-words-in-a-string';
import { problem as countPrimes } from './count-primes';
// batch 63
import { problem as designHitCounter } from './design-hit-counter';
import { problem as removeColoredPieces } from './remove-colored-pieces';
import { problem as swapAdjacentInLrString } from './swap-adjacent-in-lr-string';
import { problem as nextGreaterElementIV } from './next-greater-element-iv';
import { problem as minimumNumberOfOperationsToMakeArraysSimilar } from './minimum-number-of-operations-to-make-arrays-similar';
// batch 66
import { problem as findAllNumbersDisappearedInArray } from './find-all-numbers-disappeared-in-array';
import { problem as kthLargestElementInArray } from './kth-largest-element-in-array';
import { problem as bestTimeToBuyAndSellStockII } from './best-time-to-buy-and-sell-stock-ii';
import { problem as countGoodNodesInBinaryTree } from './count-good-nodes-in-binary-tree';
import { problem as minimumDepthOfBinaryTree } from './minimum-depth-of-binary-tree';
// batch 62
import { problem as gridGame } from './grid-game';
import { problem as maximumNumberOfPointsWithCost } from './maximum-number-of-points-with-cost';
import { problem as findThreeConsecutiveIntegersThatSumToGivenNumber } from './find-three-consecutive-integers-that-sum-to-given-number';
import { problem as minimumSumOfFourDigitNumberAfterSplittingDigits } from './minimum-sum-of-four-digit-number-after-splitting-digits';
import { problem as kItemsWithTheMaximumSum } from './k-items-with-the-maximum-sum';

// batch 63
import { problem as numberOfIncreasingPathsInAGrid } from './number-of-increasing-paths-in-a-grid';
import { problem as minimumTimeToVisitACellInAGrid } from './minimum-time-to-visit-a-cell-in-a-grid';
import { problem as numberOfBeautifulSubsets } from './number-of-beautiful-subsets';
import { problem as maximumNumberOfFishInAGrid } from './maximum-number-of-fish-in-a-grid';

// batch 64
import { problem as minimumCostValidPathInGrid } from './minimum-cost-valid-path-in-grid';
import { problem as decreaseElementsToMakeArrayZigzag } from './decrease-elements-to-make-array-zigzag';
import { problem as maximalNetworkRank } from './maximal-network-rank';
import { problem as minimumTapsToOpenToWaterAGarden } from './minimum-taps-to-open-to-water-a-garden';
import { problem as putMarblesInBags } from './put-marbles-in-bags';

// batch 66
import { problem as soupServings } from './soup-servings';
import { problem as minimumNumberOfRabbits } from './minimum-number-of-rabbits';
import { problem as theMazeII } from './the-maze-ii';
import { problem as maximumVacationDays } from './maximum-vacation-days';
import { problem as gridIllumination } from './grid-illumination';
// batch 67
import { problem as minimumOperationsToMakeUniValueGrid } from './minimum-operations-to-make-uni-value-grid';
import { problem as minimumMovesToMakeArrayComplementary } from './minimum-moves-to-make-array-complementary';
import { problem as findWinnerOfArrayGame } from './find-winner-of-array-game';
import { problem as maximumNumberOfRobotsWithinBudget } from './maximum-number-of-robots-within-budget';
import { problem as minimumSizeOfBag } from './minimum-limit-of-balls-in-a-bag';
import { problem as maximumRowsCoveredByColumns } from './maximum-rows-covered-by-columns';
import { problem as minimumArrayLengthAfterPairRemovals } from './minimum-array-length-after-pair-removals';
import { problem as countTheNumberOfCompleteComponents } from './count-the-number-of-complete-components';
import { problem as designMemoryAllocatorProblem } from './design-memory-allocator';
import { problem as campusBikesProblem } from './campus-bikes';
import { problem as escapeTheGhosts } from './escape-the-ghosts';
import { problem as maximumValueOfKCoinsFromPiles } from './maximum-value-of-k-coins-from-piles';
import { problem as parallelCoursesIII } from './parallel-courses-iii';
// batch 69
import { problem as findScoreOfArrayAfterMarkingAllElements } from './find-score-of-an-array-after-marking-all-elements';
import { problem as countZeroRequestServers } from './count-zero-request-servers';
import { problem as maximumScoreAfterApplyingOperationsOnTree } from './maximum-score-after-applying-operations-on-a-tree';
import { problem as countingWordsWithAGivenPrefix } from './counting-words-with-a-given-prefix';
import { problem as earliestMomentEveryoneBecameFriends } from './earliest-moment-everyone-became-friends';
import { problem as minimumWeightedSubgraphWithRequiredPaths } from './minimum-weighted-subgraph-with-the-required-paths';
import { problem as longestPathInDirectedAcyclicGraph } from './longest-path-in-a-directed-acyclic-graph';
import { problem as countGoodTripletsInAnArray } from './count-good-triplets-in-an-array';
// batch 70
import { problem as checkIfItIsAGoodArray } from './check-if-it-is-a-good-array';
import { problem as maximumCoinsYouCanGet } from './maximum-coins-you-can-get';
import { problem as numberOfIslandsII } from './number-of-islands-ii';
import { problem as findTheCelebrity } from './find-the-celebrity';
import { problem as minimumNumberOfDaysToDisconnectIsland } from './minimum-number-of-days-to-disconnect-island';
// batch 71
import { problem as maximumProductOfTwoElementsInArray } from './maximum-product-of-two-elements-in-array';
import { problem as findTheHighestAltitude } from './find-the-highest-altitude';
import { problem as findTheArrayConcatenationValue } from './find-the-array-concatenation-value';
import { problem as runningSumOf1dArray } from './running-sum-of-1d-array';
import { problem as checkDistancesBetweenSameLetters } from './check-distances-between-same-letters';
import { problem as findMissingAndRepeatedValues } from './find-missing-and-repeated-values';
import { problem as findIndicesOfStableMountains } from './find-indices-of-stable-mountains';

// batch 58
import { problem as maxConsecutiveOnesII } from './max-consecutive-ones-ii';
import { problem as lengthOfLongestFibonacciSubsequence } from './length-of-longest-fibonacci-subsequence';
import { problem as detectSquares } from './detect-squares';
import { problem as maximumWhiteTilesCoveredByCarpet } from './maximum-white-tiles-covered-by-carpet';
import { problem as minimumOperationsToMakeAllArrayElementsEqual } from './minimum-operations-to-make-all-array-elements-equal';
import { problem as reverseWordsInAStringII } from './reverse-words-in-a-string-ii';
import { problem as countSubarraysWithMedian } from './count-subarrays-with-median';
import { problem as maximumSumQueries } from './maximum-sum-queries';
// batch 58 (new problems)
import { problem as findSubarraysWithEqualSum } from './find-subarrays-with-equal-sum';
import { problem as bestPokerHand } from './best-poker-hand';
import { problem as countIncremovableSubarrays } from './count-incremovable-subarrays';
import { problem as stepByStepDirections } from './step-by-step-directions';
import { problem as minimumNumberOfFoodBuckets } from './minimum-number-of-food-buckets';
import { problem as superUglyNumber } from './super-ugly-number';
import { problem as rewardTopKStudents } from './reward-top-k-students';
import { problem as countSubarraysWithScoreLessThanK } from './count-subarrays-with-score-less-than-k';
import { problem as maximumNumberOfJumpsToReachLastIndex } from './maximum-number-of-jumps-to-reach-last-index';
import { problem as minimumNumberOfCoinsForFruits } from './minimum-number-of-coins-for-fruits';
// batch 59 (new problems)
import { problem as freqStack } from './freq-stack';
import { problem as minimumCostToEqualizeArray } from './minimum-cost-to-equalize-array';
import { problem as maximumTotalDamage } from './maximum-total-damage';
import { problem as specialArrayII } from './special-array-ii';
import { problem as findMaximumLengthValidSubsequence } from './find-maximum-length-valid-subsequence';
import { problem as countSubmatricesAllOnes } from './count-submatrices-all-ones';
import { problem as minimumLengthOfStringAfterOperations } from './minimum-length-of-string-after-operations';
import { problem as countSpecialCharactersI } from './count-special-characters-i';
import { problem as maximumJumpsToReachLastIndex } from './maximum-jumps-to-reach-last-index';
import { problem as minimumOperationsToMakeArrayEqualII } from './minimum-operations-to-make-array-equal-ii';
import { problem as minimumCostForCuttingCakeI } from './minimum-cost-for-cutting-cake-i';
// batch 63 (local)
import { problem as countConsistentStrings } from './count-consistent-strings';
import { problem as maxPointsFromCards } from './max-points-you-can-obtain-from-cards';
import { problem as numStepsBinaryToOne } from './number-of-steps-to-reduce-number-in-binary-representation-to-one';
import { problem as minimizeSumTwoChanges } from './minimum-score-by-changing-two-elements';
import { problem as sqrtX } from './sqrtx';
// batch 62 (local)
import { problem as seatReservationManager } from './seat-reservation-manager';
import { problem as subarrayDivByK } from './subarray-sum-divisible-by-k';
import { problem as minimumPathCostInGrid } from './minimum-path-cost-in-grid';
import { problem as maximumDistanceBetweenAPairOfValues } from './maximum-distance-between-a-pair-of-values';

// batch 62
import { problem as groupShiftedStrings } from './group-shifted-strings';
import { problem as sparseMatrixMultiplication } from './sparse-matrix-multiplication';
import { problem as maximumDepthNAryTree } from './maximum-depth-n-ary-tree';
import { problem as nAryTreeLevelOrderTraversal } from './n-ary-tree-level-order-traversal';
import { problem as nAryTreePreorderTraversal } from './n-ary-tree-preorder-traversal';
// batch 65
import { problem as shiftTwoDGrid } from './shift-2d-grid';
import { problem as findAndReplaceInString } from './find-and-replace-in-string';
import { problem as checkWhetherTwoStringsAlmostEquivalent } from './check-whether-two-strings-are-almost-equivalent';
import { problem as minimumSwapsBinaryStringAlternating } from './minimum-number-of-swaps-to-make-the-binary-string-alternating';
import { problem as maximumNonOverlappingSubarraysTarget } from './maximum-number-of-non-overlapping-subarrays-with-sum-equals-target';
import { problem as findMinimumPossibleSumBeautifulArray } from './find-the-minimum-possible-sum-of-a-beautiful-array';
import { problem as maxStackProblem } from './max-stack';
// batch 67
import { problem as findTheKOrOfAnArray } from './find-the-k-or-of-an-array';
import { problem as minimumOperationsToSatisfyConditions } from './minimum-number-of-operations-to-satisfy-conditions';
import { problem as maximumSumAlmostUniqueSubarray } from './maximum-sum-of-almost-unique-subarray';
import { problem as splitArrayMaxSubarrays } from './split-array-into-maximum-number-of-subarrays';
import { problem as minOperationsArrayXorK } from './minimum-number-of-operations-to-make-array-xor-equal-to-k';
import { problem as maximumAlternatingSubarraySum } from './maximum-alternating-subarray-sum';
// batch 68
import { problem as countTheNumberOfGoodSubarrays } from './count-the-number-of-good-subarrays';
import { problem as maximumStrictlyIncreasingCellsInMatrix } from './maximum-strictly-increasing-cells-in-a-matrix';
import { problem as findLongestSpecialSubstringThriceI } from './find-longest-special-substring-that-occurs-thrice-i';
import { problem as minimumOperationsToMakeArrayValuesEqualToK } from './minimum-operations-to-make-array-values-equal-to-k';
// batch 69 (remote)
import { problem as mergeNodesBetweenZeros } from './merge-nodes-in-between-zeros';
import { problem as reachableNodesWithRestrictions } from './reachable-nodes-with-restrictions';
import { problem as minKConsecutiveBitFlips } from './minimum-number-of-k-consecutive-bit-flips';
import { problem as minSizeSubarrayInfiniteArray } from './minimum-size-subarray-in-infinite-array';
// batch 69 (local)
import { problem as imageSmoother } from './image-smoother';
import { problem as complexNumberMultiplication } from './complex-number-multiplication';
import { problem as numberOfBoomerangs } from './number-of-boomerangs';
import { problem as findDuplicateFileInSystem } from './find-duplicate-file-in-system';
import { problem as poorPigs } from './poor-pigs';
import { problem as strobogrammaticNumber } from './strobogrammatic-number';
import { problem as fractionAdditionAndSubtraction } from './fraction-addition-and-subtraction';
import { problem as longestZigZagPathInBinaryTree } from './longest-zigzag-path-in-binary-tree';
import { problem as findTheDuplicateSubtrees } from './find-the-duplicate-subtrees';
// batch 70
import { problem as findTheLongestBalancedSubstringOfABinaryString } from './find-the-longest-balanced-substring-of-a-binary-string';
import { problem as largestPalindromicNumber } from './largest-palindromic-number';
import { problem as countWordsObtainedAfterAddingALetter } from './count-words-obtained-after-adding-a-letter';
import { problem as minimumNumberOfFlipsBinaryStringAlternating } from './minimum-number-of-flips-to-make-binary-string-alternating';
import { problem as totalCostToHireKWorkers } from './total-cost-to-hire-k-workers';
import { problem as bestTimeToBuyAndSellStockIII } from './best-time-to-buy-and-sell-stock-iii';
import { problem as findTheDuplicateNumber } from './find-the-duplicate-number';
import { problem as maximumDifferenceInArray } from './maximum-difference-in-array';
import { problem as longestSubarrayWithAtMostKFrequency } from './longest-subarray-with-at-most-k-frequency';
import { problem as countPairsInTwoArrays } from './count-pairs-in-two-arrays';
// batch 71
import { problem as findPeakElementII } from './find-peak-element-ii';
import { problem as checkCompletenessOfBinaryTree } from './check-completeness-of-a-binary-tree';
import { problem as allAncestorsOfNodeInDag } from './all-ancestors-of-a-node-in-a-dag';
import { problem as numberOfNodesInSubtreeWithSameLabel } from './number-of-nodes-in-subtree-with-same-label';
import { problem as determineIfCellIsReachableAtGivenTime } from './determine-if-cell-is-reachable-at-given-time';
import { problem as sumInAMatrix } from './sum-in-a-matrix';
import { problem as largestSubstringBetweenTwoEqualCharacters } from './largest-substring-between-two-equal-characters';
import { problem as destroySequentialTargets } from './destroy-sequential-targets';
import { problem as minimizeResultByAddingParentheses } from './minimize-result-by-adding-parentheses-to-expression';
import { problem as minimumSumOfKAvoidingArray } from './minimum-sum-of-a-k-avoiding-array';
import { problem as countWaysToBuildRoomsInAntColony } from './count-ways-to-build-rooms-in-an-ant-colony';
import { problem as lengthOfLongestAlphabeticalContinuousSubstring } from './length-of-the-longest-alphabetical-continuous-substring';
import { problem as numberOfStringsThatAppearAsSubstrings } from './number-of-strings-that-appear-as-substrings-in-word';
import { problem as cellsInARangeOnAnExcelSheet } from './cells-in-a-range-on-an-excel-sheet';
import { problem as makeTwoArraysEqualByReversingSubarrays } from './make-two-arrays-equal-by-reversing-subarrays';
import { problem as countPairsOfSimilarWords } from './count-pairs-of-similar-words';
import { problem as constructTheRectangle } from './construct-the-rectangle';
import { problem as minimumNumberOfBucketsRequired } from './minimum-number-of-buckets-required';
import { problem as applyDiscountEveryNItems } from './apply-discount-every-n-items';
import { problem as sumGame } from './sum-game';
import { problem as findTheKthLuckyNumber } from './find-the-k-th-lucky-number';
// batch 68-local
import { problem as findMedianFromDataStream } from './find-median-from-data-stream';
import { problem as checkCompletenessBinaryTreeNew } from './check-completeness-of-binary-tree';
import { problem as earliestFullBloom } from './earliest-possible-day-of-full-bloom';
import { problem as longestObstacleCourse } from './find-the-longest-valid-obstacle-course-at-each-position';
import { problem as minimumTimeFinishRace } from './minimum-time-to-finish-the-race';
// batch 71-local
import { problem as minimizeDeviationInArray } from './minimize-deviation-in-array';
import { problem as prisonCellsAfterNDays } from './prison-cells-after-n-days';
import { problem as allAncestorsDAG } from './all-ancestors-of-a-node-in-a-directed-acyclic-graph';
import { problem as deleteNodesReturnForest } from './delete-nodes-and-return-forest';
import { problem as namingACompany } from './naming-a-company';
// batch 71
import { problem as minimumReplacementsToSortTheArray } from './minimum-replacements-to-sort-the-array';
import { problem as findTheCityWithSmallestNeighbors } from './find-the-city-with-smallest-number-of-neighbors-at-a-threshold-distance';
import { problem as maximumCandiesAllocatedToKChildren } from './maximum-candies-allocated-to-k-children';
import { problem as numberOfRestrictedPaths } from './number-of-restricted-paths-from-first-to-last-node';
import { problem as minimumSwapsToSortAnArray } from './minimum-swaps-to-sort-an-array';// batch 71 (new problems)
import { problem as findTheGoodDaysToRobBank } from './find-the-good-days-to-rob-bank';
import { problem as minimumExtraCharactersInAString } from './minimum-extra-characters-in-a-string';
import { problem as minimumSecondsToEqualizeACircularArray } from './minimum-seconds-to-equalize-a-circular-array';
import { problem as movementOfRobots } from './movement-of-robots';
import { problem as numberOfWaysOfCuttingAPizza } from './number-of-ways-of-cutting-a-pizza';
import { problem as frequencyTracker } from './frequency-tracker';
// batch 72-local
import { problem as reorderDataInLogFiles } from './reorder-data-in-log-files';
import { problem as minimumOneBitOperations } from './minimum-one-bit-operations-to-make-integers-zero';
import { problem as longestContinuousSubarrayAbsDiff } from './longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit';
// batch 72
import { problem as walkingRobotSimulation } from './walking-robot-simulation';
import { problem as findDistinctDifferenceArray } from './find-distinct-difference-array';
import { problem as maximumNumberOfAlloys } from './maximum-number-of-alloys';
import { problem as minimumOpsDistinctElements } from './minimum-ops-distinct-elements';
import { problem as minimumCoinsToAdd } from './minimum-coins-to-add';
import { problem as countSpecialCharactersII } from './count-special-characters-ii';
import { problem as findMaximumK } from './find-maximum-k';
import { problem as minimumChairsWaitingRoom } from './minimum-chairs-waiting-room';
import { problem as maximumBallsInBox } from './maximum-balls-in-box';
import { problem as satisfiabilityOfEqualityEquations } from './satisfiability-of-equality-equations';
import { problem as pourWater } from './pour-water';
import { problem as bricksFallingWhenHit } from './bricks-falling-when-hit';
// batch 73 — new problems
import { problem as numberOfDistinctIslands } from './number-of-distinct-islands';
import { problem as wordLadderII } from './word-ladder-ii';
import { problem as cutOffTreesForGolfEvent } from './cut-off-trees-for-golf-event';
import { problem as networkBecomesIdle } from './network-becomes-idle';
import { problem as smallestStringWithSwaps } from './smallest-string-with-swaps';
import { problem as removeBoxes } from './remove-boxes';
import { problem as escapeTheSpreadingFire } from './escape-the-spreading-fire';
import { problem as minimizeMalwareSpread } from './minimize-malware-spread';
import { problem as numberOfGoodPaths } from './number-of-good-paths';
import { problem as longestSubstringWithAtLeastKRepeating } from './longest-substring-with-at-least-k-repeating';
import { problem as countBattleshipsInABoard } from './count-battleships-in-a-board';
import { problem as detectCyclesIn2dGrid } from './detect-cycles-in-2d-grid';
import { problem as redundantConnectionII } from './redundant-connection-ii';
import { problem as largestComponentSizeByCommonFactor } from './largest-component-size-by-common-factor';
import { problem as reachableNodesInSubdividedGraph } from './reachable-nodes-in-subdivided-graph';
import { problem as wiggleSort } from './wiggle-sort';
import { problem as candyCrush } from './candy-crush';
// batch 76
import { problem as removeMaxNumberOfEdgesToKeepGraphFullyTraversable } from './remove-max-number-of-edges-to-keep-graph-fully-traversable';
import { problem as examRoom } from './exam-room';
import { problem as checkingExistenceOfEdgeLengthLimitedPaths } from './checking-existence-of-edge-length-limited-paths';
import { problem as lastDayWhereYouCanStillCross } from './last-day-where-you-can-still-cross';
import { problem as minimumCostWalkInWeightedGraph } from './minimum-cost-walk-in-weighted-graph';
import { problem as maximumAveragePassRatio } from './maximum-average-pass-ratio';
import { problem as countGoodMeals } from './count-good-meals';
import { problem as rankTeamsByVotes } from './rank-teams-by-votes';
import { problem as minimumNumberOfRefuelingStops } from './minimum-number-of-refueling-stops';
import { problem as minimumTotalSpaceWastedWithKResizingOperations } from './minimum-total-space-wasted-with-k-resizing-operations';
import { problem as maximumNumberOfTasksYouCanAssign } from './maximum-number-of-tasks-you-can-assign';
import { problem as maximumTotalBeautyOfGardens } from './maximum-total-beauty-of-gardens';
import { problem as maximumXorOfTwoNumbersInAnArray } from './maximum-xor-of-two-numbers-in-an-array';
import { problem as designGraphWithShortestPathCalculator } from './design-graph-with-shortest-path-calculator';
// batch 75 (orphan registration)
import { problem as shortestPathInGridWithObstaclesElimination } from './shortest-path-in-grid-with-obstacles-elimination';
import { problem as regionsCutBySlashes } from './regions-cut-by-slashes';
import { problem as findLatestGroupOfSizeM } from './find-latest-group-of-size-m';
import { problem as sentenceSimilarityII } from './sentence-similarity-ii';
// batch 74
import { problem as rangeSumQueryMutable } from './range-sum-query-mutable';
import { problem as countOfSmallerNumbersAfterSelfBit } from './count-of-smaller-numbers-after-self-bit';
import { problem as rankTransformOfAnArray } from './rank-transform-of-an-array';
import { problem as similarStringGroups } from './similar-string-groups';
import { problem as theMaze } from './the-maze';
import { problem as createSortedArrayThroughInstructions } from './create-sorted-array-through-instructions';
import { problem as minimumTimeToRemoveAllCars } from './minimum-time-to-remove-all-cars';
import { problem as processRestrictedFriendRequests } from './process-restricted-friend-requests';
import { problem as designFoodRatingSystem } from './design-food-rating-system';
import { problem as firstDayBeenInAllRooms } from './first-day-you-have-been-in-all-rooms';
// batch 77 — BIT, simulation, shortest-path
import { problem as countInversions } from './count-inversions';
import { problem as rangeSumQuery2DMutable } from './range-sum-query-2d-mutable';
import { problem as countSmallerBeforeSelfBit } from './count-smaller-before-self-bit';
import { problem as numberOfPairsSatisfyingInequalityBit } from './number-of-pairs-satisfying-inequality-bit';
import { problem as rangeUpdatePointQueryBit } from './range-update-point-query-bit';
import { problem as createTargetArrayUsingBit } from './create-target-array-using-bit';
import { problem as robotCollisions } from './robot-collisions';
import { problem as spiralMatrixIV } from './spiral-matrix-iv';
import { problem as textEditorSimulation } from './text-editor-simulation';
import { problem as atmMachineSimulation } from './atm-machine-simulation';
import { problem as shortestPathToFood } from './shortest-path-to-food';
import { problem as minimumJumpsToReachHome } from './minimum-jumps-to-reach-home';
import { problem as allPairsShortestPath } from './all-pairs-shortest-path';
import { problem as minimumCostToReachAllNodes } from './minimum-cost-to-reach-all-nodes';
// batch 78 — arrays, strings, math, graph
import { problem as minimumOperationsMakeAllArrayElementsEqualToOne } from './minimum-operations-to-make-all-array-elements-equal-to-one';
import { problem as findIndicesWithIndexAndValueDifferenceII } from './find-indices-with-index-and-value-difference-ii';
import { problem as minimumAbsoluteDifferenceQueries } from './minimum-absolute-difference-queries';
import { problem as minimumCostForCuttingCakeII } from './minimum-cost-for-cutting-cake-ii';
import { problem as findNumberOfWaysToPlacePeople } from './find-number-of-ways-to-place-people';
import { problem as findTheKSumOfAnArray } from './find-the-k-sum-of-an-array';
import { problem as minimumTimeToVisitDisappearingNodes } from './minimum-time-to-visit-disappearing-nodes';
import { problem as countBeautifulSubstringsI } from './count-beautiful-substrings-i';
import { problem as sortTransformedArray } from './sort-transformed-array';
import { problem as checkIfParenthesesStringCanBeValid } from './check-if-parentheses-string-can-be-valid';
import { problem as findTheNumberOfDistinctColorsAmongTheBalls } from './find-the-number-of-distinct-colors-among-the-balls';
import { problem as countTheNumberOfArraysWithKMatchingAdjacentElements } from './count-the-number-of-arrays-with-k-matching-adjacent-elements';
// batch 79 — DP, stack, binary-search
import { problem as ternaryExpressionParser } from './ternary-expression-parser';
import { problem as countAllPossibleRoutes } from './count-all-possible-routes';
import { problem as minimumOperationsMakeArrayKIncreasing } from './minimum-operations-to-make-array-k-increasing';
// batch 79 — binary-search, two-pointers, dp, design
import { problem as divideChocolate } from './divide-chocolate';
import { problem as findTheSmallestDivisorGivenAThreshold } from './find-the-smallest-divisor-given-a-threshold';
import { problem as magneticForceBetweenTwoBalls } from './magnetic-force-between-two-balls';
import { problem as nthMagicalNumber } from './nth-magical-number';
import { problem as getEqualSubstringsWithinBudget } from './get-equal-substrings-within-budget';
import { problem as longestEqualSubarray } from './longest-equal-subarray';
import { problem as threeSumWithMultiplicity } from './three-sum-with-multiplicity';
import { problem as new21Game } from './new-21-game';
import { problem as shortestCommonSupersequence } from './shortest-common-supersequence';
import { problem as stickersToSpellWord } from './stickers-to-spell-word';
import { problem as designExamRoom } from './design-exam-room';
import { problem as designAuthenticationManager } from './design-authentication-manager';
// batch 80 — shortest-path, union-find, arrays
import { problem as findTheSafestPathInAGrid } from './find-the-safest-path-in-a-grid';
import { problem as divideNodesIntoTheMaximumNumberOfGroups } from './divide-nodes-into-the-maximum-number-of-groups';
import { problem as rangeSumOfSortedSubarraySums } from './range-sum-of-sorted-subarray-sums';
// batch 81 — shortest-path, strings, dp
import { problem as minimumCostToReachDestinationInTime } from './minimum-cost-to-reach-destination-in-time';
import { problem as totalAppealOfAString } from './total-appeal-of-a-string';
// batch 83 — backtracking, simulation, dp, linked-list
import { problem as letterCombinationsOfAPhoneNumber } from './letter-combinations-of-a-phone-number';
import { problem as designTicTacToe } from './design-tic-tac-toe';
import { problem as battleshipsInABoard } from './battleships-in-a-board';
import { problem as onesAndZeroes } from './ones-and-zeroes';
import { problem as bestTimeToBuyAndSellStockWithCooldown } from './best-time-to-buy-and-sell-stock-with-cooldown';
import { problem as insertDeleteGetRandomO1 } from './insert-delete-getrandom-o1';
import { problem as convertBinaryNumberInLinkedListToInteger } from './convert-binary-number-in-linked-list-to-integer';
// batch 82 — BIT, shortest-path, tree, arrays
import { problem as bookingConcertTicketsInGroups } from './booking-concert-tickets-in-groups';
import { problem as minimumScoreOfAPathBetweenTwoCities } from './minimum-score-of-a-path-between-two-cities';
import { problem as maximumProbabilityOfSuccess } from './maximum-probability-of-success';
import { problem as minimumFuelCostToReportToTheCapital } from './minimum-fuel-cost-to-report-to-the-capital';
import { problem as minimumOperationsToMakeTheArrayAlternating } from './minimum-operations-to-make-the-array-alternating';
// batch 83 — strings, dp, graph
import { problem as countPalindromes } from './count-palindromes';
import { problem as flowerPlantingNoAdjacent } from './flower-planting-no-adjacent';
import { problem as longestDupSubstring } from './longest-duplicate-substring';
import { problem as shortestPalindrome } from './shortest-palindrome';
import { problem as sumPrefixScores } from './sum-of-prefix-scores-of-strings';
import { problem as fillingBookcaseShelves } from './filling-bookcase-shelves';
import { problem as maximumLengthRepeatedSubarray } from './maximum-length-of-repeated-subarray';
import { problem as minimumTapsToWaterGarden } from './minimum-number-of-taps-to-water-garden';
import { problem as numberOfWaysToPaintN3Grid } from './number-of-ways-to-paint-n-3-grid';
import { problem as frogPositionAfterTSeconds } from './frog-position-after-t-seconds';
import { problem as loudAndRich } from './loud-and-rich';
import { problem as countRestrictedPaths } from './count-restricted-paths';
// batch 80 (cont.) — backtracking, heap, linked-list, simulation
import { problem as allPathsSourceToTargetBacktrack } from './all-paths-source-to-target-backtrack';
import { problem as factorCombinations } from './factor-combinations';
import { problem as findAllIncreasingSubsequences } from './find-all-increasing-subsequences';
import { problem as generalizedAbbreviation } from './generalized-abbreviation';
import { problem as maximumCpuLoad } from './maximum-cpu-load';
import { problem as maximumEventsAttendedWithKEvents } from './maximum-events-attended-with-k-events';
import { problem as mergeKSortedArrays } from './merge-k-sorted-arrays';
import { problem as sortNearlySortedArray } from './sort-nearly-sorted-array';
import { problem as interleaveTwoLinkedLists } from './interleave-two-linked-lists';
import { problem as segregateEvenOddLinkedList } from './segregate-even-odd-linked-list';
import { problem as linkedListDecimalValue } from './linked-list-decimal-value';
import { problem as bowlingGameScore } from './bowling-game-score';
import { problem as ballThroughInclinedGrid } from './ball-through-inclined-grid';
import { problem as tokenBucketRateLimiter } from './token-bucket-rate-limiter';
// batch 84 — two-pointers, math
import { problem as maximumScoreOfAGoodSubarray } from './maximum-score-of-a-good-subarray';
import { problem as minimumNumberOfCoinsToBeAdded } from './minimum-number-of-coins-to-be-added';
// batch 84 cont. — simulation, backtracking, linked-list
import { problem as splittingAStringIntoDescendingConsecutiveValues } from './splitting-a-string-into-descending-consecutive-values';
import { problem as deleteTheMiddleNodeOfALinkedList } from './delete-the-middle-node-of-a-linked-list';
// batch 85 — union-find, heap
import { problem as numberOfConnectedComponentsInAnUndirectedGraph } from './number-of-connected-components-in-an-undirected-graph';
import { problem as kthSmallestElementInASortedMatrix } from './kth-smallest-element-in-a-sorted-matrix';
// batch 86 — arrays, strings
import { problem as maximumValueOfAnOrderedTripletII } from './maximum-value-of-an-ordered-triplet-ii';
import { problem as divideArrayIntoArraysWithMaxDifference } from './divide-array-into-arrays-with-max-difference';
import { problem as shiftingLettersII } from './shifting-letters-ii';
// batch 87 — dp, strings, arrays
import { problem as maximizeTheProfitAsTheSalesman } from './maximize-the-profit-as-the-salesman';
import { problem as checkIfStringIsAnAcronymOfWords } from './check-if-string-is-an-acronym-of-words';
import { problem as countElementsWithSmallerAndGreaterElement } from './count-elements-with-smaller-and-greater-element';
// batch 88 — arrays, graph
import { problem as splitTheArray } from './split-the-array';
import { problem as findTheScoreOfAllPrefixesOfAnArray } from './find-the-score-of-all-prefixes-of-an-array';
import { problem as shortestCycleInAGraph } from './shortest-cycle-in-a-graph';
import { problem as checkIfThereIsAValidPartitionForTheArray } from './check-if-there-is-a-valid-partition-for-the-array';
import { problem as reverseNodesInEvenLengthGroups } from './reverse-nodes-in-even-length-groups';
import { problem as minimumDifferenceInSumsAfterRemovalOfElements } from './minimum-difference-in-sums-after-removal-of-elements';
// batch 89 — arrays, strings, hash-map, math, graph
import { problem as minimumRoundsToCompleteAllTasks } from './minimum-rounds-to-complete-all-tasks';
import { problem as longestPalindromeByConcat } from './longest-palindrome-by-concatenating-two-letter-words';
import { problem as maximumProductDifferenceBetweenTwoPairs } from './maximum-product-difference-between-two-pairs';
import { problem as minimumBitFlipsToConvertNumber } from './minimum-bit-flips-to-convert-number';
import { problem as minFlipsToBinaryZeroMatrix } from './min-number-of-flips-to-convert-binary-matrix-to-zero-matrix';
import { problem as determineIfTwoStringsAreClose } from './determine-if-two-strings-are-close';
import { problem as maximumXorAfterOperations } from './maximum-xor-after-operations';
// batch 90 — arrays, strings, hash-map, math, graph, tree
import { problem as countCommonWordsWithOneOccurrence } from './count-common-words-with-one-occurrence';
import { problem as findThreeConsecutiveIntegersThatSumToAGivenNumber } from './find-three-consecutive-integers-that-sum-to-a-given-number';
import { problem as equalRowAndColumnPairs } from './equal-row-and-column-pairs';
import { problem as numberOfLaserBeamsInABank } from './number-of-laser-beams-in-a-bank';
import { problem as checkIfAllAsAppearsBeforeAllBs } from './check-if-all-as-appears-before-all-bs';
import { problem as countNodesWithTheHighestScore } from './count-nodes-with-the-highest-score';
import { problem as maximumNumberOfPointsFromGridQueries } from './maximum-number-of-points-from-grid-queries';
// batch 91 — math/strings, arrays/math ×2
import { problem as findTheClosestPalindrome } from './find-the-closest-palindrome';
import { problem as numberOfSubarraysWithLcmEqualToK } from './number-of-subarrays-with-lcm-equal-to-k';
import { problem as smallestRotationWithHighestScore } from './smallest-rotation-with-highest-score';
// batch 92 — greedy/math, strings/math, greedy, hash-map, graph/UF, DP, greedy
import { problem as eliminateMaximumNumberOfMonsters } from './eliminate-maximum-number-of-monsters';
import { problem as decodedStringAtIndex } from './decoded-string-at-index';
import { problem as maximumBagsWithFullCapacityOfRocks } from './maximum-bags-with-full-capacity-of-rocks';
import { problem as countOfInterestingSubarrays } from './count-of-interesting-subarrays';
import { problem as minimumNumberOfVisitedCellsInAGrid } from './minimum-number-of-visited-cells-in-a-grid';
import { problem as formLargestIntegerWithDigitsThatAddUpToTarget } from './form-largest-integer-with-digits-that-add-up-to-target';
import { problem as destroyingAsteroids } from './destroying-asteroids';
// batch 87 remote — monotonic-stack, string, sliding-window, dp, tree, graph
import { problem as nextGreaterElementDistances } from './next-greater-element-distances';
import { problem as findAllOccurrencesZAlgorithm } from './find-all-occurrences-z-algorithm';
import { problem as zAlgorithmLongestPrefixSuffix } from './z-algorithm-longest-prefix-suffix';
import { problem as countSubarraysExactlyKDistinct } from './count-subarrays-exactly-k-distinct';
import { problem as maximumProductSubarrayLengthK } from './maximum-product-subarray-length-k';
import { problem as weightedJobScheduling } from './weighted-job-scheduling';
import { problem as parallelCourses } from './parallel-courses';
import { problem as parallelCoursesII } from './parallel-courses-ii';
import { problem as gridCountPathsMod } from './grid-count-paths-mod';
import { problem as maxSumSubmatrix } from './max-sum-submatrix';
import { problem as numberGoodLeafNodePairs } from './number-good-leaf-node-pairs';
import { problem as treeNodeProductOfChildren } from './tree-node-product-of-children';
import { problem as minimumOperationsNonDecreasing } from './minimum-operations-to-make-array-non-decreasing';
// batch 90 — math, greedy, hash-map
import { problem as sumOfSquareNumbers } from './sum-of-square-numbers';
import { problem as miceAndCheese } from './mice-and-cheese';
import { problem as maximumSizeSubarraySumEqualsK } from './maximum-size-subarray-sum-equals-k';
// batch 91 — greedy, strings, monotonic-stack
import { problem as maximumNumberOfConsecutiveValuesYouCanMake } from './maximum-number-of-consecutive-values-you-can-make';
import { problem as determineIfTwoEventsHaveConflict } from './determine-if-two-events-have-conflict';
import { problem as numberOfPeopleThatCanBeSeenInAGrid } from './number-of-people-that-can-be-seen-in-a-grid';
// batch 92 — arrays/easy, strings/medium, arrays/hard
import { problem as alternatingGroupsI } from './alternating-groups-i';
import { problem as longestBinarySubsequenceLessThanOrEqualToK } from './longest-binary-subsequence-less-than-or-equal-to-k';
import { problem as minimumTimeToCompleteAllTasks } from './minimum-time-to-complete-all-tasks';
// batch 92 — design, strings, greedy, math, dp, stack
import { problem as countVowelSubstringsOfAWord } from './count-vowel-substrings-of-a-word';
import { problem as minimumCostToMoveChips } from './minimum-cost-to-move-chips';
import { problem as stringCompressionII } from './string-compression-ii';
import { problem as buildAnArrayWithStackOperations } from './build-an-array-with-stack-operations';
// batch 93 — math/easy, linked-list/medium, dp/hard
import { problem as validPerfectSquare } from './valid-perfect-square';
import { problem as insertionSortList } from './insertion-sort-list';
import { problem as maximizeScoreAfterNOperations } from './maximize-score-after-n-operations';
// batch 92 (remote) — arrays/math/binary-search, arrays/sliding-window, arrays/binary-search/two-pointers
import { problem as primeSubtractionOperation } from './prime-subtraction-operation';
import { problem as findTheLongestSemiRepetitiveSubarray } from './find-the-longest-semi-repetitive-subarray';
import { problem as countNumberOfFairPairs } from './count-number-of-fair-pairs';
// batch 93 — strings/hard, arrays+math+union-find/hard, strings+hash-map/medium
import { problem as findLongestAwesomeSubstring } from './find-longest-awesome-substring';
import { problem as greatestCommonDivisorTraversal } from './greatest-common-divisor-traversal';
import { problem as minimumLengthOfAnagramConcatenation } from './minimum-length-of-anagram-concatenation';
// batch 94 — math, simulation, arrays+hash-map, tree
import { problem as countOfMatchesInTournament } from './count-of-matches-in-tournament';
import { problem as findWinnerOnATicTacToeGame } from './find-winner-on-a-tic-tac-toe-game';
import { problem as sortFeaturesByPopularity } from './sort-features-by-popularity';
import { problem as rotatedDigits } from './rotated-digits';
import { problem as rabbitsInForest } from './rabbits-in-forest';
import { problem as smallestStringStartingFromLeaf } from './smallest-string-starting-from-leaf';
// 2000-milestone — tree/medium
import { problem as findLargestValueInEachTreeRow } from './find-largest-value-in-each-tree-row';
// batch 94 (remote) — sliding-window
import { problem as maximumAverageSubarrayI } from './maximum-average-subarray-i';
// batch 95 (remote) — arrays/strings
import { problem as diStringMatch } from './di-string-match';
import { problem as shortestDistanceToACharacter } from './shortest-distance-to-a-character';
import { problem as largestNumberAtLeastTwiceOfOthers } from './largest-number-at-least-twice-of-others';
// batch 97 (remote) — two-pointers, stack
import { problem as fourSumVariant } from './4sum';
import { problem as dailyTemperaturesVariant } from './monotonic-stack-daily-temperatures';
// batch 95 — tree/easy, tree/medium, tree/hard
import { problem as rangeSumBst } from './range-sum-bst';
import { problem as deleteNodeInABst } from './delete-node-in-a-bst';
import { problem as binaryTreeMaximumPathSum } from './binary-tree-maximum-path-sum';
// batch 96 (remote) — arrays/easy, arrays+hash-map/easy, strings+hash-map/easy
import { problem as checkIfArraySortedAndRotatedB96 } from './check-if-array-sorted-and-rotated';
import { problem as findAllLonelyNumbersInArray } from './find-all-lonely-numbers-in-array';
import { problem as checkIfAllCharactersHaveEqualNumberOfOccurrences } from './check-if-all-characters-have-equal-number-of-occurrences';
// batch 99 (remote) — strings/easy, arrays/easy, arrays/medium, sliding-window/medium
import { problem as findLongestBalancedBinarySubstring } from './find-longest-balanced-binary-substring';
import { problem as matrixDiagonalSumVariant } from './matrix-diagonal-sum-variant';
import { problem as maxNumberOfKSumPairs } from './max-number-of-k-sum-pairs';
import { problem as countSubarraysMaxElementKTimes } from './count-subarrays-max-element-k-times';
// batch 96 — stack/strings, tree/easy, tree/medium
import { problem as removeAllAdjacentDuplicatesInStringII } from './remove-all-adjacent-duplicates-in-string-ii';
import { problem as averageOfSubtree } from './average-of-subtree';
import { problem as cousinsInBinaryTreeII } from './cousins-in-binary-tree-ii';
// batch 101 — math/easy, arrays/easy, arrays/easy
import { problem as primeArrangements } from './prime-arrangements';
import { problem as luckyNumbersInAMatrix } from './lucky-numbers-in-a-matrix';
import { problem as smallestRangeI } from './smallest-range-i';
// batch 102 — arrays/easy, arrays/easy, linked-list/easy
import { problem as twoSum } from './two-sum';
import { problem as squaresOfASortedArray } from './squares-of-a-sorted-array';
import { problem as middleOfTheLinkedList } from './middle-of-the-linked-list';
// batch 103 — arrays/medium, arrays+binary-search/medium, math/hard
import { problem as threeSum } from './3sum';
import { problem as searchA2DMatrix } from './search-a-2d-matrix';
import { problem as maxPointsOnALine } from './max-points-on-a-line';
// batch 104 — arrays+binary-search/medium, graph/medium, arrays+dp+graph/hard
import { problem as searchA2DMatrixII } from './search-a-2d-matrix-ii';
import { problem as countNumberOfConnectedComponents } from './count-number-of-connected-components';
import { problem as longestIncreasingPathInAMatrix } from './longest-increasing-path-in-a-matrix';
// batch 105 — tree/easy, arrays+dp/easy, graph+greedy/medium
import { problem as mergeTwoBinaryTrees } from './merge-two-binary-trees';
import { problem as rangeSumQueryImmutable } from './range-sum-query-immutable';
import { problem as minCostConnectAllPoints } from './min-cost-connect-all-points';
// batch 106a — tree/easy (orphan), arrays+hash-map/easy, arrays+math/easy
import { problem as binaryTreeSumOfLeftLeaves } from './binary-tree-sum-of-left-leaves';
import { problem as minimumOperationsToMakeElementsDistinct } from './minimum-operations-to-make-elements-distinct';
import { problem as checkIfItIsAStraightLine } from './check-if-it-is-a-straight-line';
// batch 106b — strings/easy, tree/medium, arrays/medium
import { problem as longerContiguousSegmentsOfOnesThanZeros } from './longer-contiguous-segments-of-ones-than-zeros';
import { problem as binaryTreeLongestConsecutiveSequence } from './binary-tree-longest-consecutive-sequence';
import { problem as countUnguardedCellsInTheGrid } from './count-unguarded-cells-in-the-grid';
// batch 107 — strings/easy, tree/medium, tree/medium
import { problem as firstUniqueCharacterInAString } from './first-unique-character-in-a-string';
import { problem as sumRootToLeafNumbers } from './sum-root-to-leaf-numbers';
import { problem as flattenBinaryTreeToLinkedList } from './flatten-binary-tree-to-linked-list';
// batch 108 — arrays/medium, arrays/hard, stack/hard
import { problem as kthLargestElementInAnArray } from './kth-largest-element-in-an-array';
import { problem as findMissingPositive } from './find-missing-positive';
import { problem as largestRectangleInHistogram } from './largest-rectangle-in-histogram';
// batch 109 — tree/medium, arrays/easy, hash-map/easy
import { problem as implementTriePrefixTree } from './implement-trie-prefix-tree';
import { problem as numberOfRecentCalls } from './number-of-recent-calls';
import { problem as twoSumIIIDataStructureDesign } from './two-sum-iii-data-structure-design';
// batch 110a — arrays+hash-map/easy, arrays+math/easy, strings+two-pointers/medium
import { problem as divideArrayIntoEqualPairs } from './divide-array-into-equal-pairs';
import { problem as addToArrayFormOfInteger } from './add-to-array-form-of-integer';
import { problem as minimumSwapsToMakeStringsBalanced } from './minimum-swaps-to-make-strings-balanced';
// batch 110b — strings/easy, tree/medium, tree/hard
import { problem as checkIfTwoStringArraysAreEquivalent } from './check-if-two-string-arrays-are-equivalent';
import { problem as verifyPreorderSerializationOfABinaryTree } from './verify-preorder-serialization-of-a-binary-tree';
import { problem as serializeAndDeserializeBinaryTree } from './serialize-and-deserialize-binary-tree';
// batch 111 — tree/medium, tree/medium, tree/easy
import { problem as validateBinarySearchTree } from './validate-binary-search-tree';
import { problem as kthSmallestElementInABST } from './kth-smallest-element-in-a-bst';
import { problem as lowestCommonAncestorOfABST } from './lowest-common-ancestor-of-a-bst';
// batch 112 — tree/medium, tree/medium, tree/medium
import { problem as lowestCommonAncestorOfABinaryTree } from './lowest-common-ancestor-of-a-binary-tree';
import { problem as binaryTreeZigzagLevelOrderTraversal } from './binary-tree-zigzag-level-order-traversal';
import { problem as binaryTreeLevelOrderTraversalII } from './binary-tree-level-order-traversal-ii';
// batch 113 — arrays/easy, linked-list/medium
import { problem as maximumProductOfTwoElementsInAnArray } from './maximum-product-of-two-elements-in-an-array';
import { problem as removeNthNodeFromEndOfList } from './remove-nth-node-from-end-of-list';
// batch 113b — arrays+sliding-window/easy, strings+dp/medium, math/medium
import { problem as minimumPositiveSumSubarray } from './minimum-positive-sum-subarray';
import { problem as totalCharactersAfterTransformations } from './total-characters-after-transformations';
import { problem as countNonSpecialNumbers } from './count-non-special-numbers';
// batch 114 — strings+union-find/medium, heap+simulation/medium, strings+math/medium
import { problem as lexicographicallySmallestEquivalentString } from './lexicographically-smallest-equivalent-string';
import { problem as singleThreadedCpu } from './single-threaded-cpu';
import { problem as numberOfWaysToSplitString } from './number-of-ways-to-split-string';
// batch 115 — arrays/easy, arrays/easy, arrays/easy
import { problem as minimumOperationsBinaryArrayEqualToOneI } from './minimum-operations-to-make-binary-array-elements-equal-to-one-i';
import { problem as findCommonElementsBetweenTwoArrays } from './find-common-elements-between-two-arrays';
import { problem as maximumValueOfAnOrderedTripletI } from './maximum-value-of-an-ordered-triplet-i';
// batch 116 — strings/easy, strings/easy, arrays/easy
import { problem as checkBalancedString } from './check-balanced-string';
import { problem as minimumNumberOfChairsInAWaitingRoom } from './minimum-number-of-chairs-in-a-waiting-room';
import { problem as findMinimumOperationsDivisibleByThree } from './find-minimum-operations-to-make-all-elements-divisible-by-three';
// batch 117 — arrays/easy, arrays+sliding-window/medium, arrays+math/medium
import { problem as longestStrictlyIncreasingOrDecreasingSubarray } from './longest-strictly-increasing-or-strictly-decreasing-subarray';
import { problem as findThePowerOfKSizeSubarraysI } from './find-the-power-of-k-size-subarrays-i';
import { problem as countAlternatingSubarrays } from './count-alternating-subarrays';
// batch 118 — strings+hash-map/easy, strings+math/easy, strings/easy
import { problem as maximumDifferenceBetweenEvenAndOddFrequencyI } from './maximum-difference-between-even-and-odd-frequency-i';
import { problem as findTheKthCharacterInStringGameI } from './find-the-k-th-character-in-string-game-i';
import { problem as countPrefixAndSuffixPairsI } from './count-prefix-and-suffix-pairs-i';
// batch 119 — arrays+math/easy, strings/easy, graph+shortest-path/medium
import { problem as maximumManhattanDistance } from './maximum-manhattan-distance';
import { problem as findTheOriginalTypedStringI } from './find-the-original-typed-string-i';
import { problem as findMinimumTimeToReachLastRoomI } from './find-minimum-time-to-reach-last-room-i';
// batch 120 — arrays+math/easy, arrays/easy, arrays+strings/easy
import { problem as maximumProductOfTwoDigits } from './maximum-product-of-two-digits';
import { problem as minimumOperationsToMakeColumnsStrictlyIncreasing } from './minimum-operations-to-make-columns-strictly-increasing';
import { problem as longestUnequalAdjacentGroupsSubsequenceI } from './longest-unequal-adjacent-groups-subsequence-i';
// batch 117b — math/easy, arrays/medium, arrays+hash-map/medium
import { problem as findTheKeyOfTheNumbers } from './find-the-key-of-the-numbers';
import { problem as maximizeTotalHeightOfUniqueTowers } from './maximize-total-height-of-unique-towers';
import { problem as maximumNumberOfIntegersToChooseFromARangeI } from './maximum-number-of-integers-to-choose-from-a-range-i';
// batch 121 — arrays+strings+hash-map/medium, arrays+math/medium, strings/medium
import { problem as findTheLengthOfTheLongestCommonPrefix } from './find-the-length-of-the-longest-common-prefix';
import { problem as maximumNumberOfDistinctElementsAfterOperations } from './maximum-number-of-distinct-elements-after-operations';
import { problem as minimumTimeToRevertWordToInitialStateI } from './minimum-time-to-revert-word-to-initial-state-i';
// batch 122 — arrays/medium, strings+sliding-window+hash-map/medium, arrays+math/easy
import { problem as minimumNumberOfFlipsToMakeBinaryGridPalindromicI } from './minimum-number-of-flips-to-make-binary-grid-palindromic-i';
import { problem as countSubstringsWithKFrequencyCharactersI } from './count-substrings-with-k-frequency-characters-i';
import { problem as findIfDigitGameCanBeWon } from './find-if-digit-game-can-be-won';
// batch 122b — arrays/easy, strings+sliding-window/medium, arrays/medium
import { problem as applyOperationsToAnArray } from './apply-operations-to-an-array';
import { problem as countOfSubstringsContainingEveryVowelAndKConsonantsI } from './count-of-substrings-containing-every-vowel-and-k-consonants-i';
import { problem as minimumOperationsToMakeMedianEqualToK } from './minimum-operations-to-make-median-equal-to-k';
// batch 122c — strings+dp/hard, graph+shortest-path/medium, arrays+hash-map/medium
import { problem as findTheOriginalTypedStringII } from './find-the-original-typed-string-ii';
import { problem as findMinimumTimeToReachLastRoomII } from './find-minimum-time-to-reach-last-room-ii';
import { problem as minimumOperationsToWriteLetterYOnGrid } from './minimum-operations-to-write-letter-y-on-grid';
// batch 123 — arrays+hash-map/easy, arrays+math/easy, graph+shortest-path/medium
import { problem as findTheNumberOfWinningPlayers } from './find-the-number-of-winning-players';
import { problem as maximumSumWithExactlyKElements } from './maximum-sum-with-exactly-k-elements';
import { problem as minimumTimeToReachLastRoomII } from './minimum-time-to-reach-last-room-ii';
// batch 124 — arrays+hash-map+math/medium, arrays+strings+hash-map/easy, arrays+strings/easy
import { problem as minimumNumberOfOperationsToMakeArrayEmpty } from './minimum-number-of-operations-to-make-array-empty';
import { problem as findMaximumNumberOfStringPairs } from './find-maximum-number-of-string-pairs';
import { problem as checkIfAStringIsAnAcronymOfWords } from './check-if-a-string-is-an-acronym-of-words';
// batch 123b — strings/easy, arrays+math/easy
import { problem as scoreOfAString } from './score-of-a-string';
import { problem as sumOfSquaresOfSpecialElements } from './sum-of-squares-of-special-elements';
// batch 124b — arrays/medium, arrays/easy, arrays/easy
import { problem as maximumElementAfterDecrementingAndRearranging } from './maximum-element-after-decreasing-and-rearranging';
import { problem as findTheDistanceValueBetweenTwoArrays } from './find-the-distance-value-between-two-arrays';
import { problem as minimumSumOfMountainTripletsI } from './minimum-sum-of-mountain-triplets-i';
// batch 125 — arrays/easy, arrays+strings+hash-map/easy, arrays+hash-map/easy
import { problem as findChampionI } from './find-champion-i';
import { problem as countTheNumberOfConsistentStrings } from './count-the-number-of-consistent-strings';
import { problem as countNumberOfPairsWithAbsoluteDifferenceK } from './count-number-of-pairs-with-absolute-difference-k';
// batch 126 — math/easy, strings+math/easy, arrays+hash-map/easy
import { problem as numberOfStepsToReduceANumberToZero } from './number-of-steps-to-reduce-a-number-to-zero';
import { problem as convertDateToBinary } from './convert-date-to-binary';
import { problem as theTwoSneakyNumbersOfDigitville } from './the-two-sneaky-numbers-of-digitville';
// batch 127 — arrays/medium, math/easy, arrays+two-pointers/easy
import { problem as minimumSumOfMountainTripletsII } from './minimum-sum-of-mountain-triplets-ii';
import { problem as findTheXorOfNumbersInARange } from './find-the-xor-of-numbers-in-a-range';
import { problem as countPairsWhoseSumIsLessThanTarget } from './count-pairs-whose-sum-is-less-than-target';
// batch 127b — arrays+math/easy, arrays+math/medium
import { problem as findMinimumValueAfterReplacingWithDigitSum } from './find-minimum-value-after-replacing-with-digit-sum';
import { problem as countTriplets } from './count-triplets-forming-two-arrays-of-equal-xor';
// batch 128 — strings+stack/medium, arrays/easy, arrays+strings/easy
import { problem as removingStarsFromAString } from './removing-stars-from-a-string';
import { problem as minimumNumberOfMovesToSeatEveryone } from './minimum-number-of-moves-to-seat-everyone';
import { problem as checkIfStringIsAPrefixOfArray } from './check-if-string-is-a-prefix-of-array';
// batch 129 — arrays/medium, strings+math/medium, arrays+graph/hard
import { problem as minimumNumberOfOperationsToMoveAllBallsToEachBox } from './minimum-number-of-operations-to-move-all-balls-to-each-box';
import { problem as minimumOperationsToMakeASpecialNumber } from './minimum-operations-to-make-a-special-number';
import { problem as maximumScoreOfANodeSequence } from './maximum-score-of-a-node-sequence';
// batch 128b — math/easy, math/easy, arrays+math/medium
import { problem as checkIfANumberIsFascinating } from './check-if-a-number-is-fascinating';
import { problem as numberOfEvenAndOddBits } from './number-of-even-and-odd-bits';
import { problem as restoreMatrix } from './find-valid-matrix-given-row-and-column-sums';
// batch 130a — arrays+math/easy, arrays+sliding-window/medium, arrays+dynamic-programming/hard
import { problem as countEvenSumPairs } from './count-even-sum-pairs';
import { problem as longestBoundedSubarray } from './longest-bounded-subarray';
import { problem as maxNonadjacentCircular } from './max-nonadjacent-circular';
// batch 130b — math/easy, arrays+sliding-window/medium, strings+sliding-window/medium
import { problem as minMaxDifference } from './maximum-difference-by-remapping-a-digit';
import { problem as resultsArrayII } from './find-the-power-of-k-size-subarrays-ii';
import { problem as countOfSubstringsII } from './count-of-substrings-containing-every-vowel-and-k-consonants-ii';
// batch 131 — strings+stack/medium, arrays+hash-map/easy, math/easy
import { problem as countCollisionsOnARoad } from './count-collisions-on-a-road';
import { problem as formSmallestNumberFromTwoDigitArrays } from './form-smallest-number-from-two-digit-arrays';
import { problem as aNumberAfterADoubleReversal } from './a-number-after-a-double-reversal';
// batch 132a — arrays+simulation/easy, arrays+strings/medium, hash-map+math/easy
import { problem as findTheLosersOfTheCircularGame } from './find-the-losers-of-the-circular-game';
import { problem as findUniqueBinaryString } from './find-unique-binary-string';
import { problem as maximumNumberOfBallsInABox } from './maximum-number-of-balls-in-a-box';
// batch 132b — math/easy, strings+math/easy, arrays+math/easy
import { problem as maximumBinaryString } from './maximum-possible-number-by-binary-concatenation';
import { problem as getSmallestString } from './lexicographically-smallest-string-after-a-swap';
import { problem as numberOfPairsI } from './find-the-number-of-good-pairs-i';
// batch 134 — strings+sliding-window/medium, strings+math/hard
import { problem as maxVowelsInSubstring } from './maximum-number-of-vowels-in-a-substring-of-given-length';
import { problem as kthCharacterGameII } from './find-the-k-th-character-in-string-game-ii';
// batch 135 — arrays/easy, tree+math/medium, math/medium
import { problem as checkIfGridSatisfiesConditions } from './check-if-grid-satisfies-conditions';
import { problem as findMaximumSumOfNodeValues } from './find-the-maximum-sum-of-node-values';
import { problem as maximumXorProduct } from './maximum-xor-product';
// batch 136 — strings+math/easy, arrays+hash-map/medium, strings+hash-map/easy
import { problem as findTheEncryptedString } from './find-the-encrypted-string';
import { problem as maximumSubarraySumDivisibleByK } from './maximum-subarray-sum-with-length-divisible-by-k';
import { problem as redistributeCharacters } from './redistribute-characters-to-make-all-strings-equal';
// batch 133b — strings+hash-map/easy, arrays+hash-map/hard, arrays+binary-search/medium
import { problem as numberOfSpecialCharsI } from './count-the-number-of-special-characters-i';
import { problem as numberOfGoodPartitions } from './count-number-of-good-partitions';
import { problem as maxCountRangeII } from './maximum-number-of-integers-to-choose-from-a-range-ii';
// batch 134 — arrays+simulation/easy, arrays+math/medium, arrays+dynamic-programming/hard
import { problem as countStrictlyIncreasingColumns } from './count-strictly-increasing-columns';
import { problem as findXORSumOfAllPairsBitwiseAND } from './find-xor-sum-of-all-pairs-bitwise-and';
import { problem as minCostConnectTwoGroups } from './minimum-cost-to-connect-two-groups';
// batch 134b — strings+hash-map/medium, arrays+simulation/easy, arrays+hash-map/medium
import { problem as numberOfSpecialCharsII } from './count-the-number-of-special-characters-ii';
import { problem as canMakeSquare } from './make-a-square-with-the-same-color';
// batch 139b — arrays/easy, arrays+hash-map/easy, arrays/easy, arrays+math/hard
import { problem as elementAppearingMoreThan25Percent } from './element-appearing-more-than-25-percent-in-sorted-array';
import { problem as minimumOperationsToCollectElements } from './minimum-operations-to-collect-elements';
import { problem as decodeTheArrayFromAdjacentXors } from './decode-the-array-from-adjacent-xors';
import { problem as numberOfExcellentPairs } from './number-of-excellent-pairs';
import { problem as findTheNumberOfGoodPairsII } from './find-the-number-of-good-pairs-ii';
// batch 137 — arrays+math/medium, strings+hash-map/easy, arrays/medium
import { problem as maximumOr } from './maximum-or';
import { problem as permutationDifferenceBetweenTwoStrings } from './permutation-difference-between-two-strings';
import { problem as calculateTheSumOfDistances } from './calculate-the-sum-of-distances';
// batch 138 — strings+dp/medium, arrays+binary-search/medium, arrays+hash-map/medium, arrays+math/easy, graph+tree/hard
import { problem as longestUnequalAdjacentGroupsSubsequenceII } from './longest-unequal-adjacent-groups-subsequence-ii';
import { problem as zeroArrayTransformationII } from './zero-array-transformation-ii';
import { problem as minimumArrayChangesToMakeSubarraysDistinct } from './minimum-array-changes-to-make-subarrays-distinct';
import { problem as countAlmostEqualPairsI } from './count-almost-equal-pairs-i';
import { problem as findMinimumDiameterAfterMergingTwoTrees } from './find-minimum-diameter-after-merging-two-trees';
// batch 139 — arrays+strings/easy, strings/easy, arrays+math+simulation/medium
import { problem as sortPeople } from './sort-people';
import { problem as countWordsGivenPrefix } from './count-words-given-prefix';
import { problem as findMissingObservations } from './find-missing-observations';
// batch 140 — arrays+math/easy, arrays+strings/easy, arrays/easy
import { problem as decryptXoredArray } from './decrypt-xored-array';
import { problem as countItemsMatchingARule } from './count-items-matching-a-rule';
import { problem as kidsWithTheGreatestNumberOfCandies } from './kids-with-the-greatest-number-of-candies';
// batch 141 — math/hard, strings/hard+math, strings/hard, arrays+math/medium, arrays+math/hard, arrays+dp/hard
import { problem as reachingPoints } from './reaching-points';
import { problem as orderlyQueue } from './orderly-queue';
import { problem as validNumber } from './valid-number';
import { problem as minimumMovesToEqualArrayElementsII } from './minimum-moves-to-equal-array-elements-ii';
import { problem as superWashingMachines } from './super-washing-machines';
import { problem as numberOfSubmatricesThatSumToTarget } from './number-of-submatrices-that-sum-to-target';
// batch 142 — arrays/easy, arrays+sorting/easy, strings+sliding-window/easy, arrays+simulation/easy, arrays+simulation/medium, arrays+math/medium, arrays+dp/hard
import { problem as maximumHeightOfATriangle } from './maximum-height-of-a-triangle';
import { problem as divideArrayMinCostI } from './divide-array-into-subarrays-with-minimum-cost-i';
import { problem as countKConstraintSubstringsI } from './count-substrings-that-satisfy-k-constraint-i';
import { problem as getFinalStateKMultiplicationI } from './final-array-state-after-k-multiplication-operations-i';
import { problem as findWinningPlayer } from './find-the-first-player-to-win-k-games-in-a-row';
import { problem as sumDigitDifferencesAllPairs } from './sum-of-digit-differences-of-all-pairs';
import { problem as countOfMonotonicPairsI } from './find-the-count-of-monotonic-pairs-i';
// batch 141b — arrays/easy, arrays/medium, stack+arrays/hard, arrays+dp+binary-search/hard, arrays+graph/medium
import { problem as numberOfUnequalTriplets } from './number-of-unequal-triplets-in-array';
import { problem as maximizeSquareHoleArea } from './maximize-area-of-square-hole-in-grid';
import { problem as sumTotalStrengthOfWizards } from './sum-of-total-strength-of-wizards';
import { problem as maxEventsAttendedII } from './maximum-number-of-events-that-can-be-attended-ii';
import { problem as minimumOpsConvertNumber } from './minimum-operations-to-convert-number';
// batch 145 — arrays/medium, arrays+backtracking/medium, arrays+backtracking/hard, arrays/hard, math/hard
import { problem as countMaxBitwiseOrSubsets } from './count-number-of-max-bitwise-or-subsets';
import { problem as partitionKEqualSumSubsets } from './partition-to-k-equal-sum-subsets';
import { problem as minOpsArrayEqualToTarget } from './minimum-operations-to-make-array-equal-to-target';
import { problem as consecutiveNumbersSum } from './consecutive-numbers-sum';
// batch 147 — 3 new problems (medium: strings/math, arrays/easy, arrays/dp)
import { problem as applyBitwiseOpsStringsEqual } from './apply-bitwise-operations-to-make-strings-equal';
import { problem as minAreaCoverAllOnesI } from './find-the-minimum-area-to-cover-all-ones-i';
import { problem as maxTotalCostAlternatingSubarrays } from './maximum-total-cost-of-alternating-subarrays';
// batch 146 — register 7 orphan problems that had reference solutions
import { problem as reverseVowelsOfString } from './reverse-vowels-of-a-string';
import { problem as applyOpsToMakeStringEmpty } from './apply-operations-to-make-string-empty';
import { problem as findAllRecipesFromSupplies } from './find-all-possible-recipes-from-given-supplies';
import { problem as maxTotalDamageWithSpellCasting } from './maximum-total-damage-with-spell-casting';
import { problem as minDominoRotations } from './minimum-domino-rotations-for-equal-row';
import { problem as reorderRoutesToCity } from './reorder-routes-to-make-all-paths-lead-to-the-city-zero';
import { problem as countBeautifulSubarrays } from './count-the-number-of-beautiful-subarrays';
// batch 147 — arrays+math/medium, arrays+hash-map/medium, arrays/medium, arrays+math/medium
import { problem as findProductPivot } from './find-product-pivot';
import { problem as countSubarraysEqualBalance } from './count-subarrays-equal-balance';
import { problem as longestArithSubarray } from './longest-arithmetic-subarray';
import { problem as sumAllSubmatrixSums } from './sum-of-all-submatrix-sums';

// batch 144 — strings+stack/medium, arrays/medium, hash-map+simulation/medium
import { problem as minimumSwapsToMakeBalanced } from './minimum-swaps-to-make-balanced';
import { problem as findKthLargestXorCoordinateValue } from './find-kth-largest-xor-coordinate-value';
import { problem as tweetCountsPerFrequency } from './tweet-counts-per-frequency';
// batch 142b — arrays+stack/medium, arrays/medium, binary-indexed-tree+dp+arrays/hard
import { problem as beautifulTowersII } from './beautiful-towers-ii';
import { problem as minimumNumberOfFlipsTOMakeBinaryGridPalindromicII } from './minimum-number-of-flips-to-make-binary-grid-palindromic-ii';
import { problem as maximumBalancedSubsequenceSum } from './maximum-balanced-subsequence-sum';
// batch 145b — strings+hash-map/medium, arrays+dp/medium, arrays+dp/medium
import { problem as findTheLongestSubstringContainingVowelsInEvenCounts } from './find-the-longest-substring-containing-vowels-in-even-counts';
import { problem as minimizeTheDifferenceBetweenTargetAndChosenElements } from './minimize-the-difference-between-target-and-chosen-elements';
import { problem as maximumNumberOfOperationsWithTheSameScoreII } from './maximum-number-of-operations-with-the-same-score-ii';
// batch 146b — arrays+hash-map/medium, tree+graph/medium, arrays+math/medium, math+strings/medium, dp/medium
import { problem as kDivisibleElementsSubarrays } from './k-divisible-elements-subarrays';
import { problem as mostProfitablePath } from './most-profitable-path-in-a-tree';
import { problem as maxGroupsEnteringNextRound } from './maximum-number-of-groups-entering-next-round';
import { problem as findPalindromeFixedLength } from './find-palindrome-with-fixed-length';
import { problem as numberOfWaysKSteps } from './number-of-ways-to-reach-a-position-after-exactly-k-steps';
// batch 148 — math+dp/medium, dp/medium
import { problem as maxProductAfterCuttingRope } from './max-product-after-cutting-rope';
import { problem as minimumPathSumTriangle } from './minimum-path-sum-triangle';
// batch 149 — arrays+binary-search/medium, arrays+dp/medium, arrays+heap/medium
import { problem as maximizeScoreNumbersInRanges } from './maximize-score-numbers-in-ranges';
import { problem as maximumEnergyBoostFromTwoDrinks } from './maximum-energy-boost-from-two-drinks';
import { problem as kthNearestObstacleQueries } from './k-th-nearest-obstacle-queries';
// batch 149b — arrays/easy
import { problem as calculateAmountPaidInTaxes } from './calculate-amount-paid-in-taxes';
// batch 153 — 5 new problems (graph/medium, graph/medium, arrays/medium, arrays/medium, graph/medium)
import { problem as minVerticesReachAllNodes } from './minimum-number-of-vertices-to-reach-all-nodes';
import { problem as validPathInGrid } from './check-if-there-is-a-valid-path-in-a-grid';
import { problem as freqMostFreqElement } from './frequency-of-the-most-frequent-element';
import { problem as waysToMakeAFairArray } from './ways-to-make-a-fair-array';
import { problem as nearestExitFromEntranceMaze } from './nearest-exit-from-entrance-in-maze';
// batch 152 — 5 new problems (strings+arrays/easy+medium)
import { problem as countSegmentsInAString } from './number-of-segments-in-a-string';
import { problem as repeatedDnaSequences } from './repeated-dna-sequences';
import { problem as countVowelStringsRange } from './count-the-number-of-vowel-strings-in-range';
import { problem as removeAllOccurrencesSubstring } from './remove-all-occurrences-of-a-substring';
import { problem as findWordsFormedByChars } from './find-words-that-can-be-formed-by-characters';
// batch 151 — 6 orphan problems (medium+hard)
import { problem as allDivisionsHighestScore } from './all-divisions-with-the-highest-score-of-a-binary-array';
import { problem as convertArrayInto2D } from './convert-an-array-into-a-2d-array-with-conditions';
import { problem as replaceSubstringBalancedString } from './replace-the-substring-for-balanced-string';
import { problem as minimumCostValidPath } from './minimum-cost-to-make-at-least-one-valid-path-in-a-grid';
import { problem as queriesPermutationWithKey } from './queries-on-a-permutation-with-key';
import { problem as sumFlooredPairs } from './sum-of-floored-pairs';
// batch 150
import { problem as minimumTimeCollectAllApplesTree } from './minimum-time-to-collect-all-apples-in-a-tree';
import { problem as maximumUnitsOnATruck } from './maximum-units-on-a-truck';
import { problem as numberOfWaysToSplitAString } from './number-of-ways-to-split-a-string';
import { problem as meanArrayAfterRemovingSomeElements } from './mean-of-array-after-removing-some-elements';
import { problem as minimumOpsConvertTime } from './minimum-number-of-operations-to-convert-time';
// batch 150b — easy/arrays+hash-map, easy/arrays+math, easy/arrays+hash-map, easy/arrays+matrix
import { problem as findLuckyNumberInMatrix } from './find-lucky-number-in-matrix';
import { problem as maximumProductOfThreeNumbers } from './maximum-product-of-three-numbers';
import { problem as findingThreeDigitEvenNumbers } from './finding-3-digit-even-numbers';
import { problem as differenceOnesZerosRowAndColumn } from './difference-between-ones-zeros-in-row-and-column';
import { problem as countWaysRearrangeSticks } from './count-ways-to-rearrange-sticks-with-k-visible';
// batch 151 — linked-list/medium, linked-list/hard, union-find/medium, union-find/medium, shortest-path/medium, binary-indexed-tree/medium
import { problem as swapPairsLinkedList } from './swap-pairs-linked-list';
import { problem as reverseNodesKGroup } from './reverse-nodes-k-group';
import { problem as minimumSpanningTreeWeight } from './minimum-spanning-tree-weight';
import { problem as unionFindDynamicConnectivity } from './union-find-dynamic-connectivity';
import { problem as bellmanFordShortestPaths } from './bellman-ford-shortest-paths';
import { problem as bitPrefixSumUpdates } from './bit-prefix-sum-updates';
// batch 153 — arrays/medium, graph/medium, heap+simulation/medium
import { problem as equalSumArraysMinOps } from './equal-sum-arrays-with-minimum-number-of-operations';
import { problem as mapOfHighestPeak } from './map-of-highest-peak';
import { problem as numberOfOrdersInBacklog } from './number-of-orders-in-the-backlog';
// batch 153b — linked-list×2, union-find, shortest-path, heap, simulation
import { problem as partitionLinkedListAroundValue } from './partition-linked-list-around-value';
import { problem as mergeKSortedLinkedLists } from './merge-k-sorted-linked-lists';
import { problem as friendGroupsUnionFind } from './friend-groups-union-find';
import { problem as dijkstraSingleSourceShortestPath } from './dijkstra-single-source-shortest-path';
import { problem as kthLargestAfterEachInsertion } from './kth-largest-after-each-insertion';
import { problem as simulateTrafficLights } from './simulate-traffic-lights';
// batch 154a — heap+arrays/medium, dp+binary-search/medium, strings+hash-map/medium, math+arrays/medium, arrays+hash-map+math/medium
import { problem as maximumEarningsFromTaxi } from './maximum-earnings-from-taxi';
import { problem as findLongestSpecialSubstringThrice } from './find-the-longest-special-substring-that-occurs-thrice-i';
import { problem as minimumCostMakeArrayEqualindromic } from './minimum-cost-to-make-array-equalindromic';
import { problem as identifyLargestOutlier } from './identify-the-largest-outlier-in-an-array';
// batch 154c — backtracking/hard, simulation/hard, simulation+binary-search/hard, hash-map+simulation/hard
import { problem as twentyFourGame } from './24-game';
import { problem as rangeModule } from './range-module';
import { problem as insertDeleteGetRandomDuplicatesAllowed } from './insert-delete-getrandom-duplicates-allowed';
import { problem as matchsticksToSquare } from './matchsticks-to-square';
// batch 151 — dp/hard, arrays/medium, strings+dp/medium, dp+bitset/hard
import { problem as findTheCountOfMonotonicPairsII } from './find-the-count-of-monotonic-pairs-ii';
import { problem as maximumStrengthOfAGroup } from './maximum-strength-of-a-group';
import { problem as minimumNumberOfValidStringsToFormTargetI } from './minimum-number-of-valid-strings-to-form-target-i';
import { problem as maximumTotalRewardUsingOperationsII } from './maximum-total-reward-using-operations-ii';
// batch 152 — simulation/medium, strings+dp/medium, arrays+hash-map/medium, arrays+heap/medium
import { problem as minimumMovesToCaptureTheQueen } from './minimum-moves-to-capture-the-queen';
import { problem as minimumSubstringPartitionEqualCharFreq } from './minimum-substring-partition-of-equal-character-frequency';
import { problem as maximumGoodSubarraySum } from './maximum-good-subarray-sum';
import { problem as maximalScoreAfterApplyingKOps } from './maximal-score-after-applying-k-operations';
// batch 153 — arrays/easy, graph/hard
import { problem as lastVisitedIntegers } from './last-visited-integers';
import { problem as countVisitedNodesInADirectedGraph } from './count-visited-nodes-in-a-directed-graph';
// batch 154 — shortest-path/medium, binary-indexed-tree/medium, union-find/hard
import { problem as minEdgeReversalsToDestination } from './minimum-edge-reversals-to-reach-destination';
import { problem as rangeUpdateRangeSumBit } from './range-update-range-sum-bit';
import { problem as findCriticalPseudoCriticalEdges } from './find-critical-and-pseudo-critical-edges-in-mst';
// batch 152b — arrays+math/medium, arrays+math+dp/medium, arrays+math/hard
import { problem as numberOfSubarraysHavingEvenProduct } from './number-of-subarrays-having-even-product';
import { problem as greatestSumDivisibleByThree } from './greatest-sum-divisible-by-three';
import { problem as constructProductMatrix } from './construct-product-matrix';
// batch 154b — trie/medium×3, trie/hard
import { problem as mapSumPairs } from './map-sum-pairs';
import { problem as magicDictionary } from './magic-dictionary';
import { problem as shortEncodingOfWords } from './short-encoding-of-words';
import { problem as implementMagicTrieStream } from './implement-magic-trie-stream';
// batch 156 — simulation/medium, graph/medium, graph/hard, dp+math/hard, binary-search+sliding-window/hard
import { problem as rotatingTheBox } from './rotating-the-box';
import { problem as maximumStarSumOfAGraph } from './maximum-star-sum-of-a-graph';
import { problem as buildAMatrixWithConditions } from './build-a-matrix-with-conditions';
import { problem as countOfIntegersWithDigitSum } from './count-of-integers-with-digit-sum';
import { problem as applyOperationsToMaximizeFrequencyScore } from './apply-operations-to-maximize-frequency-score';
// batch 155 — binary-search/medium, strings+hash-map/medium, arrays+math/medium, strings+two-pointers/medium, math/easy
import { problem as houseRobberIV } from './house-robber-iv';
import { problem as substringXorQueries } from './substring-xor-queries';
import { problem as minimumRectanglesToCoverPoints } from './minimum-rectangles-to-cover-points';
import { problem as shortestWayToFormString } from './shortest-way-to-form-string';
import { problem as smallestNumberWithAllSetBits } from './smallest-number-with-all-set-bits';
// batch 155r — dp/medium×2, dp/hard×2, arrays/medium, strings/hard, sliding-window/medium
import { problem as minimumScoreTriangulationPolygon } from './minimum-score-triangulation-polygon';
import { problem as nonNegativeIntegersWithoutConsecutiveOnes } from './non-negative-integers-without-consecutive-ones';
import { problem as countWaysToBuildGoodStrings } from './count-ways-to-build-good-strings';
import { problem as restoreTheArray } from './restore-the-array';
import { problem as numberOfWaysToFormATargetStringGivenADictionary } from './number-of-ways-to-form-a-target-string-given-a-dictionary';
import { problem as longestSubarrayWithAtMostKSum } from './longest-subarray-with-at-most-k-sum';
// batch 155b — design/easy, design/medium×2, design/hard
import { problem as recentCounter } from './recent-counter';
import { problem as peekingIterator } from './peeking-iterator';
import { problem as flattenNestedListIterator } from './flatten-nested-list-iterator';
import { problem as allOOneDataStructure } from './all-o-one-data-structure';
// batch 155c — graph/hard, binary-search+arrays/hard, arrays+dp/medium
import { problem as maximumEmployeesInvitedToMeeting } from './maximum-employees-invited-to-meeting';
import { problem as maximizeMinimumPoweredCity } from './maximize-minimum-powered-city';
import { problem as minimumTimeRemoveCarsIllegalGoods } from './minimum-time-remove-cars-illegal-goods';
// batch 156 — strings/medium, trie+backtracking/hard, union-find/hard, shortest-path/medium
import { problem as camelcaseMatching } from './camelcase-matching';
import { problem as wordSquares } from './word-squares';
import { problem as minimizeMalwareSpreadII } from './minimize-malware-spread-ii';
import { problem as pathWithMaxProbability } from './path-with-max-probability';
// batch 156b — tree/easy×1, tree/medium×1
import { problem as averageOfLevelsInBinaryTree } from './average-of-levels-in-binary-tree';
import { problem as allElementsInTwoBinarySearchTrees } from './all-elements-in-two-binary-search-trees';
// batch 156c — graph+shortest-path/hard, hash-map+binary-search/medium, binary-indexed-tree/hard
import { problem as findEdgesInShortestPaths } from './find-edges-in-shortest-paths';
import { problem as avoidFloodInTheCity } from './avoid-flood-in-the-city';
import { problem as minimumTimeToAccomplishAllTasks } from './minimum-time-to-accomplish-all-tasks';
// batch 157 — trie×4, trie+design×1, simulation×3, graph×1, arrays×2
// batch 157 — trie×4, trie+design×1; simulation/easy, simulation/medium×2, graph/medium, arrays/medium×2
import { problem as implementTrieII } from './implement-trie-ii-prefix-tree';
import { problem as wordFilter } from './word-filter';
import { problem as lexicographicalNumbers } from './lexicographical-numbers';
import { problem as kThSmallestInLexicographicOrder } from './k-th-smallest-in-lexicographic-order';
import { problem as designSearchAutocompleteSystem } from './design-search-autocomplete-system';
import { problem as theEmployeeThatWorkedOnTheLongestTask } from './the-employee-that-worked-on-the-longest-task';
import { problem as checkKnightTourConfiguration } from './check-knight-tour-configuration';
import { problem as theNumberOfTheSmallestUnoccupiedChair } from './the-number-of-the-smallest-unoccupied-chair';
import { problem as intervalsBetweenIdenticalElements } from './intervals-between-identical-elements';
import { problem as formArrayByConcatenatingSubarraysOfAnotherArray } from './form-array-by-concatenating-subarrays-of-another-array';
// batch 161 — math/medium, arrays+dp/medium, math+bs/medium, tree/medium
import { problem as strictlyPalindromicNumber } from './strictly-palindromic-number';
import { problem as sortingThreeGroups } from './sorting-three-groups';
import { problem as uglyNumberIii } from './ugly-number-iii';
import { problem as binaryTreeColoringGame } from './binary-tree-coloring-game';
// batch 165 — bit-manipulation/medium, strings/medium, bit-manipulation/medium, arrays/easy, strings/medium
import { problem as bitwiseOrsOfSubarrays } from './bitwise-ors-of-subarrays';
import { problem as checkIfAStringContainsAllBinaryCodesOfSizeK } from './check-if-a-string-contains-all-binary-codes-of-size-k';
import { problem as convertToBase2 } from './convert-to-base-2';
import { problem as flipAndInvertImage } from './flip-and-invert-image';
import { problem as numberOfStepsToReduceNumberInBinaryRepresentation } from './number-of-steps-to-reduce-a-number-in-binary-representation';
// batch 166 — arrays/easy, arrays+hash-map/medium, arrays+stack/hard, arrays+math/easy, arrays+heap/medium
import { problem as countLatticePointsInsideACircle } from './count-lattice-points-inside-a-circle';
import { problem as findingTheUsersActiveMinutes } from './finding-the-users-active-minutes';
import { problem as numberOfVisiblePeopleInAQueue } from './number-of-visible-people-in-a-queue';
import { problem as primeInDiagonal } from './prime-in-diagonal';
import { problem as removeStonesToMinimizeTheTotal } from './remove-stones-to-minimize-the-total';
// batch 167 — graph+backtracking/medium, graph+union-find/medium, arrays+two-pointers/medium, arrays+two-pointers/medium
import { problem as allPathsFromSourceToTarget } from './all-paths-from-source-to-target';
import { problem as countUnreachablePairsOfNodesInUndirectedGraph } from './count-unreachable-pairs-of-nodes-in-an-undirected-graph';
import { problem as partitionArrayIntoDisjointIntervals } from './partition-array-into-disjoint-intervals';
import { problem as removeDuplicatesFromSortedArrayII } from './remove-duplicates-from-sorted-array-ii';
// batch 168 — 9 orphaned problems now registered (batches 158/159 that lost registration during merges)
import { problem as minimumCostHomecomingRobotInGrid } from './minimum-cost-homecoming-of-a-robot-in-a-grid';
import { problem as sumOfScoresOfBuiltStrings } from './sum-of-scores-of-built-strings';
import { problem as countOfIntegers } from './count-of-integers';
import { problem as numberOfWaysToEarnPoints } from './number-of-ways-to-earn-points';
import { problem as uniqueLength3PalindromicSubsequences } from './unique-length-3-palindromic-subsequences';
import { problem as minimumWhiteTilesAfterCoveringWithCarpets } from './minimum-white-tiles-after-covering-with-carpets';
import { problem as specialPermutations } from './special-permutations';
import { problem as countSubstringsWithKFrequencyCharactersII } from './count-substrings-with-k-frequency-characters-ii';
import { problem as sumOfImbalanceNumbersOfAllSubarrays } from './sum-of-imbalance-numbers-of-all-subarrays';
// batch 164 — simulation/hard, bit-manipulation/easy, math/medium, arrays/medium, binary-search/medium,
//             trie/hard, bit-manipulation/hard, arrays/hard, arrays/hard
import { problem as amountOfNewAreaPaintedEachDay } from './amount-of-new-area-painted-each-day';
import { problem as convertNumberToHexadecimal } from './convert-number-to-hexadecimal';
import { problem as countSpecialNumbers } from './count-special-numbers';
import { problem as minimumDeletionsToMakeArrayBeautiful } from './minimum-deletions-to-make-array-beautiful';
import { problem as minimumTimeToFinishTrips } from './minimum-time-to-finish-trips';
import { problem as pyramidTransitionNumbers } from './pyramid-transition-numbers';
import { problem as paintingAGridWithThreeDifferentColors } from './painting-a-grid-with-three-different-colors';
import { problem as maximumSpendingAfterBuyingItems } from './maximum-spending-after-buying-items';
import { problem as numberOfGoodBinaryStrings } from './number-of-good-binary-strings';
// batch 163 — strings/easy, strings/medium, arrays/hard, strings/medium, arrays/easy, trie/hard×2
import { problem as reformatDate } from './reformat-date';
import { problem as maximumValueAfterInsertion } from './maximum-value-after-insertion';
import { problem as recoverTheOriginalArray } from './recover-the-original-array';
import { problem as constructSmallestNumberFromDiString } from './construct-smallest-number-from-di-string';
import { problem as minimumDifferenceHighestLowestKScores } from './minimum-difference-highest-lowest-k-scores';
import { problem as countPairsWithXorInARange } from './count-pairs-with-xor-in-a-range';
import { problem as maximumXorWithElementFromArray } from './maximum-xor-with-element-from-array';
// batch 162 — arrays/medium, strings/medium, design/medium, arrays/medium, arrays/medium,
//             bit-manipulation/medium×2, math/easy, strings/medium×2, arrays/medium
import { problem as collectingChocolates } from './collecting-chocolates';
import { problem as countSubstringsWithFixedRatio } from './count-substrings-with-fixed-ratio';
import { problem as designBitset } from './design-bitset';
import { problem as frogJumpII } from './frog-jump-ii';
import { problem as maximumAndValueOfNumbersInArray } from './maximum-and-value-of-numbers-in-array';
import { problem as minimumFlipsToMakeAOrBEqualToC } from './minimum-flips-to-make-a-or-b-equal-to-c';
import { problem as numberOfIntegersWithEvenDigitSum } from './number-of-integers-with-even-digit-sum';
import { problem as partitioningIntoMinimumNumberOfDeciBinaryNumbers } from './partitioning-into-minimum-number-of-deci-binary-numbers';
import { problem as splitStringIntoMaximumNumberOfUniqueSubstrings } from './split-a-string-into-the-maximum-number-of-unique-substrings';
import { problem as tupleWithSameProduct } from './tuple-with-same-product';
import { problem as whereWillTheBallFall } from './where-will-the-ball-fall';
// batch 163 — strings+arrays/medium, arrays+dp/hard, strings+dp/hard, arrays+graph/hard, arrays+dp/hard
import { problem as numberOfSameEndSubstrings } from './number-of-same-end-substrings';
import { problem as countFertilePyramidsInALand } from './count-fertile-pyramids-in-a-land';
import { problem as maximumDeletionsOnAString } from './maximum-deletions-on-a-string';
import { problem as collectCoinsInATree } from './collect-coins-in-a-tree';
import { problem as maximumAndSumOfArray } from './maximum-and-sum-of-array';
// batch 165 — design+stack/easy, arrays+stack/medium×2, arrays+stack+dp/medium, arrays+sliding-window/hard
import { problem as minimumStack } from './minimum-stack';
import { problem as maximumChunksToMakeSorted } from './maximum-chunks-to-make-sorted';
import { problem as findTheMostCompetitiveSubsequence } from './find-the-most-competitive-subsequence';
import { problem as minimumCostTreeFromLeafValues } from './minimum-cost-tree-from-leaf-values';
import { problem as shortestSubarrayWithSumAtLeastK } from './shortest-subarray-with-sum-at-least-k';
// batch 165 — dp/medium×2, tree/medium×3
import { problem as bestTimeBuySellStockWithFee } from './best-time-to-buy-and-sell-stock-with-transaction-fee';
import { problem as minimumCostForCuttingStick } from './minimum-cost-for-cutting-stick';
import { problem as pseudoPalindromicPathsInBinaryTree } from './pseudo-palindromic-paths-in-a-binary-tree';
import { problem as stepByStepDirectionsFromBinaryTreeNode } from './step-by-step-directions-from-a-binary-tree-node-to-another';
export const problems: readonly Problem[] = [
  // arrays — easy
  runningSum,
  peakElementCount,
  rotateLeftOne,
  maxSubarray,
  missingNumber,
  containsDuplicate,
  containsDuplicateII,
  pascalsTriangle,
  richestCustomerWealth,
  maximumUnitsOnTruck,
  shuffleTheArray,
  countItemsMatchingRule,
  summaryRanges,
  findMaxMin,
  findPositiveIntegerWithNegative,
  findPivotIndex,
  maxConsecutiveOnes,
  plusOne,
  kidsWithCandies,
  monotonicArray,
  buildArrayFromPermutation,
  concatenationOfArray,
  thirdMaximumNumber,
  replaceElementsWithGreatest,
  highestAltitude,
  maximumDifferenceIncreasingElements,
  rangeSum,
  findAllNumbersDisappeared,
  checkIfNAndDoubleExist,
  largestNumberAtLeastTwice,
  specialPositionsBinaryMatrix,
  matrixDiagonalSum,
  sortArrayByParity,
  leftAndRightSumDifferences,
  minimumValuePositiveStepSum,
  countNumberOfPairs,
  validMountainArray,
  canPlaceFlowers,
  maximumProductTwoElements,
  increasingTripletSubsequence,
  numberOfRectangles,
  largestAltitude,
  sumOfOddLengthSubarrays,
  minimumSumMountainTriplet,
  findNumbersEvenDigits,
  mergeSortedArray,
  assignCookies,
  relativeRanks,
  maximumCount,
  addDigits,
  degreeOfArray,
  checkArrayArithmeticProgression,
  howManyNumbersSmallerThanCurrent,
  findTargetIndicesAfterSorting,
  minimumNumberOfMovesSeat,
  numberOfLaserBeams,
  maxAverageSubarray,
  consecutiveCharacters,
  countItemsWithTheGivenSum,
  numberOfEmployeesCanMeet,
  partitionArrayAccordingToGivenPivot,
  sortEvenOddIndices,
  countEqualAndDivisiblePairs,
  countElementsWithMaximumFrequency,
  xorOperationInAnArray,
  getMaximumInGeneratedArray,
  flippingAnImage,
  countGoodTriplets,
  matrixBlockSum,
  singleNumber,
  toeplitzMatrix,
  transposeMatrix,
  sortArrayByParityII,
  numberOfArithmeticTriplets,
  // arrays — medium
  countFairPairs,
  minimumAverageDifference,
  rearrangeArrayElementsBySign,
  numberOfZeroFilledSubarrays,
  rangeSumQuery2D,
  minimumArrowsBurstBalloons,
  setMatrixZeroes,
  removeDuplicatesSortedArrayII,
  meetingRoomsII,
  hIndex,
  majorityElementII,
  maximumProductWordLengths,
  insertInterval,
  subsetsII,
  mergeIntervals,
  nonOverlappingIntervals,
  subsets,
  combinationSum,
  combinationSumIII,
  combinationSumII,
  permutations,
  spiralMatrixII,
  kClosestPoints,
  findDisappearedNumbers,
  minimumAbsoluteDifference,
  luckyNumbersInMatrix,
  countNumberOfTexts,
  gasStation,
  maxSubarrayCircular,
  checkSortedRotated,
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
  gameOfLife,
  missingRanges,
  queueReconstructionByHeight,
  checkIfArrayPairsDivisibleByK,
  validTriangleNumber,
  maxNumberKSumPairs,
  minimumTimeRopeColorful,
  numberOfSubsequencesTargetSum,
  carPooling,
  fruitIntoBaskets,
  minimumSwapsStringBalanced,
  sumOfSubarrayRanges,
  shortestUnsortedContinuousSubarray,
  maxChunksToMakeSorted,
  // strings — easy
  reverseWordsInStringIII,
  makeStringGreat,
  minimumStringLength,
  maximumScoreAfterSplittingString,
  findCommonCharacters,
  countingWordsWithGivenPrefix,
  addBinary,
  goalParser,
  designGoalParser,
  detectCapital,
  repeatedSubstringPattern,
  checkIfPangram,
  truncateSentence,
  reverseStringII,
  determineIfHalvesAlike,
  shuffleString,
  decodeTheMessage,
  removeTrailingZeros,
  reversePrefixOfWord,
  countWordsWithGivenPrefix,
  largestOddNumberInString,
  firstLetterToAppearTwice,
  countAsterisks,
  uniqueEmailAddresses,
  countBinarySubstrings,
  reverseOnlyLetters,
  backspaceStringCompare,
  vowelTally,
  reverseWordsOrder,
  isPalindromeClean,
  compressString,
  longestCommonPrefix,
  reverseString,
  capitalizeWords,
  lengthOfLastWord,
  defangingIpAddress,
  toLowerCase,
  checkIfTwoStringArraysEquivalent,
  cellsInRange,
  rotateString,
  percentageOfLetterInString,
  countCommonWordsOneOccurrence,
  checkTwoStringsAlmostEquivalent,
  rearrangeCharactersToMakeTarget,
  divideStringIntoGroups,
  countVowelSubstrings,
  checkPrefixString,
  sumDigitsStringConvert,
  maximumNumberOfStringPairs,
  countPairsSumLessThanTarget,
  neitherMinimumNorMaximum,
  countVowelStringsInRange,
  findKthPositive,
  minimumLengthStringOperations,
  largestIntegerDigitSwaps,
  uniqueMorseCodeWords,
  increasingDecreasingString,
  numberOfGoodPairs,
  checkIfArraySortedRotated,
  maximumProductDifference,
  maximumProductAdjacentElements,
  minimumSumFourDigitNumber,
  countPairsAbsoluteDifferenceK,
  findClosestNumberToZero,
  checkIfAllCharsHaveEqualOccurrences,
  countEvenNumbers,
  countSegmentsInString,
  widestVerticalArea,
  convert1dArrayInto2dArray,
  findThePivotInteger,
  splitStringBalance,
  // strings — medium
  findRepeatedDnaSequences,
  maximumSumCircularSubarray,
  numberOfDistinctAverages,
  minimumDeletionsCharFrequencies,
  bullsAndCows,
  replaceWords,
  minimumTimeDifference,
  stringToIntegerAtoi,
  implementTrie,
  customSortString,
  generateParentheses,
  palindromePartitioning,
  longestPalindromicString,
  countPalindromicSubstrings,
  decodeString,
  minimumRemoveToMakeValid,
  reverseStringWords,
  stringMultiply,
  isSubsequenceMedium,
  characterReplacement,
  stringCompression,
  zigzagConversion,
  integerToRoman,
  countHomogenousSubstrings,
  appendCharactersToMakeSubsequence,
  // hash-map — easy
  twoOutOfThree,
  checkIfAllCharactersAppearTwice,
  findDifferenceOfTwoArrays,
  findAnagramMappings,
  validAnagram,
  pathCrossing,
  firstUniqueChar,
  findWordsFromChars,
  jewelsAndStones,
  minimumOperationsAlternating,
  minimumOperationsMakeArrayEmpty,
  maximumNumberOfBalloons,
  countCharacters,
  findWordsFormedByCharacters,
  uniqueNumberOfOccurrences,
  findLuckyInteger,
  minimumIndexSumOfTwoLists,
  twoSumIndices,
  mostFrequentValue,
  anagramCheck,
  wordFrequency,
  countGoodPairs,
  intersectionTwoArrays,
  subarraySumEqualsK,
  ransomNote,
  isomorphicStrings,
  wordPattern,
  sumOfUniqueElements,
  findWinners,
  // hash-map — medium
  minimumRoundsToCompleteTasks,
  minimumStepsMakeAnagram,
  topKFrequentWords,
  groupAnagrams,
  topKFrequentElements,
  longestConsecutiveSequence,
  findAllAnagramsInString,
  maximumErasureValue,
  longestWordInDictionary,
  maxSumPairEqualDigits,
  timeBasedKeyValueStore,
  // hash-map — hard
  fourSumII,
  maxPointsOnLine,
  lruCache,
  lfuCache,
  // two-pointers — hard
  trappingRainWater,
  fourSum,
  sortList,
  subarraysKDistinct,
  // two-pointers — medium
  findDuplicateNumber,
  threeSumClosest,
  boatsToSavePeople,
  partitionLabels,
  nextPermutation,
  intervalListIntersections,
  longestMountainInArray,
  // two-pointers — easy
  twoSumLessThanK,
  squaresOfSortedArray,
  reverseVowels,
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
  maximizeConfusionExam,
  countNiceSubarrays,
  frequencyOfMostFrequentElement,
  maxConsecutiveOnesIII,
  maximumVowels,
  longestSubarrayAfterDeleting,
  minimumSizeSubarraySum,
  atMostKDistinct,
  permutationInString,
  subarrayProductLessThanK,
  minimumOperationsReduceX,
  numberOfSubstrings,
  longestTurbulentSubarray,
  // sliding-window — easy
  minimumRecolorsToGetKConsecutiveBlack,
  minimumDifferenceKScores,
  maxWindowSum,
  maximumAverageSubarray,
  minimumRecolors,
  longestEqualRun,
  minWindowAverage,
  longestUniqueWindow,
  minSubarrayLength,
  // binary-search — easy
  findSmallestLetterGreaterThanTarget,
  countNegativesInSortedMatrix,
  findTargetIndex,
  integerSquareRoot,
  firstNotSmaller,
  binarySearchRange,
  isPerfectSquare,
  searchInsertPosition,
  // binary-search — medium
  findKClosestElements,
  search2dMatrixII,
  findKPairsSmallestSums,
  searchRotatedSorted,
  findMinimumRotated,
  singleElementSorted,
  findFirstAndLastPosition,
  search2dMatrix,
  kokoEatingBananas,
  findPeakElement,
  countRectanglesContainingPoint,
  mostProfitAssigningWork,
  continuousSubarraySum,
  equalRowColumnPairs,
  determineIfTwoStringsClose,
  minimumDaysToMakeMBouquets,
  // binary-search — hard
  findKthSmallestPairDistance,
  findMinRotatedII,
  medianTwoSortedArrays,
  splitArrayLargestSum,
  capacityToShip,
  // stack — easy
  numberOfStudentsEatingLunch,
  implementQueueUsingStacks,
  balancedBrackets,
  removeAdjacentDupes,
  nextGreaterElement,
  dailyTemperatures,
  evaluateRpn,
  minStack,
  maximumNestingDepth,
  // stack — medium
  minimumRemoveToMakeValidParentheses,
  validateStackSequences,
  pattern132,
  onlineStockSpan,
  simplifyPath,
  nextGreaterElementII,
  asteroidCollision,
  scoreOfParentheses,
  validParenthesisString,
  carFleet,
  // stack — hard
  basicCalculator,
  sumSubarrayMinimums,
  removeKDigits,
  // heap — easy
  lastStoneWeight,
  // heap — medium
  kthLargestInStream,
  reorganizeString,
  minimumCostToConnectSticks,
  sortCharactersByFrequency,
  // heap — hard
  medianFromDataStream,
  maximumFrequencyStack,
  // heap — medium (new)
  totalCostHireKWorkers,
  maximumSubsequenceScore,
  processTasksUsingServers,
  smallestNumberInInfiniteSet,
  // math/backtracking — medium (new)
  grayCode,
  // dynamic-programming — new
  countVowelsPermutation,
  minimumCostCutStick,
  strangePrinter,
  // graph — new
  snakesAndLadders,
  swimInRisingWater,
  numberOfWaysArriveDestination,
  // backtracking — new
  nQueensII,
  removeInvalidParentheses,
  // binary-search — easy (new)
  kthMissingPositiveNumber,
  // math — easy
  sumOfMultiples,
  numberOfSteps,
  findTheDifference,
  fizzBuzz,
  hammingWeight,
  digitSum,
  isPrimeNumber,
  greatestCommonDivisor,
  countDivisors,
  powerOfTwo,
  excelSheetColumnTitle,
  longestPalindromeBuild,
  numberOfOneBits,
  singleNumberII,
  powerOfThree,
  isPowerOfFour,
  toHex,
  numberComplement,
  subtractProductAndSum,
  base7,
  reverseBits,
  countAndSay,
  fibonacciNumber,
  sumOfSquares,
  sumOfSquaresSpecialElements,
  climbingStairs,
  romanToInteger,
  palindromeNumber,
  excelColumnNumber,
  sumOfTwoIntegers,
  largestPerimeterTriangle,
  countOddNumbersInInterval,
  maximumProductThreeNumbers,
  averageSalaryExcludingMinMax,
  findNUniqueIntegersSumToZero,
  decodeXoredArray,
  signOfProductArray,
  convertTemperature,
  maximum69Number,
  countOfMatchesTournament,
  nthTribonacciNumber,
  sumOfAllSubsetXorTotals,
  // math — hard
  fractionToRecurringDecimal,
  integerToEnglishWords,
  // math — medium
  factorialTrailingZeroes,
  bitwiseAndOfNumbersRange,
  minimumMovesEqualArray,
  multiplyStrings,
  waterAndJug,
  countTripletsXor,
  taskScheduler,
  countPrimesSieve,
  countPrimesLessThan,
  powXN,
  reverseInteger,
  happyNumber,
  maximumSwap,
  robotBoundedInCircle,
  // arrays — hard
  maximumWidthRamp,
  candy,
  nQueens,
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
  minimumCostForTickets,
  stoneGameII,
  minimumFallingPathSum,
  champagneTower,
  stoneGame,
  longestStringChain,
  houseRobber,
  houseRobberII,
  wiggleSubsequence,
  largestDivisibleSubset,
  coinChange,
  longestCommonSubsequence,
  minimumPathSum,
  decodeWays,
  partitionEqualSubsetSum,
  perfectSquares,
  targetSum,
  nthUglyNumber,
  triangle,
  interleavingString,
  uniquePathsII,
  numberOfDiceRolls,
  coinChangeII,
  bestTimeBuySellCooldown,
  longestArithmeticSubsequence,
  minimumCostTickets,
  uniqueBinarySearchTrees,
  flipStringToMonotoneIncreasing,
  maximumLengthSubarrayPositiveProduct,
  // dynamic-programming — hard
  bestTimeBuySellIII,
  wordBreakII,
  decodeWaysII,
  longestPalindromicSubsequence,
  palindromePartitioningMinCuts,
  maximumProductCutting,
  regularExpressionMatching,
  burstBalloons,
  wildcardMatching,
  dungeonGame,
  // linked-list — easy
  removeLinkedListElements,
  deleteNodeInLinkedList,
  reverseLinkedList,
  linkedListCycle,
  mergeTwoSortedLinkedLists,
  middleOfLinkedList,
  palindromeLinkedList,
  intersectionTwoLinkedLists,
  // linked-list — medium
  splitLinkedListInParts,
  removeNthFromEnd,
  oddEvenLinkedList,
  addTwoNumbers,
  reorderList,
  swapNodesInPairs,
  partitionList,
  reverseLinkedListII,
  rotateList,
  copyListWithRandomPointer,
  // linked-list — hard
  mergeKSortedLists,
  reverseNodesInKGroup,
  // graph — easy
  findCenterOfStarGraph,
  floodFill,
  findTheTownJudge,
  numberOfProvinces,
  findIfPathExists,
  // graph — medium
  numberOfEnclaves,
  shortestPathBinaryMatrix,
  accountsMerge,
  wordSearch,
  surroundedRegions,
  graphValidTree,
  zeroOneMatrix,
  numberOfIslands,
  courseSchedule,
  maxAreaOfIsland,
  rottingOranges,
  keysAndRooms,
  cloneGraph,
  courseScheduleII,
  pacificAtlantic,
  networkDelayTime,
  numberOfConnectedComponents,
  redundantConnection,
  isGraphBipartite,
  allPathsSourceTarget,
  minimumHeightTrees,
  findEventualSafeStates,
  jumpGameIII,
  // graph — hard
  shortestBridge,
  jumpGameIV,
  wordLadder,
  alienDictionary,
  criticalConnections,
  longestIncreasingPathMatrix,
  minimumGeneticMutation,
  busRoutes,
  // graph + backtracking — hard
  wordSearchII,
  // arrays + backtracking — hard
  sudokuSolver,
  // arrays + backtracking — medium
  combinations,
  beautifulArrangement,
  beautifulArrangementII,
  // backtracking — hard
  maxScoreWordsFormed,
  // strings + backtracking — hard
  expressionAddOperators,
  // strings + backtracking — medium
  restoreIpAddresses,
  // strings + backtracking — easy
  letterCasePermutation,
  // tree — easy
  balancedBinaryTree,
  minimumDepthBinaryTree,
  binaryTreeLevelOrderBottom,
  maxDepthBinaryTree,
  symmetricTree,
  invertBinaryTree,
  binaryTreePaths,
  pathSum,
  diameterOfBinaryTree,
  sameTree,
  sumOfLeftLeaves,
  leafSimilarTrees,
  twoSumIVBST,
  binaryTreeTilt,
  averageOfLevels,
  rangeSumOfBST,
  // tree — medium
  binaryTreePruning,
  countCompleteTreeNodes,
  populatingNextRightPointers,
  validateBst,
  levelOrderTraversal,
  binaryTreeRightSideView,
  lowestCommonAncestorBst,
  countGoodNodes,
  constructBinaryTree,
  kthSmallestBst,
  zigzagLevelOrder,
  flattenBinaryTree,
  lowestCommonAncestorBinaryTree,
  sumRootToLeaf,
  pathSumIII,
  houseRobberIII,
  maximumWidthBinaryTree,
  deepestLeavesSum,
  // tree — hard
  binaryTreeMaxPathSum,
  serializeBinaryTree,
  verticalOrderTraversal,
  // arrays — easy (new batch)
  studentsUnableToEatLunch,
  createTargetArrayGivenOrder,
  maximumAscendingSubarraySum,
  minimumTimeVisitingAllPoints,
  // arrays — medium (new)
  minimumConsecutiveCardsPickup,
  // math — easy (new)
  divisorGame,
  // arrays — easy (new)
  largestLocalValuesMatrix,
  // strings — easy (new)
  percentageLetterInString,
  // arrays — medium (new)
  nonDecreasingArray,
  numberOfWeakCharacters,
  arithmeticSlices,
  minimumSwapsGroupAllOnes,
  // strings + sliding-window — medium
  maximumNumberVowelsSubstring,
  // arrays + hash-map — medium (new)
  kDiffPairsInArray,
  handOfStraights,
  minimumDominoRotations,
  // heap — medium (new)
  furthestBuildingLadders,
  // heap — hard (new)
  ipo,
  smallestRangeCoveringKLists,
  // arrays — easy (new)
  relativeSortArray,
  // backtracking — medium (new)
  permutationsII,
  letterTilePossibilities,
  differentWaysAddParentheses,
  // math + dp — medium/easy (new)
  integerBreak,
  minimumCostMoveChips,
  binaryWatch,
  // strings — medium (new)
  minimumAddMakeValidParentheses,
  palindromicSubstrings,
  partitionString,
  // math + dp — medium (new)
  uglyNumberII,
  // tree — medium (new)
  deleteNodeInBst,
  insertIntoBst,
  // heap — medium (new)
  minimumCostConnectPoints,
  // stack — medium (new)
  numberOfVisiblePeopleInQueue,
  // dp — medium (new)
  combinationSumIv,
  countSortedVowelStrings,
  // stack — easy (new)
  validParentheses,
  // stack — medium (new)
  evaluateReversePolishNotation,
  exclusiveTimeOfFunctions,
  // arrays — easy (new)
  moveZeroes,
  // strings — easy (new)
  mergeStringsAlternately,
  robotReturnToOrigin,
  // dp — medium (new)
  uncrossedLines,
  // heap — medium (new)
  courseScheduleIII,
  // arrays + math — easy (new)
  buyTwoChocolates,
  // arrays + hash-map — easy (new)
  mostFrequentEvenElement,
  // strings — easy (new)
  findFirstPalindromicString,
  // arrays + hash-map — medium (new)
  minimumNumberOperationsMakeArrayEmpty,
  // tree — medium (new)
  maximumDifferenceBetweenNodeAndAncestor,
  // dp + sliding-window — medium (new)
  jumpGameVI,
  // arrays — medium (new)
  longestSubarrayMaxBitwiseAnd,
  // heap — medium (new)
  maximumEventsCanAttend,
  // tree — medium (new)
  countNodesEqualAverageSubtree,
  maximumLevelSumBinaryTree,
  // arrays — easy (new)
  minimumDistanceValue,
  // arrays + hash-map — medium (new)
  minimumOperationsMakeArrayAlternating,
  // strings — easy (new)
  redistributeCharactersMakeAllStringsEqual,
  // tree — medium (new)
  checkCompletenessBinaryTree,
  // linked-list — medium (new)
  maximumTwinSumLinkedList,
  // arrays + sliding-window — medium (new)
  kRadiusSubarrayAverages,
  // strings + dp — medium/hard (new)
  numberOfWaysSelectBuildings,
  totalAppealOfString,
  // graph — medium (new)
  findCitySmallestNumberNeighbors,
  // tree + graph — medium (new)
  minimumFuelCostReportCapital,
  // arrays + math — medium (new)
  maximumProductOfWordLengths,
  // graph — medium (new)
  asFarFromLandAsPossible,
  cheapestFlightsWithinKStops,
  // tree + binary-search — easy (new)
  sortedArrayToBst,
  // arrays + sliding-window — hard (new)
  countSubarraysFixedBounds,
  // tree + graph — medium (new)
  amountOfTimeForBinaryTreeToBeInfected,
  // arrays + stack — medium (new)
  countCollisionsOnRoad,
  // arrays + dp — medium (new)
  maximumAlternatingSubsequenceSum,
  // arrays — easy (new)
  countHillsValleys,
  findAllLonelyNumbers,
  // strings — easy (new)
  countPrefixesOfGivenString,
  findWordsContainingCharacter,
  // arrays + heap — easy (new)
  minimumNumberGame,
  // arrays + math — easy (new)
  maximumSumExactlyKElements,
  // arrays + two-pointers — easy (new)
  minimumCommonValue,
  // math — medium (new)
  countGoodNumbers,
  findPivotInteger,
  compareVersionNumbers,
  openTheLock,
  diagonalTraverse,
  reshapeTheMatrix,
  findTownJudge,
  possibleBipartition,
  findResultantArrayAfterRemovingAnagrams,
  longestZigZagPathBinaryTree,
  twoSumII,
  setMismatch,
  maximumGap,
  arrayPartition,
  powerOfFour,
  validPalindromeII,
  bulbSwitcher,
  selfDividingNumbers,
  studentAttendanceRecordI,
  licenseKeyFormatting,
  keyboardRow,
  longestUncommonSubsequenceI,
  perfectNumber,
  arrangeCoins,
  nthDigit,
  findTheWinner,
  countNegativeNumbers,
  canMakeArithmeticProgression,
  firstBadVersion,
  numberOfSegmentsInString,
  findModeBst,
  finalValueAfterOperations,
  findOriginalArrayFromDoubled,
  numberOfStudentsUnableToEatLunch,
  maximumNumberOfWordsFoundInSentences,
  capitalizeTheTitle,
  hammingDistance,
  singleNumberIII,
  minimumOperationsMakeArrayIncreasing,
  rankTransformArray,
  finalValueOperations,
  twoCityScheduling,
  checkIfStraightLine,
  binaryGap,
  designHashmap,
  contiguousArray,
  shiftingLetters,
  convertBstToGreaterTree,
  distributeCoinsBinaryTree,
  flipColumnsForMaximumEqualRows,
  deleteColumnsSortedIII,
  minimumBitFlips,
  smallestEvenMultiple,
  specialArrayGreaterEqual,
  countPairsTwoArrays,
  convertTimeHhmm,
  findPlayersZeroLosses,
  checkDistancesFairNodes,
  minimumRoundsCompleteTasks,
  largestCombinationBitwiseAnd,
  sortThePeople,
  baseballGame,
  findChampionGraph,
  countDigits,
  applyOperations,
  minimumMovesToSeat,
  ringsAndRods,
  findGcdOfArray,
  keepMultiplyingFoundValues,
  percentagesOfLetter,
  maximumBagsFullCapacity,
  findSubsequenceOfLengthK,
  oddStringDifference,
  bestTimeBuySellTransactionFee,
  maximalRectangle,
  stoneGameIII,
  maximumProfitJobScheduling,
  countOfSmallerNumbersAfterSelf,
  kThSymbolInGrammar,
  longestSubstringWithoutRepeating,
  decompressRunLengthEncoding,
  checkAlmostEquivalentStrings,
  minimumValuePositiveSteps,
  checkIfAllAsBeforeBs,
  checkIfWordEqualsSummation,
  waysToBuyPensPencils,
  checkArraySortedRotated,
  interpretString,
  mergeSimilarItems,
  countGoodRectangles,
  maximumPopulationYear,
  findKthBitNthBinaryString,
  countOperationsToObtainZero,
  designUndergroundSystem,
  sortVowelsInAString,
  minimumTimeToRepairCars,
  numberOfMatchingSubsequences,
  largestPositiveIntegerWithNegative,
  maximizeSumKElements,
  checkIfAcronym,
  countPairsAbsoluteDiffK,
  numberOfArithmeticSubarrays,
  checkValidMatrix,
  countMaxFrequencyElements,
  minimumDifferenceAfterKRemovals,
  numberOfValidClockTimes,
  calculateMoneyInBank,
  scoreOfString,
  chalkReplacer,
  splitWithMinimumSum,
  maxDifferenceIncreasingElements,
  longestNiceSubarray,
  interchangeableRectangles,
  findTriangularSum,
  twoFurthestHousesDifferentColors,
  countLatticePointsCircle,
  nearestExitMaze,
  climbingStairsKSteps,
  maximumXorTwoNumbers,
  removeStonesToMinimizeTotal,
  maximizeHappinessOfSelectedChildren,
  findTheMaximumAchievableNumber,
  partitionArrayMaximumDifference,
  removeDuplicatesFromSortedListII,
  countNumberOfHomogenousSubstrings,
  stoneGameVI,
  countSpecialQuadruplets,
  findAllDuplicatesInArray,
  checkIfWordOccursAsPrefix,
  countSubarraysScoreLessThanK,
  excelSheetColumnNumber,
  jumpGameVII,
  longestSquareStreak,
  maximumBeautyArrayAfterApplyingOperation,
  maximumProductAfterKIncrements,
  pairsOfSongsTotalDivisibleBy60,
  alternatingDigitSum,
  countWaysToBuildGoodString,
  dividePlayersIntoTeamsOfEqualSkill,
  maximumNumberOfPairsInArray,
  minimizeMaximumPairSumInArray,
  minimumOperationsToExceedThresholdValueII,
  numberOfWaysToSplitArray,
  findTheIndexOfFirstOccurrence,
  integerReplacement,
  numberOfSmoothDescentPeriods,
  maximumMatrixSum,
  countNodesWithHighestScore,
  findRightInterval,
  circularSentence,
  minimumGardenPerimeter,
  groupPeopleGivenGroupSize,
  countNumberOfBadPairs,
  minimumChangesToMakeBinaryStringBeautiful,
  removeAllOccurrencesOfSubstring,
  minimumTimeToCompleteTrips,
  minimumSpeedToArriveOnTime,
  sumOfBeautyInTheArray,
  findAllPossibleRecipes,
  takeKOfEachCharacterFromLeftAndRight,
  minimumOperationsToMakeArrayXorEqualK,
  maximumOddBinaryNumber,
  minimumEqualSumTwoArrays,
  findScoreOfArrayAfterMarking,
  countCompleteDayPairs,
  checkIfMatrixIsXMatrix,
  determineColorOfChessboardSquare,
  faultyKeyboard,
  sumMultiples,
  countBeautifulPairs,
  minimumTimeToCollectAllApples,
  findPrefixCommonArrayOfTwoArrays,
  minimumTimeToCollectGarbage,
  longestSubarrayOfOnesAfterDeleting,
  minimumVerticesToReachAllNodes,
  countOddNumbersInIntervalRange,
  makeSumDivisibleByP,
  countZeroFilledSubarrays,
  checkWhetherTwoStringArraysEqual,
  minimumFlipsToMakeAOrBEqualC,
  makeArrayZeroBySubtractingEqualAmounts,
  findAllGroupsOfFarmland,
  mergeTripletsToFormTargetTriplet,
  replaceElementsWithGreatestOnRight,
  destroyAsteroids,
  maximumCountOfPositiveAndNegative,
  findTheOriginalArrayOfPrefixXor,
  separateDigitsInArray,
  numberOfPairsOfInterchangeableRectangles,
  optimalPartitionOfString,
  uniqueLengthThreePalindromicSubsequences,
  bitwiseXorOfAllPairings,
  numberOfRectanglesCanFormLargestSquare,
  maximizeNumberOfSubsequencesInAString,
  numberOfWaysToBuyPensAndPencils,
  sumOfDigitsOfStringAfterConvert,
  smallestValueOfRearrangedNumber,
  removingStarsFromString,
  findThePeaks,
  minimumPenaltyForAShop,
  kthDistinctStringInArray,
  countElementsWithStrictlySmallerAndGreater,
  largestPositiveIntegerThatExistsWithNegative,
  checkIfNumberHasEqualDigitCountAndDigitValue,
  decodeXorArray,
  maximumSplitOfPositiveEvenIntegers,
  minimumAverageOfSmallestAndLargestElements,
  countTestedDevicesAfterTestRuns,
  numberOfSubarraysWithGcdEqualToK,
  findSubsequenceOfLengthKWithLargestSum,
  minimumAbsoluteSumDifference,
  findTheKBeautyOfANumber,
  firstUniqueCharacterInString,
  longPressedName,
  removeOutermostParentheses,
  maximumNestingDepthOfParentheses,
  nextGreaterElementI,
  findAndReplacePattern,
  largest3SameDigitNumberInString,
  countNumberOfConsistentStrings,
  makeTheStringGreat,
  findTargetIndicesAfterSortingArray,
  numberOfEmployeesWhoMetTheTarget,
  intersectionOfTwoArraysIi,
  largestSubarrayLengthK,
  minimumTimeToTypeWord,
  checkIfOneStringSwapCanMakeStringsEqual,
  numberOfDifferentIntegersInString,
  checkIfArrayIsGood,
  countTheDigitsThatDivideTheNumber,
  findTheDifferenceOfTwoArrays,
  longestContinuousIncreasingSubsequence,
  findNumbersWithEvenNumberOfDigits,
  countNicePairsInAnArray,
  checkIfStringIsPrefixOfArray,
  removeTrailingZerosFromString,
  rearrangeSpacesBetweenWords,
  splitAStringInBalancedStrings,
  findGreatestCommonDivisorOfArray,
  removeAllAdjacentDuplicatesInString,
  semiOrderedPermutation,
  calculateDelayedArrivalTime,
  checkIfNumbersAreAscendingInSentence,
  findXorBeautyOfArray,
  numberOfWordsThatCanBeTyped,
  numberOfCommonFactors,
  sumOfAllOddLengthSubarrays,
  countOfIntegersWithOddDigitSum,
  replaceAllDigitsWithCharacters,
  minimumMovesToConvertString,
  minimumRecolorsToGetKConsecutiveBlackBlocks,
  convertTheTemperature,
  sortingTheSentence,
  findTheMaximumDivisibilityScore,
  minimumAmountOfTimeToFillCups,
  appendCharactersToStringToMakeSubsequence,
  countTotalNumberOfColoredCells,
  differenceBetweenElementSumAndDigitSumOfArray,
  minimumLengthOfStringAfterDeletingSimilarEnds,
  maximumNumberOfVowelsInSubstringOfGivenLength,
  categorizeBoxAccordingToCriteria,
  findTheMiddleIndexInArray,
  maximumAbsoluteSumOfAnySubarray,
  countSubstringsWithOnlyOneDistinctLetter,
  sumOfNumberAndItsReverse,
  sumOfAbsoluteDifferencesInSortedArray,
  numberOfSubarraysWithOddSum,
  numberOfPeopleAwareOfSecret,
  validWordAbbreviation,
  numberOfValidWordsInSentence,
  isSubsequence,
  findTheLongestBalancedSubstringOfBinaryString,
  countNumberOfDistinctIntegersAfterReverseOperations,
  mostFrequentNumberFollowingKey,
  minimumDifferenceBetweenHighestAndLowestOfKScores,
  findTheArrayConcVal,
  sortArrayByIncreasingFrequency,
  findAllKDistantIndices,
  numberOfBeautifulPairs,
  splitStringBySeparator,
  countVowelStringsInRanges,
  numberOfEvenOddBits,
  averageValueOfEvenNumbersDivisibleByThree,
  countPrefixSuffixPairs,
  minimumCostOfBuyingCandiesWithDiscount,
  findOriginalArrayFromPrefixXor,
  totalDistanceTraveled,
  deleteCharactersToMakeFancyString,
  threeConsecutiveOdds,
  countEqualAndDivisiblePairsInArray,
  minimumChangesToMakeAlternatingBinaryString,
  rotateFunction,
  maximumSumOfDistinctSubarraysWithLengthK,
  findTheSumOfEncryptedIntegers,
  maximumNumberOfWeeksForWhichYouCanWork,
  countCompleteSubarraysInAnArray,
  countSubarraysWhereMaxElementAppearsAtLeastKTimes,
  minimumIndexOfAValidSplit,
  lastMomentBeforeAntsFallOffAPlank,
  checkIfTwoChessboardSquaresHaveSameColor,
  countNumberOfTeams,
  removeColoredPiecesIfBothNeighborsAreSameColor,
  longestAlternatingSubarray,
  divisibleAndNonDivisibleSumsDifference,
  minimumElementAfterReplacementWithDigitSum,
  pickGifts,
  minimumOperationsToMakeArrayXorEqualToK,
  maximumCountOfPositiveIntegerAndNegativeInteger,
  numberOfStudentsDoingHomeworkAtAGivenTime,
  findTheXorOfNumbersWhichAppearTwice,
  minimumSumMountainTripletII,
  minimumOperationsToExceedThresholdValueI,
  maximumSubarray,
  meetingRooms,
  brickWall,
  numberOfLongestIncreasingSubsequence,
  kthSmallestElementInSortedMatrix,
  minimumKnightMoves,
  palindromePairs,
  searchSuggestionsSystem,
  arrayNesting,
  evaluateDivision,
  outOfBoundaryPaths,
  maximumIceCreamBars,
  countNumbersWithUniqueDigits,
  minimumCostToCutStick,
  findMinimumRotatedSortedArrayII,
  searchRotatedSortedArrayII,
  distinctSubsequences,
  minimumWindowSubsequence,
  reconstructItinerary,
  partitionKEqualSubsetSum,
  paintHouse,
  addStrings,
  palindromePartitioningII,
  wiggleSortII,
  stoneGameIV,
  minimumRefuelingStops,
  snapshotArray,
  paintHouseII,
  minimumMovesEqualArrayII,
  frogJump,
  kInversePairsArray,
  minimumCostHireKWorkers,
  randomPickWithWeight,
  findInMountainArray,
  findDuplicateNumberII,
  basicCalculatorII,
  maximumBinaryTree,
  nextGreaterElementIII,
  numberOfDigitOne,
  movingAverageFromDataStream,
  designAddAndSearchWords,
  serializeDeserializeBST,
  designCircularQueue,
  bestMeetingPoint,
  longestSubarrayOnesAfterDelete,
  reversePairs,
  minimumCostCutCake,
  spiralMatrixIII,
  textJustification,
  minimumOperationsMakeArrayContinuous,
  arithmeticSubarrays,
  minimumScorePath,
  maximumPointsFromCards,
  minimumAsciiDeleteSum,
  sumOfDistancesInTree,
  couplesHoldingHands,
  fallingSquares,
  constrainedSubsequenceSum,
  pseudoPalindromicPaths,
  numberOfNodesSameLabel,
  minimumCostTreeLeafValues,
  validPartitionArray,
  paintFence,
  minimumInsertionStepsPalindrome,
  longestSubarrayAbsDiffLimit,
  maximumSumTwoNonOverlappingSubarrays,
  numberOfClosedIslands,
  destinationCity,
  findWinnerTictactoe,
  maximumEatenApples,
  splitArrayFibonacci,
  maximumScorePerformingMultiplication,
  cherryPickup,
  countWaysBuildGoodString,
  profitableSchemes,
  countSquareSubmatrices,
  freedomTrail,
  guessNumberHigherOrLowerII,
  removePalindromicSubsequences,
  checkArrayFormation,
  minimumFallingPathSumII,
  scrambleString,
  predictTheWinner,
  russianDollEnvelopes,
  binaryTreeCameras,
  linkedListCycleII,
  addTwoNumbersII,
  maximumPerformanceOfTeam,
  minimumIntervalToIncludeEachQuery,
  minimumNumberOfTapsToWaterAGarden,
  onlineElection,
  countOfRangeSum,
  designLinkedList,
  maximumProductSubarray,
  deleteAndEarn,
  minimumTimeCollectApples,
  xorQueriesOfSubarray,
  sequentialDigits,
  countSubIslands,
  maximumProfitAssignment,
  longestPalindromicSubstring,
  maxProductWordLengths,
  slidingWindowMedian,
  minimumDifficultyJobSchedule,
  tallestBillboard,
  concatenatedWords,
  maxValueOfEquation,
  numberOfMusicPlaylists,
  minimumRemovals,
  countDifferentPalindromicSubsequences,
  paintingTheWalls,
  shortestPathAllKeys,
  stoneGameV,
  maximumSumThreeNonOverlappingSubarrays,
  minimumCostToMergeStones,
  palindromePartitioningIii,
  maximumHeightByStackingCuboids,
  minimumDaysToEatOranges,
  bestTeamWithNoConflicts,
  numberOfWaysToFormTarget,
  minimumXorSumOfTwoArrays,
  numberOfWaysToRearrangeSticksWithKSticksVisible,
  numberOfWaysToStayInSamePlaceAfterSomeSteps,
  minimumScoreTriangulationOfPolygon,
  minimumCostToMakeArrayEqual,
  maximumNumberOfAchievableTransferRequests,
  maximumEleganceOfKLengthSubsequence,
  minimumTotalDistanceTraveled,
  minimumIncompatibility,
  fairDistributionOfCookies,
  maximumProfitInJobScheduling,
  dota2Senate,
  timeNeededToInformAllEmployees,
  minesweeper,
  minimumScoreTriangulation,
  scoreAfterFlippingMatrix,
  beautifulArray,
  recoverBinarySearchTree,
  findDuplicateSubtrees,
  allPossibleFullBinaryTrees,
  cherryPickupII,
  detonateMaximumBombs,
  stoneGameVII,
  designBrowserHistory,
  knightDialer,
  paintHouseIII,
  maximizeDistanceToClosestPerson,
  minimumNumberOfVertices,
  pathWithMinimumEffort,
  pathWithMaximumProbability,
  videoStitching,
  subarraysDivByK,
  sumEvenAfterQueries,
  averageWaitingTime,
  sortAnArray,
  slidingPuzzle,
  knightProbabilityInChessboard,
  minimumDistanceBstNodes,
  secondMinimumNodeBinaryTree,
  meetingRoomsIII,
  minimumObstacleRemovalToReachCorner,
  maxSumOfRectangleNoLargerThanK,
  countUniqueCharactersOfAllSubstrings,
  zumaGame,
  findLongestValidObstacleCourse,
  bestSightseeingPair,
  findLongestSubstringVowelsEven,
  reverseSubstringsBetweenParentheses,
  designStackWithIncrement,
  minimumNumberOfFrogsCroaking,
  shortestPathVisitingAllNodes,
  minimumNumberOfWorkSessions,
  minimizeProductSum,
  countRangeSum,
  allPathsFromSourceLeadToDestination,
  jumpGameV,
  wordSubsets,
  maxChunksToMakeSortedII,
  countWaysToPlaceHouses,
  stoneGameVIII,
  stoneGameIX,
  maximumScoreRemovingStones,
  numberOfAtoms,
  findAllPeopleWithSecret,
  platesBetweenCandles,
  minimumCostToMakeAllCharactersEqual,
  maximumConsecutiveFloorsWithoutSpecialFloors,
  minimumMovesToReachTargetScore,
  maximumSegmentSumAfterRemovals,
  primePalindrome,
  carFleetII,
  advantageShuffle,
  longestRepeatingCharacterReplacement,
  subarraysWithKDifferentIntegers,
  binarySubarraysWithSum,
  reduceArraySizeToTheHalf,
  numberOfWaysToDivideALongCorridor,
  deleteOperationForTwoStrings,
  productOfArrayExceptSelf,
  minimumMovesToEqualArrayElements,
  smallestDivisorGivenThreshold,
  additiveNumber,
  uniquePathsIii,
  raceCar,
  minimumCostToMakeValidParentheses,
  minimumScoreOfPath,
  countOperationsToObtainZeroIi,
  minimumDeletionsToBalanceParentheses,
  minimumPathCostInAGrid,
  countWaysGroupOverlappingRanges,
  takeGiftsFromTheRichestPile,
  findAllGoodIndices,
  partitionArrayIntoThreePartsWithEqualSum,
  secondLargestDigitInString,
  numberOfOperationsToMakeNetworkConnected,
  maximizeNumberOfTasksYouCanAssign,
  minimumConsecutiveCardsToPick,
  lexicographicallySmallestPalindrome,
  minimumOperationsBinaryArrayEqualToOneII,
  closestPrimeNumbersInRange,
  sumOfSubarrayMinimums,
  maximumXorForEachQuery,
  countWaysToSplitArray,
  maximumSubarraySumWithOneDeletion,
  numberOfSubArraysSizeKAverageThreshold,
  grumpyBookstoreOwner,
  mostStonesRemovedWithSameRowOrColumn,
  longestSubsequenceWithLimitedSum,
  minimumNumberOfArrowsToBurstBalloons,
  findLargestValueEachTreeRow,
  findBottomLeftTreeValue,
  mostStonesRemovedSameRowOrColumn,
  countUnreachablePairsOfNodes,
  myCalendarI,
  findPlayersWithZeroOrOneLosses,
  countUnreachablePairsAfterRemovingVertices,
  maximumValueAtGivenIndexInBoundedArray,
  wallsAndGates,
  makingALargeIsland,
  increasingOrderSearchTree,
  nextGreaterNodeInLinkedList,
  longestCycleInGraph,
  maximumSubarrayMinProduct,
  stepsToMakeArrayNondecreasing,
  countSubstringsDifferByOne,
  minimumOperationsToMoveBalls,
  maximumAreaOfPieceOfCake,
  minimumAreaRectangle,
  minimumOperationsToHalveArraySum,
  maximumBinaryStringAfterChange,
  circularArrayLoop,
  longestArithmeticSubsequenceOfGivenDifference,
  timeNeededToBuyTickets,
  numberOfSubarraysWithBoundedMaximum,
  kthSmallestElementInBst,
  findMinimumInRotatedSortedArray,
  searchInRotatedSortedArray,
  minimumNumberOfDaysToMakeMBouquets,
  splitArrayIntoConsecutiveSubsequences,
  restoreTheArrayFromAdjacentPairs,
  monotoneIncreasingDigits,
  constructKPalindromeStrings,
  pushDominoes,
  largestMergeOfTwoStrings,
  removeCoveredIntervals,
  minimizeArrayValue,
  validateIpAddress,
  maximumSumHourglass,
  reverseOddLevelsBinaryTree,
  findClosestNodeToGivenTwoNodes,
  numberOfFlowersInFullBloom,
  mostBeautifulItemForEachQuery,
  maximumNumberOfEventsThatCanBeAttended,
  medianOfTwoSortedArrays,
  numberOfSubsequencesThatSatisfyTheGivenSumCondition,
  removeDuplicateLetters,
  bestTimeToBuyAndSellStockIv,
  shortestPathWithAlternatingColors,
  minimumSwapsToMakeSequencesIncreasing,
  arrayOfDoubledPairs,
  countVowelPermutation,
  longestIdealSubsequence,
  minimumStringLengthAfterRemovingSubstrings,
  totalHammingDistance,
  maximumNumberOfOccurrencesOfASubstring,
  longestHappyPrefix,
  reducingDishes,
  minimumNumberOfSwapsToMakeStringBalanced,
  numberOfSubstringsContainingAllThreeCharacters,
  maximumScoreFromRemovingSubstrings,
  minimumDeletionsToMakeStringBalanced,
  minimumDifferenceBetweenLargestAndSmallestValueInThreeMoves,
  shortestSubarrayToBeRemovedToMakeArraySorted,
  minimumHealthToBeatTheGame,
  checkIfStringContainsAllBinaryCodesOfSizeK,
  longestNiceSubstring,
  minimumAddToMakeParenthesesValid,
  predictWinner,
  canIWin,
  optimalDivision,
  minimumInsertionsToBalanceParentheses,
  longestSubarrayOf1sAfterDeletingOneElement,
  countNumberOfNiceSubarrays,
  maximumLengthOfAConcatenatedStringWithUniqueCharacters,
  nimGame,
  palindromePermutation,
  removeElement,
  waterBottles,
  distributeCandies,
  countPrimeSetBits,
  verifyingAlienDictionary,
  rectangleArea,
  encodeDecodeStrings,
  shortestDistanceToCharacter,
  utf8Validation,
  rangeAddition,
  countTheNumberOfFairPairs,
  findIfArrayCanBeSorted,
  constructStringWithRepeatLimit,
  countWaysToSelectBuildings,
  powerOfHeroes,
  numberOfWaysToArriveAtDestination,
  reorderRoutesToMakeAllPathsLeadToCityZero,
  maximumLengthOfPairChain,
  countServersThatCommunicate,
  validPalindrome,
  peakIndexInMountainArray,
  twoKeysKeyboard,
  bagOfTokens,
  findTheKWeakestRowsInAMatrix,
  separateBlackAndWhiteBalls,
  minimumNumberOfStepsToMakeTwoStringsAnagram,
  findThePrefixCommonArrayOfTwoArrays,
  lastStoneWeightII,
  divideTwoIntegers,
  longestHarmoniousSubsequence,
  buddyStrings,
  beautifulSubsets,
  myCalendarIi,
  taskSchedulerIi,
  swappingNodesInALinkedList,
  movePiecesToObtainAString,
  greatestCommonDivisorOfStrings,
  maximumDistanceInArrays,
  pathWithMaximumGold,
  convertSortedArrayToBST,
  trimABinarySearchTree,
  findingUsersActiveMinutes,
  dayOfTheYear,
  typeOfTriangle,
  maximumEnemyForts,
  minimumAmountTimeToCollectGarbage,
  checkIfArraySortedAndRotated,
  nodesBetweenCriticalPoints,
  numberAfterDoubleReversal,
  dominoAndTrominoTiling,
  numberOfLinesToWriteString,
  findTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints,
  binaryTreeInorderTraversal,
  binaryTreePreorderTraversal,
  binaryTreePostorderTraversal,
  minimumHoursOfTraining,
  largestNumberAfterDigitSwapsByParity,
  numberOfPairsOfStringsWithConcatenationEqualToTarget,
  sumOfBeautyOfAllSubstrings,
  maximumNumberOfWordsYouCanType,
  uglyNumber,
  lemonadeChange,
  mostFrequentSubtreeSum,
  implementStackUsingQueues,
  sumOfNodesWithEvenValuedGrandparent,
  flipEquivalentBinaryTrees,
  countVowelSubstringsOfAString,
  numberOfRectanglesThatCanFormTheLargestSquare,
  determineIfStringHalvesAreAlike,
  divideAStringIntoGroupsOfSizeK,
  countIntegersWithEvenDigitSum,
  designHashset,
  designParkingSystem,
  defuseTheBomb,
  checkIfSentenceIsPangram,
  findTheStudentThatWillReplaceTheChalk,
  greatestEnglishLetterInUpperAndLowerCase,
  reformatTheString,
  findNUniqueIntegersSumUpToZero,
  checkArrayFormationThroughConcatenation,
  minimizeStringLength,
  findScoreOfArrayAfterMarkingElements,
  elementsAppearingMoreThan25Percent,
  makeStringASubsequenceUsingCyclicIncrements,
  numberOfBeautifulIntegersInRange,
  maximumDepthBinaryTreeNew,
  minimumAbsoluteDifferenceInBst,
  pascalsTriangleIi,
  superEggDrop,
  maximumScoreSplicedArray,
  countIncreasingQuadruplets,
  waysToMakeFairArray,
  minimumInitialEnergyToFinishTasks,
  constructTargetArrayWithMultipleSums,
  minimizeMaximumDifferenceOfPairs,
  minimumNumberOfKeypresses,
  longestSubarrayAtMostKFrequency,
  minimumDeletionsToMakeStringKSpecial,
  cousinsInBinaryTree,
  allNodesDistanceKInBinaryTree,
  openLock,
  maximizeSumOfArrayAfterKNegations,
  removeDuplicatesFromSortedList,
  intersectionOfTwoArrays,
  climbingStairsMemo,
  countVowelsInString,
  percentageOfLetter,
  reverseWordsInString,
  dayOfTheWeek,
  guessNumberHigherOrLower,
  largestTriangleArea,
  minimumValueToGetPositiveStepSum,
  numberOfRectanglesThatCanFormLargestSquare,
  successfulPairsOfSpellsAndPotions,
  minimumOperationsToReduceXToZero,
  largestSubmatrixWithRearrangements,
  subtreeOfAnotherTree,
  maximumProductOfSplittedBinaryTree,
  wateringPlants,
  loggerRateLimiter,
  bstFromPreorder,
  balanceABinarySearchTree,
  maximumSumBstInBinaryTree,
  stockPriceFluctuation,
  minimumReplacementsToSortArray,
  largestColorValueInDirectedGraph,
  stringWithoutAaaOrBbb,
  countTheHiddenSequences,
  myCalendarThree,
  designTwitter,
  zigzagIterator,
  secondMinimumTimeToReachDestination,
  pathSumII,
  constructBinaryTreeFromInorderAndPostorderTraversal,
  constructBinaryTreeFromPreorderAndInorderTraversal,
  maximumNumberOfRemovableCharacters,
  minimumSumOfSquaredDifference,
  findTheKthLargestIntegerInArray,
  trappingRainWaterII,
  minimumNumberOfPushesToTypeWordII,
  maximizeWinFromTwoSegments,
  minimumSwapsToGroupAllOnesTogether,
  longestUnivaluePath,
  addOneRowToTree,
  evenOddTree,
  sortIntegersByNumberOf1Bits,
  minimumOperationsToMakeArrayEqual,
  convertSortedListToBinarySearchTree,
  containsDuplicateIII,
  makeArrayStrictlyIncreasing,
  encodeAndDecodeTinyurl,
  courseScheduleIV,
// batch 52
  threeSumSmaller,
  mostCommonWord,
  studentAttendanceRecordII,
  permutationSequence,
  maximumSumObtainedOfAnyPermutation,
  finalPricesWithASpecialDiscountInAShop,
  buildingsWithAnOceanView,
  removeNodesFromLinkedList,
  findPolygonWithTheLargestPerimeter,
  minimumDeletionsToMakeCharacterFrequenciesUnique,
  matrixCellsInDistanceOrder,
  brokenCalculator,
  countDaysWithoutMeetings,
  stringCompressionIII,
  strangePrinterII,
  kthSmallestInSortedMatrix,
  theSkylineProblem,
  islandPerimeter,
  matrixChainMultiplication,
  binarySearchTreeIterator,
  maximizeGreatnessOfAnArray,
  neighboringBitwiseXor,
  minimizeXor,
  findTheMaximumNumberOfMarkedIndices,
  minimizeMaximumOfArray,
  alternatingGroupsII,
  countOfConnectedComponents,
  longestNonDecreasingSubarrayFromTwoArrays,
  reportSpamMessage,
  distributeElementsIntoTwoArraysII,
  implementStrstr,
  repeatedStringMatch,
  passThePillow,
  numberOfChangingKeys,
  maximumRepeatingSubstring,
  deleteGreatestValueInEachRow,
  sortTheJumbledNumbers,
  minimumOperationsToMakeArrayAlternating,
  maximumTotalImportanceOfRoads,
  smallestSubarraysWithMaximumBitwiseOr,
  arithmeticSlicesIISubsequence,
  maxDotProductOfTwoSubsequences,
  numberOfSquarefulArrays,
  sellingPiecesOfWood,
  numberOfDiceRollsWithTargetSum,
  convertBinaryLinkedList,
  diagonalTraverseII,
  designCircularDeque,
  beautifulTowersI,
  maximumTastinessCandyBasket,
  shortestSubarraySumAtLeastK,
  substringWithConcatenationOfAllWords,
  minimumPeopleToTeach,
  punishmentNumberOfInteger,
  minimumCostToSeparateSentenceIntoRows,
  maximumRunningTimeOfNComputers,
  countStrictlyIncreasingSubarrays,
  minimumScorePathBetweenTwoCities,
  splitMessageBasedOnLimit,
  longestWordInDictDeleting,
  countAllValidPickupAndDeliveryOptions,
  maximumAverageSubarrayII,
  longestEvenOddSubarrayWithThreshold,
  findTheValueOfThePartition,
  clearDigits,
  // batch 57 (remote)
  sumOfDigitsInBaseK,
  countSymmetricIntegers,
  minimumNumberOfPushesToTypeWordI,
  divideArrayIntoGroupsOfSizeK,
  countSubarraysOfLengthThreeWithACondition,
  minimumOperationsToMakeArrayDivisibleByThree,
  findThePunishmentNumberOfIntegers,
  minimumAdditionsToMakeValidString,
  // batch 58 (remote)
  maximumTotalRewardUsingOperationsI,
  minimumArrayEnd,
  maximumNumberOfMovesInAGrid,
  minimumCostToConvertStringI,
  waysToSplitArrayIntoThreeSubarrays,
  // batch 57 (local)
  minimumNumberOfMovesToSeat,
  numberOfSeniorCitizens,
  maximumNumberOfGroupsWithIncreasingLength,
  makeIntegerBeautiful,
  // batch 59 (remote)
  nextClosestTime,
  employeeFreeTime,
  maximumSumOf3NonOverlappingSubarrays,
  dominoTrominoTiling,
  splitArrayWithSameAverage,
  // batch 58 (local)
  minimumTimeToBuyTickets,
  vowelsOfAllSubstrings,
  removingMinimumNumberOfMagicBeans,
  findTheLongestEqualSubarray,
  minimumEqualSumOfTwoArraysAfterReplacingZeros,
  // batch 61 (local)
  checkIfEveryRowAndColumnContainsAllNumbers,
  maximumStrongPairXorI,
  extraCharactersInAString,
  kthLargestSumInABinaryTree,
  sumOfMatrixAfterQueries,
  // batch 67 (local)
  countSubarraysWithFixedBounds,
  numberOfWaysToSelectBuildings,
  maximumFruitsHarvestedAfterAtMostKSteps,
  countUniqueCharsOfAllSubstrings,
  minimumMoneyRequiredBeforeTransactions,
  // batch 66 (local)
  findIfPathExistsInGraph,
  longestSubarrayOfOnesAfterDeletingOneElement,
  checkIfArrayPairsAreDivisibleByK,
  maximumBeautyOfAnArrayAfterApplyingOperation,
  rearrangeCharactersToMakeTargetString,
  // batch 65 (local)
  countPairsThatFormACompleteDayIi,
  kthLargestElementInAStream,
  checkIfTheSentenceIsPangram,
  countNumberOfWaysToPlaceHouses,
  countWaysToGroupOverlappingRanges,
  // batch 64 (local)
  numberOfWonderfulSubstrings,
  designANumberContainerSystem,
  continuousSubarrays,
  countPairsThatFormACompleteDayI,
  substringWithLargestVariance,
  // batch 63 (local)
  twoBestNonOverlappingEvents,
  minimumLinesToRepresentALineChart,
  numberOfCommonDivisors,
  firstCompletelyPaintedRowOrColumn,
  maximumPrimeDifference,
  // batch 62 (local)
  findTheMinimumNumberOfFibonacciNumbersWhoseSumIsK,
  countPairsOfSimilarStrings,
  numberOfBeautifulSubarrays,
  zeroArrayTransformationI,
  maximumBuildingHeight,
  countNumberOfSpecialIntegers,
  divideIntervalsIntoMinimumNumberOfGroups,
  minimumNumberOfMovesToMakePalindrome,
  nodeWithHighestEdgeScore,
  minimumNumberOfGroupsToCreateAValidAssignment,
  maximumDifferenceBetweenIncreasingElements,
  longestPathWithDifferentAdjacentCharacters,
  incrementSubmatricesByOne,
  // batch 59 (local)
  countSubstringsStartingAndEndingWithGivenCharacter,
  minimumNumberOfChangesToMakeBinaryStringBeautiful,
  distributeMoneyToMaximumChildren,
  checkIfStringsCanBeMadeEqualWithOperations,
  countDaysSpentTogether,
  // batch 60
  minimumNumberOfOperationsToMakeArrayContinuous,
  pacificAtlanticWaterFlow,
  criticalConnectionsInANetwork,
  minimumCostToCutAStick,
  // batch 61
  kClosestPointsToOrigin,
  findAllAnagramsInAString,
  longestPalindrome,
  reverseWordsInAString,
  countPrimes,
  // batch 58
  maxConsecutiveOnesII,
  lengthOfLongestFibonacciSubsequence,
  detectSquares,
  gridGame,
  maximumWhiteTilesCoveredByCarpet,
  minimumOperationsToMakeAllArrayElementsEqual,
  reverseWordsInAStringII,
  countSubarraysWithMedian,
  maximumSumQueries,
  // batch 58 (new problems)
  findSubarraysWithEqualSum,
  bestPokerHand,
  countIncremovableSubarrays,
  stepByStepDirections,
  minimumNumberOfFoodBuckets,
  superUglyNumber,
  rewardTopKStudents,
  countSubarraysWithScoreLessThanK,
  maximumNumberOfJumpsToReachLastIndex,
  minimumNumberOfCoinsForFruits,
  // batch 59 (new problems)
  freqStack,
  minimumCostToEqualizeArray,
  maximumTotalDamage,
  specialArrayII,
  findMaximumLengthValidSubsequence,
  countSubmatricesAllOnes,
  minimumLengthOfStringAfterOperations,
  countSpecialCharactersI,
  maximumJumpsToReachLastIndex,
  minimumOperationsToMakeArrayEqualII,
  minimumCostForCuttingCakeI,
  // batch 62 (local)
  seatReservationManager,
  subarrayDivByK,
  minimumPathCostInGrid,
  maximumDistanceBetweenAPairOfValues,
  // batch 62
  maximumNumberOfPointsWithCost,
  findThreeConsecutiveIntegersThatSumToGivenNumber,
  minimumSumOfFourDigitNumberAfterSplittingDigits,
  kItemsWithTheMaximumSum,
  // batch 62 (this session)
  groupShiftedStrings,
  sparseMatrixMultiplication,
  maximumDepthNAryTree,
  nAryTreeLevelOrderTraversal,
  nAryTreePreorderTraversal,
  // batch 63
  numberOfIncreasingPathsInAGrid,
  minimumTimeToVisitACellInAGrid,
  numberOfBeautifulSubsets,
  maximumNumberOfFishInAGrid,
  // batch 63 (local)
  countConsistentStrings,
  maxPointsFromCards,
  numStepsBinaryToOne,
  minimizeSumTwoChanges,
  sqrtX,
  // batch 63 (session)
  designHitCounter,
  removeColoredPieces,
  swapAdjacentInLrString,
  nextGreaterElementIV,
  minimumNumberOfOperationsToMakeArraysSimilar,
  // batch 64
  minimumCostValidPathInGrid,
  decreaseElementsToMakeArrayZigzag,
  maximalNetworkRank,
  minimumTapsToOpenToWaterAGarden,
  putMarblesInBags,
  // batch 66 (origin)
  soupServings,
  minimumNumberOfRabbits,
  theMazeII,
  maximumVacationDays,
  gridIllumination,
  // batch 66 (origin)
  findAllNumbersDisappearedInArray,
  kthLargestElementInArray,
  bestTimeToBuyAndSellStockII,
  countGoodNodesInBinaryTree,
  minimumDepthOfBinaryTree,
  // batch 65 (local)
  shiftTwoDGrid,
  findAndReplaceInString,
  checkWhetherTwoStringsAlmostEquivalent,
  minimumSwapsBinaryStringAlternating,
  maximumNonOverlappingSubarraysTarget,
  findMinimumPossibleSumBeautifulArray,
  maxStackProblem,
  // batch 67
  findTheKOrOfAnArray,
  minimumOperationsToSatisfyConditions,
  maximumSumAlmostUniqueSubarray,
  splitArrayMaxSubarrays,
  minOperationsArrayXorK,
  maximumAlternatingSubarraySum,
  // batch 68
  countTheNumberOfGoodSubarrays,
  maximumStrictlyIncreasingCellsInMatrix,
  findLongestSpecialSubstringThriceI,
  minimumOperationsToMakeArrayValuesEqualToK,
  minimumOperationsToMakeUniValueGrid,
  minimumMovesToMakeArrayComplementary,
  findWinnerOfArrayGame,
  maximumNumberOfRobotsWithinBudget,
  minimumSizeOfBag,
  maximumRowsCoveredByColumns,
  minimumArrayLengthAfterPairRemovals,
  countTheNumberOfCompleteComponents,
  designMemoryAllocatorProblem,
  campusBikesProblem,
  escapeTheGhosts,
  maximumValueOfKCoinsFromPiles,
  parallelCoursesIII,
  // batch 69 (remote)
  mergeNodesBetweenZeros,
  reachableNodesWithRestrictions,
  minKConsecutiveBitFlips,
  minSizeSubarrayInfiniteArray,
  // batch 69 (local)
  imageSmoother,
  complexNumberMultiplication,
  numberOfBoomerangs,
  findDuplicateFileInSystem,
  poorPigs,
  strobogrammaticNumber,
  fractionAdditionAndSubtraction,
  longestZigZagPathInBinaryTree,
  findTheDuplicateSubtrees,
  findScoreOfArrayAfterMarkingAllElements,
  countZeroRequestServers,
  maximumScoreAfterApplyingOperationsOnTree,
  countingWordsWithAGivenPrefix,
  earliestMomentEveryoneBecameFriends,
  minimumWeightedSubgraphWithRequiredPaths,
  longestPathInDirectedAcyclicGraph,
  countGoodTripletsInAnArray,
  // batch 70
  findTheLongestBalancedSubstringOfABinaryString,
  largestPalindromicNumber,
  countWordsObtainedAfterAddingALetter,
  minimumNumberOfFlipsBinaryStringAlternating,
  totalCostToHireKWorkers,
  bestTimeToBuyAndSellStockIII,
  findTheDuplicateNumber,
  maximumDifferenceInArray,
  longestSubarrayWithAtMostKFrequency,
  countPairsInTwoArrays,
  cellsInARangeOnAnExcelSheet,
  makeTwoArraysEqualByReversingSubarrays,
  countPairsOfSimilarWords,
  constructTheRectangle,
  minimumNumberOfBucketsRequired,
  applyDiscountEveryNItems,
  sumGame,
  findTheKthLuckyNumber,
  // batch 68-local
  findMedianFromDataStream,
  checkCompletenessBinaryTreeNew,
  earliestFullBloom,
  longestObstacleCourse,
  minimumTimeFinishRace,
  checkIfItIsAGoodArray,
  maximumCoinsYouCanGet,
  numberOfIslandsII,
  findTheCelebrity,
  minimumNumberOfDaysToDisconnectIsland,
  // batch 71
  maximumProductOfTwoElementsInArray,
  findTheHighestAltitude,
  findTheArrayConcatenationValue,
  runningSumOf1dArray,
  checkDistancesBetweenSameLetters,
  findMissingAndRepeatedValues,
  findIndicesOfStableMountains,
  // batch 71-local
  minimizeDeviationInArray,
  prisonCellsAfterNDays,
  allAncestorsDAG,
  deleteNodesReturnForest,
  namingACompany,
  minimumReplacementsToSortTheArray,
  findTheCityWithSmallestNeighbors,
  maximumCandiesAllocatedToKChildren,
  numberOfRestrictedPaths,
  minimumSwapsToSortAnArray,
  findPeakElementII,
  checkCompletenessOfBinaryTree,
  allAncestorsOfNodeInDag,
  numberOfNodesInSubtreeWithSameLabel,
  determineIfCellIsReachableAtGivenTime,
  sumInAMatrix,
  largestSubstringBetweenTwoEqualCharacters,
  destroySequentialTargets,
  minimizeResultByAddingParentheses,
  minimumSumOfKAvoidingArray,
  countWaysToBuildRoomsInAntColony,
  lengthOfLongestAlphabeticalContinuousSubstring,
  numberOfStringsThatAppearAsSubstrings,
  // batch 71 (new problems from this session)
  findTheGoodDaysToRobBank,
  minimumExtraCharactersInAString,
  minimumSecondsToEqualizeACircularArray,
  movementOfRobots,
  numberOfWaysOfCuttingAPizza,
  frequencyTracker,
  // batch 72-local
  reorderDataInLogFiles,
  minimumOneBitOperations,
  longestContinuousSubarrayAbsDiff,
  // batch 72
  walkingRobotSimulation,
  findDistinctDifferenceArray,
  maximumNumberOfAlloys,
  minimumOpsDistinctElements,
  minimumCoinsToAdd,
  countSpecialCharactersII,
  findMaximumK,
  minimumChairsWaitingRoom,
  maximumBallsInBox,
  satisfiabilityOfEqualityEquations,
  pourWater,
  bricksFallingWhenHit,
  // batch 73
  numberOfDistinctIslands,
  wordLadderII,
  cutOffTreesForGolfEvent,
  networkBecomesIdle,
  smallestStringWithSwaps,
  removeBoxes,
  escapeTheSpreadingFire,
  minimizeMalwareSpread,
  numberOfGoodPaths,
  longestSubstringWithAtLeastKRepeating,
  countBattleshipsInABoard,
  detectCyclesIn2dGrid,
  redundantConnectionII,
  largestComponentSizeByCommonFactor,
  reachableNodesInSubdividedGraph,
  wiggleSort,
  candyCrush,
  // batch 76
  removeMaxNumberOfEdgesToKeepGraphFullyTraversable,
  examRoom,
  checkingExistenceOfEdgeLengthLimitedPaths,
  lastDayWhereYouCanStillCross,
  minimumCostWalkInWeightedGraph,
  maximumAveragePassRatio,
  countGoodMeals,
  rankTeamsByVotes,
  minimumNumberOfRefuelingStops,
  minimumTotalSpaceWastedWithKResizingOperations,
  maximumNumberOfTasksYouCanAssign,
  maximumTotalBeautyOfGardens,
  maximumXorOfTwoNumbersInAnArray,
  designGraphWithShortestPathCalculator,
  // batch 75 (orphan registration)
  shortestPathInGridWithObstaclesElimination,
  regionsCutBySlashes,
  findLatestGroupOfSizeM,
  sentenceSimilarityII,
  // batch 74
  rangeSumQueryMutable,
  countOfSmallerNumbersAfterSelfBit,
  rankTransformOfAnArray,
  similarStringGroups,
  theMaze,
  createSortedArrayThroughInstructions,
  minimumTimeToRemoveAllCars,
  processRestrictedFriendRequests,
  designFoodRatingSystem,
  firstDayBeenInAllRooms,
  // batch 77 — BIT, simulation, shortest-path
  countInversions,
  rangeSumQuery2DMutable,
  countSmallerBeforeSelfBit,
  numberOfPairsSatisfyingInequalityBit,
  rangeUpdatePointQueryBit,
  createTargetArrayUsingBit,
  robotCollisions,
  spiralMatrixIV,
  textEditorSimulation,
  atmMachineSimulation,
  shortestPathToFood,
  minimumJumpsToReachHome,
  allPairsShortestPath,
  minimumCostToReachAllNodes,
  // batch 78 — arrays, strings, math, graph
  minimumOperationsMakeAllArrayElementsEqualToOne,
  findIndicesWithIndexAndValueDifferenceII,
  minimumAbsoluteDifferenceQueries,
  minimumCostForCuttingCakeII,
  findNumberOfWaysToPlacePeople,
  findTheKSumOfAnArray,
  minimumTimeToVisitDisappearingNodes,
  countBeautifulSubstringsI,
  sortTransformedArray,
  checkIfParenthesesStringCanBeValid,
  findTheNumberOfDistinctColorsAmongTheBalls,
  countTheNumberOfArraysWithKMatchingAdjacentElements,
  // batch 79 — DP, stack, binary-search
  ternaryExpressionParser,
  countAllPossibleRoutes,
  minimumOperationsMakeArrayKIncreasing,
  // batch 79 — binary-search, two-pointers, dp, design
  divideChocolate,
  findTheSmallestDivisorGivenAThreshold,
  magneticForceBetweenTwoBalls,
  nthMagicalNumber,
  getEqualSubstringsWithinBudget,
  longestEqualSubarray,
  threeSumWithMultiplicity,
  new21Game,
  shortestCommonSupersequence,
  stickersToSpellWord,
  designExamRoom,
  designAuthenticationManager,
  // batch 80 — shortest-path, union-find, arrays
  findTheSafestPathInAGrid,
  divideNodesIntoTheMaximumNumberOfGroups,
  rangeSumOfSortedSubarraySums,
  // batch 81 — shortest-path, strings, dp
  minimumCostToReachDestinationInTime,
  totalAppealOfAString,
  // batch 83 — backtracking, simulation, dp, linked-list
  letterCombinationsOfAPhoneNumber,
  designTicTacToe,
  battleshipsInABoard,
  onesAndZeroes,
  bestTimeToBuyAndSellStockWithCooldown,
  insertDeleteGetRandomO1,
  convertBinaryNumberInLinkedListToInteger,
  // batch 82 — BIT, shortest-path, tree, arrays
  bookingConcertTicketsInGroups,
  minimumScoreOfAPathBetweenTwoCities,
  maximumProbabilityOfSuccess,
  minimumFuelCostToReportToTheCapital,
  minimumOperationsToMakeTheArrayAlternating,
  // batch 83 — strings, dp, graph
  countPalindromes,
  flowerPlantingNoAdjacent,
  longestDupSubstring,
  shortestPalindrome,
  sumPrefixScores,
  fillingBookcaseShelves,
  maximumLengthRepeatedSubarray,
  minimumTapsToWaterGarden,
  numberOfWaysToPaintN3Grid,
  frogPositionAfterTSeconds,
  loudAndRich,
  countRestrictedPaths,
  // batch 80 (cont.) — backtracking, heap, linked-list, simulation
  allPathsSourceToTargetBacktrack,
  factorCombinations,
  findAllIncreasingSubsequences,
  generalizedAbbreviation,
  maximumCpuLoad,
  maximumEventsAttendedWithKEvents,
  mergeKSortedArrays,
  sortNearlySortedArray,
  interleaveTwoLinkedLists,
  segregateEvenOddLinkedList,
  linkedListDecimalValue,
  bowlingGameScore,
  ballThroughInclinedGrid,
  tokenBucketRateLimiter,
  // batch 84 — two-pointers, math
  maximumScoreOfAGoodSubarray,
  minimumNumberOfCoinsToBeAdded,
  // batch 84 cont. — simulation, backtracking, linked-list
  splittingAStringIntoDescendingConsecutiveValues,
  deleteTheMiddleNodeOfALinkedList,
  // batch 85 — union-find, heap
  numberOfConnectedComponentsInAnUndirectedGraph,
  kthSmallestElementInASortedMatrix,
  // batch 86 — arrays, strings
  maximumValueOfAnOrderedTripletII,
  divideArrayIntoArraysWithMaxDifference,
  shiftingLettersII,
  // batch 87 — dp, strings, arrays
  maximizeTheProfitAsTheSalesman,
  checkIfStringIsAnAcronymOfWords,
  countElementsWithSmallerAndGreaterElement,
  // batch 88 — arrays, graph
  splitTheArray,
  findTheScoreOfAllPrefixesOfAnArray,
  shortestCycleInAGraph,
  // batch 89 — arrays, strings, hash-map, math, graph
  minimumRoundsToCompleteAllTasks,
  longestPalindromeByConcat,
  maximumProductDifferenceBetweenTwoPairs,
  minimumBitFlipsToConvertNumber,
  minFlipsToBinaryZeroMatrix,
  determineIfTwoStringsAreClose,
  maximumXorAfterOperations,
  // batch 90 — arrays, strings, hash-map, math, graph, tree
  countCommonWordsWithOneOccurrence,
  findThreeConsecutiveIntegersThatSumToAGivenNumber,
  equalRowAndColumnPairs,
  numberOfLaserBeamsInABank,
  checkIfAllAsAppearsBeforeAllBs,
  countNodesWithTheHighestScore,
  maximumNumberOfPointsFromGridQueries,
  // batch 88 remote — arrays/dp, linked-list, arrays/heap
  checkIfThereIsAValidPartitionForTheArray,
  reverseNodesInEvenLengthGroups,
  minimumDifferenceInSumsAfterRemovalOfElements,
  // batch 91 — math/strings, arrays/math ×2
  findTheClosestPalindrome,
  numberOfSubarraysWithLcmEqualToK,
  smallestRotationWithHighestScore,
  // batch 92 — greedy/math, strings/math, greedy, hash-map, graph/UF, DP, greedy
  eliminateMaximumNumberOfMonsters,
  decodedStringAtIndex,
  maximumBagsWithFullCapacityOfRocks,
  countOfInterestingSubarrays,
  minimumNumberOfVisitedCellsInAGrid,
  formLargestIntegerWithDigitsThatAddUpToTarget,
  destroyingAsteroids,
  // batch 87 remote — monotonic-stack, string, sliding-window, dp, tree, graph
  nextGreaterElementDistances,
  findAllOccurrencesZAlgorithm,
  zAlgorithmLongestPrefixSuffix,
  countSubarraysExactlyKDistinct,
  maximumProductSubarrayLengthK,
  weightedJobScheduling,
  parallelCourses,
  parallelCoursesII,
  gridCountPathsMod,
  maxSumSubmatrix,
  numberGoodLeafNodePairs,
  treeNodeProductOfChildren,
  minimumOperationsNonDecreasing,
  // batch 90
  sumOfSquareNumbers,
  miceAndCheese,
  maximumSizeSubarraySumEqualsK,
  // batch 91
  maximumNumberOfConsecutiveValuesYouCanMake,
  determineIfTwoEventsHaveConflict,
  numberOfPeopleThatCanBeSeenInAGrid,
  // batch 92 — arrays/easy, strings/medium, arrays/hard
  alternatingGroupsI,
  longestBinarySubsequenceLessThanOrEqualToK,
  minimumTimeToCompleteAllTasks,
  // batch 92 — design, strings, greedy, math, dp, stack
  countVowelSubstringsOfAWord,
  minimumCostToMoveChips,
  stringCompressionII,
  buildAnArrayWithStackOperations,
  // batch 93 — math/easy, linked-list/medium, dp/hard
  validPerfectSquare,
  insertionSortList,
  maximizeScoreAfterNOperations,
  // batch 92 (remote)
  primeSubtractionOperation,
  findTheLongestSemiRepetitiveSubarray,
  countNumberOfFairPairs,
  // batch 93 — strings/hard, arrays+math+union-find/hard, strings+hash-map/medium
  findLongestAwesomeSubstring,
  greatestCommonDivisorTraversal,
  minimumLengthOfAnagramConcatenation,
  // batch 94 — math, simulation, arrays+hash-map, tree
  countOfMatchesInTournament,
  findWinnerOnATicTacToeGame,
  sortFeaturesByPopularity,
  rotatedDigits,
  rabbitsInForest,
  smallestStringStartingFromLeaf,
  // 2000-milestone — tree/medium
  findLargestValueInEachTreeRow,
  // batch 94 (remote) — sliding-window
  maximumAverageSubarrayI,
  // batch 95 (remote) — arrays/strings
  diStringMatch,
  shortestDistanceToACharacter,
  largestNumberAtLeastTwiceOfOthers,
  // batch 97 (remote) — two-pointers, stack
  fourSumVariant,
  dailyTemperaturesVariant,
  // batch 95 — tree/easy, tree/medium, tree/hard
  rangeSumBst,
  deleteNodeInABst,
  binaryTreeMaximumPathSum,
  // batch 96 (remote) — arrays/easy, arrays+hash-map/easy, strings+hash-map/easy
  checkIfArraySortedAndRotatedB96,
  findAllLonelyNumbersInArray,
  checkIfAllCharactersHaveEqualNumberOfOccurrences,
  // batch 99 (remote) — strings/easy, arrays/easy, arrays/medium, sliding-window/medium
  findLongestBalancedBinarySubstring,
  matrixDiagonalSumVariant,
  maxNumberOfKSumPairs,
  countSubarraysMaxElementKTimes,
  // batch 96 — stack/strings, tree/easy, tree/medium
  removeAllAdjacentDuplicatesInStringII,
  averageOfSubtree,
  cousinsInBinaryTreeII,
  // batch 101 — math/easy, arrays/easy, arrays/easy
  primeArrangements,
  luckyNumbersInAMatrix,
  smallestRangeI,
  // batch 102 — arrays/easy, arrays/easy, linked-list/easy
  twoSum,
  squaresOfASortedArray,
  middleOfTheLinkedList,
  // batch 103 — arrays/medium, arrays+binary-search/medium, math/hard
  threeSum,
  searchA2DMatrix,
  maxPointsOnALine,
  // batch 104 — arrays+binary-search/medium, graph/medium, arrays+dp+graph/hard
  searchA2DMatrixII,
  countNumberOfConnectedComponents,
  longestIncreasingPathInAMatrix,
  // batch 105 — tree/easy, arrays+dp/easy, graph+greedy/medium
  mergeTwoBinaryTrees,
  rangeSumQueryImmutable,
  minCostConnectAllPoints,
  // batch 106a — tree/easy (orphan), arrays+hash-map/easy, arrays+math/easy
  binaryTreeSumOfLeftLeaves,
  minimumOperationsToMakeElementsDistinct,
  checkIfItIsAStraightLine,
  // batch 106b — strings/easy, tree/medium, arrays/medium
  longerContiguousSegmentsOfOnesThanZeros,
  binaryTreeLongestConsecutiveSequence,
  countUnguardedCellsInTheGrid,
  // batch 107 — strings/easy, tree/medium, tree/medium
  firstUniqueCharacterInAString,
  sumRootToLeafNumbers,
  flattenBinaryTreeToLinkedList,
  // batch 108 — arrays/medium, arrays/hard, stack/hard
  kthLargestElementInAnArray,
  findMissingPositive,
  largestRectangleInHistogram,
  // batch 109 — tree/medium, arrays/easy, hash-map/easy
  implementTriePrefixTree,
  numberOfRecentCalls,
  twoSumIIIDataStructureDesign,
  // batch 110a — arrays+hash-map/easy, arrays+math/easy, strings+two-pointers/medium
  divideArrayIntoEqualPairs,
  addToArrayFormOfInteger,
  minimumSwapsToMakeStringsBalanced,
  // batch 110b — strings/easy, tree/medium, tree/hard
  checkIfTwoStringArraysAreEquivalent,
  verifyPreorderSerializationOfABinaryTree,
  serializeAndDeserializeBinaryTree,
  // batch 111 — tree/medium, tree/medium, tree/easy
  validateBinarySearchTree,
  kthSmallestElementInABST,
  lowestCommonAncestorOfABST,
  // batch 112 — tree/medium, tree/medium, tree/medium
  lowestCommonAncestorOfABinaryTree,
  binaryTreeZigzagLevelOrderTraversal,
  binaryTreeLevelOrderTraversalII,
  // batch 113 — arrays/easy, linked-list/medium
  maximumProductOfTwoElementsInAnArray,
  removeNthNodeFromEndOfList,
  // batch 113b — arrays+sliding-window/easy, strings+dp/medium, math/medium
  minimumPositiveSumSubarray,
  totalCharactersAfterTransformations,
  countNonSpecialNumbers,
  // batch 114 — strings+union-find/medium, heap+simulation/medium, strings+math/medium
  lexicographicallySmallestEquivalentString,
  singleThreadedCpu,
  numberOfWaysToSplitString,
  // batch 115 — arrays/easy, arrays/easy, arrays/easy
  minimumOperationsBinaryArrayEqualToOneI,
  findCommonElementsBetweenTwoArrays,
  maximumValueOfAnOrderedTripletI,
  // batch 116 — strings/easy, strings/easy, arrays/easy
  checkBalancedString,
  minimumNumberOfChairsInAWaitingRoom,
  findMinimumOperationsDivisibleByThree,
  // batch 117 — arrays/easy, arrays+sliding-window/medium, arrays+math/medium
  longestStrictlyIncreasingOrDecreasingSubarray,
  findThePowerOfKSizeSubarraysI,
  countAlternatingSubarrays,
  // batch 118 — strings+hash-map/easy, strings+math/easy, strings/easy
  maximumDifferenceBetweenEvenAndOddFrequencyI,
  findTheKthCharacterInStringGameI,
  countPrefixAndSuffixPairsI,
  // batch 119 — arrays+math/easy, strings/easy, graph+shortest-path/medium
  maximumManhattanDistance,
  findTheOriginalTypedStringI,
  findMinimumTimeToReachLastRoomI,
  // batch 120 — arrays+math/easy, arrays/easy, arrays+strings/easy
  maximumProductOfTwoDigits,
  minimumOperationsToMakeColumnsStrictlyIncreasing,
  longestUnequalAdjacentGroupsSubsequenceI,
  // batch 117b — math/easy, arrays/medium, arrays+hash-map/medium
  findTheKeyOfTheNumbers,
  maximizeTotalHeightOfUniqueTowers,
  maximumNumberOfIntegersToChooseFromARangeI,
  // batch 121 — arrays+strings+hash-map/medium, arrays+math/medium, strings/medium
  findTheLengthOfTheLongestCommonPrefix,
  maximumNumberOfDistinctElementsAfterOperations,
  minimumTimeToRevertWordToInitialStateI,
  // batch 122 — arrays/medium, strings+sliding-window+hash-map/medium, arrays+math/easy
  minimumNumberOfFlipsToMakeBinaryGridPalindromicI,
  countSubstringsWithKFrequencyCharactersI,
  findIfDigitGameCanBeWon,
  // batch 122b — arrays/easy, strings+sliding-window/medium, arrays/medium
  applyOperationsToAnArray,
  countOfSubstringsContainingEveryVowelAndKConsonantsI,
  minimumOperationsToMakeMedianEqualToK,
  // batch 122c — strings+dp/hard, graph+shortest-path/medium, arrays+hash-map/medium
  findTheOriginalTypedStringII,
  findMinimumTimeToReachLastRoomII,
  minimumOperationsToWriteLetterYOnGrid,
  // batch 123 — arrays+hash-map/easy, arrays+math/easy, graph+shortest-path/medium
  findTheNumberOfWinningPlayers,
  maximumSumWithExactlyKElements,
  minimumTimeToReachLastRoomII,
  // batch 124 — arrays+hash-map+math/medium, arrays+strings+hash-map/easy, arrays+strings/easy
  minimumNumberOfOperationsToMakeArrayEmpty,
  findMaximumNumberOfStringPairs,
  checkIfAStringIsAnAcronymOfWords,
  // batch 123b — strings/easy, arrays+math/easy
  scoreOfAString,
  sumOfSquaresOfSpecialElements,
  // batch 124b — arrays/medium, arrays/easy, arrays/easy
  maximumElementAfterDecrementingAndRearranging,
  findTheDistanceValueBetweenTwoArrays,
  minimumSumOfMountainTripletsI,
  // batch 125 — arrays/easy, arrays+strings+hash-map/easy, arrays+hash-map/easy
  findChampionI,
  countTheNumberOfConsistentStrings,
  countNumberOfPairsWithAbsoluteDifferenceK,
  // batch 126 — math/easy, strings+math/easy, arrays+hash-map/easy
  numberOfStepsToReduceANumberToZero,
  convertDateToBinary,
  theTwoSneakyNumbersOfDigitville,
  // batch 127 — arrays/medium, math/easy, arrays+two-pointers/easy
  minimumSumOfMountainTripletsII,
  findTheXorOfNumbersInARange,
  countPairsWhoseSumIsLessThanTarget,
  // batch 127b — arrays+math/easy, arrays+math/medium
  findMinimumValueAfterReplacingWithDigitSum,
  countTriplets,
  // batch 128 — strings+stack/medium, arrays/easy, arrays+strings/easy
  removingStarsFromAString,
  minimumNumberOfMovesToSeatEveryone,
  checkIfStringIsAPrefixOfArray,
  // batch 129 — arrays/medium, strings+math/medium, arrays+graph/hard
  minimumNumberOfOperationsToMoveAllBallsToEachBox,
  minimumOperationsToMakeASpecialNumber,
  maximumScoreOfANodeSequence,
  // batch 128b — math/easy, math/easy, arrays+math/medium
  checkIfANumberIsFascinating,
  numberOfEvenAndOddBits,
  restoreMatrix,
  // batch 130a — arrays+math/easy, arrays+sliding-window/medium, arrays+dynamic-programming/hard
  countEvenSumPairs,
  longestBoundedSubarray,
  maxNonadjacentCircular,
  // batch 130b — math/easy, arrays+sliding-window/medium, strings+sliding-window/medium
  minMaxDifference,
  resultsArrayII,
  countOfSubstringsII,
  // batch 131 — strings+stack/medium, arrays+hash-map/easy, math/easy
  countCollisionsOnARoad,
  formSmallestNumberFromTwoDigitArrays,
  aNumberAfterADoubleReversal,
  // batch 132a — arrays+simulation/easy, arrays+strings/medium, hash-map+math/easy
  findTheLosersOfTheCircularGame,
  findUniqueBinaryString,
  maximumNumberOfBallsInABox,
  // batch 132b — math/easy, strings+math/easy, arrays+math/easy
  maximumBinaryString,
  getSmallestString,
  numberOfPairsI,
  // batch 134 — strings+sliding-window/medium, strings+math/hard
  maxVowelsInSubstring,
  kthCharacterGameII,
  // batch 135 — arrays/easy, tree+math/medium, math/medium
  checkIfGridSatisfiesConditions,
  findMaximumSumOfNodeValues,
  maximumXorProduct,
  // batch 136 — strings+math/easy, arrays+hash-map/medium, strings+hash-map/easy
  findTheEncryptedString,
  maximumSubarraySumDivisibleByK,
  redistributeCharacters,
  // batch 133b — strings+hash-map/easy, arrays+hash-map/hard, arrays+binary-search/medium
  numberOfSpecialCharsI,
  numberOfGoodPartitions,
  maxCountRangeII,
  // batch 134 — arrays+simulation/easy, arrays+math/medium, arrays+dynamic-programming/hard
  countStrictlyIncreasingColumns,
  findXORSumOfAllPairsBitwiseAND,
  minCostConnectTwoGroups,
  // batch 134b — strings+hash-map/medium, arrays+simulation/easy, arrays+hash-map/medium
  numberOfSpecialCharsII,
  canMakeSquare,
  // batch 139b — arrays/easy, arrays+hash-map/easy, arrays/easy, arrays+math/hard
  elementAppearingMoreThan25Percent,
  minimumOperationsToCollectElements,
  decodeTheArrayFromAdjacentXors,
  numberOfExcellentPairs,
  findTheNumberOfGoodPairsII,
  // batch 137 — arrays+math/medium, strings+hash-map/easy, arrays/medium
  maximumOr,
  permutationDifferenceBetweenTwoStrings,
  calculateTheSumOfDistances,
  // batch 138 — strings+dp/medium, arrays+binary-search/medium, arrays+hash-map/medium, arrays+math/easy, graph+tree/hard
  longestUnequalAdjacentGroupsSubsequenceII,
  zeroArrayTransformationII,
  minimumArrayChangesToMakeSubarraysDistinct,
  countAlmostEqualPairsI,
  findMinimumDiameterAfterMergingTwoTrees,
  // batch 139 — arrays+strings/easy, strings/easy, arrays+math+simulation/medium
  sortPeople,
  countWordsGivenPrefix,
  findMissingObservations,
  // batch 140 — arrays+math/easy, arrays+strings/easy, arrays/easy
  decryptXoredArray,
  countItemsMatchingARule,
  kidsWithTheGreatestNumberOfCandies,
  // batch 141 — math/hard, strings/hard+math, strings/hard, arrays+math/medium, arrays+math/hard, arrays+dp/hard
  reachingPoints,
  orderlyQueue,
  validNumber,
  minimumMovesToEqualArrayElementsII,
  superWashingMachines,
  numberOfSubmatricesThatSumToTarget,
  // batch 142 — arrays/easy, arrays+sorting/easy, strings+sliding-window/easy, arrays+simulation/easy, arrays+simulation/medium, arrays+math/medium, arrays+dp/hard
  maximumHeightOfATriangle,
  divideArrayMinCostI,
  countKConstraintSubstringsI,
  getFinalStateKMultiplicationI,
  findWinningPlayer,
  sumDigitDifferencesAllPairs,
  countOfMonotonicPairsI,
    // batch 141b — arrays/easy, arrays/medium, stack+arrays/hard, arrays+dp+binary-search/hard, arrays+graph/medium
  numberOfUnequalTriplets,
  maximizeSquareHoleArea,
  sumTotalStrengthOfWizards,
  maxEventsAttendedII,
  minimumOpsConvertNumber,
  // batch 145 — arrays/medium, arrays+backtracking/medium, arrays/hard, math/hard
  countMaxBitwiseOrSubsets,
  partitionKEqualSumSubsets,
  minOpsArrayEqualToTarget,
  consecutiveNumbersSum,
  // batch 147 — 3 new problems
  applyBitwiseOpsStringsEqual,
  minAreaCoverAllOnesI,
  maxTotalCostAlternatingSubarrays,
  // batch 146 — register 7 orphan problems
  reverseVowelsOfString,
  applyOpsToMakeStringEmpty,
  findAllRecipesFromSupplies,
  maxTotalDamageWithSpellCasting,
  minDominoRotations,
  reorderRoutesToCity,
  countBeautifulSubarrays,
  // batch 147 — arrays+math/medium, arrays+hash-map/medium, arrays/medium, arrays+math/medium
  findProductPivot,
  countSubarraysEqualBalance,
  longestArithSubarray,
  sumAllSubmatrixSums,

  // batch 144 — strings+stack/medium, arrays/medium, hash-map+simulation/medium
  minimumSwapsToMakeBalanced,
  findKthLargestXorCoordinateValue,
  tweetCountsPerFrequency,
  // batch 142b — arrays+stack/medium, arrays/medium, binary-indexed-tree+dp+arrays/hard
  beautifulTowersII,
  minimumNumberOfFlipsTOMakeBinaryGridPalindromicII,
  maximumBalancedSubsequenceSum,
  // batch 145b — strings+hash-map/medium, arrays+dp/medium, arrays+dp/medium
  findTheLongestSubstringContainingVowelsInEvenCounts,
  minimizeTheDifferenceBetweenTargetAndChosenElements,
  maximumNumberOfOperationsWithTheSameScoreII,
  // batch 146b — arrays+hash-map/medium, tree+graph/medium, arrays+math/medium, math+strings/medium, dp/medium
  kDivisibleElementsSubarrays,
  mostProfitablePath,
  maxGroupsEnteringNextRound,
  findPalindromeFixedLength,
  numberOfWaysKSteps,
  // batch 148 — math+dp/medium, dp/medium
  maxProductAfterCuttingRope,
  minimumPathSumTriangle,
  // batch 149 — arrays+binary-search/medium, arrays+dp/medium, arrays+heap/medium
  maximizeScoreNumbersInRanges,
  maximumEnergyBoostFromTwoDrinks,
  kthNearestObstacleQueries,
  // batch 149b — arrays/easy
  calculateAmountPaidInTaxes,
  // batch 153 — graph/medium, graph/medium, arrays/medium, arrays/medium, graph/medium
  minVerticesReachAllNodes,
  validPathInGrid,
  freqMostFreqElement,
  waysToMakeAFairArray,
  nearestExitFromEntranceMaze,
  // batch 152 — strings/easy, strings/medium, strings/easy, strings/medium, strings/easy
  countSegmentsInAString,
  repeatedDnaSequences,
  countVowelStringsRange,
  removeAllOccurrencesSubstring,
  findWordsFormedByChars,
  // batch 151 — 6 orphan problems (arrays/medium, arrays/medium, strings/medium, shortest-path/hard, BIT/medium, BIT+math/hard)
  allDivisionsHighestScore,
  convertArrayInto2D,
  replaceSubstringBalancedString,
  minimumCostValidPath,
  queriesPermutationWithKey,
  sumFlooredPairs,
  // batch 150 — tree/medium, arrays/easy, strings/medium, arrays/easy, strings/easy
  minimumTimeCollectAllApplesTree,
  maximumUnitsOnATruck,
  numberOfWaysToSplitAString,
  meanArrayAfterRemovingSomeElements,
  minimumOpsConvertTime,
  // batch 150b — easy/arrays+hash-map, easy/arrays+math, easy/arrays+hash-map, easy/arrays+matrix
  findLuckyNumberInMatrix,
  maximumProductOfThreeNumbers,
  findingThreeDigitEvenNumbers,
  differenceOnesZerosRowAndColumn,
  countWaysRearrangeSticks,
  // batch 151 — linked-list/medium, linked-list/hard, union-find/medium, union-find/medium, shortest-path/medium, binary-indexed-tree/medium
  swapPairsLinkedList,
  reverseNodesKGroup,
  minimumSpanningTreeWeight,
  unionFindDynamicConnectivity,
  bellmanFordShortestPaths,
  bitPrefixSumUpdates,
  // batch 153 — arrays/medium, graph/medium, heap+simulation/medium
  equalSumArraysMinOps,
  mapOfHighestPeak,
  numberOfOrdersInBacklog,
  // batch 151 — dp/hard, arrays/medium, strings+dp/medium, dp+bitset/hard
  findTheCountOfMonotonicPairsII,
  maximumStrengthOfAGroup,
  minimumNumberOfValidStringsToFormTargetI,
  maximumTotalRewardUsingOperationsII,
  // batch 152 — simulation/medium, strings+dp/medium, arrays+hash-map/medium, arrays+heap/medium
  minimumMovesToCaptureTheQueen,
  minimumSubstringPartitionEqualCharFreq,
  maximumGoodSubarraySum,
  maximalScoreAfterApplyingKOps,
  // batch 153b — linked-list×2, union-find, shortest-path, heap, simulation
  partitionLinkedListAroundValue,
  mergeKSortedLinkedLists,
  friendGroupsUnionFind,
  dijkstraSingleSourceShortestPath,
  kthLargestAfterEachInsertion,
  simulateTrafficLights,
  // batch 154 — heap+arrays/medium, strings/medium, math/medium, arrays+hash-map/medium
  maximumEarningsFromTaxi,
  findLongestSpecialSubstringThrice,
  minimumCostMakeArrayEqualindromic,
  identifyLargestOutlier,
  // batch 153 — arrays/easy, graph/hard
  lastVisitedIntegers,
  countVisitedNodesInADirectedGraph,
  // batch 154b — shortest-path/medium, binary-indexed-tree/medium, union-find/hard
  minEdgeReversalsToDestination,
  rangeUpdateRangeSumBit,
  findCriticalPseudoCriticalEdges,
  // batch 152b — arrays+math/medium, arrays+math+dp/medium, arrays+math/hard
  numberOfSubarraysHavingEvenProduct,
  greatestSumDivisibleByThree,
  constructProductMatrix,
  // batch 154c — trie/medium×3, trie/hard
  mapSumPairs,
  magicDictionary,
  shortEncodingOfWords,
  implementMagicTrieStream,
  // batch 156 — simulation/medium, graph/medium, graph/hard, dp+math/hard, binary-search+sliding-window/hard
  rotatingTheBox,
  maximumStarSumOfAGraph,
  buildAMatrixWithConditions,
  countOfIntegersWithDigitSum,
  applyOperationsToMaximizeFrequencyScore,
  // batch 155 — binary-search/medium, strings+hash-map/medium, arrays+math/medium, strings+two-pointers/medium, math/easy
  houseRobberIV,
  substringXorQueries,
  minimumRectanglesToCoverPoints,
  shortestWayToFormString,
  smallestNumberWithAllSetBits,
  // batch 154c — backtracking/hard, simulation/hard, simulation+binary-search/hard, hash-map+simulation/hard
  twentyFourGame,
  rangeModule,
  insertDeleteGetRandomDuplicatesAllowed,
  matchsticksToSquare,
  // batch 155r — dp/medium×2, dp/hard×2, arrays/medium, strings/hard, sliding-window/medium
  minimumScoreTriangulationPolygon,
  nonNegativeIntegersWithoutConsecutiveOnes,
  countWaysToBuildGoodStrings,
  restoreTheArray,
  numberOfWaysToFormATargetStringGivenADictionary,
  longestSubarrayWithAtMostKSum,
  // batch 155b — design/easy, design/medium×2, design/hard
  recentCounter,
  peekingIterator,
  flattenNestedListIterator,
  allOOneDataStructure,
  // batch 155c — graph/hard, binary-search+arrays/hard, arrays+dp/medium
  maximumEmployeesInvitedToMeeting,
  maximizeMinimumPoweredCity,
  minimumTimeRemoveCarsIllegalGoods,
  // batch 156 — strings/medium, trie+backtracking/hard, union-find/hard, shortest-path/medium
  camelcaseMatching,
  wordSquares,
  minimizeMalwareSpreadII,
  pathWithMaxProbability,
  // batch 156b — tree/easy×1, tree/medium×1
  averageOfLevelsInBinaryTree,
  allElementsInTwoBinarySearchTrees,
  // batch 156c
  findEdgesInShortestPaths,
  avoidFloodInTheCity,
  minimumTimeToAccomplishAllTasks,
  // batch 157 — trie×4, trie+design×1; simulation/easy, simulation/medium×2, graph/medium, arrays/medium×2
  implementTrieII,
  wordFilter,
  lexicographicalNumbers,
  kThSmallestInLexicographicOrder,
  designSearchAutocompleteSystem,
  theEmployeeThatWorkedOnTheLongestTask,
  checkKnightTourConfiguration,
  theNumberOfTheSmallestUnoccupiedChair,
  intervalsBetweenIdenticalElements,
  formArrayByConcatenatingSubarraysOfAnotherArray,
  // batch 161 — math/medium, arrays+dp/medium, math+bs/medium, tree/medium
  strictlyPalindromicNumber,
  sortingThreeGroups,
  uglyNumberIii,
  binaryTreeColoringGame,
  // batch 162 — 11 new problems from remote session
  collectingChocolates,
  countSubstringsWithFixedRatio,
  designBitset,
  frogJumpII,
  maximumAndValueOfNumbersInArray,
  minimumFlipsToMakeAOrBEqualToC,
  numberOfIntegersWithEvenDigitSum,
  partitioningIntoMinimumNumberOfDeciBinaryNumbers,
  splitStringIntoMaximumNumberOfUniqueSubstrings,
  tupleWithSameProduct,
  whereWillTheBallFall,
  // batch 163 — 7 new problems from latest remote session
  reformatDate,
  maximumValueAfterInsertion,
  recoverTheOriginalArray,
  constructSmallestNumberFromDiString,
  minimumDifferenceHighestLowestKScores,
  countPairsWithXorInARange,
  maximumXorWithElementFromArray,
  // batch 164 — 9 new problems from latest remote session (+ 5 missing solutions)
  amountOfNewAreaPaintedEachDay,
  convertNumberToHexadecimal,
  countSpecialNumbers,
  minimumDeletionsToMakeArrayBeautiful,
  minimumTimeToFinishTrips,
  pyramidTransitionNumbers,
  paintingAGridWithThreeDifferentColors,
  maximumSpendingAfterBuyingItems,
  numberOfGoodBinaryStrings,
  // batch 165 — 5 new problems from latest remote session
  bitwiseOrsOfSubarrays,
  checkIfAStringContainsAllBinaryCodesOfSizeK,
  convertToBase2,
  flipAndInvertImage,
  numberOfStepsToReduceNumberInBinaryRepresentation,
  // batch 166 — 5 new problems from latest remote session
  countLatticePointsInsideACircle,
  findingTheUsersActiveMinutes,
  numberOfVisiblePeopleInAQueue,
  primeInDiagonal,
  removeStonesToMinimizeTheTotal,
  // batch 167 — 4 new problems from latest remote session
  allPathsFromSourceToTarget,
  countUnreachablePairsOfNodesInUndirectedGraph,
  partitionArrayIntoDisjointIntervals,
  removeDuplicatesFromSortedArrayII,
  // batch 168 — 9 orphaned problems restored (lost registration during merges)
  minimumCostHomecomingRobotInGrid,
  sumOfScoresOfBuiltStrings,
  countOfIntegers,
  numberOfWaysToEarnPoints,
  uniqueLength3PalindromicSubsequences,
  minimumWhiteTilesAfterCoveringWithCarpets,
  specialPermutations,
  countSubstringsWithKFrequencyCharactersII,
  sumOfImbalanceNumbersOfAllSubarrays,
  // batch 163 — strings+arrays/medium, arrays+dp/hard, strings+dp/hard, arrays+graph/hard, arrays+dp/hard
  numberOfSameEndSubstrings,
  countFertilePyramidsInALand,
  maximumDeletionsOnAString,
  collectCoinsInATree,
  maximumAndSumOfArray,
  // batch 165 — design+stack/easy, arrays+stack/medium×2, arrays+stack+dp/medium, arrays+sliding-window/hard
  minimumStack,
  maximumChunksToMakeSorted,
  findTheMostCompetitiveSubsequence,
  minimumCostTreeFromLeafValues,
  shortestSubarrayWithSumAtLeastK,
  // batch 165 — dp/medium×2, tree/medium×3
  bestTimeBuySellStockWithFee,
  minimumCostForCuttingStick,
  pseudoPalindromicPathsInBinaryTree,
  stepByStepDirectionsFromBinaryTreeNode,
];
