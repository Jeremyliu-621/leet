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
import { problem as maximumTwinSumLinkedList } from './maximum-twin-sum-linked-list';
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
import { problem as findTheWinner } from './find-the-winner';
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
import { problem as applyOperations } from './apply-operations';
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
import { problem as applyOperationsToAnArray } from './apply-operations-to-an-array';
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
import { problem as minimumTimeToTypeWord } from './minimum-time-to-type-word';
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
import { problem as insertDeleteGetrandom } from './insert-delete-getrandom';
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
import { problem as maximumPerformanceOfTeam } from './maximum-performance-of-team';
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
import { problem as stoneGameVii } from './stone-game-vii';
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
  applyOperationsToAnArray,
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
  insertDeleteGetrandom,
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
  stoneGameVii,
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
];
