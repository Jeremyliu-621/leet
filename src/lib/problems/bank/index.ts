import type { Problem } from '../types';

// arrays
import { problem as runningSum } from './running-sum';
import { problem as peakElementCount } from './peak-element-count';
import { problem as rotateLeftOne } from './rotate-left-one';
import { problem as maxSubarray } from './max-subarray';
import { problem as missingNumber } from './missing-number';
import { problem as containsDuplicate } from './contains-duplicate';

// strings
import { problem as vowelTally } from './vowel-tally';
import { problem as reverseWordsOrder } from './reverse-words-order';
import { problem as isPalindromeClean } from './is-palindrome-clean';
import { problem as compressString } from './compress-string';
import { problem as longestCommonPrefix } from './longest-common-prefix';

// hash-map
import { problem as firstUniqueChar } from './first-unique-char';
import { problem as twoSumIndices } from './two-sum-indices';
import { problem as mostFrequentValue } from './most-frequent-value';
import { problem as anagramCheck } from './anagram-check';
import { problem as wordFrequency } from './word-frequency';

// two-pointers
import { problem as reverseArrayInplace } from './reverse-array-inplace';
import { problem as sortedPairExists } from './sorted-pair-exists';
import { problem as mergeSortedLists } from './merge-sorted-lists';
import { problem as moveZeros } from './move-zeros';
import { problem as validSubsequence } from './valid-subsequence';

// sliding-window
import { problem as maxWindowSum } from './max-window-sum';
import { problem as longestEqualRun } from './longest-equal-run';
import { problem as minWindowAverage } from './min-window-average';
import { problem as longestUniqueWindow } from './longest-unique-window';

// binary-search
import { problem as findTargetIndex } from './find-target-index';
import { problem as integerSquareRoot } from './integer-square-root';
import { problem as firstNotSmaller } from './first-not-smaller';
import { problem as binarySearchRange } from './binary-search-range';

// stack
import { problem as balancedBrackets } from './balanced-brackets';
import { problem as removeAdjacentDupes } from './remove-adjacent-dupes';
import { problem as nextGreaterElement } from './next-greater-element';
import { problem as dailyTemperatures } from './daily-temperatures';

// math
import { problem as digitSum } from './digit-sum';
import { problem as isPrimeNumber } from './is-prime-number';
import { problem as greatestCommonDivisor } from './greatest-common-divisor';
import { problem as countDivisors } from './count-divisors';
import { problem as powerOfTwo } from './power-of-two';
import { problem as fibonacciNumber } from './fibonacci-number';

export const problems: readonly Problem[] = [
  runningSum,
  peakElementCount,
  rotateLeftOne,
  maxSubarray,
  missingNumber,
  containsDuplicate,
  vowelTally,
  reverseWordsOrder,
  isPalindromeClean,
  compressString,
  longestCommonPrefix,
  firstUniqueChar,
  twoSumIndices,
  mostFrequentValue,
  anagramCheck,
  wordFrequency,
  reverseArrayInplace,
  sortedPairExists,
  mergeSortedLists,
  moveZeros,
  validSubsequence,
  maxWindowSum,
  longestEqualRun,
  minWindowAverage,
  longestUniqueWindow,
  findTargetIndex,
  integerSquareRoot,
  firstNotSmaller,
  binarySearchRange,
  balancedBrackets,
  removeAdjacentDupes,
  nextGreaterElement,
  dailyTemperatures,
  digitSum,
  isPrimeNumber,
  greatestCommonDivisor,
  countDivisors,
  powerOfTwo,
  fibonacciNumber,
];
