import type { Problem } from '../types';

// arrays
import { problem as runningSum } from './running-sum';
import { problem as peakElementCount } from './peak-element-count';
import { problem as rotateLeftOne } from './rotate-left-one';

// strings
import { problem as vowelTally } from './vowel-tally';
import { problem as reverseWordsOrder } from './reverse-words-order';
import { problem as isPalindromeClean } from './is-palindrome-clean';

// hash-map
import { problem as firstUniqueChar } from './first-unique-char';
import { problem as twoSumIndices } from './two-sum-indices';
import { problem as mostFrequentValue } from './most-frequent-value';

// two-pointers
import { problem as reverseArrayInplace } from './reverse-array-inplace';
import { problem as sortedPairExists } from './sorted-pair-exists';
import { problem as mergeSortedLists } from './merge-sorted-lists';

// sliding-window
import { problem as maxWindowSum } from './max-window-sum';
import { problem as longestEqualRun } from './longest-equal-run';
import { problem as minWindowAverage } from './min-window-average';

// binary-search
import { problem as findTargetIndex } from './find-target-index';
import { problem as integerSquareRoot } from './integer-square-root';
import { problem as firstNotSmaller } from './first-not-smaller';

// stack
import { problem as balancedBrackets } from './balanced-brackets';
import { problem as removeAdjacentDupes } from './remove-adjacent-dupes';
import { problem as nextGreaterElement } from './next-greater-element';

// math
import { problem as digitSum } from './digit-sum';
import { problem as isPrimeNumber } from './is-prime-number';
import { problem as greatestCommonDivisor } from './greatest-common-divisor';

// arrays — medium
import { problem as missingRanges } from './missing-ranges';
import { problem as productExceptSelf } from './product-except-self';
import { problem as rotateMatrix } from './rotate-matrix';
import { problem as maxSubarrayKadane } from './max-subarray-kadane';

// strings — medium
import { problem as groupAnagrams } from './group-anagrams';
import { problem as longestSubstringNoRepeat } from './longest-substring-no-repeat';
import { problem as zigzagConversion } from './zigzag-conversion';

// hash-map — medium
import { problem as isomorphicStrings } from './isomorphic-strings';
import { problem as subarraySumK } from './subarray-sum-k';

// two-pointers — medium
import { problem as threeSum } from './three-sum';
import { problem as containerWithMostWater } from './container-with-most-water';
import { problem as removeDuplicatesSorted } from './remove-duplicates-sorted';

// sliding-window — medium
import { problem as flipKZeros } from './flip-k-zeros';
import { problem as maxSumKSubarray } from './max-sum-k-subarray';

// binary-search — medium
import { problem as searchRotatedSorted } from './search-rotated-sorted';
import { problem as findFirstLastPos } from './find-first-last-pos';
import { problem as kokoEatingBananas } from './koko-eating-bananas';

// stack — medium
import { problem as dailyTemperatures } from './daily-temperatures';
import { problem as decodeString } from './decode-string';
import { problem as minStack } from './min-stack';

// math — medium
import { problem as powerFunction } from './power-function';
import { problem as countPrimesSieve } from './count-primes-sieve';
import { problem as excelColumnNumber } from './excel-column-number';

// easy additions
import { problem as fizzBuzz } from './fizz-buzz';
import { problem as reverseInteger } from './reverse-integer';
import { problem as validAnagram } from './valid-anagram';
import { problem as climbingStairs } from './climbing-stairs';
import { problem as containsDuplicate } from './contains-duplicate';
import { problem as validPalindrome } from './valid-palindrome';
import { problem as bestTimeBuySell } from './best-time-buy-sell';
import { problem as missingNumber } from './missing-number';
import { problem as moveZeroes } from './move-zeroes';
import { problem as binarySearch } from './binary-search';
import { problem as singleNumber } from './single-number';
import { problem as majorityElement } from './majority-element';

export const problems: readonly Problem[] = [
  runningSum,
  peakElementCount,
  rotateLeftOne,
  vowelTally,
  reverseWordsOrder,
  isPalindromeClean,
  firstUniqueChar,
  twoSumIndices,
  mostFrequentValue,
  reverseArrayInplace,
  sortedPairExists,
  mergeSortedLists,
  maxWindowSum,
  longestEqualRun,
  minWindowAverage,
  findTargetIndex,
  integerSquareRoot,
  firstNotSmaller,
  balancedBrackets,
  removeAdjacentDupes,
  nextGreaterElement,
  digitSum,
  isPrimeNumber,
  greatestCommonDivisor,
  // arrays — medium
  missingRanges,
  productExceptSelf,
  rotateMatrix,
  maxSubarrayKadane,
  // strings — medium
  groupAnagrams,
  longestSubstringNoRepeat,
  zigzagConversion,
  // hash-map — medium
  isomorphicStrings,
  subarraySumK,
  // two-pointers — medium
  threeSum,
  containerWithMostWater,
  removeDuplicatesSorted,
  // sliding-window — medium
  flipKZeros,
  maxSumKSubarray,
  // binary-search — medium
  searchRotatedSorted,
  findFirstLastPos,
  kokoEatingBananas,
  // stack — medium
  dailyTemperatures,
  decodeString,
  minStack,
  // math — medium
  powerFunction,
  countPrimesSieve,
  excelColumnNumber,
  // easy additions
  fizzBuzz,
  reverseInteger,
  validAnagram,
  climbingStairs,
  containsDuplicate,
  validPalindrome,
  bestTimeBuySell,
  missingNumber,
  moveZeroes,
  binarySearch,
  singleNumber,
  majorityElement,
];
