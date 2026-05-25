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
import { problem as letterCombinationsPhone } from './letter-combinations-phone';
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
import { problem as sudokuSolver } from './sudoku-solver';
import { problem as combinations } from './combinations';
import { problem as wordSearchII } from './word-search-ii';
import { problem as letterCasePermutation } from './letter-case-permutation';
import { problem as beautifulArrangement } from './beautiful-arrangement';
import { problem as expressionAddOperators } from './expression-add-operators';

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
  letterCombinationsPhone,
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
  // dynamic-programming — hard
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
  // graph + backtracking — hard
  wordSearchII,
  // arrays + backtracking — hard
  sudokuSolver,
  // arrays + backtracking — medium
  combinations,
  beautifulArrangement,
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
];
